// Fixing "React not in scope" error:
import { Typography } from '@material-ui/core';
import React from 'react';

// Material-UI
import {
  TextField,
  Button,
} from '@material-ui/core';

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
        <TextField label="Description of photo:"
          value={newPhotoDescription}
          onChange={event => {
            setNewPhotoDescription(event.target.value)
          }} />
        <TextField label="Photo URL:"
          value={newPhotoURL}
          onChange={event => {
            setNewPhotoURL(event.target.value)
          }} />
        <Button
          variant="contained"
          color="default"
        >
          SUBMIT
          </Button>
      </form>
    </div>
  );
} // end GalleryForm

export default GalleryForm;