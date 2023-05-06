import { useState } from "react";
import { createTodo } from "../api/helper";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [data, setData] = useState({ todo: "", todoType: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => setData({ todo: "", todoType: "" }));
    navigate("/");
  };

  return (
    <section className="flex items-center justify-center w-full todoContainer">
      <div className="w-[90%] md:w-[70%] lg:w-[40%] bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-4xl font-semibold tracking-wide mb-8">Add Todo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label
              htmlFor="todo"
              className="block text-gray-600 font-bold tracking-wide mb-2"
            >
              Todo
            </label>
            <input
              type="text"
              id="todo"
              name="todo"
              placeholder="Enter your todo!!!"
              value={data.todo}
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="todoType"
              className="block text-gray-600 font-bold tracking-wide mb-2"
            >
              Todo Type
            </label>
            <select
              id="todoType"
              name="todoType"
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              value={data.todoType}
              required
            >
              <option value="">Select a type</option>
              <option value="Professional">Professional</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Todo;
