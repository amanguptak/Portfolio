"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Skill from "./Skill";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
   
    content : <Skill/>
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          B.Tech (Electronics & Communication) KIETGroup Of Institutions Delhi
          NCR 2018-2022 8.12 CGPA(81.2%)
        </li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          IBM (Remote Intern June 2021 - Nov 2021) Web Development Intern
        </li>
        <li>Wipro ( Feb 2022 - Nov 2022) MERN Stack Developer</li>
        <li>Freelancer ( Aug 2022 - Present) </li>
        <li>Chordify,Inc ( Feb 2023 - Present ) MERN Stack Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="https://img.freepik.com/premium-vector/coder-completed-task-wrote-code-joy-development-programming-coding-technologies_569013-340.jpg?w=2000" width={500} height={500} style={{borderRadius:"10px"}}/> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Expressjs, MongoDB, NextJs,
             HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row  mt-8 w-full justify-center">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
