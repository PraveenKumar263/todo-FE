import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const todos = useLoaderData();
  return (
    <div>
      <h1>todos</h1>
    <ul>
      {
        todos.map(todo => (
          <li key={todo._id}>
            {todo.description}
          </li>
        ))
      }
    </ul>
    </div>
  )
}

export default Home;