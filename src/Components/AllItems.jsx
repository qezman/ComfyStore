import { useEffect, useState } from "react";

const AllItems = ({ toggleBackground }) => {
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
      console.log(data);
      setFurnitureItems(data);
      setLoading(false);
    };
    fetchFurnitureItems().catch((error) => {
      setError(error.message);
      setLoading(false);
    });
    fetchFurnitureItems;
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
    <section className="my-20">
      <div className="space-y-10 md:space-y-0 md:gap-x-4 md:gap-y-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {furnitureItems.map((furnitureItem) => {
          return (
            <div
              key={furnitureItem.id}
              className={`${
                toggleBackground ? "bg-gray-50 " : "bg-gray-700"
              } flex flex-col justify-center items-center shadow-lg rounded-xl py-4 px-4`}
            >
              <img
                className="w-[330px] h-[250px] rounded-2xl"
                src={furnitureItem.images}
                alt={furnitureItem.name}
              />
              <h2
                className={`${
                  toggleBackground ? "text-gray-600" : "text-gray-100"
                }  mt-3 text-xl text-center`}
              >
                {furnitureItem.title}
              </h2>
              <p
                className={`${
                  toggleBackground ? "text-blue-800" : "text-violet-400"
                } py-3 mt-3 text-xl`}
              >
                ${furnitureItem.price.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default AllItems;
