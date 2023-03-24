import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import Paginado from "./Paginado";
import { SearchBar } from "./SearchBar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { getVideos, getNameVideo } from "../actions/index.js";
import { Fragment } from "react";
import ModalVideo from "./ModalVideo";
import Loader from "./Loader";

const Diccionario = () => {
  const wrapperRef = useRef(null);

  const dispatch = useDispatch();
  const allVideos = useSelector((state) => state.videos);
  const videos2 = useSelector((state) => state.allVideos);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setShowModal(true);
    setSelectedVideo(video);
  };

  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage] = useState(12);
  const indexLastVideo = currentPage * videosPerPage;
  const indexFirstVideo = indexLastVideo - videosPerPage;
  const currentVideo = allVideos.slice(indexFirstVideo, indexLastVideo);

  const nextPage = (pageNumber) => {
    if (currentPage < Math.ceil(allVideos.length / videosPerPage))
      setCurrentPage(pageNumber);
    wrapperRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const prevPage = (pageNumber) => {
    if (currentPage > 1) setCurrentPage(pageNumber);
    wrapperRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const pageOne = () => {
    setCurrentPage(1);
  };

  const handleAllVideos = () => {
    if (videos2.length === allVideos.length) {
      toast.success("Ya están todas las palabras disponibles", {
        duration: 2000,
      });
    } else {
      dispatch(getVideos());
      setCurrentPage(1);
    }
  };
  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  return (
    <Fragment>
      <div
        ref={wrapperRef}
        className="bg-[#50B7B8]  min-h-screen  pt-12 pb-24 relative"
      >
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className=" text-3xl text-center font-bold tracking-wide text-white sm:text-4xl mb-12"
        >
          DICCIONARIO CILESCO
        </motion.h2>

        <SearchBar pageOne={pageOne} />

        <div className="w-full text-center flex flex-col md:flex-row md:pt-5 pt-8 md:space-x-12 justify-center items-center mx-5 ">
          <button
            className="bg-white w-[75%] md:w-auto text-[#50B7B8]  font-bold py-2 md:px-4 rounded-lg "
            onClick={() => handleAllVideos()}
          >
            Traer todas las palabras
          </button>
          <p className=" bg-[#50B7B8] w-[75%] md:w-auto text-white font-bold py-2 md:px-4 rounded-lg ">
            Total de palabras en el diccionario {videos2.length}
          </p>
          <p className=" bg-[#50B7B8] w-[75%] md:w-auto text-white font-bold py-2 md:px-4 rounded-lg ">
            Total de palabras mostradas actualmente {allVideos.length}
          </p>
        </div>
        <div className="flex justify-center pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
            {currentVideo.map((video) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="rounded-lg shadow-lg bg-white min-w-0 max-w-sm transition-all duration-300 transform hover:scale-110"
                key={video._id}
                loading="lazy"
              >
                <button onClick={() => handleVideoClick(video)}>
                  <img
                    className="rounded-t-lg w-full h-64 object-cover min-h-0"
                    src={video.thumbnail}
                    alt=""
                  />
                  <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2 uppercase">
                      {video.title}
                    </h5>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full mx-auto flex justify-center pt-8 ">
          {currentVideo.length ? (
            <Paginado
              nextPage={nextPage}
              prevPage={prevPage}
              currentPage={currentPage}
              videosPerPage={videosPerPage}
              allVideos={allVideos.length}
            />
          ) : (
            <Loader />
          )}
        </div>
        <Footer />
      </div>
      {selectedVideo && (
        <ModalVideo
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedVideo(null);
          }}
          video={selectedVideo}
        />
      )}
    </Fragment>
  );
};

export default Diccionario;
