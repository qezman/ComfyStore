import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaBars, FaCartPlus, FaMoon, FaSun } from "react-icons/fa";
import { useToggleBackground } from "../context/ToggleBackgroundContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const [activeItem, setActiveItem] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { toggleBackground, handleToggleBackground } = useToggleBackground();

  const handleDropdownToggle = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav
        className={`${
          toggleBackground ? "bg-gray-800" : ""
        } text-gray-200 p-4 text-[11px] gap-x-4 flex justify-center md:justify-end md:px-8 md:text-[13px] items-center`}
      >
        <div className="lg:px-12 lg:px-0 lg:mx-auto">
          <Link href="/signin" className="hover:underline">
            Sign in / Guest
          </Link>
          <Link href="/signup" className="hover:underline">
            Create Account
          </Link>
        </div>
      </nav>

     

      <nav
        className={`${
          toggleBackground
            ? "bg-blue-50 text-gray-800"
            : "bg-gray-800 text-blue-50"
        } px-10 lg:px-20 xl:px-[330px] flex items-center justify-between py-2 text-xl 
        `}
      >
        {/* Dropdown Toggle */}
        <div ref={dropdownRef} className="relative lg:hidden">
          {/* Toggle Button */}
          <button
            onClick={handleDropdownToggle}
            className={`text-xl ${
              toggleBackground ? "hover:bg-blue-200" : "hover:bg-gray-700"
            } p-4 rounded-xl`}
          >
            <FaBars />
          </button>

          {/* Working Dropdown Menu */} 
          {isDropDownOpen && (
            <div
              className={`absolute top-full left-0 mt-2 shadow-md rounded-lg w-48 z-50 ${
                toggleBackground ? "bg-blue-50" : "bg-gray-800"
              }`}
            >
              <ul className="space-y-2 p-4">
                <li>
                  <Link
                    href="/"
                    onClick={() => handleItemClick("home")}
                    className={`text-sm block px-4 py-2 rounded-md ${
                      activeItem === "home"
                        ? toggleBackground
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                        : toggleBackground
                        ? "hover:bg-blue-500 text-gray-800"
                        : "hover:bg-gray-600 text-gray-200"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={() => handleItemClick("about")}
                    className={`text-sm block px-4 py-2 rounded-md ${
                      activeItem === "about"
                        ? toggleBackground
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                        : toggleBackground
                        ? "hover:bg-blue-500 text-gray-800"
                        : "hover:bg-gray-600 text-gray-200"
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    onClick={() => handleItemClick("products")}
                    className={`text-sm block px-4 py-2 rounded-md ${
                      activeItem === "products"
                        ? toggleBackground
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                        : toggleBackground
                        ? "hover:bg-blue-500 text-gray-800"
                        : "hover:bg-gray-600 text-gray-200"
                    }`}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    onClick={() => handleItemClick("cart")}
                    className={`text-sm block px-4 py-2 rounded-md ${
                      activeItem === "cart"
                        ? toggleBackground
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                        : toggleBackground
                        ? "hover:bg-blue-500 text-gray-800"
                        : "hover:bg-gray-600 text-gray-200"
                    }`}
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Center Logo */}
        <div className="hidden lg:block">
          <p
            className={`${
              toggleBackground ? "bg-blue-600" : "bg-pink-500"
            } text-white px-4 py-2 font-bold text-3xl rounded-xl`}
          >
            C
          </p>
        </div>

        <div
          className={`${
            toggleBackground ? "text-gray-700" : "text-gray-100"
          } hidden lg:flex lg:justify-center lg:items-center lg:gap-x-4 text-sm`}
        >
          <Link
            href={"/"}
            className={`${
              toggleBackground
                ? "hover:bg-gray-800 hover:text-white"
                : "hover:bg-gray-100 hover:text-gray-700"
            }  px-4 py-2 rounded-lg`}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={`${
              toggleBackground
                ? "hover:bg-gray-800 hover:text-white"
                : "hover:bg-gray-100 hover:text-gray-700"
            }  px-4 py-2 rounded-lg`}
          >
            About
          </Link>
          <Link
            href={"/products"}
            className={`${
              toggleBackground
                ? "hover:bg-gray-800 hover:text-white"
                : "hover:bg-gray-100 hover:text-gray-700"
            }  px-4 py-2 rounded-lg`}
          >
            Products
          </Link>
          <Link
            href={"/cart"}
            className={`${
              toggleBackground
                ? "hover:bg-gray-800 hover:text-white"
                : "hover:bg-gray-100 hover:text-gray-700"
            }  px-4 py-2 rounded-lg`}
          >
            Cart
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex justify-center gap-x-6">
          <button
            className={`text-xl ${
              toggleBackground ? "text-gray-700" : "text-gray-100"
            }`}
            onClick={handleToggleBackground}
          >
            {toggleBackground ? <FaMoon /> : <FaSun />}
          </button>
          <Link
          href={"/cart"}
            className={`flex items-center gap-x-2 relative ${
              toggleBackground ? "text-gray-700" : "text-gray-100"
            }`}
          >
            <FaCartPlus />
            <span
              className={`text-sm ${
                toggleBackground ? "bg-blue-500" : "bg-pink-500"
              } h-6 absolute bottom-2 left-4 text-center w-6 text-white rounded-xl`}
            >
              {cartItems.length}
            </span>
          </Link>



        </div>
      </nav>
    </div>
  );
};

export default Navbar;
