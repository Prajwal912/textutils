import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [initialMode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [modeText, setModeText] = useState("Enable Dark Mode")


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      types: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (initialMode === "dark") {
      setMode("light");
      setModeText("Enable Dark Mode")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#042743";
      showAlert("Light mode has been Enabled", "success");
      // document.title = "Textutils - Light Mode";
    } else {
      setMode("dark");
      setModeText("Enable Light Mode")
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been Enabled", "success");
      // document.title = "Textutils - Dark Mode";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        search="find"
        mode={initialMode}
        toggle={toggleMode}
        modeText={modeText}
      />
      <Alert alertSuc={alert} />
      <div className="container my-3">
        <Routes>
          <Route
          exact
            path="/"
            element={
              <TextForm
                header="TextUtils - Word counter, Character counter, Remove Extra Spaces."
                mode={initialMode}
                showAlert={showAlert}
              />
            }
          />

          <Route path="/about" element={<About mode={initialMode}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
