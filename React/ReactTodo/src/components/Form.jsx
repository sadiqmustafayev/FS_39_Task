import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Form = ({   addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form className="p-2 rounded-sm bg-white" onSubmit={handleSubmit}>
      <div className="flex gap-2 mt-5 ml-100 mr-100">
        <input
          type="text"
          className="border rounded px-2 py-1 w-full"
          placeholder="Add Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
          <FaPlus />
        </button>
      </div>
    </form>
  );
};

export default Form;
