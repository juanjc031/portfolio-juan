import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Typed from "react-typed";
import Image from "next/image";
import juan from "../public/assets/juan10.jpg";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export const fadeInAnimationVariantsLeft = {
  initial: {
    opacity: 0,
    x: -300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
    },
  },
};

export const fadeInAnimationVariantsRight = {
  initial: {
    opacity: 0,
    x: 250,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
    },
  },
};

const handleScroll = () => {
  let sobreSection = document.getElementById("sobre");
  sobreSection.scrollIntoView({ behavior: "smooth" });
};

const Main = () => {
  return (
    <div
      id="main"
      className="overflow-x-hidden w-full h-screen mmd:items-center mmd:flex-col mmd:gap-10 mmd:justify-center flex text-center cursor-default"
    >
      <motion.div
        variants={fadeInAnimationVariantsLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-[70%] h-full mmd:h-auto mmd:pt-14 mx-auto p-2 flex justify-center items-center"
      >
        <div>
          <p className="mt-10 uppercase text-sm tracking-widest font-bold text-[#7b7b7b]">
            Desenvolvimento web com paixão e propósito!
          </p>
          <h1 className="py-4 ">
            Olá! Eu sou o <span className="text-[#0E3C89]">Juan</span>
          </h1>
          <Typed
            className="py-1 font-bold mmd:text-2xl text-5xl"
            strings={[
              "Desenvolvedor Web",
              "Portfólio feito com <br> ReactJs, NextJs e TailwindCSS",
              "Portfólio 100% responsivo",
            ]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
          <div className="flex items-center justify-center gap-6 m-auto py-4">
            <Link href="https://www.linkedin.com/in/juancostacizilio/">
              <a
                target="_blank"
                id="icon"
                className="shadow-lg shadow-gray-900 rounded-full p-6 cursor-pointer"
              >
                <FaLinkedinIn size={18} className="text-[#0e3c89]" />
              </a>
            </Link>
            <Link href="https://github.com/juanjc031">
              <a
                target="_blank"
                className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer"
              >
                <FaGithub size={18} className="text-[#0e3c89]" />
              </a>
            </Link>
            <Link href="/#contato">
              <a className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer">
                <AiOutlineMail size={18} className="text-[#0e3c89]" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/juancsz_/" target="_blank">
              <a
                target="_blank"
                className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer"
              >
                <AiOutlineInstagram size={18} className="text-[#0e3c89]" />
              </a>
            </Link>
          </div>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 800, damping: 10 }}
              onClick={handleScroll}
            >
              <button
                type="button"
                class="text-white mt-5 shadow-lg shadow-gray-900 bg-gradient-to-r from-blue-800 via-blue-800 to-blue-900 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                <span className="flex items-center">
                  Sobre mim <IoIosArrowDown className="ml-1 " />
                </span>
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 800, damping: 10 }}
            >
              <button
                type="button"
                class="text-white ml-4 mt-5 shadow-lg shadow-gray-900 bg-gradient-to-r from-blue-800 via-blue-800 to-blue-900 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                <a href="/assets/curriculoJuan.pdf" download="curriculoJuan">
                  <span className="flex items-center">
                    <p>Ver curriculo</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </span>
                </a>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariantsRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-[40%] mmd:w-[55%] flex justify-start items-center"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 800, damping: 10 }}
        >
          <div className="bounce-up-down border-[3px] shadow-xl shadow-gray-900 border-[#0E3C89] p-[2px] rounded-full flex justify-center items-center">
            <div className="border-8 border-[#0E3C89] rounded-full flex justify-center items-center">
              <Image
                src={juan}
                className="flex justify-center items-center dark:opacity-75 opacity-100 rounded-full"
                alt="juan"
                width={350}
                height={350}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Main;
