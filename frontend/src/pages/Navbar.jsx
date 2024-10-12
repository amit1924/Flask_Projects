/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../assets/bat.png";
import { NAVIGATION_LINKS } from "../pages/constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;

      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="">
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-between items-center gap-6">
            <div className="">
              <a href="#" className="">
                <img
                  src={logo}
                  alt="logo"
                  width={150}
                  className="shadow-[0_20px_30px_-15px_rgba(0,0,0,0.3)] bg-blue-900 rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
            <div className="">
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li className="" key={index}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-yellow-400"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div className="">
              <a href="#" className="">
                <img src={logo} alt="logo" width={90} className="m-2" />
              </a>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none m-2"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <ul className="flex flex-col items-center gap-4 p-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li className="" key={index}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-yellow-400"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
