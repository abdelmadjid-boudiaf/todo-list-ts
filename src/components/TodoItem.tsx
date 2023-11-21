import { MdDelete, MdDone, MdModeEdit } from "react-icons/md";
import { Todo } from "../model";
import { useEffect, useRef, useState } from "react";

interface Props {
  todos: Todo[];
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({
  todo,
  todos,
  setTodos,

}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>(todo.todo);
  const handleDone = (id: string) => {
    const newTodos = todos.map((t) =>
      t.id === id ? { ...t, isDone: !t.isDone } : t
    )
    setTodos(newTodos);
   
  };
    
  const handleDelete = (id: string) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };
  const handleUpdate = (id: string) => {
      setEdit(!edit);
      const newTodos = todos.map((t) =>
        t.id === id ? { ...t, todo: todoText } : t
      );
      setTodos(newTodos);
    
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdate(todo.id);
  };
  const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  

  return (
    <form
      className={`w-full rounded-md flex justify-between items-center p-2 ${
        todo.isDone ? "bg-orange-500/80" : "bg-yellow-500"
      } cursor-pointer text-xl max-md:text-lg hover:scale-[1.01] duration-300 transition-all`}
      onSubmit={handleSubmit}
    >
      {!edit ? (
        <p className="w-2/3 text-gray-950 break-words flex-grow mr-3">{todo.todo}</p>
      ) : (
        <input
          ref={inputRef}
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="bg-white flex-grow w-2/3 rounded-md pl-2 outline-none text-gray-950 text-2xl"
        />
      )}

      <div className="flex items-center justify-end gap-2 text-gray-950  ">
        <span
          className="cursor-pointer hover:text-red-600  duration-300 text-2xl"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          <MdDelete />
        </span>
        {!todo.isDone ? (
          <span
            className="cursor-pointer hover:text-blue-600 text-2xl  duration-300"
            onClick={() => {
              handleUpdate(todo.id);
            }}
          >
            <MdModeEdit />
          </span>
        ) : null}
        <span
          className="cursor-pointer text-2xl "
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
