import { FaPenAlt, FaTrash } from 'react-icons/fa';

const Todo = () => {
    return (
        <div className='flex px-3 rounded-md justify-between py-4 my-4 bg-purple-300'>
            <p className='text-lg font-normal text-black'>Go Shopping</p>
            <div className="flex gap-4">
                <span className="text-blue-700 cursor-pointer text-xl"><FaPenAlt /></span>
                <span className="text-red-600 cursor-pointer text-xl"><FaTrash /></span>
            </div>
        </div>
    );
};

export default Todo;