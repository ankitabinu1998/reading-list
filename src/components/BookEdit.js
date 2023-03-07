
import Form from 'react-bootstrap/Form'
import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function BookEdit (props) {
    const {addNewTitle,book,cancelForm} = props;
    const [newTitle, setNewTitle] = useState(book.title);

    const onSubmitNewTitle = ((event) => {
        event.preventDefault();
        addNewTitle(newTitle,book);
        setNewTitle('');
    });

    const onCancelFormEdit = () => {
        setNewTitle(book.title);
        cancelForm();
    }

    return (
        <>
            <form onSubmit={onSubmitNewTitle}>
                <Form.Control className="mb-2"  type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
                <Button  variant='secondary'className='me-2' type="submit">Save</Button>
                <Button  variant='light'className='me-2' type="reset" onClick={onCancelFormEdit}>Cancel</Button>
            </form>
        </>

    )
}