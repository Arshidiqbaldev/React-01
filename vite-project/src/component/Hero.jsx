import React from "react";

import Gallery from "./Gallery";
const useGallery = [
  {
    id: 1,
    img: "https://cdn.midjourney.com/6087b945-38cd-44f6-a1a8-08ea4c95a7c6/0_2.png",
  },
  {
    id: 2,
    img: "https://cdn.midjourney.com/6d320254-eee5-4fb9-9839-da7bdc8bafbb/0_1.png",
  },

  {
    id: 3,
    img: "https://cdn.midjourney.com/b975f29c-bf3f-4726-b1a5-3d3794c4abbd/0_2.png",
  },
];

export const Hero = () => {
  return (
    <>
      <div className="flex w-full  justify-center border-b border-gray-200">
        <div className="flex w-full px-2 flex-wrap py-2 gap-2 bg-white/35 justify-between  max-w-[80%] border-x border-gray-200 item">
          {useGallery.map((gal) => (
            <Gallery key={gal.id} img={gal.img}></Gallery>
          ))}
        </div>
      </div>
    </>
  );
};
