import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import logo from './fox.png';
import './Nav.css';

const NavTemplate = props => {
  return (
    <Navbar className="mb-5 Nav">
      <Container>
        <NavbarBrand
          onClick={() => props.handlePageRender('Timeline')}
        >
          <img src={logo} alt="Fox Logo" className="Logo" />
          Chatter
        </NavbarBrand>
        
        {
          (props.displayName !== null)
            ? <Nav pills>
                <NavItem className='mr-3'>
                  <NavLink
                    onClick={() => props.handlePageRender('AddMessage')}
                    className="Button text-white"
                  >
                    Add Message
                  </NavLink>
                </NavItem> 
                <NavItem>
                  <NavLink
                    onClick={props.doSignOut}
                    className="Button text-white"
                  >
                    Sign Out
                  </NavLink>
                </NavItem>      
              </Nav>
            : <Nav pills>
                <NavItem>
                  <NavLink
                    onClick={() => props.handlePageRender('AddMessage')}
                    className="Button text-white"
                  >
                    Add Message
                  </NavLink>
                </NavItem>
              </Nav>
        }
      </Container>
    </Navbar>
  );
}

export default NavTemplate;