import BookShow from "./BookShow";
export default function BookList (props) {
    const {booksList,setBooksList} = props;
    return (
        <div>
            <h1>List of Books</h1>
            <div className="d-flex flex-wrap justify-content-center">
            {booksList.map((book,index) => {
                return <BookShow key={index} book={book} booksList={booksList} setBooksList={setBooksList}/>
            })}
            </div>
            {!booksList.length && <p>Use below form to add books</p>}
        </div>
    )
}