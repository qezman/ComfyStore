"use client";
import { useState } from "react";
import About from "./About";
import ContactForm from "./ContactForm";
import Service from "./Service";
import Project from "./Project";
import SkillsCard from "./SkillsCard";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="lg:mx-0 mx-4 mt-8">
      <div className="flex justify-between items-center overflow-x-auto">
        <button
          className={`px-4 py-2 font-semibold text-lg ${
            activeTab === 1 ? "border-b-4 border-pink-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Projects
        </button>
        <button
          className={`px-4 py-2 font-semibold text-lg ${
            activeTab === 2 ? "border-b-4 border-pink-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          About
        </button>
        <button
          className={`px-4 py-2 font-semibold text-lg ${
            activeTab === 3 ? "border-b-4 border-pink-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          Skills
        </button>
        <button
          className={`px-4 py-2 font-semibold text-lg ${
            activeTab === 4 ? "border-b-4 border-pink-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick(4)}
        >
          Services
        </button>
        <button
          className={`px-4 py-2 font-semibold text-lg ${
            activeTab === 5 ? "border-b-4 border-pink-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick(5)}
        >
          Contact
        </button>
      </div>

      <div className="mt-4 overflow-x-auto">
        {activeTab === 1 && (
          <div>
            <Project />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <About />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <SkillsCard />
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <Service />
          </div>
        )}
        {activeTab === 5 && (
          <div>
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
