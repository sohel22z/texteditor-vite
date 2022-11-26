import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Footer from './components/Footer';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar title="TextEditor" />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} />
      <Footer/>
    </>
  );
}

export default App;
