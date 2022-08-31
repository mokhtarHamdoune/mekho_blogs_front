import React from "react";
import Header from "components/Header/Header";
import { Home, About, Register, Categories } from "pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />} />
        <Route path="register/*" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
