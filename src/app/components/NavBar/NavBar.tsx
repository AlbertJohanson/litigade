import React from "react";
import Image from "next/image"; // Replace 'your-image-package' with the actual package name
import { IoCartOutline, IoSearch } from "react-icons/io5";

interface NavBarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const NavBar = ({isOpen,setIsOpen}:NavBarProps) => {
  return (
    <header className="py-8 px-8 flex justify-between  bg-[#F6F6F6]">
      <Image src="/Litigade.png" width={100} height={100} alt="logo" />
      {/* Mobile nav*/}
      <nav className="flex justify-center space-x-4 md:hidden">
        <ul className="flex justify-center space-x-4">
          <li>
            <IoSearch size={24} color="#737373" />
          </li>
          <li>
            <IoCartOutline size={24} color="#737373" />
          </li>
        </ul>
        {/*Burger*/}
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src="/burger.png" width={22} height={13} alt="burger-menu" />
        </button>
      </nav>

      {/* Desktop nav*/}
      <nav className="hidden md:flex justify-center space-x-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <IoSearch size={24} color="#737373" />
          </li>
          <li>
            <IoCartOutline size={24} color="#737373" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
