import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {  Guest } from "./middlewares";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        <Guest>
                            <Login />
                        </Guest>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <Guest>
                            <Register />
                        </Guest>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
