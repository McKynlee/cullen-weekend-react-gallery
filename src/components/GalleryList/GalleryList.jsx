// Received "React not in scope" error, fixing:
import React from 'react';

import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, updateLikes, deleteFromGallery }) {
  return (
    <div className="container">
      {galleryList.map(photo => {
        return <GalleryItem
          key={photo.id}
          photo={photo}
          updateLikes={updateLikes}
          deleteFromGallery={deleteFromGallery}
        />
      })}
    </div>
  );
}

export default GalleryList;