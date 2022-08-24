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

const TETRADIGITALICO=  "tetradigital.ico"

function App() {
  /* Properties for the Toggle component */
  const [value, setValue] = useState(false);

  // Print the current process.env.NODE_ENV to console.
  if (process.env.NODE_ENV === "development") {
      console.log("This React application was started witn 'npm start'");
      console.log("Environment variable: process.env.NODE_ENV is: " + process.env.NODE_ENV);
  }
  else {
      console.log("Environment variable: process.env.NODE_ENV is: " + process.env.NODE_ENV);
  }

  return (
    <div className="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href={TETRADIGITALICO}
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
