import axios from "axios";
import { useState, useEffect } from "react";
import { TodosIndex } from "./TodosIndex";

export function Content() {
  const [todos, setTodos] = useState([]);

  const handleIndexTodos = () => {
    console.log("http://localhost:3000/todos.json").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  useEffect(handleIndexTodos, []);

  return (
    <main>
      <TodosIndex todos={todos} />
    </main>
  );
}
