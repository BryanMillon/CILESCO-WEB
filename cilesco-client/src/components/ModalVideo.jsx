import React from "react";
;

const ModalVideo = ({isVisible, onClose, video}) => {
    if (!isVisible) return null;
    const handleClose = (e) =>{
        if(e.target.id === 'wrapper') onClose()
    }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" 
    id='wrapper'
    onClick={handleClose}>
      <div className="w-[85%] sm:w-[60%] flex flex-col ">
        <button className="text-white text-xl place-self-end" onClick={()=> onClose()}>X</button>
        <div className="bg-white p-2 rounded">
        <iframe width="100%" className="h-[300px] sm:h-[400px]" src={`https://www.youtube.com/embed/${video.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
