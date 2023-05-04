import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  const [value, setValue] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => value + 10);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center p-72">
          <progress
            id="my-progress"
            className="radial-progress text-amber-600/90"
            style={{ "--value": value }}
          />
        </div>
      </>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
