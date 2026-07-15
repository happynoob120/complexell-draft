import React from "react";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Articles from "./pages/Articles.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./components/layout/Layout.jsx";
import ErrNotFound from "./pages/ErrNotFound.jsx";

const App = () => {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrNotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
