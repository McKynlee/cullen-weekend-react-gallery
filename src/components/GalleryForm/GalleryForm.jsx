// Fixing "React not in scope" error:
import React from 'react';

// Import Uppy:
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { DragDrop } from '@uppy/react';

const uppy = new Uppy({
  meta: { type: 'avatar' },
  restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true
})

uppy.on('complete', (result) => {
  const url = result.successful[0].uploadURL
  store.dispatch({
    type: 'SET_USER_AVATAR_URL',
    payload: { url: url }
  })
})

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
          <input type="text" placeholder="Describe your photo"
            className="form-input"
            value={newPhotoDescription}
            onChange={event => {
              setNewPhotoDescription(event.target.value)
            }} />
        </label>
        <DragDrop
          uppy={uppy}
          locale={{
            strings: {
              // Text to show on the droppable area.
              // `%{browse}` is replaced with a link that opens the system file selection dialog.
              dropHereOr: 'Drop here or %{browse}',
              // Used as the label for the link that opens the system file selection dialog.
              browse: 'browse'
            }
          }}
        />
        <label className="form-label">Photo absolute URL:
          <input type="text" placeholder="Photo URL - https://..."
            className="form-input"
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