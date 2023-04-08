import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, ...rest }) {
  const { isAuthenticated } = useSelector((state) => state.access);

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
}
