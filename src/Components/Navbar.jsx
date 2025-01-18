"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaCode, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import Qez from "../assets/logo.svg";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section>
      <article className="flex items-center justify-between px-7 py-5 border-b lg:px-16">
        <Link href="/home">
          <Image
            src={Qez}
            width={30}
            height={30}
            className="cursor-pointer"
            alt="Qez"
          />
        </Link>
        <FaBars onClick={toggleSidebar} className="cursor-pointer md:hidden" />

        <aside className="hidden md:flex lg:text-xl lg:gap-x-6">
          <p className="text-sm font-semibold px-4 py-2 cursor-pointer">
            <Link href="/about">About Us</Link>
          </p>
          <Link href="/pricing">
            <p className="text-sm font-semibold px-4 py-2 cursor-pointer">
              Pricing
            </p>
          </Link>
          <Link href={"/contact"}>
            <p className="text-sm font-semibold px-4 py-2 cursor-pointer">
              Contacts
            </p>
          </Link>
          <Link href="/login">
            <p className="text-sm font-semibold px-6 py-2 text-white rounded-xl bg-[#181c95cc] cursor-pointer lg:px-10">
              Login
            </p>
          </Link>
        </aside>
      </article>

      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white shadow-lg z-50">
          <div className="flex items-center justify-between px-4 py-5 border-b border-gray-700">
            <Image src={Qez} width={30} height={30} className="" alt="Qez" />
            <FaTimes onClick={toggleSidebar} className="cursor-pointer" />
          </div>
          <nav className="mt-5">
            <ul>
              <Link href="/about">
                <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer">About Us</p>
              </Link>
              <Link href="/pricing">
                <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Pricing</p>
              </Link>
              <Link href="/contact">
                <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Contact Us</p>
              </Link>
              <Link href="/login">
                <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Log in</p>
              </Link>
            </ul>
          </nav>
        </aside>
      )}
    </section>
  );
};

export default Navbar;
