import React, { useRef } from 'react';

const AddForm = ({ addTodo }) => {
 
    const inputEl = useRef(null);

    // save todo item
    const handleSubmit = (e) => {

        e.preventDefault();

        const inputText = inputEl.current.value;

        if(!inputText) return;

        addTodo(inputText);

        inputEl.current.value = "";
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={ inputEl }/>
                <button className="btn btn-success btn-sm mx-2" type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddForm;
