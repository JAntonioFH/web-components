class MiElemento extends HTMLElement {
    constructor() {     
        super();    
        console.log('Constructor llamado');
    }
  connectedCallback() {
    console.log('Elemento conectado');
  }
  disconnectedCallback() {
    console.log('Elemento desconectado');
    this.remove();
  }
}

customElements.define("my-element",MiElemento)
document.querySelector("my-element").remove();