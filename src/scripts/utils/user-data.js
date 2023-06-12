/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
import {
  get,
  getDatabase, ref, set, update,
} from 'firebase/database';
import {
  getStorage, uploadBytes, ref as refs, getDownloadURL,
} from 'firebase/storage';

class UserData {
  static async createUserData(username, email, uid) {
    const db = getDatabase();

    set(ref(db, `users/${uid}`), {
      name: username,
      email: email,
      uid: uid,
    });
  }

  static async getUserData(uid) {
    const db = getDatabase();

    try {
      const userData = await get(ref(db, `users/${uid}`));
      return userData.val();
    } catch (error) {
      console.log(error.message);
    }
  }

  static async updateUserData(userData, uid) {
    const db = getDatabase();
    update(ref(db, `users/${uid}`), {
      name: userData.name,
      phone: userData.phone,
      socmed: userData.socmed,
      desc: userData.desc,
    });
  }

  static async updateUserProfilePhoto(photo, uid) {
    const db = getDatabase();
    const storage = getStorage();
    try {
      const storageRef = refs(storage, `users/${uid}/profileImage/${uid}`);
      uploadBytes(storageRef, photo);
    } catch (e) {
      console.log(e.message);
    } finally {
      const url = await getDownloadURL(refs(storage, `users/${uid}/profileImage/${uid}`));
      update(ref(db, `users/${uid}`), {
        photo: url,
      });
    }
  }
}

export default UserData;
