import UrlParser from '../routes/url-parser';
import ProductData from '../utils/product-data';
import UserData from '../utils/user-data';

const StorePage = {
  async render() {
    return `
    <article class="store-article">
      <div id="store-container">
        
      </div>

      <div id="more-product-container">
        <h2>Products</h2>
        <div id="more-product">

        </div>
      </div>
    </article>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlCaseSensitive();

    const productAll = await ProductData.getProduct();
    const store = await UserData.getUserData(url.id);

    const productDetailContainer = document.querySelector('#store-container');
    const moreProduct = document.querySelector('#more-product');

    productDetailContainer.innerHTML = `
    <img src = "${store.photo ? store.photo : './images/profile.png'}">
    <div>
      <h3>${store.name}</h3>
      <p>${store.desc ? store.desc : 'This store has no description.'}</p>
    </div>
    <div class="store-contact">
        <h4>Contact</h4>
        <p>${store.phone ? store.phone : 'This store has no whatsapp.'}</p>
        <p>${store.socmed ? store.socmed : 'This store has no instagram.'}</p>
    </div>
    `;

    Object.values(productAll).slice(-6).reverse().forEach((item) => {
      const productItem = document.createElement('div');
      productItem.innerHTML = `
          <div class="card">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</p>
            <h5 class="card-title">${item.name}</h5>
            </div>
            <div class="card-footer">
            <small class="text-muted">${item.seller} <i class="fa-solid fa-circle-check fa-lg"></i></small>
          </div>
        `;
      productItem.setAttribute('class', 'product-item');
      productItem.addEventListener('click', (event) => {
        event.preventDefault();
        location.href = `#/detail-product/${item.id}`;
      });
      if (item.uid === url.id) {
        moreProduct.appendChild(productItem);
      }
    });
    if (moreProduct.childElementCount === 0) {
      const productText = document.createElement('h5');
      productText.innerText = 'This store just have one product.';
      moreProduct.appendChild(productText);
    }
  },
};
export default StorePage;
