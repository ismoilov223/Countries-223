import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Singlecountry from "./pages/Singlecountry.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     children:[
//       {
//         path:'/',
//         element:<Home></Home>
//       },
//       {
//         path:'/single',
//         element:<Singlecountry></Singlecountry>
//       },
//     ]
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
