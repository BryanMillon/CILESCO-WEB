import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import { motion } from 'framer-motion'
import Paginado from './Paginado';




const Diccionario = () => {

  const [videos, setVideos] = useState([]);


  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNYW2vfGrUE6R5mIJYzkRyQ&maxResults=50&key=AIzaSyCdRuNg_ME6F_c1oOhESVnRXtQxAtCABUE`);
      const data = await response.json();
      setVideos(data.items.map(item => {
        return {
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url
        };
      }));
    };

    fetchVideos();
  }, []);
  
  // useEffect(() => {
  //   const fetchVideos = async (pageToken = "") => {
  //     const response = await fetch(
  //       `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNYW2vfGrUE6R5mIJYzkRyQ&maxResults=50&pageToken=${pageToken}&key=AIzaSyCdRuNg_ME6F_c1oOhESVnRXtQxAtCABUE`
  //     );
  //     const data = await response.json();
  //     setVideos(prevVideos => [...prevVideos, ...data.items.map(item => ({
  //       id: item.id.videoId,
  //       title: item.snippet.title,
  //       thumbnail: item.snippet.thumbnails.default.url
  //     }))]);
  
  //     if (data.nextPageToken) {
  //       fetchVideos(data.nextPageToken);
  //     }
  //   };
  
  //   fetchVideos();
  // }, []);



  return (
    <div className='bg-[#50B7B8]  min-h-screen pt-12 pb-24 relative'>
       <motion.h2 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className=" text-3xl text-center font-bold tracking-wide text-white sm:text-4xl mb-12">
           DICCIONARIO CILESCO
          </motion.h2>
       <form>   
    <label for="default-search" className=" mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div className="relative max-w-[75%] mx-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-[#6E28AC] " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-[#6E28AC] rounded-lg bg-gray-50 focus:ring-[#6E28AC] focus:border-[#6E28AC] " placeholder="Busca una palabra" required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#F98D00] hover:bg-[#F98D00]/90 focus:ring-4 focus:outline-none focus:ring-[#F98D00] font-medium rounded-lg text-sm px-4 py-2 ">Buscar</button>
    </div>
</form>
<div className='w-full mx-auto flex justify-center pt-8 '>
<Paginado/>
</div>

<div class="flex justify-center pt-10">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
    {videos.map(video => (
      <div class="rounded-lg shadow-lg bg-white min-w-0 max-w-sm transition-all duration-300 transform hover:scale-110">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img class="rounded-t-lg w-full h-64 object-cover min-h-0" src={video.thumbnail} alt="" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{video.title}</h5>
        </div>
      </div>
    ))}
  </div>
</div>
          <Footer/>
    </div>
  )
}

export default Diccionario