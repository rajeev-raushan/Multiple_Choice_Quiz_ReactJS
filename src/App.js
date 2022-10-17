import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Quiz from "./Quiz";

function App() {
  return (
    <BrowserRouter>
      <main className="py-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;