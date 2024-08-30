"use client";
import { FC } from "react";

type SubLinksProps = {
  currentSection: string;
  setCurrentSection: (section: string) => void;
};

const SubLinks: FC<SubLinksProps> = ({ currentSection, setCurrentSection }) => {
  const links = [
    { title: "Overview", link: "overview", index: "01" },
    { title: "Structure", link: "structure", index: "02" },
    { title: "Surface", link: "geology", index: "03" },
  ];

  return (
    <div className="mobile | grid grid-cols-3 z-40 tablet:grid-cols-1 w-full tablet:h-[152px]">
      {links.map((item) => (
        <button
          key={item.link}
          onClick={() => {
            setCurrentSection(item.link);
          }}
          className={`${
            currentSection === item.link ? "bg-neutral-white " : ""
          } tablet:block text-center tablet:border tablet:text-left w-full h-full text-h3 tablet:font-bold  uppercase p-4`}
        >
          <div>
            {
              <span className="hidden text-neutral-gray tablet:inline text-h3 pr-4">
                {item.index}
              </span>
            }
            <span
              className={`${currentSection === item.link ? "text-black" : ""} text-neutral-white`}
            >
              {item.title}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SubLinks;
