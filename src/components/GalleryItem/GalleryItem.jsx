// Received "React not in scope" error, fixing:
import React from 'react';


import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({ photo, updateLikes }) {
  const [likes, setLikes] = useState(0);

  let heart = '<3';
  let idEven = "item-left-column";
  if (photo.id % 2 === 0) {
    idEven = "item-right-column";
  }

  return (
    <div className={idEven}>
      <img src={photo.path} alt={photo.description} />
      <div>
        <button onClick={() => {
          setLikes(likes + 1);
          updateLikes(photo.id);
        }} >
          {heart} Likes: {likes}
        </button>
      </div >
    </div >
  );
} // end GalleryItem

export default GalleryItem;