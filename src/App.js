import React, { useState, useRef, useEffect } from 'react'
import "./App.css"
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

// const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const todoNameRef = useRef()

  //   //to load the todos
  //   useEffect(() => {
  //     const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //     if (storedTodos) setTodos(previousTodos => [...previousTodos, ...storedTodos])
  //   }, [])

  //   //to save the todos
  //   useEffect(() => {
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  //   }, [todos])

  //   //toggles todos from complete to incomplete and vice-versa
  //   function toggleTodo(id) {
  //     const newTodos = [...todos]
  //     const todo = newTodos.find(todo => todo.id === id)
  //     todo.complete = !todo.complete
  //     setTodos(newTodos)
  //   }

  //   function handleAddTodo(e) {
  //     const name = todoNameRef.current.value
  //     if (name === '') return
  //     setTodos(previousTodos => {
  //       return [...previousTodos, { id: uuidv4(), name: name, completed: false }]
  //     })
  //     todoNameRef.current.value = null
  //   }

  //   function handleClearTodos() {
  //     const newTodos = todos.filter(todo => !todo.complete)
  //     setTodos(newTodos)
  //   }

  return (
    //Fragment (to return more than one thing)
    <>
      <div className="todo-app">
        <TodoForm />
        {/* <TodoList todos={todos} toggleTodo={toggleTodo} /> */}
        {/* <input ref={todoNameRef} type='text' /> */}
        {/* <button onClick={handleClearTodos}>Clear Complete</button> */}
        {/* <div>{todos.filter(todo => !todo.complete).length} left to do</div> */}
      </div>
    </>
  )
}

export default App
