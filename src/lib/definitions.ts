import { z } from "zod";
import { startOfToday } from "date-fns";

const today = startOfToday();

export const quoteFormSchema = z
  .object({
    name: z.string().min(2),
    email: z.string().email().min(2),
    message: z
      .string()
      .max(350, { message: "Message cannot be longer than 350 characters" }),
    startdate: z.date().min(today, { message: "Date cannot be older" }),
    enddate: z.date().min(today, { message: "Date cannot be older" }),
    phone: z
      .string()
      .regex(/^\+?\d{9,}$/, {
        message: "Phone number is not valid!!",
      })
      .transform((val) => val.replace(/\D/g, "")),
    // recaptchaToken: z.string(),
  })
  .superRefine((values, ctx) => {
    if (values.enddate < values.startdate) {
      ctx.addIssue({
        code: "custom",
        message: "End date cannot be earlier than start date",
        path: ["enddate"],
      });
    }
  });

export const formSchema = z.object({
  name: z.string().min(1, { message: "Cannot be empty" }),
  email: z.string().email().min(1, { message: "Cannot be empty" }),
  contact: z
    .string()
    .regex(/^\+?\d{9,}$/, {
      message: "Phone number is not valid!!",
    })
    .transform((val) => val.replace(/\D/g, "")),
  message: z
    .string()
    .max(350, { message: "Message cannot be longer than 350 characters" }),
});
