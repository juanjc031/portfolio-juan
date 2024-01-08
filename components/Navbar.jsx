import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import juanlogo from "../public/assets/juanlogo.png";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CiDark, CiLight } from "react-icons/ci";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  let [darkIcon, setDark] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setDark(!darkIcon);
    console.log(darkIcon);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? `overflow-x-hidden w-full duration-700 fixed  h-20 shadow-xl shadow-gray-300 dark:shadow-gray-900 z-[100] bg-[#fcf9f6] dark:bg-[#020305] -mt-15`
          : `overflow-x-hidden w-full duration-700 fixed  h-20 z-[100] bg-[#fcf9f6] dark:bg-[#030509] -mt-15`
      }
    >
      <div className="flex justify-between items-center w-full px-2 2xl:px-16 h-full">
        <div className="ml-12 mt-1 ">
          <Link href="">
            <Image className="animate-pulse" src={juanlogo} alt="logo" width="60" height="60" />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex ">
            {darkIcon ? (
              <CiDark
                className="cursor-pointer"
                size={25}
                onClick={handleThemeSwitch}
              />
            ) : (
              <CiLight
                className="cursor-pointer"
                size={25}
                onClick={handleThemeSwitch}
              />
            )}
            <Link href="/">
              <li className="transition-all ml-10 text-sm uppercase hover:text-stone-500 ">
                Home
              </li>
            </Link>
            <Link href="/#sobre">
              <li className="transition-all ml-10 text-sm uppercase hover:text-stone-500 ">
                Sobre
              </li>
            </Link>
            <Link href="/#experiencias">
              <li className="transition-all ml-10 text-sm uppercase hover:text-stone-500 ">
                Experiências
              </li>
            </Link>
            <Link href="/#habilidades">
              <li className="transition-all ml-10 text-sm uppercase hover:text-stone-500 ">
                Habilidades
              </li>
            </Link>
            <Link href="/#projetos">
              <li className="transition-all ml-10 text-sm uppercase hover:text-stone-500 ">
                Projetos
              </li>
            </Link>
            <Link href="/#contato">
              <li className="transition-all ml-10 text-sm uppercase hover:text-stone-500 mr-10">
                Contato
              </li>
            </Link>
          </ul>
          <div className="flex gap-5">
            <div className="md:hidden cursor-pointer flex gap-5">
              <div>
                {darkIcon ? (
                  <CiDark
                    className="cursor-pointer dark:text-white"
                    size={25}
                    onClick={() => {
                      document.querySelector("html").classList.toggle("dark");
                      setDark(!darkIcon);
                    }}
                  />
                ) : (
                  <CiLight
                    className="cursor-pointer dark:text-white"
                    size={25}
                    onClick={() => {
                      document.querySelector("html").classList.toggle("dark");
                      setDark(!darkIcon);
                    }}
                  />
                )}
              </div>
              <div
                onClick={handleNav}
                className="md:hidden cursor-pointer flex gap-5 active:bg-black"
              >
                <AiOutlineMenu size={25} className="text-[#c4c4c4]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* aside bar */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#fcf9f6] dark:bg-[#030509]  p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Image src={juanlogo} width="80" height="80" alt="logo" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 ">
              <p className="w-[85%] md:w-[90%] py-4">
                Desenvolvimento web com paixão e propósito!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={handleNav} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#sobre">
                <li onClick={handleNav} className="py-4 text-sm">
                  Sobre
                </li>
              </Link>
              <Link href="/#habilidades">
                <li onClick={handleNav} className="py-4 text-sm">
                  Habilidades
                </li>
              </Link>
              <Link href="/#projetos">
                <li onClick={handleNav} className="py-4 text-sm">
                  Projetos
                </li>
              </Link>
              <Link href="/#contato">
                <li onClick={handleNav} className="py-4 text-sm">
                  Contato
                </li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Vamos nos conectar!{" "}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href="https://www.linkedin.com/in/juancostacizilio/">
                  <a
                    target="_blank"
                    id="icon"
                    className="shadow-lg shadow-gray-900  rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaLinkedinIn size={18} className="text-[#0e3c89]" />
                  </a>
                </Link>
                <Link href="https://github.com/juanjc031">
                  <a
                    target="_blank"
                    className="rounded-full shadow-lg shadow-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaGithub size={18} className="text-[#0e3c89]" />
                  </a>
                </Link>

                <Link href="/#contato">
                  <a
                    onClick={handleNav}
                    className="rounded-full shadow-lg shadow-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <AiOutlineMail size={18} className="text-[#0e3c89]" />
                  </a>
                </Link>
                <Link
                  href="https://www.instagram.com/juancsz_/"
                  target="_blank"
                >
                  <a
                    target="_blank"
                    className="rounded-full shadow-lg shadow-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <AiOutlineInstagram size={18} className="text-[#0e3c89]" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
