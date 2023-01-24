import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      // the key allows React re-render only the components that actually changes on the array
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}