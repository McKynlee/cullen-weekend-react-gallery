const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  const sqlScript = 'SELECT * FROM "gallery" ORDER BY "id";';

  pool.query(sqlScript)
    .then(dbRes => {
      // console.log('Got stuff from db!', dbRes);
      res.send(dbRes.rows);
    })
    .catch(error => {
      console.log('Error GETting stuff from db:', error);
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;