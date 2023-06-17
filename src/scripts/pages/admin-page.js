/* eslint-disable no-inner-declarations */
/* eslint-disable consistent-return */
import ProductData from '../utils/product-data';
import UserData from '../utils/user-data';
import UserInfo from '../utils/user-info';

const AdminPage = {
  async render() {
    const user = await UserData.getUserData(UserInfo.getUserInfo().uid);

    if (user.isAdmin) {
      return `
      <style>
        .admin-page {
          display: flex;
          min-width: 100%;
          min-height: 1000px;
          padding: 15px;
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
          margin: 0 20px 0 20px;
          padding: 50px;
          background-color: #eaeaea;
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
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .product-image {
          width: 250px;
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
          text-decoration: none;
          cursor: pointer;
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
        setTimeout(async () => {
        // Menghapus elemen HTML di luar elemen inner
          const parentElement = contentContainer.parentNode;
          while (parentElement.firstChild !== contentContainer) {
            parentElement.removeChild(parentElement.firstChild);
          }
          contentContainer.innerHTML = `
          <h2>Toko</h2>
          <div class="product-list" id="product-list-admin">
            
          </div>
        `;
          const store = await UserData.getAllUsers();
          const productList = document.querySelector('#product-list-admin');
          Object.values(store).reverse().forEach((item) => {
            const productItem = document.createElement('div');
            console.log(item);
            productItem.innerHTML = `
              <div class="product-item">
                <img class="product-image" src="${item.photo ? item.photo : './images/profilePic.png'}">
                <p class="product-name">${item.name}</p>
                <div class="product-actions">
                  <a class="edit" style="text-decoration: none; cursor: pointer;" href="#/store/${item.uid}">Detail</a>
                  <button class="delete" id="remove-${item.uid}">Delete</button>
                </div>
              </div>
              `;
            if (!item.isAdmin) {
              productList.appendChild(productItem);
              document.querySelector(`#remove-${item.uid}`).addEventListener('click', (event) => {
                event.preventDefault();
                if (item.uid) {
                  UserData.deleteUsers(item.uid).then(() => {
                    document.querySelector('#menuToko').click();
                  });
                }
              });
            }
          });
          hideLoadingIcon();
        }, 1000);
      });

      // eslint-disable-next-line no-undef
      menuProduk.addEventListener('click', () => {
        showLoadingIcon();
        setTimeout(async () => {
        // Menghapus elemen HTML di luar elemen inner
          const parentElement = contentContainer.parentNode;
          while (parentElement.firstChild !== contentContainer) {
            parentElement.removeChild(parentElement.firstChild);
          }
          const product = await ProductData.getProduct();
          contentContainer.innerHTML = `
          <h2>Produk</h2>
          <div class="product-list" id="product-list-admin">
            
          </div>
        `;
          const productList = document.querySelector('#product-list-admin');
          console.log(productList);
          Object.values(product).reverse().forEach((item) => {
            const productItem = document.createElement('div');
            productItem.innerHTML = `
            <div class="product-item">
              <img class="product-image" src="${item.image}">
              <p class="product-name">${item.name}</p>
              <div class="product-actions">
                <a class="edit" style="text-decoration: none; cursor: pointer;" href="#/detail-product/${item.id}">Detail</a>
                <button class="delete" id="remove-${item.id}">Delete</button>
              </div>
            </div>
            `;
            productList.appendChild(productItem);
            document.querySelector(`#remove-${item.id}`).addEventListener('click', (event) => {
              event.preventDefault();
              ProductData.deleteProduct(item.id).then(() => {
                document.querySelector('#menuProduk').click();
              });
            });
          });
          hideLoadingIcon();
        }, 1000);
      });
    }
  },
};

export default AdminPage;
