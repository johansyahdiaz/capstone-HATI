const NewsPage = {
  /* html */
  render() {
    return `
    <hati-carousel></hati-carousel>
    <div class="search-news">
      <input type="text" id="search-input" class="search-news-input" placeholder="Search News">
      <button id="search-button" class="search-news-button">Search</button>
    </div>
    <div id="news-container"></div>
    <div id="loading-indicator" class="loading-indicator">
      <i class="fas fa-spinner fa-spin"></i>
    </div>
    <div id="not-found-message" class="not-found-message"><p>Tidak ditemukan berita.</p></div>
  `;
  },
  async afterRender() {
    const newsContainer = document.getElementById('news-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const loadingIndicator = document.getElementById('loading-indicator');
    const notFoundMessage = document.getElementById('not-found-message');

    // Fungsi untuk mengambil data berita dari API publik tentang pertanian
    async function fetchNewsData(keyword) {
      const apiKey = 'b5e0048bc5df45ae97f42104a751e160';
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${keyword} agriculture&apiKey=${apiKey}`,
      );
      const data = await response.json();
      return data.articles;
    }

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

    // Fungsi untuk membersihkan konten berita sebelumnya
    function clearNewsContainer() {
      while (newsContainer.firstChild) {
        newsContainer.removeChild(newsContainer.firstChild);
      }
    }

    // Fungsi untuk menampilkan berita dalam container
    function displayNews(newsData) {
      if (newsData.length === 0) {
        notFoundMessage.style.display = 'block';
      } else {
        notFoundMessage.style.display = 'none';

        newsData.forEach((newsItem) => {
          const newsElement = document.createElement('div');
          newsElement.classList.add('news-item');

          // Menambahkan judul berita
          const titleElement = document.createElement('h2');
          titleElement.innerText = newsItem.title;
          newsElement.appendChild(titleElement);

          // Menambahkan gambar berita
          const imageElement = document.createElement('img');
          imageElement.src = newsItem.urlToImage;
          imageElement.classList.add('news-picture');
          imageElement.setAttribute('loading', 'lazy');
          imageElement.setAttribute('crossorigin', 'anonymous');
          newsElement.appendChild(imageElement);

          // Menambahkan keterangan tanggal bulan tahun upload
          const dateElement = document.createElement('p');
          dateElement.classList.add('date-published');
          const uploadDate = new Date(newsItem.publishedAt);
          const formattedDate = `${uploadDate.getDate()} ${getMonthName(
            uploadDate.getMonth(),
          )} ${uploadDate.getFullYear()}`;
          dateElement.innerText = `Published on ${formattedDate}`;
          newsElement.appendChild(dateElement);

          // Menambahkan deskripsi berita
          const descriptionElement = document.createElement('p');
          descriptionElement.classList.add('news-description');
          descriptionElement.innerText = newsItem.description;
          newsElement.appendChild(descriptionElement);

          // Menambahkan tombol detail berita
          const detailButton = document.createElement('button');
          detailButton.innerText = 'More Info';
          detailButton.classList.add('news-button');
          detailButton.addEventListener('click', () => {
            // Mengarahkan pengguna ke halaman detail berita
            window.open(newsItem.url, '_blank');
          });
          newsElement.appendChild(detailButton);

          newsContainer.appendChild(newsElement);
        });
      }
    }

    // Fungsi untuk menampilkan loading indicator
    function showLoadingIndicator() {
      loadingIndicator.style.display = 'flex';
    }

    // Fungsi untuk menyembunyikan loading indicator
    function hideLoadingIndicator() {
      loadingIndicator.style.display = 'none';
    }

    // Fungsi untuk menghandle event klik tombol pencarian
    async function searchNews() {
      const keyword = searchInput.value.trim();
      if (keyword !== '') {
        clearNewsContainer();
        showLoadingIndicator();
        const newsData = await fetchNewsData(keyword);
        const filteredNewsData = newsData.filter((newsItem) =>
          // Menggunakan metode includes() untuk mencocokkan judul berita
          // eslint-disable-next-line implicit-arrow-linebreak
          newsItem.title.toLowerCase().includes(keyword.toLowerCase()));
        displayNews(filteredNewsData);
        hideLoadingIndicator();
      } else {
        // Jika input tidak memiliki karakter, kembalikan halaman awal
        const defaultNewsData = await fetchNewsData('agriculture');
        clearNewsContainer();
        displayNews(defaultNewsData);
      }
    }

    // Fungsi untuk menghandle event klik tombol pencarian
    searchButton.addEventListener('click', async () => {
      await searchNews();
    });

    // Event listener untuk event "keyup" pada input teks pencarian
    searchInput.addEventListener('keyup', async (event) => {
      if (event.key === 'Enter') {
        await searchNews();
      }
    });

    // Inisialisasi halaman dengan menampilkan berita pertanian secara default
    const defaultNewsData = await fetchNewsData('agriculture');
    displayNews(defaultNewsData);
  },
};

export default NewsPage;
