import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/todo.png";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-transparent/70 shadow-md">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:block">
            <Link to={"/"}>
              <div className="bg-white p-2 rounded-md flex justify-center items-center shadow-md hover:bg-gray-200 transition">
                <img src={Logo} alt="loading" className="h-[50px] w-[50px]" />
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="mt-3 space-y-2 md:hidden">
              <Link
                to={"/"}
                className="inline-block w-full px-4 py-2 text-center text-gray-200 bg-gray-800 rounded-md shadow hover:bg-gray-100 transition"
              >
                Home
              </Link>
              <Link
                to={"/createTodo"}
                className="inline-block w-full px-4 py-2 text-center text-gray-200 bg-gray-800 rounded-md shadow hover:bg-gray-100 transition"
              >
                CreateTodo
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:inline-block space-x-2">
          <Link
            className="px-4 py-2 text-gray-200 bg-gray-800 rounded-md font-semibold tracking-wide shadow-md hover:bg-gray-100 hover:text-gray-800 transition"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="px-4 py-2 text-gray-200 bg-gray-800 rounded-md font-semibold tracking-wide shadow-md hover:bg-gray-100 hover:text-gray-800 transition"
            to={"/createTodo"}
          >
            CreateTodo
          </Link>
        </div>
      </div>
    </nav>
  );
}
