/* eslint-disable no-inner-declarations */
/* eslint-disable consistent-return */
import UserData from '../utils/user-data';
import UserInfo from '../utils/user-info';

const AdminPage = {
  async render() {
    const user = await UserData.getUserData(UserInfo.getUserInfo().uid);
    console.log(user);

    if (user.isAdmin) {
      return `
      <style>
        .admin-page {
          display: flex;
          height: 100vh;
        }

        .navbar-admin {
          width: 250px;
          background-color: #eaeaea;
          padding: 20px;
        }

        .admin-title {
          font-family: "Inter", sans-serif;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .menu-list {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .menu-item {
          font-family: "Inter", sans-serif;
          font-size: 18px;
          font-weight: 500;
          padding: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .menu-item:hover,
        .menu-item.active {
          background-color: #dddddd;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        }

        .content {
          flex: 1;
          padding: 20px;
          background-color: #1B9C85;
          position: relative;
        }

        .content-title,
        #content-container h2 {
          font-family: "Inter", sans-serif;
          font-size: 44px;
          font-weight: 100;
          margin-bottom: 15px;
          text-align: center;
          letter-spacing: 5px;
        }

        .product-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 15px;
        }

        .product-item {
          height: 30px;
          width: 100%;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          padding: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .product-image {
          width: 30px;
          height: 30px;
          margin-right: 10px;
          background-color: #cccccc;
        }

        .product-actions {
          display: flex;
          align-items: center;
        }

        .product-actions button {
          margin-left: 10px;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        .product-actions button.edit {
          color: #00aaff;
        }

        .product-actions button.delete {
          color: #ff0000;
        }

        .menu-icon {
          display: none;
          width: 30px;
          height: 30px;
          background-color: #1B9C85;
          position: absolute;
          top: 115px;
          left: 51px;
          border-radius: 4px;
          cursor: pointer;
        }

        .menu-icon span {
          display: block;
          width: 100%;
          height: 4px;
          background-color: #ffffff;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .menu-icon span + span {
          margin-top: 6px;
        }

        .loading-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .loading-icon {
          font-size: 48px;
          color: #ffffff;
        }
      </style>
      <div class="admin-page">
        <div class="navbar-admin">
          <div class="admin-title">Admin Panel</div>
          <ul class="menu-list">
            <li class="menu-item" id="menuBerita">Berita</li>
            <li class="menu-item" id="menuVerifikasi">Verifikasi</li>
            <li class="menu-item" id="menuToko">Toko</li>
            <li class="menu-item" id="menuProduk">Produk</li>
          </ul>
        </div>
        <div class="content">
          <h2 class="content-title">Halaman Admin</h2>
          <div id="content-container"></div>
          <div class="loading-container" id="loading-container">
            <i class="loading-icon fas fa-spinner fa-spin"></i>
          </div>
        </div>
      </div>
    `;
    }
    alert('403 : Unauthorized');
    location.href = '#/';

    /* html */
  },
  async afterRender() {
    const user = await UserData.getUserData(UserInfo.getUserInfo().uid);
    console.log(user);

    if (user.isAdmin) {
      const contentContainer = document.getElementById('content-container');
      const loadingContainer = document.getElementById('loading-container');

      function showLoadingIcon() {
        loadingContainer.style.display = 'flex';
      }

      function hideLoadingIcon() {
        loadingContainer.style.display = 'none';
      }

      // eslint-disable-next-line no-undef
      menuBerita.addEventListener('click', () => {
        showLoadingIcon();
        setTimeout(() => {
        // Menghapus elemen HTML di luar elemen inner
          const parentElement = contentContainer.parentNode;
          while (parentElement.firstChild !== contentContainer) {
            parentElement.removeChild(parentElement.firstChild);
          }
          contentContainer.innerHTML = `
          <h2>Berita</h2>
          <p>Ini adalah halaman berita.</p>
        `;
          hideLoadingIcon();
        }, 1000);
      });

      // eslint-disable-next-line no-undef
      menuVerifikasi.addEventListener('click', () => {
        showLoadingIcon();
        setTimeout(() => {
        // Menghapus elemen HTML di luar elemen inner
          const parentElement = contentContainer.parentNode;
          while (parentElement.firstChild !== contentContainer) {
            parentElement.removeChild(parentElement.firstChild);
          }
          contentContainer.innerHTML = `
          <h2>Verifikasi</h2>
          <p>Ini adalah halaman verifikasi.</p>
        `;
          hideLoadingIcon();
        }, 1000);
      });

      // eslint-disable-next-line no-undef
      menuToko.addEventListener('click', () => {
        showLoadingIcon();
        setTimeout(() => {
        // Menghapus elemen HTML di luar elemen inner
          const parentElement = contentContainer.parentNode;
          while (parentElement.firstChild !== contentContainer) {
            parentElement.removeChild(parentElement.firstChild);
          }
          contentContainer.innerHTML = `
          <h2>Toko</h2>
          <p>Ini adalah halaman toko.</p>
        `;
          hideLoadingIcon();
        }, 1000);
      });

      // eslint-disable-next-line no-undef
      menuProduk.addEventListener('click', () => {
        showLoadingIcon();
        setTimeout(() => {
        // Menghapus elemen HTML di luar elemen inner
          const parentElement = contentContainer.parentNode;
          while (parentElement.firstChild !== contentContainer) {
            parentElement.removeChild(parentElement.firstChild);
          }
          contentContainer.innerHTML = `
          <h2>Produk</h2>
          <div class="product-list">
            <div class="product-item">
              <div class="product-image"></div>
              <div class="product-name">Produk 1</div>
              <div class="product-actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
              </div>
            </div>
            <div class="product-item">
              <div class="product-image"></div>
              <div class="product-name">Produk 2</div>
              <div class="product-actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
              </div>
            </div>
            <div class="product-item">
              <div class="product-image"></div>
              <div class="product-name">Produk 3</div>
              <div class="product-actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
              </div>
            </div>
          </div>
        `;
          hideLoadingIcon();
        }, 1000);
      });
    }
  },
};

export default AdminPage;
