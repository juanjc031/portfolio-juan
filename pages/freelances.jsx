import Image from "next/image";
import React from "react";
import freeLance from "../public/assets/freelance.jpg";
import Link from "next/link";

const priceSniffer = () => {
  return (
    <div className="w-full h-full !bg-[#030509] !text-white">
      <div className="w-full h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <Image className="absolute z-1" layout="fill" src={freeLance} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">FreeLances</h2>
          <h3>Pessoal</h3>
        </div>
      </div>
      <div className="p-14  mx-auto mmd:flex-col flex justify-between gap-8 ">
        <div className="flex flex-col mmd:w-full w-[80%] pr-10">
          <p>Projeto</p>
          <h2>Visão geral</h2>
          <p className="mt-4">
            Quando estou com tempo livre e fora do hórario de trabalho, costumo
            pegar projetos à parte com clientes diversificados, os projetos
            normalmente são focados em interfaces Front-End e quando necessário,
            algumas implementações de Back-End. Já desenvolvi projetos desde de
            alunos para organizações institucionais, até projetos de clientes
            que buscam um site para icrementar no valor da própria empresa.
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
        <div className="border mmd:w-1/2 border-[#fff] rounded-xl px-6 py-2 shadow-lg shadow-gray-900 ">
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

export default priceSniffer;
