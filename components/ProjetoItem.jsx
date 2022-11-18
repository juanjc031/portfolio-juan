import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const ProjetoItem = ({title, backgroundImg, tech, projectUrl}) => {
    return(
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-900 rounded-xl p-4 group hover:bg-gradient-to-r from-[#092350] to-[#3370da] duration-500'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-xl sm:text-2xl text-white tracking-wider text-center my-2'>{title}</h3>
            <p className=' text-white text-center my-2'>{tech}</p>
            <Link href={projectUrl}>
                <p className='py-1 text-sm  sm:py-3 text-center rounded-lg bg-white text-gray-700 font-bold sm:text-lg cursor-pointer my-2 '>Mais Informações</p>
            </Link>
        </div>
    </div>
    
    )
}

export default ProjetoItem;