import React, { useState, useEffect } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/todoApi";

interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await getTodos();
        setTodos(response.data);
    };

    const handleAddTodo = async () => {
        if (!newTodo) return;
        await addTodo({ title: newTodo, isCompleted: false });
        setNewTodo("");
        fetchTodos();
    };

    const handleToggleComplete = async (todo: Todo) => {
        await updateTodo(todo.id, { ...todo, isCompleted: !todo.isCompleted });
        fetchTodos();
    };

    const handleDeleteTodo = async (id: number) => {
        await deleteTodo(id);
        fetchTodos();
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTodo}>Add</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
                        {todo.title}
                        <button onClick={() => handleToggleComplete(todo)}>✔</button>
                        <button onClick={() => handleDeleteTodo(todo.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;