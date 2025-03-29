import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos, updateToggle, deletedTodo, updateTodoMsg } = useContext(TodoContext);
  
  const [editTodoId, setEditTodoId] = useState(null);
  const [todoMsg, setTodoMsg] = useState(""); 

  const handleUpdateTodo = (e, id) => {
    e.preventDefault();
    updateTodoMsg(id, todoMsg);
    setEditTodoId(null);
    setTodoMsg("");
  };

  return (
    <>
      {todos && todos.length > 0 && todos.map((v) => (
        <div key={v.id} className='flex p-2 justify-between bg-slate-700 rounded'>
          <form onSubmit={(e) => handleUpdateTodo(e, v.id)} className='flex bg-transparent gap-10'>
            <input onClick={() => updateToggle(v.id)} type="checkbox" className="accent-green-500 w-5 h-5 pt-1" />

            {editTodoId === v.id ? ( // Show input only for the editing todo
              <input
                className='px-2 outline-none'
                placeholder={v.name}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                autoFocus
              />
            ) : (
              <h2 className={`bg-transparent px-2 ${v.completed ? 'line-through opacity-25' : ''}`}>{v.name}</h2>
            )}
          </form>

          <div className='flex gap-4 bg-transparent'>
            {editTodoId === v.id ? (
              <button onClick={e=>handleUpdateTodo(e,v.id)} className='px-3 ml-1 z-20 hover:bg-fuchsia-800 font-semibold bg-fuchsia-500 rounded'>
                Update
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setEditTodoId(v.id);
                    setTodoMsg(v.name);
                  }}
                  disabled={v.completed}
                  className={`px-3 font-semibold rounded 
                    ${v.completed ? 'bg-gray-500 opacity-30 cursor-not-allowed' : 'bg-stone-600 hover:bg-stone-800'}`}
                >
                  Edit
                </button>
                <button onClick={() => deletedTodo(v.id)} className='px-3 hover:bg-fuchsia-800 font-semibold bg-fuchsia-500 rounded'>
                  Del
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
