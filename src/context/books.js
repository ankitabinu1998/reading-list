import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider ({children}) {
    const [booksList,setBooksList] = useState([]);
  const [error,setError] = useState('');

  const getBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooksList(response.data);
  }


  const toggleErrorMsg = (msg) => {
    setError(msg);
    setTimeout(()=>{
      setError('');
    },3000);
  }

  const updateBook = async (newTitle,book) => {
    try {
      const response = await axios.put((`http://localhost:3001/books/${book.id}`),{
        title: newTitle
      });
      const newBooksList = booksList.map(bookInList => {
        if (bookInList.id === book.id) {
            return {...response.data};
        }
        return bookInList;
    })
      setBooksList(newBooksList);
    } catch (e) {
      toggleErrorMsg(`Updating book failed: ${e.message}`);
    }

}
const deleteBook = async (book) => {
  try {
    await axios.delete(`http://localhost:3001/books/${book.id}`);
    setBooksList(booksList.filter(bookInList => bookInList.id !== book.id));
  } catch (e) {
    toggleErrorMsg(`Deleting book failed: ${e.message}`);
  }
}
  const createBook = async(title) => {
    try {
        const response = await axios.post('http://localhost:3001/books',{
        title: title
      });
      setBooksList([...booksList,response.data]);
    } catch(e) {
      toggleErrorMsg(`Adding book failed: ${e.message}`);
    }
  }
  const valuetoReturn = {getBooks,error,updateBook,createBook,deleteBook,booksList};
    return (
        <BookContext.Provider value={valuetoReturn}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContext;
export {Provider};