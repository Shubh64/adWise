import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class SalesHome extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      Sales Home 
    `;
  }
  static get properties() {
    return {

    };
  }
}
window.customElements.define('sales-home', SalesHome);