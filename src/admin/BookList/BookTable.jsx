import useAxiosSecure from "../../customHooks/useAxiosSecure";

const BookTable = ({ book,index }) => {
    const useAxios = useAxiosSecure();
    const {bookName,category,title,stock,authorName,imgUrl,_id} = book;
    const handleDelete =(_id)=>{
        console.log(_id);
        useAxios.delete(`/delete-book/${_id}`,)
        .then(res=>{
            console.log(res.data);
        })

    }   
    return (
        <tr>
            <th>{index}</th>
            <td>{bookName}</td>
            <td>{title}</td>
            <td>{authorName}</td>
            <td>{category}</td>
            <td>{stock}</td>
            <td><button className="p-2" onClick={()=>handleDelete(_id)}>x</button></td>
        </tr>
    );
};

export default BookTable;