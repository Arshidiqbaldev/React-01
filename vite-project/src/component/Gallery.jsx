import React, { useState } from "react";

const Gallery = ({ img, id }) => {
  const rotateClass = { 0: "rotate-x-0", 20: "rotate-x-20" };

  const [rotate, setRotate] = useState(0);

  function rotateFun() {
    setRotate(rotate === 0 ? 20 : 0);
  }

  return (
    <div className="w-1/12 grow h-60  relative transofrm-gpu perspective-normal">
      <img
        onClick={rotateFun}
        className={`origin-bottom absolute w-full rounded-3xl h-full  ${rotateClass[rotate]}  transition-all duration-400 ease-linear delay-100 object-cover`}
        src={img}
        alt={id}
      />
    </div>
  );
};

export default Gallery;
