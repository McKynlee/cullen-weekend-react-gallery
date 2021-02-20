import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList }) {
  return (
    <div>
      <h1>The McKynlee Gallery</h1>
      {galleryList.map(photo => {
        return <GalleryItem key={photo.id} photo={photo} />
      })}
      <img src="images/salsa.PNG" />
    </div>
  );
}

export default GalleryList;