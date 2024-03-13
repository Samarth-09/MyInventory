import "./App.css";
import AddStock from "./Components/AddStock/AddStock";
import Inventory from "./Components/Inventory";
import AddSales from "./Components/AddSales/AddSales";
import Profile from "./Components/Profile/Profile";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";

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
    {
      path: "/profile",
      element: <Profile/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login/>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
