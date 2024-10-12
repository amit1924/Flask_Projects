import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import { AuthProvider, AuthContext } from "./context/AuthContext"; // Import AuthContext here

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(false); // No need to wait for an API call for token existence in this example
  }, []);

  // While checking authentication, show a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <AuthProvider>
        <div>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* Conditional rendering based on authentication status */}
            <Route
              path="/"
              element={
                <AuthContext.Consumer>
                  {({ isAuthenticated }) =>
                    isAuthenticated ? (
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
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                </AuthContext.Consumer>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
