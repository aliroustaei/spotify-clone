import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Sidebar, Songbar } from "./components";
import { Discover } from "./pages";

function App() {
  return (
    <div className="flex relative h-[100vh] overflow-hidden bg-primary-dark">
      <Sidebar />
      <div className="flex-1 flex  bg-white rounded-3xl m-4">
        <div className="flex-1 h-[100%] overflow-y-scroll no-scrollbar ">
          <Routes>
            <Route path="/" element={<Discover />} />
          </Routes>
        </div>
        <div className="w-[300px] h-fit sticky top-0">
          <Songbar />
        </div>
      </div>
    </div>
  );
}

export default App;
