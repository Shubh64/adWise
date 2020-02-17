import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class AdminHome extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      AdminHome 
    `;
  }
  static get properties() {
    return {

    };
  }
}
window.customElements.define('admin-home', AdminHome);