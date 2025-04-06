import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Search = ({ search, setSearch, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9} style={{ marginBlockEnd: '1rem' }}>
                <Form.Control
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  name="search"
                  placeholder="Search for new image..."
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
Search.propTypes = {
  handleSubmit: PropTypes.func,
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default Search;
