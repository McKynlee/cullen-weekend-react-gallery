import Axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

// Import components:
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([]);

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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList galleryList={galleryList} />
    </div>
  );
}

export default App;
