import React, { useState, useRef, useEffect } from 'react'
import "./App.css"
import TodoList from './components/TodoList'

// const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // const todoNameRef = useRef()

  // //to load the todos
  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if (storedTodos) setTodos(previousTodos => [...previousTodos, ...storedTodos])
  // }, [])

  // //to save the todos
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  // }, [todos])

  return (
    <>
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  )
}

export default App
