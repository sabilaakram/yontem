// "use client"

// import { useState, useRef } from "react"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"
// import { Button } from "@/components/ui/button"
// import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/components/ui/use-toast"
// import { type FormData, sendMessage } from "@/lib/actions"

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

// export function ContactForm() {
//   const [isLoading, setIsLoading] = useState(false)
//   const { toast } = useToast()
//   // const recaptchaRef = useRef<ReCAPTCHA>(null)

//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       fullName: "",
//       email: "",
//       subject: "",
//       message: "",
//     },
//   })

//   async function onSubmit(data: FormData) {
//     try {
//       setIsLoading(true)
//       await sendMessage(data)
//       toast({
//         title: "Message sent!",
//         description: "We'll get back to you as soon as possible.",
//       })
//       form.reset()
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: "Something went wrong. Please try again.",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="w-full max-w-md mx-auto p-[50px] space-y-6 lg:bg-white md:bg-white bg-[#161C2D] border rounded-[8px] ">
//       <div className="space-y-2">
//         <h1 className="text-[32px] leading-[40px] font-[500] font-gilroy text-white lg:text-[#00051B] md:text-[#00051B] ">
//           Send a Message
//         </h1>
//         <p className="font-gilroy text-[16px] leading-[24px] font-medium text-[#6D6E70]">
//           We have the right solution to fit your unique travel needs.
//         </p>
//       </div>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           <FormField
//             control={form.control}
//             name="fullName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     placeholder="Full name"
//                     {...field}
//                     className="bg-white md:bg-transparent lg:bg-transparent font-gilroy text-[16px] leading-[24px] font-[400] text-[#82869A]"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     placeholder="Email address"
//                     type="email"
//                     {...field}
//                     className="bg-white md:bg-transparent lg:bg-transparent font-gilroy text-[16px] leading-[24px] font-[400] text-[#82869A]"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="subject"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     placeholder="Subject"
//                     {...field}
//                     className="bg-white md:bg-transparent lg:bg-transparent font-gilroy text-[16px] leading-[24px] font-[400] text-[#82869A]"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="message"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Textarea
//                     placeholder="Message"
//                     className=" bg-white md:bg-transparent lg:bg-transparent min-h-[120px] font-gilroy text-[16px] leading-[24px] font-[400] text-[#82869A]"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button
//             type="submit"
//             className="px-6 py-3 bg-red-500 hover:bg-red-600 font-gilroy text-[18px] leading-[32px] font-[400]"
//             disabled={isLoading}
//           >
//             {isLoading ? "Sending..." : "Send message"}
//           </Button>
//         </form>
//       </Form>
//     </div>
//   )
// }

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Link from "next/link";
// import { FaPhone, FaLocationDot } from "react-icons/fa6";
// import { IoMail } from "react-icons/io5";
import { handleContactForm, verifyRecaptcha } from "@/lib/actions";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { formSchema } from "@/lib/definitions";
import { useAction } from "next-safe-action/hooks";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  //   const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      // company: "",
      // location: "",
      message: "",
      contact: "",
    },
  });

  const { status, execute, result } = useAction(handleContactForm, {
    onSuccess(data) {
      if (data.data?.success) {
        toast.success(data.data.message); // ✅ Success toast
        form.reset();
        setIsSubmitting(false);
      }

      if (data.data?.error) {
        toast.error(data.data.error); // ✅ Error toast
        setIsSubmitting(false);
      }
    },
    onError(error) {
      if (error.error.serverError) {
        toast.error("An error occurred on the server"); // ✅ Server error toast
      }
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!executeRecaptcha) {
      console.error("Execute recaptcha not yet available");
      return;
    }
    try {
      setIsSubmitting(true);
      const recaptchaToken = await executeRecaptcha("quote_form");
      const recaptchaResult = await verifyRecaptcha({ recaptchaToken });

      if (!recaptchaToken || !recaptchaResult?.data?.success) {
        toast.error("reCAPTCHA verification failed"); // ✅ reCAPTCHA error toast
        return;
      }
      execute(values);
    } catch (error) {
      console.error("reCAPTCHA execution failed:", error);
      toast.error("Failed to verify reCAPTCHA. Please try again."); // ✅ Generic error toast
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-[50px] space-y-6 lg:bg-white md:bg-white bg-[#161C2D] border rounded-[8px] ">
      <div className="space-y-2">
        <h1 className="text-[32px] leading-[40px] font-[500] font-gilroy text-white lg:text-[#00051B] md:text-[#00051B] ">
          Send a Message
        </h1>
        <p className="font-gilroy text-[16px] leading-[24px] font-medium text-[#6D6E70]">
          We have the right solution to fit your unique travel needs.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" ref={formRef}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Full name"
                    {...field}
                    required  
                    className="bg-white md:bg-transparent lg:bg-transparent font-gilroy text-[16px] leading-[24px] font-[400] text-[#82869A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email address"
                    type="email"
                    {...field}
                    required
                    className="bg-white md:bg-transparent lg:bg-transparent font-gilroy text-[16px] leading-[24px] font-[400] text-[#82869A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Contact Number"
                    type="tel"
                    {...field}
                    required
                    className="bg-white md:bg-transparent lg:bg-transparent font-gilroy text-[16px] leading-[24px] font-[400] text-[#82869A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className=" bg-white md:bg-transparent lg:bg-transparent min-h-[120px] font-gilroy text-[16px] leading-[24px] font-[400] text-[#82869A]"
                    {...field}
                    required
                    maxLength={350}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={status === "executing" || isSubmitting}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 font-gilroy text-[18px] leading-[32px] font-[400]"
          >
            {status === "executing" || isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </Form>

      <div className="w-full rounded-sm bg-primary-red py-8 flex justify-center items-center lg:max-w-xs">
       
      </div>
    </div>
  );
}



export default ContactForm;
