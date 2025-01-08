class myElement extends HTMLElement{
    constructor(){
        super();
        console.log("Hola mundo")
    }
}
customElements.define("my-element",myElement)
