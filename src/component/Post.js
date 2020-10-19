import React from 'react';

export default function Post({ id, title, body }) {
  return (
  <li>
      <h4>{title}</h4>
      <p>{body}</p>
  </li>
  );
}
