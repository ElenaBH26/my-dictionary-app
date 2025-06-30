import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import CardsPage from "./components/card/CardPages";
import NotFound from "./components/pages/NotFound";

// import styles from './app.module.css';
import "./App.css";

function App() {
  return (
    <Router>
      <Menu />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<CardsPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
