import React from "react";
import Image from "next/image";
import { FiHome } from "react-icons/fi";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer border  bg-indigo-500 border-t-[#ecd448] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 flex items-center justify-between">
        <p className="text-amber-400 tracking-wide flex items-center space-x-2">
        <Link href="#">
            <FiHome
              className="mx-4 cursor-pointer text-amber-300 hover:text-white"
              size={23}
            />
          </Link>
          Aman Gupta Responsive Portfolio 2024{" "}
         
        </p>
        <Image
          src="/images/logo.png"
          alt="hero image"
          className="rounded-full"
          width={50}
          height={50}
        />
      </div>
    </footer>
  );
};

export default Footer;
