import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app-container">
            <Navbar>
                <Routes>
                    <route path="/" element={<Home/>} />
                </Routes>
            </Navbar>
        </div>
    );
}

export default App;
