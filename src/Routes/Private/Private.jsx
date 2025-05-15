import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../../Context/Auth";
import Loader from "../../Components/Loader/Loader";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};
export default Private;
