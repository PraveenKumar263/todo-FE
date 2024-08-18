import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { setIsEditing, setisEditingId, setNewTodo, setStatus } from '../features/todoSlice';

const ViewTodo = () => {
    const todos = useLoaderData();
    const dispatch = useDispatch();

    const handleTodoClick = (todo) => {
        dispatch(setNewTodo(todo.description));
        dispatch(setStatus(todo.status));
        dispatch(setIsEditing(true));
        dispatch(setisEditingId(todo._id));
    }
    return (
        <>
            <h1>todos</h1>
            <ul>
            {
                todos.map(todo => (
                <li key={todo._id}>
                    <span onClick={() => handleTodoClick(todo)}>{todo.description}</span>
                </li>
                ))
            }
            </ul>
        </>
    )
}

export default ViewTodo;