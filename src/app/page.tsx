import { NextPage } from "next";
import Image from "next/image";
import StatsCard from "./components/StatsCard";
import bgStars from "@/../../assets/background-stars.svg";
import earth from "@/../../public/planet-earth.svg";
import PlanetInfo from "./components/PlanetInfo";

const Home: NextPage<any> = () => (
  <div className="container w-full h-screen grid justify-center items-center">
    <div className="">
      <Image src={earth} alt="" className="object-cover w-fit mx-auto animate-slow-spin" />
    </div>
    <h1 className="text-neutral-white text-center text-h2">Select a Planet from the Navigation</h1>
  </div>
);

export default Home;
