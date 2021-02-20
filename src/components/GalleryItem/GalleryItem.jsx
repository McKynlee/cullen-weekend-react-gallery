import './GalleryItem.css';

function GalleryItem({ photo }) {
  // let idEven;
  // if({photo.id} % 2 === 0) {
  // idEven = 'right-column';
  //}
  // className="idEven"

  return (
    <div>
      <img src={photo.path} />
    </div>
  );
} // end GalleryItem

export default GalleryItem;