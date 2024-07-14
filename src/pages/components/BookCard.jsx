import { Link } from "react-router-dom";

const BookCard = ({book}) => {
    const {bookName,category,title,stock,authorName,imgUrl, _id} = book;
    return (
        <Link to={`/book/${_id}`} className="px-3 py-2 bg-[#fff7f1] text-center rounded">
                    <img className="w-32 mx-auto" src={imgUrl} alt="" />
                    <h1 className="font-semibold text-lg">{bookName}</h1>
                    <p className="text-gray-600">Stock Available: {stock}</p>
                </Link>
    );
};

export default BookCard;