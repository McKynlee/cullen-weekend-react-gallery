// Fixing "React not in scope" error:
import React from 'react';


import { useState } from 'react';
import DisplayPhoto from '../Display/DisplayPhoto';
import DisplayDescription from '../Display/DisplayDescription';

// Material-UI
import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';

function GalleryItem({ photo, updateLikes, deleteFromGallery }) {
  // const [likes, setLikes] = useState(0);
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
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            updateLikes(photo.id, photo.likes);
          }}
        >
          {heart} Likes: {photo.likes}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          // className={classes.button}
          // startIcon={<DeleteIcon />}
          key={photo.id}
          onClick={() => deleteFromGallery(photo.id)}
        >
          DELETE
        </Button>
        {/* <button className="item-delete-btn button"
          >
          DELETE from Gallery
        </button> */}
      </div >
    </div >
  );
} // end GalleryItem

export default GalleryItem;