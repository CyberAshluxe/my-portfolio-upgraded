import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from "./Pages/Notfound.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Navbar from "./Components/Navbar"; // ✅ Import Navbar

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
