import { useLoaderData } from 'react-router-dom';

const ViewTodo = () => {
    const todos = useLoaderData();
    return (
        <>
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
        </>
    )
}

export default ViewTodo;