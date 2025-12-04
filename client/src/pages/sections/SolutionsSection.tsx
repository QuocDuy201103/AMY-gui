import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const statsData = [
  {
    value: "500+",
    label: "Projects Completed",
  },
  {
    value: "50+",
    label: "Blobal Clients",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee",
  },
];

export const SolutionsSection = (): JSX.Element => {
  return (
    <section className="relative w-full pt-16 pb-10 mt-24 mb-24">
      <img
        className="absolute top-[-140px] sm:top-[-180px] w-full h-[500px] sm:h-[900px] object-cover"
        alt="Group"
        src="/figmaAssets/group-66-1.png"
      />

      <div className="relative flex w-full max-w-[1200px] mx-auto items-center justify-center px-4 sm:px-[100px] pt-[9rem] pb-10">
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-[9px]">
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              <Card className="w-full sm:w-[235px] border-0 shadow-none bg-transparent">
                <CardContent className="flex items-center justify-center gap-4 sm:gap-6 p-4 sm:p-5">
                  <div className="inline-flex flex-col items-center gap-1 sm:gap-2">
                    <div className="[font-family:'Montserrat',Helvetica] font-bold text-white sm:text-[#030f34] text-2xl sm:text-[32px] text-center leading-[36px] sm:leading-[46px]">
                      {stat.value}
                    </div>
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-white sm:text-[#030f35] text-xs sm:text-sm text-center leading-5">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
              {index < statsData.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden sm:block w-0.5 h-[46px] bg-[#2b31461a] rounded-[100px]"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
