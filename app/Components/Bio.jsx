import Link from "next/link";
import React from "react";
import { FaBirthdayCake, FaHome, FaLink, FaMapMarkerAlt, FaShoppingBag } from "react-icons/fa";

const Bio = () => {
  return (
    <div>
      <h1 className="lg:text-4xl text-2xl font-bold text-gray-950 pb-1">
        Omitogun Sherifat <span className="text-pink-500 text-sm">Ajoke</span>
      </h1>
      <p className="text-slate-800 font-semibold text-sm pb-3">
        🍰 From Dough to Code 🖥️ Crafting Tasty Treats and Elegant Algorithms!
      </p>
      <p className="text-slate-800 font-medium text-base">
        Muslimah || Baker || Serial volunteer || Explorer || 
        Frontend dev || Cybersecurity enthusiast ||
      </p>
      <div className="pt-5 flex justify-between items-center lg:w-3/5">
        <p className="flex gap-1 lg:gap-1.5 items-center ">
         <span className="text-gray-600"> <FaShoppingBag /></span> Available
        </p>
        <p className="flex gap-1 lg:gap-1.5 items-center">
         <span className="text-gray-600"> <FaMapMarkerAlt /></span> Nigeria
        </p>
        <Link href={"/"} className="flex gap-1 lg:gap-1.5 items-center text-pink-500 font-bold">
         <span className="text-gray-600"> <FaLink /></span> /Links
        </Link>
        <p className="flex gap-1 lg:gap-1.5 items-center font-medium">
         <span className="text-gray-600"> <FaBirthdayCake /></span> March 19th
        </p>
      </div>
    </div>
  );
};

export default Bio;
