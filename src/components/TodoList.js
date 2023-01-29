import React, { useState } from 'react'
import TodoForm from './TodoForm'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  return (
    todos.map(todo => {
      // the key allows React re-render only the components that actually changes on the array

    })
  )
}