export default function Home() {
  return (
    <div>
      <div
        className={
          "flex w-full h-[75vh] justify-between px-24 items-center font-poppins text-front"
        }
      >
        <div className="w-full leading-tight">
          <p className="font-medium text-3xl">Hello! I&apos;m Arda,</p>
          <p className="font-extrabold text-[6em] relative left-[-10px]">
            Computer
          </p>
          <p className="font-extrabold text-[6em] relative left-[-10px] ">
            Engineering
          </p>
          <p className="font-extrabold text-[6em] relative left-[-10px]">
            Student
          </p>
          <p className="font-medium text-3xl pt-2.5">
            studying at PoliTo, Italy.
          </p>
        </div>
        <div>
          <svg
            width="750"
            height="500"
            className="relative h-full scale-110 -right-20"
          >
            <mask id="svgmask3">
              <g transform="translate(125, 0)" width="100%" height="100%">
                <path
                  d="M143.385 479.93L143.385 479.929C86.1603 457.468 37.9742 403.063 14.9662 333.777C-7.95257 264.576 -5.57458 180.566 36.1367 115.425C77.9457 50.1815 159.226 3.66055 244.33 0.656615C329.356 -2.3478 418.26 38.0833 460.778 103.39C503.292 168.78 499.498 259.152 470.485 326.715C441.489 394.148 387.218 438.755 326.908 465.895C266.679 492.947 200.512 502.389 143.385 479.93Z"
                  stroke="#54576D"
                  fill="#ffffff"
                />
              </g>
            </mask>
            <image
              xlinkHref="/arda.jpg"
              mask="url(#svgmask3)"
              className="w-[750px] h-[500px]"
            ></image>
          </svg>
          {/* <Image alt="My photo" src={"/arda.jpg"} width={2250} height={1500} /> */}
        </div>
      </div>
    </div>
  );
}
