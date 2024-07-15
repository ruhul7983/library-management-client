import React from 'react';

const IssueTable = ({book,index}) => {
    const {bookName,category,title,stock,authorName,imgUrl} = book.book;

    return (
        <tr>
            <th>{index}</th>
            <td>{bookName}</td>
            <td>{title}</td>
            <td>{authorName}</td>
            <td>{category}</td>
            <td>{stock}</td>
            <td>x</td>
        </tr>
    );
};

export default IssueTable;