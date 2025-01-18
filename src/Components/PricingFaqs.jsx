"use client";

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const data = [
  {
    question:
      "What payment options do you accept, and what is the billing cycle?",
    answer: "We accept payments from Paystack, Credit cards and MasterCard.",
  },
  {
    question: "Can i switch to a different plan?",
    answer:
      "Send direct messages to your church members in just a few clicks with Sync Innovative , where distance is no longer a creep, feel the power behind every message.",
  },
  {
    question:
      "Do you offer any discounts or packages for long-term commitments?",
    answer:
      "Send direct messages to your church members in just a few clicks with Sync Innovative , where distance is no longer a creep, feel the power behind every message.",
  },
  {
    question: "Our church has many branches will be charged separately?",
    answer:
      "Send direct messages to your church members in just a few clicks with Sync Innovative , where distance is no longer a creep, feel the power behind every message.",
  },
  {
    question:
      "Do you provide any discounts for multiple church branches or locations using your services?",
    answer:
      "Send direct messages to your church members in just a few clicks with Sync Innovative , where distance is no longer a creep, feel the power behind every message.",
  },
  {
    question:
      "Is there a trial period option available to assess the suitability of your services for our church?",
    answer:
      "Send direct messages to your church members in just a few clicks with Sync Innovative , where distance is no longer a creep, feel the power behind every message.",
  },
];

const PricingFaqs = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="mt-20">
      <h1 className="text-3xl tracking-wider text-center">FAQs</h1>
      <aside className="space-y-4 w-[90%] mx-auto mt-16 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-y-4 lg:gap-x-8 xl:w-[70%]">
        {data.map((item, index) => (
          <aside key={index} className="bg-violet-50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <p className="md:text-xl">{item.question}</p>
              <button
                onClick={() => toggleAccordion(index)}
                className={`text-lg ${
                  openIndexes.includes(index) ? "rotate-180" : ""
                }`}
              >
                <FaAngleDown />
              </button>
            </div>
            {openIndexes.includes(index) && (
              <p className="mt-2 text-sm">{item.answer}</p>
            )}
          </aside>
        ))}
      </aside>
    </section>
  );
};

export default PricingFaqs;
