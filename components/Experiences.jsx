import ExperienceItem from "./ExperienceItem";
import React from "react";
import { motion } from "framer-motion";
import agletsImg from "../public/assets/aglets.png";
import cotemig from "../public/assets/cotemig.png";
import rocket from "../public/assets/rocket.png";
import una from "../public/assets/una.png";
import { FaReact, FaBootstrap, FaQuestion  } from "react-icons/fa";
import { DiScrum, DiPhp } from "react-icons/di";
import { MdOutlineSchool } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import {
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiTailwindcss,
  SiCsharp,
} from "react-icons/si";

import { fadeInAnimationVariantsLeft } from "./Main";
import { fadeInAnimationVariantsRight } from "./Main";

const color = `dark:text-[#c4c4c4] text-[#050505]`;

const Experiences = () => {
  return (
    <div
      id="experiencias"
      className="overflow-x-hidden w-full py-8 pt-24 flex-col text-start"
    >
      <div className="w-full cursor-default h-full mx-auto p-2 flex-col mmd:px-0 px-16 justify-start items-center">
        <motion.h2
          variants={fadeInAnimationVariantsLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-2 mmd:px-10 text-[#0E3C89] mb-6"
        >
          Minhas experiências
        </motion.h2>
        <div className="flex justify-between flex-wrap gap-12 mmd:justify-center  relative items-start w-full">
          <motion.div
            variants={fadeInAnimationVariantsLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-[80%] md:w-[47%] flex-col items-center p-4 gap-2 justify-evenly rounded-xl shadow-xl shadow-gray-900"
          >
            <ExperienceItem
              img={agletsImg}
              title={"Aglets Soluções"}
              desc={"Desenvolvedor FullStack"}
              data={"Outubro 2022 - Dezembro 2023"}
              info={`Sistema completo de gestão empresarial que conta com uma
                    plataforma que unifica e simplifica a gestão empresarial.
                    Com o objetivo de aumentar as vendas, automatizar a emissão
                    de NF e simplificar processos.`}
              act={`Trabalhei no desenvolvimento do portal ERP WEB, o qual é o principal projeto e a principal ideia da empresa, além disso, trabalhei no B2B, um projeto de força de vendas
                    complexo focado em distribuidoras, indústria e atacado.
                    Além disso, trabalhei no desenvolvimento do PriceSniffer, um projeto que busca preços de produtos de outros MarketPlaces, permitindo o cliente se destacar da concorrência.
                   `}
              icons={
                <>
                  <SiJavascript className={`${color} rounded-md`}/>{" "}
                  <SiTypescript className={`${color} rounded-md`} />
                  <FaReact className={color} />
                  <SiJquery className={color} />
                  <SiTailwindcss className={color} />{" "}
                  <DiPhp className={color} /> <FaBootstrap className={color} />{" "}
                  <DiScrum className={color} /> <GrMysql className={color} />
                </>
              }
            />
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariantsRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-[80%] md:w-[47%] flex-col items-center p-4 gap-2 justify-evenly rounded-xl shadow-xl shadow-gray-900"
          >
            <ExperienceItem
              img={una}
              title={"Faculdade UNA"}
              desc={"Análise de desenvolvimento de sistemas"}
              data={"Janeiro 2023 - julho 2026 (Previsão)"}
              info={`Instituição de ensino superior reconhecida por sua excelência acadêmica em BH, destacada pela qualidade do ensino, infraestrutura moderna e oportunidades de desenvolvimento acadêmico e profissional.`}
              act={`Ao longo do meu curso de análise de desenvolvimento de sistemas na UNA, pretendo aprender e
               aperfeiçoar meus conhecimentos em compreender processos de desenvolvimento de Software, algaritmos, técnicas de programação,
                análise de complexidade e sistemas de informação. Além de adquirir novas habilidades técnicas e novas soft skills e explorar diferentes áreas de especialização`}
              icons={
                <>
                  <FaQuestion className={color} />
                </>
              }
            />
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariantsLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-[80%] md:w-[47%] flex-col items-center p-4 gap-2 justify-evenly rounded-xl shadow-xl shadow-gray-900"
          >
            <ExperienceItem
              img={cotemig}
              title={"Colégio Cotemig"}
              desc={"Técnico em informatica"}
              data={"Janeiro 2022 - Dezembro 2023"}
              info={`O COTEMIG é referência no ensino de tecnologia da informação e informática, com método de ensino focado nas demandas do mercado e a melhor estrutura tecnológica de Minas Gerais.`}
              act={`No COTEMIG me formei no ensino médio juntamente com o técnico em informática, aqui, obtive conhecimentos fundamentais sobre algoritimos e técnicas de programação, programação orientada a objetos, banco de dados, desenvolvimento web e redes, além de desenvolver soft skills importantes, como comunicação eficaz, trabalho em equipe, resolução de problemas e adaptabilidade.`}
              icons={
                <>
                     <SiJavascript className={`${color} rounded-md`} />
              <DiPhp className={color} />{" "}
                  <GrMysql className={color} /> <DiScrum className={color} />{" "}
                  <FaBootstrap className={color} />
                  <MdOutlineSchool className={color} />{" "}
                  <SiCsharp className={color} />{" "}
                </>
              }
            />
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariantsRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-[80%] md:w-[47%] flex-col items-center p-4 gap-2 justify-evenly rounded-xl shadow-xl shadow-gray-900"
          >
            <ExperienceItem
              img={rocket}
              title={"Rocket Seat"}
              desc={"Curso de Dev.FullStack"}
              data={"Outubro 2022 - Presente"}
              info={`Plataforma de cursos completa para aprender programação, se tornar um desenvolvedor e se especializar em diversas tecnologias.`}
              act={`Minha passagem pelo curso da Rocketseat está sendo uma experiência intensiva que impulsiona meu conhecimento em desenvolvimento. A abordagem prática e os desafios propostos me permitem aprimorar habilidades em diversas tecnologias. A interação com a comunidade e a colaboração e inovação complementam essa jornada, proporcionando uma base sólida e preparando-me para desafios no mundo real do desenvolvimento.`}
              icons={
                <>
                  <SiJavascript className={`${color} rounded-md`} />
                  <SiTypescript className={`${color} rounded-md`} />
                  <FaReact className={color} />
                  <SiTailwindcss className={color} />
                </>
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
