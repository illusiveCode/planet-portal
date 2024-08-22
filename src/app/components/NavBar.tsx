"use client";

import { useState } from "react";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import hamburgerIcon from "@/../../assets/icon-hamburger.svg";

// Define an array of planets with their respective colors
const planets = [
  { name: "MERCURY", color: "bg-primary-skyBlue", href: "/planets/mercury" },
  { name: "VENUS", color: "bg-primary-gold", href: "/planets/venus" },
  { name: "EARTH", color: "bg-primary-blue", href: "/planets/earth" },
  { name: "MARS", color: "bg-primary-brightRed", href: "/planets/mars" },
  { name: "JUPITER", color: "bg-primary-orange", href: "/planets/jupiter" },
  { name: "SATURN", color: "bg-primary-gold", href: "/planets/saturn" },
  { name: "URANUS", color: "bg-primary-teal", href: "/planets/uranus" },
  { name: "NEPTUNE", color: "bg-primary-blue", href: "/planets/neptune" },
];

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="top-0 border-b border-b-neutral-darkGray py-4 flex justify-between items-center tablet:flex-col text-neutral-white relative">
      <div className=" flex justify-between">
        <Link href="/" className="text-lg font-bold uppercase">
          The Planets
        </Link>
        {/* Hamburger Icon for mobile */}
        <button className="tablet:hidden z-20" onClick={toggleMenu} aria-label="Toggle Menu">
          <Image src={hamburgerIcon} alt="Menu" width={24} height={24} className="" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen
            ? "block top-16 z-40 left-0 min-h-screen transition duration-150 ease-in-out"
            : "hidden"
        } tablet:hidden absolute left-0 w-full bg-neutral-darkBlue`}
      >
        <div className=" pt-10 w-full px-6 h-screen">
          {planets.map((planet) => (
            <Link
              key={planet.name}
              href={planet.href}
              className="flex items-center justify-between py-4 border-b border-neutral-darkGray"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              <div className="flex items-center">
                <span className={`inline-block w-4 h-4 rounded-full ${planet.color} mr-4`}></span>
                <span className="text-neutral-white">{planet.name}</span>
              </div>
              <span className="text-neutral-white">&gt;</span>
            </Link>
          ))}
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden  tablet:flex justify-end gap-8 items-center w-full tablet:w-auto h-full flex-wrap">
        {planets.map((planet) => (
          <Link key={planet.name} href={planet.href} className="text-neutral-white block">
            {planet.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
