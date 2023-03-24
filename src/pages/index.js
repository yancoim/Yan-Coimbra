import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {FaCode} from 'react-icons/fa';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../assets/dev-ed-wave.png';
import css from '../assets/CSS.svg'
import html5 from '../assets/html5.svg'
import javascript from '../assets/javascript.svg'
import doctorcare from '../assets/doctorcare.png'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/reactjs.svg'
import loginLol from '../assets/login-page-lol.png'
import cep from '../assets/cep.jpg'
import bootstrap from '../assets/bootstrap.svg'
import calc from '../assets/calculadora.png'
import { useState } from 'react';
export default function Home() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Yan Coimbra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/coding.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 '>
        <section className=' min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between '>
          <h1 className='text-lg flex items-center gap-1 font-sans font-medium dark:text-white'>DevYan<FaCode className='text-2xl text-indigo-500'/></h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill onClick={ () => setDarkMode(!darkMode)} className='cursor-pointer text-xl text-indigo-600'/>
            </li>
            <li><a className=' bg-gradient-to-r from-indigo-500 to-violet-500 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 text-white px-4 py-2 rounded-md ml-8' href='#projects'>Projetos</a></li>
          </ul>
        </nav>
        <div className='text-center p-8 md:p-10'>
          <h2 className='text-5xl py-2 text-violet-600 font-bold md:text-6xl'>Yan Coimbra</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Desenvolvedor Front-End</h3>
          <p className='text-base py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'> Graduado em  Análise e Desenvolvimento de Sistemas pela Universidade Carioca (UNICARIOCA). </p>
        </div>
        <div className='text-5xl flex justify-center gap-12 py-3 text-violet-600'>
          <a href='https://www.linkedin.com/in/yan-coimbra/' target={'_blank'}><AiFillLinkedin className='cursor-pointer'/></a>
          <a href='https://github.com/yancoim' target={'_blank'}><AiFillGithub className='cursor-pointer'/></a>
        </div>
        <div className='relative bg-gradient-to-b from-indigo-500 to-violet-300 rounded-full sm:w-80 h-80 mt-20 mb-10 mx-auto overflow-hidden md:h-96 md:w-96'>
          <Image src={deved} layout='fill' objectFit='cover' />
        </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl mt-5 dark:text-white'>Habilidades</h3>
          </div>

          <div className='md:grid md:grid-cols-1 text-center shadow-lg p-10 rounded-xl my-10 bg-neutral-100  dark:bg-violet-900 items-center'>
              {/* <div className=''>
                <Image src={code}  className='inline'/>
              </div> */}

              <div className='md:grid md:grid-cols-2'>
              <p className='text-gray-800 text-lg md:text-xl dark:text-slate-300 py-1'>HTML</p>
              <p className='text-gray-800 text-lg md:text-xl dark:text-slate-300 py-1'>CSS</p>
              <p className='text-gray-800 text-lg md:text-xl dark:text-slate-300 py-1'>Javascript</p>
              <p className='text-gray-800 text-lg md:text-xl dark:text-slate-300 py-1'>ReactJs</p>
              <p className='text-gray-800 text-lg md:text-xl dark:text-slate-300 py-1'>Bootstrap</p>
              <p className='text-gray-800 text-lg md:text-xl dark:text-slate-300 py-1'>Tailwindcss</p>
              <p className='text-gray-800 text-lg md:text-xl dark:text-slate-300 py-1'>Git</p>
              <p className='text-gray-800 text-lg md:text-xl dark:text-slate-300 py-1'>MySQL</p>
              </div>
          </div>

          
        </section>
        <section id='projects'>
          <div>
            <h3 className='text-3xl py-1 md:text-center dark:text-white'>Projetos</h3>
            <p className='text-sm md:text-center text-gray-800 dark:text-gray-400'>Confira alguns dos meus projetos.</p>
          </div>

        
        <div className='lg:grid lg:grid-cols-2 mt-5 pb-5'>
          <div>
          <div className='mt-5 mb-5 flex flex-col items-center'>
        <Image src={doctorcare}  className='rounded-lg md:w-10/12'/>

        <div className='flex items-center gap-8 md:gap-5 mt-1'>
          <div className='flex'>
          <Image src={html5} width={50} className=' xl:w-16 '/> 
          <Image src={css} width={50} className='xl:w-16  '/> 
          <Image src={javascript} width={50} className='xl:w-16 '/>
          </div>
          <div>
          <button className='rounded-md bg-indigo-500 hover:bg-indigo-600 transition duration-300 p-2 text-xs text-white'><a href='https://yancoim.github.io/doctorcare/' target={'_blank'}>Acessar</a></button>
          </div>
        </div>
        </div>
        <div className='mt-5 mb-5 flex flex-col items-center'>
        <Image src={calc}  className='rounded-lg md:w-10/12'/>

        <div className='flex items-center gap-8 md:gap-5 mt-1'>
          <div className='flex'>
          <Image src={html5} width={50} className=' xl:w-16 '/> 
          <Image src={css} width={50} className='xl:w-16  '/> 
          <Image src={javascript} width={50} className='xl:w-16  '/> 
          </div>
          <div>
          <button className='rounded-md bg-indigo-500 hover:bg-indigo-600 transition duration-300 p-2 text-xs text-white'><a href='https://yancoim.github.io/Calculadora/' target={'_blank'}>Acessar</a></button>
          </div>
        </div>

        </div>
          </div>

        <div>
        <div className='mt-5 mb-5 flex flex-col items-center'>
        <Image src={loginLol}  className='rounded-lg md:w-10/12'/>

        <div className='flex items-center gap-8 md:gap-5 mt-1'>
          <div className='flex'>
          <Image src={react} width={50} className=' xl:w-16 '/> 
          <Image src={tailwind} width={50} className='xl:w-16  '/> 
          </div>
          <div>
          <button className='rounded-md bg-indigo-500 hover:bg-indigo-600 transition duration-300 p-2 text-xs text-white'><a href='https://login-page-lol.vercel.app/' target={'_blank'}>Acessar</a></button>
          </div>
        </div>

        </div>
        
        <div className='mt-5 flex flex-col items-center'>
        <Image src={cep}  className='rounded-lg md:w-10/12'/>

        <div className='flex items-center gap-8 md:gap-5 mt-1'>
          <div className='flex'>
          <Image src={html5} width={50} className=' xl:w-16 '/> 
          <Image src={bootstrap} width={50} className='xl:w-16  '/> 
          <Image src={javascript} width={50} className='xl:w-16 '/>
          </div>
          <div>
          <button className='rounded-md bg-indigo-500 hover:bg-indigo-600 transition duration-300 p-2 text-xs text-white'><a href='https://yancoim.github.io/consultaCep/' target={'_blank'}>Acessar</a></button>
          </div>
        </div>

        </div>
        
          </div>
        </div>

          
          
        </section>
      </main>
    </div>
  )
}
