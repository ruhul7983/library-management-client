import Navbar from "../Shared/Navbar/Navbar";
import books from "../../assets/books (1).png";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const BooksDetails = () => {
    const book = useLoaderData();
    const {bookName,category,title,stock,authorName,imgUrl} = book;
    return (
        <div >
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto bg-slate-600 items-center my-6 rounded ">
                <div className="p-6">
                    <img className="w-full h-96 rounded" src={imgUrl} alt="" />
                </div>
                <div className="p-6 space-y-4 text-white">
                    <h1 className="text-2xl font-semibold">{bookName}</h1>
                    <p>{title}</p>
                    <p>By - {authorName}</p>
                    <p >Category: <span className="px-3 py-2 bg-amber-100 text-black rounded">{category}</span></p>
                    <p>In Stock : {stock} Copies Available</p>
                        <div className="px-4 py-2 border border-white w-4/6 rounded"><Link>PDF Download</Link></div>
                        <div className="px-4 py-2 border border-white text-black w-4/6 rounded bg-[#fff0e7]"><Link>Borrow from library</Link></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BooksDetails;