// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, DocumentSnapshot, getDoc, getDocs, getFirestore, setDoc, SnapshotOptions } from "firebase/firestore";
import { Gift } from "../components/gift/gift";
import { Guest } from "../guest/Guest";
import { DEFAULT_GUEST_STATE } from "../guest/guests";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
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

export const getGuest = async (guestId: string): Promise<Guest> => {
    const docRef = doc(db, "guests", guestId).withConverter(guestConverter);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let docData = docSnap.data();
        let guests:Guest[] = [];
        if(docData.guestIds) {
          guests = await fetchGuestsFromMainGuest(docData.guestIds);
        }
        return {...docData, guests: guests};
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return DEFAULT_GUEST_STATE;
    }
}

export const getAllGuests = async (): Promise<Guest[]> => {
  const querySnapshot = await getDocs(collection(db, "guests").withConverter(guestConverter));
  let guests: Guest[] = []
  querySnapshot.forEach((doc) => {
    guests.push(doc.data());
  });
  return guests;
}

export const setGuestData = async (guest: Guest) => {
  const ref = doc(db, "guests", guest.id ?? "undefined").withConverter(guestConverter);
  const updatedGuest: Guest = {name: guest.name, attending: guest.attending, foodInfo: guest.foodInfo, songWishes: guest.songWishes, guestIds: guest.guestIds}
  await setDoc(ref, updatedGuest);
}

const fetchGuestsFromMainGuest = async (guestIds: string[]): Promise<Guest[]> => {
  let guests: Guest[] = [];
  await Promise.all(guestIds.map(async (g) => {
    const guestRef = doc(db, "guests", g).withConverter(guestConverter);
    const guestDocSnap = await getDoc(guestRef);
    guests.push(guestDocSnap.data() ?? DEFAULT_GUEST_STATE);
  }));
  return guests;
}

export const getAllGifts = async (): Promise<Gift[]> => {
  const querySnapshot = await getDocs(collection(db, "gifts").withConverter(giftConverter));
  let gifts: Gift[] = []
  querySnapshot.forEach((doc) => {
    gifts.push(doc.data());
  });
  return gifts;
}

export const setGiftData = async (gift: Gift) => {
  const ref = doc(db, "gifts", gift.id ?? "undefined").withConverter(giftConverter);
  const updatedGift: Gift = {name: gift.name, url: gift.url, price: gift.price, reserved: gift.reserved, reservedBy: gift.reservedBy, image: gift.image}
  await setDoc(ref, updatedGift);
}

export const getImage = async (name: string) => {
  // Create a reference to the file we want to download
const storage = getStorage();
const imageRef = ref(storage, name);
console.log(imageRef.name)

// Get the download URL
  return await getDownloadURL(imageRef);
    // .then((url) => {
    //   // Insert url into an <img> tag to "download"
    //   console.log("url fetched", url)
    //   imageUrl = url;
    // })
    // .catch((error) => {
    //   // A full list of error codes is available at
    //   // https://firebase.google.com/docs/storage/web/handle-errors
    //   switch (error.code) {
    //     case 'storage/object-not-found':
    //       return "NOT FOUND"
    //     case 'storage/unauthorized':
    //       // User doesn't have permission to access the object
    //       return "UNAUTHORIZED"
    //     case 'storage/canceled':
    //       return "OPERATION CANCELED"

    //     // ...

    //     case 'storage/unknown':
    //       // Unknown error occurred, inspect the server response
    //       break;
    //   }
    // });
    // console.log("returning iamgeurl", imageUrl)
    // return imageUrl
}

// Firestore data converter
const guestConverter = {
  toFirestore: (guest: Guest) => {
      return {...guest, 
          attending: guest.attending,
          foodInfo: guest.foodInfo,
          songWishes: guest.songWishes,
          guestIds: guest.guestIds ?? null
          };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions): Guest => {
      const data = snapshot.data(options);
      return {id: snapshot.id, name: data?.name, attending: data?.attending, songWishes: data?.songWishes, foodInfo: data?.foodInfo, guestIds: data?.guestIds}
  }
};

// Firestore data converter
const giftConverter = {
  toFirestore: (gift: Gift) => {
      return {...gift, 
          reserved: gift.reserved,
          reservedBy: gift.reservedBy,
          };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions): Gift => {
      const data = snapshot.data(options);
      return {id: snapshot.id, name: data?.name, url: data?.url, price: data?.price, reserved: data?.reserved, reservedBy: data?.reservedBy, image: data?.image}
  }
};

const auth = getAuth();

export const handleSignIn = async (email: string, password: string): Promise<LoginDetails> => {
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    return {success: true, userId: userCredentials.user.uid};
  } catch(error: any){
    return {success: false, errorCode: error.code, errorMessage: error.message}
  }
};

export const handleSignOut = async ()  => {
  try {
    await signOut(auth);
  } catch(error: any){
    console.log(error)
  }
};

export interface LoginDetails {
  success: boolean;
  userId?: string;
  errorCode?: string;
  errorMessage?: string;
}

export default app;