import React from "react";
import Login from "./Login";
import Browse from "./homePageComponents/Browse";
import MovieInfo from "./movieInfoComponents/MovieInfo";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MoviesByActor from "./movieInfoComponents/MoviesByActor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {

  useOnlineStatus();
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movieinfo/:id",
      element: <MovieInfo />,
    },
    {
      path: "/castmovie/:id",
      element: <MoviesByActor />,
    },
  ]);

  return (
    <>
      
      <div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        stacked
        toastStyle={{ border: "1px solid #dadadaaa" }}
        // transition:Bounce
      />
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
};

export default Body;
