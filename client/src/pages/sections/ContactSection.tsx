import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    icon: "/figmaAssets/union-2.svg",
    title: "Finance & Banking",
    description:
      "Driving FinTech evolution through secure, compliant solutions and predictive analytics for risk and fraud detection.",
    iconWrapper: true,
  },
  {
    icon: "/figmaAssets/icon-5.svg",
    title: "Healthcare",
    description:
      "Implementing AI-powered diagnostics and cloud-based EHR/EMR platforms for patient-centered digital health innovations.",
    iconWrapper: false,
  },
  {
    icon: "/figmaAssets/union-4.svg",
    title: "Retail & E-commerce",
    description:
      "Enabling hyper-personalized customer experiences and smart retail operations via advanced machine learning and automation.",
    iconWrapper: true,
  },
  {
    icon: "/figmaAssets/icon-3.svg",
    title: "Manufacturing",
    description:
      "Deploying Industrial IoT (IIoT) and Robotic Process Automation (RPA) for autonomous and smart manufacturing environments.",
    iconWrapper: false,
  },
  {
    icon: "/figmaAssets/icon-4.svg",
    title: "Logistics & Supply Chain",
    description:
      "Optimizing supply chain with AI-driven forecasting and real-time visibility platforms for end-to-end logistics solutions.",
    iconWrapper: false,
  },
  {
    icon: "/figmaAssets/icon-6.svg",
    title: "Telecommunications",
    description:
      "Developing 5G/Edge infrastructure solutions and intelligent network optimization algorithms for next-generation telecom.",
    iconWrapper: false,
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-20 px-4">
      <header className="flex flex-col max-w-[708px] items-center gap-4">
        <h2 className="self-stretch mt-[-1.00px] bg-[linear-gradient(to_bottom_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_right_/_50%_50%_no-repeat] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-AMY-title font-[number:var(--AMY-title-font-weight)] text-transparent text-[length:var(--AMY-title-font-size)] text-center tracking-[var(--AMY-title-letter-spacing)] leading-[var(--AMY-title-line-height)] [font-style:var(--AMY-title-font-style)]">
          INDUSTRIES WE SERVE
        </h2>

        <p className="max-w-[610px] font-content-13 font-[number:var(--content-13-font-weight)] text-[#a2a5af] text-[length:var(--content-13-font-size)] text-center tracking-[var(--content-13-letter-spacing)] leading-[var(--content-13-line-height)] [font-style:var(--content-13-font-style)]">
          Delivering specialized solutions across diverse industry verticals
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1000px]">
        {industries.map((industry, index) => (
          <Card
            key={index}
            className="flex flex-col items-center gap-9 px-0 py-9 rounded-2xl border-0"
          >
            <CardContent className="flex flex-col items-center gap-9 p-0 w-full">
              <div className="flex w-[252.22px] h-[26px] items-center justify-center">
                {industry.iconWrapper ? (
                  <div className="flex items-center justify-center">
                    <img
                      className="h-[26px] max-w-[35.75px] object-contain"
                      alt={`${industry.title} icon`}
                      src={industry.icon}
                    />
                  </div>
                ) : (
                  <img
                    className="w-[252.22px] h-[26px]"
                    alt={`${industry.title} icon`}
                    src={industry.icon}
                  />
                )}
              </div>

              <div className="flex flex-col items-center gap-4 w-full px-6">
                <h3 className="w-full max-w-[264px] mt-[-1.00px] font-title-17 font-[number:var(--title-17-font-weight)] text-white text-[length:var(--title-17-font-size)] text-center tracking-[var(--title-17-letter-spacing)] leading-[var(--title-17-line-height)] [font-style:var(--title-17-font-style)]">
                  {industry.title}
                </h3>

                <p className="font-content-13 font-[number:var(--content-13-font-weight)] text-[#a2a5af] text-[length:var(--content-13-font-size)] text-center tracking-[var(--content-13-letter-spacing)] leading-[var(--content-13-line-height)] [font-style:var(--content-13-font-style)]">
                  {industry.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
