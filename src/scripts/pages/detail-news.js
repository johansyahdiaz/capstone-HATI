import UrlParser from '../routes/url-parser';
import NewsData from '../utils/news-data';

const NewsDetailPage = {
  async render() {
    return `
    <article class="news-detail-article"> 
    <div class="news-detail-container" id="newsContainer">
    
    </div>
  </article>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlCaseSensitive();

    const news = await NewsData.getNewsById(url.id);
    console.log(news);

    document.querySelector('#newsContainer').innerHTML = `
      <h2>${news.title}</h2>
      <img src="${news.image}">
      <p>${news.body}</p>
    `;
  },
};
export default NewsDetailPage;
