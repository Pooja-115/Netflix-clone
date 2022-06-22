// import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  Button
} from 'react-bootstrap'
import Logo from '../Assets/netflix.png'
import Classes from '../Navbar/Navbar.scss'
import { Link } from 'react-router-dom'

export default function NavbarMenu () {
  return (
    <div style={{ height: '60px' }}>
      <Navbar bg='' fixed='top' expand='lg' className={Classes.Navbar}>
        <Container>
          {/* <Navbar.Toggle aria-controls='navbarScroll' /> */}
          <Navbar.Collapse
            className='d-flex justify-content-between'
            id='navbarScroll'
          >
            <Nav
              className='my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Navbar.Brand as={Link} to='/'>
                <img src={Logo} alt='LOGO' style={{ maxWidth: '100px' }} />
              </Navbar.Brand>

              {/*  <NavDropdown title='Genres' id='drp-Genres'>
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>

            <Form className='d-flex'>
              <NavDropdown
                title={
                  <span>
                    <i
                      className='fa fa-globe'
                      style={{ marginRight: '10px' }}
                    ></i>
                    English
                  </span>
                }
                id='drp-Movies'
              >
                <NavDropdown.Item href='#action3'>Hindi</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>English</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              <Link to='/login' className='search-btn btn'>
                Sign In
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
