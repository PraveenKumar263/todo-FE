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
    },
    getTodo: async (id) => {
        return await instance.get(`/todos/${id}`);
    },
    deleteTodo: async (id) => {
        return await instance.delete(`/todos/${id}`);
    }
}

export default todoServices;