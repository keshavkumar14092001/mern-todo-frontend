import { useState, useEffect } from "react";
import { getAllTodos } from "../api/helper";
import TodoCard from "./TodoCard";
import Loader from "../components/Loader";

const ShowTodo = () => {
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTodos()
      .then((data) => {
        setTodo(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTodos =
    filter === "All" ? todo : todo.filter((t) => t.todoType === filter);

  const incompleteTodos = filteredTodos.filter((t) => !t.completed).length;

  return (
    <section className="w-full mx-auto flex justify-center items-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-[90%] md:w-[75%] lg:w-[58%] xl:w-[60%]">
            <div className="flex justify-between items-center mt-16">
              <div className="bg-white p-3 rounded shadow-md tracking-wide w-[50%]">
                <h1 className="text-center">
                  Todo Left ({filter}) :: {incompleteTodos}
                </h1>
              </div>
              <select
                id="filter"
                value={filter}
                onChange={handleFilterChange}
                className="border-gray-300 p-3 rounded shadow-md w-[40%]"
              >
                <option value="All">All</option>
                <option value="Personal">Personal</option>
                <option value="Professional">Professional</option>
              </select>
            </div>
            <div className="md:mt-20 md:mb-10 lg:mt-0 lg:mb-0">
              <ul className="w-full">
                {filteredTodos.map((details) => (
                  <TodoCard
                    key={details._id}
                    todo={details.todo}
                    id={details._id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ShowTodo;
