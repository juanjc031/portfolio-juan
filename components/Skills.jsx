import Image from "next/image";
import React from "react";
import html from '../public/assets/html.png'
import tailwind from '../public/assets/tailwind.png'
import javascript from '../public/assets/javascript.png'
import nextjs from '../public/assets/nextjs.png'
import node from '../public/assets/node.png'
import react from '../public/assets/react.png'
import {GrMysql} from 'react-icons/gr'
import {TbCSharp} from 'react-icons/tb'

const Skills = () => {
    return (  
        <div id='habilidades' className="w-full lg:h-screen p-2 ">
            <div className="max-w-[1240] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#0E3C89]">Habilidades</p>
                <h2 className='py-4'>O que eu posso fazer</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>


                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto ">
                            <Image className="rounded-xl" src={html} alt="html" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                            <Image className="rounded-xl" src={tailwind} alt="tailwind" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                            <Image className="rounded-xl" src={javascript} alt="javascript" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Java Script</h3>
                            </div>
                        </div>
                    </div>   

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                            <Image className="rounded-xl" src={nextjs} alt="nextjs" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Next Js</h3>
                            </div>
                        </div>
                    </div> 

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                            <Image className="rounded-xl" src={node} alt="/" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Node Js</h3>
                            </div>
                        </div>
                    </div>                    
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                            <Image className="rounded-xl" src={react} alt="/" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React Js</h3>
                            </div>
                        </div>
                    </div>                    
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                            <GrMysql size={64}/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                            <h3>MySQL</h3>
                            </div>
                        </div>
                    </div>                    
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-1 ">
                            <div className="m-auto">
                            <TbCSharp size={64}/>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;