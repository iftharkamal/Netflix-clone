import React from "react";
import Home from "./components/pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Player from "./components/pages/Player/Player";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Player/:id" element={<Player/>}/>
      </Routes>
    </div>
  );
};

export default App;
