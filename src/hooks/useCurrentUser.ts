import { getAuth } from "firebase/auth";
import { useState } from "react";

export const useCurrentUser = () => {
    const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);
    return user;
}