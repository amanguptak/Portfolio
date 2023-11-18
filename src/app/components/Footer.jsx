import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#ecd448] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <p className="text-slate-600">Aman Portfolio 2023</p>
      <Image
              src="/images/logo.png"
              alt="hero image"
            className="rounded-lg"
              width={100}
              height={100}
            />
 
      </div>
    </footer>
  );
};

export default Footer;
