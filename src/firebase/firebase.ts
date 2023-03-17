// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
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
        console.log("Document data:", docSnap.data());
        const json = JSON.stringify(docSnap.data());
        console.log(JSON.stringify(docSnap.data()))
        var data = JSON.parse(json);
        var guests = data.guests;

        console.log("guests", guests)
        let guestObjects:any[] = [];
        guests.map(async (g: any) => {
            const guestRef = doc(db, "guests", g);
            console.log("guest ref", guestRef)
            const guestDoc = await getDoc(guestRef);
            console.log("guest doc", guestDoc.data())
            guestObjects.push(guestDoc.data());
        })

        console.log("guest objects", guestObjects)
        const guestsJson = JSON.stringify(guestObjects);
        console.log("guests json", guestsJson)

        const guestsJsonParsed = JSON.parse(guestsJson);
        console.log("json parsed", guestsJsonParsed)

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