import React, { useState } from "react";
import Form from "./components/Form";
import Background from "./components/Background";
import { Todo } from "./model";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
uuidv4();


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todo ? setTodos([...todos, { id: uuidv4(), todo, isDone: false }]) : null
    setTodo("");
  };

  return (
      <div className="flex flex-col gap-4 w-full justify-start pt-24 px-2 items-center relative min-h-screen">
        <h1 className="text-2xl font-bold z-20 ">Todo List</h1>
        <Form todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
        <TodoList {...{ todos, setTodos }} />
        <Background />
      </div>
  );
};

export default App;
