import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import React from "react";

const contactInfo = [
  {
    icon: GlobeIcon,
    text: "amytechnologyllccompany.vn",
    className: "p-0.5",
  },
  {
    icon: MailIcon,
    text: "amytechnologyllccompany@gmail.com",
    className: "px-0.5 py-1",
  },
  {
    icon: PhoneIcon,
    text: "01234578965",
    imgSrc: "/figmaAssets/frame-639.svg",
    useImg: true,
  },
];

const solutionsData = [
  {
    title: "Solutions",
    items: [
      "AI & Machine Learning",
      "Automation & Digital Transformation",
      "Cloud Infrastructure",
      "Data Analytics",
      "IT Consulting & Integration",
    ],
  },
];

const industriesData = [
  {
    title: "Industries",
    items: [
      "Finance & Banking",
      "Healthcare",
      "Retail & E-commerce",
      "Manufacturing",
      "Logistics & Supply Chain",
      "Telecommunications",
    ],
  },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-[120px] w-full max-w-[1200px] mx-auto px-4 lg:px-0 mt-16 lg:mt-24 mb-16 lg:mb-[140px]">
      {/* Left: logo + description */}
      <div className="flex flex-col w-full lg:w-[360px] items-start gap-[23px]">
        <div className="flex flex-col w-full items-start gap-[22px] mr-0">
          <div className="inline-flex h-[30px] items-center gap-4">
            <img
              className="w-[78.17px] h-[26px]"
              alt="Logo"
              src="/figmaAssets/logo.svg"
            />
            <h2 className="font-bold text-white text-2xl leading-7 whitespace-nowrap [font-family:'Montserrat',Helvetica] tracking-[0]">
              AMY Technology LLC
            </h2>
          </div>
          <p className="self-stretch font-undertitle font-[number:var(--undertitle-font-weight)] text-[#a2a5af] text-sm sm:text-[length:var(--undertitle-font-size)] tracking-[var(--undertitle-letter-spacing)] leading-relaxed sm:leading-[var(--undertitle-line-height)] [font-style:var(--undertitle-font-style)]">
            Empowering businesses through advanced AI solutions and digital
            transformation.
          </p>
        </div>

        <address className="flex flex-col w-full items-start gap-[15px] not-italic mr-0">
          {contactInfo.map((contact, index) => (
            <div key={index} className="inline-flex items-center gap-2.5">
              {contact.useImg ? (
                <img
                  className="flex-[0_0_auto]"
                  alt="PhoneIcon icon"
                  src={contact.imgSrc}
                />
              ) : (
                <div
                  className={`inline-flex flex-col items-center justify-center ${contact.className}`}
                >
                  <contact.icon className="w-[22px] h-[22px] text-[#a2a5af]" />
                </div>
              )}
              <span className="font-content-13 font-[number:var(--content-13-font-weight)] text-[#a2a5af] text-[length:var(--content-13-font-size)] tracking-[var(--content-13-letter-spacing)] leading-[var(--content-13-line-height)] [font-style:var(--content-13-font-style)]">
                {contact.text}
              </span>
            </div>
          ))}
        </address>
      </div>

      {/* Middle: Solutions links */}
      <nav className="flex flex-col w-full sm:w-[200px] items-start gap-6 pt-4 lg:pt-[54px]">
        <h3 className="self-stretch font-semibold-15 font-[number:var(--semibold-15-font-weight)] text-white text-[length:var(--semibold-15-font-size)] tracking-[var(--semibold-15-letter-spacing)] leading-[var(--semibold-15-line-height)] [font-style:var(--semibold-15-font-style)]">
          {solutionsData[0].title}
        </h3>
        <div className="flex flex-col items-start gap-8 self-stretch w-full">
          <div className="flex flex-col items-start gap-4 self-stretch w-full">
            {solutionsData[0].items.slice(0, 2).map((item, index) => (
              <a
                key={index}
                href="#"
                className="self-stretch font-content-13 font-[number:var(--content-13-font-weight)] text-[#a2a5af] text-[length:var(--content-13-font-size)] tracking-[var(--content-13-letter-spacing)] leading-[var(--content-13-line-height)] [font-style:var(--content-13-font-style)] hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-start gap-4 self-stretch w-full">
            {solutionsData[0].items.slice(2).map((item, index) => (
              <a
                key={index}
                href="#"
                className="font-content-13 font-[number:var(--content-13-font-weight)] text-[#a2a5af] text-[length:var(--content-13-font-size)] tracking-[var(--content-13-letter-spacing)] leading-[var(--content-13-line-height)] [font-style:var(--content-13-font-style)] hover:text-white transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Right: Industries links */}
      <nav className="flex flex-col w-full sm:w-[200px] items-start gap-6 pt-4 lg:pt-[54px]">
        <h3 className="self-stretch font-semibold-15 font-[number:var(--semibold-15-font-weight)] text-white text-[length:var(--semibold-15-font-size)] tracking-[var(--semibold-15-letter-spacing)] leading-[var(--semibold-15-line-height)] [font-style:var(--semibold-15-font-style)]">
          {industriesData[0].title}
        </h3>
        <div className="flex flex-col items-start gap-4 self-stretch w-full">
          {industriesData[0].items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="font-content-13 font-[number:var(--content-13-font-weight)] text-[#a2a5af] text-[length:var(--content-13-font-size)] tracking-[var(--content-13-letter-spacing)] leading-[var(--content-13-line-height)] [font-style:var(--content-13-font-style)] hover:text-white transition-colors whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
};
