import React, { useState } from 'react';
import Button from './Button';

export default function Todo({ todo, id, removeTodo, updateCompleted }) {
  const [checked, setChecked] = useState(todo.completed)

  function handleClick(e) {
    removeTodo(e.target.id);
  }

  function handleCheck() {
    setChecked(checked => !checked)
    updateCompleted(id)
  }

  return (
    <li className='list-unstyled'>
      <input type='checkbox' className='mr-2' checked={checked} onChange={handleCheck} />
      <span className={checked ? 'text-success' : 'text-danger'}>{todo.title}</span>
      <Button color='btn-danger btn-sm' margin={'my-1 mx-2'} id={id} handleClick={handleClick}>
        Supprimer
      </Button>
    </li>
  );
}
