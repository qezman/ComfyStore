import { FaAngleDown } from "react-icons/fa";
import Fields from "./Fields";
import ProductItems from "./ProductItems";

const Product = ({ toggleBackground, furnitureItems }) => {
  const products = [
    { id: 1, name: "Chair", price: 200 },
    { id: 2, name: "Table", price: 450 },
    { id: 3, name: "Sofa", price: 800 },
    { id: 4, name: "Bed", price: 1000 },
  ];
  return (
    <section
      className={`${
        toggleBackground ? "light" : "dark"
      } "rounded-xl mx-8 p-8 px-0 my-20 flex flex-col justify-center items-center"`}
    >
      <Fields toggleBackground={toggleBackground} products={products} />
      <ProductItems
        toggleBackground={toggleBackground}
        products={products}
        furnitureItems={furnitureItems}
      />
    </section>
  );
};

export default Product;
