class fetching {
    fetching = async (url) => {
      return (await fetch(url)).text();
    }
} 

//navbar
class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    const html = await new fetching().fetching('/components/navbar/new');
    shadow.innerHTML = html;
    this.addEventListener('click', this.handleClick, true)
  }

  handleClick(ev)
  {
      const shadowRoot = ev.target.shadowRoot;
      const bars = shadowRoot.children[3].children[0].children[2];
      bars.onclick = (event) => {
        this.toggleResponsive(event, shadowRoot)
      }
  }

  toggleResponsive(event, shadowRoot)
  {
    const nav = shadowRoot.children[3];
    const nav_wrapper = nav.children[0];
    const nav_wrap = nav_wrapper.children[1];

    const sub_wrap = nav_wrapper.children[1].children[0];
    const button_wrap= nav_wrapper.children[1].children[1];
    const list = nav_wrapper.children[1].children[0].children[0];
    if (nav.classList.contains('responsive')) {
      nav.classList.remove('responsive');
      nav_wrapper.classList.remove('responsive');
      nav_wrap.classList.remove('responsive');

      sub_wrap.classList.remove('responsive');
      button_wrap.classList.remove('responsive');
      list.classList.remove('responsive');
    } else {
      nav.classList.add('responsive');
      nav_wrapper.classList.add('responsive');
      nav_wrap.classList.add('responsive');

      sub_wrap.classList.add('responsive');
      button_wrap.classList.add('responsive');
      list.classList.add('responsive');
    }
  }
}

//Footer
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    const html = await new fetching().fetching('/components/footer');
    shadow.innerHTML = html;
  }
}

customElements.define("nav-bar", Navbar);
customElements.define("footer-bar", Footer);
