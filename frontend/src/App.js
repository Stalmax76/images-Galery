import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import Spinner from './components/Spinner';

// eslint-disable-next-line no-undef

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';
function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSavedImages();
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`${API_URL}/new-image?query=${search}`);
      setImages([{ ...res.data, title: search }, ...images]);
    } catch (error) {
      console.log(error);
    }
    setSearch('');
  };
  const handleDeleteImage = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/images/${id}`);
      if (res.data?.deleted_id) {
        setImages(images.filter((image) => image.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelSaveImage = async (id) => {
    const imageToBeSaved = images.find((image) => image.id === id);
    imageToBeSaved.saved = true;

    try {
      const res = await axios.post(`${API_URL}/images`, imageToBeSaved);
      if (res.data?.inserted_id) {
        setImages(
          images.map((image) =>
            image.id === id ? { ...image, saved: true } : image,
          ),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header title="Images Gallery" />
      {loading ? (
        <Spinner />
      ) : (
        <>
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
                    <ImageCard
                      image={image}
                      deleteImage={handleDeleteImage}
                      saveImage={handelSaveImage}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <Welcome />
            )}
          </Container>
        </>
      )}
    </div>
  );
}

App.propTypes = {};

export default App;
