import React, { useState, useEffect } from "react";
import { MobileMenu } from "./MobileMenu";

export const NavigationHeader = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when at top or scrolling up
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:px-[120px] px-8 md:py-[24px] py-4 transition-transform duration-100 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
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
        <div className="fixed top-[74px] right-[120px] w-[220px] z-50">
          <MobileMenu />
        </div>
      )}
    </>
  );
};
