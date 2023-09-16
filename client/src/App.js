import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Settings from "./pages/Settings";
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route, Link, Outlet} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog"
import Highlight from "./pages/Highlight"
import Duesseldorf from "./pages/duesseldorf";
import Tokyo from "./pages/tokyo";
import Solotraveltips from "./pages/SoloTravelTips";
import TopRatedPlaces from "./pages/TopRatedPlaces";
import Germany from "./pages/Germany";
import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

//
const router = createBrowserRouter([
  {
    // Home Page
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/duesseldorf",
        element: <Duesseldorf />,
      },
      {
        path: "/tokyo",
        element: <Tokyo />,
      },
      {
        path: "/blog",
        element: <Blog />,
      }, 
      {
        path: "/blobhighlight",
        element: <Highlight />,
      }, 
      {
        path: "/TopRatedPlaces",
        element: <TopRatedPlaces />,
      },
      {
        path: "/SoloTravelPlace",
        element: <Solotraveltips />,
      },
      {
        path: "/Germany",
        element: <Germany />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register", 
        element: <Register />,
      },
      {
        path: "/settings",
        element: <Settings />,
      }

    ],
  },
]);

// to route to other pages as in the folder
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );


  
}
export default App;
