import { FaBars, FaTh } from "react-icons/fa";
import AllItems from "./AllItems";
import { useState } from "react";

const ProductItems = ({ toggleBackground, furnitureItems }) => {
  const [layout, setLayout] = useState("grid");

  return (
    <section className="my-6">
      <nav className="flex justify-between my-3 items-center w-full">
        <p>
          {furnitureItems
            ? `${furnitureItems.length} products`
            : ""}
        </p>

        <div className="flex items-center gap-x-3 text-lg">
          <FaTh
            onClick={() => setLayout("grid")}
            className={`${
              layout === "grid"
                ? toggleBackground
                  ? "bg-blue-400 text-blue-100"
                  : "bg-pink-400 text-gray-800"
                : ""
            } cursor-pointer text-center h-10 w-10 p-2 rounded-full`}
          />
          <FaBars
            onClick={() => setLayout("list")}
            className={`${
              layout === "list"
                ? toggleBackground
                  ? "bg-blue-400 text-blue-100"
                  : "bg-pink-400 text-gray-800"
                : ""
            } cursor-pointer text-center h-10 w-10 p-2 rounded-full`}
          />
        </div>
      </nav>
      <hr
        className={`border-t-2 ${
          toggleBackground ? "border-gray-100" : "border-gray-800"
        } mb-4 mt-4`}
      />

      <AllItems
        furnitureItems={furnitureItems}
        toggleBackground={toggleBackground}
        layout={layout}
      />
    </section>
  );
};

export default ProductItems;
