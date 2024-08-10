// components/Navbar.tsx
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between ">
      <Link href="/" className="text-white text-lg font-bold">
        The Planets
      </Link>
      <div className="tablet:flex justify-end gap-8 items-center hidden">
        <Link href="/planets/mercury" className="text-white">
          MERCURY
        </Link>
        <Link href="/planets/venus" className="text-white">
          VENUS
        </Link>
        <Link href="/planets/earth" className="text-white">
          EARTH
        </Link>
        <Link href="/planets/mars" className="text-white">
          MARS
        </Link>
        <Link href="/planets/jupiter" className="text-white">
          JUPITER
        </Link>
        <Link href="/planets/saturn" className="text-white">
          SATURN
        </Link>
        <Link href="/planets/uranus" className="text-white">
          URANUS
        </Link>
        <Link href="/planets/neptune" className="text-white">
          NEPTUNE
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
