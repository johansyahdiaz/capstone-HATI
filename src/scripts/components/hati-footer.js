class hatiFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <section class="footer-sosmed">
    <ul class="footer-sosmed-list">
    <li><a href="https://github.com/johansyahdiaz/capstone-HATI" target="blank"><i class="fab fa-github"></i></a></li>
    <li><a href="mailto:F041XB058@dicoding.org target="blank"><i class="fa-solid fa-envelope"></i></a></li>
    <li><a href="https://www.linkedin.com/in/bakkah-maulana-mashur-07687a223/" target="blank"><i class="fab fa-linkedin"></i></a></li>    </ul>
    <ul>
      <li class="watermark">Copyright © 2023 - HATI Development Team</li>
    </ul>
  </section>
      `;
  }
}

customElements.define('hati-footer', hatiFooter);
