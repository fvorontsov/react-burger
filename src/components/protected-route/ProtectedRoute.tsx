import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { FC } from "react";
import { TProtectedRoute } from "../../types";

export const ProtectedRoute: FC<TProtectedRoute> = ({ children }) => {
  const { isAuthenticated } = useSelector((state: any) => state.access);

  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          ...(location || {}),
          from: location.pathname,
        }}
      />
    );
  }

  return children;
};
