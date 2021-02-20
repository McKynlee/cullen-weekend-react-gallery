// Received "React not in scope" error, fixing:
import React from 'react';

function DisplayDescription({ photo }) {
  return (
    <div>{photo.description}</div>
  );
} // end DisplayDescription

export default DisplayDescription;