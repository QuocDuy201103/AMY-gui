import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const cardData = [
  {
    title: (
      <>
        Innovation <br />
        and Security
      </>
    ),
    description:
      "Our methodology centers on cutting-edge innovation, coupled with robust security and essential scalability in every solution delivered.",
  },
  {
    title: (
      <>
        End-to-End <br />
        Partnership
      </>
    ),
    description:
      "We offer comprehensive partnership, from initial strategy and planning through deployment, ensuring flawless and successful implementation.",
  },
  {
    title: (
      <>
        Global Reach <br />
        &amp; Experience
      </>
    ),
    description:
      "A dedicated team with deep global technology experience, focused on fostering long-term strategic partnership and international success.",
  },
];

export const TransformationSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-0">
      <img
        className="absolute bottom-0 left-0 w-full h-auto"
        alt="Mask group"
        src="/figmaAssets/mask-group-1.png"
      />

      <div className="flex flex-col w-full max-w-[708px] items-center gap-4 mx-auto px-4">
        <header className="flex flex-col items-center w-full">
          <h3 className="font-AMY-title-thin font-[number:var(--AMY-title-thin-font-weight)] text-white text-[length:var(--AMY-title-thin-font-size)] text-center tracking-[var(--AMY-title-thin-letter-spacing)] leading-[var(--AMY-title-thin-line-height)] whitespace-nowrap [font-style:var(--AMY-title-thin-font-style)]">
            WHY
          </h3>

          <h2 className="-mt-1 w-full bg-[linear-gradient(to_bottom_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(78,216,255,1)_0%,rgba(45,132,240,1)_50%)_top_right_/_50%_50%_no-repeat] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-AMY-title font-[number:var(--AMY-title-font-weight)] text-transparent text-[length:var(--AMY-title-font-size)] text-center tracking-[var(--AMY-title-letter-spacing)] leading-[var(--AMY-title-line-height)] [font-style:var(--AMY-title-font-style)]">
            CHOOSE AMY TECHNOLOGY
          </h2>
        </header>

        <p className="w-full max-w-[610px] font-content-13 font-[number:var(--content-13-font-weight)] text-[#a2a5af] text-[length:var(--content-13-font-size)] text-center tracking-[var(--content-13-letter-spacing)] leading-[var(--content-13-line-height)] [font-style:var(--content-13-font-style)]">
          Your trusted partner in digital transformation and technological
          excellence
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-8 mt-[200px] px-4 max-w-[1000px] mx-auto">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="flex-col w-full max-w-[312px] h-auto min-h-[283px] items-center gap-5 p-8 rounded-3xl border-[none] flex relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-3xl before:[background:linear-gradient(180deg,rgba(0,197,255,1)_16%,rgba(0,0,0,0)_87%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <CardContent className="flex flex-col items-center gap-5 p-0 w-full">
              <h3 className="w-full font-title-17 font-[number:var(--title-17-font-weight)] text-white text-[length:var(--title-17-font-size)] text-center tracking-[var(--title-17-letter-spacing)] leading-[var(--title-17-line-height)] [font-style:var(--title-17-font-style)]">
                {card.title}
              </h3>

              <p className="w-full font-content-13 font-[number:var(--content-13-font-weight)] text-[#a2a5af] text-[length:var(--content-13-font-size)] text-center tracking-[var(--content-13-letter-spacing)] leading-[var(--content-13-line-height)] [font-style:var(--content-13-font-style)]">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
