import { useState } from "react";
import Todo from './components/Todo';
import Form from "./components/Form";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    if (title.trim() === "") return;
    const newTodo = {
      id: crypto.randomUUID(),
      title,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  return (
    <>
      <Todo todos={todos} deleteTodo={deleteTodo} />
      <Form addTodo={addTodo} />
    </>
  );
};

export default App;
