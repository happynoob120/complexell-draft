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
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./utils/toast";
import VerificationExpired from "./pages/VreificationExpired.jsx";
import VerificationFailed from "./pages/VerificationFailed.jsx";
import VerificationSuccess from "./pages/VerificationSuccess.jsx";
import Article from "./pages/Article.jsx";
import WriteArticle from "./pages/WriteArticle";
import MyArticles from "./pages/MyArticles.jsx";
import Admin from "./pages/Admin.jsx";
import ProtectedAdminRoute from "./components/admin/ProtectedAdminRoute.jsx";

const App = () => {
  return (
    <Layout>
      <Toaster position="top-center" toastOptions={toastOptions} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrNotFound />} />
        <Route path="/verification-success" element={<VerificationSuccess />} />
        <Route path="/verification-failed" element={<VerificationFailed />} />
        <Route path="/verification-expired" element={<VerificationExpired />} />
        <Route path="/articles/new" element={<WriteArticle />} />
        <Route path="/articles/:slug" element={<Article />} />
        <Route path="/articles/mine" element={<MyArticles />} />
        <Route path="/articles/edit/:id" element={<WriteArticle />} />
        <Route
          path="/admin/panel/:secret"
          element={
            <ProtectedAdminRoute>
              <Admin />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
