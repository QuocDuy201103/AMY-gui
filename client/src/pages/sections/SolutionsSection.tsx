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
    <section className="relative w-full py-20">
      <img
        className="absolute top-[-85px] left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[651px] object-cover"
        alt="Group"
        src="/figmaAssets/group-66-1.png"
      />

      <div className="relative flex w-full max-w-[1200px] mx-auto items-start justify-center px-[100px] py-5">
        <div className="inline-flex items-center gap-[9px]">
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              <Card className="w-[235px] border-0 shadow-none bg-transparent">
                <CardContent className="flex items-center justify-center gap-6 p-5">
                  <div className="inline-flex flex-col items-center gap-2">
                    <div className="self-stretch [font-family:'Montserrat',Helvetica] font-bold text-[#030f34] text-[32px] text-center tracking-[0] leading-[46px]">
                      {stat.value}
                    </div>
                    <div className="self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#030f35] text-sm tracking-[0] leading-5 text-center">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
              {index < statsData.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="w-0.5 h-[46px] bg-[#2b31461a] rounded-[100px]"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
