import { Link } from "react-router-dom";
import SidebarNav from "../Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex">
            <SidebarNav></SidebarNav>
            <div className="mt-7 ml-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-3">
                    <div className="px-4 py-3 bg-purple-600 rounded text-white text-center">
                        <h1 className="text-2xl font-bold">Total Books Available</h1>
                        <p>1000</p>
                    </div>
                    <div className="px-4 py-3 bg-purple-600 rounded text-white text-center">
                        <h1 className="text-2xl font-bold">Total Books Borrowed</h1>
                        <p>1000</p>
                    </div>
                    <div className="px-4 py-3 bg-purple-600 rounded text-white text-center">
                        <h1 className="text-2xl font-bold">Books Borrowed Request</h1>
                        <p>1000</p>
                    </div>
                   
                </div>

                <div className="my-6">
                    <Link to={"/add-book"} className="px-3 py-2 rounded bg-blue-400 text-black ">Add Book</Link>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;