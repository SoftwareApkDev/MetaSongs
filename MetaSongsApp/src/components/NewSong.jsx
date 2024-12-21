import React, { useState } from "react";
import { FaPlus, FaMusic } from "react-icons/fa"; // Menggunakan Font Awesome React Icons
import Footer from "../layouts/Footer";

const NewSong = () => {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudio(file.name); // Simpan nama file audio untuk ditampilkan
    }
  };

  return (
    <div className="flex h-full w-full rounded-3xl bg-gray-900 font-poppins">
      <div className="flex-1 element px-0 py-3 md:px-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-orange-400 text-3xl font-bold ms-6 mt-12">
            Make A New Song
          </h1>
        </div>
        <div className="border-t border-gray-700"></div>

        <div className="pt-8 flex justify-between space-x-4">
        <div className="relative h-60 w-full border-2 border-dashed hover:border-orange-400 border-gray-600 rounded-xl flex items-center justify-center cursor-pointer bg-gray-700">
              {audio ? (
                <span className="text-orange-400 text-lg font-bold">{audio}</span>
              ) : (
                <FaMusic className="text-gray-400 text-4xl" />
              )}
              <input
                type="file"
                accept="audio/*"
                onChange={handleAudioChange}
                className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
                required
              />
            </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="grid col-span-1 space-y-3 tracking-wide">
            <input
              type="text"
              className="bg-gray-700 h-14 rounded-xl px-4 focus:outline-none focus:ring-1 focus:ring-orange-400"
              placeholder="Title Song"
              required
            />
            <input
              type="text"
              className="bg-gray-700 h-14 rounded-xl px-4 focus:outline-none focus:ring-1 focus:ring-orange-400"
              placeholder="Artist"
              required
            />
            <input
              type="text"
              className="bg-gray-700 h-14 rounded-xl px-4 focus:outline-none focus:ring-1 focus:ring-orange-400"
              placeholder="Album"
            />
          </div>

          {/* Input for Description */}
          <textarea
            className="bg-gray-700 h-58 w-full rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-orange-400"
            placeholder="Description"
            required
          ></textarea>

          {/* Input for Image */}
          <div className="flex flex-col items-center">
            <div className="relative h-48 w-full border-2 border-dashed  hover:border-orange-400 border-gray-600 rounded-xl flex items-center justify-center cursor-pointer bg-gray-700">
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="absolute h-40 w-40 md:h-48 md:w-48 object-cover rounded-xl"
                />
              ) : (
                <FaPlus className="text-gray-400 text-4xl" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 h-40 w-40 md:h-48 md:w-48 opacity-0 cursor-pointer"
                required
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mt-6 flex justify-between space-x-4">
          <input
            type="text"
            className="bg-gray-700 h-12 w-1/2 rounded-xl px-4 focus:outline-none focus:ring-1 focus:ring-orange-400"
            placeholder="Genre"
            required
          />
          <input
            type="text"
            className="bg-gray-700 h-12 w-1/2 rounded-xl px-4 focus:outline-none focus:ring-1 focus:ring-orange-400"
            placeholder="Year"
            required
          />
          <button
            className="bg-orange-700 h-12 w-1/4 rounded-xl px-4 hover:bg-orange-500 tracking-wider hover:font-bold text-lg"
          >Upload</button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default NewSong;
