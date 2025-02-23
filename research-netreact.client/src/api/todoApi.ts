import axios from "axios";

const API_URL = "http://localhost:5296/api/todos";

export const getTodos = () => axios.get(API_URL);

export const addTodo = (todo: { title: string; isCompleted: boolean }) =>
    axios.post(API_URL, todo);

export const updateTodo = (id: number, todo: { title: string; isCompleted: boolean }) =>
    axios.put(`${API_URL}/${id}`, todo);

export const deleteTodo = (id: number) => axios.delete(`${API_URL}/${id}`);