import React, { useCallback } from "react";

// this
const TodoListElement = ({ id, text, setTodolist }) => {
  const handleRemoveTodo = useCallback(() => {
    setTodolist((c) => {
      const filteredArr = c.filter((todo) => todo.id !== id);
      // selected element will be remove
      return filteredArr;
    });
  }, [setTodolist, id]);

  return (
    <li>
      <label>{text}</label>
      <button onClick={handleRemoveTodo}>X</button>
    </li>
  );
};

function List({ setTodolist, todolist }) {
  return (
    <div>
      <ul className="list">
        {todolist.map((todo, i) => (
          // why we use key? why shouldnt we use index as a key
          <TodoListElement
            setTodolist={setTodolist}
            key={todo.id}
            id={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
