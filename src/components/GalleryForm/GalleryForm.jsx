// Fixing "React not in scope" error:
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function GalleryForm() {
  // useStates for input variables:
  const [newPhotoDescription, setNewPhotoDescription] = useState('');
  const [newPhotoURL, setNewPhotoURL] = useState('');

  // handle posting new information once form is submitted:
  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log('in handleSubmit');
    // console.log('event:', event);

    axios.post('/gallery', {
      path: newPhotoURL,
      description: newPhotoDescription,
      likes: 0
    })
      .then(response => {
        console.log('POST response:', response);
        getGallery();
        setNewPhotoURL('');
        setNewPhotoDescription('');
      })
      .catch(error => {
        console.log('error POSTing new photo:', error);
        alert('Error posting new photo.')
      })
  } //end handleSubmit

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
        <label className="form-label">Photo absolute URL:
          <input type="text" placeholder="Photo URL - https://..."
            className="form-input"
            value={newPhotoURL}
            onChange={event => {
              setNewPhotoURL(event.target.value)
            }} />
        </label>
        <button>Add Image</button>
      </form>
    </div>
  );
} // end GalleryForm

export default GalleryForm;