class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    fetch("/components/navbar")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}

customElements.define("nav-bar", Navbar);
