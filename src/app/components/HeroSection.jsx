"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h3 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r " style={{color:"#ecd448"}}>
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Aman Gupta",
                1000,
                "Web Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "React ,Next js Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Transforming ideas into seamless digital experiences with MERN Stack magic
          </p>
          <div>
            <Link
              href="/#contact"
              style={{background:"#ecd448"}}
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  hover:bg-slate-200 text-black"
            >
             Contact Me
            </Link>
            <Link
              href="https://aman-guptaresume.tiiny.site/"
              target="_blank"
              style={{border:"3px solid #ecd448"}}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="https://sbinnovations.in/images/web.gif"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              style={{borderRadius:"50%"}}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
