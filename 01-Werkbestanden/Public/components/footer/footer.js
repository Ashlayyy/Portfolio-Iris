class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    async connectedCallback() {
      fetch("/components/footer")
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          this.innerHTML = data;
        });
    }
  }
  
  customElements.define("footer-bar", Footer);
  