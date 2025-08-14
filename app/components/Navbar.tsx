// app/components/Navbar.tsx
'use client';
import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = ["Home", "About", "Portfolio", "Services", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Navbar shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy logic
  useEffect(() => {
    const sections = navItems.map(item =>
      document.getElementById(item.toLowerCase())
    );

    const handleScrollSpy = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActive(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Smooth scroll function
 const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const headerOffset = 80; // height of your navbar
    const elementPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};


  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#f7f7f7]",
        scrolled ? "py-3 border-b border-gray-200" : "py-4 md:py-6"
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className="font-bold text-3xl md:text-4xl text-[#333]">Siraj.</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={(e) => {
                e.preventDefault();
                setActive(item);
                scrollToSection(item.toLowerCase());
              }}
              className={clsx(
                "relative group uppercase text-xs sm:text-sm tracking-wide font-semibold transition-colors duration-300 ease-in-out",
                active === item ? "text-gray-400" : "text-[#333] hover:text-black"
              )}
            >
              <span className="relative z-10">{item}</span>
              <span
                className={clsx(
                  "absolute left-0 top-1/2 h-[1px] w-full bg-gray-400 transform -translate-y-1/2 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                  active === item && "scale-x-100"
                )}
              />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-6 flex flex-col gap-1">
            <span className={`h-0.5 bg-gray-900 transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`h-0.5 bg-gray-900 transition-all ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 bg-gray-900 transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="md:hidden bg-[#f7f7f7] border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(item);
                  setMobileOpen(false);
                  scrollToSection(item.toLowerCase());
                }}
                className={clsx(
                  "py-2 px-3 uppercase text-sm tracking-wide font-semibold transition-colors",
                  active === item ? "text-gray-400" : "text-[#333] hover:text-black"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
