import { useState } from "react"
export default function BookCreate (props) {
    const [title,setTitle] = useState('');
    const {setBooksList, booksList} = props;
    const onBookSubmit = (event) => {
        event.preventDefault();
        setTitle('');
        const book = {
            id: booksList.length ? booksList[booksList.length - 1].id + 1 : 1,
            title: title
        };
        setBooksList([...booksList,book]);
    }
    return (
        <div>
            <h1>Book Create Form</h1>
            <form onSubmit={onBookSubmit}>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}