import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function signUp(email, password) {
    const existingUsers = JSON.parse(localStorage.getItem("user")) || [];
    const newUser = { email, password };
    existingUsers.push(newUser);
    localStorage.setItem("user", JSON.stringify(existingUsers));

    setUser({email});
  }

  function Login(email,password) {
  const existingUsers = JSON.parse(localStorage.getItem("user")) || [];
  }

  return (
    <AuthContext.Provider value={{ signUp,user }}>{children}</AuthContext.Provider>
  );
}
