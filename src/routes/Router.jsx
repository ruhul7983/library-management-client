import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import BooksDetails from "../pages/BooksDetails/BooksDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../admin/Dashboard/Dashboard";
import BookList from "../admin/BookList/BookList";
import AddBook from "../admin/AddBook/AddBook";

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
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>
        },
        {
            path:"/book-list",
            element:<BookList></BookList>
        },
        {
            path:"/add-book",
            element:<AddBook></AddBook>
        },

      ]
    },
  ]);

export default router;