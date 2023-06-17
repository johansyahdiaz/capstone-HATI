/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
import {
  get,
  getDatabase, ref, set, update, remove, child,
} from 'firebase/database';
import {
  getStorage, uploadBytes, ref as refs, getDownloadURL,
} from 'firebase/storage';
import ProductData from './product-data';
import UserInfo from './user-info';

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
      return null;
    }
  }

  static async getAllUsers() {
    const db = getDatabase();

    try {
      const userData = await get(ref(db, 'users/'));
      return userData.val();
    } catch (error) {
      console.log(error.message);
    }
  }

  static async deleteUsers(id) {
    const dbRef = ref(getDatabase());
    try {
      remove(child(dbRef, `users/${id}`)).then(() => {
        ProductData.getProduct().then((products) => {
          Object.values(products).forEach((item) => {
            if (item.uid === id) {
              ProductData.deleteProduct(item.id);
            }
          });
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  static async updateUserData(userData, uid) {
    const db = getDatabase();
    update(ref(db, `users/${uid}`), {
      name: userData.name,
      email: userData.email,
      uid: userData.uid,
      phone: userData.phone ? userData.phone : '',
      socmed: userData.socmed ? userData.socmed : '',
      desc: userData.desc ? userData.desc : '',
    }).then(() => {
      UserInfo.setUserInfo(userData.email, userData.uid, userData.name);
      ProductData.getProduct().then((products) => {
        Object.values(products).forEach((item) => {
          const product = {
            name: item.name,
            price: item.price,
            seller: userData.name,
            image: item.image,
            desc: item.desc,
            id: item.id,
            uid: userData.uid,
          };
          if (item.uid === userData.uid) {
            ProductData.updateProduct(product, null);
          }
        });
      });
    });
  }

  static async updateUserProfilePhoto(photo, uid) {
    const db = getDatabase();
    const storage = getStorage();
    try {
      const storageRef = refs(storage, `users/${uid}/profileImage/${uid}`);
      uploadBytes(storageRef, photo).then(() => {
        getDownloadURL(refs(storage, `users/${uid}/profileImage/${uid}`)).then((url) => {
          update(ref(db, `users/${uid}`), {
            photo: url,
          });
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  }
}

export default UserData;
