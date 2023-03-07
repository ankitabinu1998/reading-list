import BookShow from "./BookShow";
import { useContext } from "react";
import BookContext from "../context/books";
export default function BookList () {
    const {booksList} = useContext(BookContext);

    return (
        <div>
            <h1>List of Books</h1>
            <div className="d-flex flex-wrap justify-content-center">
            {booksList.map((book) => {
                return <BookShow key={book.id} book={book} />
            })}
            </div>
            {!booksList.length && <p>Use below form to add books</p>}
        </div>
    )
}