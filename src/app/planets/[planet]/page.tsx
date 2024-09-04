"use client";

import { useState } from "react";
import data from "@/../../data/data.json";
import StatsCard from "@/app/components/StatsCard";
import PlanetInfo from "@/app/components/PlanetInfo";
import SubLinks from "@/app/components/SubLinks";
import Image from "next/image";

export default function Page({ params }: { params: { planet: string } }) {
  const planetData = data.find(
    (planet) => planet.name.toLowerCase() === params.planet.toLowerCase()
  );

  if (!planetData) {
    return <div className="text-white font-body h-screen">Planet not found.</div>;
  }

  const [currentSection, setCurrentSection] = useState("overview");

  const imageSrc =
    currentSection === "overview" || currentSection === "geology"
      ? `${planetData.images.planet}`
      : `${planetData.images.internal}`;

  const description =
    currentSection === "overview"
      ? planetData.overview.content
      : currentSection === "structure"
      ? planetData.structure.content
      : planetData.geology.content;

  const sourceLink =
    currentSection === "overview"
      ? planetData.overview.source
      : currentSection === "structure"
      ? planetData.structure.source
      : planetData.geology.source;

  return (
    <div className="font-body h-screen z-50 text-center ">
      <div className="tablet:hidden">
        <SubLinks currentSection={currentSection} setCurrentSection={setCurrentSection} />
      </div>
      <div className="container h-full">
        <div className="content | tablet:flex flex-col gap-4 h-full">
          <div className="flex justify-center mx-auto mb-4 w-fit h-1/2 relative">
            <Image
              width={111}
              height={111}
              src={imageSrc}
              alt={`${planetData.name}`}
              className="object-contain w-fit py-4"
            />
            {currentSection == "geology" && (
              <Image
                src={planetData.images.geology}
                alt={`${planetData.name}`}
                width={150}
                height={150}
                className="object-contain absolute bottom-12"
              />
            )}
          </div>
          <div className="">
            <div className="grid tablet:grid-cols-2 place-items-center gap-2">
              <div>
                <PlanetInfo heading={planetData.name} description={description} link={sourceLink} />
              </div>
              <div className="w-full hidden tablet:block">
                <SubLinks currentSection={currentSection} setCurrentSection={setCurrentSection} />
              </div>
            </div>

            <div className="grid gap-2 my-12 tablet:flex pb-10">
              <StatsCard title="Rotation Time" value={planetData.rotation} />
              <StatsCard title="Revolution Time" value={planetData.revolution} />
              <StatsCard title="Radius" value={planetData.radius} />
              <StatsCard title="Average Temp." value={planetData.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
