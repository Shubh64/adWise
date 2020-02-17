import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/iron-form/iron-form.js';
import './ajax-call.js';
import '@polymer/app-route/app-location.js';
/**
 * @customElement
 * @polymer
 */
class LoginPage extends PolymerElement {
  static get template() {
    return html`
    <style>
    :host {
      display: block;
      height:80.8vh;
      overflow-y:hidden;
      background-size:cover;
    }
    img{
      margin-top:20px;
      margin-bottom: 0;
      width:150px;
      height:50px
    }
    #google{
      float: right;
    }
    paper-button{
      background-color: darkblue;
      color: whitesmoke;
    }
    #form
    {
      background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
      width:40%;
      margin:70px auto;
      padding:15px;
      box-shadow:0px 0px 5px 5px;
    }
    span{
      display:flex;
      margin-top: 10px;
      justify-content: center;
    }
  </style>
  <app-location route={{route}}></app-location>
  <paper-toast text={{message}} id="toast"></paper-toast>
  <ajax-call id="ajax"></ajax-call>
  <iron-form id="form">
  <form>
  <paper-input id="mobileNumber" required allowed-pattern=[0-9] minlength="10" maxlength="10" label="Enter Mobile Number"></paper-input>
  <paper-input id="password"  required type="password" label="Password"></paper-input>
  <span>
  <paper-button on-click="_signIn" raised id="loginBtn">LogIn</paper-button></span>
  </form>
  </iron-form>
    `;
  }
  static get properties() {
    return {
      message:{
        type:String,
        value:''
      }
    };
  }
  /**
   * listening customEvents sent from child elements
   */
  ready()
  {
    super.ready();
    this.addEventListener('login-status', (e) => this._loginStatus(e))
  }
  /**
   * 
   * @param {mouseEvent} event on SignIn click event is fired
   * validate if mobile No. has 10 digits or not
   * get the user details from the database
   */
  _signIn(){
    this.$.form.validate();
  const mobileNumber = this.$.mobileNumber.value;
  const password=this.$.password.value;
   if(mobileNumber.length==10&&password.length>=8){
    let postObj={mobileNumber,password}
     this.$.ajax._makeAjaxCall('post',`http://10.117.189.176:9090/forxtransfer/customers/login`,postObj,'login')  
    }
    else{
      this.message='Enter Valid Credential'
      this.$.toast.open();
    }
  } 
  /**
   * 
   * @param {*} event 
   * handles the response sent by the database
   * transfer the user on the base of role as customer or staff to respective page
   */
  _loginStatus(event)
  {
    const data=event.detail.data;
      this.message=`${data.message}`
      let role=data.role;
      this.$.toast.open();
      if(role=='Admin'){
      window.history.pushState({}, null, '#/admin-home');
      window.dispatchEvent(new CustomEvent('location-changed'));
  }
  if(role=='Salesman'){
    window.history.pushState({}, null, '#/sales-home');
    window.dispatchEvent(new CustomEvent('location-changed'));
  }
}
}
window.customElements.define('login-page', LoginPage);
