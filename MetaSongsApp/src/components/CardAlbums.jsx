import React from "react";

const CardAlbums = ({ title, subtitle, img }) => {
  return (
    <div className="mt-2 p-3 group relative hover:bg-gray-700 rounded-lg transition-colors duration-300 mx-auto">
      <div
        className="h-40 w-40 md:h-48 md:w-48 bg-cover bg-center mx-auto rounded-lg relative overflow-hidden"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute bottom-2 right-2 transform translate-y-14 group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <div className="h-10 w-10 bg-orange-400 rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-2 text-white font-bold">{title}</div>
      
      <div className="text-gray-400">{subtitle}</div>
    </div>
  );
};

export default CardAlbums;
