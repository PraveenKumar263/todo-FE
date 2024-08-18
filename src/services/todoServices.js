import axios from "axios";
import instance from "./instance";

const todoServices = {
    getTodos: async () => {
        return await instance.get('/todos');
    },
    postTodo: async (data) => {
        return await instance.post('/todos', data);
    }
}

export default todoServices;