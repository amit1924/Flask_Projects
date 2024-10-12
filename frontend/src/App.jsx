import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Set null initially to indicate "checking" state

  // Check token on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // Token exists, set as authenticated
    } else {
      setIsAuthenticated(false); // No token, user is not authenticated
    }
  }, []);

  // Only render routes when the token check is complete
  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Optionally show a loading indicator while checking authentication
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          {isAuthenticated ? (
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Projects />
                  <Navbar />
                  <Bio />
                  <Skills />
                  <WorkExperience />
                  <Education />
                  <Contact />
                  <Footer />
                </>
              }
            />
          ) : (
            <Route path="/" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
