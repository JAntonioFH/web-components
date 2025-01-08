class MiElemento extends HTMLElement {
    constructor() {     
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
                :host{
                    --primary-color: tomato;
                    --secondary-color: salmon;
                    --heading-primary: 30px;
                    --heading-secondary: 20px;
                    display: inline-block;
                    width: 100%;
                    max-width: 500px;
                    max-width: 550px;
                    font-size: 16px;
                    background: #f1f1f1;
                }
                :host(.blue){
                    background: blue;
                }
                :host([yellow]){
                    background: yellow;
                }
                :host([yellow]) p{
                    background: green;
                }
                :host-context(article.card){
                    font-size: 1px;
                }
                section{
                    background: var(--primary-color);
                }
                section div{
                    background: var(--secondary-color);
                }
            </style>
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
}

customElements.define("my-element",MiElemento)