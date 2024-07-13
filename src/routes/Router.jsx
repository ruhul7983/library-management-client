import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import BooksDetails from "../pages/BooksDetails/BooksDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/all-books",
            element:<AllBooks></AllBooks>
        },
        {
            path:"/books-details",
            element:<BooksDetails></BooksDetails>
        },
      ]
    },
  ]);

export default router;