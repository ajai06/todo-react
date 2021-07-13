import React from 'react';

const TodoList = ({ todos, removeTodo, completeTodo}) => {

    return (
        <div className="mt-4">
            {
                todos.map((todo, index) => (
                    <ul key={index} className="d-flex flex-row justify-content-center">
                        <li className={todo.isCompleted ? 'text-decoration-line-through' : ''}> {todo.text} </li>
                        <button className="btn btn-info btn-sm mx-2" onClick={()=>completeTodo(todo)}>Done &#10003;</button>
                        <button className="btn btn-danger btn-sm" onClick={()=>removeTodo(todo)}>Remove &#10005;</button>
                    </ul>
                ))
            }
        </div>
    )
}

export default TodoList;
