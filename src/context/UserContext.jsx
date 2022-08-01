import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userCurrent, setUserCurrent] = useState(
    sessionStorage.getItem("user")
  );

  const login = (user) => setUserCurrent(user);
  const logout = () => setUserCurrent(null);
  const data = { userCurrent, login, logout };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
