define(["./my-app.js"], function (_myApp) {
  "use strict";

  var _templateObject_4519c0a0519611e8bd01b7d5284ceb4f = /*#__PURE__*/ babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n\n          padding: 10px;\n        }\n      </style>\n\n      <div class=\"card\">\n        <div class=\"circle\">3</div>\n        <h1>View Three</h1>\n        <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>\n        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>\n      </div>\n    "]);

  /**
   * @license
   * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  var MyView3 =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(MyView3, _PolymerElement);

    function MyView3() {
      babelHelpers.classCallCheck(this, MyView3);
      return babelHelpers.possibleConstructorReturn(this, (MyView3.__proto__ || Object.getPrototypeOf(MyView3)).apply(this, arguments));
    }

    babelHelpers.createClass(MyView3, null, [{
      key: "template",
      get: function get() {
        return (0, _myApp.html)(_templateObject_4519c0a0519611e8bd01b7d5284ceb4f);
      }
    }]);
    return MyView3;
  }(_myApp.PolymerElement);

  window.customElements.define('my-view3', MyView3);
});