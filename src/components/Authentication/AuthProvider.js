import { createContext, useState, useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router-dom";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
      history.push("/login");
    });
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
