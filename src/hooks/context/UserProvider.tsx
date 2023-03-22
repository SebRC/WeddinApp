import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { createContext, FunctionComponent, ReactNode, useContext, useEffect, useState } from "react";

const UserContext = createContext<User | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FunctionComponent<UserProviderProps> = ({ children }) => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [auth]);

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};

export const useCurrentUser = () => useContext(UserContext);
