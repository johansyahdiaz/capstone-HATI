import NewsData from '../utils/news-data';

const NewsPage = {
  /* html */
  render() {
    return `
    <hati-carousel></hati-carousel>
    <form class="search-form row g-3 form-search-product" id="searchForm" name="searchForm">
    <div class="col-sm-7">
      <input type="text" class="form-control search-input search-product" placeholder="Search" name="searchInput">
      </div>
      <div class="col-sm">
      <button type="submit" class="btn btn-primary search-product-btn">Search</button>
      </div>
    </form>
    <div id="news-container"></div>
    <div id="loading-indicator" class="loading-indicator">
      <i class="fas fa-spinner fa-spin"></i>
    </div>
  `;
  },
  async afterRender() {
    const newsContainer = document.getElementById('news-container');
    const searchForm = document.querySelector('#searchForm');
    // const loadingIndicator = document.getElementById('loading-indicator');
    // const notFoundMessage = document.getElementById('not-found-message');

    // Fungsi untuk mengambil data berita dari API publik tentang pertanian
    // async function fetchNewsData(keyword) {
    //   const apiKey = 'b5e0048bc5df45ae97f42104a751e160';
    //   const response = await fetch(
    //     `https://newsapi.org/v2/everything?q=${keyword} agriculture&apiKey=${apiKey}`,
    //   );
    //   const data = await response.json();
    //   return data.articles;
    // }

    const news = await NewsData.getNews();

    // Fungsi untuk mendapatkan nama bulan berdasarkan indeks bulan
    function getMonthName(monthIndex) {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      return months[monthIndex];
    }

    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      newsContainer.innerHTML = '';
      const searchInput = document.forms.searchForm.searchInput.value;

      Object.values(news).reverse().forEach((newsItem) => {
        const newsElement = document.createElement('div');
        const uploadDate = new Date(Number(newsItem.id));
        const formattedDate = `${uploadDate.getDate()} ${getMonthName(
          uploadDate.getMonth(),
        )} ${uploadDate.getFullYear()}`;
        newsElement.innerHTML = `
          <h2>${newsItem.title}</h2>
          <img src="${newsItem.image}" loading="lazy" class="news-picture">
          <p class="date-published">Published on ${formattedDate}</p>
          <p class="news-description">${newsItem.body}</p>
          <button class="news-button" id="detail-news">More Info</button>
  
        `;
        newsElement.classList.add('news-item');

        if (newsItem.title.toLowerCase().includes(searchInput.toLowerCase())) {
          newsContainer.appendChild(newsElement);

          document.querySelector('#detail-news').addEventListener('click', () => {
            location.href = `#/news/${newsItem.id}`;
          });
        }
      });
    });

    Object.values(news).reverse().forEach((newsItem) => {
      const newsElement = document.createElement('div');
      const uploadDate = new Date(Number(newsItem.id));
      const formattedDate = `${uploadDate.getDate()} ${getMonthName(
        uploadDate.getMonth(),
      )} ${uploadDate.getFullYear()}`;
      newsElement.innerHTML = `
        <h2>${newsItem.title}</h2>
        <img src="${newsItem.image}" loading="lazy" class="news-picture">
        <p class="date-published">Published on ${formattedDate}</p>
        <p class="news-description">${newsItem.body}</p>
        <button class="news-button" id="detail-news-${newsItem.id}">More Info</button>

      `;
      newsElement.classList.add('news-item');
      newsContainer.appendChild(newsElement);

      document.querySelector(`#detail-news-${newsItem.id}`).addEventListener('click', () => {
        location.href = `#/news/${newsItem.id}`;
      });
    });

    // Fungsi untuk menampilkan berita dalam container
    // function displayNews(newsData) {
    //   if (newsData.length === 0) {
    //     notFoundMessage.style.display = 'block';
    //   } else {
    //     notFoundMessage.style.display = 'none';

    //     newsData.forEach((newsItem) => {

    //     });
    //   }
    // }

    // Fungsi untuk menampilkan loading indicator
    // function showLoadingIndicator() {
    //   loadingIndicator.style.display = 'flex';
    // }

    // // Fungsi untuk menyembunyikan loading indicator
    // function hideLoadingIndicator() {
    //   loadingIndicator.style.display = 'none';
    // }

    // Fungsi untuk menghandle event klik tombol pencarian
    // async function searchNews() {
    //   const keyword = searchInput.value.trim();
    //   if (keyword !== '') {
    //     clearNewsContainer();
    //     showLoadingIndicator();
    //     const newsData = await fetchNewsData(keyword);
    //     const filteredNewsData = newsData.filter((newsItem) =>
    //       // Menggunakan metode includes() untuk mencocokkan judul berita
    //       // eslint-disable-next-line implicit-arrow-linebreak
    //       newsItem.title.toLowerCase().includes(keyword.toLowerCase()));
    //     displayNews(filteredNewsData);
    //     hideLoadingIndicator();
    //   } else {
    //     // Jika input tidak memiliki karakter, kembalikan halaman awal
    //     const defaultNewsData = await fetchNewsData('agriculture');
    //     clearNewsContainer();
    //     displayNews(defaultNewsData);
    //   }
    // }

    // // Fungsi untuk menghandle event klik tombol pencarian
    // searchButton.addEventListener('click', async () => {
    //   await searchNews();
    // });

    // // Event listener untuk event "keyup" pada input teks pencarian
    // searchInput.addEventListener('keyup', async (event) => {
    //   if (event.key === 'Enter') {
    //     await searchNews();
    //   }
    // });

    // // Inisialisasi halaman dengan menampilkan berita pertanian secara default
    // const defaultNewsData = await fetchNewsData('agriculture');
    // displayNews(defaultNewsData);
  },
};

export default NewsPage;
