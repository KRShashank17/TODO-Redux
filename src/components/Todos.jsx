import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../features/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  
    return (
    <>
                {/* Complete LOGIC */}
        <div className='m-10'>
            {todos.map ((todo) => (
                <li key={todo.id}
                className='flex justify-evenly items-center mb-4 text-white'> 
                    {todo.msg}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        Delete</button>
                </li>
            ))}
        </div>

        
    </>
  )
}

export default Todos