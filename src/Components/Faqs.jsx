"use client";

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const data = [
  {
    question: "What is Sync Innovative and what does it offer?",
    answer:
      "Sync Innovative is a comprehensive software solution designed specifically for churches to streamline various administrative tasks and enhance community engagement. Our platform offers a range of features tailored to meet the unique needs of religious organizations."
  },
  {
    question: "Is Sync Innovative suitable for churches of all sizes?",
    answer:
      "Yes, Sync Innovative is designed to be suitable for churches of all sizes, from small congregations to large-scale ministries. Whether you're just starting out or have been established for years, our platform is customizable and scalable to meet the specific needs and requirements of your church community."
  },
  {
    question:
      "How does Sync Innovative ensure the security and privacy of our church's data?",
    answer:
      "At Sync Innovative, safeguarding the security and privacy of your church's data is our top priority. We employ a multi-faceted approach to ensure that your information is protected at all times: Data Encryption, Secure Hosting."
  },
  {
    question:
      "Can Sync Innovative help us foster community engagement within our church?",
    answer:
      "Absolutely, fostering community engagement is a core focus of Sync Innovative. Here's how our platform can help: Resource Sharing, Member Directories, Event Management."
  },
  {
    question:
      "How can we provide feedback or suggest improvements for Sync Innovative?",
    answer:
      "Providing feedback or suggesting improvements for Sync Innovative is easy and encouraged! Here are several ways you can share your thoughts and suggestions with us: Feedback Form, Email, Customer Support."
  },
  {
    question: "What is the pricing structure of Sync Innovative?",
    answer:
      "For specific pricing details and to learn more about our plans and options, we encourage you to visit our website or contact our sales team. We're here to answer any questions you may have and help you find the pricing plan that aligns with your church's needs and budget."
  }
];

const Faqs = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="mt-20">
      <h1 className="text-3xl tracking-wider text-center">FAQs</h1>
      <aside className="space-y-4 w-[90%] mx-auto mt-8 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-y-4 lg:gap-x-8 xl:w-[70%]">
        {data.map((item, index) =>
          <aside key={index} className="bg-violet-50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <p className="text-xl">
                {item.question}
              </p>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className={`text-lg`}
              >
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
            </div>

            {showInfo && <p className="mt-2 text-sm">{item.answer}</p>}
          </aside>
        )}
      </aside>
    </section>
  );
};

export default Faqs;
