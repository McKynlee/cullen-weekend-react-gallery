import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList }) {
  return (
    <div className="container">
      {galleryList.map(photo => {
        return <GalleryItem key={photo.id} photo={photo} />
      })}
    </div>
  );
}

export default GalleryList;