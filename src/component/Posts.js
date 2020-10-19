import React, { Fragment, useEffect, useState } from 'react';
import Post from './Post';
import Comments from './Comments';

export default function Posts({ user, hide }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      const json = await data.json();
      setPosts(json);
    }
    fetchPosts();
  }, [user.id]);

  const listPosts = posts.map((post, index) => {
    return (
      <Fragment key={post.id}>
        <Post id={post.id} title={post.title} body={post.body} />
        <Comments id={user.id} />
      </Fragment>
    );
  });

  return hide ? null : <ul>{listPosts}</ul>;
}
