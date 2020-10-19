import React, { useState } from 'react'
import { useEffect } from 'react';
import Album from './Album'
import Photos from './Photos';

export default function Albums({ user, hide }) {
    const [albums, setAlbums] = useState([])
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        async function fetchAlbums() {
            const data = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
            const json = await data.json()
            setAlbums(json)
        }
        fetchAlbums()
    },[user.id])

    const albumsList = albums.map(album => {
        return <Album text={album.title} id={album.id} key={album.id} setPhotos={setPhotos} />
    })
    return (
        hide ? null : (
        <div className="mt-4">
          <h3>Albums photo de {user.name}</h3>
          <ul>
              {albumsList}
          </ul>
          <Photos photos={photos} />
        </div>
        )
      );
}
