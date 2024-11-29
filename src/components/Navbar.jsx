import { Menu } from "lucide-react";
import React from "react";
import { useState } from "react";

import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="sticky top-0 z-40 ">
      <div className="flex bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white justify-between w-full sm:px-40 px-5 py-4 ">
        <div className="text-2xl font-bold bg-gradient-to-r from-zinc-500 to-sky-700 bg-clip-text text-transparent cursor-pointer">
         <ScrollLink to="hero" smooth={true} duration={500}> Portfolio.</ScrollLink>
        </div>
        {/* mobile menu */}
        <div className="sm:hidden  relative">
          <Menu className="size-6 cursor-pointer " onClick={toggleMobileMenu} />
        </div>
        {isMobileMenuOpen && (
          <div className="w-fit p-4 flex flex-col absolute sm:hidden transition-transform duration-300 ease-in-out right-2  mt-8 z-50 bg-black/50 border rounded border-grey-800">
            <ScrollLink to="about" smooth={true} duration={500}>
            <span
              className="block hover:underline  underline-offset-8 p-2"
              onClick={toggleMobileMenu}>
              About Me
            </span>
            </ScrollLink>

            <ScrollLink to="education" smooth={true} duration={500}>
            <span
              className="block hover:underline  underline-offset-8 p-2"
              onClick={toggleMobileMenu}>
              Education
            </span>
            </ScrollLink>
            <ScrollLink to="project" smooth={true} duration={500}>
             
           
            <span
              className="block hover:underline underline-offset-8  p-2"
              onClick={toggleMobileMenu}>
              Projects
            </span>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
             
            <span
              className="block hover:underline  underline-offset-8  p-2"
              onClick={toggleMobileMenu}>
              Contact Me
            </span>
                </ScrollLink>
          </div>
        )}
        {/* mobile meny ends */}
        <div className="sm:flex hidden items-center justify-between gap-10 mx-5 ">
          <span className="hover:underline underline-offset-8 hover:scale-105  cursor-pointer">
            <ScrollLink to="about" smooth={true} duration={500}>
              About Me
            </ScrollLink>{" "}
          </span>
          <span className="hover:underline underline-offset-8 hover:scale-105  cursor-pointer">
            <ScrollLink to="education" smooth={true} duration={500}>
              Education
            </ScrollLink>
          </span>
          <span className="hover:underline underline-offset-8 hover:scale-105  cursor-pointer">
            <ScrollLink to="project" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </span>
          <span className="hover:underline underline-offset-8 hover:scale-105  cursor-pointer">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact Me
            </ScrollLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
