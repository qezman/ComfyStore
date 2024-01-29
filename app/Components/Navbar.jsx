
import { FaCode, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className=" py-4 px-4 lg:px-12 z-20 top-0 lg:sticky flex justify-between items-center">
      <h2 className="font-bold flex gap-1 items-center text-2xl text-pink-600">
        Cheryl<FaCode /> 
      </h2>
      <button onClick={toggleDarkMode} className="text-xl lg:text-2xl">
        {isDarkMode ? <span><FaMoon/></span> : <span><FaSun/></span>}
      </button>
    </div>
  );
};

export default Navbar;
