import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-table.js';
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
      <shared-table headings={{headings}} rows={{rows}}></shared-table>
    `;
  }
  static get properties() {
    return {
      headings:{
        type:Array,
        value:['Name','Class','RollNo']
      },
      rows:{
        type:Array,
        value:[
          {
            data:['1','2','3']
          },
          {
            data:['1','2','3']
          },
          {
            data:['1','2','3']
          }
        ]
      }
    };
  }
}
window.customElements.define('admin-home', AdminHome);