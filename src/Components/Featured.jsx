import React from "react";
// import Bed from "/Bed.jpeg";
// import CoffeeTable from "/CoffeeTable.jpeg";
// import Lamp from "/Lamp.jpeg";

const Featured = ({ toggleBackground }) => {
  const FeaturedData = [
    { id: 1, image: "/Lamp.jpeg", title: "Avant-Garde Lamp", price: "$179.99" },
    {
      id: 2,
      image: "/CoffeeTable.jpeg",
      title: "Coffee Table",
      price: "$179.99",
    },
    { id: 3, image: "/Bed.jpeg", title: "Comfy Bed", price: "$129.99" },
  ];
  return (
    <section className="my-20 mx-10 text-gray-800">
      <h1
        className={`text-2xl font-bold tracking-wide md:text-3xl ${
          toggleBackground ? "text-gray-800" : "text-gray-100"
        }`}
      >
        Featured Products
      </h1>
      <hr
        className={`border-t-2 ${
          toggleBackground ? "border-gray-100" : "border-gray-800"
        } mb-4 mt-4`}
      />
      <section className="space-y-8 md:space-y-0 mt-12  md:grid md:grid-cols-2 md:gap-y-8 md:gap-x-6 lg:grid-cols-3">
        {FeaturedData.map((item) => {
          return (
            <div
              className={`px-4 py-10 flex flex-col justify-center items-center ${
                toggleBackground ? "light" : "dark"
              } shadow-lg delay-300 duration-500 hover:shadow-2xl rounded-xl`}
            >
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className="rounded-2xl w-72 h-72"
              />
              <p className="text-lg font-bold py-3 tracking-wide">
                {item.title}
              </p>
              <p className={`${toggleBackground ? "text-gray-700" : "text-violet-300"}`}>{item.price}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};
export default Featured;
