import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { PrivateRoute } from "./components/PrivateRouter";
import LayoutWithNavbar from "./Layouts/LayoutWithNavbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
