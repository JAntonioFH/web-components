class myElement extends HTMLElement{
    constructor(){
        super();
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML =  `
            <section>
                <h2> Hello World  2</h2>
                <div>
                    <p> Texto ejemplo</p>
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
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}
customElements.define("my-element",myElement)
