import React from 'react';
import {Nav, Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router';

export default function(){
  return(
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand fixedTop>
          <Link to='/'><h4>Willow</h4></Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <Navbar.Form>
            <FormGroup>
              <FormControl type="text" placeholder="Search Memorials" />
            </FormGroup>
            <Button bsStyle="info" type='submit' bsSize='xsmall'>Search</Button>
          </Navbar.Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}
