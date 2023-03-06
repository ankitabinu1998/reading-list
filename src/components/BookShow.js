import BookEdit from './BookEdit'
export default function BookShow (props) {
    const {book, setBooksList, booksList} = props;
    return (
        <div>
            <h3>{book.title}</h3>
            <BookEdit book={book} setBooksList={setBooksList} booksList={booksList}/>
        </div>
    )
}