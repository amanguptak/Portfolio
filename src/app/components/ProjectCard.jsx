
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { usePathname } from "next/navigation";
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {

  const pathName = usePathname()

  return (
    <div className={`${pathName =="/" && "shadow-xl rounded-xl p-5 hover:shadow-indigo-500 h-full"}`}>
      <div
       className="h-52 w-full md:h-72 rounded-xl relative group border border-amber-400"
       style={{
         background: `url(${imgUrl})`,
         backgroundSize: "cover",
         backgroundPosition: "center", // Center the background image
       }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-gray-600 rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className={`text-slate-500 line-clamp-2 ${pathName.startsWith("/allprojects")&&"line-clamp-none"} `}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
