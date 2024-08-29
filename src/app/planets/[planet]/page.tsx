"use client";

import { useState } from "react";
import data from "@/../../data/data.json";
import StatsCard from "@/app/components/StatsCard";
import PlanetInfo from "@/app/components/PlanetInfo";
import planet from "@/../../assets/planet-jupiter.svg";
import planetInternal from "@../../../public/geology-earth.png";
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
      ? `/planet-${planetData.name.toLowerCase()}.svg` // Corrected to point to `public`
      : currentSection === "structure"
      ? `/internal-${planetData.name.toLowerCase()}.png` // Corrected to point to `public`
      : `/geology-${planetData.name.toLowerCase()}.png`; // Corrected to point to `public`

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
    <div className="font-body h-screen z-50 text-center ">
      <div className="tablet:hidden">
        <SubLinks currentSection={currentSection} setCurrentSection={setCurrentSection} />
      </div>
      <div className="container h-full">
        {/* Use SubLinks component here */}

        <div className="content | tablet:flex flex-col gap-4 h-full">
          <div className="flex justify-center mb-4 w-auto h-1/2 relative">
            <Image
              width={111}
              height={111}
              src={imageSrc}
              alt={`${planetData.name}`}
              className="object-contain w-auto"
            />
            {currentSection == "geology" && (
              <Image
                src={planetInternal}
                alt={`${planetData.name}`}
                width={65}
                height={65}
                className="object-contain absolute bottom-2"
              />
            )}
          </div>
          <div className="">
            <div className="grid tablet:grid-cols-2 place-items-center gap-10">
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
