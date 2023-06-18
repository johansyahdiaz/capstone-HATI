import UrlParser from '../routes/url-parser';
import NewsData from '../utils/news-data';
import UserInfo from '../utils/user-info';

const NewsDetailPage = {
  async render() {
    return `
    <article class="news-detail-article"> 
    <div class="news-detail-container" id="newsContainer">
    
    </div>
    <div class="news-detail-container" id="commentContainer">
      <h2>Comments</h2>
      <form name="commentForm" id="commentForm">
        <input name="commentBody" placeholder="Your Comment..." id="comment-input">
        <button type="submit" id="comment-button">Send</button>
      </form>

      <div id="comment-container">
      
      </div>
    </div>
    </article>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlCaseSensitive();

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

    const commentContainer = document.querySelector('#comment-container');

    const news = await NewsData.getNewsById(url.id);
    const user = UserInfo.getUserInfo().uid;
    const name = UserInfo.getUserInfo().username;

    if (news.comments) {
      Object.values(news.comments).reverse().forEach((item) => {
        const commentItem = document.createElement('div');
        const uploadDate = new Date(Number(item.date));
        const formattedDate = `${uploadDate.getDate()} ${getMonthName(
          uploadDate.getMonth(),
        )} ${uploadDate.getFullYear()}`;
        commentItem.innerHTML = `
        <h4>${item.name}</h4>
        <small>${formattedDate}</small>
        <p>${item.comment}<p>
      `;
        commentContainer.appendChild(commentItem);
      });
    }
    if (!UserInfo.getUserInfo().uid) {
      document.querySelector('#comment-input').disabled = true;
      document.forms.commentForm.commentBody.value = 'Login to add comment...';
      document.querySelector('#comment-button').setAttribute('style', 'display: none;');
    }

    document.querySelector('#commentForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const comment = document.forms.commentForm.commentBody.value;
      NewsData.addComment(comment, user, news.id, name).then(() => {
        location.reload();
      });
    });
    const uploadDate = new Date(Number(news.id));
    const formattedDate = `${uploadDate.getDate()} ${getMonthName(
      uploadDate.getMonth(),
    )} ${uploadDate.getFullYear()}`;

    document.querySelector('#newsContainer').innerHTML = `
      <h2>${news.title}</h2>
      <img src="${news.image}">
      <strong>${formattedDate}</strong>
      <p>${news.body}</p>
    `;
  },
};
export default NewsDetailPage;
