import Image from "next/image";
import aboutImagem from "../public/assets/sobreImagem.png";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsLeft } from "./Main";
import { fadeInAnimationVariantsRight } from "./Main";

const About = () => {
  return (
    <div id="sobre" className="overflow-x-hidden w-full p-2 flex flex-col items-center ">
      <div className="md:h-24"></div>
      <div className="md:px-16 md:m-auto flex mmd:flex-col justify-between items-center gap-8">
        <motion.div
          variants={fadeInAnimationVariantsLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mmd:w-[80%] w-[60%]"
        >
          <p className="uppercase text-xl tracking-widest text-[#0E3C89]">
            Sobre
          </p>
          <h2 className="pb-4 text-[#0E3C89] -mt-2">Quem eu sou</h2>
          <p className="pt-2">
            Olá! Meu nome é Juan Costa, tenho 18 anos e sou desenvolvedor desde
            2022, tenho trabalhado em uma variedade de projetos de grande porte
            para clientes, empregando metodologias ágeis. Minha constante
            preocupação está centrada na experiência do usuário, buscando
            atender e superar todas as expectativas, além de executar as tarefas
            atribuídas da forma mais eficaz possível.
          </p>

          <p className="pt-2">
            Ao longo das minhas experiências, aprimorei habilidades fundamentais,
            como o trabalho em equipe, boa adaptação e aprendizado contínuo. Além
            disso, fortaleci minhas capacidades técnicas, concentrando-me
            especialmente no desenvolvimento em JavaScript, PHP e ReactJS.
            Atualmente, estou em busca de oportunidades para expandir ainda mais
            essas habilidades e adquirir novos conhecimentos técnicos.
          </p>
          <hr class="h-px my-2 bg-[#0E3C89] border-0"></hr>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariantsRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 800, damping: 10 }}
          className="mmd:w-3/4 w-1/4  m-auto shadow-lg shadow-gray-900 rounded-xl flex items-center justify-center p-4"
        >
          <Image src={aboutImagem} className="rounded-xl" alt="/" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
