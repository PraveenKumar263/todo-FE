import { useLoaderData } from "react-router-dom";
import './Todo.css';

const Todo = () => {

    const todo = useLoaderData();

  return (
      <div>
            <h1>{todo.description}</h1>
          <p>Status: {todo.status ? 'Completed' : 'Incomplete'}</p>
          <p className="buttons">
            <button>Edit</button>
            <button>Delete</button>
          </p>
    </div>
  )
}

export default Todo;