// Fixing "React not in scope" error:
import React from 'react';


import { useState } from 'react';
import DisplayPhoto from '../Display/DisplayPhoto';
import DisplayDescription from '../Display/DisplayDescription';

// Material-UI
import {
  Button,
  Grid,
} from '@material-ui/core';
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
    <Grid item xs={6} className={idEven} >
      <Grid item xs={8} onClick={() => {
        handlePhotoDisplay()
      }}>
        {photoDisplay ? (
          <DisplayPhoto photo={photo} />
        ) : (
            <DisplayDescription photo={photo} />
          )}
      </Grid >
      <Grid container
        justify="space-around"
        alignItems="flex-end"
      >
        <Grid item xs={4} >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              updateLikes(photo.id, photo.likes);
            }}
          >
            {heart} Likes: {photo.likes}
          </Button>
        </Grid >
        <Grid item xs={4} >
          <Button
            variant="contained"
            color="secondary"
            key={photo.id}
            onClick={() => deleteFromGallery(photo.id)}
          >
            DELETE
          </Button>
        </Grid>
      </Grid >
    </Grid>
  );
} // end GalleryItem

export default GalleryItem;