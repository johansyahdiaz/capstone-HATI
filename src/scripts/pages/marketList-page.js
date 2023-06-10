const MarketplacePage = {
  async render() {
    return `
    <h2 class="title-page-market"> Marketplace </h2>
    <div class="row g-2 search-bar" id="search-bar">
  <div class="col-sm-8">
    <div class="form-floating">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <label for="floatingInputGrid">Cari di HATI</label>
    </div>
  </div>
  <div class="col-sm">
    <div class="form-floating">
    <button class="btn btn-outline-success" type="submit">Search</button>
    </div>
  </div>
    </div>
    <div class="row row-cols-1 row-cols-md-6 g-4 listProduct">
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
    <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div><div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
    <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div><div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
    <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div><div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
    <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
    <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div><div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div><div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div><div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div><div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div><div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div><div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div><div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="card" onclick="window.location.href = 'https://www.google.com';">
    <img src="./images/produkPic.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Rp 5.0000</p>
      <h5 class="card-title">Sayur Mayur</h5>
    </div>
    <div class="card-footer">
      <small class="text-muted">Toko Koh Afuk <i class="fa-solid fa-circle-check fa-lg"></i></small>
    </div>
  </div>
    </div>
  </div>
      `;
  },
  async afterRender() {
    console.log('Marketplace');
  },
};
export default MarketplacePage;
