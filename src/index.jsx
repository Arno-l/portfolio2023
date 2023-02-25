import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import FirstPage from "./pages/FirstPage/firstPage";
import Home from "./pages/Home/home";

const App = () => {

    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<FirstPage />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
        </>
    )
}

createRoot(document.getElementById("root")).render(<App />);