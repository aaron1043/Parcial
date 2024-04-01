import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Lista_contactos } from "./components/Lista_contactos";
import { Contactos } from "./components/contacto";

function App() {
  const [contacto, setContact] = useState([]);
  const [flag, setFlag] = useState(false);

  const getContact = async () => {
    const response = await axios.get(
      "https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project"
    );
    console.log(response);
    setContact(response.data);
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <>
      <Header flag={flag} setFlag={setFlag} />
      {flag ? <Contactos /> : <Lista_contactos Lista_contactos={contacto} />}
      {}
    </>
  );
}

export default App
