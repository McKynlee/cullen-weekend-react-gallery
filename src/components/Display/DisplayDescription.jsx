// Received "React not in scope" error, fixing:
import React from 'react';

// Material-UI
import { Typography } from '@material-ui/core';

function DisplayDescription({ photo }) {
  return (
    <Typography
      variant="body1"
      component="div"
      gutterBottom
    >
      {photo.description}
    </Typography>
  );
} // end DisplayDescription

export default DisplayDescription;