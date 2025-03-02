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
    description: `
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus molestiae excepturi beatae distinctio qui, reiciendis aliquid facilis quasi? Aliquam, quos itaque ipsam nam ducimus, laudantium totam provident labore ea, harum rem. Excepturi cumque incidunt itaque, aliquam consequuntur saepe dolorem. Dolore est et hic? Assumenda, ea. Ratione tempora tenetur, modi quos officiis quas sed. Cupiditate, sed repellendus! Accusamus rem nam labore eaque ratione, nobis laboriosam soluta error molestias sit delectus unde ipsam tempora enim veniam, officiis expedita optio facilis eos suscipit dicta possimus quod laborum est! Incidunt veniam, aperiam dolore sit minus beatae eos, tenetur voluptatibus voluptas necessitatibus vitae sapiente! Placeat tempore nisi numquam molestiae tenetur ad ratione animi, aliquid facere odit porro cupiditate! Nisi autem debitis neque aliquam rem. Animi maiores, aspernatur molestiae nisi nesciunt magnam suscipit, ratione excepturi sed doloremque quidem accusantium laborum! Perspiciatis eius sunt odit perferendis ipsam facere expedita consectetur aspernatur nulla voluptatum dicta praesentium a temporibus ipsum voluptate iusto, possimus, commodi quo? Inventore, ad distinctio illo voluptas voluptate quas voluptatum ratione sequi vel ipsa debitis tenetur natus architecto deleniti quisquam officiis adipisci dignissimos excepturi recusandae dolore dolorum exercitationem eaque magni! Ea hic officiis cum, consequatur voluptate non necessitatibus aspernatur quas quo quaerat voluptates ipsa perferendis unde cupiditate? Reprehenderit officiis rerum minus inventore doloremque tenetur similique? Vero veritatis praesentium sapiente facilis cumque assumenda excepturi eaque. Quibusdam fuga doloremque reprehenderit, beatae minus fugiat magni est cupiditate sequi earum nemo quos non molestias saepe ad praesentium maxime rem mollitia, ratione accusamus! Sed similique, amet rerum recusandae quidem, temporibus cum dolorum repellat repudiandae, modi neque ad expedita. Aliquam voluptas totam magnam quibusdam voluptatibus perferendis aut laboriosam quas neque tempore! Debitis molestias ea a animi delectus, nisi dolore velit alias perspiciatis et. Aspernatur reprehenderit obcaecati ad, voluptatem fugiat consectetur iure totam, et hic officiis aperiam reiciendis distinctio, dolores voluptatum autem. Hic quo ex accusantium accusamus velit quia temporibus perspiciatis dignissimos ea modi rem eveniet tenetur eligendi officia laborum, corrupti tempore consequatur nulla. Quisquam officia maxime assumenda, impedit error excepturi dignissimos hic reprehenderit, eos magni expedita voluptatibus repellendus consequuntur minus soluta id blanditiis omnis sapiente suscipit ad ipsum dolores sequi. Tenetur fuga eveniet natus assumenda reiciendis? Officia ipsum quidem enim voluptate itaque illo tempora vel facilis, rerum accusantium non saepe corporis tempore dolores pariatur autem quaerat sequi ipsam tenetur architecto ducimus ab praesentium hic excepturi. Molestias nemo debitis aut porro, consequatur facilis quia assumenda ullam et facere, molestiae voluptate eveniet consequuntur error, ab magni consectetur. Sed, id qui vitae dolores iste incidunt explicabo soluta fugiat, voluptatem repellendus ex? Vel officia magni fugiat tenetur dicta sint doloribus laborum accusantium id possimus, rerum enim incidunt, nemo veritatis at quisquam consequatur atque molestias, necessitatibus beatae nulla officiis culpa accusamus totam. Labore mollitia sunt magni quisquam distinctio, laborum temporibus amet sint aut assumenda neque aperiam veritatis obcaecati corporis odit accusamus eligendi doloribus modi similique dolorem ipsa porro culpa voluptate beatae. Esse mollitia quos eum, vitae sunt totam cumque ullam consequatur reiciendis, iure quibusdam quod quae odio eos quis beatae iste? Nisi voluptatibus harum quasi cumque itaque.`,
    tags: ["csharp", "gamedev", "programming"],
    external: "https://abyss.tevitol.org/projects/anima",
    image:
      "https://abyss.tevitol.org/_next/image/?url=%2Fstockimage.jpeg&w=1080&q=75",
  },
  {
    name: "Poetry Night",
    description: `
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus molestiae excepturi beatae distinctio qui, reiciendis aliquid facilis quasi? Aliquam, quos itaque ipsam nam ducimus, laudantium totam provident labore ea, harum rem. Excepturi cumque incidunt itaque, aliquam consequuntur saepe dolorem. Dolore est et hic? Assumenda, ea. Ratione tempora tenetur, modi quos officiis quas sed. Cupiditate, sed repellendus! Accusamus rem nam labore eaque ratione, nobis laboriosam soluta error molestias sit delectus unde ipsam tempora enim veniam, officiis expedita optio facilis eos suscipit dicta possimus quod laborum est! Incidunt veniam, aperiam dolore sit minus beatae eos, tenetur voluptatibus voluptas necessitatibus vitae sapiente! Placeat tempore nisi numquam molestiae tenetur ad ratione animi, aliquid facere odit porro cupiditate! Nisi autem debitis neque aliquam rem. Animi maiores, aspernatur molestiae nisi nesciunt magnam suscipit, ratione excepturi sed doloremque quidem accusantium laborum! Perspiciatis eius sunt odit perferendis ipsam facere expedita consectetur aspernatur nulla voluptatum dicta praesentium a temporibus ipsum voluptate iusto, possimus, commodi quo? Inventore, ad distinctio illo voluptas voluptate quas voluptatum ratione sequi vel ipsa debitis tenetur natus architecto deleniti quisquam officiis adipisci dignissimos excepturi recusandae dolore dolorum exercitationem eaque magni! Ea hic officiis cum, consequatur voluptate non necessitatibus aspernatur quas quo quaerat voluptates ipsa perferendis unde cupiditate? Reprehenderit officiis rerum minus inventore doloremque tenetur similique? Vero veritatis praesentium sapiente facilis cumque assumenda excepturi eaque. Quibusdam fuga doloremque reprehenderit, beatae minus fugiat magni est cupiditate sequi earum nemo quos non molestias saepe ad praesentium maxime rem mollitia, ratione accusamus! Sed similique, amet rerum recusandae quidem, temporibus cum dolorum repellat repudiandae, modi neque ad expedita. Aliquam voluptas totam magnam quibusdam voluptatibus perferendis aut laboriosam quas neque tempore! Debitis molestias ea a animi delectus, nisi dolore velit alias perspiciatis et. Aspernatur reprehenderit obcaecati ad, voluptatem fugiat consectetur iure totam, et hic officiis aperiam reiciendis distinctio, dolores voluptatum autem. Hic quo ex accusantium accusamus velit quia temporibus perspiciatis dignissimos ea modi rem eveniet tenetur eligendi officia laborum, corrupti tempore consequatur nulla. Quisquam officia maxime assumenda, impedit error excepturi dignissimos hic reprehenderit, eos magni expedita voluptatibus repellendus consequuntur minus soluta id blanditiis omnis sapiente suscipit ad ipsum dolores sequi. Tenetur fuga eveniet natus assumenda reiciendis? Officia ipsum quidem enim voluptate itaque illo tempora vel facilis, rerum accusantium non saepe corporis tempore dolores pariatur autem quaerat sequi ipsam tenetur architecto ducimus ab praesentium hic excepturi. Molestias nemo debitis aut porro, consequatur facilis quia assumenda ullam et facere, molestiae voluptate eveniet consequuntur error, ab magni consectetur. Sed, id qui vitae dolores iste incidunt explicabo soluta fugiat, voluptatem repellendus ex? Vel officia magni fugiat tenetur dicta sint doloribus laborum accusantium id possimus, rerum enim incidunt, nemo veritatis at quisquam consequatur atque molestias, necessitatibus beatae nulla officiis culpa accusamus totam. Labore mollitia sunt magni quisquam distinctio, laborum temporibus amet sint aut assumenda neque aperiam veritatis obcaecati corporis odit accusamus eligendi doloribus modi similique dolorem ipsa porro culpa voluptate beatae. Esse mollitia quos eum, vitae sunt totam cumque ullam consequatur reiciendis, iure quibusdam quod quae odio eos quis beatae iste? Nisi voluptatibus harum quasi cumque itaque.`,
    tags: ["regie", "lighting", "audio"],
    external: "https://youtu.be/Z_kXoLFdSWY",
    image: "https://img.youtube.com/vi/Z_kXoLFdSWY/hqdefault.jpg",
  },

  {
    name: "Tribute Night",
    description: `
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus molestiae excepturi beatae distinctio qui, reiciendis aliquid facilis quasi? Aliquam, quos itaque ipsam nam ducimus, laudantium totam provident labore ea, harum rem. Excepturi cumque incidunt itaque, aliquam consequuntur saepe dolorem. Dolore est et hic? Assumenda, ea. Ratione tempora tenetur, modi quos officiis quas sed. Cupiditate, sed repellendus! Accusamus rem nam labore eaque ratione, nobis laboriosam soluta error molestias sit delectus unde ipsam tempora enim veniam, officiis expedita optio facilis eos suscipit dicta possimus quod laborum est! Incidunt veniam, aperiam dolore sit minus beatae eos, tenetur voluptatibus voluptas necessitatibus vitae sapiente! Placeat tempore nisi numquam molestiae tenetur ad ratione animi, aliquid facere odit porro cupiditate! Nisi autem debitis neque aliquam rem. Animi maiores, aspernatur molestiae nisi nesciunt magnam suscipit, ratione excepturi sed doloremque quidem accusantium laborum! Perspiciatis eius sunt odit perferendis ipsam facere expedita consectetur aspernatur nulla voluptatum dicta praesentium a temporibus ipsum voluptate iusto, possimus, commodi quo? Inventore, ad distinctio illo voluptas voluptate quas voluptatum ratione sequi vel ipsa debitis tenetur natus architecto deleniti quisquam officiis adipisci dignissimos excepturi recusandae dolore dolorum exercitationem eaque magni! Ea hic officiis cum, consequatur voluptate non necessitatibus aspernatur quas quo quaerat voluptates ipsa perferendis unde cupiditate? Reprehenderit officiis rerum minus inventore doloremque tenetur similique? Vero veritatis praesentium sapiente facilis cumque assumenda excepturi eaque. Quibusdam fuga doloremque reprehenderit, beatae minus fugiat magni est cupiditate sequi earum nemo quos non molestias saepe ad praesentium maxime rem mollitia, ratione accusamus! Sed similique, amet rerum recusandae quidem, temporibus cum dolorum repellat repudiandae, modi neque ad expedita. Aliquam voluptas totam magnam quibusdam voluptatibus perferendis aut laboriosam quas neque tempore! Debitis molestias ea a animi delectus, nisi dolore velit alias perspiciatis et. Aspernatur reprehenderit obcaecati ad, voluptatem fugiat consectetur iure totam, et hic officiis aperiam reiciendis distinctio, dolores voluptatum autem. Hic quo ex accusantium accusamus velit quia temporibus perspiciatis dignissimos ea modi rem eveniet tenetur eligendi officia laborum, corrupti tempore consequatur nulla. Quisquam officia maxime assumenda, impedit error excepturi dignissimos hic reprehenderit, eos magni expedita voluptatibus repellendus consequuntur minus soluta id blanditiis omnis sapiente suscipit ad ipsum dolores sequi. Tenetur fuga eveniet natus assumenda reiciendis? Officia ipsum quidem enim voluptate itaque illo tempora vel facilis, rerum accusantium non saepe corporis tempore dolores pariatur autem quaerat sequi ipsam tenetur architecto ducimus ab praesentium hic excepturi. Molestias nemo debitis aut porro, consequatur facilis quia assumenda ullam et facere, molestiae voluptate eveniet consequuntur error, ab magni consectetur. Sed, id qui vitae dolores iste incidunt explicabo soluta fugiat, voluptatem repellendus ex? Vel officia magni fugiat tenetur dicta sint doloribus laborum accusantium id possimus, rerum enim incidunt, nemo veritatis at quisquam consequatur atque molestias, necessitatibus beatae nulla officiis culpa accusamus totam. Labore mollitia sunt magni quisquam distinctio, laborum temporibus amet sint aut assumenda neque aperiam veritatis obcaecati corporis odit accusamus eligendi doloribus modi similique dolorem ipsa porro culpa voluptate beatae. Esse mollitia quos eum, vitae sunt totam cumque ullam consequatur reiciendis, iure quibusdam quod quae odio eos quis beatae iste? Nisi voluptatibus harum quasi cumque itaque.`,
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
                  <Link
                    href={project.external!}
                    target="_blank"
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
                        <p className="line-clamp-6 text-ellipsis pt-2 text-transparent bg-gradient-to-t from-gray-500 to-front bg-clip-text">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
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
