import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";
import AxiosInstance from "../../axios/AxiosInstance";
export  const AuthProvider = ({ children }) => {
    const access=localStorage.getItem('token')
    const [user, setUser] = useState(null)
     
    
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    );
  };