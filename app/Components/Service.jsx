"use client";
import React from "react";
import {
  FaDesktop,
  FaPalette,
  FaTachometerAlt,
  FaGlobe,
  FaCode,
  FaTools,
} from "react-icons/fa";

const ServiceIcon = ({ icon }) => (
  <div className="service-icon bg-slate-300 p-2 w-14 h-14 rounded mb-4 flex justify-center ">
    {icon}
  </div>
);

const services = [
  {
    title: "Responsive Web Design",
    description:
      "Crafting beautiful and user-friendly interfaces that work seamlessly on various devices.",
    icon: (
      <FaDesktop className="service-icon-text text-pink-500 text-4xl mb-4 opacity-80" />
    ),
  },
  {
    title: "Modern UI/UX Development",
    description:
      "Creating intuitive and engaging user experiences with a focus on the latest design trends.",
    icon: (
      <FaPalette className="service-icon-text text-pink-500 text-4xl mb-4 opacity-80" />
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing websites for speed and efficiency to ensure a smooth user experience.",
    icon: (
      <FaTachometerAlt className="service-icon-text text-pink-500 text-4xl mb-4 opacity-80" />
    ),
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Ensuring your website looks and functions consistently across different browsers.",
    icon: (
      <FaGlobe className="service-icon-text text-pink-500 text-4xl mb-4 opacity-80" />
    ),
  },
  {
    title: "Frontend Frameworks",
    description:
      "Expertise in using popular frameworks like React or Next.js for efficient development.",
    icon: (
      <FaCode className="service-icon-text text-pink-500 text-4xl mb-4 opacity-80" />
    ),
  },
  {
    title: "Code Quality and Maintainability",
    description:
      "Writing clean, maintainable, and scalable code to enhance the longevity of your projects.",
    icon: (
      <FaTools className="service-icon-text text-pink-500 text-4xl mb-4 opacity-80" />
    ),
  },
];

const Service = () => {
  return (
    <section className="skills-section">
      <div className="lg:my-10 my-3">
        {/* <h2 className="section-title text-3xl font-bold mb-8">Services</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-slate-600 p-5 rounded-lg shadow-md transition-transform transform group hover:scale-95"
            >
              <ServiceIcon icon={service.icon} />
              <h3 className="service-title text-xl text-pink-500 font-semibold mb-4">
                {service.title}
              </h3>
              <p className="service-description text-gray-100">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
