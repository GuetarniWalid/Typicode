import React, { useEffect, useState } from 'react'
import Comment from './Comment'

export default function Comments({ id }) {
    const [comments, setComments] = useState([])

        useEffect(() => {
            async function fetchComments() {
                const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                const json = await data.json()
                setComments(json)
            }
            fetchComments()
        }, [id])

        const listComments = comments.map(comment => {
            return <Comment key={comment.id} name={comment.name} email={comment.email} body={comment.body} />
        })

    return (
        <ul>
            {listComments}
        </ul>
    )
}
