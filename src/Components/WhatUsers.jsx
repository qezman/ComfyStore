"use client";

import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const WhatUsers = () => {
  const [users] = useState([
    { name: "John Doe", role: "Web Developer" },
    { name: "Mary Titus", role: "Marketer" },
    { name: "Idrees Aleem", role: "Content Writer" }
  ]);

  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  useEffect(
    () => {
      const timer = setInterval(() => {
        setCurrentUserIndex(prevIndex => (prevIndex + 1) % users.length);
      }, 2000);

      return () => clearInterval(timer);
    },
    [users.length]
  );

  const currentUser = users[currentUserIndex];

  return (
    <section className="my-16 w-[85%] mx-auto md:flex md:justify-center md:w-[100%] md:mx-auto">
      <aside className="bg-blue-50 h-fit md:h-auto flex justify-center items-center text-center shadow-lg md:w-[40%] lg:w-[30%] xl:w-[40%] lg:h-72 xl:h-[400px]">
        <h1 className="text-2xl font-bold leading-relaxed px-16 py-8 lg:px-56 lg:leading-relaxed lg:text-3xl xl:text-4xl xl:px-64 xl:leading-relaxed">
          What Our Users Are Saying!
        </h1>
      </aside>

      <aside className="py-8 lg:py-4 flex flex-col justify-center items-center bg-blue-100 h-fit md:h-auto text-center shadow-lg md:w-[40%] lg:w-[30%] xl:w-[40%] lg:h-72 xl:h-[400px]">
        <section className="">
          <p className="text-lg italic px-6 lg:px-6 lg:text-xl">
            <span className="text-blue-600">
              <FaQuoteLeft />
            </span>
            Analytics - it's why we move to the solution - great to get insight
            into popular articles. Ability to integrate into our existing
            Support process and have a dedicated document view.
          </p>

          <div className="mt-3">
            <p className="text-gray-700 font-bold">
              {currentUser.name}
            </p>
            <p>
              {currentUser.role}
            </p>
          </div>
        </section>
      </aside>
    </section>
  );
};

export default WhatUsers;
