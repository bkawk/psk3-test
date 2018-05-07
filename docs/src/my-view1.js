define(["./my-app.js"], function (_myApp) {
  "use strict";

  var _templateObject_5259d09051ad11e88abeaf459922abc3 = /*#__PURE__*/ babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n\n          padding: 10px;\n        }\n      </style>\n\n      <div class=\"card\">\n        <div class=\"circle\">1</div>\n        <h1>View One</h1>\n        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>\n        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>\n      </div>\n    "]);

  /**
   * @license
   * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  var MyView1 =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(MyView1, _PolymerElement);

    function MyView1() {
      babelHelpers.classCallCheck(this, MyView1);
      return babelHelpers.possibleConstructorReturn(this, (MyView1.__proto__ || Object.getPrototypeOf(MyView1)).apply(this, arguments));
    }

    babelHelpers.createClass(MyView1, null, [{
      key: "template",
      get: function get() {
        return (0, _myApp.html)(_templateObject_5259d09051ad11e88abeaf459922abc3);
      }
    }]);
    return MyView1;
  }(_myApp.PolymerElement);

  window.customElements.define('my-view1', MyView1);
});