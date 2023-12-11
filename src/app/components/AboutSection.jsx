"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Skill from "./Skill";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",

    content: <Skill />,
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc ">
        <li className="lg:flex lg:text-end">
          B.Tech (Electronics & Communication)
           KIETGroup Of Institutions Delhi
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
        <li>IBM (Remote Intern June 2021 - Nov 2021) Web Development Intern</li>
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
    <section className="text-slate-500" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center px-6 ">
        {/* <Image src="https://img.freepik.com/premium-vector/coder-completed-task-wrote-code-joy-development-programming-coding-technologies_569013-340.jpg?w=2000" width={500} height={500} style={{borderRadius:"10px"}}/> */}
        <div className="mt-4 md:mt-0  flex flex-col h-full lg:text-justify">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h2>
          <p className="text-slate-500  lg:text-lg">
            I am a Full Stack Web Developer with a fervor for crafting
            interactive and responsive web applications. Possessing proficiency
            in JavaScript, TypeScript, React, Redux, Node.js, Express.js,
            MongoDB, Next.js, HTML, CSS, and Git, I bring a comprehensive skill
            set to the development landscape. My commitment to continual
            learning is evidenced by my quick adaptability and eagerness to
            broaden my knowledge base. Recognized as a dedicated team player, I
            am enthusiastic about collaborative efforts to conceive and deliver
            exceptional applications. My professional approach and passion for
            web development fuel my commitment to contributing meaningfully to
            collaborative projects.
          </p>
          <div className="flex flex-row mt-8 w-full lg:justify-end justify-center">
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

          <div className="flex items-center lg:justify-between space-x-2 ">
            <div className=" hidden lg:block ">
              <Image
                src="https://noclinks.net/assets/img/softwaredev.gif"
                alt="dev"
                height={500}
                width={500}
                className="object-cover  rounded-full border-6  shadow-lg shadow-indigo-500"
              />
            </div>

            <div className="mt-8 ">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
