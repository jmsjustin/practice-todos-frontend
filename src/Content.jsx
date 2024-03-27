/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { TodosIndex } from "./TodosIndex";
import { TodosNew } from "./TodosNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { TodosShow } from "./TodosShow";
import { Modal } from "./Modal";

export function Content() {
  const [todos, setTodos] = useState([]);
  const [isTodosShowVisible, setIsTodosShowVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

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

  const handleShowTodo = (todo) => {
    console.log("handleShowTodo", todo);
    setIsTodosShowVisible(true);
    setCurrentTodo(todo);
  };

  const handleUpdateTodo = (id, params, successCallback) => {
    console.log("handleUpdateTodo", params);
    axios.patch(`http://localhost:3000/todos/${id}.json`, params).then((response) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === response.data.id) {
            return response.data;
          } else {
            return todo;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsTodosShowVisible(false);
  };

  useEffect(handleIndexTodos, []);

  return (
    <main>
      <TodosNew onCreateTodo={handleCreateTodo} />
      <Signup todos={todos} />
      <Login todos={todos} />
      <LogoutLink todos={todos} />
      <TodosIndex todos={todos} onShowTodo={handleShowTodo} />
      <Modal show={isTodosShowVisible} onClose={handleClose}>
        <TodosShow todo={currentTodo} onUpdateTodo={handleUpdateTodo} />
      </Modal>
    </main>
  );
}
