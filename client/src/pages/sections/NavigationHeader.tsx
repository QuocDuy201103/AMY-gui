import React, { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const NavigationHeader = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[120px] py-[24px] bg-[#010c34]">
        <div className="flex items-center">
          <img
            className="w-[78px] h-[26px]"
            alt="AMY Logo"
            src="/figmaAssets/logo.svg"
          />
        </div>

        <button
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center gap-[6px] p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="w-[24px] h-[2px] bg-white"></span>
          <span className="w-[24px] h-[2px] bg-white"></span>
          <span className="w-[24px] h-[2px] bg-white"></span>
        </button>
      </header>

      {isMenuOpen && (
        <div className="fixed top-[74px] right-[120px] w-[280px] z-50">
          <MobileMenu />
        </div>
      )}
    </>
  );
};
