import { useLoaderData, useNavigate } from "react-router-dom";
import './Todo.css';
import todoServices from "../services/todoServices";

const Todo = () => {

  const todo = useLoaderData();
  const navigate = useNavigate();
  
  const handleDeleteClick = async (todo) => {
    // get a confirmation from the user before deleting the todo
    const confirm = window.confirm('Are you sure you want to delete this todo?');

    if (confirm) {
      todoServices.deleteTodo(todo._id)
        .then(() => {
          
          // show a success message to the user
          alert('Todo deleted successfully!');

          // redirect the user to the home page after deleting the todo
          navigate('/');
        })
        .catch((error) => {
          console.log(todo)
          console.error('Error deleting todo: ', error);
        });
    }
  }

  const handleEditClick = (todo) => {
    dispatch(setNewTodo(todo.description));
    dispatch(setStatus(todo.status));
    dispatch(setIsEditing(true));
    dispatch(setIsEditingId(todo._id));

    navigate(`/edit-todo/${todo._id}`);
  }

  return (
      <div>
            <h1>{todo.description}</h1>
          <p>Status: {todo.status ? 'Completed' : 'Incomplete'}</p>
          <p className="buttons">
            <button onClick={() => handleEditClick(todo)}>Edit</button>
            <button onClick={() => handleDeleteClick(todo)}>Delete</button>
          </p>
    </div>
  )
}

export default Todo;