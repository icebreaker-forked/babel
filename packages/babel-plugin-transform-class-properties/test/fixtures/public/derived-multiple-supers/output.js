var Foo = /*#__PURE__*/function (_Bar) {
  "use strict";

  function Foo() {
    var _this;
    babelHelpers.classCallCheck(this, Foo);
    if (condition) {
      _this = babelHelpers.callSuper(this, Foo);
      babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "bar", "foo");
    } else {
      _this = babelHelpers.callSuper(this, Foo);
      babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "bar", "foo");
    }
    return babelHelpers.possibleConstructorReturn(_this);
  }
  babelHelpers.inherits(Foo, _Bar);
  return babelHelpers.createClass(Foo);
}(Bar);
