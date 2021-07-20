import './style.css'
import {Container} from "@material-ui/core";
import {Navbar} from "react-bootstrap";


const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="light" className="navbar">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
        </>
    );
}
export default NavbarComponent;
