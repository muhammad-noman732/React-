import React from 'react'
import Create from '../../components/createTodo/Create'
import TodoList from '../../components/todoList/TodoList'

const Home = () => {
  return (
    <div>
      <Create/>
      <TodoList/>
    </div>
  )
}

export default Home
