/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";


  import { Card, Button } from 'react-bootstrap';

  export const Lista_contactos = ({ Lista_contactos }) => {
  return (
    <div className="d-flex flex-wrap">
      {Lista_contactos.map((i, index) => (
        <Card key={index} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={i.image} alt={i.image} />
          <Card.Body>
            <Card.Title>{i.names}</Card.Title>
            <Card.Text>
              <strong>Telefono:</strong> {i.telephone}
            </Card.Text>
            <Button variant="primary">Ver detalles</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};


