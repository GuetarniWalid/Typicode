import React, { useEffect, useState } from 'react';

export default function Album({ text, id, setPhotos }) {
  const [albumId, setalbumId] = useState();

  useEffect(() => {
    async function fetchPictures() {
      const data = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      const json = await data.json();
      setPhotos(json);
    }
    fetchPictures();
  }, [albumId, setPhotos]);

  function handleClick(e) {
    setalbumId(e.target.id);
  }

  return (
    <li>
      <span className='text-primary' id={id} style={{ cursor: 'pointer' }} onClick={handleClick}>
        {text}
      </span>
    </li>
  );
}
