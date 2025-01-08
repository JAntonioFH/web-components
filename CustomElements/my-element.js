const template = document.createElement("div");
template.innerHTML =  `
    <style>
        .texto{
            color: red;
        }
        p{
            color: blue;
        }
    </style>
    <p class="texto"> Hello World  2</p>
    <p> Texto ejemplo</p>
`
class myElement extends HTMLElement{
    constructor(){
        super();

        this.p = document.createElement("p");
    }
    connectedCallback(){
        this.p.textContent = "Hello World";
        this.appendChild(this.p);
        this.appendChild(template);
    }
}
customElements.define("my-element",myElement)
