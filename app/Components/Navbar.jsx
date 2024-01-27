import Link from "next/link"
import Button from "./Button"
import { FaCode, FaRegObjectGroup } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white py-4 px-4 lg:px-12 z-20 top-0 flex justify-between items-center">
      <h2 className="font-medium text-2xl text-pink-600"><FaCode/></h2>
      <h2 className="font-medium text-2xl text-pink-600"><FaRegObjectGroup/></h2>
    </div>
  );
}

export default Navbar
