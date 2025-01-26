import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <Navbar bg='light' data-bs-theme='light'>
      <Container fluid>
        <Navbar.Brand href='/'>{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
