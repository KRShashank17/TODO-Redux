import { useState } from 'react'
import './App.css'

import AddTodo from './components/addTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-white text-2xl font-bold'>Manage Todos</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
