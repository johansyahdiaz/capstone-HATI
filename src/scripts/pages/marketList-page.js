/* eslint-disable consistent-return */
import ProductData from '../utils/product-data';
import UserData from '../utils/user-data';
import UserInfo from '../utils/user-info';

const MarketplacePage = {
  async render() {
    if (UserInfo.getUserInfo().uid) {
      return `
    <h2 class="title-page-market"> Marketplace </h2>
    <form class="search-form row g-3 form-search-product" id="searchForm" name="searchForm">
    <div class="col-sm-7">
      <input type="text" class="form-control search-input search-product" placeholder="Search" name="searchInput">
      </div>
      <div class="col-sm">
      <button type="submit" class="btn btn-primary search-product-btn">Search</button>
      </div>
    </form>
    <div class="row row-cols-1 row-cols-md-4 g-4 listProduct" id="Card-Product">
    
    </div>
      `;
    }
    location.href = '#/login';
  },

  async afterRender() {
    if (UserInfo.getUserInfo().uid) {
      const productList = document.querySelector('#Card-Product');

      const productItem = await ProductData.getProduct();

      const searchForm = document.querySelector('#searchForm');

      searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        productList.innerHTML = '';
        const searchInput = document.forms.searchForm.searchInput.value;

        Object.values(productItem).reverse().forEach((item) => {
          UserData.getUserData(item.uid).then((user) => {
            const productCard = document.createElement('div');
            productCard.innerHTML = `
              <div class="card">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">${Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</p>
                  <h5 class="card-title">${item.name}</h5>
                </div>
                <div class="card-footer">
                <small class="text-muted">${item.seller} ${user.isVerified === 'verified' ? '<i class="fa-solid fa-circle-check fa-lg"></i>' : ''}</small>
                </div>
              </div>
              `;
            productCard.addEventListener('click', (e) => {
              e.preventDefault();
              location.href = `#/detail-product/${item.id}`;
            });
            if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
              productList.appendChild(productCard);
              productCard.classList.add('col');
            }
          });
        });
      });

      Object.values(productItem).reverse().forEach((item) => {
        UserData.getUserData(item.uid).then((user) => {
          const productCard = document.createElement('div');
          productCard.innerHTML = `
            <div class="card">
              <img src="${item.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text">${Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</p>
                <h5 class="card-title">${item.name}</h5>
              </div>
              <div class="card-footer">
                <small class="text-muted">${item.seller} ${user.isVerified === 'verified' ? '<i class="fa-solid fa-circle-check fa-lg"></i>' : ''}</small>
              </div>
            </div>
            `;
          productCard.addEventListener('click', (event) => {
            event.preventDefault();
            location.href = `#/detail-product/${item.id}`;
          });
          productList.appendChild(productCard);
          productCard.classList.add('col');
        });
      });
    }
  },
};

export default MarketplacePage;
