import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import todosLoader from "./loaders/todosLoader";
import todoLoader from "./loaders/todosLoader";
import Todo from './components/Todo';

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
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
