import Image from 'next/image'
import juanlogo from '../public/assets/juanlogo.png'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { CiDark, CiLight } from 'react-icons/ci'
import Link from 'next/link'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navfundo, setnavfundo] = useState('#d3d3d3')
    const [cor, setcor] = useState('#0f0f0f')
    const router = useRouter()
    const [darkIcon, setDark] = useState(true);

    useEffect(() => {
        if (
            router.asPath === '/nomeprojeto1' ||
            router.asPath === '/nomeprojeto2' ||
            router.asPath === '/nomeprojeto3' ||
            router.asPath === '/nomeprojeto4'
        ) {
            setnavfundo('transparent')
            setcor('#d3d3d3')
        } else {
            setnavfundo('#d3d3d3')
            setcor('#0f0f0f')
        }
    }, [router])

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            }
            else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        
        <div className={shadow ? `duration-700 fixed w-full h-24 shadow-xl shadow-gray-900 z-[100]  bg-[#020305] -mt-15` : `duration-700 fixed w-full h-24 z-[100]  bg-[#030509] -mt-15`}>
            <div className='flex justify-between items-center w-full px-2 2xl:px-16 h-full'>
                <div className='ml-4 mt-1 '>
                    <Link href=''>
                        <Image src={juanlogo} alt="logo" width="80" height="80" />
                    </Link>
                </div>
                <div>
                    <ul style={{ color: `${cor}` }} className='hidden md:flex'>
                        {darkIcon ? <CiDark className='cursor-pointer dark:text-white ' size={25} onClick={() => {
                            document.querySelector('html').classList.toggle('dark')
                            setDark(!darkIcon)}} /> 
                            : <CiLight className='cursor-pointer dark:text-white ' size={25} onClick={() => {
                            document.querySelector('html').classList.toggle('dark')
                            setDark(!darkIcon)
                        }} />}

                        <Link href='/'>
                            <li className='transition-all ml-10 text-sm uppercase hover:text-stone-500 ' >Home</li>
                        </Link>
                        <Link href='/#sobre'>
                            <li className='transition-all ml-10 text-sm uppercase hover:text-stone-500 ' >Sobre</li>
                        </Link>
                        <Link href='/#habilidades'>
                            <li className='transition-all ml-10 text-sm uppercase hover:text-stone-500 ' >Habilidades</li>
                        </Link>
                        <Link href='/#projetos'>
                            <li className='transition-all ml-10 text-sm uppercase hover:text-stone-500 ' >Projetos</li>
                        </Link>
                        <Link href='/#contato'>
                            <li className='transition-all ml-10 text-sm uppercase hover:text-stone-500 ' >Contato</li>
                        </Link>
                    </ul>
                    <div className='flex gap-5'>

                    <div  className='md:hidden cursor-pointer flex gap-5'>
                    <div>                            
                        {darkIcon ? <CiDark className='cursor-pointer dark:text-white' size={25} onClick={() => {
                        document.querySelector('html').classList.toggle('dark')
                        setDark(!darkIcon)
                        }} /> : <CiLight className='cursor-pointer dark:text-white' size={25} onClick={() => {
                        document.querySelector('html').classList.toggle('dark')
                        setDark(!darkIcon)
                        }} />}
                        </div>
                        <div onClick={handleNav} className='md:hidden cursor-pointer flex gap-5 active:bg-black'>
                        <AiOutlineMenu size={25} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden  fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 '
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between '>
                            <Image src={juanlogo} width="80" height="80" alt='logo' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4 '>
                            <p className='w-[85%] md:w-[90%] py-4'>Vamos construir algo lendário juntos</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={handleNav} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#sobre'>
                                <li onClick={handleNav} className='py-4 text-sm'>Sobre</li>
                            </Link>
                            <Link href='/#habilidades'>
                                <li onClick={handleNav} className='py-4 text-sm'>Habilidades</li>
                            </Link>
                            <Link href='/#projetos'>
                                <li onClick={handleNav} className='py-4 text-sm'>Projetos</li>
                            </Link>
                            <Link href='/#contato'>
                                <li onClick={handleNav} className='py-4 text-sm'>Contato</li>
                            </Link>
                        </ul>
                        <div className='pt-40 '>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Vamos nos conectar! </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
        
    )
}

export default Navbar