/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import "../node_modules/@polymer/polymer/polymer-element.js";
var $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = "<dom-module id=\"shared-styles\">\n  <template>\n    <style>\n      .card {\n        margin: 24px;\n        padding: 16px;\n        color: #757575;\n        border-radius: 5px;\n        background-color: #fff;\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n      }\n\n      .circle {\n        display: inline-block;\n        width: 64px;\n        height: 64px;\n        text-align: center;\n        color: #555;\n        border-radius: 50%;\n        background: #ddd;\n        font-size: 30px;\n        line-height: 64px;\n      }\n\n      h1 {\n        margin: 16px 0;\n        color: #212121;\n        font-size: 22px;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer);