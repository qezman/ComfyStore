"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Featured from "./Featured";
import { useToggleBackground } from "../context/ToggleBackgroundContext";

const Layout = ({ children }) => {
  const { toggleBackground } = useToggleBackground();
  const router = useRouter();

  return (
    <div className={`${toggleBackground ? "light" : "dark"} main-container`}>
      <Navbar />
      <main className="lg:w-11/12 lg:mx-auto xl:w-8/12">
        {router.pathname === "/" && (
          <>
            <Herosection toggleBackground={toggleBackground} />
            <Featured toggleBackground={toggleBackground} />
          </>
        )}
        {children}
      </main>
    </div>
  );
};

export default Layout;
