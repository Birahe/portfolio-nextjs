import Link from "next/link";

function About() {
  return (
    <div>
      <div
        id="about"
        className={"w-full h-[screen] px-24 pt-16 font-poppins text-front"}
      >
        <p className="font-extrabold text-[6em] relative left-[-10px] text-title pt-2.5">
          about.
        </p>
        <p className="pb-8">
          I studied high school in TEV İnanç Türkeş Private High School, which
          is the first school to educate gifted students. I had opportunity to
          attend in many club activities throughout my education.
        </p>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-front">
              2021-2022
            </time>
            <h3 className="text-lg font-semibold text-front">
              Member - TEVİTÖL Web Design and Development Club
            </h3>
            <ol className="text-base font-normal text-front ml-1 pl-4 border-s border-gray-700">
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <p>
                  Worked on HTML and CSS mostly, for understanding concepts of
                  internet and web.
                </p>
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Had small learning projects.
              </li>
            </ol>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-front">
              2021-2023
            </time>
            <h3 className="text-lg font-semibold text-front">
              Game Developer - TEVİTÖL Studio
            </h3>
            <ol className="text-base font-normal text-front ml-1 pl-4 border-s border-gray-700">
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <p>Took the role of game programmer and developer.</p>
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Used Unity and C# primarily.
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Had to separate due to management problems.
              </li>
            </ol>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-front">
              2023-2024
            </time>
            <h3 className="text-lg font-semibold text-front">
              <Link
                href={"https://abyss.tevitol.org"}
                target="_blank"
                className="flex items-center group hover:text-light_blue transition-all duration-150"
              >
                <p>Co-Founder - Abyss Games Studio</p>
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-75"
                >
                  <g id="Interface / External_Link">
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#000000"
                      className="group-hover:stroke-light_blue transition-all duration-150"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </Link>
            </h3>
            <ol className="text-base font-normal text-front ml-1 pl-4 border-s border-gray-700">
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <p>
                  Formed a new team with some of old crew mates from TEVITOL
                  Studio and started working on projects in January 2023.
                </p>
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Worked on story-based, deep games, as well as small game jams
                with the purpose of making a game in 3 days.
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Had active projects and prototypes.
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Handed the club over to juniors, but the projects we started are
                still active.
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Became a part of the club as head of programming, alongside of
                being co-founder and supervisor.
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Used Unity and C# actively throughout the process.
              </li>
            </ol>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-front">
              2023-2024
            </time>
            <h3 className="text-lg font-semibold text-front">
              <p>Sound & Lighting Technician - TEVITOL IT</p>
            </h3>
            <ol className="text-base font-normal text-front ml-1 pl-4 border-s border-gray-700">
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <p>
                  Was responsible with ‘regie’ work, which includes sound and
                  lighting, in both large (Poetry Night, Drama Night, Republic
                  Prom, Graduation Ceremony, etc.) and small (school parties,
                  student concerts, etc.) school events.
                </p>
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Led the crew of more than 7 people at the same time.
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Designed and did lights and sound for theater plays.
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Worked as sound technician for party and organizations.
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Worked with known speaker and musicians.
              </li>
              <li>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 start-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                Gained knowledge about DMX, lighting aesthetics, audio design
                and electronics.
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default About;
