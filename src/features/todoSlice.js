import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        newTodo: '',
        status: false
    },
    reducers: {
        setNewTodo: (state, action) => {
            state.newTodo = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        clearForm: (state) => {
            state.newTodo = '';
            state.status = false;
        }
    }
});

export const { setNewTodo, setStatus, clearForm } = todoSlice.actions;

export const selectNewTodo = state => state.todos.newTodo;

export const selectStatus = state => state.todos.status;

export default todoSlice.reducer;