import React from "react";
import ProjetoItem from "./ProjectItem";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsLeft } from "./Main";
import { fadeInAnimationVariantsRight } from "./Main";
import agletsCrm from "../public/assets/AgletsCrm.jpg";
import PriceSniffer from "../public/assets/PriceSniffer.png";
import controle from "../public/assets/controle.png";
import freeLance from "../public/assets/freelance.jpg";

const Projetos = () => {
  return (
    <div id="projetos" className="w-screen overflow-x-hidden">
      <div className="md:p-16 mmd:px-4">
        <p className="text-xl tracking-widest uppercase text-[#0E3C89]">
          Projetos
        </p>
        <h2 className="pb-8 -mt-2 text-[#0E3C89]">Trabalhos já realizados</h2>
        <div className="flex justify-start flex-wrap items-center gap-8">
          <motion.div
            variants={fadeInAnimationVariantsLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="cursor-default relative overflow-hidden flex flex-col items-start justify-center h-auto md:w-[48%] shadow-xl shadow-gray-900 rounded-xl pb-4 px-4 group hover:bg-gradient-to-r from-[#000000] to-[#0e0e0e]"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 800, damping: 10 }}
          >
            <ProjetoItem
              title="Erp Web Aglets"
              backgroundImg={agletsCrm}
              projectUrl="/aglets"
              tech="& Portal B2B"
              width={1280}
              height={605}
            />
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariantsRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="cursor-default relative overflow-hidden flex flex-col items-start justify-center h-auto md:w-[48%] shadow-xl shadow-gray-900 rounded-xl pb-4 px-4 group hover:bg-gradient-to-r from-[#000000] to-[#0e0e0e]"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 800, damping: 10 }}
          >
            <ProjetoItem
              title="PriceSniffer"
              backgroundImg={PriceSniffer}
              projectUrl="/priceSniffer"
              tech={`"Farejador de preços"`}
              width={1280}
              height={605}
            />
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariantsLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="cursor-default relative overflow-hidden flex flex-col items-start justify-center h-auto md:w-[48%] shadow-xl shadow-gray-900 rounded-xl pb-4 px-4 group hover:bg-gradient-to-r from-[#000000] to-[#0e0e0e]"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 800, damping: 10 }}
          >
            <ProjetoItem
              title="Free Lances"
              backgroundImg={freeLance}
              projectUrl="/freelances"
              tech="Clientes diversificados"
              width={1280}
              height={605}
            />
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariantsRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="cursor-default relative overflow-hidden flex flex-col items-start justify-center h-auto md:w-[48%] shadow-xl shadow-gray-900 rounded-xl pb-4 px-4 group hover:bg-gradient-to-r from-[#000000] to-[#0e0e0e]"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 800, damping: 10 }}
          >
            <ProjetoItem
              title="Controle Financeiro"
              backgroundImg={controle}
              projectUrl="/controle"
              tech="Simples Site"
              width={1280}
              height={605}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
