// PrivateRoute.tsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../app/store";

export const PrivateRoute = ({ element }: { element: React.ReactElement }) => {
  const loginned = useSelector<RootState, boolean>(
    (state) => state.auth.loginned
  );

  return loginned ? element : <Navigate to="/login" />;
};
