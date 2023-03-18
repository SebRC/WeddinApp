// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { stringify } from "querystring";
import { Guest } from "../guest/Guest";
import { DEFAULT_GUEST_STATE } from "../guest/guests";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6GJjKU7xxhQfkhzfNDoKnJOMBEgzhYBs",
    authDomain: "aho-src-wedding.firebaseapp.com",
    databaseURL: "https://aho-src-wedding-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "aho-src-wedding",
    storageBucket: "aho-src-wedding.appspot.com",
    messagingSenderId: "895350012191",
    appId: "1:895350012191:web:5035792562b94668d0d82a"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getUserData = async (): Promise<Guest> => {
    const docRef = doc(db, "guests", "martin");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const json = JSON.stringify(docSnap.data());
        var data = JSON.parse(json);
        var guests = data.guests;
        let guestObjects:Guest[] = [];
        await Promise.all(guests.map(async (g: string) => {
            const guestRef = doc(db, "guests", g);
            const guestDoc = await getDoc(guestRef);
            const guestJson = JSON.stringify(guestDoc.data());
            const guestData = JSON.parse(guestJson);
            const liv: Guest = {name: guestData.name, attending: guestData.attending, songWishes: guestData.songWishes}
            guestObjects.push(liv);
        }));
        const guest = {name: data.name, attending: data.attending, foodInfo: data.foodInfo, songWishes: data.songWishes, guests: guestObjects}
        console.log("Constructed guest", guest)
        return guest;
        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return DEFAULT_GUEST_STATE;
      }
}

export default app;