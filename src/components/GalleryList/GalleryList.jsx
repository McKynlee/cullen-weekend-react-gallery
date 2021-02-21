// Received "React not in scope" error, fixing:
import React from 'react';

// Material-UI
import {
  Grid,
} from '@material-ui/core';

import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, updateLikes, deleteFromGallery }) {
  return (
    <Grid container
      spacing={2}
      alignItems="flex-start"
      justify="center"
    >
      {galleryList.map(photo => {
        return <GalleryItem
          key={photo.id}
          photo={photo}
          updateLikes={updateLikes}
          deleteFromGallery={deleteFromGallery}
        />
      })}
    </Grid>
  );
}

export default GalleryList;