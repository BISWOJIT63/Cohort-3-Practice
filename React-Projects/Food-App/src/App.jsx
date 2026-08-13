import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { nanoid } from "nanoid";
import { Outlet } from "react-router";
import Router from "./routes/Router";

const App = () => {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="p-5">
        <Router/>
      </main>
    </div>
  );
};

export default App;