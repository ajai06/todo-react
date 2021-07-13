import React, { useState } from 'react';

import AddForm from '../../components/addTodo/addTodoForm.component';
import TodoList from '../../components/todoList/todoList.component';

const Homepage = () => {

    const [ todos, setTodos ] = useState([]);

    // adding todo item
    const addTodo = (text) => {

        setTodos([...todos,  {text, isCompleted: false}]);
    }

    // removing todo item
    const removeTodo = (item) => {

        const todosArr = todos.filter((obj) => {
            return obj.text !== item.text;
        });

        setTodos(todosArr);
    }

    // set completed todo item
    const completeTodo = (item) => {

        const arr = [...todos];

        arr.find(obj => obj.text === item.text).isCompleted = true;

        setTodos(arr);        
    }

    return (
        <div>
            <AddForm addTodo={addTodo}/>
            <TodoList todos={todos} removeTodo={removeTodo} completeTodo={completeTodo}/>
        </div>
    )
}

export default Homepage;
