import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Projetos from '../components/Projetos'
import Contato from '../components/Contato'



export default function Home() {
  return (
    <html class='dark'>
      <Head>
        <title>Juan Costa | Desenvolvedor Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projetos />
      <Contato />


    </html>
  )
}
