import './App.css';
import { Navbar, Nav, Container, NavDropdown, Row, Col, Table, Button, Card, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTutorials, deleteTutorial, updateTutorial, createTutorial } from "./actions/tutorial.action";

function App() {

  const dispatch = useDispatch();
  const [tutorialData, setTutorialData] = useState({ title: '', description: '', published: '' });
  const [currentId, setCurrentId] = useState(0)

  useEffect(() => {
    try {
      dispatch(getTutorials());
    } catch (error) {
      console.log(error);
    }
  }, []);

  const tutorials = useSelector((state) => state.tutorials);

  const tutorialFormData = useSelector((state) => (currentId ? state.tutorials.find((data) => data._id === currentId) : null));

  useEffect(() => {
    if (tutorialFormData) setTutorialData(tutorialFormData);
  }, [tutorialFormData]);

  const clear = () => {
    setCurrentId(0);
    setTutorialData({ title: '', description: '', published: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createTutorial(tutorialData));
      clear();
    } else {
      dispatch(updateTutorial(currentId, tutorialData));
      clear();
    }
  };

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MERN Stack Blog Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='section' style={{ margin: "20px" }}>
        <Row>
          <Col md={8}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Published</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tutorials.map((tutorial, index) => (
                  <>
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{tutorial?.title}</td>
                      <td>{tutorial?.published}</td>
                      <td>{tutorial?.description}</td>
                      <td>
                        <div className="d-grid gap-2">
                          <Button variant="outline-warning" size="lg" style={{ margin: "1%" }} onClick={() => setCurrentId(tutorial._id)}>Update</Button>
                          <Button variant="outline-danger" size="lg" style={{ margin: "1%" }} onClick={() => dispatch(deleteTutorial(tutorial._id))}>Delete</Button>
                        </div>
                      </td>
                    </tr>

                  </>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Tutorial Form</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{currentId ? 'Edit' : 'Create'} Tutorial</Card.Subtitle>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formGroupTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Enter Title" value={tutorialData.title} onChange={(e) => setTutorialData({ ...tutorialData, title: e.target.value })} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" type="text" placeholder="Enter Description" value={tutorialData.description} onChange={(e) => setTutorialData({ ...tutorialData, description: e.target.value })} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPublish">
                    <Form.Label>Publish</Form.Label>
                    <Form.Control name="published" type="text" placeholder="Enter Publish" value={tutorialData.published} onChange={(e) => setTutorialData({ ...tutorialData, published: e.target.value })} />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" type='submit'>
                      Save
                    </Button>
                    <Button variant="secondary" size="lg" onClick={clear}>
                      Cancel
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
