import { createContext, useState } from "react";

export const UserContext = createContext({
  setCurrentUser: () => null,
  removeCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  const removeCurrentUser = () => setCurrentUser(null);

  const value = {
    currentUser,
    setCurrentUser,
    removeCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
