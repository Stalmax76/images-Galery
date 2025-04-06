import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image, deleteImage, saveImage }) => {
  const { urls, title, alt_description, description, id, saved } = image;

  return (
    <Card style={{ width: '18rem', marginInline: 'auto', textAlign: 'center' }}>
      <Card.Img variant="top" src={urls.regular} style={{ width: '100%' }} />
      <Card.Body>
        <Card.Title style={{ textTransform: 'uppercase' }}>
          {title?.toUpperCase()}{' '}
        </Card.Title>
        <Card.Text>{description || alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(id)}>
          Delete
        </Button>{' '}
        {!saved && (
          <Button variant="secondary" onClick={() => saveImage(id)}>
            Save
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
