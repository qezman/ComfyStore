"use client";
import React, { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiJavascript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import FrontendTechnologies from "../components/FrontendTechnologies";
import SoftSkills from "../components/SoftSkills";

const ionColors = {
  SiHtml5: "#E44D26",
  SiCss3: "#4299e1",
  SiTailwindcss: "#38B2AC",
  SiBootstrap: "#7952B3",
  SiSass: "#CC6699",
  SiJavascript: "#F7DF1E",
  SiReact: "#61DAFB",
  SiNextdotjs: "#000000",
};

const skillsData = [
  { title: "HTML", percent: 95, icon: SiHtml5, color: ionColors.SiHtml5 },
  { title: "CSS", percent: 75, icon: SiCss3, color: ionColors.SiCss3 },
  {
    title: "Tailwind CSS",
    percent: 90,
    icon: SiTailwindcss,
    color: ionColors.SiTailwindcss,
  },
  {
    title: "Bootstrap",
    percent: 80,
    icon: SiBootstrap,
    color: ionColors.SiBootstrap,
  },
  { title: "Sass", percent: 80, icon: SiSass, color: ionColors.SiSass },
  {
    title: "JavaScript",
    percent: 75,
    icon: SiJavascript,
    color: ionColors.SiJavascript,
  },
  { title: "React.JS", percent: 65, icon: SiReact, color: ionColors.SiReact },
  {
    title: "Next.JS",
    percent: 50,
    icon: SiNextdotjs,
    color: ionColors.SiNextdotjs,
  },
];

const SkillsCard = () => {
  const [currentSkill, setCurrentSkill] = useState({
    title: "HTML",
    percent: 95,
    icon: SiHtml5,
    color: ionColors.SiHtml5,
  });

  const circumference = 2 * Math.PI * 120;

  return (
    <main className="my-10">
      {/* <h2 className="text-2xl mb-6 font-medium">Technologies</h2> */}
      <section className="space-y-6 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
        <div className="grid grid-cols-2 gap-6 lg:gap-0">
          {skillsData.map((skill) => (
            <button
              key={skill.title}
              onClick={() => setCurrentSkill(skill)}
              className={`lg:px-4 py-2 text-xl text-gray-100 transition rounded-md h-14 lg:w-44 hover:bg-pink-600 ${
                currentSkill.title === skill.title
                  ? `font-bold ring-2 ring-gray-100 bg-pink-600`
                  : "bg-gray-600"
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <svg className="transform -rotate-90 w-72 h-72">
            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              className="text-gray-100"
            />

            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (currentSkill.percent / 100) * circumference
              }
              className="text-pink-600"
            />
            <foreignObject
              x="100"
              y="100"
              width="80"
              height="80"
              className="text-gray-600 text-center"
            >
              {React.createElement(currentSkill.icon, {
                size: "5em",
              })}
            </foreignObject>
          </svg>
        </div>
      </section>

      <div className="py-10 lg:pt-20">
        <div className="grid gap-8 lg:gap-0 lg:grid-cols-2">
          <FrontendTechnologies />
          <SoftSkills />
        </div>
      </div>
    </main>
  );
};

export default SkillsCard;
