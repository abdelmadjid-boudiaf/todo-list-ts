
import { Todo } from "../model";
import TodoItem from "./TodoItem";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
}) => {
  return (
    <div className="z-20 w-2/4  max-md:w-full h-2/3  my-5 flex max-md:flex-col max-md:items-center max-md:justify-start items-start justify-start gap-4">
      <ul className=" w-full   rounded-lg p-2 flex flex-col gap-2 bg-green-700 min-h-0">
        <h1 className="text-xl font-bold italic capitalize">tasks</h1>
        {todos.map((todo) => (
            <TodoItem
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
          
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
