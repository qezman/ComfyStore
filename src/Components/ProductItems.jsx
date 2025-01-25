import { FaSort, FaBars, FaTh } from "react-icons/fa";
import AllItems from "./AllItems";

const ProductItems = ({ products, toggleBackground }) => {
  return (
    <section className="my-6">
      <nav className="flex justify-between my-3 items-center w-full">
        <p>{products.length} products</p>

        <div className="flex items-center gap-x-3 text-lg">
          <FaTh
            className={`${
              toggleBackground
                ? "bg-blue-400 text-blue-100"
                : "bg-pink-400 text-gray-800"
            } cursor-pointer text-center h-10 w-10 p-2 rounded-full`}
          />
          <FaBars
            className={`${
              toggleBackground
                ? "bg-blue-400 text-blue-100"
                : "bg-pink-400 text-gray-800"
            } cursor-pointer text-center h-10 w-10 p-2 rounded-full`}
          />
        </div>
      </nav>
      <hr
        className={`border-t-2 ${
          toggleBackground ? "border-gray-100" : "border-gray-800"
        } mb-4 mt-4`}
      />

      <AllItems toggleBackground={toggleBackground} />
    </section>
  );
};

export default ProductItems;
