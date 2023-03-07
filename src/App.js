import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

function App() {
  const [booksList,setBooksList] = useState([]);
  const [error,setError] = useState('');

  const getBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooksList(response.data);
  }
  useEffect(()=>{
    getBooks();
  },[])

  const toggleErrorMsg = (msg) => {
    setError(msg);
    setTimeout(()=>{
      setError('');
    },3000);
  }

  const updateBook = async (newTitle,book) => {
    try {
      await axios.put((`http://localhost:3001/books/${book.id}`),{
        title: newTitle
      });
      const newBooksList = booksList.map(bookInList => {
        if (bookInList.id === book.id) {
            return {...bookInList,title:newTitle};
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
  return (
    <>
      <Container>
        { error && <Row>
          <Col lg={12} className="mt-3 mb-3">
            <Alert variant='danger'>{error}</Alert>
          </Col>
        </Row>}
        <Row>
          <Col lg={12} className="mt-3 mb-3">
            <BookList updateBook={updateBook} deleteBook={deleteBook} booksList={booksList} />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col lg={12}><BookCreate createBook={createBook}/></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
