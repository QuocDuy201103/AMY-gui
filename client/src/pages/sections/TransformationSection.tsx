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
        className="hidden md:block absolute top-[500px] left-1/2 -translate-x-1/2 w-full max-w-[1410px] h-auto"
        alt="Mask group"
        src="/figmaAssets/hand.png"
      />

      <div className="flex flex-col w-full max-w-[708px] items-center gap-4 mx-auto px-4">
        <header className="flex flex-col items-center w-full">
          <h3 className="font-AMY-title-thin font-[number:var(--AMY-title-thin-font-weight)] text-white text-[length:var(--AMY-title-thin-font-size)] text-center tracking-[var(--AMY-title-thin-letter-spacing)] leading-[var(--AMY-title-thin-line-height)] whitespace-nowrap [font-style:var(--AMY-title-thin-font-style)]">
            WHY
          </h3>

          <h2
            className="-mt-1 w-full font-AMY-title font-[number:var(--AMY-title-font-weight)] text-[length:var(--AMY-title-font-size)] text-center tracking-[var(--AMY-title-letter-spacing)] leading-[var(--AMY-title-line-height)] [font-style:var(--AMY-title-font-style)]"
            style={{
              backgroundImage:
                "linear-gradient(to top right, rgba(78,216,255,1) 0%, rgba(45,132,240,1) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            CHOOSE AMY TECHNOLOGY
          </h2>
        </header>

        <p className="w-full max-w-[610px] font-content-13 font-[number:var(--content-13-font-weight)] text-[#a2a5af] text-[length:var(--content-13-font-size)] text-center tracking-[var(--content-13-letter-spacing)] leading-[var(--content-13-line-height)] [font-style:var(--content-13-font-style)]">
          Your trusted partner in digital transformation and technological
          excellence
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8 mt-10 md:mt-[100px] px-4 max-w-[1000px] mx-auto">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className={`flex-col w-full md:max-w-[312px] h-auto min-h-[260px] md:min-h-[347px] border-none items-center gap-5 p-8 rounded-3xl flex relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-3xl before:[background:linear-gradient(180deg,rgba(0,197,255,0.6)_0%,rgba(0,197,255,0.05)_40%,rgba(0,0,0,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${
              index === 1 ? "mt-4 md:mt-0" : "mt-0 md:mt-10"
            }`}
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
