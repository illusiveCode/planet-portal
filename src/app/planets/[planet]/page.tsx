"use client";

import React from "react";
import data from "@/../../data/data.json";

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
    <div className="text-white font-body h-screen p-6">
      <h1 className="text-4xl mb-4">{planetData.name}</h1>
      <img src={planetData.images.planet} alt={`${planetData.name} image`} className="mb-4" />
      <p className="mb-2">
        <strong>Overview:</strong> {planetData.overview.content}
      </p>
      <p className="mb-2">
        <strong>Rotation:</strong> {planetData.rotation}
      </p>
      <p className="mb-2">
        <strong>Revolution:</strong> {planetData.revolution}
      </p>
      <p className="mb-2">
        <strong>Radius:</strong> {planetData.radius}
      </p>
      <p className="mb-2">
        <strong>Temperature:</strong> {planetData.temperature}
      </p>
    </div>
  );
}
