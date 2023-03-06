import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
function App() {
  const [booksList,setBooksList] = useState([]);
  const createBook = (title) => {
    const book = {
      id: booksList.length ? booksList[booksList.length - 1].id + 1 : 1,
      title: title
  };
    setBooksList([...booksList,book]);
  }
  return (
    <Container>
      <Row>
        <Col lg={12} className="mt-3 mb-3"> <BookList booksList={booksList} setBooksList={setBooksList} /></Col>
        <Col lg={12}><BookCreate createBook={createBook}/></Col>
      </Row>
    </Container>
  );
}

export default App;
