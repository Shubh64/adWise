import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class AddedSlots extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      Added Slots
    `;
  }
  static get properties() {
    return {

    };
  }
}
window.customElements.define('added-slots', AddedSlots);
