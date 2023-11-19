class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['title', 'description', 'price', 'img', 'brand'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal !== newVal) {
            this[attr] = newVal;
        }
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <article class="card">
            <section class="card__imgSection">
                <span class="">${this.brand}</span>
                <figure>
                    <img src="${this.img}" alt="">
                </figure>
            </section>
            <section class="card__infoSection">
                <h2>${this.title} <span>runnig collection</span></h2>
                <p>${this.description}</p>
                <div>
                    <span>$ ${this.price}</span>
                    <button type="button">Buy now</button>
                </div>
            </section>
        </article>
        ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
        :host {
            --primary-color: #5a6cb2;
            --title-color: #1b1b1b;
            --text-color: #4a4a4a;
            --text-floating-color: #4a4a4a;
            --font-family: 'Roboto', sans-serif;
            --size-float-text: 6rem;
            --size-title: 2.5rem;
            --size-text: 1.6rem;
            --padding-text: 32px;
        }
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-size: 62.5%;
        }
        .card {
            width: 100%;
            font-family: var(--font-family);
        }
        .card__imgSection{
            width: 100%;
            height: 300px;
            position: relative;
            background-color: var(--primary-color);
        }
        .card__imgSection span{
            position: absolute;
            top: 16px;
            left: 16px;
            font-weight: bold;
            text-transform: uppercase;
            font-size: var(--size-float-text);
            color: var(--text-floating-color);
            opacity: 0.5;
        }
        .card__imgSection figure{
            width: 100%;
            height: 100%;
            max-width: 400px;
            max-height: 300px;
            margin-left: auto;
            display: flex;
            align-items: end;
            justify-content: center;
        }
        .card__imgSection figure img{
            overflow: visible;
            margin-top: auto;
            width: 80%;
            height: 80%;
            object-fit: cover;
        }
        .card__infoSection{
            width: 100%;
            padding: 16px;
            background-color: #fff;
        }
        .card__infoSection h2 {
            font-size: var(--size-title);
            color: var(--title-color);
            font-weight: bold;
            margin: 32px 0;
        }
        .card__infoSection h2 span{
            font-size: var(--size-text);
            color: var(--text-color);
            text-transform: uppercase;
        }
        .card__infoSection p {
            font-size: var(--size-text);
            color: var(--text-color);
            margin-bottom: 32px;
        }
        .card__infoSection div{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .card__infoSection div span{
            font-size: var(--size-title);
            color: var(--text-color);
            font-weight: bold;
        }
        .card__infoSection div button {
            font-size: var(--size-text);
            text-transform: uppercase;
            color: #fff;
            background-color: var(--primary-color);
            padding: 16px 32px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }
        @media screen and (max-width: 360px) {
            .card__imgSection figure img{
                overflow: hidden;
                width: 100%;
            }
        }
        @media screen and (min-width: 640px) {
            .card {
                width: 100%;
                max-width: 700px;
                display: flex;
                flex-direction: row;
            }
            .card__imgSection {
                height: auto;
                display: flex;
            }
            .card__imgSection figure {
                margin-left: 0;
                margin: auto 0;
                justify-content: start;
            }
            .card__imgSection figure img{
                transform: rotate(-25deg);
                width: 90%;
                height: 90%;
            }
            .card__infoSection p{
                padding-left: var(--padding-text);
            }
        }
        </style>
        `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("product-card", ProductCard);