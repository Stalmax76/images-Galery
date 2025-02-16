import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../img/ig-1.svg';

import PropTypes from 'prop-types';

const navbarStyle = {
  backgroundColor: 'lightgray',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '10rem', maxHeight: '2rem' }} />
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
