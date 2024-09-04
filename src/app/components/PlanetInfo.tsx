import Link from "next/link";
import { FC } from "react";
import linkIcon from "@/../../public/icon-source.svg";
import Image from "next/image";

type PlanetInfoProps = {
  heading: string;
  description: string;
  link: string;
};

const PlanetInfo: FC<PlanetInfoProps> = ({ heading, description, link }) => {
  return (
    <div className=" text-white rounded-md h-full">
      <h2 className="text-h2 font-bold tablet:text-left">{heading}</h2>
      <p className="mt-2 text-h4 tablet:text-[12px] desktop:text-lg  tablet:text-left tablet:mr-14">
        {description}
      </p>
      <div className="flex items-center gap-1 mt-8 tablet:justify-start text-neutral-gray justify-center text-h3 tablet:text-[12px] desktop:text-lg">
        Source:
        <Link
          href={link}
          className="flex items-center gap-1 text-neutral-gray font-semibold underline"
          target="_blank"
        >
          Wikipedia <Image src={linkIcon} alt="" className="object-cover w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default PlanetInfo;
