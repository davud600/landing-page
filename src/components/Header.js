import { Navbar, Container, Nav } from "react-bootstrap"
import { Instagram, Linkedin } from "react-bootstrap-icons"
import "./components.css"

export default function Header() {
  return (
    <Navbar className="mt-0 mb-0 pt-0 pb-0" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand className="me-auto p-0" href="/">
          <p className="m-0 p-0 fw-bold h4">Data Minds</p>
        </Navbar.Brand>
        <Navbar.Toggle className="mt-1 mb-1" style={{ fontSize: "1rem" }} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mt-1" id="basic-navbar-nav">
          <Nav className="ms-auto text-end gap-3">
            <Nav.Link className="h5 pt-0 pb-2 me-1 mb-0 mt-0" href="#instagram"><Instagram /></Nav.Link>
            <Nav.Link className="h5 pt-0 pb-2 me-1 mb-0 mt-0" href="#linkedin"><Linkedin /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
