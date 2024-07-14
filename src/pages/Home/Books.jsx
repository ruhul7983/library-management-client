import { Link } from "react-router-dom";
import books from "../../assets/books (1).png";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import BookCard from "../components/BookCard";

const Books = () => {
    const [books,setBooks] = useState([]);
    const useAxios = useAxiosSecure();
    useEffect(()=>{
        useAxios.get("/books")
        .then(res=>setBooks(res.data));
    },[useAxios])
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl py-3 text-center font-bold my-3">Our Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 text-black">
                {
                    books.slice(0,7).map(book=><BookCard key={book._id} book={book}></BookCard>)
                }
            </div>
            <div className="text-center">
               <Link to={'/all-books'}> <button className="btn btn-secondary my-5">See All</button></Link>
            </div>
        </div>
    );
};

export default Books;