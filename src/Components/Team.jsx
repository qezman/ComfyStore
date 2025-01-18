import React from "react";
import Image from "next/image"; // Import Image from next/image
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";

const members = [
  { name: "Yasmine Harun", role: "Team Lead/Backend Developer", img: one },
  { name: "Danielle Samantha", role: "Marketing Lead", img: two },
  { name: "John Doe", role: "Product Manager", img: three },
  { name: "Charles Tresure", role: "Product Designer", img: four },
  { name: "Jimoh Kazeem", role: "Frontend Developer", img: five },
  { name: "Abdul Hassan", role: "Marketing Intern", img: six },
  { name: "Idrissa Amin", role: "Graphics Designer", img: seven },
  { name: "McCarteney McHenry", role: "Content/HR", img: eight },
  { name: "Tyler Andrews", role: "Content Writer", img: nine }
];

export function Team({}) {
  return (
    <article className="mt-20">
      <h1 className="my-3 text-center text-2xl xl:text-4xl">Meet the team</h1>
      <p className="text-center text-sm text-slate-600 lg:text-lg">
        Discover the faces behind Sync Innovative, our passionate team dedicated
        to your community's success.
      </p>

      <aside className="mt-10 space-y-4 md:space-y-0 md:gap-y-4 lg:gap-y-8 2xl:gap-y-16 md:mx-20 grid md:grid-cols-2 lg:grid-cols-3 xl:mx-80 2xl:w-[50%] 2xl:mx-auto justify-center justify-items-center">
        {members.map(member =>
          <article
            key={member.name}
            className="border border-slate-300 rounded-lg flex flex-col justify-center items-center w-full md:w-56 lg:w-64 py-8"
          >
            <Image
              src={member.img}
              alt={member.name}
              className="h-32 w-32 rounded-full border-2"
            />
            <p className="text-center text-lg mt-2 py-1 font-bold">
              {member.name}
            </p>
            <p className="text-center text-slate-700">
              {member.role}
            </p>
            <p className="flex mt-3 gap-x-3 text-slate-500">
              <FaLinkedinIn />
              <FaTwitter />
            </p>
          </article>
        )}
      </aside>
    </article>
  );
}
