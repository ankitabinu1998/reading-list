import BookEdit from './BookEdit'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
export default function BookShow (props) {
    const {book, setBooksList, booksList} = props;
    const [isEdit,setIsEdit] = useState(false);
    const onEditBook = () => {
        setIsEdit(true);
    }
    const addNewTitle = (newTitle) => {
        const newBooksList = booksList.map(bookInList => {
            if (bookInList.id === book.id) {
                return {...bookInList,title:newTitle};
            }
            return bookInList;
        })
        setBooksList(newBooksList);
        setIsEdit(false);
    }
    const onDeleteBook = () => {
        setBooksList(booksList.filter(bookInList => bookInList.id !== book.id));
    }
    const cancelForm = () => {
        setIsEdit(false);
    }
    const renderedBook = () => {
        return (
            <Card.Body className='d-flex justify-content-between'>
            <Card.Title className='text-capitalize'>{book.title}</Card.Title>
            <div>
                <Button className="me-1" variant="secondary" onClick={onEditBook}><i className="icon-edit"></i></Button>
                <Button variant="light" onClick={onDeleteBook}>x</Button>
            </div>
            </Card.Body>
            )
    }
    const renderedForm = () => {
        return (
            <Card.Body>
            <BookEdit book={book} addNewTitle={addNewTitle} cancelForm={cancelForm}/>
            </Card.Body>
            )
    }
    return (
        <Card style={{ width: '20rem',margin:'10px' }}>
            <Card.Img variant="top" src={`https://picsum.photos/seed/${book.id}/200/100`}/> 
            {isEdit ? renderedForm() : renderedBook()}
        </Card>
    )
}