import React from 'react';
import { Navbar, Container, Nav, FormControl, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import Menu from './Menu';

const Header = () => {
  return (
    <div>
        <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto"></Nav>
          <FormControl type="text" placeholder="Tìm kiếm" className="mr-sm-2 form-control-lg" style={{width: '1959px'}} />
          <Button className='ms-2 fs-5' variant="outline-primary"><BsSearch /></Button>
          <Menu/>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </div>
  );
 
};

export default Header;
