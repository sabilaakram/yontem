// // 'use server'

// // import { z } from "zod"

// // const formSchema = z.object({
// //   fullName: z.string().min(2, {
// //     message: "Full name must be at least 2 characters.",
// //   }),
// //   email: z.string().email({
// //     message: "Please enter a valid email address.",
// //   }),
// //   subject: z.string().min(5, {
// //     message: "Subject must be at least 5 characters.",
// //   }),
// //   message: z.string().min(10, {
// //     message: "Message must be at least 10 characters.",
// //   }),
// // })

// // export type FormData = z.infer<typeof formSchema>

// // export async function sendMessage(formData: FormData) {
// //   // Validate form data
// //   const result = formSchema.safeParse(formData)
  
// //   if (!result.success) {
// //     return { error: result.error.format() }
// //   }

// //   // Simulate API delay
// //   await new Promise(resolve => setTimeout(resolve, 1000))

// //   // Here you would typically send the message to your backend
// //   // For now, we'll just return a success message
// //   return { success: true }
// // }


// 'use server'

// import { z } from "zod"
// import nodemailer from "nodemailer"
// import dotenv from "dotenv"

// dotenv.config() // Ensure you load environment variables

// const formSchema = z.object({
//   fullName: z.string().min(2, {
//     message: "Full name must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   subject: z.string().min(5, {
//     message: "Subject must be at least 5 characters.",
//   }),
//   message: z.string().min(10, {
//     message: "Message must be at least 10 characters.",
//   }),
// })

// export type FormData = z.infer<typeof formSchema>

// export async function sendMessage(formData: FormData) {
//   // Validate form data
//   const result = formSchema.safeParse(formData)
  
//   if (!result.success) {
//     return { error: result.error.format() }
//   }

//   // Create a Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: "Gmail", // Or use another provider like "SendGrid", "Outlook", etc.
//     auth: {
//       user: process.env.EMAIL_USER, // Your email address
//       pass: process.env.EMAIL_PASS, // Your email password or app password
//     },
//   })

//   // Email details
//   const mailOptions = {
//     from: `"Website Contact" <${process.env.EMAIL_USER}>`, // Sender address
//     to: process.env.RECEIVER_EMAIL, // Change this to your recipient email
//     subject: formData.subject,
//     html: `
//       <h2>New Contact Form Submission</h2>
//       <p><strong>Name:</strong> ${formData.fullName}</p>
//       <p><strong>Email:</strong> ${formData.email}</p>
//       <p><strong>Subject:</strong> ${formData.subject}</p>
//       <p><strong>Message:</strong> ${formData.message}</p>
//     `,
//   }

//   try {
//     // Send the mail
//     await transporter.sendMail(mailOptions)
//     return { success: true }
//   } catch (error) {
//     console.error("Error sending email:", error)
//     return { error: "Failed to send the message. Please try again later." }
//   }
// }


"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  recaptchaToken: z.string().optional(),
})

export type FormData = z.infer<typeof formSchema>

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string) {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
        response: token,
      }),
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return false
  }
}

export async function sendMessage(formData: FormData) {
  // Validate form data
  const result = formSchema.safeParse(formData)

  if (!result.success) {
    return { success: false, error: result.error.format() }
  }

  // Verify reCAPTCHA if token is provided
  if (formData.recaptchaToken) {
    const isValidRecaptcha = await verifyRecaptcha(formData.recaptchaToken)
    if (!isValidRecaptcha) {
      return {
        success: false,
        error: "reCAPTCHA verification failed. Please try again.",
      }
    }
  }

  try {
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Contact Form: ${formData.subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: formData.email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true }
  } catch (error) {
    console.error("Email sending error:", error)
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    }
  }
}

