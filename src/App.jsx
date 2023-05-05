import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBlok from "./components/SearchBlok";
import "./css/main.css";
import Home from "./pages/Home";
import Singlecountry from "./pages/Singlecountry";
import Primary from "./Primary";
function App() {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [dark, setDark] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Primary
          setData={setData}
          setSingleData={setSingleData}
          setDark={setDark}
          dark={dark}
        ></Primary>
      ),
      children: [
        {
          path: "/",
          element: (
            <Home
              setSingleData={setSingleData}
              setData={setData}
              data={data}
              dark={dark}
            ></Home>
          ),
        },
        {
          path: "/single",
          element: (
            <Singlecountry
              setSingleData={setSingleData}
              singleData={singleData}
              dark={dark}
            ></Singlecountry>
          ),
        },
        {
          path: "/error",
          element: (
            <Singlecountry
              setSingleData={setSingleData}
              singleData={singleData}
              dark={dark}
            ></Singlecountry>
          ),
        },
      ],
    },
  ]);
  return (
    <div className={`w-full h-screen ${dark ? "dark" : "light"}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
