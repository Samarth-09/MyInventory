import "./App.css";
import AddStock from "./Components/AddStock/AddStock";
import Inventory from "./Components/Inventory";
import AddSales from "./Components/AddSales/AddSales";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Inventory />,
    },
    {
      path: "/inventory",
      element: <Inventory />,
    },
    {
      path: "/addStock",
      element: <AddStock />,
    },
    {
      path: "/addSales",
      element: <AddSales />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
