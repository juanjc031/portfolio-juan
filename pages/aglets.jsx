import Image from "next/image";
import React from "react";
import agletsImg from "../public/assets/aglets.png";
import Link from "next/link";

const aglets = () => {
  return (
    <div className="w-full h-full !bg-[#030509] !text-white">
      <div className="w-full h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <Image className="absolute z-1" layout="fill" src={agletsImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">ERP Aglets</h2>
        </div>
      </div>
      <div className="p-14  mx-auto mmd:flex-col flex justify-between gap-8 ">
        <div className="flex flex-col mmd:w-full w-[80%] pr-10">
          <p>Projeto</p>
          <h2>Visão geral</h2>
          <p className="mt-4">
            Desenvolvi uma reprodução do portal antigo que estava em PHP,
            transformando-o em um novo portal com tecnologias atuais, como o
            ReactJS, TypeScript, TailwindCSS, FramerMotion, Axios e diversas
            outras bibliotecas voltadas para o Front-End.
          </p>
          <p className="mt-2">
            Além disso, empregando as metodologias agéis SCRUM, na versão antiga
            do portal, desenvolvi diversas melhorias no setor financeiro do ERP
            e atendi diversos chamados de clientes, utilizando principalmente
            PHP no Back-End e tecnologias mais antigas na parte do Front-End.
          </p>
          <p className="mt-2">
            Desenvolvi também o projeto B2B, um sistema de força de vendas
            complexo de CNPJ para CNPJ, com recursos exclusivos para
            distribuidoras, indústria e atacado. Onde precisei dar manutenção e
            implementação de novas funcionalidades em todo o projeto.
          </p>
          <br />
          <div className="flex gap-4 justify-start">
            <Link href={"/#projetos"} className="">
              <button
                type="button"
                class="mt-2 border-[3px] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                <span className="flex items-center font-bold text-white">
                  Voltar à página principal
                </span>
              </button>
            </Link>{" "}
          </div>
        </div>
        <div className="border border-[#fff] mmd:w-1/2 rounded-xl px-6 py-2 shadow-lg shadow-gray-900 ">
          <p className="pl-2 font-bold pb-2">Tecnologias</p>
          <div className="text-gray-200 gap-2 flex flex-col pl-2">
            <p className=" flex items-center">JavaScript</p>
            <p className=" flex items-center">ReactJs</p>
            <p className=" flex items-center">PHP</p>
            <p className=" flex items-center">TypeScript</p>
            <p className=" flex items-center">TailwindCSS</p>
            <p className=" flex items-center">JQuery</p>
            <p className=" flex items-center">Sql</p>
            <p className=" flex items-center">BootStrap</p>{" "}
            <p className=" flex items-center">Scrum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aglets;
