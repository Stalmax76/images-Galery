import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import PropTypes from 'prop-types';

const navbarStyle = {
  backgroundColor: 'lightblue',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
// eslint-disable-next-line no-undef
export const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
