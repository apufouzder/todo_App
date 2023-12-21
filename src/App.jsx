import { useEffect, useState } from "react"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./components/EditTodo";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, isComplete: false, isEditing: false }]);
  }

  const toggleComplete = (id) => {
    console.log(id);
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo));
  }

  const deleteTodo = (id) => {
    console.log(id);
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
  }
  const updateTodo = (id, newTodo) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task: newTodo, isEditing: !todo.isEditing } : todo));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if(todos && todos.length > 0) setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, editTodo, toggleComplete, deleteTodo, updateTodo }}>
      <div className="w-1/3 mx-auto mt-10 border p-6 rounded-md bg-slate-50 shadow-md">
      <h2 className="text-center text-2xl mb-6">Add New Task.</h2>
      <TodoForm />
      {
        todos.map(todo => todo.isEditing ?
          <EditTodo key={todo.id} task={todo} />
          : <Todo
            key={todo.id}
            todo={todo}
          />
        )
      }
    </div>
    </TodoProvider>
  )
}

export default App
