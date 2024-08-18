import axios from 'axios';
import todoServices from '../services/todoServices';

const todosLoader = async () => {
    // make a request to the server
    const response = await todoServices.getTodos();

    // return the response
    return response.data.todos;
}

export default todosLoader;