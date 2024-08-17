import { FC } from "react";

type StatsCardProps = {
  title: string;
  value: string;
};

const StatsCard: FC<StatsCardProps> = ({ title, value }) => {
  return (
    <div className="px-6 py-3 w-full border border-neutral-gray flex justify-between items-center">
      <h4 className="text-xs uppercase font-bold text-neutral-gray">{title}</h4>
      <p className="text-xl font-semibold text-neutral-white ">{value}</p>
    </div>
  );
};

export default StatsCard;
