"use client";
import { useState } from "react";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "./todoApiSlice";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");

  const { data: todos, isLoading, isError } = useGetTodosQuery();

  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  // 🔥 ADD
  const handleAdd = () => {
    if (!newTodo.trim()) return;

    addTodo({
      title: newTodo,
      completed: false,
    });

    setNewTodo("");
  };

  // 🔥 UPDATE
  const handleUpdate = (todo: any) => {
    const updatedTitle = prompt("Enter new title");
    if (!updatedTitle) return;

    updateTodo({
      ...todo,
      title: updatedTitle,
    });
  };

  // 🔥 DELETE
  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div>
      {/* 🔹 Add Todo */}
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>

      {/* 🔹 Show Todos */}
      <div>
        {todos?.map((todo: any) => (
          <div key={todo.id} style={{ marginTop: "10px" }}>
            <p>
              {todo.title} {todo.completed ? "✅" : "❌"}
            </p>

            {/* 🔥 Update */}
            <button onClick={() => handleUpdate(todo)}>Update</button>

            {/* 🔥 Delete */}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}