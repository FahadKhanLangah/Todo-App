import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';
const AddToDoBtn = () => {
  const [name, setName] = useState("");
  const { todos, addTodo } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      name,
      completed: false,
      id: todos.length ? todos.length + 1 : 1
    }
    addTodo(todo);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit} className='flex sm:w-96 max-w-96 min-w-[22rem] h-12 justify-between rounded-xl bg-slate-800 items-center'>
      <input value={name} onChange={(e) => setName(e.target.value)} className='bg-transparent outline-none px-3' type="text" placeholder='Add new Todo' />
      <button type='submit' className='bg-green-600 h-12 w-20 font-semibold rounded-r-xl'>Add </button>
    </form>
  )
}

export default AddToDoBtn