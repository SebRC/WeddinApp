import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { createContext, FunctionComponent, ReactNode, useContext, useEffect, useState } from "react";

const UserContext = createContext<{ user: User | null; authed: boolean }>({ user: null, authed: false });

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FunctionComponent<UserProviderProps> = ({ children }) => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [authed, setAuthed] = useState(localStorage.getItem("authed") === "true");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setAuthed(true);
        localStorage.setItem("authed", "true");
      } else {
        setCurrentUser(null);
        setAuthed(false);
        localStorage.setItem("authed", "false");
      }
    });
  }, [auth, currentUser]);

  return <UserContext.Provider value={{ user: currentUser, authed: authed }}>{children}</UserContext.Provider>;
};

export const useCurrentUser = () => useContext(UserContext);
