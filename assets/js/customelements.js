class CustomHeader extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = ``;
    }
}

class CustomFooter extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = ``;
    }
}

customElements.define("custom-footer", CustomFooter);
customElements.define("custom-header", CustomHeader);
