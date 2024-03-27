/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { TodosIndex } from "./TodosIndex";
import { TodosNew } from "./TodosNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [todos, setTodos] = useState([]);

  const handleIndexTodos = () => {
    console.log("handleIndexTodos");
    axios.get("http://localhost:3000/todos.json").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  const handleCreateTodo = (params, successCallback) => {
    console.log("handleCreateTodo", params);
    axios.post("http://localhost:3000/todos.json", params).then((response) => {
      setTodos([...todos, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexTodos, []);

  return (
    <main>
      <TodosNew onCreateTodo={handleCreateTodo} />
      <TodosIndex todos={todos} />
      <Signup todos={todos} />
      <Login todos={todos} />
      <LogoutLink todos={todos} />
    </main>
  );
}
