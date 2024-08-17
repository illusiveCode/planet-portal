"use client";

import data from "@/../../data/data.json";
import StatsCard from "@/app/components/StatsCard";
import Link from "next/link";

export default function Page({ params }: { params: { planet: string } }) {
  // Find the planet data from the JSON
  const planetData = data.find(
    (planet) => planet.name.toLowerCase() === params.planet.toLowerCase()
  );

  // Handle case where planet is not found
  if (!planetData) {
    return <div className="text-white font-body h-screen">Planet not found.</div>;
  }

  return (
    <div className="text-white font-body h-screen z-50 p-6">
      <h1 className="text-4xl mb-4">{planetData.name}</h1>
      {/* <Image src={planetData.overview.source} alt={`${planetData.name}`} width={50} height={50} /> */}
      <p className="mb-2"> {planetData.overview.content}</p>
      <Link href={planetData.overview.source}>source</Link>
      <StatsCard title="Rotaition Time" value={planetData.rotation} />
      <StatsCard title="Revolution Time" value={planetData.revolution} />
      <StatsCard title="Radius" value={planetData.radius} />
      <StatsCard title="Average Temp." value={planetData.temperature} />
    </div>
  );
}
