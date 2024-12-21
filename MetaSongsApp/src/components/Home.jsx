import React from 'react'
import Single from "./CardSingle";
import Artist from "./CardArtist";
import Album from "./CardAlbums";
import Footer from '../layouts/Footer';

const Home = () => {
  return (
    <div className="flex h-full w-full rounded-3xl bg-gray-900 font-poppins">

      <div className="flex-1 element px-0 py-3 md:px-6">
        <div className="flex items-center justify-between ms-6 mb-4">
          <h1 className="text-orange-400 text-3xl font-bold mt-12">Home</h1>
        </div>
        <div className='border-t border-gray-700'></div>    

        <h2 className="ms-6 text-white text-2xl font-medium mt-4">
          Popular artists
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-6">
          <Artist artist="Tulus" img="https://via.placeholder.com/150" />
          <Artist artist="Juicy Luicy" img="https://via.placeholder.com/150" />
          <Artist artist="Bruno Mars" img="https://via.placeholder.com/150" />
          <Artist artist="Rex Orange" img="https://via.placeholder.com/150" />
          <Artist artist="Maroon 5" img="https://via.placeholder.com/150" />
          <Artist artist="Bernadya" img="https://via.placeholder.com/150" />
        </div>

        <h2 className="ms-5 md:ms-6 text-white text-2xl font-medium mt-12">
          Recently Played
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6">
          <Single title="VOIDS" subtitle="Pretty Patterns" img="https://via.placeholder.com/150" />
          <Single title="OK ORCHESTRA" subtitle="AJR" img="https://via.placeholder.com/150" />
          <Single title="The Click" subtitle="AJR" img="https://via.placeholder.com/150" />
          <Single title="Focus" subtitle="Made for You" img="https://via.placeholder.com/150" />
          <Single title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Single title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
        </div>

        <h2 className="ms-5 md:ms-6 text-white text-2xl font-medium mt-12">
          Popular Albums
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6">
          <Album title="VOIDS" subtitle="Pretty Patterns" img="https://via.placeholder.com/150" />
          <Album title="OK ORCHESTRA" subtitle="AJR" img="https://via.placeholder.com/150" />
          <Album title="The Click" subtitle="AJR" img="https://via.placeholder.com/150" />
          <Album title="Focus" subtitle="Made for You" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
        </div>

        <h2 className="ms-5 md:ms-6 text-white text-2xl font-medium mt-12">
          Populer Singles
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6">
          <Single title="VOIDS" subtitle="Pretty Patterns" img="https://via.placeholder.com/150" />
          <Single title="OK ORCHESTRA" subtitle="AJR" img="https://via.placeholder.com/150" />
          <Single title="The Click" subtitle="AJR" img="https://via.placeholder.com/150" />
          <Single title="Focus" subtitle="Made for You" img="https://via.placeholder.com/150" />
          <Single title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Single title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
