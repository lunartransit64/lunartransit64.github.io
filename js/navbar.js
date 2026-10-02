class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <a href="/index.html">Home</a>
        <a href="/projects.html">TAS</a>
        <a href="/blogs.html">Blogs</a>
        <a href="/about.html">About</a>
     </nav>
   `;
  }
}

customElements.define('site-navbar', SiteNavbar);
