import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('product-grid')
export class grid extends LitElement{

    static get properties() {
        return {
            dataSource: {type: String},
        };
       }
    data: Array<string>;
    template:string;
    constructor() {
        super();

        this.template =  `<table><tr></tr></table>`
    }

    render(){
        return html `<p>` + this.template +`</p>`;
    }
}