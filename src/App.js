import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Country from "./pages/Country";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:id", element: <Country /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
