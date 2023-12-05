import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const ProtectedRoutes = ({ component: Component, ...restProps }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...restProps}
      render={(...props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};
export default ProtectedRoutes;
