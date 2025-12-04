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
        <span className="font-[number:var(--content-13-font-weight)] leading-[var(--content-13-line-height)] font-content-13 [font-style:var(--content-13-font-style)] tracking-[var(--content-13-letter-spacing)] text-[length:var(--content-13-font-size)]">
          Innovation
        </span>
        <span className="leading-[var(--content-13-line-height)] font-content-13 [font-style:var(--content-13-font-style)] font-[number:var(--content-13-font-weight)] tracking-[var(--content-13-letter-spacing)] text-[length:var(--content-13-font-size)]">
          {"  "}Challenge technological limits{" "}
        </span>
        <span className="font-[number:var(--content-13-font-weight)] leading-[var(--content-13-line-height)] font-content-13 [font-style:var(--content-13-font-style)] tracking-[var(--content-13-letter-spacing)] text-[length:var(--content-13-font-size)]">
          Integrity
        </span>
        <span className="leading-[var(--content-13-line-height)] font-content-13 [font-style:var(--content-13-font-style)] font-[number:var(--content-13-font-weight)] tracking-[var(--content-13-letter-spacing)] text-[length:var(--content-13-font-size)]">
          {"  "}Build trust through transparency{" "}
        </span>
        <span className="font-[number:var(--content-13-font-weight)] leading-[var(--content-13-line-height)] font-content-13 [font-style:var(--content-13-font-style)] tracking-[var(--content-13-letter-spacing)] text-[length:var(--content-13-font-size)]">
          Excellence{"  "}
        </span>
        <span className="leading-[var(--content-13-line-height)] font-content-13 [font-style:var(--content-13-font-style)] font-[number:var(--content-13-font-weight)] tracking-[var(--content-13-letter-spacing)] text-[length:var(--content-13-font-size)]">
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
    <section className="flex flex-col w-full items-center gap-20 relative">
      <div className="flex flex-col max-w-[708px] items-center gap-4 relative">
        <div className="flex flex-col items-center relative w-full">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[28px] text-center tracking-[0] leading-7">
            <span className="leading-[var(--AMY-title-thin-line-height)] font-AMY-title-thin [font-style:var(--AMY-title-thin-font-style)] font-[number:var(--AMY-title-thin-font-weight)] tracking-[var(--AMY-title-thin-letter-spacing)] text-[length:var(--AMY-title-thin-font-size)]">
              ABOUT
            </span>
            <span className="leading-9">{""}</span>
          </div>

          <h2 className="relative w-full -mt-1 bg-[linear-gradient(to_bottom_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_right_/_50%_50%_no-repeat] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-AMY-title font-[number:var(--AMY-title-font-weight)] text-transparent text-[length:var(--AMY-title-font-size)] text-center tracking-[var(--AMY-title-letter-spacing)] leading-[var(--AMY-title-line-height)] [font-style:var(--AMY-title-font-style)]">
            AMY TECHNOLOGY
          </h2>
        </div>

        <p className="relative max-w-[610px] font-undertitle font-[number:var(--undertitle-font-weight)] text-[#a2a5af] text-[length:var(--undertitle-font-size)] text-center tracking-[var(--undertitle-letter-spacing)] leading-[var(--undertitle-line-height)] [font-style:var(--undertitle-font-style)]">
          We are a forward-thinking technology company dedicated to transforming
          enterprises through Artificial Intelligence, intelligent automation,{" "}
          <br />
          and digital infrastructure
        </p>
      </div>

      <div className="flex items-center gap-8 relative w-full">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="flex-1 rounded-3xl border border-solid border-[#515668] bg-transparent"
          >
            <CardContent className="flex flex-col items-center gap-8 p-8">
              <img
                className={`relative ${card.iconWidth} ${card.iconHeight} ${card.iconMargin}`}
                alt="Icon"
                src={card.icon}
              />

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
