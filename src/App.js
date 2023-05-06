import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowTodo from "./components/ShowTodo";
import Header from "./components/Header";
import Todo from "./components/Todo";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ShowTodo />} />
        <Route path="/createTodo" element={<Todo />} />
        <Route path="/updateTodo/:id" element={<UpdateTodo />} />
      </Routes>
    </Router>
  );
}

export default App;
