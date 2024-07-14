import { useEffect, useState } from 'react';
import book from '../../assets/book.png';
import useAxiosSecure from '../../customHooks/useAxiosSecure';

const Categories = () => {
    const [categories,setCategories] = useState([]);
    const useAxios = useAxiosSecure();

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
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl py-3 text-center font-bold">Browse By Genre</h1>

            <div className='grid grid-cols-1 md:grid-cols-7 gap-3 '>
                {
                    categories.map(category=><div key={category._id} className="w-32 border h-32 flex flex-col justify-center rounded-full hover:border-blue-300 transition-all mx-auto md:mx-0">
                        <img className="w-16 h-16 mx-auto" src={category.imgUrl} alt="" />
                        <h1 className="mx-auto text-center font-semibold">{category.categoryName}</h1>
                    </div>)
                }
                
                
            </div>

        </div>
    );
};

export default Categories;