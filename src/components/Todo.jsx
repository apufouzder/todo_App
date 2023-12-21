import { FaPenAlt, FaTrash } from 'react-icons/fa';
import { useTodo } from '../context/TodoContext';

const Todo = ({ todo }) => {
    const { editTodo, toggleComplete, deleteTodo } = useTodo();

    return (
        <div className='flex px-3 rounded-md justify-between py-4 my-4 bg-purple-300'>
            <p onClick={() => toggleComplete(todo.id)} className={` ${todo.isComplete ? 'line-through' : 'no-underline'} text-lg font-normal text-black cursor-pointer`}>{ todo.task}</p>
            <div className="flex gap-4">
                <span onClick={() => editTodo(todo.id)} className="text-blue-700 cursor-pointer text-xl"><FaPenAlt /></span>
                <span onClick={() => deleteTodo(todo.id)} className="text-red-600 cursor-pointer text-xl"><FaTrash /></span>
            </div>
        </div>
    );
};

export default Todo;