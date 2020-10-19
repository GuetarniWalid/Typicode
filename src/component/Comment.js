import React from 'react'

export default function Comment({ name, email, body }) {
    return (
        <li className="text-right border rounded list-unstyled p-3 mb-4">
            <h5>{name}</h5>
            <h6>{email}</h6>
            <p>{body}</p>
        </li>
    )
}
