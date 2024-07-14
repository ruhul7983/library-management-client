import { useEffect, useState } from "react";
import SidebarNav from "../Sidebar/Sidebar";
import useAxiosSecure from "../../customHooks/useAxiosSecure";


const AddBook = () => {
    const useAxios = useAxiosSecure();
    const [categories,setCategories] = useState([]);

    const handleAddBook = (e) =>{
        e.preventDefault();
        const form = e.target;
        const bookName = form.bookName.value;
        const category = form.category.value;
        const title = form.title.value;
        const stock = form.stock.value;
        const authorName = form.authorName.value;
        const imgUrl = form.imgUrl.value;
        const book = {bookName,category,title,stock,authorName,imgUrl};
        console.log(book);
        useAxios.post("/books",book)
        .then(res=>{
            console.log(res.data);
        })
    }

    useEffect(()=>{
        // fetch("categories.json")
        // .then(res=>res.json())
        // .then(data=>setCategories(data));
        useAxios.get("/categories")
        .then(res=>{
            console.log(res.data);
            setCategories(res.data);
        })
    },[useAxios])

    return (
        <div className="flex">
            <SidebarNav></SidebarNav>
            <div className="flex-1 max-w-3xl mx-auto">
            <form onSubmit={handleAddBook}>
                <div className=" text-center  px-8 pb-14 bg-gray-600">
                    <h2 className="text-4xl font-bold mt-28 pt-10 text-black">Add Book</h2>
                    <div className="text-left">
                        <label className="font-semibold mt-9">
                            Select Category: <br />
                            <select className="py-3 pl-2 pr-4 w-full" name="category">
                                {
                                    categories.map(category=><option key={category._id} value={category.value}>{category.categoryName}</option>)
                                }
                                
                                
                            </select>
                        </label>
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Book Name</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="bookName" id="" required placeholder="Enter Book name" />
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Book Title</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="title" id="" required placeholder="Enter Title" />
                    </div>

                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Stock</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="number" name="stock" id="" required placeholder="Enter stock" />
                    </div>

                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Author Name</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="authorName" id="" required placeholder="Enter Author Name" />
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Image Upload</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="imgUrl" id="" required placeholder="Enter Image Link" />
                    </div>
                    
                   
                    <button className="bg-base-300 py-3 px-5 mt-4 w-full rounded-sm">Add Book</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default AddBook;