import React from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import {
  Accordion,
  Badge,
  Button,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import notes from "../../data/notes";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  return (
    <button type="button" style={{ border: "none" }} onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      //TODO: ADD Delete Method.
    }
  };

  return (
    <MainScreen title="Welcome back egeckmk...">
      <Link to="createNote">
        <Button className="rounded ms-3" variant="primary" size="sm">
          Create New Note
        </Button>
      </Link>

      {notes.map((note) => (
        <Accordion>
          <Card bg="light" className="m-3">
            <Card.Header className="d-flex justify-content-between">
              <CustomToggle eventKey="0">{note.title}</CustomToggle>
              <div>
                <Link to={`/note/${note._id}`}>
                  <Button variant="warning" size="sm" className="rounded ms-2">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  size="sm"
                  className="rounded ms-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Badge bg="primary">{note.category}</Badge>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    CreatedOn - Date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
