import React from "react";
import { ChooseTechnologySection } from "./sections/ChooseTechnologySection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { SolutionsSection } from "./sections/SolutionsSection";
import { TransformationSection } from "./sections/TransformationSection";
import { NavigationHeader } from "./sections/NavigationHeader";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="relative border-none shadow-none w-full min-h-screen overflow-hidden bg-[linear-gradient(to_bottom,#001043_0%,#00071d_53.5%)]">
      <img
        className="absolute top-[330px] left-1/2 -translate-x-1/2 w-[1040px] h-[546px] pointer-events-none"
        alt="Earth"
        src="/figmaAssets/earth.png"
      />

      <img
        className="absolute top-[4700px] left-0 w-[640px] h-[1082px] pointer-events-none"
        alt="Group"
        src="/figmaAssets/group-78.png"
      />

      <img
        className="absolute bottom-[-268px] left-1/2 -translate-x-1/2 !max-w-[3440px] w-[2440px] h-[500px] pointer-events-none"
        alt="Group"
        src="/figmaAssets/group-66.png"
      />

      <NavigationHeader />

      <HeroSection />

      <SolutionsSection />

      <ChooseTechnologySection />

      <IndustriesSection />

      <TransformationSection />

      <ContactSection />

      <FooterSection />

      <HeaderSection />
    </div>
  );
};
