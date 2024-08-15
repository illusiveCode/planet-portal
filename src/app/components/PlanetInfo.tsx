import Link from "next/link";
import React from "react";

type PlanetInfoProps = {
  heading: string;
  description: string;
  link: string;
};

const PlanetInfo: React.FC<PlanetInfoProps> = ({ heading, description, link }) => {
  return (
    <div className="p-4 text-white rounded-md">
      <h2 className="text-3xl font-bold">{heading}</h2>
      <p className="mt-2 text-lg">{description}</p>
      <Link
        href={link}
        className="mt-4 text-blue-400 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source: Wikipedia
      </Link>
    </div>
  );
};

export default PlanetInfo;
