import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-20 py-20">
      <div className="flex flex-col items-center gap-4 w-full max-w-[1000px] px-4">
        <div className="flex flex-col items-center w-full">
          <h2 className="font-AMY-title-thin font-[number:var(--AMY-title-thin-font-weight)] text-white text-[length:var(--AMY-title-thin-font-size)] text-center tracking-[var(--AMY-title-thin-letter-spacing)] leading-[var(--AMY-title-thin-line-height)] whitespace-nowrap [font-style:var(--AMY-title-thin-font-style)]">
            LET&apos;S
          </h2>

          <h1 className="bg-[linear-gradient(to_bottom_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_right_/_50%_50%_no-repeat] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-AMY-title font-[number:var(--AMY-title-font-weight)] text-transparent text-[length:var(--AMY-title-font-size)] text-center tracking-[var(--AMY-title-letter-spacing)] leading-[var(--AMY-title-line-height)] whitespace-nowrap [font-style:var(--AMY-title-font-style)]">
            START YOUR TRANSFORMATION
          </h1>
        </div>

        <p className="font-undertitle font-[number:var(--undertitle-font-weight)] text-[#a2a5af] text-[length:var(--undertitle-font-size)] text-center tracking-[var(--undertitle-letter-spacing)] leading-[var(--undertitle-line-height)] [font-style:var(--undertitle-font-style)]">
          Ready for your next phase of growth? <br />
          Connect with our experts to discuss tailored AI and digital solutions
          for your enterprise.
        </p>
      </div>

      <div className="flex flex-col w-full max-w-[680px] items-start gap-2.5 px-4">
        <div className="flex items-start gap-3 w-full">
          <div className="flex-1">
            <Input
              placeholder="Full Name"
              className="bg-white text-[#4e5260] text-xs [font-family:'Montserrat',Helvetica] font-normal h-auto px-4 py-3"
            />
          </div>

          <div className="flex-1">
            <Input
              placeholder="Email"
              type="email"
              className="bg-white text-[#4e5260] text-xs [font-family:'Montserrat',Helvetica] font-normal h-auto px-4 py-3"
            />
          </div>
        </div>

        <Input
          placeholder="Company"
          className="bg-white text-[#4e5260] text-xs [font-family:'Montserrat',Helvetica] font-normal h-auto px-4 py-3 w-full"
        />

        <div className="relative w-full">
          <Textarea
            placeholder="Tell us about your project..."
            className="bg-white text-[#4e5261] text-xs [font-family:'Montserrat',Helvetica] font-normal min-h-[179px] px-4 py-3 w-full resize-none"
          />
        </div>

        <div className="flex items-center gap-3 py-2.5">
          <Checkbox id="newsletter" className="w-6 h-6" />
          <label
            htmlFor="newsletter"
            className="[font-family:'Quicksand',Helvetica] font-normal text-[#a2a5af] text-[13px] tracking-[0] leading-5 cursor-pointer"
          >
            Subscribe to our newsletter for AI &amp; Digital Transformation
            updates
          </label>
        </div>

        <Button className="w-full h-auto px-5 py-2 rounded-lg bg-[linear-gradient(to_bottom_right,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_top_right_/_50%_50%_no-repeat] hover:opacity-90">
          <span className="[font-family:'Montserrat',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-6">
            SEND
          </span>
        </Button>
      </div>
    </section>
  );
};
