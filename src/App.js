import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Login";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import { ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <>
      {user ? (
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Navigate replace to='/' />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
