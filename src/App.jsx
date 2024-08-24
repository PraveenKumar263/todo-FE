import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import todosLoader from "./loaders/todosLoader";
import todoLoader from "./loaders/todoLoader";
import Todo from './components/Todo';
import AddTodo from "./components/AddTodo";

// Create router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader: todosLoader
  },
  {
    path: "/todos/:id",
    element: <Todo />,
    loader: todoLoader
  },
  {
    path: "/add-todo",
    element: <AddTodo />
  },
  {
    path: "/edit-todo/:id",
    element: <AddTodo />
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
