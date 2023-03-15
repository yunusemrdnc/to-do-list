import { useState, useEffect } from "react";

import "./styles.css";
import List from "./List";
import Form from "./Form";

function Todolist() {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  //   Create add function with text parameter for use child component directly
  //   const addTodo = (text) => {
  //     setTodolist(c => [...c, text]);
  //   }

  return (
    <div id="container">
      <h1>To Do List</h1>
      <List setTodolist={setTodolist} todolist={todolist} />
      <Form addTodo={setTodolist} todolist={todolist} />
    </div>
  );
}

export default Todolist;
