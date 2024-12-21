import React from 'react'
import Artist from "./CardArtist";
import Footer from '../layouts/Footer';

const Artists = () => {
  return (
    <div className="flex h-full w-full rounded-3xl bg-gray-900 font-poppins">

      <div className="flex-1 element px-0 py-3 md:px-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className=" text-3xl font-bold ms-6 mt-12 text-orange-400">Artists</h1>
        </div>
        <div className='border-t border-gray-700'></div>    

        <div className="grid grid-cols-2 lg:grid-cols-5 mx-auto gap-y-8">
          <Artist artist="Tulus" img="https://via.placeholder.com/150" />
          <Artist artist="Juicy Luicy" img="https://via.placeholder.com/150" />
          <Artist artist="Bruno Mars" img="https://via.placeholder.com/150" />
          <Artist artist="Rex Orange" img="https://via.placeholder.com/150" />
          <Artist artist="Maroon 5" img="https://via.placeholder.com/150" />
          <Artist artist="Tulus" img="https://via.placeholder.com/150" />
          <Artist artist="Juicy Luicy" img="https://via.placeholder.com/150" />
          <Artist artist="Bruno Mars" img="https://via.placeholder.com/150" />
          <Artist artist="Rex Orange" img="https://via.placeholder.com/150" />
          <Artist artist="Maroon 5" img="https://via.placeholder.com/150" />
          <Artist artist="Tulus" img="https://via.placeholder.com/150" />
          <Artist artist="Juicy Luicy" img="https://via.placeholder.com/150" />
          <Artist artist="Bruno Mars" img="https://via.placeholder.com/150" />
          <Artist artist="Rex Orange" img="https://via.placeholder.com/150" />
          <Artist artist="Maroon 5" img="https://via.placeholder.com/150" />
          <Artist artist="Tulus" img="https://via.placeholder.com/150" />
          <Artist artist="Juicy Luicy" img="https://via.placeholder.com/150" />
          <Artist artist="Bruno Mars" img="https://via.placeholder.com/150" />
          <Artist artist="Rex Orange" img="https://via.placeholder.com/150" />
          <Artist artist="Maroon 5" img="https://via.placeholder.com/150" />
          <Artist artist="Tulus" img="https://via.placeholder.com/150" />
          <Artist artist="Juicy Luicy" img="https://via.placeholder.com/150" />
          <Artist artist="Bruno Mars" img="https://via.placeholder.com/150" />
          <Artist artist="Rex Orange" img="https://via.placeholder.com/150" />
          <Artist artist="Maroon 5" img="https://via.placeholder.com/150" />
        </div>
        
        <Footer />
      </div>
    </div>
  )
}

export default Artists
