import React from 'react'
import {AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import Link from 'next/link'

const Main = () => {
    return (
        <div id='main' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center' >
                <div>
                        <p className='uppercase text-sm tracking-widest text-gray-800 font-bold'>Vamos construir algo lendário juntos</p>
                        <h1 className='py-4'>Olá! Eu sou o <span className='text-[#0E3C89]'>Juan</span></h1>
                        <h1 className='py-1 text-5xl'>Desenvolvedor Web</h1>
                        <p className='py-4 text-gray-800 max-w-[70%] m-auto'></p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <Link href="https://www.linkedin.com/in/juancostacizilio/" target="_blank">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        </Link>
                        <Link href="https://github.com/juanjc031">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        </Link>
                        <Link href="/#contato">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        </Link>
                        <Link href="https://www.instagram.com/juancsz_/" target="_blank">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineInstagram />
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main