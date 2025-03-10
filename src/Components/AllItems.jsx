import Link from "next/link";
import useFetch from "./useFetch";

const AllItems = ({ toggleBackground, layout }) => {
  const {
    data: furnitureItems,
    loading,
    error,
  } = useFetch("https://api.escuelajs.co/api/v1/categories/4/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data...{error}</p>;
  return (
    <section className="my-20">
      {/* Dynamic layout for items */}
      <div
        className={`${
          layout === "grid"
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            : "flex flex-col space-y-4"
        }`}
      >
        {furnitureItems.map((furnitureItem) => (
          <Link href={`/products/${furnitureItem.id}`} key={furnitureItem.id}>
            <div
              className={`${
                toggleBackground ? "bg-gray-50" : "bg-gray-700"
              } flex ${
                layout === "grid"
                  ? "flex-col h-full"
                  : "flex-row items-start md:items-center justify-start"
              } hover:shadow-2xl shadow-lg rounded-xl p-4 cursor-pointer`}
            >
              {/* Item Image */}
              <img
                className={`${
                  layout === "grid"
                    ? "w-full h-64 mb-4 rounded-2xl object-cover"
                    : "w-40 h-32 rounded-lg"
                }`}
                src={furnitureItem.images?.[0] || "/placeholder-image.jpg"} // Fallback image
                alt={furnitureItem.name || "Product"}
              />
              {/* Item Details */}
              <div
                className={`${
                  layout === "list"
                    ? "ml-4 flex flex-col items-start"
                    : "text-center"
                }`}
              >
                <h2
                  className={`${
                    toggleBackground ? "text-gray-700" : "text-gray-100"
                  } md:text-xl font-normal tracking-wide`}
                >
                  {furnitureItem.title}
                </h2>
                <p
                  className={`${
                    toggleBackground ? "text-blue-800" : "text-violet-400"
                  } py-3 text-lg`}
                >
                  ${furnitureItem.price.toLocaleString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="mt-20 float-right flex text-xs md:text-[16px] font-bold">
        <button
          className={`${
            toggleBackground ? "bg-blue-50 text" : "bg-gray-900"
          } px-2 py-1 md:p-4 rounded-tl-lg rounded-bl-lg`}
        >
          PREV
        </button>
        <button
          className={`${
            toggleBackground ? "bg-blue-50 text" : "bg-gray-900"
          } px-2 py-1 md:p-4`}
        >
          1
        </button>
        <button
          className={`${
            toggleBackground ? "bg-blue-50 text" : "bg-gray-900"
          } px-2 py-1 md:p-4`}
        >
          2
        </button>
        <button
          className={`${
            toggleBackground ? "bg-blue-50 text" : "bg-gray-900"
          } px-2 py-1 md:p-4`}
        >
          3
        </button>
        <button
          className={`${
            toggleBackground ? "bg-blue-50 text" : "bg-gray-900"
          } px-2 py-1 md:p-4 rounded-br-lg rounded-tr-lg`}
        >
          NEXT
        </button>
      </div>
    </section>
  );
};

export default AllItems;
