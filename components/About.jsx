import react from "react"
import Image from "next/image";
import notebook from '../public/assets/notebook.JPG'

const About = () => {
    return (
        <div id='sobre' className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#0E3C89]">Sobre</p>
                    <h2 className="py-4 ">Quem eu sou</h2>
                    <p className="py-2 text-[#3a3a3a]">Olá! Meu nome é Juan, tenho 17 anos e estou em busca da minha primeira oportunidade de estágio relacionada à área de desenvolvimento web, que me possa trazer novas perspectivas de futuro e crescimento em Belo Horizonte.</p>
                    <p className="py-2 text-[#3a3a3a]">Tenho total interesse em desenvolver minhas habilidades e contribuir para o crescimento da empresa!</p>
                    <p className="py-2 text-[#3a3a3a]">Estou cursando o 2° ano no colégio Cotemig, referência no ensino de TI e Informática.</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 easy-in duration-300">
                    <Image src={notebook} className="rounded-xl" alt="noteboo" width="500" height="550" />
                </div>
            </div>
        </div>
    );
};

export default About;