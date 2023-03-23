import { UserIcon, ComputerDesktopIcon, MapPinIcon, FlagIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import React from 'react'
import Footer from './Footer'

const Contacto = () => {

  const features = [
  {
    name: 'Whatsapp',
    description:
      "71478399",
    icon: "whatsapp",
    link:"https://api.whatsapp.com/send/?phone=50671478399&text&type=phone_number&app_absent=0"
  },
  {
    name: 'Correo electronico',
    description:
      'admicilesco@gmail.com',
    icon: "email",
    link:"mailto:admicilesco@gmail.com"
  },
  {
    name: 'Facebook',
    description:
      '@Centro Integral de LESCO',
    icon: "facebook",
    link:"https://www.facebook.com/cilesco"
  },
  {
    name: 'Instagram',
    description:
      '@CILESCO',
    icon: 'instagram',
    link:"https://www.instagram.com/cilesco/"
  },
]

const features2 = [
  {
    name: 'Presencial',
    description:
      "Lunes, Miercoles y Jueves de 1:00 P.M a 9:00 P.M / Sabado 8:00 A.M a 5:00 P.M",
    icon: UserIcon,
  },
  {
    name: 'Virtual',
    description:
      'Lunes a Sabado de 8:00 A.M a 9:00 P.M',
    icon: ComputerDesktopIcon,
  },
]
  return (
     <div className="bg-[#50B7B8]  min-h-screen pt-12 pb-24 relative ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.img
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
           src="/IMG/LOGO-WEB.png" alt="" className='w-28 h-28 sm:w-36 sm:h-36  border-white rounded-full border-4 mx-auto' />
        <h2 className="mt-2 text-3xl text-center font-bold tracking-wide text-white sm:text-4xl mb-12">
           Centro Integral de LESCO
          </h2>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-wide text-white sm:text-4xl">
            CONTACTO
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
           ES UN PLACER ATENDERTE!
          </p> */}
        </div>
        <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
         className="mx-auto mt-12 max-w-2xl sm:mt-12 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg font-semibold leading-7 text-white">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F98D00]">
                    <SocialIcon  network={feature.icon}  bgColor="#F98D00"fgColor="#FFFFFF" className="h-6 w-6  text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                
                <a href={feature.link} className="mt-2 text-base leading-7 text-white hover:text-[#F98D00] cursor-pointer">{feature.description}</a>
               
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-24 text-center text-3xl font-bold tracking-wide text-white sm:text-4xl">
            HORARIOS
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
         className="mx-auto mt-12 max-w-2xl sm:mt-12 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features2.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg  font-semibold leading-7 text-white">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F98D00]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-24 text-3xl text-center font-bold tracking-wide text-white sm:text-4xl">
          UBICACION
          </h2>
      
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-12 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          
              <motion.div  
               initial={{ x: -200, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
              className="relative pl-16">
                <dt className="text-lg  font-semibold leading-7 text-white">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F98D00]">
                    <MapPinIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  CILESCO
                </dt>
                <a href='https://goo.gl/maps/r6AyDWvAsJhsAE1s7' className="mt-2 text-base leading-7 text-white hover:text-[#F98D00]">Barrio Otoya, San Jose. Frente a Cafe mundo</a>
              </motion.div>
              <motion.iframe 
                 initial={{ x: 200, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 2.5 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9621125292683!2d-84.07387178571841!3d9.937110476841674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e30baab35aad%3A0x705bce7c3333bc3e!2sCILESCO%20Centro%20integral%20de%20LESCO!5e0!3m2!1ses!2scr!4v1675398421592!5m2!1ses!2scr" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-72 h-72 sm:w-96 sm:h-96 mx-auto' />
          </dl>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacto