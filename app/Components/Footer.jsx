import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="py-4">
      <div className="flex justify-center items-center">
        <div className="flex gap-4">
          <FaTwitter
            className="text-xl cursor-pointer text-gray-950 hover:text-gray-70000"
            onClick={() =>
              openLinkInNewTab("https://twitter.com/Adejokemi_472")
            }
          />
          <FaLinkedin
            className="text-xl cursor-pointer text-gray-950 hover:text-gray-700"
            onClick={() =>
              openLinkInNewTab(
                "https://www.linkedin.com/in/omitogun-sherifat-ajoke/"
              )
            }
          />
          <FaGithub
            className="text-xl cursor-pointer text-gray-950 hover:text-gray-800"
            onClick={() => openLinkInNewTab("https://github.com/Adejokemi")}
          />
          <FaWhatsapp
            className="text-xl cursor-pointer text-gray-950 hover:text-gray-800"
            onClick={() => openLinkInNewTab("https://wa.me/+2349011814858")}
          />
        </div>
      </div>
      <div className="flex justify-center text-sm items-center mt-4 text-gray-600">
        <p>© SherylCode {new Date().getFullYear()} </p>
      </div>
    </div>
  );
};

export default Footer;
