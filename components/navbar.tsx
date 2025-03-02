"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPercentage(
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
          100
      );
      setSticky(window.scrollY > 2);
    });
  }, []);

  return (
    <>
      <div
        className={`sticky ${
          sticky ? "shadow " : ""
        }transition-all duration-500 ease-in-out top-0 w-full h-max py-6 px-24 z-50 bg-light_theme text-front font-poppins`}
        id="navbar"
      >
        <div
          className={`${
            percentage < 1 ? "w-0 " : "w-full"
          } bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 transition-all duration-500 ease-in-out mb-4`}
        >
          <div
            className="bg-theme h-2.5 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="grid-cols-3 flex justify-between items-center h-full w-full">
          <Link
            href={"#"}
            className="flex w-96 justify-start font-semibold text-2xl border-l-2 pl-2 mt-2 border-front"
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
            <div className="group/d hover:border-white h-full border-b-2 border-front pt-2 pb-1 transition-all duration-300">
              <Link
                href={"https://link.ardaozyigit.info"}
                className={
                  "text-lg group-hover/d:text-white transition-all duration-300 p-2 rounded-lg"
                }
                target="_blank"
              >
                My Links
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
