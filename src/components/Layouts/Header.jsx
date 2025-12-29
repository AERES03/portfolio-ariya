/** @format */
import Hamburger from "../Elements/Hamburger/Hamburger";
import Index from "../Elements/NavMenu/Index";
import NavbarMenu from "../Fragments/NavbarMenu";
import { useState } from "react";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-30 py-4 px-4 sm:px-6 md:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/*============ LOGO ============ */}
          <a
            href=""
            className="font-audiowide text-white text-2xl sm:text-3xl md:4xl"
          >
            AERES
          </a>
          {/*============ DEKSTOP NAV ============ */}
          {/* <Index className="md:flex sm:hidden hidden lg:flex xl:flex items-center gap-10" /> */}
          <NavbarMenu className="md:flex sm:hidden hidden lg:flex xl:flex items-center gap-10"></NavbarMenu>
          {/*============ HAMBURGER ============ */}
        </nav>
      </header>
      <Hamburger
        className="fixed top-6 right-6 z-[999] sm:flex md:hidden"
        open={open}
        onClick={() => setOpen(!open)}
      ></Hamburger>
      <div
        className={`fixed inset-0 bg-black/10 backdrop-blur-md transition-all duration-300 z-40
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* MENU */}
        <div className="h-full flex items-center justify-center">
          <Index
            className="flex-col items-center gap-10"
            closeMenu={() => setOpen(false)}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
