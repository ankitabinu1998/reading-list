import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import { useState } from 'react';
function App() {
  const [booksList,setBooksList] = useState([]);
  return (
    <div>
      <BookList booksList={booksList}/>
      <BookCreate setBooksList={setBooksList} booksList={booksList}/>
    </div>
  );
}

export default App;
