"use client";
import { useState } from "react";
import ".//globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Layout from "./Components/Layout";

const poppins = "Poppins, sans-serif";

const RootLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Layout>
      <html lang="en">
        <body
          style={{ fontFamily: poppins }}
          className={isDarkMode ? "dark" : "light"}
        >
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <main className="relative overflow-hidden lg:mb-10 mb-5">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </Layout>
  );
};

export default RootLayout;
