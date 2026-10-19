import React, { useState } from "react";

const Gallery = ({ img, id }) => {


  const [rotate, setRotate] = useState(0);

  function rotateFun() {
    setRotate(rotate === 0 ? 20 : 0);
  }

  return (
    <div className="w-1/12 grow h-60  relative transofrm-gpu perspective-normal">
      <img
        onMouseOver={rotateFun}
        className={`origin-bottom absolute w-full rounded-3xl h-full  hover:rotate-x-40  transition-all duration-400 ease-in-out  object-cover`}
        src={img}
        alt={id}
      />
    </div>
  );
};

export default Gallery;
