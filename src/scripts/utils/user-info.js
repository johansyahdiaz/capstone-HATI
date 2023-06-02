class UserInfo {
  static async setUserInfo(email, uid, username) {
    localStorage.setItem('email', email);
    localStorage.setItem('uid', uid);
    localStorage.setItem('username', username);
  }

  static getUserInfo() {
    const uid = localStorage.getItem('uid');
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');

    const userInfo = { uid, email, name };

    return userInfo;
  }

  static deleteUserInfo() {
    localStorage.removeItem('uid');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
  }
}
export default UserInfo;
