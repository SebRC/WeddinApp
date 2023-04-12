import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Guest } from "../components/guest/Guest";
import { database, guestConverter } from "../firebase/firebase";

export const useGuests = () => {
    const [guests, setGuests] = useState<Guest[]>([]);
    useEffect(() => {
        const guestCollection = collection(database, "guests").withConverter(guestConverter);
        const unsub = onSnapshot(guestCollection, s => {
            const newGuests: Guest[] = [];
            s.docs.forEach(d => {
                const data = d.data()
                newGuests.push(data)
            })
            setGuests(newGuests)
        })
        return () => {
            unsub()
        }
    }, [])
    
    return {guests: guests, guestsLoading: guests.length === 0};
}

