import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className={
        "sticky top-0 w-full h-max grid-cols-3 flex justify-between py-9 items-center px-24 z-50 bg-light_theme text-front font-poppins"
      }
    >
      <Link
        href={"#"}
        className="flex  w-64 justify-start font-semibold text-2xl"
      >
        Arda Özyiğit
      </Link>
      <div className="relative left-[-10px] flex gap-16 w-96 justify-center">
        <Link
          href={"#"}
          className={
            "text-lg hover:bg-theme transition-all duration-300 p-2 rounded-lg"
          }
        >
          Home
        </Link>
        <Link
          href="#about"
          className={
            "text-lg hover:bg-theme transition-all duration-300 p-2 rounded-lg"
          }
        >
          About
        </Link>
        <Link
          href="#work"
          className={
            "text-lg hover:bg-theme transition-all duration-300 p-2 rounded-lg"
          }
        >
          Work
        </Link>
      </div>
      <div className="flex w-64 justify-end">
        <h4>in</h4>
        <h4>as</h4>
        <h4>in</h4>
      </div>
    </div>
  );
}
