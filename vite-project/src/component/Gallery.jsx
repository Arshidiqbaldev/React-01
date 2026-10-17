import React from "react";

const Gallery = ({ img, id }) => {
  return (
    
      <img className="w-1/4 grow h-200  object-cover object-top " src={img} alt={id} />
   
  );
};

export default Gallery;
