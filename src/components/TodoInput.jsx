import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, inputValue, setInputValue } = props;

    function handleOnchange(event) {
        setInputValue(event.target.value);
    }

    return (
        <header>
            <input value={inputValue} onChange={handleOnchange} placeholder="Enter todo..."  />
            <button onClick={() =>  {
                handleAddTodos(inputValue)
                setInputValue('')
            }}>Add</button>
        </header>
    )
}