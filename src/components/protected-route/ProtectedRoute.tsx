import { Navigate, useLocation } from "react-router-dom";
import { FC } from "react";
import { TProtectedRoute } from "../../types";
import {useAppSelector} from "../../store/hooks/redux";

export const ProtectedRoute: FC<TProtectedRoute> = ({ children }) => {
  const isAuthChecked = useAppSelector(s => s.userSliceReducer.isAuthChecked);
  const user = useAppSelector(s => s.userSliceReducer.user);

  const location = useLocation();

  if (!isAuthChecked || !user) {
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
