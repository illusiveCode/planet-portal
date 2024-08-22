import { FC } from "react";

type StatsCardProps = {
  title: string;
  value: string;
};

const StatsCard: FC<StatsCardProps> = ({ title, value }) => {
  return (
    <div className="px-6 py-3 w-full border border-neutral-darkGray flex tablet:block tablet:text-left justify-between items-center">
      <h4 className="text-xs uppercase font-bold text-neutral-gray tablet:pb-2 tablet:text-h4">
        {title}
      </h4>
      <p className="text-xl font-semibold text-neutral-white ">{value}</p>
    </div>
  );
};

export default StatsCard;
