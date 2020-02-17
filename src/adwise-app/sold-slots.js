import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class SoldSlots extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      SoldSlots 
    `;
  }
  static get properties() {
    return {

    };
  }
}
window.customElements.define('sold-slots', SoldSlots);