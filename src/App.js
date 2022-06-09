// App JavaScript
import React , { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./pages/Header"
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';

import Switch from "./Components/Switch";

function App() {
  /* Properties for the Toggle component */
  const [value, setValue] = useState(false);

  return (
    <div className="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.tetradigital.com"
          target="_blank"
          rel="noreferrer"
        >
          TetraDigital
        </a>
      </header>
      <Header />
      <Navbar />
      <div className="row">
          <Content />
          <Sidebar />
      </div>
      <Footer />
      <Switch>
          className="App-toggle"
          isOn={value}
          handleToggle={() => setValue(!value)}
          onColor="darkgreen" /* "cyan"/"red" */
      </Switch>
    </div>
  );
}

export default App;
