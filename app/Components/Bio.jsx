'use client';
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaLink, FaMapMarkerAlt, FaShoppingBag } from "react-icons/fa";

const Bio = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <h1 className="lg:text-4xl text-2xl font-bold text-gray-950 pb-1">
        Omitogun Sherifat <span className="text-pink-500 text-sm">AJOKE</span>
      </h1>
      <p className="text-slate-800 font-semibold text-sm pb-3">
        🍰 From Dough to Code 🖥️ Crafting Tasty Treats and Elegant Algorithms!
      </p>
      <p className="text-slate-800 font-medium text-base">
        Muslimah || Baker || Serial volunteer || Explorer || Frontend dev ||
        Cybersecurity enthusiast ||
      </p>
      <div className="lg:pt-5 pt-3 gap-7 flex  items-center lg:w-3/5">
        <p className="flex gap-2 items-center ">
          <span className="text-gray-700">
            <FaShoppingBag />
          </span>
          Available
        </p>
        <p className="flex gap-2 items-center">
          <span className="text-gray-700">
            <FaMapMarkerAlt />
          </span>
          Nigeria
        </p>
        <div className="relative" ref={dropdownRef}>
          <span
            className="cursor-pointer flex gap-2 items-center text-pink-500 font-bold"
            onClick={toggleDropdown}
          >
            <span className="text-pink-500 cursor-pointer">
              <FaLink />
            </span>
            /Links
          </span>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-40">
              <Link
                href="https://wa.me/+2349011814858"
                target="_blank"
                className="block px-4 py-2 text-gray-950 hover:bg-gray-600"
              >
                WhatsApp
              </Link>
              <Link
                href="https://github.com/Adejokemi"
                target="_blank"
                className="block px-4 py-2 text-gray-950 hover:bg-gray-400"
              >
                GitHub
              </Link>
              <Link
                href="mailto:omitogunsherifat75@gmail.com"
                target="_blank"
                className="block px-4 py-2 text-gray-950 hover:bg-gray-400"
              >
                Email
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bio;
