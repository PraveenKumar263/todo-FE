import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { setIsEditing, setisEditingId, setNewTodo, setStatus } from '../features/todoSlice';
import './ViewTodo.css';
import todoServices from "../services/todoServices";

const ViewTodo = () => {
    const todos = useLoaderData();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTodoClick = (todo) => {
        dispatch(setNewTodo(todo.description));
        dispatch(setStatus(todo.status));
        dispatch(setIsEditing(true));
        dispatch(setisEditingId(todo._id));
    }

    const handleCheck = (todo) => {
        const confirm = window.confirm('Are you sure want to change the status of this todo?');
        if(confirm) {
            dispatch(setStatus(!todo.status));
            todoServices.putTodo({
                description: todo.description,
                status: !todo.status
            }, todo._id)
            .then(() => {
                alert('Todo updated');

                navigate('/', { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
        }
    }

    return (
        <>
            <h1>todos</h1>
            <ul className='todoList'>
            {
                todos
                .sort((a, b) => a.status < b.status)
                .map(todo => (
                <li key={todo._id}>
                    <input type="checkbox" checked={todo.status} 
                        onChange={() => handleCheck(todo)}
                    />
                    <span onClick={() => handleTodoClick(todo)}
                        style={{ textDecoration: todo.status ? 'line-through': 'none'}}
                        >
                        {todo.description}
                    </span>
                </li>
                ))
            }
            </ul>
        </>
    )
}

export default ViewTodo;