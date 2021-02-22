// Received "React not in scope" error, fixing:
import React from 'react';

function DisplayDescription({ photo }) {
  return (
    <div className="display-center">{photo.description}</div>
  );
} // end DisplayDescription

export default DisplayDescription;