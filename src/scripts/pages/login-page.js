const LoginPage = {
  async render() {
    return `
      <div> This is Login Page </div>
      `;
  },
  async afterRender() {
    console.log('Login');
  },
};
export default LoginPage;
