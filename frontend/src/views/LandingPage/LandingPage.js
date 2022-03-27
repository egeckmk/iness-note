import { Button, Card, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row className="d-flex justify-content-center">
          <Card className="w-75" style={{ height: "450px" }}>
            <Card.Body>
              <div className="text-center">
                <h1 style={{ fontSize: "64pt", color: "#000000" }}>
                  Welcome to Iness Note
                </h1>
                <p style={{ fontSize: "20pt" }}>
                  One Safe place for on your notes.
                </p>
              </div>
              <div className="buttonContainer">
                <a href="/login">
                  <Button variant="outline-dark">Log In</Button>
                </a>
                <a href="/register">
                  <Button variant="outline-info">Sign Up</Button>
                </a>
              </div>
            </Card.Body>
          </Card>

          {/* <div className="intro-text">
            <div>
              <h1>Welcome to Iness Note</h1>
              <p>One Safe place for on your notes.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button variant="outline-secondary">Log in</Button>
              </a>
              <a href="/register">
                <Button variant="secondary">Sign up</Button>
              </a>
            </div>
          </div> */}
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
