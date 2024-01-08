import Image from "next/image";
import React from "react";
import priceSnifferImg from "../public/assets/PriceSniffer.png";
import { RiRadioButtonFill } from "react-icons/ri";
/* import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6"; */
import Link from "next/link"; /* 
import { BiArrowToRight, BiLogoTailwindCss } from "react-icons/bi";

import { RiJavascriptFill } from "react-icons/ri"; */

const priceSniffer = () => {
  return (
    <div className="w-full h-full !bg-[#030509] !text-white">
      <div className="w-full h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          src={priceSnifferImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">PriceSniffer</h2>
          <h3>Aglets</h3>
        </div>
      </div>
      <div className="p-14  mx-auto mmd:flex-col flex justify-between gap-8 ">
        <div className="flex flex-col mmd:w-full w-[80%] pr-10">
          <p>Projeto</p>
          <h2>Visão geral</h2>
          <p className="mt-4">
            Desenvolvi também o PriceSniffer, ou o &quot;Farejador de
            preços&quot;, que é um projeto em que o cliente (normalmente uma
            distribuidora), realiza a entrada de seus produtos e preços que
            desejam que sejam monitorados, após isso o nosso sistema compara o
            preço do produto do nosso cliente com outros diversos marketplaces,
            assim retornando um relatório completo de como o cliente está diante
            da concorrência.
          </p>
          <p className="mt-2">
            O projeto permite que o cliente personalize a maioria dos quesitos,
            como por exemplo de quanto em quanto tempo o produto deve ser
            monitorado, data de início e fim do monitoramento, características
            específicas dos produtos e quais outros marketplaces entrarão nas
            comparações.
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
            </Link>
          </div>
        </div>
        <div className="border border-[#fff] mmd:w-1/2 rounded-xl px-6 py-2 shadow-lg shadow-gray-900 ">
          <p className="pl-2 font-bold pb-2">Tecnologias</p>
          <div className="text-gray-200 gap-2 flex flex-col pl-2">
            <p className=" flex items-center">JavaScript</p>
            <p className=" flex items-center">NodeJs</p>
            <p className=" flex items-center">PHP</p>
            <p className=" flex items-center">JQuery</p>
            <p className=" flex items-center">BootStrap</p>
            <p className=" flex items-center">Scrum</p>
            <p className=" flex items-center">Sql</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default priceSniffer;
