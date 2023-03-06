import BookShow from "./BookShow";
export default function BookList (props) {
    const {booksList} = props;
    return (
        <div>
            <h1>List of Books</h1>
            {booksList.map((book,index) => {
                return <BookShow key={index} book={book}/>
            })}
        </div>
    )
}