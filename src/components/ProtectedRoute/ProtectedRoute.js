import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLogged, children }) {
  if (!isLogged) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;