import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InputPage from "./InputPage";
import DetailPage from "./DetailPage";

function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<InputPage/>} />
        <Route path="/detail" element={<DetailPage/>} />
      </Routes>
    </Router>
  );
}

export default RoutesPage;
