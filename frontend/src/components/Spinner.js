import React from 'react';
import SpinnerBootstrap from 'react-bootstrap/Spinner';

const spinnerStyle = {
  position: 'absolute',

  top: 'calc(50% - 1rem)',
  left: 'calc(50% - 1rem)',
};
const Spinner = () => {
  return (
    <SpinnerBootstrap
      animation="border"
      variant="primary"
      style={spinnerStyle}
    />
  );
};

export default Spinner;
