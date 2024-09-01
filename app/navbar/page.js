

"use client"
import { useColor } from "@/ColorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";


const Navbar = () => {
  const [color, setColor] = useState('#00f500');
  const [colorSecond, setColorSecond] = useState('#0195d7');

  useEffect(() => {
    // Load colors from localStorage
    const storedColor = localStorage.getItem("selectedColor");
    const storedColorSecond = localStorage.getItem("selectedColorSecond");

    if (storedColor) setColor(storedColor);
    if (storedColorSecond) setColorSecond(storedColorSecond);
  }, []);
  return (
    <>
      <div className="w-full" style={{ backgroundColor: "#000000" }}>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex lg:px-10 flex-wrap p-5 flex-col md:flex-row items-center">
            <p
              className="text-3xl font-sans font-bold bg-gradient-to-r text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${color}, ${colorSecond})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BOOMERANG
            </p>
            <nav className="md:ml-auto text-base flex text-gray-300 flex-wrap items-center justify-center">
              <Link href={"/"} className="mr-5 hover:text-white">
                Dapp
              </Link>
              <Link href={"/"} className="mr-5 hover:text-white">
                Transaction History
              </Link>
            </nav>

            <button
              className="inline-flex items-center border-0 py-2 px-4 focus:outline-none text-white text-base mt-4 md:mt-0 rounded-md font-bold"
              style={{ backgroundColor: color }}
            >
              Connect Wallet
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;

