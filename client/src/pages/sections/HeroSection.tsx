import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 py-16 px-4">
      <div className="flex flex-col items-center gap-4 w-full max-w-[708px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="relative w-fit bg-[linear-gradient(to_bottom_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_right_/_50%_50%_no-repeat] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-[50px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
            INNOVATING THE FUTURE
          </h1>

          <h2 className="w-full -mt-1 [font-family:'Montserrat',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-[60px]">
            OF SMART TECHNOLOGY
          </h2>
        </div>

        <p className="w-full max-w-[592px] font-[number:var(--undertitle-font-weight)] text-[#a2a5af] text-[length:var(--undertitle-font-size)] text-center leading-[var(--undertitle-line-height)] font-undertitle tracking-[var(--undertitle-letter-spacing)] [font-style:var(--undertitle-font-style)]">
          AMY Technology helps businesses thrive with cutting-edge AI,
          automation, and cloud innovations — building a smarter and more
          connected world
        </p>
      </div>

      <div className="inline-flex items-center gap-5">
        <Button className="h-auto px-5 py-2 rounded-lg bg-[linear-gradient(to_bottom_right,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_top_right_/_50%_50%_no-repeat] hover:opacity-90">
          <span className="w-[120px] [font-family:'Montserrat',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-6">
            EXPLORE
          </span>
        </Button>

        <Button
          variant="ghost"
          className="h-auto px-5 py-2 rounded-lg hover:bg-white/10"
        >
          <span className="w-[120px] [font-family:'Montserrat',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-6">
            CONTACT US
          </span>
        </Button>
      </div>
    </section>
  );
};
