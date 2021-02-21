const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id/:likes', (req, res) => {
  console.log('req.params:', req.params);
  console.log('req.body:', req.body);

  const galleryId = req.params.id;
  const newGalleryLikes = Number(req.params.likes + 1);

  let sqlScript = `UPDATE "gallery"
  SET "likes" = ${Number(newGalleryLikes)}
  WHERE "id" = $1;`;

  // for (const galleryItem of galleryItems) {
  //   if (galleryItem.id == galleryId) {
  //     galleryItem.likes += 1;
  //   }
  // }


  pool.query(sqlScript, [galleryId])
    .then(dbRes => {
      console.log('dbRes for PUT:', dbRes);
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('Error updating likes:', sqlScript, error);
      res.sendStatus(500);
    })
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