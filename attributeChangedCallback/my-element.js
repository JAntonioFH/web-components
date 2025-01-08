class myElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }
    static get observedAttributes(){
        return ["title","parrafo","img"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        // 
        if (oldVal !== newVal) {
            this[attr] = newVal
        }
        
        this.render();
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML =  `
            <section>
                <h2>${this.title}</h2>
                <div>
                    <p>${this.parrafo}</p>
                    <input type="text">
                    <img src="${this.img}">
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
            <style>
                h2{
                    color: red;
                }
                p{
                    color: blue;
                }
            </style>
        `;
    };
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.innerHTML = ``;
        this.render();
    }
}
customElements.define("my-element",myElement)
