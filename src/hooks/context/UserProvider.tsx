import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { createContext, FunctionComponent, ReactNode, useContext, useEffect, useState } from "react";
import { Roles } from "../../components/authentication/Roles";

const UserContext = createContext<{ user: User | null; authed: boolean; role?: string }>({
  user: null,
  authed: false,
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FunctionComponent<UserProviderProps> = ({ children }) => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [authed, setAuthed] = useState(localStorage.getItem("authed") === "true");
  const [role, setRole] = useState(localStorage.getItem("role") ?? Roles.Guest);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setAuthed(true);
        const userRole =
          user?.email === "seb-chris@live.dk" || user?.email === "amalieholde@outlook.dk"
            ? Roles.Admin.toString()
            : Roles.Guest.toString();
        setRole(userRole);
        localStorage.setItem("authed", "true");
        localStorage.setItem("role", userRole);
      } else {
        setCurrentUser(null);
        setAuthed(false);
        localStorage.removeItem("authed");
        localStorage.removeItem("role");
      }
    });
  }, [auth, currentUser]);

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        authed: authed,
        role: role,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(UserContext);
