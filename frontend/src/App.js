import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import logo from "./assets/logo.png";
import { toast, ToastContainer } from "react-toastify";

import "bulma/css/bulma.css";
import "react-toastify/dist/ReactToastify.css";
import "filepond/dist/filepond.min.css";

function App() {
  return (
    <div className="App">
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      <nav
        class="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img src={logo} alt="Certicrypt" width="112" height="40" />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>

      <Home />
    </div>
  );
}

export default App;
