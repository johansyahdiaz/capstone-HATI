import { getAuth } from 'firebase/auth';
import Auth from '../utils/auth';

const RegisterPage = {
  async render() {
    return `
          <article class="auth-article"> 
          <div class="auth-container">
            <h2>Sign-Up</h2>
            <form id="registerForm" name="registerForm" method="post">
                <input name="emailRegister" id="emailRegister" type="email" placeholder="Email Address..." required>
                <input name="usernameRegister" type="text" placeholder="Username..." required>
                <input name="passwordRegister" type="password" placeholder="Password..." required>
                <input name="confirmPasswordRegister" type="password" placeholder="Confirm Password" required>
                <button type="submit">Sign-Up</button>
            </form>
            <a href="#/login">Already have an account? Login Now</a>
          </div>
        </article>
        `;
  },
  async afterRender() {
    const auth = getAuth();
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = document.forms.registerForm.emailRegister.value;
      const username = document.forms.registerForm.usernameRegister.value;
      const password = document.forms.registerForm.passwordRegister.value;
      const passwordConfirm = document.forms.registerForm.confirmPasswordRegister.value;

      console.log(email);

      if (password === passwordConfirm) {
        Auth.emailRegister(auth, username, email, password);
      }
    });
  },
};
export default RegisterPage;
