/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
import {
  get,
  getDatabase, ref, set,
} from 'firebase/database';

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
}

export default UserData;
