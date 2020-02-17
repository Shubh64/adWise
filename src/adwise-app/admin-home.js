import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-table.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/neon-animation/animations/scale-up-animation.js';
import '@polymer/neon-animation/animations/fade-out-animation.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
import './ajax-call.js';
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
        #btn-container
        {
          display:flex;
          justify-content:space-between;
        }
        #addSlotDialog {
          margin: 0;
        }
        paper-dialog.colored {
          border: 2px solid;
          border-color: #03a9f4;
          color:#03a9f4;
        }
      </style>
      <div id="btn-container">
      <paper-button raised id="bookedSlots">Booked Slots</paper-button>
      <paper-button raised id="addSlot" on-click="_handleOpenDialog">Add Slot</paper-button>
      </div>
<paper-dialog id="addSlotDialog" class="colored" no-overlap horizontal-align="right" vertical-align="top" 
entry-animation="scale-up-animation" exit-animation="fade-out-animation">
  <h2>Aligned dialog</h2>
  <paper-dialog-scrollable>
    <add-slot></add-slot>
  </paper-dialog-scrollable>
</paper-dialog>

      <ajax-call id="ajax"></ajax-call>
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
  connectedCallback()
  {
    super.connectedCallback();
    // this.$.ajax._makeAjaxCall('get', `${baseUrl}/onboarding/admin/login`, obj, 'ajaxResponse')
    // window.history.pushState({}, null, '#/doctor-dashboard');
    // window.dispatchEvent(new CustomEvent('location-changed'));
  }
  _handleOpenDialog(event)
  {
    this.$.addSlotDialog.positionTarget = event.target;
    this.$.addSlotDialog.open();
  }
}
window.customElements.define('admin-home', AdminHome);