import { RxCross1 } from "react-icons/rx";

const Todo = ({ todos, deleteTodo }) => {
  return (
    <div className="text-center mt-4 ml-100 mr-100">
      <h1 className="text-green-600 font-bold mb-4">My Tasks:</h1>

      {todos.map((todo) => (
        <p
          key={todo.id}
          className="text-green-600 bg-green-200 h-10 pt-2 flex items-center justify-between px-4 rounded mb-2"
        >
          {todo.title}
          <RxCross1
            onClick={() => deleteTodo(todo.id)}
            className="text-gray-400 text-2xl cursor-pointer hover:text-red-500"
          />
        </p>
      ))}
    </div>
  );
};

export default Todo;
