import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';

// Create router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
