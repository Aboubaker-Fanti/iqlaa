import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getIqlaaData() {
  try {
    const docRef = doc(db, "iqlaa", "1");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
}

// export async function updateIqlaaData(newVisites: number, newStartPool: number) {
//   try {
//     const docRef = doc(db, "iqlaa", "1");
//     await updateDoc(docRef, {
//       visites: newVisites,
//       start_pool: newStartPool,
//     });
//     console.log("Document updated successfully!");
//   } catch (error) {
//     console.error("Error updating document:", error);
//   }
// }

export async function updateIqlaaData(updatedFields: Partial<{ visites: number; start_pool: number; finish_pool: number; pool_arabic: number }>) {
  try {
    const docRef = doc(db, "iqlaa", "1");
    await updateDoc(docRef, updatedFields);
    console.log("Document updated successfully!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

