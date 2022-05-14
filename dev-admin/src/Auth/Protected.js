import React,{useContext} from "react";
import { useSelector } from "react-redux";
import { Navigate, Route,Outlet  } from "react-router-dom";
import useAuth from "../hooks/Auth"

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const ele = isAuthenticated ? <Outlet /> : <Navigate to="/admin/welcome" replace="/" />
    return ele;
}
export default ProtectedRoute;