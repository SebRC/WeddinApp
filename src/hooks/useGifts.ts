import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Gift } from "../components/gift/gift";
import { database, giftConverter } from "../firebase/firebase";


export const useGifts = () => {
    const [gifts, setGifts] = useState<Gift[]>([]);
    useEffect(() => {
        const giftsCollection = collection(database, "gifts").withConverter(giftConverter);
        const unsub = onSnapshot(giftsCollection, s => {
            const newGifts: Gift[] = [];
            s.docs.forEach(d => {
                const data = d.data()
                newGifts.push(data)
            })
            setGifts(newGifts)
            
        })
        return () => {unsub()}
    }, [])
    
    return gifts;
}

