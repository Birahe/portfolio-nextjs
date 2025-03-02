"use client";

import Link from "next/link";
import { useState } from "react";

type tag =
  | "gamedev"
  | "csharp"
  | "programming"
  | "regie"
  | "lighting"
  | "audio";

interface Project {
  name: string;
  description: string;
  tags: Array<tag>;
  external?: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Anima",
    description:
      "Co-managed the development of a psychological story game in Unity using C#. Led programming efforts, overseeing game mechanics, system architecture, and implementation to ensure a cohesive and functional player experience.",
    tags: ["csharp", "gamedev", "programming"],
    external: "https://abyss.tevitol.org/projects/anima",
    image:
      "https://abyss.tevitol.org/_next/image/?url=%2Fstockimage.jpeg&w=1080&q=75",
  },
  {
    name: "Poetry Night",
    description: `Served as Lighting Technician for 'Poetry Night,' managing light and audio design. Led a 7-person regie team, overseeing technical execution and cue synchronization for a smooth and efficient stage performance.`,
    tags: ["regie", "lighting", "audio"],
    external: "https://youtu.be/Z_kXoLFdSWY",
    image: "https://img.youtube.com/vi/Z_kXoLFdSWY/hqdefault.jpg",
  },

  {
    name: "Tribute Night",
    description:
      "Worked as Lighting and Audio Technician for 'Tribute Night,' handling technical setup and live execution. Managed a 6-person regie team, assisted as a roadie, and coordinated audio and video recording.",
    tags: ["audio", "lighting", "regie"],
    external: "https://youtu.be/XS6TR2-Q2aA",
    image: "https://img.youtube.com/vi/XS6TR2-Q2aA/hqdefault.jpg",
  },
];

function Work() {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <div id="work" className={"w-full px-24 font-poppins text-front"}>
        <p className="font-extrabold text-[6em] relative left-[-10px] text-title pt-2.5">
          work.
        </p>
        <p className="pb-8">
          I had worked on many project fields throughout my student carreer in
          TEV İnanç High School. Those works in both regie work and programming.
        </p>
        <button onClick={() => setFilter("")}>
          {filter !== "" ? `Active filter: ${filter}` : "All results"}
        </button>
        <div className="grid grid-cols-3 gap-4">
          {projects
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((project) => {
              if (project.external) {
                return (
                  <div
                    key={project.name}
                    className={`transition-transform duration-500 h-[36em] w-full flex flex-col ${
                      project.tags.includes(filter as tag) || filter == ""
                        ? ""
                        : "hidden"
                    }`}
                  >
                    <div
                      style={{ backgroundImage: `url(${project.image})` }}
                      className={
                        "rounded-t-lg bg-center bg-cover bg-no-repeat h-[36em] w-full"
                      }
                    />
                    <div className="p-4 bg-white rounded-b-lg h-full">
                      <div className="inline-flex gap-4">
                        {project.tags.toSorted().map((tag, i) => {
                          switch (i % 3) {
                            case 0:
                              return (
                                <span
                                  key={i}
                                  className="py-1 px-2 rounded-lg bg-[#609191] cursor-pointer text-front"
                                  onClick={() => setFilter(tag)}
                                >
                                  {tag}
                                </span>
                              );
                            case 1:
                              return (
                                <span
                                  key={i}
                                  className="py-1 px-2 rounded-lg bg-theme cursor-pointer text-front"
                                  onClick={() => setFilter(tag)}
                                >
                                  {tag}
                                </span>
                              );
                            default:
                              return (
                                <span
                                  key={i}
                                  className="py-1 px-2 rounded-lg bg-[#A6C4C4] cursor-pointer text-front"
                                  onClick={() => setFilter(tag)}
                                >
                                  {tag}
                                </span>
                              );
                          }
                        })}
                      </div>
                      <Link href={project.external!} target="_blank">
                        <p className="text-2xl font-extrabold pt-3">
                          {project.name}
                        </p>
                        <p className="line-clamp-6 text-ellipsis pt-2 text-transparent bg-gradient-to-t from-gray-500 to-front bg-clip-text">
                          {project.description}
                        </p>
                      </Link>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={project.name}
                    className={`transition-transform duration-500 h-[36em] w-full flex flex-col ${
                      project.tags.includes(filter as tag) || filter == ""
                        ? ""
                        : "hidden"
                    }`}
                  >
                    <div
                      style={{ backgroundImage: `url(${project.image})` }}
                      className={
                        "rounded-t-lg bg-center bg-cover bg-no-repeat h-[36em] w-full"
                      }
                    />
                    <div className="p-4 bg-white rounded-b-lg h-full">
                      <div className="inline-flex gap-4">
                        {project.tags.toSorted().map((tag, i) => {
                          switch (i % 3) {
                            case 0:
                              return (
                                <span
                                  key={i}
                                  className="py-1 px-2 rounded-lg bg-orange-400 cursor-pointer"
                                  onClick={() => setFilter(tag)}
                                >
                                  {tag}
                                </span>
                              );
                            case 1:
                              return (
                                <span
                                  key={i}
                                  className="py-1 px-2 rounded-lg bg-blue-400 cursor-pointer"
                                  onClick={() => setFilter(tag)}
                                >
                                  {tag}
                                </span>
                              );
                            default:
                              return (
                                <span
                                  key={i}
                                  className="py-1 px-2 rounded-lg bg-green-400 cursor-pointer"
                                  onClick={() => setFilter(tag)}
                                >
                                  {tag}
                                </span>
                              );
                          }
                        })}
                      </div>
                      <div className="pt-4">
                        <p className="text-2xl font-extrabold ">
                          {project.name}
                        </p>
                        <p className="line-clamp-6 text-ellipsis pt-2 text-transparent bg-gradient-to-t from-gray-500/5 to-front bg-clip-text">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default Work;
