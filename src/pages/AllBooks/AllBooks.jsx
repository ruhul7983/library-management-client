import { useEffect, useState } from "react";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import BookCard from "../components/BookCard";
import Navbar from "../Shared/Navbar/Navbar";

const AllBooks = () => {
    const [books,setBooks] = useState([]);
    const useAxios = useAxiosSecure();
    useEffect(()=>{
        useAxios.get("/books")
        .then(res=>setBooks(res.data));
    },[useAxios])
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 text-black max-w-7xl my-3 mx-auto">
                {
                    books.slice(0,7).map(book=><BookCard key={book._id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;