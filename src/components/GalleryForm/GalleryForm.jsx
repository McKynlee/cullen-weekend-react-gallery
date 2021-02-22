// Fixing "React not in scope" error:
import { Typography } from '@material-ui/core';
import React from 'react';

function GalleryForm({ newPhotoDescription,
  setNewPhotoDescription,
  newPhotoURL,
  setNewPhotoURL,
  handleSubmit
}) {
  return (
    <div>
      <Typography
        variant="h5"
        component="h2">
        Add to the Gallery:
      </Typography>
      <form onSubmit={handleSubmit}>
        <label>Text description of photo:
          <input type="text"
            value={newPhotoDescription}
            onChange={event => {
              setNewPhotoDescription(event.target.value)
            }} />
        </label>
        <label>Photo absolute URL:
          <input type="text"
            value={newPhotoURL}
            onChange={event => {
              setNewPhotoURL(event.target.value)
            }} />
        </label>
        <button>SUBMIT</button>
      </form>
    </div>
  );
} // end GalleryForm

export default GalleryForm;