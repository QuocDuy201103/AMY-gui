import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col w-full items-center gap-6 py-16 px-4 mt-32 sm:mt-40 overflow-hidden">
      {/* Earth background image behind hero content */}
      <img
        src="/figmaAssets/earth.png"
        alt="Earth background"
        className="pointer-events-none select-none absolute -bottom-32 sm:-bottom-40 right-1/2 sm:right-0 translate-x-1/2 sm:translate-x-0 w-[320px] sm:w-[520px] opacity-70 z-[-1]"
      />

      <div className="flex flex-col items-center gap-4 w-full max-w-[708px]">
        <div className="flex flex-col items-center w-full">
          <h1
            className="relative w-full max-w-[320px] sm:max-w-none font-bold text-[32px] sm:text-[50px] text-center tracking-[0] leading-[42px] sm:leading-[60px]"
            style={{
              fontFamily: "'Montserrat', Helvetica",
              backgroundImage:
                "linear-gradient(to top right, rgba(78,216,255,1) 0%, rgba(45,132,240,1) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            INNOVATING THE FUTURE
          </h1>

          <h2 className="w-full max-w-[320px] sm:max-w-none -mt-1 [font-family:'Montserrat',Helvetica] font-bold text-white text-3xl sm:text-5xl text-center tracking-[0] leading-[42px] sm:leading-[60px]">
            OF SMART TECHNOLOGY
          </h2>
        </div>

        <p className="w-full max-w-[600px] font-[number:var(--undertitle-font-weight)] text-[#a2a5af] text-sm sm:text-[length:var(--undertitle-font-size)] text-center leading-relaxed sm:leading-[var(--undertitle-line-height)] font-undertitle tracking-[var(--undertitle-letter-spacing)] [font-style:var(--undertitle-font-style)]">
          AMY Technology helps businesses thrive with cutting-edge AI,
          automation, and cloud innovations — building a smarter and more
          connected world
        </p>
      </div>

      <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
        <Button
          className="h-auto px-5 py-2 rounded-lg hover:opacity-90 border-0 shadow-none"
          style={{
            backgroundImage:
              "linear-gradient(to top right, rgba(0,198,255,1) 0%, rgba(0,114,255,1) 100%)",
          }}
        >
          <span className="w-[120px] [font-family:'Montserrat',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-6">
            EXPLORE
          </span>
        </Button>

        <Button
          variant="ghost"
          className="h-auto px-5 py-2 hover:bg-white/10 border border-[#004db6] rounded-lg shadow-none"
        >
          <span className="w-[120px] [font-family:'Montserrat',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-6">
            CONTACT US
          </span>
        </Button>
      </div>
    </section>
  );
};
