
import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link';





const Contato = () => {
    return(   
        <div id='contato' className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#0E3C89]">Contato</p> 
                <h2 className="py-4"></h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full ">
                            <div>
                                <img src="../public/assets/pagcontato.png" className="rounded-xl hover:scale-105 ease-in duration-300"  alt="contato" width="640" height="427" />
                            </div>
                            <div className='py-2'>
                                <h2>Juan Costa</h2>
                                <p>Desenvolvedor Web</p>
                                <p className='py-2'>Número: (31) 99446-4673</p>
                                <p>Email: juancostacizilio@gmail.com</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Vamos nos conectar!</p>
                                <div className='flex items-center justify-between py-4'>
                                <Link href="/">
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                </Link>
                                <Link href="/">
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                </Link>
                                <Link href="https://www.instagram.com/juancsz_/" >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineInstagram />
                                </div>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Parte da direita */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4 '>
                            <form action="https://formsubmit.co/juancostacizilio@gmail.com" method="POST">
                                <input type="hidden" name="_captcha" value="false"  />
                                <input type="hidden" name="_next" value="http://localhost:3000/" />
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'> Nome </label>
                                    <input name="nome" required className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                                    </div>
                                    <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'> Número </label>
                                    <input name="numero" required className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'> Email </label>
                                    <input name="email" required className='border-2 rounded-lg p-3 flex border-gray-300' type="email"/>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'> Assunto </label>
                                    <input name="assunto" required className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'> Mensagem </label>
                                    <textarea name="mensagem" required className='border-2 rounded-lg p-3 border-gray-300' rows="10"> </textarea>
                                </div>
                                <button type="submit" className='w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-blue-900 to-blue-500 text-white'>Enviar mensagem</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='m-auto text-blue-900' size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contato;