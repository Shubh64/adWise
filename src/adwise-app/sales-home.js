import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class UserHome extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      UserHome 
    `;
  }
  static get properties() {
    return {

    };
  }
}
window.customElements.define('user-home', UserHome);