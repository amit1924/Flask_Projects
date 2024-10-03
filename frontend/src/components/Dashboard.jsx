import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:5000/dashboard", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.status === 200) {
        setUserData(data);
      } else {
        alert("Access denied, please log in again");
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <button
        className="absolute top-4 right-4 bg-red-800 rounded-lg hover:bg-red-950 transition-all duration-100 p-3"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {userData ? (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">Dashboard</h2>
            <p className="text-lg font-semibold">
              Welcome, {userData.username}
            </p>
            <p className="text-gray-600">Email: {userData.email}</p>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
