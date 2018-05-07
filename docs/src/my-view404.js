define(["./my-app.js"], function (_myApp) {
  "use strict";

  var _templateObject_4f6310b051ab11e8bf4f3f0c9428f644 = /*#__PURE__*/ babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n\n          padding: 10px 20px;\n        }\n      </style>\n\n      Oops you hit a 404. <a href=\"[[rootPath]]\">Head back to home.</a>\n    "]);

  /**
   * @license
   * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  var MyView404 =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(MyView404, _PolymerElement);

    function MyView404() {
      babelHelpers.classCallCheck(this, MyView404);
      return babelHelpers.possibleConstructorReturn(this, (MyView404.__proto__ || Object.getPrototypeOf(MyView404)).apply(this, arguments));
    }

    babelHelpers.createClass(MyView404, null, [{
      key: "template",
      get: function get() {
        return (0, _myApp.html)(_templateObject_4f6310b051ab11e8bf4f3f0c9428f644);
      }
    }]);
    return MyView404;
  }(_myApp.PolymerElement);

  window.customElements.define('my-view404', MyView404);
});