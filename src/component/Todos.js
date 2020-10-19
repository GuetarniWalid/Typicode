import React, { useState, useEffect } from 'react';
import Button from './Button';
import Todo from './Todo';

export default function Todos({ user, hide }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const data = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
      const json = await data.json();
      setTodos(json);
    }
    fetchTodos();
  }, [user]);

  function hideCompletedTodo() {
    const completedTodos = todos.filter(todo => todo.completed === true);
    setTodos(completedTodos);
  }

  function removeTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== Number(id)));
  }

  function updateCompleted(id) {
    const todo = todos.find(todo => todo.id === id)
    todo.completed = !todo.completed
  }

  const todoList = todos.map(todo => <Todo todo={todo} key={todo.id} id={todo.id} removeTodo={removeTodo} updateCompleted={updateCompleted} />);

  return hide ? null : (
    <div className='mt-4'>
      <h3>Tâches à réaliser pour {user.name}</h3>
      <Button color='btn-primary' margin={'m-2'} handleClick={hideCompletedTodo}>
        Cacher les tâches déjà réalisés
      </Button>
      <ul>{todoList}</ul>
    </div>
  );
}
