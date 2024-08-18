import axios from "axios";
import instance from "./instance";

const todoServices = {
    getTodos: async () => {
        return await instance.get('/todos');
    },
    postTodo: async (data) => {
        return await instance.post('/todos', data);
    },
    putTodo: async (data, id) => {
        return await instance.put(`/todos/${id}`, data);
    }
}

export default todoServices;