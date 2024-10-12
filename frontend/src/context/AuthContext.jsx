// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate(); // Move navigate here to use within context

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://flask-portfolio-app-gsx7.onrender.com/dashboard",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(true);
          setUserInfo(data);
        } else {
          setIsAuthenticated(false);
          alert("Access denied, please log in again");
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userInfo, setIsAuthenticated }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
