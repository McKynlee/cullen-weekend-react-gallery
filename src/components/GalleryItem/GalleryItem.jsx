// Received "React not in scope" error, fixing:
import React from 'react';


import { useState } from 'react';
import './GalleryItem.css';
import DisplayPhoto from '../Display/DisplayPhoto';
import DisplayDescription from '../Display/DisplayDescription';

function GalleryItem({ photo, updateLikes }) {
  const [likes, setLikes] = useState(0);
  const [photoDisplay, setPhotoDisplay] = useState(true);

  let heart = '<3';
  let idEven = "item-left-column";
  if (photo.id % 2 === 0) {
    idEven = "item-right-column";
  }

  const handlePhotoDisplay = () => {
    if (photoDisplay === true) {
      setPhotoDisplay(false);
    } else {
      setPhotoDisplay(true);
    }
  } //end handlePhotoDisplay

  return (
    <div className={idEven}>
      <div onClick={() => {
        handlePhotoDisplay()
      }}>
        {photoDisplay ? (
          <DisplayPhoto photo={photo} />
        ) : (
            <DisplayDescription photo={photo} />
          )}
        <img src={photo.path} alt={photo.description} />
      </div>
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