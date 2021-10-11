import React from 'react';
import {
  Container,
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand>CrudAPI Mision Tic -  Joan Sebastián Ramírez</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )

};

export default Footer;