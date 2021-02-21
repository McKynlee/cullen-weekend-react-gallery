// Fixing "React not in scope" error:
import React from 'react';

function GalleryForm({ newGalleryItem,
  setNewGalleryItem,
  newGalleryURL,
  setNewGalleryURL,
  handleSubmit
}) {
  return (
    <div>Testing FORM
      <form onSubmit={handleSubmit}>
        <label>Text description of photo:<input type="text" /></label>
        <label>Photo absolute URL:<input type="text" /></label>
        <button>SUBMIT</button>
      </form>
    </div>
  );
} // end GalleryForm

export default GalleryForm;