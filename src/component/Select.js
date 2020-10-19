import React from 'react';

export default function Select({ users, handleChange }) {

  const options = users.map(user => (
    <option key={user.id} value={user.id}  >
      {user.name}
    </option>
  ));

  return <select className='form-control mb-3' onChange={handleChange}>{options}</select>;
}
