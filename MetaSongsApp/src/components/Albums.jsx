import React from 'react'
import Album from "./CardAlbums";
import Footer from '../layouts/Footer';

const Albums = () => {
  return (
    <div className="flex h-full w-full rounded-3xl bg-gray-900 font-poppins">

      <div className="flex-1 element px-0 py-3 md:px-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold ms-6 mt-12 text-orange-400">Albums</h1>
        </div>
        <div className='border-t border-gray-700'></div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-8">
          <Album title="VOIDS" subtitle="Pretty Patterns" img="https://via.placeholder.com/150" />
          <Album title="OK ORCHESTRA" subtitle="AJR" img="https://via.placeholder.com/150" />
          <Album title="The Click" subtitle="AJR" img="https://via.placeholder.com/150" />
          <Album title="Focus" subtitle="Made for You" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
          <Album title="Classical" subtitle="Spatial Audio" img="https://via.placeholder.com/150" />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Albums
