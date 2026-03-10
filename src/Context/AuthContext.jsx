import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem('currentUserEmail') ? {email:localStorage.getItem('currentUserEmail')}:null);

  function signUp(email, password) {
    const existingUsers = JSON.parse(localStorage.getItem("user")) || [];
    localStorage.setItem('currentUserEmail',email);
    if (existingUsers.find((u) => u.email === email)) {
      return { success: false, error: "email already exists" };
    }
    const newUser = { email, password };
    existingUsers.push(newUser);
    localStorage.setItem("user", JSON.stringify(existingUsers));

    setUser({ email });

    return { success: true };
  }

  function Login(email, password) {
    const existingUsers = JSON.parse(localStorage.getItem("user")) || [];
    const user = existingUsers.find((u) => u.email === email && u.password === password );
    if(!user){
      return{success:false,error:'invalid email or password'};
    }
    localStorage.setItem('currentUserEmail',email);
    setUser({ email });
     return { success: true };

  }

  return (
    <AuthContext.Provider value={{ signUp, user ,Login}}>
      {children}
    </AuthContext.Provider>
  );
}
