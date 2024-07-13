import { Link } from "react-router-dom";
import books from "../../assets/books (1).png";

const Books = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl py-3 text-center font-bold my-3">Our Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 text-black">
                <div className="px-3 py-2 bg-[#fff7f1] text-center rounded">
                    <img className="w-32 mx-auto" src={books} alt="" />
                    <h1 className="font-semibold text-lg">Build your career</h1>
                    <p className="text-gray-600">Stock Available</p>
                </div>
                <div className="px-3 py-2 bg-[#fff7f1] text-center">
                    <img className="w-32 mx-auto" src={books} alt="" />
                    <h1 className="font-semibold">Build your career</h1>
                    <p>Stock Available</p>
                </div>
                <div className="px-3 py-2 bg-[#fff7f1] text-center">
                    <img className="w-32 mx-auto" src={books} alt="" />
                    <h1 className="font-semibold">Build your career</h1>
                    <p>Stock Available</p>
                </div>
                <div className="px-3 py-2 bg-[#fff7f1] text-center">
                    <img className="w-32 mx-auto" src={books} alt="" />
                    <h1 className="font-semibold">Build your career</h1>
                    <p>Stock Available</p>
                </div>
            </div>
            <div className="text-center">
               <Link to={'/all-books'}> <button className="btn btn-secondary my-5">See All</button></Link>
            </div>
        </div>
    );
};

export default Books;