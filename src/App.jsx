import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import todosLoader from "./loaders/todosLoader";

// Create router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader: todosLoader
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
