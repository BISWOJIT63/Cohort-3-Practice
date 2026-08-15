import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const ProtectedRoute = () => {
  const { curUser } = useContext(MyStore);

  return curUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;