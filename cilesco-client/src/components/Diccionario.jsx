import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Footer from './Footer'
import Paginado from './Paginado';
import {SearchBar}  from './SearchBar';
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

import{
  getVideos,
  getNameVideo
} from "../actions/index.js"




const Diccionario = () => {

  const dispatch = useDispatch()
  const allVideos = useSelector((state)=> state.videos)

  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage] = useState(12);
  const indexLastVideo = currentPage * videosPerPage;
  const indexFirstVideo = indexLastVideo - videosPerPage;
  const currentVideo = allVideos.slice(indexFirstVideo, indexLastVideo);

  const nextPage = (pageNumber) => {
    if (currentPage < Math.ceil(allVideos.length / videosPerPage))
      setCurrentPage(pageNumber);
  };
  const prevPage = (pageNumber) => {
    if (currentPage > 1) setCurrentPage(pageNumber);
  };

  const pageOne = () => {
    setCurrentPage(1);
  };


  useEffect(() => {
   dispatch(getVideos())
  }, [dispatch]);


  return (
    <div className='bg-[#50B7B8]  min-h-screen pt-12 pb-24 relative'>
       <motion.h2 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className=" text-3xl text-center font-bold tracking-wide text-white sm:text-4xl mb-12">
           DICCIONARIO CILESCO
          </motion.h2>

       <SearchBar pageOne={pageOne}/>

<div className='w-full mx-auto flex justify-center pt-8 '>
<Paginado
 nextPage={nextPage}
 prevPage={prevPage}
 currentPage={currentPage}
 videosPerPage={videosPerPage}
 allVideos={allVideos.length}
 />
</div>

<div class="flex justify-center pt-10">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
    {currentVideo.map(video => (
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      class="rounded-lg shadow-lg bg-white min-w-0 max-w-sm transition-all duration-300 transform hover:scale-110"
      key={video._id}
      >
      
        <Link to={`/diccionario/${video._id}`} data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img class="rounded-t-lg w-full h-64 object-cover min-h-0" src={video.thumbnail} alt="" />
        </Link>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{video.title}</h5>
        </div>
      </motion.div>
    ))}
  </div>
</div>
          <Footer/>
    </div>
  )
}

export default Diccionario