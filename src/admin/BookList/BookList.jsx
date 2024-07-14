import { useEffect, useState } from "react";
import SidebarNav from "../Sidebar/Sidebar";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import BookTable from "./BookTable";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const useAxios = useAxiosSecure();
    useEffect(() => {
        useAxios.get("/books")
            .then(res => setBooks(res.data));
    }, [useAxios])
    return (
        <div className="flex">
            <SidebarNav></SidebarNav>
            <div className="mt-7 ml-5 flex-1">
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((book,index) => <BookTable key={book._id} book={book} index={index+1}></BookTable>)
                            }
                            <tr>

                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookList;