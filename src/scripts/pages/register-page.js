const RegisterPage = {
  async render() {
    return `
        <div> This is Register Page </div>
        `;
  },
  async afterRender() {
    console.log('Register');
  },
};
export default RegisterPage;
