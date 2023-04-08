import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Paths } from "../../utils/constants";

export default function ProtectedRoute({ children, ...rest }) {
  const { isAuthenticated } = useSelector((state) => state.access);

  if (!isAuthenticated) {
    return <Navigate to={Paths.LOGIN} replace />;
  }

  return children;
}
