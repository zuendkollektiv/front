import Link from "next/link";

interface Reference {
  name: string;
  url: string;
}

const refs: Reference[] = [
  {
    name: "4gb (georgia)",
    url: "https://www.4gb.ge/",
  },
  {
    name: "at.tension festival",
    url: "https://www.attension-festival.de/",
  },
  {
    name: "bauhaus university",
    url: "https://www.uni-weimar.de/en/",
  },
  {
    name: "bucht der träumer",
    url: "https://buchtdertraeumer.de/",
  },
  {
    name: "chaos communication congress",
    url: "https://www.ccc.de/en/",
  },
  {
    name: "feria internacional de la pirotecnia (mexico)",
    url: "https://feriainternacionaldelapirotecnia.gob.mx",
  },
  {
    name: "fusion festival",
    url: "https://www.fusion-festival.de/",
  },
  {
    name: "studio julian charrière",
    url: "https://julian-charriere.net/projects/controlled-burn",
  },
  {
    name: "kater blau",
    url: "https://katerblau.de/",
  },
  {
    name: "kunstfest weimar",
    url: "https://www.kunstfest-weimar.de/",
  },
  {
    name: "locolor",
    url: "https://locolor.de/",
  },
  {
    name: "mensch meier",
    url: "https://menschmeier.berlin/",
  },
  {
    name: "mjut",
    url: "https://www.mjut.de/",
  },
  {
    name: "off the radar",
    url: "https://www.offtheradar.de/",
  },
  // {
  //   name: "theater titanick",
  //   url: "https://www.titanick.de/",
  // },
  {
    name: "theaterdiscounter",
    url: "https://theaterdiscounter.de/",
  },
];

export function References() {
  return (
    <section className="bg-black">
      <div className="">
        <h2 className="border-t-[0.5px] border-gray-700 text-center text-4xl font-pirata p-8">
          in girum imus nocte et consumimur igni
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-[0.5px] border-gray-700">
          {refs.map((ref, index) => (
            <div
              key={ref.name}
              className={`p-4 text-center flex flex-col hover:bg-gradient-to-r hover:from-red-700 hover:to-orange-600 duration-300 divide-y-[0.5px] divide-gray-700 border-b-[0.5px] border-gray-700
                ${index === 0 || index === 1 || index === 2 || index === 3 ? "border-t-[0.5px] border-gray-700" : ""}
                ${index % 4 !== 3 ? "border-r-[0.5px] border-gray-700" : ""}
              `}
            >
              <div
                // href={ref.url}
                // target="_blank"
                // rel="noopener noreferrer"
                className="font-mono relative transition-all ease-in-out text-white hover:text-black hover:font-pirata md:hover:text-2xl hover:text-xl flex flex-grow items-center justify-center h-12 md:text-lg text-base"
              >
                <span className="relative z-10">{ref.name}</span>
                <span className=" absolute -inset-4 "></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
