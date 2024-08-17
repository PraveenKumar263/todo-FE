import axios from 'axios';

const todosLoader = async () => {
    // make a request to the server
    const response = await axios.get('https://todo-be-8wyk.onrender.com/api/v1/todos');

    // return the response
    return response.data.todos;
}

export default todosLoader;