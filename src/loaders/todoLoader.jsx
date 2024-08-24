import axios from 'axios';
import todoServices from '../services/todoServices';

const todoLoader = async ({params}) => {
    // make a request to the server
    const response = await todoServices.getTodo(params.id);

    // return the response
    return response.data.todos;
}

export default todoLoader;