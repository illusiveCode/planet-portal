"use client";

import { useState } from "react";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import hamburgerIcon from "@/../../assets/icon-hamburger.svg";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="py-4 flex justify-between items-center tablet:flex-col  text-white">
      <Link href="/" className="text-lg font-bold uppercase">
        The Planets
      </Link>
      {/* Hamburger Icon for mobile */}
      <button className="tablet:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
        <Image src={hamburgerIcon} alt="Menu" width={24} height={24} />
      </button>
      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } tablet:flex justify-end gap-8 items-center w-full tablet:w-auto flex-wrap`}
      >
        <Link href="/planets/mercury" className="text-white block mt-4 tablet:mt-0">
          MERCURY
        </Link>
        <Link href="/planets/venus" className="text-white block mt-4 tablet:mt-0">
          VENUS
        </Link>
        <Link href="/planets/earth" className="text-white block mt-4 tablet:mt-0">
          EARTH
        </Link>
        <Link href="/planets/mars" className="text-white block mt-4 tablet:mt-0">
          MARS
        </Link>
        <Link href="/planets/jupiter" className="text-white block mt-4 tablet:mt-0">
          JUPITER
        </Link>
        <Link href="/planets/saturn" className="text-white block mt-4 tablet:mt-0">
          SATURN
        </Link>
        <Link href="/planets/uranus" className="text-white block mt-4 tablet:mt-0">
          URANUS
        </Link>
        <Link href="/planets/neptune" className="text-white block mt-4 tablet:mt-0">
          NEPTUNE
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
