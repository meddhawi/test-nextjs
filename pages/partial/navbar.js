import { Container, Collapse, Nav, Navbar, NavDropdown } from 'react-bootstrap';


export default function Navbars(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/contact">Contact Us!</Nav.Link>
                        <NavDropdown title="Others" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="profile-list">See other user</NavDropdown.Item>
                            <NavDropdown.Divider />
                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            
                        </NavDropdown>
                        </Nav>
                        <Nav>
                            
                            {/* <Nav.Link onClick={() => firebase.auth().signOut()}>Sign out</Nav.Link>

                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    )
}