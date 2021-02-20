// Received "React not in scope" error, fixing:
import React from 'react';

import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, updateLikes }) {
  return (
    <div className="container">
      {galleryList.map(photo => {
        return <GalleryItem
          key={photo.id}
          photo={photo}
          updateLikes={updateLikes}
        />
      })}
    </div>
  );
}

export default GalleryList;