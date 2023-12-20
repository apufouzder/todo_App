import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"


function App() {
  

  return (
    <div className="w-1/3 mx-auto mt-10 border p-6 rounded-md bg-slate-50 shadow-md">
      <h2 className="text-center text-2xl mb-6">Add New Task.</h2>
      <TodoForm />
      <Todo />
      <Todo />
      <Todo />
    </div>
  )
}

export default App
