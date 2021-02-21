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
  const [newGalleryItem, setNewGalleryItem] = useState('');
  const [newGalleryURL, setNewGalleryURL] = useState('');

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

    console.log('in handleSubmit');
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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryForm
        newGalleryItem={newGalleryItem}
        setNewGalleryItem={setNewGalleryItem}
        newGalleryURL={newGalleryURL}
        setNewGalleryURL={setNewGalleryURL}
        handleSubmit={handleSubmit}
      />
      <GalleryList
        galleryList={galleryList}
        updateLikes={updateLikes} />
    </div>
  );
}

export default App;
