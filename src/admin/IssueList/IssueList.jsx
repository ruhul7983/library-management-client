import { useEffect, useState } from "react";
import SidebarNav from "../Sidebar/Sidebar";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import BookTable from "../BookList/BookTable";
import IssueTable from "./IssueTable";

const IssueList = () => {
    const [issue, setIssue] = useState([]);
    const useAxios = useAxiosSecure();
    useEffect(() => {
        useAxios.get("/issues-book")
            .then(res => setIssue(res.data));
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
                                issue.map((book,index) => <IssueTable key={book._id} book={book} index={index+1}></IssueTable>)
                            }
                            

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default IssueList;