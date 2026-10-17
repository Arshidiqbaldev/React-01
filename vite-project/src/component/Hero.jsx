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
    img: "https://cdn.midjourney.com/594f6306-afe4-4838-97ab-391b9e03fa3e/0_0.png",
  },

   {
    id: 4,
    img: "https://cdn.midjourney.com/ae554438-2761-483e-9457-5f2b7573b970/0_0.png",
  },


   {
    id: 5,
    img: "https://cdn.midjourney.com/d70c35b8-eaa7-4c98-90de-b0d5aa938df8/0_2.png",
  },


   {
    id: 6,
    img: "https://cdn.midjourney.com/dacc796b-da4c-494c-b1f0-eda02fce903e/0_3.png",
  },

   {
    id: 7,
    img: "https://cdn.midjourney.com/b975f29c-bf3f-4726-b1a5-3d3794c4abbd/0_2.png",
  },

  


];

export const Hero = () => {
  return (
    <>
      <div className="flex w-full  justify-center border-b border-gray-200">
        <div className="flex w-full px-2 flex-wrap overflow-hidden py-20 gap-2 bg-white/35 justify-between   max-w-[80%] border-x border-gray-200 item">
          {useGallery.map((gal) => (
            <Gallery key={gal.id} img={gal.img}></Gallery>
          ))}
        </div>
      </div>
    </>
  );
};
