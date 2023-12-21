import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
    const [value, setValue] = useState("");
    const { todos, addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    
    return (
        <>
            <form onSubmit={handleSubmit} className="flex w-full gap-4 mb-8">
                <input
                    className="w-full py-2 focus:outline-none border border-purple-500 rounded-md px-3 text-lg"
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder="Enter your task..."
                />
                <button type="submit" className="bg-purple-600 py-2 w-36 rounded-md text-white font-semibold px-4">Add Task</button>
            </form>
        </>
    );
};

export default TodoForm;