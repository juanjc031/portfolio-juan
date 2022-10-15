import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import controleImg from '../public/assets/controle.JPG'
import calculadoraImg from '../public/assets/calculadora.JPG'
import ProjetoItem from './ProjetoItem';

const Projetos = () => {
    return(
        <div id='projetos' className='w-full '>
            <div className='max-w-[1240px] mx-auto px-2 py-16 '>
                <p className='text-xl tracking-widest uppercase text-[#0E3C89]'>Projetos</p>
                <h2 className='py-4'>O que eu já fiz</h2>
                <div className='grid md:grid-cols-2 gap-8'> 

                    <ProjetoItem title='App de controle financeiro' backgroundImg={controleImg} projectUrl='#' tech='React JS'/>

                    <ProjetoItem title='Calculadora' backgroundImg={calculadoraImg} projectUrl='#' tech='JS'/>

                </div>
            </div>

        </div>
    )
}

export default Projetos;