import Axios from 'axios';
import React from 'react';

import { useState, useEffect } from 'react';
import './App.css';

// Import components:
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import axios from 'axios';

function App() {
  const [galleryList, setGalleryList] = useState([]);
  const [newPhotoDescription, setNewPhotoDescription] = useState('');
  const [newPhotoURL, setNewPhotoURL] = useState('');

  // On page load, load gallery images:
  useEffect(() => {
    getGallery()
  }, [])

  const getGallery = () => {
    Axios.get('/gallery')
      .then(response => {
        console.log('GET response', response);
        setGalleryList(response.data)
      })
      .catch(error => {
        console.log('GET error:', error);
        alert('error GETting gallery')
      })
  } //end getGallery

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

  const updateLikes = (galleryId, photoLikes) => {
    axios.put(`/gallery/like/${galleryId}/${photoLikes}`)
      .then(response => {
        console.log('PUT response:', response);
        getGallery();
      })
      .catch(error => {
        console.log('error updating likes', error);
      })
  } //end updateLikes

  const deleteFromGallery = (photoId) => {
    console.log('deleteFromGallery ID:', photoId);

    axios.delete(`/gallery/delete/${photoId}`)
      .then(response => {
        console.log('Item successfully deleted!', response);
        getGallery();
      })
      .catch(error => {
        console.log('error deleting item:', error);
        alert('Error deleting item.')
      })
  } // end DELETE

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <section className="App-body">
        <GalleryForm
          newPhotoDescription={newPhotoDescription}
          setNewPhotoDescription={setNewPhotoDescription}
          newPhotoURL={newPhotoURL}
          setNewPhotoURL={setNewPhotoURL}
          handleSubmit={handleSubmit}
        />
        <GalleryList
          galleryList={galleryList}
          updateLikes={updateLikes}
          deleteFromGallery={deleteFromGallery}
        />
      </section>
    </div>
  );
}

export default App;
