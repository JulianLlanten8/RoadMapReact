import { useState } from "react";
import { UserContext } from "./UserContext";
/* const user = {
  id: 1234,
  name: "Fernando",
  email: "fernando@google.com"
} */
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    // <UserContext.Provider value={{ hola: null, user: user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
