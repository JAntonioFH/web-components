class MiElemento extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.render();
        console.log('Elemento conectado');
    }
    disconnectedCallback() {
        console.log('Elemento desconectado');
        this.remove();
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML =  `
            <section>
                <h1><slot name="Titulo"></slot></h1>
                <div>
                    <p><slot name="Parrafo"></slot></p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return  `
            <style>
                ::slotted(div){
                    font-size: 20px;
                    color: red;
                }
            </style>
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
}
customElements.define("my-element",MiElemento)
