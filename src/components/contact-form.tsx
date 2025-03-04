"use client";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import ReCAPTCHA from "react-google-recaptcha";

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
});

type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      // Get reCAPTCHA token
      const recaptchaToken = await recaptchaRef.current?.executeAsync();
      recaptchaRef.current?.reset();

      // Add token to form data
      const formDataWithToken = {
        ...data,
        recaptchaToken: recaptchaToken || undefined,
      };

      console.log('Sending data:', formDataWithToken);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithToken),
      });

      const result = await response.json();

      console.log('Response from API:', result);

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: typeof result.error === 'string' ? result.error : "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Full name"
                    {...field}
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
                    className="bg-white md:bg-transparent lg:bg-transparent font-gilroy text-[16px] leading-[24px] font-[400] text-[#82869A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Subject"
                    {...field}
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Invisible reCAPTCHA */}
          <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} />

          <Button
            type="submit"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 font-gilroy text-[18px] leading-[32px] font-[400]"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}