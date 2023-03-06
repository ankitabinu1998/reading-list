import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default function BookEdit (props) {
    const {setBooksList,book,booksList} = props;
    const [isEdit,setIsEdit] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const onEditBook = () => {
        setIsEdit(!isEdit);
    }
    const onSubmitNewTitle = (event) => {
        event.preventDefault();;
        const newBooksList = booksList.map(bookInList => {
            if (bookInList.id === book.id) {
                bookInList.title = newTitle;
            }
            return bookInList;
        })
        setBooksList(newBooksList);
        setNewTitle('');
        setIsEdit(!isEdit);
    }
    const onDeleteBook = () => {
        setBooksList(booksList.filter(bookInList => bookInList.id !== book.id));
        setIsEdit(false);
    }

    return (
        <div>
            <Button className="me-1" variant="secondary" onClick={onEditBook}><i className="icon-edit"></i></Button>
            <Button variant="light" onClick={onDeleteBook}>x</Button>
            {isEdit &&
                <form onSubmit={onSubmitNewTitle}>
                    <Form.Control className="mb-2 mt-2"  type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
                    <Button type="submit">Save</Button>
                </form>
            }
        </div>
    )
}