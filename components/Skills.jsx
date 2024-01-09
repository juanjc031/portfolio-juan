import React from "react";
import HabilidadeItem from "./SkillItem";
import { motion } from "framer-motion";
import { GrMysql } from "react-icons/gr";
import { RiGitlabLine } from "react-icons/ri";
import { DiScrum } from "react-icons/di";
import { FiFramer } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  SiNextdotjs,
  SiJquery,
  SiPhp,
  SiInsomnia,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiVercel 
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaVuejs,
} from "react-icons/fa";

const size = "w-10 h-10 mdd:w-8 mmd:h-8";

let items = [
  {
    desc: "HTML",
    icon: <FaHtml5 className={size} />,
  },
  {
    desc: "CSS",
    icon: <FaCss3Alt className={size} />,
  },
  {
    desc: "TailwindCSS",
    icon: <SiTailwindcss className={size} />,
  },
  {
    desc: "BootStrap",
    icon: <FaBootstrap className={size} />,
  },
  {
    desc: "JavaScript",
    icon: <SiJavascript className={`${size} rounded-lg`} />,
  },
  {
    desc: "TypeScript",
    icon: <SiTypescript className={`${size} rounded-lg`} />,
  },
  {
    desc: "PHP",
    icon: <SiPhp className={size} />,
  },
  {
    desc: "ReactJs",
    icon: <FaReact className={size} />,
  },
  {
    desc: "JQuery",
    icon: <SiJquery className={size} />,
  },
  {
    desc: "NextJs",
    icon: <SiNextdotjs className={size} />,
  },
  {
    desc: "FramerMotion",
    icon: <FiFramer className={size} />,
  },
  {
    desc: "EmailJs",
    icon: <MdOutlineAlternateEmail className={size} />,
  },
  {
    desc: "MySQL",
    icon: <GrMysql className={size} />,
  },
  {
    desc: "Insomnia",
    icon: <SiInsomnia className={size} />,
  },
  {
    desc: "Docker",
    icon: <FaDocker className={size} />,
  },
  {
    desc: "Scrum",
    icon: <DiScrum className={size} />,
  },
  {
    desc: "Git",
    icon: <FaGitAlt className={size} />,
  },
  {
    desc: "GitLab",
    icon: <RiGitlabLine className={size} />,
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 150,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const Skill = () => {
  return (
    <section
      id="habilidades"
      className="w-full py-14 cursor-default overflow-x-hidden"
    >
      <div className="mx-auto flex flex-col items-center justify-center mmd:px-0 px-16 h-full">
        <div className="w-full mmd:px-10">
          <p className="text-xl tracking-widest uppercase text-[#0E3C89]">
            Habilidades
          </p>
          <h2 className="pb-4 -mt-2 text-[#0E3C89]">Minhas competências</h2>
        </div>
        <div className="flex pt-10 mmd:pt-4 justify-center items-center flex-wrap md:w-[95%] gap-4">
          {items.map((result, index) => (
            <motion.div
              className=""
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={index}
            >
              <HabilidadeItem icon={result.icon} desc={result.desc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
