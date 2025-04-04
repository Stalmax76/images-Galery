import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcom';

// eslint-disable-next-line no-undef

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';
function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    if (!search) return;

    try {
      const res = await axios.get(`${API_URL}/new-image?query=${search}`);
      setImages([{ ...res.data, title: search }, ...images]);
    } catch (error) {
      console.log(error);
    }
    setSearch('');
  };
  const handleDeleteImage = (id) => {
    const newImages = images.filter((image) => image.id !== id);
    setImages(newImages);
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSearchSubmit}
      />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {images.map((image) => (
              <Col key={image.id} className="mb-4">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}

App.propTypes = {};

export default App;
