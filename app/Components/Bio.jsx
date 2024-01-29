'use client'
import { useState } from "react";
import {
  FaBirthdayCake,
  FaLink,
  FaMapMarkerAlt,
  FaShoppingBag,
} from "react-icons/fa";

const Bio = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <h1 className="lg:text-4xl text-2xl font-bold text-gray-950 pb-1">
        Omitogun Sherifat <span className="text-pink-500 text-sm">Ajoke</span>
      </h1>
      <p className="text-slate-800 font-semibold text-sm pb-3">
        🍰 From Dough to Code 🖥️ Crafting Tasty Treats and Elegant Algorithms!
      </p>
      <p className="text-slate-800 font-medium text-base">
        Muslimah || Baker || Serial volunteer || Explorer || Frontend dev ||
        Cybersecurity enthusiast ||
      </p>
      <div className="pt-5 flex justify-between items-center lg:w-3/5">
        <p className="flex gap-1 lg:gap-1.5 items-center ">
          <span className="text-gray-600">
            {" "}
            <FaShoppingBag />
          </span>{" "}
          Available
        </p>
        <p className="flex gap-1 lg:gap-1.5 items-center">
          <span className="text-gray-600">
            {" "}
            <FaMapMarkerAlt />
          </span>{" "}
          Nigeria
        </p>
        <div className="relative">
          <span
            className="cursor-pointer flex gap-1 lg:gap-1.5 items-center text-pink-500 font-bold"
            onClick={toggleDropdown}
          >
            <span className="text-gray-600">
              {" "}
              <FaLink />
            </span>{" "}
            /Links
          </span>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-40">
              <a
                href="https://wa.me/+2349011814858"
                className="block px-4 py-2 text-gray-950 hover:bg-gray-600"
              >
                WhatsApp
              </a>
              <a
                href="https://github.com/Adejokemi"
                className="block px-4 py-2 text-gray-950 hover:bg-gray-400"
              >
                GitHub
              </a>
              <a
                href="mailto:omitogunsherifat75@gmail.com"
                className="block px-4 py-2 text-gray-950 hover:bg-gray-400"
              >
                Email
              </a>
            </div>
          )}
        </div>
        <p className="flex gap-1 lg:gap-1.5 items-center font-medium">
          <span className="text-gray-400">
            <FaBirthdayCake />
          </span>
          March 19th
        </p>
      </div>
    </div>
  );
};

export default Bio;
