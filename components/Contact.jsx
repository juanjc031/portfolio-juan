import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsLeft } from "./Main";
import { fadeInAnimationVariantsRight } from "./Main";
import contact from "../public/assets/pagcontato.PNG";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  
  const [load, setLoad] = useState(true)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoad(false)

    if (name == "" || email == "" || message == "") {
      Swal.fire({
        title: "Erro!",
        text: "Por favor, preencha todos os campos e tente novamente.",
        icon: "error",
        confirmButtonText: "Ok",
        customClass: {
          popup: 'customSwal', 
        },
        confirmButtonColor: '#0E3C89'
      });
      setLoad(true)
      return;
    }

    const templateParms = {
      from_name: name,
      message: message,
      assunto: assunto,
      email: email,
    };

    emailjs
      .send(
        "service_sbh8b8n",
        "template_vvxmmbi",
        templateParms,
        "lrCc_ZyGnxYlj7QT7"
      )
      .then(
        (response) => {
          Swal.fire({
            title: "Email enviado!",
            text: "Obrigado pelo contato! Entrarei em contato em breve.",
            icon: "success",
            confirmButtonText: "Ok",
            customClass: {
              popup: 'customSwal',
            },
            confirmButtonColor: '#0E3C89'
          });
          setName("");
          setEmail("");
          setAssunto("");
          setMessage("");
          setLoad(true)
          console.log("Email enviado", response.status);
        },
        (err) => {
          console.log("Erro:", err);
          Swal.fire({
            title: "Erro!",
            text: "Desculpe pelo imprevisto, ocorreu algum erro relacionado ao emailJs, entre em contato comigo de outra maneira!",
            icon: "error",
            confirmButtonText: "Ok",
            customClass: {
              popup: 'customSwal', 
            },
            confirmButtonColor: '#0E3C89'
          });
        }
      );
  };

  return (
    <div id="contato" className="overflow-x-hidden mmd:h-full mmd:mt-4 w-full">
      <div className=" m-auto p-16 mmd:p-6 w-full">
        <p className="text-xl tracking-widest uppercase text-[#0E3C89]">
          Contato
        </p>
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            variants={fadeInAnimationVariantsLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-900 rounded-xl p-4"
          >
            <div className="lg:px-4 lg:pt-4 lg:pb-2 h-full ">
              <div>
                <Image
                  src={contact}
                  alt="contato"
                  className="rounded-xl ease-in duration-300 "
                  width="640"
                  height="427"
                />
              </div>
              <div className="py-2">
                <h2>Juan Costa</h2>
                <p>Desenvolvedor Web</p>
                <p className="pt-2">Email: juancostacizilio@gmail.com</p>
                <p className="pb-2">Número: (31) 99446-4673</p>
                <p className="uppercase">Vamos nos conectar!</p>
              </div>
              <div>
                <div className="flex items-end justify-start gap-8">
                  <Link href="https://www.linkedin.com/in/juancostacizilio/">
                    <a
                      target="_blank"
                      id="icon"
                      className="shadow-lg shadow-gray-900  rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <FaLinkedinIn size={18} className="text-[#0e3c89]" />
                    </a>
                  </Link>
                  <Link href="https://github.com/juanjc031">
                    <a
                      target="_blank"
                      className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <FaGithub size={18} className="text-[#0e3c89]" />
                    </a>
                  </Link>
                  <Link
                    href="https://www.instagram.com/juancsz_/"
                    target="_blank"
                  >
                    <a
                      target="_blank"
                      className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <AiOutlineInstagram
                        size={18}
                        className="text-[#0e3c89]"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariantsRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="col-span-3 w-full h-auto shadow-xl shadow-gray-900 rounded-xl lg:p-4"
          >
            <div className="p-4 ">
              <form onSubmit={sendEmail} method="POST">
                {/*  <input type="hidden" name="_captcha" value="false" /> */}
                {/*  <input
                  type="hidden"
                  name="_next"
                  value="https://portfolio-juan.vercel.app/"
                /> */}
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2"> Nome </label>
                    <input
                      name="nome"
                      className="border-2 rounded-lg p-3 flex dark:border-black dark:bg-[#070c15] focus:outline-none bg-gray-200 border-gray-400"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2"> Email </label>
                    <input
                      name="email"
                      className="border-2 rounded-lg p-3 flex dark:border-black dark:bg-[#070c15] focus:outline-none bg-gray-200 border-gray-400"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2"> Assunto </label>
                  <input
                    name="assunto"
                    className="border-2 rounded-lg p-3 flex dark:border-black dark:bg-[#070c15] focus:outline-none bg-gray-200 border-gray-400"
                    type="text"
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2"> Mensagem </label>
                  <textarea
                    name="mensagem"
                    className="border-2 rounded-lg p-3 dark:border-black dark:bg-[#070c15] focus:outline-none bg-gray-200 border-gray-400"
                    rows="7"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex justify-start">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 800, damping: 10 }}
                    className="w-full"
                  >
                    <button
                      type="submit"
                      className="w-full px-10 p-4 text-gray-100 mt-4 shadow-xl shadow-gray-900 rounded-xl uppercase bg-gradient-to-r from-blue-900 to-blue-500 "
                    >
                      <span className={load ? `` : `hidden`}>Enviar mensagem</span>
                      <div className={load ? `hidden ` : `flex justify-center w-full items-center`} role="status">
                        <svg
                          aria-hidden="true"
                          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </button>
                  </motion.div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300 animate-bounce">
              <HiOutlineChevronDoubleUp
                className="m-auto text-blue-900"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Contact;


