define(["./my-app.js"], function (_myApp) {
  "use strict";

  var _templateObject_45179dc0519611e8bd01b7d5284ceb4f = /*#__PURE__*/ babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n\n          padding: 10px;\n        }\n      </style>\n\n      <div class=\"card\">\n        <div class=\"circle\">2</div>\n        <h1>View Two</h1>\n        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>\n        <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>\n      </div>\n    "]);

  /**
   * @license
   * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  var MyView2 =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(MyView2, _PolymerElement);

    function MyView2() {
      babelHelpers.classCallCheck(this, MyView2);
      return babelHelpers.possibleConstructorReturn(this, (MyView2.__proto__ || Object.getPrototypeOf(MyView2)).apply(this, arguments));
    }

    babelHelpers.createClass(MyView2, null, [{
      key: "template",
      get: function get() {
        return (0, _myApp.html)(_templateObject_45179dc0519611e8bd01b7d5284ceb4f);
      }
    }]);
    return MyView2;
  }(_myApp.PolymerElement);

  window.customElements.define('my-view2', MyView2);
});