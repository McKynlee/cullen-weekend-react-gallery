const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

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

// POST route
router.post('/', (req, res) => {
  console.log('req.body:', req.body);

  const sqlScript = `INSERT INTO "gallery"
  ("path", "description", "likes")
  VALUES
  ($1, $2, $3);`;

  pool.query(sqlScript,
    [req.body.path,
    req.body.description,
    req.body.likes])
    .then(dbRes => {
      console.log('dbRes POST:', dbRes);
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('POST error:', sqlScript, error);
      res.sendStatus(500);
    })
}) // end POST

// PUT Route
router.put('/like/:id/:likes', (req, res) => {
  console.log('req.params:', req.params);
  // console.log('req.body:', req.body);

  const galleryId = req.params.id;
  const newGalleryLikes = Number(req.params.likes) + 1;

  let sqlScript = `UPDATE "gallery"
  SET "likes" = ${newGalleryLikes}
  WHERE "id" = $1;`;

  console.log('sqlScript:', sqlScript);

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





module.exports = router;