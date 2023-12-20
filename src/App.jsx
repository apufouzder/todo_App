import { useState } from "react"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./components/EditTodo";


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

  return (
    <div className="w-1/3 mx-auto mt-10 border p-6 rounded-md bg-slate-50 shadow-md">
      <h2 className="text-center text-2xl mb-6">Add New Task.</h2>
      <TodoForm addTodo={addTodo} />
      {
        todos.map(todo => todo.isEditing ?
          <EditTodo key={todo.id} updateTodo={updateTodo} task={todo} />
          : <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      }
    </div>
  )
}

export default App
