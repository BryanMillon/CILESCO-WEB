import React from 'react'
import Footer from './Footer'
import { motion } from 'framer-motion'

export const Preguntas = () => {

  const handleClick = () => {
    window.location.href = '/contacto';
    window.scrollTo(0, 0);
  };
  
  return (
    <div className='bg-[#50B7B8]  min-h-screen pt-12 pb-24 relative '>
      <motion.h1
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
       className=' text-3xl text-center font-bold tracking-wide text-white sm:text-4xl mb-8'>
        PREGUNTAS FRECUENTES
      </motion.h1>
      <div className='space-y-12 px-6'>
      <motion.section
      initial={{ x: -250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }} 
      className="space-y-3 flex flex-col justify-center items-center text-center md:flex-row-reverse md:w-full">
        <img src="IMG/CANVA-4-WEB.png" alt="" className='h-32 w-32 md:h-52 md:w-52' />
        <div className='flex flex-col space-y-1 md:space-y-2 md:w-full'>
        <h3 className='text-white font-bold text-2xl md:text-left md:text-3xl '>
        ¿Qué hace CILESCO-Oi2?
        </h3>
        <p className="text-base sm:text-lg md:text-left md:text-xl">
        CILESCO-Oi2 es un centro integral que promueve la inclusión y la proactividad para el protagonismo social de la comunidad sorda y personas con pérdida auditiva por medio de cursos de LESCO certificados impartido por docentes sordos, capacitaciones de actualización profesional en temáticas interdisciplinarias, actividades de interacción social y concientización. 
        </p>
        </div>
      </motion.section>

      <motion.section
      initial={{ x: -250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }} 
       className="space-y-3 flex flex-col justify-center items-center text-center md:flex-row-reverse md:w-full">
        <img src="IMG/CANVA-6-WEB.png" alt="" className='h-32 w-32 md:h-52 md:w-52' />
        <div className='flex flex-col space-y-1 md:space-y-2 md:w-full'>
        <h3 className='text-white font-bold text-2xl md:text-left md:text-3xl'>
        ¿Cómo nació CILESCO-Oi2?
        </h3>
        <p className="text-base sm:text-lg md:text-left md:text-xl">
        Como parte de una evolución continúa en los procesos de inclusión para la comunidad sorda, nuestra fundadora Olga Álvarez diseña la enseñanza de la LESCO para sectores muy diversificados para el dominio de esta en una programación amplia de contenidos, la cual en unión con nuestro fundador Fabián Corrales desde un enfoque vivencial y pedagógico constructivo hacia la población con pérdidas auditivas desarrollan el programa más completo curricular y esencial en el país para el aprendizaje de la LESCO haciendo de los participantes de los cursos protagonistas y agentes de cambio.
        </p>
        </div>
      </motion.section>

      <motion.section 
      initial={{ x: -250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }} 
      className="space-y-3 flex flex-col justify-center items-center text-center md:flex-row-reverse md:w-full">
        <img src="IMG/CANVA-3-WEB.png" alt="" className='h-32 w-32 md:h-52 md:w-52' />
        <div className='flex flex-col space-y-1 md:space-y-2 md:w-full'>
        <h3 className='text-white font-bold text-2xl md:text-left md:text-3xl'>
        ¿Cuál es nuestra misión?
        </h3>
        <p className="text-base sm:text-lg md:text-left md:text-xl">
        Promover espacios formativos por medio del aprendizaje de la LESCO para concientizar y empoderar el desarrollo de una sociedad inclusiva.
        </p>
        </div>
      </motion.section>

      <motion.section 
      initial={{ x: -250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }} 
      className="space-y-3 flex flex-col justify-center items-center text-center md:flex-row-reverse md:w-full">
        <img src="IMG/CANVA-5-WEB.png" alt="" className='h-32 w-32 md:h-52 md:w-52' />
        <div className='flex flex-col space-y-1 md:space-y-2 md:w-full'>
        <h3 className='text-white font-bold text-2xl md:text-left md:text-3xl'>
        ¿Cuál es nuestra visión?
        </h3>
        <p className="text-base sm:text-lg md:text-left md:text-xl">
        Construir una cultura de inclusión para todas las personas con el aprendizaje de la LESCO como herramienta de crecimiento humano.
        </p>
        </div>
      </motion.section>

      <motion.section 
      initial={{ x: -250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }} 
      className="space-y-3 flex flex-col justify-center items-center text-center md:flex-row-reverse md:w-full">
        <img src="IMG/CANVA-2-WEB.png" alt="" className='h-32 w-32 md:h-52 md:w-52' />
        <div className='flex flex-col space-y-1 md:space-y-2 md:w-full'>
        <h3 className='text-white font-bold text-2xl md:text-left md:text-3xl'>
        ¿Quiénes son sus fundadores?
        </h3>
        <p className="text-base sm:text-lg md:text-left md:text-xl">
        Nuestros fundadores Olga Álvarez y Fabián Corrales, son dos personas sordas con mucho renombre en Costa Rica y alrededor del mundo, ambos con estudios superiores y miembros de importantes representaciones a nivel nacional como internacional que han implementado una de las mejores metodologías inclusivas para el aprendizaje de la LESCO  y comunicación integral.
        </p>
        </div>
      </motion.section>

      <motion.section
      initial={{ x: -250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }} 
      className="space-y-3 flex flex-col justify-center items-center text-center md:flex-row-reverse md:w-full">
        <img src="IMG/CANVA-1-WEB.png" alt="" className='h-32 w-32 md:h-52 md:w-52' />
        <div className='flex flex-col space-y-1 md:space-y-2 md:w-full'>
        <h3 className='text-white font-bold text-2xl md:text-left md:text-3xl'>
        ¿Que ofrece CILESCO-Oi2?
        </h3>
        <p className="text-base sm:text-lg md:text-left md:text-xl">
        Nos caracterizamos por ser un centro formativo que saca el potencial de todos los participantes por medio de:
        </p>
        <ul className='text-left space-y-1 text-base list-disc  sm:text-lg md:text-xl md:pl-3'>
          <li>Cursos de LESCO académicos en niveles 1 al 6</li>
          <li>Cursos de LESCO especializados en salud, psicología y educación</li>
          <li>Talleres en materia interdisciplinaria</li>
          <li>Charlas integrales </li>
          <li>Clubes y actividades de convivencia</li>
          <li>Abordajes de atención en comunicación y lenguaje.</li>
        </ul>
        </div>
      </motion.section>

      <motion.div 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }} 
      className='space-y-5 flex flex-col items-center justify-center'>
        <h2 className='text-white font-bold text-2xl md:text-3xl text-center'>¿Quieres saber mas sobre nosotros?</h2>
          <button onClick={handleClick} className="focus:outline-none text-white bg-[#6E28AC] hover:bg-[#F98D00] font-medium rounded-lg text-base px-5 py-2.5 mb-2 w-full md:w-2/5 md:text-lg text-center ">
          Contactanos
          </button>
          
      </motion.div>
      </div>
      <Footer/>
      </div>
  )
}
