import Link from "next/link";
import { FC } from "react";
import linkIcon from "@/../../assets/icon-source.svg";
import Image from "next/image";

type PlanetInfoProps = {
  heading: string;
  description: string;
  link: string;
};

const PlanetInfo: FC<PlanetInfoProps> = ({ heading, description, link }) => {
  return (
    <div className="p-4 text-white rounded-md">
      <h2 className="text-h2 font-bold">{heading}</h2>
      <p className="mt-2 text-h4">{description}</p>
      <div className="flex items-center gap-1 mt-8  text-neutral-gray justify-center text-h3">
        Source:
        <Link
          href={link}
          className="flex items-center gap-1 text-neutral-gray font-semibold underline"
        >
          Wikipedia <Image src={linkIcon} alt="" className="object-cover w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default PlanetInfo;
