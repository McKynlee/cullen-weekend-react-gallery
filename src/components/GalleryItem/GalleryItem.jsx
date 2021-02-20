import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({ photo }) {
  const [likes, setLikes] = useState(0);

  let heart = '<3'
  let idEven = "item-left-column";
  if (photo.id % 2 === 0) {
    idEven = "item-right-column";
  }

  return (
    <div className={idEven}>
      <img src={photo.path} />
      <div>
        <button onClick={() => {
          setLikes(likes + 1)
        }} >
          {heart} Likes: {likes}
        </button>
      </div >
    </div >
  );
} // end GalleryItem

export default GalleryItem;