import useAxiosSecure from "../../customHooks/useAxiosSecure";
import SidebarNav from "../Sidebar/Sidebar";


const AddCategory = () => {
    const useAxios = useAxiosSecure();
    const handleUploadFile = (e)=>{
        e.preventDefault();
        const form = e.target;
        const categoryName = form.categoryName.value;
        const value = categoryName;
        const imgUrl = form.imgUrl.value;
        const category = {categoryName,value,imgUrl};
        console.log(category);
        useAxios.post("/categories",category)
        .then(res=>{
            console.log(res.data.data);
        })
    }
    return (
        <div className="flex">
            <SidebarNav></SidebarNav>
            <div className="flex-1 max-w-3xl mx-auto">
            <form onSubmit={handleUploadFile}>
                <div className=" text-center  px-8 pb-14 bg-gray-600">
                    <h2 className="text-4xl font-bold mt-28 pt-10 text-black">Add Category</h2>
                    
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Category Name</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="categoryName" id="" required placeholder="Enter Category name" />
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Image Url</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="imgUrl" id="" required placeholder="Enter img url" />
                    </div>
                    
                    <button className="bg-base-300 py-3 px-5 mt-4 w-full rounded-sm">Add Category</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default AddCategory;