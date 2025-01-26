import { FaSort, FaBars, FaTh } from "react-icons/fa";
import AllItems from "./AllItems";
import { useState, useEffect } from "react";

const ProductItems = ({ toggleBackground }) => {
  const [layout, setLayout] = useState("grid");
  const [furnitureItems, setFurnitureItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFurnitureItems = async () => {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories/4/products"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setFurnitureItems(data);
      setLoading(false);
    };

    fetchFurnitureItems().catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading furniture items...</p>
      </section>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="my-6">
      <nav className="flex justify-between my-3 items-center w-full">
        <p>{furnitureItems.length} products</p>

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
