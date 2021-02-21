// Fixing "React not in scope" error:
import React from 'react';

function GalleryForm({ newPhotoDescription,
  setNewPhotoDescription,
  newPhotoURL,
  setNewPhotoURL,
  handleSubmit
}) {
  return (
    <div>Testing FORM
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