import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(5, "Please add a short note"),
  newsletter: z.boolean().optional().default(false),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const FooterSection = (): JSX.Element => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      message: "",
      newsletter: false,
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed with status ${res.status}`);
      }

      toast({
        title: "Message sent",
        description: "We will contact you as soon as possible.",
      });
      reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to send message.";
      toast({
        title: "Submission failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col w-full items-center gap-20 py-20 mt-32">
      <div className="flex flex-col items-center gap-4 w-full max-w-[1000px] px-4">
        <div className="flex flex-col items-center w-full">
          <h2 className="font-AMY-title-thin font-[number:var(--AMY-title-thin-font-weight)] text-white text-[length:var(--AMY-title-thin-font-size)] text-center tracking-[var(--AMY-title-thin-letter-spacing)] leading-[var(--AMY-title-thin-line-height)] whitespace-nowrap [font-style:var(--AMY-title-thin-font-style)]">
            LET&apos;S
          </h2>

          <h1
            className="text-sm font-AMY-title font-[number:var(--AMY-title-font-weight)] md:text-[length:var(--AMY-title-font-size)] text-[28px] text-center tracking-[var(--AMY-title-letter-spacing)] leading-[var(--AMY-title-line-height)] whitespace-nowrap [font-style:var(--AMY-title-font-style)]"
            style={{
              backgroundImage:
                "linear-gradient(to top right, rgba(78,216,255,1) 0%, rgba(45,132,240,1) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            START YOUR TRANSFORMATION
          </h1>
        </div>

        <p className="font-undertitle font-[number:var(--undertitle-font-weight)] text-[#a2a5af] text-[length:var(--undertitle-font-size)] text-center tracking-[var(--undertitle-letter-spacing)] leading-[var(--undertitle-line-height)] [font-style:var(--undertitle-font-style)]">
          Ready for your next phase of growth? <br />
          Connect with our experts to discuss tailored AI and digital solutions
          for your enterprise.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-[680px] items-start gap-2.5 px-4"
      >
        <div className="flex items-start gap-3 w-full">
          <div className="flex-1 space-y-1">
            <Input
              placeholder="Full Name"
              className="bg-white text-[#4e5260] text-xs [font-family:'Montserrat',Helvetica] font-normal h-auto px-4 py-3"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName.message}</p>
            )}
          </div>

          <div className="flex-1 space-y-1">
            <Input
              placeholder="Email"
              type="email"
              className="bg-white text-[#4e5260] text-xs [font-family:'Montserrat',Helvetica] font-normal h-auto px-4 py-3"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-1 w-full">
          <Input
            placeholder="Company"
            className="bg-white text-[#4e5260] text-xs [font-family:'Montserrat',Helvetica] font-normal h-auto px-4 py-3 w-full"
            {...register("company")}
          />
        </div>

        <div className="relative w-full space-y-1">
          <Textarea
            placeholder="Tell us about your project..."
            className="bg-white text-[#4e5261] text-xs [font-family:'Montserrat',Helvetica] font-normal min-h-[179px] px-4 py-3 w-full resize-none"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message.message}</p>
          )}
        </div>

        <div className="flex items-center gap-3 py-2.5">
          <Controller
            control={control}
            name="newsletter"
            render={({ field }) => (
              <Checkbox
                id="newsletter"
                className="w-6 h-6 border-[#a2a5af]"
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
              />
            )}
          />
          <label
            htmlFor="newsletter"
            className="[font-family:'Quicksand',Helvetica] font-normal text-[#a2a5af] text-[13px] tracking-[0] leading-5 cursor-pointer"
          >
            Subscribe to our newsletter for AI &amp; Digital Transformation
            updates
          </label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-auto px-5 py-2 rounded-lg hover:opacity-90 border-0 shadow-none"
          style={{
            backgroundImage:
              "linear-gradient(to top right, rgba(0,198,255,1) 0%, rgba(0,114,255,1) 100%)",
          }}
        >
          <span className="[font-family:'Montserrat',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-6">
            {isSubmitting ? "Sending..." : "SEND"}
          </span>
        </Button>
      </form>
    </section>
  );
};
