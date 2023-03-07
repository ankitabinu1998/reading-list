import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
export default function BookCreate (props) {
    const [title,setTitle] = useState('');
    const {createBook} = props;
    const onBookSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }
    return (
        <div className="bg-dark p-3 rounded">
            <h1 className="text-white">Book Create Form</h1>
            <form onSubmit={onBookSubmit}>
                <Form.Control className="mb-2" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <Button variant='secondary' type="submit">Submit</Button>
            </form>
        </div>
    )
}