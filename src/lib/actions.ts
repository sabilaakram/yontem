'use server'

import { z } from "zod"

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
})

export type FormData = z.infer<typeof formSchema>

export async function sendMessage(formData: FormData) {
  // Validate form data
  const result = formSchema.safeParse(formData)
  
  if (!result.success) {
    return { error: result.error.format() }
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Here you would typically send the message to your backend
  // For now, we'll just return a success message
  return { success: true }
}

