import React from 'react'
import Photo from './Photo'

export default function Photos({ photos }) {
    const listPhotos = photos.map(photo => {
        return <Photo key={photo.id} url={photo.thumbnailUrl} title={photo.title} />
    })

    return (
        <ul className="row">
            {listPhotos}
        </ul>
    )
}
