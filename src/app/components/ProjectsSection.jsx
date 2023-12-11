"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Anime Clothing store use NextJS and Mern Stack",
    description: "A ecommerce Web app full responsive using Next Js redux, bootstrap,,mui , expressjs and mongdb(mongoAtlas), for authentication I used jwt and stored the token inside cookies for user and admin validation I created middleware. And frontend is designed in Next js and redux toolkit used reduxthunk for api call,login ,register page with attractive user interface and use Scss..",
    image: "/images/projects/animeEcom.png",
    tag: ["All", "Web"],
    gitUrl: "https://gitlab.com/animeuchiha/Ecom",
    previewUrl: "https://animeuchicha.vercel.app",
  },
  {
    id: 2,
    title: "Job Hunting Website",
    description: "Job website where user can apply for the job and they can accesses more feature a website after registration , frontend of website is based on React and backend is based on Express js and jwt is used for authentication mongoDB is used as database.",
    image: "/images/projects/jobwebsite.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
 
  {
    id: 3,
    title: "Weather App React  PWA",
    description: "Used axios , React and used PWA features of React ",
    image: "/images/projects/weather.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://weatherappbyaman.web.app/",
  },
  {
    id: 4,
    title: "Motion an Ai powered note talking app",
    description: "Motion, fully responsive web application utilizing Next.js 13, an innovative frontend framework rooted in React.js. Developed with TypeScript, the project featured meticulous styling using Tailwind CSS to achieve a refined and contemporary user interface. Integrated MongoDB as the backend database for streamlined and secure data management. Successfully orchestrated the seamless integration of the OpenAI API, enhancing the application with cutting-edge artificial intelligence capabilities. Implemented Pinecone for precise request optimization, resulting in a substantial improvement in overall performance. A standout feature of this project is the integration of an AI chatbot 🤖, seamlessly incorporated to deliver insightful responses derived from users' current notes, thereby significantly enhancing overall user engagement. This project serves as a testament to proficiency in contemporary web development technologies and a steadfast commitment to optimizing the user experience.",
    image: "https://i.postimg.cc/hjHdG1M3/Screenshot-2023-12-11-120722.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/amanguptak/MotionMan",
    previewUrl: "https://motion-aman.vercel.app",
  },
  {
    id: 5,
    title: "Icommunify College Club managing web app",
    description: "A college club managing web app for client based on mern stack where I have implemented all frontend features Using Next js and Redux toolkit and used bootstrap and scss for responsiveness for api call used axios.",
    image: "/images/projects/icom.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.icommunify.com",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-indigo-500 mt-4 mb-8 md:mb-12">
        Projects
      </h2>
    
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
