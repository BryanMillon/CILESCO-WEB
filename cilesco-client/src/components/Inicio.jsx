import React from 'react'
import Footer from './Footer'
import { motion } from "framer-motion";


const Inicio = () => {

  const handleClickC = () => {
    window.location.href = '/preguntasfrecuentes';
    window.scrollTo(0, 0);
  };

    const handleClickD = () => {
    window.location.href = '/diccionario';
    window.scrollTo(0, 0);
  };
  
  return (
    <div className='bg-[#50B7B8]  min-h-screen pt-6 md:pt-12 pb-24  relative  '>
      <section className='flex flex-col text-center space-y-6 justify-center md:pl-12 items-center md:flex-row w-full'>
        <motion.div
        initial={{ x: -250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
         className='w-[80%] md:w-[40%] space-y-6 '>

     <h1 className="mt-2 text-center text-3xl font-bold tracking-wide text-white sm:text-4xl md:text-5xl">
            Bienvenido al diccionario CILESCO
          </h1>
          <p className='md:text-lg'>
          El diccionario digital de CILESCO está creado a partir del contenido generado por el instituto y tiene como objetivo reunir en un solo lugar todas las señas de dicho material, lo que lo convierte en una herramienta muy valiosa para acompañar el aprendizaje y la práctica de la lengua. Además, este diccionario digital facilita la búsqueda de las señas, lo que ayuda a los estudiantes a encontrar rápidamente la información que necesitan para aprender y mejorar su conocimiento de LESCO.
          </p>
          <div className='md:space-x-5 flex flex-col md:flex-row'>
          <button onClick={handleClickD} className='focus:outline-none text-white bg-[#6E28AC] hover:bg-[#F98D00] font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full md:w-3/6'>
            Diccionario  
          </button>
          <button onClick={handleClickC} className="focus:outline-none text-white bg-[#6E28AC] hover:bg-[#F98D00] font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full md:w-3/6">
          ¿Qué hace CILESCO-Oi2?
          </button>
           
          </div>
        </motion.div>
          <motion.img 
           initial={{ x: 250, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
          src="IMG/CANVA-2-WEB.png" className="w-3/5 h-3/5 md:w-2/5 md:h-2/5 md:pr-12" alt='landing-img'/>
      </section>
   

          <Footer/>
    </div>
  )
}

export default Inicio