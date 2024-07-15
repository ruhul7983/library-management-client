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
import AddCategory from "../admin/AddCategory/AddCategory";
import BorrowDetails from "../pages/BooksDetails/BorrowDetails";
import IssueList from "../admin/IssueList/IssueList";
import YourIssueList from "../pages/YourIssueList/YourIssueList";
import PrivateRoute from "./PrivateRoute";

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
            element:<AllBooks></AllBooks>,
          
        },
        {
            path:"/book/:id",
            element:<BooksDetails></BooksDetails>,
            loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`),
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
            element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
            path:"/book-list",
            element:<BookList></BookList>
        },
        {
            path:"/add-book",
            element:<AddBook></AddBook>
        },
        {
            path:"/add-category",
            element:<AddCategory></AddCategory>
        },
        {
            path:"/issue-list",
            element:<IssueList></IssueList>
        },
        {
            path:"/your-issue-list",
            element:<PrivateRoute><YourIssueList></YourIssueList></PrivateRoute>
        },
        {
            path:"/book-details/borrow-details/:id",
            element:<BorrowDetails></BorrowDetails>,
            loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`),
        },

      ]
    },
  ]);

export default router;