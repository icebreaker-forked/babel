let _ref;
var _initProto, _methodDecs, _A;
const dec = () => {};
_ref = (_methodDecs = deco, "method");
class A extends B {
  constructor() {
    let a = 2;
    _initProto(super(a));
    foo();
  }
  [_ref]() {}
}
_A = A;
[_initProto] = babelHelpers.applyDecs(_A, [[_methodDecs, 2, "method"]], []);
