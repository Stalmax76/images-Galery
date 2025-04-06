import React from 'react';
import { Button, Container } from 'react-bootstrap';
const Welcome = () => {
  return (
    <Container className="text-center p-4 my-5 border rounded bg-light">
      <h1>Welcome to Images Gallery</h1>
      <p>
        This is a simple application that retrieves photos using the Unsplash
        API. In order to start enter any search term in the input field above.
      </p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        View Images
      </Button>
    </Container>
  );
};
export default Welcome;
