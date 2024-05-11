import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    const verifyCookie = async () => {
      const response = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );

      const { status, user } = response.data;
      if (status) {
        setUser(user);
      }
    };
    verifyCookie();
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
export { AuthContext, AuthProvider };
