import React from "react";


const CardArtist = ({ artist, img }) => {
  return (
    <div className="mt-8 px-5 group relative mx-auto">
      <div
        className="h-40 w-40 md:h-48 md:w-48 bg-cover bg-center rounded-full transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="h-12 w-12 bg-orange-300 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-4 text-start text-white font-bold">{artist}</div>
    </div>
  );
};

export default CardArtist;

