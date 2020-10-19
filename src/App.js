import React, { useState, useEffect, Fragment } from 'react';
import Select from './component/Select';
import DisplayUser from './component/DisplayUser';
import Button from './component/Button';
import Todos from './component/Todos';
import Albums from './component/Albums';
import Posts from './component/Posts';

export default function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [todosButton, setTodosButton] = useState({ hide: true, textButton: 'Voir les tâches', color: 'btn-primary' });
  const [albumsButton, setAlbumsButton] = useState({ hide: true, textButton: 'Voir les albums', color: 'btn-primary' });
  const [postsButton, setPostsButton] = useState({ hide: true, textButton: 'Voir les articles', color: 'btn-primary' });

  useEffect(() => {
    const fetcher = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await data.json();
      setUsers(json);
    };

    fetcher();
  }, []);

  function handleChange(e) {
    const user = users.filter(user => user.id === Number(e.target.value));
    setUser(user[0]);
  }

  function toggleTodos() {
    setTodosButton(prevState => {
      if (prevState.hide) {
        return {
          hide: false,
          textButton: 'Cacher les tâches',
          color: 'btn-danger',
        };
      } else {
        return {
          hide: true,
          textButton: 'Voir les tâches',
          color: 'btn-primary',
        };
      }
    });
  }

  function toggleAlbums() {
    setAlbumsButton(prevState => {
      if (prevState.hide) {
        return {
          hide: false,
          textButton: 'Cacher les albums',
          color: 'btn-danger',
        };
      } else {
        return {
          hide: true,
          textButton: 'Voir les albums',
          color: 'btn-primary',
        };
      }
    });
  }

  function togglePosts() {
    setPostsButton(prevState => {
      if (prevState.hide) {
        return {
          hide: false,
          textButton: 'Cacher les articles',
          color: 'btn-danger',
        };
      } else {
        return {
          hide: true,
          textButton: 'Voir les articles',
          color: 'btn-primary',
        };
      }
    });
  }

  return (
    <div>
      <h1 className='text-center my-4'>Exercice Typicode avec React</h1>
      <hr />
      <h2>Liste des utilisateurs</h2>
      <p>Il y a {users.length} utilisateurs inscrit dans l'application</p>
      <Select users={users} handleChange={handleChange} />
      {user ? (
        <Fragment>
          <DisplayUser user={user} />
          <hr />
          <Button color={todosButton.color} margin={'m-2'} handleClick={toggleTodos}>
            {todosButton.textButton}
          </Button>
          <Button color={albumsButton.color} margin={'m-2'} handleClick={toggleAlbums}>
            {albumsButton.textButton}
          </Button>
          <Button color={postsButton.color} margin={'m-2'} handleClick={togglePosts}>
            {postsButton.textButton}
          </Button>

          <Todos user={user} hide={todosButton.hide} />
          <Albums user={user} hide={albumsButton.hide} />
          <Posts user={user} hide={postsButton.hide} />
        </Fragment>
      ) : null}
    </div>
  );
}
