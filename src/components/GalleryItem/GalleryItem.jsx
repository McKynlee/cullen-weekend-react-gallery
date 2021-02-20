import './GalleryItem.css';

function GalleryItem({ photo }) {
  let idEven = "left-column";
  if (photo.id % 2 === 0) {
    idEven = "right-column";
  }

  return (
    <div className={idEven}>
      <img src={photo.path} />
    </div>
  );
} // end GalleryItem

export default GalleryItem;