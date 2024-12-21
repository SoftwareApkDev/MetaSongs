import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './layouts/Navbar'
import Sidebar from './layouts/Sidebar'

const Mainlayout = () => {

    const [isOpen, setIsOpen] = useState(false);

    // Fungsi untuk toggle sidebar
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
      };

      const [currentTrack, setCurrentTrack] = useState(null);

      const handlePlayTrack = (track) => {
        setCurrentTrack(track); // Set lagu yang sedang diputar
      };
    

  return (
    <div className="flex h-screen w-screen">
      <div className='overflow-hidden md:py-2 md:pe-1 md:ps-2 bg-black'>
    <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
    </div>  
    <div className="flex flex-col flex-1 bg-gray-100">
      <div className=' pt-2 ps-1 bg-black'>
      <Navbar toggleSidebar={toggleSidebar} currentTrack={currentTrack}/>
      </div>

      <div className="flex-1 overflow-auto py-2 ps-1 pe-2 bg-black text-white">
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default Mainlayout
