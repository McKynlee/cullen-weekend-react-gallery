// Received "React not in scope" error, fixing:
import React from 'react';

// Material-UI
import { Typography } from '@material-ui/core';

function DisplayPhoto({ photo }) {
  return (
    <Typography>
      <img src={photo.path} alt={photo.description} />
    </Typography>
  )
}

export default DisplayPhoto;
