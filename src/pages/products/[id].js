import { useCart } from "@/src/context/CartContext";
import { useToggleBackground } from "@/src/context/ToggleBackgroundContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const ProductDetails = ({}) => {
  const { toggleBackground } = useToggleBackground();
  const { addToCart } = useCart();
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        console.log(data);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Toastify alert when "ADD TO BAG" is clicked
  const handleAddToBag = () => {
    toast.success(`${product.title} has been added to your bag!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} has been added to your cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <section className="my-24 mx-14">
      <ToastContainer />
      <nav
        className={`${toggleBackground ? "text-gray-800" : "text-gray-100"}`}
      >
        <ul className={`flex gap-2 items-center`}>
          <Link href={`/`}>
            <li>Home</li>
          </Link>
          <FaAngleRight />
          <li>Products</li>
        </ul>
      </nav>

      <article className="mt-8 lg:grid lg:grid-cols-2 xl:gap-x-10">
        <img
          className="rounded-2xl md:w-[300px] lg:w-[350px] xl:w-[500px] lg:h-[320px] xl:h-[400px]"
          src={product.images}
          alt={product.name}
        />

        <div>
          <div>
            <h1
              className={`${
                toggleBackground ? "text-gray-600" : "text-gray-100"
              } mt-3 text-xl font-semibold`}
            >
              {product.title}
            </h1>
            <p
              className={`${
                toggleBackground ? "text-gray-600" : "text-gray-100"
              } mt-3 text-xl`}
            >
              ${product.price}
            </p>
            <p
              className={`${
                toggleBackground ? "text-gray-700" : "text-gray-100"
              } mt-2 leading-loose`}
            >
              {product.description}
            </p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Colors</p>
            <div className="flex gap-2 mt-2">
              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Amount</p>
            {/* <input className={`${toggleBackground ? "" : ""} mt-2 border border-gray-800 w-full py-2 rounded-lg`} /> */}
            <select
              className={`${
                toggleBackground ? "bg-white" : "bg-gray-700"
              } mt-2 border w-full py-[12px] px-2 rounded-lg border-violet-400`}
            >
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <button
            className={`${
              toggleBackground
                ? "bg-violet-800 text-gray-200"
                : "bg-violet-400 text-gray-900"
            } text-sm font-semibold mt-8 px-4 py-3 rounded-lg`}
            onClick={handleAddToCart}
          >
            ADD TO BAG
          </button>
        </div>
      </article>
    </section>
  );
};
export default ProductDetails;
