import Link from "next/link";

const Herosection = ({ toggleBackground }) => {
  return (
    <main className="mt-24 mx-10 lg:flex lg:items-center">
      <div>
        <h1
          className={`text-4xl font-bold ${
            toggleBackground ? "text-gray-600" : "textgray-100"
          } md:pr-24 md:leading-tight md:text-6xl`}
        >
          We are changing the way people shop
        </h1>
        <p
          className={`mt-4 text-lg ${
            toggleBackground ? "text-gray-800" : "text-gray-100"
          } leading-relaxed md:pr-52 md:text-xl`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <button
          className={` mt-8 ${
            toggleBackground
              ? " bg-blue-500 hover:bg-blue-800"
              : " bg-pink-500 hover:bg-pink-800"
          } text-gray-100 px-6  py-3 rounded-lg `}
        >
          <Link href={"/products"}>Our Products</Link>
        </button>
      </div>

      <div className="hidden lg:block">
        <img src="/room.jpg" alt="room" className=" rounded-2xl" />
      </div>
    </main>
  );
};
export default Herosection;
