let _computedKey, _computedKey2;
var _initProto;
const dec = () => {};
class Foo {
  static {
    [_initProto] = babelHelpers.applyDecs(this, [[dec, 2, _computedKey], [dec, 2, _computedKey2]], []);
  }
  constructor() {
    _initProto(this);
  }
  [_computedKey = babelHelpers.toPropertyKey(getKeyI())]() {
    return 1;
  }
  [_computedKey2 = babelHelpers.toPropertyKey(getKeyJ())]() {
    return 2;
  }
}
