import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const cardsData = [
  {
    icon: "/figmaAssets/icon.png",
    iconWidth: "w-[67.87px]",
    iconHeight: "h-[68px]",
    iconMargin: "mt-[-2.00px]",
    title: "Vision",
    description:
      "To be a global leader in AI-driven technology solutions, redefining how businesses operate and connect in the digital era",
    contentHeight: "h-[196px]",
  },
  {
    icon: "/figmaAssets/icon-1.png",
    iconWidth: "w-[64.14px]",
    iconHeight: "h-[60px]",
    iconMargin: "",
    title: "Values",
    description: (
      <>
        <span className="block font-semibold text-white font-content-13 text-[length:var(--content-13-font-size)] leading-[var(--content-13-line-height)] tracking-[var(--content-13-letter-spacing)]">
          Innovation
        </span>
        <span className="block font-content-13 text-[length:var(--content-13-font-size)] leading-[var(--content-13-line-height)] tracking-[var(--content-13-letter-spacing)] text-[#a2a5af]">
          Challenge technological limits
        </span>
        <span className="mt-2 block font-semibold text-white font-content-13 text-[length:var(--content-13-font-size)] leading-[var(--content-13-line-height)] tracking-[var(--content-13-letter-spacing)]">
          Integrity
        </span>
        <span className="block font-content-13 text-[length:var(--content-13-font-size)] leading-[var(--content-13-line-height)] tracking-[var(--content-13-letter-spacing)] text-[#a2a5af]">
          Build trust through transparency
        </span>
        <span className="mt-2 block font-semibold text-white font-content-13 text-[length:var(--content-13-font-size)] leading-[var(--content-13-line-height)] tracking-[var(--content-13-letter-spacing)]">
          Excellence
        </span>
        <span className="block font-content-13 text-[length:var(--content-13-font-size)] leading-[var(--content-13-line-height)] tracking-[var(--content-13-letter-spacing)] text-[#a2a5af]">
          Deliver world-class quality
        </span>
      </>
    ),
    contentHeight: "",
  },
  {
    icon: "/figmaAssets/icon-2.png",
    iconWidth: "w-[67.87px]",
    iconHeight: "h-[60px]",
    iconMargin: "",
    title: "Mission",
    description:
      "To empower organizations with intelligent automation, data-driven insights, and scalable cloud systems that accelerate innovation and efficiency",
    contentHeight: "h-[196px]",
  },
];

export const ChooseTechnologySection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-16 sm:gap-20 relative py-16 sm:py-20 px-4 mt-[20rem]">
      <div className="flex flex-col max-w-[708px] items-center gap-4 relative text-center">
        <div className="flex flex-col items-center relative w-full">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[28px] text-center tracking-[0] leading-7">
            <span className="leading-[var(--AMY-title-thin-line-height)] font-AMY-title-thin [font-style:var(--AMY-title-thin-font-style)] font-[number:var(--AMY-title-thin-font-weight)] tracking-[var(--AMY-title-thin-letter-spacing)] text-[length:var(--AMY-title-thin-font-size)]">
              ABOUT
            </span>
            <span className="leading-9">{""}</span>
          </div>

          <h2
            className="relative w-full -mt-1 font-AMY-title font-[number:var(--AMY-title-font-weight)] text-[length:var(--AMY-title-font-size)] text-center tracking-[var(--AMY-title-letter-spacing)] leading-[var(--AMY-title-line-height)] [font-style:var(--AMY-title-font-style)]"
            style={{
              backgroundImage:
                "linear-gradient(to top right, rgba(78,216,255,1) 0%, rgba(45,132,240,1) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            AMY TECHNOLOGY
          </h2>
        </div>

        <p className="relative max-w-[610px] font-undertitle font-[number:var(--undertitle-font-weight)] text-[#a2a5af] text-sm sm:text-[length:var(--undertitle-font-size)] text-center tracking-[var(--undertitle-letter-spacing)] leading-relaxed sm:leading-[var(--undertitle-line-height)] [font-style:var(--undertitle-font-style)]">
          We are a forward-thinking technology company dedicated to transforming
          enterprises through Artificial Intelligence, intelligent automation,{" "}
          <br />
          and digital infrastructure
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-stretch gap-6 sm:gap-8 relative w-full max-w-[1100px]">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="w-full sm:w-[312px] min-h-[260px] sm:h-[352px] rounded-3xl border border-solid border-[#515668] bg-[#020b33]/60 flex-shrink-0"
          >
            <CardContent className="flex flex-col items-center gap-6 p-8 h-full justify-between">
              {/* Fixed-height icon wrapper to keep spacing consistent across cards */}
              <div className="flex items-center justify-center h-[80px]">
                <img
                  className={`relative ${card.iconWidth} ${card.iconHeight} ${card.iconMargin}`}
                  alt={card.title}
                  src={card.icon}
                />
              </div>

              <div
                className={`flex flex-col items-center gap-5 w-full ${card.contentHeight}`}
              >
                <h3 className="relative w-full mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-2xl text-center tracking-[0] leading-7">
                  {card.title}
                </h3>

                <div className="leading-[var(--content-13-line-height)] relative w-full font-content-13 font-[number:var(--content-13-font-weight)] text-[#a2a5af] text-[length:var(--content-13-font-size)] text-center tracking-[var(--content-13-letter-spacing)] [font-style:var(--content-13-font-style)]">
                  {card.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
