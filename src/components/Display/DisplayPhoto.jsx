// Received "React not in scope" error, fixing:
import React from 'react';

function DisplayPhoto({ photo }) {
  return (
    <div className="display-center">
      <img src={photo.path} alt={photo.description} />
    </div>
  )
}

export default DisplayPhoto;
