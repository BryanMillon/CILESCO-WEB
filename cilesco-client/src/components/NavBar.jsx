import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const handleMenu = () =>{
    const menu = document.querySelector('#navbar-default')
    menu.classList.toggle('hidden')
  }

  return (
    <nav className="bg-[#6E28AC] px-2 sm:px-4 py-2.5 rounded sticky top-0 z-20">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <motion.img
         initial={{ opacity: 0 }}
         whileInView={{opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 2 }}
          src="/IMG/LOGO-WEB.png"
          className="object-cover h-14 mr-3 sm:h-16 rounded-full border border-white "
          alt="Logo"
        />

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-[#F98D00] rounded-lg md:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-8 h-8"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <motion.div 
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        className="hidden w-full text-center   md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <a
                href='/'
                className={`block py-2 pl-3 pr-4 text-white rounded ${location.pathname === '/' ? 'md:text-[#F98D00]' : 'md:text-white'} hover:text-[#F98D00] md:p-0`}
                aria-current="page"
                onClick={handleMenu}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/Diccionario"
                className={`block py-2 pl-3 pr-4 text-white rounded ${location.pathname === '/Diccionario' ? 'md:text-[#F98D00]' : 'md:text-white'} hover:text-[#F98D00] md:p-0`}
                onClick={handleMenu}
              >
                Diccionario
              </a>
            </li>
            <li>
              <a
                href="/preguntasfrecuentes"
                className={`block py-2 pl-3 pr-4 text-white rounded ${location.pathname === '/preguntasfrecuentes' ? 'md:text-[#F98D00]' : 'md:text-white'} hover:text-[#F98D00] md:p-0`}
                onClick={handleMenu}
              >
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a
                href="/Contacto"
                className={`block py-2 pl-3 pr-4 text-white rounded ${location.pathname === '/Contacto' ? 'md:text-[#F98D00]' : 'md:text-white'} hover:text-[#F98D00] md:p-0`}
                onClick={handleMenu}
              >
                Contacto
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
