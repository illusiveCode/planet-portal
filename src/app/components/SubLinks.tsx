"use client";

import { FC } from "react";

type SubLinksProps = {
  currentSection: string;
  setCurrentSection: (section: string) => void;
};

const SubLinks: FC<SubLinksProps> = ({ currentSection, setCurrentSection }) => {
  const links = [
    { title: "Overview", link: "overview" },
    { title: "Structure", link: "structure" },
    { title: "Surface", link: "geology" },
  ];

  return (
    <div className="grid grid-cols-3 z-40 mb-6 tablet:grid-cols-1 tablet:place-items-start">
      {links.map((item) => (
        <button
          key={item.link}
          onClick={() => {
            console.log(`Clicked link: ${item.link}`); // Log the link to the console
            setCurrentSection(item.link); // Update the current section state
          }}
          className={`${
            currentSection === item.link ? "tablet:bg-red-500 w-full" : ""
          } text-h4 uppercase`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default SubLinks;
