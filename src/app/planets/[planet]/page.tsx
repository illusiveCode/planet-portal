"use client";

import { useState } from "react";
import data from "@/../../data/data.json";
import StatsCard from "@/app/components/StatsCard";
import PlanetInfo from "@/app/components/PlanetInfo";
import planet from "@/../../assets/planet-mercury-internal.svg";
import SubLinks from "@/app/components/SubLinks"; // Import the new component
import Image from "next/image";

export default function Page({ params }: { params: { planet: string } }) {
  // Find the planet data from the JSON
  const planetData = data.find(
    (planet) => planet.name.toLowerCase() === params.planet.toLowerCase()
  );

  // Handle case where planet is not found
  if (!planetData) {
    return <div className="text-white font-body h-screen">Planet not found.</div>;
  }

  // State to manage the current section (overview, structure, geology)
  const [currentSection, setCurrentSection] = useState("overview");

  // Dynamically set the image source based on the selected section
  const imageSrc =
    currentSection === "overview"
      ? planetData.images.planet
      : currentSection === "structure"
      ? planetData.images.internal
      : planetData.images.geology;

  // Dynamically set the description and source link based on the selected section
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
    <div className="text-white font-body h-screen z-50 p-6 text-center ">
      {/* Use SubLinks component here */}
      <div className="tablet:hidden">
        <SubLinks currentSection={currentSection} setCurrentSection={setCurrentSection} />
      </div>
      <div className="content | tablet:flex flex-col gap-4 h-full">
        <div className="flex justify-center mb-4 w-auto h-1/2">
          {/* <Image src={`@/../.${imageSrc}`} alt={`${planetData.name}`} width={50} height={50} /> */}
          <Image
            src={planet}
            alt={`${planetData.name}`}
            width={111}
            height={111}
            className="object-contain"
          />
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-10">
            <PlanetInfo heading={planetData.name} description={description} link={sourceLink} />
            <SubLinks currentSection={currentSection} setCurrentSection={setCurrentSection} />
          </div>

          <div className="grid gap-2 mt-6 tablet:flex">
            <StatsCard title="Rotation Time" value={planetData.rotation} />
            <StatsCard title="Revolution Time" value={planetData.revolution} />
            <StatsCard title="Radius" value={planetData.radius} />
            <StatsCard title="Average Temp." value={planetData.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
