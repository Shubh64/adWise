import { html, PolymerElement } from './node_modules/@polymer/polymer/polymer-element.js.js';
import './node_modules/@polymer/app-route/app-route.js.js';
import './node_modules/@polymer/app-route/app-location.js.js';
import './node_modules/@polymer/iron-pages/iron-pages.js.js';
import './node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js.js';
import './node_modules/@polymer/app-layout/app-header/app-header.js.js';
import './node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js.js';
import './node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js.js';
import './node_modules/@polymer/app-layout/app-drawer/app-drawer.js.js';
import './node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js.js';
import './node_modules/@polymer/iron-media-query/iron-media-query.js.js';
import './node_modules/@polymer/paper-item/paper-item.js.js';
import './node_modules/@polymer/iron-flex-layout/iron-flex-layout.js.js';
import './node_modules/@polymer/paper-listbox/paper-listbox.js.js';
import './node_modules/@polymer/iron-selector/iron-selector.js.js';
import './node_modules/@polymer/iron-icon/iron-icon';
import './node_modules/@polymer/paper-icon-button/paper-icon-button.js.js';
import './node_modules/@polymer/iron-icons/iron-icons.js.js';
import './node_modules/@polymer/polymer/lib/elements/dom-repeat.js.js';
import { setRootPath,setPassiveTouchGestures } from './node_modules/@polymer/polymer/lib/utils/settings.js.js';
import './node_modules/@polymer/font-roboto/roboto.js.js';
/**
 * @customElement
 * @polymer
 */
setRootPath(MyAppGlobals.rootPath)
setPassiveTouchGestures(true);
class AdwiseApp extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        display: block;
        margin:0;
        padding:0;
        font-family:"roboto";
        --my-tsms-theme: {
          background: black;
        };
      }
      .tabs-bar {
        background-image: linear-gradient(to right, #1488cc, #2b32b2);;
        width:100%;
        height: auto;
        text-align:center;
        margin-top:10px;
        position:sticky;
        top: 0;
    }
    ul {
        display: inline-flex;
        list-style: none;
        align-items: flex-start;
        
    }
    ul li 
    {
        width:120px;
    }
    ul li a:visited
    {
      color:white;
    }
    ul li a
    {
      color:white;
      text-decoration:none;
    }
    .link
    {
      text-decoration:none;
      color:black;
    }
    .link:visited
    {
      color:black;
    }
    [hidden] {
      display: none !important;
    }
    .heading-title
    {
      color:white;
    }
    .heading
    {
      background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
      font-size:24px;
      display:flex;
      justify-content:space-between;
    }
    #home
    {
      text-decoration:none;
      cursor:pointer;
    }
    </style>
      <app-location id="location" url-space-regex="^[[rootPath]]" route="{{route}}" use-hash-as-path></app-location>
<app-route route="{{route}}" data="{{routeData}}" pattern="[[rootPath]]:page" tail="{{subRoute}}"></app-route>
<app-drawer-layout force-narrow>
  <app-drawer id="drawer" slot="drawer">
    <app-toolbar>Menu</app-toolbar>
    <!-- Nav on mobile: side nav menu -->
    <paper-listbox selected="[[page]]" attr-for-selected="name">
      <template is="dom-repeat" items="{{items}}">
        <paper-item name$="{{item.route}}"><a href="#[[rootPath]]{{item.route}}" class="link">{{item.label}}</a></paper-item>
      </template>
    </paper-listbox>
  </app-drawer>
  <app-header-layout has-scrolling-region>
    <app-header class="main-header" slot="header">
      <app-toolbar class="heading">
        <paper-icon-button icon="menu" aria-label="Menu" drawer-toggle hidden$="{{wideLayout}}">
        </paper-icon-button>
        <a href="#[[rootPath]]login" id="home"><span class="heading-title">Onbuddy</span></a>
      </app-toolbar>
        <!-- Nav on desktop: tabs -->
        <nav class="tabs-bar" hidden$="{{!wideLayout}}">
          <template is="dom-repeat" items="{{items}}">
          <ul>
        <li><a href="#[[rootPath]]{{item.route}}">{{item.label}}</a></li>
         </ul>
          </template>
         </nav>
      </app-toolbar>
      <iron-pages selected="[[page]]" attr-for-selected="name" role="main" fallback-selection="error404">
        <udaan-schemes id="udaanSchemes" name="udaan-schemes"></udaan-schemes>
        <donation-details id="donationDetails" name="donation-details"></donation-details>
        <login-page name="login"></login-page>
        <admin-home name="admin-home"></admin-home>
        <lms-app name="lms"></lms-app>
        <tsms-app name="tsms"></tsms-app>
        <user-home name="user-home"></user-home>
        <user-register name="user-register"></user-register>
        <error-view name="error404"></error-view>
      </iron-pages> 
    </app-header>
  </app-header-layout>
</app-drawer-layout>
<iron-media-query query="min-width: 600px" query-matches="{{wideLayout}}"></iron-media-query>
    `;
  }
  static get properties() {
    return {
      page: {
        type: String,
        observer: '_pageChanged'
      },
      wideLayout: {
        type: Boolean,
        value: false,
        observer: 'onLayoutChange',
      },
      items: {
        type: Array,
        value: function () {
          return [{label:'Time Sheet',route:'tsms'},{label:'leave management',route:'lms'},
          {label:'user login',route:'login'},{label:'user home',route:'user-home'},
          {label:'admin home',route:'admin-home'},{label:'user register',route:'user-register'}]
        }
      }
    };
  }
   /**
  *simple observer which is triggered when page property is changed
  *@param {String} newPage value of changed page 
  **/
 _pageChanged(newPage) {
  console.log(newPage)
  //Depending upon the changed page it lazy-imports the url
  switch (newPage) {
    case 'login': import('./login-page.js.js')
      break;
    case 'admin-home': import('./admin-home.js.js')
      break;
    case 'lms': import('./lms.js.js')
      break;
      case 'tsms': import('./tsms.js.js')
      break;
    case 'user-home': import('./user-home.js.js')
      break;
    case 'user-register': import('./user-register.js.js')
      break;
    default: import('./error-view.js.js')
      break;
  }
}
/** Hence complex triggers is required to define to observe changes on first time page load.
**/
static get observers() {
  return ['_routerChanged(routeData.page)']
}
/**
 * @author: Abhinav
 *@param {String} page Value of new page
**/
_routerChanged(page) {
  console.log(page)
  this.page = page || 'udaan-schemes';
}
/**
 *onLayoutChange() is a simple observer which is triggered when wideLayout Property is changed.
 It closes the drawer if the layout is wider than 600px
 *@param {Boolean} wide tells that layout is wide or not? it's a value in true or false
**/
onLayoutChange(wide) {
  var drawer = this.$.drawer;
  if (wide && drawer.opened) {
    drawer.opened = false;
  }
}
}

window.customElements.define('adwise-app', AdwiseApp);
