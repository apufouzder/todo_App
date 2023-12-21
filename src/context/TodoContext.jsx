import { createContext, useContext } from "react";

export const TodoContext = createContext({
    
    addTodo : (todo) => { },
    toggleComplete : (id) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, newTodo) => { },
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);