import BookEdit from './BookEdit'
import Card from 'react-bootstrap/Card';
export default function BookShow (props) {
    const {book, setBooksList, booksList} = props;
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1392740267/vector/open-book-line-art.jpg?s=612x612&w=0&k=20&c=spk1njg8DdUNny_XIqVsXsBrDLjarRkLibE3mqYeMqA="/> 
            <Card.Body className='d-flex justify-content-between'>
                <Card.Title>{book.title}</Card.Title>
                <BookEdit book={book} setBooksList={setBooksList} booksList={booksList}/>
            </Card.Body>
        </Card>
    )
}