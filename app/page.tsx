import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        className={
          "flex w-full h-[75vh] justify-between px-24 items-center font-poppins text-front"
        }
      >
        <div className="w-max">
          <p className="font-medium text-3xl">Hello! I'm Arda,</p>
          <p className="font-extrabold text-9xl relative left-[-10px]">
            Computer
          </p>
          <p className="font-extrabold text-9xl relative left-[-10px] ">
            Engineering
          </p>
          <p className="font-extrabold text-9xl relative left-[-10px]">
            Student
          </p>
          <p className="font-medium text-3xl pt-2.5">
            studying at PoliTo, Italy.
          </p>
        </div>
        <div>
          <Image
            src={"/vector.svg"}
            width={700}
            height={700}
            alt="Vector for photo"
            className="absolute top-32 right-20 z-20"
          />
          <svg
            width="1200"
            height="800"
            className="absolute top-16 right-[-10%] z-10"
          >
            <mask id="svgmask3">
              <circle fill="#ffffff" cx="600" cy="400" r="350"></circle>
            </mask>
            <image
              xlinkHref="/arda.jpg"
              mask="url(#svgmask3)"
              className="w-[1200px] h-[800px]"
            ></image>
          </svg>
        </div>
      </div>
    </div>
  );
}
