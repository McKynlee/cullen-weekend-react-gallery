# To-Do

- [] Update README 

## Client
- [x] Axios GET data from /gallery into App.jsx
- [x] Pass gallery data from App via props into GalleryList
- [x] .map() list of gallery data
- [x] Create GalleryItems to send single image rendering to GalleryList.
---------- [x] click image to toggle btwn image and description (conditional rendering)
---------- [x] Like button
---------- [x] Accumulate likes (useState)
---------- [x] Axios PUT the like count /gallery/like/:id
---------- [x] Update gallery each time smthg is liked


## Server
- [x] import 6+ personal photos
- [x] Test given endpoints in Postman
- [x] GET endpoint
- [x] PUT endpoint

## STRETCH
- [x] Use git branching
- [x] feature-db: 
-----[x] move your data into react_gallery db and include database.sql file
-----[x] create pool.js to bring in db
-----[x] Write pool.query for get endpoints
-----[x] Write pool.query for put endpoints
-----[x] GET likes from db

- [x] feature-form: create form that allows user to POST new gallery item (use absolute URL for img) 
-----[x] FormComponent
-----[x] text input, img input, submit
-----[x] Axios POST
-----[x] Router + Pool POST
-----[x] Update DOM with new item

- [] feature-delete: add ability to delete item 
-----[x] Button
-----[x] Delete function called on click
-----[x] Axios DELETE
-----[] Router + Pool DELETE

- [] Material UI styling
- [] Implement uppy for image upload
