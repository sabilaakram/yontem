"use server";

import Mail from "nodemailer/lib/mailer";
import { createTransport, Transporter } from "nodemailer";
import { formSchema, quoteFormSchema } from "@/lib/definitions";
import { action } from "@/lib/safe-action";
import { cookies } from "next/headers";
import { z } from "zod";
import { renderQuoteEmailTemplate } from "@/components/emails/QuoteEmailTemplate";
import { renderContactEmailTemplate } from "@/components/emails/ContactEmailTemplate";



//Function for nodemailer transporter
function getNodemailerTransporter(): Transporter {
  return createTransport({
    host: process.env.NODEMAILER_HOST as string,
    port: 587,
    secure: false,
    tls: { ciphers: "SSLv3" },
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });
}

//Verify recaptcha token
export const verifyRecaptcha = action
  .schema(z.object({ recaptchaToken: z.string() }))
  .action(async ({ parsedInput: { recaptchaToken } }) => {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );
    const captcha = await response.json();
    return { success: captcha.success };
  });

export const sendQuoteFormData = action
  .schema(quoteFormSchema)
  .action(
    async ({
      parsedInput: {
        email,
        enddate,
        message,
        name,
        phone,
        startdate,
      },
    }) => {
      if (
        !email ||
        !enddate ||
        !name ||
        !phone ||
        !startdate
      ) {
        console.error("Missing required fields:", {
          email,
          enddate,
          name,
          phone,
          startdate,
        });
        return { error: "Something went wrong" };
      }

      const emailHtml = await renderQuoteEmailTemplate({
        name,
        email,
        enddate,
        message,
        phone,
        startdate,
      });

      //Nodemailer config
      const transporter = getNodemailerTransporter();

      const mailoptions: Mail.Options = {
        from: process.env.NODEMAILER_USERNAME,
        to: process.env.NODEMAILER_EMAILTO,
        subject: `New Quote from ${name}`,
        html: emailHtml,
      };

      const sendMailPromise = () => {
        return new Promise<void>((resolve, reject) => {
          transporter.sendMail(mailoptions, function (err) {
            if (!err) {
              resolve();
            } else {
              reject(new Error(err.message));
            }
          });
        });
      };

      try {
        await sendMailPromise();
        return { success: true, message: "Form submitted successfully" };
      } catch (error) {
        return {
          success: false,
          message: `An error occurred: ${(error as Error).message}`,
        };
      }
    }
  );

export const handleContactForm = action
  .schema(formSchema)
  .action(
    async ({
      parsedInput: { email, contact, message, name },
    }) => {
      if (!name || !email || !contact) return { error: "Something went wrong" };
      const emailHtml = await renderContactEmailTemplate({
        name,
        email,
        message,
        contact,
      });

      //Nodemailer config
      const transporter = getNodemailerTransporter();

      const mailoptions: Mail.Options = {
        from: process.env.NODEMAILER_USERNAME,
        to: process.env.NODEMAILER_EMAILTO,
        subject: `Message from ${name} ${email}`,
        html: emailHtml,
      };

      const sendMailPromise = () => {
        return new Promise<void>((resolve, reject) => {
          transporter.sendMail(mailoptions, function (err) {
            if (!err) {
              resolve();
            } else {
              reject(new Error(err.message));
            }
          });
        });
      };

      try {
        await sendMailPromise();
        return { success: true, message: "Form submitted successfully" };
      } catch (error) {
        return {
          success: false,
          message: `An error occurred: ${(error as Error).message}`,
        };
      }
    }
  );
