// Fixing "React not in scope" error:
import React from 'react';

function GalleryForm({ newPhotoDescription,
  setNewPhotoDescription,
  newPhotoURL,
  setNewPhotoURL,
  handleSubmit
}) {
  return (
    <div>
      <h2 className="form-h2">Add to the Gallery:</h2>
      <form onSubmit={handleSubmit} className="form-container">
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