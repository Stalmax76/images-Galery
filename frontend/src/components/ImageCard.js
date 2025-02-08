import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image, deleteImage }) => {
  const { urls, title, alt_description, description } = image;
  return (
    <Card style={{ width: '18rem', marginInline: 'auto', textAlign: 'center' }}>
      <Card.Img variant="top" src={urls.regular} style={{ width: '100%' }} />
      <Card.Body>
        <Card.Title style={{ textTransform: 'uppercase' }}>{title}</Card.Title>
        <Card.Text>{description || alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
