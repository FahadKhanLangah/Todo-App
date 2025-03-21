import { createContext } from "react";


export const TodoContext = createContext([{
  todos: [],
  addTodo: () => { },
  setTodo: () => { },
  updateToggle: () => { },
  updateTodoMsg: () => { }
}]);
