import { useState } from "react";
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
    }

    return (
        <div>
            <button onClick={onEditBook}>Edit</button>
            <button onClick={onDeleteBook}>Delete</button>
            {isEdit &&
                <form onSubmit={onSubmitNewTitle}>
                    <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            }
        </div>
    )
}