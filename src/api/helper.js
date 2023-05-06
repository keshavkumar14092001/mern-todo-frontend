import axios from "axios";

// Getting all Todo's from database:
export const getAllTodos = async () => {
  const res = await axios.get("/");

  if (res.status !== 200) {
    return console.log("Something went wrong.");
  }

  const data = res.data;
  return data;
};

// Getting a single Todo from the database:
export const getSingleTodo = async (id) => {
  const res = await axios.get(`/${id}`);

  if (res.status !== 200) {
    return console.log("Unable to update post");
  }

  const resData = await res.data;

  return resData;
};

// Creating a new Todo in the database:
export const createTodo = async (data) => {
  const res = await axios
    .post("/", {
      todo: data.todo,
      todoType: data.todoType,
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Something went wrong");
  }
  const resData = await res.data;
  return resData;
};

// Updateing the Todo in the database:
export const updateTodo = async (data, id) => {
  const res = await axios
    .put(`/${id}`, {
      todo: data.todo,
      todoType: data.todoType,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unable to Update");
  }

  const resData = await res.data;
  return resData;
};

// Deleting the Todo from the database:
export const deleteTodo = async (id) => {
  const res = await axios.delete(`${id}`);

  if (res.status !== 200) {
    return console.log("Unable to delete.");
  }

  const resData = await res.data;
  return resData;
};
