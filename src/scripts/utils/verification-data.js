/* eslint-disable consistent-return */
import {
  get, getDatabase, ref, set, child, update, remove,
} from 'firebase/database';
import {
  getStorage, uploadBytes, ref as refs, getDownloadURL,
} from 'firebase/storage';

class VerificationData {
  static async getAllVerification() {
    const db = getDatabase();
    try {
      const verificationData = await get(ref(db, 'verification/'));
      return verificationData.val();
    } catch (error) {
      console.log(error.message);
    }
  }

  static async submitVerification(verification, pdf) {
    const db = getDatabase();
    const storage = getStorage();
    const id = Date.now();
    const storageRef = refs(storage, `users/${verification.uid}/verification/${verification.uid}`);

    try {
      uploadBytes(storageRef, pdf).then(() => {
        getDownloadURL(refs(storageRef)).then((url) => {
          set(ref(db, `verification/${verification.uid}`), {
            id: `${id}`,
            uid: verification.uid,
            doc: url,
          }).then(() => {
            update(ref(db, `users/${verification.uid}`), {
              isVerified: 'pending',
            });
          });
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  static async verifyStore(status, uid) {
    const dbRef = ref(getDatabase());
    const db = getDatabase();
    remove(child(dbRef, `verification/${uid}`)).then(() => {
      update(ref(db, `users/${uid}`), {
        isVerified: status,
      });
    });
  }
}
export default VerificationData;
