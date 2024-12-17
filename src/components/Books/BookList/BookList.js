import {useEffect, useState} from "react";
import "./BookList.css";
import Star from "./Star/Star";
import {Form} from "react-bootstrap";

const data = [
    {
        id: 1,
        title: 'Book 1',
        author: 'Author 1',
        pages: 100,
        star: 4,
        public: true
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        pages: 200,
        star: 5,
        public: true
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Author 3',
        pages: 300,
        star: 2,
        public: false
    }
]

function BookList(props) {
    // Hook
    const [books, setBooks] = useState(data);
    const [pageTitle, setPageTitle] = useState("Book List");
    const [number, setNumber] = useState(1)
    const [message, setMessage] = useState("")
    // useEffect == componentDidMount + componentWillUnmount + componentDidUpdate
    useEffect(() => {
        // componentDidMount
        console.log("componentDidMount")

        return () => {
            // componentWillUnmount
            console.log("componentWillUnmount")
        }

    }, [])

    useEffect(() => {

    }, [books, number]);

    const handleDeleteBook = (index) => {
        const newBooks = [...books];
        newBooks.splice(index, 1);
        setBooks(newBooks);
    }

    const handlePrivateBook = (id) => {
        // findIndex tim index cua phan tu trong mang thoa man dk
        const indexBook = books.findIndex(item => item.id === id);
        // lay phan tu trong theo index
        const currentBook = books[indexBook]
        // cap nhat lai thuoc tinh public
        currentBook.public = !currentBook.public;
        // cap nhat lai state
        setBooks([...books]);
    }

    return (
        <div>
            <h1>{pageTitle}</h1>
            <p>{number}</p>
            <p>{message}</p>
            <table className="table-book-list">
                <thead>
                <tr className="table-header">
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Star</th>
                    <th>Public</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {books.map((item, index) => (
                    <tr key={index}>
                        <td>{ index + 1}</td>
                        <td>{ item.title }</td>
                        <td>{ item.author }</td>
                        <td>{ item.pages }</td>
                        <td>
                            <Star totalStar={item.star}/>
                        </td>
                        <td>
                            <Form>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch"
                                    checked={item.public}
                                    label={item.public ? "Public" : "Private"}
                                    onChange={() => handlePrivateBook(item.id)}
                                />
                            </Form>
                        </td>
                        <td>
                            <button onClick={() => handleDeleteBook(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;