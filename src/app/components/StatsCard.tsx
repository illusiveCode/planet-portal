import { FC } from "react";

type StatsCardProps = {
  title: string;
  value: number | string;
  unit?: string;
};

const StatsCard: FC<StatsCardProps> = ({ title, value, unit }) => {
  return (
    <div className="px-6 py-3 w-full border border-neutral-gray flex justify-between items-center">
      <h4 className="text-xs uppercase font-bold text-neutral-gray">{title}</h4>
      <p className="text-xl font-semibold text-neutral-white ">
        {value} {unit && <span>{unit}</span>}
      </p>
    </div>
  );
};

export default StatsCard;
