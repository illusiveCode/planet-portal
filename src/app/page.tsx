import Link from "next/link";
import { NextPage } from "next";
import StatsCard from "./components/StatsCard";

const Home: NextPage<any> = () => (
  <div className="w-full">
    <StatsCard title="Radius" unit="KM" value={50.7} />
    <hr />
  </div>
);

export default Home;
