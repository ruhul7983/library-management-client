import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosSecure from '../../customHooks/useAxiosSecure';
import Navbar from '../Shared/Navbar/Navbar';
const BorrowDetails = () => {
    const book = useLoaderData();
    const {bookName,authorName,stock,_id} = book;
    const useAxios = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const handleBorrowBook = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const issueDate = form.issueDate.value;
        const returnDate = form.returnDate.value;
        const intStock = parseInt(stock);
        const stockNeg = intStock-1;
        const issueDetails = {bookName,authorName,stockNeg,name,email,issueDate,returnDate};
        console.log(issueDetails);
        const updateBook = {stockNeg,_id};
        useAxios.patch("/book-update",updateBook)
        .then(res=>{
            console.log(res.data);
        });
        useAxios.post("/issues-book",issueDetails)
        .then(res=>{
            console.log(res.data);
        });
        
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-6xl mx-auto'>
            <form onSubmit={handleBorrowBook}>
                <div className=" text-center  px-8 pb-14 bg-gray-600">
                    <h2 className="text-4xl font-bold mt-28 pt-10 text-black">Borrow Now</h2>
                    
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Your Name</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="name" id="" required placeholder="Enter your name" />
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Email</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="email" id="" defaultValue={user?.email} readOnly required placeholder="Enter your name" />
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Issue date</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="date" name="issueDate" id="" required placeholder="Enter Issue Date" />
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Return date</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="date" name="returnDate" id="" required placeholder="Enter Return Date" />
                    </div>

                    
                   
                    <button className="bg-base-300 py-3 px-5 mt-4 w-full rounded-sm">Borrow Now</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default BorrowDetails;