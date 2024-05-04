
import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

function handleAddTodos(newTodo) {
  const newTodosArray = [...todos, newTodo];
  persistData(newTodosArray);
  setTodos(newTodosArray);
}

function handleDeleteTodo(index) {
  const filteredTodo = todos.filter((todo, todoIndex) =>  todoIndex !== index );
  persistData(filteredTodo);
  setTodos(filteredTodo);
}

function handleEditTodo(index) {
  const valueToBeEdited = todos[index];
  setInputValue(valueToBeEdited);
  handleDeleteTodo(index);
}

useEffect(() => {
  if (!localStorage) return;
  let localTodos = localStorage.getItem('todos');
  if (!localTodos) return;
  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)
}, [])

  return (
    <>
      <TodoInput inputValue={inputValue} setInputValue={setInputValue} handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default App
