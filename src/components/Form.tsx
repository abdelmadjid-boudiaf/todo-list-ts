import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="z-10 w-2/3 h-12 max-md:w-full relative "
      onSubmit={(e) => {
        handleAddTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a task to add"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full h-full rounded-full bg-slate-50 text-gray-800 outline-none px-10 text-xl focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)]"
      />
      <button
        type="submit"
        className="absolute top-0 right-0 w-10 h-10 translate-y-1 bg-blue-400 mr-2 rounded-full hover:scale-105 duration-300 text-white font-bold  "
      >
        Add
      </button>
    </form>
  );
};

export default Form;
