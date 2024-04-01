// eslint-disable-next-line no-unused-vars
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

export const Contactos = () => {
  const [names, setNames] = useState("");
  const [telephone, setTelephone] = useState("");
  const [image, setImage] = useState("");

  const setFormulario = async () => {
    const data = {
      names: names,
      telephone: telephone,
      image: image,
    };

    const response = await axios.post(
      "https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project",
      data
    );
    console.log(response);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="Names">
        <Form.Label>Nombres</Form.Label>
        <Form.Control
          type="Names"
          placeholder="Nombre"
          onChange={(e) => setNames(e.tarjeta.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Telephone">
        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="Telephone"
          placeholder="Tel"
          onChange={(e) => setTelephone(e.tarjeta.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Image">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="i"
          placeholder="Imagen"
          onChange={(e) => setImage(e.tarjeta.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={setFormulario}>
        Agregar
      </Button>
      {""}
    </Form>
  );
};