import React from 'react'

export default function Photo({ url, title }) {
    return (
        <li className="card col-2 p-0 mx-2 my-3">
            <img src={url} alt={title} />
            <div className="card-body">
            <h5 className="card-title h6">{title}</h5>
            </div>
        </li>
    )
}
