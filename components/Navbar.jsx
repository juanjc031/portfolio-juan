
import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {useRouter} from 'next/router';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navfundo, setnavfundo] = useState('#d3d3d3')
    const [cor, setcor] = useState('#0f0f0f')
    const router = useRouter()

    useEffect(()=>{
        if(
            router.asPath === '/nomeprojeto1' ||
            router.asPath === '/nomeprojeto2' ||
            router.asPath === '/nomeprojeto3' ||
            router.asPath === '/nomeprojeto4' 
        ) {
            setnavfundo('transparent')
            setcor('#d3d3d3')
        } else{
            setnavfundo('#d3d3d3')
            setcor('#0f0f0f')
        }
    },[router])

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect (()=> {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true)
            }
            else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    },[])

    return( 
        <div style={{backgroundColor: `${navfundo}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div className='ml-10 mt-1'>
                <Link  href=''>
                <Image  src={/../public/assets/logojuan2.jpg} alt="/" width="85" height="80" />
                </Link>
                </div>
                <div>
                    <ul style={{color: `${cor}`}} className='hidden md:flex'>
                        <Link href='/'>
                            <li className='transition-all ml-10 text-sm uppercase hover:text-stone-500 text-black' >Homeeee</li>
                        </Link>
                        <Link href='/#sobre'>
                            <li className='transition-all ml-10 text-sm uppercase hover:text-stone-500 text-black' >Sobre</li>
                        </Link>
                        <Link href='/#habilidades'>
                            <li className='transition-all ml-10 text-sm uppercase hover:text-stone-500 text-black' >Habilidades</li>
                        </Link>
                        <Link href='/#projetos'>
                            <li className='transition-all ml-10 text-sm uppercase hover:text-stone-500 text-black' >Projetos</li>
                        </Link>
                        <Link href='/#contato'>
                            <li className='transition-all ml-10 text-sm uppercase hover:text-stone-500 text-black' >Contato</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden  fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between '>
                            <Image src='/../public/assets/logojuan4.jpg' width="80" height="80" alt='logo' />
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
                            <li className='py-4 text-sm'>Home</li> 
                            </Link>
                            <Link href='/'>
                            <li className='py-4 text-sm'>Sobre</li> 
                            </Link>
                            <Link href='/'>
                            <li className='py-4 text-sm'>Habilidades</li> 
                            </Link>
                            <Link href='/'>
                            <li className='py-4 text-sm'>Projetos</li> 
                            </Link>
                            <Link href='/'>
                            <li className='py-4 text-sm'>Contato</li> 
                            </Link>
                        </ul>
                        <div className='pt-40 '>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Vamos nos conectar! </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
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