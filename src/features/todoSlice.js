import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        newTodo: '',
        status: false,
        isEditing: false,
        isEditingId: ''
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
            state.isEditing = false;
            state.isEditingId = '';
        },
        setIsEditing: (state, action) => {
            state.isEditing = action.payload;
        },
        setisEditingId: (state, action) => {
            state.isEditingId = action.payload;
        }
    }
});

export const { setNewTodo, setStatus, clearForm, setIsEditing, setisEditingId } = todoSlice.actions;

export const selectNewTodo = state => state.todos.newTodo;

export const selectStatus = state => state.todos.status;

export const selectIsEditing = state => state.todos.isEditing;

export const selectisEditingId = state => state.todos.isEditingId;

export default todoSlice.reducer;