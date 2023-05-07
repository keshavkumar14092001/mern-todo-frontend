import { Link } from "react-router-dom";
import { deleteTodo } from "../api/helper";

const TodoCard = ({ todo, id }) => {
  const handleSubmit = () => {
    deleteTodo(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  return (
    <li className="bg-white flex flex-col md:flex-row justify-between items-center my-8 md:my-26 p-4 md:p-16 rounded-md shadow-lg">
      <div>
        <h1 className="text-base md:text-lg lg:text-2xl md:tracking-wide font-semibold text-indigo-700">
          {todo}
        </h1>
      </div>
      <div className="flex justify-center items-center space-x-2 pt-4">
        <Link to={`/updateTodo/${id}`}>
          <button className="bg-transparent text-sm md:text-base hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white px-1 md:py-2 md:px-4 border border-indigo-500 hover:border-transparent rounded transition-all">
            Edit
          </button>
        </Link>
        <button
          onClick={handleSubmit}
          className="bg-transparent text-sm md:text-base hover:bg-red-500 text-red-700 font-semibold hover:text-white px-1 md:py-2 md:px-4 border border-red-500 hover:border-transparent rounded transition-all"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
