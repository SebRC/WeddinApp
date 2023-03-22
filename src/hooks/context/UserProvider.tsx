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
    console.log("user provider effect run");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user fetched");
        setCurrentUser(user);
      } else {
        console.log("couldnt fetch user");
        setCurrentUser(null);
      }
    });
  }, [auth]);

  console.log("current user", currentUser?.uid);

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};

export const useCurrentUser = () => useContext(UserContext);
