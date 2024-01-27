import React from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Button from "./Button";
import Image from "next/image";

const About = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="lg:my-10 my-3">
        <div className="">
          <h2 className="text-4xl tracking-wide mb-4">
            <span className="font-bold">Hello👋</span>
          </h2>
          <p className="text-slate-800 lg:text-base text-sm lg:tracking-wide lg:leading-7 leading-5 mb-5">
            I'm Omitogun Sherifat Ajoke, a dedicated frontend developer with a
            burning passion for creating visually appealing and user-friendly
            websites that deliver exceptional user experiences. With a robust
            foundation in HTML, CSS (Sass, Tailwind, Bootstrap), and JavaScript
            (React, Next.JS), I find immense joy in translating design concepts
            into fully functional and responsive interfaces.
          </p>
          <p className="text-slate-800   lg:text-base text-sm lg:tracking-wide lg:leading-7 leading-5">
            {" "}
            My journey in web development has equipped me with the skills to
            craft seamless and captivating user interfaces. I am driven by the
            desire to not only meet but exceed user expectations. Constantly
            seeking to expand my knowledge and skills, I am committed to staying
            at the forefront of web development trends and technologies.
          </p>
        </div>
        <div className="my-10">
          <div className="flex justify-center items-center">
            <Image
              src={"https://i.imgur.com/9n6h0Ou.jpg"}
              width={140}
              height={140}
              className="w-full h-80 object-cover "
            />
          </div>
        </div>

        <p className="text-slate-800 lg:text-base text-sm lg:tracking-wide lg:leading-7 leading-5 mb-5">
          Beyond the lines of code, I am a dynamic individual known for my
          multifaceted talents and diverse interests. As a passionate baker, I
          infuse my creations with not just flavors but also the warmth that
          defines my personality. Beyond the kitchen, I am a dedicated serial
          volunteer, contributing my time and skills to causes close to my
          heart.
        </p>
        <p className="text-slate-800  lg:text-base text-sm lg:tracking-wide lg:leading-7 leading-5 ">
          An enthusiastic explorer, I thrive on the excitement of discovering
          new places and immersing myself in different cultures. However, where
          my heart truly beats with creativity and innovation is in frontend
          development. This unique combination of passions, alongside my
          commitment to constant growth, weaves a rich tapestry that defines my
          character and underscores the positive impact I seek to make in both
          virtual and physical realms.
        </p>
      </div>
    </div>
  );
};

export default About;
