import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Routes";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes />
      </div>
    </Router>
  );
}

export default App;

