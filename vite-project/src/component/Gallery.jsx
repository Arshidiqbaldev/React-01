import React, { useState } from "react";

const Gallery = ({ img, id }) => {
  return (
    <div className="w-1/12 grow h-60  relative transofrm-gpu perspective-normal">
      <img
        className={`origin-bottom absolute w-full rounded-3xl h-full  hover:rotate-x-30  transition-all duration-400 ease-in-out  object-cover`}
        src={img}
        alt={id}
      />
    </div>
  );
};

export default Gallery;
