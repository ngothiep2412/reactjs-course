import { useContext } from "react";
import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState({
    userId: 1,
    fullname: "Thiệp",
    email: "ngothiep2412@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1655312329254-7288f580af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within a CountProvider");
  return context;
}
export { AuthProvider, useAuth };
