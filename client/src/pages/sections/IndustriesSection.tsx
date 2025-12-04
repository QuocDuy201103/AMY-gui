import React from "react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: "/figmaAssets/group-72.png",
    title: "AI & Machine Learning",
    description:
      "Develop Intelligent Systems That Analyze, Predict, And Automate Decision-making",
    paddingLeft: "pl-0",
  },
  {
    icon: "/figmaAssets/group-73.png",
    title: "Automation & Digital Transformation",
    description:
      "Streamline Operations With Robotic Process Automation And Smart Workflows.",
    paddingLeft: "pl-16",
  },
  {
    iconType: "vector",
    iconSvg: "/figmaAssets/union-3.svg",
    iconPosition: "top-[13px] left-[15px]",
    iconSize: "w-[22px] h-5",
    title: "Cloud Infrastructure",
    description:
      "Design Scalable, Secure Cloud Solutions That Power Digital Growth.",
    paddingLeft: "pl-24",
  },
  {
    icon: "/figmaAssets/group-75.png",
    title: "Data Analytics",
    description: "Turn Data Into Actionable Insights For Strategic Advantage.",
    paddingLeft: "pl-16",
  },
  {
    iconType: "vector",
    iconSvg: "/figmaAssets/union-1.svg",
    iconPosition: "top-3 left-[15px]",
    iconSize: "w-[22px] h-[22px]",
    title: "IT Consulting & Integration",
    description:
      "Tailor Technology Solutions To Meet Complex Business Needs With End-to-end Support And Strategic Guidance.",
    paddingLeft: "pl-0",
  },
];

export const IndustriesSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col gap-20 bg-[url(/figmaAssets/mask-group.png)] bg-[100%_100%] py-[50px]">
      <header className="flex h-36 w-full max-w-[708px] self-center flex-col items-center gap-4">
        <div className="flex flex-col items-center w-full">
          <h2 className="w-fit mt-[-1.00px] font-AMY-title-thin font-[number:var(--AMY-title-thin-font-weight)] text-white text-[length:var(--AMY-title-thin-font-size)] text-center tracking-[var(--AMY-title-thin-letter-spacing)] leading-[var(--AMY-title-thin-line-height)] whitespace-nowrap [font-style:var(--AMY-title-thin-font-style)]">
            OUR
          </h2>

          <h1 className="self-stretch -mt-1 bg-[linear-gradient(to_bottom_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_right_/_50%_50%_no-repeat] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-AMY-title font-[number:var(--AMY-title-font-weight)] text-transparent text-[length:var(--AMY-title-font-size)] text-center tracking-[var(--AMY-title-letter-spacing)] leading-[var(--AMY-title-line-height)] [font-style:var(--AMY-title-font-style)]">
            SOLUTIONS
          </h1>
        </div>

        <p className="w-full max-w-[610px] font-undertitle font-[number:var(--undertitle-font-weight)] text-[#a2a5af] text-[length:var(--undertitle-font-size)] text-center tracking-[var(--undertitle-letter-spacing)] leading-[var(--undertitle-line-height)] [font-style:var(--undertitle-font-style)]">
          Comprehensive technology solutions designed to transform <br />
          your business operations
        </p>
      </header>

      <div className="flex flex-col items-start gap-10 w-full max-w-[490px] ml-auto mr-[220px]">
        {solutions.map((solution, index) => (
          <article
            key={index}
            className={`inline-flex items-start gap-4 ${solution.paddingLeft}`}
          >
            {solution.iconType === "vector" ? (
              <div className="relative w-[52px] h-[45px] bg-[url(/figmaAssets/vector.svg)] bg-[100%_100%] flex-shrink-0">
                <img
                  className={`absolute ${solution.iconPosition} ${solution.iconSize}`}
                  alt={solution.title}
                  src={solution.iconSvg}
                />
              </div>
            ) : (
              <img
                className="relative w-[52px] h-[45px] flex-shrink-0"
                alt={solution.title}
                src={solution.icon}
              />
            )}

            <div className="flex flex-col w-[326px] items-start gap-1 pt-2.5">
              <h3 className="w-fit mt-[-1.00px] font-title-17 font-[number:var(--title-17-font-weight)] text-white text-[length:var(--title-17-font-size)] tracking-[var(--title-17-letter-spacing)] leading-[var(--title-17-line-height)] [font-style:var(--title-17-font-style)]">
                {solution.title}
              </h3>

              <p className="self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#a2a5af] text-sm tracking-[0] leading-5">
                {solution.description}
              </p>

              <Button
                variant="link"
                className="h-auto p-0 self-stretch bg-[linear-gradient(to_bottom_right,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(0,198,255,1)_0%,rgba(0,114,255,1)_50%)_top_right_/_50%_50%_no-repeat] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-AMY-cta-text font-[number:var(--AMY-cta-text-font-weight)] text-transparent text-[length:var(--AMY-cta-text-font-size)] tracking-[var(--AMY-cta-text-letter-spacing)] leading-[var(--AMY-cta-text-line-height)] [font-style:var(--AMY-cta-text-font-style)] justify-start"
              >
                Learn More →
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
