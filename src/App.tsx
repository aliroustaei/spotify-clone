import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components";
import { Discover } from "./pages";

function App() {
  return (
    <div className="flex relative">
      <Sidebar />
      <div className="flex-1 bg-sky-900">
        <Routes>
          <Route path="/" element={<Discover />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
