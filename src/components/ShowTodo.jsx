import { useState, useEffect } from "react";
import { getAllTodos } from "../api/helper";
import TodoCard from "./TodoCard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

const ShowTodo = () => {
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllTodos()
      .then((data) => {
        setTodo(data);
        dispatch({
          type: "currentValue",
          payload: data.length,
        });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { total } = useSelector((state) => state.custom);

  const filteredTodos =
    filter === "All" ? todo : todo.filter((t) => t.todoType === filter);

  return (
    <section className="w-full mx-auto flex justify-center items-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full md:w-[75%] lg:w-[58%] xl:w-[60%]">
            <div className="md:fixed right-0 md:right-20 pt-8">
              <select
                id="filter"
                value={filter}
                onChange={handleFilterChange}
                className="border-gray-300 p-2 rounded shadow-md"
              >
                <option value="All">All</option>
                <option value="Personal">Personal</option>
                <option value="Professional">Professional</option>
              </select>
              <div>
                <div className="bg-white p-3 rounded shadow-md tracking-wide mt-4 inline-block">
                  <h1>Todo Left = {total}</h1>
                </div>
              </div>
            </div>
            <div className="md:mt-40 md:mb-10 lg:mt-0 lg:mb-0">
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
