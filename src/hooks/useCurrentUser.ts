import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useCurrentUser1 = () => {
    const auth = getAuth();
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
                setUser(null)
            }
          });
    }, [])
    
    const [user, setUser] = useState(auth.currentUser);
    return user;
}

