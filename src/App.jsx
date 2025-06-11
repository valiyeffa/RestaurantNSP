import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CardPage from "./pages/CardPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/cards" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
