import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const verifyCookie = async () => {
      const response = await axios.post(
        "https://event-backend-b6gm.onrender.com/",
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
