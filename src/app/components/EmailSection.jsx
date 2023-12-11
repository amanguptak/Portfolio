import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      
      <div className="">
        <h5 className="text-xl font-bold text-indigo-500 my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-slate-500 mb-4 max-w-md">
          {" "}
         Hey there! I&apos;d love to  discuss about web development. Feel free to reach out to me my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/amanguptak" target="_blank">
            <Image src={GithubIcon} className="bg-gray-800 rounded-full" alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/aman-gupta-7577691b5" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="bg-blue-600 rounded-md"/>
          </Link>
          <Link href="https://gitlab.com/amanguptaofficial932" target="_blank">
            <Image className="mt-1 mx-1" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/gitlab_tile_logo_icon_170092.png" alt="Linkedin Icon" height={40} width={40} />
          </Link>
      
        </div>
      </div>
      <div className="z-10">
      <h5 className="text-xl font-bold text-indigo-500 my-2 text-end">
          Contact Me
        </h5>
      <div className="justify-end items-end flex" >
      
      <ul className="list-none text-slate-500  ">
        <li className="flex">
        
        <p className="my-2">amanofficial9294@gmail.com</p>
        <Image className="mt-1 mx-1 ml-2 p-2" src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="Linkedin Icon" height={40} width={40} />
        </li>
        <li className="flex items-end justify-end">
        
        <p className="my-2">9170615023</p>
        <Image className="mt-1 mx-1 ml-2 p-1 rounded-lg" src="https://img.freepik.com/premium-vector/3d-vector-hand-holding-mobile-phone-isolated-pastel-background-hand-using-smartphone-with-empty-screen-mockup-mobile-concept-showcase-3d-display-minimal-scene-with-device-smartphone_412828-934.jpg" alt="Linkedin Icon" height={50} width={50} />
        </li>
        <li className="flex items-end justify-end">
        
        <p className="my-2"> amangupta041</p>
        <Link href="https://twitter.com/amangupta041?t=UVyLQ5ZY9ZRQKfy4WmtUmw&s=09" target="_blank">
        <Image className="mt-1 mx-1 ml-2 p-1 rounded-lg" src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg" alt="Linkedin Icon" height={40} width={40} />
        </Link>
        
        </li>
     
      </ul>
      
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
