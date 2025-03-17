import { useEffect, useState } from 'react';
import './App.css'
import AddToDoBtn from './components/AddToDoBtn'
import TodoList from './components/TodoList'
import { TodoContext } from './context/TodoContext';
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  }
  const deletedTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("myTodos", JSON.stringify(updatedTodos));
  }
  const updateToggle = (id) => {
    setTodos(todos.map((v) => (v.id === id) ? { ...v, completed: !v.completed } : v))
  }
  const updateTodoMsg = (id, msg) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, name: msg } : todo))
  }
  const store = {
    addTodo, setTodos, todos, updateToggle, deletedTodo, updateTodoMsg
  }
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("myTodos")));
  }, [])
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("myTodos", JSON.stringify(todos));
    }
  }, [todos]);
  return (
    <>
      <TodoContext.Provider value={store}>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h1 className='font-bold text-3xl mb-10'>Here is your Todo`s</h1>
          <AddToDoBtn />
          <div className='flex flex-col w-96 gap-4 '>
            {todos.length > 0 ? <TodoList /> :
              <h2 className='mt-10'>Have a good Day !</h2>
            }
          </div>
        </div>
      </TodoContext.Provider>
    </>
  )
}

export default App
