import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { getGuest } from "../firebase/firebase";
import { Guest } from "../guest/Guest";

const auth = getAuth();

export const useCurrentGuest = () => {
    useEffect(()=> {
      (async() => {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const guest = await getGuest(user.uid);
            setCurrentGuest(guest)
          } else {
              setCurrentGuest(null)
          }
        });
      })()
        
    }, [auth])
    
    const [currentGuest, setCurrentGuest] = useState<Guest | null>(null);
    return currentGuest;
}

