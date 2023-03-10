import { useState, useEffect } from 'react'

import "./styles.css";
import List from './List'
import Form from './Form'

function Todolist() {
    const [todolist, setTodolist] = useState([]);

    useEffect(() => {
        console.log(todolist);
    }, [todolist])

    return (
        <div id="container">
            <h1>To Do List</h1>
            <List todolist={todolist} />
            <Form addTodo={setTodolist} todolist={todolist} />
        </div>
    )
}

export default Todolist