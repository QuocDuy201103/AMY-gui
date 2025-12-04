import React from "react";
import { ChooseTechnologySection } from "./sections/ChooseTechnologySection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { SolutionsSection } from "./sections/SolutionsSection";
import { TransformationSection } from "./sections/TransformationSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[linear-gradient(180deg,rgba(0,16,67,1)_0%,rgba(0,7,29,1)_50%)]">
      <img
        className="absolute top-[360px] left-1/2 -translate-x-1/2 w-[1108px] h-[542px] pointer-events-none"
        alt="Earth"
        src="/figmaAssets/earth.png"
      />

      <img
        className="absolute top-[4521px] left-0 w-[581px] h-[1082px] pointer-events-none"
        alt="Group"
        src="/figmaAssets/group-78.png"
      />

      <img
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-[316px] pointer-events-none"
        alt="Group"
        src="/figmaAssets/group-66.png"
      />

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
