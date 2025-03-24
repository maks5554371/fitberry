import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import ContactsPage from "./components/ContactsPage";
import ProfilePage from "./components/ProfilePage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import CoursesPage from "./components/CoursesPage";
import AeroCourse from "./courses/AeroCourse";
import Home from "./courses/HomeCourse";
import Jumping from "./courses/JumpingCourse";
import Trainer from "./courses/TrainerCourse";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/AeroCourse" element={<AeroCourse />} />
            <Route path="/HomeCourse" element={<Home />} />
            <Route path="/JumpingCourse" element={<Jumping />} />
            <Route path="/TrainerCourse" element={<Trainer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
