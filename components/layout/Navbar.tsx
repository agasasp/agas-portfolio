"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const menus = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-black"
        >
          Agas<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menus.map((menu) => (
            <a
              key={menu}
              href={`#${menu}`}
              className={`capitalize transition ${
                active === menu
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {menu}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Download CV hanya tampil di Desktop */}
          <a
            href="/cv.pdf"
            className="hidden md:block rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
          >
            Download CV
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">

          {menus.map((menu) => (
            <a
              key={menu}
              href={`#${menu}`}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 capitalize transition ${
                active === menu
                  ? "text-blue-400"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              {menu}
            </a>
          ))}

          <a
            href="/cv.pdf"
            className="m-4 block rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold hover:bg-blue-500 transition"
          >
            Download CV
          </a>

        </div>
      )}
    </header>
  );
}