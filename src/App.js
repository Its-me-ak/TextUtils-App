import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Textform from "./components/Textform";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light"); //dark mode or light mode enabled
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#031624";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>

      <Alert alert={alert} />

      {/* <Routes> */}

      <Textform
        showAlert={showAlert}
        heading="Enter your message below"
        mode={mode}
      />

      {/* <Route exact path="/about" element={<About />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
