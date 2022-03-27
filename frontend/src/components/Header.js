import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Iness Note</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-sm-2"
                size="sm"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link className="text-decoration-none text-white" to="/mynotes">
                My Notes
              </Link>
            </Nav.Link>
            <NavDropdown title="Egeckmk" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="text-decoration-none text-dark" to="/profile">
                  My Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="text-decoration-none text-dark" to="/logout">
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
