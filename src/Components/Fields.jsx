import { useEffect, useState } from "react";

const Fields = ({ products, toggleBackground }) => {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [sort, setSort] = useState("a-z");
  const [price, setPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [freeShipping, setFreeShipping] = useState(false);

  useEffect(() => {
    if (products && products.length > 0) {
      const highestPrice = Math.max(...products.map((p) => p.price));
      setMaxPrice(highestPrice);
      setPrice(highestPrice);
    }
  }, [products]);

  //handler functions
  const handleProductChange = (e) => setProduct(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleCompanyChange = (e) => setCompany(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handFreeShippingChange = (e) => setFreeShipping(e.target.checked);

  const handleSearch = () => {
    console.log({
      "Search clicked with the following values": {
        product,
        category,
        company,
        sort,
        price,
        freeShipping,
      },
    });
  };

  const handleReset = () => {
    setProduct("");
    setCategory("all");
    setCompany("all");
    setSort("a-z");
    setPrice(1000);
    setFreeShipping(false);
    console.log("Filters reset!");
  };
  return (
    <section
      className={`${
        toggleBackground ? "text-gray-700 bg-blue-50" : "text-gray-100 bg-gray-800"
      } rounded-xl space-y-9 md:grid md:grid-cols-3 md:space-y-0 md:gap-x-10 md:gap-y-4 lg:gap-y-8 lg:grid-cols-4 p-8`}
    >
      <div className="flex flex-col gap-y-1">
        <p>Select Product</p>
        <input
          value={product}
          onChange={handleProductChange}
          className={`${
            toggleBackground ? "bg-white" : "bg-gray-700"
          } px-3 py-[3px] border border-gray-400 rounded-lg`}
        />
      </div>

      <div className="flex flex-col gap-y-1">
        <p>Select Category</p>
        <select
          value={category}
          onChange={handleCategoryChange}
          className={`${
            toggleBackground ? "bg-white" : "bg-gray-700"
          } px-3 py-[5px] border border-gray-400 rounded-lg`}
        >
          <option>all</option>
          <option>Tables</option>
          <option>Chairs</option>
          <option>Kids</option>
          <option>Sofas</option>
          <option>Beds</option>
        </select>
      </div>

      <div className="flex flex-col gap-y-1">
        <p>Select Company</p>
        <select
          value={company}
          onChange={handleCompanyChange}
          className={`${
            toggleBackground ? "bg-white" : "bg-gray-700"
          } px-3 py-[5px] border border-gray-400 rounded-lg`}
        >
          <option>all</option>
          <option>Modenza</option>
          <option>Luxora</option>
          <option>Artifex</option>
          <option>Comfora</option>
          <option>Homestead</option>
        </select>
      </div>

      <div>
        <p>Sort By</p>
        <select
          value={sort}
          onChange={handleSortChange}
          className={`${
            toggleBackground ? "bg-white" : "bg-gray-700"
          } px-3 py-[5px] border border-gray-400 rounded-lg w-full`}
        >
          <option>a-z</option>
          <option>z-a</option>
          <option>high</option>
          <option>low</option>
        </select>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <p>Select Price</p>
          <p>${price.toLocaleString()}</p>
        </div>
        <input
          className="w-full"
          type="range"
          min="0"
          max={maxPrice}
          step="10"
          value={price}
          onChange={handlePriceChange}
        />
        <div className="flex justify-between items-center">
          <p>0</p>
          <p className="text-xs font-semibold">
            Max: ${maxPrice.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <label>Free Shipping</label>
        <input
          type="checkbox"
          checked={freeShipping}
          onChange={handFreeShippingChange}
          className="rounded border border-blue-500 w-4 h-4"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center md:gap-x-10 gap-y-10 text-sm">
        <button
          onClick={handleSearch}
          className={`${toggleBackground ? "bg-blue-800 text-gray-100" : "bg-pink-400 text-gray-800"} w-full md:w-auto font-semibold py-2 px-16 rounded-lg`}
        >
          SEARCH
        </button>

        <button
          onClick={handleReset}
          className={`${toggleBackground ? "bg-pink-400 text-gray-100" : "bg-yellow-300 text-gray-800"} w-full md:w-auto font-semibold py-2 px-16 rounded-lg`}
        >
          RESET
        </button>
      </div>
    </section>
  );
};
export default Fields;
