import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center absolute inset-y-48 inset-x-24">
          <progress className="progress w-56 "></progress>
        </div>
      </>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

  // const from = location.state.from.pathname || "/" ;
  // Navigate(from,{replace: true})
};

export default PrivateRoute;
