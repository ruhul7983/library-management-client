import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import Navbar from "../Shared/Navbar/Navbar";

const YourIssueList = () => {
    //user email
    const {user} = useContext(AuthContext);
    const [issueList,setIssueList] = useState([]);
    const useAxios = useAxiosSecure();
    // load data
    useEffect(()=>{
        useAxios.get(`/your-issues-book?email=${user?.email}`)
        .then(res=>setIssueList(res.data))
        .catch(err=>{
            console.log("err ",err);
        })
        
    },[useAxios,user])

    // fetch(`http://localhost:5000/your-issues-book?email=${user?.email}`, {
    //     method: 'GET',
    //     credentials: 'include', // This ensures cookies are sent
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error('Error:', error));
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-7 ml-5 flex-1">
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Name</th>
                                <th>Author Name</th>
                                <th>Issue Date</th>
                                <th>Return Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                issueList.map((book,index) => <tr key={book._id}>
                                <th>{index+1}</th>
                                <td>{book.bookName}</td>
                                <td>{book.authorName}</td>
                                <td>{book.issueDate}</td>
                                <td>{book.returnDate}</td>
                                <td>x</td>
                            </tr>)
                            }
                            

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default YourIssueList;