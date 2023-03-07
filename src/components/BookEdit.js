
import Form from 'react-bootstrap/Form'
import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function BookEdit (props) {
    const {addNewTitle,book} = props;
    const [newTitle, setNewTitle] = useState(book.title);

    const onSubmitNewTitle = ((event) => {
        event.preventDefault();
        addNewTitle(newTitle);
        setNewTitle('');
    });

    return (
        <form onSubmit={onSubmitNewTitle}>
            <Form.Control className="mb-2"  type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
            <Button  variant='secondary' type="submit">Save</Button>
        </form>
    )
}