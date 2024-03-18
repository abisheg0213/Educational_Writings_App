import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "./navbar.css"
import { useNavigate } from 'react-router-dom';
function NavbarCom({type,uname}) {
    let nav="/newpost/"+uname
    const navi=useNavigate()
  return (
    <>
      <Navbar className="navcomp" bg="dark" data-bs-theme="dark">
        <Container> 
          <Navbar.Brand href="/">MindFull Minds</Navbar.Brand>
          <Nav className="me-auto">
            {type=="inner" ? <Nav.Link href={nav}>New Post</Nav.Link> :<></> }
            {type=="inner" ? <Nav.Link href="/">My Writings</Nav.Link> : <></>}
          </Nav>
          {type=="inner" ? <p>{uname}</p> :<></> }
         {type=="inner" ? <Button variant="secondary" onClick={(e)=>{e.preventDefault()
            navi('/')}}>Sign Out</Button> :<Button variant="secondary" onClick={(e)=>{e.preventDefault()
            navi('/login')}}>Sign In</Button> }
        </Container>
        
      </Navbar>

    
    </>
  );
}

export default NavbarCom;