const HomePage = {
  async render() {
    return `
    <div> This is Home </div>
    `;
  },
  async afterRender() {
    console.log('Home');
  },
};
export default HomePage;
