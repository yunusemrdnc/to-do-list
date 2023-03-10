import React from 'react'

function List({ todolist }) {
    return (
        <div>
            <ul className="list">
                {todolist.map((todo, i) => (
                    <li key={i}> {todo.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default List