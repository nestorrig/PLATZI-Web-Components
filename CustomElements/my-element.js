const template = document.createElement('div')
template.innerHTML = `
    <style>
        .text {
            color: red;
        }
        p {
            color: blue;
        }
    </style>
    <p class="text">Hola Mundo 2</p>
    <p>Texto ejemplo para la clase</p>
`;


class myElement extends HTMLElement {
    constructor() {
        super()
        console.log("Hola mundo");
        this.p = document.createElement('p')
    }
    connectedCallback() {
        this.p.textContent = "Hola mundo"
        this.appendChild(this.p)
        this.appendChild(template)
    }
}

customElements.define("my-element", myElement)