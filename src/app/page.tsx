import { NextPage } from "next";
import Image from "next/image";
import StatsCard from "./components/StatsCard";
import bgStars from "@/../../assets/background-stars.svg";
import PlanetInfo from "./components/PlanetInfo";

const Home: NextPage<any> = () => (
  <div className="w-full h-screen">
    <Image className="w-full absolute h-screen object-cover -z-10 bg-repeat" src={bgStars} alt="" />
    <PlanetInfo
      description="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
      heading={"mercury"}
      link={""}
    />
  </div>
);

export default Home;
