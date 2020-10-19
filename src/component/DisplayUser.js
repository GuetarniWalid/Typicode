import React from 'react'

export default function DisplayUser({user}) {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>Id : n°{user.id} </p>
            <ul>
                <li>{user.email}</li>
                <li>{user.phone}</li>
                <li>{user.website}</li>
            </ul>
            <p>{`Adresse : ${user.address.city}, ${user.address.street} ${user.address.zipcode}`}</p>
            <p>{user.company.name}</p>
        </div>
    )
}
