import './App.css';
import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home"


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
