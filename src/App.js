import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert';
import useBooksContext from './hooks/useBooksContext';


function App() {
  const {getBooks,error} = useBooksContext();
  useEffect(()=>{
    getBooks();
  },[]);
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
            <BookList />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col lg={12}><BookCreate /></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
