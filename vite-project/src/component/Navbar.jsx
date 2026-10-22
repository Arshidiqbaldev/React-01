import React from "react";

const Navbar = () => {
  return (
    <header className="flex w-full  justify-center border-y border-gray-200">
      <nav className="flex w-full px-2  py-2 bg-white/30 justify-between  max-w-[80%] border-x border-gray-300 item">
        <img
          src="https://xevenpixels.com/assets/xeven-pixels-fav.svg"
          alt=""
          className="w-10"
        />
        <div className="md:flex hidden  text-sm  capitalize font-medium text-black  ">
          <a
            className="flex px-8 rounded-xl  border-none bg-orange-500 items-center justify-center "
            href=""
          >
            Home
          </a>
          <a
            className="flex px-4 rounded-full  border-none bg-gray-700 text-white items-center justify-center "
            href=""
          >
            About
          </a>
          <a
            className="flex px-4 rounded-xl  border-none bg-gray-700 text-white items-center justify-center "
            href=""
          >
            Services
          </a>
          <a
            className="flex px-2 rounded-full  border-none bg-blue-400 items-center justify-center "
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m3.882 18.043l4.041-5.623a4 4 0 0 1 3.249-1.665h8.752M3.882 18.043a3.65 3.65 0 0 0 2.777 1.277h8.343a4 4 0 0 0 3.405-1.9l2.918-4.734a1.287 1.287 0 0 0-1.115-1.931h-.286M3.882 18.043A3.65 3.65 0 0 1 3 15.661V7.424A2.744 2.744 0 0 1 5.744 4.68h2.653c.607 0 1.189.24 1.618.67l.911.91a1.83 1.83 0 0 0 1.294.537l4.044-.001a3.66 3.66 0 0 1 3.66 3.66v.299"
              />
            </svg>
          </a>

          <a
            className="flex px-4 rounded-xl  border-none items-center justify-center "
            href=""
          >
            Development
          </a>

          <a
            className="flex px-4 rounded-xl  border-none items-center justify-center "
            href=""
          >
            Process
          </a>

        
        </div>

        <a
          className="flex px-2 rounded-2xl  border-none bg-blue-400 items-center justify-center "
          href=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M2.75 5.25h18.5M2.75 12h18.5m-18.5 6.75h18.5"
            />
          </svg>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
