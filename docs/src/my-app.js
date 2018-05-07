var _templateObject_4dc4ddf0519311e8ac08a719aee8244c = /*#__PURE__*/ babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          --app-primary-color: #4285f4;\n          --app-secondary-color: black;\n\n          display: block;\n        }\n\n        app-drawer-layout:not([narrow]) [drawer-toggle] {\n          display: none;\n        }\n\n        app-header {\n          color: #fff;\n          background-color: var(--app-primary-color);\n        }\n\n        app-header paper-icon-button {\n          --paper-icon-button-ink-color: white;\n        }\n\n        .drawer-list {\n          margin: 0 20px;\n        }\n\n        .drawer-list a {\n          display: block;\n          padding: 0 16px;\n          text-decoration: none;\n          color: var(--app-secondary-color);\n          line-height: 40px;\n        }\n\n        .drawer-list a.iron-selected {\n          color: black;\n          font-weight: bold;\n        }\n      </style>\n\n      <app-location route=\"{{route}}\" url-space-regex=\"^[[rootPath]]\">\n      </app-location>\n\n      <app-route route=\"{{route}}\" pattern=\"[[rootPath]]:page\" data=\"{{routeData}}\" tail=\"{{subroute}}\">\n      </app-route>\n\n      <app-drawer-layout fullbleed=\"\" narrow=\"{{narrow}}\">\n        <!-- Drawer content -->\n        <app-drawer id=\"drawer\" slot=\"drawer\" swipe-open=\"[[narrow]]\">\n          <app-toolbar>Menu</app-toolbar>\n          <iron-selector selected=\"[[page]]\" attr-for-selected=\"name\" class=\"drawer-list\" role=\"navigation\">\n            <a name=\"view1\" href=\"[[rootPath]]view1\">View One</a>\n            <a name=\"view2\" href=\"[[rootPath]]view2\">View Two</a>\n            <a name=\"view3\" href=\"[[rootPath]]view3\">View Three</a>\n          </iron-selector>\n        </app-drawer>\n\n        <!-- Main content -->\n        <app-header-layout has-scrolling-region=\"\">\n\n          <app-header slot=\"header\" condenses=\"\" reveals=\"\" effects=\"waterfall\">\n            <app-toolbar>\n              <paper-icon-button icon=\"my-icons:menu\" drawer-toggle=\"\"></paper-icon-button>\n              <div main-title=\"\">My App</div>\n            </app-toolbar>\n          </app-header>\n\n          <iron-pages selected=\"[[page]]\" attr-for-selected=\"name\" role=\"main\">\n            <my-view1 name=\"view1\"></my-view1>\n            <my-view2 name=\"view2\"></my-view2>\n            <my-view3 name=\"view3\"></my-view3>\n            <my-view404 name=\"view404\"></my-view404>\n          </iron-pages>\n        </app-header-layout>\n      </app-drawer-layout>\n    "]);

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import { setPassiveTouchGestures, setRootPath } from "../node_modules/@polymer/polymer/lib/utils/settings.js";
import "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";
import "../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "../node_modules/@polymer/app-layout/app-header/app-header.js";
import "../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js";
import "../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";
import "../node_modules/@polymer/app-route/app-location.js";
import "../node_modules/@polymer/app-route/app-route.js";
import "../node_modules/@polymer/iron-pages/iron-pages.js";
import "../node_modules/@polymer/iron-selector/iron-selector.js";
import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import './my-icons.js'; // Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.

setPassiveTouchGestures(true);
setRootPath(Polymer.rootPath);

var MyApp =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(MyApp, _PolymerElement);

  function MyApp() {
    babelHelpers.classCallCheck(this, MyApp);
    return babelHelpers.possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  babelHelpers.createClass(MyApp, [{
    key: "ready",
    value: function ready() {
      babelHelpers.get(MyApp.prototype.__proto__ || Object.getPrototypeOf(MyApp.prototype), "ready", this).call(this);
    }
  }, {
    key: "_routePageChanged",
    value: function _routePageChanged(page) {
      // Show the corresponding page according to the route.
      //
      // If no page was found in the route data, page will be an empty string.
      // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
      if (!page) {
        this.page = 'view1';
      } else if (['view1', 'view2', 'view3'].indexOf(page) !== -1) {
        this.page = page;
      } else {
        this.page = 'view404';
      } // Close a non-persistent drawer when the page & route are changed.


      if (!this.$.drawer.persistent) {
        this.$.drawer.close();
      }
    }
  }, {
    key: "_pageChanged",
    value: function _pageChanged(page) {
      // Import the page component on demand.
      //
      // Note: `polymer build` doesn't like string concatenation in the import
      // statement, so break it up.
      switch (page) {
        case 'view1':
          import('./my-view1.js');
          break;

        case 'view2':
          import('./my-view2.js');
          break;

        case 'view3':
          import('./my-view3.js');
          break;

        case 'view404':
          import('./my-view404.js');
          break;
      }
    }
  }], [{
    key: "template",
    get: function get() {
      return html(_templateObject_4dc4ddf0519311e8ac08a719aee8244c);
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        page: {
          type: String,
          reflectToAttribute: true,
          observer: '_pageChanged'
        },
        routeData: Object,
        subroute: Object
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_routePageChanged(routeData.page)'];
    }
  }]);
  return MyApp;
}(PolymerElement);

window.customElements.define('my-app', MyApp);