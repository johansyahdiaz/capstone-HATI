/* eslint-disable consistent-return */
import {
  get, getDatabase, ref, set, child, update, remove,
} from 'firebase/database';
import {
  getStorage, uploadBytes, ref as refs, getDownloadURL,
} from 'firebase/storage';

class NewsData {
  static async addNews(news, image) {
    const db = getDatabase();
    const storage = getStorage();
    const id = Date.now();
    const storageRef = refs(storage, `news/images/${id}`);

    try {
      uploadBytes(storageRef, image).then(() => {
        getDownloadURL(refs(storageRef)).then((url) => {
          set(ref(db, `news/${id}`), {
            id: `${id}`,
            title: news.title,
            body: news.body,
            image: url,
          });
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  static async getNews() {
    const dbRef = ref(getDatabase());

    try {
      const product = await get(child(dbRef, 'news/'));
      return await product.val();
    } catch (e) {
      console.log(e.message);
    }
  }

  static async getNewsById(id) {
    const dbRef = ref(getDatabase());

    try {
      const product = await get(child(dbRef, `news/${id}`));
      return await product.val();
    } catch (e) {
      console.log(e.message);
    }
  }

  static async deleteNews(id) {
    const dbRef = ref(getDatabase());
    try {
      remove(child(dbRef, `news/${id}`));
    } catch (e) {
      console.log(e.message);
    }
  }

  static async updateNews(news, image) {
    const db = getDatabase();
    const storage = getStorage();
    const storageRef = refs(storage, `news/images/${news.id}`);

    try {
      if (image) {
        uploadBytes(storageRef, image).then(() => {
          getDownloadURL(refs(storageRef)).then((url) => {
            update(ref(db, `news/${news.id}`), {
              id: `${news.id}`,
              title: news.title,
              body: news.body,
              image: url,
            });
          });
        });
      } else {
        update(ref(db, `news/${news.id}`), {
          id: `${news.id}`,
          title: news.title,
          body: news.body,
        });
      }
    } catch (e) {
      console.log(e.message);
    }
  }
}
export default NewsData;
