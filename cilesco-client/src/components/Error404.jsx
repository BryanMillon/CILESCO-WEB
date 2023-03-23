import React from 'react'

const Error404 = () => {
  return (
    <section className="bg-[#50B7B8] h-[100%]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-[#6E28AC] ">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-semibold md:text-4xl text-white ">Lo sentimos, pero no logramos encontrar la pagina que buscas</p>
            <a href="/" className="inline-flex text-white text-white bg-[#6E28AC] hover:bg-[#F98D00] font-medium rounded-lg text-sm  px-5 py-2.5 text-center my-4">IR AL INICIO</a>
          </div>   
        </div>
      </section>
  )
}

export default Error404