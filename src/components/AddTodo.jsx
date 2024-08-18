import { clearForm, selectNewTodo, selectStatus, setNewTodo, setStatus } from '../features/todoSlice';
import { useNavigate } from 'react-router-dom';
import todoServices from '../services/todoServices';
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {
    const newTodo = useSelector(selectNewTodo);
    const status = useSelector(selectStatus);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleAddTodo = async (e) => {
      e.preventDefault();
      // console.log("Add Todo")
  
      // make a POST request to the server
      todoServices.postTodo({
        description: newTodo,
        status: status
      })
        .then(response => {
          alert('Todo added successfully');
  
          // clear form
          clearForm();
  
          // reload the todos
          navigate('/');
        })
    };

    return (
    <form onSubmit={handleAddTodo}>
      <input
      type="text"
      placeholder="Add Todo..."
      value={newTodo}
      onChange={(e) => dispatch(setNewTodo(e.target.value))}
      />
      <select
        value={status}
        onChange={(e) => dispatch(setStatus(e.target.value))}
      >
        <option>False</option>
        <option>True</option>
      </select>
      <button type="submit">Add Todo</button>
    </form>
    )
}

export default AddTodo;