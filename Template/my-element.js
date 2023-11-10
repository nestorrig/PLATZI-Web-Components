class myElement extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
        ${this.getStyles()}
        <section>
            <h2>Un buen subtitulo</h2>
            <div>
                <p>Un buen parrafo</p>
            </div>
        </section>
        `;
        return template
    }
    getStyles() {
        return `
        <style>
            h2 {
                color: red
            }
        </style>
        `;
    }
    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define("my-element", myElement)