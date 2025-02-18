"use client";

import Link from "next/link";

import { useEffect } from "react";

export default function NavBar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("#navbar")!;
      if (window.pageYOffset > 2) {
        nav.classList.add("bg-light_blue");
        nav.classList.add("shadow");
      } else {
        nav.classList.remove("bg-light_blue");
        nav.classList.remove("shadow");
      }
    });
  }, []);

  return (
    <div
      className={`sticky transition-all duration-500 ease-in-out top-0 w-full h-max grid-cols-3 flex justify-between py-9 items-center px-24 z-50 bg-light_theme text-front font-poppins`}
      id="navbar"
    >
      <Link
        href={"#"}
        className="flex w-96 justify-start font-semibold text-2xl border-l-2 pl-2 border-front"
      >
        Arda Özyiğit
      </Link>
      <div className="relative left-[-10px] flex gap-16 w-96 justify-center">
        <div className="group/a hover:border-white h-full border-b-2 border-front pt-2 pb-1 transition-all duration-300">
          <Link
            href={"#"}
            className={
              "text-lg group-hover/a:text-white transition-all duration-300 p-2 rounded-lg"
            }
          >
            Home
          </Link>
        </div>
        <div className="group/b hover:border-white h-full border-b-2 border-front pt-2 pb-1 transition-all duration-300">
          <Link
            href="#about"
            className={
              "text-lg group-hover/b:text-white transition-all duration-300 p-2 rounded-lg "
            }
          >
            About
          </Link>
        </div>
        <div className="group/c hover:border-white h-full border-b-2 border-front pt-2 pb-1 transition-all duration-300">
          <Link
            href="#work"
            className={
              "text-lg group-hover/c:text-white transition-all duration-300 p-2 rounded-lg"
            }
          >
            Work
          </Link>
        </div>
      </div>
      <div className="flex w-64 justify-end">
        <h4>in</h4>
        <h4>as</h4>
        <h4>in</h4>
      </div>
    </div>
  );
}
