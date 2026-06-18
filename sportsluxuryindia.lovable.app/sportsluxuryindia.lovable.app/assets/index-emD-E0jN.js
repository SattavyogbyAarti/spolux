const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/shop-QjpV4GZS.js",
      "assets/loader-circle-_7XAmGM6.js",
      "assets/EmptyState-Bo3N4r0I.js",
      "assets/arrow-left-CZeVgBHe.js",
      "assets/index-BUQHG6fv.js",
      "assets/product._handle-TcfjP5TL.js",
      "assets/product._handle._variantHandle-B3uayXyA.js",
    ])
) => i.map((i) => d[i]);
function Y1(e, a) {
  for (var s = 0; s < a.length; s++) {
    const o = a[s];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const l in o)
        if (l !== "default" && !(l in e)) {
          const c = Object.getOwnPropertyDescriptor(o, l);
          c &&
            Object.defineProperty(
              e,
              l,
              c.get ? c : { enumerable: !0, get: () => o[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
function tv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ff = { exports: {} },
  Ci = {};
var vg;
function V1() {
  if (vg) return Ci;
  vg = 1;
  var e = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.fragment");
  function s(o, l, c) {
    var d = null;
    if (
      (c !== void 0 && (d = "" + c),
      l.key !== void 0 && (d = "" + l.key),
      "key" in l)
    ) {
      c = {};
      for (var h in l) h !== "key" && (c[h] = l[h]);
    } else c = l;
    return (
      (l = c.ref),
      { $$typeof: e, type: o, key: d, ref: l !== void 0 ? l : null, props: c }
    );
  }
  return (Ci.Fragment = a), (Ci.jsx = s), (Ci.jsxs = s), Ci;
}
var bg;
function G1() {
  return bg || ((bg = 1), (ff.exports = V1())), ff.exports;
}
var O = G1(),
  df = { exports: {} },
  vt = {};
var Sg;
function Q1() {
  if (Sg) return vt;
  Sg = 1;
  var e = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    p = Symbol.for("react.activity"),
    b = Symbol.iterator;
  function x(N) {
    return N === null || typeof N != "object"
      ? null
      : ((N = (b && N[b]) || N["@@iterator"]),
        typeof N == "function" ? N : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    w = {};
  function C(N, Q, F) {
    (this.props = N),
      (this.context = Q),
      (this.refs = w),
      (this.updater = F || R);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (N, Q) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, N, Q, "setState");
    }),
    (C.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    });
  function k() {}
  k.prototype = C.prototype;
  function q(N, Q, F) {
    (this.props = N),
      (this.context = Q),
      (this.refs = w),
      (this.updater = F || R);
  }
  var j = (q.prototype = new k());
  (j.constructor = q), _(j, C.prototype), (j.isPureReactComponent = !0);
  var K = Array.isArray;
  function J() {}
  var Y = { H: null, A: null, T: null, S: null },
    U = Object.prototype.hasOwnProperty;
  function $(N, Q, F) {
    var tt = F.ref;
    return {
      $$typeof: e,
      type: N,
      key: Q,
      ref: tt !== void 0 ? tt : null,
      props: F,
    };
  }
  function it(N, Q) {
    return $(N.type, Q, N.props);
  }
  function at(N) {
    return typeof N == "object" && N !== null && N.$$typeof === e;
  }
  function mt(N) {
    var Q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      N.replace(/[=:]/g, function (F) {
        return Q[F];
      })
    );
  }
  var bt = /\/+/g;
  function jt(N, Q) {
    return typeof N == "object" && N !== null && N.key != null
      ? mt("" + N.key)
      : Q.toString(36);
  }
  function _t(N) {
    switch (N.status) {
      case "fulfilled":
        return N.value;
      case "rejected":
        throw N.reason;
      default:
        switch (
          (typeof N.status == "string"
            ? N.then(J, J)
            : ((N.status = "pending"),
              N.then(
                function (Q) {
                  N.status === "pending" &&
                    ((N.status = "fulfilled"), (N.value = Q));
                },
                function (Q) {
                  N.status === "pending" &&
                    ((N.status = "rejected"), (N.reason = Q));
                }
              )),
          N.status)
        ) {
          case "fulfilled":
            return N.value;
          case "rejected":
            throw N.reason;
        }
    }
    throw N;
  }
  function L(N, Q, F, tt, W) {
    var rt = typeof N;
    (rt === "undefined" || rt === "boolean") && (N = null);
    var yt = !1;
    if (N === null) yt = !0;
    else
      switch (rt) {
        case "bigint":
        case "string":
        case "number":
          yt = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case e:
            case a:
              yt = !0;
              break;
            case v:
              return (yt = N._init), L(yt(N._payload), Q, F, tt, W);
          }
      }
    if (yt)
      return (
        (W = W(N)),
        (yt = tt === "" ? "." + jt(N, 0) : tt),
        K(W)
          ? ((F = ""),
            yt != null && (F = yt.replace(bt, "$&/") + "/"),
            L(W, Q, F, "", function (be) {
              return be;
            }))
          : W != null &&
            (at(W) &&
              (W = it(
                W,
                F +
                  (W.key == null || (N && N.key === W.key)
                    ? ""
                    : ("" + W.key).replace(bt, "$&/") + "/") +
                  yt
              )),
            Q.push(W)),
        1
      );
    yt = 0;
    var pt = tt === "" ? "." : tt + ":";
    if (K(N))
      for (var dt = 0; dt < N.length; dt++)
        (tt = N[dt]), (rt = pt + jt(tt, dt)), (yt += L(tt, Q, F, rt, W));
    else if (((dt = x(N)), typeof dt == "function"))
      for (N = dt.call(N), dt = 0; !(tt = N.next()).done; )
        (tt = tt.value), (rt = pt + jt(tt, dt++)), (yt += L(tt, Q, F, rt, W));
    else if (rt === "object") {
      if (typeof N.then == "function") return L(_t(N), Q, F, tt, W);
      throw (
        ((Q = String(N)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Q === "[object Object]"
              ? "object with keys {" + Object.keys(N).join(", ") + "}"
              : Q) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return yt;
  }
  function Z(N, Q, F) {
    if (N == null) return N;
    var tt = [],
      W = 0;
    return (
      L(N, tt, "", "", function (rt) {
        return Q.call(F, rt, W++);
      }),
      tt
    );
  }
  function st(N) {
    if (N._status === -1) {
      var Q = N._result;
      (Q = Q()),
        Q.then(
          function (F) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 1), (N._result = F));
          },
          function (F) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 2), (N._result = F));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = Q));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var St =
      typeof reportError == "function"
        ? reportError
        : function (N) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var Q = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof N == "object" &&
                  N !== null &&
                  typeof N.message == "string"
                    ? String(N.message)
                    : String(N),
                error: N,
              });
              if (!window.dispatchEvent(Q)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", N);
              return;
            }
            console.error(N);
          },
    et = {
      map: Z,
      forEach: function (N, Q, F) {
        Z(
          N,
          function () {
            Q.apply(this, arguments);
          },
          F
        );
      },
      count: function (N) {
        var Q = 0;
        return (
          Z(N, function () {
            Q++;
          }),
          Q
        );
      },
      toArray: function (N) {
        return (
          Z(N, function (Q) {
            return Q;
          }) || []
        );
      },
      only: function (N) {
        if (!at(N))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return N;
      },
    };
  return (
    (vt.Activity = p),
    (vt.Children = et),
    (vt.Component = C),
    (vt.Fragment = s),
    (vt.Profiler = l),
    (vt.PureComponent = q),
    (vt.StrictMode = o),
    (vt.Suspense = g),
    (vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y),
    (vt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (N) {
        return Y.H.useMemoCache(N);
      },
    }),
    (vt.cache = function (N) {
      return function () {
        return N.apply(null, arguments);
      };
    }),
    (vt.cacheSignal = function () {
      return null;
    }),
    (vt.cloneElement = function (N, Q, F) {
      if (N == null)
        throw Error(
          "The argument must be a React element, but you passed " + N + "."
        );
      var tt = _({}, N.props),
        W = N.key;
      if (Q != null)
        for (rt in (Q.key !== void 0 && (W = "" + Q.key), Q))
          !U.call(Q, rt) ||
            rt === "key" ||
            rt === "__self" ||
            rt === "__source" ||
            (rt === "ref" && Q.ref === void 0) ||
            (tt[rt] = Q[rt]);
      var rt = arguments.length - 2;
      if (rt === 1) tt.children = F;
      else if (1 < rt) {
        for (var yt = Array(rt), pt = 0; pt < rt; pt++)
          yt[pt] = arguments[pt + 2];
        tt.children = yt;
      }
      return $(N.type, W, tt);
    }),
    (vt.createContext = function (N) {
      return (
        (N = {
          $$typeof: d,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (N.Provider = N),
        (N.Consumer = { $$typeof: c, _context: N }),
        N
      );
    }),
    (vt.createElement = function (N, Q, F) {
      var tt,
        W = {},
        rt = null;
      if (Q != null)
        for (tt in (Q.key !== void 0 && (rt = "" + Q.key), Q))
          U.call(Q, tt) &&
            tt !== "key" &&
            tt !== "__self" &&
            tt !== "__source" &&
            (W[tt] = Q[tt]);
      var yt = arguments.length - 2;
      if (yt === 1) W.children = F;
      else if (1 < yt) {
        for (var pt = Array(yt), dt = 0; dt < yt; dt++)
          pt[dt] = arguments[dt + 2];
        W.children = pt;
      }
      if (N && N.defaultProps)
        for (tt in ((yt = N.defaultProps), yt))
          W[tt] === void 0 && (W[tt] = yt[tt]);
      return $(N, rt, W);
    }),
    (vt.createRef = function () {
      return { current: null };
    }),
    (vt.forwardRef = function (N) {
      return { $$typeof: h, render: N };
    }),
    (vt.isValidElement = at),
    (vt.lazy = function (N) {
      return { $$typeof: v, _payload: { _status: -1, _result: N }, _init: st };
    }),
    (vt.memo = function (N, Q) {
      return { $$typeof: m, type: N, compare: Q === void 0 ? null : Q };
    }),
    (vt.startTransition = function (N) {
      var Q = Y.T,
        F = {};
      Y.T = F;
      try {
        var tt = N(),
          W = Y.S;
        W !== null && W(F, tt),
          typeof tt == "object" &&
            tt !== null &&
            typeof tt.then == "function" &&
            tt.then(J, St);
      } catch (rt) {
        St(rt);
      } finally {
        Q !== null && F.types !== null && (Q.types = F.types), (Y.T = Q);
      }
    }),
    (vt.unstable_useCacheRefresh = function () {
      return Y.H.useCacheRefresh();
    }),
    (vt.use = function (N) {
      return Y.H.use(N);
    }),
    (vt.useActionState = function (N, Q, F) {
      return Y.H.useActionState(N, Q, F);
    }),
    (vt.useCallback = function (N, Q) {
      return Y.H.useCallback(N, Q);
    }),
    (vt.useContext = function (N) {
      return Y.H.useContext(N);
    }),
    (vt.useDebugValue = function () {}),
    (vt.useDeferredValue = function (N, Q) {
      return Y.H.useDeferredValue(N, Q);
    }),
    (vt.useEffect = function (N, Q) {
      return Y.H.useEffect(N, Q);
    }),
    (vt.useEffectEvent = function (N) {
      return Y.H.useEffectEvent(N);
    }),
    (vt.useId = function () {
      return Y.H.useId();
    }),
    (vt.useImperativeHandle = function (N, Q, F) {
      return Y.H.useImperativeHandle(N, Q, F);
    }),
    (vt.useInsertionEffect = function (N, Q) {
      return Y.H.useInsertionEffect(N, Q);
    }),
    (vt.useLayoutEffect = function (N, Q) {
      return Y.H.useLayoutEffect(N, Q);
    }),
    (vt.useMemo = function (N, Q) {
      return Y.H.useMemo(N, Q);
    }),
    (vt.useOptimistic = function (N, Q) {
      return Y.H.useOptimistic(N, Q);
    }),
    (vt.useReducer = function (N, Q, F) {
      return Y.H.useReducer(N, Q, F);
    }),
    (vt.useRef = function (N) {
      return Y.H.useRef(N);
    }),
    (vt.useState = function (N) {
      return Y.H.useState(N);
    }),
    (vt.useSyncExternalStore = function (N, Q, F) {
      return Y.H.useSyncExternalStore(N, Q, F);
    }),
    (vt.useTransition = function () {
      return Y.H.useTransition();
    }),
    (vt.version = "19.2.5"),
    vt
  );
}
var xg;
function Ii() {
  return xg || ((xg = 1), (df.exports = Q1())), df.exports;
}
var A = Ii();
const nt = tv(A),
  rd = Y1({ __proto__: null, default: nt }, [A]);
var hf = { exports: {} },
  Ai = {},
  mf = { exports: {} },
  pf = {};
var wg;
function I1() {
  return (
    wg ||
      ((wg = 1),
      (function (e) {
        function a(L, Z) {
          var st = L.length;
          L.push(Z);
          t: for (; 0 < st; ) {
            var St = (st - 1) >>> 1,
              et = L[St];
            if (0 < l(et, Z)) (L[St] = Z), (L[st] = et), (st = St);
            else break t;
          }
        }
        function s(L) {
          return L.length === 0 ? null : L[0];
        }
        function o(L) {
          if (L.length === 0) return null;
          var Z = L[0],
            st = L.pop();
          if (st !== Z) {
            L[0] = st;
            t: for (var St = 0, et = L.length, N = et >>> 1; St < N; ) {
              var Q = 2 * (St + 1) - 1,
                F = L[Q],
                tt = Q + 1,
                W = L[tt];
              if (0 > l(F, st))
                tt < et && 0 > l(W, F)
                  ? ((L[St] = W), (L[tt] = st), (St = tt))
                  : ((L[St] = F), (L[Q] = st), (St = Q));
              else if (tt < et && 0 > l(W, st))
                (L[St] = W), (L[tt] = st), (St = tt);
              else break t;
            }
          }
          return Z;
        }
        function l(L, Z) {
          var st = L.sortIndex - Z.sortIndex;
          return st !== 0 ? st : L.id - Z.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          e.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          e.unstable_now = function () {
            return d.now() - h;
          };
        }
        var g = [],
          m = [],
          v = 1,
          p = null,
          b = 3,
          x = !1,
          R = !1,
          _ = !1,
          w = !1,
          C = typeof setTimeout == "function" ? setTimeout : null,
          k = typeof clearTimeout == "function" ? clearTimeout : null,
          q = typeof setImmediate < "u" ? setImmediate : null;
        function j(L) {
          for (var Z = s(m); Z !== null; ) {
            if (Z.callback === null) o(m);
            else if (Z.startTime <= L)
              o(m), (Z.sortIndex = Z.expirationTime), a(g, Z);
            else break;
            Z = s(m);
          }
        }
        function K(L) {
          if (((_ = !1), j(L), !R))
            if (s(g) !== null) (R = !0), J || ((J = !0), mt());
            else {
              var Z = s(m);
              Z !== null && _t(K, Z.startTime - L);
            }
        }
        var J = !1,
          Y = -1,
          U = 5,
          $ = -1;
        function it() {
          return w ? !0 : !(e.unstable_now() - $ < U);
        }
        function at() {
          if (((w = !1), J)) {
            var L = e.unstable_now();
            $ = L;
            var Z = !0;
            try {
              t: {
                (R = !1), _ && ((_ = !1), k(Y), (Y = -1)), (x = !0);
                var st = b;
                try {
                  e: {
                    for (
                      j(L), p = s(g);
                      p !== null && !(p.expirationTime > L && it());

                    ) {
                      var St = p.callback;
                      if (typeof St == "function") {
                        (p.callback = null), (b = p.priorityLevel);
                        var et = St(p.expirationTime <= L);
                        if (((L = e.unstable_now()), typeof et == "function")) {
                          (p.callback = et), j(L), (Z = !0);
                          break e;
                        }
                        p === s(g) && o(g), j(L);
                      } else o(g);
                      p = s(g);
                    }
                    if (p !== null) Z = !0;
                    else {
                      var N = s(m);
                      N !== null && _t(K, N.startTime - L), (Z = !1);
                    }
                  }
                  break t;
                } finally {
                  (p = null), (b = st), (x = !1);
                }
                Z = void 0;
              }
            } finally {
              Z ? mt() : (J = !1);
            }
          }
        }
        var mt;
        if (typeof q == "function")
          mt = function () {
            q(at);
          };
        else if (typeof MessageChannel < "u") {
          var bt = new MessageChannel(),
            jt = bt.port2;
          (bt.port1.onmessage = at),
            (mt = function () {
              jt.postMessage(null);
            });
        } else
          mt = function () {
            C(at, 0);
          };
        function _t(L, Z) {
          Y = C(function () {
            L(e.unstable_now());
          }, Z);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (e.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (U = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (e.unstable_next = function (L) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = b;
            }
            var st = b;
            b = Z;
            try {
              return L();
            } finally {
              b = st;
            }
          }),
          (e.unstable_requestPaint = function () {
            w = !0;
          }),
          (e.unstable_runWithPriority = function (L, Z) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var st = b;
            b = L;
            try {
              return Z();
            } finally {
              b = st;
            }
          }),
          (e.unstable_scheduleCallback = function (L, Z, st) {
            var St = e.unstable_now();
            switch (
              (typeof st == "object" && st !== null
                ? ((st = st.delay),
                  (st = typeof st == "number" && 0 < st ? St + st : St))
                : (st = St),
              L)
            ) {
              case 1:
                var et = -1;
                break;
              case 2:
                et = 250;
                break;
              case 5:
                et = 1073741823;
                break;
              case 4:
                et = 1e4;
                break;
              default:
                et = 5e3;
            }
            return (
              (et = st + et),
              (L = {
                id: v++,
                callback: Z,
                priorityLevel: L,
                startTime: st,
                expirationTime: et,
                sortIndex: -1,
              }),
              st > St
                ? ((L.sortIndex = st),
                  a(m, L),
                  s(g) === null &&
                    L === s(m) &&
                    (_ ? (k(Y), (Y = -1)) : (_ = !0), _t(K, st - St)))
                : ((L.sortIndex = et),
                  a(g, L),
                  R || x || ((R = !0), J || ((J = !0), mt()))),
              L
            );
          }),
          (e.unstable_shouldYield = it),
          (e.unstable_wrapCallback = function (L) {
            var Z = b;
            return function () {
              var st = b;
              b = Z;
              try {
                return L.apply(this, arguments);
              } finally {
                b = st;
              }
            };
          });
      })(pf)),
    pf
  );
}
var Eg;
function F1() {
  return Eg || ((Eg = 1), (mf.exports = I1())), mf.exports;
}
var gf = { exports: {} },
  Ae = {};
var _g;
function X1() {
  if (_g) return Ae;
  _g = 1;
  var e = Ii();
  function a(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var o = {
      d: {
        f: s,
        r: function () {
          throw Error(a(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function c(g, m, v) {
    var p =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: p == null ? null : "" + p,
      children: g,
      containerInfo: m,
      implementation: v,
    };
  }
  var d = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Ae.createPortal = function (g, m) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(a(299));
      return c(g, m, null, v);
    }),
    (Ae.flushSync = function (g) {
      var m = d.T,
        v = o.p;
      try {
        if (((d.T = null), (o.p = 2), g)) return g();
      } finally {
        (d.T = m), (o.p = v), o.d.f();
      }
    }),
    (Ae.preconnect = function (g, m) {
      typeof g == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        o.d.C(g, m));
    }),
    (Ae.prefetchDNS = function (g) {
      typeof g == "string" && o.d.D(g);
    }),
    (Ae.preinit = function (g, m) {
      if (typeof g == "string" && m && typeof m.as == "string") {
        var v = m.as,
          p = h(v, m.crossOrigin),
          b = typeof m.integrity == "string" ? m.integrity : void 0,
          x = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        v === "style"
          ? o.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: p,
              integrity: b,
              fetchPriority: x,
            })
          : v === "script" &&
            o.d.X(g, {
              crossOrigin: p,
              integrity: b,
              fetchPriority: x,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Ae.preinitModule = function (g, m) {
      if (typeof g == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var v = h(m.as, m.crossOrigin);
            o.d.M(g, {
              crossOrigin: v,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && o.d.M(g);
    }),
    (Ae.preload = function (g, m) {
      if (
        typeof g == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var v = m.as,
          p = h(v, m.crossOrigin);
        o.d.L(g, v, {
          crossOrigin: p,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Ae.preloadModule = function (g, m) {
      if (typeof g == "string")
        if (m) {
          var v = h(m.as, m.crossOrigin);
          o.d.m(g, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else o.d.m(g);
    }),
    (Ae.requestFormReset = function (g) {
      o.d.r(g);
    }),
    (Ae.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (Ae.useFormState = function (g, m, v) {
      return d.H.useFormState(g, m, v);
    }),
    (Ae.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (Ae.version = "19.2.5"),
    Ae
  );
}
var Rg;
function ev() {
  if (Rg) return gf.exports;
  Rg = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (a) {
        console.error(a);
      }
  }
  return e(), (gf.exports = X1()), gf.exports;
}
var Tg;
function K1() {
  if (Tg) return Ai;
  Tg = 1;
  var e = F1(),
    a = Ii(),
    s = ev();
  function o(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        n += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function c(t) {
    var n = t,
      r = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do (n = t), (n.flags & 4098) !== 0 && (r = n.return), (t = n.return);
      while (t);
    }
    return n.tag === 3 ? r : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (c(t) !== t) throw Error(o(188));
  }
  function m(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = c(t)), n === null)) throw Error(o(188));
      return n !== t ? null : t;
    }
    for (var r = t, i = n; ; ) {
      var u = r.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((i = u.return), i !== null)) {
          r = i;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === r) return g(u), t;
          if (f === i) return g(u), n;
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== i.return) (r = u), (i = f);
      else {
        for (var y = !1, S = u.child; S; ) {
          if (S === r) {
            (y = !0), (r = u), (i = f);
            break;
          }
          if (S === i) {
            (y = !0), (i = u), (r = f);
            break;
          }
          S = S.sibling;
        }
        if (!y) {
          for (S = f.child; S; ) {
            if (S === r) {
              (y = !0), (r = f), (i = u);
              break;
            }
            if (S === i) {
              (y = !0), (i = f), (r = u);
              break;
            }
            S = S.sibling;
          }
          if (!y) throw Error(o(189));
        }
      }
      if (r.alternate !== i) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? t : n;
  }
  function v(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((n = v(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var p = Object.assign,
    b = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    _ = Symbol.for("react.fragment"),
    w = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    k = Symbol.for("react.consumer"),
    q = Symbol.for("react.context"),
    j = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    J = Symbol.for("react.suspense_list"),
    Y = Symbol.for("react.memo"),
    U = Symbol.for("react.lazy"),
    $ = Symbol.for("react.activity"),
    it = Symbol.for("react.memo_cache_sentinel"),
    at = Symbol.iterator;
  function mt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (at && t[at]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var bt = Symbol.for("react.client.reference");
  function jt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === bt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case _:
        return "Fragment";
      case C:
        return "Profiler";
      case w:
        return "StrictMode";
      case K:
        return "Suspense";
      case J:
        return "SuspenseList";
      case $:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case R:
          return "Portal";
        case q:
          return t.displayName || "Context";
        case k:
          return (t._context.displayName || "Context") + ".Consumer";
        case j:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Y:
          return (
            (n = t.displayName || null), n !== null ? n : jt(t.type) || "Memo"
          );
        case U:
          (n = t._payload), (t = t._init);
          try {
            return jt(t(n));
          } catch {}
      }
    return null;
  }
  var _t = Array.isArray,
    L = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    st = { pending: !1, data: null, method: null, action: null },
    St = [],
    et = -1;
  function N(t) {
    return { current: t };
  }
  function Q(t) {
    0 > et || ((t.current = St[et]), (St[et] = null), et--);
  }
  function F(t, n) {
    et++, (St[et] = t.current), (t.current = n);
  }
  var tt = N(null),
    W = N(null),
    rt = N(null),
    yt = N(null);
  function pt(t, n) {
    switch ((F(rt, n), F(W, t), F(tt, null), n.nodeType)) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? Pp(t) : 0;
        break;
      default:
        if (((t = n.tagName), (n = n.namespaceURI)))
          (n = Pp(n)), (t = Yp(n, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Q(tt), F(tt, t);
  }
  function dt() {
    Q(tt), Q(W), Q(rt);
  }
  function be(t) {
    t.memoizedState !== null && F(yt, t);
    var n = tt.current,
      r = Yp(n, t.type);
    n !== r && (F(W, t), F(tt, r));
  }
  function ie(t) {
    W.current === t && (Q(tt), Q(W)),
      yt.current === t && (Q(yt), (Ei._currentValue = st));
  }
  var ee, hn;
  function oe(t) {
    if (ee === void 0)
      try {
        throw Error();
      } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        (ee = (n && n[1]) || ""),
          (hn =
            -1 <
            r.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < r.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ee +
      t +
      hn
    );
  }
  var Za = !1;
  function jn(t, n) {
    if (!t || Za) return "";
    Za = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (V) {
                  var P = V;
                }
                Reflect.construct(t, [], X);
              } else {
                try {
                  X.call();
                } catch (V) {
                  P = V;
                }
                t.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                P = V;
              }
              (X = t()) &&
                typeof X.catch == "function" &&
                X.catch(function () {});
            }
          } catch (V) {
            if (V && P && typeof V.stack == "string") return [V.stack, P.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = i.DetermineComponentFrameRoot(),
        y = f[0],
        S = f[1];
      if (y && S) {
        var M = y.split(`
`),
          H = S.split(`
`);
        for (
          u = i = 0;
          i < M.length && !M[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; u < H.length && !H[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (i === M.length || u === H.length)
          for (
            i = M.length - 1, u = H.length - 1;
            1 <= i && 0 <= u && M[i] !== H[u];

          )
            u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (M[i] !== H[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || M[i] !== H[u])) {
                  var G =
                    `
` + M[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      G.includes("<anonymous>") &&
                      (G = G.replace("<anonymous>", t.displayName)),
                    G
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      (Za = !1), (Error.prepareStackTrace = r);
    }
    return (r = t ? t.displayName || t.name : "") ? oe(r) : "";
  }
  function wn(t, n) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return oe(t.type);
      case 16:
        return oe("Lazy");
      case 13:
        return t.child !== n && n !== null
          ? oe("Suspense Fallback")
          : oe("Suspense");
      case 19:
        return oe("SuspenseList");
      case 0:
      case 15:
        return jn(t.type, !1);
      case 11:
        return jn(t.type.render, !1);
      case 1:
        return jn(t.type, !0);
      case 31:
        return oe("Activity");
      default:
        return "";
    }
  }
  function tn(t) {
    try {
      var n = "",
        r = null;
      do (n += wn(t, r)), (r = t), (t = t.return);
      while (t);
      return n;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var Se = Object.prototype.hasOwnProperty,
    Ie = e.unstable_scheduleCallback,
    Ja = e.unstable_cancelCallback,
    de = e.unstable_shouldYield,
    En = e.unstable_requestPaint,
    he = e.unstable_now,
    Bt = e.unstable_getCurrentPriorityLevel,
    Kt = e.unstable_ImmediatePriority,
    en = e.unstable_UserBlockingPriority,
    Ln = e.unstable_NormalPriority,
    Us = e.unstable_LowPriority,
    Un = e.unstable_IdlePriority,
    Xi = e.log,
    oa = e.unstable_setDisableYieldValue,
    $a = null,
    Oe = null;
  function mn(t) {
    if (
      (typeof Xi == "function" && oa(t),
      Oe && typeof Oe.setStrictMode == "function")
    )
      try {
        Oe.setStrictMode($a, t);
      } catch {}
  }
  var Te = Math.clz32 ? Math.clz32 : _n,
    Wl = Math.log,
    Bs = Math.LN2;
  function _n(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Wl(t) / Bs) | 0)) | 0;
  }
  var zr = 256,
    jr = 262144,
    Wa = 4194304;
  function Rn(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function gt(t, n, r) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var u = 0,
      f = t.suspendedLanes,
      y = t.pingedLanes;
    t = t.warmLanes;
    var S = i & 134217727;
    return (
      S !== 0
        ? ((i = S & ~f),
          i !== 0
            ? (u = Rn(i))
            : ((y &= S),
              y !== 0
                ? (u = Rn(y))
                : r || ((r = S & ~t), r !== 0 && (u = Rn(r)))))
        : ((S = i & ~f),
          S !== 0
            ? (u = Rn(S))
            : y !== 0
            ? (u = Rn(y))
            : r || ((r = i & ~t), r !== 0 && (u = Rn(r)))),
      u === 0
        ? 0
        : n !== 0 &&
          n !== u &&
          (n & f) === 0 &&
          ((f = u & -u),
          (r = n & -n),
          f >= r || (f === 32 && (r & 4194048) !== 0))
        ? n
        : u
    );
  }
  function Qt(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function me(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ce() {
    var t = Wa;
    return (Wa <<= 1), (Wa & 62914560) === 0 && (Wa = 4194304), t;
  }
  function la(t) {
    for (var n = [], r = 0; 31 > r; r++) n.push(t);
    return n;
  }
  function Xt(t, n) {
    (t.pendingLanes |= n),
      n !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function De(t, n, r, i, u, f) {
    var y = t.pendingLanes;
    (t.pendingLanes = r),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= r),
      (t.entangledLanes &= r),
      (t.errorRecoveryDisabledLanes &= r),
      (t.shellSuspendCounter = 0);
    var S = t.entanglements,
      M = t.expirationTimes,
      H = t.hiddenUpdates;
    for (r = y & ~r; 0 < r; ) {
      var G = 31 - Te(r),
        X = 1 << G;
      (S[G] = 0), (M[G] = -1);
      var P = H[G];
      if (P !== null)
        for (H[G] = null, G = 0; G < P.length; G++) {
          var V = P[G];
          V !== null && (V.lane &= -536870913);
        }
      r &= ~X;
    }
    i !== 0 && tr(t, i, 0),
      f !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(y & ~n));
  }
  function tr(t, n, r) {
    (t.pendingLanes |= n), (t.suspendedLanes &= ~n);
    var i = 31 - Te(n);
    (t.entangledLanes |= n),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (r & 261930));
  }
  function ze(t, n) {
    var r = (t.entangledLanes |= n);
    for (t = t.entanglements; r; ) {
      var i = 31 - Te(r),
        u = 1 << i;
      (u & n) | (t[i] & n) && (t[i] |= n), (r &= ~u);
    }
  }
  function je(t, n) {
    var r = n & -n;
    return (
      (r = (r & 42) !== 0 ? 1 : Lr(r)),
      (r & (t.suspendedLanes | n)) !== 0 ? 0 : r
    );
  }
  function Lr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function pn(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function tu() {
    var t = Z.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : fg(t.type));
  }
  function Cd(t, n) {
    var r = Z.p;
    try {
      return (Z.p = t), n();
    } finally {
      Z.p = r;
    }
  }
  var ua = Math.random().toString(36).slice(2),
    xe = "__reactFiber$" + ua,
    Le = "__reactProps$" + ua,
    Ur = "__reactContainer$" + ua,
    eu = "__reactEvents$" + ua,
    Nb = "__reactListeners$" + ua,
    Db = "__reactHandles$" + ua,
    Ad = "__reactResources$" + ua,
    ks = "__reactMarker$" + ua;
  function nu(t) {
    delete t[xe], delete t[Le], delete t[eu], delete t[Nb], delete t[Db];
  }
  function Br(t) {
    var n = t[xe];
    if (n) return n;
    for (var r = t.parentNode; r; ) {
      if ((n = r[Ur] || r[xe])) {
        if (
          ((r = n.alternate),
          n.child !== null || (r !== null && r.child !== null))
        )
          for (t = Kp(t); t !== null; ) {
            if ((r = t[xe])) return r;
            t = Kp(t);
          }
        return n;
      }
      (t = r), (r = t.parentNode);
    }
    return null;
  }
  function kr(t) {
    if ((t = t[xe] || t[Ur])) {
      var n = t.tag;
      if (
        n === 5 ||
        n === 6 ||
        n === 13 ||
        n === 31 ||
        n === 26 ||
        n === 27 ||
        n === 3
      )
        return t;
    }
    return null;
  }
  function Hs(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Hr(t) {
    var n = t[Ad];
    return (
      n ||
        (n = t[Ad] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function pe(t) {
    t[ks] = !0;
  }
  var Od = new Set(),
    Md = {};
  function er(t, n) {
    qr(t, n), qr(t + "Capture", n);
  }
  function qr(t, n) {
    for (Md[t] = n, t = 0; t < n.length; t++) Od.add(n[t]);
  }
  var zb = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Nd = {},
    Dd = {};
  function jb(t) {
    return Se.call(Dd, t)
      ? !0
      : Se.call(Nd, t)
      ? !1
      : zb.test(t)
      ? (Dd[t] = !0)
      : ((Nd[t] = !0), !1);
  }
  function Ki(t, n, r) {
    if (jb(n))
      if (r === null) t.removeAttribute(n);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var i = n.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + r);
      }
  }
  function Zi(t, n, r) {
    if (r === null) t.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + r);
    }
  }
  function Bn(t, n, r, i) {
    if (i === null) t.removeAttribute(r);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(r);
          return;
      }
      t.setAttributeNS(n, r, "" + i);
    }
  }
  function nn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function zd(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Lb(t, n, r) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
    if (
      !t.hasOwnProperty(n) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var u = i.get,
        f = i.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (y) {
            (r = "" + y), f.call(this, y);
          },
        }),
        Object.defineProperty(t, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (y) {
            r = "" + y;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[n];
          },
        }
      );
    }
  }
  function au(t) {
    if (!t._valueTracker) {
      var n = zd(t) ? "checked" : "value";
      t._valueTracker = Lb(t, n, "" + t[n]);
    }
  }
  function jd(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var r = n.getValue(),
      i = "";
    return (
      t && (i = zd(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== r ? (n.setValue(t), !0) : !1
    );
  }
  function Ji(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Ub = /[\n"\\]/g;
  function an(t) {
    return t.replace(Ub, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function ru(t, n, r, i, u, f, y, S) {
    (t.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.type = y)
        : t.removeAttribute("type"),
      n != null
        ? y === "number"
          ? ((n === 0 && t.value === "") || t.value != n) &&
            (t.value = "" + nn(n))
          : t.value !== "" + nn(n) && (t.value = "" + nn(n))
        : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
      n != null
        ? su(t, y, nn(n))
        : r != null
        ? su(t, y, nn(r))
        : i != null && t.removeAttribute("value"),
      u == null && f != null && (t.defaultChecked = !!f),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      S != null &&
      typeof S != "function" &&
      typeof S != "symbol" &&
      typeof S != "boolean"
        ? (t.name = "" + nn(S))
        : t.removeAttribute("name");
  }
  function Ld(t, n, r, i, u, f, y, S) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.type = f),
      n != null || r != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || n != null)) {
        au(t);
        return;
      }
      (r = r != null ? "" + nn(r) : ""),
        (n = n != null ? "" + nn(n) : r),
        S || n === t.value || (t.value = n),
        (t.defaultValue = n);
    }
    (i = i ?? u),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = S ? t.checked : !!i),
      (t.defaultChecked = !!i),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (t.name = y),
      au(t);
  }
  function su(t, n, r) {
    (n === "number" && Ji(t.ownerDocument) === t) ||
      t.defaultValue === "" + r ||
      (t.defaultValue = "" + r);
  }
  function Pr(t, n, r, i) {
    if (((t = t.options), n)) {
      n = {};
      for (var u = 0; u < r.length; u++) n["$" + r[u]] = !0;
      for (r = 0; r < t.length; r++)
        (u = n.hasOwnProperty("$" + t[r].value)),
          t[r].selected !== u && (t[r].selected = u),
          u && i && (t[r].defaultSelected = !0);
    } else {
      for (r = "" + nn(r), n = null, u = 0; u < t.length; u++) {
        if (t[u].value === r) {
          (t[u].selected = !0), i && (t[u].defaultSelected = !0);
          return;
        }
        n !== null || t[u].disabled || (n = t[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ud(t, n, r) {
    if (
      n != null &&
      ((n = "" + nn(n)), n !== t.value && (t.value = n), r == null)
    ) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = r != null ? "" + nn(r) : "";
  }
  function Bd(t, n, r, i) {
    if (n == null) {
      if (i != null) {
        if (r != null) throw Error(o(92));
        if (_t(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        r = i;
      }
      r == null && (r = ""), (n = r);
    }
    (r = nn(n)),
      (t.defaultValue = r),
      (i = t.textContent),
      i === r && i !== "" && i !== null && (t.value = i),
      au(t);
  }
  function Yr(t, n) {
    if (n) {
      var r = t.firstChild;
      if (r && r === t.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var Bb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function kd(t, n, r) {
    var i = n.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === ""
      ? i
        ? t.setProperty(n, "")
        : n === "float"
        ? (t.cssFloat = "")
        : (t[n] = "")
      : i
      ? t.setProperty(n, r)
      : typeof r != "number" || r === 0 || Bb.has(n)
      ? n === "float"
        ? (t.cssFloat = r)
        : (t[n] = ("" + r).trim())
      : (t[n] = r + "px");
  }
  function Hd(t, n, r) {
    if (n != null && typeof n != "object") throw Error(o(62));
    if (((t = t.style), r != null)) {
      for (var i in r)
        !r.hasOwnProperty(i) ||
          (n != null && n.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
            ? (t.cssFloat = "")
            : (t[i] = ""));
      for (var u in n)
        (i = n[u]), n.hasOwnProperty(u) && r[u] !== i && kd(t, u, i);
    } else for (var f in n) n.hasOwnProperty(f) && kd(t, f, n[f]);
  }
  function iu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var kb = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Hb =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $i(t) {
    return Hb.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function kn() {}
  var ou = null;
  function lu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Vr = null,
    Gr = null;
  function qd(t) {
    var n = kr(t);
    if (n && (t = n.stateNode)) {
      var r = t[Le] || null;
      t: switch (((t = n.stateNode), n.type)) {
        case "input":
          if (
            (ru(
              t,
              r.value,
              r.defaultValue,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name
            ),
            (n = r.name),
            r.type === "radio" && n != null)
          ) {
            for (r = t; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                'input[name="' + an("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < r.length;
              n++
            ) {
              var i = r[n];
              if (i !== t && i.form === t.form) {
                var u = i[Le] || null;
                if (!u) throw Error(o(90));
                ru(
                  i,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (n = 0; n < r.length; n++)
              (i = r[n]), i.form === t.form && jd(i);
          }
          break t;
        case "textarea":
          Ud(t, r.value, r.defaultValue);
          break t;
        case "select":
          (n = r.value), n != null && Pr(t, !!r.multiple, n, !1);
      }
    }
  }
  var uu = !1;
  function Pd(t, n, r) {
    if (uu) return t(n, r);
    uu = !0;
    try {
      var i = t(n);
      return i;
    } finally {
      if (
        ((uu = !1),
        (Vr !== null || Gr !== null) &&
          (qo(), Vr && ((n = Vr), (t = Gr), (Gr = Vr = null), qd(n), t)))
      )
        for (n = 0; n < t.length; n++) qd(t[n]);
    }
  }
  function qs(t, n) {
    var r = t.stateNode;
    if (r === null) return null;
    var i = r[Le] || null;
    if (i === null) return null;
    r = i[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (r && typeof r != "function") throw Error(o(231, n, typeof r));
    return r;
  }
  var Hn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    cu = !1;
  if (Hn)
    try {
      var Ps = {};
      Object.defineProperty(Ps, "passive", {
        get: function () {
          cu = !0;
        },
      }),
        window.addEventListener("test", Ps, Ps),
        window.removeEventListener("test", Ps, Ps);
    } catch {
      cu = !1;
    }
  var ca = null,
    fu = null,
    Wi = null;
  function Yd() {
    if (Wi) return Wi;
    var t,
      n = fu,
      r = n.length,
      i,
      u = "value" in ca ? ca.value : ca.textContent,
      f = u.length;
    for (t = 0; t < r && n[t] === u[t]; t++);
    var y = r - t;
    for (i = 1; i <= y && n[r - i] === u[f - i]; i++);
    return (Wi = u.slice(t, 1 < i ? 1 - i : void 0));
  }
  function to(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function eo() {
    return !0;
  }
  function Vd() {
    return !1;
  }
  function Ue(t) {
    function n(r, i, u, f, y) {
      (this._reactName = r),
        (this._targetInst = u),
        (this.type = i),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null);
      for (var S in t)
        t.hasOwnProperty(S) && ((r = t[S]), (this[S] = r ? r(f) : f[S]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? eo
          : Vd),
        (this.isPropagationStopped = Vd),
        this
      );
    }
    return (
      p(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = eo));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = eo));
        },
        persist: function () {},
        isPersistent: eo,
      }),
      n
    );
  }
  var nr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    no = Ue(nr),
    Ys = p({}, nr, { view: 0, detail: 0 }),
    qb = Ue(Ys),
    du,
    hu,
    Vs,
    ao = p({}, Ys, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Vs &&
              (Vs && t.type === "mousemove"
                ? ((du = t.screenX - Vs.screenX), (hu = t.screenY - Vs.screenY))
                : (hu = du = 0),
              (Vs = t)),
            du);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : hu;
      },
    }),
    Gd = Ue(ao),
    Pb = p({}, ao, { dataTransfer: 0 }),
    Yb = Ue(Pb),
    Vb = p({}, Ys, { relatedTarget: 0 }),
    mu = Ue(Vb),
    Gb = p({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qb = Ue(Gb),
    Ib = p({}, nr, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Fb = Ue(Ib),
    Xb = p({}, nr, { data: 0 }),
    Qd = Ue(Xb),
    Kb = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Zb = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Jb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function $b(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = Jb[t])
      ? !!n[t]
      : !1;
  }
  function pu() {
    return $b;
  }
  var Wb = p({}, Ys, {
      key: function (t) {
        if (t.key) {
          var n = Kb[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = to(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Zb[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pu,
      charCode: function (t) {
        return t.type === "keypress" ? to(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? to(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    tS = Ue(Wb),
    eS = p({}, ao, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Id = Ue(eS),
    nS = p({}, Ys, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pu,
    }),
    aS = Ue(nS),
    rS = p({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sS = Ue(rS),
    iS = p({}, ao, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    oS = Ue(iS),
    lS = p({}, nr, { newState: 0, oldState: 0 }),
    uS = Ue(lS),
    cS = [9, 13, 27, 32],
    gu = Hn && "CompositionEvent" in window,
    Gs = null;
  Hn && "documentMode" in document && (Gs = document.documentMode);
  var fS = Hn && "TextEvent" in window && !Gs,
    Fd = Hn && (!gu || (Gs && 8 < Gs && 11 >= Gs)),
    Xd = " ",
    Kd = !1;
  function Zd(t, n) {
    switch (t) {
      case "keyup":
        return cS.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jd(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Qr = !1;
  function dS(t, n) {
    switch (t) {
      case "compositionend":
        return Jd(n);
      case "keypress":
        return n.which !== 32 ? null : ((Kd = !0), Xd);
      case "textInput":
        return (t = n.data), t === Xd && Kd ? null : t;
      default:
        return null;
    }
  }
  function hS(t, n) {
    if (Qr)
      return t === "compositionend" || (!gu && Zd(t, n))
        ? ((t = Yd()), (Wi = fu = ca = null), (Qr = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Fd && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var mS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function $d(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!mS[t.type] : n === "textarea";
  }
  function Wd(t, n, r, i) {
    Vr ? (Gr ? Gr.push(i) : (Gr = [i])) : (Vr = i),
      (n = Fo(n, "onChange")),
      0 < n.length &&
        ((r = new no("onChange", "change", null, r, i)),
        t.push({ event: r, listeners: n }));
  }
  var Qs = null,
    Is = null;
  function pS(t) {
    Lp(t, 0);
  }
  function ro(t) {
    var n = Hs(t);
    if (jd(n)) return t;
  }
  function th(t, n) {
    if (t === "change") return n;
  }
  var eh = !1;
  if (Hn) {
    var yu;
    if (Hn) {
      var vu = "oninput" in document;
      if (!vu) {
        var nh = document.createElement("div");
        nh.setAttribute("oninput", "return;"),
          (vu = typeof nh.oninput == "function");
      }
      yu = vu;
    } else yu = !1;
    eh = yu && (!document.documentMode || 9 < document.documentMode);
  }
  function ah() {
    Qs && (Qs.detachEvent("onpropertychange", rh), (Is = Qs = null));
  }
  function rh(t) {
    if (t.propertyName === "value" && ro(Is)) {
      var n = [];
      Wd(n, Is, t, lu(t)), Pd(pS, n);
    }
  }
  function gS(t, n, r) {
    t === "focusin"
      ? (ah(), (Qs = n), (Is = r), Qs.attachEvent("onpropertychange", rh))
      : t === "focusout" && ah();
  }
  function yS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ro(Is);
  }
  function vS(t, n) {
    if (t === "click") return ro(n);
  }
  function bS(t, n) {
    if (t === "input" || t === "change") return ro(n);
  }
  function SS(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var Fe = typeof Object.is == "function" ? Object.is : SS;
  function Fs(t, n) {
    if (Fe(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var r = Object.keys(t),
      i = Object.keys(n);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var u = r[i];
      if (!Se.call(n, u) || !Fe(t[u], n[u])) return !1;
    }
    return !0;
  }
  function sh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ih(t, n) {
    var r = sh(t);
    t = 0;
    for (var i; r; ) {
      if (r.nodeType === 3) {
        if (((i = t + r.textContent.length), t <= n && i >= n))
          return { node: r, offset: n - t };
        t = i;
      }
      t: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break t;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = sh(r);
    }
  }
  function oh(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? oh(t, n.parentNode)
        : "contains" in t
        ? t.contains(n)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function lh(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = Ji(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) t = n.contentWindow;
      else break;
      n = Ji(t.document);
    }
    return n;
  }
  function bu(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var xS = Hn && "documentMode" in document && 11 >= document.documentMode,
    Ir = null,
    Su = null,
    Xs = null,
    xu = !1;
  function uh(t, n, r) {
    var i =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    xu ||
      Ir == null ||
      Ir !== Ji(i) ||
      ((i = Ir),
      "selectionStart" in i && bu(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Xs && Fs(Xs, i)) ||
        ((Xs = i),
        (i = Fo(Su, "onSelect")),
        0 < i.length &&
          ((n = new no("onSelect", "select", null, n, r)),
          t.push({ event: n, listeners: i }),
          (n.target = Ir))));
  }
  function ar(t, n) {
    var r = {};
    return (
      (r[t.toLowerCase()] = n.toLowerCase()),
      (r["Webkit" + t] = "webkit" + n),
      (r["Moz" + t] = "moz" + n),
      r
    );
  }
  var Fr = {
      animationend: ar("Animation", "AnimationEnd"),
      animationiteration: ar("Animation", "AnimationIteration"),
      animationstart: ar("Animation", "AnimationStart"),
      transitionrun: ar("Transition", "TransitionRun"),
      transitionstart: ar("Transition", "TransitionStart"),
      transitioncancel: ar("Transition", "TransitionCancel"),
      transitionend: ar("Transition", "TransitionEnd"),
    },
    wu = {},
    ch = {};
  Hn &&
    ((ch = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Fr.animationend.animation,
      delete Fr.animationiteration.animation,
      delete Fr.animationstart.animation),
    "TransitionEvent" in window || delete Fr.transitionend.transition);
  function rr(t) {
    if (wu[t]) return wu[t];
    if (!Fr[t]) return t;
    var n = Fr[t],
      r;
    for (r in n) if (n.hasOwnProperty(r) && r in ch) return (wu[t] = n[r]);
    return t;
  }
  var fh = rr("animationend"),
    dh = rr("animationiteration"),
    hh = rr("animationstart"),
    wS = rr("transitionrun"),
    ES = rr("transitionstart"),
    _S = rr("transitioncancel"),
    mh = rr("transitionend"),
    ph = new Map(),
    Eu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Eu.push("scrollEnd");
  function gn(t, n) {
    ph.set(t, n), er(n, [t]);
  }
  var so =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var n = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(n)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    rn = [],
    Xr = 0,
    _u = 0;
  function io() {
    for (var t = Xr, n = (_u = Xr = 0); n < t; ) {
      var r = rn[n];
      rn[n++] = null;
      var i = rn[n];
      rn[n++] = null;
      var u = rn[n];
      rn[n++] = null;
      var f = rn[n];
      if (((rn[n++] = null), i !== null && u !== null)) {
        var y = i.pending;
        y === null ? (u.next = u) : ((u.next = y.next), (y.next = u)),
          (i.pending = u);
      }
      f !== 0 && gh(r, u, f);
    }
  }
  function oo(t, n, r, i) {
    (rn[Xr++] = t),
      (rn[Xr++] = n),
      (rn[Xr++] = r),
      (rn[Xr++] = i),
      (_u |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i);
  }
  function Ru(t, n, r, i) {
    return oo(t, n, r, i), lo(t);
  }
  function sr(t, n) {
    return oo(t, null, null, n), lo(t);
  }
  function gh(t, n, r) {
    t.lanes |= r;
    var i = t.alternate;
    i !== null && (i.lanes |= r);
    for (var u = !1, f = t.return; f !== null; )
      (f.childLanes |= r),
        (i = f.alternate),
        i !== null && (i.childLanes |= r),
        f.tag === 22 &&
          ((t = f.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = f),
        (f = f.return);
    return t.tag === 3
      ? ((f = t.stateNode),
        u &&
          n !== null &&
          ((u = 31 - Te(r)),
          (t = f.hiddenUpdates),
          (i = t[u]),
          i === null ? (t[u] = [n]) : i.push(n),
          (n.lane = r | 536870912)),
        f)
      : null;
  }
  function lo(t) {
    if (50 < gi) throw ((gi = 0), (jc = null), Error(o(185)));
    for (var n = t.return; n !== null; ) (t = n), (n = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Kr = {};
  function RS(t, n, r, i) {
    (this.tag = t),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Xe(t, n, r, i) {
    return new RS(t, n, r, i);
  }
  function Tu(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function qn(t, n) {
    var r = t.alternate;
    return (
      r === null
        ? ((r = Xe(t.tag, n, t.key, t.mode)),
          (r.elementType = t.elementType),
          (r.type = t.type),
          (r.stateNode = t.stateNode),
          (r.alternate = t),
          (t.alternate = r))
        : ((r.pendingProps = n),
          (r.type = t.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = t.flags & 65011712),
      (r.childLanes = t.childLanes),
      (r.lanes = t.lanes),
      (r.child = t.child),
      (r.memoizedProps = t.memoizedProps),
      (r.memoizedState = t.memoizedState),
      (r.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (r.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (r.sibling = t.sibling),
      (r.index = t.index),
      (r.ref = t.ref),
      (r.refCleanup = t.refCleanup),
      r
    );
  }
  function yh(t, n) {
    t.flags &= 65011714;
    var r = t.alternate;
    return (
      r === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = r.childLanes),
          (t.lanes = r.lanes),
          (t.child = r.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = r.memoizedProps),
          (t.memoizedState = r.memoizedState),
          (t.updateQueue = r.updateQueue),
          (t.type = r.type),
          (n = r.dependencies),
          (t.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function uo(t, n, r, i, u, f) {
    var y = 0;
    if (((i = t), typeof t == "function")) Tu(t) && (y = 1);
    else if (typeof t == "string")
      y = M1(t, r, tt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case $:
          return (t = Xe(31, r, n, u)), (t.elementType = $), (t.lanes = f), t;
        case _:
          return ir(r.children, u, f, n);
        case w:
          (y = 8), (u |= 24);
          break;
        case C:
          return (
            (t = Xe(12, r, n, u | 2)), (t.elementType = C), (t.lanes = f), t
          );
        case K:
          return (t = Xe(13, r, n, u)), (t.elementType = K), (t.lanes = f), t;
        case J:
          return (t = Xe(19, r, n, u)), (t.elementType = J), (t.lanes = f), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case q:
                y = 10;
                break t;
              case k:
                y = 9;
                break t;
              case j:
                y = 11;
                break t;
              case Y:
                y = 14;
                break t;
              case U:
                (y = 16), (i = null);
                break t;
            }
          (y = 29),
            (r = Error(o(130, t === null ? "null" : typeof t, ""))),
            (i = null);
      }
    return (
      (n = Xe(y, r, n, u)), (n.elementType = t), (n.type = i), (n.lanes = f), n
    );
  }
  function ir(t, n, r, i) {
    return (t = Xe(7, t, i, n)), (t.lanes = r), t;
  }
  function Cu(t, n, r) {
    return (t = Xe(6, t, null, n)), (t.lanes = r), t;
  }
  function vh(t) {
    var n = Xe(18, null, null, 0);
    return (n.stateNode = t), n;
  }
  function Au(t, n, r) {
    return (
      (n = Xe(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = r),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  var bh = new WeakMap();
  function sn(t, n) {
    if (typeof t == "object" && t !== null) {
      var r = bh.get(t);
      return r !== void 0
        ? r
        : ((n = { value: t, source: n, stack: tn(n) }), bh.set(t, n), n);
    }
    return { value: t, source: n, stack: tn(n) };
  }
  var Zr = [],
    Jr = 0,
    co = null,
    Ks = 0,
    on = [],
    ln = 0,
    fa = null,
    Tn = 1,
    Cn = "";
  function Pn(t, n) {
    (Zr[Jr++] = Ks), (Zr[Jr++] = co), (co = t), (Ks = n);
  }
  function Sh(t, n, r) {
    (on[ln++] = Tn), (on[ln++] = Cn), (on[ln++] = fa), (fa = t);
    var i = Tn;
    t = Cn;
    var u = 32 - Te(i) - 1;
    (i &= ~(1 << u)), (r += 1);
    var f = 32 - Te(n) + u;
    if (30 < f) {
      var y = u - (u % 5);
      (f = (i & ((1 << y) - 1)).toString(32)),
        (i >>= y),
        (u -= y),
        (Tn = (1 << (32 - Te(n) + u)) | (r << u) | i),
        (Cn = f + t);
    } else (Tn = (1 << f) | (r << u) | i), (Cn = t);
  }
  function Ou(t) {
    t.return !== null && (Pn(t, 1), Sh(t, 1, 0));
  }
  function Mu(t) {
    for (; t === co; )
      (co = Zr[--Jr]), (Zr[Jr] = null), (Ks = Zr[--Jr]), (Zr[Jr] = null);
    for (; t === fa; )
      (fa = on[--ln]),
        (on[ln] = null),
        (Cn = on[--ln]),
        (on[ln] = null),
        (Tn = on[--ln]),
        (on[ln] = null);
  }
  function xh(t, n) {
    (on[ln++] = Tn),
      (on[ln++] = Cn),
      (on[ln++] = fa),
      (Tn = n.id),
      (Cn = n.overflow),
      (fa = t);
  }
  var we = null,
    Vt = null,
    Ot = !1,
    da = null,
    un = !1,
    Nu = Error(o(519));
  function ha(t) {
    var n = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Zs(sn(n, t)), Nu);
  }
  function wh(t) {
    var n = t.stateNode,
      r = t.type,
      i = t.memoizedProps;
    switch (((n[xe] = t), (n[Le] = i), r)) {
      case "dialog":
        Tt("cancel", n), Tt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Tt("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < vi.length; r++) Tt(vi[r], n);
        break;
      case "source":
        Tt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Tt("error", n), Tt("load", n);
        break;
      case "details":
        Tt("toggle", n);
        break;
      case "input":
        Tt("invalid", n),
          Ld(
            n,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
        break;
      case "select":
        Tt("invalid", n);
        break;
      case "textarea":
        Tt("invalid", n), Bd(n, i.value, i.defaultValue, i.children);
    }
    (r = i.children),
      (typeof r != "string" && typeof r != "number" && typeof r != "bigint") ||
      n.textContent === "" + r ||
      i.suppressHydrationWarning === !0 ||
      Hp(n.textContent, r)
        ? (i.popover != null && (Tt("beforetoggle", n), Tt("toggle", n)),
          i.onScroll != null && Tt("scroll", n),
          i.onScrollEnd != null && Tt("scrollend", n),
          i.onClick != null && (n.onclick = kn),
          (n = !0))
        : (n = !1),
      n || ha(t, !0);
  }
  function Eh(t) {
    for (we = t.return; we; )
      switch (we.tag) {
        case 5:
        case 31:
        case 13:
          un = !1;
          return;
        case 27:
        case 3:
          un = !0;
          return;
        default:
          we = we.return;
      }
  }
  function $r(t) {
    if (t !== we) return !1;
    if (!Ot) return Eh(t), (Ot = !0), !1;
    var n = t.tag,
      r;
    if (
      ((r = n !== 3 && n !== 27) &&
        ((r = n === 5) &&
          ((r = t.type),
          (r =
            !(r !== "form" && r !== "button") || Kc(t.type, t.memoizedProps))),
        (r = !r)),
      r && Vt && ha(t),
      Eh(t),
      n === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Vt = Xp(t);
    } else if (n === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Vt = Xp(t);
    } else
      n === 27
        ? ((n = Vt), Ca(t.type) ? ((t = tf), (tf = null), (Vt = t)) : (Vt = n))
        : (Vt = we ? fn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function or() {
    (Vt = we = null), (Ot = !1);
  }
  function Du() {
    var t = da;
    return (
      t !== null &&
        (qe === null ? (qe = t) : qe.push.apply(qe, t), (da = null)),
      t
    );
  }
  function Zs(t) {
    da === null ? (da = [t]) : da.push(t);
  }
  var zu = N(null),
    lr = null,
    Yn = null;
  function ma(t, n, r) {
    F(zu, n._currentValue), (n._currentValue = r);
  }
  function Vn(t) {
    (t._currentValue = zu.current), Q(zu);
  }
  function ju(t, n, r) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), i !== null && (i.childLanes |= n))
          : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n),
        t === r)
      )
        break;
      t = t.return;
    }
  }
  function Lu(t, n, r, i) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var y = u.child;
        f = f.firstContext;
        t: for (; f !== null; ) {
          var S = f;
          f = u;
          for (var M = 0; M < n.length; M++)
            if (S.context === n[M]) {
              (f.lanes |= r),
                (S = f.alternate),
                S !== null && (S.lanes |= r),
                ju(f.return, r, t),
                i || (y = null);
              break t;
            }
          f = S.next;
        }
      } else if (u.tag === 18) {
        if (((y = u.return), y === null)) throw Error(o(341));
        (y.lanes |= r),
          (f = y.alternate),
          f !== null && (f.lanes |= r),
          ju(y, r, t),
          (y = null);
      } else y = u.child;
      if (y !== null) y.return = u;
      else
        for (y = u; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((u = y.sibling), u !== null)) {
            (u.return = y.return), (y = u);
            break;
          }
          y = y.return;
        }
      u = y;
    }
  }
  function Wr(t, n, r, i) {
    t = null;
    for (var u = n, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var y = u.alternate;
        if (y === null) throw Error(o(387));
        if (((y = y.memoizedProps), y !== null)) {
          var S = u.type;
          Fe(u.pendingProps.value, y.value) ||
            (t !== null ? t.push(S) : (t = [S]));
        }
      } else if (u === yt.current) {
        if (((y = u.alternate), y === null)) throw Error(o(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Ei) : (t = [Ei]));
      }
      u = u.return;
    }
    t !== null && Lu(n, t, r, i), (n.flags |= 262144);
  }
  function fo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Fe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ur(t) {
    (lr = t),
      (Yn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Ee(t) {
    return _h(lr, t);
  }
  function ho(t, n) {
    return lr === null && ur(t), _h(t, n);
  }
  function _h(t, n) {
    var r = n._currentValue;
    if (((n = { context: n, memoizedValue: r, next: null }), Yn === null)) {
      if (t === null) throw Error(o(308));
      (Yn = n),
        (t.dependencies = { lanes: 0, firstContext: n }),
        (t.flags |= 524288);
    } else Yn = Yn.next = n;
    return r;
  }
  var TS =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (r, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                t.forEach(function (r) {
                  return r();
                });
            };
          },
    CS = e.unstable_scheduleCallback,
    AS = e.unstable_NormalPriority,
    ne = {
      $$typeof: q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Uu() {
    return { controller: new TS(), data: new Map(), refCount: 0 };
  }
  function Js(t) {
    t.refCount--,
      t.refCount === 0 &&
        CS(AS, function () {
          t.controller.abort();
        });
  }
  var $s = null,
    Bu = 0,
    ts = 0,
    es = null;
  function OS(t, n) {
    if ($s === null) {
      var r = ($s = []);
      (Bu = 0),
        (ts = qc()),
        (es = {
          status: "pending",
          value: void 0,
          then: function (i) {
            r.push(i);
          },
        });
    }
    return Bu++, n.then(Rh, Rh), n;
  }
  function Rh() {
    if (--Bu === 0 && $s !== null) {
      es !== null && (es.status = "fulfilled");
      var t = $s;
      ($s = null), (ts = 0), (es = null);
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function MS(t, n) {
    var r = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          r.push(u);
        },
      };
    return (
      t.then(
        function () {
          (i.status = "fulfilled"), (i.value = n);
          for (var u = 0; u < r.length; u++) (0, r[u])(n);
        },
        function (u) {
          for (i.status = "rejected", i.reason = u, u = 0; u < r.length; u++)
            (0, r[u])(void 0);
        }
      ),
      i
    );
  }
  var Th = L.S;
  L.S = function (t, n) {
    (up = he()),
      typeof n == "object" &&
        n !== null &&
        typeof n.then == "function" &&
        OS(t, n),
      Th !== null && Th(t, n);
  };
  var cr = N(null);
  function ku() {
    var t = cr.current;
    return t !== null ? t : Pt.pooledCache;
  }
  function mo(t, n) {
    n === null ? F(cr, cr.current) : F(cr, n.pool);
  }
  function Ch() {
    var t = ku();
    return t === null ? null : { parent: ne._currentValue, pool: t };
  }
  var ns = Error(o(460)),
    Hu = Error(o(474)),
    po = Error(o(542)),
    go = { then: function () {} };
  function Ah(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Oh(t, n, r) {
    switch (
      ((r = t[r]),
      r === void 0 ? t.push(n) : r !== n && (n.then(kn, kn), (n = r)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((t = n.reason), Nh(t), t);
      default:
        if (typeof n.status == "string") n.then(kn, kn);
        else {
          if (((t = Pt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          (t = n),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (n.status === "pending") {
                  var u = n;
                  (u.status = "fulfilled"), (u.value = i);
                }
              },
              function (i) {
                if (n.status === "pending") {
                  var u = n;
                  (u.status = "rejected"), (u.reason = i);
                }
              }
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((t = n.reason), Nh(t), t);
        }
        throw ((dr = n), ns);
    }
  }
  function fr(t) {
    try {
      var n = t._init;
      return n(t._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function"
        ? ((dr = r), ns)
        : r;
    }
  }
  var dr = null;
  function Mh() {
    if (dr === null) throw Error(o(459));
    var t = dr;
    return (dr = null), t;
  }
  function Nh(t) {
    if (t === ns || t === po) throw Error(o(483));
  }
  var as = null,
    Ws = 0;
  function yo(t) {
    var n = Ws;
    return (Ws += 1), as === null && (as = []), Oh(as, t, n);
  }
  function ti(t, n) {
    (n = n.props.ref), (t.ref = n !== void 0 ? n : null);
  }
  function vo(t, n) {
    throw n.$$typeof === b
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : t
          )
        ));
  }
  function Dh(t) {
    function n(z, D) {
      if (t) {
        var B = z.deletions;
        B === null ? ((z.deletions = [D]), (z.flags |= 16)) : B.push(D);
      }
    }
    function r(z, D) {
      if (!t) return null;
      for (; D !== null; ) n(z, D), (D = D.sibling);
      return null;
    }
    function i(z) {
      for (var D = new Map(); z !== null; )
        z.key !== null ? D.set(z.key, z) : D.set(z.index, z), (z = z.sibling);
      return D;
    }
    function u(z, D) {
      return (z = qn(z, D)), (z.index = 0), (z.sibling = null), z;
    }
    function f(z, D, B) {
      return (
        (z.index = B),
        t
          ? ((B = z.alternate),
            B !== null
              ? ((B = B.index), B < D ? ((z.flags |= 67108866), D) : B)
              : ((z.flags |= 67108866), D))
          : ((z.flags |= 1048576), D)
      );
    }
    function y(z) {
      return t && z.alternate === null && (z.flags |= 67108866), z;
    }
    function S(z, D, B, I) {
      return D === null || D.tag !== 6
        ? ((D = Cu(B, z.mode, I)), (D.return = z), D)
        : ((D = u(D, B)), (D.return = z), D);
    }
    function M(z, D, B, I) {
      var ft = B.type;
      return ft === _
        ? G(z, D, B.props.children, I, B.key)
        : D !== null &&
          (D.elementType === ft ||
            (typeof ft == "object" &&
              ft !== null &&
              ft.$$typeof === U &&
              fr(ft) === D.type))
        ? ((D = u(D, B.props)), ti(D, B), (D.return = z), D)
        : ((D = uo(B.type, B.key, B.props, null, z.mode, I)),
          ti(D, B),
          (D.return = z),
          D);
    }
    function H(z, D, B, I) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== B.containerInfo ||
        D.stateNode.implementation !== B.implementation
        ? ((D = Au(B, z.mode, I)), (D.return = z), D)
        : ((D = u(D, B.children || [])), (D.return = z), D);
    }
    function G(z, D, B, I, ft) {
      return D === null || D.tag !== 7
        ? ((D = ir(B, z.mode, I, ft)), (D.return = z), D)
        : ((D = u(D, B)), (D.return = z), D);
    }
    function X(z, D, B) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return (D = Cu("" + D, z.mode, B)), (D.return = z), D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case x:
            return (
              (B = uo(D.type, D.key, D.props, null, z.mode, B)),
              ti(B, D),
              (B.return = z),
              B
            );
          case R:
            return (D = Au(D, z.mode, B)), (D.return = z), D;
          case U:
            return (D = fr(D)), X(z, D, B);
        }
        if (_t(D) || mt(D))
          return (D = ir(D, z.mode, B, null)), (D.return = z), D;
        if (typeof D.then == "function") return X(z, yo(D), B);
        if (D.$$typeof === q) return X(z, ho(z, D), B);
        vo(z, D);
      }
      return null;
    }
    function P(z, D, B, I) {
      var ft = D !== null ? D.key : null;
      if (
        (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
      )
        return ft !== null ? null : S(z, D, "" + B, I);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case x:
            return B.key === ft ? M(z, D, B, I) : null;
          case R:
            return B.key === ft ? H(z, D, B, I) : null;
          case U:
            return (B = fr(B)), P(z, D, B, I);
        }
        if (_t(B) || mt(B)) return ft !== null ? null : G(z, D, B, I, null);
        if (typeof B.then == "function") return P(z, D, yo(B), I);
        if (B.$$typeof === q) return P(z, D, ho(z, B), I);
        vo(z, B);
      }
      return null;
    }
    function V(z, D, B, I, ft) {
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return (z = z.get(B) || null), S(D, z, "" + I, ft);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case x:
            return (
              (z = z.get(I.key === null ? B : I.key) || null), M(D, z, I, ft)
            );
          case R:
            return (
              (z = z.get(I.key === null ? B : I.key) || null), H(D, z, I, ft)
            );
          case U:
            return (I = fr(I)), V(z, D, B, I, ft);
        }
        if (_t(I) || mt(I)) return (z = z.get(B) || null), G(D, z, I, ft, null);
        if (typeof I.then == "function") return V(z, D, B, yo(I), ft);
        if (I.$$typeof === q) return V(z, D, B, ho(D, I), ft);
        vo(D, I);
      }
      return null;
    }
    function ot(z, D, B, I) {
      for (
        var ft = null, Mt = null, ct = D, wt = (D = 0), At = null;
        ct !== null && wt < B.length;
        wt++
      ) {
        ct.index > wt ? ((At = ct), (ct = null)) : (At = ct.sibling);
        var Nt = P(z, ct, B[wt], I);
        if (Nt === null) {
          ct === null && (ct = At);
          break;
        }
        t && ct && Nt.alternate === null && n(z, ct),
          (D = f(Nt, D, wt)),
          Mt === null ? (ft = Nt) : (Mt.sibling = Nt),
          (Mt = Nt),
          (ct = At);
      }
      if (wt === B.length) return r(z, ct), Ot && Pn(z, wt), ft;
      if (ct === null) {
        for (; wt < B.length; wt++)
          (ct = X(z, B[wt], I)),
            ct !== null &&
              ((D = f(ct, D, wt)),
              Mt === null ? (ft = ct) : (Mt.sibling = ct),
              (Mt = ct));
        return Ot && Pn(z, wt), ft;
      }
      for (ct = i(ct); wt < B.length; wt++)
        (At = V(ct, z, wt, B[wt], I)),
          At !== null &&
            (t &&
              At.alternate !== null &&
              ct.delete(At.key === null ? wt : At.key),
            (D = f(At, D, wt)),
            Mt === null ? (ft = At) : (Mt.sibling = At),
            (Mt = At));
      return (
        t &&
          ct.forEach(function (Da) {
            return n(z, Da);
          }),
        Ot && Pn(z, wt),
        ft
      );
    }
    function ht(z, D, B, I) {
      if (B == null) throw Error(o(151));
      for (
        var ft = null,
          Mt = null,
          ct = D,
          wt = (D = 0),
          At = null,
          Nt = B.next();
        ct !== null && !Nt.done;
        wt++, Nt = B.next()
      ) {
        ct.index > wt ? ((At = ct), (ct = null)) : (At = ct.sibling);
        var Da = P(z, ct, Nt.value, I);
        if (Da === null) {
          ct === null && (ct = At);
          break;
        }
        t && ct && Da.alternate === null && n(z, ct),
          (D = f(Da, D, wt)),
          Mt === null ? (ft = Da) : (Mt.sibling = Da),
          (Mt = Da),
          (ct = At);
      }
      if (Nt.done) return r(z, ct), Ot && Pn(z, wt), ft;
      if (ct === null) {
        for (; !Nt.done; wt++, Nt = B.next())
          (Nt = X(z, Nt.value, I)),
            Nt !== null &&
              ((D = f(Nt, D, wt)),
              Mt === null ? (ft = Nt) : (Mt.sibling = Nt),
              (Mt = Nt));
        return Ot && Pn(z, wt), ft;
      }
      for (ct = i(ct); !Nt.done; wt++, Nt = B.next())
        (Nt = V(ct, z, wt, Nt.value, I)),
          Nt !== null &&
            (t &&
              Nt.alternate !== null &&
              ct.delete(Nt.key === null ? wt : Nt.key),
            (D = f(Nt, D, wt)),
            Mt === null ? (ft = Nt) : (Mt.sibling = Nt),
            (Mt = Nt));
      return (
        t &&
          ct.forEach(function (P1) {
            return n(z, P1);
          }),
        Ot && Pn(z, wt),
        ft
      );
    }
    function qt(z, D, B, I) {
      if (
        (typeof B == "object" &&
          B !== null &&
          B.type === _ &&
          B.key === null &&
          (B = B.props.children),
        typeof B == "object" && B !== null)
      ) {
        switch (B.$$typeof) {
          case x:
            t: {
              for (var ft = B.key; D !== null; ) {
                if (D.key === ft) {
                  if (((ft = B.type), ft === _)) {
                    if (D.tag === 7) {
                      r(z, D.sibling),
                        (I = u(D, B.props.children)),
                        (I.return = z),
                        (z = I);
                      break t;
                    }
                  } else if (
                    D.elementType === ft ||
                    (typeof ft == "object" &&
                      ft !== null &&
                      ft.$$typeof === U &&
                      fr(ft) === D.type)
                  ) {
                    r(z, D.sibling),
                      (I = u(D, B.props)),
                      ti(I, B),
                      (I.return = z),
                      (z = I);
                    break t;
                  }
                  r(z, D);
                  break;
                } else n(z, D);
                D = D.sibling;
              }
              B.type === _
                ? ((I = ir(B.props.children, z.mode, I, B.key)),
                  (I.return = z),
                  (z = I))
                : ((I = uo(B.type, B.key, B.props, null, z.mode, I)),
                  ti(I, B),
                  (I.return = z),
                  (z = I));
            }
            return y(z);
          case R:
            t: {
              for (ft = B.key; D !== null; ) {
                if (D.key === ft)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === B.containerInfo &&
                    D.stateNode.implementation === B.implementation
                  ) {
                    r(z, D.sibling),
                      (I = u(D, B.children || [])),
                      (I.return = z),
                      (z = I);
                    break t;
                  } else {
                    r(z, D);
                    break;
                  }
                else n(z, D);
                D = D.sibling;
              }
              (I = Au(B, z.mode, I)), (I.return = z), (z = I);
            }
            return y(z);
          case U:
            return (B = fr(B)), qt(z, D, B, I);
        }
        if (_t(B)) return ot(z, D, B, I);
        if (mt(B)) {
          if (((ft = mt(B)), typeof ft != "function")) throw Error(o(150));
          return (B = ft.call(B)), ht(z, D, B, I);
        }
        if (typeof B.then == "function") return qt(z, D, yo(B), I);
        if (B.$$typeof === q) return qt(z, D, ho(z, B), I);
        vo(z, B);
      }
      return (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
        ? ((B = "" + B),
          D !== null && D.tag === 6
            ? (r(z, D.sibling), (I = u(D, B)), (I.return = z), (z = I))
            : (r(z, D), (I = Cu(B, z.mode, I)), (I.return = z), (z = I)),
          y(z))
        : r(z, D);
    }
    return function (z, D, B, I) {
      try {
        Ws = 0;
        var ft = qt(z, D, B, I);
        return (as = null), ft;
      } catch (ct) {
        if (ct === ns || ct === po) throw ct;
        var Mt = Xe(29, ct, null, z.mode);
        return (Mt.lanes = I), (Mt.return = z), Mt;
      }
    };
  }
  var hr = Dh(!0),
    zh = Dh(!1),
    pa = !1;
  function qu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Pu(t, n) {
    (t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function ga(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ya(t, n, r) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (zt & 2) !== 0)) {
      var u = i.pending;
      return (
        u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
        (i.pending = n),
        (n = lo(t)),
        gh(t, null, r),
        n
      );
    }
    return oo(t, i, n, r), lo(t);
  }
  function ei(t, n, r) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (r & 4194048) !== 0))
    ) {
      var i = n.lanes;
      (i &= t.pendingLanes), (r |= i), (n.lanes = r), ze(t, r);
    }
  }
  function Yu(t, n) {
    var r = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), r === i)) {
      var u = null,
        f = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var y = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null,
          };
          f === null ? (u = f = y) : (f = f.next = y), (r = r.next);
        } while (r !== null);
        f === null ? (u = f = n) : (f = f.next = n);
      } else u = f = n;
      (r = {
        baseState: i.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = r);
      return;
    }
    (t = r.lastBaseUpdate),
      t === null ? (r.firstBaseUpdate = n) : (t.next = n),
      (r.lastBaseUpdate = n);
  }
  var Vu = !1;
  function ni() {
    if (Vu) {
      var t = es;
      if (t !== null) throw t;
    }
  }
  function ai(t, n, r, i) {
    Vu = !1;
    var u = t.updateQueue;
    pa = !1;
    var f = u.firstBaseUpdate,
      y = u.lastBaseUpdate,
      S = u.shared.pending;
    if (S !== null) {
      u.shared.pending = null;
      var M = S,
        H = M.next;
      (M.next = null), y === null ? (f = H) : (y.next = H), (y = M);
      var G = t.alternate;
      G !== null &&
        ((G = G.updateQueue),
        (S = G.lastBaseUpdate),
        S !== y &&
          (S === null ? (G.firstBaseUpdate = H) : (S.next = H),
          (G.lastBaseUpdate = M)));
    }
    if (f !== null) {
      var X = u.baseState;
      (y = 0), (G = H = M = null), (S = f);
      do {
        var P = S.lane & -536870913,
          V = P !== S.lane;
        if (V ? (Ct & P) === P : (i & P) === P) {
          P !== 0 && P === ts && (Vu = !0),
            G !== null &&
              (G = G.next =
                {
                  lane: 0,
                  tag: S.tag,
                  payload: S.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var ot = t,
              ht = S;
            P = n;
            var qt = r;
            switch (ht.tag) {
              case 1:
                if (((ot = ht.payload), typeof ot == "function")) {
                  X = ot.call(qt, X, P);
                  break t;
                }
                X = ot;
                break t;
              case 3:
                ot.flags = (ot.flags & -65537) | 128;
              case 0:
                if (
                  ((ot = ht.payload),
                  (P = typeof ot == "function" ? ot.call(qt, X, P) : ot),
                  P == null)
                )
                  break t;
                X = p({}, X, P);
                break t;
              case 2:
                pa = !0;
            }
          }
          (P = S.callback),
            P !== null &&
              ((t.flags |= 64),
              V && (t.flags |= 8192),
              (V = u.callbacks),
              V === null ? (u.callbacks = [P]) : V.push(P));
        } else
          (V = {
            lane: P,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            G === null ? ((H = G = V), (M = X)) : (G = G.next = V),
            (y |= P);
        if (((S = S.next), S === null)) {
          if (((S = u.shared.pending), S === null)) break;
          (V = S),
            (S = V.next),
            (V.next = null),
            (u.lastBaseUpdate = V),
            (u.shared.pending = null);
        }
      } while (!0);
      G === null && (M = X),
        (u.baseState = M),
        (u.firstBaseUpdate = H),
        (u.lastBaseUpdate = G),
        f === null && (u.shared.lanes = 0),
        (wa |= y),
        (t.lanes = y),
        (t.memoizedState = X);
    }
  }
  function jh(t, n) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(n);
  }
  function Lh(t, n) {
    var r = t.callbacks;
    if (r !== null)
      for (t.callbacks = null, t = 0; t < r.length; t++) jh(r[t], n);
  }
  var rs = N(null),
    bo = N(0);
  function Uh(t, n) {
    (t = $n), F(bo, t), F(rs, n), ($n = t | n.baseLanes);
  }
  function Gu() {
    F(bo, $n), F(rs, rs.current);
  }
  function Qu() {
    ($n = bo.current), Q(rs), Q(bo);
  }
  var Ke = N(null),
    cn = null;
  function va(t) {
    var n = t.alternate;
    F($t, $t.current & 1),
      F(Ke, t),
      cn === null &&
        (n === null || rs.current !== null || n.memoizedState !== null) &&
        (cn = t);
  }
  function Iu(t) {
    F($t, $t.current), F(Ke, t), cn === null && (cn = t);
  }
  function Bh(t) {
    t.tag === 22
      ? (F($t, $t.current), F(Ke, t), cn === null && (cn = t))
      : ba();
  }
  function ba() {
    F($t, $t.current), F(Ke, Ke.current);
  }
  function Ze(t) {
    Q(Ke), cn === t && (cn = null), Q($t);
  }
  var $t = N(0);
  function So(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || $c(r) || Wc(r)))
          return n;
      } else if (
        n.tag === 19 &&
        (n.memoizedProps.revealOrder === "forwards" ||
          n.memoizedProps.revealOrder === "backwards" ||
          n.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          n.memoizedProps.revealOrder === "together")
      ) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Gn = 0,
    xt = null,
    kt = null,
    ae = null,
    xo = !1,
    ss = !1,
    mr = !1,
    wo = 0,
    ri = 0,
    is = null,
    NS = 0;
  function Zt() {
    throw Error(o(321));
  }
  function Fu(t, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < t.length; r++)
      if (!Fe(t[r], n[r])) return !1;
    return !0;
  }
  function Xu(t, n, r, i, u, f) {
    return (
      (Gn = f),
      (xt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (L.H = t === null || t.memoizedState === null ? Sm : uc),
      (mr = !1),
      (f = r(i, u)),
      (mr = !1),
      ss && (f = Hh(n, r, i, u)),
      kh(t),
      f
    );
  }
  function kh(t) {
    L.H = oi;
    var n = kt !== null && kt.next !== null;
    if (((Gn = 0), (ae = kt = xt = null), (xo = !1), (ri = 0), (is = null), n))
      throw Error(o(300));
    t === null ||
      re ||
      ((t = t.dependencies), t !== null && fo(t) && (re = !0));
  }
  function Hh(t, n, r, i) {
    xt = t;
    var u = 0;
    do {
      if ((ss && (is = null), (ri = 0), (ss = !1), 25 <= u))
        throw Error(o(301));
      if (((u += 1), (ae = kt = null), t.updateQueue != null)) {
        var f = t.updateQueue;
        (f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0);
      }
      (L.H = xm), (f = n(r, i));
    } while (ss);
    return f;
  }
  function DS() {
    var t = L.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == "function" ? si(n) : n),
      (t = t.useState()[0]),
      (kt !== null ? kt.memoizedState : null) !== t && (xt.flags |= 1024),
      n
    );
  }
  function Ku() {
    var t = wo !== 0;
    return (wo = 0), t;
  }
  function Zu(t, n, r) {
    (n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~r);
  }
  function Ju(t) {
    if (xo) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), (t = t.next);
      }
      xo = !1;
    }
    (Gn = 0), (ae = kt = xt = null), (ss = !1), (ri = wo = 0), (is = null);
  }
  function Me() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ae === null ? (xt.memoizedState = ae = t) : (ae = ae.next = t), ae;
  }
  function Wt() {
    if (kt === null) {
      var t = xt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = kt.next;
    var n = ae === null ? xt.memoizedState : ae.next;
    if (n !== null) (ae = n), (kt = t);
    else {
      if (t === null)
        throw xt.alternate === null ? Error(o(467)) : Error(o(310));
      (kt = t),
        (t = {
          memoizedState: kt.memoizedState,
          baseState: kt.baseState,
          baseQueue: kt.baseQueue,
          queue: kt.queue,
          next: null,
        }),
        ae === null ? (xt.memoizedState = ae = t) : (ae = ae.next = t);
    }
    return ae;
  }
  function Eo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function si(t) {
    var n = ri;
    return (
      (ri += 1),
      is === null && (is = []),
      (t = Oh(is, t, n)),
      (n = xt),
      (ae === null ? n.memoizedState : ae.next) === null &&
        ((n = n.alternate),
        (L.H = n === null || n.memoizedState === null ? Sm : uc)),
      t
    );
  }
  function _o(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return si(t);
      if (t.$$typeof === q) return Ee(t);
    }
    throw Error(o(438, String(t)));
  }
  function $u(t) {
    var n = null,
      r = xt.updateQueue;
    if ((r !== null && (n = r.memoCache), n == null)) {
      var i = xt.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (n = {
              data: i.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      r === null && ((r = Eo()), (xt.updateQueue = r)),
      (r.memoCache = n),
      (r = n.data[n.index]),
      r === void 0)
    )
      for (r = n.data[n.index] = Array(t), i = 0; i < t; i++) r[i] = it;
    return n.index++, r;
  }
  function Qn(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function Ro(t) {
    var n = Wt();
    return Wu(n, kt, t);
  }
  function Wu(t, n, r) {
    var i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = r;
    var u = t.baseQueue,
      f = i.pending;
    if (f !== null) {
      if (u !== null) {
        var y = u.next;
        (u.next = f.next), (f.next = y);
      }
      (n.baseQueue = u = f), (i.pending = null);
    }
    if (((f = t.baseState), u === null)) t.memoizedState = f;
    else {
      n = u.next;
      var S = (y = null),
        M = null,
        H = n,
        G = !1;
      do {
        var X = H.lane & -536870913;
        if (X !== H.lane ? (Ct & X) === X : (Gn & X) === X) {
          var P = H.revertLane;
          if (P === 0)
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: H.action,
                  hasEagerState: H.hasEagerState,
                  eagerState: H.eagerState,
                  next: null,
                }),
              X === ts && (G = !0);
          else if ((Gn & P) === P) {
            (H = H.next), P === ts && (G = !0);
            continue;
          } else
            (X = {
              lane: 0,
              revertLane: H.revertLane,
              gesture: null,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null,
            }),
              M === null ? ((S = M = X), (y = f)) : (M = M.next = X),
              (xt.lanes |= P),
              (wa |= P);
          (X = H.action),
            mr && r(f, X),
            (f = H.hasEagerState ? H.eagerState : r(f, X));
        } else
          (P = {
            lane: X,
            revertLane: H.revertLane,
            gesture: H.gesture,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null,
          }),
            M === null ? ((S = M = P), (y = f)) : (M = M.next = P),
            (xt.lanes |= X),
            (wa |= X);
        H = H.next;
      } while (H !== null && H !== n);
      if (
        (M === null ? (y = f) : (M.next = S),
        !Fe(f, t.memoizedState) && ((re = !0), G && ((r = es), r !== null)))
      )
        throw r;
      (t.memoizedState = f),
        (t.baseState = y),
        (t.baseQueue = M),
        (i.lastRenderedState = f);
    }
    return u === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function tc(t) {
    var n = Wt(),
      r = n.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = t;
    var i = r.dispatch,
      u = r.pending,
      f = n.memoizedState;
    if (u !== null) {
      r.pending = null;
      var y = (u = u.next);
      do (f = t(f, y.action)), (y = y.next);
      while (y !== u);
      Fe(f, n.memoizedState) || (re = !0),
        (n.memoizedState = f),
        n.baseQueue === null && (n.baseState = f),
        (r.lastRenderedState = f);
    }
    return [f, i];
  }
  function qh(t, n, r) {
    var i = xt,
      u = Wt(),
      f = Ot;
    if (f) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else r = n();
    var y = !Fe((kt || u).memoizedState, r);
    if (
      (y && ((u.memoizedState = r), (re = !0)),
      (u = u.queue),
      ac(Vh.bind(null, i, u, t), [t]),
      u.getSnapshot !== n || y || (ae !== null && ae.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        os(9, { destroy: void 0 }, Yh.bind(null, i, u, r, n), null),
        Pt === null)
      )
        throw Error(o(349));
      f || (Gn & 127) !== 0 || Ph(i, n, r);
    }
    return r;
  }
  function Ph(t, n, r) {
    (t.flags |= 16384),
      (t = { getSnapshot: n, value: r }),
      (n = xt.updateQueue),
      n === null
        ? ((n = Eo()), (xt.updateQueue = n), (n.stores = [t]))
        : ((r = n.stores), r === null ? (n.stores = [t]) : r.push(t));
  }
  function Yh(t, n, r, i) {
    (n.value = r), (n.getSnapshot = i), Gh(n) && Qh(t);
  }
  function Vh(t, n, r) {
    return r(function () {
      Gh(n) && Qh(t);
    });
  }
  function Gh(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var r = n();
      return !Fe(t, r);
    } catch {
      return !0;
    }
  }
  function Qh(t) {
    var n = sr(t, 2);
    n !== null && Pe(n, t, 2);
  }
  function ec(t) {
    var n = Me();
    if (typeof t == "function") {
      var r = t;
      if (((t = r()), mr)) {
        mn(!0);
        try {
          r();
        } finally {
          mn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qn,
        lastRenderedState: t,
      }),
      n
    );
  }
  function Ih(t, n, r, i) {
    return (t.baseState = r), Wu(t, kt, typeof i == "function" ? i : Qn);
  }
  function zS(t, n, r, i, u) {
    if (Ao(t)) throw Error(o(485));
    if (((t = n.action), t !== null)) {
      var f = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          f.listeners.push(y);
        },
      };
      L.T !== null ? r(!0) : (f.isTransition = !1),
        i(f),
        (r = n.pending),
        r === null
          ? ((f.next = n.pending = f), Fh(n, f))
          : ((f.next = r.next), (n.pending = r.next = f));
    }
  }
  function Fh(t, n) {
    var r = n.action,
      i = n.payload,
      u = t.state;
    if (n.isTransition) {
      var f = L.T,
        y = {};
      L.T = y;
      try {
        var S = r(u, i),
          M = L.S;
        M !== null && M(y, S), Xh(t, n, S);
      } catch (H) {
        nc(t, n, H);
      } finally {
        f !== null && y.types !== null && (f.types = y.types), (L.T = f);
      }
    } else
      try {
        (f = r(u, i)), Xh(t, n, f);
      } catch (H) {
        nc(t, n, H);
      }
  }
  function Xh(t, n, r) {
    r !== null && typeof r == "object" && typeof r.then == "function"
      ? r.then(
          function (i) {
            Kh(t, n, i);
          },
          function (i) {
            return nc(t, n, i);
          }
        )
      : Kh(t, n, r);
  }
  function Kh(t, n, r) {
    (n.status = "fulfilled"),
      (n.value = r),
      Zh(n),
      (t.state = r),
      (n = t.pending),
      n !== null &&
        ((r = n.next),
        r === n ? (t.pending = null) : ((r = r.next), (n.next = r), Fh(t, r)));
  }
  function nc(t, n, r) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do (n.status = "rejected"), (n.reason = r), Zh(n), (n = n.next);
      while (n !== i);
    }
    t.action = null;
  }
  function Zh(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function Jh(t, n) {
    return n;
  }
  function $h(t, n) {
    if (Ot) {
      var r = Pt.formState;
      if (r !== null) {
        t: {
          var i = xt;
          if (Ot) {
            if (Vt) {
              e: {
                for (var u = Vt, f = un; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break e;
                  }
                  if (((u = fn(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (f = u.data), (u = f === "F!" || f === "F" ? u : null);
              }
              if (u) {
                (Vt = fn(u.nextSibling)), (i = u.data === "F!");
                break t;
              }
            }
            ha(i);
          }
          i = !1;
        }
        i && (n = r[0]);
      }
    }
    return (
      (r = Me()),
      (r.memoizedState = r.baseState = n),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jh,
        lastRenderedState: n,
      }),
      (r.queue = i),
      (r = ym.bind(null, xt, i)),
      (i.dispatch = r),
      (i = ec(!1)),
      (f = lc.bind(null, xt, !1, i.queue)),
      (i = Me()),
      (u = { state: n, dispatch: null, action: t, pending: null }),
      (i.queue = u),
      (r = zS.bind(null, xt, u, f, r)),
      (u.dispatch = r),
      (i.memoizedState = t),
      [n, r, !1]
    );
  }
  function Wh(t) {
    var n = Wt();
    return tm(n, kt, t);
  }
  function tm(t, n, r) {
    if (
      ((n = Wu(t, n, Jh)[0]),
      (t = Ro(Qn)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var i = si(n);
      } catch (y) {
        throw y === ns ? po : y;
      }
    else i = n;
    n = Wt();
    var u = n.queue,
      f = u.dispatch;
    return (
      r !== n.memoizedState &&
        ((xt.flags |= 2048),
        os(9, { destroy: void 0 }, jS.bind(null, u, r), null)),
      [i, f, t]
    );
  }
  function jS(t, n) {
    t.action = n;
  }
  function em(t) {
    var n = Wt(),
      r = kt;
    if (r !== null) return tm(n, r, t);
    Wt(), (n = n.memoizedState), (r = Wt());
    var i = r.queue.dispatch;
    return (r.memoizedState = t), [n, i, !1];
  }
  function os(t, n, r, i) {
    return (
      (t = { tag: t, create: r, deps: i, inst: n, next: null }),
      (n = xt.updateQueue),
      n === null && ((n = Eo()), (xt.updateQueue = n)),
      (r = n.lastEffect),
      r === null
        ? (n.lastEffect = t.next = t)
        : ((i = r.next), (r.next = t), (t.next = i), (n.lastEffect = t)),
      t
    );
  }
  function nm() {
    return Wt().memoizedState;
  }
  function To(t, n, r, i) {
    var u = Me();
    (xt.flags |= t),
      (u.memoizedState = os(
        1 | n,
        { destroy: void 0 },
        r,
        i === void 0 ? null : i
      ));
  }
  function Co(t, n, r, i) {
    var u = Wt();
    i = i === void 0 ? null : i;
    var f = u.memoizedState.inst;
    kt !== null && i !== null && Fu(i, kt.memoizedState.deps)
      ? (u.memoizedState = os(n, f, r, i))
      : ((xt.flags |= t), (u.memoizedState = os(1 | n, f, r, i)));
  }
  function am(t, n) {
    To(8390656, 8, t, n);
  }
  function ac(t, n) {
    Co(2048, 8, t, n);
  }
  function LS(t) {
    xt.flags |= 4;
    var n = xt.updateQueue;
    if (n === null) (n = Eo()), (xt.updateQueue = n), (n.events = [t]);
    else {
      var r = n.events;
      r === null ? (n.events = [t]) : r.push(t);
    }
  }
  function rm(t) {
    var n = Wt().memoizedState;
    return (
      LS({ ref: n, nextImpl: t }),
      function () {
        if ((zt & 2) !== 0) throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      }
    );
  }
  function sm(t, n) {
    return Co(4, 2, t, n);
  }
  function im(t, n) {
    return Co(4, 4, t, n);
  }
  function om(t, n) {
    if (typeof n == "function") {
      t = t();
      var r = n(t);
      return function () {
        typeof r == "function" ? r() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function lm(t, n, r) {
    (r = r != null ? r.concat([t]) : null), Co(4, 4, om.bind(null, n, t), r);
  }
  function rc() {}
  function um(t, n) {
    var r = Wt();
    n = n === void 0 ? null : n;
    var i = r.memoizedState;
    return n !== null && Fu(n, i[1]) ? i[0] : ((r.memoizedState = [t, n]), t);
  }
  function cm(t, n) {
    var r = Wt();
    n = n === void 0 ? null : n;
    var i = r.memoizedState;
    if (n !== null && Fu(n, i[1])) return i[0];
    if (((i = t()), mr)) {
      mn(!0);
      try {
        t();
      } finally {
        mn(!1);
      }
    }
    return (r.memoizedState = [i, n]), i;
  }
  function sc(t, n, r) {
    return r === void 0 || ((Gn & 1073741824) !== 0 && (Ct & 261930) === 0)
      ? (t.memoizedState = n)
      : ((t.memoizedState = r), (t = fp()), (xt.lanes |= t), (wa |= t), r);
  }
  function fm(t, n, r, i) {
    return Fe(r, n)
      ? r
      : rs.current !== null
      ? ((t = sc(t, r, i)), Fe(t, n) || (re = !0), t)
      : (Gn & 42) === 0 || ((Gn & 1073741824) !== 0 && (Ct & 261930) === 0)
      ? ((re = !0), (t.memoizedState = r))
      : ((t = fp()), (xt.lanes |= t), (wa |= t), n);
  }
  function dm(t, n, r, i, u) {
    var f = Z.p;
    Z.p = f !== 0 && 8 > f ? f : 8;
    var y = L.T,
      S = {};
    (L.T = S), lc(t, !1, n, r);
    try {
      var M = u(),
        H = L.S;
      if (
        (H !== null && H(S, M),
        M !== null && typeof M == "object" && typeof M.then == "function")
      ) {
        var G = MS(M, i);
        ii(t, n, G, We(t));
      } else ii(t, n, i, We(t));
    } catch (X) {
      ii(t, n, { then: function () {}, status: "rejected", reason: X }, We());
    } finally {
      (Z.p = f),
        y !== null && S.types !== null && (y.types = S.types),
        (L.T = y);
    }
  }
  function US() {}
  function ic(t, n, r, i) {
    if (t.tag !== 5) throw Error(o(476));
    var u = hm(t).queue;
    dm(
      t,
      u,
      n,
      st,
      r === null
        ? US
        : function () {
            return mm(t), r(i);
          }
    );
  }
  function hm(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: st,
      baseState: st,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qn,
        lastRenderedState: st,
      },
      next: null,
    };
    var r = {};
    return (
      (n.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qn,
          lastRenderedState: r,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function mm(t) {
    var n = hm(t);
    n.next === null && (n = t.alternate.memoizedState),
      ii(t, n.next.queue, {}, We());
  }
  function oc() {
    return Ee(Ei);
  }
  function pm() {
    return Wt().memoizedState;
  }
  function gm() {
    return Wt().memoizedState;
  }
  function BS(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = We();
          t = ga(r);
          var i = ya(n, t, r);
          i !== null && (Pe(i, n, r), ei(i, n, r)),
            (n = { cache: Uu() }),
            (t.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function kS(t, n, r) {
    var i = We();
    (r = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ao(t)
        ? vm(n, r)
        : ((r = Ru(t, n, r, i)), r !== null && (Pe(r, t, i), bm(r, n, i)));
  }
  function ym(t, n, r) {
    var i = We();
    ii(t, n, r, i);
  }
  function ii(t, n, r, i) {
    var u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ao(t)) vm(n, u);
    else {
      var f = t.alternate;
      if (
        t.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = n.lastRenderedReducer), f !== null)
      )
        try {
          var y = n.lastRenderedState,
            S = f(y, r);
          if (((u.hasEagerState = !0), (u.eagerState = S), Fe(S, y)))
            return oo(t, n, u, 0), Pt === null && io(), !1;
        } catch {}
      if (((r = Ru(t, n, u, i)), r !== null))
        return Pe(r, t, i), bm(r, n, i), !0;
    }
    return !1;
  }
  function lc(t, n, r, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: qc(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ao(t))
    ) {
      if (n) throw Error(o(479));
    } else (n = Ru(t, r, i, 2)), n !== null && Pe(n, t, 2);
  }
  function Ao(t) {
    var n = t.alternate;
    return t === xt || (n !== null && n === xt);
  }
  function vm(t, n) {
    ss = xo = !0;
    var r = t.pending;
    r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)),
      (t.pending = n);
  }
  function bm(t, n, r) {
    if ((r & 4194048) !== 0) {
      var i = n.lanes;
      (i &= t.pendingLanes), (r |= i), (n.lanes = r), ze(t, r);
    }
  }
  var oi = {
    readContext: Ee,
    use: _o,
    useCallback: Zt,
    useContext: Zt,
    useEffect: Zt,
    useImperativeHandle: Zt,
    useLayoutEffect: Zt,
    useInsertionEffect: Zt,
    useMemo: Zt,
    useReducer: Zt,
    useRef: Zt,
    useState: Zt,
    useDebugValue: Zt,
    useDeferredValue: Zt,
    useTransition: Zt,
    useSyncExternalStore: Zt,
    useId: Zt,
    useHostTransitionStatus: Zt,
    useFormState: Zt,
    useActionState: Zt,
    useOptimistic: Zt,
    useMemoCache: Zt,
    useCacheRefresh: Zt,
  };
  oi.useEffectEvent = Zt;
  var Sm = {
      readContext: Ee,
      use: _o,
      useCallback: function (t, n) {
        return (Me().memoizedState = [t, n === void 0 ? null : n]), t;
      },
      useContext: Ee,
      useEffect: am,
      useImperativeHandle: function (t, n, r) {
        (r = r != null ? r.concat([t]) : null),
          To(4194308, 4, om.bind(null, n, t), r);
      },
      useLayoutEffect: function (t, n) {
        return To(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        To(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var r = Me();
        n = n === void 0 ? null : n;
        var i = t();
        if (mr) {
          mn(!0);
          try {
            t();
          } finally {
            mn(!1);
          }
        }
        return (r.memoizedState = [i, n]), i;
      },
      useReducer: function (t, n, r) {
        var i = Me();
        if (r !== void 0) {
          var u = r(n);
          if (mr) {
            mn(!0);
            try {
              r(n);
            } finally {
              mn(!1);
            }
          }
        } else u = n;
        return (
          (i.memoizedState = i.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (i.queue = t),
          (t = t.dispatch = kS.bind(null, xt, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = Me();
        return (t = { current: t }), (n.memoizedState = t);
      },
      useState: function (t) {
        t = ec(t);
        var n = t.queue,
          r = ym.bind(null, xt, n);
        return (n.dispatch = r), [t.memoizedState, r];
      },
      useDebugValue: rc,
      useDeferredValue: function (t, n) {
        var r = Me();
        return sc(r, t, n);
      },
      useTransition: function () {
        var t = ec(!1);
        return (
          (t = dm.bind(null, xt, t.queue, !0, !1)),
          (Me().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, n, r) {
        var i = xt,
          u = Me();
        if (Ot) {
          if (r === void 0) throw Error(o(407));
          r = r();
        } else {
          if (((r = n()), Pt === null)) throw Error(o(349));
          (Ct & 127) !== 0 || Ph(i, n, r);
        }
        u.memoizedState = r;
        var f = { value: r, getSnapshot: n };
        return (
          (u.queue = f),
          am(Vh.bind(null, i, f, t), [t]),
          (i.flags |= 2048),
          os(9, { destroy: void 0 }, Yh.bind(null, i, f, r, n), null),
          r
        );
      },
      useId: function () {
        var t = Me(),
          n = Pt.identifierPrefix;
        if (Ot) {
          var r = Cn,
            i = Tn;
          (r = (i & ~(1 << (32 - Te(i) - 1))).toString(32) + r),
            (n = "_" + n + "R_" + r),
            (r = wo++),
            0 < r && (n += "H" + r.toString(32)),
            (n += "_");
        } else (r = NS++), (n = "_" + n + "r_" + r.toString(32) + "_");
        return (t.memoizedState = n);
      },
      useHostTransitionStatus: oc,
      useFormState: $h,
      useActionState: $h,
      useOptimistic: function (t) {
        var n = Me();
        n.memoizedState = n.baseState = t;
        var r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = r),
          (n = lc.bind(null, xt, !0, r)),
          (r.dispatch = n),
          [t, n]
        );
      },
      useMemoCache: $u,
      useCacheRefresh: function () {
        return (Me().memoizedState = BS.bind(null, xt));
      },
      useEffectEvent: function (t) {
        var n = Me(),
          r = { impl: t };
        return (
          (n.memoizedState = r),
          function () {
            if ((zt & 2) !== 0) throw Error(o(440));
            return r.impl.apply(void 0, arguments);
          }
        );
      },
    },
    uc = {
      readContext: Ee,
      use: _o,
      useCallback: um,
      useContext: Ee,
      useEffect: ac,
      useImperativeHandle: lm,
      useInsertionEffect: sm,
      useLayoutEffect: im,
      useMemo: cm,
      useReducer: Ro,
      useRef: nm,
      useState: function () {
        return Ro(Qn);
      },
      useDebugValue: rc,
      useDeferredValue: function (t, n) {
        var r = Wt();
        return fm(r, kt.memoizedState, t, n);
      },
      useTransition: function () {
        var t = Ro(Qn)[0],
          n = Wt().memoizedState;
        return [typeof t == "boolean" ? t : si(t), n];
      },
      useSyncExternalStore: qh,
      useId: pm,
      useHostTransitionStatus: oc,
      useFormState: Wh,
      useActionState: Wh,
      useOptimistic: function (t, n) {
        var r = Wt();
        return Ih(r, kt, t, n);
      },
      useMemoCache: $u,
      useCacheRefresh: gm,
    };
  uc.useEffectEvent = rm;
  var xm = {
    readContext: Ee,
    use: _o,
    useCallback: um,
    useContext: Ee,
    useEffect: ac,
    useImperativeHandle: lm,
    useInsertionEffect: sm,
    useLayoutEffect: im,
    useMemo: cm,
    useReducer: tc,
    useRef: nm,
    useState: function () {
      return tc(Qn);
    },
    useDebugValue: rc,
    useDeferredValue: function (t, n) {
      var r = Wt();
      return kt === null ? sc(r, t, n) : fm(r, kt.memoizedState, t, n);
    },
    useTransition: function () {
      var t = tc(Qn)[0],
        n = Wt().memoizedState;
      return [typeof t == "boolean" ? t : si(t), n];
    },
    useSyncExternalStore: qh,
    useId: pm,
    useHostTransitionStatus: oc,
    useFormState: em,
    useActionState: em,
    useOptimistic: function (t, n) {
      var r = Wt();
      return kt !== null
        ? Ih(r, kt, t, n)
        : ((r.baseState = t), [t, r.queue.dispatch]);
    },
    useMemoCache: $u,
    useCacheRefresh: gm,
  };
  xm.useEffectEvent = rm;
  function cc(t, n, r, i) {
    (n = t.memoizedState),
      (r = r(i, n)),
      (r = r == null ? n : p({}, n, r)),
      (t.memoizedState = r),
      t.lanes === 0 && (t.updateQueue.baseState = r);
  }
  var fc = {
    enqueueSetState: function (t, n, r) {
      t = t._reactInternals;
      var i = We(),
        u = ga(i);
      (u.payload = n),
        r != null && (u.callback = r),
        (n = ya(t, u, i)),
        n !== null && (Pe(n, t, i), ei(n, t, i));
    },
    enqueueReplaceState: function (t, n, r) {
      t = t._reactInternals;
      var i = We(),
        u = ga(i);
      (u.tag = 1),
        (u.payload = n),
        r != null && (u.callback = r),
        (n = ya(t, u, i)),
        n !== null && (Pe(n, t, i), ei(n, t, i));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var r = We(),
        i = ga(r);
      (i.tag = 2),
        n != null && (i.callback = n),
        (n = ya(t, i, r)),
        n !== null && (Pe(n, t, r), ei(n, t, r));
    },
  };
  function wm(t, n, r, i, u, f, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, f, y)
        : n.prototype && n.prototype.isPureReactComponent
        ? !Fs(r, i) || !Fs(u, f)
        : !0
    );
  }
  function Em(t, n, r, i) {
    (t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(r, i),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(r, i),
      n.state !== t && fc.enqueueReplaceState(n, n.state, null);
  }
  function pr(t, n) {
    var r = n;
    if ("ref" in n) {
      r = {};
      for (var i in n) i !== "ref" && (r[i] = n[i]);
    }
    if ((t = t.defaultProps)) {
      r === n && (r = p({}, r));
      for (var u in t) r[u] === void 0 && (r[u] = t[u]);
    }
    return r;
  }
  function _m(t) {
    so(t);
  }
  function Rm(t) {
    console.error(t);
  }
  function Tm(t) {
    so(t);
  }
  function Oo(t, n) {
    try {
      var r = t.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Cm(t, n, r) {
    try {
      var i = t.onCaughtError;
      i(r.value, {
        componentStack: r.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function dc(t, n, r) {
    return (
      (r = ga(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        Oo(t, n);
      }),
      r
    );
  }
  function Am(t) {
    return (t = ga(t)), (t.tag = 3), t;
  }
  function Om(t, n, r, i) {
    var u = r.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = i.value;
      (t.payload = function () {
        return u(f);
      }),
        (t.callback = function () {
          Cm(n, r, i);
        });
    }
    var y = r.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (t.callback = function () {
        Cm(n, r, i),
          typeof u != "function" &&
            (Ea === null ? (Ea = new Set([this])) : Ea.add(this));
        var S = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: S !== null ? S : "",
        });
      });
  }
  function HS(t, n, r, i, u) {
    if (
      ((r.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((n = r.alternate),
        n !== null && Wr(n, r, u, !0),
        (r = Ke.current),
        r !== null)
      ) {
        switch (r.tag) {
          case 31:
          case 13:
            return (
              cn === null ? Po() : r.alternate === null && Jt === 0 && (Jt = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = u),
              i === go
                ? (r.flags |= 16384)
                : ((n = r.updateQueue),
                  n === null ? (r.updateQueue = new Set([i])) : n.add(i),
                  Bc(t, i, u)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              i === go
                ? (r.flags |= 16384)
                : ((n = r.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (r.updateQueue = n))
                    : ((r = n.retryQueue),
                      r === null ? (n.retryQueue = new Set([i])) : r.add(i)),
                  Bc(t, i, u)),
              !1
            );
        }
        throw Error(o(435, r.tag));
      }
      return Bc(t, i, u), Po(), !1;
    }
    if (Ot)
      return (
        (n = Ke.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = u),
            i !== Nu && ((t = Error(o(422), { cause: i })), Zs(sn(t, r))))
          : (i !== Nu && ((n = Error(o(423), { cause: i })), Zs(sn(n, r))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (i = sn(i, r)),
            (u = dc(t.stateNode, i, u)),
            Yu(t, u),
            Jt !== 4 && (Jt = 2)),
        !1
      );
    var f = Error(o(520), { cause: i });
    if (
      ((f = sn(f, r)),
      pi === null ? (pi = [f]) : pi.push(f),
      Jt !== 4 && (Jt = 2),
      n === null)
    )
      return !0;
    (i = sn(i, r)), (r = n);
    do {
      switch (r.tag) {
        case 3:
          return (
            (r.flags |= 65536),
            (t = u & -u),
            (r.lanes |= t),
            (t = dc(r.stateNode, i, t)),
            Yu(r, t),
            !1
          );
        case 1:
          if (
            ((n = r.type),
            (f = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (Ea === null || !Ea.has(f)))))
          )
            return (
              (r.flags |= 65536),
              (u &= -u),
              (r.lanes |= u),
              (u = Am(u)),
              Om(u, t, r, i),
              Yu(r, u),
              !1
            );
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var hc = Error(o(461)),
    re = !1;
  function _e(t, n, r, i) {
    n.child = t === null ? zh(n, null, r, i) : hr(n, t.child, r, i);
  }
  function Mm(t, n, r, i, u) {
    r = r.render;
    var f = n.ref;
    if ("ref" in i) {
      var y = {};
      for (var S in i) S !== "ref" && (y[S] = i[S]);
    } else y = i;
    return (
      ur(n),
      (i = Xu(t, n, r, y, f, u)),
      (S = Ku()),
      t !== null && !re
        ? (Zu(t, n, u), In(t, n, u))
        : (Ot && S && Ou(n), (n.flags |= 1), _e(t, n, i, u), n.child)
    );
  }
  function Nm(t, n, r, i, u) {
    if (t === null) {
      var f = r.type;
      return typeof f == "function" &&
        !Tu(f) &&
        f.defaultProps === void 0 &&
        r.compare === null
        ? ((n.tag = 15), (n.type = f), Dm(t, n, f, i, u))
        : ((t = uo(r.type, null, i, n, n.mode, u)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((f = t.child), !xc(t, u))) {
      var y = f.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Fs), r(y, i) && t.ref === n.ref)
      )
        return In(t, n, u);
    }
    return (
      (n.flags |= 1),
      (t = qn(f, i)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function Dm(t, n, r, i, u) {
    if (t !== null) {
      var f = t.memoizedProps;
      if (Fs(f, i) && t.ref === n.ref)
        if (((re = !1), (n.pendingProps = i = f), xc(t, u)))
          (t.flags & 131072) !== 0 && (re = !0);
        else return (n.lanes = t.lanes), In(t, n, u);
    }
    return mc(t, n, r, i, u);
  }
  function zm(t, n, r, i) {
    var u = i.children,
      f = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        n.stateNode === null &&
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((n.flags & 128) !== 0) {
        if (((f = f !== null ? f.baseLanes | r : r), t !== null)) {
          for (i = n.child = t.child, u = 0; i !== null; )
            (u = u | i.lanes | i.childLanes), (i = i.sibling);
          i = u & ~f;
        } else (i = 0), (n.child = null);
        return jm(t, n, f, r, i);
      }
      if ((r & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && mo(n, f !== null ? f.cachePool : null),
          f !== null ? Uh(n, f) : Gu(),
          Bh(n);
      else
        return (
          (i = n.lanes = 536870912),
          jm(t, n, f !== null ? f.baseLanes | r : r, r, i)
        );
    } else
      f !== null
        ? (mo(n, f.cachePool), Uh(n, f), ba(), (n.memoizedState = null))
        : (t !== null && mo(n, null), Gu(), ba());
    return _e(t, n, u, r), n.child;
  }
  function li(t, n) {
    return (
      (t !== null && t.tag === 22) ||
        n.stateNode !== null ||
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.sibling
    );
  }
  function jm(t, n, r, i, u) {
    var f = ku();
    return (
      (f = f === null ? null : { parent: ne._currentValue, pool: f }),
      (n.memoizedState = { baseLanes: r, cachePool: f }),
      t !== null && mo(n, null),
      Gu(),
      Bh(n),
      t !== null && Wr(t, n, i, !0),
      (n.childLanes = u),
      null
    );
  }
  function Mo(t, n) {
    return (
      (n = Do({ mode: n.mode, children: n.children }, t.mode)),
      (n.ref = t.ref),
      (t.child = n),
      (n.return = t),
      n
    );
  }
  function Lm(t, n, r) {
    return (
      hr(n, t.child, null, r),
      (t = Mo(n, n.pendingProps)),
      (t.flags |= 2),
      Ze(n),
      (n.memoizedState = null),
      t
    );
  }
  function qS(t, n, r) {
    var i = n.pendingProps,
      u = (n.flags & 128) !== 0;
    if (((n.flags &= -129), t === null)) {
      if (Ot) {
        if (i.mode === "hidden")
          return (t = Mo(n, i)), (n.lanes = 536870912), li(null, t);
        if (
          (Iu(n),
          (t = Vt)
            ? ((t = Fp(t, un)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: fa !== null ? { id: Tn, overflow: Cn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (r = vh(t)),
                (r.return = n),
                (n.child = r),
                (we = n),
                (Vt = null)))
            : (t = null),
          t === null)
        )
          throw ha(n);
        return (n.lanes = 536870912), null;
      }
      return Mo(n, i);
    }
    var f = t.memoizedState;
    if (f !== null) {
      var y = f.dehydrated;
      if ((Iu(n), u))
        if (n.flags & 256) (n.flags &= -257), (n = Lm(t, n, r));
        else if (n.memoizedState !== null)
          (n.child = t.child), (n.flags |= 128), (n = null);
        else throw Error(o(558));
      else if (
        (re || Wr(t, n, r, !1), (u = (r & t.childLanes) !== 0), re || u)
      ) {
        if (
          ((i = Pt),
          i !== null && ((y = je(i, r)), y !== 0 && y !== f.retryLane))
        )
          throw ((f.retryLane = y), sr(t, y), Pe(i, t, y), hc);
        Po(), (n = Lm(t, n, r));
      } else
        (t = f.treeContext),
          (Vt = fn(y.nextSibling)),
          (we = n),
          (Ot = !0),
          (da = null),
          (un = !1),
          t !== null && xh(n, t),
          (n = Mo(n, i)),
          (n.flags |= 4096);
      return n;
    }
    return (
      (t = qn(t.child, { mode: i.mode, children: i.children })),
      (t.ref = n.ref),
      (n.child = t),
      (t.return = n),
      t
    );
  }
  function No(t, n) {
    var r = n.ref;
    if (r === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object") throw Error(o(284));
      (t === null || t.ref !== r) && (n.flags |= 4194816);
    }
  }
  function mc(t, n, r, i, u) {
    return (
      ur(n),
      (r = Xu(t, n, r, i, void 0, u)),
      (i = Ku()),
      t !== null && !re
        ? (Zu(t, n, u), In(t, n, u))
        : (Ot && i && Ou(n), (n.flags |= 1), _e(t, n, r, u), n.child)
    );
  }
  function Um(t, n, r, i, u, f) {
    return (
      ur(n),
      (n.updateQueue = null),
      (r = Hh(n, i, r, u)),
      kh(t),
      (i = Ku()),
      t !== null && !re
        ? (Zu(t, n, f), In(t, n, f))
        : (Ot && i && Ou(n), (n.flags |= 1), _e(t, n, r, f), n.child)
    );
  }
  function Bm(t, n, r, i, u) {
    if ((ur(n), n.stateNode === null)) {
      var f = Kr,
        y = r.contextType;
      typeof y == "object" && y !== null && (f = Ee(y)),
        (f = new r(i, f)),
        (n.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = fc),
        (n.stateNode = f),
        (f._reactInternals = n),
        (f = n.stateNode),
        (f.props = i),
        (f.state = n.memoizedState),
        (f.refs = {}),
        qu(n),
        (y = r.contextType),
        (f.context = typeof y == "object" && y !== null ? Ee(y) : Kr),
        (f.state = n.memoizedState),
        (y = r.getDerivedStateFromProps),
        typeof y == "function" && (cc(n, r, y, i), (f.state = n.memoizedState)),
        typeof r.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((y = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          y !== f.state && fc.enqueueReplaceState(f, f.state, null),
          ai(n, i, f, u),
          ni(),
          (f.state = n.memoizedState)),
        typeof f.componentDidMount == "function" && (n.flags |= 4194308),
        (i = !0);
    } else if (t === null) {
      f = n.stateNode;
      var S = n.memoizedProps,
        M = pr(r, S);
      f.props = M;
      var H = f.context,
        G = r.contextType;
      (y = Kr), typeof G == "object" && G !== null && (y = Ee(G));
      var X = r.getDerivedStateFromProps;
      (G =
        typeof X == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (S = n.pendingProps !== S),
        G ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((S || H !== y) && Em(n, f, i, y)),
        (pa = !1);
      var P = n.memoizedState;
      (f.state = P),
        ai(n, i, f, u),
        ni(),
        (H = n.memoizedState),
        S || P !== H || pa
          ? (typeof X == "function" && (cc(n, r, X, i), (H = n.memoizedState)),
            (M = pa || wm(n, r, M, i, P, H, y))
              ? (G ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = i),
                (n.memoizedState = H)),
            (f.props = i),
            (f.state = H),
            (f.context = y),
            (i = M))
          : (typeof f.componentDidMount == "function" && (n.flags |= 4194308),
            (i = !1));
    } else {
      (f = n.stateNode),
        Pu(t, n),
        (y = n.memoizedProps),
        (G = pr(r, y)),
        (f.props = G),
        (X = n.pendingProps),
        (P = f.context),
        (H = r.contextType),
        (M = Kr),
        typeof H == "object" && H !== null && (M = Ee(H)),
        (S = r.getDerivedStateFromProps),
        (H =
          typeof S == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((y !== X || P !== M) && Em(n, f, i, M)),
        (pa = !1),
        (P = n.memoizedState),
        (f.state = P),
        ai(n, i, f, u),
        ni();
      var V = n.memoizedState;
      y !== X ||
      P !== V ||
      pa ||
      (t !== null && t.dependencies !== null && fo(t.dependencies))
        ? (typeof S == "function" && (cc(n, r, S, i), (V = n.memoizedState)),
          (G =
            pa ||
            wm(n, r, G, i, P, V, M) ||
            (t !== null && t.dependencies !== null && fo(t.dependencies)))
            ? (H ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(i, V, M),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(i, V, M)),
              typeof f.componentDidUpdate == "function" && (n.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (y === t.memoizedProps && P === t.memoizedState) ||
                (n.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (y === t.memoizedProps && P === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = i),
              (n.memoizedState = V)),
          (f.props = i),
          (f.state = V),
          (f.context = M),
          (i = G))
        : (typeof f.componentDidUpdate != "function" ||
            (y === t.memoizedProps && P === t.memoizedState) ||
            (n.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (y === t.memoizedProps && P === t.memoizedState) ||
            (n.flags |= 1024),
          (i = !1));
    }
    return (
      (f = i),
      No(t, n),
      (i = (n.flags & 128) !== 0),
      f || i
        ? ((f = n.stateNode),
          (r =
            i && typeof r.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (n.flags |= 1),
          t !== null && i
            ? ((n.child = hr(n, t.child, null, u)),
              (n.child = hr(n, null, r, u)))
            : _e(t, n, r, u),
          (n.memoizedState = f.state),
          (t = n.child))
        : (t = In(t, n, u)),
      t
    );
  }
  function km(t, n, r, i) {
    return or(), (n.flags |= 256), _e(t, n, r, i), n.child;
  }
  var pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function gc(t) {
    return { baseLanes: t, cachePool: Ch() };
  }
  function yc(t, n, r) {
    return (t = t !== null ? t.childLanes & ~r : 0), n && (t |= $e), t;
  }
  function Hm(t, n, r) {
    var i = n.pendingProps,
      u = !1,
      f = (n.flags & 128) !== 0,
      y;
    if (
      ((y = f) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : ($t.current & 2) !== 0),
      y && ((u = !0), (n.flags &= -129)),
      (y = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (Ot) {
        if (
          (u ? va(n) : ba(),
          (t = Vt)
            ? ((t = Fp(t, un)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: fa !== null ? { id: Tn, overflow: Cn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (r = vh(t)),
                (r.return = n),
                (n.child = r),
                (we = n),
                (Vt = null)))
            : (t = null),
          t === null)
        )
          throw ha(n);
        return Wc(t) ? (n.lanes = 32) : (n.lanes = 536870912), null;
      }
      var S = i.children;
      return (
        (i = i.fallback),
        u
          ? (ba(),
            (u = n.mode),
            (S = Do({ mode: "hidden", children: S }, u)),
            (i = ir(i, u, r, null)),
            (S.return = n),
            (i.return = n),
            (S.sibling = i),
            (n.child = S),
            (i = n.child),
            (i.memoizedState = gc(r)),
            (i.childLanes = yc(t, y, r)),
            (n.memoizedState = pc),
            li(null, i))
          : (va(n), vc(n, S))
      );
    }
    var M = t.memoizedState;
    if (M !== null && ((S = M.dehydrated), S !== null)) {
      if (f)
        n.flags & 256
          ? (va(n), (n.flags &= -257), (n = bc(t, n, r)))
          : n.memoizedState !== null
          ? (ba(), (n.child = t.child), (n.flags |= 128), (n = null))
          : (ba(),
            (S = i.fallback),
            (u = n.mode),
            (i = Do({ mode: "visible", children: i.children }, u)),
            (S = ir(S, u, r, null)),
            (S.flags |= 2),
            (i.return = n),
            (S.return = n),
            (i.sibling = S),
            (n.child = i),
            hr(n, t.child, null, r),
            (i = n.child),
            (i.memoizedState = gc(r)),
            (i.childLanes = yc(t, y, r)),
            (n.memoizedState = pc),
            (n = li(null, i)));
      else if ((va(n), Wc(S))) {
        if (((y = S.nextSibling && S.nextSibling.dataset), y)) var H = y.dgst;
        (y = H),
          (i = Error(o(419))),
          (i.stack = ""),
          (i.digest = y),
          Zs({ value: i, source: null, stack: null }),
          (n = bc(t, n, r));
      } else if (
        (re || Wr(t, n, r, !1), (y = (r & t.childLanes) !== 0), re || y)
      ) {
        if (
          ((y = Pt),
          y !== null && ((i = je(y, r)), i !== 0 && i !== M.retryLane))
        )
          throw ((M.retryLane = i), sr(t, i), Pe(y, t, i), hc);
        $c(S) || Po(), (n = bc(t, n, r));
      } else
        $c(S)
          ? ((n.flags |= 192), (n.child = t.child), (n = null))
          : ((t = M.treeContext),
            (Vt = fn(S.nextSibling)),
            (we = n),
            (Ot = !0),
            (da = null),
            (un = !1),
            t !== null && xh(n, t),
            (n = vc(n, i.children)),
            (n.flags |= 4096));
      return n;
    }
    return u
      ? (ba(),
        (S = i.fallback),
        (u = n.mode),
        (M = t.child),
        (H = M.sibling),
        (i = qn(M, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = M.subtreeFlags & 65011712),
        H !== null ? (S = qn(H, S)) : ((S = ir(S, u, r, null)), (S.flags |= 2)),
        (S.return = n),
        (i.return = n),
        (i.sibling = S),
        (n.child = i),
        li(null, i),
        (i = n.child),
        (S = t.child.memoizedState),
        S === null
          ? (S = gc(r))
          : ((u = S.cachePool),
            u !== null
              ? ((M = ne._currentValue),
                (u = u.parent !== M ? { parent: M, pool: M } : u))
              : (u = Ch()),
            (S = { baseLanes: S.baseLanes | r, cachePool: u })),
        (i.memoizedState = S),
        (i.childLanes = yc(t, y, r)),
        (n.memoizedState = pc),
        li(t.child, i))
      : (va(n),
        (r = t.child),
        (t = r.sibling),
        (r = qn(r, { mode: "visible", children: i.children })),
        (r.return = n),
        (r.sibling = null),
        t !== null &&
          ((y = n.deletions),
          y === null ? ((n.deletions = [t]), (n.flags |= 16)) : y.push(t)),
        (n.child = r),
        (n.memoizedState = null),
        r);
  }
  function vc(t, n) {
    return (
      (n = Do({ mode: "visible", children: n }, t.mode)),
      (n.return = t),
      (t.child = n)
    );
  }
  function Do(t, n) {
    return (t = Xe(22, t, null, n)), (t.lanes = 0), t;
  }
  function bc(t, n, r) {
    return (
      hr(n, t.child, null, r),
      (t = vc(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function qm(t, n, r) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n), ju(t.return, n, r);
  }
  function Sc(t, n, r, i, u, f) {
    var y = t.memoizedState;
    y === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: r,
          tailMode: u,
          treeForkCount: f,
        })
      : ((y.isBackwards = n),
        (y.rendering = null),
        (y.renderingStartTime = 0),
        (y.last = i),
        (y.tail = r),
        (y.tailMode = u),
        (y.treeForkCount = f));
  }
  function Pm(t, n, r) {
    var i = n.pendingProps,
      u = i.revealOrder,
      f = i.tail;
    i = i.children;
    var y = $t.current,
      S = (y & 2) !== 0;
    if (
      (S ? ((y = (y & 1) | 2), (n.flags |= 128)) : (y &= 1),
      F($t, y),
      _e(t, n, i, r),
      (i = Ot ? Ks : 0),
      !S && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = n.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && qm(t, r, n);
        else if (t.tag === 19) qm(t, r, n);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === n) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === n) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (u) {
      case "forwards":
        for (r = n.child, u = null; r !== null; )
          (t = r.alternate),
            t !== null && So(t) === null && (u = r),
            (r = r.sibling);
        (r = u),
          r === null
            ? ((u = n.child), (n.child = null))
            : ((u = r.sibling), (r.sibling = null)),
          Sc(n, !1, u, r, f, i);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (r = null, u = n.child, n.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && So(t) === null)) {
            n.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = r), (r = u), (u = t);
        }
        Sc(n, !0, r, null, f, i);
        break;
      case "together":
        Sc(n, !1, null, null, void 0, i);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function In(t, n, r) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (wa |= n.lanes),
      (r & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((Wr(t, n, r, !1), (r & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(o(153));
    if (n.child !== null) {
      for (
        t = n.child, r = qn(t, t.pendingProps), n.child = r, r.return = n;
        t.sibling !== null;

      )
        (t = t.sibling),
          (r = r.sibling = qn(t, t.pendingProps)),
          (r.return = n);
      r.sibling = null;
    }
    return n.child;
  }
  function xc(t, n) {
    return (t.lanes & n) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && fo(t)));
  }
  function PS(t, n, r) {
    switch (n.tag) {
      case 3:
        pt(n, n.stateNode.containerInfo),
          ma(n, ne, t.memoizedState.cache),
          or();
        break;
      case 27:
      case 5:
        be(n);
        break;
      case 4:
        pt(n, n.stateNode.containerInfo);
        break;
      case 10:
        ma(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return (n.flags |= 128), Iu(n), null;
        break;
      case 13:
        var i = n.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (va(n), (n.flags |= 128), null)
            : (r & n.child.childLanes) !== 0
            ? Hm(t, n, r)
            : (va(n), (t = In(t, n, r)), t !== null ? t.sibling : null);
        va(n);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((i = (r & n.childLanes) !== 0),
          i || (Wr(t, n, r, !1), (i = (r & n.childLanes) !== 0)),
          u)
        ) {
          if (i) return Pm(t, n, r);
          n.flags |= 128;
        }
        if (
          ((u = n.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          F($t, $t.current),
          i)
        )
          break;
        return null;
      case 22:
        return (n.lanes = 0), zm(t, n, r, n.pendingProps);
      case 24:
        ma(n, ne, t.memoizedState.cache);
    }
    return In(t, n, r);
  }
  function Ym(t, n, r) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) re = !0;
      else {
        if (!xc(t, r) && (n.flags & 128) === 0) return (re = !1), PS(t, n, r);
        re = (t.flags & 131072) !== 0;
      }
    else (re = !1), Ot && (n.flags & 1048576) !== 0 && Sh(n, Ks, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          var i = n.pendingProps;
          if (((t = fr(n.elementType)), (n.type = t), typeof t == "function"))
            Tu(t)
              ? ((i = pr(t, i)), (n.tag = 1), (n = Bm(null, n, t, i, r)))
              : ((n.tag = 0), (n = mc(null, n, t, i, r)));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === j) {
                (n.tag = 11), (n = Mm(null, n, t, i, r));
                break t;
              } else if (u === Y) {
                (n.tag = 14), (n = Nm(null, n, t, i, r));
                break t;
              }
            }
            throw ((n = jt(t) || t), Error(o(306, n, "")));
          }
        }
        return n;
      case 0:
        return mc(t, n, n.type, n.pendingProps, r);
      case 1:
        return (i = n.type), (u = pr(i, n.pendingProps)), Bm(t, n, i, u, r);
      case 3:
        t: {
          if ((pt(n, n.stateNode.containerInfo), t === null))
            throw Error(o(387));
          i = n.pendingProps;
          var f = n.memoizedState;
          (u = f.element), Pu(t, n), ai(n, i, null, r);
          var y = n.memoizedState;
          if (
            ((i = y.cache),
            ma(n, ne, i),
            i !== f.cache && Lu(n, [ne], r, !0),
            ni(),
            (i = y.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: i, isDehydrated: !1, cache: y.cache }),
              (n.updateQueue.baseState = f),
              (n.memoizedState = f),
              n.flags & 256)
            ) {
              n = km(t, n, i, r);
              break t;
            } else if (i !== u) {
              (u = sn(Error(o(424)), n)), Zs(u), (n = km(t, n, i, r));
              break t;
            } else
              for (
                t = n.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Vt = fn(t.firstChild),
                  we = n,
                  Ot = !0,
                  da = null,
                  un = !0,
                  r = zh(n, null, i, r),
                  n.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((or(), i === u)) {
              n = In(t, n, r);
              break t;
            }
            _e(t, n, i, r);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          No(t, n),
          t === null
            ? (r = Wp(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = r)
              : Ot ||
                ((r = n.type),
                (t = n.pendingProps),
                (i = Xo(rt.current).createElement(r)),
                (i[xe] = n),
                (i[Le] = t),
                Re(i, r, t),
                pe(i),
                (n.stateNode = i))
            : (n.memoizedState = Wp(
                n.type,
                t.memoizedProps,
                n.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          be(n),
          t === null &&
            Ot &&
            ((i = n.stateNode = Zp(n.type, n.pendingProps, rt.current)),
            (we = n),
            (un = !0),
            (u = Vt),
            Ca(n.type) ? ((tf = u), (Vt = fn(i.firstChild))) : (Vt = u)),
          _e(t, n, n.pendingProps.children, r),
          No(t, n),
          t === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          t === null &&
            Ot &&
            ((u = i = Vt) &&
              ((i = y1(i, n.type, n.pendingProps, un)),
              i !== null
                ? ((n.stateNode = i),
                  (we = n),
                  (Vt = fn(i.firstChild)),
                  (un = !1),
                  (u = !0))
                : (u = !1)),
            u || ha(n)),
          be(n),
          (u = n.type),
          (f = n.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (i = f.children),
          Kc(u, f) ? (i = null) : y !== null && Kc(u, y) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((u = Xu(t, n, DS, null, null, r)), (Ei._currentValue = u)),
          No(t, n),
          _e(t, n, i, r),
          n.child
        );
      case 6:
        return (
          t === null &&
            Ot &&
            ((t = r = Vt) &&
              ((r = v1(r, n.pendingProps, un)),
              r !== null
                ? ((n.stateNode = r), (we = n), (Vt = null), (t = !0))
                : (t = !1)),
            t || ha(n)),
          null
        );
      case 13:
        return Hm(t, n, r);
      case 4:
        return (
          pt(n, n.stateNode.containerInfo),
          (i = n.pendingProps),
          t === null ? (n.child = hr(n, null, i, r)) : _e(t, n, i, r),
          n.child
        );
      case 11:
        return Mm(t, n, n.type, n.pendingProps, r);
      case 7:
        return _e(t, n, n.pendingProps, r), n.child;
      case 8:
        return _e(t, n, n.pendingProps.children, r), n.child;
      case 12:
        return _e(t, n, n.pendingProps.children, r), n.child;
      case 10:
        return (
          (i = n.pendingProps),
          ma(n, n.type, i.value),
          _e(t, n, i.children, r),
          n.child
        );
      case 9:
        return (
          (u = n.type._context),
          (i = n.pendingProps.children),
          ur(n),
          (u = Ee(u)),
          (i = i(u)),
          (n.flags |= 1),
          _e(t, n, i, r),
          n.child
        );
      case 14:
        return Nm(t, n, n.type, n.pendingProps, r);
      case 15:
        return Dm(t, n, n.type, n.pendingProps, r);
      case 19:
        return Pm(t, n, r);
      case 31:
        return qS(t, n, r);
      case 22:
        return zm(t, n, r, n.pendingProps);
      case 24:
        return (
          ur(n),
          (i = Ee(ne)),
          t === null
            ? ((u = ku()),
              u === null &&
                ((u = Pt),
                (f = Uu()),
                (u.pooledCache = f),
                f.refCount++,
                f !== null && (u.pooledCacheLanes |= r),
                (u = f)),
              (n.memoizedState = { parent: i, cache: u }),
              qu(n),
              ma(n, ne, u))
            : ((t.lanes & r) !== 0 && (Pu(t, n), ai(n, null, null, r), ni()),
              (u = t.memoizedState),
              (f = n.memoizedState),
              u.parent !== i
                ? ((u = { parent: i, cache: i }),
                  (n.memoizedState = u),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = u),
                  ma(n, ne, i))
                : ((i = f.cache),
                  ma(n, ne, i),
                  i !== u.cache && Lu(n, [ne], r, !0))),
          _e(t, n, n.pendingProps.children, r),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(o(156, n.tag));
  }
  function Fn(t) {
    t.flags |= 4;
  }
  function wc(t, n, r, i, u) {
    if (((n = (t.mode & 32) !== 0) && (n = !1), n)) {
      if (((t.flags |= 16777216), (u & 335544128) === u))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (pp()) t.flags |= 8192;
        else throw ((dr = go), Hu);
    } else t.flags &= -16777217;
  }
  function Vm(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !rg(n)))
      if (pp()) t.flags |= 8192;
      else throw ((dr = go), Hu);
  }
  function zo(t, n) {
    n !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((n = t.tag !== 22 ? Ce() : 536870912), (t.lanes |= n), (fs |= n));
  }
  function ui(t, n) {
    if (!Ot)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null ? (t.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = t.tail;
          for (var i = null; r !== null; )
            r.alternate !== null && (i = r), (r = r.sibling);
          i === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Gt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      r = 0,
      i = 0;
    if (n)
      for (var u = t.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (i |= u.subtreeFlags & 65011712),
          (i |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (i |= u.subtreeFlags),
          (i |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = r), n;
  }
  function YS(t, n, r) {
    var i = n.pendingProps;
    switch ((Mu(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Gt(n), null;
      case 1:
        return Gt(n), null;
      case 3:
        return (
          (r = n.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          n.memoizedState.cache !== i && (n.flags |= 2048),
          Vn(ne),
          dt(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (t === null || t.child === null) &&
            ($r(n)
              ? Fn(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Du())),
          Gt(n),
          null
        );
      case 26:
        var u = n.type,
          f = n.memoizedState;
        return (
          t === null
            ? (Fn(n),
              f !== null ? (Gt(n), Vm(n, f)) : (Gt(n), wc(n, u, null, i, r)))
            : f
            ? f !== t.memoizedState
              ? (Fn(n), Gt(n), Vm(n, f))
              : (Gt(n), (n.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== i && Fn(n),
              Gt(n),
              wc(n, u, t, i, r)),
          null
        );
      case 27:
        if (
          (ie(n),
          (r = rt.current),
          (u = n.type),
          t !== null && n.stateNode != null)
        )
          t.memoizedProps !== i && Fn(n);
        else {
          if (!i) {
            if (n.stateNode === null) throw Error(o(166));
            return Gt(n), null;
          }
          (t = tt.current),
            $r(n) ? wh(n) : ((t = Zp(u, i, r)), (n.stateNode = t), Fn(n));
        }
        return Gt(n), null;
      case 5:
        if ((ie(n), (u = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== i && Fn(n);
        else {
          if (!i) {
            if (n.stateNode === null) throw Error(o(166));
            return Gt(n), null;
          }
          if (((f = tt.current), $r(n))) wh(n);
          else {
            var y = Xo(rt.current);
            switch (f) {
              case 1:
                f = y.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                f = y.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    f = y.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    f = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    (f = y.createElement("div")),
                      (f.innerHTML = "<script></script>"),
                      (f = f.removeChild(f.firstChild));
                    break;
                  case "select":
                    (f =
                      typeof i.is == "string"
                        ? y.createElement("select", { is: i.is })
                        : y.createElement("select")),
                      i.multiple
                        ? (f.multiple = !0)
                        : i.size && (f.size = i.size);
                    break;
                  default:
                    f =
                      typeof i.is == "string"
                        ? y.createElement(u, { is: i.is })
                        : y.createElement(u);
                }
            }
            (f[xe] = n), (f[Le] = i);
            t: for (y = n.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6) f.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                (y.child.return = y), (y = y.child);
                continue;
              }
              if (y === n) break t;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === n) break t;
                y = y.return;
              }
              (y.sibling.return = y.return), (y = y.sibling);
            }
            n.stateNode = f;
            t: switch ((Re(f, u, i), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && Fn(n);
          }
        }
        return (
          Gt(n),
          wc(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, r),
          null
        );
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== i && Fn(n);
        else {
          if (typeof i != "string" && n.stateNode === null) throw Error(o(166));
          if (((t = rt.current), $r(n))) {
            if (
              ((t = n.stateNode),
              (r = n.memoizedProps),
              (i = null),
              (u = we),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  i = u.memoizedProps;
              }
            (t[xe] = n),
              (t = !!(
                t.nodeValue === r ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Hp(t.nodeValue, r)
              )),
              t || ha(n, !0);
          } else (t = Xo(t).createTextNode(i)), (t[xe] = n), (n.stateNode = t);
        }
        return Gt(n), null;
      case 31:
        if (((r = n.memoizedState), t === null || t.memoizedState !== null)) {
          if (((i = $r(n)), r !== null)) {
            if (t === null) {
              if (!i) throw Error(o(318));
              if (
                ((t = n.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(o(557));
              t[xe] = n;
            } else
              or(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            Gt(n), (t = !1);
          } else
            (r = Du()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = r),
              (t = !0);
          if (!t) return n.flags & 256 ? (Ze(n), n) : (Ze(n), null);
          if ((n.flags & 128) !== 0) throw Error(o(558));
        }
        return Gt(n), null;
      case 13:
        if (
          ((i = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = $r(n)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[xe] = n;
            } else
              or(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            Gt(n), (u = !1);
          } else
            (u = Du()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return n.flags & 256 ? (Ze(n), n) : (Ze(n), null);
        }
        return (
          Ze(n),
          (n.flags & 128) !== 0
            ? ((n.lanes = r), n)
            : ((r = i !== null),
              (t = t !== null && t.memoizedState !== null),
              r &&
                ((i = n.child),
                (u = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (u = i.alternate.memoizedState.cachePool.pool),
                (f = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (f = i.memoizedState.cachePool.pool),
                f !== u && (i.flags |= 2048)),
              r !== t && r && (n.child.flags |= 8192),
              zo(n, n.updateQueue),
              Gt(n),
              null)
        );
      case 4:
        return dt(), t === null && Gc(n.stateNode.containerInfo), Gt(n), null;
      case 10:
        return Vn(n.type), Gt(n), null;
      case 19:
        if ((Q($t), (i = n.memoizedState), i === null)) return Gt(n), null;
        if (((u = (n.flags & 128) !== 0), (f = i.rendering), f === null))
          if (u) ui(i, !1);
          else {
            if (Jt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((f = So(t)), f !== null)) {
                  for (
                    n.flags |= 128,
                      ui(i, !1),
                      t = f.updateQueue,
                      n.updateQueue = t,
                      zo(n, t),
                      n.subtreeFlags = 0,
                      t = r,
                      r = n.child;
                    r !== null;

                  )
                    yh(r, t), (r = r.sibling);
                  return (
                    F($t, ($t.current & 1) | 2),
                    Ot && Pn(n, i.treeForkCount),
                    n.child
                  );
                }
                t = t.sibling;
              }
            i.tail !== null &&
              he() > ko &&
              ((n.flags |= 128), (u = !0), ui(i, !1), (n.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = So(f)), t !== null)) {
              if (
                ((n.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                zo(n, t),
                ui(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !f.alternate &&
                  !Ot)
              )
                return Gt(n), null;
            } else
              2 * he() - i.renderingStartTime > ko &&
                r !== 536870912 &&
                ((n.flags |= 128), (u = !0), ui(i, !1), (n.lanes = 4194304));
          i.isBackwards
            ? ((f.sibling = n.child), (n.child = f))
            : ((t = i.last),
              t !== null ? (t.sibling = f) : (n.child = f),
              (i.last = f));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = he()),
            (t.sibling = null),
            (r = $t.current),
            F($t, u ? (r & 1) | 2 : r & 1),
            Ot && Pn(n, i.treeForkCount),
            t)
          : (Gt(n), null);
      case 22:
      case 23:
        return (
          Ze(n),
          Qu(),
          (i = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (n.flags |= 8192)
            : i && (n.flags |= 8192),
          i
            ? (r & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (Gt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Gt(n),
          (r = n.updateQueue),
          r !== null && zo(n, r.retryQueue),
          (r = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (r = t.memoizedState.cachePool.pool),
          (i = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (i = n.memoizedState.cachePool.pool),
          i !== r && (n.flags |= 2048),
          t !== null && Q(cr),
          null
        );
      case 24:
        return (
          (r = null),
          t !== null && (r = t.memoizedState.cache),
          n.memoizedState.cache !== r && (n.flags |= 2048),
          Vn(ne),
          Gt(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function VS(t, n) {
    switch ((Mu(n), n.tag)) {
      case 1:
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          Vn(ne),
          dt(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((n.flags = (t & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ie(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if ((Ze(n), n.alternate === null)) throw Error(o(340));
          or();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 13:
        if (
          (Ze(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(o(340));
          or();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return Q($t), null;
      case 4:
        return dt(), null;
      case 10:
        return Vn(n.type), null;
      case 22:
      case 23:
        return (
          Ze(n),
          Qu(),
          t !== null && Q(cr),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return Vn(ne), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Gm(t, n) {
    switch ((Mu(n), n.tag)) {
      case 3:
        Vn(ne), dt();
        break;
      case 26:
      case 27:
      case 5:
        ie(n);
        break;
      case 4:
        dt();
        break;
      case 31:
        n.memoizedState !== null && Ze(n);
        break;
      case 13:
        Ze(n);
        break;
      case 19:
        Q($t);
        break;
      case 10:
        Vn(n.type);
        break;
      case 22:
      case 23:
        Ze(n), Qu(), t !== null && Q(cr);
        break;
      case 24:
        Vn(ne);
    }
  }
  function ci(t, n) {
    try {
      var r = n.updateQueue,
        i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        r = u;
        do {
          if ((r.tag & t) === t) {
            i = void 0;
            var f = r.create,
              y = r.inst;
            (i = f()), (y.destroy = i);
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (S) {
      Ut(n, n.return, S);
    }
  }
  function Sa(t, n, r) {
    try {
      var i = n.updateQueue,
        u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        i = f;
        do {
          if ((i.tag & t) === t) {
            var y = i.inst,
              S = y.destroy;
            if (S !== void 0) {
              (y.destroy = void 0), (u = n);
              var M = r,
                H = S;
              try {
                H();
              } catch (G) {
                Ut(u, M, G);
              }
            }
          }
          i = i.next;
        } while (i !== f);
      }
    } catch (G) {
      Ut(n, n.return, G);
    }
  }
  function Qm(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var r = t.stateNode;
      try {
        Lh(n, r);
      } catch (i) {
        Ut(t, t.return, i);
      }
    }
  }
  function Im(t, n, r) {
    (r.props = pr(t.type, t.memoizedProps)), (r.state = t.memoizedState);
    try {
      r.componentWillUnmount();
    } catch (i) {
      Ut(t, n, i);
    }
  }
  function fi(t, n) {
    try {
      var r = t.ref;
      if (r !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof r == "function" ? (t.refCleanup = r(i)) : (r.current = i);
      }
    } catch (u) {
      Ut(t, n, u);
    }
  }
  function An(t, n) {
    var r = t.ref,
      i = t.refCleanup;
    if (r !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (u) {
          Ut(t, n, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (u) {
          Ut(t, n, u);
        }
      else r.current = null;
  }
  function Fm(t) {
    var n = t.type,
      r = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && i.focus();
          break t;
        case "img":
          r.src ? (i.src = r.src) : r.srcSet && (i.srcset = r.srcSet);
      }
    } catch (u) {
      Ut(t, t.return, u);
    }
  }
  function Ec(t, n, r) {
    try {
      var i = t.stateNode;
      f1(i, t.type, r, n), (i[Le] = n);
    } catch (u) {
      Ut(t, t.return, u);
    }
  }
  function Xm(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Ca(t.type)) ||
      t.tag === 4
    );
  }
  function _c(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Xm(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Ca(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Rc(t, n, r) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode),
        n
          ? (r.nodeType === 9
              ? r.body
              : r.nodeName === "HTML"
              ? r.ownerDocument.body
              : r
            ).insertBefore(t, n)
          : ((n =
              r.nodeType === 9
                ? r.body
                : r.nodeName === "HTML"
                ? r.ownerDocument.body
                : r),
            n.appendChild(t),
            (r = r._reactRootContainer),
            r != null || n.onclick !== null || (n.onclick = kn));
    else if (
      i !== 4 &&
      (i === 27 && Ca(t.type) && ((r = t.stateNode), (n = null)),
      (t = t.child),
      t !== null)
    )
      for (Rc(t, n, r), t = t.sibling; t !== null; )
        Rc(t, n, r), (t = t.sibling);
  }
  function jo(t, n, r) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode), n ? r.insertBefore(t, n) : r.appendChild(t);
    else if (
      i !== 4 &&
      (i === 27 && Ca(t.type) && (r = t.stateNode), (t = t.child), t !== null)
    )
      for (jo(t, n, r), t = t.sibling; t !== null; )
        jo(t, n, r), (t = t.sibling);
  }
  function Km(t) {
    var n = t.stateNode,
      r = t.memoizedProps;
    try {
      for (var i = t.type, u = n.attributes; u.length; )
        n.removeAttributeNode(u[0]);
      Re(n, i, r), (n[xe] = t), (n[Le] = r);
    } catch (f) {
      Ut(t, t.return, f);
    }
  }
  var Xn = !1,
    se = !1,
    Tc = !1,
    Zm = typeof WeakSet == "function" ? WeakSet : Set,
    ge = null;
  function GS(t, n) {
    if (((t = t.containerInfo), (Fc = el), (t = lh(t)), bu(t))) {
      if ("selectionStart" in t)
        var r = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          r = ((r = t.ownerDocument) && r.defaultView) || window;
          var i = r.getSelection && r.getSelection();
          if (i && i.rangeCount !== 0) {
            r = i.anchorNode;
            var u = i.anchorOffset,
              f = i.focusNode;
            i = i.focusOffset;
            try {
              r.nodeType, f.nodeType;
            } catch {
              r = null;
              break t;
            }
            var y = 0,
              S = -1,
              M = -1,
              H = 0,
              G = 0,
              X = t,
              P = null;
            e: for (;;) {
              for (
                var V;
                X !== r || (u !== 0 && X.nodeType !== 3) || (S = y + u),
                  X !== f || (i !== 0 && X.nodeType !== 3) || (M = y + i),
                  X.nodeType === 3 && (y += X.nodeValue.length),
                  (V = X.firstChild) !== null;

              )
                (P = X), (X = V);
              for (;;) {
                if (X === t) break e;
                if (
                  (P === r && ++H === u && (S = y),
                  P === f && ++G === i && (M = y),
                  (V = X.nextSibling) !== null)
                )
                  break;
                (X = P), (P = X.parentNode);
              }
              X = V;
            }
            r = S === -1 || M === -1 ? null : { start: S, end: M };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Xc = { focusedElem: t, selectionRange: r }, el = !1, ge = n;
      ge !== null;

    )
      if (
        ((n = ge), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = n), (ge = t);
      else
        for (; ge !== null; ) {
          switch (((n = ge), (f = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = n.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (r = 0; r < t.length; r++)
                  (u = t[r]), (u.ref.impl = u.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && f !== null) {
                (t = void 0),
                  (r = n),
                  (u = f.memoizedProps),
                  (f = f.memoizedState),
                  (i = r.stateNode);
                try {
                  var ot = pr(r.type, u);
                  (t = i.getSnapshotBeforeUpdate(ot, f)),
                    (i.__reactInternalSnapshotBeforeUpdate = t);
                } catch (ht) {
                  Ut(r, r.return, ht);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = n.stateNode.containerInfo), (r = t.nodeType), r === 9)
                )
                  Jc(t);
                else if (r === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (ge = t);
            break;
          }
          ge = n.return;
        }
  }
  function Jm(t, n, r) {
    var i = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Zn(t, r), i & 4 && ci(5, r);
        break;
      case 1:
        if ((Zn(t, r), i & 4))
          if (((t = r.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (y) {
              Ut(r, r.return, y);
            }
          else {
            var u = pr(r.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(u, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              Ut(r, r.return, y);
            }
          }
        i & 64 && Qm(r), i & 512 && fi(r, r.return);
        break;
      case 3:
        if ((Zn(t, r), i & 64 && ((t = r.updateQueue), t !== null))) {
          if (((n = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                n = r.child.stateNode;
                break;
              case 1:
                n = r.child.stateNode;
            }
          try {
            Lh(t, n);
          } catch (y) {
            Ut(r, r.return, y);
          }
        }
        break;
      case 27:
        n === null && i & 4 && Km(r);
      case 26:
      case 5:
        Zn(t, r), n === null && i & 4 && Fm(r), i & 512 && fi(r, r.return);
        break;
      case 12:
        Zn(t, r);
        break;
      case 31:
        Zn(t, r), i & 4 && tp(t, r);
        break;
      case 13:
        Zn(t, r),
          i & 4 && ep(t, r),
          i & 64 &&
            ((t = r.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((r = WS.bind(null, r)), b1(t, r))));
        break;
      case 22:
        if (((i = r.memoizedState !== null || Xn), !i)) {
          (n = (n !== null && n.memoizedState !== null) || se), (u = Xn);
          var f = se;
          (Xn = i),
            (se = n) && !f ? Jn(t, r, (r.subtreeFlags & 8772) !== 0) : Zn(t, r),
            (Xn = u),
            (se = f);
        }
        break;
      case 30:
        break;
      default:
        Zn(t, r);
    }
  }
  function $m(t) {
    var n = t.alternate;
    n !== null && ((t.alternate = null), $m(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && nu(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var It = null,
    Be = !1;
  function Kn(t, n, r) {
    for (r = r.child; r !== null; ) Wm(t, n, r), (r = r.sibling);
  }
  function Wm(t, n, r) {
    if (Oe && typeof Oe.onCommitFiberUnmount == "function")
      try {
        Oe.onCommitFiberUnmount($a, r);
      } catch {}
    switch (r.tag) {
      case 26:
        se || An(r, n),
          Kn(t, n, r),
          r.memoizedState
            ? r.memoizedState.count--
            : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r));
        break;
      case 27:
        se || An(r, n);
        var i = It,
          u = Be;
        Ca(r.type) && ((It = r.stateNode), (Be = !1)),
          Kn(t, n, r),
          Si(r.stateNode),
          (It = i),
          (Be = u);
        break;
      case 5:
        se || An(r, n);
      case 6:
        if (
          ((i = It),
          (u = Be),
          (It = null),
          Kn(t, n, r),
          (It = i),
          (Be = u),
          It !== null)
        )
          if (Be)
            try {
              (It.nodeType === 9
                ? It.body
                : It.nodeName === "HTML"
                ? It.ownerDocument.body
                : It
              ).removeChild(r.stateNode);
            } catch (f) {
              Ut(r, n, f);
            }
          else
            try {
              It.removeChild(r.stateNode);
            } catch (f) {
              Ut(r, n, f);
            }
        break;
      case 18:
        It !== null &&
          (Be
            ? ((t = It),
              Qp(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                r.stateNode
              ),
              bs(t))
            : Qp(It, r.stateNode));
        break;
      case 4:
        (i = It),
          (u = Be),
          (It = r.stateNode.containerInfo),
          (Be = !0),
          Kn(t, n, r),
          (It = i),
          (Be = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Sa(2, r, n), se || Sa(4, r, n), Kn(t, n, r);
        break;
      case 1:
        se ||
          (An(r, n),
          (i = r.stateNode),
          typeof i.componentWillUnmount == "function" && Im(r, n, i)),
          Kn(t, n, r);
        break;
      case 21:
        Kn(t, n, r);
        break;
      case 22:
        (se = (i = se) || r.memoizedState !== null), Kn(t, n, r), (se = i);
        break;
      default:
        Kn(t, n, r);
    }
  }
  function tp(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        bs(t);
      } catch (r) {
        Ut(n, n.return, r);
      }
    }
  }
  function ep(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        bs(t);
      } catch (r) {
        Ut(n, n.return, r);
      }
  }
  function QS(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new Zm()), n;
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new Zm()),
          n
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Lo(t, n) {
    var r = QS(t);
    n.forEach(function (i) {
      if (!r.has(i)) {
        r.add(i);
        var u = t1.bind(null, t, i);
        i.then(u, u);
      }
    });
  }
  function ke(t, n) {
    var r = n.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var u = r[i],
          f = t,
          y = n,
          S = y;
        t: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (Ca(S.type)) {
                (It = S.stateNode), (Be = !1);
                break t;
              }
              break;
            case 5:
              (It = S.stateNode), (Be = !1);
              break t;
            case 3:
            case 4:
              (It = S.stateNode.containerInfo), (Be = !0);
              break t;
          }
          S = S.return;
        }
        if (It === null) throw Error(o(160));
        Wm(f, y, u),
          (It = null),
          (Be = !1),
          (f = u.alternate),
          f !== null && (f.return = null),
          (u.return = null);
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; ) np(n, t), (n = n.sibling);
  }
  var yn = null;
  function np(t, n) {
    var r = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ke(n, t),
          He(t),
          i & 4 && (Sa(3, t, t.return), ci(3, t), Sa(5, t, t.return));
        break;
      case 1:
        ke(n, t),
          He(t),
          i & 512 && (se || r === null || An(r, r.return)),
          i & 64 &&
            Xn &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((r = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = r === null ? i : r.concat(i)))));
        break;
      case 26:
        var u = yn;
        if (
          (ke(n, t),
          He(t),
          i & 512 && (se || r === null || An(r, r.return)),
          i & 4)
        ) {
          var f = r !== null ? r.memoizedState : null;
          if (((i = t.memoizedState), r === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  (i = t.type),
                    (r = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  e: switch (i) {
                    case "title":
                      (f = u.getElementsByTagName("title")[0]),
                        (!f ||
                          f[ks] ||
                          f[xe] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = u.createElement(i)),
                          u.head.insertBefore(
                            f,
                            u.querySelector("head > title")
                          )),
                        Re(f, i, r),
                        (f[xe] = t),
                        pe(f),
                        (i = f);
                      break t;
                    case "link":
                      var y = ng("link", "href", u).get(i + (r.href || ""));
                      if (y) {
                        for (var S = 0; S < y.length; S++)
                          if (
                            ((f = y[S]),
                            f.getAttribute("href") ===
                              (r.href == null || r.href === ""
                                ? null
                                : r.href) &&
                              f.getAttribute("rel") ===
                                (r.rel == null ? null : r.rel) &&
                              f.getAttribute("title") ===
                                (r.title == null ? null : r.title) &&
                              f.getAttribute("crossorigin") ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            y.splice(S, 1);
                            break e;
                          }
                      }
                      (f = u.createElement(i)),
                        Re(f, i, r),
                        u.head.appendChild(f);
                      break;
                    case "meta":
                      if (
                        (y = ng("meta", "content", u).get(
                          i + (r.content || "")
                        ))
                      ) {
                        for (S = 0; S < y.length; S++)
                          if (
                            ((f = y[S]),
                            f.getAttribute("content") ===
                              (r.content == null ? null : "" + r.content) &&
                              f.getAttribute("name") ===
                                (r.name == null ? null : r.name) &&
                              f.getAttribute("property") ===
                                (r.property == null ? null : r.property) &&
                              f.getAttribute("http-equiv") ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (r.charSet == null ? null : r.charSet))
                          ) {
                            y.splice(S, 1);
                            break e;
                          }
                      }
                      (f = u.createElement(i)),
                        Re(f, i, r),
                        u.head.appendChild(f);
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  (f[xe] = t), pe(f), (i = f);
                }
                t.stateNode = i;
              } else ag(u, t.type, t.stateNode);
            else t.stateNode = eg(u, i, t.memoizedProps);
          else
            f !== i
              ? (f === null
                  ? r.stateNode !== null &&
                    ((r = r.stateNode), r.parentNode.removeChild(r))
                  : f.count--,
                i === null
                  ? ag(u, t.type, t.stateNode)
                  : eg(u, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                Ec(t, t.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        ke(n, t),
          He(t),
          i & 512 && (se || r === null || An(r, r.return)),
          r !== null && i & 4 && Ec(t, t.memoizedProps, r.memoizedProps);
        break;
      case 5:
        if (
          (ke(n, t),
          He(t),
          i & 512 && (se || r === null || An(r, r.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            Yr(u, "");
          } catch (ot) {
            Ut(t, t.return, ot);
          }
        }
        i & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), Ec(t, u, r !== null ? r.memoizedProps : u)),
          i & 1024 && (Tc = !0);
        break;
      case 6:
        if ((ke(n, t), He(t), i & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (i = t.memoizedProps), (r = t.stateNode);
          try {
            r.nodeValue = i;
          } catch (ot) {
            Ut(t, t.return, ot);
          }
        }
        break;
      case 3:
        if (
          ((Jo = null),
          (u = yn),
          (yn = Ko(n.containerInfo)),
          ke(n, t),
          (yn = u),
          He(t),
          i & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            bs(n.containerInfo);
          } catch (ot) {
            Ut(t, t.return, ot);
          }
        Tc && ((Tc = !1), ap(t));
        break;
      case 4:
        (i = yn),
          (yn = Ko(t.stateNode.containerInfo)),
          ke(n, t),
          He(t),
          (yn = i);
        break;
      case 12:
        ke(n, t), He(t);
        break;
      case 31:
        ke(n, t),
          He(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Lo(t, i)));
        break;
      case 13:
        ke(n, t),
          He(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (r !== null && r.memoizedState !== null) &&
            (Bo = he()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Lo(t, i)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var M = r !== null && r.memoizedState !== null,
          H = Xn,
          G = se;
        if (
          ((Xn = H || u),
          (se = G || M),
          ke(n, t),
          (se = G),
          (Xn = H),
          He(t),
          i & 8192)
        )
          t: for (
            n = t.stateNode,
              n._visibility = u ? n._visibility & -2 : n._visibility | 1,
              u && (r === null || M || Xn || se || gr(t)),
              r = null,
              n = t;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (r === null) {
                M = r = n;
                try {
                  if (((f = M.stateNode), u))
                    (y = f.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none");
                  else {
                    S = M.stateNode;
                    var X = M.memoizedProps.style,
                      P =
                        X != null && X.hasOwnProperty("display")
                          ? X.display
                          : null;
                    S.style.display =
                      P == null || typeof P == "boolean" ? "" : ("" + P).trim();
                  }
                } catch (ot) {
                  Ut(M, M.return, ot);
                }
              }
            } else if (n.tag === 6) {
              if (r === null) {
                M = n;
                try {
                  M.stateNode.nodeValue = u ? "" : M.memoizedProps;
                } catch (ot) {
                  Ut(M, M.return, ot);
                }
              }
            } else if (n.tag === 18) {
              if (r === null) {
                M = n;
                try {
                  var V = M.stateNode;
                  u ? Ip(V, !0) : Ip(M.stateNode, !1);
                } catch (ot) {
                  Ut(M, M.return, ot);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === t) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break t;
              r === n && (r = null), (n = n.return);
            }
            r === n && (r = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((r = i.retryQueue),
            r !== null && ((i.retryQueue = null), Lo(t, r))));
        break;
      case 19:
        ke(n, t),
          He(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Lo(t, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ke(n, t), He(t);
    }
  }
  function He(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var r, i = t.return; i !== null; ) {
          if (Xm(i)) {
            r = i;
            break;
          }
          i = i.return;
        }
        if (r == null) throw Error(o(160));
        switch (r.tag) {
          case 27:
            var u = r.stateNode,
              f = _c(t);
            jo(t, f, u);
            break;
          case 5:
            var y = r.stateNode;
            r.flags & 32 && (Yr(y, ""), (r.flags &= -33));
            var S = _c(t);
            jo(t, S, y);
            break;
          case 3:
          case 4:
            var M = r.stateNode.containerInfo,
              H = _c(t);
            Rc(t, H, M);
            break;
          default:
            throw Error(o(161));
        }
      } catch (G) {
        Ut(t, t.return, G);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function ap(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        ap(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Zn(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) Jm(t, n.alternate, n), (n = n.sibling);
  }
  function gr(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Sa(4, n, n.return), gr(n);
          break;
        case 1:
          An(n, n.return);
          var r = n.stateNode;
          typeof r.componentWillUnmount == "function" && Im(n, n.return, r),
            gr(n);
          break;
        case 27:
          Si(n.stateNode);
        case 26:
        case 5:
          An(n, n.return), gr(n);
          break;
        case 22:
          n.memoizedState === null && gr(n);
          break;
        case 30:
          gr(n);
          break;
        default:
          gr(n);
      }
      t = t.sibling;
    }
  }
  function Jn(t, n, r) {
    for (r = r && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate,
        u = t,
        f = n,
        y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Jn(u, f, r), ci(4, f);
          break;
        case 1:
          if (
            (Jn(u, f, r),
            (i = f),
            (u = i.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (H) {
              Ut(i, i.return, H);
            }
          if (((i = f), (u = i.updateQueue), u !== null)) {
            var S = i.stateNode;
            try {
              var M = u.shared.hiddenCallbacks;
              if (M !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < M.length; u++)
                  jh(M[u], S);
            } catch (H) {
              Ut(i, i.return, H);
            }
          }
          r && y & 64 && Qm(f), fi(f, f.return);
          break;
        case 27:
          Km(f);
        case 26:
        case 5:
          Jn(u, f, r), r && i === null && y & 4 && Fm(f), fi(f, f.return);
          break;
        case 12:
          Jn(u, f, r);
          break;
        case 31:
          Jn(u, f, r), r && y & 4 && tp(u, f);
          break;
        case 13:
          Jn(u, f, r), r && y & 4 && ep(u, f);
          break;
        case 22:
          f.memoizedState === null && Jn(u, f, r), fi(f, f.return);
          break;
        case 30:
          break;
        default:
          Jn(u, f, r);
      }
      n = n.sibling;
    }
  }
  function Cc(t, n) {
    var r = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (r = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== r && (t != null && t.refCount++, r != null && Js(r));
  }
  function Ac(t, n) {
    (t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && Js(t));
  }
  function vn(t, n, r, i) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) rp(t, n, r, i), (n = n.sibling);
  }
  function rp(t, n, r, i) {
    var u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        vn(t, n, r, i), u & 2048 && ci(9, n);
        break;
      case 1:
        vn(t, n, r, i);
        break;
      case 3:
        vn(t, n, r, i),
          u & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && Js(t)));
        break;
      case 12:
        if (u & 2048) {
          vn(t, n, r, i), (t = n.stateNode);
          try {
            var f = n.memoizedProps,
              y = f.id,
              S = f.onPostCommit;
            typeof S == "function" &&
              S(
                y,
                n.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (M) {
            Ut(n, n.return, M);
          }
        } else vn(t, n, r, i);
        break;
      case 31:
        vn(t, n, r, i);
        break;
      case 13:
        vn(t, n, r, i);
        break;
      case 23:
        break;
      case 22:
        (f = n.stateNode),
          (y = n.alternate),
          n.memoizedState !== null
            ? f._visibility & 2
              ? vn(t, n, r, i)
              : di(t, n)
            : f._visibility & 2
            ? vn(t, n, r, i)
            : ((f._visibility |= 2),
              ls(t, n, r, i, (n.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Cc(y, n);
        break;
      case 24:
        vn(t, n, r, i), u & 2048 && Ac(n.alternate, n);
        break;
      default:
        vn(t, n, r, i);
    }
  }
  function ls(t, n, r, i, u) {
    for (
      u = u && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child;
      n !== null;

    ) {
      var f = t,
        y = n,
        S = r,
        M = i,
        H = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          ls(f, y, S, M, u), ci(8, y);
          break;
        case 23:
          break;
        case 22:
          var G = y.stateNode;
          y.memoizedState !== null
            ? G._visibility & 2
              ? ls(f, y, S, M, u)
              : di(f, y)
            : ((G._visibility |= 2), ls(f, y, S, M, u)),
            u && H & 2048 && Cc(y.alternate, y);
          break;
        case 24:
          ls(f, y, S, M, u), u && H & 2048 && Ac(y.alternate, y);
          break;
        default:
          ls(f, y, S, M, u);
      }
      n = n.sibling;
    }
  }
  function di(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var r = t,
          i = n,
          u = i.flags;
        switch (i.tag) {
          case 22:
            di(r, i), u & 2048 && Cc(i.alternate, i);
            break;
          case 24:
            di(r, i), u & 2048 && Ac(i.alternate, i);
            break;
          default:
            di(r, i);
        }
        n = n.sibling;
      }
  }
  var hi = 8192;
  function us(t, n, r) {
    if (t.subtreeFlags & hi)
      for (t = t.child; t !== null; ) sp(t, n, r), (t = t.sibling);
  }
  function sp(t, n, r) {
    switch (t.tag) {
      case 26:
        us(t, n, r),
          t.flags & hi &&
            t.memoizedState !== null &&
            N1(r, yn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        us(t, n, r);
        break;
      case 3:
      case 4:
        var i = yn;
        (yn = Ko(t.stateNode.containerInfo)), us(t, n, r), (yn = i);
        break;
      case 22:
        t.memoizedState === null &&
          ((i = t.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = hi), (hi = 16777216), us(t, n, r), (hi = i))
            : us(t, n, r));
        break;
      default:
        us(t, n, r);
    }
  }
  function ip(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do (n = t.sibling), (t.sibling = null), (t = n);
      while (t !== null);
    }
  }
  function mi(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          (ge = i), lp(i, t);
        }
      ip(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) op(t), (t = t.sibling);
  }
  function op(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        mi(t), t.flags & 2048 && Sa(9, t, t.return);
        break;
      case 3:
        mi(t);
        break;
      case 12:
        mi(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null &&
        n._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -3), Uo(t))
          : mi(t);
        break;
      default:
        mi(t);
    }
  }
  function Uo(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          (ge = i), lp(i, t);
        }
      ip(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          Sa(8, n, n.return), Uo(n);
          break;
        case 22:
          (r = n.stateNode),
            r._visibility & 2 && ((r._visibility &= -3), Uo(n));
          break;
        default:
          Uo(n);
      }
      t = t.sibling;
    }
  }
  function lp(t, n) {
    for (; ge !== null; ) {
      var r = ge;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Sa(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var i = r.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Js(r.memoizedState.cache);
      }
      if (((i = r.child), i !== null)) (i.return = r), (ge = i);
      else
        t: for (r = t; ge !== null; ) {
          i = ge;
          var u = i.sibling,
            f = i.return;
          if (($m(i), i === r)) {
            ge = null;
            break t;
          }
          if (u !== null) {
            (u.return = f), (ge = u);
            break t;
          }
          ge = f;
        }
    }
  }
  var IS = {
      getCacheForType: function (t) {
        var n = Ee(ne),
          r = n.data.get(t);
        return r === void 0 && ((r = t()), n.data.set(t, r)), r;
      },
      cacheSignal: function () {
        return Ee(ne).controller.signal;
      },
    },
    FS = typeof WeakMap == "function" ? WeakMap : Map,
    zt = 0,
    Pt = null,
    Rt = null,
    Ct = 0,
    Lt = 0,
    Je = null,
    xa = !1,
    cs = !1,
    Oc = !1,
    $n = 0,
    Jt = 0,
    wa = 0,
    yr = 0,
    Mc = 0,
    $e = 0,
    fs = 0,
    pi = null,
    qe = null,
    Nc = !1,
    Bo = 0,
    up = 0,
    ko = 1 / 0,
    Ho = null,
    Ea = null,
    le = 0,
    _a = null,
    ds = null,
    Wn = 0,
    Dc = 0,
    zc = null,
    cp = null,
    gi = 0,
    jc = null;
  function We() {
    return (zt & 2) !== 0 && Ct !== 0 ? Ct & -Ct : L.T !== null ? qc() : tu();
  }
  function fp() {
    if ($e === 0)
      if ((Ct & 536870912) === 0 || Ot) {
        var t = jr;
        (jr <<= 1), (jr & 3932160) === 0 && (jr = 262144), ($e = t);
      } else $e = 536870912;
    return (t = Ke.current), t !== null && (t.flags |= 32), $e;
  }
  function Pe(t, n, r) {
    ((t === Pt && (Lt === 2 || Lt === 9)) || t.cancelPendingCommit !== null) &&
      (hs(t, 0), Ra(t, Ct, $e, !1)),
      Xt(t, r),
      ((zt & 2) === 0 || t !== Pt) &&
        (t === Pt &&
          ((zt & 2) === 0 && (yr |= r), Jt === 4 && Ra(t, Ct, $e, !1)),
        On(t));
  }
  function dp(t, n, r) {
    if ((zt & 6) !== 0) throw Error(o(327));
    var i = (!r && (n & 127) === 0 && (n & t.expiredLanes) === 0) || Qt(t, n),
      u = i ? ZS(t, n) : Uc(t, n, !0),
      f = i;
    do {
      if (u === 0) {
        cs && !i && Ra(t, n, 0, !1);
        break;
      } else {
        if (((r = t.current.alternate), f && !XS(r))) {
          (u = Uc(t, n, !1)), (f = !1);
          continue;
        }
        if (u === 2) {
          if (((f = n), t.errorRecoveryDisabledLanes & f)) var y = 0;
          else
            (y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            n = y;
            t: {
              var S = t;
              u = pi;
              var M = S.current.memoizedState.isDehydrated;
              if ((M && (hs(S, y).flags |= 256), (y = Uc(S, y, !1)), y !== 2)) {
                if (Oc && !M) {
                  (S.errorRecoveryDisabledLanes |= f), (yr |= f), (u = 4);
                  break t;
                }
                (f = qe),
                  (qe = u),
                  f !== null && (qe === null ? (qe = f) : qe.push.apply(qe, f));
              }
              u = y;
            }
            if (((f = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          hs(t, 0), Ra(t, n, 0, !0);
          break;
        }
        t: {
          switch (((i = t), (f = u), f)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Ra(i, n, $e, !xa);
              break t;
            case 2:
              qe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((n & 62914560) === n && ((u = Bo + 300 - he()), 10 < u)) {
            if ((Ra(i, n, $e, !xa), gt(i, 0, !0) !== 0)) break t;
            (Wn = n),
              (i.timeoutHandle = Vp(
                hp.bind(
                  null,
                  i,
                  r,
                  qe,
                  Ho,
                  Nc,
                  n,
                  $e,
                  yr,
                  fs,
                  xa,
                  f,
                  "Throttled",
                  -0,
                  0
                ),
                u
              ));
            break t;
          }
          hp(i, r, qe, Ho, Nc, n, $e, yr, fs, xa, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    On(t);
  }
  function hp(t, n, r, i, u, f, y, S, M, H, G, X, P, V) {
    if (
      ((t.timeoutHandle = -1),
      (X = n.subtreeFlags),
      X & 8192 || (X & 16785408) === 16785408)
    ) {
      (X = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: kn,
      }),
        sp(n, f, X);
      var ot =
        (f & 62914560) === f ? Bo - he() : (f & 4194048) === f ? up - he() : 0;
      if (((ot = D1(X, ot)), ot !== null)) {
        (Wn = f),
          (t.cancelPendingCommit = ot(
            xp.bind(null, t, n, f, r, i, u, y, S, M, G, X, null, P, V)
          )),
          Ra(t, f, y, !H);
        return;
      }
    }
    xp(t, n, f, r, i, u, y, S, M);
  }
  function XS(t) {
    for (var n = t; ; ) {
      var r = n.tag;
      if (
        (r === 0 || r === 11 || r === 15) &&
        n.flags & 16384 &&
        ((r = n.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var i = 0; i < r.length; i++) {
          var u = r[i],
            f = u.getSnapshot;
          u = u.value;
          try {
            if (!Fe(f(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((r = n.child), n.subtreeFlags & 16384 && r !== null))
        (r.return = n), (n = r);
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Ra(t, n, r, i) {
    (n &= ~Mc),
      (n &= ~yr),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      i && (t.warmLanes |= n),
      (i = t.expirationTimes);
    for (var u = n; 0 < u; ) {
      var f = 31 - Te(u),
        y = 1 << f;
      (i[f] = -1), (u &= ~y);
    }
    r !== 0 && tr(t, r, n);
  }
  function qo() {
    return (zt & 6) === 0 ? (yi(0), !1) : !0;
  }
  function Lc() {
    if (Rt !== null) {
      if (Lt === 0) var t = Rt.return;
      else (t = Rt), (Yn = lr = null), Ju(t), (as = null), (Ws = 0), (t = Rt);
      for (; t !== null; ) Gm(t.alternate, t), (t = t.return);
      Rt = null;
    }
  }
  function hs(t, n) {
    var r = t.timeoutHandle;
    r !== -1 && ((t.timeoutHandle = -1), m1(r)),
      (r = t.cancelPendingCommit),
      r !== null && ((t.cancelPendingCommit = null), r()),
      (Wn = 0),
      Lc(),
      (Pt = t),
      (Rt = r = qn(t.current, null)),
      (Ct = n),
      (Lt = 0),
      (Je = null),
      (xa = !1),
      (cs = Qt(t, n)),
      (Oc = !1),
      (fs = $e = Mc = yr = wa = Jt = 0),
      (qe = pi = null),
      (Nc = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= n; 0 < i; ) {
        var u = 31 - Te(i),
          f = 1 << u;
        (n |= t[u]), (i &= ~f);
      }
    return ($n = n), io(), r;
  }
  function mp(t, n) {
    (xt = null),
      (L.H = oi),
      n === ns || n === po
        ? ((n = Mh()), (Lt = 3))
        : n === Hu
        ? ((n = Mh()), (Lt = 4))
        : (Lt =
            n === hc
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (Je = n),
      Rt === null && ((Jt = 1), Oo(t, sn(n, t.current)));
  }
  function pp() {
    var t = Ke.current;
    return t === null
      ? !0
      : (Ct & 4194048) === Ct
      ? cn === null
      : (Ct & 62914560) === Ct || (Ct & 536870912) !== 0
      ? t === cn
      : !1;
  }
  function gp() {
    var t = L.H;
    return (L.H = oi), t === null ? oi : t;
  }
  function yp() {
    var t = L.A;
    return (L.A = IS), t;
  }
  function Po() {
    (Jt = 4),
      xa || ((Ct & 4194048) !== Ct && Ke.current !== null) || (cs = !0),
      ((wa & 134217727) === 0 && (yr & 134217727) === 0) ||
        Pt === null ||
        Ra(Pt, Ct, $e, !1);
  }
  function Uc(t, n, r) {
    var i = zt;
    zt |= 2;
    var u = gp(),
      f = yp();
    (Pt !== t || Ct !== n) && ((Ho = null), hs(t, n)), (n = !1);
    var y = Jt;
    t: do
      try {
        if (Lt !== 0 && Rt !== null) {
          var S = Rt,
            M = Je;
          switch (Lt) {
            case 8:
              Lc(), (y = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ke.current === null && (n = !0);
              var H = Lt;
              if (((Lt = 0), (Je = null), ms(t, S, M, H), r && cs)) {
                y = 0;
                break t;
              }
              break;
            default:
              (H = Lt), (Lt = 0), (Je = null), ms(t, S, M, H);
          }
        }
        KS(), (y = Jt);
        break;
      } catch (G) {
        mp(t, G);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (Yn = lr = null),
      (zt = i),
      (L.H = u),
      (L.A = f),
      Rt === null && ((Pt = null), (Ct = 0), io()),
      y
    );
  }
  function KS() {
    for (; Rt !== null; ) vp(Rt);
  }
  function ZS(t, n) {
    var r = zt;
    zt |= 2;
    var i = gp(),
      u = yp();
    Pt !== t || Ct !== n
      ? ((Ho = null), (ko = he() + 500), hs(t, n))
      : (cs = Qt(t, n));
    t: do
      try {
        if (Lt !== 0 && Rt !== null) {
          n = Rt;
          var f = Je;
          e: switch (Lt) {
            case 1:
              (Lt = 0), (Je = null), ms(t, n, f, 1);
              break;
            case 2:
            case 9:
              if (Ah(f)) {
                (Lt = 0), (Je = null), bp(n);
                break;
              }
              (n = function () {
                (Lt !== 2 && Lt !== 9) || Pt !== t || (Lt = 7), On(t);
              }),
                f.then(n, n);
              break t;
            case 3:
              Lt = 7;
              break t;
            case 4:
              Lt = 5;
              break t;
            case 7:
              Ah(f)
                ? ((Lt = 0), (Je = null), bp(n))
                : ((Lt = 0), (Je = null), ms(t, n, f, 7));
              break;
            case 5:
              var y = null;
              switch (Rt.tag) {
                case 26:
                  y = Rt.memoizedState;
                case 5:
                case 27:
                  var S = Rt;
                  if (y ? rg(y) : S.stateNode.complete) {
                    (Lt = 0), (Je = null);
                    var M = S.sibling;
                    if (M !== null) Rt = M;
                    else {
                      var H = S.return;
                      H !== null ? ((Rt = H), Yo(H)) : (Rt = null);
                    }
                    break e;
                  }
              }
              (Lt = 0), (Je = null), ms(t, n, f, 5);
              break;
            case 6:
              (Lt = 0), (Je = null), ms(t, n, f, 6);
              break;
            case 8:
              Lc(), (Jt = 6);
              break t;
            default:
              throw Error(o(462));
          }
        }
        JS();
        break;
      } catch (G) {
        mp(t, G);
      }
    while (!0);
    return (
      (Yn = lr = null),
      (L.H = i),
      (L.A = u),
      (zt = r),
      Rt !== null ? 0 : ((Pt = null), (Ct = 0), io(), Jt)
    );
  }
  function JS() {
    for (; Rt !== null && !de(); ) vp(Rt);
  }
  function vp(t) {
    var n = Ym(t.alternate, t, $n);
    (t.memoizedProps = t.pendingProps), n === null ? Yo(t) : (Rt = n);
  }
  function bp(t) {
    var n = t,
      r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Um(r, n, n.pendingProps, n.type, void 0, Ct);
        break;
      case 11:
        n = Um(r, n, n.pendingProps, n.type.render, n.ref, Ct);
        break;
      case 5:
        Ju(n);
      default:
        Gm(r, n), (n = Rt = yh(n, $n)), (n = Ym(r, n, $n));
    }
    (t.memoizedProps = t.pendingProps), n === null ? Yo(t) : (Rt = n);
  }
  function ms(t, n, r, i) {
    (Yn = lr = null), Ju(n), (as = null), (Ws = 0);
    var u = n.return;
    try {
      if (HS(t, u, n, r, Ct)) {
        (Jt = 1), Oo(t, sn(r, t.current)), (Rt = null);
        return;
      }
    } catch (f) {
      if (u !== null) throw ((Rt = u), f);
      (Jt = 1), Oo(t, sn(r, t.current)), (Rt = null);
      return;
    }
    n.flags & 32768
      ? (Ot || i === 1
          ? (t = !0)
          : cs || (Ct & 536870912) !== 0
          ? (t = !1)
          : ((xa = t = !0),
            (i === 2 || i === 9 || i === 3 || i === 6) &&
              ((i = Ke.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        Sp(n, t))
      : Yo(n);
  }
  function Yo(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        Sp(n, xa);
        return;
      }
      t = n.return;
      var r = YS(n.alternate, n, $n);
      if (r !== null) {
        Rt = r;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Rt = n;
        return;
      }
      Rt = n = t;
    } while (n !== null);
    Jt === 0 && (Jt = 5);
  }
  function Sp(t, n) {
    do {
      var r = VS(t.alternate, t);
      if (r !== null) {
        (r.flags &= 32767), (Rt = r);
        return;
      }
      if (
        ((r = t.return),
        r !== null &&
          ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        Rt = t;
        return;
      }
      Rt = t = r;
    } while (t !== null);
    (Jt = 6), (Rt = null);
  }
  function xp(t, n, r, i, u, f, y, S, M) {
    t.cancelPendingCommit = null;
    do Vo();
    while (le !== 0);
    if ((zt & 6) !== 0) throw Error(o(327));
    if (n !== null) {
      if (n === t.current) throw Error(o(177));
      if (
        ((f = n.lanes | n.childLanes),
        (f |= _u),
        De(t, r, f, y, S, M),
        t === Pt && ((Rt = Pt = null), (Ct = 0)),
        (ds = n),
        (_a = t),
        (Wn = r),
        (Dc = f),
        (zc = u),
        (cp = i),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            e1(Ln, function () {
              return Tp(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || i)
      ) {
        (i = L.T), (L.T = null), (u = Z.p), (Z.p = 2), (y = zt), (zt |= 4);
        try {
          GS(t, n, r);
        } finally {
          (zt = y), (Z.p = u), (L.T = i);
        }
      }
      (le = 1), wp(), Ep(), _p();
    }
  }
  function wp() {
    if (le === 1) {
      le = 0;
      var t = _a,
        n = ds,
        r = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || r) {
        (r = L.T), (L.T = null);
        var i = Z.p;
        Z.p = 2;
        var u = zt;
        zt |= 4;
        try {
          np(n, t);
          var f = Xc,
            y = lh(t.containerInfo),
            S = f.focusedElem,
            M = f.selectionRange;
          if (
            y !== S &&
            S &&
            S.ownerDocument &&
            oh(S.ownerDocument.documentElement, S)
          ) {
            if (M !== null && bu(S)) {
              var H = M.start,
                G = M.end;
              if ((G === void 0 && (G = H), "selectionStart" in S))
                (S.selectionStart = H),
                  (S.selectionEnd = Math.min(G, S.value.length));
              else {
                var X = S.ownerDocument || document,
                  P = (X && X.defaultView) || window;
                if (P.getSelection) {
                  var V = P.getSelection(),
                    ot = S.textContent.length,
                    ht = Math.min(M.start, ot),
                    qt = M.end === void 0 ? ht : Math.min(M.end, ot);
                  !V.extend && ht > qt && ((y = qt), (qt = ht), (ht = y));
                  var z = ih(S, ht),
                    D = ih(S, qt);
                  if (
                    z &&
                    D &&
                    (V.rangeCount !== 1 ||
                      V.anchorNode !== z.node ||
                      V.anchorOffset !== z.offset ||
                      V.focusNode !== D.node ||
                      V.focusOffset !== D.offset)
                  ) {
                    var B = X.createRange();
                    B.setStart(z.node, z.offset),
                      V.removeAllRanges(),
                      ht > qt
                        ? (V.addRange(B), V.extend(D.node, D.offset))
                        : (B.setEnd(D.node, D.offset), V.addRange(B));
                  }
                }
              }
            }
            for (X = [], V = S; (V = V.parentNode); )
              V.nodeType === 1 &&
                X.push({ element: V, left: V.scrollLeft, top: V.scrollTop });
            for (
              typeof S.focus == "function" && S.focus(), S = 0;
              S < X.length;
              S++
            ) {
              var I = X[S];
              (I.element.scrollLeft = I.left), (I.element.scrollTop = I.top);
            }
          }
          (el = !!Fc), (Xc = Fc = null);
        } finally {
          (zt = u), (Z.p = i), (L.T = r);
        }
      }
      (t.current = n), (le = 2);
    }
  }
  function Ep() {
    if (le === 2) {
      le = 0;
      var t = _a,
        n = ds,
        r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        (r = L.T), (L.T = null);
        var i = Z.p;
        Z.p = 2;
        var u = zt;
        zt |= 4;
        try {
          Jm(t, n.alternate, n);
        } finally {
          (zt = u), (Z.p = i), (L.T = r);
        }
      }
      le = 3;
    }
  }
  function _p() {
    if (le === 4 || le === 3) {
      (le = 0), En();
      var t = _a,
        n = ds,
        r = Wn,
        i = cp;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (le = 5)
        : ((le = 0), (ds = _a = null), Rp(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (Ea = null),
        pn(r),
        (n = n.stateNode),
        Oe && typeof Oe.onCommitFiberRoot == "function")
      )
        try {
          Oe.onCommitFiberRoot($a, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        (n = L.T), (u = Z.p), (Z.p = 2), (L.T = null);
        try {
          for (var f = t.onRecoverableError, y = 0; y < i.length; y++) {
            var S = i[y];
            f(S.value, { componentStack: S.stack });
          }
        } finally {
          (L.T = n), (Z.p = u);
        }
      }
      (Wn & 3) !== 0 && Vo(),
        On(t),
        (u = t.pendingLanes),
        (r & 261930) !== 0 && (u & 42) !== 0
          ? t === jc
            ? gi++
            : ((gi = 0), (jc = t))
          : (gi = 0),
        yi(0);
    }
  }
  function Rp(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), Js(n)));
  }
  function Vo() {
    return wp(), Ep(), _p(), Tp();
  }
  function Tp() {
    if (le !== 5) return !1;
    var t = _a,
      n = Dc;
    Dc = 0;
    var r = pn(Wn),
      i = L.T,
      u = Z.p;
    try {
      (Z.p = 32 > r ? 32 : r), (L.T = null), (r = zc), (zc = null);
      var f = _a,
        y = Wn;
      if (((le = 0), (ds = _a = null), (Wn = 0), (zt & 6) !== 0))
        throw Error(o(331));
      var S = zt;
      if (
        ((zt |= 4),
        op(f.current),
        rp(f, f.current, y, r),
        (zt = S),
        yi(0, !1),
        Oe && typeof Oe.onPostCommitFiberRoot == "function")
      )
        try {
          Oe.onPostCommitFiberRoot($a, f);
        } catch {}
      return !0;
    } finally {
      (Z.p = u), (L.T = i), Rp(t, n);
    }
  }
  function Cp(t, n, r) {
    (n = sn(r, n)),
      (n = dc(t.stateNode, n, 2)),
      (t = ya(t, n, 2)),
      t !== null && (Xt(t, 2), On(t));
  }
  function Ut(t, n, r) {
    if (t.tag === 3) Cp(t, t, r);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Cp(n, t, r);
          break;
        } else if (n.tag === 1) {
          var i = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Ea === null || !Ea.has(i)))
          ) {
            (t = sn(r, t)),
              (r = Am(2)),
              (i = ya(n, r, 2)),
              i !== null && (Om(r, i, n, t), Xt(i, 2), On(i));
            break;
          }
        }
        n = n.return;
      }
  }
  function Bc(t, n, r) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new FS();
      var u = new Set();
      i.set(n, u);
    } else (u = i.get(n)), u === void 0 && ((u = new Set()), i.set(n, u));
    u.has(r) ||
      ((Oc = !0), u.add(r), (t = $S.bind(null, t, n, r)), n.then(t, t));
  }
  function $S(t, n, r) {
    var i = t.pingCache;
    i !== null && i.delete(n),
      (t.pingedLanes |= t.suspendedLanes & r),
      (t.warmLanes &= ~r),
      Pt === t &&
        (Ct & r) === r &&
        (Jt === 4 || (Jt === 3 && (Ct & 62914560) === Ct && 300 > he() - Bo)
          ? (zt & 2) === 0 && hs(t, 0)
          : (Mc |= r),
        fs === Ct && (fs = 0)),
      On(t);
  }
  function Ap(t, n) {
    n === 0 && (n = Ce()), (t = sr(t, n)), t !== null && (Xt(t, n), On(t));
  }
  function WS(t) {
    var n = t.memoizedState,
      r = 0;
    n !== null && (r = n.retryLane), Ap(t, r);
  }
  function t1(t, n) {
    var r = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode,
          u = t.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    i !== null && i.delete(n), Ap(t, r);
  }
  function e1(t, n) {
    return Ie(t, n);
  }
  var Go = null,
    ps = null,
    kc = !1,
    Qo = !1,
    Hc = !1,
    Ta = 0;
  function On(t) {
    t !== ps &&
      t.next === null &&
      (ps === null ? (Go = ps = t) : (ps = ps.next = t)),
      (Qo = !0),
      kc || ((kc = !0), a1());
  }
  function yi(t, n) {
    if (!Hc && Qo) {
      Hc = !0;
      do
        for (var r = !1, i = Go; i !== null; ) {
          if (t !== 0) {
            var u = i.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var y = i.suspendedLanes,
                S = i.pingedLanes;
              (f = (1 << (31 - Te(42 | t) + 1)) - 1),
                (f &= u & ~(y & ~S)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((r = !0), Dp(i, f));
          } else
            (f = Ct),
              (f = gt(
                i,
                i === Pt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (f & 3) === 0 || Qt(i, f) || ((r = !0), Dp(i, f));
          i = i.next;
        }
      while (r);
      Hc = !1;
    }
  }
  function n1() {
    Op();
  }
  function Op() {
    Qo = kc = !1;
    var t = 0;
    Ta !== 0 && h1() && (t = Ta);
    for (var n = he(), r = null, i = Go; i !== null; ) {
      var u = i.next,
        f = Mp(i, n);
      f === 0
        ? ((i.next = null),
          r === null ? (Go = u) : (r.next = u),
          u === null && (ps = r))
        : ((r = i), (t !== 0 || (f & 3) !== 0) && (Qo = !0)),
        (i = u);
    }
    (le !== 0 && le !== 5) || yi(t), Ta !== 0 && (Ta = 0);
  }
  function Mp(t, n) {
    for (
      var r = t.suspendedLanes,
        i = t.pingedLanes,
        u = t.expirationTimes,
        f = t.pendingLanes & -62914561;
      0 < f;

    ) {
      var y = 31 - Te(f),
        S = 1 << y,
        M = u[y];
      M === -1
        ? ((S & r) === 0 || (S & i) !== 0) && (u[y] = me(S, n))
        : M <= n && (t.expiredLanes |= S),
        (f &= ~S);
    }
    if (
      ((n = Pt),
      (r = Ct),
      (r = gt(
        t,
        t === n ? r : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (i = t.callbackNode),
      r === 0 ||
        (t === n && (Lt === 2 || Lt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && Ja(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((r & 3) === 0 || Qt(t, r)) {
      if (((n = r & -r), n === t.callbackPriority)) return n;
      switch ((i !== null && Ja(i), pn(r))) {
        case 2:
        case 8:
          r = en;
          break;
        case 32:
          r = Ln;
          break;
        case 268435456:
          r = Un;
          break;
        default:
          r = Ln;
      }
      return (
        (i = Np.bind(null, t)),
        (r = Ie(r, i)),
        (t.callbackPriority = n),
        (t.callbackNode = r),
        n
      );
    }
    return (
      i !== null && i !== null && Ja(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Np(t, n) {
    if (le !== 0 && le !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var r = t.callbackNode;
    if (Vo() && t.callbackNode !== r) return null;
    var i = Ct;
    return (
      (i = gt(
        t,
        t === Pt ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (dp(t, i, n),
          Mp(t, he()),
          t.callbackNode != null && t.callbackNode === r
            ? Np.bind(null, t)
            : null)
    );
  }
  function Dp(t, n) {
    if (Vo()) return null;
    dp(t, n, !0);
  }
  function a1() {
    p1(function () {
      (zt & 6) !== 0 ? Ie(Kt, n1) : Op();
    });
  }
  function qc() {
    if (Ta === 0) {
      var t = ts;
      t === 0 && ((t = zr), (zr <<= 1), (zr & 261888) === 0 && (zr = 256)),
        (Ta = t);
    }
    return Ta;
  }
  function zp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : $i("" + t);
  }
  function jp(t, n) {
    var r = n.ownerDocument.createElement("input");
    return (
      (r.name = n.name),
      (r.value = n.value),
      t.id && r.setAttribute("form", t.id),
      n.parentNode.insertBefore(r, n),
      (t = new FormData(t)),
      r.parentNode.removeChild(r),
      t
    );
  }
  function r1(t, n, r, i, u) {
    if (n === "submit" && r && r.stateNode === u) {
      var f = zp((u[Le] || null).action),
        y = i.submitter;
      y &&
        ((n = (n = y[Le] || null)
          ? zp(n.formAction)
          : y.getAttribute("formAction")),
        n !== null && ((f = n), (y = null)));
      var S = new no("action", "action", null, i, u);
      t.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Ta !== 0) {
                  var M = y ? jp(u, y) : new FormData(u);
                  ic(
                    r,
                    { pending: !0, data: M, method: u.method, action: f },
                    null,
                    M
                  );
                }
              } else
                typeof f == "function" &&
                  (S.preventDefault(),
                  (M = y ? jp(u, y) : new FormData(u)),
                  ic(
                    r,
                    { pending: !0, data: M, method: u.method, action: f },
                    f,
                    M
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Pc = 0; Pc < Eu.length; Pc++) {
    var Yc = Eu[Pc],
      s1 = Yc.toLowerCase(),
      i1 = Yc[0].toUpperCase() + Yc.slice(1);
    gn(s1, "on" + i1);
  }
  gn(fh, "onAnimationEnd"),
    gn(dh, "onAnimationIteration"),
    gn(hh, "onAnimationStart"),
    gn("dblclick", "onDoubleClick"),
    gn("focusin", "onFocus"),
    gn("focusout", "onBlur"),
    gn(wS, "onTransitionRun"),
    gn(ES, "onTransitionStart"),
    gn(_S, "onTransitionCancel"),
    gn(mh, "onTransitionEnd"),
    qr("onMouseEnter", ["mouseout", "mouseover"]),
    qr("onMouseLeave", ["mouseout", "mouseover"]),
    qr("onPointerEnter", ["pointerout", "pointerover"]),
    qr("onPointerLeave", ["pointerout", "pointerover"]),
    er(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    er(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    er(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    er(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    er(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var vi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    o1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(vi)
    );
  function Lp(t, n) {
    n = (n & 4) !== 0;
    for (var r = 0; r < t.length; r++) {
      var i = t[r],
        u = i.event;
      i = i.listeners;
      t: {
        var f = void 0;
        if (n)
          for (var y = i.length - 1; 0 <= y; y--) {
            var S = i[y],
              M = S.instance,
              H = S.currentTarget;
            if (((S = S.listener), M !== f && u.isPropagationStopped()))
              break t;
            (f = S), (u.currentTarget = H);
            try {
              f(u);
            } catch (G) {
              so(G);
            }
            (u.currentTarget = null), (f = M);
          }
        else
          for (y = 0; y < i.length; y++) {
            if (
              ((S = i[y]),
              (M = S.instance),
              (H = S.currentTarget),
              (S = S.listener),
              M !== f && u.isPropagationStopped())
            )
              break t;
            (f = S), (u.currentTarget = H);
            try {
              f(u);
            } catch (G) {
              so(G);
            }
            (u.currentTarget = null), (f = M);
          }
      }
    }
  }
  function Tt(t, n) {
    var r = n[eu];
    r === void 0 && (r = n[eu] = new Set());
    var i = t + "__bubble";
    r.has(i) || (Up(n, t, 2, !1), r.add(i));
  }
  function Vc(t, n, r) {
    var i = 0;
    n && (i |= 4), Up(r, t, i, n);
  }
  var Io = "_reactListening" + Math.random().toString(36).slice(2);
  function Gc(t) {
    if (!t[Io]) {
      (t[Io] = !0),
        Od.forEach(function (r) {
          r !== "selectionchange" && (o1.has(r) || Vc(r, !1, t), Vc(r, !0, t));
        });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[Io] || ((n[Io] = !0), Vc("selectionchange", !1, n));
    }
  }
  function Up(t, n, r, i) {
    switch (fg(n)) {
      case 2:
        var u = L1;
        break;
      case 8:
        u = U1;
        break;
      default:
        u = sf;
    }
    (r = u.bind(null, n, r, t)),
      (u = void 0),
      !cu ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (u = !0),
      i
        ? u !== void 0
          ? t.addEventListener(n, r, { capture: !0, passive: u })
          : t.addEventListener(n, r, !0)
        : u !== void 0
        ? t.addEventListener(n, r, { passive: u })
        : t.addEventListener(n, r, !1);
  }
  function Qc(t, n, r, i, u) {
    var f = i;
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var y = i.tag;
        if (y === 3 || y === 4) {
          var S = i.stateNode.containerInfo;
          if (S === u) break;
          if (y === 4)
            for (y = i.return; y !== null; ) {
              var M = y.tag;
              if ((M === 3 || M === 4) && y.stateNode.containerInfo === u)
                return;
              y = y.return;
            }
          for (; S !== null; ) {
            if (((y = Br(S)), y === null)) return;
            if (((M = y.tag), M === 5 || M === 6 || M === 26 || M === 27)) {
              i = f = y;
              continue t;
            }
            S = S.parentNode;
          }
        }
        i = i.return;
      }
    Pd(function () {
      var H = f,
        G = lu(r),
        X = [];
      t: {
        var P = ph.get(t);
        if (P !== void 0) {
          var V = no,
            ot = t;
          switch (t) {
            case "keypress":
              if (to(r) === 0) break t;
            case "keydown":
            case "keyup":
              V = tS;
              break;
            case "focusin":
              (ot = "focus"), (V = mu);
              break;
            case "focusout":
              (ot = "blur"), (V = mu);
              break;
            case "beforeblur":
            case "afterblur":
              V = mu;
              break;
            case "click":
              if (r.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Gd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Yb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = aS;
              break;
            case fh:
            case dh:
            case hh:
              V = Qb;
              break;
            case mh:
              V = sS;
              break;
            case "scroll":
            case "scrollend":
              V = qb;
              break;
            case "wheel":
              V = oS;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = Fb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Id;
              break;
            case "toggle":
            case "beforetoggle":
              V = uS;
          }
          var ht = (n & 4) !== 0,
            qt = !ht && (t === "scroll" || t === "scrollend"),
            z = ht ? (P !== null ? P + "Capture" : null) : P;
          ht = [];
          for (var D = H, B; D !== null; ) {
            var I = D;
            if (
              ((B = I.stateNode),
              (I = I.tag),
              (I !== 5 && I !== 26 && I !== 27) ||
                B === null ||
                z === null ||
                ((I = qs(D, z)), I != null && ht.push(bi(D, I, B))),
              qt)
            )
              break;
            D = D.return;
          }
          0 < ht.length &&
            ((P = new V(P, ot, null, r, G)),
            X.push({ event: P, listeners: ht }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((P = t === "mouseover" || t === "pointerover"),
            (V = t === "mouseout" || t === "pointerout"),
            P &&
              r !== ou &&
              (ot = r.relatedTarget || r.fromElement) &&
              (Br(ot) || ot[Ur]))
          )
            break t;
          if (
            (V || P) &&
            ((P =
              G.window === G
                ? G
                : (P = G.ownerDocument)
                ? P.defaultView || P.parentWindow
                : window),
            V
              ? ((ot = r.relatedTarget || r.toElement),
                (V = H),
                (ot = ot ? Br(ot) : null),
                ot !== null &&
                  ((qt = c(ot)),
                  (ht = ot.tag),
                  ot !== qt || (ht !== 5 && ht !== 27 && ht !== 6)) &&
                  (ot = null))
              : ((V = null), (ot = H)),
            V !== ot)
          ) {
            if (
              ((ht = Gd),
              (I = "onMouseLeave"),
              (z = "onMouseEnter"),
              (D = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((ht = Id),
                (I = "onPointerLeave"),
                (z = "onPointerEnter"),
                (D = "pointer")),
              (qt = V == null ? P : Hs(V)),
              (B = ot == null ? P : Hs(ot)),
              (P = new ht(I, D + "leave", V, r, G)),
              (P.target = qt),
              (P.relatedTarget = B),
              (I = null),
              Br(G) === H &&
                ((ht = new ht(z, D + "enter", ot, r, G)),
                (ht.target = B),
                (ht.relatedTarget = qt),
                (I = ht)),
              (qt = I),
              V && ot)
            )
              e: {
                for (ht = l1, z = V, D = ot, B = 0, I = z; I; I = ht(I)) B++;
                I = 0;
                for (var ft = D; ft; ft = ht(ft)) I++;
                for (; 0 < B - I; ) (z = ht(z)), B--;
                for (; 0 < I - B; ) (D = ht(D)), I--;
                for (; B--; ) {
                  if (z === D || (D !== null && z === D.alternate)) {
                    ht = z;
                    break e;
                  }
                  (z = ht(z)), (D = ht(D));
                }
                ht = null;
              }
            else ht = null;
            V !== null && Bp(X, P, V, ht, !1),
              ot !== null && qt !== null && Bp(X, qt, ot, ht, !0);
          }
        }
        t: {
          if (
            ((P = H ? Hs(H) : window),
            (V = P.nodeName && P.nodeName.toLowerCase()),
            V === "select" || (V === "input" && P.type === "file"))
          )
            var Mt = th;
          else if ($d(P))
            if (eh) Mt = bS;
            else {
              Mt = yS;
              var ct = gS;
            }
          else
            (V = P.nodeName),
              !V ||
              V.toLowerCase() !== "input" ||
              (P.type !== "checkbox" && P.type !== "radio")
                ? H && iu(H.elementType) && (Mt = th)
                : (Mt = vS);
          if (Mt && (Mt = Mt(t, H))) {
            Wd(X, Mt, r, G);
            break t;
          }
          ct && ct(t, P, H),
            t === "focusout" &&
              H &&
              P.type === "number" &&
              H.memoizedProps.value != null &&
              su(P, "number", P.value);
        }
        switch (((ct = H ? Hs(H) : window), t)) {
          case "focusin":
            ($d(ct) || ct.contentEditable === "true") &&
              ((Ir = ct), (Su = H), (Xs = null));
            break;
          case "focusout":
            Xs = Su = Ir = null;
            break;
          case "mousedown":
            xu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (xu = !1), uh(X, r, G);
            break;
          case "selectionchange":
            if (xS) break;
          case "keydown":
          case "keyup":
            uh(X, r, G);
        }
        var wt;
        if (gu)
          t: {
            switch (t) {
              case "compositionstart":
                var At = "onCompositionStart";
                break t;
              case "compositionend":
                At = "onCompositionEnd";
                break t;
              case "compositionupdate":
                At = "onCompositionUpdate";
                break t;
            }
            At = void 0;
          }
        else
          Qr
            ? Zd(t, r) && (At = "onCompositionEnd")
            : t === "keydown" &&
              r.keyCode === 229 &&
              (At = "onCompositionStart");
        At &&
          (Fd &&
            r.locale !== "ko" &&
            (Qr || At !== "onCompositionStart"
              ? At === "onCompositionEnd" && Qr && (wt = Yd())
              : ((ca = G),
                (fu = "value" in ca ? ca.value : ca.textContent),
                (Qr = !0))),
          (ct = Fo(H, At)),
          0 < ct.length &&
            ((At = new Qd(At, t, null, r, G)),
            X.push({ event: At, listeners: ct }),
            wt
              ? (At.data = wt)
              : ((wt = Jd(r)), wt !== null && (At.data = wt)))),
          (wt = fS ? dS(t, r) : hS(t, r)) &&
            ((At = Fo(H, "onBeforeInput")),
            0 < At.length &&
              ((ct = new Qd("onBeforeInput", "beforeinput", null, r, G)),
              X.push({ event: ct, listeners: At }),
              (ct.data = wt))),
          r1(X, t, H, r, G);
      }
      Lp(X, n);
    });
  }
  function bi(t, n, r) {
    return { instance: t, listener: n, currentTarget: r };
  }
  function Fo(t, n) {
    for (var r = n + "Capture", i = []; t !== null; ) {
      var u = t,
        f = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          f === null ||
          ((u = qs(t, r)),
          u != null && i.unshift(bi(t, u, f)),
          (u = qs(t, n)),
          u != null && i.push(bi(t, u, f))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function l1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Bp(t, n, r, i, u) {
    for (var f = n._reactName, y = []; r !== null && r !== i; ) {
      var S = r,
        M = S.alternate,
        H = S.stateNode;
      if (((S = S.tag), M !== null && M === i)) break;
      (S !== 5 && S !== 26 && S !== 27) ||
        H === null ||
        ((M = H),
        u
          ? ((H = qs(r, f)), H != null && y.unshift(bi(r, H, M)))
          : u || ((H = qs(r, f)), H != null && y.push(bi(r, H, M)))),
        (r = r.return);
    }
    y.length !== 0 && t.push({ event: n, listeners: y });
  }
  var u1 = /\r\n?/g,
    c1 = /\u0000|\uFFFD/g;
  function kp(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        u1,
        `
`
      )
      .replace(c1, "");
  }
  function Hp(t, n) {
    return (n = kp(n)), kp(t) === n;
  }
  function Ht(t, n, r, i, u, f) {
    switch (r) {
      case "children":
        typeof i == "string"
          ? n === "body" || (n === "textarea" && i === "") || Yr(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            n !== "body" &&
            Yr(t, "" + i);
        break;
      case "className":
        Zi(t, "class", i);
        break;
      case "tabIndex":
        Zi(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zi(t, r, i);
        break;
      case "style":
        Hd(t, i, f);
        break;
      case "data":
        if (n !== "object") {
          Zi(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (n !== "a" || r !== "href")) {
          t.removeAttribute(r);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(r);
          break;
        }
        (i = $i("" + i)), t.setAttribute(r, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" &&
            (r === "formAction"
              ? (n !== "input" && Ht(t, n, "name", u.name, u, null),
                Ht(t, n, "formEncType", u.formEncType, u, null),
                Ht(t, n, "formMethod", u.formMethod, u, null),
                Ht(t, n, "formTarget", u.formTarget, u, null))
              : (Ht(t, n, "encType", u.encType, u, null),
                Ht(t, n, "method", u.method, u, null),
                Ht(t, n, "target", u.target, u, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(r);
          break;
        }
        (i = $i("" + i)), t.setAttribute(r, i);
        break;
      case "onClick":
        i != null && (t.onclick = kn);
        break;
      case "onScroll":
        i != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && Tt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((r = i.__html), r != null)) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = r;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (r = $i("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(r, "" + i)
          : t.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(r, "")
          : t.removeAttribute(r);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(r, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? t.setAttribute(r, i)
          : t.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(r, i)
          : t.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(r)
          : t.setAttribute(r, i);
        break;
      case "popover":
        Tt("beforetoggle", t), Tt("toggle", t), Ki(t, "popover", i);
        break;
      case "xlinkActuate":
        Bn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Bn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Bn(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Bn(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Bn(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Bn(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Bn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Bn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Bn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Ki(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) ||
          (r[0] !== "o" && r[0] !== "O") ||
          (r[1] !== "n" && r[1] !== "N")) &&
          ((r = kb.get(r) || r), Ki(t, r, i));
    }
  }
  function Ic(t, n, r, i, u, f) {
    switch (r) {
      case "style":
        Hd(t, i, f);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((r = i.__html), r != null)) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Yr(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Yr(t, "" + i);
        break;
      case "onScroll":
        i != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && Tt("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = kn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Md.hasOwnProperty(r))
          t: {
            if (
              r[0] === "o" &&
              r[1] === "n" &&
              ((u = r.endsWith("Capture")),
              (n = r.slice(2, u ? r.length - 7 : void 0)),
              (f = t[Le] || null),
              (f = f != null ? f[r] : null),
              typeof f == "function" && t.removeEventListener(n, f, u),
              typeof i == "function")
            ) {
              typeof f != "function" &&
                f !== null &&
                (r in t
                  ? (t[r] = null)
                  : t.hasAttribute(r) && t.removeAttribute(r)),
                t.addEventListener(n, i, u);
              break t;
            }
            r in t
              ? (t[r] = i)
              : i === !0
              ? t.setAttribute(r, "")
              : Ki(t, r, i);
          }
    }
  }
  function Re(t, n, r) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Tt("error", t), Tt("load", t);
        var i = !1,
          u = !1,
          f;
        for (f in r)
          if (r.hasOwnProperty(f)) {
            var y = r[f];
            if (y != null)
              switch (f) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, n));
                default:
                  Ht(t, n, f, y, r, null);
              }
          }
        u && Ht(t, n, "srcSet", r.srcSet, r, null),
          i && Ht(t, n, "src", r.src, r, null);
        return;
      case "input":
        Tt("invalid", t);
        var S = (f = y = u = null),
          M = null,
          H = null;
        for (i in r)
          if (r.hasOwnProperty(i)) {
            var G = r[i];
            if (G != null)
              switch (i) {
                case "name":
                  u = G;
                  break;
                case "type":
                  y = G;
                  break;
                case "checked":
                  M = G;
                  break;
                case "defaultChecked":
                  H = G;
                  break;
                case "value":
                  f = G;
                  break;
                case "defaultValue":
                  S = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null) throw Error(o(137, n));
                  break;
                default:
                  Ht(t, n, i, G, r, null);
              }
          }
        Ld(t, f, S, M, H, y, u, !1);
        return;
      case "select":
        Tt("invalid", t), (i = y = f = null);
        for (u in r)
          if (r.hasOwnProperty(u) && ((S = r[u]), S != null))
            switch (u) {
              case "value":
                f = S;
                break;
              case "defaultValue":
                y = S;
                break;
              case "multiple":
                i = S;
              default:
                Ht(t, n, u, S, r, null);
            }
        (n = f),
          (r = y),
          (t.multiple = !!i),
          n != null ? Pr(t, !!i, n, !1) : r != null && Pr(t, !!i, r, !0);
        return;
      case "textarea":
        Tt("invalid", t), (f = u = i = null);
        for (y in r)
          if (r.hasOwnProperty(y) && ((S = r[y]), S != null))
            switch (y) {
              case "value":
                i = S;
                break;
              case "defaultValue":
                u = S;
                break;
              case "children":
                f = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(o(91));
                break;
              default:
                Ht(t, n, y, S, r, null);
            }
        Bd(t, i, u, f);
        return;
      case "option":
        for (M in r)
          r.hasOwnProperty(M) &&
            ((i = r[M]), i != null) &&
            (M === "selected"
              ? (t.selected =
                  i && typeof i != "function" && typeof i != "symbol")
              : Ht(t, n, M, i, r, null));
        return;
      case "dialog":
        Tt("beforetoggle", t), Tt("toggle", t), Tt("cancel", t), Tt("close", t);
        break;
      case "iframe":
      case "object":
        Tt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < vi.length; i++) Tt(vi[i], t);
        break;
      case "image":
        Tt("error", t), Tt("load", t);
        break;
      case "details":
        Tt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Tt("error", t), Tt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (H in r)
          if (r.hasOwnProperty(H) && ((i = r[H]), i != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, n));
              default:
                Ht(t, n, H, i, r, null);
            }
        return;
      default:
        if (iu(n)) {
          for (G in r)
            r.hasOwnProperty(G) &&
              ((i = r[G]), i !== void 0 && Ic(t, n, G, i, r, void 0));
          return;
        }
    }
    for (S in r)
      r.hasOwnProperty(S) && ((i = r[S]), i != null && Ht(t, n, S, i, r, null));
  }
  function f1(t, n, r, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          f = null,
          y = null,
          S = null,
          M = null,
          H = null,
          G = null;
        for (V in r) {
          var X = r[V];
          if (r.hasOwnProperty(V) && X != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = X;
              default:
                i.hasOwnProperty(V) || Ht(t, n, V, null, i, X);
            }
        }
        for (var P in i) {
          var V = i[P];
          if (((X = r[P]), i.hasOwnProperty(P) && (V != null || X != null)))
            switch (P) {
              case "type":
                f = V;
                break;
              case "name":
                u = V;
                break;
              case "checked":
                H = V;
                break;
              case "defaultChecked":
                G = V;
                break;
              case "value":
                y = V;
                break;
              case "defaultValue":
                S = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(o(137, n));
                break;
              default:
                V !== X && Ht(t, n, P, V, i, X);
            }
        }
        ru(t, y, S, M, H, G, f, u);
        return;
      case "select":
        V = y = S = P = null;
        for (f in r)
          if (((M = r[f]), r.hasOwnProperty(f) && M != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                V = M;
              default:
                i.hasOwnProperty(f) || Ht(t, n, f, null, i, M);
            }
        for (u in i)
          if (
            ((f = i[u]),
            (M = r[u]),
            i.hasOwnProperty(u) && (f != null || M != null))
          )
            switch (u) {
              case "value":
                P = f;
                break;
              case "defaultValue":
                S = f;
                break;
              case "multiple":
                y = f;
              default:
                f !== M && Ht(t, n, u, f, i, M);
            }
        (n = S),
          (r = y),
          (i = V),
          P != null
            ? Pr(t, !!r, P, !1)
            : !!i != !!r &&
              (n != null ? Pr(t, !!r, n, !0) : Pr(t, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        V = P = null;
        for (S in r)
          if (
            ((u = r[S]),
            r.hasOwnProperty(S) && u != null && !i.hasOwnProperty(S))
          )
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ht(t, n, S, null, i, u);
            }
        for (y in i)
          if (
            ((u = i[y]),
            (f = r[y]),
            i.hasOwnProperty(y) && (u != null || f != null))
          )
            switch (y) {
              case "value":
                P = u;
                break;
              case "defaultValue":
                V = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== f && Ht(t, n, y, u, i, f);
            }
        Ud(t, P, V);
        return;
      case "option":
        for (var ot in r)
          (P = r[ot]),
            r.hasOwnProperty(ot) &&
              P != null &&
              !i.hasOwnProperty(ot) &&
              (ot === "selected"
                ? (t.selected = !1)
                : Ht(t, n, ot, null, i, P));
        for (M in i)
          (P = i[M]),
            (V = r[M]),
            i.hasOwnProperty(M) &&
              P !== V &&
              (P != null || V != null) &&
              (M === "selected"
                ? (t.selected =
                    P && typeof P != "function" && typeof P != "symbol")
                : Ht(t, n, M, P, i, V));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ht in r)
          (P = r[ht]),
            r.hasOwnProperty(ht) &&
              P != null &&
              !i.hasOwnProperty(ht) &&
              Ht(t, n, ht, null, i, P);
        for (H in i)
          if (
            ((P = i[H]),
            (V = r[H]),
            i.hasOwnProperty(H) && P !== V && (P != null || V != null))
          )
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (P != null) throw Error(o(137, n));
                break;
              default:
                Ht(t, n, H, P, i, V);
            }
        return;
      default:
        if (iu(n)) {
          for (var qt in r)
            (P = r[qt]),
              r.hasOwnProperty(qt) &&
                P !== void 0 &&
                !i.hasOwnProperty(qt) &&
                Ic(t, n, qt, void 0, i, P);
          for (G in i)
            (P = i[G]),
              (V = r[G]),
              !i.hasOwnProperty(G) ||
                P === V ||
                (P === void 0 && V === void 0) ||
                Ic(t, n, G, P, i, V);
          return;
        }
    }
    for (var z in r)
      (P = r[z]),
        r.hasOwnProperty(z) &&
          P != null &&
          !i.hasOwnProperty(z) &&
          Ht(t, n, z, null, i, P);
    for (X in i)
      (P = i[X]),
        (V = r[X]),
        !i.hasOwnProperty(X) ||
          P === V ||
          (P == null && V == null) ||
          Ht(t, n, X, P, i, V);
  }
  function qp(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function d1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, n = 0, r = performance.getEntriesByType("resource"), i = 0;
        i < r.length;
        i++
      ) {
        var u = r[i],
          f = u.transferSize,
          y = u.initiatorType,
          S = u.duration;
        if (f && S && qp(y)) {
          for (y = 0, S = u.responseEnd, i += 1; i < r.length; i++) {
            var M = r[i],
              H = M.startTime;
            if (H > S) break;
            var G = M.transferSize,
              X = M.initiatorType;
            G &&
              qp(X) &&
              ((M = M.responseEnd), (y += G * (M < S ? 1 : (S - H) / (M - H))));
          }
          if ((--i, (n += (8 * (f + y)) / (u.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return n / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Fc = null,
    Xc = null;
  function Xo(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Pp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Yp(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function Kc(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Zc = null;
  function h1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Zc
        ? !1
        : ((Zc = t), !0)
      : ((Zc = null), !1);
  }
  var Vp = typeof setTimeout == "function" ? setTimeout : void 0,
    m1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Gp = typeof Promise == "function" ? Promise : void 0,
    p1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Gp < "u"
        ? function (t) {
            return Gp.resolve(null).then(t).catch(g1);
          }
        : Vp;
  function g1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Ca(t) {
    return t === "head";
  }
  function Qp(t, n) {
    var r = n,
      i = 0;
    do {
      var u = r.nextSibling;
      if ((t.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === "/$" || r === "/&")) {
          if (i === 0) {
            t.removeChild(u), bs(n);
            return;
          }
          i--;
        } else if (
          r === "$" ||
          r === "$?" ||
          r === "$~" ||
          r === "$!" ||
          r === "&"
        )
          i++;
        else if (r === "html") Si(t.ownerDocument.documentElement);
        else if (r === "head") {
          (r = t.ownerDocument.head), Si(r);
          for (var f = r.firstChild; f; ) {
            var y = f.nextSibling,
              S = f.nodeName;
            f[ks] ||
              S === "SCRIPT" ||
              S === "STYLE" ||
              (S === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
              r.removeChild(f),
              (f = y);
          }
        } else r === "body" && Si(t.ownerDocument.body);
      r = u;
    } while (r);
    bs(n);
  }
  function Ip(t, n) {
    var r = t;
    t = 0;
    do {
      var i = r.nextSibling;
      if (
        (r.nodeType === 1
          ? n
            ? ((r._stashedDisplay = r.style.display),
              (r.style.display = "none"))
            : ((r.style.display = r._stashedDisplay || ""),
              r.getAttribute("style") === "" && r.removeAttribute("style"))
          : r.nodeType === 3 &&
            (n
              ? ((r._stashedText = r.nodeValue), (r.nodeValue = ""))
              : (r.nodeValue = r._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((r = i.data), r === "/$")) {
          if (t === 0) break;
          t--;
        } else (r !== "$" && r !== "$?" && r !== "$~" && r !== "$!") || t++;
      r = i;
    } while (r);
  }
  function Jc(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (((n = n.nextSibling), r.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jc(r), nu(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(r);
    }
  }
  function y1(t, n, r, i) {
    for (; t.nodeType === 1; ) {
      var u = r;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[ks])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((f = t.getAttribute("rel")),
                f === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((f = t.getAttribute("src")),
                (f !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  f &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var f = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === f) return t;
      } else return t;
      if (((t = fn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function v1(t, n, r) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !r) ||
        ((t = fn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Fp(t, n) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = fn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function $c(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Wc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function b1(t, n) {
    var r = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = n;
    else if (t.data !== "$?" || r.readyState !== "loading") n();
    else {
      var i = function () {
        n(), r.removeEventListener("DOMContentLoaded", i);
      };
      r.addEventListener("DOMContentLoaded", i), (t._reactRetry = i);
    }
  }
  function fn(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === "$" ||
            n === "$!" ||
            n === "$?" ||
            n === "$~" ||
            n === "&" ||
            n === "F!" ||
            n === "F")
        )
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return t;
  }
  var tf = null;
  function Xp(t) {
    t = t.nextSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === "/$" || r === "/&") {
          if (n === 0) return fn(t.nextSibling);
          n--;
        } else
          (r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&") ||
            n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Kp(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (n === 0) return t;
          n--;
        } else (r !== "/$" && r !== "/&") || n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Zp(t, n, r) {
    switch (((n = Xo(r)), t)) {
      case "html":
        if (((t = n.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = n.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = n.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Si(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    nu(t);
  }
  var dn = new Map(),
    Jp = new Set();
  function Ko(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var ta = Z.d;
  Z.d = { f: S1, r: x1, D: w1, C: E1, L: _1, m: R1, X: C1, S: T1, M: A1 };
  function S1() {
    var t = ta.f(),
      n = qo();
    return t || n;
  }
  function x1(t) {
    var n = kr(t);
    n !== null && n.tag === 5 && n.type === "form" ? mm(n) : ta.r(t);
  }
  var gs = typeof document > "u" ? null : document;
  function $p(t, n, r) {
    var i = gs;
    if (i && typeof n == "string" && n) {
      var u = an(n);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof r == "string" && (u += '[crossorigin="' + r + '"]'),
        Jp.has(u) ||
          (Jp.add(u),
          (t = { rel: t, crossOrigin: r, href: n }),
          i.querySelector(u) === null &&
            ((n = i.createElement("link")),
            Re(n, "link", t),
            pe(n),
            i.head.appendChild(n)));
    }
  }
  function w1(t) {
    ta.D(t), $p("dns-prefetch", t, null);
  }
  function E1(t, n) {
    ta.C(t, n), $p("preconnect", t, n);
  }
  function _1(t, n, r) {
    ta.L(t, n, r);
    var i = gs;
    if (i && t && n) {
      var u = 'link[rel="preload"][as="' + an(n) + '"]';
      n === "image" && r && r.imageSrcSet
        ? ((u += '[imagesrcset="' + an(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == "string" &&
            (u += '[imagesizes="' + an(r.imageSizes) + '"]'))
        : (u += '[href="' + an(t) + '"]');
      var f = u;
      switch (n) {
        case "style":
          f = ys(t);
          break;
        case "script":
          f = vs(t);
      }
      dn.has(f) ||
        ((t = p(
          {
            rel: "preload",
            href: n === "image" && r && r.imageSrcSet ? void 0 : t,
            as: n,
          },
          r
        )),
        dn.set(f, t),
        i.querySelector(u) !== null ||
          (n === "style" && i.querySelector(xi(f))) ||
          (n === "script" && i.querySelector(wi(f))) ||
          ((n = i.createElement("link")),
          Re(n, "link", t),
          pe(n),
          i.head.appendChild(n)));
    }
  }
  function R1(t, n) {
    ta.m(t, n);
    var r = gs;
    if (r && t) {
      var i = n && typeof n.as == "string" ? n.as : "script",
        u =
          'link[rel="modulepreload"][as="' + an(i) + '"][href="' + an(t) + '"]',
        f = u;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = vs(t);
      }
      if (
        !dn.has(f) &&
        ((t = p({ rel: "modulepreload", href: t }, n)),
        dn.set(f, t),
        r.querySelector(u) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(wi(f))) return;
        }
        (i = r.createElement("link")),
          Re(i, "link", t),
          pe(i),
          r.head.appendChild(i);
      }
    }
  }
  function T1(t, n, r) {
    ta.S(t, n, r);
    var i = gs;
    if (i && t) {
      var u = Hr(i).hoistableStyles,
        f = ys(t);
      n = n || "default";
      var y = u.get(f);
      if (!y) {
        var S = { loading: 0, preload: null };
        if ((y = i.querySelector(xi(f)))) S.loading = 5;
        else {
          (t = p({ rel: "stylesheet", href: t, "data-precedence": n }, r)),
            (r = dn.get(f)) && ef(t, r);
          var M = (y = i.createElement("link"));
          pe(M),
            Re(M, "link", t),
            (M._p = new Promise(function (H, G) {
              (M.onload = H), (M.onerror = G);
            })),
            M.addEventListener("load", function () {
              S.loading |= 1;
            }),
            M.addEventListener("error", function () {
              S.loading |= 2;
            }),
            (S.loading |= 4),
            Zo(y, n, i);
        }
        (y = { type: "stylesheet", instance: y, count: 1, state: S }),
          u.set(f, y);
      }
    }
  }
  function C1(t, n) {
    ta.X(t, n);
    var r = gs;
    if (r && t) {
      var i = Hr(r).hoistableScripts,
        u = vs(t),
        f = i.get(u);
      f ||
        ((f = r.querySelector(wi(u))),
        f ||
          ((t = p({ src: t, async: !0 }, n)),
          (n = dn.get(u)) && nf(t, n),
          (f = r.createElement("script")),
          pe(f),
          Re(f, "link", t),
          r.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        i.set(u, f));
    }
  }
  function A1(t, n) {
    ta.M(t, n);
    var r = gs;
    if (r && t) {
      var i = Hr(r).hoistableScripts,
        u = vs(t),
        f = i.get(u);
      f ||
        ((f = r.querySelector(wi(u))),
        f ||
          ((t = p({ src: t, async: !0, type: "module" }, n)),
          (n = dn.get(u)) && nf(t, n),
          (f = r.createElement("script")),
          pe(f),
          Re(f, "link", t),
          r.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        i.set(u, f));
    }
  }
  function Wp(t, n, r, i) {
    var u = (u = rt.current) ? Ko(u) : null;
    if (!u) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string"
          ? ((n = ys(r.href)),
            (r = Hr(u).hoistableStyles),
            (i = r.get(n)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              r.set(n, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          r.rel === "stylesheet" &&
          typeof r.href == "string" &&
          typeof r.precedence == "string"
        ) {
          t = ys(r.href);
          var f = Hr(u).hoistableStyles,
            y = f.get(t);
          if (
            (y ||
              ((u = u.ownerDocument || u),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(t, y),
              (f = u.querySelector(xi(t))) &&
                !f._p &&
                ((y.instance = f), (y.state.loading = 5)),
              dn.has(t) ||
                ((r = {
                  rel: "preload",
                  as: "style",
                  href: r.href,
                  crossOrigin: r.crossOrigin,
                  integrity: r.integrity,
                  media: r.media,
                  hrefLang: r.hrefLang,
                  referrerPolicy: r.referrerPolicy,
                }),
                dn.set(t, r),
                f || O1(u, t, r, y.state))),
            n && i === null)
          )
            throw Error(o(528, ""));
          return y;
        }
        if (n && i !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (n = r.async),
          (r = r.src),
          typeof r == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = vs(r)),
              (r = Hr(u).hoistableScripts),
              (i = r.get(n)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                r.set(n, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function ys(t) {
    return 'href="' + an(t) + '"';
  }
  function xi(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function tg(t) {
    return p({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function O1(t, n, r, i) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (i.loading = 1)
      : ((n = t.createElement("link")),
        (i.preload = n),
        n.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        Re(n, "link", r),
        pe(n),
        t.head.appendChild(n));
  }
  function vs(t) {
    return '[src="' + an(t) + '"]';
  }
  function wi(t) {
    return "script[async]" + t;
  }
  function eg(t, n, r) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + an(r.href) + '"]');
          if (i) return (n.instance = i), pe(i), i;
          var u = p({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            pe(i),
            Re(i, "style", u),
            Zo(i, r.precedence, t),
            (n.instance = i)
          );
        case "stylesheet":
          u = ys(r.href);
          var f = t.querySelector(xi(u));
          if (f) return (n.state.loading |= 4), (n.instance = f), pe(f), f;
          (i = tg(r)),
            (u = dn.get(u)) && ef(i, u),
            (f = (t.ownerDocument || t).createElement("link")),
            pe(f);
          var y = f;
          return (
            (y._p = new Promise(function (S, M) {
              (y.onload = S), (y.onerror = M);
            })),
            Re(f, "link", i),
            (n.state.loading |= 4),
            Zo(f, r.precedence, t),
            (n.instance = f)
          );
        case "script":
          return (
            (f = vs(r.src)),
            (u = t.querySelector(wi(f)))
              ? ((n.instance = u), pe(u), u)
              : ((i = r),
                (u = dn.get(f)) && ((i = p({}, r)), nf(i, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                pe(u),
                Re(u, "link", i),
                t.head.appendChild(u),
                (n.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((i = n.instance), (n.state.loading |= 4), Zo(i, r.precedence, t));
    return n.instance;
  }
  function Zo(t, n, r) {
    for (
      var i = r.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = i.length ? i[i.length - 1] : null,
        f = u,
        y = 0;
      y < i.length;
      y++
    ) {
      var S = i[y];
      if (S.dataset.precedence === n) f = S;
      else if (f !== u) break;
    }
    f
      ? f.parentNode.insertBefore(t, f.nextSibling)
      : ((n = r.nodeType === 9 ? r.head : r), n.insertBefore(t, n.firstChild));
  }
  function ef(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title);
  }
  function nf(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity);
  }
  var Jo = null;
  function ng(t, n, r) {
    if (Jo === null) {
      var i = new Map(),
        u = (Jo = new Map());
      u.set(r, i);
    } else (u = Jo), (i = u.get(r)), i || ((i = new Map()), u.set(r, i));
    if (i.has(t)) return i;
    for (
      i.set(t, null), r = r.getElementsByTagName(t), u = 0;
      u < r.length;
      u++
    ) {
      var f = r[u];
      if (
        !(
          f[ks] ||
          f[xe] ||
          (t === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = f.getAttribute(n) || "";
        y = t + y;
        var S = i.get(y);
        S ? S.push(f) : i.set(y, [f]);
      }
    }
    return i;
  }
  function ag(t, n, r) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        r,
        n === "title" ? t.querySelector("head > title") : null
      );
  }
  function M1(t, n, r) {
    if (r === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        return n.rel === "stylesheet"
          ? ((t = n.disabled), typeof n.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function rg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function N1(t, n, r, i) {
    if (
      r.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (r.state.loading & 4) === 0
    ) {
      if (r.instance === null) {
        var u = ys(i.href),
          f = n.querySelector(xi(u));
        if (f) {
          (n = f._p),
            n !== null &&
              typeof n == "object" &&
              typeof n.then == "function" &&
              (t.count++, (t = $o.bind(t)), n.then(t, t)),
            (r.state.loading |= 4),
            (r.instance = f),
            pe(f);
          return;
        }
        (f = n.ownerDocument || n),
          (i = tg(i)),
          (u = dn.get(u)) && ef(i, u),
          (f = f.createElement("link")),
          pe(f);
        var y = f;
        (y._p = new Promise(function (S, M) {
          (y.onload = S), (y.onerror = M);
        })),
          Re(f, "link", i),
          (r.instance = f);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(r, n),
        (n = r.state.preload) &&
          (r.state.loading & 3) === 0 &&
          (t.count++,
          (r = $o.bind(t)),
          n.addEventListener("load", r),
          n.addEventListener("error", r));
    }
  }
  var af = 0;
  function D1(t, n) {
    return (
      t.stylesheets && t.count === 0 && tl(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (r) {
            var i = setTimeout(function () {
              if ((t.stylesheets && tl(t, t.stylesheets), t.unsuspend)) {
                var f = t.unsuspend;
                (t.unsuspend = null), f();
              }
            }, 6e4 + n);
            0 < t.imgBytes && af === 0 && (af = 62500 * d1());
            var u = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && tl(t, t.stylesheets), t.unsuspend))
              ) {
                var f = t.unsuspend;
                (t.unsuspend = null), f();
              }
            }, (t.imgBytes > af ? 50 : 800) + n);
            return (
              (t.unsuspend = r),
              function () {
                (t.unsuspend = null), clearTimeout(i), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function $o() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) tl(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Wo = null;
  function tl(t, n) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Wo = new Map()),
        n.forEach(z1, t),
        (Wo = null),
        $o.call(t));
  }
  function z1(t, n) {
    if (!(n.state.loading & 4)) {
      var r = Wo.get(t);
      if (r) var i = r.get(null);
      else {
        (r = new Map()), Wo.set(t, r);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            f = 0;
          f < u.length;
          f++
        ) {
          var y = u[f];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (r.set(y.dataset.precedence, y), (i = y));
        }
        i && r.set(null, i);
      }
      (u = n.instance),
        (y = u.getAttribute("data-precedence")),
        (f = r.get(y) || i),
        f === i && r.set(null, u),
        r.set(y, u),
        this.count++,
        (i = $o.bind(this)),
        u.addEventListener("load", i),
        u.addEventListener("error", i),
        f
          ? f.parentNode.insertBefore(u, f.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var Ei = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: st,
    _currentValue2: st,
    _threadCount: 0,
  };
  function j1(t, n, r, i, u, f, y, S, M) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = la(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = la(0)),
      (this.hiddenUpdates = la(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = u),
      (this.onCaughtError = f),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = M),
      (this.incompleteTransitions = new Map());
  }
  function sg(t, n, r, i, u, f, y, S, M, H, G, X) {
    return (
      (t = new j1(t, n, r, y, M, H, G, X, S)),
      (n = 1),
      f === !0 && (n |= 24),
      (f = Xe(3, null, null, n)),
      (t.current = f),
      (f.stateNode = t),
      (n = Uu()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (f.memoizedState = { element: i, isDehydrated: r, cache: n }),
      qu(f),
      t
    );
  }
  function ig(t) {
    return t ? ((t = Kr), t) : Kr;
  }
  function og(t, n, r, i, u, f) {
    (u = ig(u)),
      i.context === null ? (i.context = u) : (i.pendingContext = u),
      (i = ga(n)),
      (i.payload = { element: r }),
      (f = f === void 0 ? null : f),
      f !== null && (i.callback = f),
      (r = ya(t, i, n)),
      r !== null && (Pe(r, t, n), ei(r, t, n));
  }
  function lg(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var r = t.retryLane;
      t.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function rf(t, n) {
    lg(t, n), (t = t.alternate) && lg(t, n);
  }
  function ug(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = sr(t, 67108864);
      n !== null && Pe(n, t, 67108864), rf(t, 67108864);
    }
  }
  function cg(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = We();
      n = Lr(n);
      var r = sr(t, n);
      r !== null && Pe(r, t, n), rf(t, n);
    }
  }
  var el = !0;
  function L1(t, n, r, i) {
    var u = L.T;
    L.T = null;
    var f = Z.p;
    try {
      (Z.p = 2), sf(t, n, r, i);
    } finally {
      (Z.p = f), (L.T = u);
    }
  }
  function U1(t, n, r, i) {
    var u = L.T;
    L.T = null;
    var f = Z.p;
    try {
      (Z.p = 8), sf(t, n, r, i);
    } finally {
      (Z.p = f), (L.T = u);
    }
  }
  function sf(t, n, r, i) {
    if (el) {
      var u = of(i);
      if (u === null) Qc(t, n, i, nl, r), dg(t, i);
      else if (k1(u, t, n, r, i)) i.stopPropagation();
      else if ((dg(t, i), n & 4 && -1 < B1.indexOf(t))) {
        for (; u !== null; ) {
          var f = kr(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var y = Rn(f.pendingLanes);
                  if (y !== 0) {
                    var S = f;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; y; ) {
                      var M = 1 << (31 - Te(y));
                      (S.entanglements[1] |= M), (y &= ~M);
                    }
                    On(f), (zt & 6) === 0 && ((ko = he() + 500), yi(0));
                  }
                }
                break;
              case 31:
              case 13:
                (S = sr(f, 2)), S !== null && Pe(S, f, 2), qo(), rf(f, 2);
            }
          if (((f = of(i)), f === null && Qc(t, n, i, nl, r), f === u)) break;
          u = f;
        }
        u !== null && i.stopPropagation();
      } else Qc(t, n, i, null, r);
    }
  }
  function of(t) {
    return (t = lu(t)), lf(t);
  }
  var nl = null;
  function lf(t) {
    if (((nl = null), (t = Br(t)), t !== null)) {
      var n = c(t);
      if (n === null) t = null;
      else {
        var r = n.tag;
        if (r === 13) {
          if (((t = d(n)), t !== null)) return t;
          t = null;
        } else if (r === 31) {
          if (((t = h(n)), t !== null)) return t;
          t = null;
        } else if (r === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return (nl = t), null;
  }
  function fg(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bt()) {
          case Kt:
            return 2;
          case en:
            return 8;
          case Ln:
          case Us:
            return 32;
          case Un:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uf = !1,
    Aa = null,
    Oa = null,
    Ma = null,
    _i = new Map(),
    Ri = new Map(),
    Na = [],
    B1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function dg(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        Aa = null;
        break;
      case "dragenter":
      case "dragleave":
        Oa = null;
        break;
      case "mouseover":
      case "mouseout":
        Ma = null;
        break;
      case "pointerover":
      case "pointerout":
        _i.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ri.delete(n.pointerId);
    }
  }
  function Ti(t, n, r, i, u, f) {
    return t === null || t.nativeEvent !== f
      ? ((t = {
          blockedOn: n,
          domEventName: r,
          eventSystemFlags: i,
          nativeEvent: f,
          targetContainers: [u],
        }),
        n !== null && ((n = kr(n)), n !== null && ug(n)),
        t)
      : ((t.eventSystemFlags |= i),
        (n = t.targetContainers),
        u !== null && n.indexOf(u) === -1 && n.push(u),
        t);
  }
  function k1(t, n, r, i, u) {
    switch (n) {
      case "focusin":
        return (Aa = Ti(Aa, t, n, r, i, u)), !0;
      case "dragenter":
        return (Oa = Ti(Oa, t, n, r, i, u)), !0;
      case "mouseover":
        return (Ma = Ti(Ma, t, n, r, i, u)), !0;
      case "pointerover":
        var f = u.pointerId;
        return _i.set(f, Ti(_i.get(f) || null, t, n, r, i, u)), !0;
      case "gotpointercapture":
        return (
          (f = u.pointerId), Ri.set(f, Ti(Ri.get(f) || null, t, n, r, i, u)), !0
        );
    }
    return !1;
  }
  function hg(t) {
    var n = Br(t.target);
    if (n !== null) {
      var r = c(n);
      if (r !== null) {
        if (((n = r.tag), n === 13)) {
          if (((n = d(r)), n !== null)) {
            (t.blockedOn = n),
              Cd(t.priority, function () {
                cg(r);
              });
            return;
          }
        } else if (n === 31) {
          if (((n = h(r)), n !== null)) {
            (t.blockedOn = n),
              Cd(t.priority, function () {
                cg(r);
              });
            return;
          }
        } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function al(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var r = of(t.nativeEvent);
      if (r === null) {
        r = t.nativeEvent;
        var i = new r.constructor(r.type, r);
        (ou = i), r.target.dispatchEvent(i), (ou = null);
      } else return (n = kr(r)), n !== null && ug(n), (t.blockedOn = r), !1;
      n.shift();
    }
    return !0;
  }
  function mg(t, n, r) {
    al(t) && r.delete(n);
  }
  function H1() {
    (uf = !1),
      Aa !== null && al(Aa) && (Aa = null),
      Oa !== null && al(Oa) && (Oa = null),
      Ma !== null && al(Ma) && (Ma = null),
      _i.forEach(mg),
      Ri.forEach(mg);
  }
  function rl(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      uf ||
        ((uf = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, H1)));
  }
  var sl = null;
  function pg(t) {
    sl !== t &&
      ((sl = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        sl === t && (sl = null);
        for (var n = 0; n < t.length; n += 3) {
          var r = t[n],
            i = t[n + 1],
            u = t[n + 2];
          if (typeof i != "function") {
            if (lf(i || r) === null) continue;
            break;
          }
          var f = kr(r);
          f !== null &&
            (t.splice(n, 3),
            (n -= 3),
            ic(f, { pending: !0, data: u, method: r.method, action: i }, i, u));
        }
      }));
  }
  function bs(t) {
    function n(M) {
      return rl(M, t);
    }
    Aa !== null && rl(Aa, t),
      Oa !== null && rl(Oa, t),
      Ma !== null && rl(Ma, t),
      _i.forEach(n),
      Ri.forEach(n);
    for (var r = 0; r < Na.length; r++) {
      var i = Na[r];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Na.length && ((r = Na[0]), r.blockedOn === null); )
      hg(r), r.blockedOn === null && Na.shift();
    if (((r = (t.ownerDocument || t).$$reactFormReplay), r != null))
      for (i = 0; i < r.length; i += 3) {
        var u = r[i],
          f = r[i + 1],
          y = u[Le] || null;
        if (typeof f == "function") y || pg(r);
        else if (y) {
          var S = null;
          if (f && f.hasAttribute("formAction")) {
            if (((u = f), (y = f[Le] || null))) S = y.formAction;
            else if (lf(u) !== null) continue;
          } else S = y.action;
          typeof S == "function" ? (r[i + 1] = S) : (r.splice(i, 3), (i -= 3)),
            pg(r);
        }
      }
  }
  function gg() {
    function t(f) {
      f.canIntercept &&
        f.info === "react-transition" &&
        f.intercept({
          handler: function () {
            return new Promise(function (y) {
              return (u = y);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function n() {
      u !== null && (u(), (u = null)), i || setTimeout(r, 20);
    }
    function r() {
      if (!i && !navigation.transition) {
        var f = navigation.currentEntry;
        f &&
          f.url != null &&
          navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", n),
        navigation.addEventListener("navigateerror", n),
        setTimeout(r, 100),
        function () {
          (i = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", n),
            navigation.removeEventListener("navigateerror", n),
            u !== null && (u(), (u = null));
        }
      );
    }
  }
  function cf(t) {
    this._internalRoot = t;
  }
  (il.prototype.render = cf.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      var r = n.current,
        i = We();
      og(r, i, t, n, null, null);
    }),
    (il.prototype.unmount = cf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          og(t.current, 2, null, t, null, null), qo(), (n[Ur] = null);
        }
      });
  function il(t) {
    this._internalRoot = t;
  }
  il.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = tu();
      t = { blockedOn: null, target: t, priority: n };
      for (var r = 0; r < Na.length && n !== 0 && n < Na[r].priority; r++);
      Na.splice(r, 0, t), r === 0 && hg(t);
    }
  };
  var yg = a.version;
  if (yg !== "19.2.5") throw Error(o(527, yg, "19.2.5"));
  Z.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = m(n)),
      (t = t !== null ? v(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var q1 = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.2.5",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ol.isDisabled && ol.supportsFiber)
      try {
        ($a = ol.inject(q1)), (Oe = ol);
      } catch {}
  }
  return (
    (Ai.createRoot = function (t, n) {
      if (!l(t)) throw Error(o(299));
      var r = !1,
        i = "",
        u = _m,
        f = Rm,
        y = Tm;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (r = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError)),
        (n = sg(t, 1, !1, null, null, r, i, null, u, f, y, gg)),
        (t[Ur] = n.current),
        Gc(t),
        new cf(n)
      );
    }),
    (Ai.hydrateRoot = function (t, n, r) {
      if (!l(t)) throw Error(o(299));
      var i = !1,
        u = "",
        f = _m,
        y = Rm,
        S = Tm,
        M = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (i = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (f = r.onUncaughtError),
          r.onCaughtError !== void 0 && (y = r.onCaughtError),
          r.onRecoverableError !== void 0 && (S = r.onRecoverableError),
          r.formState !== void 0 && (M = r.formState)),
        (n = sg(t, 1, !0, n, r ?? null, i, u, M, f, y, S, gg)),
        (n.context = ig(null)),
        (r = n.current),
        (i = We()),
        (i = Lr(i)),
        (u = ga(i)),
        (u.callback = null),
        ya(r, u, i),
        (r = i),
        (n.current.lanes = r),
        Xt(n, r),
        On(n),
        (t[Ur] = n.current),
        Gc(t),
        new il(n)
      );
    }),
    (Ai.version = "19.2.5"),
    Ai
  );
}
var Cg;
function Z1() {
  if (Cg) return hf.exports;
  Cg = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (a) {
        console.error(a);
      }
  }
  return e(), (hf.exports = K1()), hf.exports;
}
var J1 = Z1(),
  $1 = "__TSS_CONTEXT",
  qf = Symbol.for("TSS_SERVER_FUNCTION"),
  W1 = "application/x-tss-framed",
  ea = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 },
  tx = /;\s*v=(\d+)/;
function ex(e) {
  const a = e.match(tx);
  return a ? parseInt(a[1], 10) : void 0;
}
function nx(e) {
  const a = ex(e);
  if (a !== void 0 && a !== 1)
    throw new Error(
      `Incompatible framed protocol version: server=${a}, client=1. Please ensure client and server are using compatible versions.`
    );
}
var nv = () => window.__TSS_START_OPTIONS__,
  av = !1;
function Bi(e) {
  return e[e.length - 1];
}
function ax(e) {
  return typeof e == "function";
}
function ka(e, a) {
  return ax(e) ? e(a) : e;
}
var rx = Object.prototype.hasOwnProperty,
  Ag = Object.prototype.propertyIsEnumerable,
  sx = () => Object.create(null),
  vr = (e, a) => Ha(e, a, sx);
function Ha(e, a, s = () => ({}), o = 0) {
  if (e === a) return e;
  if (o > 500) return a;
  const l = a,
    c = Ng(e) && Ng(l);
  if (!c && !(Ds(e) && Ds(l))) return l;
  const d = c ? e : Og(e);
  if (!d) return l;
  const h = c ? l : Og(l);
  if (!h) return l;
  const g = d.length,
    m = h.length,
    v = c ? new Array(m) : s();
  let p = 0;
  for (let b = 0; b < m; b++) {
    const x = c ? b : h[b],
      R = e[x],
      _ = l[x];
    if (R === _) {
      (v[x] = R), (c ? b < g : rx.call(e, x)) && p++;
      continue;
    }
    if (
      R === null ||
      _ === null ||
      typeof R != "object" ||
      typeof _ != "object"
    ) {
      v[x] = _;
      continue;
    }
    const w = Ha(R, _, s, o + 1);
    (v[x] = w), w === R && p++;
  }
  return g === m && p === g ? e : v;
}
function Og(e) {
  const a = Object.getOwnPropertyNames(e);
  for (const l of a) if (!Ag.call(e, l)) return !1;
  const s = Object.getOwnPropertySymbols(e);
  if (s.length === 0) return a;
  const o = a;
  for (const l of s) {
    if (!Ag.call(e, l)) return !1;
    o.push(l);
  }
  return o;
}
function Ds(e) {
  if (!Mg(e)) return !1;
  const a = e.constructor;
  if (typeof a > "u") return !0;
  const s = a.prototype;
  return !(!Mg(s) || !s.hasOwnProperty("isPrototypeOf"));
}
function Mg(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ng(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ve(e, a, s) {
  if (e === a) return !0;
  if (typeof e != typeof a) return !1;
  if (Array.isArray(e) && Array.isArray(a)) {
    if (e.length !== a.length) return !1;
    for (let o = 0, l = e.length; o < l; o++) if (!Ve(e[o], a[o], s)) return !1;
    return !0;
  }
  if (Ds(e) && Ds(a)) {
    const o = s?.ignoreUndefined ?? !0;
    if (s?.partial) {
      for (const d in a)
        if ((!o || a[d] !== void 0) && !Ve(e[d], a[d], s)) return !1;
      return !0;
    }
    let l = 0;
    if (!o) l = Object.keys(e).length;
    else for (const d in e) e[d] !== void 0 && l++;
    let c = 0;
    for (const d in a)
      if ((!o || a[d] !== void 0) && (c++, c > l || !Ve(e[d], a[d], s)))
        return !1;
    return l === c;
  }
  return !1;
}
function _r(e) {
  let a, s;
  const o = new Promise((l, c) => {
    (a = l), (s = c);
  });
  return (
    (o.status = "pending"),
    (o.resolve = (l) => {
      (o.status = "resolved"), (o.value = l), a(l), e?.(l);
    }),
    (o.reject = (l) => {
      (o.status = "rejected"), s(l);
    }),
    o
  );
}
function ix(e) {
  return typeof e?.message != "string"
    ? !1
    : e.message.startsWith("Failed to fetch dynamically imported module") ||
        e.message.startsWith("error loading dynamically imported module") ||
        e.message.startsWith("Importing a module script failed");
}
function ki(e) {
  return !!(e && typeof e == "object" && typeof e.then == "function");
}
function ox(e) {
  return e.replace(/[\x00-\x1f\x7f]/g, "");
}
function Dg(e) {
  let a;
  try {
    a = decodeURI(e);
  } catch {
    a = e.replaceAll(/%[0-9A-F]{2}/gi, (s) => {
      try {
        return decodeURI(s);
      } catch {
        return s;
      }
    });
  }
  return ox(a);
}
var lx = ["http:", "https:", "mailto:", "tel:"];
function Ol(e, a) {
  if (!e) return !1;
  try {
    const s = new URL(e);
    return !a.has(s.protocol);
  } catch {
    return !1;
  }
}
var ux = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  },
  cx = /[&><\u2028\u2029]/g;
function fx(e) {
  return e.replace(cx, (a) => ux[a]);
}
function Oi(e) {
  if (!e) return { path: e, handledProtocolRelativeURL: !1 };
  if (!/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith("//"))
    return { path: e, handledProtocolRelativeURL: !1 };
  const a = /%25|%5C/gi;
  let s = 0,
    o = "",
    l;
  for (; (l = a.exec(e)) !== null; )
    (o += Dg(e.slice(s, l.index)) + l[0]), (s = a.lastIndex);
  o = o + Dg(s ? e.slice(s) : e);
  let c = !1;
  return (
    o.startsWith("//") && ((c = !0), (o = "/" + o.replace(/^\/+/, ""))),
    { path: o, handledProtocolRelativeURL: c }
  );
}
function dx(e) {
  return /\s|[^\u0000-\u007F]/.test(e)
    ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent)
    : e;
}
function hx(e, a) {
  if (e === a) return !0;
  if (e.length !== a.length) return !1;
  for (let s = 0; s < e.length; s++) if (e[s] !== a[s]) return !1;
  return !0;
}
function Qe() {
  throw new Error("Invariant failed");
}
function Hi(e) {
  const a = new Map();
  let s, o;
  const l = (c) => {
    c.next &&
      (c.prev
        ? ((c.prev.next = c.next),
          (c.next.prev = c.prev),
          (c.next = void 0),
          o && ((o.next = c), (c.prev = o)))
        : ((c.next.prev = void 0),
          (s = c.next),
          (c.next = void 0),
          o && ((c.prev = o), (o.next = c))),
      (o = c));
  };
  return {
    get(c) {
      const d = a.get(c);
      if (d) return l(d), d.value;
    },
    set(c, d) {
      if (a.size >= e && s) {
        const g = s;
        a.delete(g.key),
          g.next && ((s = g.next), (g.next.prev = void 0)),
          g === o && (o = void 0);
      }
      const h = a.get(c);
      if (h) (h.value = d), l(h);
      else {
        const g = { key: c, value: d, prev: o };
        o && (o.next = g), (o = g), s || (s = g), a.set(c, g);
      }
    },
    clear() {
      a.clear(), (s = void 0), (o = void 0);
    },
  };
}
var qa = 4,
  rv = 5;
function mx(e) {
  const a = e.indexOf("{");
  if (a === -1) return null;
  const s = e.indexOf("}", a);
  return s === -1 || a + 1 >= e.length ? null : [a, s];
}
function sd(e, a, s = new Uint16Array(6)) {
  const o = e.indexOf("/", a),
    l = o === -1 ? e.length : o,
    c = e.substring(a, l);
  if (!c || !c.includes("$"))
    return (
      (s[0] = 0), (s[1] = a), (s[2] = a), (s[3] = l), (s[4] = l), (s[5] = l), s
    );
  if (c === "$") {
    const h = e.length;
    return (
      (s[0] = 2), (s[1] = a), (s[2] = a), (s[3] = h), (s[4] = h), (s[5] = h), s
    );
  }
  if (c.charCodeAt(0) === 36)
    return (
      (s[0] = 1),
      (s[1] = a),
      (s[2] = a + 1),
      (s[3] = l),
      (s[4] = l),
      (s[5] = l),
      s
    );
  const d = mx(c);
  if (d) {
    const [h, g] = d,
      m = c.charCodeAt(h + 1);
    if (m === 45) {
      if (h + 2 < c.length && c.charCodeAt(h + 2) === 36) {
        const v = h + 3,
          p = g;
        if (v < p)
          return (
            (s[0] = 3),
            (s[1] = a + h),
            (s[2] = a + v),
            (s[3] = a + p),
            (s[4] = a + g + 1),
            (s[5] = l),
            s
          );
      }
    } else if (m === 36) {
      const v = h + 1,
        p = h + 2;
      return p === g
        ? ((s[0] = 2),
          (s[1] = a + h),
          (s[2] = a + v),
          (s[3] = a + p),
          (s[4] = a + g + 1),
          (s[5] = e.length),
          s)
        : ((s[0] = 1),
          (s[1] = a + h),
          (s[2] = a + p),
          (s[3] = a + g),
          (s[4] = a + g + 1),
          (s[5] = l),
          s);
    }
  }
  return (
    (s[0] = 0), (s[1] = a), (s[2] = a), (s[3] = l), (s[4] = l), (s[5] = l), s
  );
}
function ql(e, a, s, o, l, c, d) {
  d?.(s);
  let h = o;
  {
    const g = s.fullPath ?? s.from,
      m = g.length,
      v = s.options?.caseSensitive ?? e,
      p = !!(
        s.options?.params?.parse && s.options?.skipRouteOnParseError?.params
      );
    for (; h < m; ) {
      const x = sd(g, h, a);
      let R;
      const _ = h,
        w = x[5];
      switch (((h = w + 1), c++, x[0])) {
        case 0: {
          const C = g.substring(x[2], x[3]);
          if (v) {
            const k = l.static?.get(C);
            if (k) R = k;
            else {
              l.static ??= new Map();
              const q = Sr(s.fullPath ?? s.from);
              (q.parent = l), (q.depth = c), (R = q), l.static.set(C, q);
            }
          } else {
            const k = C.toLowerCase(),
              q = l.staticInsensitive?.get(k);
            if (q) R = q;
            else {
              l.staticInsensitive ??= new Map();
              const j = Sr(s.fullPath ?? s.from);
              (j.parent = l),
                (j.depth = c),
                (R = j),
                l.staticInsensitive.set(k, j);
            }
          }
          break;
        }
        case 1: {
          const C = g.substring(_, x[1]),
            k = g.substring(x[4], w),
            q = v && !!(C || k),
            j = C ? (q ? C : C.toLowerCase()) : void 0,
            K = k ? (q ? k : k.toLowerCase()) : void 0,
            J =
              !p &&
              l.dynamic?.find(
                (Y) =>
                  !Y.skipOnParamError &&
                  Y.caseSensitive === q &&
                  Y.prefix === j &&
                  Y.suffix === K
              );
          if (J) R = J;
          else {
            const Y = vf(1, s.fullPath ?? s.from, q, j, K);
            (R = Y),
              (Y.depth = c),
              (Y.parent = l),
              (l.dynamic ??= []),
              l.dynamic.push(Y);
          }
          break;
        }
        case 3: {
          const C = g.substring(_, x[1]),
            k = g.substring(x[4], w),
            q = v && !!(C || k),
            j = C ? (q ? C : C.toLowerCase()) : void 0,
            K = k ? (q ? k : k.toLowerCase()) : void 0,
            J =
              !p &&
              l.optional?.find(
                (Y) =>
                  !Y.skipOnParamError &&
                  Y.caseSensitive === q &&
                  Y.prefix === j &&
                  Y.suffix === K
              );
          if (J) R = J;
          else {
            const Y = vf(3, s.fullPath ?? s.from, q, j, K);
            (R = Y),
              (Y.parent = l),
              (Y.depth = c),
              (l.optional ??= []),
              l.optional.push(Y);
          }
          break;
        }
        case 2: {
          const C = g.substring(_, x[1]),
            k = g.substring(x[4], w),
            q = v && !!(C || k),
            j = C ? (q ? C : C.toLowerCase()) : void 0,
            K = k ? (q ? k : k.toLowerCase()) : void 0,
            J = vf(2, s.fullPath ?? s.from, q, j, K);
          (R = J),
            (J.parent = l),
            (J.depth = c),
            (l.wildcard ??= []),
            l.wildcard.push(J);
        }
      }
      l = R;
    }
    if (
      p &&
      s.children &&
      !s.isRoot &&
      s.id &&
      s.id.charCodeAt(s.id.lastIndexOf("/") + 1) === 95
    ) {
      const x = Sr(s.fullPath ?? s.from);
      (x.kind = rv),
        (x.parent = l),
        c++,
        (x.depth = c),
        (l.pathless ??= []),
        l.pathless.push(x),
        (l = x);
    }
    const b = (s.path || !s.children) && !s.isRoot;
    if (b && g.endsWith("/")) {
      const x = Sr(s.fullPath ?? s.from);
      (x.kind = qa), (x.parent = l), c++, (x.depth = c), (l.index = x), (l = x);
    }
    (l.parse = s.options?.params?.parse ?? null),
      (l.skipOnParamError = p),
      (l.parsingPriority = s.options?.skipRouteOnParseError?.priority ?? 0),
      b && !l.route && ((l.route = s), (l.fullPath = s.fullPath ?? s.from));
  }
  if (s.children) for (const g of s.children) ql(e, a, g, h, l, c, d);
}
function yf(e, a) {
  if (e.skipOnParamError && !a.skipOnParamError) return -1;
  if (!e.skipOnParamError && a.skipOnParamError) return 1;
  if (
    e.skipOnParamError &&
    a.skipOnParamError &&
    (e.parsingPriority || a.parsingPriority)
  )
    return a.parsingPriority - e.parsingPriority;
  if (e.prefix && a.prefix && e.prefix !== a.prefix) {
    if (e.prefix.startsWith(a.prefix)) return -1;
    if (a.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && a.suffix && e.suffix !== a.suffix) {
    if (e.suffix.endsWith(a.suffix)) return -1;
    if (a.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !a.prefix
    ? -1
    : !e.prefix && a.prefix
    ? 1
    : e.suffix && !a.suffix
    ? -1
    : !e.suffix && a.suffix
    ? 1
    : e.caseSensitive && !a.caseSensitive
    ? -1
    : !e.caseSensitive && a.caseSensitive
    ? 1
    : 0;
}
function Ua(e) {
  if (e.pathless) for (const a of e.pathless) Ua(a);
  if (e.static) for (const a of e.static.values()) Ua(a);
  if (e.staticInsensitive) for (const a of e.staticInsensitive.values()) Ua(a);
  if (e.dynamic?.length) {
    e.dynamic.sort(yf);
    for (const a of e.dynamic) Ua(a);
  }
  if (e.optional?.length) {
    e.optional.sort(yf);
    for (const a of e.optional) Ua(a);
  }
  if (e.wildcard?.length) {
    e.wildcard.sort(yf);
    for (const a of e.wildcard) Ua(a);
  }
}
function Sr(e) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: e,
    parent: null,
    parse: null,
    skipOnParamError: !1,
    parsingPriority: 0,
  };
}
function vf(e, a, s, o, l) {
  return {
    kind: e,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: a,
    parent: null,
    parse: null,
    skipOnParamError: !1,
    parsingPriority: 0,
    caseSensitive: s,
    prefix: o,
    suffix: l,
  };
}
function px(e, a) {
  const s = Sr("/"),
    o = new Uint16Array(6);
  for (const l of e) ql(!1, o, l, 1, s, 0);
  Ua(s), (a.masksTree = s), (a.flatCache = Hi(1e3));
}
function gx(e, a) {
  e ||= "/";
  const s = a.flatCache.get(e);
  if (s) return s;
  const o = id(e, a.masksTree);
  return a.flatCache.set(e, o), o;
}
function yx(e, a, s, o, l) {
  (e ||= "/"), (o ||= "/");
  const c = a ? `case\0${e}` : e;
  let d = l.singleCache.get(c);
  return (
    d ||
      ((d = Sr("/")),
      ql(a, new Uint16Array(6), { from: e }, 1, d, 0),
      l.singleCache.set(c, d)),
    id(o, d, s)
  );
}
function vx(e, a, s = !1) {
  const o = s ? e : `nofuzz\0${e}`,
    l = a.matchCache.get(o);
  if (l !== void 0) return l;
  e ||= "/";
  let c;
  try {
    c = id(e, a.segmentTree, s);
  } catch (d) {
    if (d instanceof URIError) c = null;
    else throw d;
  }
  return c && (c.branch = xx(c.route)), a.matchCache.set(o, c), c;
}
function bx(e) {
  return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function Sx(e, a = !1, s) {
  const o = Sr(e.fullPath),
    l = new Uint16Array(6),
    c = {},
    d = {};
  let h = 0;
  return (
    ql(a, l, e, 1, o, 0, (g) => {
      if ((s?.(g, h), g.id in c && Qe(), (c[g.id] = g), h !== 0 && g.path)) {
        const m = bx(g.fullPath);
        (!d[m] || g.fullPath.endsWith("/")) && (d[m] = g);
      }
      h++;
    }),
    Ua(o),
    {
      processedTree: {
        segmentTree: o,
        singleCache: Hi(1e3),
        matchCache: Hi(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: c,
      routesByPath: d,
    }
  );
}
function id(e, a, s = !1) {
  const o = e.split("/"),
    l = Ex(e, o, a, s);
  if (!l) return null;
  const [c] = sv(e, o, l);
  return { route: l.node.route, rawParams: c, parsedParams: l.parsedParams };
}
function sv(e, a, s) {
  const o = wx(s.node);
  let l = null;
  const c = Object.create(null);
  let d = s.extract?.part ?? 0,
    h = s.extract?.node ?? 0,
    g = s.extract?.path ?? 0,
    m = s.extract?.segment ?? 0;
  for (; h < o.length; d++, h++, g++, m++) {
    const v = o[h];
    if (v.kind === qa) break;
    if (v.kind === rv) {
      m--, d--, g--;
      continue;
    }
    const p = a[d],
      b = g;
    if ((p && (g += p.length), v.kind === 1)) {
      l ??= s.node.fullPath.split("/");
      const x = l[m],
        R = v.prefix?.length ?? 0;
      if (x.charCodeAt(R) === 123) {
        const _ = v.suffix?.length ?? 0,
          w = x.substring(R + 2, x.length - _ - 1),
          C = p.substring(R, p.length - _);
        c[w] = decodeURIComponent(C);
      } else {
        const _ = x.substring(1);
        c[_] = decodeURIComponent(p);
      }
    } else if (v.kind === 3) {
      if (s.skipped & (1 << h)) {
        d--, (g = b - 1);
        continue;
      }
      l ??= s.node.fullPath.split("/");
      const x = l[m],
        R = v.prefix?.length ?? 0,
        _ = v.suffix?.length ?? 0,
        w = x.substring(R + 3, x.length - _ - 1),
        C = v.suffix || v.prefix ? p.substring(R, p.length - _) : p;
      C && (c[w] = decodeURIComponent(C));
    } else if (v.kind === 2) {
      const x = v,
        R = e.substring(
          b + (x.prefix?.length ?? 0),
          e.length - (x.suffix?.length ?? 0)
        ),
        _ = decodeURIComponent(R);
      (c["*"] = _), (c._splat = _);
      break;
    }
  }
  return (
    s.rawParams && Object.assign(c, s.rawParams),
    [c, { part: d, node: h, path: g, segment: m }]
  );
}
function xx(e) {
  const a = [e];
  for (; e.parentRoute; ) (e = e.parentRoute), a.push(e);
  return a.reverse(), a;
}
function wx(e) {
  const a = Array(e.depth + 1);
  do (a[e.depth] = e), (e = e.parent);
  while (e);
  return a;
}
function Ex(e, a, s, o) {
  if (e === "/" && s.index) return { node: s.index, skipped: 0 };
  const l = !Bi(a),
    c = l && e !== "/",
    d = a.length - (l ? 1 : 0),
    h = [
      {
        node: s,
        index: 1,
        skipped: 0,
        depth: 1,
        statics: 0,
        dynamics: 0,
        optionals: 0,
      },
    ];
  let g = null,
    m = null;
  for (; h.length; ) {
    const v = h.pop(),
      {
        node: p,
        index: b,
        skipped: x,
        depth: R,
        statics: _,
        dynamics: w,
        optionals: C,
      } = v;
    let { extract: k, rawParams: q, parsedParams: j } = v;
    if (p.kind === 2 && p.route && !ul(m, v)) continue;
    if (p.skipOnParamError) {
      if (!zg(e, a, v)) continue;
      (q = v.rawParams), (k = v.extract), (j = v.parsedParams);
    }
    o && p.route && p.kind !== qa && ul(g, v) && (g = v);
    const K = b === d;
    if (
      K &&
      (p.route && (!c || p.kind === qa || p.kind === 2) && ul(m, v) && (m = v),
      !p.optional && !p.wildcard && !p.index && !p.pathless)
    )
      continue;
    const J = K ? void 0 : a[b];
    let Y;
    if (K && p.index) {
      const U = {
        node: p.index,
        index: b,
        skipped: x,
        depth: R + 1,
        statics: _,
        dynamics: w,
        optionals: C,
        extract: k,
        rawParams: q,
        parsedParams: j,
      };
      let $ = !0;
      if ((p.index.skipOnParamError && (zg(e, a, U) || ($ = !1)), $)) {
        if (!w && !C && !x && _x(_, d)) return U;
        ul(m, U) && (m = U);
      }
    }
    if (p.wildcard)
      for (let U = p.wildcard.length - 1; U >= 0; U--) {
        const $ = p.wildcard[U],
          { prefix: it, suffix: at } = $;
        if (
          !(
            it &&
            (K ||
              !($.caseSensitive ? J : (Y ??= J.toLowerCase())).startsWith(it))
          )
        ) {
          if (at) {
            if (K) continue;
            const mt = a.slice(b).join("/").slice(-at.length);
            if (($.caseSensitive ? mt : mt.toLowerCase()) !== at) continue;
          }
          h.push({
            node: $,
            index: d,
            skipped: x,
            depth: R + 1,
            statics: _,
            dynamics: w,
            optionals: C,
            extract: k,
            rawParams: q,
            parsedParams: j,
          });
        }
      }
    if (p.optional) {
      const U = x | (1 << R),
        $ = R + 1;
      for (let it = p.optional.length - 1; it >= 0; it--) {
        const at = p.optional[it];
        h.push({
          node: at,
          index: b,
          skipped: U,
          depth: $,
          statics: _,
          dynamics: w,
          optionals: C,
          extract: k,
          rawParams: q,
          parsedParams: j,
        });
      }
      if (!K)
        for (let it = p.optional.length - 1; it >= 0; it--) {
          const at = p.optional[it],
            { prefix: mt, suffix: bt } = at;
          if (mt || bt) {
            const jt = at.caseSensitive ? J : (Y ??= J.toLowerCase());
            if ((mt && !jt.startsWith(mt)) || (bt && !jt.endsWith(bt)))
              continue;
          }
          h.push({
            node: at,
            index: b + 1,
            skipped: x,
            depth: $,
            statics: _,
            dynamics: w,
            optionals: C + ll(d, b),
            extract: k,
            rawParams: q,
            parsedParams: j,
          });
        }
    }
    if (!K && p.dynamic && J)
      for (let U = p.dynamic.length - 1; U >= 0; U--) {
        const $ = p.dynamic[U],
          { prefix: it, suffix: at } = $;
        if (it || at) {
          const mt = $.caseSensitive ? J : (Y ??= J.toLowerCase());
          if ((it && !mt.startsWith(it)) || (at && !mt.endsWith(at))) continue;
        }
        h.push({
          node: $,
          index: b + 1,
          skipped: x,
          depth: R + 1,
          statics: _,
          dynamics: w + ll(d, b),
          optionals: C,
          extract: k,
          rawParams: q,
          parsedParams: j,
        });
      }
    if (!K && p.staticInsensitive) {
      const U = p.staticInsensitive.get((Y ??= J.toLowerCase()));
      U &&
        h.push({
          node: U,
          index: b + 1,
          skipped: x,
          depth: R + 1,
          statics: _ + ll(d, b),
          dynamics: w,
          optionals: C,
          extract: k,
          rawParams: q,
          parsedParams: j,
        });
    }
    if (!K && p.static) {
      const U = p.static.get(J);
      U &&
        h.push({
          node: U,
          index: b + 1,
          skipped: x,
          depth: R + 1,
          statics: _ + ll(d, b),
          dynamics: w,
          optionals: C,
          extract: k,
          rawParams: q,
          parsedParams: j,
        });
    }
    if (p.pathless) {
      const U = R + 1;
      for (let $ = p.pathless.length - 1; $ >= 0; $--) {
        const it = p.pathless[$];
        h.push({
          node: it,
          index: b,
          skipped: x,
          depth: U,
          statics: _,
          dynamics: w,
          optionals: C,
          extract: k,
          rawParams: q,
          parsedParams: j,
        });
      }
    }
  }
  if (m) return m;
  if (o && g) {
    let v = g.index;
    for (let b = 0; b < g.index; b++) v += a[b].length;
    const p = v === e.length ? "/" : e.slice(v);
    return (
      (g.rawParams ??= Object.create(null)),
      (g.rawParams["**"] = decodeURIComponent(p)),
      g
    );
  }
  return null;
}
function ll(e, a) {
  return 2 ** (e - a - 1);
}
function _x(e, a) {
  return e === 2 ** (a - 1) - 1;
}
function zg(e, a, s) {
  try {
    const [o, l] = sv(e, a, s);
    (s.rawParams = o), (s.extract = l);
    const c = s.node.parse(o);
    return (
      (s.parsedParams = Object.assign(Object.create(null), s.parsedParams, c)),
      !0
    );
  } catch {
    return null;
  }
}
function ul(e, a) {
  return e
    ? a.statics > e.statics ||
        (a.statics === e.statics &&
          (a.dynamics > e.dynamics ||
            (a.dynamics === e.dynamics &&
              (a.optionals > e.optionals ||
                (a.optionals === e.optionals &&
                  ((a.node.kind === qa) > (e.node.kind === qa) ||
                    ((a.node.kind === qa) == (e.node.kind === qa) &&
                      a.depth > e.depth)))))))
    : !0;
}
function wl(e) {
  return od(e.filter((a) => a !== void 0).join("/"));
}
function od(e) {
  return e.replace(/\/{2,}/g, "/");
}
function iv(e) {
  return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function Ya(e) {
  const a = e.length;
  return a > 1 && e[a - 1] === "/" ? e.replace(/\/{1,}$/, "") : e;
}
function ov(e) {
  return Ya(iv(e));
}
function Ml(e, a) {
  return e?.endsWith("/") && e !== "/" && e !== `${a}/` ? e.slice(0, -1) : e;
}
function Rx(e, a, s) {
  return Ml(e, s) === Ml(a, s);
}
function Tx({ base: e, to: a, trailingSlash: s = "never", cache: o }) {
  const l = a.startsWith("/"),
    c = !l && a === ".";
  let d;
  if (o) {
    d = l ? a : c ? e : e + "\0" + a;
    const p = o.get(d);
    if (p) return p;
  }
  let h;
  if (c) h = e.split("/");
  else if (l) h = a.split("/");
  else {
    for (h = e.split("/"); h.length > 1 && Bi(h) === ""; ) h.pop();
    const p = a.split("/");
    for (let b = 0, x = p.length; b < x; b++) {
      const R = p[b];
      R === ""
        ? b
          ? b === x - 1 && h.push(R)
          : (h = [R])
        : R === ".."
        ? h.pop()
        : R === "." || h.push(R);
    }
  }
  h.length > 1 &&
    (Bi(h) === "" ? s === "never" && h.pop() : s === "always" && h.push(""));
  let g,
    m = "";
  for (let p = 0; p < h.length; p++) {
    p > 0 && (m += "/");
    const b = h[p];
    if (!b) continue;
    g = sd(b, 0, g);
    const x = g[0];
    if (x === 0) {
      m += b;
      continue;
    }
    const R = g[5],
      _ = b.substring(0, g[1]),
      w = b.substring(g[4], R),
      C = b.substring(g[2], g[3]);
    x === 1
      ? (m += _ || w ? `${_}{$${C}}${w}` : `$${C}`)
      : x === 2
      ? (m += _ || w ? `${_}{$}${w}` : "$")
      : (m += `${_}{-$${C}}${w}`);
  }
  m = od(m);
  const v = m || "/";
  return d && o && o.set(d, v), v;
}
function Cx(e) {
  const a = new Map(e.map((l) => [encodeURIComponent(l), l])),
    s = Array.from(a.keys())
      .map((l) => l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    o = new RegExp(s, "g");
  return (l) => l.replace(o, (c) => a.get(c) ?? c);
}
function bf(e, a, s) {
  const o = a[e];
  return typeof o != "string"
    ? o
    : e === "_splat"
    ? /^[a-zA-Z0-9\-._~!/]*$/.test(o)
      ? o
      : o
          .split("/")
          .map((l) => Lg(l, s))
          .join("/")
    : Lg(o, s);
}
function jg({ path: e, params: a, decoder: s, ...o }) {
  let l = !1;
  const c = Object.create(null);
  if (!e || e === "/")
    return { interpolatedPath: "/", usedParams: c, isMissingParams: l };
  if (!e.includes("$"))
    return { interpolatedPath: e, usedParams: c, isMissingParams: l };
  const d = e.length;
  let h = 0,
    g,
    m = "";
  for (; h < d; ) {
    const v = h;
    g = sd(e, v, g);
    const p = g[5];
    if (((h = p + 1), v === p)) continue;
    const b = g[0];
    if (b === 0) {
      m += "/" + e.substring(v, p);
      continue;
    }
    if (b === 2) {
      const x = a._splat;
      (c._splat = x), (c["*"] = x);
      const R = e.substring(v, g[1]),
        _ = e.substring(g[4], p);
      if (!x) {
        (l = !0), (R || _) && (m += "/" + R + _);
        continue;
      }
      const w = bf("_splat", a, s);
      m += "/" + R + w + _;
      continue;
    }
    if (b === 1) {
      const x = e.substring(g[2], g[3]);
      !l && !(x in a) && (l = !0), (c[x] = a[x]);
      const R = e.substring(v, g[1]),
        _ = e.substring(g[4], p),
        w = bf(x, a, s) ?? "undefined";
      m += "/" + R + w + _;
      continue;
    }
    if (b === 3) {
      const x = e.substring(g[2], g[3]),
        R = a[x];
      if (R == null) continue;
      c[x] = R;
      const _ = e.substring(v, g[1]),
        w = e.substring(g[4], p),
        C = bf(x, a, s) ?? "";
      m += "/" + _ + C + w;
      continue;
    }
  }
  return (
    e.endsWith("/") && (m += "/"),
    { usedParams: c, interpolatedPath: m || "/", isMissingParams: l }
  );
}
function Lg(e, a) {
  const s = encodeURIComponent(e);
  return a?.(s) ?? s;
}
function Pf(e = {}) {
  if (((e.isNotFound = !0), e.throw)) throw e;
  return e;
}
function ye(e) {
  return e?.isNotFound === !0;
}
function Ax() {
  try {
    return typeof window < "u" && typeof window.sessionStorage == "object"
      ? window.sessionStorage
      : void 0;
  } catch {
    return;
  }
}
var Ox = "tsr-scroll-restoration-v1_3";
function Mx() {
  const e = Ax();
  if (!e) return null;
  let a = {};
  try {
    const o = JSON.parse(e.getItem("tsr-scroll-restoration-v1_3") || "{}");
    Ds(o) && (a = o);
  } catch {}
  return {
    get state() {
      return a;
    },
    set: (o) => {
      a = ka(o, a) || a;
    },
    persist: () => {
      try {
        e.setItem(Ox, JSON.stringify(a));
      } catch {}
    },
  };
}
var Ug = Mx(),
  Nx = (e) => e.state.__TSR_key || e.href;
function Dx(e) {
  const a = [];
  let s;
  for (; (s = e.parentNode); )
    a.push(
      `${e.tagName}:nth-child(${
        Array.prototype.indexOf.call(s.children, e) + 1
      })`
    ),
      (e = s);
  return `${a.reverse().join(" > ")}`.toLowerCase();
}
var cl = !1,
  Mi = "window",
  Bg = "data-scroll-restoration-id";
function zx(e, a) {
  if (!Ug) return;
  const s = Ug;
  if (
    ((e.options.scrollRestoration ?? !1) && (e.isScrollRestoring = !0),
    e.isScrollRestorationSetup || !s)
  )
    return;
  (e.isScrollRestorationSetup = !0), (cl = !1);
  const o = e.options.getScrollRestorationKey || Nx,
    l = new Map();
  window.history.scrollRestoration = "manual";
  const c = (h) => {
      if (!(cl || !e.isScrollRestoring))
        if (h.target === document || h.target === window)
          l.set(Mi, {
            scrollX: window.scrollX || 0,
            scrollY: window.scrollY || 0,
          });
        else {
          const g = h.target;
          l.set(g, { scrollX: g.scrollLeft || 0, scrollY: g.scrollTop || 0 });
        }
    },
    d = (h) => {
      if (!e.isScrollRestoring || !h || l.size === 0 || !s) return;
      const g = (s.state[h] ||= {});
      for (const [m, v] of l) {
        let p;
        if (m === Mi) p = Mi;
        else if (m.isConnected) {
          const b = m.getAttribute(Bg);
          p = b ? `[${Bg}="${b}"]` : Dx(m);
        }
        p && (g[p] = v);
      }
    };
  document.addEventListener("scroll", c, !0),
    e.subscribe("onBeforeLoad", (h) => {
      d(h.fromLocation ? o(h.fromLocation) : void 0), l.clear();
    }),
    window.addEventListener("pagehide", () => {
      d(o(e.stores.resolvedLocation.get() ?? e.stores.location.get())),
        s.persist();
    }),
    e.subscribe("onRendered", (h) => {
      const g = o(h.toLocation),
        m = e.options.scrollRestorationBehavior,
        v = e.options.scrollToTopSelectors;
      if ((l.clear(), !e.resetNextScroll)) {
        e.resetNextScroll = !0;
        return;
      }
      if (
        !(
          typeof e.options.scrollRestoration == "function" &&
          !e.options.scrollRestoration({ location: e.latestLocation })
        )
      ) {
        cl = !0;
        try {
          const p = e.isScrollRestoring ? s.state[g] : void 0;
          let b = !1;
          if (p)
            for (const x in p) {
              const R = p[x];
              if (!Ds(R)) continue;
              const { scrollX: _, scrollY: w } = R;
              if (!(!Number.isFinite(_) || !Number.isFinite(w))) {
                if (x === Mi)
                  window.scrollTo({ top: w, left: _, behavior: m }), (b = !0);
                else if (x) {
                  let C;
                  try {
                    C = document.querySelector(x);
                  } catch {
                    continue;
                  }
                  C && ((C.scrollLeft = _), (C.scrollTop = w), (b = !0));
                }
              }
            }
          if (!b) {
            const x = e.history.location.hash.slice(1);
            if (x) {
              const R = window.history.state?.__hashScrollIntoViewOptions ?? !0;
              if (R) {
                const _ = document.getElementById(x);
                _ && _.scrollIntoView(R);
              }
            } else {
              const R = { top: 0, left: 0, behavior: m };
              if ((window.scrollTo(R), v))
                for (const _ of v) {
                  if (_ === Mi) continue;
                  const w =
                    typeof _ == "function" ? _() : document.querySelector(_);
                  w && w.scrollTo(R);
                }
            }
          }
        } finally {
          cl = !1;
        }
        e.isScrollRestoring && s.set((p) => ((p[g] ||= {}), p));
      }
    });
}
function lv(e, a = String) {
  const s = new URLSearchParams();
  for (const o in e) {
    const l = e[o];
    l !== void 0 && s.set(o, a(l));
  }
  return s.toString();
}
function Sf(e) {
  return e
    ? e === "false"
      ? !1
      : e === "true"
      ? !0
      : +e * 0 === 0 && +e + "" === e
      ? +e
      : e
    : "";
}
function jx(e) {
  const a = new URLSearchParams(e),
    s = Object.create(null);
  for (const [o, l] of a.entries()) {
    const c = s[o];
    c == null
      ? (s[o] = Sf(l))
      : Array.isArray(c)
      ? c.push(Sf(l))
      : (s[o] = [c, Sf(l)]);
  }
  return s;
}
var Lx = Bx(JSON.parse),
  Ux = kx(JSON.stringify, JSON.parse);
function Bx(e) {
  return (a) => {
    a[0] === "?" && (a = a.substring(1));
    const s = jx(a);
    for (const o in s) {
      const l = s[o];
      if (typeof l == "string")
        try {
          s[o] = e(l);
        } catch {}
    }
    return s;
  };
}
function kx(e, a) {
  const s = typeof a == "function";
  function o(l) {
    if (typeof l == "object" && l !== null)
      try {
        return e(l);
      } catch {}
    else if (s && typeof l == "string")
      try {
        return a(l), e(l);
      } catch {}
    return l;
  }
  return (l) => {
    const c = lv(l, o);
    return c ? `?${c}` : "";
  };
}
var wr = "__root__";
function uv(e) {
  if (
    ((e.statusCode = e.statusCode || e.code || 307),
    !e._builtLocation && !e.reloadDocument && typeof e.href == "string")
  )
    try {
      new URL(e.href), (e.reloadDocument = !0);
    } catch {}
  const a = new Headers(e.headers);
  e.href && a.get("Location") === null && a.set("Location", e.href);
  const s = new Response(null, { status: e.statusCode, headers: a });
  if (((s.options = e), e.throw)) throw s;
  return s;
}
function Ge(e) {
  return e instanceof Response && !!e.options;
}
function Hx(e) {
  if (e !== null && typeof e == "object" && e.isSerializedRedirect)
    return uv(e);
}
function qx(e) {
  return {
    input: ({ url: a }) => {
      for (const s of e) a = Yf(s, a);
      return a;
    },
    output: ({ url: a }) => {
      for (let s = e.length - 1; s >= 0; s--) a = cv(e[s], a);
      return a;
    },
  };
}
function Px(e) {
  const a = ov(e.basepath),
    s = `/${a}`,
    o = `${s}/`,
    l = e.caseSensitive ? s : s.toLowerCase(),
    c = e.caseSensitive ? o : o.toLowerCase();
  return {
    input: ({ url: d }) => {
      const h = e.caseSensitive ? d.pathname : d.pathname.toLowerCase();
      return (
        h === l
          ? (d.pathname = "/")
          : h.startsWith(c) && (d.pathname = d.pathname.slice(s.length)),
        d
      );
    },
    output: ({ url: d }) => ((d.pathname = wl(["/", a, d.pathname])), d),
  };
}
function Yf(e, a) {
  const s = e?.input?.({ url: a });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return a;
}
function cv(e, a) {
  const s = e?.output?.({ url: a });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return a;
}
function Yx(e, a) {
  const {
      createMutableStore: s,
      createReadonlyStore: o,
      batch: l,
      init: c,
    } = a,
    d = new Map(),
    h = new Map(),
    g = new Map(),
    m = s(e.status),
    v = s(e.loadedAt),
    p = s(e.isLoading),
    b = s(e.isTransitioning),
    x = s(e.location),
    R = s(e.resolvedLocation),
    _ = s(e.statusCode),
    w = s(e.redirect),
    C = s([]),
    k = s([]),
    q = s([]),
    j = o(() => xf(d, C.get())),
    K = o(() => xf(h, k.get())),
    J = o(() => xf(g, q.get())),
    Y = o(() => C.get()[0]),
    U = o(() => C.get().some((Z) => d.get(Z)?.get().status === "pending")),
    $ = o(() => ({
      locationHref: x.get().href,
      resolvedLocationHref: R.get()?.href,
      status: m.get(),
    })),
    it = o(() => ({
      status: m.get(),
      loadedAt: v.get(),
      isLoading: p.get(),
      isTransitioning: b.get(),
      matches: j.get(),
      location: x.get(),
      resolvedLocation: R.get(),
      statusCode: _.get(),
      redirect: w.get(),
    })),
    at = Hi(64);
  function mt(Z) {
    let st = at.get(Z);
    return (
      st ||
        ((st = o(() => {
          const St = C.get();
          for (const et of St) {
            const N = d.get(et);
            if (N && N.routeId === Z) return N.get();
          }
        })),
        at.set(Z, st)),
      st
    );
  }
  const bt = {
    status: m,
    loadedAt: v,
    isLoading: p,
    isTransitioning: b,
    location: x,
    resolvedLocation: R,
    statusCode: _,
    redirect: w,
    matchesId: C,
    pendingIds: k,
    cachedIds: q,
    matches: j,
    pendingMatches: K,
    cachedMatches: J,
    firstId: Y,
    hasPending: U,
    matchRouteDeps: $,
    matchStores: d,
    pendingMatchStores: h,
    cachedMatchStores: g,
    __store: it,
    getRouteMatchStore: mt,
    setMatches: jt,
    setPending: _t,
    setCached: L,
  };
  jt(e.matches), c?.(bt);
  function jt(Z) {
    wf(Z, d, C, s, l);
  }
  function _t(Z) {
    wf(Z, h, k, s, l);
  }
  function L(Z) {
    wf(Z, g, q, s, l);
  }
  return bt;
}
function xf(e, a) {
  const s = [];
  for (const o of a) {
    const l = e.get(o);
    l && s.push(l.get());
  }
  return s;
}
function wf(e, a, s, o, l) {
  const c = e.map((h) => h.id),
    d = new Set(c);
  l(() => {
    for (const h of a.keys()) d.has(h) || a.delete(h);
    for (const h of e) {
      const g = a.get(h.id);
      if (!g) {
        const m = o(h);
        (m.routeId = h.routeId), a.set(h.id, m);
        continue;
      }
      (g.routeId = h.routeId), g.get() !== h && g.set(h);
    }
    hx(s.get(), c) || s.set(c);
  });
}
var Vf = (e) => {
    if (!e.rendered) return (e.rendered = !0), e.onReady?.();
  },
  Vx = (e) =>
    e.stores.matchesId
      .get()
      .some((a) => e.stores.matchStores.get(a)?.get()._forcePending),
  Pl = (e, a) => !!(e.preload && !e.router.stores.matchStores.has(a)),
  Er = (e, a, s = !0) => {
    const o = { ...(e.router.options.context ?? {}) },
      l = s ? a : a - 1;
    for (let c = 0; c <= l; c++) {
      const d = e.matches[c];
      if (!d) continue;
      const h = e.router.getMatch(d.id);
      h && Object.assign(o, h.__routeContext, h.__beforeLoadContext);
    }
    return o;
  },
  kg = (e, a) => {
    if (!e.matches.length) return;
    const s = a.routeId,
      o = e.matches.findIndex((d) => d.routeId === e.router.routeTree.id),
      l = o >= 0 ? o : 0;
    let c = s
      ? e.matches.findIndex((d) => d.routeId === s)
      : e.firstBadMatchIndex ?? e.matches.length - 1;
    c < 0 && (c = l);
    for (let d = c; d >= 0; d--) {
      const h = e.matches[d];
      if (e.router.looseRoutesById[h.routeId].options.notFoundComponent)
        return d;
    }
    return s ? c : l;
  },
  Pa = (e, a, s) => {
    if (!(!Ge(s) && !ye(s)))
      throw (
        ((Ge(s) && s.redirectHandled && !s.options.reloadDocument) ||
          (a &&
            (a._nonReactive.beforeLoadPromise?.resolve(),
            a._nonReactive.loaderPromise?.resolve(),
            (a._nonReactive.beforeLoadPromise = void 0),
            (a._nonReactive.loaderPromise = void 0),
            (a._nonReactive.error = s),
            e.updateMatch(a.id, (o) => ({
              ...o,
              status: Ge(s)
                ? "redirected"
                : ye(s)
                ? "notFound"
                : o.status === "pending"
                ? "success"
                : o.status,
              context: Er(e, a.index),
              isFetching: !1,
              error: s,
            })),
            ye(s) && !s.routeId && (s.routeId = a.routeId),
            a._nonReactive.loadPromise?.resolve()),
          Ge(s) &&
            ((e.rendered = !0),
            (s.options._fromLocation = e.location),
            (s.redirectHandled = !0),
            (s = e.router.resolveRedirect(s)))),
        s)
      );
  },
  fv = (e, a) => {
    const s = e.router.getMatch(a);
    return !!(!s || s._nonReactive.dehydrated);
  },
  Hg = (e, a, s) => {
    const o = Er(e, s);
    e.updateMatch(a, (l) => ({ ...l, context: o }));
  },
  Ni = (e, a, s, o) => {
    const { id: l, routeId: c } = e.matches[a],
      d = e.router.looseRoutesById[c];
    if (s instanceof Promise) throw s;
    (s.routerCode = o),
      (e.firstBadMatchIndex ??= a),
      Pa(e, e.router.getMatch(l), s);
    try {
      d.options.onError?.(s);
    } catch (h) {
      (s = h), Pa(e, e.router.getMatch(l), s);
    }
    e.updateMatch(
      l,
      (h) => (
        h._nonReactive.beforeLoadPromise?.resolve(),
        (h._nonReactive.beforeLoadPromise = void 0),
        h._nonReactive.loadPromise?.resolve(),
        {
          ...h,
          error: s,
          status: "error",
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      )
    ),
      !e.preload && !Ge(s) && !ye(s) && (e.serialError ??= s);
  },
  dv = (e, a, s, o) => {
    if (o._nonReactive.pendingTimeout !== void 0) return;
    const l = s.options.pendingMs ?? e.router.options.defaultPendingMs;
    if (
      e.onReady &&
      !Pl(e, a) &&
      (s.options.loader || s.options.beforeLoad || mv(s)) &&
      typeof l == "number" &&
      l !== 1 / 0 &&
      (s.options.pendingComponent ?? e.router.options?.defaultPendingComponent)
    ) {
      const c = setTimeout(() => {
        Vf(e);
      }, l);
      o._nonReactive.pendingTimeout = c;
    }
  },
  Gx = (e, a, s) => {
    const o = e.router.getMatch(a);
    if (!o._nonReactive.beforeLoadPromise && !o._nonReactive.loaderPromise)
      return;
    dv(e, a, s, o);
    const l = () => {
      const c = e.router.getMatch(a);
      c.preload &&
        (c.status === "redirected" || c.status === "notFound") &&
        Pa(e, c, c.error);
    };
    return o._nonReactive.beforeLoadPromise
      ? o._nonReactive.beforeLoadPromise.then(l)
      : l();
  },
  Qx = (e, a, s, o) => {
    const l = e.router.getMatch(a);
    let c = l._nonReactive.loadPromise;
    l._nonReactive.loadPromise = _r(() => {
      c?.resolve(), (c = void 0);
    });
    const { paramsError: d, searchError: h } = l;
    d && Ni(e, s, d, "PARSE_PARAMS"),
      h && Ni(e, s, h, "VALIDATE_SEARCH"),
      dv(e, a, o, l);
    const g = new AbortController();
    let m = !1;
    const v = () => {
        m ||
          ((m = !0),
          e.updateMatch(a, (j) => ({
            ...j,
            isFetching: "beforeLoad",
            fetchCount: j.fetchCount + 1,
            abortController: g,
          })));
      },
      p = () => {
        l._nonReactive.beforeLoadPromise?.resolve(),
          (l._nonReactive.beforeLoadPromise = void 0),
          e.updateMatch(a, (j) => ({ ...j, isFetching: !1 }));
      };
    if (!o.options.beforeLoad) {
      e.router.batch(() => {
        v(), p();
      });
      return;
    }
    l._nonReactive.beforeLoadPromise = _r();
    const b = { ...Er(e, s, !1), ...l.__routeContext },
      { search: x, params: R, cause: _ } = l,
      w = Pl(e, a),
      C = {
        search: x,
        abortController: g,
        params: R,
        preload: w,
        context: b,
        location: e.location,
        navigate: (j) => e.router.navigate({ ...j, _fromLocation: e.location }),
        buildLocation: e.router.buildLocation,
        cause: w ? "preload" : _,
        matches: e.matches,
        routeId: o.id,
        ...e.router.options.additionalContext,
      },
      k = (j) => {
        if (j === void 0) {
          e.router.batch(() => {
            v(), p();
          });
          return;
        }
        (Ge(j) || ye(j)) && (v(), Ni(e, s, j, "BEFORE_LOAD")),
          e.router.batch(() => {
            v(),
              e.updateMatch(a, (K) => ({ ...K, __beforeLoadContext: j })),
              p();
          });
      };
    let q;
    try {
      if (((q = o.options.beforeLoad(C)), ki(q)))
        return (
          v(),
          q
            .catch((j) => {
              Ni(e, s, j, "BEFORE_LOAD");
            })
            .then(k)
        );
    } catch (j) {
      v(), Ni(e, s, j, "BEFORE_LOAD");
    }
    k(q);
  },
  Ix = (e, a) => {
    const { id: s, routeId: o } = e.matches[a],
      l = e.router.looseRoutesById[o],
      c = () => h(),
      d = () => Qx(e, s, a, l),
      h = () => {
        if (fv(e, s)) return;
        const g = Gx(e, s, l);
        return ki(g) ? g.then(d) : d();
      };
    return c();
  },
  Fx = (e, a, s) => {
    const o = e.router.getMatch(a);
    if (!o || (!s.options.head && !s.options.scripts && !s.options.headers))
      return;
    const l = {
      ssr: e.router.options.ssr,
      matches: e.matches,
      match: o,
      params: o.params,
      loaderData: o.loaderData,
    };
    return Promise.all([
      s.options.head?.(l),
      s.options.scripts?.(l),
      s.options.headers?.(l),
    ]).then(([c, d, h]) => ({
      meta: c?.meta,
      links: c?.links,
      headScripts: c?.scripts,
      headers: h,
      scripts: d,
      styles: c?.styles,
    }));
  },
  hv = (e, a, s, o, l) => {
    const c = a[o - 1],
      {
        params: d,
        loaderDeps: h,
        abortController: g,
        cause: m,
      } = e.router.getMatch(s),
      v = Er(e, o),
      p = Pl(e, s);
    return {
      params: d,
      deps: h,
      preload: !!p,
      parentMatchPromise: c,
      abortController: g,
      context: v,
      location: e.location,
      navigate: (b) => e.router.navigate({ ...b, _fromLocation: e.location }),
      cause: p ? "preload" : m,
      route: l,
      ...e.router.options.additionalContext,
    };
  },
  qg = async (e, a, s, o, l) => {
    try {
      const c = e.router.getMatch(s);
      try {
        (!(av ?? e.router.isServer) || c.ssr === !0) && qi(l);
        const d = l.options.loader,
          h = typeof d == "function" ? d : d?.handler,
          g = h?.(hv(e, a, s, o, l)),
          m = !!h && ki(g);
        if (
          ((m ||
            l._lazyPromise ||
            l._componentsPromise ||
            l.options.head ||
            l.options.scripts ||
            l.options.headers ||
            c._nonReactive.minPendingPromise) &&
            e.updateMatch(s, (p) => ({ ...p, isFetching: "loader" })),
          h)
        ) {
          const p = m ? await g : g;
          Pa(e, e.router.getMatch(s), p),
            p !== void 0 && e.updateMatch(s, (b) => ({ ...b, loaderData: p }));
        }
        l._lazyPromise && (await l._lazyPromise);
        const v = c._nonReactive.minPendingPromise;
        v && (await v),
          l._componentsPromise && (await l._componentsPromise),
          e.updateMatch(s, (p) => ({
            ...p,
            error: void 0,
            context: Er(e, o),
            status: "success",
            isFetching: !1,
            updatedAt: Date.now(),
          }));
      } catch (d) {
        let h = d;
        if (h?.name === "AbortError") {
          if (c.abortController.signal.aborted) {
            c._nonReactive.loaderPromise?.resolve(),
              (c._nonReactive.loaderPromise = void 0);
            return;
          }
          e.updateMatch(s, (m) => ({
            ...m,
            status: m.status === "pending" ? "success" : m.status,
            isFetching: !1,
            context: Er(e, o),
          }));
          return;
        }
        const g = c._nonReactive.minPendingPromise;
        g && (await g),
          ye(d) && (await l.options.notFoundComponent?.preload?.()),
          Pa(e, e.router.getMatch(s), d);
        try {
          l.options.onError?.(d);
        } catch (m) {
          (h = m), Pa(e, e.router.getMatch(s), m);
        }
        !Ge(h) && !ye(h) && (await qi(l, ["errorComponent"])),
          e.updateMatch(s, (m) => ({
            ...m,
            error: h,
            context: Er(e, o),
            status: "error",
            isFetching: !1,
          }));
      }
    } catch (c) {
      const d = e.router.getMatch(s);
      d && (d._nonReactive.loaderPromise = void 0), Pa(e, d, c);
    }
  },
  Xx = async (e, a, s) => {
    async function o(x, R, _, w, C) {
      const k = Date.now() - R.updatedAt,
        q = x
          ? C.options.preloadStaleTime ??
            e.router.options.defaultPreloadStaleTime ??
            3e4
          : C.options.staleTime ?? e.router.options.defaultStaleTime ?? 0,
        j = C.options.shouldReload,
        K = typeof j == "function" ? j(hv(e, a, l, s, C)) : j,
        { status: J, invalid: Y } = w,
        U =
          k >= q &&
          (!!e.forceStaleReload ||
            w.cause === "enter" ||
            (_ !== void 0 && _ !== w.id));
      (d = J === "success" && (Y || (K ?? U))),
        (x && C.options.preload === !1) ||
          (d && !e.sync && v
            ? ((h = !0),
              (async () => {
                try {
                  await qg(e, a, l, s, C);
                  const $ = e.router.getMatch(l);
                  $._nonReactive.loaderPromise?.resolve(),
                    $._nonReactive.loadPromise?.resolve(),
                    ($._nonReactive.loaderPromise = void 0),
                    ($._nonReactive.loadPromise = void 0);
                } catch ($) {
                  Ge($) && (await e.router.navigate($.options));
                }
              })())
            : J !== "success" || d
            ? await qg(e, a, l, s, C)
            : Hg(e, l, s));
    }
    const { id: l, routeId: c } = e.matches[s];
    let d = !1,
      h = !1;
    const g = e.router.looseRoutesById[c],
      m = g.options.loader,
      v =
        ((typeof m == "function" ? void 0 : m?.staleReloadMode) ??
          e.router.options.defaultStaleReloadMode) !== "blocking";
    if (fv(e, l)) {
      if (!e.router.getMatch(l)) return e.matches[s];
      Hg(e, l, s);
    } else {
      const x = e.router.getMatch(l),
        R = e.router.stores.matchesId.get()[s],
        _ =
          ((R && e.router.stores.matchStores.get(R)) || null)?.routeId === c
            ? R
            : e.router.stores.matches.get().find((C) => C.routeId === c)?.id,
        w = Pl(e, l);
      if (x._nonReactive.loaderPromise) {
        if (x.status === "success" && !e.sync && !x.preload && v) return x;
        await x._nonReactive.loaderPromise;
        const C = e.router.getMatch(l),
          k = C._nonReactive.error || C.error;
        k && Pa(e, C, k), C.status === "pending" && (await o(w, x, _, C, g));
      } else {
        const C = w && !e.router.stores.matchStores.has(l),
          k = e.router.getMatch(l);
        (k._nonReactive.loaderPromise = _r()),
          C !== k.preload && e.updateMatch(l, (q) => ({ ...q, preload: C })),
          await o(w, x, _, k, g);
      }
    }
    const p = e.router.getMatch(l);
    h ||
      (p._nonReactive.loaderPromise?.resolve(),
      p._nonReactive.loadPromise?.resolve(),
      (p._nonReactive.loadPromise = void 0)),
      clearTimeout(p._nonReactive.pendingTimeout),
      (p._nonReactive.pendingTimeout = void 0),
      h || (p._nonReactive.loaderPromise = void 0),
      (p._nonReactive.dehydrated = void 0);
    const b = h ? p.isFetching : !1;
    return b !== p.isFetching || p.invalid !== !1
      ? (e.updateMatch(l, (x) => ({ ...x, isFetching: b, invalid: !1 })),
        e.router.getMatch(l))
      : p;
  };
async function Pg(e) {
  const a = e,
    s = [];
  Vx(a.router) && Vf(a);
  let o;
  for (let b = 0; b < a.matches.length; b++) {
    try {
      const x = Ix(a, b);
      ki(x) && (await x);
    } catch (x) {
      if (Ge(x)) throw x;
      if (ye(x)) o = x;
      else if (!a.preload) throw x;
      break;
    }
    if (a.serialError || a.firstBadMatchIndex != null) break;
  }
  const l = a.firstBadMatchIndex ?? a.matches.length,
    c = o && !a.preload ? kg(a, o) : void 0,
    d = o && a.preload ? 0 : c !== void 0 ? Math.min(c + 1, l) : l;
  let h, g;
  for (let b = 0; b < d; b++) s.push(Xx(a, s, b));
  try {
    await Promise.all(s);
  } catch {
    const b = await Promise.allSettled(s);
    for (const x of b) {
      if (x.status !== "rejected") continue;
      const R = x.reason;
      if (Ge(R)) throw R;
      ye(R) ? (h ??= R) : (g ??= R);
    }
    if (g !== void 0) throw g;
  }
  const m = h ?? (o && !a.preload ? o : void 0);
  let v =
    a.firstBadMatchIndex !== void 0
      ? a.firstBadMatchIndex
      : a.matches.length - 1;
  if (!m && o && a.preload) return a.matches;
  if (m) {
    const b = kg(a, m);
    b === void 0 && Qe();
    const x = a.matches[b],
      R = a.router.looseRoutesById[x.routeId],
      _ = a.router.options?.defaultNotFoundComponent;
    !R.options.notFoundComponent && _ && (R.options.notFoundComponent = _),
      (m.routeId = x.routeId);
    const w = x.routeId === a.router.routeTree.id;
    a.updateMatch(x.id, (C) => ({
      ...C,
      ...(w
        ? { status: "success", globalNotFound: !0, error: void 0 }
        : { status: "notFound", error: m }),
      isFetching: !1,
    })),
      (v = b),
      await qi(R, ["notFoundComponent"]);
  } else if (!a.preload) {
    const b = a.matches[0];
    b.globalNotFound ||
      (a.router.getMatch(b.id)?.globalNotFound &&
        a.updateMatch(b.id, (x) => ({
          ...x,
          globalNotFound: !1,
          error: void 0,
        })));
  }
  if (a.serialError && a.firstBadMatchIndex !== void 0) {
    const b = a.router.looseRoutesById[a.matches[a.firstBadMatchIndex].routeId];
    await qi(b, ["errorComponent"]);
  }
  for (let b = 0; b <= v; b++) {
    const { id: x, routeId: R } = a.matches[b],
      _ = a.router.looseRoutesById[R];
    try {
      const w = Fx(a, x, _);
      if (w) {
        const C = await w;
        a.updateMatch(x, (k) => ({ ...k, ...C }));
      }
    } catch (w) {
      console.error(`Error executing head for route ${R}:`, w);
    }
  }
  const p = Vf(a);
  if ((ki(p) && (await p), m)) throw m;
  if (a.serialError && !a.preload && !a.onReady) throw a.serialError;
  return a.matches;
}
function Yg(e, a) {
  const s = a.map((o) => e.options[o]?.preload?.()).filter(Boolean);
  if (s.length !== 0) return Promise.all(s);
}
function qi(e, a = El) {
  !e._lazyLoaded &&
    e._lazyPromise === void 0 &&
    (e.lazyFn
      ? (e._lazyPromise = e.lazyFn().then((o) => {
          const { id: l, ...c } = o.options;
          Object.assign(e.options, c),
            (e._lazyLoaded = !0),
            (e._lazyPromise = void 0);
        }))
      : (e._lazyLoaded = !0));
  const s = () =>
    e._componentsLoaded
      ? void 0
      : a === El
      ? (() => {
          if (e._componentsPromise === void 0) {
            const o = Yg(e, El);
            o
              ? (e._componentsPromise = o.then(() => {
                  (e._componentsLoaded = !0), (e._componentsPromise = void 0);
                }))
              : (e._componentsLoaded = !0);
          }
          return e._componentsPromise;
        })()
      : Yg(e, a);
  return e._lazyPromise ? e._lazyPromise.then(s) : s();
}
function mv(e) {
  for (const a of El) if (e.options[a]?.preload) return !0;
  return !1;
}
var El = [
    "component",
    "errorComponent",
    "pendingComponent",
    "notFoundComponent",
  ],
  Va = "__TSR_index",
  Vg = "popstate",
  Gg = "beforeunload";
function Kx(e) {
  let a = e.getLocation();
  const s = new Set(),
    o = (d) => {
      (a = e.getLocation()), s.forEach((h) => h({ location: a, action: d }));
    },
    l = (d) => {
      e.notifyOnIndexChange ?? !0 ? o(d) : (a = e.getLocation());
    },
    c = async ({ task: d, navigateOpts: h, ...g }) => {
      if (h?.ignoreBlocker ?? !1) {
        d();
        return;
      }
      const m = e.getBlockers?.() ?? [],
        v = g.type === "PUSH" || g.type === "REPLACE";
      if (typeof document < "u" && m.length && v)
        for (const p of m) {
          const b = Nl(g.path, g.state);
          if (
            await p.blockerFn({
              currentLocation: a,
              nextLocation: b,
              action: g.type,
            })
          ) {
            e.onBlocked?.();
            return;
          }
        }
      d();
    };
  return {
    get location() {
      return a;
    },
    get length() {
      return e.getLength();
    },
    subscribers: s,
    subscribe: (d) => (
      s.add(d),
      () => {
        s.delete(d);
      }
    ),
    push: (d, h, g) => {
      const m = a.state[Va];
      (h = Qg(m + 1, h)),
        c({
          task: () => {
            e.pushState(d, h), o({ type: "PUSH" });
          },
          navigateOpts: g,
          type: "PUSH",
          path: d,
          state: h,
        });
    },
    replace: (d, h, g) => {
      const m = a.state[Va];
      (h = Qg(m, h)),
        c({
          task: () => {
            e.replaceState(d, h), o({ type: "REPLACE" });
          },
          navigateOpts: g,
          type: "REPLACE",
          path: d,
          state: h,
        });
    },
    go: (d, h) => {
      c({
        task: () => {
          e.go(d), l({ type: "GO", index: d });
        },
        navigateOpts: h,
        type: "GO",
      });
    },
    back: (d) => {
      c({
        task: () => {
          e.back(d?.ignoreBlocker ?? !1), l({ type: "BACK" });
        },
        navigateOpts: d,
        type: "BACK",
      });
    },
    forward: (d) => {
      c({
        task: () => {
          e.forward(d?.ignoreBlocker ?? !1), l({ type: "FORWARD" });
        },
        navigateOpts: d,
        type: "FORWARD",
      });
    },
    canGoBack: () => a.state[Va] !== 0,
    createHref: (d) => e.createHref(d),
    block: (d) => {
      if (!e.setBlockers) return () => {};
      const h = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...h, d]),
        () => {
          const g = e.getBlockers?.() ?? [];
          e.setBlockers?.(g.filter((m) => m !== d));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: o,
  };
}
function Qg(e, a) {
  a || (a = {});
  const s = ld();
  return { ...a, key: s, __TSR_key: s, [Va]: e };
}
function Zx(e) {
  const a = typeof document < "u" ? window : void 0,
    s = a.history.pushState,
    o = a.history.replaceState;
  let l = [];
  const c = () => l,
    d = (U) => (l = U),
    h = (U) => U,
    g = () =>
      Nl(
        `${a.location.pathname}${a.location.search}${a.location.hash}`,
        a.history.state
      );
  if (!a.history.state?.__TSR_key && !a.history.state?.key) {
    const U = ld();
    a.history.replaceState({ [Va]: 0, key: U, __TSR_key: U }, "");
  }
  let m = g(),
    v,
    p = !1,
    b = !1,
    x = !1,
    R = !1;
  const _ = () => m;
  let w, C;
  const k = () => {
      w &&
        ((Y._ignoreSubscribers = !0),
        (w.isPush ? a.history.pushState : a.history.replaceState)(
          w.state,
          "",
          w.href
        ),
        (Y._ignoreSubscribers = !1),
        (w = void 0),
        (C = void 0),
        (v = void 0));
    },
    q = (U, $, it) => {
      const at = h($);
      C || (v = m),
        (m = Nl($, it)),
        (w = { href: at, state: it, isPush: w?.isPush || U === "push" }),
        C || (C = Promise.resolve().then(() => k()));
    },
    j = (U) => {
      (m = g()), Y.notify({ type: U });
    },
    K = async () => {
      if (b) {
        b = !1;
        return;
      }
      const U = g(),
        $ = U.state[Va] - m.state[Va],
        it = $ === 1,
        at = $ === -1,
        mt = (!it && !at) || p;
      p = !1;
      const bt = mt ? "GO" : at ? "BACK" : "FORWARD",
        jt = mt ? { type: "GO", index: $ } : { type: at ? "BACK" : "FORWARD" };
      if (x) x = !1;
      else {
        const _t = c();
        if (typeof document < "u" && _t.length) {
          for (const L of _t)
            if (
              await L.blockerFn({
                currentLocation: m,
                nextLocation: U,
                action: bt,
              })
            ) {
              (b = !0), a.history.go(1), Y.notify(jt);
              return;
            }
        }
      }
      (m = g()), Y.notify(jt);
    },
    J = (U) => {
      if (R) {
        R = !1;
        return;
      }
      let $ = !1;
      const it = c();
      if (typeof document < "u" && it.length)
        for (const at of it) {
          const mt = at.enableBeforeUnload ?? !0;
          if (mt === !0) {
            $ = !0;
            break;
          }
          if (typeof mt == "function" && mt() === !0) {
            $ = !0;
            break;
          }
        }
      if ($) return U.preventDefault(), (U.returnValue = "");
    },
    Y = Kx({
      getLocation: _,
      getLength: () => a.history.length,
      pushState: (U, $) => q("push", U, $),
      replaceState: (U, $) => q("replace", U, $),
      back: (U) => (U && (x = !0), (R = !0), a.history.back()),
      forward: (U) => {
        U && (x = !0), (R = !0), a.history.forward();
      },
      go: (U) => {
        (p = !0), a.history.go(U);
      },
      createHref: (U) => h(U),
      flush: k,
      destroy: () => {
        (a.history.pushState = s),
          (a.history.replaceState = o),
          a.removeEventListener(Gg, J, { capture: !0 }),
          a.removeEventListener(Vg, K);
      },
      onBlocked: () => {
        v && m !== v && (m = v);
      },
      getBlockers: c,
      setBlockers: d,
      notifyOnIndexChange: !1,
    });
  return (
    a.addEventListener(Gg, J, { capture: !0 }),
    a.addEventListener(Vg, K),
    (a.history.pushState = function (...U) {
      const $ = s.apply(a.history, U);
      return Y._ignoreSubscribers || j("PUSH"), $;
    }),
    (a.history.replaceState = function (...U) {
      const $ = o.apply(a.history, U);
      return Y._ignoreSubscribers || j("REPLACE"), $;
    }),
    Y
  );
}
function Jx(e) {
  let a = e.replace(/[\x00-\x1f\x7f]/g, "");
  return a.startsWith("//") && (a = "/" + a.replace(/^\/+/, "")), a;
}
function Nl(e, a) {
  const s = Jx(e),
    o = s.indexOf("#"),
    l = s.indexOf("?"),
    c = ld();
  return {
    href: s,
    pathname: s.substring(
      0,
      o > 0 ? (l > 0 ? Math.min(o, l) : o) : l > 0 ? l : s.length
    ),
    hash: o > -1 ? s.substring(o) : "",
    search: l > -1 ? s.slice(l, o === -1 ? void 0 : o) : "",
    state: a || { [Va]: 0, key: c, __TSR_key: c },
  };
}
function ld() {
  return (Math.random() + 1).toString(36).substring(7);
}
function $x(e) {
  return e instanceof Error
    ? { name: e.name, message: e.message }
    : { data: e };
}
function As(e, a) {
  const s = a,
    o = e;
  return {
    fromLocation: s,
    toLocation: o,
    pathChanged: s?.pathname !== o.pathname,
    hrefChanged: s?.href !== o.href,
    hashChanged: s?.hash !== o.hash,
  };
}
var Wx = class {
    constructor(e, a) {
      (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this.resetNextScroll = !0),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.isScrollRestoring = !1),
        (this.isScrollRestorationSetup = !1),
        (this.startTransition = (s) => s()),
        (this.update = (s) => {
          const o = this.options,
            l = this.basepath ?? o?.basepath ?? "/",
            c = this.basepath === void 0,
            d = o?.rewrite;
          if (
            ((this.options = { ...o, ...s }),
            (this.isServer = this.options.isServer ?? typeof document > "u"),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = Cx(
                this.options.pathParamsAllowedCharacters
              )),
            (!this.history ||
              (this.options.history &&
                this.options.history !== this.history)) &&
              (this.options.history
                ? (this.history = this.options.history)
                : (this.history = Zx())),
            (this.origin = this.options.origin),
            this.origin ||
              (window?.origin && window.origin !== "null"
                ? (this.origin = window.origin)
                : (this.origin = "http://localhost")),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let v;
            (this.resolvePathCache = Hi(1e3)),
              (v = this.buildRouteTree()),
              this.setRoutes(v);
          }
          if (!this.stores && this.latestLocation) {
            const v = this.getStoreConfig(this);
            (this.batch = v.batch),
              (this.stores = Yx(ew(this.latestLocation), v)),
              zx(this);
          }
          let h = !1;
          const g = this.options.basepath ?? "/",
            m = this.options.rewrite;
          if (c || l !== g || d !== m) {
            this.basepath = g;
            const v = [],
              p = ov(g);
            p && p !== "/" && v.push(Px({ basepath: g })),
              m && v.push(m),
              (this.rewrite =
                v.length === 0 ? void 0 : v.length === 1 ? v[0] : qx(v)),
              this.history && this.updateLatestLocation(),
              (h = !0);
          }
          h && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < "u" &&
              "CSS" in window &&
              typeof window.CSS?.supports == "function" &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                "selector(:active-view-transition-type(a)"
              ));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(
            this.history.location,
            this.latestLocation
          );
        }),
        (this.buildRouteTree = () => {
          const s = Sx(this.routeTree, this.options.caseSensitive, (o, l) => {
            o.init({ originalIndex: l });
          });
          return (
            this.options.routeMasks &&
              px(this.options.routeMasks, s.processedTree),
            s
          );
        }),
        (this.subscribe = (s, o) => {
          const l = { eventType: s, fn: o };
          return (
            this.subscribers.add(l),
            () => {
              this.subscribers.delete(l);
            }
          );
        }),
        (this.emit = (s) => {
          this.subscribers.forEach((o) => {
            o.eventType === s.type && o.fn(s);
          });
        }),
        (this.parseLocation = (s, o) => {
          const l = ({
              pathname: g,
              search: m,
              hash: v,
              href: p,
              state: b,
            }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(g)) {
                const C = this.options.parseSearch(m),
                  k = this.options.stringifySearch(C);
                return {
                  href: g + k + v,
                  publicHref: g + k + v,
                  pathname: Oi(g).path,
                  external: !1,
                  searchStr: k,
                  search: vr(o?.search, C),
                  hash: Oi(v.slice(1)).path,
                  state: Ha(o?.state, b),
                };
              }
              const x = new URL(p, this.origin),
                R = Yf(this.rewrite, x),
                _ = this.options.parseSearch(R.search),
                w = this.options.stringifySearch(_);
              return (
                (R.search = w),
                {
                  href: R.href.replace(R.origin, ""),
                  publicHref: p,
                  pathname: Oi(R.pathname).path,
                  external: !!this.rewrite && R.origin !== this.origin,
                  searchStr: w,
                  search: vr(o?.search, _),
                  hash: Oi(R.hash.slice(1)).path,
                  state: Ha(o?.state, b),
                }
              );
            },
            c = l(s),
            { __tempLocation: d, __tempKey: h } = c.state;
          if (d && (!h || h === this.tempLocationKey)) {
            const g = l(d);
            return (
              (g.state.key = c.state.key),
              (g.state.__TSR_key = c.state.__TSR_key),
              delete g.state.__tempLocation,
              { ...g, maskedLocation: c }
            );
          }
          return c;
        }),
        (this.resolvePathWithBase = (s, o) =>
          Tx({
            base: s,
            to: od(o),
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (s, o, l) =>
          typeof s == "string"
            ? this.matchRoutesInternal({ pathname: s, search: o }, l)
            : this.matchRoutesInternal(s, o)),
        (this.getMatchedRoutes = (s) =>
          nw({
            pathname: s,
            routesById: this.routesById,
            processedTree: this.processedTree,
          })),
        (this.cancelMatch = (s) => {
          const o = this.getMatch(s);
          o &&
            (o.abortController.abort(),
            clearTimeout(o._nonReactive.pendingTimeout),
            (o._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          this.stores.pendingIds.get().forEach((s) => {
            this.cancelMatch(s);
          }),
            this.stores.matchesId.get().forEach((s) => {
              if (this.stores.pendingMatchStores.has(s)) return;
              const o = this.stores.matchStores.get(s)?.get();
              o &&
                (o.status === "pending" || o.isFetching === "loader") &&
                this.cancelMatch(s);
            });
        }),
        (this.buildLocation = (s) => {
          const o = (c = {}) => {
              const d =
                  c._fromLocation ||
                  this.pendingBuiltLocation ||
                  this.latestLocation,
                h = this.matchRoutesLightweight(d);
              c.from;
              const g =
                  c.unsafeRelative === "path"
                    ? d.pathname
                    : c.from ?? h.fullPath,
                m = this.resolvePathWithBase(g, "."),
                v = h.search,
                p = Object.assign(Object.create(null), h.params),
                b = c.to
                  ? this.resolvePathWithBase(m, `${c.to}`)
                  : this.resolvePathWithBase(m, "."),
                x =
                  c.params === !1 || c.params === null
                    ? Object.create(null)
                    : (c.params ?? !0) === !0
                    ? p
                    : Object.assign(p, ka(c.params, p)),
                R = this.getMatchedRoutes(b);
              let _ = R.matchedRoutes;
              if (
                ((!R.foundRoute ||
                  (R.foundRoute.path !== "/" && R.routeParams["**"])) &&
                  this.options.notFoundRoute &&
                  (_ = [..._, this.options.notFoundRoute]),
                Object.keys(x).length > 0)
              )
                for (const it of _) {
                  const at =
                    it.options.params?.stringify ?? it.options.stringifyParams;
                  if (at)
                    try {
                      Object.assign(x, at(x));
                    } catch {}
                }
              const w = s.leaveParams
                ? b
                : Oi(
                    jg({
                      path: b,
                      params: x,
                      decoder: this.pathParamsDecoder,
                      server: this.isServer,
                    }).interpolatedPath
                  ).path;
              let C = v;
              if (s._includeValidateSearch && this.options.search?.strict) {
                const it = {};
                _.forEach((at) => {
                  if (at.options.validateSearch)
                    try {
                      Object.assign(
                        it,
                        _l(at.options.validateSearch, { ...it, ...C })
                      );
                    } catch {}
                }),
                  (C = it);
              }
              (C = aw({
                search: C,
                dest: c,
                destRoutes: _,
                _includeValidateSearch: s._includeValidateSearch,
              })),
                (C = vr(v, C));
              const k = this.options.stringifySearch(C),
                q =
                  c.hash === !0 ? d.hash : c.hash ? ka(c.hash, d.hash) : void 0,
                j = q ? `#${q}` : "";
              let K =
                c.state === !0 ? d.state : c.state ? ka(c.state, d.state) : {};
              K = Ha(d.state, K);
              const J = `${w}${k}${j}`;
              let Y,
                U,
                $ = !1;
              if (this.rewrite) {
                const it = new URL(J, this.origin),
                  at = cv(this.rewrite, it);
                (Y = it.href.replace(it.origin, "")),
                  at.origin !== this.origin
                    ? ((U = at.href), ($ = !0))
                    : (U = at.pathname + at.search + at.hash);
              } else (Y = dx(J)), (U = Y);
              return {
                publicHref: U,
                href: Y,
                pathname: w,
                search: C,
                searchStr: k,
                state: K,
                hash: q ?? "",
                external: $,
                unmaskOnReload: c.unmaskOnReload,
              };
            },
            l = (c = {}, d) => {
              const h = o(c);
              let g = d ? o(d) : void 0;
              if (!g) {
                const m = Object.create(null);
                if (this.options.routeMasks) {
                  const v = gx(h.pathname, this.processedTree);
                  if (v) {
                    Object.assign(m, v.rawParams);
                    const { from: p, params: b, ...x } = v.route,
                      R =
                        b === !1 || b === null
                          ? Object.create(null)
                          : (b ?? !0) === !0
                          ? m
                          : Object.assign(m, ka(b, m));
                    (d = { from: s.from, ...x, params: R }), (g = o(d));
                  }
                }
              }
              return g && (h.maskedLocation = g), h;
            };
          return s.mask ? l(s, { from: s.from, ...s.mask }) : l(s);
        }),
        (this.commitLocation = async ({
          viewTransition: s,
          ignoreBlocker: o,
          ...l
        }) => {
          const c = () => {
              const g = [
                "key",
                "__TSR_key",
                "__TSR_index",
                "__hashScrollIntoViewOptions",
              ];
              g.forEach((v) => {
                l.state[v] = this.latestLocation.state[v];
              });
              const m = Ve(l.state, this.latestLocation.state);
              return (
                g.forEach((v) => {
                  delete l.state[v];
                }),
                m
              );
            },
            d = Ya(this.latestLocation.href) === Ya(l.href);
          let h = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = _r(() => {
              h?.resolve(), (h = void 0);
            })),
            d && c())
          )
            this.load();
          else {
            let { maskedLocation: g, hashScrollIntoView: m, ...v } = l;
            g &&
              ((v = {
                ...g,
                state: {
                  ...g.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...v,
                    search: v.searchStr,
                    state: {
                      ...v.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (v.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (v.state.__tempKey = this.tempLocationKey)),
              (v.state.__hashScrollIntoViewOptions =
                m ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = s),
              this.history[l.replace ? "replace" : "push"](
                v.publicHref,
                v.state,
                { ignoreBlocker: o }
              );
          }
          return (
            (this.resetNextScroll = l.resetScroll ?? !0),
            this.history.subscribers.size || this.load(),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: s,
          resetScroll: o,
          hashScrollIntoView: l,
          viewTransition: c,
          ignoreBlocker: d,
          href: h,
          ...g
        } = {}) => {
          if (h) {
            const p = this.history.location.state.__TSR_index,
              b = Nl(h, { __TSR_index: s ? p : p + 1 }),
              x = new URL(b.pathname, this.origin);
            (g.to = Yf(this.rewrite, x).pathname),
              (g.search = this.options.parseSearch(b.search)),
              (g.hash = b.hash.slice(1));
          }
          const m = this.buildLocation({ ...g, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = m;
          const v = this.commitLocation({
            ...m,
            viewTransition: c,
            replace: s,
            resetScroll: o,
            hashScrollIntoView: l,
            ignoreBlocker: d,
          });
          return (
            Promise.resolve().then(() => {
              this.pendingBuiltLocation === m &&
                (this.pendingBuiltLocation = void 0);
            }),
            v
          );
        }),
        (this.navigate = async ({
          to: s,
          reloadDocument: o,
          href: l,
          publicHref: c,
          ...d
        }) => {
          let h = !1;
          if (l)
            try {
              new URL(`${l}`), (h = !0);
            } catch {}
          if ((h && !o && (o = !0), o)) {
            if (s !== void 0 || !l) {
              const m = this.buildLocation({ to: s, ...d });
              (l = l ?? m.publicHref), (c = c ?? m.publicHref);
            }
            const g = !h && c ? c : l;
            if (Ol(g, this.protocolAllowlist)) return Promise.resolve();
            if (!d.ignoreBlocker) {
              const m = this.history.getBlockers?.() ?? [];
              for (const v of m)
                if (
                  v?.blockerFn &&
                  (await v.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: "PUSH",
                  }))
                )
                  return Promise.resolve();
            }
            return (
              d.replace
                ? window.location.replace(g)
                : (window.location.href = g),
              Promise.resolve()
            );
          }
          return this.buildAndCommitLocation({
            ...d,
            href: l,
            to: s,
            _isNavigate: !0,
          });
        }),
        (this.beforeLoad = () => {
          this.cancelMatches(), this.updateLatestLocation();
          const s = this.matchRoutes(this.latestLocation),
            o = this.stores.cachedMatches
              .get()
              .filter((l) => !s.some((c) => c.id === l.id));
          this.batch(() => {
            this.stores.status.set("pending"),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(s),
              this.stores.setCached(o);
          });
        }),
        (this.load = async (s) => {
          let o, l, c;
          const d =
            this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            c = new Promise((g) => {
              this.startTransition(async () => {
                try {
                  this.beforeLoad();
                  const m = this.latestLocation,
                    v = As(m, this.stores.resolvedLocation.get());
                  this.stores.redirect.get() ||
                    this.emit({ type: "onBeforeNavigate", ...v }),
                    this.emit({ type: "onBeforeLoad", ...v }),
                    await Pg({
                      router: this,
                      sync: s?.sync,
                      forceStaleReload: d.href === m.href,
                      matches: this.stores.pendingMatches.get(),
                      location: m,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let p = null,
                              b = null,
                              x = null,
                              R = null;
                            this.batch(() => {
                              const _ = this.stores.pendingMatches.get(),
                                w = _.length,
                                C = this.stores.matches.get();
                              p = w
                                ? C.filter(
                                    (j) =>
                                      !this.stores.pendingMatchStores.has(j.id)
                                  )
                                : null;
                              const k = new Set();
                              for (const j of this.stores.pendingMatchStores.values())
                                j.routeId && k.add(j.routeId);
                              const q = new Set();
                              for (const j of this.stores.matchStores.values())
                                j.routeId && q.add(j.routeId);
                              (b = w
                                ? C.filter((j) => !k.has(j.routeId))
                                : null),
                                (x = w
                                  ? _.filter((j) => !q.has(j.routeId))
                                  : null),
                                (R = w ? _.filter((j) => q.has(j.routeId)) : C),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                w &&
                                  (this.stores.setMatches(_),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ...p.filter(
                                      (j) =>
                                        j.status !== "error" &&
                                        j.status !== "notFound" &&
                                        j.status !== "redirected"
                                    ),
                                  ]),
                                  this.clearExpiredCache());
                            });
                            for (const [_, w] of [
                              [b, "onLeave"],
                              [x, "onEnter"],
                              [R, "onStay"],
                            ])
                              if (_)
                                for (const C of _)
                                  this.looseRoutesById[C.routeId].options[w]?.(
                                    C
                                  );
                          });
                        });
                      },
                    });
                } catch (m) {
                  Ge(m)
                    ? ((o = m),
                      this.navigate({
                        ...o.options,
                        replace: !0,
                        ignoreBlocker: !0,
                      }))
                    : ye(m) && (l = m);
                  const v = o
                    ? o.status
                    : l
                    ? 404
                    : this.stores.matches
                        .get()
                        .some((p) => p.status === "error")
                    ? 500
                    : 200;
                  this.batch(() => {
                    this.stores.statusCode.set(v), this.stores.redirect.set(o);
                  });
                }
                this.latestLoadPromise === c &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  g();
              });
            }),
              this.latestLoadPromise = c,
              await c;
            this.latestLoadPromise && c !== this.latestLoadPromise;

          )
            await this.latestLoadPromise;
          let h;
          this.hasNotFoundMatch()
            ? (h = 404)
            : this.stores.matches.get().some((g) => g.status === "error") &&
              (h = 500),
            h !== void 0 && this.stores.statusCode.set(h);
        }),
        (this.startViewTransition = (s) => {
          const o =
            this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            o &&
              typeof document < "u" &&
              "startViewTransition" in document &&
              typeof document.startViewTransition == "function")
          ) {
            let l;
            if (typeof o == "object" && this.isViewTransitionTypesSupported) {
              const c = this.latestLocation,
                d = this.stores.resolvedLocation.get(),
                h = typeof o.types == "function" ? o.types(As(c, d)) : o.types;
              if (h === !1) {
                s();
                return;
              }
              l = { update: s, types: h };
            } else l = s;
            document.startViewTransition(l);
          } else s();
        }),
        (this.updateMatch = (s, o) => {
          this.startTransition(() => {
            const l = this.stores.pendingMatchStores.get(s);
            if (l) {
              l.set(o);
              return;
            }
            const c = this.stores.matchStores.get(s);
            if (c) {
              c.set(o);
              return;
            }
            const d = this.stores.cachedMatchStores.get(s);
            if (d) {
              const h = o(d.get());
              h.status === "redirected"
                ? this.stores.cachedMatchStores.delete(s) &&
                  this.stores.cachedIds.set((g) => g.filter((m) => m !== s))
                : d.set(h);
            }
          });
        }),
        (this.getMatch = (s) =>
          this.stores.cachedMatchStores.get(s)?.get() ??
          this.stores.pendingMatchStores.get(s)?.get() ??
          this.stores.matchStores.get(s)?.get()),
        (this.invalidate = (s) => {
          const o = (l) =>
            s?.filter?.(l) ?? !0
              ? {
                  ...l,
                  invalid: !0,
                  ...(s?.forcePending ||
                  l.status === "error" ||
                  l.status === "notFound"
                    ? { status: "pending", error: void 0 }
                    : void 0),
                }
              : l;
          return (
            this.batch(() => {
              this.stores.setMatches(this.stores.matches.get().map(o)),
                this.stores.setCached(this.stores.cachedMatches.get().map(o)),
                this.stores.setPending(this.stores.pendingMatches.get().map(o));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: s?.sync })
          );
        }),
        (this.getParsedLocationHref = (s) => s.publicHref || "/"),
        (this.resolveRedirect = (s) => {
          const o = s.headers.get("Location");
          if (!s.options.href || s.options._builtLocation) {
            const l = s.options._builtLocation ?? this.buildLocation(s.options),
              c = this.getParsedLocationHref(l);
            (s.options.href = c), s.headers.set("Location", c);
          } else if (o)
            try {
              const l = new URL(o);
              if (this.origin && l.origin === this.origin) {
                const c = l.pathname + l.search + l.hash;
                (s.options.href = c), s.headers.set("Location", c);
              }
            } catch {}
          if (
            s.options.href &&
            !s.options._builtLocation &&
            Ol(s.options.href, this.protocolAllowlist)
          )
            throw new Error("Redirect blocked: unsafe protocol");
          return (
            s.headers.get("Location") ||
              s.headers.set("Location", s.options.href),
            s
          );
        }),
        (this.clearCache = (s) => {
          const o = s?.filter;
          o !== void 0
            ? this.stores.setCached(
                this.stores.cachedMatches.get().filter((l) => !o(l))
              )
            : this.stores.setCached([]);
        }),
        (this.clearExpiredCache = () => {
          const s = Date.now(),
            o = (l) => {
              const c = this.looseRoutesById[l.routeId];
              if (!c.options.loader) return !0;
              const d =
                (l.preload
                  ? c.options.preloadGcTime ?? this.options.defaultPreloadGcTime
                  : c.options.gcTime ?? this.options.defaultGcTime) ??
                300 * 1e3;
              return l.status === "error" ? !0 : s - l.updatedAt >= d;
            };
          this.clearCache({ filter: o });
        }),
        (this.loadRouteChunk = qi),
        (this.preloadRoute = async (s) => {
          const o = s._builtLocation ?? this.buildLocation(s);
          let l = this.matchRoutes(o, {
            throwOnError: !0,
            preload: !0,
            dest: s,
          });
          const c = new Set([
              ...this.stores.matchesId.get(),
              ...this.stores.pendingIds.get(),
            ]),
            d = new Set([...c, ...this.stores.cachedIds.get()]),
            h = l.filter((g) => !d.has(g.id));
          if (h.length) {
            const g = this.stores.cachedMatches.get();
            this.stores.setCached([...g, ...h]);
          }
          try {
            return (
              (l = await Pg({
                router: this,
                matches: l,
                location: o,
                preload: !0,
                updateMatch: (g, m) => {
                  c.has(g)
                    ? (l = l.map((v) => (v.id === g ? m(v) : v)))
                    : this.updateMatch(g, m);
                },
              })),
              l
            );
          } catch (g) {
            if (Ge(g))
              return g.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...g.options, _fromLocation: o });
            ye(g) || console.error(g);
            return;
          }
        }),
        (this.matchRoute = (s, o) => {
          const l = {
              ...s,
              to: s.to ? this.resolvePathWithBase(s.from || "", s.to) : void 0,
              params: s.params || {},
              leaveParams: !0,
            },
            c = this.buildLocation(l);
          if (o?.pending && this.stores.status.get() !== "pending") return !1;
          const d = (
              o?.pending === void 0 ? !this.stores.isLoading.get() : o.pending
            )
              ? this.latestLocation
              : this.stores.resolvedLocation.get() ||
                this.stores.location.get(),
            h = yx(
              c.pathname,
              o?.caseSensitive ?? !1,
              o?.fuzzy ?? !1,
              d.pathname,
              this.processedTree
            );
          return !h || (s.params && !Ve(h.rawParams, s.params, { partial: !0 }))
            ? !1
            : o?.includeSearch ?? !0
            ? Ve(d.search, c.search, { partial: !0 })
              ? h.rawParams
              : !1
            : h.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches
            .get()
            .some((s) => s.status === "notFound" || s.globalNotFound)),
        (this.getStoreConfig = a),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...e,
          caseSensitive: e.caseSensitive ?? !1,
          notFoundMode: e.notFoundMode ?? "fuzzy",
          stringifySearch: e.stringifySearch ?? Ux,
          parseSearch: e.parseSearch ?? Lx,
          protocolAllowlist: e.protocolAllowlist ?? lx,
        }),
        typeof document < "u" && (self.__TSR_ROUTER__ = this);
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: e, routesByPath: a, processedTree: s }) {
      (this.routesById = e), (this.routesByPath = a), (this.processedTree = s);
      const o = this.options.notFoundRoute;
      o &&
        (o.init({ originalIndex: 99999999999 }), (this.routesById[o.id] = o));
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(e) {
      return e?.id
        ? e.context ?? this.options.context ?? void 0
        : this.options.context ?? void 0;
    }
    matchRoutesInternal(e, a) {
      const s = this.getMatchedRoutes(e.pathname),
        { foundRoute: o, routeParams: l, parsedParams: c } = s;
      let { matchedRoutes: d } = s,
        h = !1;
      (o ? o.path !== "/" && l["**"] : Ya(e.pathname)) &&
        (this.options.notFoundRoute
          ? (d = [...d, this.options.notFoundRoute])
          : (h = !0));
      const g = h ? sw(this.options.notFoundMode, d) : void 0,
        m = new Array(d.length),
        v = new Map();
      for (const p of this.stores.matchStores.values())
        p.routeId && v.set(p.routeId, p.get());
      for (let p = 0; p < d.length; p++) {
        const b = d[p],
          x = m[p - 1];
        let R, _, w;
        {
          const bt = x?.search ?? e.search,
            jt = x?._strictSearch ?? void 0;
          try {
            const _t = _l(b.options.validateSearch, { ...bt }) ?? void 0;
            (R = { ...bt, ..._t }), (_ = { ...jt, ..._t }), (w = void 0);
          } catch (_t) {
            let L = _t;
            if (
              (_t instanceof Dl || (L = new Dl(_t.message, { cause: _t })),
              a?.throwOnError)
            )
              throw L;
            (R = bt), (_ = {}), (w = L);
          }
        }
        const C = b.options.loaderDeps?.({ search: R }) ?? "",
          k = C ? JSON.stringify(C) : "",
          { interpolatedPath: q, usedParams: j } = jg({
            path: b.fullPath,
            params: l,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          K = b.id + q + k,
          J = this.getMatch(K),
          Y = v.get(b.id),
          U = J?._strictParams ?? j;
        let $;
        if (!J)
          try {
            Ig(b, j, c, U);
          } catch (bt) {
            if (
              (ye(bt) || Ge(bt)
                ? ($ = bt)
                : ($ = new tw(bt.message, { cause: bt })),
              a?.throwOnError)
            )
              throw $;
          }
        Object.assign(l, U);
        const it = Y ? "stay" : "enter";
        let at;
        if (J)
          at = {
            ...J,
            cause: it,
            params: Y?.params ?? l,
            _strictParams: U,
            search: vr(Y ? Y.search : J.search, R),
            _strictSearch: _,
          };
        else {
          const bt =
            b.options.loader || b.options.beforeLoad || b.lazyFn || mv(b)
              ? "pending"
              : "success";
          at = {
            id: K,
            ssr: b.options.ssr,
            index: p,
            routeId: b.id,
            params: Y?.params ?? l,
            _strictParams: U,
            pathname: q,
            updatedAt: Date.now(),
            search: Y ? vr(Y.search, R) : R,
            _strictSearch: _,
            searchError: void 0,
            status: bt,
            isFetching: !1,
            error: void 0,
            paramsError: $,
            __routeContext: void 0,
            _nonReactive: { loadPromise: _r() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: it,
            loaderDeps: Y ? Ha(Y.loaderDeps, C) : C,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: b.options.staticData || {},
            fullPath: b.fullPath,
          };
        }
        a?.preload || (at.globalNotFound = g === b.id), (at.searchError = w);
        const mt = this.getParentContext(x);
        (at.context = {
          ...mt,
          ...at.__routeContext,
          ...at.__beforeLoadContext,
        }),
          (m[p] = at);
      }
      for (let p = 0; p < m.length; p++) {
        const b = m[p],
          x = this.looseRoutesById[b.routeId],
          R = this.getMatch(b.id),
          _ = v.get(b.routeId);
        if (((b.params = _ ? vr(_.params, l) : l), !R)) {
          const w = m[p - 1],
            C = this.getParentContext(w);
          if (x.options.context) {
            const k = {
              deps: b.loaderDeps,
              params: b.params,
              context: C ?? {},
              location: e,
              navigate: (q) => this.navigate({ ...q, _fromLocation: e }),
              buildLocation: this.buildLocation,
              cause: b.cause,
              abortController: b.abortController,
              preload: !!b.preload,
              matches: m,
              routeId: x.id,
            };
            b.__routeContext = x.options.context(k) ?? void 0;
          }
          b.context = { ...C, ...b.__routeContext, ...b.__beforeLoadContext };
        }
      }
      return m;
    }
    matchRoutesLightweight(e) {
      const {
          matchedRoutes: a,
          routeParams: s,
          parsedParams: o,
        } = this.getMatchedRoutes(e.pathname),
        l = Bi(a),
        c = { ...e.search };
      for (const v of a)
        try {
          Object.assign(c, _l(v.options.validateSearch, c));
        } catch {}
      const d = Bi(this.stores.matchesId.get()),
        h = d && this.stores.matchStores.get(d)?.get(),
        g = h && h.routeId === l.id && h.pathname === e.pathname;
      let m;
      if (g) m = h.params;
      else {
        const v = Object.assign(Object.create(null), s);
        for (const p of a)
          try {
            Ig(p, s, o ?? {}, v);
          } catch {}
        m = v;
      }
      return { matchedRoutes: a, fullPath: l.fullPath, search: c, params: m };
    }
  },
  Dl = class extends Error {},
  tw = class extends Error {};
function ew(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: void 0,
    location: e,
    matches: [],
    statusCode: 200,
  };
}
function _l(e, a) {
  if (e == null) return {};
  if ("~standard" in e) {
    const s = e["~standard"].validate(a);
    if (s instanceof Promise) throw new Dl("Async validation not supported");
    if (s.issues)
      throw new Dl(JSON.stringify(s.issues, void 0, 2), { cause: s });
    return s.value;
  }
  return "parse" in e ? e.parse(a) : typeof e == "function" ? e(a) : {};
}
function nw({ pathname: e, routesById: a, processedTree: s }) {
  const o = Object.create(null),
    l = Ya(e);
  let c, d;
  const h = vx(l, s, !0);
  return (
    h &&
      ((c = h.route),
      Object.assign(o, h.rawParams),
      (d = Object.assign(Object.create(null), h.parsedParams))),
    {
      matchedRoutes: h?.branch || [a.__root__],
      routeParams: o,
      foundRoute: c,
      parsedParams: d,
    }
  );
}
function aw({ search: e, dest: a, destRoutes: s, _includeValidateSearch: o }) {
  return rw(s)(e, a, o ?? !1);
}
function rw(e) {
  const a = { dest: null, _includeValidateSearch: !1, middlewares: [] };
  for (const l of e) {
    if ("search" in l.options)
      l.options.search?.middlewares &&
        a.middlewares.push(...l.options.search.middlewares);
    else if (l.options.preSearchFilters || l.options.postSearchFilters) {
      const c = ({ search: d, next: h }) => {
        let g = d;
        "preSearchFilters" in l.options &&
          l.options.preSearchFilters &&
          (g = l.options.preSearchFilters.reduce((v, p) => p(v), d));
        const m = h(g);
        return "postSearchFilters" in l.options && l.options.postSearchFilters
          ? l.options.postSearchFilters.reduce((v, p) => p(v), m)
          : m;
      };
      a.middlewares.push(c);
    }
    if (l.options.validateSearch) {
      const c = ({ search: d, next: h }) => {
        const g = h(d);
        if (!a._includeValidateSearch) return g;
        try {
          return { ...g, ...(_l(l.options.validateSearch, g) ?? void 0) };
        } catch {
          return g;
        }
      };
      a.middlewares.push(c);
    }
  }
  const s = ({ search: l }) => {
    const c = a.dest;
    return c.search ? (c.search === !0 ? l : ka(c.search, l)) : {};
  };
  a.middlewares.push(s);
  const o = (l, c, d) => {
    if (l >= d.length) return c;
    const h = d[l];
    return h({ search: c, next: (m) => o(l + 1, m, d) });
  };
  return function (c, d, h) {
    return (a.dest = d), (a._includeValidateSearch = h), o(0, c, a.middlewares);
  };
}
function sw(e, a) {
  if (e !== "root")
    for (let s = a.length - 1; s >= 0; s--) {
      const o = a[s];
      if (o.children) return o.id;
    }
  return wr;
}
function Ig(e, a, s, o) {
  const l = e.options.params?.parse ?? e.options.parseParams;
  if (l)
    if (e.options.skipRouteOnParseError)
      for (const c in a) c in s && (o[c] = s[c]);
    else {
      const c = l(o);
      Object.assign(o, c);
    }
}
var Dn = Symbol.for("TSR_DEFERRED_PROMISE");
function iw(e, a) {
  const s = e;
  return (
    s[Dn] ||
      ((s[Dn] = { status: "pending" }),
      s
        .then((o) => {
          (s[Dn].status = "success"), (s[Dn].data = o);
        })
        .catch((o) => {
          (s[Dn].status = "error"),
            (s[Dn].error = { data: $x(o), __isServerError: !0 });
        })),
    s
  );
}
var ow = "Error preloading route! ☝️";
function Fg(e, a) {
  if (e) return typeof e == "string" ? e : e[a];
}
function lw(e) {
  return typeof e == "string" ? { href: e, crossOrigin: void 0 } : e;
}
function uw(e) {
  if (e.tag !== "link") return;
  const a = e.attrs?.rel,
    s = e.attrs?.href;
  if (
    typeof s == "string" &&
    (typeof a == "string" ? a.split(/\s+/) : []).includes("stylesheet")
  )
    return s;
}
function cw(e, a) {
  const s = uw(a);
  return !!s && e?.inlineCss?.styles[s] !== void 0;
}
var pv = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (a) => {
          this.originalIndex = a.originalIndex;
          const s = this.options,
            o = !s?.path && !s?.id;
          (this.parentRoute = this.options.getParentRoute?.()),
            o ? (this._path = wr) : this.parentRoute || Qe();
          let l = o ? wr : s?.path;
          l && l !== "/" && (l = iv(l));
          const c = s?.id || l;
          let d = o
            ? wr
            : wl([
                this.parentRoute.id === "__root__" ? "" : this.parentRoute.id,
                c,
              ]);
          l === "__root__" && (l = "/"), d !== "__root__" && (d = wl(["/", d]));
          const h = d === "__root__" ? "/" : wl([this.parentRoute.fullPath, l]);
          (this._path = l),
            (this._id = d),
            (this._fullPath = h),
            (this._to = Ya(h));
        }),
        (this.addChildren = (a) => this._addFileChildren(a)),
        (this._addFileChildren = (a) => (
          Array.isArray(a) && (this.children = a),
          typeof a == "object" &&
            a !== null &&
            (this.children = Object.values(a)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (a) => (Object.assign(this.options, a), this)),
        (this.update = (a) => (Object.assign(this.options, a), this)),
        (this.lazy = (a) => ((this.lazyFn = a), this)),
        (this.redirect = (a) => uv({ from: this.fullPath, ...a })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw new Error("Route cannot have both an 'id' and a 'path' option.");
    }
  },
  fw = class extends pv {
    constructor(e) {
      super(e);
    }
  };
function dw(e) {
  if (typeof document < "u" && document.querySelector) {
    const a = e.stores.location.get(),
      s = a.state.__hashScrollIntoViewOptions ?? !0;
    if (s && a.hash !== "") {
      const o = document.getElementById(a.hash);
      o && o.scrollIntoView(s);
    }
  }
}
var hw = ((e) => (
    (e[(e.AggregateError = 1)] = "AggregateError"),
    (e[(e.ArrowFunction = 2)] = "ArrowFunction"),
    (e[(e.ErrorPrototypeStack = 4)] = "ErrorPrototypeStack"),
    (e[(e.ObjectAssign = 8)] = "ObjectAssign"),
    (e[(e.BigIntTypedArray = 16)] = "BigIntTypedArray"),
    (e[(e.RegExp = 32)] = "RegExp"),
    e
  ))(hw || {}),
  aa = Symbol.asyncIterator,
  gv = Symbol.hasInstance,
  Os = Symbol.isConcatSpreadable,
  ra = Symbol.iterator,
  yv = Symbol.match,
  vv = Symbol.matchAll,
  bv = Symbol.replace,
  Sv = Symbol.search,
  xv = Symbol.species,
  wv = Symbol.split,
  Ev = Symbol.toPrimitive,
  Ms = Symbol.toStringTag,
  _v = Symbol.unscopables,
  Rv = {
    [aa]: 0,
    [gv]: 1,
    [Os]: 2,
    [ra]: 3,
    [yv]: 4,
    [vv]: 5,
    [bv]: 6,
    [Sv]: 7,
    [xv]: 8,
    [wv]: 9,
    [Ev]: 10,
    [Ms]: 11,
    [_v]: 12,
  },
  mw = {
    0: aa,
    1: gv,
    2: Os,
    3: ra,
    4: yv,
    5: vv,
    6: bv,
    7: Sv,
    8: xv,
    9: wv,
    10: Ev,
    11: Ms,
    12: _v,
  },
  E = void 0,
  pw = {
    2: !0,
    3: !1,
    1: E,
    0: null,
    4: -0,
    5: Number.POSITIVE_INFINITY,
    6: Number.NEGATIVE_INFINITY,
    7: Number.NaN,
  },
  gw = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError",
  },
  yw = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function Dt(e, a, s, o, l, c, d, h, g, m, v, p) {
  return {
    t: e,
    i: a,
    s,
    c: o,
    m: l,
    p: c,
    e: d,
    a: h,
    f: g,
    b: m,
    o: v,
    l: p,
  };
}
function Qa(e) {
  return Dt(2, E, e, E, E, E, E, E, E, E, E, E);
}
var Tv = Qa(2),
  Cv = Qa(3),
  vw = Qa(1),
  bw = Qa(0),
  Sw = Qa(4),
  xw = Qa(5),
  ww = Qa(6),
  Ew = Qa(7);
function _w(e) {
  switch (e) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return E;
  }
}
function Ia(e) {
  let a = "",
    s = 0,
    o;
  for (let l = 0, c = e.length; l < c; l++)
    (o = _w(e[l])), o && ((a += e.slice(s, l) + o), (s = l + 1));
  return s === 0 ? (a = e) : (a += e.slice(s)), a;
}
function Rw(e) {
  switch (e) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return e;
  }
}
function Fa(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Rw);
}
var fl = "__SEROVAL_REFS__",
  Av = new Map(),
  Ts = new Map();
function Ov(e) {
  return Av.has(e);
}
function Tw(e) {
  return Ts.has(e);
}
function Cw(e) {
  if (Ov(e)) return Av.get(e);
  throw new rE(e);
}
function Aw(e) {
  if (Tw(e)) return Ts.get(e);
  throw new sE(e);
}
typeof globalThis < "u"
  ? Object.defineProperty(globalThis, fl, {
      value: Ts,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < "u"
  ? Object.defineProperty(window, fl, {
      value: Ts,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof self < "u"
  ? Object.defineProperty(self, fl, {
      value: Ts,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof global < "u" &&
    Object.defineProperty(global, fl, {
      value: Ts,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    });
function ud(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
    ? 2
    : e instanceof ReferenceError
    ? 3
    : e instanceof SyntaxError
    ? 4
    : e instanceof TypeError
    ? 5
    : e instanceof URIError
    ? 6
    : 0;
}
function Ow(e) {
  let a = gw[ud(e)];
  return e.name !== a
    ? { name: e.name }
    : e.constructor.name !== a
    ? { name: e.constructor.name }
    : {};
}
function Mv(e, a) {
  let s = Ow(e),
    o = Object.getOwnPropertyNames(e);
  for (let l = 0, c = o.length, d; l < c; l++)
    (d = o[l]),
      d !== "name" &&
        d !== "message" &&
        (d === "stack"
          ? a & 4 && ((s = s || {}), (s[d] = e[d]))
          : ((s = s || {}), (s[d] = e[d])));
  return s;
}
function Nv(e) {
  return Object.isFrozen(e)
    ? 3
    : Object.isSealed(e)
    ? 2
    : Object.isExtensible(e)
    ? 0
    : 1;
}
function Mw(e) {
  switch (e) {
    case Number.POSITIVE_INFINITY:
      return xw;
    case Number.NEGATIVE_INFINITY:
      return ww;
  }
  return e !== e
    ? Ew
    : Object.is(e, -0)
    ? Sw
    : Dt(0, E, e, E, E, E, E, E, E, E, E, E);
}
function Dv(e) {
  return Dt(1, E, Ia(e), E, E, E, E, E, E, E, E, E);
}
function Nw(e) {
  return Dt(3, E, "" + e, E, E, E, E, E, E, E, E, E);
}
function Dw(e) {
  return Dt(4, e, E, E, E, E, E, E, E, E, E, E);
}
function zw(e, a) {
  let s = a.valueOf();
  return Dt(5, e, s !== s ? "" : a.toISOString(), E, E, E, E, E, E, E, E, E);
}
function jw(e, a) {
  return Dt(6, e, E, Ia(a.source), a.flags, E, E, E, E, E, E, E);
}
function Lw(e, a) {
  return Dt(17, e, Rv[a], E, E, E, E, E, E, E, E, E);
}
function Uw(e, a) {
  return Dt(18, e, Ia(Cw(a)), E, E, E, E, E, E, E, E, E);
}
function Bw(e, a, s) {
  return Dt(25, e, s, Ia(a), E, E, E, E, E, E, E, E);
}
function kw(e, a, s) {
  return Dt(9, e, E, E, E, E, E, s, E, E, Nv(a), E);
}
function Hw(e, a) {
  return Dt(21, e, E, E, E, E, E, E, a, E, E, E);
}
function qw(e, a, s) {
  return Dt(
    15,
    e,
    E,
    a.constructor.name,
    E,
    E,
    E,
    E,
    s,
    a.byteOffset,
    E,
    a.length
  );
}
function Pw(e, a, s) {
  return Dt(
    16,
    e,
    E,
    a.constructor.name,
    E,
    E,
    E,
    E,
    s,
    a.byteOffset,
    E,
    a.byteLength
  );
}
function Yw(e, a, s) {
  return Dt(20, e, E, E, E, E, E, E, s, a.byteOffset, E, a.byteLength);
}
function Vw(e, a, s) {
  return Dt(13, e, ud(a), E, Ia(a.message), s, E, E, E, E, E, E);
}
function Gw(e, a, s) {
  return Dt(14, e, ud(a), E, Ia(a.message), s, E, E, E, E, E, E);
}
function Qw(e, a) {
  return Dt(7, e, E, E, E, E, E, a, E, E, E, E);
}
function Iw(e, a) {
  return Dt(28, E, E, E, E, E, E, [e, a], E, E, E, E);
}
function Fw(e, a) {
  return Dt(30, E, E, E, E, E, E, [e, a], E, E, E, E);
}
function Xw(e, a, s) {
  return Dt(31, e, E, E, E, E, E, s, a, E, E, E);
}
function Kw(e, a) {
  return Dt(32, e, E, E, E, E, E, E, a, E, E, E);
}
function Zw(e, a) {
  return Dt(33, e, E, E, E, E, E, E, a, E, E, E);
}
function Jw(e, a) {
  return Dt(34, e, E, E, E, E, E, E, a, E, E, E);
}
function $w(e, a, s, o) {
  return Dt(35, e, s, E, E, E, E, a, E, E, E, o);
}
var Ww = { parsing: 1, serialization: 2, deserialization: 3 };
function tE(e) {
  return `Seroval Error (step: ${Ww[e]})`;
}
var eE = (e, a) => tE(e),
  zv = class extends Error {
    constructor(e, a) {
      super(eE(e)), (this.cause = a);
    }
  },
  Xg = class extends zv {
    constructor(e) {
      super("parsing", e);
    }
  },
  nE = class extends zv {
    constructor(e) {
      super("deserialization", e);
    }
  };
function sa(e) {
  return `Seroval Error (specific: ${e})`;
}
var Yl = class extends Error {
    constructor(a) {
      super(sa(1)), (this.value = a);
    }
  },
  jv = class extends Error {
    constructor(a) {
      super(sa(2));
    }
  },
  aE = class extends Error {
    constructor(e) {
      super(sa(3));
    }
  },
  Fi = class extends Error {
    constructor(e) {
      super(sa(4));
    }
  },
  rE = class extends Error {
    constructor(e) {
      super(sa(5)), (this.value = e);
    }
  },
  sE = class extends Error {
    constructor(e) {
      super(sa(6));
    }
  },
  iE = class extends Error {
    constructor(e) {
      super(sa(7));
    }
  },
  Xa = class extends Error {
    constructor(e) {
      super(sa(8));
    }
  },
  oE = class extends Error {
    constructor(a) {
      super(sa(9));
    }
  },
  lE = class {
    constructor(e, a) {
      (this.value = e), (this.replacement = a);
    }
  },
  Vl = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((a, s) => {
        (e.s = a), (e.f = s);
      })),
      e
    );
  },
  uE = (e, a) => {
    e.s(a), (e.p.s = 1), (e.p.v = a);
  },
  cE = (e, a) => {
    e.f(a), (e.p.s = 2), (e.p.v = a);
  };
Vl.toString();
uE.toString();
cE.toString();
var fE = () => {
    let e = [],
      a = [],
      s = !0,
      o = !1,
      l = 0,
      c = (g, m, v) => {
        for (v = 0; v < l; v++) a[v] && a[v][m](g);
      },
      d = (g, m, v, p) => {
        for (m = 0, v = e.length; m < v; m++)
          (p = e[m]),
            !s && m === v - 1 ? g[o ? "return" : "throw"](p) : g.next(p);
      },
      h = (g, m) => (
        s && ((m = l++), (a[m] = g)),
        d(g),
        () => {
          s && ((a[m] = a[l]), (a[l--] = void 0));
        }
      );
    return {
      __SEROVAL_STREAM__: !0,
      on: (g) => h(g),
      next: (g) => {
        s && (e.push(g), c(g, "next"));
      },
      throw: (g) => {
        s && (e.push(g), c(g, "throw"), (s = !1), (o = !1), (a.length = 0));
      },
      return: (g) => {
        s && (e.push(g), c(g, "return"), (s = !1), (o = !0), (a.length = 0));
      },
    };
  },
  dE = (e) => (a) => () => {
    let s = 0,
      o = {
        [e]: () => o,
        next: () => {
          if (s > a.d) return { done: !0, value: void 0 };
          let l = s++,
            c = a.v[l];
          if (l === a.t) throw c;
          return { done: l === a.d, value: c };
        },
      };
    return o;
  },
  hE = (e, a) => (s) => () => {
    let o = 0,
      l = -1,
      c = !1,
      d = [],
      h = [],
      g = (v = 0, p = h.length) => {
        for (; v < p; v++) h[v].s({ done: !0, value: void 0 });
      };
    s.on({
      next: (v) => {
        let p = h.shift();
        p && p.s({ done: !1, value: v }), d.push(v);
      },
      throw: (v) => {
        let p = h.shift();
        p && p.f(v), g(), (l = d.length), (c = !0), d.push(v);
      },
      return: (v) => {
        let p = h.shift();
        p && p.s({ done: !0, value: v }), g(), (l = d.length), d.push(v);
      },
    });
    let m = {
      [e]: () => m,
      next: () => {
        if (l === -1) {
          let b = o++;
          if (b >= d.length) {
            let x = a();
            return h.push(x), x.p;
          }
          return { done: !1, value: d[b] };
        }
        if (o > l) return { done: !0, value: void 0 };
        let v = o++,
          p = d[v];
        if (v !== l) return { done: !1, value: p };
        if (c) throw p;
        return { done: !0, value: p };
      },
    };
    return m;
  },
  Lv = (e) => {
    let a = atob(e),
      s = a.length,
      o = new Uint8Array(s);
    for (let l = 0; l < s; l++) o[l] = a.charCodeAt(l);
    return o.buffer;
  };
Lv.toString();
function mE(e) {
  return "__SEROVAL_SEQUENCE__" in e;
}
function Uv(e, a, s) {
  return { __SEROVAL_SEQUENCE__: !0, v: e, t: a, d: s };
}
function pE(e) {
  let a = [],
    s = -1,
    o = -1,
    l = e[ra]();
  for (;;)
    try {
      let c = l.next();
      if ((a.push(c.value), c.done)) {
        o = a.length - 1;
        break;
      }
    } catch (c) {
      (s = a.length), a.push(c);
    }
  return Uv(a, s, o);
}
var gE = dE(ra);
function yE(e) {
  return gE(e);
}
var vE = {},
  bE = {},
  SE = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function Gl(e) {
  return "__SEROVAL_STREAM__" in e;
}
function Tr() {
  return fE();
}
function xE(e) {
  let a = Tr(),
    s = e[aa]();
  async function o() {
    try {
      let l = await s.next();
      l.done ? a.return(l.value) : (a.next(l.value), await o());
    } catch (l) {
      a.throw(l);
    }
  }
  return o().catch(() => {}), a;
}
var wE = hE(aa, Vl);
function EE(e) {
  return wE(e);
}
async function _E(e) {
  try {
    return [1, await e];
  } catch (a) {
    return [0, a];
  }
}
function RE(e, a) {
  return {
    plugins: a.plugins,
    mode: e,
    marked: new Set(),
    features: 63 ^ (a.disabledFeatures || 0),
    refs: a.refs || new Map(),
    depthLimit: a.depthLimit || 1e3,
  };
}
function Rl(e, a) {
  e.marked.add(a);
}
function TE(e, a) {
  let s = e.refs.size;
  return e.refs.set(a, s), s;
}
function Ql(e, a) {
  let s = e.refs.get(a);
  return s != null
    ? (Rl(e, s), { type: 1, value: Dw(s) })
    : { type: 0, value: TE(e, a) };
}
function cd(e, a) {
  let s = Ql(e, a);
  return s.type === 1 ? s : Ov(a) ? { type: 2, value: Uw(s.value, a) } : s;
}
function xr(e, a) {
  let s = cd(e, a);
  if (s.type !== 0) return s.value;
  if (a in Rv) return Lw(s.value, a);
  throw new Yl(a);
}
function Il(e, a) {
  let s = Ql(e, SE[a]);
  return s.type === 1 ? s.value : Dt(26, s.value, a, E, E, E, E, E, E, E, E, E);
}
function CE(e) {
  let a = Ql(e, vE);
  return a.type === 1
    ? a.value
    : Dt(27, a.value, E, E, E, E, E, E, xr(e, ra), E, E, E);
}
function AE(e) {
  let a = Ql(e, bE);
  return a.type === 1
    ? a.value
    : Dt(29, a.value, E, E, E, E, E, [Il(e, 1), xr(e, aa)], E, E, E, E);
}
function OE(e, a, s, o) {
  return Dt(s ? 11 : 10, e, E, E, E, o, E, E, E, E, Nv(a), E);
}
function ME(e, a, s, o) {
  return Dt(8, a, E, E, E, E, { k: s, v: o }, E, Il(e, 0), E, E, E);
}
function NE(e, a, s) {
  let o = new Uint8Array(s),
    l = "";
  for (let c = 0, d = o.length; c < d; c++) l += String.fromCharCode(o[c]);
  return Dt(19, a, Ia(btoa(l)), E, E, E, E, E, Il(e, 5), E, E, E);
}
function DE(e, a) {
  return { base: RE(e, a), child: void 0 };
}
var zE = class {
  constructor(e, a) {
    (this._p = e), (this.depth = a);
  }
  parse(e) {
    return ce(this._p, this.depth, e);
  }
};
async function jE(e, a, s) {
  let o = [];
  for (let l = 0, c = s.length; l < c; l++)
    l in s ? (o[l] = await ce(e, a, s[l])) : (o[l] = 0);
  return o;
}
async function LE(e, a, s, o) {
  return kw(s, o, await jE(e, a, o));
}
async function fd(e, a, s) {
  let o = Object.entries(s),
    l = [],
    c = [];
  for (let d = 0, h = o.length; d < h; d++)
    l.push(Ia(o[d][0])), c.push(await ce(e, a, o[d][1]));
  return (
    ra in s &&
      (l.push(xr(e.base, ra)), c.push(Iw(CE(e.base), await ce(e, a, pE(s))))),
    aa in s &&
      (l.push(xr(e.base, aa)), c.push(Fw(AE(e.base), await ce(e, a, xE(s))))),
    Ms in s && (l.push(xr(e.base, Ms)), c.push(Dv(s[Ms]))),
    Os in s && (l.push(xr(e.base, Os)), c.push(s[Os] ? Tv : Cv)),
    { k: l, v: c }
  );
}
async function Ef(e, a, s, o, l) {
  return OE(s, o, l, await fd(e, a, o));
}
async function UE(e, a, s, o) {
  return Hw(s, await ce(e, a, o.valueOf()));
}
async function BE(e, a, s, o) {
  return qw(s, o, await ce(e, a, o.buffer));
}
async function kE(e, a, s, o) {
  return Pw(s, o, await ce(e, a, o.buffer));
}
async function HE(e, a, s, o) {
  return Yw(s, o, await ce(e, a, o.buffer));
}
async function Kg(e, a, s, o) {
  let l = Mv(o, e.base.features);
  return Vw(s, o, l ? await fd(e, a, l) : E);
}
async function qE(e, a, s, o) {
  let l = Mv(o, e.base.features);
  return Gw(s, o, l ? await fd(e, a, l) : E);
}
async function PE(e, a, s, o) {
  let l = [],
    c = [];
  for (let [d, h] of o.entries())
    l.push(await ce(e, a, d)), c.push(await ce(e, a, h));
  return ME(e.base, s, l, c);
}
async function YE(e, a, s, o) {
  let l = [];
  for (let c of o.keys()) l.push(await ce(e, a, c));
  return Qw(s, l);
}
async function Bv(e, a, s, o) {
  let l = e.base.plugins;
  if (l)
    for (let c = 0, d = l.length; c < d; c++) {
      let h = l[c];
      if (h.parse.async && h.test(o))
        return Bw(s, h.tag, await h.parse.async(o, new zE(e, a), { id: s }));
    }
  return E;
}
async function VE(e, a, s, o) {
  let [l, c] = await _E(o);
  return Dt(12, s, l, E, E, E, E, E, await ce(e, a, c), E, E, E);
}
function GE(e, a, s, o, l) {
  let c = [],
    d = s.on({
      next: (h) => {
        Rl(this.base, a),
          ce(this, e, h).then(
            (g) => {
              c.push(Kw(a, g));
            },
            (g) => {
              l(g), d();
            }
          );
      },
      throw: (h) => {
        Rl(this.base, a),
          ce(this, e, h).then(
            (g) => {
              c.push(Zw(a, g)), o(c), d();
            },
            (g) => {
              l(g), d();
            }
          );
      },
      return: (h) => {
        Rl(this.base, a),
          ce(this, e, h).then(
            (g) => {
              c.push(Jw(a, g)), o(c), d();
            },
            (g) => {
              l(g), d();
            }
          );
      },
    });
}
async function QE(e, a, s, o) {
  return Xw(s, Il(e.base, 4), await new Promise(GE.bind(e, a, s, o)));
}
async function IE(e, a, s, o) {
  let l = [];
  for (let c = 0, d = o.v.length; c < d; c++) l[c] = await ce(e, a, o.v[c]);
  return $w(s, l, o.t, o.d);
}
async function FE(e, a, s, o) {
  if (Array.isArray(o)) return LE(e, a, s, o);
  if (Gl(o)) return QE(e, a, s, o);
  if (mE(o)) return IE(e, a, s, o);
  let l = o.constructor;
  if (l === lE) return ce(e, a, o.replacement);
  let c = await Bv(e, a, s, o);
  if (c) return c;
  switch (l) {
    case Object:
      return Ef(e, a, s, o, !1);
    case E:
      return Ef(e, a, s, o, !0);
    case Date:
      return zw(s, o);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return Kg(e, a, s, o);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return UE(e, a, s, o);
    case ArrayBuffer:
      return NE(e.base, s, o);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return BE(e, a, s, o);
    case DataView:
      return HE(e, a, s, o);
    case Map:
      return PE(e, a, s, o);
    case Set:
      return YE(e, a, s, o);
  }
  if (l === Promise || o instanceof Promise) return VE(e, a, s, o);
  let d = e.base.features;
  if (d & 32 && l === RegExp) return jw(s, o);
  if (d & 16)
    switch (l) {
      case BigInt64Array:
      case BigUint64Array:
        return kE(e, a, s, o);
    }
  if (
    d & 1 &&
    typeof AggregateError < "u" &&
    (l === AggregateError || o instanceof AggregateError)
  )
    return qE(e, a, s, o);
  if (o instanceof Error) return Kg(e, a, s, o);
  if (ra in o || aa in o) return Ef(e, a, s, o, !!l);
  throw new Yl(o);
}
async function XE(e, a, s) {
  let o = cd(e.base, s);
  if (o.type !== 0) return o.value;
  let l = await Bv(e, a, o.value, s);
  if (l) return l;
  throw new Yl(s);
}
async function ce(e, a, s) {
  switch (typeof s) {
    case "boolean":
      return s ? Tv : Cv;
    case "undefined":
      return vw;
    case "string":
      return Dv(s);
    case "number":
      return Mw(s);
    case "bigint":
      return Nw(s);
    case "object": {
      if (s) {
        let o = cd(e.base, s);
        return o.type === 0 ? await FE(e, a + 1, o.value, s) : o.value;
      }
      return bw;
    }
    case "symbol":
      return xr(e.base, s);
    case "function":
      return XE(e, a, s);
    default:
      throw new Yl(s);
  }
}
async function KE(e, a) {
  try {
    return await ce(e, 0, a);
  } catch (s) {
    throw s instanceof Xg ? s : new Xg(s);
  }
}
var ZE = ((e) => (
  (e[(e.Vanilla = 1)] = "Vanilla"), (e[(e.Cross = 2)] = "Cross"), e
))(ZE || {});
function kv(e, a) {
  for (let s = 0, o = a.length; s < o; s++) {
    let l = a[s];
    e.has(l) || (e.add(l), l.extends && kv(e, l.extends));
  }
}
function Hv(e) {
  if (e) {
    let a = new Set();
    return kv(a, e), [...a];
  }
}
function JE(e) {
  switch (e) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new iE(e);
  }
}
var $E = 1e6,
  WE = 1e4,
  t_ = 2e4;
function qv(e, a) {
  switch (a) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var e_ = 1e3;
function n_(e, a) {
  var s;
  return {
    mode: e,
    plugins: a.plugins,
    refs: a.refs || new Map(),
    features: (s = a.features) != null ? s : 63 ^ (a.disabledFeatures || 0),
    depthLimit: a.depthLimit || e_,
  };
}
function a_(e) {
  return { mode: 2, base: n_(2, e), child: E };
}
var r_ = class {
  constructor(e, a) {
    (this._p = e), (this.depth = a);
  }
  deserialize(e) {
    return Yt(this._p, this.depth, e);
  }
};
function Pv(e, a) {
  if (a < 0 || !Number.isFinite(a) || !Number.isInteger(a))
    throw new Xa({ t: 4, i: a });
  if (e.refs.has(a)) throw new Error("Conflicted ref id: " + a);
}
function s_(e, a, s) {
  return Pv(e.base, a), e.state.marked.has(a) && e.base.refs.set(a, s), s;
}
function i_(e, a, s) {
  return Pv(e.base, a), e.base.refs.set(a, s), s;
}
function fe(e, a, s) {
  return e.mode === 1 ? s_(e, a, s) : i_(e, a, s);
}
function Gf(e, a, s) {
  if (Object.hasOwn(a, s)) return a[s];
  throw new Xa(e);
}
function o_(e, a) {
  return fe(e, a.i, Aw(Fa(a.s)));
}
function l_(e, a, s) {
  let o = s.a,
    l = o.length,
    c = fe(e, s.i, new Array(l));
  for (let d = 0, h; d < l; d++) (h = o[d]), h && (c[d] = Yt(e, a, h));
  return qv(c, s.o), c;
}
function u_(e) {
  switch (e) {
    case "constructor":
    case "__proto__":
    case "prototype":
    case "__defineGetter__":
    case "__defineSetter__":
    case "__lookupGetter__":
    case "__lookupSetter__":
      return !1;
    default:
      return !0;
  }
}
function c_(e) {
  switch (e) {
    case aa:
    case Os:
    case Ms:
    case ra:
      return !0;
    default:
      return !1;
  }
}
function Zg(e, a, s) {
  u_(a)
    ? (e[a] = s)
    : Object.defineProperty(e, a, {
        value: s,
        configurable: !0,
        enumerable: !0,
        writable: !0,
      });
}
function f_(e, a, s, o, l) {
  if (typeof o == "string") Zg(s, Fa(o), Yt(e, a, l));
  else {
    let c = Yt(e, a, o);
    switch (typeof c) {
      case "string":
        Zg(s, c, Yt(e, a, l));
        break;
      case "symbol":
        c_(c) && (s[c] = Yt(e, a, l));
        break;
      default:
        throw new Xa(o);
    }
  }
}
function Yv(e, a, s, o) {
  let l = s.k;
  if (l.length > 0)
    for (let c = 0, d = s.v, h = l.length; c < h; c++) f_(e, a, o, l[c], d[c]);
  return o;
}
function d_(e, a, s) {
  let o = fe(e, s.i, s.t === 10 ? {} : Object.create(null));
  return Yv(e, a, s.p, o), qv(o, s.o), o;
}
function h_(e, a) {
  return fe(e, a.i, new Date(a.s));
}
function m_(e, a) {
  if (e.base.features & 32) {
    let s = Fa(a.c);
    if (s.length > t_) throw new Xa(a);
    return fe(e, a.i, new RegExp(s, a.m));
  }
  throw new jv(a);
}
function p_(e, a, s) {
  let o = fe(e, s.i, new Set());
  for (let l = 0, c = s.a, d = c.length; l < d; l++) o.add(Yt(e, a, c[l]));
  return o;
}
function g_(e, a, s) {
  let o = fe(e, s.i, new Map());
  for (let l = 0, c = s.e.k, d = s.e.v, h = c.length; l < h; l++)
    o.set(Yt(e, a, c[l]), Yt(e, a, d[l]));
  return o;
}
function y_(e, a) {
  if (a.s.length > $E) throw new Xa(a);
  return fe(e, a.i, Lv(Fa(a.s)));
}
function v_(e, a, s) {
  var o;
  let l = JE(s.c),
    c = Yt(e, a, s.f),
    d = (o = s.b) != null ? o : 0;
  if (d < 0 || d > c.byteLength) throw new Xa(s);
  return fe(e, s.i, new l(c, d, s.l));
}
function b_(e, a, s) {
  var o;
  let l = Yt(e, a, s.f),
    c = (o = s.b) != null ? o : 0;
  if (c < 0 || c > l.byteLength) throw new Xa(s);
  return fe(e, s.i, new DataView(l, c, s.l));
}
function Vv(e, a, s, o) {
  if (s.p) {
    let l = Yv(e, a, s.p, {});
    Object.defineProperties(o, Object.getOwnPropertyDescriptors(l));
  }
  return o;
}
function S_(e, a, s) {
  let o = fe(e, s.i, new AggregateError([], Fa(s.m)));
  return Vv(e, a, s, o);
}
function x_(e, a, s) {
  let o = Gf(s, yw, s.s),
    l = fe(e, s.i, new o(Fa(s.m)));
  return Vv(e, a, s, l);
}
function w_(e, a, s) {
  let o = Vl(),
    l = fe(e, s.i, o.p),
    c = Yt(e, a, s.f);
  return s.s ? o.s(c) : o.f(c), l;
}
function E_(e, a, s) {
  return fe(e, s.i, Object(Yt(e, a, s.f)));
}
function __(e, a, s) {
  let o = e.base.plugins;
  if (o) {
    let l = Fa(s.c);
    for (let c = 0, d = o.length; c < d; c++) {
      let h = o[c];
      if (h.tag === l)
        return fe(e, s.i, h.deserialize(s.s, new r_(e, a), { id: s.i }));
    }
  }
  throw new aE(s.c);
}
function R_(e, a) {
  return fe(e, a.i, fe(e, a.s, Vl()).p);
}
function T_(e, a, s) {
  let o = e.base.refs.get(s.i);
  if (o) return o.s(Yt(e, a, s.a[1])), E;
  throw new Fi("Promise");
}
function C_(e, a, s) {
  let o = e.base.refs.get(s.i);
  if (o) return o.f(Yt(e, a, s.a[1])), E;
  throw new Fi("Promise");
}
function A_(e, a, s) {
  Yt(e, a, s.a[0]);
  let o = Yt(e, a, s.a[1]);
  return yE(o);
}
function O_(e, a, s) {
  Yt(e, a, s.a[0]);
  let o = Yt(e, a, s.a[1]);
  return EE(o);
}
function M_(e, a, s) {
  let o = fe(e, s.i, Tr()),
    l = s.a,
    c = l.length;
  if (c) for (let d = 0; d < c; d++) Yt(e, a, l[d]);
  return o;
}
function N_(e, a, s) {
  let o = e.base.refs.get(s.i);
  if (o && Gl(o)) return o.next(Yt(e, a, s.f)), E;
  throw new Fi("Stream");
}
function D_(e, a, s) {
  let o = e.base.refs.get(s.i);
  if (o && Gl(o)) return o.throw(Yt(e, a, s.f)), E;
  throw new Fi("Stream");
}
function z_(e, a, s) {
  let o = e.base.refs.get(s.i);
  if (o && Gl(o)) return o.return(Yt(e, a, s.f)), E;
  throw new Fi("Stream");
}
function j_(e, a, s) {
  return Yt(e, a, s.f), E;
}
function L_(e, a, s) {
  return Yt(e, a, s.a[1]), E;
}
function U_(e, a, s) {
  let o = fe(e, s.i, Uv([], s.s, s.l));
  for (let l = 0, c = s.a.length; l < c; l++) o.v[l] = Yt(e, a, s.a[l]);
  return o;
}
function Yt(e, a, s) {
  if (a > e.base.depthLimit) throw new oE(e.base.depthLimit);
  switch (((a += 1), s.t)) {
    case 2:
      return Gf(s, pw, s.s);
    case 0:
      return Number(s.s);
    case 1:
      return Fa(String(s.s));
    case 3:
      if (String(s.s).length > WE) throw new Xa(s);
      return BigInt(s.s);
    case 4:
      return e.base.refs.get(s.i);
    case 18:
      return o_(e, s);
    case 9:
      return l_(e, a, s);
    case 10:
    case 11:
      return d_(e, a, s);
    case 5:
      return h_(e, s);
    case 6:
      return m_(e, s);
    case 7:
      return p_(e, a, s);
    case 8:
      return g_(e, a, s);
    case 19:
      return y_(e, s);
    case 16:
    case 15:
      return v_(e, a, s);
    case 20:
      return b_(e, a, s);
    case 14:
      return S_(e, a, s);
    case 13:
      return x_(e, a, s);
    case 12:
      return w_(e, a, s);
    case 17:
      return Gf(s, mw, s.s);
    case 21:
      return E_(e, a, s);
    case 25:
      return __(e, a, s);
    case 22:
      return R_(e, s);
    case 23:
      return T_(e, a, s);
    case 24:
      return C_(e, a, s);
    case 28:
      return A_(e, a, s);
    case 30:
      return O_(e, a, s);
    case 31:
      return M_(e, a, s);
    case 32:
      return N_(e, a, s);
    case 33:
      return D_(e, a, s);
    case 34:
      return z_(e, a, s);
    case 27:
      return j_(e, a, s);
    case 29:
      return L_(e, a, s);
    case 35:
      return U_(e, a, s);
    default:
      throw new jv(s);
  }
}
function B_(e, a) {
  try {
    return Yt(e, 0, a);
  } catch (s) {
    throw new nE(s);
  }
}
var k_ = () => T;
k_.toString();
function Jg(e, a) {
  let s = Hv(a.plugins),
    o = a_({
      plugins: s,
      refs: a.refs,
      features: a.features,
      disabledFeatures: a.disabledFeatures,
      depthLimit: a.depthLimit,
    });
  return B_(o, e);
}
async function H_(e, a = {}) {
  let s = Hv(a.plugins),
    o = DE(1, { plugins: s, disabledFeatures: a.disabledFeatures });
  return {
    t: await KE(o, e),
    f: o.base.features,
    m: Array.from(o.base.marked),
  };
}
function q_(e) {
  return {
    tag: "$TSR/t/" + e.key,
    test: e.test,
    parse: {
      sync(a, s, o) {
        return { v: s.parse(e.toSerializable(a)) };
      },
      async async(a, s, o) {
        return { v: await s.parse(e.toSerializable(a)) };
      },
      stream(a, s, o) {
        return { v: s.parse(e.toSerializable(a)) };
      },
    },
    serialize: void 0,
    deserialize(a, s, o) {
      return e.fromSerializable(s.deserialize(a.v));
    },
  };
}
var P_ = class {
    constructor(e, a) {
      (this.stream = e), (this.hint = a?.hint ?? "binary");
    }
  },
  zl = globalThis.Buffer,
  Gv = !!zl && typeof zl.from == "function";
function Qv(e) {
  if (e.length === 0) return "";
  if (Gv) return zl.from(e).toString("base64");
  const a = 32768,
    s = [];
  for (let o = 0; o < e.length; o += a) {
    const l = e.subarray(o, o + a);
    s.push(String.fromCharCode.apply(null, l));
  }
  return btoa(s.join(""));
}
function Iv(e) {
  if (e.length === 0) return new Uint8Array(0);
  if (Gv) {
    const o = zl.from(e, "base64");
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  const a = atob(e),
    s = new Uint8Array(a.length);
  for (let o = 0; o < a.length; o++) s[o] = a.charCodeAt(o);
  return s;
}
var Di = Object.create(null),
  zi = Object.create(null),
  Y_ = (e) =>
    new ReadableStream({
      start(a) {
        e.on({
          next(s) {
            try {
              a.enqueue(Iv(s));
            } catch {}
          },
          throw(s) {
            a.error(s);
          },
          return() {
            try {
              a.close();
            } catch {}
          },
        });
      },
    }),
  V_ = new TextEncoder(),
  G_ = (e) =>
    new ReadableStream({
      start(a) {
        e.on({
          next(s) {
            try {
              typeof s == "string"
                ? a.enqueue(V_.encode(s))
                : a.enqueue(Iv(s.$b64));
            } catch {}
          },
          throw(s) {
            a.error(s);
          },
          return() {
            try {
              a.close();
            } catch {}
          },
        });
      },
    }),
  Q_ =
    "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))",
  I_ =
    "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";
function $g(e) {
  const a = Tr(),
    s = e.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          const { done: o, value: l } = await s.read();
          if (o) {
            a.return(void 0);
            break;
          }
          a.next(Qv(l));
        }
      } catch (o) {
        a.throw(o);
      } finally {
        s.releaseLock();
      }
    })(),
    a
  );
}
function Wg(e) {
  const a = Tr(),
    s = e.getReader(),
    o = new TextDecoder("utf-8", { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          const { done: l, value: c } = await s.read();
          if (l) {
            try {
              const d = o.decode();
              d.length > 0 && a.next(d);
            } catch {}
            a.return(void 0);
            break;
          }
          try {
            const d = o.decode(c, { stream: !0 });
            d.length > 0 && a.next(d);
          } catch {
            a.next({ $b64: Qv(c) });
          }
        }
      } catch (l) {
        a.throw(l);
      } finally {
        s.releaseLock();
      }
    })(),
    a
  );
}
var F_ = {
  tag: "tss/RawStream",
  extends: [
    {
      tag: "tss/RawStreamFactory",
      test(e) {
        return e === Di;
      },
      parse: {
        sync(e, a, s) {
          return {};
        },
        async async(e, a, s) {
          return {};
        },
        stream(e, a, s) {
          return {};
        },
      },
      serialize(e, a, s) {
        return Q_;
      },
      deserialize(e, a, s) {
        return Di;
      },
    },
    {
      tag: "tss/RawStreamFactoryText",
      test(e) {
        return e === zi;
      },
      parse: {
        sync(e, a, s) {
          return {};
        },
        async async(e, a, s) {
          return {};
        },
        stream(e, a, s) {
          return {};
        },
      },
      serialize(e, a, s) {
        return I_;
      },
      deserialize(e, a, s) {
        return zi;
      },
    },
  ],
  test(e) {
    return e instanceof P_;
  },
  parse: {
    sync(e, a, s) {
      const o = e.hint === "text" ? zi : Di;
      return {
        hint: a.parse(e.hint),
        factory: a.parse(o),
        stream: a.parse(Tr()),
      };
    },
    async async(e, a, s) {
      const o = e.hint === "text" ? zi : Di,
        l = e.hint === "text" ? Wg(e.stream) : $g(e.stream);
      return {
        hint: await a.parse(e.hint),
        factory: await a.parse(o),
        stream: await a.parse(l),
      };
    },
    stream(e, a, s) {
      const o = e.hint === "text" ? zi : Di,
        l = e.hint === "text" ? Wg(e.stream) : $g(e.stream);
      return { hint: a.parse(e.hint), factory: a.parse(o), stream: a.parse(l) };
    },
  },
  serialize(e, a, s) {
    return "(" + a.serialize(e.factory) + ")(" + a.serialize(e.stream) + ")";
  },
  deserialize(e, a, s) {
    const o = a.deserialize(e.stream);
    return a.deserialize(e.hint) === "text" ? G_(o) : Y_(o);
  },
};
function X_(e) {
  return {
    tag: "tss/RawStream",
    test: () => !1,
    parse: {},
    serialize() {
      throw new Error(
        "RawStreamDeserializePlugin.serialize should not be called. Client only deserializes."
      );
    },
    deserialize(a, s, o) {
      return e(
        typeof s?.deserialize == "function"
          ? s.deserialize(a.streamId)
          : a.streamId
      );
    },
  };
}
var K_ = {
    tag: "$TSR/Error",
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, a) {
        return { message: a.parse(e.message) };
      },
      async async(e, a) {
        return { message: await a.parse(e.message) };
      },
      stream(e, a) {
        return { message: a.parse(e.message) };
      },
    },
    serialize(e, a) {
      return "new Error(" + a.serialize(e.message) + ")";
    },
    deserialize(e, a) {
      return new Error(a.deserialize(e.message));
    },
  },
  Ba = {},
  Fv = (e) =>
    new ReadableStream({
      start: (a) => {
        e.on({
          next: (s) => {
            try {
              a.enqueue(s);
            } catch {}
          },
          throw: (s) => {
            a.error(s);
          },
          return: () => {
            try {
              a.close();
            } catch {}
          },
        });
      },
    }),
  Z_ = {
    tag: "seroval-plugins/web/ReadableStreamFactory",
    test(e) {
      return e === Ba;
    },
    parse: {
      sync() {
        return Ba;
      },
      async async() {
        return await Promise.resolve(Ba);
      },
      stream() {
        return Ba;
      },
    },
    serialize() {
      return Fv.toString();
    },
    deserialize() {
      return Ba;
    },
  };
function ty(e) {
  let a = Tr(),
    s = e.getReader();
  async function o() {
    try {
      let l = await s.read();
      l.done ? a.return(l.value) : (a.next(l.value), await o());
    } catch (l) {
      a.throw(l);
    }
  }
  return o().catch(() => {}), a;
}
var J_ = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [Z_],
    test(e) {
      return typeof ReadableStream > "u" ? !1 : e instanceof ReadableStream;
    },
    parse: {
      sync(e, a) {
        return { factory: a.parse(Ba), stream: a.parse(Tr()) };
      },
      async async(e, a) {
        return { factory: await a.parse(Ba), stream: await a.parse(ty(e)) };
      },
      stream(e, a) {
        return { factory: a.parse(Ba), stream: a.parse(ty(e)) };
      },
    },
    serialize(e, a) {
      return "(" + a.serialize(e.factory) + ")(" + a.serialize(e.stream) + ")";
    },
    deserialize(e, a) {
      let s = a.deserialize(e.stream);
      return Fv(s);
    },
  },
  $_ = J_,
  W_ = [K_, F_, $_];
function tR() {
  return [...(nv()?.serializationAdapters?.map(q_) ?? []), ...W_];
}
var ey = new TextDecoder(),
  eR = new Uint8Array(0),
  ny = 16 * 1024 * 1024,
  ay = 32 * 1024 * 1024,
  ry = 1024,
  sy = 1e5;
function nR(e) {
  const a = new Map(),
    s = new Map(),
    o = new Set();
  let l = !1,
    c = null,
    d = 0,
    h;
  const g = new ReadableStream({
    start(p) {
      h = p;
    },
    cancel() {
      l = !0;
      try {
        c?.cancel();
      } catch {}
      a.forEach((p) => {
        try {
          p.error(new Error("Framed response cancelled"));
        } catch {}
      }),
        a.clear(),
        s.clear(),
        o.clear();
    },
  });
  function m(p) {
    const b = s.get(p);
    if (b) return b;
    if (o.has(p))
      return new ReadableStream({
        start(R) {
          R.close();
        },
      });
    if (s.size >= ry)
      throw new Error(`Too many raw streams in framed response (max ${ry})`);
    const x = new ReadableStream({
      start(R) {
        a.set(p, R);
      },
      cancel() {
        o.add(p), a.delete(p), s.delete(p);
      },
    });
    return s.set(p, x), x;
  }
  function v(p) {
    return m(p), a.get(p);
  }
  return (
    (async () => {
      const p = e.getReader();
      c = p;
      const b = [];
      let x = 0;
      function R() {
        if (x < 9) return null;
        const w = b[0];
        if (w.length >= 9)
          return {
            type: w[0],
            streamId: ((w[1] << 24) | (w[2] << 16) | (w[3] << 8) | w[4]) >>> 0,
            length: ((w[5] << 24) | (w[6] << 16) | (w[7] << 8) | w[8]) >>> 0,
          };
        const C = new Uint8Array(9);
        let k = 0,
          q = 9;
        for (let j = 0; j < b.length && q > 0; j++) {
          const K = b[j],
            J = Math.min(K.length, q);
          C.set(K.subarray(0, J), k), (k += J), (q -= J);
        }
        return {
          type: C[0],
          streamId: ((C[1] << 24) | (C[2] << 16) | (C[3] << 8) | C[4]) >>> 0,
          length: ((C[5] << 24) | (C[6] << 16) | (C[7] << 8) | C[8]) >>> 0,
        };
      }
      function _(w) {
        if (w === 0) return eR;
        const C = new Uint8Array(w);
        let k = 0,
          q = w;
        for (; q > 0 && b.length > 0; ) {
          const j = b[0];
          if (!j) break;
          const K = Math.min(j.length, q);
          C.set(j.subarray(0, K), k),
            (k += K),
            (q -= K),
            K === j.length ? b.shift() : (b[0] = j.subarray(K));
        }
        return (x -= w), C;
      }
      try {
        for (;;) {
          const { done: w, value: C } = await p.read();
          if (l || w) break;
          if (C) {
            if (x + C.length > ay)
              throw new Error(`Framed response buffer exceeded ${ay} bytes`);
            for (b.push(C), x += C.length; ; ) {
              const k = R();
              if (!k) break;
              const { type: q, streamId: j, length: K } = k;
              if (
                q !== ea.JSON &&
                q !== ea.CHUNK &&
                q !== ea.END &&
                q !== ea.ERROR
              )
                throw new Error(`Unknown frame type: ${q}`);
              if (q === ea.JSON) {
                if (j !== 0)
                  throw new Error("Invalid JSON frame streamId (expected 0)");
              } else if (j === 0)
                throw new Error(
                  "Invalid raw frame streamId (expected non-zero)"
                );
              if (K > ny)
                throw new Error(
                  `Frame payload too large: ${K} bytes (max ${ny})`
                );
              const J = 9 + K;
              if (x < J) break;
              if (++d > sy)
                throw new Error(
                  `Too many frames in framed response (max ${sy})`
                );
              _(9);
              const Y = _(K);
              switch (q) {
                case ea.JSON:
                  try {
                    h.enqueue(ey.decode(Y));
                  } catch {}
                  break;
                case ea.CHUNK: {
                  const U = v(j);
                  U && U.enqueue(Y);
                  break;
                }
                case ea.END: {
                  const U = v(j);
                  if ((o.add(j), U)) {
                    try {
                      U.close();
                    } catch {}
                    a.delete(j);
                  }
                  break;
                }
                case ea.ERROR: {
                  const U = v(j);
                  if ((o.add(j), U)) {
                    const $ = ey.decode(Y);
                    U.error(new Error($)), a.delete(j);
                  }
                  break;
                }
              }
            }
          }
        }
        if (x !== 0)
          throw new Error("Incomplete frame at end of framed response");
        try {
          h.close();
        } catch {}
        a.forEach((w) => {
          try {
            w.close();
          } catch {}
        }),
          a.clear();
      } catch (w) {
        try {
          h.error(w);
        } catch {}
        a.forEach((C) => {
          try {
            C.error(w);
          } catch {}
        }),
          a.clear();
      } finally {
        try {
          p.releaseLock();
        } catch {}
        c = null;
      }
    })(),
    { getOrCreateStream: m, jsonChunks: g }
  );
}
var Pi = null;
async function Qf(e) {
  e.length > 0 && (await Promise.allSettled(e));
}
var aR = Object.prototype.hasOwnProperty;
function Xv(e) {
  for (const a in e) if (aR.call(e, a)) return !0;
  return !1;
}
async function rR(e, a, s) {
  Pi || (Pi = tR());
  const o = a[0],
    l = o.fetch ?? s,
    c = o.data instanceof FormData ? "formData" : "payload",
    d = o.headers ? new Headers(o.headers) : new Headers();
  if (
    (d.set("x-tsr-serverFn", "true"),
    c === "payload" &&
      d.set("accept", `${W1}, application/x-ndjson, application/json`),
    o.method === "GET")
  ) {
    if (c === "formData")
      throw new Error("FormData is not supported with GET requests");
    const g = await Kv(o);
    if (g !== void 0) {
      const m = lv({ payload: g });
      e.includes("?") ? (e += `&${m}`) : (e += `?${m}`);
    }
  }
  let h;
  if (o.method === "POST") {
    const g = await sR(o);
    g?.contentType && d.set("content-type", g.contentType), (h = g?.body);
  }
  return await iR(async () =>
    l(e, { method: o.method, headers: d, signal: o.signal, body: h })
  );
}
async function Kv(e) {
  let a = !1;
  const s = {};
  if (
    (e.data !== void 0 && ((a = !0), (s.data = e.data)),
    e.context && Xv(e.context) && ((a = !0), (s.context = e.context)),
    a)
  )
    return Zv(s);
}
async function Zv(e) {
  return JSON.stringify(await Promise.resolve(H_(e, { plugins: Pi })));
}
async function sR(e) {
  if (e.data instanceof FormData) {
    let s;
    return (
      e.context && Xv(e.context) && (s = await Zv(e.context)),
      s !== void 0 && e.data.set($1, s),
      { body: e.data }
    );
  }
  const a = await Kv(e);
  if (a) return { body: a, contentType: "application/json" };
}
async function iR(e) {
  let a;
  try {
    a = await e();
  } catch (o) {
    if (o instanceof Response) a = o;
    else throw (console.log(o), o);
  }
  if (a.headers.get("x-tss-raw") === "true") return a;
  const s = a.headers.get("content-type");
  if ((s || Qe(), a.headers.get("x-tss-serialized"))) {
    let o;
    if (s.includes("application/x-tss-framed")) {
      if ((nx(s), !a.body))
        throw new Error("No response body for framed response");
      const { getOrCreateStream: l, jsonChunks: c } = nR(a.body),
        d = [X_(l), ...(Pi || [])],
        h = new Map();
      o = await oR({
        jsonStream: c,
        onMessage: (g) => Jg(g, { refs: h, plugins: d }),
        onError(g, m) {
          console.error(g, m);
        },
      });
    } else if (s.includes("application/json")) {
      const l = await a.json(),
        c = [];
      (o = Jg(l, { plugins: Pi })), await Qf(c);
    }
    if ((o || Qe(), o instanceof Error)) throw o;
    return o;
  }
  if (s.includes("application/json")) {
    const o = await a.json(),
      l = Hx(o);
    if (l) throw l;
    if (ye(o)) throw o;
    return o;
  }
  if (!a.ok) throw new Error(await a.text());
  return a;
}
async function oR({ jsonStream: e, onMessage: a, onError: s }) {
  const o = e.getReader(),
    { value: l, done: c } = await o.read();
  if (c || !l) throw new Error("Stream ended before first object");
  const d = JSON.parse(l);
  let h = !1;
  const g = (async () => {
    try {
      for (;;) {
        const { value: p, done: b } = await o.read();
        if (b) break;
        if (p)
          try {
            const x = [];
            try {
              a(JSON.parse(p));
            } finally {
            }
            await Qf(x);
          } catch (x) {
            s?.(`Invalid JSON: ${p}`, x);
          }
      }
    } catch (p) {
      h || s?.("Stream processing error:", p);
    }
  })();
  let m;
  const v = [];
  try {
    m = a(d);
  } catch (p) {
    throw ((h = !0), o.cancel().catch(() => {}), p);
  }
  return (
    await Qf(v),
    Promise.resolve(m).catch(() => {
      (h = !0), o.cancel().catch(() => {});
    }),
    g.finally(() => {
      try {
        o.releaseLock();
      } catch {}
    }),
    m
  );
}
function lR(e) {
  const a = "/_serverFn/" + e;
  return Object.assign(
    (...l) => {
      const c = nv()?.serverFns?.fetch;
      return rR(a, l, c ?? fetch);
    },
    { url: a, serverFnMeta: { id: e }, [qf]: !0 }
  );
}
var uR = {
  key: "$TSS/serverfn",
  test: (e) => (typeof e != "function" || !(qf in e) ? !1 : !!e[qf]),
  toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
  fromSerializable: ({ functionId: e }) => lR(e),
};
function iy(e) {
  return e.replaceAll("\0", "/").replaceAll("�", "/");
}
function cR(e, a) {
  (e.id = a.i),
    (e.__beforeLoadContext = a.b),
    (e.loaderData = a.l),
    (e.status = a.s),
    (e.ssr = a.ssr),
    (e.updatedAt = a.u),
    (e.error = a.e),
    a.g !== void 0 && (e.globalNotFound = a.g);
}
async function fR(e) {
  window.$_TSR || Qe();
  const a = e.options.serializationAdapters;
  if (a?.length) {
    const w = new Map();
    a.forEach((C) => {
      w.set(C.key, C.fromSerializable);
    }),
      (window.$_TSR.t = w),
      window.$_TSR.buffer.forEach((C) => C());
  }
  (window.$_TSR.initialized = !0), window.$_TSR.router || Qe();
  const s = window.$_TSR.router;
  s.matches.forEach((w) => {
    w.i = iy(w.i);
  }),
    s.lastMatchId && (s.lastMatchId = iy(s.lastMatchId));
  const { manifest: o, dehydratedData: l, lastMatchId: c } = s;
  e.ssr = { manifest: o };
  const d = document.querySelector('meta[property="csp-nonce"]')?.content;
  e.options.ssr = { nonce: d };
  const h = e.matchRoutes(e.stores.location.get()),
    g = Promise.all(
      h.map((w) => e.loadRouteChunk(e.looseRoutesById[w.routeId]))
    );
  function m(w) {
    const C =
      e.looseRoutesById[w.routeId].options.pendingMinMs ??
      e.options.defaultPendingMinMs;
    if (C) {
      const k = _r();
      (w._nonReactive.minPendingPromise = k),
        (w._forcePending = !0),
        setTimeout(() => {
          k.resolve(),
            e.updateMatch(
              w.id,
              (q) => (
                (q._nonReactive.minPendingPromise = void 0),
                { ...q, _forcePending: void 0 }
              )
            );
        }, C);
    }
  }
  function v(w) {
    const C = e.looseRoutesById[w.routeId];
    C && (C.options.ssr = w.ssr);
  }
  let p;
  h.forEach((w) => {
    const C = s.matches.find((k) => k.i === w.id);
    if (!C) {
      (w._nonReactive.dehydrated = !1), (w.ssr = !1), v(w);
      return;
    }
    cR(w, C),
      v(w),
      (w._nonReactive.dehydrated = w.ssr !== !1),
      (w.ssr === "data-only" || w.ssr === !1) &&
        p === void 0 &&
        ((p = w.index), m(w));
  }),
    e.stores.setMatches(h),
    await e.options.hydrate?.(l);
  const b = e.stores.matches.get(),
    x = e.stores.location.get();
  await Promise.all(
    b.map(async (w) => {
      try {
        const C = e.looseRoutesById[w.routeId],
          k = b[w.index - 1]?.context ?? e.options.context;
        if (C.options.context) {
          const J = {
            deps: w.loaderDeps,
            params: w.params,
            context: k ?? {},
            location: x,
            navigate: (Y) => e.navigate({ ...Y, _fromLocation: x }),
            buildLocation: e.buildLocation,
            cause: w.cause,
            abortController: w.abortController,
            preload: !1,
            matches: h,
            routeId: C.id,
          };
          w.__routeContext = C.options.context(J) ?? void 0;
        }
        w.context = { ...k, ...w.__routeContext, ...w.__beforeLoadContext };
        const q = {
            ssr: e.options.ssr,
            matches: b,
            match: w,
            params: w.params,
            loaderData: w.loaderData,
          },
          j = await C.options.head?.(q),
          K = await C.options.scripts?.(q);
        (w.meta = j?.meta),
          (w.links = j?.links),
          (w.headScripts = j?.scripts),
          (w.styles = j?.styles),
          (w.scripts = K);
      } catch (C) {
        if (ye(C))
          (w.error = { isNotFound: !0 }),
            console.error(
              `NotFound error during hydration for routeId: ${w.routeId}`,
              C
            );
        else
          throw (
            ((w.error = C),
            console.error(`Error during hydration for route ${w.routeId}:`, C),
            C)
          );
      }
    })
  );
  const R = h[h.length - 1].id !== c;
  if (!h.some((w) => w.ssr === !1) && !R)
    return (
      h.forEach((w) => {
        w._nonReactive.dehydrated = void 0;
      }),
      e.stores.resolvedLocation.set(e.stores.location.get()),
      g
    );
  const _ = Promise.resolve()
    .then(() => e.load())
    .catch((w) => {
      console.error("Error during router hydration:", w);
    });
  if (R) {
    const w = h[1];
    w || Qe(),
      m(w),
      (w._displayPending = !0),
      (w._nonReactive.displayPendingPromise = _),
      _.then(() => {
        e.batch(() => {
          e.stores.status.get() === "pending" &&
            (e.stores.status.set("idle"),
            e.stores.resolvedLocation.set(e.stores.location.get())),
            e.updateMatch(w.id, (C) => ({
              ...C,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            }));
        });
      });
  }
  return g;
}
var jl = A.use,
  Ui = typeof window < "u" ? A.useLayoutEffect : A.useEffect;
function _f(e) {
  const a = A.useRef({ value: e, prev: null }),
    s = a.current.value;
  return e !== s && (a.current = { value: e, prev: s }), a.current.prev;
}
function dR(e, a, s = {}, o = {}) {
  A.useEffect(() => {
    if (!e.current || o.disabled || typeof IntersectionObserver != "function")
      return;
    const l = new IntersectionObserver(([c]) => {
      a(c);
    }, s);
    return (
      l.observe(e.current),
      () => {
        l.disconnect();
      }
    );
  }, [a, s, o.disabled, e]);
}
function hR(e) {
  const a = A.useRef(null);
  return A.useImperativeHandle(e, () => a.current, []), a;
}
function mR({ promise: e }) {
  if (jl) return jl(e);
  const a = iw(e);
  if (a[Dn].status === "pending") throw a;
  if (a[Dn].status === "error") throw a[Dn].error;
  return a[Dn].data;
}
function pR(e) {
  const a = O.jsx(gR, { ...e });
  return e.fallback
    ? O.jsx(A.Suspense, { fallback: e.fallback, children: a })
    : a;
}
function gR(e) {
  const a = mR(e);
  return e.children(a);
}
function dd(e) {
  const a = e.errorComponent ?? hd;
  return O.jsx(yR, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: s, reset: o }) =>
      s ? A.createElement(a, { error: s, reset: o }) : e.children,
  });
}
var yR = class extends A.Component {
  constructor(...e) {
    super(...e), (this.state = { error: null });
  }
  static getDerivedStateFromProps(e, a) {
    const s = e.getResetKey();
    return a.error && a.resetKey !== s
      ? { resetKey: s, error: null }
      : { resetKey: s };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(e, a) {
    this.props.onCatch && this.props.onCatch(e, a);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function hd({ error: e }) {
  const [a, s] = A.useState(!1);
  return O.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      O.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          O.jsx("strong", {
            style: { fontSize: "1rem" },
            children: "Something went wrong!",
          }),
          O.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => s((o) => !o),
            children: a ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      O.jsx("div", { style: { height: ".25rem" } }),
      a
        ? O.jsx("div", {
            children: O.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: e.message
                ? O.jsx("code", { children: e.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
function vR({ children: e, fallback: a = null }) {
  return md()
    ? O.jsx(nt.Fragment, { children: e })
    : O.jsx(nt.Fragment, { children: a });
}
function md() {
  return nt.useSyncExternalStore(
    bR,
    () => !0,
    () => !1
  );
}
function bR() {
  return () => {};
}
var Jv = A.createContext(null);
function ve(e) {
  return A.useContext(Jv);
}
var Fl = A.createContext(void 0),
  SR = A.createContext(void 0),
  Ft = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.Mutable = 1)] = "Mutable"),
    (e[(e.Watching = 2)] = "Watching"),
    (e[(e.RecursedCheck = 4)] = "RecursedCheck"),
    (e[(e.Recursed = 8)] = "Recursed"),
    (e[(e.Dirty = 16)] = "Dirty"),
    (e[(e.Pending = 32)] = "Pending"),
    e
  ))(Ft || {});
function xR({ update: e, notify: a, unwatched: s }) {
  return {
    link: o,
    unlink: l,
    propagate: c,
    checkDirty: d,
    shallowPropagate: h,
  };
  function o(m, v, p) {
    const b = v.depsTail;
    if (b !== void 0 && b.dep === m) return;
    const x = b !== void 0 ? b.nextDep : v.deps;
    if (x !== void 0 && x.dep === m) {
      (x.version = p), (v.depsTail = x);
      return;
    }
    const R = m.subsTail;
    if (R !== void 0 && R.version === p && R.sub === v) return;
    const _ =
      (v.depsTail =
      m.subsTail =
        {
          version: p,
          dep: m,
          sub: v,
          prevDep: b,
          nextDep: x,
          prevSub: R,
          nextSub: void 0,
        });
    x !== void 0 && (x.prevDep = _),
      b !== void 0 ? (b.nextDep = _) : (v.deps = _),
      R !== void 0 ? (R.nextSub = _) : (m.subs = _);
  }
  function l(m, v = m.sub) {
    const p = m.dep,
      b = m.prevDep,
      x = m.nextDep,
      R = m.nextSub,
      _ = m.prevSub;
    return (
      x !== void 0 ? (x.prevDep = b) : (v.depsTail = b),
      b !== void 0 ? (b.nextDep = x) : (v.deps = x),
      R !== void 0 ? (R.prevSub = _) : (p.subsTail = _),
      _ !== void 0 ? (_.nextSub = R) : (p.subs = R) === void 0 && s(p),
      x
    );
  }
  function c(m) {
    let v = m.nextSub,
      p;
    t: do {
      const b = m.sub;
      let x = b.flags;
      if (
        (x & 60
          ? x & 12
            ? x & 4
              ? !(x & 48) && g(m, b)
                ? ((b.flags = x | 40), (x &= 1))
                : (x = 0)
              : (b.flags = (x & -9) | 32)
            : (x = 0)
          : (b.flags = x | 32),
        x & 2 && a(b),
        x & 1)
      ) {
        const R = b.subs;
        if (R !== void 0) {
          const _ = (m = R).nextSub;
          _ !== void 0 && ((p = { value: v, prev: p }), (v = _));
          continue;
        }
      }
      if ((m = v) !== void 0) {
        v = m.nextSub;
        continue;
      }
      for (; p !== void 0; )
        if (((m = p.value), (p = p.prev), m !== void 0)) {
          v = m.nextSub;
          continue t;
        }
      break;
    } while (!0);
  }
  function d(m, v) {
    let p,
      b = 0,
      x = !1;
    t: do {
      const R = m.dep,
        _ = R.flags;
      if (v.flags & 16) x = !0;
      else if ((_ & 17) === 17) {
        if (e(R)) {
          const w = R.subs;
          w.nextSub !== void 0 && h(w), (x = !0);
        }
      } else if ((_ & 33) === 33) {
        (m.nextSub !== void 0 || m.prevSub !== void 0) &&
          (p = { value: m, prev: p }),
          (m = R.deps),
          (v = R),
          ++b;
        continue;
      }
      if (!x) {
        const w = m.nextDep;
        if (w !== void 0) {
          m = w;
          continue;
        }
      }
      for (; b--; ) {
        const w = v.subs,
          C = w.nextSub !== void 0;
        if ((C ? ((m = p.value), (p = p.prev)) : (m = w), x)) {
          if (e(v)) {
            C && h(w), (v = m.sub);
            continue;
          }
          x = !1;
        } else v.flags &= -33;
        v = m.sub;
        const k = m.nextDep;
        if (k !== void 0) {
          m = k;
          continue t;
        }
      }
      return x;
    } while (!0);
  }
  function h(m) {
    do {
      const v = m.sub,
        p = v.flags;
      (p & 48) === 32 && ((v.flags = p | 16), (p & 6) === 2 && a(v));
    } while ((m = m.nextSub) !== void 0);
  }
  function g(m, v) {
    let p = v.depsTail;
    for (; p !== void 0; ) {
      if (p === m) return !0;
      p = p.prevDep;
    }
    return !1;
  }
}
function wR(e, a, s) {
  const o = typeof e == "object",
    l = o ? e : void 0;
  return {
    next: (o ? e.next : e)?.bind(l),
    error: (o ? e.error : a)?.bind(l),
    complete: (o ? e.complete : s)?.bind(l),
  };
}
const If = [];
let Tl = 0;
const {
  link: oy,
  unlink: ER,
  propagate: _R,
  checkDirty: $v,
  shallowPropagate: ly,
} = xR({
  update(e) {
    return e._update();
  },
  notify(e) {
    (If[Ff++] = e), (e.flags &= ~Ft.Watching);
  },
  unwatched(e) {
    e.depsTail !== void 0 &&
      ((e.depsTail = void 0), (e.flags = Ft.Mutable | Ft.Dirty), Ll(e));
  },
});
let dl = 0,
  Ff = 0,
  Nn,
  Xf = 0;
function Wv(e) {
  try {
    ++Xf, e();
  } finally {
    --Xf || t0();
  }
}
function Ll(e) {
  const a = e.depsTail;
  let s = a !== void 0 ? a.nextDep : e.deps;
  for (; s !== void 0; ) s = ER(s, e);
}
function t0() {
  if (!(Xf > 0)) {
    for (; dl < Ff; ) {
      const e = If[dl];
      (If[dl++] = void 0), e.notify();
    }
    (dl = 0), (Ff = 0);
  }
}
function uy(e, a) {
  const s = typeof e == "function",
    o = e,
    l = {
      _snapshot: s ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: s ? Ft.None : Ft.Mutable,
      get() {
        return Nn !== void 0 && oy(l, Nn, Tl), l._snapshot;
      },
      subscribe(c) {
        const d = wR(c),
          h = { current: !1 },
          g = RR(() => {
            l.get(), h.current ? d.next?.(l._snapshot) : (h.current = !0);
          });
        return {
          unsubscribe: () => {
            g.stop();
          },
        };
      },
      _update(c) {
        const d = Nn,
          h = a?.compare ?? Object.is;
        if (s) (Nn = l), ++Tl, (l.depsTail = void 0);
        else if (c === void 0) return !1;
        s && (l.flags = Ft.Mutable | Ft.RecursedCheck);
        try {
          const g = l._snapshot,
            m = typeof c == "function" ? c(g) : c === void 0 && s ? o(g) : c;
          return g === void 0 || !h(g, m) ? ((l._snapshot = m), !0) : !1;
        } finally {
          (Nn = d), s && (l.flags &= ~Ft.RecursedCheck), Ll(l);
        }
      },
    };
  return (
    s
      ? ((l.flags = Ft.Mutable | Ft.Dirty),
        (l.get = function () {
          const c = l.flags;
          if (c & Ft.Dirty || (c & Ft.Pending && $v(l.deps, l))) {
            if (l._update()) {
              const d = l.subs;
              d !== void 0 && ly(d);
            }
          } else c & Ft.Pending && (l.flags = c & ~Ft.Pending);
          return Nn !== void 0 && oy(l, Nn, Tl), l._snapshot;
        }))
      : (l.set = function (c) {
          if (l._update(c)) {
            const d = l.subs;
            d !== void 0 && (_R(d), ly(d), t0());
          }
        }),
    l
  );
}
function RR(e) {
  const a = () => {
      const o = Nn;
      (Nn = s),
        ++Tl,
        (s.depsTail = void 0),
        (s.flags = Ft.Watching | Ft.RecursedCheck);
      try {
        return e();
      } finally {
        (Nn = o), (s.flags &= ~Ft.RecursedCheck), Ll(s);
      }
    },
    s = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: Ft.Watching | Ft.RecursedCheck,
      notify() {
        const o = this.flags;
        o & Ft.Dirty || (o & Ft.Pending && $v(this.deps, this))
          ? a()
          : (this.flags = Ft.Watching);
      },
      stop() {
        (this.flags = Ft.None), (this.depsTail = void 0), Ll(this);
      },
    };
  return a(), s;
}
var Rf = { exports: {} },
  Tf = {},
  Cf = { exports: {} },
  Af = {};
var cy;
function TR() {
  if (cy) return Af;
  cy = 1;
  var e = Ii();
  function a(p, b) {
    return (p === b && (p !== 0 || 1 / p === 1 / b)) || (p !== p && b !== b);
  }
  var s = typeof Object.is == "function" ? Object.is : a,
    o = e.useState,
    l = e.useEffect,
    c = e.useLayoutEffect,
    d = e.useDebugValue;
  function h(p, b) {
    var x = b(),
      R = o({ inst: { value: x, getSnapshot: b } }),
      _ = R[0].inst,
      w = R[1];
    return (
      c(
        function () {
          (_.value = x), (_.getSnapshot = b), g(_) && w({ inst: _ });
        },
        [p, x, b]
      ),
      l(
        function () {
          return (
            g(_) && w({ inst: _ }),
            p(function () {
              g(_) && w({ inst: _ });
            })
          );
        },
        [p]
      ),
      d(x),
      x
    );
  }
  function g(p) {
    var b = p.getSnapshot;
    p = p.value;
    try {
      var x = b();
      return !s(p, x);
    } catch {
      return !0;
    }
  }
  function m(p, b) {
    return b();
  }
  var v =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? m
      : h;
  return (
    (Af.useSyncExternalStore =
      e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : v),
    Af
  );
}
var fy;
function CR() {
  return fy || ((fy = 1), (Cf.exports = TR())), Cf.exports;
}
var dy;
function AR() {
  if (dy) return Tf;
  dy = 1;
  var e = Ii(),
    a = CR();
  function s(m, v) {
    return (m === v && (m !== 0 || 1 / m === 1 / v)) || (m !== m && v !== v);
  }
  var o = typeof Object.is == "function" ? Object.is : s,
    l = a.useSyncExternalStore,
    c = e.useRef,
    d = e.useEffect,
    h = e.useMemo,
    g = e.useDebugValue;
  return (
    (Tf.useSyncExternalStoreWithSelector = function (m, v, p, b, x) {
      var R = c(null);
      if (R.current === null) {
        var _ = { hasValue: !1, value: null };
        R.current = _;
      } else _ = R.current;
      R = h(
        function () {
          function C(J) {
            if (!k) {
              if (((k = !0), (q = J), (J = b(J)), x !== void 0 && _.hasValue)) {
                var Y = _.value;
                if (x(Y, J)) return (j = Y);
              }
              return (j = J);
            }
            if (((Y = j), o(q, J))) return Y;
            var U = b(J);
            return x !== void 0 && x(Y, U) ? ((q = J), Y) : ((q = J), (j = U));
          }
          var k = !1,
            q,
            j,
            K = p === void 0 ? null : p;
          return [
            function () {
              return C(v());
            },
            K === null
              ? void 0
              : function () {
                  return C(K());
                },
          ];
        },
        [v, p, b, x]
      );
      var w = l(m, R[0], R[1]);
      return (
        d(
          function () {
            (_.hasValue = !0), (_.value = w);
          },
          [w]
        ),
        g(w),
        w
      );
    }),
    Tf
  );
}
var hy;
function OR() {
  return hy || ((hy = 1), (Rf.exports = AR())), Rf.exports;
}
var MR = OR();
function NR(e, a) {
  return e === a;
}
function te(e, a, s = NR) {
  const o = A.useCallback(
      (d) => {
        if (!e) return () => {};
        const { unsubscribe: h } = e.subscribe(d);
        return h;
      },
      [e]
    ),
    l = A.useCallback(() => e?.get(), [e]);
  return MR.useSyncExternalStoreWithSelector(o, l, l, a, s);
}
var DR = { get: () => {}, subscribe: () => ({ unsubscribe: () => {} }) };
function Cr(e) {
  const a = ve(),
    s = A.useContext(e.from ? SR : Fl),
    o = e.from ?? s,
    l = o
      ? e.from
        ? a.stores.getRouteMatchStore(o)
        : a.stores.matchStores.get(o)
      : void 0,
    c = A.useRef(void 0);
  return te(l ?? DR, (d) => {
    if (((e.shouldThrow ?? !0) && !d && Qe(), d === void 0)) return;
    const h = e.select ? e.select(d) : d;
    if (e.structuralSharing ?? a.options.defaultStructuralSharing) {
      const g = Ha(c.current, h);
      return (c.current = g), g;
    }
    return h;
  });
}
function e0(e) {
  return Cr({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (a) => (e.select ? e.select(a.loaderData) : a.loaderData),
  });
}
function n0(e) {
  const { select: a, ...s } = e;
  return Cr({ ...s, select: (o) => (a ? a(o.loaderDeps) : o.loaderDeps) });
}
function a0(e) {
  return Cr({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (a) => {
      const s = e.strict === !1 ? a.params : a._strictParams;
      return e.select ? e.select(s) : s;
    },
  });
}
function r0(e) {
  return Cr({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (a) => (e.select ? e.select(a.search) : a.search),
  });
}
function s0(e) {
  const a = ve();
  return A.useCallback(
    (s) => a.navigate({ ...s, from: s.from ?? e?.from }),
    [e?.from, a]
  );
}
function i0(e) {
  return Cr({
    ...e,
    select: (a) => (e.select ? e.select(a.context) : a.context),
  });
}
var pd = ev();
const o0 = tv(pd);
function zR(e, a) {
  const s = ve(),
    o = hR(a),
    {
      activeProps: l,
      inactiveProps: c,
      activeOptions: d,
      to: h,
      preload: g,
      preloadDelay: m,
      preloadIntentProximity: v,
      hashScrollIntoView: p,
      replace: b,
      startTransition: x,
      resetScroll: R,
      viewTransition: _,
      children: w,
      target: C,
      disabled: k,
      style: q,
      className: j,
      onClick: K,
      onBlur: J,
      onFocus: Y,
      onMouseEnter: U,
      onMouseLeave: $,
      onTouchStart: it,
      ignoreBlocker: at,
      params: mt,
      search: bt,
      hash: jt,
      state: _t,
      mask: L,
      reloadDocument: Z,
      unsafeRelative: st,
      from: St,
      _fromLocation: et,
      ...N
    } = e,
    Q = md(),
    F = A.useMemo(
      () => e,
      [
        s,
        e.from,
        e._fromLocation,
        e.hash,
        e.to,
        e.search,
        e.params,
        e.state,
        e.mask,
        e.unsafeRelative,
      ]
    ),
    tt = te(
      s.stores.location,
      (Bt) => Bt,
      (Bt, Kt) => Bt.href === Kt.href
    ),
    W = A.useMemo(() => {
      const Bt = { _fromLocation: tt, ...F };
      return s.buildLocation(Bt);
    }, [s, tt, F]),
    rt = W.maskedLocation ? W.maskedLocation.publicHref : W.publicHref,
    yt = W.maskedLocation ? W.maskedLocation.external : W.external,
    pt = A.useMemo(() => HR(rt, yt, s.history, k), [k, yt, rt, s.history]),
    dt = A.useMemo(() => {
      if (pt?.external)
        return Ol(pt.href, s.protocolAllowlist) ? void 0 : pt.href;
      if (!qR(h) && !(typeof h != "string" || h.indexOf(":") === -1))
        try {
          return new URL(h), Ol(h, s.protocolAllowlist) ? void 0 : h;
        } catch {}
    }, [h, pt, s.protocolAllowlist]),
    be = A.useMemo(() => {
      if (dt) return !1;
      if (d?.exact) {
        if (!Rx(tt.pathname, W.pathname, s.basepath)) return !1;
      } else {
        const Bt = Ml(tt.pathname, s.basepath),
          Kt = Ml(W.pathname, s.basepath);
        if (
          !(
            Bt.startsWith(Kt) &&
            (Bt.length === Kt.length || Bt[Kt.length] === "/")
          )
        )
          return !1;
      }
      return (d?.includeSearch ?? !0) &&
        !Ve(tt.search, W.search, {
          partial: !d?.exact,
          ignoreUndefined: !d?.explicitUndefined,
        })
        ? !1
        : d?.includeHash
        ? Q && tt.hash === W.hash
        : !0;
    }, [
      d?.exact,
      d?.explicitUndefined,
      d?.includeHash,
      d?.includeSearch,
      tt,
      dt,
      Q,
      W.hash,
      W.pathname,
      W.search,
      s.basepath,
    ]),
    ie = be ? ka(l, {}) ?? jR : Of,
    ee = be ? Of : ka(c, {}) ?? Of,
    hn = [j, ie.className, ee.className].filter(Boolean).join(" "),
    oe = (q || ie.style || ee.style) && { ...q, ...ie.style, ...ee.style },
    [Za, jn] = A.useState(!1),
    wn = A.useRef(!1),
    tn = e.reloadDocument || dt ? !1 : g ?? s.options.defaultPreload,
    Se = m ?? s.options.defaultPreloadDelay ?? 0,
    Ie = A.useCallback(() => {
      s.preloadRoute({ ...F, _builtLocation: W }).catch((Bt) => {
        console.warn(Bt), console.warn(ow);
      });
    }, [s, F, W]);
  dR(
    o,
    A.useCallback(
      (Bt) => {
        Bt?.isIntersecting && Ie();
      },
      [Ie]
    ),
    kR,
    { disabled: !!k || tn !== "viewport" }
  ),
    A.useEffect(() => {
      wn.current || (!k && tn === "render" && (Ie(), (wn.current = !0)));
    }, [k, Ie, tn]);
  const Ja = (Bt) => {
    const Kt = Bt.currentTarget.getAttribute("target"),
      en = C !== void 0 ? C : Kt;
    if (
      !k &&
      !PR(Bt) &&
      !Bt.defaultPrevented &&
      (!en || en === "_self") &&
      Bt.button === 0
    ) {
      Bt.preventDefault(),
        pd.flushSync(() => {
          jn(!0);
        });
      const Ln = s.subscribe("onResolved", () => {
        Ln(), jn(!1);
      });
      s.navigate({
        ...F,
        replace: b,
        resetScroll: R,
        hashScrollIntoView: p,
        startTransition: x,
        viewTransition: _,
        ignoreBlocker: at,
      });
    }
  };
  if (dt)
    return {
      ...N,
      ref: o,
      href: dt,
      ...(w && { children: w }),
      ...(C && { target: C }),
      ...(k && { disabled: k }),
      ...(q && { style: q }),
      ...(j && { className: j }),
      ...(K && { onClick: K }),
      ...(J && { onBlur: J }),
      ...(Y && { onFocus: Y }),
      ...(U && { onMouseEnter: U }),
      ...($ && { onMouseLeave: $ }),
      ...(it && { onTouchStart: it }),
    };
  const de = (Bt) => {
      if (k || tn !== "intent") return;
      if (!Se) {
        Ie();
        return;
      }
      const Kt = Bt.currentTarget;
      if (ji.has(Kt)) return;
      const en = setTimeout(() => {
        ji.delete(Kt), Ie();
      }, Se);
      ji.set(Kt, en);
    },
    En = (Bt) => {
      k || tn !== "intent" || Ie();
    },
    he = (Bt) => {
      if (k || !tn || !Se) return;
      const Kt = Bt.currentTarget,
        en = ji.get(Kt);
      en && (clearTimeout(en), ji.delete(Kt));
    };
  return {
    ...N,
    ...ie,
    ...ee,
    href: pt?.href,
    ref: o,
    onClick: Ss([K, Ja]),
    onBlur: Ss([J, he]),
    onFocus: Ss([Y, de]),
    onMouseEnter: Ss([U, de]),
    onMouseLeave: Ss([$, he]),
    onTouchStart: Ss([it, En]),
    disabled: !!k,
    target: C,
    ...(oe && { style: oe }),
    ...(hn && { className: hn }),
    ...(k && LR),
    ...(be && UR),
    ...(Q && Za && BR),
  };
}
var Of = {},
  jR = { className: "active" },
  LR = { role: "link", "aria-disabled": !0 },
  UR = { "data-status": "active", "aria-current": "page" },
  BR = { "data-transitioning": "transitioning" },
  ji = new WeakMap(),
  kR = { rootMargin: "100px" },
  Ss = (e) => (a) => {
    for (const s of e)
      if (s) {
        if (a.defaultPrevented) return;
        s(a);
      }
  };
function HR(e, a, s, o) {
  if (!o)
    return a
      ? { href: e, external: !0 }
      : { href: s.createHref(e) || "/", external: !1 };
}
function qR(e) {
  if (typeof e != "string") return !1;
  const a = e.charCodeAt(0);
  return a === 47 ? e.charCodeAt(1) !== 47 : a === 46;
}
var Sn = A.forwardRef((e, a) => {
  const { _asChild: s, ...o } = e,
    { type: l, ...c } = zR(o, a),
    d =
      typeof o.children == "function"
        ? o.children({ isActive: c["data-status"] === "active" })
        : o.children;
  if (!s) {
    const { disabled: h, ...g } = c;
    return A.createElement("a", g, d);
  }
  return A.createElement(s, c, d);
});
function PR(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var YR = class extends pv {
  constructor(a) {
    super(a),
      (this.useMatch = (s) =>
        Cr({
          select: s?.select,
          from: this.id,
          structuralSharing: s?.structuralSharing,
        })),
      (this.useRouteContext = (s) => i0({ ...s, from: this.id })),
      (this.useSearch = (s) =>
        r0({
          select: s?.select,
          structuralSharing: s?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (s) =>
        a0({
          select: s?.select,
          structuralSharing: s?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (s) => n0({ ...s, from: this.id })),
      (this.useLoaderData = (s) => e0({ ...s, from: this.id })),
      (this.useNavigate = () => s0({ from: this.fullPath })),
      (this.Link = nt.forwardRef((s, o) =>
        O.jsx(Sn, { ref: o, from: this.fullPath, ...s })
      ));
  }
};
function VR(e) {
  return new YR(e);
}
function GR() {
  return (e) => IR(e);
}
var QR = class extends fw {
  constructor(e) {
    super(e),
      (this.useMatch = (a) =>
        Cr({
          select: a?.select,
          from: this.id,
          structuralSharing: a?.structuralSharing,
        })),
      (this.useRouteContext = (a) => i0({ ...a, from: this.id })),
      (this.useSearch = (a) =>
        r0({
          select: a?.select,
          structuralSharing: a?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (a) =>
        a0({
          select: a?.select,
          structuralSharing: a?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (a) => n0({ ...a, from: this.id })),
      (this.useLoaderData = (a) => e0({ ...a, from: this.id })),
      (this.useNavigate = () => s0({ from: this.fullPath })),
      (this.Link = nt.forwardRef((a, s) =>
        O.jsx(Sn, { ref: s, from: this.fullPath, ...a })
      ));
  }
};
function IR(e) {
  return new QR(e);
}
function zs(e) {
  return new FR(e, { silent: !0 }).createRoute;
}
var FR = class {
  constructor(e, a) {
    (this.path = e),
      (this.createRoute = (s) => {
        const o = VR(s);
        return (o.isRoot = !1), o;
      }),
      (this.silent = a?.silent);
  }
};
function js(e, a) {
  let s, o, l, c;
  const d = () => (
      s ||
        (s = e()
          .then((g) => {
            (s = void 0), (o = g[a]);
          })
          .catch((g) => {
            if (
              ((l = g),
              ix(l) &&
                l instanceof Error &&
                typeof window < "u" &&
                typeof sessionStorage < "u")
            ) {
              const m = `tanstack_router_reload:${l.message}`;
              sessionStorage.getItem(m) ||
                (sessionStorage.setItem(m, "1"), (c = !0));
            }
          })),
      s
    ),
    h = function (m) {
      if (c) throw (window.location.reload(), new Promise(() => {}));
      if (l) throw l;
      if (!o)
        if (jl) jl(d());
        else throw d();
      return A.createElement(o, m);
    };
  return (h.preload = d), h;
}
function XR(e) {
  const a = ve(),
    s = `not-found-${te(a.stores.location, (o) => o.pathname)}-${te(
      a.stores.status,
      (o) => o
    )}`;
  return O.jsx(dd, {
    getResetKey: () => s,
    onCatch: (o, l) => {
      if (ye(o)) e.onCatch?.(o, l);
      else throw o;
    },
    errorComponent: ({ error: o }) => {
      if (ye(o)) return e.fallback?.(o);
      throw o;
    },
    children: e.children,
  });
}
function KR() {
  return O.jsx("p", { children: "Not Found" });
}
function _s(e) {
  return O.jsx(O.Fragment, { children: e.children });
}
function l0(e, a, s) {
  return a.options.notFoundComponent
    ? O.jsx(a.options.notFoundComponent, { ...s })
    : e.options.defaultNotFoundComponent
    ? O.jsx(e.options.defaultNotFoundComponent, { ...s })
    : O.jsx(KR, {});
}
function ZR(e) {
  return null;
}
function JR() {
  return ZR(ve()), null;
}
var u0 = A.memo(function ({ matchId: a }) {
  const s = ve(),
    o = s.stores.matchStores.get(a);
  o || Qe();
  const l = te(s.stores.loadedAt, (d) => d),
    c = te(o, (d) => d);
  return O.jsx($R, {
    router: s,
    matchId: a,
    resetKey: l,
    matchState: A.useMemo(() => {
      const d = c.routeId,
        h = s.routesById[d].parentRoute?.id;
      return {
        routeId: d,
        ssr: c.ssr,
        _displayPending: c._displayPending,
        parentRouteId: h,
      };
    }, [c._displayPending, c.routeId, c.ssr, s.routesById]),
  });
});
function $R({ router: e, matchId: a, resetKey: s, matchState: o }) {
  const l = e.routesById[o.routeId],
    c = l.options.pendingComponent ?? e.options.defaultPendingComponent,
    d = c ? O.jsx(c, {}) : null,
    h = l.options.errorComponent ?? e.options.defaultErrorComponent,
    g = l.options.onCatch ?? e.options.defaultOnCatch,
    m = l.isRoot
      ? l.options.notFoundComponent ??
        e.options.notFoundRoute?.options.component
      : l.options.notFoundComponent,
    v = o.ssr === !1 || o.ssr === "data-only",
    p =
      (!l.isRoot || l.options.wrapInSuspense || v) &&
      (l.options.wrapInSuspense ??
        c ??
        (l.options.errorComponent?.preload || v))
        ? A.Suspense
        : _s,
    b = h ? dd : _s,
    x = m ? XR : _s;
  return O.jsxs(l.isRoot ? l.options.shellComponent ?? _s : _s, {
    children: [
      O.jsx(Fl.Provider, {
        value: a,
        children: O.jsx(p, {
          fallback: d,
          children: O.jsx(b, {
            getResetKey: () => s,
            errorComponent: h || hd,
            onCatch: (R, _) => {
              if (ye(R)) throw ((R.routeId ??= o.routeId), R);
              g?.(R, _);
            },
            children: O.jsx(x, {
              fallback: (R) => {
                if (
                  ((R.routeId ??= o.routeId),
                  !m ||
                    (R.routeId && R.routeId !== o.routeId) ||
                    (!R.routeId && !l.isRoot))
                )
                  throw R;
                return A.createElement(m, R);
              },
              children:
                v || o._displayPending
                  ? O.jsx(vR, {
                      fallback: d,
                      children: O.jsx(my, { matchId: a }),
                    })
                  : O.jsx(my, { matchId: a }),
            }),
          }),
        }),
      }),
      o.parentRouteId === wr
        ? O.jsxs(O.Fragment, {
            children: [
              O.jsx(WR, { resetKey: s }),
              e.options.scrollRestoration && av ? O.jsx(JR, {}) : null,
            ],
          })
        : null,
    ],
  });
}
function WR({ resetKey: e }) {
  const a = ve(),
    s = A.useRef(void 0);
  return (
    Ui(() => {
      const o = a.latestLocation.href;
      (s.current === void 0 || s.current !== o) &&
        (a.emit({
          type: "onRendered",
          ...As(a.stores.location.get(), a.stores.resolvedLocation.get()),
        }),
        (s.current = o));
    }, [a.latestLocation.state.__TSR_key, e, a]),
    null
  );
}
var my = A.memo(function ({ matchId: a }) {
    const s = ve(),
      o = (v, p) => s.getMatch(v.id)?._nonReactive[p] ?? v._nonReactive[p],
      l = s.stores.matchStores.get(a);
    l || Qe();
    const c = te(l, (v) => v),
      d = c.routeId,
      h = s.routesById[d],
      g = A.useMemo(() => {
        const v = (
          s.routesById[d].options.remountDeps ?? s.options.defaultRemountDeps
        )?.({
          routeId: d,
          loaderDeps: c.loaderDeps,
          params: c._strictParams,
          search: c._strictSearch,
        });
        return v ? JSON.stringify(v) : void 0;
      }, [
        d,
        c.loaderDeps,
        c._strictParams,
        c._strictSearch,
        s.options.defaultRemountDeps,
        s.routesById,
      ]),
      m = A.useMemo(() => {
        const v = h.options.component ?? s.options.defaultComponent;
        return v ? O.jsx(v, {}, g) : O.jsx(c0, {});
      }, [g, h.options.component, s.options.defaultComponent]);
    if (c._displayPending) throw o(c, "displayPendingPromise");
    if (c._forcePending) throw o(c, "minPendingPromise");
    if (c.status === "pending") {
      const v = h.options.pendingMinMs ?? s.options.defaultPendingMinMs;
      if (v) {
        const p = s.getMatch(c.id);
        if (p && !p._nonReactive.minPendingPromise) {
          const b = _r();
          (p._nonReactive.minPendingPromise = b),
            setTimeout(() => {
              b.resolve(), (p._nonReactive.minPendingPromise = void 0);
            }, v);
        }
      }
      throw o(c, "loadPromise");
    }
    if (c.status === "notFound") return ye(c.error) || Qe(), l0(s, h, c.error);
    if (c.status === "redirected")
      throw (Ge(c.error) || Qe(), o(c, "loadPromise"));
    if (c.status === "error") throw c.error;
    return m;
  }),
  c0 = A.memo(function () {
    const a = ve(),
      s = A.useContext(Fl);
    let o,
      l = !1,
      c;
    {
      const m = s ? a.stores.matchStores.get(s) : void 0;
      ([o, l] = te(m, (v) => [v?.routeId, v?.globalNotFound ?? !1])),
        (c = te(a.stores.matchesId, (v) => v[v.findIndex((p) => p === s) + 1]));
    }
    const d = o ? a.routesById[o] : void 0,
      h = a.options.defaultPendingComponent
        ? O.jsx(a.options.defaultPendingComponent, {})
        : null;
    if (l) return d || Qe(), l0(a, d, void 0);
    if (!c) return null;
    const g = O.jsx(u0, { matchId: c });
    return o === wr ? O.jsx(A.Suspense, { fallback: h, children: g }) : g;
  });
function t2() {
  const e = ve(),
    a = A.useRef({ router: e, mounted: !1 }),
    [s, o] = A.useState(!1),
    l = te(e.stores.isLoading, (p) => p),
    c = te(e.stores.hasPending, (p) => p),
    d = _f(l),
    h = l || s || c,
    g = _f(h),
    m = l || c,
    v = _f(m);
  return (
    (e.startTransition = (p) => {
      o(!0),
        A.startTransition(() => {
          p(), o(!1);
        });
    }),
    A.useEffect(() => {
      const p = e.history.subscribe(e.load),
        b = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        Ya(e.latestLocation.publicHref) !== Ya(b.publicHref) &&
          e.commitLocation({ ...b, replace: !0 }),
        () => {
          p();
        }
      );
    }, [e, e.history]),
    Ui(() => {
      if (
        (typeof window < "u" && e.ssr) ||
        (a.current.router === e && a.current.mounted)
      )
        return;
      (a.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (b) {
            console.error(b);
          }
        })();
    }, [e]),
    Ui(() => {
      d &&
        !l &&
        e.emit({
          type: "onLoad",
          ...As(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [d, e, l]),
    Ui(() => {
      v &&
        !m &&
        e.emit({
          type: "onBeforeRouteMount",
          ...As(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [m, v, e]),
    Ui(() => {
      if (g && !h) {
        const p = As(e.stores.location.get(), e.stores.resolvedLocation.get());
        e.emit({ type: "onResolved", ...p }),
          Wv(() => {
            e.stores.status.set("idle"),
              e.stores.resolvedLocation.set(e.stores.location.get());
          }),
          p.hrefChanged && dw(e);
      }
    }, [h, g, e]),
    null
  );
}
function e2() {
  const e = ve(),
    a =
      e.routesById[wr].options.pendingComponent ??
      e.options.defaultPendingComponent,
    s = a ? O.jsx(a, {}) : null,
    o = O.jsxs(typeof document < "u" && e.ssr ? _s : A.Suspense, {
      fallback: s,
      children: [O.jsx(t2, {}), O.jsx(n2, {})],
    });
  return e.options.InnerWrap ? O.jsx(e.options.InnerWrap, { children: o }) : o;
}
function n2() {
  const e = ve(),
    a = te(e.stores.firstId, (l) => l),
    s = te(e.stores.loadedAt, (l) => l),
    o = a ? O.jsx(u0, { matchId: a }) : null;
  return O.jsx(Fl.Provider, {
    value: a,
    children: e.options.disableGlobalCatchBoundary
      ? o
      : O.jsx(dd, {
          getResetKey: () => s,
          errorComponent: hd,
          onCatch: void 0,
          children: o,
        }),
  });
}
var a2 = (e) => ({
    createMutableStore: uy,
    createReadonlyStore: uy,
    batch: Wv,
  }),
  r2 = (e) => new s2(e),
  s2 = class extends Wx {
    constructor(e) {
      super(e, a2);
    }
  };
function i2({ router: e, children: a, ...s }) {
  Object.keys(s).length > 0 &&
    e.update({
      ...e.options,
      ...s,
      context: { ...e.options.context, ...s.context },
    });
  const o = O.jsx(Jv.Provider, { value: e, children: a });
  return e.options.Wrap ? O.jsx(e.options.Wrap, { children: o }) : o;
}
function o2({ router: e, ...a }) {
  return O.jsx(i2, { router: e, ...a, children: O.jsx(e2, {}) });
}
function l2(e) {
  const a = ve({ warn: e?.router === void 0 }),
    s = e?.router || a,
    o = A.useRef(void 0);
  return te(s.stores.__store, (l) => {
    if (e?.select) {
      if (e.structuralSharing ?? s.options.defaultStructuralSharing) {
        const c = Ha(o.current, e.select(l));
        return (o.current = c), c;
      }
      return e.select(l);
    }
    return l;
  });
}
function f0(e) {
  const { attrs: a, children: s, nonce: o } = e;
  switch (e.tag) {
    case "title":
      return O.jsx("title", {
        ...a,
        suppressHydrationWarning: !0,
        children: s,
      });
    case "meta":
      return O.jsx("meta", { ...a, suppressHydrationWarning: !0 });
    case "link":
      return O.jsx("link", {
        ...a,
        precedence:
          a?.precedence ?? (a?.rel === "stylesheet" ? "default" : void 0),
        nonce: o,
        suppressHydrationWarning: !0,
      });
    case "style":
      return (
        e.inlineCss,
        O.jsx("style", {
          ...a,
          dangerouslySetInnerHTML: { __html: s },
          nonce: o,
        })
      );
    case "script":
      return O.jsx(u2, { attrs: a, children: s });
    default:
      return null;
  }
}
function u2({ attrs: e, children: a }) {
  ve();
  const s = md(),
    o =
      typeof e?.type == "string" &&
      e.type !== "" &&
      e.type !== "text/javascript" &&
      e.type !== "module";
  if (
    (A.useEffect(() => {
      if (!o) {
        if (e?.src) {
          const l = (() => {
            try {
              const d = document.baseURI || window.location.href;
              return new URL(e.src, d).href;
            } catch {
              return e.src;
            }
          })();
          if (
            Array.from(document.querySelectorAll("script[src]")).find(
              (d) => d.src === l
            )
          )
            return;
          const c = document.createElement("script");
          for (const [d, h] of Object.entries(e))
            d !== "suppressHydrationWarning" &&
              h !== void 0 &&
              h !== !1 &&
              c.setAttribute(d, typeof h == "boolean" ? "" : String(h));
          return (
            document.head.appendChild(c),
            () => {
              c.parentNode && c.parentNode.removeChild(c);
            }
          );
        }
        if (typeof a == "string") {
          const l = typeof e?.type == "string" ? e.type : "text/javascript",
            c = typeof e?.nonce == "string" ? e.nonce : void 0;
          if (
            Array.from(document.querySelectorAll("script:not([src])")).find(
              (h) => {
                if (!(h instanceof HTMLScriptElement)) return !1;
                const g = h.getAttribute("type") ?? "text/javascript",
                  m = h.getAttribute("nonce") ?? void 0;
                return h.textContent === a && g === l && m === c;
              }
            )
          )
            return;
          const d = document.createElement("script");
          if (((d.textContent = a), e))
            for (const [h, g] of Object.entries(e))
              h !== "suppressHydrationWarning" &&
                g !== void 0 &&
                g !== !1 &&
                d.setAttribute(h, typeof g == "boolean" ? "" : String(g));
          return (
            document.head.appendChild(d),
            () => {
              d.parentNode && d.parentNode.removeChild(d);
            }
          );
        }
      }
    }, [e, a, o]),
    o && typeof a == "string")
  )
    return O.jsx("script", {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: a },
    });
  if (!s) {
    if (e?.src) return O.jsx("script", { ...e, suppressHydrationWarning: !0 });
    if (typeof a == "string")
      return O.jsx("script", {
        ...e,
        dangerouslySetInnerHTML: { __html: a },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var c2 = (e) => {
  const a = ve(),
    s = a.options.ssr?.nonce,
    o = te(a.stores.matches, (m) => m.map((v) => v.meta).filter(Boolean), Ve),
    l = A.useMemo(() => {
      const m = [],
        v = {};
      let p;
      for (let b = o.length - 1; b >= 0; b--) {
        const x = o[b];
        for (let R = x.length - 1; R >= 0; R--) {
          const _ = x[R];
          if (_)
            if (_.title) p || (p = { tag: "title", children: _.title });
            else if ("script:ld+json" in _)
              try {
                const w = JSON.stringify(_["script:ld+json"]);
                m.push({
                  tag: "script",
                  attrs: { type: "application/ld+json" },
                  children: fx(w),
                });
              } catch {}
            else {
              const w = _.name ?? _.property;
              if (w) {
                if (v[w]) continue;
                v[w] = !0;
              }
              m.push({ tag: "meta", attrs: { ..._, nonce: s } });
            }
        }
      }
      return (
        p && m.push(p),
        s &&
          m.push({ tag: "meta", attrs: { property: "csp-nonce", content: s } }),
        m.reverse(),
        m
      );
    }, [o, s]),
    c = te(
      a.stores.matches,
      (m) => {
        const v = m
            .map((x) => x.links)
            .filter(Boolean)
            .flat(1)
            .map((x) => ({ tag: "link", attrs: { ...x, nonce: s } })),
          p = a.ssr?.manifest,
          b = m
            .map((x) => p?.routes[x.routeId]?.assets ?? [])
            .filter(Boolean)
            .flat(1)
            .flatMap((x) =>
              x.tag === "link"
                ? cw(p, x)
                  ? []
                  : [
                      {
                        tag: "link",
                        attrs: {
                          ...x.attrs,
                          crossOrigin:
                            Fg(e, "stylesheet") ?? x.attrs?.crossOrigin,
                          suppressHydrationWarning: !0,
                          nonce: s,
                        },
                      },
                    ]
                : x.tag === "style"
                ? [
                    {
                      tag: "style",
                      attrs: { ...x.attrs, nonce: s },
                      children: x.children,
                      ...(x.inlineCss ? { inlineCss: !0 } : {}),
                    },
                  ]
                : []
            );
        return [...v, ...b];
      },
      Ve
    ),
    d = te(
      a.stores.matches,
      (m) => {
        const v = [];
        return (
          m
            .map((p) => a.looseRoutesById[p.routeId])
            .forEach((p) =>
              a.ssr?.manifest?.routes[p.id]?.preloads
                ?.filter(Boolean)
                .forEach((b) => {
                  const x = lw(b);
                  v.push({
                    tag: "link",
                    attrs: {
                      rel: "modulepreload",
                      href: x.href,
                      crossOrigin: Fg(e, "modulepreload") ?? x.crossOrigin,
                      nonce: s,
                    },
                  });
                })
            ),
          v
        );
      },
      Ve
    ),
    h = te(
      a.stores.matches,
      (m) =>
        m
          .map((v) => v.styles)
          .flat(1)
          .filter(Boolean)
          .map(({ children: v, ...p }) => ({
            tag: "style",
            attrs: { ...p, nonce: s },
            children: v,
          })),
      Ve
    ),
    g = te(
      a.stores.matches,
      (m) =>
        m
          .map((v) => v.headScripts)
          .flat(1)
          .filter(Boolean)
          .map(({ children: v, ...p }) => ({
            tag: "script",
            attrs: { ...p, nonce: s },
            children: v,
          })),
      Ve
    );
  return f2([...l, ...d, ...c, ...h, ...g], (m) => JSON.stringify(m));
};
function f2(e, a) {
  const s = new Set();
  return e.filter((o) => {
    const l = a(o);
    return s.has(l) ? !1 : (s.add(l), !0);
  });
}
function d2(e) {
  const a = c2(e.assetCrossOrigin),
    s = ve().options.ssr?.nonce;
  return O.jsx(O.Fragment, {
    children: a.map((o) =>
      A.createElement(f0, {
        ...o,
        key: `tsr-meta-${JSON.stringify(o)}`,
        nonce: s,
      })
    ),
  });
}
var h2 = () => {
  const e = ve(),
    a = e.options.ssr?.nonce,
    s = (c) => {
      const d = [],
        h = e.ssr?.manifest;
      return h
        ? (c
            .map((g) => e.looseRoutesById[g.routeId])
            .forEach((g) =>
              h.routes[g.id]?.assets
                ?.filter((m) => m.tag === "script")
                .forEach((m) => {
                  d.push({
                    tag: "script",
                    attrs: { ...m.attrs, nonce: a },
                    children: m.children,
                  });
                })
            ),
          d)
        : [];
    },
    o = (c) =>
      c
        .map((d) => d.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: d, ...h }) => ({
          tag: "script",
          attrs: { ...h, suppressHydrationWarning: !0, nonce: a },
          children: d,
        })),
    l = te(e.stores.matches, s, Ve);
  return m2(e, te(e.stores.matches, o, Ve), l);
};
function m2(e, a, s) {
  let o;
  e.serverSsr && (o = e.serverSsr.takeBufferedScripts());
  const l = [...a, ...s];
  return (
    o && l.unshift(o),
    O.jsx(O.Fragment, {
      children: l.map((c, d) =>
        A.createElement(f0, { ...c, key: `tsr-scripts-${c.tag}-${d}` })
      ),
    })
  );
}
var Cs = (e, a) => {
  const s = { type: "request", ...(a || e) };
  return {
    options: s,
    middleware: (o) => Cs({}, Object.assign(s, { middleware: o })),
    inputValidator: (o) => Cs({}, Object.assign(s, { inputValidator: o })),
    client: (o) => Cs({}, Object.assign(s, { client: o })),
    server: (o) => Cs({}, Object.assign(s, { server: o })),
  };
};
function d0(e, a) {
  for (let s = 0, o = a.length; s < o; s++) {
    const l = a[s];
    e.has(l) || (e.add(l), l.extends && d0(e, l.extends));
  }
}
var p2 = (e) => ({
  getOptions: async () => {
    const a = await e();
    if (a.serializationAdapters) {
      const s = new Set();
      d0(s, a.serializationAdapters), (a.serializationAdapters = Array.from(s));
    }
    return a;
  },
  createMiddleware: Cs,
});
const g2 = Cs(),
  py = p2(() => ({ requestMiddleware: [g2] }));
var Xl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  y2 = class extends Xl {
    #t;
    #n;
    #e;
    constructor() {
      super(),
        (this.#e = (e) => {
          if (typeof window < "u" && window.addEventListener) {
            const a = () => e();
            return (
              window.addEventListener("visibilitychange", a, !1),
              () => {
                window.removeEventListener("visibilitychange", a);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#n || this.setEventListener(this.#e);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#n?.(), (this.#n = void 0));
    }
    setEventListener(e) {
      (this.#e = e),
        this.#n?.(),
        (this.#n = e((a) => {
          typeof a == "boolean" ? this.setFocused(a) : this.onFocus();
        }));
    }
    setFocused(e) {
      this.#t !== e && ((this.#t = e), this.onFocus());
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach((a) => {
        a(e);
      });
    }
    isFocused() {
      return typeof this.#t == "boolean"
        ? this.#t
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  h0 = new y2(),
  v2 = {
    setTimeout: (e, a) => setTimeout(e, a),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, a) => setInterval(e, a),
    clearInterval: (e) => clearInterval(e),
  },
  b2 = class {
    #t = v2;
    #n = !1;
    setTimeoutProvider(e) {
      this.#t = e;
    }
    setTimeout(e, a) {
      return this.#t.setTimeout(e, a);
    }
    clearTimeout(e) {
      this.#t.clearTimeout(e);
    }
    setInterval(e, a) {
      return this.#t.setInterval(e, a);
    }
    clearInterval(e) {
      this.#t.clearInterval(e);
    }
  },
  Kf = new b2();
function S2(e) {
  setTimeout(e, 0);
}
var x2 = typeof window > "u" || "Deno" in globalThis;
function bn() {}
function w2(e, a) {
  return typeof e == "function" ? e(a) : e;
}
function E2(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function _2(e, a) {
  return Math.max(e + (a || 0) - Date.now(), 0);
}
function Zf(e, a) {
  return typeof e == "function" ? e(a) : e;
}
function R2(e, a) {
  return typeof e == "function" ? e(a) : e;
}
function gy(e, a) {
  const {
    type: s = "all",
    exact: o,
    fetchStatus: l,
    predicate: c,
    queryKey: d,
    stale: h,
  } = e;
  if (d) {
    if (o) {
      if (a.queryHash !== gd(d, a.options)) return !1;
    } else if (!Vi(a.queryKey, d)) return !1;
  }
  if (s !== "all") {
    const g = a.isActive();
    if ((s === "active" && !g) || (s === "inactive" && g)) return !1;
  }
  return !(
    (typeof h == "boolean" && a.isStale() !== h) ||
    (l && l !== a.state.fetchStatus) ||
    (c && !c(a))
  );
}
function yy(e, a) {
  const { exact: s, status: o, predicate: l, mutationKey: c } = e;
  if (c) {
    if (!a.options.mutationKey) return !1;
    if (s) {
      if (Yi(a.options.mutationKey) !== Yi(c)) return !1;
    } else if (!Vi(a.options.mutationKey, c)) return !1;
  }
  return !((o && a.state.status !== o) || (l && !l(a)));
}
function gd(e, a) {
  return (a?.queryKeyHashFn || Yi)(e);
}
function Yi(e) {
  return JSON.stringify(e, (a, s) =>
    Jf(s)
      ? Object.keys(s)
          .sort()
          .reduce((o, l) => ((o[l] = s[l]), o), {})
      : s
  );
}
function Vi(e, a) {
  return e === a
    ? !0
    : typeof e != typeof a
    ? !1
    : e && a && typeof e == "object" && typeof a == "object"
    ? Object.keys(a).every((s) => Vi(e[s], a[s]))
    : !1;
}
var T2 = Object.prototype.hasOwnProperty;
function m0(e, a, s = 0) {
  if (e === a) return e;
  if (s > 500) return a;
  const o = vy(e) && vy(a);
  if (!o && !(Jf(e) && Jf(a))) return a;
  const c = (o ? e : Object.keys(e)).length,
    d = o ? a : Object.keys(a),
    h = d.length,
    g = o ? new Array(h) : {};
  let m = 0;
  for (let v = 0; v < h; v++) {
    const p = o ? v : d[v],
      b = e[p],
      x = a[p];
    if (b === x) {
      (g[p] = b), (o ? v < c : T2.call(e, p)) && m++;
      continue;
    }
    if (
      b === null ||
      x === null ||
      typeof b != "object" ||
      typeof x != "object"
    ) {
      g[p] = x;
      continue;
    }
    const R = m0(b, x, s + 1);
    (g[p] = R), R === b && m++;
  }
  return c === h && m === c ? e : g;
}
function LM(e, a) {
  if (!a || Object.keys(e).length !== Object.keys(a).length) return !1;
  for (const s in e) if (e[s] !== a[s]) return !1;
  return !0;
}
function vy(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Jf(e) {
  if (!by(e)) return !1;
  const a = e.constructor;
  if (a === void 0) return !0;
  const s = a.prototype;
  return !(
    !by(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function by(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function C2(e) {
  return new Promise((a) => {
    Kf.setTimeout(a, e);
  });
}
function A2(e, a, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(e, a)
    : s.structuralSharing !== !1
    ? m0(e, a)
    : a;
}
function O2(e, a, s = 0) {
  const o = [...e, a];
  return s && o.length > s ? o.slice(1) : o;
}
function M2(e, a, s = 0) {
  const o = [a, ...e];
  return s && o.length > s ? o.slice(0, -1) : o;
}
var yd = Symbol();
function p0(e, a) {
  return !e.queryFn && a?.initialPromise
    ? () => a.initialPromise
    : !e.queryFn || e.queryFn === yd
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
function UM(e, a) {
  return typeof e == "function" ? e(...a) : !!e;
}
function N2(e, a, s) {
  let o = !1,
    l;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (l ??= a()),
        o ||
          ((o = !0),
          l.aborted ? s() : l.addEventListener("abort", s, { once: !0 })),
        l
      ),
    }),
    e
  );
}
var g0 = (() => {
  let e = () => x2;
  return {
    isServer() {
      return e();
    },
    setIsServer(a) {
      e = a;
    },
  };
})();
function D2() {
  let e, a;
  const s = new Promise((l, c) => {
    (e = l), (a = c);
  });
  (s.status = "pending"), s.catch(() => {});
  function o(l) {
    Object.assign(s, l), delete s.resolve, delete s.reject;
  }
  return (
    (s.resolve = (l) => {
      o({ status: "fulfilled", value: l }), e(l);
    }),
    (s.reject = (l) => {
      o({ status: "rejected", reason: l }), a(l);
    }),
    s
  );
}
var z2 = S2;
function j2() {
  let e = [],
    a = 0,
    s = (h) => {
      h();
    },
    o = (h) => {
      h();
    },
    l = z2;
  const c = (h) => {
      a
        ? e.push(h)
        : l(() => {
            s(h);
          });
    },
    d = () => {
      const h = e;
      (e = []),
        h.length &&
          l(() => {
            o(() => {
              h.forEach((g) => {
                s(g);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let g;
      a++;
      try {
        g = h();
      } finally {
        a--, a || d();
      }
      return g;
    },
    batchCalls:
      (h) =>
      (...g) => {
        c(() => {
          h(...g);
        });
      },
    schedule: c,
    setNotifyFunction: (h) => {
      s = h;
    },
    setBatchNotifyFunction: (h) => {
      o = h;
    },
    setScheduler: (h) => {
      l = h;
    },
  };
}
var Ne = j2(),
  L2 = class extends Xl {
    #t = !0;
    #n;
    #e;
    constructor() {
      super(),
        (this.#e = (e) => {
          if (typeof window < "u" && window.addEventListener) {
            const a = () => e(!0),
              s = () => e(!1);
            return (
              window.addEventListener("online", a, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", a),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#n || this.setEventListener(this.#e);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#n?.(), (this.#n = void 0));
    }
    setEventListener(e) {
      (this.#e = e), this.#n?.(), (this.#n = e(this.setOnline.bind(this)));
    }
    setOnline(e) {
      this.#t !== e &&
        ((this.#t = e),
        this.listeners.forEach((s) => {
          s(e);
        }));
    }
    isOnline() {
      return this.#t;
    }
  },
  Ul = new L2();
function U2(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function y0(e) {
  return (e ?? "online") === "online" ? Ul.isOnline() : !0;
}
var $f = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e?.revert),
      (this.silent = e?.silent);
  }
};
function v0(e) {
  let a = !1,
    s = 0,
    o;
  const l = D2(),
    c = () => l.status !== "pending",
    d = (_) => {
      if (!c()) {
        const w = new $f(_);
        b(w), e.onCancel?.(w);
      }
    },
    h = () => {
      a = !0;
    },
    g = () => {
      a = !1;
    },
    m = () =>
      h0.isFocused() &&
      (e.networkMode === "always" || Ul.isOnline()) &&
      e.canRun(),
    v = () => y0(e.networkMode) && e.canRun(),
    p = (_) => {
      c() || (o?.(), l.resolve(_));
    },
    b = (_) => {
      c() || (o?.(), l.reject(_));
    },
    x = () =>
      new Promise((_) => {
        (o = (w) => {
          (c() || m()) && _(w);
        }),
          e.onPause?.();
      }).then(() => {
        (o = void 0), c() || e.onContinue?.();
      }),
    R = () => {
      if (c()) return;
      let _;
      const w = s === 0 ? e.initialPromise : void 0;
      try {
        _ = w ?? e.fn();
      } catch (C) {
        _ = Promise.reject(C);
      }
      Promise.resolve(_)
        .then(p)
        .catch((C) => {
          if (c()) return;
          const k = e.retry ?? (g0.isServer() ? 0 : 3),
            q = e.retryDelay ?? U2,
            j = typeof q == "function" ? q(s, C) : q,
            K =
              k === !0 ||
              (typeof k == "number" && s < k) ||
              (typeof k == "function" && k(s, C));
          if (a || !K) {
            b(C);
            return;
          }
          s++,
            e.onFail?.(s, C),
            C2(j)
              .then(() => (m() ? void 0 : x()))
              .then(() => {
                a ? b(C) : R();
              });
        });
    };
  return {
    promise: l,
    status: () => l.status,
    cancel: d,
    continue: () => (o?.(), l),
    cancelRetry: h,
    continueRetry: g,
    canStart: v,
    start: () => (v() ? R() : x().then(R), l),
  };
}
var b0 = class {
    #t;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        E2(this.gcTime) &&
          (this.#t = Kf.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(
        this.gcTime || 0,
        e ?? (g0.isServer() ? 1 / 0 : 300 * 1e3)
      );
    }
    clearGcTimeout() {
      this.#t !== void 0 && (Kf.clearTimeout(this.#t), (this.#t = void 0));
    }
  },
  B2 = class extends b0 {
    #t;
    #n;
    #e;
    #r;
    #a;
    #s;
    #i;
    constructor(e) {
      super(),
        (this.#i = !1),
        (this.#s = e.defaultOptions),
        this.setOptions(e.options),
        (this.observers = []),
        (this.#r = e.client),
        (this.#e = this.#r.getQueryCache()),
        (this.queryKey = e.queryKey),
        (this.queryHash = e.queryHash),
        (this.#t = xy(this.options)),
        (this.state = e.state ?? this.#t),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#a?.promise;
    }
    setOptions(e) {
      if (
        ((this.options = { ...this.#s, ...e }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const a = xy(this.options);
        a.data !== void 0 &&
          (this.setState(Sy(a.data, a.dataUpdatedAt)), (this.#t = a));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#e.remove(this);
    }
    setData(e, a) {
      const s = A2(this.state.data, e, this.options);
      return (
        this.#o({
          data: s,
          type: "success",
          dataUpdatedAt: a?.updatedAt,
          manual: a?.manual,
        }),
        s
      );
    }
    setState(e, a) {
      this.#o({ type: "setState", state: e, setStateOptions: a });
    }
    cancel(e) {
      const a = this.#a?.promise;
      return this.#a?.cancel(e), a ? a.then(bn).catch(bn) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    get resetState() {
      return this.#t;
    }
    reset() {
      this.destroy(), this.setState(this.resetState);
    }
    isActive() {
      return this.observers.some((e) => R2(e.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === yd || !this.isFetched();
    }
    isFetched() {
      return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => Zf(e.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => e.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(e = 0) {
      return this.state.data === void 0
        ? !0
        : e === "static"
        ? !1
        : this.state.isInvalidated
        ? !0
        : !_2(this.state.dataUpdatedAt, e);
    }
    onFocus() {
      this.observers
        .find((a) => a.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue();
    }
    onOnline() {
      this.observers
        .find((a) => a.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue();
    }
    addObserver(e) {
      this.observers.includes(e) ||
        (this.observers.push(e),
        this.clearGcTimeout(),
        this.#e.notify({ type: "observerAdded", query: this, observer: e }));
    }
    removeObserver(e) {
      this.observers.includes(e) &&
        ((this.observers = this.observers.filter((a) => a !== e)),
        this.observers.length ||
          (this.#a &&
            (this.#i || this.#l()
              ? this.#a.cancel({ revert: !0 })
              : this.#a.cancelRetry()),
          this.scheduleGc()),
        this.#e.notify({ type: "observerRemoved", query: this, observer: e }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    #l() {
      return (
        this.state.fetchStatus === "paused" && this.state.status === "pending"
      );
    }
    invalidate() {
      this.state.isInvalidated || this.#o({ type: "invalidate" });
    }
    async fetch(e, a) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#a?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && a?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
      }
      if ((e && this.setOptions(e), !this.options.queryFn)) {
        const h = this.observers.find((g) => g.options.queryFn);
        h && this.setOptions(h.options);
      }
      const s = new AbortController(),
        o = (h) => {
          Object.defineProperty(h, "signal", {
            enumerable: !0,
            get: () => ((this.#i = !0), s.signal),
          });
        },
        l = () => {
          const h = p0(this.options, a),
            m = (() => {
              const v = {
                client: this.#r,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return o(v), v;
            })();
          return (
            (this.#i = !1),
            this.options.persister ? this.options.persister(h, m, this) : h(m)
          );
        },
        d = (() => {
          const h = {
            fetchOptions: a,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#r,
            state: this.state,
            fetchFn: l,
          };
          return o(h), h;
        })();
      this.options.behavior?.onFetch(d, this),
        (this.#n = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== d.fetchOptions?.meta) &&
          this.#o({ type: "fetch", meta: d.fetchOptions?.meta }),
        (this.#a = v0({
          initialPromise: a?.initialPromise,
          fn: d.fetchFn,
          onCancel: (h) => {
            h instanceof $f &&
              h.revert &&
              this.setState({ ...this.#n, fetchStatus: "idle" }),
              s.abort();
          },
          onFail: (h, g) => {
            this.#o({ type: "failed", failureCount: h, error: g });
          },
          onPause: () => {
            this.#o({ type: "pause" });
          },
          onContinue: () => {
            this.#o({ type: "continue" });
          },
          retry: d.options.retry,
          retryDelay: d.options.retryDelay,
          networkMode: d.options.networkMode,
          canRun: () => !0,
        }));
      try {
        const h = await this.#a.start();
        if (h === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(h),
          this.#e.config.onSuccess?.(h, this),
          this.#e.config.onSettled?.(h, this.state.error, this),
          h
        );
      } catch (h) {
        if (h instanceof $f) {
          if (h.silent) return this.#a.promise;
          if (h.revert) {
            if (this.state.data === void 0) throw h;
            return this.state.data;
          }
        }
        throw (
          (this.#o({ type: "error", error: h }),
          this.#e.config.onError?.(h, this),
          this.#e.config.onSettled?.(this.state.data, h, this),
          h)
        );
      } finally {
        this.scheduleGc();
      }
    }
    #o(e) {
      const a = (s) => {
        switch (e.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...k2(s.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case "success":
            const o = {
              ...s,
              ...Sy(e.data, e.dataUpdatedAt),
              dataUpdateCount: s.dataUpdateCount + 1,
              ...(!e.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return (this.#n = e.manual ? o : void 0), o;
          case "error":
            const l = e.error;
            return {
              ...s,
              error: l,
              errorUpdateCount: s.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: s.fetchFailureCount + 1,
              fetchFailureReason: l,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...e.state };
        }
      };
      (this.state = a(this.state)),
        Ne.batch(() => {
          this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            this.#e.notify({ query: this, type: "updated", action: e });
        });
    }
  };
function k2(e, a) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: y0(a.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Sy(e, a) {
  return {
    data: e,
    dataUpdatedAt: a ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function xy(e) {
  const a =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    s = a !== void 0,
    o = s
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: a,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? o ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
function wy(e) {
  return {
    onFetch: (a, s) => {
      const o = a.options,
        l = a.fetchOptions?.meta?.fetchMore?.direction,
        c = a.state.data?.pages || [],
        d = a.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        g = 0;
      const m = async () => {
        let v = !1;
        const p = (R) => {
            N2(
              R,
              () => a.signal,
              () => (v = !0)
            );
          },
          b = p0(a.options, a.fetchOptions),
          x = async (R, _, w) => {
            if (v) return Promise.reject();
            if (_ == null && R.pages.length) return Promise.resolve(R);
            const k = (() => {
                const J = {
                  client: a.client,
                  queryKey: a.queryKey,
                  pageParam: _,
                  direction: w ? "backward" : "forward",
                  meta: a.options.meta,
                };
                return p(J), J;
              })(),
              q = await b(k),
              { maxPages: j } = a.options,
              K = w ? M2 : O2;
            return {
              pages: K(R.pages, q, j),
              pageParams: K(R.pageParams, _, j),
            };
          };
        if (l && c.length) {
          const R = l === "backward",
            _ = R ? H2 : Ey,
            w = { pages: c, pageParams: d },
            C = _(o, w);
          h = await x(w, C, R);
        } else {
          const R = e ?? c.length;
          do {
            const _ = g === 0 ? d[0] ?? o.initialPageParam : Ey(o, h);
            if (g > 0 && _ == null) break;
            (h = await x(h, _)), g++;
          } while (g < R);
        }
        return h;
      };
      a.options.persister
        ? (a.fetchFn = () =>
            a.options.persister?.(
              m,
              {
                client: a.client,
                queryKey: a.queryKey,
                meta: a.options.meta,
                signal: a.signal,
              },
              s
            ))
        : (a.fetchFn = m);
    },
  };
}
function Ey(e, { pages: a, pageParams: s }) {
  const o = a.length - 1;
  return a.length > 0 ? e.getNextPageParam(a[o], a, s[o], s) : void 0;
}
function H2(e, { pages: a, pageParams: s }) {
  return a.length > 0 ? e.getPreviousPageParam?.(a[0], a, s[0], s) : void 0;
}
var q2 = class extends b0 {
  #t;
  #n;
  #e;
  #r;
  constructor(e) {
    super(),
      (this.#t = e.client),
      (this.mutationId = e.mutationId),
      (this.#e = e.mutationCache),
      (this.#n = []),
      (this.state = e.state || P2()),
      this.setOptions(e.options),
      this.scheduleGc();
  }
  setOptions(e) {
    (this.options = e), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#n.includes(e) ||
      (this.#n.push(e),
      this.clearGcTimeout(),
      this.#e.notify({ type: "observerAdded", mutation: this, observer: e }));
  }
  removeObserver(e) {
    (this.#n = this.#n.filter((a) => a !== e)),
      this.scheduleGc(),
      this.#e.notify({ type: "observerRemoved", mutation: this, observer: e });
  }
  optionalRemove() {
    this.#n.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#e.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    const a = () => {
        this.#a({ type: "continue" });
      },
      s = {
        client: this.#t,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = v0({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, s)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (c, d) => {
        this.#a({ type: "failed", failureCount: c, error: d });
      },
      onPause: () => {
        this.#a({ type: "pause" });
      },
      onContinue: a,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#e.canRun(this),
    });
    const o = this.state.status === "pending",
      l = !this.#r.canStart();
    try {
      if (o) a();
      else {
        this.#a({ type: "pending", variables: e, isPaused: l }),
          this.#e.config.onMutate &&
            (await this.#e.config.onMutate(e, this, s));
        const d = await this.options.onMutate?.(e, s);
        d !== this.state.context &&
          this.#a({ type: "pending", context: d, variables: e, isPaused: l });
      }
      const c = await this.#r.start();
      return (
        await this.#e.config.onSuccess?.(c, e, this.state.context, this, s),
        await this.options.onSuccess?.(c, e, this.state.context, s),
        await this.#e.config.onSettled?.(
          c,
          null,
          this.state.variables,
          this.state.context,
          this,
          s
        ),
        await this.options.onSettled?.(c, null, e, this.state.context, s),
        this.#a({ type: "success", data: c }),
        c
      );
    } catch (c) {
      try {
        await this.#e.config.onError?.(c, e, this.state.context, this, s);
      } catch (d) {
        Promise.reject(d);
      }
      try {
        await this.options.onError?.(c, e, this.state.context, s);
      } catch (d) {
        Promise.reject(d);
      }
      try {
        await this.#e.config.onSettled?.(
          void 0,
          c,
          this.state.variables,
          this.state.context,
          this,
          s
        );
      } catch (d) {
        Promise.reject(d);
      }
      try {
        await this.options.onSettled?.(void 0, c, e, this.state.context, s);
      } catch (d) {
        Promise.reject(d);
      }
      throw (this.#a({ type: "error", error: c }), c);
    } finally {
      this.#e.runNext(this);
    }
  }
  #a(e) {
    const a = (s) => {
      switch (e.type) {
        case "failed":
          return { ...s, failureCount: e.failureCount, failureReason: e.error };
        case "pause":
          return { ...s, isPaused: !0 };
        case "continue":
          return { ...s, isPaused: !1 };
        case "pending":
          return {
            ...s,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...s,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: e.error,
            failureCount: s.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    (this.state = a(this.state)),
      Ne.batch(() => {
        this.#n.forEach((s) => {
          s.onMutationUpdate(e);
        }),
          this.#e.notify({ mutation: this, type: "updated", action: e });
      });
  }
};
function P2() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Y2 = class extends Xl {
  constructor(e = {}) {
    super(),
      (this.config = e),
      (this.#t = new Set()),
      (this.#n = new Map()),
      (this.#e = 0);
  }
  #t;
  #n;
  #e;
  build(e, a, s) {
    const o = new q2({
      client: e,
      mutationCache: this,
      mutationId: ++this.#e,
      options: e.defaultMutationOptions(a),
      state: s,
    });
    return this.add(o), o;
  }
  add(e) {
    this.#t.add(e);
    const a = hl(e);
    if (typeof a == "string") {
      const s = this.#n.get(a);
      s ? s.push(e) : this.#n.set(a, [e]);
    }
    this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    if (this.#t.delete(e)) {
      const a = hl(e);
      if (typeof a == "string") {
        const s = this.#n.get(a);
        if (s)
          if (s.length > 1) {
            const o = s.indexOf(e);
            o !== -1 && s.splice(o, 1);
          } else s[0] === e && this.#n.delete(a);
      }
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    const a = hl(e);
    if (typeof a == "string") {
      const o = this.#n.get(a)?.find((l) => l.state.status === "pending");
      return !o || o === e;
    } else return !0;
  }
  runNext(e) {
    const a = hl(e);
    return typeof a == "string"
      ? this.#n
          .get(a)
          ?.find((o) => o !== e && o.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    Ne.batch(() => {
      this.#t.forEach((e) => {
        this.notify({ type: "removed", mutation: e });
      }),
        this.#t.clear(),
        this.#n.clear();
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(e) {
    const a = { exact: !0, ...e };
    return this.getAll().find((s) => yy(a, s));
  }
  findAll(e = {}) {
    return this.getAll().filter((a) => yy(e, a));
  }
  notify(e) {
    Ne.batch(() => {
      this.listeners.forEach((a) => {
        a(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((a) => a.state.isPaused);
    return Ne.batch(() => Promise.all(e.map((a) => a.continue().catch(bn))));
  }
};
function hl(e) {
  return e.options.scope?.id;
}
var V2 = class extends Xl {
    constructor(e = {}) {
      super(), (this.config = e), (this.#t = new Map());
    }
    #t;
    build(e, a, s) {
      const o = a.queryKey,
        l = a.queryHash ?? gd(o, a);
      let c = this.get(l);
      return (
        c ||
          ((c = new B2({
            client: e,
            queryKey: o,
            queryHash: l,
            options: e.defaultQueryOptions(a),
            state: s,
            defaultOptions: e.getQueryDefaults(o),
          })),
          this.add(c)),
        c
      );
    }
    add(e) {
      this.#t.has(e.queryHash) ||
        (this.#t.set(e.queryHash, e), this.notify({ type: "added", query: e }));
    }
    remove(e) {
      const a = this.#t.get(e.queryHash);
      a &&
        (e.destroy(),
        a === e && this.#t.delete(e.queryHash),
        this.notify({ type: "removed", query: e }));
    }
    clear() {
      Ne.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#t.get(e);
    }
    getAll() {
      return [...this.#t.values()];
    }
    find(e) {
      const a = { exact: !0, ...e };
      return this.getAll().find((s) => gy(a, s));
    }
    findAll(e = {}) {
      const a = this.getAll();
      return Object.keys(e).length > 0 ? a.filter((s) => gy(e, s)) : a;
    }
    notify(e) {
      Ne.batch(() => {
        this.listeners.forEach((a) => {
          a(e);
        });
      });
    }
    onFocus() {
      Ne.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      Ne.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  G2 = class {
    #t;
    #n;
    #e;
    #r;
    #a;
    #s;
    #i;
    #l;
    constructor(e = {}) {
      (this.#t = e.queryCache || new V2()),
        (this.#n = e.mutationCache || new Y2()),
        (this.#e = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#a = new Map()),
        (this.#s = 0);
    }
    mount() {
      this.#s++,
        this.#s === 1 &&
          ((this.#i = h0.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#t.onFocus());
          })),
          (this.#l = Ul.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#t.onOnline());
          })));
    }
    unmount() {
      this.#s--,
        this.#s === 0 &&
          (this.#i?.(), (this.#i = void 0), this.#l?.(), (this.#l = void 0));
    }
    isFetching(e) {
      return this.#t.findAll({ ...e, fetchStatus: "fetching" }).length;
    }
    isMutating(e) {
      return this.#n.findAll({ ...e, status: "pending" }).length;
    }
    getQueryData(e) {
      const a = this.defaultQueryOptions({ queryKey: e });
      return this.#t.get(a.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      const a = this.defaultQueryOptions(e),
        s = this.#t.build(this, a),
        o = s.state.data;
      return o === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            s.isStaleByTime(Zf(a.staleTime, s)) &&
            this.prefetchQuery(a),
          Promise.resolve(o));
    }
    getQueriesData(e) {
      return this.#t.findAll(e).map(({ queryKey: a, state: s }) => {
        const o = s.data;
        return [a, o];
      });
    }
    setQueryData(e, a, s) {
      const o = this.defaultQueryOptions({ queryKey: e }),
        c = this.#t.get(o.queryHash)?.state.data,
        d = w2(a, c);
      if (d !== void 0)
        return this.#t.build(this, o).setData(d, { ...s, manual: !0 });
    }
    setQueriesData(e, a, s) {
      return Ne.batch(() =>
        this.#t
          .findAll(e)
          .map(({ queryKey: o }) => [o, this.setQueryData(o, a, s)])
      );
    }
    getQueryState(e) {
      const a = this.defaultQueryOptions({ queryKey: e });
      return this.#t.get(a.queryHash)?.state;
    }
    removeQueries(e) {
      const a = this.#t;
      Ne.batch(() => {
        a.findAll(e).forEach((s) => {
          a.remove(s);
        });
      });
    }
    resetQueries(e, a) {
      const s = this.#t;
      return Ne.batch(
        () => (
          s.findAll(e).forEach((o) => {
            o.reset();
          }),
          this.refetchQueries({ type: "active", ...e }, a)
        )
      );
    }
    cancelQueries(e, a = {}) {
      const s = { revert: !0, ...a },
        o = Ne.batch(() => this.#t.findAll(e).map((l) => l.cancel(s)));
      return Promise.all(o).then(bn).catch(bn);
    }
    invalidateQueries(e, a = {}) {
      return Ne.batch(
        () => (
          this.#t.findAll(e).forEach((s) => {
            s.invalidate();
          }),
          e?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                a
              )
        )
      );
    }
    refetchQueries(e, a = {}) {
      const s = { ...a, cancelRefetch: a.cancelRefetch ?? !0 },
        o = Ne.batch(() =>
          this.#t
            .findAll(e)
            .filter((l) => !l.isDisabled() && !l.isStatic())
            .map((l) => {
              let c = l.fetch(void 0, s);
              return (
                s.throwOnError || (c = c.catch(bn)),
                l.state.fetchStatus === "paused" ? Promise.resolve() : c
              );
            })
        );
      return Promise.all(o).then(bn);
    }
    fetchQuery(e) {
      const a = this.defaultQueryOptions(e);
      a.retry === void 0 && (a.retry = !1);
      const s = this.#t.build(this, a);
      return s.isStaleByTime(Zf(a.staleTime, s))
        ? s.fetch(a)
        : Promise.resolve(s.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(bn).catch(bn);
    }
    fetchInfiniteQuery(e) {
      return (e.behavior = wy(e.pages)), this.fetchQuery(e);
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(bn).catch(bn);
    }
    ensureInfiniteQueryData(e) {
      return (e.behavior = wy(e.pages)), this.ensureQueryData(e);
    }
    resumePausedMutations() {
      return Ul.isOnline()
        ? this.#n.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#t;
    }
    getMutationCache() {
      return this.#n;
    }
    getDefaultOptions() {
      return this.#e;
    }
    setDefaultOptions(e) {
      this.#e = e;
    }
    setQueryDefaults(e, a) {
      this.#r.set(Yi(e), { queryKey: e, defaultOptions: a });
    }
    getQueryDefaults(e) {
      const a = [...this.#r.values()],
        s = {};
      return (
        a.forEach((o) => {
          Vi(e, o.queryKey) && Object.assign(s, o.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(e, a) {
      this.#a.set(Yi(e), { mutationKey: e, defaultOptions: a });
    }
    getMutationDefaults(e) {
      const a = [...this.#a.values()],
        s = {};
      return (
        a.forEach((o) => {
          Vi(e, o.mutationKey) && Object.assign(s, o.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      const a = {
        ...this.#e.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        a.queryHash || (a.queryHash = gd(a.queryKey, a)),
        a.refetchOnReconnect === void 0 &&
          (a.refetchOnReconnect = a.networkMode !== "always"),
        a.throwOnError === void 0 && (a.throwOnError = !!a.suspense),
        !a.networkMode && a.persister && (a.networkMode = "offlineFirst"),
        a.queryFn === yd && (a.enabled = !1),
        a
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#e.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      this.#t.clear(), this.#n.clear();
    }
  },
  S0 = A.createContext(void 0),
  BM = (e) => {
    const a = A.useContext(S0);
    if (!a)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return a;
  },
  Q2 = ({ client: e, children: a }) => (
    A.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    O.jsx(S0.Provider, { value: e, children: a })
  );
const I2 = "/assets/styles-BRTzJqus.css";
function F2(e, a = {}) {
  typeof window > "u" ||
    window.__lovableEvents?.captureException?.(
      e,
      { source: "react_error_boundary", route: window.location.pathname, ...a },
      { mechanism: "react_error_boundary", handled: !1, severity: "error" }
    );
}
const x0 = (...e) =>
  e
    .filter((a, s, o) => !!a && a.trim() !== "" && o.indexOf(a) === s)
    .join(" ")
    .trim();
const X2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const K2 = (e) =>
  e.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, s, o) =>
    o ? o.toUpperCase() : s.toLowerCase()
  );
const _y = (e) => {
  const a = K2(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
var Z2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const J2 = (e) => {
  for (const a in e)
    if (a.startsWith("aria-") || a === "role" || a === "title") return !0;
  return !1;
};
const $2 = A.forwardRef(
  (
    {
      color: e = "currentColor",
      size: a = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: o,
      className: l = "",
      children: c,
      iconNode: d,
      ...h
    },
    g
  ) =>
    A.createElement(
      "svg",
      {
        ref: g,
        ...Z2,
        width: a,
        height: a,
        stroke: e,
        strokeWidth: o ? (Number(s) * 24) / Number(a) : s,
        className: x0("lucide", l),
        ...(!c && !J2(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...d.map(([m, v]) => A.createElement(m, v)),
        ...(Array.isArray(c) ? c : [c]),
      ]
    )
);
const Ar = (e, a) => {
  const s = A.forwardRef(({ className: o, ...l }, c) =>
    A.createElement($2, {
      ref: c,
      iconNode: a,
      className: x0(`lucide-${X2(_y(e))}`, `lucide-${e}`, o),
      ...l,
    })
  );
  return (s.displayName = _y(e)), s;
};
const W2 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  tT = Ar("menu", W2);
const eT = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  nT = Ar("message-circle", eT);
const aT = [["path", { d: "M5 12h14", key: "1ays0h" }]],
  rT = Ar("minus", aT);
const sT = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  iT = Ar("plus", sT);
const oT = [
    ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
    ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
    [
      "path",
      {
        d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
        key: "o988cm",
      },
    ],
  ],
  Ry = Ar("shopping-bag", oT);
const lT = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  uT = Ar("trash-2", lT);
const cT = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  fT = Ar("x", cT);
function Ga(e, a, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (l) {
    if ((e?.(l), s === !1 || !l.defaultPrevented)) return a?.(l);
  };
}
function Ty(e, a) {
  if (typeof e == "function") return e(a);
  e != null && (e.current = a);
}
function Kl(...e) {
  return (a) => {
    let s = !1;
    const o = e.map((l) => {
      const c = Ty(l, a);
      return !s && typeof c == "function" && (s = !0), c;
    });
    if (s)
      return () => {
        for (let l = 0; l < o.length; l++) {
          const c = o[l];
          typeof c == "function" ? c() : Ty(e[l], null);
        }
      };
  };
}
function Or(...e) {
  return A.useCallback(Kl(...e), e);
}
function dT(e, a) {
  const s = A.createContext(a),
    o = (c) => {
      const { children: d, ...h } = c,
        g = A.useMemo(() => h, Object.values(h));
      return O.jsx(s.Provider, { value: g, children: d });
    };
  o.displayName = e + "Provider";
  function l(c) {
    const d = A.useContext(s);
    if (d) return d;
    if (a !== void 0) return a;
    throw new Error(`\`${c}\` must be used within \`${e}\``);
  }
  return [o, l];
}
function hT(e, a = []) {
  let s = [];
  function o(c, d) {
    const h = A.createContext(d),
      g = s.length;
    s = [...s, d];
    const m = (p) => {
      const { scope: b, children: x, ...R } = p,
        _ = b?.[e]?.[g] || h,
        w = A.useMemo(() => R, Object.values(R));
      return O.jsx(_.Provider, { value: w, children: x });
    };
    m.displayName = c + "Provider";
    function v(p, b) {
      const x = b?.[e]?.[g] || h,
        R = A.useContext(x);
      if (R) return R;
      if (d !== void 0) return d;
      throw new Error(`\`${p}\` must be used within \`${c}\``);
    }
    return [m, v];
  }
  const l = () => {
    const c = s.map((d) => A.createContext(d));
    return function (h) {
      const g = h?.[e] || c;
      return A.useMemo(() => ({ [`__scope${e}`]: { ...h, [e]: g } }), [h, g]);
    };
  };
  return (l.scopeName = e), [o, mT(l, ...a)];
}
function mT(...e) {
  const a = e[0];
  if (e.length === 1) return a;
  const s = () => {
    const o = e.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (c) {
      const d = o.reduce((h, { useScope: g, scopeName: m }) => {
        const p = g(c)[`__scope${m}`];
        return { ...h, ...p };
      }, {});
      return A.useMemo(() => ({ [`__scope${a.scopeName}`]: d }), [d]);
    };
  };
  return (s.scopeName = a.scopeName), s;
}
var Gi = globalThis?.document ? A.useLayoutEffect : () => {},
  pT = rd[" useId ".trim().toString()] || (() => {}),
  gT = 0;
function Mf(e) {
  const [a, s] = A.useState(pT());
  return (
    Gi(() => {
      s((o) => o ?? String(gT++));
    }, [e]),
    e || (a ? `radix-${a}` : "")
  );
}
var yT = rd[" useInsertionEffect ".trim().toString()] || Gi;
function vT({ prop: e, defaultProp: a, onChange: s = () => {}, caller: o }) {
  const [l, c, d] = bT({ defaultProp: a, onChange: s }),
    h = e !== void 0,
    g = h ? e : l;
  {
    const v = A.useRef(e !== void 0);
    A.useEffect(() => {
      const p = v.current;
      p !== h &&
        console.warn(
          `${o} is changing from ${p ? "controlled" : "uncontrolled"} to ${
            h ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (v.current = h);
    }, [h, o]);
  }
  const m = A.useCallback(
    (v) => {
      if (h) {
        const p = ST(v) ? v(e) : v;
        p !== e && d.current?.(p);
      } else c(v);
    },
    [h, e, c, d]
  );
  return [g, m];
}
function bT({ defaultProp: e, onChange: a }) {
  const [s, o] = A.useState(e),
    l = A.useRef(s),
    c = A.useRef(a);
  return (
    yT(() => {
      c.current = a;
    }, [a]),
    A.useEffect(() => {
      l.current !== s && (c.current?.(s), (l.current = s));
    }, [s, l]),
    [s, o, c]
  );
}
function ST(e) {
  return typeof e == "function";
}
function xT(e) {
  const a = wT(e),
    s = A.forwardRef((o, l) => {
      const { children: c, ...d } = o,
        h = A.Children.toArray(c),
        g = h.find(_T);
      if (g) {
        const m = g.props.children,
          v = h.map((p) =>
            p === g
              ? A.Children.count(m) > 1
                ? A.Children.only(null)
                : A.isValidElement(m)
                ? m.props.children
                : null
              : p
          );
        return O.jsx(a, {
          ...d,
          ref: l,
          children: A.isValidElement(m) ? A.cloneElement(m, void 0, v) : null,
        });
      }
      return O.jsx(a, { ...d, ref: l, children: c });
    });
  return (s.displayName = `${e}.Slot`), s;
}
function wT(e) {
  const a = A.forwardRef((s, o) => {
    const { children: l, ...c } = s;
    if (A.isValidElement(l)) {
      const d = TT(l),
        h = RT(c, l.props);
      return (
        l.type !== A.Fragment && (h.ref = o ? Kl(o, d) : d),
        A.cloneElement(l, h)
      );
    }
    return A.Children.count(l) > 1 ? A.Children.only(null) : null;
  });
  return (a.displayName = `${e}.SlotClone`), a;
}
var ET = Symbol("radix.slottable");
function _T(e) {
  return (
    A.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === ET
  );
}
function RT(e, a) {
  const s = { ...a };
  for (const o in a) {
    const l = e[o],
      c = a[o];
    /^on[A-Z]/.test(o)
      ? l && c
        ? (s[o] = (...h) => {
            const g = c(...h);
            return l(...h), g;
          })
        : l && (s[o] = l)
      : o === "style"
      ? (s[o] = { ...l, ...c })
      : o === "className" && (s[o] = [l, c].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function TT(e) {
  let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? e.ref
    : ((a = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? e.props.ref : e.props.ref || e.ref);
}
var CT = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ia = CT.reduce((e, a) => {
    const s = xT(`Primitive.${a}`),
      o = A.forwardRef((l, c) => {
        const { asChild: d, ...h } = l,
          g = d ? s : a;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          O.jsx(g, { ...h, ref: c })
        );
      });
    return (o.displayName = `Primitive.${a}`), { ...e, [a]: o };
  }, {});
function AT(e, a) {
  e && pd.flushSync(() => e.dispatchEvent(a));
}
function Qi(e) {
  const a = A.useRef(e);
  return (
    A.useEffect(() => {
      a.current = e;
    }),
    A.useMemo(
      () =>
        (...s) =>
          a.current?.(...s),
      []
    )
  );
}
function OT(e, a = globalThis?.document) {
  const s = Qi(e);
  A.useEffect(() => {
    const o = (l) => {
      l.key === "Escape" && s(l);
    };
    return (
      a.addEventListener("keydown", o, { capture: !0 }),
      () => a.removeEventListener("keydown", o, { capture: !0 })
    );
  }, [s, a]);
}
var MT = "DismissableLayer",
  Wf = "dismissableLayer.update",
  NT = "dismissableLayer.pointerDownOutside",
  DT = "dismissableLayer.focusOutside",
  Cy,
  w0 = A.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  E0 = A.forwardRef((e, a) => {
    const {
        disableOutsidePointerEvents: s = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: l,
        onFocusOutside: c,
        onInteractOutside: d,
        onDismiss: h,
        ...g
      } = e,
      m = A.useContext(w0),
      [v, p] = A.useState(null),
      b = v?.ownerDocument ?? globalThis?.document,
      [, x] = A.useState({}),
      R = Or(a, (Y) => p(Y)),
      _ = Array.from(m.layers),
      [w] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      C = _.indexOf(w),
      k = v ? _.indexOf(v) : -1,
      q = m.layersWithOutsidePointerEventsDisabled.size > 0,
      j = k >= C,
      K = LT((Y) => {
        const U = Y.target,
          $ = [...m.branches].some((it) => it.contains(U));
        !j || $ || (l?.(Y), d?.(Y), Y.defaultPrevented || h?.());
      }, b),
      J = UT((Y) => {
        const U = Y.target;
        [...m.branches].some((it) => it.contains(U)) ||
          (c?.(Y), d?.(Y), Y.defaultPrevented || h?.());
      }, b);
    return (
      OT((Y) => {
        k === m.layers.size - 1 &&
          (o?.(Y), !Y.defaultPrevented && h && (Y.preventDefault(), h()));
      }, b),
      A.useEffect(() => {
        if (v)
          return (
            s &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Cy = b.body.style.pointerEvents),
                (b.body.style.pointerEvents = "none")),
              m.layersWithOutsidePointerEventsDisabled.add(v)),
            m.layers.add(v),
            Ay(),
            () => {
              s &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (b.body.style.pointerEvents = Cy);
            }
          );
      }, [v, b, s, m]),
      A.useEffect(
        () => () => {
          v &&
            (m.layers.delete(v),
            m.layersWithOutsidePointerEventsDisabled.delete(v),
            Ay());
        },
        [v, m]
      ),
      A.useEffect(() => {
        const Y = () => x({});
        return (
          document.addEventListener(Wf, Y),
          () => document.removeEventListener(Wf, Y)
        );
      }, []),
      O.jsx(ia.div, {
        ...g,
        ref: R,
        style: {
          pointerEvents: q ? (j ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Ga(e.onFocusCapture, J.onFocusCapture),
        onBlurCapture: Ga(e.onBlurCapture, J.onBlurCapture),
        onPointerDownCapture: Ga(
          e.onPointerDownCapture,
          K.onPointerDownCapture
        ),
      })
    );
  });
E0.displayName = MT;
var zT = "DismissableLayerBranch",
  jT = A.forwardRef((e, a) => {
    const s = A.useContext(w0),
      o = A.useRef(null),
      l = Or(a, o);
    return (
      A.useEffect(() => {
        const c = o.current;
        if (c)
          return (
            s.branches.add(c),
            () => {
              s.branches.delete(c);
            }
          );
      }, [s.branches]),
      O.jsx(ia.div, { ...e, ref: l })
    );
  });
jT.displayName = zT;
function LT(e, a = globalThis?.document) {
  const s = Qi(e),
    o = A.useRef(!1),
    l = A.useRef(() => {});
  return (
    A.useEffect(() => {
      const c = (h) => {
          if (h.target && !o.current) {
            let g = function () {
              _0(NT, s, m, { discrete: !0 });
            };
            const m = { originalEvent: h };
            h.pointerType === "touch"
              ? (a.removeEventListener("click", l.current),
                (l.current = g),
                a.addEventListener("click", l.current, { once: !0 }))
              : g();
          } else a.removeEventListener("click", l.current);
          o.current = !1;
        },
        d = window.setTimeout(() => {
          a.addEventListener("pointerdown", c);
        }, 0);
      return () => {
        window.clearTimeout(d),
          a.removeEventListener("pointerdown", c),
          a.removeEventListener("click", l.current);
      };
    }, [a, s]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function UT(e, a = globalThis?.document) {
  const s = Qi(e),
    o = A.useRef(!1);
  return (
    A.useEffect(() => {
      const l = (c) => {
        c.target &&
          !o.current &&
          _0(DT, s, { originalEvent: c }, { discrete: !1 });
      };
      return (
        a.addEventListener("focusin", l),
        () => a.removeEventListener("focusin", l)
      );
    }, [a, s]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  );
}
function Ay() {
  const e = new CustomEvent(Wf);
  document.dispatchEvent(e);
}
function _0(e, a, s, { discrete: o }) {
  const l = s.originalEvent.target,
    c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: s });
  a && l.addEventListener(e, a, { once: !0 }),
    o ? AT(l, c) : l.dispatchEvent(c);
}
var Nf = "focusScope.autoFocusOnMount",
  Df = "focusScope.autoFocusOnUnmount",
  Oy = { bubbles: !1, cancelable: !0 },
  BT = "FocusScope",
  R0 = A.forwardRef((e, a) => {
    const {
        loop: s = !1,
        trapped: o = !1,
        onMountAutoFocus: l,
        onUnmountAutoFocus: c,
        ...d
      } = e,
      [h, g] = A.useState(null),
      m = Qi(l),
      v = Qi(c),
      p = A.useRef(null),
      b = Or(a, (_) => g(_)),
      x = A.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    A.useEffect(() => {
      if (o) {
        let _ = function (q) {
            if (x.paused || !h) return;
            const j = q.target;
            h.contains(j) ? (p.current = j) : La(p.current, { select: !0 });
          },
          w = function (q) {
            if (x.paused || !h) return;
            const j = q.relatedTarget;
            j !== null && (h.contains(j) || La(p.current, { select: !0 }));
          },
          C = function (q) {
            if (document.activeElement === document.body)
              for (const K of q) K.removedNodes.length > 0 && La(h);
          };
        document.addEventListener("focusin", _),
          document.addEventListener("focusout", w);
        const k = new MutationObserver(C);
        return (
          h && k.observe(h, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", _),
              document.removeEventListener("focusout", w),
              k.disconnect();
          }
        );
      }
    }, [o, h, x.paused]),
      A.useEffect(() => {
        if (h) {
          Ny.add(x);
          const _ = document.activeElement;
          if (!h.contains(_)) {
            const C = new CustomEvent(Nf, Oy);
            h.addEventListener(Nf, m),
              h.dispatchEvent(C),
              C.defaultPrevented ||
                (kT(VT(T0(h)), { select: !0 }),
                document.activeElement === _ && La(h));
          }
          return () => {
            h.removeEventListener(Nf, m),
              setTimeout(() => {
                const C = new CustomEvent(Df, Oy);
                h.addEventListener(Df, v),
                  h.dispatchEvent(C),
                  C.defaultPrevented || La(_ ?? document.body, { select: !0 }),
                  h.removeEventListener(Df, v),
                  Ny.remove(x);
              }, 0);
          };
        }
      }, [h, m, v, x]);
    const R = A.useCallback(
      (_) => {
        if ((!s && !o) || x.paused) return;
        const w = _.key === "Tab" && !_.altKey && !_.ctrlKey && !_.metaKey,
          C = document.activeElement;
        if (w && C) {
          const k = _.currentTarget,
            [q, j] = HT(k);
          q && j
            ? !_.shiftKey && C === j
              ? (_.preventDefault(), s && La(q, { select: !0 }))
              : _.shiftKey &&
                C === q &&
                (_.preventDefault(), s && La(j, { select: !0 }))
            : C === k && _.preventDefault();
        }
      },
      [s, o, x.paused]
    );
    return O.jsx(ia.div, { tabIndex: -1, ...d, ref: b, onKeyDown: R });
  });
R0.displayName = BT;
function kT(e, { select: a = !1 } = {}) {
  const s = document.activeElement;
  for (const o of e)
    if ((La(o, { select: a }), document.activeElement !== s)) return;
}
function HT(e) {
  const a = T0(e),
    s = My(a, e),
    o = My(a.reverse(), e);
  return [s, o];
}
function T0(e) {
  const a = [],
    s = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const l = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || l
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) a.push(s.currentNode);
  return a;
}
function My(e, a) {
  for (const s of e) if (!qT(s, { upTo: a })) return s;
}
function qT(e, { upTo: a }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (a !== void 0 && e === a) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function PT(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function La(e, { select: a = !1 } = {}) {
  if (e && e.focus) {
    const s = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== s && PT(e) && a && e.select();
  }
}
var Ny = YT();
function YT() {
  let e = [];
  return {
    add(a) {
      const s = e[0];
      a !== s && s?.pause(), (e = Dy(e, a)), e.unshift(a);
    },
    remove(a) {
      (e = Dy(e, a)), e[0]?.resume();
    },
  };
}
function Dy(e, a) {
  const s = [...e],
    o = s.indexOf(a);
  return o !== -1 && s.splice(o, 1), s;
}
function VT(e) {
  return e.filter((a) => a.tagName !== "A");
}
var GT = "Portal",
  C0 = A.forwardRef((e, a) => {
    const { container: s, ...o } = e,
      [l, c] = A.useState(!1);
    Gi(() => c(!0), []);
    const d = s || (l && globalThis?.document?.body);
    return d ? o0.createPortal(O.jsx(ia.div, { ...o, ref: a }), d) : null;
  });
C0.displayName = GT;
function QT(e, a) {
  return A.useReducer((s, o) => a[s][o] ?? s, e);
}
var Zl = (e) => {
  const { present: a, children: s } = e,
    o = IT(a),
    l =
      typeof s == "function" ? s({ present: o.isPresent }) : A.Children.only(s),
    c = Or(o.ref, FT(l));
  return typeof s == "function" || o.isPresent
    ? A.cloneElement(l, { ref: c })
    : null;
};
Zl.displayName = "Presence";
function IT(e) {
  const [a, s] = A.useState(),
    o = A.useRef(null),
    l = A.useRef(e),
    c = A.useRef("none"),
    d = e ? "mounted" : "unmounted",
    [h, g] = QT(d, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    A.useEffect(() => {
      const m = ml(o.current);
      c.current = h === "mounted" ? m : "none";
    }, [h]),
    Gi(() => {
      const m = o.current,
        v = l.current;
      if (v !== e) {
        const b = c.current,
          x = ml(m);
        e
          ? g("MOUNT")
          : x === "none" || m?.display === "none"
          ? g("UNMOUNT")
          : g(v && b !== x ? "ANIMATION_OUT" : "UNMOUNT"),
          (l.current = e);
      }
    }, [e, g]),
    Gi(() => {
      if (a) {
        let m;
        const v = a.ownerDocument.defaultView ?? window,
          p = (x) => {
            const _ = ml(o.current).includes(CSS.escape(x.animationName));
            if (x.target === a && _ && (g("ANIMATION_END"), !l.current)) {
              const w = a.style.animationFillMode;
              (a.style.animationFillMode = "forwards"),
                (m = v.setTimeout(() => {
                  a.style.animationFillMode === "forwards" &&
                    (a.style.animationFillMode = w);
                }));
            }
          },
          b = (x) => {
            x.target === a && (c.current = ml(o.current));
          };
        return (
          a.addEventListener("animationstart", b),
          a.addEventListener("animationcancel", p),
          a.addEventListener("animationend", p),
          () => {
            v.clearTimeout(m),
              a.removeEventListener("animationstart", b),
              a.removeEventListener("animationcancel", p),
              a.removeEventListener("animationend", p);
          }
        );
      } else g("ANIMATION_END");
    }, [a, g]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: A.useCallback((m) => {
        (o.current = m ? getComputedStyle(m) : null), s(m);
      }, []),
    }
  );
}
function ml(e) {
  return e?.animationName || "none";
}
function FT(e) {
  let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? e.ref
    : ((a = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? e.props.ref : e.props.ref || e.ref);
}
var zf = 0;
function XT() {
  A.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? zy()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? zy()),
      zf++,
      () => {
        zf === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((a) => a.remove()),
          zf--;
      }
    );
  }, []);
}
function zy() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var zn = function () {
  return (
    (zn =
      Object.assign ||
      function (a) {
        for (var s, o = 1, l = arguments.length; o < l; o++) {
          s = arguments[o];
          for (var c in s)
            Object.prototype.hasOwnProperty.call(s, c) && (a[c] = s[c]);
        }
        return a;
      }),
    zn.apply(this, arguments)
  );
};
function A0(e, a) {
  var s = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      a.indexOf(o) < 0 &&
      (s[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
      a.indexOf(o[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[l]) &&
        (s[o[l]] = e[o[l]]);
  return s;
}
function KT(e, a, s) {
  if (s || arguments.length === 2)
    for (var o = 0, l = a.length, c; o < l; o++)
      (c || !(o in a)) &&
        (c || (c = Array.prototype.slice.call(a, 0, o)), (c[o] = a[o]));
  return e.concat(c || Array.prototype.slice.call(a));
}
var Cl = "right-scroll-bar-position",
  Al = "width-before-scroll-bar",
  ZT = "with-scroll-bars-hidden",
  JT = "--removed-body-scroll-bar-size";
function jf(e, a) {
  return typeof e == "function" ? e(a) : e && (e.current = a), e;
}
function $T(e, a) {
  var s = A.useState(function () {
    return {
      value: e,
      callback: a,
      facade: {
        get current() {
          return s.value;
        },
        set current(o) {
          var l = s.value;
          l !== o && ((s.value = o), s.callback(o, l));
        },
      },
    };
  })[0];
  return (s.callback = a), s.facade;
}
var WT = typeof window < "u" ? A.useLayoutEffect : A.useEffect,
  jy = new WeakMap();
function tC(e, a) {
  var s = $T(null, function (o) {
    return e.forEach(function (l) {
      return jf(l, o);
    });
  });
  return (
    WT(
      function () {
        var o = jy.get(s);
        if (o) {
          var l = new Set(o),
            c = new Set(e),
            d = s.current;
          l.forEach(function (h) {
            c.has(h) || jf(h, null);
          }),
            c.forEach(function (h) {
              l.has(h) || jf(h, d);
            });
        }
        jy.set(s, e);
      },
      [e]
    ),
    s
  );
}
function eC(e) {
  return e;
}
function nC(e, a) {
  a === void 0 && (a = eC);
  var s = [],
    o = !1,
    l = {
      read: function () {
        if (o)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return s.length ? s[s.length - 1] : e;
      },
      useMedium: function (c) {
        var d = a(c, o);
        return (
          s.push(d),
          function () {
            s = s.filter(function (h) {
              return h !== d;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (o = !0; s.length; ) {
          var d = s;
          (s = []), d.forEach(c);
        }
        s = {
          push: function (h) {
            return c(h);
          },
          filter: function () {
            return s;
          },
        };
      },
      assignMedium: function (c) {
        o = !0;
        var d = [];
        if (s.length) {
          var h = s;
          (s = []), h.forEach(c), (d = s);
        }
        var g = function () {
            var v = d;
            (d = []), v.forEach(c);
          },
          m = function () {
            return Promise.resolve().then(g);
          };
        m(),
          (s = {
            push: function (v) {
              d.push(v), m();
            },
            filter: function (v) {
              return (d = d.filter(v)), s;
            },
          });
      },
    };
  return l;
}
function aC(e) {
  e === void 0 && (e = {});
  var a = nC(null);
  return (a.options = zn({ async: !0, ssr: !1 }, e)), a;
}
var O0 = function (e) {
  var a = e.sideCar,
    s = A0(e, ["sideCar"]);
  if (!a)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var o = a.read();
  if (!o) throw new Error("Sidecar medium not found");
  return A.createElement(o, zn({}, s));
};
O0.isSideCarExport = !0;
function rC(e, a) {
  return e.useMedium(a), O0;
}
var M0 = aC(),
  Lf = function () {},
  Jl = A.forwardRef(function (e, a) {
    var s = A.useRef(null),
      o = A.useState({
        onScrollCapture: Lf,
        onWheelCapture: Lf,
        onTouchMoveCapture: Lf,
      }),
      l = o[0],
      c = o[1],
      d = e.forwardProps,
      h = e.children,
      g = e.className,
      m = e.removeScrollBar,
      v = e.enabled,
      p = e.shards,
      b = e.sideCar,
      x = e.noRelative,
      R = e.noIsolation,
      _ = e.inert,
      w = e.allowPinchZoom,
      C = e.as,
      k = C === void 0 ? "div" : C,
      q = e.gapMode,
      j = A0(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      K = b,
      J = tC([s, a]),
      Y = zn(zn({}, j), l);
    return A.createElement(
      A.Fragment,
      null,
      v &&
        A.createElement(K, {
          sideCar: M0,
          removeScrollBar: m,
          shards: p,
          noRelative: x,
          noIsolation: R,
          inert: _,
          setCallbacks: c,
          allowPinchZoom: !!w,
          lockRef: s,
          gapMode: q,
        }),
      d
        ? A.cloneElement(A.Children.only(h), zn(zn({}, Y), { ref: J }))
        : A.createElement(k, zn({}, Y, { className: g, ref: J }), h)
    );
  });
Jl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Jl.classNames = { fullWidth: Al, zeroRight: Cl };
var sC = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function iC() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var a = sC();
  return a && e.setAttribute("nonce", a), e;
}
function oC(e, a) {
  e.styleSheet
    ? (e.styleSheet.cssText = a)
    : e.appendChild(document.createTextNode(a));
}
function lC(e) {
  var a = document.head || document.getElementsByTagName("head")[0];
  a.appendChild(e);
}
var uC = function () {
    var e = 0,
      a = null;
    return {
      add: function (s) {
        e == 0 && (a = iC()) && (oC(a, s), lC(a)), e++;
      },
      remove: function () {
        e--,
          !e && a && (a.parentNode && a.parentNode.removeChild(a), (a = null));
      },
    };
  },
  cC = function () {
    var e = uC();
    return function (a, s) {
      A.useEffect(
        function () {
          return (
            e.add(a),
            function () {
              e.remove();
            }
          );
        },
        [a && s]
      );
    };
  },
  N0 = function () {
    var e = cC(),
      a = function (s) {
        var o = s.styles,
          l = s.dynamic;
        return e(o, l), null;
      };
    return a;
  },
  fC = { left: 0, top: 0, right: 0, gap: 0 },
  Uf = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  dC = function (e) {
    var a = window.getComputedStyle(document.body),
      s = a[e === "padding" ? "paddingLeft" : "marginLeft"],
      o = a[e === "padding" ? "paddingTop" : "marginTop"],
      l = a[e === "padding" ? "paddingRight" : "marginRight"];
    return [Uf(s), Uf(o), Uf(l)];
  },
  hC = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return fC;
    var a = dC(e),
      s = document.documentElement.clientWidth,
      o = window.innerWidth;
    return {
      left: a[0],
      top: a[1],
      right: a[2],
      gap: Math.max(0, o - s + a[2] - a[0]),
    };
  },
  mC = N0(),
  Ns = "data-scroll-locked",
  pC = function (e, a, s, o) {
    var l = e.left,
      c = e.top,
      d = e.right,
      h = e.gap;
    return (
      s === void 0 && (s = "margin"),
      `
  .`
        .concat(
          ZT,
          ` {
   overflow: hidden `
        )
        .concat(
          o,
          `;
   padding-right: `
        )
        .concat(h, "px ")
        .concat(
          o,
          `;
  }
  body[`
        )
        .concat(
          Ns,
          `] {
    overflow: hidden `
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            a && "position: relative ".concat(o, ";"),
            s === "margin" &&
              `
    padding-left: `
                .concat(
                  l,
                  `px;
    padding-top: `
                )
                .concat(
                  c,
                  `px;
    padding-right: `
                )
                .concat(
                  d,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(h, "px ")
                .concat(
                  o,
                  `;
    `
                ),
            s === "padding" &&
              "padding-right: ".concat(h, "px ").concat(o, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Cl,
          ` {
    right: `
        )
        .concat(h, "px ")
        .concat(
          o,
          `;
  }
  
  .`
        )
        .concat(
          Al,
          ` {
    margin-right: `
        )
        .concat(h, "px ")
        .concat(
          o,
          `;
  }
  
  .`
        )
        .concat(Cl, " .")
        .concat(
          Cl,
          ` {
    right: 0 `
        )
        .concat(
          o,
          `;
  }
  
  .`
        )
        .concat(Al, " .")
        .concat(
          Al,
          ` {
    margin-right: 0 `
        )
        .concat(
          o,
          `;
  }
  
  body[`
        )
        .concat(
          Ns,
          `] {
    `
        )
        .concat(JT, ": ")
        .concat(
          h,
          `px;
  }
`
        )
    );
  },
  Ly = function () {
    var e = parseInt(document.body.getAttribute(Ns) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  gC = function () {
    A.useEffect(function () {
      return (
        document.body.setAttribute(Ns, (Ly() + 1).toString()),
        function () {
          var e = Ly() - 1;
          e <= 0
            ? document.body.removeAttribute(Ns)
            : document.body.setAttribute(Ns, e.toString());
        }
      );
    }, []);
  },
  yC = function (e) {
    var a = e.noRelative,
      s = e.noImportant,
      o = e.gapMode,
      l = o === void 0 ? "margin" : o;
    gC();
    var c = A.useMemo(
      function () {
        return hC(l);
      },
      [l]
    );
    return A.createElement(mC, { styles: pC(c, !a, l, s ? "" : "!important") });
  },
  td = !1;
if (typeof window < "u")
  try {
    var pl = Object.defineProperty({}, "passive", {
      get: function () {
        return (td = !0), !0;
      },
    });
    window.addEventListener("test", pl, pl),
      window.removeEventListener("test", pl, pl);
  } catch {
    td = !1;
  }
var xs = td ? { passive: !1 } : !1,
  vC = function (e) {
    return e.tagName === "TEXTAREA";
  },
  D0 = function (e, a) {
    if (!(e instanceof Element)) return !1;
    var s = window.getComputedStyle(e);
    return (
      s[a] !== "hidden" &&
      !(s.overflowY === s.overflowX && !vC(e) && s[a] === "visible")
    );
  },
  bC = function (e) {
    return D0(e, "overflowY");
  },
  SC = function (e) {
    return D0(e, "overflowX");
  },
  Uy = function (e, a) {
    var s = a.ownerDocument,
      o = a;
    do {
      typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
      var l = z0(e, o);
      if (l) {
        var c = j0(e, o),
          d = c[1],
          h = c[2];
        if (d > h) return !0;
      }
      o = o.parentNode;
    } while (o && o !== s.body);
    return !1;
  },
  xC = function (e) {
    var a = e.scrollTop,
      s = e.scrollHeight,
      o = e.clientHeight;
    return [a, s, o];
  },
  wC = function (e) {
    var a = e.scrollLeft,
      s = e.scrollWidth,
      o = e.clientWidth;
    return [a, s, o];
  },
  z0 = function (e, a) {
    return e === "v" ? bC(a) : SC(a);
  },
  j0 = function (e, a) {
    return e === "v" ? xC(a) : wC(a);
  },
  EC = function (e, a) {
    return e === "h" && a === "rtl" ? -1 : 1;
  },
  _C = function (e, a, s, o, l) {
    var c = EC(e, window.getComputedStyle(a).direction),
      d = c * o,
      h = s.target,
      g = a.contains(h),
      m = !1,
      v = d > 0,
      p = 0,
      b = 0;
    do {
      if (!h) break;
      var x = j0(e, h),
        R = x[0],
        _ = x[1],
        w = x[2],
        C = _ - w - c * R;
      (R || C) && z0(e, h) && ((p += C), (b += R));
      var k = h.parentNode;
      h = k && k.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? k.host : k;
    } while ((!g && h !== document.body) || (g && (a.contains(h) || a === h)));
    return ((v && Math.abs(p) < 1) || (!v && Math.abs(b) < 1)) && (m = !0), m;
  },
  gl = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  By = function (e) {
    return [e.deltaX, e.deltaY];
  },
  ky = function (e) {
    return e && "current" in e ? e.current : e;
  },
  RC = function (e, a) {
    return e[0] === a[0] && e[1] === a[1];
  },
  TC = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  CC = 0,
  ws = [];
function AC(e) {
  var a = A.useRef([]),
    s = A.useRef([0, 0]),
    o = A.useRef(),
    l = A.useState(CC++)[0],
    c = A.useState(N0)[0],
    d = A.useRef(e);
  A.useEffect(
    function () {
      d.current = e;
    },
    [e]
  ),
    A.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(l));
          var _ = KT([e.lockRef.current], (e.shards || []).map(ky), !0).filter(
            Boolean
          );
          return (
            _.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(l));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(l)),
                _.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(l));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var h = A.useCallback(function (_, w) {
      if (
        ("touches" in _ && _.touches.length === 2) ||
        (_.type === "wheel" && _.ctrlKey)
      )
        return !d.current.allowPinchZoom;
      var C = gl(_),
        k = s.current,
        q = "deltaX" in _ ? _.deltaX : k[0] - C[0],
        j = "deltaY" in _ ? _.deltaY : k[1] - C[1],
        K,
        J = _.target,
        Y = Math.abs(q) > Math.abs(j) ? "h" : "v";
      if ("touches" in _ && Y === "h" && J.type === "range") return !1;
      var U = window.getSelection(),
        $ = U && U.anchorNode,
        it = $ ? $ === J || $.contains(J) : !1;
      if (it) return !1;
      var at = Uy(Y, J);
      if (!at) return !0;
      if ((at ? (K = Y) : ((K = Y === "v" ? "h" : "v"), (at = Uy(Y, J))), !at))
        return !1;
      if (
        (!o.current && "changedTouches" in _ && (q || j) && (o.current = K), !K)
      )
        return !0;
      var mt = o.current || K;
      return _C(mt, w, _, mt === "h" ? q : j);
    }, []),
    g = A.useCallback(function (_) {
      var w = _;
      if (!(!ws.length || ws[ws.length - 1] !== c)) {
        var C = "deltaY" in w ? By(w) : gl(w),
          k = a.current.filter(function (K) {
            return (
              K.name === w.type &&
              (K.target === w.target || w.target === K.shadowParent) &&
              RC(K.delta, C)
            );
          })[0];
        if (k && k.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!k) {
          var q = (d.current.shards || [])
              .map(ky)
              .filter(Boolean)
              .filter(function (K) {
                return K.contains(w.target);
              }),
            j = q.length > 0 ? h(w, q[0]) : !d.current.noIsolation;
          j && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    m = A.useCallback(function (_, w, C, k) {
      var q = { name: _, delta: w, target: C, should: k, shadowParent: OC(C) };
      a.current.push(q),
        setTimeout(function () {
          a.current = a.current.filter(function (j) {
            return j !== q;
          });
        }, 1);
    }, []),
    v = A.useCallback(function (_) {
      (s.current = gl(_)), (o.current = void 0);
    }, []),
    p = A.useCallback(function (_) {
      m(_.type, By(_), _.target, h(_, e.lockRef.current));
    }, []),
    b = A.useCallback(function (_) {
      m(_.type, gl(_), _.target, h(_, e.lockRef.current));
    }, []);
  A.useEffect(function () {
    return (
      ws.push(c),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: b,
      }),
      document.addEventListener("wheel", g, xs),
      document.addEventListener("touchmove", g, xs),
      document.addEventListener("touchstart", v, xs),
      function () {
        (ws = ws.filter(function (_) {
          return _ !== c;
        })),
          document.removeEventListener("wheel", g, xs),
          document.removeEventListener("touchmove", g, xs),
          document.removeEventListener("touchstart", v, xs);
      }
    );
  }, []);
  var x = e.removeScrollBar,
    R = e.inert;
  return A.createElement(
    A.Fragment,
    null,
    R ? A.createElement(c, { styles: TC(l) }) : null,
    x
      ? A.createElement(yC, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null
  );
}
function OC(e) {
  for (var a = null; e !== null; )
    e instanceof ShadowRoot && ((a = e.host), (e = e.host)), (e = e.parentNode);
  return a;
}
const MC = rC(M0, AC);
var L0 = A.forwardRef(function (e, a) {
  return A.createElement(Jl, zn({}, e, { ref: a, sideCar: MC }));
});
L0.classNames = Jl.classNames;
var NC = function (e) {
    if (typeof document > "u") return null;
    var a = Array.isArray(e) ? e[0] : e;
    return a.ownerDocument.body;
  },
  Es = new WeakMap(),
  yl = new WeakMap(),
  vl = {},
  Bf = 0,
  U0 = function (e) {
    return e && (e.host || U0(e.parentNode));
  },
  DC = function (e, a) {
    return a
      .map(function (s) {
        if (e.contains(s)) return s;
        var o = U0(s);
        return o && e.contains(o)
          ? o
          : (console.error(
              "aria-hidden",
              s,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (s) {
        return !!s;
      });
  },
  zC = function (e, a, s, o) {
    var l = DC(a, Array.isArray(e) ? e : [e]);
    vl[s] || (vl[s] = new WeakMap());
    var c = vl[s],
      d = [],
      h = new Set(),
      g = new Set(l),
      m = function (p) {
        !p || h.has(p) || (h.add(p), m(p.parentNode));
      };
    l.forEach(m);
    var v = function (p) {
      !p ||
        g.has(p) ||
        Array.prototype.forEach.call(p.children, function (b) {
          if (h.has(b)) v(b);
          else
            try {
              var x = b.getAttribute(o),
                R = x !== null && x !== "false",
                _ = (Es.get(b) || 0) + 1,
                w = (c.get(b) || 0) + 1;
              Es.set(b, _),
                c.set(b, w),
                d.push(b),
                _ === 1 && R && yl.set(b, !0),
                w === 1 && b.setAttribute(s, "true"),
                R || b.setAttribute(o, "true");
            } catch (C) {
              console.error("aria-hidden: cannot operate on ", b, C);
            }
        });
    };
    return (
      v(a),
      h.clear(),
      Bf++,
      function () {
        d.forEach(function (p) {
          var b = Es.get(p) - 1,
            x = c.get(p) - 1;
          Es.set(p, b),
            c.set(p, x),
            b || (yl.has(p) || p.removeAttribute(o), yl.delete(p)),
            x || p.removeAttribute(s);
        }),
          Bf--,
          Bf ||
            ((Es = new WeakMap()),
            (Es = new WeakMap()),
            (yl = new WeakMap()),
            (vl = {}));
      }
    );
  },
  jC = function (e, a, s) {
    s === void 0 && (s = "data-aria-hidden");
    var o = Array.from(Array.isArray(e) ? e : [e]),
      l = NC(e);
    return l
      ? (o.push.apply(o, Array.from(l.querySelectorAll("[aria-live], script"))),
        zC(o, l, s, "aria-hidden"))
      : function () {
          return null;
        };
  };
function LC(e) {
  const a = UC(e),
    s = A.forwardRef((o, l) => {
      const { children: c, ...d } = o,
        h = A.Children.toArray(c),
        g = h.find(kC);
      if (g) {
        const m = g.props.children,
          v = h.map((p) =>
            p === g
              ? A.Children.count(m) > 1
                ? A.Children.only(null)
                : A.isValidElement(m)
                ? m.props.children
                : null
              : p
          );
        return O.jsx(a, {
          ...d,
          ref: l,
          children: A.isValidElement(m) ? A.cloneElement(m, void 0, v) : null,
        });
      }
      return O.jsx(a, { ...d, ref: l, children: c });
    });
  return (s.displayName = `${e}.Slot`), s;
}
function UC(e) {
  const a = A.forwardRef((s, o) => {
    const { children: l, ...c } = s;
    if (A.isValidElement(l)) {
      const d = qC(l),
        h = HC(c, l.props);
      return (
        l.type !== A.Fragment && (h.ref = o ? Kl(o, d) : d),
        A.cloneElement(l, h)
      );
    }
    return A.Children.count(l) > 1 ? A.Children.only(null) : null;
  });
  return (a.displayName = `${e}.SlotClone`), a;
}
var BC = Symbol("radix.slottable");
function kC(e) {
  return (
    A.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === BC
  );
}
function HC(e, a) {
  const s = { ...a };
  for (const o in a) {
    const l = e[o],
      c = a[o];
    /^on[A-Z]/.test(o)
      ? l && c
        ? (s[o] = (...h) => {
            const g = c(...h);
            return l(...h), g;
          })
        : l && (s[o] = l)
      : o === "style"
      ? (s[o] = { ...l, ...c })
      : o === "className" && (s[o] = [l, c].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function qC(e) {
  let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? e.ref
    : ((a = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? e.props.ref : e.props.ref || e.ref);
}
var $l = "Dialog",
  [B0] = hT($l),
  [PC, xn] = B0($l),
  k0 = (e) => {
    const {
        __scopeDialog: a,
        children: s,
        open: o,
        defaultOpen: l,
        onOpenChange: c,
        modal: d = !0,
      } = e,
      h = A.useRef(null),
      g = A.useRef(null),
      [m, v] = vT({ prop: o, defaultProp: l ?? !1, onChange: c, caller: $l });
    return O.jsx(PC, {
      scope: a,
      triggerRef: h,
      contentRef: g,
      contentId: Mf(),
      titleId: Mf(),
      descriptionId: Mf(),
      open: m,
      onOpenChange: v,
      onOpenToggle: A.useCallback(() => v((p) => !p), [v]),
      modal: d,
      children: s,
    });
  };
k0.displayName = $l;
var H0 = "DialogTrigger",
  q0 = A.forwardRef((e, a) => {
    const { __scopeDialog: s, ...o } = e,
      l = xn(H0, s),
      c = Or(a, l.triggerRef);
    return O.jsx(ia.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": l.open,
      "aria-controls": l.contentId,
      "data-state": Sd(l.open),
      ...o,
      ref: c,
      onClick: Ga(e.onClick, l.onOpenToggle),
    });
  });
q0.displayName = H0;
var vd = "DialogPortal",
  [YC, P0] = B0(vd, { forceMount: void 0 }),
  Y0 = (e) => {
    const { __scopeDialog: a, forceMount: s, children: o, container: l } = e,
      c = xn(vd, a);
    return O.jsx(YC, {
      scope: a,
      forceMount: s,
      children: A.Children.map(o, (d) =>
        O.jsx(Zl, {
          present: s || c.open,
          children: O.jsx(C0, { asChild: !0, container: l, children: d }),
        })
      ),
    });
  };
Y0.displayName = vd;
var Bl = "DialogOverlay",
  V0 = A.forwardRef((e, a) => {
    const s = P0(Bl, e.__scopeDialog),
      { forceMount: o = s.forceMount, ...l } = e,
      c = xn(Bl, e.__scopeDialog);
    return c.modal
      ? O.jsx(Zl, {
          present: o || c.open,
          children: O.jsx(GC, { ...l, ref: a }),
        })
      : null;
  });
V0.displayName = Bl;
var VC = LC("DialogOverlay.RemoveScroll"),
  GC = A.forwardRef((e, a) => {
    const { __scopeDialog: s, ...o } = e,
      l = xn(Bl, s);
    return O.jsx(L0, {
      as: VC,
      allowPinchZoom: !0,
      shards: [l.contentRef],
      children: O.jsx(ia.div, {
        "data-state": Sd(l.open),
        ...o,
        ref: a,
        style: { pointerEvents: "auto", ...o.style },
      }),
    });
  }),
  Rr = "DialogContent",
  G0 = A.forwardRef((e, a) => {
    const s = P0(Rr, e.__scopeDialog),
      { forceMount: o = s.forceMount, ...l } = e,
      c = xn(Rr, e.__scopeDialog);
    return O.jsx(Zl, {
      present: o || c.open,
      children: c.modal
        ? O.jsx(QC, { ...l, ref: a })
        : O.jsx(IC, { ...l, ref: a }),
    });
  });
G0.displayName = Rr;
var QC = A.forwardRef((e, a) => {
    const s = xn(Rr, e.__scopeDialog),
      o = A.useRef(null),
      l = Or(a, s.contentRef, o);
    return (
      A.useEffect(() => {
        const c = o.current;
        if (c) return jC(c);
      }, []),
      O.jsx(Q0, {
        ...e,
        ref: l,
        trapFocus: s.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ga(e.onCloseAutoFocus, (c) => {
          c.preventDefault(), s.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Ga(e.onPointerDownOutside, (c) => {
          const d = c.detail.originalEvent,
            h = d.button === 0 && d.ctrlKey === !0;
          (d.button === 2 || h) && c.preventDefault();
        }),
        onFocusOutside: Ga(e.onFocusOutside, (c) => c.preventDefault()),
      })
    );
  }),
  IC = A.forwardRef((e, a) => {
    const s = xn(Rr, e.__scopeDialog),
      o = A.useRef(!1),
      l = A.useRef(!1);
    return O.jsx(Q0, {
      ...e,
      ref: a,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (c) => {
        e.onCloseAutoFocus?.(c),
          c.defaultPrevented ||
            (o.current || s.triggerRef.current?.focus(), c.preventDefault()),
          (o.current = !1),
          (l.current = !1);
      },
      onInteractOutside: (c) => {
        e.onInteractOutside?.(c),
          c.defaultPrevented ||
            ((o.current = !0),
            c.detail.originalEvent.type === "pointerdown" && (l.current = !0));
        const d = c.target;
        s.triggerRef.current?.contains(d) && c.preventDefault(),
          c.detail.originalEvent.type === "focusin" &&
            l.current &&
            c.preventDefault();
      },
    });
  }),
  Q0 = A.forwardRef((e, a) => {
    const {
        __scopeDialog: s,
        trapFocus: o,
        onOpenAutoFocus: l,
        onCloseAutoFocus: c,
        ...d
      } = e,
      h = xn(Rr, s),
      g = A.useRef(null),
      m = Or(a, g);
    return (
      XT(),
      O.jsxs(O.Fragment, {
        children: [
          O.jsx(R0, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: l,
            onUnmountAutoFocus: c,
            children: O.jsx(E0, {
              role: "dialog",
              id: h.contentId,
              "aria-describedby": h.descriptionId,
              "aria-labelledby": h.titleId,
              "data-state": Sd(h.open),
              ...d,
              ref: m,
              onDismiss: () => h.onOpenChange(!1),
            }),
          }),
          O.jsxs(O.Fragment, {
            children: [
              O.jsx(FC, { titleId: h.titleId }),
              O.jsx(KC, { contentRef: g, descriptionId: h.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  bd = "DialogTitle",
  I0 = A.forwardRef((e, a) => {
    const { __scopeDialog: s, ...o } = e,
      l = xn(bd, s);
    return O.jsx(ia.h2, { id: l.titleId, ...o, ref: a });
  });
I0.displayName = bd;
var F0 = "DialogDescription",
  X0 = A.forwardRef((e, a) => {
    const { __scopeDialog: s, ...o } = e,
      l = xn(F0, s);
    return O.jsx(ia.p, { id: l.descriptionId, ...o, ref: a });
  });
X0.displayName = F0;
var K0 = "DialogClose",
  Z0 = A.forwardRef((e, a) => {
    const { __scopeDialog: s, ...o } = e,
      l = xn(K0, s);
    return O.jsx(ia.button, {
      type: "button",
      ...o,
      ref: a,
      onClick: Ga(e.onClick, () => l.onOpenChange(!1)),
    });
  });
Z0.displayName = K0;
function Sd(e) {
  return e ? "open" : "closed";
}
var J0 = "DialogTitleWarning",
  [kM, $0] = dT(J0, { contentName: Rr, titleName: bd, docsSlug: "dialog" }),
  FC = ({ titleId: e }) => {
    const a = $0(J0),
      s = `\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;
    return (
      A.useEffect(() => {
        e && (document.getElementById(e) || console.error(s));
      }, [s, e]),
      null
    );
  },
  XC = "DialogDescriptionWarning",
  KC = ({ contentRef: e, descriptionId: a }) => {
    const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      $0(XC).contentName
    }}.`;
    return (
      A.useEffect(() => {
        const l = e.current?.getAttribute("aria-describedby");
        a && l && (document.getElementById(a) || console.warn(o));
      }, [o, e, a]),
      null
    );
  },
  ZC = k0,
  JC = q0,
  $C = Y0,
  W0 = V0,
  tb = G0,
  eb = I0,
  nb = X0,
  ab = Z0;
function rb(e) {
  var a,
    s,
    o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (a = 0; a < l; a++)
        e[a] && (s = rb(e[a])) && (o && (o += " "), (o += s));
    } else for (s in e) e[s] && (o && (o += " "), (o += s));
  return o;
}
function sb() {
  for (var e, a, s = 0, o = "", l = arguments.length; s < l; s++)
    (e = arguments[s]) && (a = rb(e)) && (o && (o += " "), (o += a));
  return o;
}
const Hy = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  qy = sb,
  xd = (e, a) => (s) => {
    var o;
    if (a?.variants == null) return qy(e, s?.class, s?.className);
    const { variants: l, defaultVariants: c } = a,
      d = Object.keys(l).map((m) => {
        const v = s?.[m],
          p = c?.[m];
        if (v === null) return null;
        const b = Hy(v) || Hy(p);
        return l[m][b];
      }),
      h =
        s &&
        Object.entries(s).reduce((m, v) => {
          let [p, b] = v;
          return b === void 0 || (m[p] = b), m;
        }, {}),
      g =
        a == null || (o = a.compoundVariants) === null || o === void 0
          ? void 0
          : o.reduce((m, v) => {
              let { class: p, className: b, ...x } = v;
              return Object.entries(x).every((R) => {
                let [_, w] = R;
                return Array.isArray(w)
                  ? w.includes({ ...c, ...h }[_])
                  : { ...c, ...h }[_] === w;
              })
                ? [...m, p, b]
                : m;
            }, []);
    return qy(e, d, g, s?.class, s?.className);
  },
  WC = (e, a) => {
    const s = new Array(e.length + a.length);
    for (let o = 0; o < e.length; o++) s[o] = e[o];
    for (let o = 0; o < a.length; o++) s[e.length + o] = a[o];
    return s;
  },
  tA = (e, a) => ({ classGroupId: e, validator: a }),
  ib = (e = new Map(), a = null, s) => ({
    nextPart: e,
    validators: a,
    classGroupId: s,
  }),
  kl = "-",
  Py = [],
  eA = "arbitrary..",
  nA = (e) => {
    const a = rA(e),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: o } = e;
    return {
      getClassGroupId: (d) => {
        if (d.startsWith("[") && d.endsWith("]")) return aA(d);
        const h = d.split(kl),
          g = h[0] === "" && h.length > 1 ? 1 : 0;
        return ob(h, g, a);
      },
      getConflictingClassGroupIds: (d, h) => {
        if (h) {
          const g = o[d],
            m = s[d];
          return g ? (m ? WC(m, g) : g) : m || Py;
        }
        return s[d] || Py;
      },
    };
  },
  ob = (e, a, s) => {
    if (e.length - a === 0) return s.classGroupId;
    const l = e[a],
      c = s.nextPart.get(l);
    if (c) {
      const m = ob(e, a + 1, c);
      if (m) return m;
    }
    const d = s.validators;
    if (d === null) return;
    const h = a === 0 ? e.join(kl) : e.slice(a).join(kl),
      g = d.length;
    for (let m = 0; m < g; m++) {
      const v = d[m];
      if (v.validator(h)) return v.classGroupId;
    }
  },
  aA = (e) =>
    e.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const a = e.slice(1, -1),
            s = a.indexOf(":"),
            o = a.slice(0, s);
          return o ? eA + o : void 0;
        })(),
  rA = (e) => {
    const { theme: a, classGroups: s } = e;
    return sA(s, a);
  },
  sA = (e, a) => {
    const s = ib();
    for (const o in e) {
      const l = e[o];
      wd(l, s, o, a);
    }
    return s;
  },
  wd = (e, a, s, o) => {
    const l = e.length;
    for (let c = 0; c < l; c++) {
      const d = e[c];
      iA(d, a, s, o);
    }
  },
  iA = (e, a, s, o) => {
    if (typeof e == "string") {
      oA(e, a, s);
      return;
    }
    if (typeof e == "function") {
      lA(e, a, s, o);
      return;
    }
    uA(e, a, s, o);
  },
  oA = (e, a, s) => {
    const o = e === "" ? a : lb(a, e);
    o.classGroupId = s;
  },
  lA = (e, a, s, o) => {
    if (cA(e)) {
      wd(e(o), a, s, o);
      return;
    }
    a.validators === null && (a.validators = []), a.validators.push(tA(s, e));
  },
  uA = (e, a, s, o) => {
    const l = Object.entries(e),
      c = l.length;
    for (let d = 0; d < c; d++) {
      const [h, g] = l[d];
      wd(g, lb(a, h), s, o);
    }
  },
  lb = (e, a) => {
    let s = e;
    const o = a.split(kl),
      l = o.length;
    for (let c = 0; c < l; c++) {
      const d = o[c];
      let h = s.nextPart.get(d);
      h || ((h = ib()), s.nextPart.set(d, h)), (s = h);
    }
    return s;
  },
  cA = (e) => "isThemeGetter" in e && e.isThemeGetter === !0,
  fA = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let a = 0,
      s = Object.create(null),
      o = Object.create(null);
    const l = (c, d) => {
      (s[c] = d), a++, a > e && ((a = 0), (o = s), (s = Object.create(null)));
    };
    return {
      get(c) {
        let d = s[c];
        if (d !== void 0) return d;
        if ((d = o[c]) !== void 0) return l(c, d), d;
      },
      set(c, d) {
        c in s ? (s[c] = d) : l(c, d);
      },
    };
  },
  ed = "!",
  Yy = ":",
  dA = [],
  Vy = (e, a, s, o, l) => ({
    modifiers: e,
    hasImportantModifier: a,
    baseClassName: s,
    maybePostfixModifierPosition: o,
    isExternal: l,
  }),
  hA = (e) => {
    const { prefix: a, experimentalParseClassName: s } = e;
    let o = (l) => {
      const c = [];
      let d = 0,
        h = 0,
        g = 0,
        m;
      const v = l.length;
      for (let _ = 0; _ < v; _++) {
        const w = l[_];
        if (d === 0 && h === 0) {
          if (w === Yy) {
            c.push(l.slice(g, _)), (g = _ + 1);
            continue;
          }
          if (w === "/") {
            m = _;
            continue;
          }
        }
        w === "[" ? d++ : w === "]" ? d-- : w === "(" ? h++ : w === ")" && h--;
      }
      const p = c.length === 0 ? l : l.slice(g);
      let b = p,
        x = !1;
      p.endsWith(ed)
        ? ((b = p.slice(0, -1)), (x = !0))
        : p.startsWith(ed) && ((b = p.slice(1)), (x = !0));
      const R = m && m > g ? m - g : void 0;
      return Vy(c, x, b, R);
    };
    if (a) {
      const l = a + Yy,
        c = o;
      o = (d) =>
        d.startsWith(l) ? c(d.slice(l.length)) : Vy(dA, !1, d, void 0, !0);
    }
    if (s) {
      const l = o;
      o = (c) => s({ className: c, parseClassName: l });
    }
    return o;
  },
  mA = (e) => {
    const a = new Map();
    return (
      e.orderSensitiveModifiers.forEach((s, o) => {
        a.set(s, 1e6 + o);
      }),
      (s) => {
        const o = [];
        let l = [];
        for (let c = 0; c < s.length; c++) {
          const d = s[c],
            h = d[0] === "[",
            g = a.has(d);
          h || g
            ? (l.length > 0 && (l.sort(), o.push(...l), (l = [])), o.push(d))
            : l.push(d);
        }
        return l.length > 0 && (l.sort(), o.push(...l)), o;
      }
    );
  },
  pA = (e) => ({
    cache: fA(e.cacheSize),
    parseClassName: hA(e),
    sortModifiers: mA(e),
    ...nA(e),
  }),
  gA = /\s+/,
  yA = (e, a) => {
    const {
        parseClassName: s,
        getClassGroupId: o,
        getConflictingClassGroupIds: l,
        sortModifiers: c,
      } = a,
      d = [],
      h = e.trim().split(gA);
    let g = "";
    for (let m = h.length - 1; m >= 0; m -= 1) {
      const v = h[m],
        {
          isExternal: p,
          modifiers: b,
          hasImportantModifier: x,
          baseClassName: R,
          maybePostfixModifierPosition: _,
        } = s(v);
      if (p) {
        g = v + (g.length > 0 ? " " + g : g);
        continue;
      }
      let w = !!_,
        C = o(w ? R.substring(0, _) : R);
      if (!C) {
        if (!w) {
          g = v + (g.length > 0 ? " " + g : g);
          continue;
        }
        if (((C = o(R)), !C)) {
          g = v + (g.length > 0 ? " " + g : g);
          continue;
        }
        w = !1;
      }
      const k = b.length === 0 ? "" : b.length === 1 ? b[0] : c(b).join(":"),
        q = x ? k + ed : k,
        j = q + C;
      if (d.indexOf(j) > -1) continue;
      d.push(j);
      const K = l(C, w);
      for (let J = 0; J < K.length; ++J) {
        const Y = K[J];
        d.push(q + Y);
      }
      g = v + (g.length > 0 ? " " + g : g);
    }
    return g;
  },
  vA = (...e) => {
    let a = 0,
      s,
      o,
      l = "";
    for (; a < e.length; )
      (s = e[a++]) && (o = ub(s)) && (l && (l += " "), (l += o));
    return l;
  },
  ub = (e) => {
    if (typeof e == "string") return e;
    let a,
      s = "";
    for (let o = 0; o < e.length; o++)
      e[o] && (a = ub(e[o])) && (s && (s += " "), (s += a));
    return s;
  },
  bA = (e, ...a) => {
    let s, o, l, c;
    const d = (g) => {
        const m = a.reduce((v, p) => p(v), e());
        return (s = pA(m)), (o = s.cache.get), (l = s.cache.set), (c = h), h(g);
      },
      h = (g) => {
        const m = o(g);
        if (m) return m;
        const v = yA(g, s);
        return l(g, v), v;
      };
    return (c = d), (...g) => c(vA(...g));
  },
  SA = [],
  ue = (e) => {
    const a = (s) => s[e] || SA;
    return (a.isThemeGetter = !0), a;
  },
  cb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  fb = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  xA = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  wA = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  EA =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  _A = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  RA = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  TA =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  za = (e) => xA.test(e),
  Et = (e) => !!e && !Number.isNaN(Number(e)),
  ja = (e) => !!e && Number.isInteger(Number(e)),
  kf = (e) => e.endsWith("%") && Et(e.slice(0, -1)),
  na = (e) => wA.test(e),
  db = () => !0,
  CA = (e) => EA.test(e) && !_A.test(e),
  Ed = () => !1,
  AA = (e) => RA.test(e),
  OA = (e) => TA.test(e),
  MA = (e) => !lt(e) && !ut(e),
  NA = (e) => Ka(e, pb, Ed),
  lt = (e) => cb.test(e),
  br = (e) => Ka(e, gb, CA),
  Gy = (e) => Ka(e, HA, Et),
  DA = (e) => Ka(e, vb, db),
  zA = (e) => Ka(e, yb, Ed),
  Qy = (e) => Ka(e, hb, Ed),
  jA = (e) => Ka(e, mb, OA),
  bl = (e) => Ka(e, bb, AA),
  ut = (e) => fb.test(e),
  Li = (e) => Mr(e, gb),
  LA = (e) => Mr(e, yb),
  Iy = (e) => Mr(e, hb),
  UA = (e) => Mr(e, pb),
  BA = (e) => Mr(e, mb),
  Sl = (e) => Mr(e, bb, !0),
  kA = (e) => Mr(e, vb, !0),
  Ka = (e, a, s) => {
    const o = cb.exec(e);
    return o ? (o[1] ? a(o[1]) : s(o[2])) : !1;
  },
  Mr = (e, a, s = !1) => {
    const o = fb.exec(e);
    return o ? (o[1] ? a(o[1]) : s) : !1;
  },
  hb = (e) => e === "position" || e === "percentage",
  mb = (e) => e === "image" || e === "url",
  pb = (e) => e === "length" || e === "size" || e === "bg-size",
  gb = (e) => e === "length",
  HA = (e) => e === "number",
  yb = (e) => e === "family-name",
  vb = (e) => e === "number" || e === "weight",
  bb = (e) => e === "shadow",
  qA = () => {
    const e = ue("color"),
      a = ue("font"),
      s = ue("text"),
      o = ue("font-weight"),
      l = ue("tracking"),
      c = ue("leading"),
      d = ue("breakpoint"),
      h = ue("container"),
      g = ue("spacing"),
      m = ue("radius"),
      v = ue("shadow"),
      p = ue("inset-shadow"),
      b = ue("text-shadow"),
      x = ue("drop-shadow"),
      R = ue("blur"),
      _ = ue("perspective"),
      w = ue("aspect"),
      C = ue("ease"),
      k = ue("animate"),
      q = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      j = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      K = () => [...j(), ut, lt],
      J = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Y = () => ["auto", "contain", "none"],
      U = () => [ut, lt, g],
      $ = () => [za, "full", "auto", ...U()],
      it = () => [ja, "none", "subgrid", ut, lt],
      at = () => ["auto", { span: ["full", ja, ut, lt] }, ja, ut, lt],
      mt = () => [ja, "auto", ut, lt],
      bt = () => ["auto", "min", "max", "fr", ut, lt],
      jt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      _t = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      L = () => ["auto", ...U()],
      Z = () => [
        za,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...U(),
      ],
      st = () => [
        za,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...U(),
      ],
      St = () => [
        za,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...U(),
      ],
      et = () => [e, ut, lt],
      N = () => [...j(), Iy, Qy, { position: [ut, lt] }],
      Q = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      F = () => ["auto", "cover", "contain", UA, NA, { size: [ut, lt] }],
      tt = () => [kf, Li, br],
      W = () => ["", "none", "full", m, ut, lt],
      rt = () => ["", Et, Li, br],
      yt = () => ["solid", "dashed", "dotted", "double"],
      pt = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      dt = () => [Et, kf, Iy, Qy],
      be = () => ["", "none", R, ut, lt],
      ie = () => ["none", Et, ut, lt],
      ee = () => ["none", Et, ut, lt],
      hn = () => [Et, ut, lt],
      oe = () => [za, "full", ...U()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [na],
        breakpoint: [na],
        color: [db],
        container: [na],
        "drop-shadow": [na],
        ease: ["in", "out", "in-out"],
        font: [MA],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [na],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [na],
        shadow: [na],
        spacing: ["px", Et],
        text: [na],
        "text-shadow": [na],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", za, lt, ut, w] }],
        container: ["container"],
        columns: [{ columns: [Et, lt, ut, h] }],
        "break-after": [{ "break-after": q() }],
        "break-before": [{ "break-before": q() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: K() }],
        overflow: [{ overflow: J() }],
        "overflow-x": [{ "overflow-x": J() }],
        "overflow-y": [{ "overflow-y": J() }],
        overscroll: [{ overscroll: Y() }],
        "overscroll-x": [{ "overscroll-x": Y() }],
        "overscroll-y": [{ "overscroll-y": Y() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: $() }],
        "inset-x": [{ "inset-x": $() }],
        "inset-y": [{ "inset-y": $() }],
        start: [{ "inset-s": $(), start: $() }],
        end: [{ "inset-e": $(), end: $() }],
        "inset-bs": [{ "inset-bs": $() }],
        "inset-be": [{ "inset-be": $() }],
        top: [{ top: $() }],
        right: [{ right: $() }],
        bottom: [{ bottom: $() }],
        left: [{ left: $() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [ja, "auto", ut, lt] }],
        basis: [{ basis: [za, "full", "auto", h, ...U()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Et, za, "auto", "initial", "none", lt] }],
        grow: [{ grow: ["", Et, ut, lt] }],
        shrink: [{ shrink: ["", Et, ut, lt] }],
        order: [{ order: [ja, "first", "last", "none", ut, lt] }],
        "grid-cols": [{ "grid-cols": it() }],
        "col-start-end": [{ col: at() }],
        "col-start": [{ "col-start": mt() }],
        "col-end": [{ "col-end": mt() }],
        "grid-rows": [{ "grid-rows": it() }],
        "row-start-end": [{ row: at() }],
        "row-start": [{ "row-start": mt() }],
        "row-end": [{ "row-end": mt() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": bt() }],
        "auto-rows": [{ "auto-rows": bt() }],
        gap: [{ gap: U() }],
        "gap-x": [{ "gap-x": U() }],
        "gap-y": [{ "gap-y": U() }],
        "justify-content": [{ justify: [...jt(), "normal"] }],
        "justify-items": [{ "justify-items": [..._t(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ..._t()] }],
        "align-content": [{ content: ["normal", ...jt()] }],
        "align-items": [{ items: [..._t(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ..._t(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": jt() }],
        "place-items": [{ "place-items": [..._t(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ..._t()] }],
        p: [{ p: U() }],
        px: [{ px: U() }],
        py: [{ py: U() }],
        ps: [{ ps: U() }],
        pe: [{ pe: U() }],
        pbs: [{ pbs: U() }],
        pbe: [{ pbe: U() }],
        pt: [{ pt: U() }],
        pr: [{ pr: U() }],
        pb: [{ pb: U() }],
        pl: [{ pl: U() }],
        m: [{ m: L() }],
        mx: [{ mx: L() }],
        my: [{ my: L() }],
        ms: [{ ms: L() }],
        me: [{ me: L() }],
        mbs: [{ mbs: L() }],
        mbe: [{ mbe: L() }],
        mt: [{ mt: L() }],
        mr: [{ mr: L() }],
        mb: [{ mb: L() }],
        ml: [{ ml: L() }],
        "space-x": [{ "space-x": U() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": U() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: Z() }],
        "inline-size": [{ inline: ["auto", ...st()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...st()] }],
        "max-inline-size": [{ "max-inline": ["none", ...st()] }],
        "block-size": [{ block: ["auto", ...St()] }],
        "min-block-size": [{ "min-block": ["auto", ...St()] }],
        "max-block-size": [{ "max-block": ["none", ...St()] }],
        w: [{ w: [h, "screen", ...Z()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...Z()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [d] }, ...Z()] },
        ],
        h: [{ h: ["screen", "lh", ...Z()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...Z()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...Z()] }],
        "font-size": [{ text: ["base", s, Li, br] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [o, kA, DA] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              kf,
              lt,
            ],
          },
        ],
        "font-family": [{ font: [LA, zA, a] }],
        "font-features": [{ "font-features": [lt] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [l, ut, lt] }],
        "line-clamp": [{ "line-clamp": [Et, "none", ut, Gy] }],
        leading: [{ leading: [c, ...U()] }],
        "list-image": [{ "list-image": ["none", ut, lt] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ut, lt] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: et() }],
        "text-color": [{ text: et() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...yt(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Et, "from-font", "auto", ut, br] },
        ],
        "text-decoration-color": [{ decoration: et() }],
        "underline-offset": [{ "underline-offset": [Et, "auto", ut, lt] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: U() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ut,
              lt,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ut, lt] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: N() }],
        "bg-repeat": [{ bg: Q() }],
        "bg-size": [{ bg: F() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  ja,
                  ut,
                  lt,
                ],
                radial: ["", ut, lt],
                conic: [ja, ut, lt],
              },
              BA,
              jA,
            ],
          },
        ],
        "bg-color": [{ bg: et() }],
        "gradient-from-pos": [{ from: tt() }],
        "gradient-via-pos": [{ via: tt() }],
        "gradient-to-pos": [{ to: tt() }],
        "gradient-from": [{ from: et() }],
        "gradient-via": [{ via: et() }],
        "gradient-to": [{ to: et() }],
        rounded: [{ rounded: W() }],
        "rounded-s": [{ "rounded-s": W() }],
        "rounded-e": [{ "rounded-e": W() }],
        "rounded-t": [{ "rounded-t": W() }],
        "rounded-r": [{ "rounded-r": W() }],
        "rounded-b": [{ "rounded-b": W() }],
        "rounded-l": [{ "rounded-l": W() }],
        "rounded-ss": [{ "rounded-ss": W() }],
        "rounded-se": [{ "rounded-se": W() }],
        "rounded-ee": [{ "rounded-ee": W() }],
        "rounded-es": [{ "rounded-es": W() }],
        "rounded-tl": [{ "rounded-tl": W() }],
        "rounded-tr": [{ "rounded-tr": W() }],
        "rounded-br": [{ "rounded-br": W() }],
        "rounded-bl": [{ "rounded-bl": W() }],
        "border-w": [{ border: rt() }],
        "border-w-x": [{ "border-x": rt() }],
        "border-w-y": [{ "border-y": rt() }],
        "border-w-s": [{ "border-s": rt() }],
        "border-w-e": [{ "border-e": rt() }],
        "border-w-bs": [{ "border-bs": rt() }],
        "border-w-be": [{ "border-be": rt() }],
        "border-w-t": [{ "border-t": rt() }],
        "border-w-r": [{ "border-r": rt() }],
        "border-w-b": [{ "border-b": rt() }],
        "border-w-l": [{ "border-l": rt() }],
        "divide-x": [{ "divide-x": rt() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": rt() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...yt(), "hidden", "none"] }],
        "divide-style": [{ divide: [...yt(), "hidden", "none"] }],
        "border-color": [{ border: et() }],
        "border-color-x": [{ "border-x": et() }],
        "border-color-y": [{ "border-y": et() }],
        "border-color-s": [{ "border-s": et() }],
        "border-color-e": [{ "border-e": et() }],
        "border-color-bs": [{ "border-bs": et() }],
        "border-color-be": [{ "border-be": et() }],
        "border-color-t": [{ "border-t": et() }],
        "border-color-r": [{ "border-r": et() }],
        "border-color-b": [{ "border-b": et() }],
        "border-color-l": [{ "border-l": et() }],
        "divide-color": [{ divide: et() }],
        "outline-style": [{ outline: [...yt(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Et, ut, lt] }],
        "outline-w": [{ outline: ["", Et, Li, br] }],
        "outline-color": [{ outline: et() }],
        shadow: [{ shadow: ["", "none", v, Sl, bl] }],
        "shadow-color": [{ shadow: et() }],
        "inset-shadow": [{ "inset-shadow": ["none", p, Sl, bl] }],
        "inset-shadow-color": [{ "inset-shadow": et() }],
        "ring-w": [{ ring: rt() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: et() }],
        "ring-offset-w": [{ "ring-offset": [Et, br] }],
        "ring-offset-color": [{ "ring-offset": et() }],
        "inset-ring-w": [{ "inset-ring": rt() }],
        "inset-ring-color": [{ "inset-ring": et() }],
        "text-shadow": [{ "text-shadow": ["none", b, Sl, bl] }],
        "text-shadow-color": [{ "text-shadow": et() }],
        opacity: [{ opacity: [Et, ut, lt] }],
        "mix-blend": [
          { "mix-blend": [...pt(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": pt() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Et] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": dt() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": dt() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": et() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": et() }],
        "mask-image-t-from-pos": [{ "mask-t-from": dt() }],
        "mask-image-t-to-pos": [{ "mask-t-to": dt() }],
        "mask-image-t-from-color": [{ "mask-t-from": et() }],
        "mask-image-t-to-color": [{ "mask-t-to": et() }],
        "mask-image-r-from-pos": [{ "mask-r-from": dt() }],
        "mask-image-r-to-pos": [{ "mask-r-to": dt() }],
        "mask-image-r-from-color": [{ "mask-r-from": et() }],
        "mask-image-r-to-color": [{ "mask-r-to": et() }],
        "mask-image-b-from-pos": [{ "mask-b-from": dt() }],
        "mask-image-b-to-pos": [{ "mask-b-to": dt() }],
        "mask-image-b-from-color": [{ "mask-b-from": et() }],
        "mask-image-b-to-color": [{ "mask-b-to": et() }],
        "mask-image-l-from-pos": [{ "mask-l-from": dt() }],
        "mask-image-l-to-pos": [{ "mask-l-to": dt() }],
        "mask-image-l-from-color": [{ "mask-l-from": et() }],
        "mask-image-l-to-color": [{ "mask-l-to": et() }],
        "mask-image-x-from-pos": [{ "mask-x-from": dt() }],
        "mask-image-x-to-pos": [{ "mask-x-to": dt() }],
        "mask-image-x-from-color": [{ "mask-x-from": et() }],
        "mask-image-x-to-color": [{ "mask-x-to": et() }],
        "mask-image-y-from-pos": [{ "mask-y-from": dt() }],
        "mask-image-y-to-pos": [{ "mask-y-to": dt() }],
        "mask-image-y-from-color": [{ "mask-y-from": et() }],
        "mask-image-y-to-color": [{ "mask-y-to": et() }],
        "mask-image-radial": [{ "mask-radial": [ut, lt] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": dt() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": dt() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": et() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": et() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": j() }],
        "mask-image-conic-pos": [{ "mask-conic": [Et] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": dt() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": dt() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": et() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": et() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: N() }],
        "mask-repeat": [{ mask: Q() }],
        "mask-size": [{ mask: F() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ut, lt] }],
        filter: [{ filter: ["", "none", ut, lt] }],
        blur: [{ blur: be() }],
        brightness: [{ brightness: [Et, ut, lt] }],
        contrast: [{ contrast: [Et, ut, lt] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", x, Sl, bl] }],
        "drop-shadow-color": [{ "drop-shadow": et() }],
        grayscale: [{ grayscale: ["", Et, ut, lt] }],
        "hue-rotate": [{ "hue-rotate": [Et, ut, lt] }],
        invert: [{ invert: ["", Et, ut, lt] }],
        saturate: [{ saturate: [Et, ut, lt] }],
        sepia: [{ sepia: ["", Et, ut, lt] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ut, lt] }],
        "backdrop-blur": [{ "backdrop-blur": be() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Et, ut, lt] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Et, ut, lt] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Et, ut, lt] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Et, ut, lt] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Et, ut, lt] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Et, ut, lt] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Et, ut, lt] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Et, ut, lt] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": U() }],
        "border-spacing-x": [{ "border-spacing-x": U() }],
        "border-spacing-y": [{ "border-spacing-y": U() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ut,
              lt,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Et, "initial", ut, lt] }],
        ease: [{ ease: ["linear", "initial", C, ut, lt] }],
        delay: [{ delay: [Et, ut, lt] }],
        animate: [{ animate: ["none", k, ut, lt] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [_, ut, lt] }],
        "perspective-origin": [{ "perspective-origin": K() }],
        rotate: [{ rotate: ie() }],
        "rotate-x": [{ "rotate-x": ie() }],
        "rotate-y": [{ "rotate-y": ie() }],
        "rotate-z": [{ "rotate-z": ie() }],
        scale: [{ scale: ee() }],
        "scale-x": [{ "scale-x": ee() }],
        "scale-y": [{ "scale-y": ee() }],
        "scale-z": [{ "scale-z": ee() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: hn() }],
        "skew-x": [{ "skew-x": hn() }],
        "skew-y": [{ "skew-y": hn() }],
        transform: [{ transform: [ut, lt, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: K() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: oe() }],
        "translate-x": [{ "translate-x": oe() }],
        "translate-y": [{ "translate-y": oe() }],
        "translate-z": [{ "translate-z": oe() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: et() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: et() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ut,
              lt,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": U() }],
        "scroll-mx": [{ "scroll-mx": U() }],
        "scroll-my": [{ "scroll-my": U() }],
        "scroll-ms": [{ "scroll-ms": U() }],
        "scroll-me": [{ "scroll-me": U() }],
        "scroll-mbs": [{ "scroll-mbs": U() }],
        "scroll-mbe": [{ "scroll-mbe": U() }],
        "scroll-mt": [{ "scroll-mt": U() }],
        "scroll-mr": [{ "scroll-mr": U() }],
        "scroll-mb": [{ "scroll-mb": U() }],
        "scroll-ml": [{ "scroll-ml": U() }],
        "scroll-p": [{ "scroll-p": U() }],
        "scroll-px": [{ "scroll-px": U() }],
        "scroll-py": [{ "scroll-py": U() }],
        "scroll-ps": [{ "scroll-ps": U() }],
        "scroll-pe": [{ "scroll-pe": U() }],
        "scroll-pbs": [{ "scroll-pbs": U() }],
        "scroll-pbe": [{ "scroll-pbe": U() }],
        "scroll-pt": [{ "scroll-pt": U() }],
        "scroll-pr": [{ "scroll-pr": U() }],
        "scroll-pb": [{ "scroll-pb": U() }],
        "scroll-pl": [{ "scroll-pl": U() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", ut, lt],
          },
        ],
        fill: [{ fill: ["none", ...et()] }],
        "stroke-w": [{ stroke: [Et, Li, br, Gy] }],
        stroke: [{ stroke: ["none", ...et()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  PA = bA(qA);
function Nr(...e) {
  return PA(sb(e));
}
const Sb = ZC,
  xb = JC,
  Fy = ab,
  YA = $C,
  wb = A.forwardRef(({ className: e, ...a }, s) =>
    O.jsx(W0, {
      className: Nr(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...a,
      ref: s,
    })
  );
wb.displayName = W0.displayName;
const VA = xd(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  _d = A.forwardRef(
    ({ side: e = "right", className: a, children: s, ...o }, l) =>
      O.jsxs(YA, {
        children: [
          O.jsx(wb, {}),
          O.jsxs(tb, {
            ref: l,
            className: Nr(VA({ side: e }), a),
            ...o,
            children: [
              O.jsxs(ab, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  O.jsx(fT, { className: "h-4 w-4" }),
                  O.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
              s,
            ],
          }),
        ],
      })
  );
_d.displayName = tb.displayName;
const Rd = ({ className: e, ...a }) =>
  O.jsx("div", {
    className: Nr("flex flex-col space-y-2 text-center sm:text-left", e),
    ...a,
  });
Rd.displayName = "SheetHeader";
const Td = A.forwardRef(({ className: e, ...a }, s) =>
  O.jsx(eb, {
    ref: s,
    className: Nr("text-lg font-semibold text-foreground", e),
    ...a,
  })
);
Td.displayName = eb.displayName;
const Eb = A.forwardRef(({ className: e, ...a }, s) =>
  O.jsx(nb, { ref: s, className: Nr("text-sm text-muted-foreground", e), ...a })
);
Eb.displayName = nb.displayName;
var GA = Symbol.for("react.lazy"),
  Hl = rd[" use ".trim().toString()];
function QA(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function _b(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === GA &&
    "_payload" in e &&
    QA(e._payload)
  );
}
function IA(e) {
  const a = XA(e),
    s = A.forwardRef((o, l) => {
      let { children: c, ...d } = o;
      _b(c) && typeof Hl == "function" && (c = Hl(c._payload));
      const h = A.Children.toArray(c),
        g = h.find(ZA);
      if (g) {
        const m = g.props.children,
          v = h.map((p) =>
            p === g
              ? A.Children.count(m) > 1
                ? A.Children.only(null)
                : A.isValidElement(m)
                ? m.props.children
                : null
              : p
          );
        return O.jsx(a, {
          ...d,
          ref: l,
          children: A.isValidElement(m) ? A.cloneElement(m, void 0, v) : null,
        });
      }
      return O.jsx(a, { ...d, ref: l, children: c });
    });
  return (s.displayName = `${e}.Slot`), s;
}
var FA = IA("Slot");
function XA(e) {
  const a = A.forwardRef((s, o) => {
    let { children: l, ...c } = s;
    if (
      (_b(l) && typeof Hl == "function" && (l = Hl(l._payload)),
      A.isValidElement(l))
    ) {
      const d = $A(l),
        h = JA(c, l.props);
      return (
        l.type !== A.Fragment && (h.ref = o ? Kl(o, d) : d),
        A.cloneElement(l, h)
      );
    }
    return A.Children.count(l) > 1 ? A.Children.only(null) : null;
  });
  return (a.displayName = `${e}.SlotClone`), a;
}
var KA = Symbol("radix.slottable");
function ZA(e) {
  return (
    A.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === KA
  );
}
function JA(e, a) {
  const s = { ...a };
  for (const o in a) {
    const l = e[o],
      c = a[o];
    /^on[A-Z]/.test(o)
      ? l && c
        ? (s[o] = (...h) => {
            const g = c(...h);
            return l(...h), g;
          })
        : l && (s[o] = l)
      : o === "style"
      ? (s[o] = { ...l, ...c })
      : o === "className" && (s[o] = [l, c].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function $A(e) {
  let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? e.ref
    : ((a = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? e.props.ref : e.props.ref || e.ref);
}
const WA = xd(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Rs = A.forwardRef(
    ({ className: e, variant: a, size: s, asChild: o = !1, ...l }, c) => {
      const d = o ? FA : "button";
      return O.jsx(d, {
        className: Nr(WA({ variant: a, size: s, className: e })),
        ref: c,
        ...l,
      });
    }
  );
Rs.displayName = "Button";
const tO = xd(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function eO({ className: e, variant: a, ...s }) {
  return O.jsx("div", { className: Nr(tO({ variant: a }), e), ...s });
}
const Xy = (e) => {
    let a;
    const s = new Set(),
      o = (m, v) => {
        const p = typeof m == "function" ? m(a) : m;
        if (!Object.is(p, a)) {
          const b = a;
          (a =
            v ?? (typeof p != "object" || p === null)
              ? p
              : Object.assign({}, a, p)),
            s.forEach((x) => x(a, b));
        }
      },
      l = () => a,
      h = {
        setState: o,
        getState: l,
        getInitialState: () => g,
        subscribe: (m) => (s.add(m), () => s.delete(m)),
      },
      g = (a = e(o, l, h));
    return h;
  },
  nO = (e) => (e ? Xy(e) : Xy),
  aO = (e) => e;
function rO(e, a = aO) {
  const s = nt.useSyncExternalStore(
    e.subscribe,
    nt.useCallback(() => a(e.getState()), [e, a]),
    nt.useCallback(() => a(e.getInitialState()), [e, a])
  );
  return nt.useDebugValue(s), s;
}
const Ky = (e) => {
    const a = nO(e),
      s = (o) => rO(a, o);
    return Object.assign(s, a), s;
  },
  sO = (e) => (e ? Ky(e) : Ky);
function Rb(e, a) {
  let s;
  try {
    s = e();
  } catch {
    return;
  }
  return {
    getItem: (l) => {
      var c;
      const d = (g) => (g === null ? null : JSON.parse(g, void 0)),
        h = (c = s.getItem(l)) != null ? c : null;
      return h instanceof Promise ? h.then(d) : d(h);
    },
    setItem: (l, c) => s.setItem(l, JSON.stringify(c, void 0)),
    removeItem: (l) => s.removeItem(l),
  };
}
const nd = (e) => (a) => {
    try {
      const s = e(a);
      return s instanceof Promise
        ? s
        : {
            then(o) {
              return nd(o)(s);
            },
            catch(o) {
              return this;
            },
          };
    } catch (s) {
      return {
        then(o) {
          return this;
        },
        catch(o) {
          return nd(o)(s);
        },
      };
    }
  },
  iO = (e, a) => (s, o, l) => {
    let c = {
        storage: Rb(() => window.localStorage),
        partialize: (w) => w,
        version: 0,
        merge: (w, C) => ({ ...C, ...w }),
        ...a,
      },
      d = !1,
      h = 0;
    const g = new Set(),
      m = new Set();
    let v = c.storage;
    if (!v)
      return e(
        (...w) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`
          ),
            s(...w);
        },
        o,
        l
      );
    const p = () => {
        const w = c.partialize({ ...o() });
        return v.setItem(c.name, { state: w, version: c.version });
      },
      b = l.setState;
    l.setState = (w, C) => (b(w, C), p());
    const x = e((...w) => (s(...w), p()), o, l);
    l.getInitialState = () => x;
    let R;
    const _ = () => {
      var w, C;
      if (!v) return;
      const k = ++h;
      (d = !1),
        g.forEach((j) => {
          var K;
          return j((K = o()) != null ? K : x);
        });
      const q =
        ((C = c.onRehydrateStorage) == null
          ? void 0
          : C.call(c, (w = o()) != null ? w : x)) || void 0;
      return nd(v.getItem.bind(v))(c.name)
        .then((j) => {
          if (j)
            if (typeof j.version == "number" && j.version !== c.version) {
              if (c.migrate) {
                const K = c.migrate(j.state, j.version);
                return K instanceof Promise ? K.then((J) => [!0, J]) : [!0, K];
              }
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, j.state];
          return [!1, void 0];
        })
        .then((j) => {
          var K;
          if (k !== h) return;
          const [J, Y] = j;
          if (((R = c.merge(Y, (K = o()) != null ? K : x)), s(R, !0), J))
            return p();
        })
        .then(() => {
          k === h &&
            (q?.(o(), void 0), (R = o()), (d = !0), m.forEach((j) => j(R)));
        })
        .catch((j) => {
          k === h && q?.(void 0, j);
        });
    };
    return (
      (l.persist = {
        setOptions: (w) => {
          (c = { ...c, ...w }), w.storage && (v = w.storage);
        },
        clearStorage: () => {
          v?.removeItem(c.name);
        },
        getOptions: () => c,
        rehydrate: () => _(),
        hasHydrated: () => d,
        onHydrate: (w) => (
          g.add(w),
          () => {
            g.delete(w);
          }
        ),
        onFinishHydration: (w) => (
          m.add(w),
          () => {
            m.delete(w);
          }
        ),
      }),
      c.skipHydration || _(),
      R || x
    );
  },
  oO = iO,
  lO = "919711009880";
function uO(e) {
  if (e.length === 0) return "";
  const a = e.map((c, d) => {
      const h = c.product.node.title,
        g = c.selectedOptions.map((p) => p.value).join(" / "),
        m = c.quantity,
        v = `${c.price.currencyCode} ${parseFloat(c.price.amount).toFixed(2)}`;
      return `${d + 1}. ${h}${g ? ` (${g})` : ""} — Qty: ${m} @ ${v}`;
    }),
    s = e.reduce((c, d) => c + parseFloat(d.price.amount) * d.quantity, 0),
    o = e[0]?.price.currencyCode || "INR",
    l = `Hello SportsLuxuryIndia! 👋%0A%0AI'd like to place an order:%0A%0A${a.join(
      "%0A"
    )}%0A%0A*Total: ${o} ${s.toFixed(
      2
    )}*%0A%0APlease confirm availability and payment details.`;
  return `https://wa.me/${lO}?text=${l}`;
}
const cO = sO()(
  oO(
    (e, a) => ({
      items: [],
      isLoading: !1,
      addItem: (s) => {
        const { items: o } = a(),
          l = o.find((c) => c.variantId === s.variantId);
        if (l) {
          const c = l.quantity + s.quantity;
          e({
            items: o.map((d) =>
              d.variantId === s.variantId ? { ...d, quantity: c } : d
            ),
          });
        } else e({ items: [...o, { ...s, lineId: null }] });
      },
      updateQuantity: (s, o) => {
        const { items: l } = a();
        if (o <= 0) {
          e({ items: l.filter((c) => c.variantId !== s) });
          return;
        }
        e({
          items: l.map((c) => (c.variantId === s ? { ...c, quantity: o } : c)),
        });
      },
      removeItem: (s) => {
        const { items: o } = a();
        e({ items: o.filter((l) => l.variantId !== s) });
      },
      clearCart: () => e({ items: [] }),
      getWhatsAppOrderUrl: () => uO(a().items),
    }),
    {
      name: "shopify-cart",
      storage: Rb(() => localStorage),
      partialize: (e) => ({ items: e.items }),
    }
  )
);
function fO() {
  const [e, a] = A.useState(!1),
    {
      items: s,
      updateQuantity: o,
      removeItem: l,
      getWhatsAppOrderUrl: c,
    } = cO(),
    d = s.reduce((m, v) => m + v.quantity, 0),
    h = s.reduce((m, v) => m + parseFloat(v.price.amount) * v.quantity, 0),
    g = () => {
      const m = c();
      m && (window.open(m, "_blank"), a(!1));
    };
  return O.jsxs(Sb, {
    open: e,
    onOpenChange: a,
    children: [
      O.jsx(xb, {
        asChild: !0,
        children: O.jsxs(Rs, {
          variant: "ghost",
          size: "icon",
          className: "relative text-foreground hover:bg-secondary",
          children: [
            O.jsx(Ry, { className: "h-5 w-5" }),
            d > 0 &&
              O.jsx(eO, {
                className:
                  "absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] bg-ember text-ember-foreground border-0",
                children: d,
              }),
          ],
        }),
      }),
      O.jsxs(_d, {
        className:
          "w-full sm:max-w-lg flex flex-col h-full bg-card border-border",
        children: [
          O.jsxs(Rd, {
            className: "flex-shrink-0 border-b border-border pb-4",
            children: [
              O.jsx(Td, {
                className: "text-display text-2xl tracking-wider uppercase",
                children: "Your Bag",
              }),
              O.jsx(Eb, {
                className: "text-muted-foreground",
                children:
                  d === 0
                    ? "Empty — go pick something"
                    : `${d} item${d !== 1 ? "s" : ""}`,
              }),
            ],
          }),
          O.jsx("div", {
            className: "flex flex-col flex-1 pt-6 min-h-0",
            children:
              s.length === 0
                ? O.jsx("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: O.jsxs("div", {
                      className: "text-center",
                      children: [
                        O.jsx(Ry, {
                          className:
                            "h-12 w-12 text-muted-foreground mx-auto mb-4",
                        }),
                        O.jsx("p", {
                          className: "text-muted-foreground",
                          children: "Your bag is empty",
                        }),
                      ],
                    }),
                  })
                : O.jsxs(O.Fragment, {
                    children: [
                      O.jsx("div", {
                        className: "flex-1 overflow-y-auto pr-2 min-h-0",
                        children: O.jsx("div", {
                          className: "space-y-4",
                          children: s.map((m) =>
                            O.jsxs(
                              "div",
                              {
                                className:
                                  "flex gap-4 p-3 border border-border rounded-md bg-secondary/30",
                                children: [
                                  O.jsx("div", {
                                    className:
                                      "w-20 h-20 bg-background rounded overflow-hidden flex-shrink-0",
                                    children:
                                      m.product.node.images?.edges?.[0]?.node &&
                                      O.jsx("img", {
                                        src: m.product.node.images.edges[0].node
                                          .url,
                                        alt: m.product.node.title,
                                        className: "w-full h-full object-cover",
                                      }),
                                  }),
                                  O.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                      O.jsx("h4", {
                                        className:
                                          "font-display uppercase tracking-wide text-sm truncate",
                                        children: m.product.node.title,
                                      }),
                                      O.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground mt-1",
                                        children: m.selectedOptions
                                          .map((v) => v.value)
                                          .join(" • "),
                                      }),
                                      O.jsxs("p", {
                                        className:
                                          "font-semibold mt-2 text-gold",
                                        children: [
                                          m.price.currencyCode,
                                          " ",
                                          parseFloat(m.price.amount).toFixed(2),
                                        ],
                                      }),
                                    ],
                                  }),
                                  O.jsxs("div", {
                                    className:
                                      "flex flex-col items-end justify-between flex-shrink-0",
                                    children: [
                                      O.jsx(Rs, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-6 w-6",
                                        onClick: () => l(m.variantId),
                                        children: O.jsx(uT, {
                                          className: "h-3 w-3",
                                        }),
                                      }),
                                      O.jsxs("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                          O.jsx(Rs, {
                                            variant: "outline",
                                            size: "icon",
                                            className: "h-6 w-6",
                                            onClick: () =>
                                              o(m.variantId, m.quantity - 1),
                                            children: O.jsx(rT, {
                                              className: "h-3 w-3",
                                            }),
                                          }),
                                          O.jsx("span", {
                                            className:
                                              "w-8 text-center text-sm",
                                            children: m.quantity,
                                          }),
                                          O.jsx(Rs, {
                                            variant: "outline",
                                            size: "icon",
                                            className: "h-6 w-6",
                                            onClick: () =>
                                              o(m.variantId, m.quantity + 1),
                                            children: O.jsx(iT, {
                                              className: "h-3 w-3",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              m.variantId
                            )
                          ),
                        }),
                      }),
                      O.jsxs("div", {
                        className:
                          "flex-shrink-0 space-y-4 pt-4 border-t border-border bg-card",
                        children: [
                          O.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              O.jsx("span", {
                                className:
                                  "text-display text-xl uppercase tracking-wider",
                                children: "Total",
                              }),
                              O.jsxs("span", {
                                className: "text-2xl font-bold text-gold",
                                children: [
                                  s[0]?.price.currencyCode || "INR",
                                  " ",
                                  h.toFixed(2),
                                ],
                              }),
                            ],
                          }),
                          O.jsxs(Rs, {
                            onClick: g,
                            size: "lg",
                            disabled: s.length === 0,
                            className:
                              "w-full bg-green-600 hover:bg-green-700 text-white font-display tracking-widest uppercase text-base",
                            children: [
                              O.jsx(nT, { className: "w-4 h-4 mr-2" }),
                              "Place Order on WhatsApp",
                            ],
                          }),
                          O.jsx("p", {
                            className:
                              "text-xs text-muted-foreground text-center",
                            children:
                              "Your order will be sent via WhatsApp for confirmation & payment.",
                          }),
                        ],
                      }),
                    ],
                  }),
          }),
        ],
      }),
    ],
  });
}
const dO = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "All Products" },
    { to: "/contact", label: "Contact" },
  ],
  hO = [
    { to: "/shop", search: { category: "luxury" }, label: "Luxury Shop" },
    { to: "/shop", search: { category: "sport" }, label: "Sports Shop" },
    {
      to: "/shop",
      search: { category: "autographed" },
      label: "Autographed Items",
    },
  ];
function mO() {
  const e = l2({ select: (a) => a.location.pathname });
  return O.jsx("header", {
    className:
      "sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border",
    children: O.jsxs("div", {
      className:
        "mx-auto max-w-7xl px-4 sm:px-6 h-14 sm:h-16 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-4",
      children: [
        O.jsx("div", {
          className: "flex items-center gap-2 sm:gap-4 min-w-0",
          children: O.jsxs(Sb, {
            children: [
              O.jsx(xb, {
                asChild: !0,
                children: O.jsx("button", {
                  className:
                    "inline-flex items-center justify-center p-2 -ml-2 rounded-sm hover:bg-muted transition",
                  "aria-label": "Open menu",
                  children: O.jsx(tT, { className: "w-5 h-5" }),
                }),
              }),
              O.jsxs(_d, {
                side: "left",
                className: "w-72 sm:w-80",
                children: [
                  O.jsx(Rd, {
                    children: O.jsxs(Td, {
                      className:
                        "text-left font-display text-lg sm:text-xl tracking-[0.12em] uppercase",
                      children: [
                        "Sports",
                        O.jsx("span", {
                          className: "text-ember",
                          children: "Luxury",
                        }),
                        "India",
                      ],
                    }),
                  }),
                  O.jsxs("nav", {
                    className: "mt-8 flex flex-col gap-1",
                    children: [
                      dO.map((a) =>
                        O.jsx(
                          Fy,
                          {
                            asChild: !0,
                            children: O.jsx(Sn, {
                              to: a.to,
                              className: `px-3 py-3 text-sm uppercase tracking-widest rounded-sm transition-colors ${
                                e === a.to
                                  ? "text-foreground bg-muted font-medium"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                              }`,
                              children: a.label,
                            }),
                          },
                          a.to
                        )
                      ),
                      O.jsx("div", {
                        className: "my-3 border-t border-border",
                      }),
                      O.jsx("p", {
                        className:
                          "px-3 text-[10px] uppercase tracking-widest text-muted-foreground mb-1",
                        children: "Shop by category",
                      }),
                      hO.map((a) =>
                        O.jsx(
                          Fy,
                          {
                            asChild: !0,
                            children: O.jsx(Sn, {
                              to: a.to,
                              search: a.search,
                              className:
                                "px-3 py-3 text-sm uppercase tracking-widest rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors",
                              children: a.label,
                            }),
                          },
                          a.label
                        )
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        O.jsx(Sn, {
          to: "/",
          className: "flex items-center justify-center min-w-0",
          children: O.jsxs("span", {
            className:
              "font-display text-sm sm:text-2xl tracking-[0.12em] sm:tracking-[0.2em] uppercase truncate",
            children: [
              "Sports",
              O.jsx("span", { className: "text-ember", children: "Luxury" }),
              "India",
            ],
          }),
        }),
        O.jsx(fO, {}),
      ],
    }),
  });
}
function pO() {
  return O.jsxs("footer", {
    className: "border-t border-border mt-16 sm:mt-24 bg-card",
    children: [
      O.jsxs("div", {
        className:
          "mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 grid gap-8 sm:gap-12 md:grid-cols-4",
        children: [
          O.jsxs("div", {
            className: "md:col-span-2",
            children: [
              O.jsxs("div", {
                className:
                  "font-display text-xl sm:text-3xl tracking-[0.15em] sm:tracking-[0.2em] uppercase",
                children: [
                  "Sports",
                  O.jsx("span", {
                    className: "text-ember",
                    children: "Luxury",
                  }),
                  "India",
                ],
              }),
              O.jsx("p", {
                className:
                  "mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-sm",
                children:
                  "Where luxury meets performance — and legends sign off. Curated objects, elite sports gear, and authentic autographed memorabilia.",
              }),
            ],
          }),
          O.jsxs("div", {
            children: [
              O.jsx("h4", {
                className:
                  "text-display uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4",
                children: "Shop",
              }),
              O.jsxs("ul", {
                className: "space-y-2 text-sm text-muted-foreground",
                children: [
                  O.jsx("li", {
                    children: O.jsx(Sn, {
                      to: "/shop",
                      className: "hover:text-foreground",
                      children: "All Products",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx(Sn, {
                      to: "/shop",
                      className: "hover:text-foreground",
                      children: "Luxury",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx(Sn, {
                      to: "/shop",
                      className: "hover:text-foreground",
                      children: "Sport",
                    }),
                  }),
                  O.jsx("li", {
                    children: O.jsx(Sn, {
                      to: "/shop",
                      className: "hover:text-foreground",
                      children: "Autographed",
                    }),
                  }),
                ],
              }),
            ],
          }),
          O.jsxs("div", {
            children: [
              O.jsx("h4", {
                className:
                  "text-display uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4",
                children: "Company",
              }),
              O.jsx("ul", {
                className: "space-y-2 text-sm text-muted-foreground",
                children: O.jsx("li", {
                  children: O.jsx(Sn, {
                    to: "/contact",
                    className: "hover:text-foreground",
                    children: "Contact",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      O.jsxs("div", {
        className:
          "border-t border-border py-5 sm:py-6 px-4 text-center text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest",
        children: [
          "© ",
          new Date().getFullYear(),
          " SportsLuxuryIndia — Crafted for performance",
        ],
      }),
    ],
  });
}
function gO(e) {
  if (typeof document > "u") return;
  let a = document.head || document.getElementsByTagName("head")[0],
    s = document.createElement("style");
  (s.type = "text/css"),
    a.appendChild(s),
    s.styleSheet
      ? (s.styleSheet.cssText = e)
      : s.appendChild(document.createTextNode(e));
}
const yO = (e) => {
    switch (e) {
      case "success":
        return SO;
      case "info":
        return wO;
      case "warning":
        return xO;
      case "error":
        return EO;
      default:
        return null;
    }
  },
  vO = Array(12).fill(0),
  bO = ({ visible: e, className: a }) =>
    nt.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", a].filter(Boolean).join(" "),
        "data-visible": e,
      },
      nt.createElement(
        "div",
        { className: "sonner-spinner" },
        vO.map((s, o) =>
          nt.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${o}`,
          })
        )
      )
    ),
  SO = nt.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    nt.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  xO = nt.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    nt.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  wO = nt.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    nt.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  EO = nt.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    nt.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  _O = nt.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    nt.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    nt.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  RO = () => {
    const [e, a] = nt.useState(document.hidden);
    return (
      nt.useEffect(() => {
        const s = () => {
          a(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", s),
          () => window.removeEventListener("visibilitychange", s)
        );
      }, []),
      e
    );
  };
let ad = 1;
class TO {
  constructor() {
    (this.subscribe = (a) => (
      this.subscribers.push(a),
      () => {
        const s = this.subscribers.indexOf(a);
        this.subscribers.splice(s, 1);
      }
    )),
      (this.publish = (a) => {
        this.subscribers.forEach((s) => s(a));
      }),
      (this.addToast = (a) => {
        this.publish(a), (this.toasts = [...this.toasts, a]);
      }),
      (this.create = (a) => {
        var s;
        const { message: o, ...l } = a,
          c =
            typeof a?.id == "number" ||
            ((s = a.id) == null ? void 0 : s.length) > 0
              ? a.id
              : ad++,
          d = this.toasts.find((g) => g.id === c),
          h = a.dismissible === void 0 ? !0 : a.dismissible;
        return (
          this.dismissedToasts.has(c) && this.dismissedToasts.delete(c),
          d
            ? (this.toasts = this.toasts.map((g) =>
                g.id === c
                  ? (this.publish({ ...g, ...a, id: c, title: o }),
                    { ...g, ...a, id: c, dismissible: h, title: o })
                  : g
              ))
            : this.addToast({ title: o, ...l, dismissible: h, id: c }),
          c
        );
      }),
      (this.dismiss = (a) => (
        a
          ? (this.dismissedToasts.add(a),
            requestAnimationFrame(() =>
              this.subscribers.forEach((s) => s({ id: a, dismiss: !0 }))
            ))
          : this.toasts.forEach((s) => {
              this.subscribers.forEach((o) => o({ id: s.id, dismiss: !0 }));
            }),
        a
      )),
      (this.message = (a, s) => this.create({ ...s, message: a })),
      (this.error = (a, s) => this.create({ ...s, message: a, type: "error" })),
      (this.success = (a, s) =>
        this.create({ ...s, type: "success", message: a })),
      (this.info = (a, s) => this.create({ ...s, type: "info", message: a })),
      (this.warning = (a, s) =>
        this.create({ ...s, type: "warning", message: a })),
      (this.loading = (a, s) =>
        this.create({ ...s, type: "loading", message: a })),
      (this.promise = (a, s) => {
        if (!s) return;
        let o;
        s.loading !== void 0 &&
          (o = this.create({
            ...s,
            promise: a,
            type: "loading",
            message: s.loading,
            description:
              typeof s.description != "function" ? s.description : void 0,
          }));
        const l = Promise.resolve(a instanceof Function ? a() : a);
        let c = o !== void 0,
          d;
        const h = l
            .then(async (m) => {
              if (((d = ["resolve", m]), nt.isValidElement(m)))
                (c = !1), this.create({ id: o, type: "default", message: m });
              else if (AO(m) && !m.ok) {
                c = !1;
                const p =
                    typeof s.error == "function"
                      ? await s.error(`HTTP error! status: ${m.status}`)
                      : s.error,
                  b =
                    typeof s.description == "function"
                      ? await s.description(`HTTP error! status: ${m.status}`)
                      : s.description,
                  R =
                    typeof p == "object" && !nt.isValidElement(p)
                      ? p
                      : { message: p };
                this.create({ id: o, type: "error", description: b, ...R });
              } else if (m instanceof Error) {
                c = !1;
                const p =
                    typeof s.error == "function" ? await s.error(m) : s.error,
                  b =
                    typeof s.description == "function"
                      ? await s.description(m)
                      : s.description,
                  R =
                    typeof p == "object" && !nt.isValidElement(p)
                      ? p
                      : { message: p };
                this.create({ id: o, type: "error", description: b, ...R });
              } else if (s.success !== void 0) {
                c = !1;
                const p =
                    typeof s.success == "function"
                      ? await s.success(m)
                      : s.success,
                  b =
                    typeof s.description == "function"
                      ? await s.description(m)
                      : s.description,
                  R =
                    typeof p == "object" && !nt.isValidElement(p)
                      ? p
                      : { message: p };
                this.create({ id: o, type: "success", description: b, ...R });
              }
            })
            .catch(async (m) => {
              if (((d = ["reject", m]), s.error !== void 0)) {
                c = !1;
                const v =
                    typeof s.error == "function" ? await s.error(m) : s.error,
                  p =
                    typeof s.description == "function"
                      ? await s.description(m)
                      : s.description,
                  x =
                    typeof v == "object" && !nt.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: o, type: "error", description: p, ...x });
              }
            })
            .finally(() => {
              c && (this.dismiss(o), (o = void 0)),
                s.finally == null || s.finally.call(s);
            }),
          g = () =>
            new Promise((m, v) =>
              h.then(() => (d[0] === "reject" ? v(d[1]) : m(d[1]))).catch(v)
            );
        return typeof o != "string" && typeof o != "number"
          ? { unwrap: g }
          : Object.assign(o, { unwrap: g });
      }),
      (this.custom = (a, s) => {
        const o = s?.id || ad++;
        return this.create({ jsx: a(o), id: o, ...s }), o;
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((a) => !this.dismissedToasts.has(a.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set());
  }
}
const Ye = new TO(),
  CO = (e, a) => {
    const s = a?.id || ad++;
    return Ye.addToast({ title: e, ...a, id: s }), s;
  },
  AO = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  OO = CO,
  MO = () => Ye.toasts,
  NO = () => Ye.getActiveToasts(),
  DO = Object.assign(
    OO,
    {
      success: Ye.success,
      info: Ye.info,
      warning: Ye.warning,
      error: Ye.error,
      custom: Ye.custom,
      message: Ye.message,
      promise: Ye.promise,
      dismiss: Ye.dismiss,
      loading: Ye.loading,
    },
    { getHistory: MO, getToasts: NO }
  );
gO(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
);
function xl(e) {
  return e.label !== void 0;
}
const zO = 3,
  jO = "24px",
  LO = "16px",
  Zy = 4e3,
  UO = 356,
  BO = 14,
  kO = 45,
  HO = 200;
function Mn(...e) {
  return e.filter(Boolean).join(" ");
}
function qO(e) {
  const [a, s] = e.split("-"),
    o = [];
  return a && o.push(a), s && o.push(s), o;
}
const PO = (e) => {
  var a, s, o, l, c, d, h, g, m;
  const {
      invert: v,
      toast: p,
      unstyled: b,
      interacting: x,
      setHeights: R,
      visibleToasts: _,
      heights: w,
      index: C,
      toasts: k,
      expanded: q,
      removeToast: j,
      defaultRichColors: K,
      closeButton: J,
      style: Y,
      cancelButtonStyle: U,
      actionButtonStyle: $,
      className: it = "",
      descriptionClassName: at = "",
      duration: mt,
      position: bt,
      gap: jt,
      expandByDefault: _t,
      classNames: L,
      icons: Z,
      closeButtonAriaLabel: st = "Close toast",
    } = e,
    [St, et] = nt.useState(null),
    [N, Q] = nt.useState(null),
    [F, tt] = nt.useState(!1),
    [W, rt] = nt.useState(!1),
    [yt, pt] = nt.useState(!1),
    [dt, be] = nt.useState(!1),
    [ie, ee] = nt.useState(!1),
    [hn, oe] = nt.useState(0),
    [Za, jn] = nt.useState(0),
    wn = nt.useRef(p.duration || mt || Zy),
    tn = nt.useRef(null),
    Se = nt.useRef(null),
    Ie = C === 0,
    Ja = C + 1 <= _,
    de = p.type,
    En = p.dismissible !== !1,
    he = p.className || "",
    Bt = p.descriptionClassName || "",
    Kt = nt.useMemo(
      () => w.findIndex((gt) => gt.toastId === p.id) || 0,
      [w, p.id]
    ),
    en = nt.useMemo(() => {
      var gt;
      return (gt = p.closeButton) != null ? gt : J;
    }, [p.closeButton, J]),
    Ln = nt.useMemo(() => p.duration || mt || Zy, [p.duration, mt]),
    Us = nt.useRef(0),
    Un = nt.useRef(0),
    Xi = nt.useRef(0),
    oa = nt.useRef(null),
    [$a, Oe] = bt.split("-"),
    mn = nt.useMemo(
      () => w.reduce((gt, Qt, me) => (me >= Kt ? gt : gt + Qt.height), 0),
      [w, Kt]
    ),
    Te = RO(),
    Wl = p.invert || v,
    Bs = de === "loading";
  (Un.current = nt.useMemo(() => Kt * jt + mn, [Kt, mn])),
    nt.useEffect(() => {
      wn.current = Ln;
    }, [Ln]),
    nt.useEffect(() => {
      tt(!0);
    }, []),
    nt.useEffect(() => {
      const gt = Se.current;
      if (gt) {
        const Qt = gt.getBoundingClientRect().height;
        return (
          jn(Qt),
          R((me) => [
            { toastId: p.id, height: Qt, position: p.position },
            ...me,
          ]),
          () => R((me) => me.filter((Ce) => Ce.toastId !== p.id))
        );
      }
    }, [R, p.id]),
    nt.useLayoutEffect(() => {
      if (!F) return;
      const gt = Se.current,
        Qt = gt.style.height;
      gt.style.height = "auto";
      const me = gt.getBoundingClientRect().height;
      (gt.style.height = Qt),
        jn(me),
        R((Ce) =>
          Ce.find((Xt) => Xt.toastId === p.id)
            ? Ce.map((Xt) => (Xt.toastId === p.id ? { ...Xt, height: me } : Xt))
            : [{ toastId: p.id, height: me, position: p.position }, ...Ce]
        );
    }, [F, p.title, p.description, R, p.id, p.jsx, p.action, p.cancel]);
  const _n = nt.useCallback(() => {
    rt(!0),
      oe(Un.current),
      R((gt) => gt.filter((Qt) => Qt.toastId !== p.id)),
      setTimeout(() => {
        j(p);
      }, HO);
  }, [p, j, R, Un]);
  nt.useEffect(() => {
    if (
      (p.promise && de === "loading") ||
      p.duration === 1 / 0 ||
      p.type === "loading"
    )
      return;
    let gt;
    return (
      q || x || Te
        ? (() => {
            if (Xi.current < Us.current) {
              const Ce = new Date().getTime() - Us.current;
              wn.current = wn.current - Ce;
            }
            Xi.current = new Date().getTime();
          })()
        : wn.current !== 1 / 0 &&
          ((Us.current = new Date().getTime()),
          (gt = setTimeout(() => {
            p.onAutoClose == null || p.onAutoClose.call(p, p), _n();
          }, wn.current))),
      () => clearTimeout(gt)
    );
  }, [q, x, p, de, Te, _n]),
    nt.useEffect(() => {
      p.delete && (_n(), p.onDismiss == null || p.onDismiss.call(p, p));
    }, [_n, p.delete]);
  function zr() {
    var gt;
    if (Z?.loading) {
      var Qt;
      return nt.createElement(
        "div",
        {
          className: Mn(
            L?.loader,
            p == null || (Qt = p.classNames) == null ? void 0 : Qt.loader,
            "sonner-loader"
          ),
          "data-visible": de === "loading",
        },
        Z.loading
      );
    }
    return nt.createElement(bO, {
      className: Mn(
        L?.loader,
        p == null || (gt = p.classNames) == null ? void 0 : gt.loader
      ),
      visible: de === "loading",
    });
  }
  const jr = p.icon || Z?.[de] || yO(de);
  var Wa, Rn;
  return nt.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Se,
      className: Mn(
        it,
        he,
        L?.toast,
        p == null || (a = p.classNames) == null ? void 0 : a.toast,
        L?.default,
        L?.[de],
        p == null || (s = p.classNames) == null ? void 0 : s[de]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (Wa = p.richColors) != null ? Wa : K,
      "data-styled": !(p.jsx || p.unstyled || b),
      "data-mounted": F,
      "data-promise": !!p.promise,
      "data-swiped": ie,
      "data-removed": W,
      "data-visible": Ja,
      "data-y-position": $a,
      "data-x-position": Oe,
      "data-index": C,
      "data-front": Ie,
      "data-swiping": yt,
      "data-dismissible": En,
      "data-type": de,
      "data-invert": Wl,
      "data-swipe-out": dt,
      "data-swipe-direction": N,
      "data-expanded": !!(q || (_t && F)),
      "data-testid": p.testId,
      style: {
        "--index": C,
        "--toasts-before": C,
        "--z-index": k.length - C,
        "--offset": `${W ? hn : Un.current}px`,
        "--initial-height": _t ? "auto" : `${Za}px`,
        ...Y,
        ...p.style,
      },
      onDragEnd: () => {
        pt(!1), et(null), (oa.current = null);
      },
      onPointerDown: (gt) => {
        gt.button !== 2 &&
          (Bs ||
            !En ||
            ((tn.current = new Date()),
            oe(Un.current),
            gt.target.setPointerCapture(gt.pointerId),
            gt.target.tagName !== "BUTTON" &&
              (pt(!0), (oa.current = { x: gt.clientX, y: gt.clientY }))));
      },
      onPointerUp: () => {
        var gt, Qt, me;
        if (dt || !En) return;
        oa.current = null;
        const Ce = Number(
            ((gt = Se.current) == null
              ? void 0
              : gt.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          la = Number(
            ((Qt = Se.current) == null
              ? void 0
              : Qt.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          Xt =
            new Date().getTime() -
            ((me = tn.current) == null ? void 0 : me.getTime()),
          De = St === "x" ? Ce : la,
          tr = Math.abs(De) / Xt;
        if (Math.abs(De) >= kO || tr > 0.11) {
          oe(Un.current),
            p.onDismiss == null || p.onDismiss.call(p, p),
            Q(
              St === "x" ? (Ce > 0 ? "right" : "left") : la > 0 ? "down" : "up"
            ),
            _n(),
            be(!0);
          return;
        } else {
          var ze, je;
          (ze = Se.current) == null ||
            ze.style.setProperty("--swipe-amount-x", "0px"),
            (je = Se.current) == null ||
              je.style.setProperty("--swipe-amount-y", "0px");
        }
        ee(!1), pt(!1), et(null);
      },
      onPointerMove: (gt) => {
        var Qt, me, Ce;
        if (
          !oa.current ||
          !En ||
          ((Qt = window.getSelection()) == null
            ? void 0
            : Qt.toString().length) > 0
        )
          return;
        const Xt = gt.clientY - oa.current.y,
          De = gt.clientX - oa.current.x;
        var tr;
        const ze = (tr = e.swipeDirections) != null ? tr : qO(bt);
        !St &&
          (Math.abs(De) > 1 || Math.abs(Xt) > 1) &&
          et(Math.abs(De) > Math.abs(Xt) ? "x" : "y");
        let je = { x: 0, y: 0 };
        const Lr = (pn) => 1 / (1.5 + Math.abs(pn) / 20);
        if (St === "y") {
          if (ze.includes("top") || ze.includes("bottom"))
            if (
              (ze.includes("top") && Xt < 0) ||
              (ze.includes("bottom") && Xt > 0)
            )
              je.y = Xt;
            else {
              const pn = Xt * Lr(Xt);
              je.y = Math.abs(pn) < Math.abs(Xt) ? pn : Xt;
            }
        } else if (St === "x" && (ze.includes("left") || ze.includes("right")))
          if (
            (ze.includes("left") && De < 0) ||
            (ze.includes("right") && De > 0)
          )
            je.x = De;
          else {
            const pn = De * Lr(De);
            je.x = Math.abs(pn) < Math.abs(De) ? pn : De;
          }
        (Math.abs(je.x) > 0 || Math.abs(je.y) > 0) && ee(!0),
          (me = Se.current) == null ||
            me.style.setProperty("--swipe-amount-x", `${je.x}px`),
          (Ce = Se.current) == null ||
            Ce.style.setProperty("--swipe-amount-y", `${je.y}px`);
      },
    },
    en && !p.jsx && de !== "loading"
      ? nt.createElement(
          "button",
          {
            "aria-label": st,
            "data-disabled": Bs,
            "data-close-button": !0,
            onClick:
              Bs || !En
                ? () => {}
                : () => {
                    _n(), p.onDismiss == null || p.onDismiss.call(p, p);
                  },
            className: Mn(
              L?.closeButton,
              p == null || (o = p.classNames) == null ? void 0 : o.closeButton
            ),
          },
          (Rn = Z?.close) != null ? Rn : _O
        )
      : null,
    (de || p.icon || p.promise) &&
      p.icon !== null &&
      (Z?.[de] !== null || p.icon)
      ? nt.createElement(
          "div",
          {
            "data-icon": "",
            className: Mn(
              L?.icon,
              p == null || (l = p.classNames) == null ? void 0 : l.icon
            ),
          },
          p.promise || (p.type === "loading" && !p.icon)
            ? p.icon || zr()
            : null,
          p.type !== "loading" ? jr : null
        )
      : null,
    nt.createElement(
      "div",
      {
        "data-content": "",
        className: Mn(
          L?.content,
          p == null || (c = p.classNames) == null ? void 0 : c.content
        ),
      },
      nt.createElement(
        "div",
        {
          "data-title": "",
          className: Mn(
            L?.title,
            p == null || (d = p.classNames) == null ? void 0 : d.title
          ),
        },
        p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title
      ),
      p.description
        ? nt.createElement(
            "div",
            {
              "data-description": "",
              className: Mn(
                at,
                Bt,
                L?.description,
                p == null || (h = p.classNames) == null ? void 0 : h.description
              ),
            },
            typeof p.description == "function" ? p.description() : p.description
          )
        : null
    ),
    nt.isValidElement(p.cancel)
      ? p.cancel
      : p.cancel && xl(p.cancel)
      ? nt.createElement(
          "button",
          {
            "data-button": !0,
            "data-cancel": !0,
            style: p.cancelButtonStyle || U,
            onClick: (gt) => {
              xl(p.cancel) &&
                En &&
                (p.cancel.onClick == null ||
                  p.cancel.onClick.call(p.cancel, gt),
                _n());
            },
            className: Mn(
              L?.cancelButton,
              p == null || (g = p.classNames) == null ? void 0 : g.cancelButton
            ),
          },
          p.cancel.label
        )
      : null,
    nt.isValidElement(p.action)
      ? p.action
      : p.action && xl(p.action)
      ? nt.createElement(
          "button",
          {
            "data-button": !0,
            "data-action": !0,
            style: p.actionButtonStyle || $,
            onClick: (gt) => {
              xl(p.action) &&
                (p.action.onClick == null ||
                  p.action.onClick.call(p.action, gt),
                !gt.defaultPrevented && _n());
            },
            className: Mn(
              L?.actionButton,
              p == null || (m = p.classNames) == null ? void 0 : m.actionButton
            ),
          },
          p.action.label
        )
      : null
  );
};
function Jy() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function YO(e, a) {
  const s = {};
  return (
    [e, a].forEach((o, l) => {
      const c = l === 1,
        d = c ? "--mobile-offset" : "--offset",
        h = c ? LO : jO;
      function g(m) {
        ["top", "right", "bottom", "left"].forEach((v) => {
          s[`${d}-${v}`] = typeof m == "number" ? `${m}px` : m;
        });
      }
      typeof o == "number" || typeof o == "string"
        ? g(o)
        : typeof o == "object"
        ? ["top", "right", "bottom", "left"].forEach((m) => {
            o[m] === void 0
              ? (s[`${d}-${m}`] = h)
              : (s[`${d}-${m}`] = typeof o[m] == "number" ? `${o[m]}px` : o[m]);
          })
        : g(h);
    }),
    s
  );
}
const VO = nt.forwardRef(function (a, s) {
    const {
        id: o,
        invert: l,
        position: c = "bottom-right",
        hotkey: d = ["altKey", "KeyT"],
        expand: h,
        closeButton: g,
        className: m,
        offset: v,
        mobileOffset: p,
        theme: b = "light",
        richColors: x,
        duration: R,
        style: _,
        visibleToasts: w = zO,
        toastOptions: C,
        dir: k = Jy(),
        gap: q = BO,
        icons: j,
        containerAriaLabel: K = "Notifications",
      } = a,
      [J, Y] = nt.useState([]),
      U = nt.useMemo(
        () =>
          o
            ? J.filter((F) => F.toasterId === o)
            : J.filter((F) => !F.toasterId),
        [J, o]
      ),
      $ = nt.useMemo(
        () =>
          Array.from(
            new Set(
              [c].concat(U.filter((F) => F.position).map((F) => F.position))
            )
          ),
        [U, c]
      ),
      [it, at] = nt.useState([]),
      [mt, bt] = nt.useState(!1),
      [jt, _t] = nt.useState(!1),
      [L, Z] = nt.useState(
        b !== "system"
          ? b
          : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      ),
      st = nt.useRef(null),
      St = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      et = nt.useRef(null),
      N = nt.useRef(!1),
      Q = nt.useCallback((F) => {
        Y((tt) => {
          var W;
          return (
            ((W = tt.find((rt) => rt.id === F.id)) != null && W.delete) ||
              Ye.dismiss(F.id),
            tt.filter(({ id: rt }) => rt !== F.id)
          );
        });
      }, []);
    return (
      nt.useEffect(
        () =>
          Ye.subscribe((F) => {
            if (F.dismiss) {
              requestAnimationFrame(() => {
                Y((tt) =>
                  tt.map((W) => (W.id === F.id ? { ...W, delete: !0 } : W))
                );
              });
              return;
            }
            setTimeout(() => {
              o0.flushSync(() => {
                Y((tt) => {
                  const W = tt.findIndex((rt) => rt.id === F.id);
                  return W !== -1
                    ? [
                        ...tt.slice(0, W),
                        { ...tt[W], ...F },
                        ...tt.slice(W + 1),
                      ]
                    : [F, ...tt];
                });
              });
            });
          }),
        [J]
      ),
      nt.useEffect(() => {
        if (b !== "system") {
          Z(b);
          return;
        }
        if (
          (b === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? Z("dark")
              : Z("light")),
          typeof window > "u")
        )
          return;
        const F = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          F.addEventListener("change", ({ matches: tt }) => {
            Z(tt ? "dark" : "light");
          });
        } catch {
          F.addListener(({ matches: W }) => {
            try {
              Z(W ? "dark" : "light");
            } catch (rt) {
              console.error(rt);
            }
          });
        }
      }, [b]),
      nt.useEffect(() => {
        J.length <= 1 && bt(!1);
      }, [J]),
      nt.useEffect(() => {
        const F = (tt) => {
          var W;
          if (d.every((pt) => tt[pt] || tt.code === pt)) {
            var yt;
            bt(!0), (yt = st.current) == null || yt.focus();
          }
          tt.code === "Escape" &&
            (document.activeElement === st.current ||
              ((W = st.current) != null &&
                W.contains(document.activeElement))) &&
            bt(!1);
        };
        return (
          document.addEventListener("keydown", F),
          () => document.removeEventListener("keydown", F)
        );
      }, [d]),
      nt.useEffect(() => {
        if (st.current)
          return () => {
            et.current &&
              (et.current.focus({ preventScroll: !0 }),
              (et.current = null),
              (N.current = !1));
          };
      }, [st.current]),
      nt.createElement(
        "section",
        {
          ref: s,
          "aria-label": `${K} ${St}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        $.map((F, tt) => {
          var W;
          const [rt, yt] = F.split("-");
          return U.length
            ? nt.createElement(
                "ol",
                {
                  key: F,
                  dir: k === "auto" ? Jy() : k,
                  tabIndex: -1,
                  ref: st,
                  className: m,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": L,
                  "data-y-position": rt,
                  "data-x-position": yt,
                  style: {
                    "--front-toast-height": `${
                      ((W = it[0]) == null ? void 0 : W.height) || 0
                    }px`,
                    "--width": `${UO}px`,
                    "--gap": `${q}px`,
                    ..._,
                    ...YO(v, p),
                  },
                  onBlur: (pt) => {
                    N.current &&
                      !pt.currentTarget.contains(pt.relatedTarget) &&
                      ((N.current = !1),
                      et.current &&
                        (et.current.focus({ preventScroll: !0 }),
                        (et.current = null)));
                  },
                  onFocus: (pt) => {
                    (pt.target instanceof HTMLElement &&
                      pt.target.dataset.dismissible === "false") ||
                      N.current ||
                      ((N.current = !0), (et.current = pt.relatedTarget));
                  },
                  onMouseEnter: () => bt(!0),
                  onMouseMove: () => bt(!0),
                  onMouseLeave: () => {
                    jt || bt(!1);
                  },
                  onDragEnd: () => bt(!1),
                  onPointerDown: (pt) => {
                    (pt.target instanceof HTMLElement &&
                      pt.target.dataset.dismissible === "false") ||
                      _t(!0);
                  },
                  onPointerUp: () => _t(!1),
                },
                U.filter(
                  (pt) => (!pt.position && tt === 0) || pt.position === F
                ).map((pt, dt) => {
                  var be, ie;
                  return nt.createElement(PO, {
                    key: pt.id,
                    icons: j,
                    index: dt,
                    toast: pt,
                    defaultRichColors: x,
                    duration: (be = C?.duration) != null ? be : R,
                    className: C?.className,
                    descriptionClassName: C?.descriptionClassName,
                    invert: l,
                    visibleToasts: w,
                    closeButton: (ie = C?.closeButton) != null ? ie : g,
                    interacting: jt,
                    position: F,
                    style: C?.style,
                    unstyled: C?.unstyled,
                    classNames: C?.classNames,
                    cancelButtonStyle: C?.cancelButtonStyle,
                    actionButtonStyle: C?.actionButtonStyle,
                    closeButtonAriaLabel: C?.closeButtonAriaLabel,
                    removeToast: Q,
                    toasts: U.filter((ee) => ee.position == pt.position),
                    heights: it.filter((ee) => ee.position == pt.position),
                    setHeights: at,
                    expandByDefault: h,
                    gap: q,
                    expanded: mt,
                    swipeDirections: a.swipeDirections,
                  });
                })
              )
            : null;
        })
      )
    );
  }),
  GO = ({ ...e }) =>
    O.jsx(VO, {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
function QO() {
  return O.jsx("div", {
    className:
      "flex min-h-screen items-center justify-center bg-background px-4",
    children: O.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        O.jsx("h1", {
          className: "text-display text-[12rem] leading-none text-ember",
          children: "404",
        }),
        O.jsx("h2", {
          className: "mt-4 text-xl uppercase tracking-widest",
          children: "Off the map",
        }),
        O.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "This page doesn't exist. Let's get you back on track.",
        }),
        O.jsx("div", {
          className: "mt-6",
          children: O.jsx(Sn, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-sm gradient-ember text-ember-foreground px-6 py-3 font-display tracking-widest uppercase text-sm",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function IO({ error: e, reset: a }) {
  console.error(e);
  const s = ve();
  return (
    A.useEffect(() => {
      F2(e, { boundary: "tanstack_root_error_component" });
    }, [e]),
    O.jsx("div", {
      className:
        "flex min-h-screen items-center justify-center bg-background px-4",
      children: O.jsxs("div", {
        className: "max-w-md text-center",
        children: [
          O.jsx("h1", {
            className: "text-display text-3xl uppercase tracking-widest",
            children: "Something broke",
          }),
          O.jsx("p", {
            className: "mt-2 text-sm text-muted-foreground",
            children: "Try again or head home.",
          }),
          O.jsxs("div", {
            className: "mt-6 flex flex-wrap justify-center gap-2",
            children: [
              O.jsx("button", {
                onClick: () => {
                  s.invalidate(), a();
                },
                className:
                  "rounded-sm gradient-ember text-ember-foreground px-6 py-3 font-display tracking-widest uppercase text-sm",
                children: "Try again",
              }),
              O.jsx("a", {
                href: "/",
                className:
                  "rounded-sm border border-border px-6 py-3 font-display tracking-widest uppercase text-sm hover:bg-secondary",
                children: "Go home",
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const Dr = GR()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SportsLuxuryIndia — Luxury, Sport & Autographed" },
      {
        name: "description",
        content:
          "Curated luxury objects, elite sports gear, and authentic autographed memorabilia. Athletic-luxe, built for India.",
      },
      { name: "author", content: "SportsLuxuryIndia" },
      { property: "og:site_name", content: "SportsLuxuryIndia" },
      {
        property: "og:title",
        content: "SportsLuxuryIndia — Luxury, Sport & Autographed",
      },
      {
        property: "og:description",
        content:
          "Curated luxury objects, elite sports gear, and authentic autographed memorabilia. Athletic-luxe, built for India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "SportsLuxuryIndia — Luxury, Sport & Autographed",
      },
      {
        name: "twitter:description",
        content:
          "Curated luxury objects, elite sports gear, and authentic autographed memorabilia. Athletic-luxe, built for India.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/57f214df-f1d1-4b7c-bb3f-04b5cd7b9254/id-preview-c28328ea--c09cb4a7-bc9b-455a-943b-253834c56438.lovable.app-1781523440059.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/57f214df-f1d1-4b7c-bb3f-04b5cd7b9254/id-preview-c28328ea--c09cb4a7-bc9b-455a-943b-253834c56438.lovable.app-1781523440059.png",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: I2 },
    ],
  }),
  shellComponent: FO,
  component: KO,
  notFoundComponent: QO,
  errorComponent: IO,
});
function FO({ children: e }) {
  return O.jsxs("html", {
    lang: "en",
    children: [
      O.jsx("head", { children: O.jsx(d2, {}) }),
      O.jsxs("body", { children: [e, O.jsx(h2, {})] }),
    ],
  });
}
function XO() {
  return O.jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [
      O.jsx(mO, {}),
      O.jsx("main", { className: "flex-1", children: O.jsx(c0, {}) }),
      O.jsx(pO, {}),
      O.jsx(GO, { position: "top-center", theme: "dark" }),
    ],
  });
}
function KO() {
  const { queryClient: e } = Dr.useRouteContext();
  return O.jsx(Q2, { client: e, children: O.jsx(XO, {}) });
}
const ZO = "modulepreload",
  JO = function (e) {
    return "/" + e;
  },
  $y = {},
  Ls = function (a, s, o) {
    let l = Promise.resolve();
    if (s && s.length > 0) {
      let g = function (m) {
        return Promise.all(
          m.map((v) =>
            Promise.resolve(v).then(
              (p) => ({ status: "fulfilled", value: p }),
              (p) => ({ status: "rejected", reason: p })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const d = document.querySelector("meta[property=csp-nonce]"),
        h = d?.nonce || d?.getAttribute("nonce");
      l = g(
        s.map((m) => {
          if (((m = JO(m)), m in $y)) return;
          $y[m] = !0;
          const v = m.endsWith(".css"),
            p = v ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${p}`)) return;
          const b = document.createElement("link");
          if (
            ((b.rel = v ? "stylesheet" : ZO),
            v || (b.as = "script"),
            (b.crossOrigin = ""),
            (b.href = m),
            h && b.setAttribute("nonce", h),
            document.head.appendChild(b),
            v)
          )
            return new Promise((x, R) => {
              b.addEventListener("load", x),
                b.addEventListener("error", () =>
                  R(new Error(`Unable to preload CSS for ${m}`))
                );
            });
        })
      );
    }
    function c(d) {
      const h = new Event("vite:preloadError", { cancelable: !0 });
      if (((h.payload = d), window.dispatchEvent(h), !h.defaultPrevented))
        throw d;
    }
    return l.then((d) => {
      for (const h of d || []) h.status === "rejected" && c(h.reason);
      return a().catch(c);
    });
  },
  $O = "2025-07",
  WO = "elevate-ace-net08.myshopify.com",
  tM = `https://${WO}/api/${$O}/graphql.json`,
  eM = "5def745bdcdab22d03e738b724ace1e3";
async function Tb(e, a = {}) {
  const s = await fetch(tM, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": eM,
    },
    body: JSON.stringify({ query: e, variables: a }),
  });
  if (s.status === 402)
    return (
      DO.error("Shopify: Payment required", {
        description:
          "Your store needs an active Shopify billing plan. Visit https://admin.shopify.com to upgrade.",
      }),
      null
    );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const o = await s.json();
  if (o.errors)
    throw new Error(`Shopify: ${o.errors.map((l) => l.message).join(", ")}`);
  return o;
}
const Cb = `
  id title description handle productType tags
  priceRange { minVariantPrice { amount currencyCode } }
  images(first: 5) { edges { node { url altText } } }
  variants(first: 20) {
    edges { node {
      id title
      price { amount currencyCode }
      availableForSale
      selectedOptions { name value }
      image { url altText }
    } }
  }
  options { name values }
`,
  nM = `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges { node { ${Cb} } }
    }
  }
`,
  aM = `
  query GetProduct($handle: String!) {
    product(handle: $handle) { ${Cb} }
  }
`;
async function rM(e = 24, a) {
  return (await Tb(nM, { first: e, query: a }))?.data?.products?.edges ?? [];
}
async function sM(e) {
  return (await Tb(aM, { handle: e }))?.data?.product ?? null;
}
const Ab = (e, a = 24) => ({
    queryKey: ["products", { query: e, first: a }],
    queryFn: () => rM(a, e),
    staleTime: 6e4,
  }),
  Ob = (e) => ({
    queryKey: ["product", e],
    queryFn: () => sM(e),
    staleTime: 6e4,
  }),
  iM = () =>
    Ls(() => import("./shop-QjpV4GZS.js"), __vite__mapDeps([0, 1, 2, 3])),
  oM = zs("/shop")({
    head: () => ({
      meta: [
        { title: "Shop — SportsLuxuryIndia" },
        {
          name: "description",
          content:
            "Browse the full SportsLuxuryIndia edit — luxury, sport, and autographed memorabilia, side by side.",
        },
        { property: "og:title", content: "Shop — SportsLuxuryIndia" },
        {
          property: "og:description",
          content: "Browse the full SportsLuxuryIndia edit.",
        },
        { property: "og:url", content: "/shop" },
      ],
      links: [{ rel: "canonical", href: "/shop" }],
    }),
    loader: ({ context: e }) => e.queryClient.ensureQueryData(Ab(void 0, 48)),
    component: js(iM, "component"),
  }),
  lM = () => Ls(() => import("./contact-B7Yo6_h_.js"), []),
  uM = zs("/contact")({
    head: () => ({
      meta: [
        { title: "Contact — Elev8" },
        {
          name: "description",
          content:
            "Get in touch with the Elev8 team — concierge, support, and partnerships.",
        },
        { property: "og:title", content: "Contact — Elev8" },
        {
          property: "og:description",
          content: "Get in touch with the Elev8 team.",
        },
        { property: "og:url", content: "/contact" },
      ],
      links: [{ rel: "canonical", href: "/contact" }],
    }),
    component: js(lM, "component"),
  }),
  cM = () => Ls(() => import("./about-BxyZOLax.js"), []),
  fM = zs("/about")({
    head: () => ({
      meta: [
        { title: "About — Elev8" },
        {
          name: "description",
          content:
            "Elev8 is a curated marketplace where luxury heritage meets athletic performance.",
        },
        { property: "og:title", content: "About — Elev8" },
        {
          property: "og:description",
          content: "Where luxury heritage meets athletic performance.",
        },
        { property: "og:url", content: "/about" },
      ],
      links: [{ rel: "canonical", href: "/about" }],
    }),
    component: js(cM, "component"),
  }),
  dM = () =>
    Ls(() => import("./index-BUQHG6fv.js"), __vite__mapDeps([4, 1, 2])),
  hM = zs("/")({
    head: () => ({
      meta: [
        { title: "SportsLuxuryIndia — Luxury, Sport & Autographed" },
        {
          name: "description",
          content:
            "Curated luxury objects, elite sports gear, and authentic autographed memorabilia. A bold athletic-luxe edit, built for the way you move.",
        },
        {
          property: "og:title",
          content: "SportsLuxuryIndia — Luxury, Sport & Autographed",
        },
        {
          property: "og:description",
          content:
            "Curated luxury, sport, and authentic autographed memorabilia.",
        },
        { property: "og:url", content: "/" },
      ],
      links: [{ rel: "canonical", href: "/" }],
    }),
    loader: ({ context: e }) => e.queryClient.ensureQueryData(Ab(void 0, 8)),
    component: js(dM, "component"),
  }),
  mM = () =>
    Ls(
      () => import("./product._handle-TcfjP5TL.js"),
      __vite__mapDeps([5, 1, 3])
    ),
  pM = zs("/product/$handle")({
    loader: async ({ context: e, params: a }) => {
      const s = await e.queryClient.ensureQueryData(Ob(a.handle));
      if (!s) throw Pf();
      return s;
    },
    head: ({ loaderData: e }) => {
      const a = e,
        s = a?.images?.edges?.[0]?.node?.url,
        o = a
          ? `${a.title} — SportsLuxuryIndia`
          : "Product — SportsLuxuryIndia",
        l = a?.description?.slice(0, 160) ?? "SportsLuxuryIndia product";
      return {
        meta: [
          { title: o },
          { name: "description", content: l },
          { property: "og:title", content: o },
          { property: "og:description", content: l },
          { property: "og:type", content: "product" },
          ...(s
            ? [
                { property: "og:image", content: s },
                { name: "twitter:image", content: s },
              ]
            : []),
        ],
        links: a ? [{ rel: "canonical", href: `/product/${a.handle}` }] : [],
      };
    },
    component: js(mM, "component"),
  });
function Wy(e) {
  return e
    .toLowerCase()
    .replace(/[\/\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
const gM = () =>
    Ls(
      () => import("./product._handle._variantHandle-B3uayXyA.js"),
      __vite__mapDeps([6, 1, 3])
    ),
  yM = zs("/product/$handle/$variantHandle")({
    loader: async ({ context: e, params: a }) => {
      const s = await e.queryClient.ensureQueryData(Ob(a.handle));
      if (
        !s ||
        !s.variants.edges.find((l) => Wy(l.node.title) === a.variantHandle)
          ?.node
      )
        throw Pf();
      return s;
    },
    head: ({ loaderData: e, params: a }) => {
      const s = e;
      if (!s) return {};
      const o = s.variants.edges.find(
          (h) => Wy(h.node.title) === a?.variantHandle
        )?.node,
        l = o?.image?.url ?? s.images?.edges?.[0]?.node?.url,
        c = `${s.title} — ${o?.title ?? ""} — SportsLuxuryIndia`,
        d = s.description?.slice(0, 160) ?? "SportsLuxuryIndia product";
      return {
        meta: [
          { title: c },
          { name: "description", content: d },
          { property: "og:title", content: c },
          { property: "og:description", content: d },
          { property: "og:type", content: "product" },
          ...(l
            ? [
                { property: "og:image", content: l },
                { name: "twitter:image", content: l },
              ]
            : []),
        ],
        links: [
          {
            rel: "canonical",
            href: `/product/${s.handle}/${a?.variantHandle}`,
          },
        ],
      };
    },
    component: js(gM, "component"),
  }),
  vM = oM.update({ id: "/shop", path: "/shop", getParentRoute: () => Dr }),
  bM = uM.update({
    id: "/contact",
    path: "/contact",
    getParentRoute: () => Dr,
  }),
  SM = fM.update({ id: "/about", path: "/about", getParentRoute: () => Dr }),
  xM = hM.update({ id: "/", path: "/", getParentRoute: () => Dr }),
  Mb = pM.update({
    id: "/product/$handle",
    path: "/product/$handle",
    getParentRoute: () => Dr,
  }),
  wM = yM.update({
    id: "/$variantHandle",
    path: "/$variantHandle",
    getParentRoute: () => Mb,
  }),
  EM = { ProductHandleVariantHandleRoute: wM },
  _M = Mb._addFileChildren(EM),
  RM = {
    IndexRoute: xM,
    AboutRoute: SM,
    ContactRoute: bM,
    ShopRoute: vM,
    ProductHandleRoute: _M,
  },
  TM = Dr._addFileChildren(RM),
  CM = () => {
    const e = new G2();
    return r2({
      routeTree: TM,
      context: { queryClient: e },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
  };
async function AM() {
  const e = await CM();
  let a;
  if (py) {
    const s = await py.getOptions();
    (s.serializationAdapters = s.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = s),
      (a = s.serializationAdapters),
      (e.options.defaultSsr = s.defaultSsr);
  } else
    (a = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: a });
  return (
    a.push(uR),
    e.options.serializationAdapters &&
      a.push(...e.options.serializationAdapters),
    e.update({ basepath: "", serializationAdapters: a }),
    e.stores.matchesId.get().length || (await fR(e)),
    e
  );
}
async function OM() {
  const e = await AM();
  return window.$_TSR?.h(), e;
}
var Hf;
function MM() {
  return (
    Hf || (Hf = OM()),
    O.jsx(pR, { promise: Hf, children: (e) => O.jsx(o2, { router: e }) })
  );
}
A.startTransition(() => {
  J1.hydrateRoot(document, O.jsx(A.StrictMode, { children: O.jsx(MM, {}) }));
});
export {
  BM as A,
  Rs as B,
  Sn as L,
  iT as P,
  pM as R,
  Ry as S,
  cO as a,
  s0 as b,
  Ar as c,
  Ob as d,
  yM as e,
  Xl as f,
  D2 as g,
  R2 as h,
  LM as i,
  O as j,
  Zf as k,
  g0 as l,
  E2 as m,
  bn as n,
  _2 as o,
  Ab as p,
  Kf as q,
  A as r,
  Wy as s,
  DO as t,
  r0 as u,
  h0 as v,
  k2 as w,
  A2 as x,
  Ne as y,
  UM as z,
};
