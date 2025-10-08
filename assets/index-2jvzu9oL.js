function Nx(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i &&
                        Object.defineProperty(
                            e,
                            o,
                            i.get ? i : { enumerable: !0, get: () => r[o] }
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver((o) => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const i = {};
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials"
                ? (i.credentials = "include")
                : o.crossOrigin === "anonymous"
                ? (i.credentials = "omit")
                : (i.credentials = "same-origin"),
            i
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i);
    }
})();
function Xh(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var Qh = { exports: {} },
    Gs = {},
    qh = { exports: {} },
    W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ci = Symbol.for("react.element"),
    Ax = Symbol.for("react.portal"),
    Rx = Symbol.for("react.fragment"),
    jx = Symbol.for("react.strict_mode"),
    Mx = Symbol.for("react.profiler"),
    Lx = Symbol.for("react.provider"),
    Dx = Symbol.for("react.context"),
    Ox = Symbol.for("react.forward_ref"),
    Ix = Symbol.for("react.suspense"),
    _x = Symbol.for("react.memo"),
    Vx = Symbol.for("react.lazy"),
    tf = Symbol.iterator;
function Fx(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (tf && e[tf]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Zh = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Jh = Object.assign,
    em = {};
function Xr(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = em),
        (this.updater = n || Zh);
}
Xr.prototype.isReactComponent = {};
Xr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
Xr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tm() {}
tm.prototype = Xr.prototype;
function Gc(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = em),
        (this.updater = n || Zh);
}
var Yc = (Gc.prototype = new tm());
Yc.constructor = Gc;
Jh(Yc, Xr.prototype);
Yc.isPureReactComponent = !0;
var nf = Array.isArray,
    nm = Object.prototype.hasOwnProperty,
    Xc = { current: null },
    rm = { key: !0, ref: !0, __self: !0, __source: !0 };
function om(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t))
            nm.call(t, r) && !rm.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
        o.children = l;
    }
    if (e && e.defaultProps)
        for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: ci,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Xc.current,
    };
}
function zx(e, t) {
    return {
        $$typeof: ci,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Qc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ci;
}
function Bx(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var rf = /\/+/g;
function ja(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? Bx("" + e.key)
        : t.toString(36);
}
function Ki(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (i) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case ci:
                    case Ax:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (o = o(s)),
            (e = r === "" ? "." + ja(s, 0) : r),
            nf(o)
                ? ((n = ""),
                  e != null && (n = e.replace(rf, "$&/") + "/"),
                  Ki(o, t, n, "", function (c) {
                      return c;
                  }))
                : o != null &&
                  (Qc(o) &&
                      (o = zx(
                          o,
                          n +
                              (!o.key || (s && s.key === o.key)
                                  ? ""
                                  : ("" + o.key).replace(rf, "$&/") + "/") +
                              e
                      )),
                  t.push(o)),
            1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), nf(e)))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + ja(i, a);
            s += Ki(i, t, n, l, o);
        }
    else if (((l = Fx(e)), typeof l == "function"))
        for (e = l.call(e), a = 0; !(i = e.next()).done; )
            (i = i.value), (l = r + ja(i, a++)), (s += Ki(i, t, n, l, o));
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return s;
}
function Ti(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        Ki(e, r, "", "", function (i) {
            return t.call(n, i, o++);
        }),
        r
    );
}
function $x(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var $e = { current: null },
    Gi = { transition: null },
    Ux = {
        ReactCurrentDispatcher: $e,
        ReactCurrentBatchConfig: Gi,
        ReactCurrentOwner: Xc,
    };
function im() {
    throw Error("act(...) is not supported in production builds of React.");
}
W.Children = {
    map: Ti,
    forEach: function (e, t, n) {
        Ti(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Ti(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Ti(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Qc(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
W.Component = Xr;
W.Fragment = Rx;
W.Profiler = Mx;
W.PureComponent = Gc;
W.StrictMode = jx;
W.Suspense = Ix;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ux;
W.act = im;
W.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Jh({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (s = Xc.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (l in t)
            nm.call(t, l) &&
                !rm.hasOwnProperty(l) &&
                (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
        r.children = a;
    }
    return { $$typeof: ci, type: e.type, key: o, ref: i, props: r, _owner: s };
};
W.createContext = function (e) {
    return (
        (e = {
            $$typeof: Dx,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Lx, _context: e }),
        (e.Consumer = e)
    );
};
W.createElement = om;
W.createFactory = function (e) {
    var t = om.bind(null, e);
    return (t.type = e), t;
};
W.createRef = function () {
    return { current: null };
};
W.forwardRef = function (e) {
    return { $$typeof: Ox, render: e };
};
W.isValidElement = Qc;
W.lazy = function (e) {
    return { $$typeof: Vx, _payload: { _status: -1, _result: e }, _init: $x };
};
W.memo = function (e, t) {
    return { $$typeof: _x, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
    var t = Gi.transition;
    Gi.transition = {};
    try {
        e();
    } finally {
        Gi.transition = t;
    }
};
W.unstable_act = im;
W.useCallback = function (e, t) {
    return $e.current.useCallback(e, t);
};
W.useContext = function (e) {
    return $e.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
    return $e.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
    return $e.current.useEffect(e, t);
};
W.useId = function () {
    return $e.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
    return $e.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
    return $e.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
    return $e.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
    return $e.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
    return $e.current.useReducer(e, t, n);
};
W.useRef = function (e) {
    return $e.current.useRef(e);
};
W.useState = function (e) {
    return $e.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
    return $e.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
    return $e.current.useTransition();
};
W.version = "18.3.1";
qh.exports = W;
var S = qh.exports;
const un = Xh(S),
    Hx = Nx({ __proto__: null, default: un }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wx = S,
    Kx = Symbol.for("react.element"),
    Gx = Symbol.for("react.fragment"),
    Yx = Object.prototype.hasOwnProperty,
    Xx =
        Wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Qx = { key: !0, ref: !0, __self: !0, __source: !0 };
function sm(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t) Yx.call(t, r) && !Qx.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Kx,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Xx.current,
    };
}
Gs.Fragment = Gx;
Gs.jsx = sm;
Gs.jsxs = sm;
Qh.exports = Gs;
var m = Qh.exports,
    am = { exports: {} },
    ot = {},
    lm = { exports: {} },
    cm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(k, M) {
        var O = k.length;
        k.push(M);
        e: for (; 0 < O; ) {
            var z = (O - 1) >>> 1,
                K = k[z];
            if (0 < o(K, M)) (k[z] = M), (k[O] = K), (O = z);
            else break e;
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0];
    }
    function r(k) {
        if (k.length === 0) return null;
        var M = k[0],
            O = k.pop();
        if (O !== M) {
            k[0] = O;
            e: for (var z = 0, K = k.length, fe = K >>> 1; z < fe; ) {
                var ce = 2 * (z + 1) - 1,
                    yt = k[ce],
                    Ve = ce + 1,
                    pe = k[Ve];
                if (0 > o(yt, O))
                    Ve < K && 0 > o(pe, yt)
                        ? ((k[z] = pe), (k[Ve] = O), (z = Ve))
                        : ((k[z] = yt), (k[ce] = O), (z = ce));
                else if (Ve < K && 0 > o(pe, O))
                    (k[z] = pe), (k[Ve] = O), (z = Ve);
                else break e;
            }
        }
        return M;
    }
    function o(k, M) {
        var O = k.sortIndex - M.sortIndex;
        return O !== 0 ? O : k.id - M.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function () {
            return s.now() - a;
        };
    }
    var l = [],
        c = [],
        u = 1,
        d = null,
        f = 3,
        y = !1,
        x = !1,
        g = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(k) {
        for (var M = n(c); M !== null; ) {
            if (M.callback === null) r(c);
            else if (M.startTime <= k)
                r(c), (M.sortIndex = M.expirationTime), t(l, M);
            else break;
            M = n(c);
        }
    }
    function T(k) {
        if (((g = !1), v(k), !x))
            if (n(l) !== null) (x = !0), F(C);
            else {
                var M = n(c);
                M !== null && _(T, M.startTime - k);
            }
    }
    function C(k, M) {
        (x = !1), g && ((g = !1), p(E), (E = -1)), (y = !0);
        var O = f;
        try {
            for (
                v(M), d = n(l);
                d !== null && (!(d.expirationTime > M) || (k && !L()));

            ) {
                var z = d.callback;
                if (typeof z == "function") {
                    (d.callback = null), (f = d.priorityLevel);
                    var K = z(d.expirationTime <= M);
                    (M = e.unstable_now()),
                        typeof K == "function"
                            ? (d.callback = K)
                            : d === n(l) && r(l),
                        v(M);
                } else r(l);
                d = n(l);
            }
            if (d !== null) var fe = !0;
            else {
                var ce = n(c);
                ce !== null && _(T, ce.startTime - M), (fe = !1);
            }
            return fe;
        } finally {
            (d = null), (f = O), (y = !1);
        }
    }
    var b = !1,
        P = null,
        E = -1,
        A = 5,
        N = -1;
    function L() {
        return !(e.unstable_now() - N < A);
    }
    function D() {
        if (P !== null) {
            var k = e.unstable_now();
            N = k;
            var M = !0;
            try {
                M = P(!0, k);
            } finally {
                M ? U() : ((b = !1), (P = null));
            }
        } else b = !1;
    }
    var U;
    if (typeof h == "function")
        U = function () {
            h(D);
        };
    else if (typeof MessageChannel < "u") {
        var R = new MessageChannel(),
            $ = R.port2;
        (R.port1.onmessage = D),
            (U = function () {
                $.postMessage(null);
            });
    } else
        U = function () {
            w(D, 0);
        };
    function F(k) {
        (P = k), b || ((b = !0), U());
    }
    function _(k, M) {
        E = w(function () {
            k(e.unstable_now());
        }, M);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (k) {
            k.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            x || y || ((x = !0), F(C));
        }),
        (e.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (A = 0 < k ? Math.floor(1e3 / k) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return f;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function (k) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var M = 3;
                    break;
                default:
                    M = f;
            }
            var O = f;
            f = M;
            try {
                return k();
            } finally {
                f = O;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (k, M) {
            switch (k) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    k = 3;
            }
            var O = f;
            f = k;
            try {
                return M();
            } finally {
                f = O;
            }
        }),
        (e.unstable_scheduleCallback = function (k, M, O) {
            var z = e.unstable_now();
            switch (
                (typeof O == "object" && O !== null
                    ? ((O = O.delay),
                      (O = typeof O == "number" && 0 < O ? z + O : z))
                    : (O = z),
                k)
            ) {
                case 1:
                    var K = -1;
                    break;
                case 2:
                    K = 250;
                    break;
                case 5:
                    K = 1073741823;
                    break;
                case 4:
                    K = 1e4;
                    break;
                default:
                    K = 5e3;
            }
            return (
                (K = O + K),
                (k = {
                    id: u++,
                    callback: M,
                    priorityLevel: k,
                    startTime: O,
                    expirationTime: K,
                    sortIndex: -1,
                }),
                O > z
                    ? ((k.sortIndex = O),
                      t(c, k),
                      n(l) === null &&
                          k === n(c) &&
                          (g ? (p(E), (E = -1)) : (g = !0), _(T, O - z)))
                    : ((k.sortIndex = K), t(l, k), x || y || ((x = !0), F(C))),
                k
            );
        }),
        (e.unstable_shouldYield = L),
        (e.unstable_wrapCallback = function (k) {
            var M = f;
            return function () {
                var O = f;
                f = M;
                try {
                    return k.apply(this, arguments);
                } finally {
                    f = O;
                }
            };
        });
})(cm);
lm.exports = cm;
var qx = lm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zx = S,
    nt = qx;
function j(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var um = new Set(),
    _o = {};
function sr(e, t) {
    Ir(e, t), Ir(e + "Capture", t);
}
function Ir(e, t) {
    for (_o[e] = t, e = 0; e < t.length; e++) um.add(t[e]);
}
var Zt = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    Pl = Object.prototype.hasOwnProperty,
    Jx =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    of = {},
    sf = {};
function ew(e) {
    return Pl.call(sf, e)
        ? !0
        : Pl.call(of, e)
        ? !1
        : Jx.test(e)
        ? (sf[e] = !0)
        : ((of[e] = !0), !1);
}
function tw(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function nw(e, t, n, r) {
    if (t === null || typeof t > "u" || tw(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Ue(e, t, n, r, o, i, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = s);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        Re[e] = new Ue(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    Re[t] = new Ue(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Re[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    Re[e] = new Ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Re[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Re[e] = new Ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Re[e] = new Ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Re[e] = new Ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Re[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qc = /[\-:]([a-z])/g;
function Zc(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(qc, Zc);
        Re[t] = new Ue(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(qc, Zc);
        Re[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(qc, Zc);
    Re[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Re[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Ue(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    Re[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jc(e, t, n, r) {
    var o = Re.hasOwnProperty(t) ? Re[t] : null;
    (o !== null
        ? o.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (nw(t, n, o, r) && (n = null),
        r || o === null
            ? ew(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
            ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
            : ((t = o.attributeName),
              (r = o.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((o = o.type),
                    (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var sn = Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ci = Symbol.for("react.element"),
    dr = Symbol.for("react.portal"),
    fr = Symbol.for("react.fragment"),
    eu = Symbol.for("react.strict_mode"),
    bl = Symbol.for("react.profiler"),
    dm = Symbol.for("react.provider"),
    fm = Symbol.for("react.context"),
    tu = Symbol.for("react.forward_ref"),
    El = Symbol.for("react.suspense"),
    kl = Symbol.for("react.suspense_list"),
    nu = Symbol.for("react.memo"),
    fn = Symbol.for("react.lazy"),
    pm = Symbol.for("react.offscreen"),
    af = Symbol.iterator;
function oo(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (af && e[af]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var le = Object.assign,
    Ma;
function go(e) {
    if (Ma === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ma = (t && t[1]) || "";
        }
    return (
        `
` +
        Ma +
        e
    );
}
var La = !1;
function Da(e, t) {
    if (!e || La) return "";
    La = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (c) {
                    r = c;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var o = c.stack.split(`
`),
                    i = r.stack.split(`
`),
                    s = o.length - 1,
                    a = i.length - 1;
                1 <= s && 0 <= a && o[s] !== i[a];

            )
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if ((s--, a--, 0 > a || o[s] !== i[a])) {
                                var l =
                                    `
` + o[s].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        l.includes("<anonymous>") &&
                                        (l = l.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    l
                                );
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    } finally {
        (La = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? go(e) : "";
}
function rw(e) {
    switch (e.tag) {
        case 5:
            return go(e.type);
        case 16:
            return go("Lazy");
        case 13:
            return go("Suspense");
        case 19:
            return go("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Da(e.type, !1)), e;
        case 11:
            return (e = Da(e.type.render, !1)), e;
        case 1:
            return (e = Da(e.type, !0)), e;
        default:
            return "";
    }
}
function Nl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case fr:
            return "Fragment";
        case dr:
            return "Portal";
        case bl:
            return "Profiler";
        case eu:
            return "StrictMode";
        case El:
            return "Suspense";
        case kl:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case fm:
                return (e.displayName || "Context") + ".Consumer";
            case dm:
                return (e._context.displayName || "Context") + ".Provider";
            case tu:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case nu:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Nl(e.type) || "Memo"
                );
            case fn:
                (t = e._payload), (e = e._init);
                try {
                    return Nl(e(t));
                } catch {}
        }
    return null;
}
function ow(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Nl(t);
        case 8:
            return t === eu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Nn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function hm(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function iw(e) {
    var t = hm(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var o = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (s) {
                    (r = "" + s), i.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Pi(e) {
    e._valueTracker || (e._valueTracker = iw(e));
}
function mm(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = hm(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function us(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Al(e, t) {
    var n = t.checked;
    return le({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function lf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Nn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function gm(e, t) {
    (t = t.checked), t != null && Jc(e, "checked", t, !1);
}
function Rl(e, t) {
    gm(e, t);
    var n = Nn(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? jl(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && jl(e, t.type, Nn(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function cf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function jl(e, t, n) {
    (t !== "number" || us(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yo = Array.isArray;
function Nr(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Nn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function Ml(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
    return le({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function uf(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(j(92));
            if (yo(n)) {
                if (1 < n.length) throw Error(j(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Nn(n) };
}
function ym(e, t) {
    var n = Nn(t.value),
        r = Nn(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function df(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function vm(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Ll(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? vm(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var bi,
    xm = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                bi = bi || document.createElement("div"),
                    bi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = bi.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Vo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Co = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    sw = ["Webkit", "ms", "Moz", "O"];
Object.keys(Co).forEach(function (e) {
    sw.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Co[t] = Co[e]);
    });
});
function wm(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (Co.hasOwnProperty(e) && Co[e])
        ? ("" + t).trim()
        : t + "px";
}
function Sm(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = wm(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var aw = le(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Dl(e, t) {
    if (t) {
        if (aw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(j(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(j(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(j(62));
    }
}
function Ol(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
var Il = null;
function ru(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var _l = null,
    Ar = null,
    Rr = null;
function ff(e) {
    if ((e = fi(e))) {
        if (typeof _l != "function") throw Error(j(280));
        var t = e.stateNode;
        t && ((t = Zs(t)), _l(e.stateNode, e.type, t));
    }
}
function Tm(e) {
    Ar ? (Rr ? Rr.push(e) : (Rr = [e])) : (Ar = e);
}
function Cm() {
    if (Ar) {
        var e = Ar,
            t = Rr;
        if (((Rr = Ar = null), ff(e), t))
            for (e = 0; e < t.length; e++) ff(t[e]);
    }
}
function Pm(e, t) {
    return e(t);
}
function bm() {}
var Oa = !1;
function Em(e, t, n) {
    if (Oa) return e(t, n);
    Oa = !0;
    try {
        return Pm(e, t, n);
    } finally {
        (Oa = !1), (Ar !== null || Rr !== null) && (bm(), Cm());
    }
}
function Fo(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Zs(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(j(231, t, typeof n));
    return n;
}
var Vl = !1;
if (Zt)
    try {
        var io = {};
        Object.defineProperty(io, "passive", {
            get: function () {
                Vl = !0;
            },
        }),
            window.addEventListener("test", io, io),
            window.removeEventListener("test", io, io);
    } catch {
        Vl = !1;
    }
function lw(e, t, n, r, o, i, s, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c);
    } catch (u) {
        this.onError(u);
    }
}
var Po = !1,
    ds = null,
    fs = !1,
    Fl = null,
    cw = {
        onError: function (e) {
            (Po = !0), (ds = e);
        },
    };
function uw(e, t, n, r, o, i, s, a, l) {
    (Po = !1), (ds = null), lw.apply(cw, arguments);
}
function dw(e, t, n, r, o, i, s, a, l) {
    if ((uw.apply(this, arguments), Po)) {
        if (Po) {
            var c = ds;
            (Po = !1), (ds = null);
        } else throw Error(j(198));
        fs || ((fs = !0), (Fl = c));
    }
}
function ar(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function km(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function pf(e) {
    if (ar(e) !== e) throw Error(j(188));
}
function fw(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = ar(e)), t === null)) throw Error(j(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n) return pf(o), e;
                if (i === r) return pf(o), t;
                i = i.sibling;
            }
            throw Error(j(188));
        }
        if (n.return !== r.return) (n = o), (r = i);
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    (s = !0), (n = o), (r = i);
                    break;
                }
                if (a === r) {
                    (s = !0), (r = o), (n = i);
                    break;
                }
                a = a.sibling;
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                    }
                    if (a === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                    }
                    a = a.sibling;
                }
                if (!s) throw Error(j(189));
            }
        }
        if (n.alternate !== r) throw Error(j(190));
    }
    if (n.tag !== 3) throw Error(j(188));
    return n.stateNode.current === n ? e : t;
}
function Nm(e) {
    return (e = fw(e)), e !== null ? Am(e) : null;
}
function Am(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Am(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Rm = nt.unstable_scheduleCallback,
    hf = nt.unstable_cancelCallback,
    pw = nt.unstable_shouldYield,
    hw = nt.unstable_requestPaint,
    me = nt.unstable_now,
    mw = nt.unstable_getCurrentPriorityLevel,
    ou = nt.unstable_ImmediatePriority,
    jm = nt.unstable_UserBlockingPriority,
    ps = nt.unstable_NormalPriority,
    gw = nt.unstable_LowPriority,
    Mm = nt.unstable_IdlePriority,
    Ys = null,
    Dt = null;
function yw(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
        try {
            Dt.onCommitFiberRoot(
                Ys,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Pt = Math.clz32 ? Math.clz32 : ww,
    vw = Math.log,
    xw = Math.LN2;
function ww(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((vw(e) / xw) | 0)) | 0;
}
var Ei = 64,
    ki = 4194304;
function vo(e) {
    switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function hs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? (r = vo(a)) : ((i &= s), i !== 0 && (r = vo(i)));
    } else (s = n & ~o), s !== 0 ? (r = vo(s)) : i !== 0 && (r = vo(i));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & o) &&
        ((o = r & -r),
        (i = t & -t),
        o >= i || (o === 16 && (i & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Pt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function Sw(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
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
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Tw(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            o = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var s = 31 - Pt(i),
            a = 1 << s,
            l = o[s];
        l === -1
            ? (!(a & n) || a & r) && (o[s] = Sw(a, t))
            : l <= t && (e.expiredLanes |= a),
            (i &= ~a);
    }
}
function zl(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Lm() {
    var e = Ei;
    return (Ei <<= 1), !(Ei & 4194240) && (Ei = 64), e;
}
function Ia(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function ui(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Pt(t)),
        (e[t] = n);
}
function Cw(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Pt(n),
            i = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
}
function iu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Pt(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var X = 0;
function Dm(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Om,
    su,
    Im,
    _m,
    Vm,
    Bl = !1,
    Ni = [],
    vn = null,
    xn = null,
    wn = null,
    zo = new Map(),
    Bo = new Map(),
    hn = [],
    Pw =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function mf(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            vn = null;
            break;
        case "dragenter":
        case "dragleave":
            xn = null;
            break;
        case "mouseover":
        case "mouseout":
            wn = null;
            break;
        case "pointerover":
        case "pointerout":
            zo.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Bo.delete(t.pointerId);
    }
}
function so(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [o],
          }),
          t !== null && ((t = fi(t)), t !== null && su(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          o !== null && t.indexOf(o) === -1 && t.push(o),
          e);
}
function bw(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (vn = so(vn, e, t, n, r, o)), !0;
        case "dragenter":
            return (xn = so(xn, e, t, n, r, o)), !0;
        case "mouseover":
            return (wn = so(wn, e, t, n, r, o)), !0;
        case "pointerover":
            var i = o.pointerId;
            return zo.set(i, so(zo.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (
                (i = o.pointerId),
                Bo.set(i, so(Bo.get(i) || null, e, t, n, r, o)),
                !0
            );
    }
    return !1;
}
function Fm(e) {
    var t = Wn(e.target);
    if (t !== null) {
        var n = ar(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = km(n)), t !== null)) {
                    (e.blockedOn = t),
                        Vm(e.priority, function () {
                            Im(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Yi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = $l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Il = r), n.target.dispatchEvent(r), (Il = null);
        } else return (t = fi(n)), t !== null && su(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function gf(e, t, n) {
    Yi(e) && n.delete(t);
}
function Ew() {
    (Bl = !1),
        vn !== null && Yi(vn) && (vn = null),
        xn !== null && Yi(xn) && (xn = null),
        wn !== null && Yi(wn) && (wn = null),
        zo.forEach(gf),
        Bo.forEach(gf);
}
function ao(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Bl ||
            ((Bl = !0),
            nt.unstable_scheduleCallback(nt.unstable_NormalPriority, Ew)));
}
function $o(e) {
    function t(o) {
        return ao(o, e);
    }
    if (0 < Ni.length) {
        ao(Ni[0], e);
        for (var n = 1; n < Ni.length; n++) {
            var r = Ni[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        vn !== null && ao(vn, e),
            xn !== null && ao(xn, e),
            wn !== null && ao(wn, e),
            zo.forEach(t),
            Bo.forEach(t),
            n = 0;
        n < hn.length;
        n++
    )
        (r = hn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < hn.length && ((n = hn[0]), n.blockedOn === null); )
        Fm(n), n.blockedOn === null && hn.shift();
}
var jr = sn.ReactCurrentBatchConfig,
    ms = !0;
function kw(e, t, n, r) {
    var o = X,
        i = jr.transition;
    jr.transition = null;
    try {
        (X = 1), au(e, t, n, r);
    } finally {
        (X = o), (jr.transition = i);
    }
}
function Nw(e, t, n, r) {
    var o = X,
        i = jr.transition;
    jr.transition = null;
    try {
        (X = 4), au(e, t, n, r);
    } finally {
        (X = o), (jr.transition = i);
    }
}
function au(e, t, n, r) {
    if (ms) {
        var o = $l(e, t, n, r);
        if (o === null) Ka(e, t, r, gs, n), mf(e, r);
        else if (bw(o, e, t, n, r)) r.stopPropagation();
        else if ((mf(e, r), t & 4 && -1 < Pw.indexOf(e))) {
            for (; o !== null; ) {
                var i = fi(o);
                if (
                    (i !== null && Om(i),
                    (i = $l(e, t, n, r)),
                    i === null && Ka(e, t, r, gs, n),
                    i === o)
                )
                    break;
                o = i;
            }
            o !== null && r.stopPropagation();
        } else Ka(e, t, r, null, n);
    }
}
var gs = null;
function $l(e, t, n, r) {
    if (((gs = null), (e = ru(r)), (e = Wn(e)), e !== null))
        if (((t = ar(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = km(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (gs = e), null;
}
function zm(e) {
    switch (e) {
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
            return 1;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (mw()) {
                case ou:
                    return 1;
                case jm:
                    return 4;
                case ps:
                case gw:
                    return 16;
                case Mm:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var gn = null,
    lu = null,
    Xi = null;
function Bm() {
    if (Xi) return Xi;
    var e,
        t = lu,
        n = t.length,
        r,
        o = "value" in gn ? gn.value : gn.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return (Xi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Qi(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Ai() {
    return !0;
}
function yf() {
    return !1;
}
function it(e) {
    function t(n, r, o, i, s) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = s),
            (this.currentTarget = null);
        for (var a in e)
            e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? Ai
                : yf),
            (this.isPropagationStopped = yf),
            this
        );
    }
    return (
        le(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Ai));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Ai));
            },
            persist: function () {},
            isPersistent: Ai,
        }),
        t
    );
}
var Qr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    cu = it(Qr),
    di = le({}, Qr, { view: 0, detail: 0 }),
    Aw = it(di),
    _a,
    Va,
    lo,
    Xs = le({}, di, {
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
        getModifierState: uu,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== lo &&
                      (lo && e.type === "mousemove"
                          ? ((_a = e.screenX - lo.screenX),
                            (Va = e.screenY - lo.screenY))
                          : (Va = _a = 0),
                      (lo = e)),
                  _a);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Va;
        },
    }),
    vf = it(Xs),
    Rw = le({}, Xs, { dataTransfer: 0 }),
    jw = it(Rw),
    Mw = le({}, di, { relatedTarget: 0 }),
    Fa = it(Mw),
    Lw = le({}, Qr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Dw = it(Lw),
    Ow = le({}, Qr, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    Iw = it(Ow),
    _w = le({}, Qr, { data: 0 }),
    xf = it(_w),
    Vw = {
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
    Fw = {
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
    zw = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Bw(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = zw[e])
        ? !!t[e]
        : !1;
}
function uu() {
    return Bw;
}
var $w = le({}, di, {
        key: function (e) {
            if (e.key) {
                var t = Vw[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? Fw[e.keyCode] || "Unidentified"
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
        getModifierState: uu,
        charCode: function (e) {
            return e.type === "keypress" ? Qi(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? Qi(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    Uw = it($w),
    Hw = le({}, Xs, {
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
    wf = it(Hw),
    Ww = le({}, di, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: uu,
    }),
    Kw = it(Ww),
    Gw = le({}, Qr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Yw = it(Gw),
    Xw = le({}, Xs, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Qw = it(Xw),
    qw = [9, 13, 27, 32],
    du = Zt && "CompositionEvent" in window,
    bo = null;
Zt && "documentMode" in document && (bo = document.documentMode);
var Zw = Zt && "TextEvent" in window && !bo,
    $m = Zt && (!du || (bo && 8 < bo && 11 >= bo)),
    Sf = " ",
    Tf = !1;
function Um(e, t) {
    switch (e) {
        case "keyup":
            return qw.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Hm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var pr = !1;
function Jw(e, t) {
    switch (e) {
        case "compositionend":
            return Hm(t);
        case "keypress":
            return t.which !== 32 ? null : ((Tf = !0), Sf);
        case "textInput":
            return (e = t.data), e === Sf && Tf ? null : e;
        default:
            return null;
    }
}
function e1(e, t) {
    if (pr)
        return e === "compositionend" || (!du && Um(e, t))
            ? ((e = Bm()), (Xi = lu = gn = null), (pr = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return $m && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var t1 = {
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
function Cf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!t1[e.type] : t === "textarea";
}
function Wm(e, t, n, r) {
    Tm(r),
        (t = ys(t, "onChange")),
        0 < t.length &&
            ((n = new cu("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Eo = null,
    Uo = null;
function n1(e) {
    ng(e, 0);
}
function Qs(e) {
    var t = gr(e);
    if (mm(t)) return e;
}
function r1(e, t) {
    if (e === "change") return t;
}
var Km = !1;
if (Zt) {
    var za;
    if (Zt) {
        var Ba = "oninput" in document;
        if (!Ba) {
            var Pf = document.createElement("div");
            Pf.setAttribute("oninput", "return;"),
                (Ba = typeof Pf.oninput == "function");
        }
        za = Ba;
    } else za = !1;
    Km = za && (!document.documentMode || 9 < document.documentMode);
}
function bf() {
    Eo && (Eo.detachEvent("onpropertychange", Gm), (Uo = Eo = null));
}
function Gm(e) {
    if (e.propertyName === "value" && Qs(Uo)) {
        var t = [];
        Wm(t, Uo, e, ru(e)), Em(n1, t);
    }
}
function o1(e, t, n) {
    e === "focusin"
        ? (bf(), (Eo = t), (Uo = n), Eo.attachEvent("onpropertychange", Gm))
        : e === "focusout" && bf();
}
function i1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Qs(Uo);
}
function s1(e, t) {
    if (e === "click") return Qs(t);
}
function a1(e, t) {
    if (e === "input" || e === "change") return Qs(t);
}
function l1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : l1;
function Ho(e, t) {
    if (kt(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Pl.call(t, o) || !kt(e[o], t[o])) return !1;
    }
    return !0;
}
function Ef(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function kf(e, t) {
    var n = Ef(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Ef(n);
    }
}
function Ym(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Ym(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function Xm() {
    for (var e = window, t = us(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = us(e.document);
    }
    return t;
}
function fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function c1(e) {
    var t = Xm(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Ym(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && fu(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                (r = r.end === void 0 ? i : Math.min(r.end, o)),
                    !e.extend && i > r && ((o = r), (r = i), (i = o)),
                    (o = kf(n, i));
                var s = kf(n, r);
                o &&
                    s &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== s.node ||
                        e.focusOffset !== s.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(s.node, s.offset))
                        : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var u1 = Zt && "documentMode" in document && 11 >= document.documentMode,
    hr = null,
    Ul = null,
    ko = null,
    Hl = !1;
function Nf(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Hl ||
        hr == null ||
        hr !== us(r) ||
        ((r = hr),
        "selectionStart" in r && fu(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (ko && Ho(ko, r)) ||
            ((ko = r),
            (r = ys(Ul, "onSelect")),
            0 < r.length &&
                ((t = new cu("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = hr))));
}
function Ri(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var mr = {
        animationend: Ri("Animation", "AnimationEnd"),
        animationiteration: Ri("Animation", "AnimationIteration"),
        animationstart: Ri("Animation", "AnimationStart"),
        transitionend: Ri("Transition", "TransitionEnd"),
    },
    $a = {},
    Qm = {};
Zt &&
    ((Qm = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete mr.animationend.animation,
        delete mr.animationiteration.animation,
        delete mr.animationstart.animation),
    "TransitionEvent" in window || delete mr.transitionend.transition);
function qs(e) {
    if ($a[e]) return $a[e];
    if (!mr[e]) return e;
    var t = mr[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Qm) return ($a[e] = t[n]);
    return e;
}
var qm = qs("animationend"),
    Zm = qs("animationiteration"),
    Jm = qs("animationstart"),
    eg = qs("transitionend"),
    tg = new Map(),
    Af =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function On(e, t) {
    tg.set(e, t), sr(t, [e]);
}
for (var Ua = 0; Ua < Af.length; Ua++) {
    var Ha = Af[Ua],
        d1 = Ha.toLowerCase(),
        f1 = Ha[0].toUpperCase() + Ha.slice(1);
    On(d1, "on" + f1);
}
On(qm, "onAnimationEnd");
On(Zm, "onAnimationIteration");
On(Jm, "onAnimationStart");
On("dblclick", "onDoubleClick");
On("focusin", "onFocus");
On("focusout", "onBlur");
On(eg, "onTransitionEnd");
Ir("onMouseEnter", ["mouseout", "mouseover"]);
Ir("onMouseLeave", ["mouseout", "mouseover"]);
Ir("onPointerEnter", ["pointerout", "pointerover"]);
Ir("onPointerLeave", ["pointerout", "pointerover"]);
sr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
sr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
sr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
sr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xo =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    p1 = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(xo)
    );
function Rf(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), dw(r, t, void 0, e), (e.currentTarget = null);
}
function ng(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        c = a.currentTarget;
                    if (((a = a.listener), l !== i && o.isPropagationStopped()))
                        break e;
                    Rf(o, a, c), (i = l);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (
                        ((a = r[s]),
                        (l = a.instance),
                        (c = a.currentTarget),
                        (a = a.listener),
                        l !== i && o.isPropagationStopped())
                    )
                        break e;
                    Rf(o, a, c), (i = l);
                }
        }
    }
    if (fs) throw ((e = Fl), (fs = !1), (Fl = null), e);
}
function ee(e, t) {
    var n = t[Xl];
    n === void 0 && (n = t[Xl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (rg(t, e, 2, !1), n.add(r));
}
function Wa(e, t, n) {
    var r = 0;
    t && (r |= 4), rg(n, e, r, t);
}
var ji = "_reactListening" + Math.random().toString(36).slice(2);
function Wo(e) {
    if (!e[ji]) {
        (e[ji] = !0),
            um.forEach(function (n) {
                n !== "selectionchange" &&
                    (p1.has(n) || Wa(n, !1, e), Wa(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ji] || ((t[ji] = !0), Wa("selectionchange", !1, t));
    }
}
function rg(e, t, n, r) {
    switch (zm(t)) {
        case 1:
            var o = kw;
            break;
        case 4:
            o = Nw;
            break;
        default:
            o = au;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !Vl ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
            ? e.addEventListener(t, n, { passive: o })
            : e.addEventListener(t, n, !1);
}
function Ka(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = s.stateNode.containerInfo),
                            l === o || (l.nodeType === 8 && l.parentNode === o))
                        )
                            return;
                        s = s.return;
                    }
                for (; a !== null; ) {
                    if (((s = Wn(a)), s === null)) return;
                    if (((l = s.tag), l === 5 || l === 6)) {
                        r = i = s;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    Em(function () {
        var c = i,
            u = ru(n),
            d = [];
        e: {
            var f = tg.get(e);
            if (f !== void 0) {
                var y = cu,
                    x = e;
                switch (e) {
                    case "keypress":
                        if (Qi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = Uw;
                        break;
                    case "focusin":
                        (x = "focus"), (y = Fa);
                        break;
                    case "focusout":
                        (x = "blur"), (y = Fa);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Fa;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = vf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = jw;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = Kw;
                        break;
                    case qm:
                    case Zm:
                    case Jm:
                        y = Dw;
                        break;
                    case eg:
                        y = Yw;
                        break;
                    case "scroll":
                        y = Aw;
                        break;
                    case "wheel":
                        y = Qw;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = Iw;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = wf;
                }
                var g = (t & 4) !== 0,
                    w = !g && e === "scroll",
                    p = g ? (f !== null ? f + "Capture" : null) : f;
                g = [];
                for (var h = c, v; h !== null; ) {
                    v = h;
                    var T = v.stateNode;
                    if (
                        (v.tag === 5 &&
                            T !== null &&
                            ((v = T),
                            p !== null &&
                                ((T = Fo(h, p)),
                                T != null && g.push(Ko(h, T, v)))),
                        w)
                    )
                        break;
                    h = h.return;
                }
                0 < g.length &&
                    ((f = new y(f, x, null, n, u)),
                    d.push({ event: f, listeners: g }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((f = e === "mouseover" || e === "pointerover"),
                    (y = e === "mouseout" || e === "pointerout"),
                    f &&
                        n !== Il &&
                        (x = n.relatedTarget || n.fromElement) &&
                        (Wn(x) || x[Jt]))
                )
                    break e;
                if (
                    (y || f) &&
                    ((f =
                        u.window === u
                            ? u
                            : (f = u.ownerDocument)
                            ? f.defaultView || f.parentWindow
                            : window),
                    y
                        ? ((x = n.relatedTarget || n.toElement),
                          (y = c),
                          (x = x ? Wn(x) : null),
                          x !== null &&
                              ((w = ar(x)),
                              x !== w || (x.tag !== 5 && x.tag !== 6)) &&
                              (x = null))
                        : ((y = null), (x = c)),
                    y !== x)
                ) {
                    if (
                        ((g = vf),
                        (T = "onMouseLeave"),
                        (p = "onMouseEnter"),
                        (h = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((g = wf),
                            (T = "onPointerLeave"),
                            (p = "onPointerEnter"),
                            (h = "pointer")),
                        (w = y == null ? f : gr(y)),
                        (v = x == null ? f : gr(x)),
                        (f = new g(T, h + "leave", y, n, u)),
                        (f.target = w),
                        (f.relatedTarget = v),
                        (T = null),
                        Wn(u) === c &&
                            ((g = new g(p, h + "enter", x, n, u)),
                            (g.target = v),
                            (g.relatedTarget = w),
                            (T = g)),
                        (w = T),
                        y && x)
                    )
                        t: {
                            for (g = y, p = x, h = 0, v = g; v; v = ur(v)) h++;
                            for (v = 0, T = p; T; T = ur(T)) v++;
                            for (; 0 < h - v; ) (g = ur(g)), h--;
                            for (; 0 < v - h; ) (p = ur(p)), v--;
                            for (; h--; ) {
                                if (
                                    g === p ||
                                    (p !== null && g === p.alternate)
                                )
                                    break t;
                                (g = ur(g)), (p = ur(p));
                            }
                            g = null;
                        }
                    else g = null;
                    y !== null && jf(d, f, y, g, !1),
                        x !== null && w !== null && jf(d, w, x, g, !0);
                }
            }
            e: {
                if (
                    ((f = c ? gr(c) : window),
                    (y = f.nodeName && f.nodeName.toLowerCase()),
                    y === "select" || (y === "input" && f.type === "file"))
                )
                    var C = r1;
                else if (Cf(f))
                    if (Km) C = a1;
                    else {
                        C = i1;
                        var b = o1;
                    }
                else
                    (y = f.nodeName) &&
                        y.toLowerCase() === "input" &&
                        (f.type === "checkbox" || f.type === "radio") &&
                        (C = s1);
                if (C && (C = C(e, c))) {
                    Wm(d, C, n, u);
                    break e;
                }
                b && b(e, f, c),
                    e === "focusout" &&
                        (b = f._wrapperState) &&
                        b.controlled &&
                        f.type === "number" &&
                        jl(f, "number", f.value);
            }
            switch (((b = c ? gr(c) : window), e)) {
                case "focusin":
                    (Cf(b) || b.contentEditable === "true") &&
                        ((hr = b), (Ul = c), (ko = null));
                    break;
                case "focusout":
                    ko = Ul = hr = null;
                    break;
                case "mousedown":
                    Hl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Hl = !1), Nf(d, n, u);
                    break;
                case "selectionchange":
                    if (u1) break;
                case "keydown":
                case "keyup":
                    Nf(d, n, u);
            }
            var P;
            if (du)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var E = "onCompositionStart";
                            break e;
                        case "compositionend":
                            E = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            E = "onCompositionUpdate";
                            break e;
                    }
                    E = void 0;
                }
            else
                pr
                    ? Um(e, n) && (E = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (E = "onCompositionStart");
            E &&
                ($m &&
                    n.locale !== "ko" &&
                    (pr || E !== "onCompositionStart"
                        ? E === "onCompositionEnd" && pr && (P = Bm())
                        : ((gn = u),
                          (lu = "value" in gn ? gn.value : gn.textContent),
                          (pr = !0))),
                (b = ys(c, E)),
                0 < b.length &&
                    ((E = new xf(E, e, null, n, u)),
                    d.push({ event: E, listeners: b }),
                    P
                        ? (E.data = P)
                        : ((P = Hm(n)), P !== null && (E.data = P)))),
                (P = Zw ? Jw(e, n) : e1(e, n)) &&
                    ((c = ys(c, "onBeforeInput")),
                    0 < c.length &&
                        ((u = new xf(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            u
                        )),
                        d.push({ event: u, listeners: c }),
                        (u.data = P)));
        }
        ng(d, t);
    });
}
function Ko(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function ys(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 &&
            i !== null &&
            ((o = i),
            (i = Fo(e, n)),
            i != null && r.unshift(Ko(e, i, o)),
            (i = Fo(e, t)),
            i != null && r.push(Ko(e, i, o))),
            (e = e.return);
    }
    return r;
}
function ur(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function jf(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            c = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 &&
            c !== null &&
            ((a = c),
            o
                ? ((l = Fo(n, i)), l != null && s.unshift(Ko(n, l, a)))
                : o || ((l = Fo(n, i)), l != null && s.push(Ko(n, l, a)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var h1 = /\r\n?/g,
    m1 = /\u0000|\uFFFD/g;
function Mf(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            h1,
            `
`
        )
        .replace(m1, "");
}
function Mi(e, t, n) {
    if (((t = Mf(t)), Mf(e) !== t && n)) throw Error(j(425));
}
function vs() {}
var Wl = null,
    Kl = null;
function Gl(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Yl = typeof setTimeout == "function" ? setTimeout : void 0,
    g1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Lf = typeof Promise == "function" ? Promise : void 0,
    y1 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Lf < "u"
            ? function (e) {
                  return Lf.resolve(null).then(e).catch(v1);
              }
            : Yl;
function v1(e) {
    setTimeout(function () {
        throw e;
    });
}
function Ga(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), $o(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    $o(t);
}
function Sn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function Df(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var qr = Math.random().toString(36).slice(2),
    Lt = "__reactFiber$" + qr,
    Go = "__reactProps$" + qr,
    Jt = "__reactContainer$" + qr,
    Xl = "__reactEvents$" + qr,
    x1 = "__reactListeners$" + qr,
    w1 = "__reactHandles$" + qr;
function Wn(e) {
    var t = e[Lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Jt] || n[Lt])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = Df(e); e !== null; ) {
                    if ((n = e[Lt])) return n;
                    e = Df(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function fi(e) {
    return (
        (e = e[Lt] || e[Jt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function gr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(j(33));
}
function Zs(e) {
    return e[Go] || null;
}
var Ql = [],
    yr = -1;
function In(e) {
    return { current: e };
}
function te(e) {
    0 > yr || ((e.current = Ql[yr]), (Ql[yr] = null), yr--);
}
function Z(e, t) {
    yr++, (Ql[yr] = e.current), (e.current = t);
}
var An = {},
    _e = In(An),
    Ke = In(!1),
    Zn = An;
function _r(e, t) {
    var n = e.type.contextTypes;
    if (!n) return An;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function Ge(e) {
    return (e = e.childContextTypes), e != null;
}
function xs() {
    te(Ke), te(_e);
}
function Of(e, t, n) {
    if (_e.current !== An) throw Error(j(168));
    Z(_e, t), Z(Ke, n);
}
function og(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(j(108, ow(e) || "Unknown", o));
    return le({}, n, r);
}
function ws(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            An),
        (Zn = _e.current),
        Z(_e, e),
        Z(Ke, Ke.current),
        !0
    );
}
function If(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(j(169));
    n
        ? ((e = og(e, t, Zn)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          te(Ke),
          te(_e),
          Z(_e, e))
        : te(Ke),
        Z(Ke, n);
}
var Wt = null,
    Js = !1,
    Ya = !1;
function ig(e) {
    Wt === null ? (Wt = [e]) : Wt.push(e);
}
function S1(e) {
    (Js = !0), ig(e);
}
function _n() {
    if (!Ya && Wt !== null) {
        Ya = !0;
        var e = 0,
            t = X;
        try {
            var n = Wt;
            for (X = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Wt = null), (Js = !1);
        } catch (o) {
            throw (Wt !== null && (Wt = Wt.slice(e + 1)), Rm(ou, _n), o);
        } finally {
            (X = t), (Ya = !1);
        }
    }
    return null;
}
var vr = [],
    xr = 0,
    Ss = null,
    Ts = 0,
    ut = [],
    dt = 0,
    Jn = null,
    Kt = 1,
    Gt = "";
function Bn(e, t) {
    (vr[xr++] = Ts), (vr[xr++] = Ss), (Ss = e), (Ts = t);
}
function sg(e, t, n) {
    (ut[dt++] = Kt), (ut[dt++] = Gt), (ut[dt++] = Jn), (Jn = e);
    var r = Kt;
    e = Gt;
    var o = 32 - Pt(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - Pt(t) + o;
    if (30 < i) {
        var s = o - (o % 5);
        (i = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (o -= s),
            (Kt = (1 << (32 - Pt(t) + o)) | (n << o) | r),
            (Gt = i + e);
    } else (Kt = (1 << i) | (n << o) | r), (Gt = e);
}
function pu(e) {
    e.return !== null && (Bn(e, 1), sg(e, 1, 0));
}
function hu(e) {
    for (; e === Ss; )
        (Ss = vr[--xr]), (vr[xr] = null), (Ts = vr[--xr]), (vr[xr] = null);
    for (; e === Jn; )
        (Jn = ut[--dt]),
            (ut[dt] = null),
            (Gt = ut[--dt]),
            (ut[dt] = null),
            (Kt = ut[--dt]),
            (ut[dt] = null);
}
var et = null,
    Je = null,
    ne = !1,
    Ct = null;
function ag(e, t) {
    var n = ft(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function _f(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (et = e), (Je = Sn(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (et = e), (Je = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Jn !== null ? { id: Kt, overflow: Gt } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = ft(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (et = e),
                      (Je = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function ql(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Zl(e) {
    if (ne) {
        var t = Je;
        if (t) {
            var n = t;
            if (!_f(e, t)) {
                if (ql(e)) throw Error(j(418));
                t = Sn(n.nextSibling);
                var r = et;
                t && _f(e, t)
                    ? ag(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (et = e));
            }
        } else {
            if (ql(e)) throw Error(j(418));
            (e.flags = (e.flags & -4097) | 2), (ne = !1), (et = e);
        }
    }
}
function Vf(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    et = e;
}
function Li(e) {
    if (e !== et) return !1;
    if (!ne) return Vf(e), (ne = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !Gl(e.type, e.memoizedProps))),
        t && (t = Je))
    ) {
        if (ql(e)) throw (lg(), Error(j(418)));
        for (; t; ) ag(e, t), (t = Sn(t.nextSibling));
    }
    if ((Vf(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(j(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Je = Sn(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Je = null;
        }
    } else Je = et ? Sn(e.stateNode.nextSibling) : null;
    return !0;
}
function lg() {
    for (var e = Je; e; ) e = Sn(e.nextSibling);
}
function Vr() {
    (Je = et = null), (ne = !1);
}
function mu(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e);
}
var T1 = sn.ReactCurrentBatchConfig;
function co(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(j(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(j(147, e));
            var o = r,
                i = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (s) {
                      var a = o.refs;
                      s === null ? delete a[i] : (a[i] = s);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != "string") throw Error(j(284));
        if (!n._owner) throw Error(j(290, e));
    }
    return e;
}
function Di(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            j(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function Ff(e) {
    var t = e._init;
    return t(e._payload);
}
function cg(e) {
    function t(p, h) {
        if (e) {
            var v = p.deletions;
            v === null ? ((p.deletions = [h]), (p.flags |= 16)) : v.push(h);
        }
    }
    function n(p, h) {
        if (!e) return null;
        for (; h !== null; ) t(p, h), (h = h.sibling);
        return null;
    }
    function r(p, h) {
        for (p = new Map(); h !== null; )
            h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
                (h = h.sibling);
        return p;
    }
    function o(p, h) {
        return (p = bn(p, h)), (p.index = 0), (p.sibling = null), p;
    }
    function i(p, h, v) {
        return (
            (p.index = v),
            e
                ? ((v = p.alternate),
                  v !== null
                      ? ((v = v.index), v < h ? ((p.flags |= 2), h) : v)
                      : ((p.flags |= 2), h))
                : ((p.flags |= 1048576), h)
        );
    }
    function s(p) {
        return e && p.alternate === null && (p.flags |= 2), p;
    }
    function a(p, h, v, T) {
        return h === null || h.tag !== 6
            ? ((h = tl(v, p.mode, T)), (h.return = p), h)
            : ((h = o(h, v)), (h.return = p), h);
    }
    function l(p, h, v, T) {
        var C = v.type;
        return C === fr
            ? u(p, h, v.props.children, T, v.key)
            : h !== null &&
              (h.elementType === C ||
                  (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === fn &&
                      Ff(C) === h.type))
            ? ((T = o(h, v.props)), (T.ref = co(p, h, v)), (T.return = p), T)
            : ((T = rs(v.type, v.key, v.props, null, p.mode, T)),
              (T.ref = co(p, h, v)),
              (T.return = p),
              T);
    }
    function c(p, h, v, T) {
        return h === null ||
            h.tag !== 4 ||
            h.stateNode.containerInfo !== v.containerInfo ||
            h.stateNode.implementation !== v.implementation
            ? ((h = nl(v, p.mode, T)), (h.return = p), h)
            : ((h = o(h, v.children || [])), (h.return = p), h);
    }
    function u(p, h, v, T, C) {
        return h === null || h.tag !== 7
            ? ((h = Qn(v, p.mode, T, C)), (h.return = p), h)
            : ((h = o(h, v)), (h.return = p), h);
    }
    function d(p, h, v) {
        if ((typeof h == "string" && h !== "") || typeof h == "number")
            return (h = tl("" + h, p.mode, v)), (h.return = p), h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Ci:
                    return (
                        (v = rs(h.type, h.key, h.props, null, p.mode, v)),
                        (v.ref = co(p, null, h)),
                        (v.return = p),
                        v
                    );
                case dr:
                    return (h = nl(h, p.mode, v)), (h.return = p), h;
                case fn:
                    var T = h._init;
                    return d(p, T(h._payload), v);
            }
            if (yo(h) || oo(h))
                return (h = Qn(h, p.mode, v, null)), (h.return = p), h;
            Di(p, h);
        }
        return null;
    }
    function f(p, h, v, T) {
        var C = h !== null ? h.key : null;
        if ((typeof v == "string" && v !== "") || typeof v == "number")
            return C !== null ? null : a(p, h, "" + v, T);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Ci:
                    return v.key === C ? l(p, h, v, T) : null;
                case dr:
                    return v.key === C ? c(p, h, v, T) : null;
                case fn:
                    return (C = v._init), f(p, h, C(v._payload), T);
            }
            if (yo(v) || oo(v)) return C !== null ? null : u(p, h, v, T, null);
            Di(p, v);
        }
        return null;
    }
    function y(p, h, v, T, C) {
        if ((typeof T == "string" && T !== "") || typeof T == "number")
            return (p = p.get(v) || null), a(h, p, "" + T, C);
        if (typeof T == "object" && T !== null) {
            switch (T.$$typeof) {
                case Ci:
                    return (
                        (p = p.get(T.key === null ? v : T.key) || null),
                        l(h, p, T, C)
                    );
                case dr:
                    return (
                        (p = p.get(T.key === null ? v : T.key) || null),
                        c(h, p, T, C)
                    );
                case fn:
                    var b = T._init;
                    return y(p, h, v, b(T._payload), C);
            }
            if (yo(T) || oo(T))
                return (p = p.get(v) || null), u(h, p, T, C, null);
            Di(h, T);
        }
        return null;
    }
    function x(p, h, v, T) {
        for (
            var C = null, b = null, P = h, E = (h = 0), A = null;
            P !== null && E < v.length;
            E++
        ) {
            P.index > E ? ((A = P), (P = null)) : (A = P.sibling);
            var N = f(p, P, v[E], T);
            if (N === null) {
                P === null && (P = A);
                break;
            }
            e && P && N.alternate === null && t(p, P),
                (h = i(N, h, E)),
                b === null ? (C = N) : (b.sibling = N),
                (b = N),
                (P = A);
        }
        if (E === v.length) return n(p, P), ne && Bn(p, E), C;
        if (P === null) {
            for (; E < v.length; E++)
                (P = d(p, v[E], T)),
                    P !== null &&
                        ((h = i(P, h, E)),
                        b === null ? (C = P) : (b.sibling = P),
                        (b = P));
            return ne && Bn(p, E), C;
        }
        for (P = r(p, P); E < v.length; E++)
            (A = y(P, p, E, v[E], T)),
                A !== null &&
                    (e &&
                        A.alternate !== null &&
                        P.delete(A.key === null ? E : A.key),
                    (h = i(A, h, E)),
                    b === null ? (C = A) : (b.sibling = A),
                    (b = A));
        return (
            e &&
                P.forEach(function (L) {
                    return t(p, L);
                }),
            ne && Bn(p, E),
            C
        );
    }
    function g(p, h, v, T) {
        var C = oo(v);
        if (typeof C != "function") throw Error(j(150));
        if (((v = C.call(v)), v == null)) throw Error(j(151));
        for (
            var b = (C = null), P = h, E = (h = 0), A = null, N = v.next();
            P !== null && !N.done;
            E++, N = v.next()
        ) {
            P.index > E ? ((A = P), (P = null)) : (A = P.sibling);
            var L = f(p, P, N.value, T);
            if (L === null) {
                P === null && (P = A);
                break;
            }
            e && P && L.alternate === null && t(p, P),
                (h = i(L, h, E)),
                b === null ? (C = L) : (b.sibling = L),
                (b = L),
                (P = A);
        }
        if (N.done) return n(p, P), ne && Bn(p, E), C;
        if (P === null) {
            for (; !N.done; E++, N = v.next())
                (N = d(p, N.value, T)),
                    N !== null &&
                        ((h = i(N, h, E)),
                        b === null ? (C = N) : (b.sibling = N),
                        (b = N));
            return ne && Bn(p, E), C;
        }
        for (P = r(p, P); !N.done; E++, N = v.next())
            (N = y(P, p, E, N.value, T)),
                N !== null &&
                    (e &&
                        N.alternate !== null &&
                        P.delete(N.key === null ? E : N.key),
                    (h = i(N, h, E)),
                    b === null ? (C = N) : (b.sibling = N),
                    (b = N));
        return (
            e &&
                P.forEach(function (D) {
                    return t(p, D);
                }),
            ne && Bn(p, E),
            C
        );
    }
    function w(p, h, v, T) {
        if (
            (typeof v == "object" &&
                v !== null &&
                v.type === fr &&
                v.key === null &&
                (v = v.props.children),
            typeof v == "object" && v !== null)
        ) {
            switch (v.$$typeof) {
                case Ci:
                    e: {
                        for (var C = v.key, b = h; b !== null; ) {
                            if (b.key === C) {
                                if (((C = v.type), C === fr)) {
                                    if (b.tag === 7) {
                                        n(p, b.sibling),
                                            (h = o(b, v.props.children)),
                                            (h.return = p),
                                            (p = h);
                                        break e;
                                    }
                                } else if (
                                    b.elementType === C ||
                                    (typeof C == "object" &&
                                        C !== null &&
                                        C.$$typeof === fn &&
                                        Ff(C) === b.type)
                                ) {
                                    n(p, b.sibling),
                                        (h = o(b, v.props)),
                                        (h.ref = co(p, b, v)),
                                        (h.return = p),
                                        (p = h);
                                    break e;
                                }
                                n(p, b);
                                break;
                            } else t(p, b);
                            b = b.sibling;
                        }
                        v.type === fr
                            ? ((h = Qn(v.props.children, p.mode, T, v.key)),
                              (h.return = p),
                              (p = h))
                            : ((T = rs(
                                  v.type,
                                  v.key,
                                  v.props,
                                  null,
                                  p.mode,
                                  T
                              )),
                              (T.ref = co(p, h, v)),
                              (T.return = p),
                              (p = T));
                    }
                    return s(p);
                case dr:
                    e: {
                        for (b = v.key; h !== null; ) {
                            if (h.key === b)
                                if (
                                    h.tag === 4 &&
                                    h.stateNode.containerInfo ===
                                        v.containerInfo &&
                                    h.stateNode.implementation ===
                                        v.implementation
                                ) {
                                    n(p, h.sibling),
                                        (h = o(h, v.children || [])),
                                        (h.return = p),
                                        (p = h);
                                    break e;
                                } else {
                                    n(p, h);
                                    break;
                                }
                            else t(p, h);
                            h = h.sibling;
                        }
                        (h = nl(v, p.mode, T)), (h.return = p), (p = h);
                    }
                    return s(p);
                case fn:
                    return (b = v._init), w(p, h, b(v._payload), T);
            }
            if (yo(v)) return x(p, h, v, T);
            if (oo(v)) return g(p, h, v, T);
            Di(p, v);
        }
        return (typeof v == "string" && v !== "") || typeof v == "number"
            ? ((v = "" + v),
              h !== null && h.tag === 6
                  ? (n(p, h.sibling), (h = o(h, v)), (h.return = p), (p = h))
                  : (n(p, h), (h = tl(v, p.mode, T)), (h.return = p), (p = h)),
              s(p))
            : n(p, h);
    }
    return w;
}
var Fr = cg(!0),
    ug = cg(!1),
    Cs = In(null),
    Ps = null,
    wr = null,
    gu = null;
function yu() {
    gu = wr = Ps = null;
}
function vu(e) {
    var t = Cs.current;
    te(Cs), (e._currentValue = t);
}
function Jl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function Mr(e, t) {
    (Ps = e),
        (gu = wr = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (We = !0), (e.firstContext = null));
}
function ht(e) {
    var t = e._currentValue;
    if (gu !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
            if (Ps === null) throw Error(j(308));
            (wr = e), (Ps.dependencies = { lanes: 0, firstContext: e });
        } else wr = wr.next = e;
    return t;
}
var Kn = null;
function xu(e) {
    Kn === null ? (Kn = [e]) : Kn.push(e);
}
function dg(e, t, n, r) {
    var o = t.interleaved;
    return (
        o === null ? ((n.next = n), xu(t)) : ((n.next = o.next), (o.next = n)),
        (t.interleaved = n),
        en(e, r)
    );
}
function en(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var pn = !1;
function wu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function fg(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function Xt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function Tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), G & 2)) {
        var o = r.pending;
        return (
            o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
            (r.pending = t),
            en(e, n)
        );
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), xu(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        en(e, n)
    );
}
function qi(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), iu(e, n);
    }
}
function zf(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
            } while (n !== null);
            i === null ? (o = i = t) : (i = i.next = t);
        } else o = i = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function bs(e, t, n, r) {
    var o = e.updateQueue;
    pn = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            c = l.next;
        (l.next = null), s === null ? (i = c) : (s.next = c), (s = l);
        var u = e.alternate;
        u !== null &&
            ((u = u.updateQueue),
            (a = u.lastBaseUpdate),
            a !== s &&
                (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
                (u.lastBaseUpdate = l)));
    }
    if (i !== null) {
        var d = o.baseState;
        (s = 0), (u = c = l = null), (a = i);
        do {
            var f = a.lane,
                y = a.eventTime;
            if ((r & f) === f) {
                u !== null &&
                    (u = u.next =
                        {
                            eventTime: y,
                            lane: 0,
                            tag: a.tag,
                            payload: a.payload,
                            callback: a.callback,
                            next: null,
                        });
                e: {
                    var x = e,
                        g = a;
                    switch (((f = t), (y = n), g.tag)) {
                        case 1:
                            if (((x = g.payload), typeof x == "function")) {
                                d = x.call(y, d, f);
                                break e;
                            }
                            d = x;
                            break e;
                        case 3:
                            x.flags = (x.flags & -65537) | 128;
                        case 0:
                            if (
                                ((x = g.payload),
                                (f =
                                    typeof x == "function"
                                        ? x.call(y, d, f)
                                        : x),
                                f == null)
                            )
                                break e;
                            d = le({}, d, f);
                            break e;
                        case 2:
                            pn = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((e.flags |= 64),
                    (f = o.effects),
                    f === null ? (o.effects = [a]) : f.push(a));
            } else
                (y = {
                    eventTime: y,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                }),
                    u === null ? ((c = u = y), (l = d)) : (u = u.next = y),
                    (s |= f);
            if (((a = a.next), a === null)) {
                if (((a = o.shared.pending), a === null)) break;
                (f = a),
                    (a = f.next),
                    (f.next = null),
                    (o.lastBaseUpdate = f),
                    (o.shared.pending = null);
            }
        } while (!0);
        if (
            (u === null && (l = d),
            (o.baseState = l),
            (o.firstBaseUpdate = c),
            (o.lastBaseUpdate = u),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (s |= o.lane), (o = o.next);
            while (o !== t);
        } else i === null && (o.shared.lanes = 0);
        (tr |= s), (e.lanes = s), (e.memoizedState = d);
    }
}
function Bf(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function"))
                    throw Error(j(191, o));
                o.call(r);
            }
        }
}
var pi = {},
    Ot = In(pi),
    Yo = In(pi),
    Xo = In(pi);
function Gn(e) {
    if (e === pi) throw Error(j(174));
    return e;
}
function Su(e, t) {
    switch ((Z(Xo, t), Z(Yo, e), Z(Ot, pi), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ll(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Ll(t, e));
    }
    te(Ot), Z(Ot, t);
}
function zr() {
    te(Ot), te(Yo), te(Xo);
}
function pg(e) {
    Gn(Xo.current);
    var t = Gn(Ot.current),
        n = Ll(t, e.type);
    t !== n && (Z(Yo, e), Z(Ot, n));
}
function Tu(e) {
    Yo.current === e && (te(Ot), te(Yo));
}
var oe = In(0);
function Es(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Xa = [];
function Cu() {
    for (var e = 0; e < Xa.length; e++)
        Xa[e]._workInProgressVersionPrimary = null;
    Xa.length = 0;
}
var Zi = sn.ReactCurrentDispatcher,
    Qa = sn.ReactCurrentBatchConfig,
    er = 0,
    ae = null,
    we = null,
    Pe = null,
    ks = !1,
    No = !1,
    Qo = 0,
    C1 = 0;
function je() {
    throw Error(j(321));
}
function Pu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!kt(e[n], t[n])) return !1;
    return !0;
}
function bu(e, t, n, r, o, i) {
    if (
        ((er = i),
        (ae = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Zi.current = e === null || e.memoizedState === null ? k1 : N1),
        (e = n(r, o)),
        No)
    ) {
        i = 0;
        do {
            if (((No = !1), (Qo = 0), 25 <= i)) throw Error(j(301));
            (i += 1),
                (Pe = we = null),
                (t.updateQueue = null),
                (Zi.current = A1),
                (e = n(r, o));
        } while (No);
    }
    if (
        ((Zi.current = Ns),
        (t = we !== null && we.next !== null),
        (er = 0),
        (Pe = we = ae = null),
        (ks = !1),
        t)
    )
        throw Error(j(300));
    return e;
}
function Eu() {
    var e = Qo !== 0;
    return (Qo = 0), e;
}
function Mt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return Pe === null ? (ae.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function mt() {
    if (we === null) {
        var e = ae.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var t = Pe === null ? ae.memoizedState : Pe.next;
    if (t !== null) (Pe = t), (we = e);
    else {
        if (e === null) throw Error(j(310));
        (we = e),
            (e = {
                memoizedState: we.memoizedState,
                baseState: we.baseState,
                baseQueue: we.baseQueue,
                queue: we.queue,
                next: null,
            }),
            Pe === null ? (ae.memoizedState = Pe = e) : (Pe = Pe.next = e);
    }
    return Pe;
}
function qo(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function qa(e) {
    var t = mt(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = we,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            (o.next = i.next), (i.next = s);
        }
        (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
        (i = o.next), (r = r.baseState);
        var a = (s = null),
            l = null,
            c = i;
        do {
            var u = c.lane;
            if ((er & u) === u)
                l !== null &&
                    (l = l.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var d = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
                    (ae.lanes |= u),
                    (tr |= u);
            }
            c = c.next;
        } while (c !== null && c !== i);
        l === null ? (s = r) : (l.next = a),
            kt(r, t.memoizedState) || (We = !0),
            (t.memoizedState = r),
            (t.baseState = s),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (i = o.lane), (ae.lanes |= i), (tr |= i), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Za(e) {
    var t = mt(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = (o = o.next);
        do (i = e(i, s.action)), (s = s.next);
        while (s !== o);
        kt(i, t.memoizedState) || (We = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function hg() {}
function mg(e, t) {
    var n = ae,
        r = mt(),
        o = t(),
        i = !kt(r.memoizedState, o);
    if (
        (i && ((r.memoizedState = o), (We = !0)),
        (r = r.queue),
        ku(vg.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (Pe !== null && Pe.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            Zo(9, yg.bind(null, n, r, o, t), void 0, null),
            be === null)
        )
            throw Error(j(349));
        er & 30 || gg(n, t, o);
    }
    return o;
}
function gg(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = ae.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (ae.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function yg(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), xg(t) && wg(e);
}
function vg(e, t, n) {
    return n(function () {
        xg(t) && wg(e);
    });
}
function xg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !kt(e, n);
    } catch {
        return !0;
    }
}
function wg(e) {
    var t = en(e, 1);
    t !== null && bt(t, e, 1, -1);
}
function $f(e) {
    var t = Mt();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: qo,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = E1.bind(null, ae, e)),
        [t.memoizedState, e]
    );
}
function Zo(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = ae.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (ae.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function Sg() {
    return mt().memoizedState;
}
function Ji(e, t, n, r) {
    var o = Mt();
    (ae.flags |= e),
        (o.memoizedState = Zo(1 | t, n, void 0, r === void 0 ? null : r));
}
function ea(e, t, n, r) {
    var o = mt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (we !== null) {
        var s = we.memoizedState;
        if (((i = s.destroy), r !== null && Pu(r, s.deps))) {
            o.memoizedState = Zo(t, n, i, r);
            return;
        }
    }
    (ae.flags |= e), (o.memoizedState = Zo(1 | t, n, i, r));
}
function Uf(e, t) {
    return Ji(8390656, 8, e, t);
}
function ku(e, t) {
    return ea(2048, 8, e, t);
}
function Tg(e, t) {
    return ea(4, 2, e, t);
}
function Cg(e, t) {
    return ea(4, 4, e, t);
}
function Pg(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function bg(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), ea(4, 4, Pg.bind(null, t, e), n)
    );
}
function Nu() {}
function Eg(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pu(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function kg(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pu(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ng(e, t, n) {
    return er & 21
        ? (kt(n, t) ||
              ((n = Lm()), (ae.lanes |= n), (tr |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (We = !0)),
          (e.memoizedState = n));
}
function P1(e, t) {
    var n = X;
    (X = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Qa.transition;
    Qa.transition = {};
    try {
        e(!1), t();
    } finally {
        (X = n), (Qa.transition = r);
    }
}
function Ag() {
    return mt().memoizedState;
}
function b1(e, t, n) {
    var r = Pn(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Rg(e))
    )
        jg(t, n);
    else if (((n = dg(e, t, n, r)), n !== null)) {
        var o = Be();
        bt(n, e, r, o), Mg(n, t, r);
    }
}
function E1(e, t, n) {
    var r = Pn(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Rg(e)) jg(t, o);
    else {
        var i = e.alternate;
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var s = t.lastRenderedState,
                    a = i(s, n);
                if (((o.hasEagerState = !0), (o.eagerState = a), kt(a, s))) {
                    var l = t.interleaved;
                    l === null
                        ? ((o.next = o), xu(t))
                        : ((o.next = l.next), (l.next = o)),
                        (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = dg(e, t, o, r)),
            n !== null && ((o = Be()), bt(n, e, r, o), Mg(n, t, r));
    }
}
function Rg(e) {
    var t = e.alternate;
    return e === ae || (t !== null && t === ae);
}
function jg(e, t) {
    No = ks = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Mg(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), iu(e, n);
    }
}
var Ns = {
        readContext: ht,
        useCallback: je,
        useContext: je,
        useEffect: je,
        useImperativeHandle: je,
        useInsertionEffect: je,
        useLayoutEffect: je,
        useMemo: je,
        useReducer: je,
        useRef: je,
        useState: je,
        useDebugValue: je,
        useDeferredValue: je,
        useTransition: je,
        useMutableSource: je,
        useSyncExternalStore: je,
        useId: je,
        unstable_isNewReconciler: !1,
    },
    k1 = {
        readContext: ht,
        useCallback: function (e, t) {
            return (Mt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: ht,
        useEffect: Uf,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Ji(4194308, 4, Pg.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Ji(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Ji(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Mt();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = Mt();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = b1.bind(null, ae, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Mt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: $f,
        useDebugValue: Nu,
        useDeferredValue: function (e) {
            return (Mt().memoizedState = e);
        },
        useTransition: function () {
            var e = $f(!1),
                t = e[0];
            return (e = P1.bind(null, e[1])), (Mt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = ae,
                o = Mt();
            if (ne) {
                if (n === void 0) throw Error(j(407));
                n = n();
            } else {
                if (((n = t()), be === null)) throw Error(j(349));
                er & 30 || gg(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (o.queue = i),
                Uf(vg.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Zo(9, yg.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Mt(),
                t = be.identifierPrefix;
            if (ne) {
                var n = Gt,
                    r = Kt;
                (n = (r & ~(1 << (32 - Pt(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = Qo++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = C1++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    N1 = {
        readContext: ht,
        useCallback: Eg,
        useContext: ht,
        useEffect: ku,
        useImperativeHandle: bg,
        useInsertionEffect: Tg,
        useLayoutEffect: Cg,
        useMemo: kg,
        useReducer: qa,
        useRef: Sg,
        useState: function () {
            return qa(qo);
        },
        useDebugValue: Nu,
        useDeferredValue: function (e) {
            var t = mt();
            return Ng(t, we.memoizedState, e);
        },
        useTransition: function () {
            var e = qa(qo)[0],
                t = mt().memoizedState;
            return [e, t];
        },
        useMutableSource: hg,
        useSyncExternalStore: mg,
        useId: Ag,
        unstable_isNewReconciler: !1,
    },
    A1 = {
        readContext: ht,
        useCallback: Eg,
        useContext: ht,
        useEffect: ku,
        useImperativeHandle: bg,
        useInsertionEffect: Tg,
        useLayoutEffect: Cg,
        useMemo: kg,
        useReducer: Za,
        useRef: Sg,
        useState: function () {
            return Za(qo);
        },
        useDebugValue: Nu,
        useDeferredValue: function (e) {
            var t = mt();
            return we === null
                ? (t.memoizedState = e)
                : Ng(t, we.memoizedState, e);
        },
        useTransition: function () {
            var e = Za(qo)[0],
                t = mt().memoizedState;
            return [e, t];
        },
        useMutableSource: hg,
        useSyncExternalStore: mg,
        useId: Ag,
        unstable_isNewReconciler: !1,
    };
function St(e, t) {
    if (e && e.defaultProps) {
        (t = le({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function ec(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : le({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ta = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? ar(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Be(),
            o = Pn(e),
            i = Xt(r, o);
        (i.payload = t),
            n != null && (i.callback = n),
            (t = Tn(e, i, o)),
            t !== null && (bt(t, e, o, r), qi(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Be(),
            o = Pn(e),
            i = Xt(r, o);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = Tn(e, i, o)),
            t !== null && (bt(t, e, o, r), qi(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Be(),
            r = Pn(e),
            o = Xt(n, r);
        (o.tag = 2),
            t != null && (o.callback = t),
            (t = Tn(e, o, r)),
            t !== null && (bt(t, e, r, n), qi(t, e, r));
    },
};
function Hf(e, t, n, r, o, i, s) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, s)
            : t.prototype && t.prototype.isPureReactComponent
            ? !Ho(n, r) || !Ho(o, i)
            : !0
    );
}
function Lg(e, t, n) {
    var r = !1,
        o = An,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = ht(i))
            : ((o = Ge(t) ? Zn : _e.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? _r(e, o) : An)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = ta),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function Wf(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ta.enqueueReplaceState(t, t.state, null);
}
function tc(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), wu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
        ? (o.context = ht(i))
        : ((i = Ge(t) ? Zn : _e.current), (o.context = _r(e, i))),
        (o.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (ec(e, t, i, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" &&
                typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" &&
                o.UNSAFE_componentWillMount(),
            t !== o.state && ta.enqueueReplaceState(o, o.state, null),
            bs(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Br(e, t) {
    try {
        var n = "",
            r = t;
        do (n += rw(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (i) {
        o =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function Ja(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function nc(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var R1 = typeof WeakMap == "function" ? WeakMap : Map;
function Dg(e, t, n) {
    (n = Xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Rs || ((Rs = !0), (fc = r)), nc(e, t);
        }),
        n
    );
}
function Og(e, t, n) {
    (n = Xt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                nc(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                nc(e, t),
                    typeof r != "function" &&
                        (Cn === null ? (Cn = new Set([this])) : Cn.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: s !== null ? s : "",
                });
            }),
        n
    );
}
function Kf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new R1();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = H1.bind(null, e, t, n)), t.then(e, e));
}
function Gf(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Yf(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = Xt(-1, 1)), (t.tag = 2), Tn(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var j1 = sn.ReactCurrentOwner,
    We = !1;
function ze(e, t, n, r) {
    t.child = e === null ? ug(t, null, n, r) : Fr(t, e.child, n, r);
}
function Xf(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        Mr(t, o),
        (r = bu(e, t, n, r, i, o)),
        (n = Eu()),
        e !== null && !We
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              tn(e, t, o))
            : (ne && n && pu(t), (t.flags |= 1), ze(e, t, r, o), t.child)
    );
}
function Qf(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
            !Iu(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), Ig(e, t, i, r, o))
            : ((e = rs(n.type, null, r, t, t.mode, o)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
        var s = i.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : Ho),
            n(s, r) && e.ref === t.ref)
        )
            return tn(e, t, o);
    }
    return (
        (t.flags |= 1),
        (e = bn(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function Ig(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Ho(i, r) && e.ref === t.ref)
            if (((We = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
                e.flags & 131072 && (We = !0);
            else return (t.lanes = e.lanes), tn(e, t, o);
    }
    return rc(e, t, n, r, o);
}
function _g(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                Z(Tr, qe),
                (qe |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    Z(Tr, qe),
                    (qe |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                Z(Tr, qe),
                (qe |= r);
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            Z(Tr, qe),
            (qe |= r);
    return ze(e, t, o, n), t.child;
}
function Vg(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function rc(e, t, n, r, o) {
    var i = Ge(n) ? Zn : _e.current;
    return (
        (i = _r(t, i)),
        Mr(t, o),
        (n = bu(e, t, n, r, i, o)),
        (r = Eu()),
        e !== null && !We
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              tn(e, t, o))
            : (ne && r && pu(t), (t.flags |= 1), ze(e, t, n, o), t.child)
    );
}
function qf(e, t, n, r, o) {
    if (Ge(n)) {
        var i = !0;
        ws(t);
    } else i = !1;
    if ((Mr(t, o), t.stateNode === null))
        es(e, t), Lg(t, n, r), tc(t, n, r, o), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            c = n.contextType;
        typeof c == "object" && c !== null
            ? (c = ht(c))
            : ((c = Ge(n) ? Zn : _e.current), (c = _r(t, c)));
        var u = n.getDerivedStateFromProps,
            d =
                typeof u == "function" ||
                typeof s.getSnapshotBeforeUpdate == "function";
        d ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((a !== r || l !== c) && Wf(t, s, r, c)),
            (pn = !1);
        var f = t.memoizedState;
        (s.state = f),
            bs(t, r, s, o),
            (l = t.memoizedState),
            a !== r || f !== l || Ke.current || pn
                ? (typeof u == "function" &&
                      (ec(t, n, u, r), (l = t.memoizedState)),
                  (a = pn || Hf(t, n, a, r, f, l, c))
                      ? (d ||
                            (typeof s.UNSAFE_componentWillMount != "function" &&
                                typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" &&
                                s.componentWillMount(),
                            typeof s.UNSAFE_componentWillMount == "function" &&
                                s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = c),
                  (r = a))
                : (typeof s.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (s = t.stateNode),
            fg(e, t),
            (a = t.memoizedProps),
            (c = t.type === t.elementType ? a : St(t.type, a)),
            (s.props = c),
            (d = t.pendingProps),
            (f = s.context),
            (l = n.contextType),
            typeof l == "object" && l !== null
                ? (l = ht(l))
                : ((l = Ge(n) ? Zn : _e.current), (l = _r(t, l)));
        var y = n.getDerivedStateFromProps;
        (u =
            typeof y == "function" ||
            typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((a !== d || f !== l) && Wf(t, s, r, l)),
            (pn = !1),
            (f = t.memoizedState),
            (s.state = f),
            bs(t, r, s, o);
        var x = t.memoizedState;
        a !== d || f !== x || Ke.current || pn
            ? (typeof y == "function" &&
                  (ec(t, n, y, r), (x = t.memoizedState)),
              (c = pn || Hf(t, n, c, r, f, x, l) || !1)
                  ? (u ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" &&
                            typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" &&
                            s.componentWillUpdate(r, x, l),
                        typeof s.UNSAFE_componentWillUpdate == "function" &&
                            s.UNSAFE_componentWillUpdate(r, x, l)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" ||
                        (a === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" ||
                        (a === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = x)),
              (s.props = r),
              (s.state = x),
              (s.context = l),
              (r = c))
            : (typeof s.componentDidUpdate != "function" ||
                  (a === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                  (a === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return oc(e, t, n, r, i, o);
}
function oc(e, t, n, r, o, i) {
    Vg(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && If(t, n, !1), tn(e, t, i);
    (r = t.stateNode), (j1.current = t);
    var a =
        s && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && s
            ? ((t.child = Fr(t, e.child, null, i)),
              (t.child = Fr(t, null, a, i)))
            : ze(e, t, a, i),
        (t.memoizedState = r.state),
        o && If(t, n, !0),
        t.child
    );
}
function Fg(e) {
    var t = e.stateNode;
    t.pendingContext
        ? Of(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Of(e, t.context, !1),
        Su(e, t.containerInfo);
}
function Zf(e, t, n, r, o) {
    return Vr(), mu(o), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var ic = { dehydrated: null, treeContext: null, retryLane: 0 };
function sc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function zg(e, t, n) {
    var r = t.pendingProps,
        o = oe.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a;
    if (
        ((a = s) ||
            (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        a
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (o |= 1),
        Z(oe, o & 1),
        e === null)
    )
        return (
            Zl(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((s = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = s))
                            : (i = oa(s, r, 0, null)),
                        (e = Qn(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = sc(n)),
                        (t.memoizedState = ic),
                        e)
                      : Au(t, s))
        );
    if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
        return M1(e, t, s, r, a, o, n);
    if (i) {
        (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== o
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = l),
                  (t.deletions = null))
                : ((r = bn(o, l)),
                  (r.subtreeFlags = o.subtreeFlags & 14680064)),
            a !== null
                ? (i = bn(a, i))
                : ((i = Qn(i, s, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (s = e.child.memoizedState),
            (s =
                s === null
                    ? sc(n)
                    : {
                          baseLanes: s.baseLanes | n,
                          cachePool: null,
                          transitions: s.transitions,
                      }),
            (i.memoizedState = s),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = ic),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = bn(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Au(e, t) {
    return (
        (t = oa({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Oi(e, t, n, r) {
    return (
        r !== null && mu(r),
        Fr(t, e.child, null, n),
        (e = Au(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function M1(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Ja(Error(j(422)))), Oi(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (o = t.mode),
              (r = oa({ mode: "visible", children: r.children }, o, 0, null)),
              (i = Qn(i, o, s, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && Fr(t, e.child, null, s),
              (t.child.memoizedState = sc(s)),
              (t.memoizedState = ic),
              i);
    if (!(t.mode & 1)) return Oi(e, t, s, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
        return (
            (r = a), (i = Error(j(419))), (r = Ja(i, r, void 0)), Oi(e, t, s, r)
        );
    }
    if (((a = (s & e.childLanes) !== 0), We || a)) {
        if (((r = be), r !== null)) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            (o = o & (r.suspendedLanes | s) ? 0 : o),
                o !== 0 &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), en(e, o), bt(r, e, o, -1));
        }
        return Ou(), (r = Ja(Error(j(421)))), Oi(e, t, s, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = W1.bind(null, e)),
          (o._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (Je = Sn(o.nextSibling)),
          (et = t),
          (ne = !0),
          (Ct = null),
          e !== null &&
              ((ut[dt++] = Kt),
              (ut[dt++] = Gt),
              (ut[dt++] = Jn),
              (Kt = e.id),
              (Gt = e.overflow),
              (Jn = t)),
          (t = Au(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Jf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Jl(e.return, t, n);
}
function el(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: o,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = o));
}
function Bg(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ((ze(e, t, r.children, n), (r = oe.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Jf(e, n, t);
                else if (e.tag === 19) Jf(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((Z(oe, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Es(e) === null && (o = n),
                        (n = n.sibling);
                (n = o),
                    n === null
                        ? ((o = t.child), (t.child = null))
                        : ((o = n.sibling), (n.sibling = null)),
                    el(t, !1, o, n, i);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && Es(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                el(t, !0, n, null, i);
                break;
            case "together":
                el(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function es(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tn(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (tr |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(j(153));
    if (t.child !== null) {
        for (
            e = t.child, n = bn(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = bn(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function L1(e, t, n) {
    switch (t.tag) {
        case 3:
            Fg(t), Vr();
            break;
        case 5:
            pg(t);
            break;
        case 1:
            Ge(t.type) && ws(t);
            break;
        case 4:
            Su(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            Z(Cs, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (Z(oe, oe.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? zg(e, t, n)
                    : (Z(oe, oe.current & 1),
                      (e = tn(e, t, n)),
                      e !== null ? e.sibling : null);
            Z(oe, oe.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Bg(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null &&
                    ((o.rendering = null),
                    (o.tail = null),
                    (o.lastEffect = null)),
                Z(oe, oe.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), _g(e, t, n);
    }
    return tn(e, t, n);
}
var $g, ac, Ug, Hg;
$g = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
ac = function () {};
Ug = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), Gn(Ot.current);
        var i = null;
        switch (n) {
            case "input":
                (o = Al(e, o)), (r = Al(e, r)), (i = []);
                break;
            case "select":
                (o = le({}, o, { value: void 0 })),
                    (r = le({}, r, { value: void 0 })),
                    (i = []);
                break;
            case "textarea":
                (o = Ml(e, o)), (r = Ml(e, r)), (i = []);
                break;
            default:
                typeof o.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = vs);
        }
        Dl(n, r);
        var s;
        n = null;
        for (c in o)
            if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
                if (c === "style") {
                    var a = o[c];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (_o.hasOwnProperty(c)
                            ? i || (i = [])
                            : (i = i || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (
                ((a = o != null ? o[c] : void 0),
                r.hasOwnProperty(c) && l !== a && (l != null || a != null))
            )
                if (c === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) ||
                                (l && l.hasOwnProperty(s)) ||
                                (n || (n = {}), (n[s] = ""));
                        for (s in l)
                            l.hasOwnProperty(s) &&
                                a[s] !== l[s] &&
                                (n || (n = {}), (n[s] = l[s]));
                    } else n || (i || (i = []), i.push(c, n)), (n = l);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0),
                          (a = a ? a.__html : void 0),
                          l != null && a !== l && (i = i || []).push(c, l))
                        : c === "children"
                        ? (typeof l != "string" && typeof l != "number") ||
                          (i = i || []).push(c, "" + l)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          (_o.hasOwnProperty(c)
                              ? (l != null &&
                                    c === "onScroll" &&
                                    ee("scroll", e),
                                i || a === l || (i = []))
                              : (i = i || []).push(c, l));
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4);
    }
};
Hg = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function uo(e, t) {
    if (!ne)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling);
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function D1(e, t, n) {
    var r = t.pendingProps;
    switch ((hu(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Me(t), null;
        case 1:
            return Ge(t.type) && xs(), Me(t), null;
        case 3:
            return (
                (r = t.stateNode),
                zr(),
                te(Ke),
                te(_e),
                Cu(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Li(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Ct !== null && (mc(Ct), (Ct = null)))),
                ac(e, t),
                Me(t),
                null
            );
        case 5:
            Tu(t);
            var o = Gn(Xo.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Ug(e, t, n, r, o),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(j(166));
                    return Me(t), null;
                }
                if (((e = Gn(Ot.current)), Li(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (
                        ((r[Lt] = t), (r[Go] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            ee("cancel", r), ee("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ee("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < xo.length; o++) ee(xo[o], r);
                            break;
                        case "source":
                            ee("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ee("error", r), ee("load", r);
                            break;
                        case "details":
                            ee("toggle", r);
                            break;
                        case "input":
                            lf(r, i), ee("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }),
                                ee("invalid", r);
                            break;
                        case "textarea":
                            uf(r, i), ee("invalid", r);
                    }
                    Dl(n, i), (o = null);
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Mi(r.textContent, a, e),
                                      (o = ["children", a]))
                                    : typeof a == "number" &&
                                      r.textContent !== "" + a &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Mi(r.textContent, a, e),
                                      (o = ["children", "" + a]))
                                : _o.hasOwnProperty(s) &&
                                  a != null &&
                                  s === "onScroll" &&
                                  ee("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Pi(r), cf(r, i, !0);
                            break;
                        case "textarea":
                            Pi(r), df(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = vs);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = vm(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)),
                                  n === "select" &&
                                      ((s = e),
                                      r.multiple
                                          ? (s.multiple = !0)
                                          : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[Lt] = t),
                        (e[Go] = r),
                        $g(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = Ol(n, r)), n)) {
                            case "dialog":
                                ee("cancel", e), ee("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ee("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < xo.length; o++) ee(xo[o], e);
                                o = r;
                                break;
                            case "source":
                                ee("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ee("error", e), ee("load", e), (o = r);
                                break;
                            case "details":
                                ee("toggle", e), (o = r);
                                break;
                            case "input":
                                lf(e, r), (o = Al(e, r)), ee("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (o = le({}, r, { value: void 0 })),
                                    ee("invalid", e);
                                break;
                            case "textarea":
                                uf(e, r), (o = Ml(e, r)), ee("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        Dl(n, o), (a = o);
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style"
                                    ? Sm(e, l)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((l = l ? l.__html : void 0),
                                      l != null && xm(e, l))
                                    : i === "children"
                                    ? typeof l == "string"
                                        ? (n !== "textarea" || l !== "") &&
                                          Vo(e, l)
                                        : typeof l == "number" && Vo(e, "" + l)
                                    : i !== "suppressContentEditableWarning" &&
                                      i !== "suppressHydrationWarning" &&
                                      i !== "autoFocus" &&
                                      (_o.hasOwnProperty(i)
                                          ? l != null &&
                                            i === "onScroll" &&
                                            ee("scroll", e)
                                          : l != null && Jc(e, i, l, s));
                            }
                        switch (n) {
                            case "input":
                                Pi(e), cf(e, r, !1);
                                break;
                            case "textarea":
                                Pi(e), df(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + Nn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? Nr(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          Nr(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof o.onClick == "function" &&
                                    (e.onclick = vs);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Me(t), null;
        case 6:
            if (e && t.stateNode != null) Hg(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(j(166));
                if (((n = Gn(Xo.current)), Gn(Ot.current), Li(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Lt] = t),
                        (i = r.nodeValue !== n) && ((e = et), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Mi(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Mi(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[Lt] = t),
                        (t.stateNode = r);
            }
            return Me(t), null;
        case 13:
            if (
                (te(oe),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (ne && Je !== null && t.mode & 1 && !(t.flags & 128))
                    lg(), Vr(), (t.flags |= 98560), (i = !1);
                else if (((i = Li(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(j(318));
                        if (
                            ((i = t.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error(j(317));
                        i[Lt] = t;
                    } else
                        Vr(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    Me(t), (i = !1);
                } else Ct !== null && (mc(Ct), (Ct = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || oe.current & 1
                              ? Te === 0 && (Te = 3)
                              : Ou())),
                  t.updateQueue !== null && (t.flags |= 4),
                  Me(t),
                  null);
        case 4:
            return (
                zr(),
                ac(e, t),
                e === null && Wo(t.stateNode.containerInfo),
                Me(t),
                null
            );
        case 10:
            return vu(t.type._context), Me(t), null;
        case 17:
            return Ge(t.type) && xs(), Me(t), null;
        case 19:
            if ((te(oe), (i = t.memoizedState), i === null)) return Me(t), null;
            if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
                if (r) uo(i, !1);
                else {
                    if (Te !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = Es(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        uo(i, !1),
                                        r = s.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (s = i.alternate),
                                        s === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = s.childLanes),
                                              (i.lanes = s.lanes),
                                              (i.child = s.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  s.memoizedProps),
                                              (i.memoizedState =
                                                  s.memoizedState),
                                              (i.updateQueue = s.updateQueue),
                                              (i.type = s.type),
                                              (e = s.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return Z(oe, (oe.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null &&
                        me() > $r &&
                        ((t.flags |= 128),
                        (r = !0),
                        uo(i, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Es(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            uo(i, !0),
                            i.tail === null &&
                                i.tailMode === "hidden" &&
                                !s.alternate &&
                                !ne)
                        )
                            return Me(t), null;
                    } else
                        2 * me() - i.renderingStartTime > $r &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            uo(i, !1),
                            (t.lanes = 4194304));
                i.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = i.last),
                      n !== null ? (n.sibling = s) : (t.child = s),
                      (i.last = s));
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = me()),
                  (t.sibling = null),
                  (n = oe.current),
                  Z(oe, r ? (n & 1) | 2 : n & 1),
                  t)
                : (Me(t), null);
        case 22:
        case 23:
            return (
                Du(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? qe & 1073741824 &&
                      (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : Me(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(j(156, t.tag));
}
function O1(e, t) {
    switch ((hu(t), t.tag)) {
        case 1:
            return (
                Ge(t.type) && xs(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                zr(),
                te(Ke),
                te(_e),
                Cu(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return Tu(t), null;
        case 13:
            if (
                (te(oe),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(j(340));
                Vr();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return te(oe), null;
        case 4:
            return zr(), null;
        case 10:
            return vu(t.type._context), null;
        case 22:
        case 23:
            return Du(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Ii = !1,
    De = !1,
    I1 = typeof WeakSet == "function" ? WeakSet : Set,
    I = null;
function Sr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                de(e, t, r);
            }
        else n.current = null;
}
function lc(e, t, n) {
    try {
        n();
    } catch (r) {
        de(e, t, r);
    }
}
var ep = !1;
function _1(e, t) {
    if (((Wl = ms), (e = Xm()), fu(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        a = -1,
                        l = -1,
                        c = 0,
                        u = 0,
                        d = e,
                        f = null;
                    t: for (;;) {
                        for (
                            var y;
                            d !== n ||
                                (o !== 0 && d.nodeType !== 3) ||
                                (a = s + o),
                                d !== i ||
                                    (r !== 0 && d.nodeType !== 3) ||
                                    (l = s + r),
                                d.nodeType === 3 && (s += d.nodeValue.length),
                                (y = d.firstChild) !== null;

                        )
                            (f = d), (d = y);
                        for (;;) {
                            if (d === e) break t;
                            if (
                                (f === n && ++c === o && (a = s),
                                f === i && ++u === r && (l = s),
                                (y = d.nextSibling) !== null)
                            )
                                break;
                            (d = f), (f = d.parentNode);
                        }
                        d = y;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        Kl = { focusedElem: e, selectionRange: n }, ms = !1, I = t;
        I !== null;

    )
        if (
            ((t = I),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (I = e);
        else
            for (; I !== null; ) {
                t = I;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (x !== null) {
                                    var g = x.memoizedProps,
                                        w = x.memoizedState,
                                        p = t.stateNode,
                                        h = p.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? g
                                                : St(t.type, g),
                                            w
                                        );
                                    p.__reactInternalSnapshotBeforeUpdate = h;
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1
                                    ? (v.textContent = "")
                                    : v.nodeType === 9 &&
                                      v.documentElement &&
                                      v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(j(163));
                        }
                } catch (T) {
                    de(t, t.return, T);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (I = e);
                    break;
                }
                I = t.return;
            }
    return (x = ep), (ep = !1), x;
}
function Ao(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), i !== void 0 && lc(t, n, i);
            }
            o = o.next;
        } while (o !== r);
    }
}
function na(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function cc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Wg(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Wg(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[Lt],
                delete t[Go],
                delete t[Xl],
                delete t[x1],
                delete t[w1])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Kg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tp(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Kg(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function uc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = vs));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (uc(e, t, n), e = e.sibling; e !== null; )
            uc(e, t, n), (e = e.sibling);
}
function dc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (dc(e, t, n), e = e.sibling; e !== null; )
            dc(e, t, n), (e = e.sibling);
}
var ke = null,
    Tt = !1;
function an(e, t, n) {
    for (n = n.child; n !== null; ) Gg(e, t, n), (n = n.sibling);
}
function Gg(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
        try {
            Dt.onCommitFiberUnmount(Ys, n);
        } catch {}
    switch (n.tag) {
        case 5:
            De || Sr(n, t);
        case 6:
            var r = ke,
                o = Tt;
            (ke = null),
                an(e, t, n),
                (ke = r),
                (Tt = o),
                ke !== null &&
                    (Tt
                        ? ((e = ke),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : ke.removeChild(n.stateNode));
            break;
        case 18:
            ke !== null &&
                (Tt
                    ? ((e = ke),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? Ga(e.parentNode, n)
                          : e.nodeType === 1 && Ga(e, n),
                      $o(e))
                    : Ga(ke, n.stateNode));
            break;
        case 4:
            (r = ke),
                (o = Tt),
                (ke = n.stateNode.containerInfo),
                (Tt = !0),
                an(e, t, n),
                (ke = r),
                (Tt = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !De &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    (i = i.tag),
                        s !== void 0 && (i & 2 || i & 4) && lc(n, t, s),
                        (o = o.next);
                } while (o !== r);
            }
            an(e, t, n);
            break;
        case 1:
            if (
                !De &&
                (Sr(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (a) {
                    de(n, t, a);
                }
            an(e, t, n);
            break;
        case 21:
            an(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((De = (r = De) || n.memoizedState !== null),
                  an(e, t, n),
                  (De = r))
                : an(e, t, n);
            break;
        default:
            an(e, t, n);
    }
}
function np(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new I1()),
            t.forEach(function (r) {
                var o = K1.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function xt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (ke = a.stateNode), (Tt = !1);
                            break e;
                        case 3:
                            (ke = a.stateNode.containerInfo), (Tt = !0);
                            break e;
                        case 4:
                            (ke = a.stateNode.containerInfo), (Tt = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (ke === null) throw Error(j(160));
                Gg(i, s, o), (ke = null), (Tt = !1);
                var l = o.alternate;
                l !== null && (l.return = null), (o.return = null);
            } catch (c) {
                de(o, t, c);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Yg(t, e), (t = t.sibling);
}
function Yg(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((xt(t, e), jt(e), r & 4)) {
                try {
                    Ao(3, e, e.return), na(3, e);
                } catch (g) {
                    de(e, e.return, g);
                }
                try {
                    Ao(5, e, e.return);
                } catch (g) {
                    de(e, e.return, g);
                }
            }
            break;
        case 1:
            xt(t, e), jt(e), r & 512 && n !== null && Sr(n, n.return);
            break;
        case 5:
            if (
                (xt(t, e),
                jt(e),
                r & 512 && n !== null && Sr(n, n.return),
                e.flags & 32)
            ) {
                var o = e.stateNode;
                try {
                    Vo(o, "");
                } catch (g) {
                    de(e, e.return, g);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        a === "input" &&
                            i.type === "radio" &&
                            i.name != null &&
                            gm(o, i),
                            Ol(a, s);
                        var c = Ol(a, i);
                        for (s = 0; s < l.length; s += 2) {
                            var u = l[s],
                                d = l[s + 1];
                            u === "style"
                                ? Sm(o, d)
                                : u === "dangerouslySetInnerHTML"
                                ? xm(o, d)
                                : u === "children"
                                ? Vo(o, d)
                                : Jc(o, u, d, c);
                        }
                        switch (a) {
                            case "input":
                                Rl(o, i);
                                break;
                            case "textarea":
                                ym(o, i);
                                break;
                            case "select":
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var y = i.value;
                                y != null
                                    ? Nr(o, !!i.multiple, y, !1)
                                    : f !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? Nr(
                                                o,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0
                                            )
                                          : Nr(
                                                o,
                                                !!i.multiple,
                                                i.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        o[Go] = i;
                    } catch (g) {
                        de(e, e.return, g);
                    }
            }
            break;
        case 6:
            if ((xt(t, e), jt(e), r & 4)) {
                if (e.stateNode === null) throw Error(j(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                    o.nodeValue = i;
                } catch (g) {
                    de(e, e.return, g);
                }
            }
            break;
        case 3:
            if (
                (xt(t, e),
                jt(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    $o(t.containerInfo);
                } catch (g) {
                    de(e, e.return, g);
                }
            break;
        case 4:
            xt(t, e), jt(e);
            break;
        case 13:
            xt(t, e),
                jt(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((i = o.memoizedState !== null),
                    (o.stateNode.isHidden = i),
                    !i ||
                        (o.alternate !== null &&
                            o.alternate.memoizedState !== null) ||
                        (Mu = me())),
                r & 4 && np(e);
            break;
        case 22:
            if (
                ((u = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((De = (c = De) || u), xt(t, e), (De = c))
                    : xt(t, e),
                jt(e),
                r & 8192)
            ) {
                if (
                    ((c = e.memoizedState !== null),
                    (e.stateNode.isHidden = c) && !u && e.mode & 1)
                )
                    for (I = e, u = e.child; u !== null; ) {
                        for (d = I = u; I !== null; ) {
                            switch (((f = I), (y = f.child), f.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ao(4, f, f.return);
                                    break;
                                case 1:
                                    Sr(f, f.return);
                                    var x = f.stateNode;
                                    if (
                                        typeof x.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = f), (n = f.return);
                                        try {
                                            (t = r),
                                                (x.props = t.memoizedProps),
                                                (x.state = t.memoizedState),
                                                x.componentWillUnmount();
                                        } catch (g) {
                                            de(r, n, g);
                                        }
                                    }
                                    break;
                                case 5:
                                    Sr(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        op(d);
                                        continue;
                                    }
                            }
                            y !== null ? ((y.return = f), (I = y)) : op(d);
                        }
                        u = u.sibling;
                    }
                e: for (u = null, d = e; ; ) {
                    if (d.tag === 5) {
                        if (u === null) {
                            u = d;
                            try {
                                (o = d.stateNode),
                                    c
                                        ? ((i = o.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (i.display = "none"))
                                        : ((a = d.stateNode),
                                          (l = d.memoizedProps.style),
                                          (s =
                                              l != null &&
                                              l.hasOwnProperty("display")
                                                  ? l.display
                                                  : null),
                                          (a.style.display = wm("display", s)));
                            } catch (g) {
                                de(e, e.return, g);
                            }
                        }
                    } else if (d.tag === 6) {
                        if (u === null)
                            try {
                                d.stateNode.nodeValue = c
                                    ? ""
                                    : d.memoizedProps;
                            } catch (g) {
                                de(e, e.return, g);
                            }
                    } else if (
                        ((d.tag !== 22 && d.tag !== 23) ||
                            d.memoizedState === null ||
                            d === e) &&
                        d.child !== null
                    ) {
                        (d.child.return = d), (d = d.child);
                        continue;
                    }
                    if (d === e) break e;
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === e) break e;
                        u === d && (u = null), (d = d.return);
                    }
                    u === d && (u = null),
                        (d.sibling.return = d.return),
                        (d = d.sibling);
                }
            }
            break;
        case 19:
            xt(t, e), jt(e), r & 4 && np(e);
            break;
        case 21:
            break;
        default:
            xt(t, e), jt(e);
    }
}
function jt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Kg(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(j(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Vo(o, ""), (r.flags &= -33));
                    var i = tp(e);
                    dc(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = tp(e);
                    uc(e, a, s);
                    break;
                default:
                    throw Error(j(161));
            }
        } catch (l) {
            de(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function V1(e, t, n) {
    (I = e), Xg(e);
}
function Xg(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
        var o = I,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Ii;
            if (!s) {
                var a = o.alternate,
                    l = (a !== null && a.memoizedState !== null) || De;
                a = Ii;
                var c = De;
                if (((Ii = s), (De = l) && !c))
                    for (I = o; I !== null; )
                        (s = I),
                            (l = s.child),
                            s.tag === 22 && s.memoizedState !== null
                                ? ip(o)
                                : l !== null
                                ? ((l.return = s), (I = l))
                                : ip(o);
                for (; i !== null; ) (I = i), Xg(i), (i = i.sibling);
                (I = o), (Ii = a), (De = c);
            }
            rp(e);
        } else
            o.subtreeFlags & 8772 && i !== null
                ? ((i.return = o), (I = i))
                : rp(e);
    }
}
function rp(e) {
    for (; I !== null; ) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            De || na(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !De)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : St(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        o,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var i = t.updateQueue;
                            i !== null && Bf(t, i, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Bf(t, s, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var c = t.alternate;
                                if (c !== null) {
                                    var u = c.memoizedState;
                                    if (u !== null) {
                                        var d = u.dehydrated;
                                        d !== null && $o(d);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(j(163));
                    }
                De || (t.flags & 512 && cc(t));
            } catch (f) {
                de(t, t.return, f);
            }
        }
        if (t === e) {
            I = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (I = n);
            break;
        }
        I = t.return;
    }
}
function op(e) {
    for (; I !== null; ) {
        var t = I;
        if (t === e) {
            I = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (I = n);
            break;
        }
        I = t.return;
    }
}
function ip(e) {
    for (; I !== null; ) {
        var t = I;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        na(4, t);
                    } catch (l) {
                        de(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            de(t, o, l);
                        }
                    }
                    var i = t.return;
                    try {
                        cc(t);
                    } catch (l) {
                        de(t, i, l);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        cc(t);
                    } catch (l) {
                        de(t, s, l);
                    }
            }
        } catch (l) {
            de(t, t.return, l);
        }
        if (t === e) {
            I = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (I = a);
            break;
        }
        I = t.return;
    }
}
var F1 = Math.ceil,
    As = sn.ReactCurrentDispatcher,
    Ru = sn.ReactCurrentOwner,
    pt = sn.ReactCurrentBatchConfig,
    G = 0,
    be = null,
    ye = null,
    Ae = 0,
    qe = 0,
    Tr = In(0),
    Te = 0,
    Jo = null,
    tr = 0,
    ra = 0,
    ju = 0,
    Ro = null,
    He = null,
    Mu = 0,
    $r = 1 / 0,
    Ht = null,
    Rs = !1,
    fc = null,
    Cn = null,
    _i = !1,
    yn = null,
    js = 0,
    jo = 0,
    pc = null,
    ts = -1,
    ns = 0;
function Be() {
    return G & 6 ? me() : ts !== -1 ? ts : (ts = me());
}
function Pn(e) {
    return e.mode & 1
        ? G & 2 && Ae !== 0
            ? Ae & -Ae
            : T1.transition !== null
            ? (ns === 0 && (ns = Lm()), ns)
            : ((e = X),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : zm(e.type))),
              e)
        : 1;
}
function bt(e, t, n, r) {
    if (50 < jo) throw ((jo = 0), (pc = null), Error(j(185)));
    ui(e, n, r),
        (!(G & 2) || e !== be) &&
            (e === be && (!(G & 2) && (ra |= n), Te === 4 && mn(e, Ae)),
            Ye(e, r),
            n === 1 &&
                G === 0 &&
                !(t.mode & 1) &&
                (($r = me() + 500), Js && _n()));
}
function Ye(e, t) {
    var n = e.callbackNode;
    Tw(e, t);
    var r = hs(e, e === be ? Ae : 0);
    if (r === 0)
        n !== null && hf(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && hf(n), t === 1))
            e.tag === 0 ? S1(sp.bind(null, e)) : ig(sp.bind(null, e)),
                y1(function () {
                    !(G & 6) && _n();
                }),
                (n = null);
        else {
            switch (Dm(r)) {
                case 1:
                    n = ou;
                    break;
                case 4:
                    n = jm;
                    break;
                case 16:
                    n = ps;
                    break;
                case 536870912:
                    n = Mm;
                    break;
                default:
                    n = ps;
            }
            n = ry(n, Qg.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Qg(e, t) {
    if (((ts = -1), (ns = 0), G & 6)) throw Error(j(327));
    var n = e.callbackNode;
    if (Lr() && e.callbackNode !== n) return null;
    var r = hs(e, e === be ? Ae : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ms(e, r);
    else {
        t = r;
        var o = G;
        G |= 2;
        var i = Zg();
        (be !== e || Ae !== t) && ((Ht = null), ($r = me() + 500), Xn(e, t));
        do
            try {
                $1();
                break;
            } catch (a) {
                qg(e, a);
            }
        while (!0);
        yu(),
            (As.current = i),
            (G = o),
            ye !== null ? (t = 0) : ((be = null), (Ae = 0), (t = Te));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((o = zl(e)), o !== 0 && ((r = o), (t = hc(e, o)))),
            t === 1)
        )
            throw ((n = Jo), Xn(e, 0), mn(e, r), Ye(e, me()), n);
        if (t === 6) mn(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !z1(o) &&
                    ((t = Ms(e, r)),
                    t === 2 &&
                        ((i = zl(e)), i !== 0 && ((r = i), (t = hc(e, i)))),
                    t === 1))
            )
                throw ((n = Jo), Xn(e, 0), mn(e, r), Ye(e, me()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(j(345));
                case 2:
                    $n(e, He, Ht);
                    break;
                case 3:
                    if (
                        (mn(e, r),
                        (r & 130023424) === r &&
                            ((t = Mu + 500 - me()), 10 < t))
                    ) {
                        if (hs(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            Be(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = Yl($n.bind(null, e, He, Ht), t);
                        break;
                    }
                    $n(e, He, Ht);
                    break;
                case 4:
                    if ((mn(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var s = 31 - Pt(r);
                        (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
                    }
                    if (
                        ((r = o),
                        (r = me() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * F1(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Yl($n.bind(null, e, He, Ht), r);
                        break;
                    }
                    $n(e, He, Ht);
                    break;
                case 5:
                    $n(e, He, Ht);
                    break;
                default:
                    throw Error(j(329));
            }
        }
    }
    return Ye(e, me()), e.callbackNode === n ? Qg.bind(null, e) : null;
}
function hc(e, t) {
    var n = Ro;
    return (
        e.current.memoizedState.isDehydrated && (Xn(e, t).flags |= 256),
        (e = Ms(e, t)),
        e !== 2 && ((t = He), (He = n), t !== null && mc(t)),
        e
    );
}
function mc(e) {
    He === null ? (He = e) : He.push.apply(He, e);
}
function z1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!kt(i(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function mn(e, t) {
    for (
        t &= ~ju,
            t &= ~ra,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Pt(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function sp(e) {
    if (G & 6) throw Error(j(327));
    Lr();
    var t = hs(e, 0);
    if (!(t & 1)) return Ye(e, me()), null;
    var n = Ms(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = zl(e);
        r !== 0 && ((t = r), (n = hc(e, r)));
    }
    if (n === 1) throw ((n = Jo), Xn(e, 0), mn(e, t), Ye(e, me()), n);
    if (n === 6) throw Error(j(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        $n(e, He, Ht),
        Ye(e, me()),
        null
    );
}
function Lu(e, t) {
    var n = G;
    G |= 1;
    try {
        return e(t);
    } finally {
        (G = n), G === 0 && (($r = me() + 500), Js && _n());
    }
}
function nr(e) {
    yn !== null && yn.tag === 0 && !(G & 6) && Lr();
    var t = G;
    G |= 1;
    var n = pt.transition,
        r = X;
    try {
        if (((pt.transition = null), (X = 1), e)) return e();
    } finally {
        (X = r), (pt.transition = n), (G = t), !(G & 6) && _n();
    }
}
function Du() {
    (qe = Tr.current), te(Tr);
}
function Xn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), g1(n)), ye !== null))
        for (n = ye.return; n !== null; ) {
            var r = n;
            switch ((hu(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && xs();
                    break;
                case 3:
                    zr(), te(Ke), te(_e), Cu();
                    break;
                case 5:
                    Tu(r);
                    break;
                case 4:
                    zr();
                    break;
                case 13:
                    te(oe);
                    break;
                case 19:
                    te(oe);
                    break;
                case 10:
                    vu(r.type._context);
                    break;
                case 22:
                case 23:
                    Du();
            }
            n = n.return;
        }
    if (
        ((be = e),
        (ye = e = bn(e.current, null)),
        (Ae = qe = t),
        (Te = 0),
        (Jo = null),
        (ju = ra = tr = 0),
        (He = Ro = null),
        Kn !== null)
    ) {
        for (t = 0; t < Kn.length; t++)
            if (((n = Kn[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    (i.next = o), (r.next = s);
                }
                n.pending = r;
            }
        Kn = null;
    }
    return e;
}
function qg(e, t) {
    do {
        var n = ye;
        try {
            if ((yu(), (Zi.current = Ns), ks)) {
                for (var r = ae.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                ks = !1;
            }
            if (
                ((er = 0),
                (Pe = we = ae = null),
                (No = !1),
                (Qo = 0),
                (Ru.current = null),
                n === null || n.return === null)
            ) {
                (Te = 1), (Jo = t), (ye = null);
                break;
            }
            e: {
                var i = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (
                    ((t = Ae),
                    (a.flags |= 32768),
                    l !== null &&
                        typeof l == "object" &&
                        typeof l.then == "function")
                ) {
                    var c = l,
                        u = a,
                        d = u.tag;
                    if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = u.alternate;
                        f
                            ? ((u.updateQueue = f.updateQueue),
                              (u.memoizedState = f.memoizedState),
                              (u.lanes = f.lanes))
                            : ((u.updateQueue = null),
                              (u.memoizedState = null));
                    }
                    var y = Gf(s);
                    if (y !== null) {
                        (y.flags &= -257),
                            Yf(y, s, a, i, t),
                            y.mode & 1 && Kf(i, c, t),
                            (t = y),
                            (l = c);
                        var x = t.updateQueue;
                        if (x === null) {
                            var g = new Set();
                            g.add(l), (t.updateQueue = g);
                        } else x.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Kf(i, c, t), Ou();
                            break e;
                        }
                        l = Error(j(426));
                    }
                } else if (ne && a.mode & 1) {
                    var w = Gf(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                            Yf(w, s, a, i, t),
                            mu(Br(l, a));
                        break e;
                    }
                }
                (i = l = Br(l, a)),
                    Te !== 4 && (Te = 2),
                    Ro === null ? (Ro = [i]) : Ro.push(i),
                    (i = s);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var p = Dg(i, l, t);
                            zf(i, p);
                            break e;
                        case 1:
                            a = l;
                            var h = i.type,
                                v = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof h.getDerivedStateFromError ==
                                    "function" ||
                                    (v !== null &&
                                        typeof v.componentDidCatch ==
                                            "function" &&
                                        (Cn === null || !Cn.has(v))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var T = Og(i, a, t);
                                zf(i, T);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            ey(n);
        } catch (C) {
            (t = C), ye === n && n !== null && (ye = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Zg() {
    var e = As.current;
    return (As.current = Ns), e === null ? Ns : e;
}
function Ou() {
    (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
        be === null || (!(tr & 268435455) && !(ra & 268435455)) || mn(be, Ae);
}
function Ms(e, t) {
    var n = G;
    G |= 2;
    var r = Zg();
    (be !== e || Ae !== t) && ((Ht = null), Xn(e, t));
    do
        try {
            B1();
            break;
        } catch (o) {
            qg(e, o);
        }
    while (!0);
    if ((yu(), (G = n), (As.current = r), ye !== null)) throw Error(j(261));
    return (be = null), (Ae = 0), Te;
}
function B1() {
    for (; ye !== null; ) Jg(ye);
}
function $1() {
    for (; ye !== null && !pw(); ) Jg(ye);
}
function Jg(e) {
    var t = ny(e.alternate, e, qe);
    (e.memoizedProps = e.pendingProps),
        t === null ? ey(e) : (ye = t),
        (Ru.current = null);
}
function ey(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = O1(n, t)), n !== null)) {
                (n.flags &= 32767), (ye = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Te = 6), (ye = null);
                return;
            }
        } else if (((n = D1(n, t, qe)), n !== null)) {
            ye = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            ye = t;
            return;
        }
        ye = t = e;
    } while (t !== null);
    Te === 0 && (Te = 5);
}
function $n(e, t, n) {
    var r = X,
        o = pt.transition;
    try {
        (pt.transition = null), (X = 1), U1(e, t, n, r);
    } finally {
        (pt.transition = o), (X = r);
    }
    return null;
}
function U1(e, t, n, r) {
    do Lr();
    while (yn !== null);
    if (G & 6) throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(j(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (Cw(e, i),
        e === be && ((ye = be = null), (Ae = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            _i ||
            ((_i = !0),
            ry(ps, function () {
                return Lr(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = pt.transition), (pt.transition = null);
        var s = X;
        X = 1;
        var a = G;
        (G |= 4),
            (Ru.current = null),
            _1(e, n),
            Yg(n, e),
            c1(Kl),
            (ms = !!Wl),
            (Kl = Wl = null),
            (e.current = n),
            V1(n),
            hw(),
            (G = a),
            (X = s),
            (pt.transition = i);
    } else e.current = n;
    if (
        (_i && ((_i = !1), (yn = e), (js = o)),
        (i = e.pendingLanes),
        i === 0 && (Cn = null),
        yw(n.stateNode),
        Ye(e, me()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]),
                r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Rs) throw ((Rs = !1), (e = fc), (fc = null), e);
    return (
        js & 1 && e.tag !== 0 && Lr(),
        (i = e.pendingLanes),
        i & 1 ? (e === pc ? jo++ : ((jo = 0), (pc = e))) : (jo = 0),
        _n(),
        null
    );
}
function Lr() {
    if (yn !== null) {
        var e = Dm(js),
            t = pt.transition,
            n = X;
        try {
            if (((pt.transition = null), (X = 16 > e ? 16 : e), yn === null))
                var r = !1;
            else {
                if (((e = yn), (yn = null), (js = 0), G & 6))
                    throw Error(j(331));
                var o = G;
                for (G |= 4, I = e.current; I !== null; ) {
                    var i = I,
                        s = i.child;
                    if (I.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (I = c; I !== null; ) {
                                    var u = I;
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ao(8, u, i);
                                    }
                                    var d = u.child;
                                    if (d !== null) (d.return = u), (I = d);
                                    else
                                        for (; I !== null; ) {
                                            u = I;
                                            var f = u.sibling,
                                                y = u.return;
                                            if ((Wg(u), u === c)) {
                                                I = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                (f.return = y), (I = f);
                                                break;
                                            }
                                            I = y;
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var g = x.child;
                                if (g !== null) {
                                    x.child = null;
                                    do {
                                        var w = g.sibling;
                                        (g.sibling = null), (g = w);
                                    } while (g !== null);
                                }
                            }
                            I = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        (s.return = i), (I = s);
                    else
                        e: for (; I !== null; ) {
                            if (((i = I), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ao(9, i, i.return);
                                }
                            var p = i.sibling;
                            if (p !== null) {
                                (p.return = i.return), (I = p);
                                break e;
                            }
                            I = i.return;
                        }
                }
                var h = e.current;
                for (I = h; I !== null; ) {
                    s = I;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        (v.return = s), (I = v);
                    else
                        e: for (s = h; I !== null; ) {
                            if (((a = I), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            na(9, a);
                                    }
                                } catch (C) {
                                    de(a, a.return, C);
                                }
                            if (a === s) {
                                I = null;
                                break e;
                            }
                            var T = a.sibling;
                            if (T !== null) {
                                (T.return = a.return), (I = T);
                                break e;
                            }
                            I = a.return;
                        }
                }
                if (
                    ((G = o),
                    _n(),
                    Dt && typeof Dt.onPostCommitFiberRoot == "function")
                )
                    try {
                        Dt.onPostCommitFiberRoot(Ys, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (X = n), (pt.transition = t);
        }
    }
    return !1;
}
function ap(e, t, n) {
    (t = Br(n, t)),
        (t = Dg(e, t, 1)),
        (e = Tn(e, t, 1)),
        (t = Be()),
        e !== null && (ui(e, 1, t), Ye(e, t));
}
function de(e, t, n) {
    if (e.tag === 3) ap(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                ap(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (Cn === null || !Cn.has(r)))
                ) {
                    (e = Br(n, e)),
                        (e = Og(t, e, 1)),
                        (t = Tn(t, e, 1)),
                        (e = Be()),
                        t !== null && (ui(t, 1, e), Ye(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function H1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Be()),
        (e.pingedLanes |= e.suspendedLanes & n),
        be === e &&
            (Ae & n) === n &&
            (Te === 4 ||
            (Te === 3 && (Ae & 130023424) === Ae && 500 > me() - Mu)
                ? Xn(e, 0)
                : (ju |= n)),
        Ye(e, t);
}
function ty(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = ki), (ki <<= 1), !(ki & 130023424) && (ki = 4194304))
            : (t = 1));
    var n = Be();
    (e = en(e, t)), e !== null && (ui(e, t, n), Ye(e, n));
}
function W1(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), ty(e, n);
}
function K1(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(j(314));
    }
    r !== null && r.delete(t), ty(e, n);
}
var ny;
ny = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ke.current) We = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (We = !1), L1(e, t, n);
            We = !!(e.flags & 131072);
        }
    else (We = !1), ne && t.flags & 1048576 && sg(t, Ts, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            es(e, t), (e = t.pendingProps);
            var o = _r(t, _e.current);
            Mr(t, n), (o = bu(null, t, r, e, o, n));
            var i = Eu();
            return (
                (t.flags |= 1),
                typeof o == "object" &&
                o !== null &&
                typeof o.render == "function" &&
                o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Ge(r) ? ((i = !0), ws(t)) : (i = !1),
                      (t.memoizedState =
                          o.state !== null && o.state !== void 0
                              ? o.state
                              : null),
                      wu(t),
                      (o.updater = ta),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      tc(t, r, e, n),
                      (t = oc(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      ne && i && pu(t),
                      ze(null, t, o, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (es(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = Y1(r)),
                    (e = St(r, e)),
                    o)
                ) {
                    case 0:
                        t = rc(null, t, r, e, n);
                        break e;
                    case 1:
                        t = qf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Xf(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Qf(null, t, r, St(r.type, e), n);
                        break e;
                }
                throw Error(j(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : St(r, o)),
                rc(e, t, r, o, n)
            );
        case 1:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : St(r, o)),
                qf(e, t, r, o, n)
            );
        case 3:
            e: {
                if ((Fg(t), e === null)) throw Error(j(387));
                (r = t.pendingProps),
                    (i = t.memoizedState),
                    (o = i.element),
                    fg(e, t),
                    bs(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries:
                                s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (o = Br(Error(j(423)), t)), (t = Zf(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = Br(Error(j(424)), t)), (t = Zf(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            Je = Sn(t.stateNode.containerInfo.firstChild),
                                et = t,
                                ne = !0,
                                Ct = null,
                                n = ug(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Vr(), r === o)) {
                        t = tn(e, t, n);
                        break e;
                    }
                    ze(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                pg(t),
                e === null && Zl(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (s = o.children),
                Gl(r, o)
                    ? (s = null)
                    : i !== null && Gl(r, i) && (t.flags |= 32),
                Vg(e, t),
                ze(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && Zl(t), null;
        case 13:
            return zg(e, t, n);
        case 4:
            return (
                Su(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = Fr(t, null, r, n)) : ze(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : St(r, o)),
                Xf(e, t, r, o, n)
            );
        case 7:
            return ze(e, t, t.pendingProps, n), t.child;
        case 8:
            return ze(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ze(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (i = t.memoizedProps),
                    (s = o.value),
                    Z(Cs, r._currentValue),
                    (r._currentValue = s),
                    i !== null)
                )
                    if (kt(i.value, s)) {
                        if (i.children === o.children && !Ke.current) {
                            t = tn(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            i = t.child, i !== null && (i.return = t);
                            i !== null;

                        ) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            (l = Xt(-1, n & -n)), (l.tag = 2);
                                            var c = i.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var u = c.pending;
                                                u === null
                                                    ? (l.next = l)
                                                    : ((l.next = u.next),
                                                      (u.next = l)),
                                                    (c.pending = l);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (l = i.alternate),
                                            l !== null && (l.lanes |= n),
                                            Jl(i.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (i.tag === 10)
                                s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((s = i.return), s === null))
                                    throw Error(j(341));
                                (s.lanes |= n),
                                    (a = s.alternate),
                                    a !== null && (a.lanes |= n),
                                    Jl(s, n, t),
                                    (s = i.sibling);
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((i = s.sibling), i !== null)) {
                                        (i.return = s.return), (s = i);
                                        break;
                                    }
                                    s = s.return;
                                }
                            i = s;
                        }
                ze(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                Mr(t, n),
                (o = ht(o)),
                (r = r(o)),
                (t.flags |= 1),
                ze(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (o = St(r, t.pendingProps)),
                (o = St(r.type, o)),
                Qf(e, t, r, o, n)
            );
        case 15:
            return Ig(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : St(r, o)),
                es(e, t),
                (t.tag = 1),
                Ge(r) ? ((e = !0), ws(t)) : (e = !1),
                Mr(t, n),
                Lg(t, r, o),
                tc(t, r, o, n),
                oc(null, t, r, !0, e, n)
            );
        case 19:
            return Bg(e, t, n);
        case 22:
            return _g(e, t, n);
    }
    throw Error(j(156, t.tag));
};
function ry(e, t) {
    return Rm(e, t);
}
function G1(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function ft(e, t, n, r) {
    return new G1(e, t, n, r);
}
function Iu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Y1(e) {
    if (typeof e == "function") return Iu(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === tu)) return 11;
        if (e === nu) return 14;
    }
    return 2;
}
function bn(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = ft(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function rs(e, t, n, r, o, i) {
    var s = 2;
    if (((r = e), typeof e == "function")) Iu(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case fr:
                return Qn(n.children, o, i, t);
            case eu:
                (s = 8), (o |= 8);
                break;
            case bl:
                return (
                    (e = ft(12, n, t, o | 2)),
                    (e.elementType = bl),
                    (e.lanes = i),
                    e
                );
            case El:
                return (
                    (e = ft(13, n, t, o)),
                    (e.elementType = El),
                    (e.lanes = i),
                    e
                );
            case kl:
                return (
                    (e = ft(19, n, t, o)),
                    (e.elementType = kl),
                    (e.lanes = i),
                    e
                );
            case pm:
                return oa(n, o, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case dm:
                            s = 10;
                            break e;
                        case fm:
                            s = 9;
                            break e;
                        case tu:
                            s = 11;
                            break e;
                        case nu:
                            s = 14;
                            break e;
                        case fn:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(j(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = ft(s, n, t, o)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
    );
}
function Qn(e, t, n, r) {
    return (e = ft(7, e, r, t)), (e.lanes = n), e;
}
function oa(e, t, n, r) {
    return (
        (e = ft(22, e, r, t)),
        (e.elementType = pm),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function tl(e, t, n) {
    return (e = ft(6, e, null, t)), (e.lanes = n), e;
}
function nl(e, t, n) {
    return (
        (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function X1(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Ia(0)),
        (this.expirationTimes = Ia(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Ia(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function _u(e, t, n, r, o, i, s, a, l) {
    return (
        (e = new X1(e, t, n, a, l)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = ft(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        wu(i),
        e
    );
}
function Q1(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: dr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function oy(e) {
    if (!e) return An;
    e = e._reactInternals;
    e: {
        if (ar(e) !== e || e.tag !== 1) throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ge(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(j(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ge(n)) return og(e, n, t);
    }
    return t;
}
function iy(e, t, n, r, o, i, s, a, l) {
    return (
        (e = _u(n, r, !0, e, o, i, s, a, l)),
        (e.context = oy(null)),
        (n = e.current),
        (r = Be()),
        (o = Pn(n)),
        (i = Xt(r, o)),
        (i.callback = t ?? null),
        Tn(n, i, o),
        (e.current.lanes = o),
        ui(e, o, r),
        Ye(e, r),
        e
    );
}
function ia(e, t, n, r) {
    var o = t.current,
        i = Be(),
        s = Pn(o);
    return (
        (n = oy(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Xt(i, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Tn(o, t, s)),
        e !== null && (bt(e, o, s, i), qi(e, o, s)),
        s
    );
}
function Ls(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function lp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Vu(e, t) {
    lp(e, t), (e = e.alternate) && lp(e, t);
}
function q1() {
    return null;
}
var sy =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Fu(e) {
    this._internalRoot = e;
}
sa.prototype.render = Fu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(j(409));
    ia(e, t, null, null);
};
sa.prototype.unmount = Fu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nr(function () {
            ia(null, e, null, null);
        }),
            (t[Jt] = null);
    }
};
function sa(e) {
    this._internalRoot = e;
}
sa.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = _m();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++);
        hn.splice(n, 0, e), n === 0 && Fm(e);
    }
};
function zu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function aa(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function cp() {}
function Z1(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var c = Ls(s);
                i.call(c);
            };
        }
        var s = iy(t, r, e, 0, null, !1, !1, "", cp);
        return (
            (e._reactRootContainer = s),
            (e[Jt] = s.current),
            Wo(e.nodeType === 8 ? e.parentNode : e),
            nr(),
            s
        );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var c = Ls(l);
            a.call(c);
        };
    }
    var l = _u(e, 0, !1, null, null, !1, !1, "", cp);
    return (
        (e._reactRootContainer = l),
        (e[Jt] = l.current),
        Wo(e.nodeType === 8 ? e.parentNode : e),
        nr(function () {
            ia(t, l, n, r);
        }),
        l
    );
}
function la(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function () {
                var l = Ls(s);
                a.call(l);
            };
        }
        ia(t, s, e, o);
    } else s = Z1(n, t, e, o, r);
    return Ls(s);
}
Om = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = vo(t.pendingLanes);
                n !== 0 &&
                    (iu(t, n | 1),
                    Ye(t, me()),
                    !(G & 6) && (($r = me() + 500), _n()));
            }
            break;
        case 13:
            nr(function () {
                var r = en(e, 1);
                if (r !== null) {
                    var o = Be();
                    bt(r, e, 1, o);
                }
            }),
                Vu(e, 1);
    }
};
su = function (e) {
    if (e.tag === 13) {
        var t = en(e, 134217728);
        if (t !== null) {
            var n = Be();
            bt(t, e, 134217728, n);
        }
        Vu(e, 134217728);
    }
};
Im = function (e) {
    if (e.tag === 13) {
        var t = Pn(e),
            n = en(e, t);
        if (n !== null) {
            var r = Be();
            bt(n, e, t, r);
        }
        Vu(e, t);
    }
};
_m = function () {
    return X;
};
Vm = function (e, t) {
    var n = X;
    try {
        return (X = e), t();
    } finally {
        X = n;
    }
};
_l = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Rl(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Zs(r);
                        if (!o) throw Error(j(90));
                        mm(r), Rl(r, o);
                    }
                }
            }
            break;
        case "textarea":
            ym(e, n);
            break;
        case "select":
            (t = n.value), t != null && Nr(e, !!n.multiple, t, !1);
    }
};
Pm = Lu;
bm = nr;
var J1 = { usingClientEntryPoint: !1, Events: [fi, gr, Zs, Tm, Cm, Lu] },
    fo = {
        findFiberByHostInstance: Wn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
    },
    eS = {
        bundleType: fo.bundleType,
        version: fo.version,
        rendererPackageName: fo.rendererPackageName,
        rendererConfig: fo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: sn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Nm(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: fo.findFiberByHostInstance || q1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vi.isDisabled && Vi.supportsFiber)
        try {
            (Ys = Vi.inject(eS)), (Dt = Vi);
        } catch {}
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J1;
ot.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zu(t)) throw Error(j(200));
    return Q1(e, t, null, n);
};
ot.createRoot = function (e, t) {
    if (!zu(e)) throw Error(j(299));
    var n = !1,
        r = "",
        o = sy;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = _u(e, 1, !1, null, null, n, !1, r, o)),
        (e[Jt] = t.current),
        Wo(e.nodeType === 8 ? e.parentNode : e),
        new Fu(t)
    );
};
ot.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(j(188))
            : ((e = Object.keys(e).join(",")), Error(j(268, e)));
    return (e = Nm(t)), (e = e === null ? null : e.stateNode), e;
};
ot.flushSync = function (e) {
    return nr(e);
};
ot.hydrate = function (e, t, n) {
    if (!aa(t)) throw Error(j(200));
    return la(null, e, t, !0, n);
};
ot.hydrateRoot = function (e, t, n) {
    if (!zu(e)) throw Error(j(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        s = sy;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = iy(t, null, e, 1, n ?? null, o, !1, i, s)),
        (e[Jt] = t.current),
        Wo(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new sa(t);
};
ot.render = function (e, t, n) {
    if (!aa(t)) throw Error(j(200));
    return la(null, e, t, !1, n);
};
ot.unmountComponentAtNode = function (e) {
    if (!aa(e)) throw Error(j(40));
    return e._reactRootContainer
        ? (nr(function () {
              la(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Jt] = null);
              });
          }),
          !0)
        : !1;
};
ot.unstable_batchedUpdates = Lu;
ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!aa(n)) throw Error(j(200));
    if (e == null || e._reactInternals === void 0) throw Error(j(38));
    return la(e, t, n, !1, r);
};
ot.version = "18.3.1-next-f1338f8080-20240426";
function ay() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ay);
        } catch (e) {
            console.error(e);
        }
}
ay(), (am.exports = ot);
var hi = am.exports;
const tS = Xh(hi);
var ly,
    up = hi;
(ly = up.createRoot), up.hydrateRoot;
function nS(e, t) {
    if (e instanceof RegExp) return { keys: !1, pattern: e };
    var n,
        r,
        o,
        i,
        s = [],
        a = "",
        l = e.split("/");
    for (l[0] || l.shift(); (o = l.shift()); )
        (n = o[0]),
            n === "*"
                ? (s.push(n), (a += o[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
                : n === ":"
                ? ((r = o.indexOf("?", 1)),
                  (i = o.indexOf(".", 1)),
                  s.push(o.substring(1, ~r ? r : ~i ? i : o.length)),
                  (a += ~r && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)"),
                  ~i && (a += (~r ? "?" : "") + "\\" + o.substring(i)))
                : (a += "/" + o);
    return {
        keys: s,
        pattern: new RegExp("^" + a + (t ? "(?=$|/)" : "/?$"), "i"),
    };
}
var cy = { exports: {} },
    uy = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ur = S;
function rS(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var oS = typeof Object.is == "function" ? Object.is : rS,
    iS = Ur.useState,
    sS = Ur.useEffect,
    aS = Ur.useLayoutEffect,
    lS = Ur.useDebugValue;
function cS(e, t) {
    var n = t(),
        r = iS({ inst: { value: n, getSnapshot: t } }),
        o = r[0].inst,
        i = r[1];
    return (
        aS(
            function () {
                (o.value = n), (o.getSnapshot = t), rl(o) && i({ inst: o });
            },
            [e, n, t]
        ),
        sS(
            function () {
                return (
                    rl(o) && i({ inst: o }),
                    e(function () {
                        rl(o) && i({ inst: o });
                    })
                );
            },
            [e]
        ),
        lS(n),
        n
    );
}
function rl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !oS(e, n);
    } catch {
        return !0;
    }
}
function uS(e, t) {
    return t();
}
var dS =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
        ? uS
        : cS;
uy.useSyncExternalStore =
    Ur.useSyncExternalStore !== void 0 ? Ur.useSyncExternalStore : dS;
cy.exports = uy;
var fS = cy.exports;
const pS = Hx.useInsertionEffect,
    hS =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    mS = hS ? S.useLayoutEffect : S.useEffect,
    gS = pS || mS,
    dy = (e) => {
        const t = S.useRef([e, (...n) => t[0](...n)]).current;
        return (
            gS(() => {
                t[0] = e;
            }),
            t[1]
        );
    },
    yS = "popstate",
    Bu = "pushState",
    $u = "replaceState",
    vS = "hashchange",
    dp = [yS, Bu, $u, vS],
    xS = (e) => {
        for (const t of dp) addEventListener(t, e);
        return () => {
            for (const t of dp) removeEventListener(t, e);
        };
    },
    fy = (e, t) => fS.useSyncExternalStore(xS, e, t),
    wS = () => location.search,
    SS = ({ ssrSearch: e = "" } = {}) => fy(wS, () => e),
    fp = () => location.pathname,
    TS = ({ ssrPath: e } = {}) => fy(fp, e ? () => e : fp),
    CS = (e, { replace: t = !1, state: n = null } = {}) =>
        history[t ? $u : Bu](n, "", e),
    PS = (e = {}) => [TS(e), CS],
    pp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[pp] > "u") {
    for (const e of [Bu, $u]) {
        const t = history[e];
        history[e] = function () {
            const n = t.apply(this, arguments),
                r = new Event(e);
            return (r.arguments = arguments), dispatchEvent(r), n;
        };
    }
    Object.defineProperty(window, pp, { value: !0 });
}
const bS = (e, t) =>
        t.toLowerCase().indexOf(e.toLowerCase())
            ? "~" + t
            : t.slice(e.length) || "/",
    py = (e = "") => (e === "/" ? "" : e),
    ES = (e, t) => (e[0] === "~" ? e.slice(1) : py(t) + e),
    kS = (e = "", t) => bS(hp(py(e)), hp(t)),
    hp = (e) => {
        try {
            return decodeURI(e);
        } catch {
            return e;
        }
    },
    hy = {
        hook: PS,
        searchHook: SS,
        parser: nS,
        base: "",
        ssrPath: void 0,
        ssrSearch: void 0,
        hrefs: (e) => e,
    },
    my = S.createContext(hy),
    Zr = () => S.useContext(my),
    gy = {},
    yy = S.createContext(gy),
    NS = () => S.useContext(yy),
    ca = (e) => {
        const [t, n] = e.hook(e);
        return [kS(e.base, t), dy((r, o) => n(ES(r, e.base), o))];
    },
    AS = () => ca(Zr()),
    Uu = (e, t, n, r) => {
        const { pattern: o, keys: i } =
                t instanceof RegExp ? { keys: !1, pattern: t } : e(t || "*", r),
            s = o.exec(n) || [],
            [a, ...l] = s;
        return a !== void 0
            ? [
                  !0,
                  (() => {
                      const c =
                          i !== !1
                              ? Object.fromEntries(i.map((d, f) => [d, l[f]]))
                              : s.groups;
                      let u = { ...l };
                      return c && Object.assign(u, c), u;
                  })(),
                  ...(r ? [a] : []),
              ]
            : [!1, null];
    },
    RS = (e) => Uu(Zr().parser, e, AS()[0]),
    jS = ({ children: e, ...t }) => {
        var u, d;
        const n = Zr(),
            r = t.hook ? hy : n;
        let o = r;
        const [i, s] = ((u = t.ssrPath) == null ? void 0 : u.split("?")) ?? [];
        s && ((t.ssrSearch = s), (t.ssrPath = i)),
            (t.hrefs = t.hrefs ?? ((d = t.hook) == null ? void 0 : d.hrefs));
        let a = S.useRef({}),
            l = a.current,
            c = l;
        for (let f in r) {
            const y = f === "base" ? r[f] + (t[f] || "") : t[f] || r[f];
            l === c && y !== c[f] && (a.current = c = { ...c }),
                (c[f] = y),
                y !== r[f] && (o = c);
        }
        return S.createElement(my.Provider, { value: o, children: e });
    },
    mp = ({ children: e, component: t }, n) =>
        t
            ? S.createElement(t, { params: n })
            : typeof e == "function"
            ? e(n)
            : e,
    MS = (e) => {
        let t = S.useRef(gy),
            n = t.current;
        for (const r in e) e[r] !== n[r] && (n = e);
        return Object.keys(e).length === 0 && (n = e), (t.current = n);
    },
    ol = ({ path: e, nest: t, match: n, ...r }) => {
        const o = Zr(),
            [i] = ca(o),
            [s, a, l] = n ?? Uu(o.parser, e, i, t),
            c = MS({ ...NS(), ...a });
        if (!s) return null;
        const u = l ? S.createElement(jS, { base: l }, mp(r, c)) : mp(r, c);
        return S.createElement(yy.Provider, { value: c, children: u });
    },
    LS = S.forwardRef((e, t) => {
        const n = Zr(),
            [r, o] = ca(n),
            {
                to: i = "",
                href: s = i,
                onClick: a,
                asChild: l,
                children: c,
                className: u,
                replace: d,
                state: f,
                ...y
            } = e,
            x = dy((w) => {
                w.ctrlKey ||
                    w.metaKey ||
                    w.altKey ||
                    w.shiftKey ||
                    w.button !== 0 ||
                    (a == null || a(w),
                    w.defaultPrevented || (w.preventDefault(), o(s, e)));
            }),
            g = n.hrefs(s[0] === "~" ? s.slice(1) : n.base + s, n);
        return l && S.isValidElement(c)
            ? S.cloneElement(c, { onClick: x, href: g })
            : S.createElement("a", {
                  ...y,
                  onClick: x,
                  href: g,
                  className: u != null && u.call ? u(r === s) : u,
                  children: c,
                  ref: t,
              });
    }),
    vy = (e) =>
        Array.isArray(e)
            ? e.flatMap((t) =>
                  vy(t && t.type === S.Fragment ? t.props.children : t)
              )
            : [e],
    DS = ({ children: e, location: t }) => {
        const n = Zr(),
            [r] = ca(n);
        for (const o of vy(e)) {
            let i = 0;
            if (
                S.isValidElement(o) &&
                (i = Uu(n.parser, o.props.path, t || r, o.props.nest))[0]
            )
                return S.cloneElement(o, { match: i });
        }
        return null;
    },
    OS = 1,
    IS = 1e6;
let il = 0;
function _S() {
    return (il = (il + 1) % Number.MAX_SAFE_INTEGER), il.toString();
}
const sl = new Map(),
    gp = (e) => {
        if (sl.has(e)) return;
        const t = setTimeout(() => {
            sl.delete(e), Mo({ type: "REMOVE_TOAST", toastId: e });
        }, IS);
        sl.set(e, t);
    },
    VS = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e, toasts: [t.toast, ...e.toasts].slice(0, OS) };
            case "UPDATE_TOAST":
                return {
                    ...e,
                    toasts: e.toasts.map((n) =>
                        n.id === t.toast.id ? { ...n, ...t.toast } : n
                    ),
                };
            case "DISMISS_TOAST": {
                const { toastId: n } = t;
                return (
                    n
                        ? gp(n)
                        : e.toasts.forEach((r) => {
                              gp(r.id);
                          }),
                    {
                        ...e,
                        toasts: e.toasts.map((r) =>
                            r.id === n || n === void 0 ? { ...r, open: !1 } : r
                        ),
                    }
                );
            }
            case "REMOVE_TOAST":
                return t.toastId === void 0
                    ? { ...e, toasts: [] }
                    : {
                          ...e,
                          toasts: e.toasts.filter((n) => n.id !== t.toastId),
                      };
        }
    },
    os = [];
let is = { toasts: [] };
function Mo(e) {
    (is = VS(is, e)),
        os.forEach((t) => {
            t(is);
        });
}
function FS({ ...e }) {
    const t = _S(),
        n = (o) => Mo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
        r = () => Mo({ type: "DISMISS_TOAST", toastId: t });
    return (
        Mo({
            type: "ADD_TOAST",
            toast: {
                ...e,
                id: t,
                open: !0,
                onOpenChange: (o) => {
                    o || r();
                },
            },
        }),
        { id: t, dismiss: r, update: n }
    );
}
function zS() {
    const [e, t] = S.useState(is);
    return (
        S.useEffect(
            () => (
                os.push(t),
                () => {
                    const n = os.indexOf(t);
                    n > -1 && os.splice(n, 1);
                }
            ),
            [e]
        ),
        {
            ...e,
            toast: FS,
            dismiss: (n) => Mo({ type: "DISMISS_TOAST", toastId: n }),
        }
    );
}
function Se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
        if ((e == null || e(o), n === !1 || !o.defaultPrevented))
            return t == null ? void 0 : t(o);
    };
}
function yp(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
}
function xy(...e) {
    return (t) => {
        let n = !1;
        const r = e.map((o) => {
            const i = yp(o, t);
            return !n && typeof i == "function" && (n = !0), i;
        });
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : yp(e[o], null);
                }
            };
    };
}
function Nt(...e) {
    return S.useCallback(xy(...e), e);
}
function ua(e, t = []) {
    let n = [];
    function r(i, s) {
        const a = S.createContext(s),
            l = n.length;
        n = [...n, s];
        const c = (d) => {
            var p;
            const { scope: f, children: y, ...x } = d,
                g =
                    ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) ||
                    a,
                w = S.useMemo(() => x, Object.values(x));
            return m.jsx(g.Provider, { value: w, children: y });
        };
        c.displayName = i + "Provider";
        function u(d, f) {
            var g;
            const y =
                    ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) ||
                    a,
                x = S.useContext(y);
            if (x) return x;
            if (s !== void 0) return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``);
        }
        return [c, u];
    }
    const o = () => {
        const i = n.map((s) => S.createContext(s));
        return function (a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return S.useMemo(
                () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
                [a, l]
            );
        };
    };
    return (o.scopeName = e), [r, BS(o, ...t)];
}
function BS(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (i) {
            const s = r.reduce((a, { useScope: l, scopeName: c }) => {
                const d = l(i)[`__scope${c}`];
                return { ...a, ...d };
            }, {});
            return S.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
        };
    };
    return (n.scopeName = t.scopeName), n;
}
function Ds(e) {
    const t = US(e),
        n = S.forwardRef((r, o) => {
            const { children: i, ...s } = r,
                a = S.Children.toArray(i),
                l = a.find(WS);
            if (l) {
                const c = l.props.children,
                    u = a.map((d) =>
                        d === l
                            ? S.Children.count(c) > 1
                                ? S.Children.only(null)
                                : S.isValidElement(c)
                                ? c.props.children
                                : null
                            : d
                    );
                return m.jsx(t, {
                    ...s,
                    ref: o,
                    children: S.isValidElement(c)
                        ? S.cloneElement(c, void 0, u)
                        : null,
                });
            }
            return m.jsx(t, { ...s, ref: o, children: i });
        });
    return (n.displayName = `${e}.Slot`), n;
}
var $S = Ds("Slot");
function US(e) {
    const t = S.forwardRef((n, r) => {
        const { children: o, ...i } = n;
        if (S.isValidElement(o)) {
            const s = GS(o),
                a = KS(i, o.props);
            return (
                o.type !== S.Fragment && (a.ref = r ? xy(r, s) : s),
                S.cloneElement(o, a)
            );
        }
        return S.Children.count(o) > 1 ? S.Children.only(null) : null;
    });
    return (t.displayName = `${e}.SlotClone`), t;
}
var wy = Symbol("radix.slottable");
function HS(e) {
    const t = ({ children: n }) => m.jsx(m.Fragment, { children: n });
    return (t.displayName = `${e}.Slottable`), (t.__radixId = wy), t;
}
function WS(e) {
    return (
        S.isValidElement(e) &&
        typeof e.type == "function" &&
        "__radixId" in e.type &&
        e.type.__radixId === wy
    );
}
function KS(e, t) {
    const n = { ...t };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r)
            ? o && i
                ? (n[r] = (...a) => {
                      i(...a), o(...a);
                  })
                : o && (n[r] = o)
            : r === "style"
            ? (n[r] = { ...o, ...i })
            : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
}
function GS(e) {
    var r, o;
    let t =
            (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
                ? void 0
                : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t =
              (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
                  ? void 0
                  : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
function YS(e) {
    const t = e + "CollectionProvider",
        [n, r] = ua(t),
        [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        s = (g) => {
            const { scope: w, children: p } = g,
                h = un.useRef(null),
                v = un.useRef(new Map()).current;
            return m.jsx(o, {
                scope: w,
                itemMap: v,
                collectionRef: h,
                children: p,
            });
        };
    s.displayName = t;
    const a = e + "CollectionSlot",
        l = Ds(a),
        c = un.forwardRef((g, w) => {
            const { scope: p, children: h } = g,
                v = i(a, p),
                T = Nt(w, v.collectionRef);
            return m.jsx(l, { ref: T, children: h });
        });
    c.displayName = a;
    const u = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        f = Ds(u),
        y = un.forwardRef((g, w) => {
            const { scope: p, children: h, ...v } = g,
                T = un.useRef(null),
                C = Nt(w, T),
                b = i(u, p);
            return (
                un.useEffect(
                    () => (
                        b.itemMap.set(T, { ref: T, ...v }),
                        () => void b.itemMap.delete(T)
                    )
                ),
                m.jsx(f, { [d]: "", ref: C, children: h })
            );
        });
    y.displayName = u;
    function x(g) {
        const w = i(e + "CollectionConsumer", g);
        return un.useCallback(() => {
            const h = w.collectionRef.current;
            if (!h) return [];
            const v = Array.from(h.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort(
                (b, P) => v.indexOf(b.ref.current) - v.indexOf(P.ref.current)
            );
        }, [w.collectionRef, w.itemMap]);
    }
    return [{ Provider: s, Slot: c, ItemSlot: y }, x, r];
}
var XS = [
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
        "span",
        "svg",
        "ul",
    ],
    Xe = XS.reduce((e, t) => {
        const n = Ds(`Primitive.${t}`),
            r = S.forwardRef((o, i) => {
                const { asChild: s, ...a } = o,
                    l = s ? n : t;
                return (
                    typeof window < "u" &&
                        (window[Symbol.for("radix-ui")] = !0),
                    m.jsx(l, { ...a, ref: i })
                );
            });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
    }, {});
function Sy(e, t) {
    e && hi.flushSync(() => e.dispatchEvent(t));
}
function Ft(e) {
    const t = S.useRef(e);
    return (
        S.useEffect(() => {
            t.current = e;
        }),
        S.useMemo(
            () =>
                (...n) => {
                    var r;
                    return (r = t.current) == null ? void 0 : r.call(t, ...n);
                },
            []
        )
    );
}
function QS(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e);
    S.useEffect(() => {
        const r = (o) => {
            o.key === "Escape" && n(o);
        };
        return (
            t.addEventListener("keydown", r, { capture: !0 }),
            () => t.removeEventListener("keydown", r, { capture: !0 })
        );
    }, [n, t]);
}
var qS = "DismissableLayer",
    gc = "dismissableLayer.update",
    ZS = "dismissableLayer.pointerDownOutside",
    JS = "dismissableLayer.focusOutside",
    vp,
    Ty = S.createContext({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
    }),
    Hu = S.forwardRef((e, t) => {
        const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: o,
                onFocusOutside: i,
                onInteractOutside: s,
                onDismiss: a,
                ...l
            } = e,
            c = S.useContext(Ty),
            [u, d] = S.useState(null),
            f =
                (u == null ? void 0 : u.ownerDocument) ??
                (globalThis == null ? void 0 : globalThis.document),
            [, y] = S.useState({}),
            x = Nt(t, (P) => d(P)),
            g = Array.from(c.layers),
            [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
            p = g.indexOf(w),
            h = u ? g.indexOf(u) : -1,
            v = c.layersWithOutsidePointerEventsDisabled.size > 0,
            T = h >= p,
            C = tT((P) => {
                const E = P.target,
                    A = [...c.branches].some((N) => N.contains(E));
                !T ||
                    A ||
                    (o == null || o(P),
                    s == null || s(P),
                    P.defaultPrevented || a == null || a());
            }, f),
            b = nT((P) => {
                const E = P.target;
                [...c.branches].some((N) => N.contains(E)) ||
                    (i == null || i(P),
                    s == null || s(P),
                    P.defaultPrevented || a == null || a());
            }, f);
        return (
            QS((P) => {
                h === c.layers.size - 1 &&
                    (r == null || r(P),
                    !P.defaultPrevented && a && (P.preventDefault(), a()));
            }, f),
            S.useEffect(() => {
                if (u)
                    return (
                        n &&
                            (c.layersWithOutsidePointerEventsDisabled.size ===
                                0 &&
                                ((vp = f.body.style.pointerEvents),
                                (f.body.style.pointerEvents = "none")),
                            c.layersWithOutsidePointerEventsDisabled.add(u)),
                        c.layers.add(u),
                        xp(),
                        () => {
                            n &&
                                c.layersWithOutsidePointerEventsDisabled
                                    .size === 1 &&
                                (f.body.style.pointerEvents = vp);
                        }
                    );
            }, [u, f, n, c]),
            S.useEffect(
                () => () => {
                    u &&
                        (c.layers.delete(u),
                        c.layersWithOutsidePointerEventsDisabled.delete(u),
                        xp());
                },
                [u, c]
            ),
            S.useEffect(() => {
                const P = () => y({});
                return (
                    document.addEventListener(gc, P),
                    () => document.removeEventListener(gc, P)
                );
            }, []),
            m.jsx(Xe.div, {
                ...l,
                ref: x,
                style: {
                    pointerEvents: v ? (T ? "auto" : "none") : void 0,
                    ...e.style,
                },
                onFocusCapture: Se(e.onFocusCapture, b.onFocusCapture),
                onBlurCapture: Se(e.onBlurCapture, b.onBlurCapture),
                onPointerDownCapture: Se(
                    e.onPointerDownCapture,
                    C.onPointerDownCapture
                ),
            })
        );
    });
Hu.displayName = qS;
var eT = "DismissableLayerBranch",
    Cy = S.forwardRef((e, t) => {
        const n = S.useContext(Ty),
            r = S.useRef(null),
            o = Nt(t, r);
        return (
            S.useEffect(() => {
                const i = r.current;
                if (i)
                    return (
                        n.branches.add(i),
                        () => {
                            n.branches.delete(i);
                        }
                    );
            }, [n.branches]),
            m.jsx(Xe.div, { ...e, ref: o })
        );
    });
Cy.displayName = eT;
function tT(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e),
        r = S.useRef(!1),
        o = S.useRef(() => {});
    return (
        S.useEffect(() => {
            const i = (a) => {
                    if (a.target && !r.current) {
                        let l = function () {
                            Py(ZS, n, c, { discrete: !0 });
                        };
                        const c = { originalEvent: a };
                        a.pointerType === "touch"
                            ? (t.removeEventListener("click", o.current),
                              (o.current = l),
                              t.addEventListener("click", o.current, {
                                  once: !0,
                              }))
                            : l();
                    } else t.removeEventListener("click", o.current);
                    r.current = !1;
                },
                s = window.setTimeout(() => {
                    t.addEventListener("pointerdown", i);
                }, 0);
            return () => {
                window.clearTimeout(s),
                    t.removeEventListener("pointerdown", i),
                    t.removeEventListener("click", o.current);
            };
        }, [t, n]),
        { onPointerDownCapture: () => (r.current = !0) }
    );
}
function nT(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e),
        r = S.useRef(!1);
    return (
        S.useEffect(() => {
            const o = (i) => {
                i.target &&
                    !r.current &&
                    Py(JS, n, { originalEvent: i }, { discrete: !1 });
            };
            return (
                t.addEventListener("focusin", o),
                () => t.removeEventListener("focusin", o)
            );
        }, [t, n]),
        {
            onFocusCapture: () => (r.current = !0),
            onBlurCapture: () => (r.current = !1),
        }
    );
}
function xp() {
    const e = new CustomEvent(gc);
    document.dispatchEvent(e);
}
function Py(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }),
        r ? Sy(o, i) : o.dispatchEvent(i);
}
var rT = Hu,
    oT = Cy,
    rr =
        globalThis != null && globalThis.document
            ? S.useLayoutEffect
            : () => {},
    iT = "Portal",
    by = S.forwardRef((e, t) => {
        var a;
        const { container: n, ...r } = e,
            [o, i] = S.useState(!1);
        rr(() => i(!0), []);
        const s =
            n ||
            (o &&
                ((a = globalThis == null ? void 0 : globalThis.document) == null
                    ? void 0
                    : a.body));
        return s ? tS.createPortal(m.jsx(Xe.div, { ...r, ref: t }), s) : null;
    });
by.displayName = iT;
function sT(e, t) {
    return S.useReducer((n, r) => t[n][r] ?? n, e);
}
var Wu = (e) => {
    const { present: t, children: n } = e,
        r = aT(t),
        o =
            typeof n == "function"
                ? n({ present: r.isPresent })
                : S.Children.only(n),
        i = Nt(r.ref, lT(o));
    return typeof n == "function" || r.isPresent
        ? S.cloneElement(o, { ref: i })
        : null;
};
Wu.displayName = "Presence";
function aT(e) {
    const [t, n] = S.useState(),
        r = S.useRef({}),
        o = S.useRef(e),
        i = S.useRef("none"),
        s = e ? "mounted" : "unmounted",
        [a, l] = sT(s, {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended",
            },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
        });
    return (
        S.useEffect(() => {
            const c = Fi(r.current);
            i.current = a === "mounted" ? c : "none";
        }, [a]),
        rr(() => {
            const c = r.current,
                u = o.current;
            if (u !== e) {
                const f = i.current,
                    y = Fi(c);
                e
                    ? l("MOUNT")
                    : y === "none" ||
                      (c == null ? void 0 : c.display) === "none"
                    ? l("UNMOUNT")
                    : l(u && f !== y ? "ANIMATION_OUT" : "UNMOUNT"),
                    (o.current = e);
            }
        }, [e, l]),
        rr(() => {
            if (t) {
                let c;
                const u = t.ownerDocument.defaultView ?? window,
                    d = (y) => {
                        const g = Fi(r.current).includes(y.animationName);
                        if (
                            y.target === t &&
                            g &&
                            (l("ANIMATION_END"), !o.current)
                        ) {
                            const w = t.style.animationFillMode;
                            (t.style.animationFillMode = "forwards"),
                                (c = u.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" &&
                                        (t.style.animationFillMode = w);
                                }));
                        }
                    },
                    f = (y) => {
                        y.target === t && (i.current = Fi(r.current));
                    };
                return (
                    t.addEventListener("animationstart", f),
                    t.addEventListener("animationcancel", d),
                    t.addEventListener("animationend", d),
                    () => {
                        u.clearTimeout(c),
                            t.removeEventListener("animationstart", f),
                            t.removeEventListener("animationcancel", d),
                            t.removeEventListener("animationend", d);
                    }
                );
            } else l("ANIMATION_END");
        }, [t, l]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(a),
            ref: S.useCallback((c) => {
                c && (r.current = getComputedStyle(c)), n(c);
            }, []),
        }
    );
}
function Fi(e) {
    return (e == null ? void 0 : e.animationName) || "none";
}
function lT(e) {
    var r, o;
    let t =
            (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
                ? void 0
                : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t =
              (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
                  ? void 0
                  : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
function cT({ prop: e, defaultProp: t, onChange: n = () => {} }) {
    const [r, o] = uT({ defaultProp: t, onChange: n }),
        i = e !== void 0,
        s = i ? e : r,
        a = Ft(n),
        l = S.useCallback(
            (c) => {
                if (i) {
                    const d = typeof c == "function" ? c(e) : c;
                    d !== e && a(d);
                } else o(c);
            },
            [i, e, o, a]
        );
    return [s, l];
}
function uT({ defaultProp: e, onChange: t }) {
    const n = S.useState(e),
        [r] = n,
        o = S.useRef(r),
        i = Ft(t);
    return (
        S.useEffect(() => {
            o.current !== r && (i(r), (o.current = r));
        }, [r, o, i]),
        n
    );
}
var dT = "VisuallyHidden",
    da = S.forwardRef((e, t) =>
        m.jsx(Xe.span, {
            ...e,
            ref: t,
            style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style,
            },
        })
    );
da.displayName = dT;
var fT = da,
    Ku = "ToastProvider",
    [Gu, pT, hT] = YS("Toast"),
    [Ey, yA] = ua("Toast", [hT]),
    [mT, fa] = Ey(Ku),
    ky = (e) => {
        const {
                __scopeToast: t,
                label: n = "Notification",
                duration: r = 5e3,
                swipeDirection: o = "right",
                swipeThreshold: i = 50,
                children: s,
            } = e,
            [a, l] = S.useState(null),
            [c, u] = S.useState(0),
            d = S.useRef(!1),
            f = S.useRef(!1);
        return (
            n.trim() ||
                console.error(
                    `Invalid prop \`label\` supplied to \`${Ku}\`. Expected non-empty \`string\`.`
                ),
            m.jsx(Gu.Provider, {
                scope: t,
                children: m.jsx(mT, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: o,
                    swipeThreshold: i,
                    toastCount: c,
                    viewport: a,
                    onViewportChange: l,
                    onToastAdd: S.useCallback(() => u((y) => y + 1), []),
                    onToastRemove: S.useCallback(() => u((y) => y - 1), []),
                    isFocusedToastEscapeKeyDownRef: d,
                    isClosePausedRef: f,
                    children: s,
                }),
            })
        );
    };
ky.displayName = Ku;
var Ny = "ToastViewport",
    gT = ["F8"],
    yc = "toast.viewportPause",
    vc = "toast.viewportResume",
    Ay = S.forwardRef((e, t) => {
        const {
                __scopeToast: n,
                hotkey: r = gT,
                label: o = "Notifications ({hotkey})",
                ...i
            } = e,
            s = fa(Ny, n),
            a = pT(n),
            l = S.useRef(null),
            c = S.useRef(null),
            u = S.useRef(null),
            d = S.useRef(null),
            f = Nt(t, d, s.onViewportChange),
            y = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            x = s.toastCount > 0;
        S.useEffect(() => {
            const w = (p) => {
                var v;
                r.length !== 0 &&
                    r.every((T) => p[T] || p.code === T) &&
                    ((v = d.current) == null || v.focus());
            };
            return (
                document.addEventListener("keydown", w),
                () => document.removeEventListener("keydown", w)
            );
        }, [r]),
            S.useEffect(() => {
                const w = l.current,
                    p = d.current;
                if (x && w && p) {
                    const h = () => {
                            if (!s.isClosePausedRef.current) {
                                const b = new CustomEvent(yc);
                                p.dispatchEvent(b),
                                    (s.isClosePausedRef.current = !0);
                            }
                        },
                        v = () => {
                            if (s.isClosePausedRef.current) {
                                const b = new CustomEvent(vc);
                                p.dispatchEvent(b),
                                    (s.isClosePausedRef.current = !1);
                            }
                        },
                        T = (b) => {
                            !w.contains(b.relatedTarget) && v();
                        },
                        C = () => {
                            w.contains(document.activeElement) || v();
                        };
                    return (
                        w.addEventListener("focusin", h),
                        w.addEventListener("focusout", T),
                        w.addEventListener("pointermove", h),
                        w.addEventListener("pointerleave", C),
                        window.addEventListener("blur", h),
                        window.addEventListener("focus", v),
                        () => {
                            w.removeEventListener("focusin", h),
                                w.removeEventListener("focusout", T),
                                w.removeEventListener("pointermove", h),
                                w.removeEventListener("pointerleave", C),
                                window.removeEventListener("blur", h),
                                window.removeEventListener("focus", v);
                        }
                    );
                }
            }, [x, s.isClosePausedRef]);
        const g = S.useCallback(
            ({ tabbingDirection: w }) => {
                const h = a().map((v) => {
                    const T = v.ref.current,
                        C = [T, ...AT(T)];
                    return w === "forwards" ? C : C.reverse();
                });
                return (w === "forwards" ? h.reverse() : h).flat();
            },
            [a]
        );
        return (
            S.useEffect(() => {
                const w = d.current;
                if (w) {
                    const p = (h) => {
                        var C, b, P;
                        const v = h.altKey || h.ctrlKey || h.metaKey;
                        if (h.key === "Tab" && !v) {
                            const E = document.activeElement,
                                A = h.shiftKey;
                            if (h.target === w && A) {
                                (C = c.current) == null || C.focus();
                                return;
                            }
                            const D = g({
                                    tabbingDirection: A
                                        ? "backwards"
                                        : "forwards",
                                }),
                                U = D.findIndex((R) => R === E);
                            al(D.slice(U + 1))
                                ? h.preventDefault()
                                : A
                                ? (b = c.current) == null || b.focus()
                                : (P = u.current) == null || P.focus();
                        }
                    };
                    return (
                        w.addEventListener("keydown", p),
                        () => w.removeEventListener("keydown", p)
                    );
                }
            }, [a, g]),
            m.jsxs(oT, {
                ref: l,
                role: "region",
                "aria-label": o.replace("{hotkey}", y),
                tabIndex: -1,
                style: { pointerEvents: x ? void 0 : "none" },
                children: [
                    x &&
                        m.jsx(xc, {
                            ref: c,
                            onFocusFromOutsideViewport: () => {
                                const w = g({ tabbingDirection: "forwards" });
                                al(w);
                            },
                        }),
                    m.jsx(Gu.Slot, {
                        scope: n,
                        children: m.jsx(Xe.ol, { tabIndex: -1, ...i, ref: f }),
                    }),
                    x &&
                        m.jsx(xc, {
                            ref: u,
                            onFocusFromOutsideViewport: () => {
                                const w = g({ tabbingDirection: "backwards" });
                                al(w);
                            },
                        }),
                ],
            })
        );
    });
Ay.displayName = Ny;
var Ry = "ToastFocusProxy",
    xc = S.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
            i = fa(Ry, n);
        return m.jsx(da, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: { position: "fixed" },
            onFocus: (s) => {
                var c;
                const a = s.relatedTarget;
                !((c = i.viewport) != null && c.contains(a)) && r();
            },
        });
    });
xc.displayName = Ry;
var pa = "Toast",
    yT = "toast.swipeStart",
    vT = "toast.swipeMove",
    xT = "toast.swipeCancel",
    wT = "toast.swipeEnd",
    jy = S.forwardRef((e, t) => {
        const {
                forceMount: n,
                open: r,
                defaultOpen: o,
                onOpenChange: i,
                ...s
            } = e,
            [a = !0, l] = cT({ prop: r, defaultProp: o, onChange: i });
        return m.jsx(Wu, {
            present: n || a,
            children: m.jsx(CT, {
                open: a,
                ...s,
                ref: t,
                onClose: () => l(!1),
                onPause: Ft(e.onPause),
                onResume: Ft(e.onResume),
                onSwipeStart: Se(e.onSwipeStart, (c) => {
                    c.currentTarget.setAttribute("data-swipe", "start");
                }),
                onSwipeMove: Se(e.onSwipeMove, (c) => {
                    const { x: u, y: d } = c.detail.delta;
                    c.currentTarget.setAttribute("data-swipe", "move"),
                        c.currentTarget.style.setProperty(
                            "--radix-toast-swipe-move-x",
                            `${u}px`
                        ),
                        c.currentTarget.style.setProperty(
                            "--radix-toast-swipe-move-y",
                            `${d}px`
                        );
                }),
                onSwipeCancel: Se(e.onSwipeCancel, (c) => {
                    c.currentTarget.setAttribute("data-swipe", "cancel"),
                        c.currentTarget.style.removeProperty(
                            "--radix-toast-swipe-move-x"
                        ),
                        c.currentTarget.style.removeProperty(
                            "--radix-toast-swipe-move-y"
                        ),
                        c.currentTarget.style.removeProperty(
                            "--radix-toast-swipe-end-x"
                        ),
                        c.currentTarget.style.removeProperty(
                            "--radix-toast-swipe-end-y"
                        );
                }),
                onSwipeEnd: Se(e.onSwipeEnd, (c) => {
                    const { x: u, y: d } = c.detail.delta;
                    c.currentTarget.setAttribute("data-swipe", "end"),
                        c.currentTarget.style.removeProperty(
                            "--radix-toast-swipe-move-x"
                        ),
                        c.currentTarget.style.removeProperty(
                            "--radix-toast-swipe-move-y"
                        ),
                        c.currentTarget.style.setProperty(
                            "--radix-toast-swipe-end-x",
                            `${u}px`
                        ),
                        c.currentTarget.style.setProperty(
                            "--radix-toast-swipe-end-y",
                            `${d}px`
                        ),
                        l(!1);
                }),
            }),
        });
    });
jy.displayName = pa;
var [ST, TT] = Ey(pa, { onClose() {} }),
    CT = S.forwardRef((e, t) => {
        const {
                __scopeToast: n,
                type: r = "foreground",
                duration: o,
                open: i,
                onClose: s,
                onEscapeKeyDown: a,
                onPause: l,
                onResume: c,
                onSwipeStart: u,
                onSwipeMove: d,
                onSwipeCancel: f,
                onSwipeEnd: y,
                ...x
            } = e,
            g = fa(pa, n),
            [w, p] = S.useState(null),
            h = Nt(t, (R) => p(R)),
            v = S.useRef(null),
            T = S.useRef(null),
            C = o || g.duration,
            b = S.useRef(0),
            P = S.useRef(C),
            E = S.useRef(0),
            { onToastAdd: A, onToastRemove: N } = g,
            L = Ft(() => {
                var $;
                (w == null ? void 0 : w.contains(document.activeElement)) &&
                    (($ = g.viewport) == null || $.focus()),
                    s();
            }),
            D = S.useCallback(
                (R) => {
                    !R ||
                        R === 1 / 0 ||
                        (window.clearTimeout(E.current),
                        (b.current = new Date().getTime()),
                        (E.current = window.setTimeout(L, R)));
                },
                [L]
            );
        S.useEffect(() => {
            const R = g.viewport;
            if (R) {
                const $ = () => {
                        D(P.current), c == null || c();
                    },
                    F = () => {
                        const _ = new Date().getTime() - b.current;
                        (P.current = P.current - _),
                            window.clearTimeout(E.current),
                            l == null || l();
                    };
                return (
                    R.addEventListener(yc, F),
                    R.addEventListener(vc, $),
                    () => {
                        R.removeEventListener(yc, F),
                            R.removeEventListener(vc, $);
                    }
                );
            }
        }, [g.viewport, C, l, c, D]),
            S.useEffect(() => {
                i && !g.isClosePausedRef.current && D(C);
            }, [i, C, g.isClosePausedRef, D]),
            S.useEffect(() => (A(), () => N()), [A, N]);
        const U = S.useMemo(() => (w ? Vy(w) : null), [w]);
        return g.viewport
            ? m.jsxs(m.Fragment, {
                  children: [
                      U &&
                          m.jsx(PT, {
                              __scopeToast: n,
                              role: "status",
                              "aria-live":
                                  r === "foreground" ? "assertive" : "polite",
                              "aria-atomic": !0,
                              children: U,
                          }),
                      m.jsx(ST, {
                          scope: n,
                          onClose: L,
                          children: hi.createPortal(
                              m.jsx(Gu.ItemSlot, {
                                  scope: n,
                                  children: m.jsx(rT, {
                                      asChild: !0,
                                      onEscapeKeyDown: Se(a, () => {
                                          g.isFocusedToastEscapeKeyDownRef
                                              .current || L(),
                                              (g.isFocusedToastEscapeKeyDownRef.current =
                                                  !1);
                                      }),
                                      children: m.jsx(Xe.li, {
                                          role: "status",
                                          "aria-live": "off",
                                          "aria-atomic": !0,
                                          tabIndex: 0,
                                          "data-state": i ? "open" : "closed",
                                          "data-swipe-direction":
                                              g.swipeDirection,
                                          ...x,
                                          ref: h,
                                          style: {
                                              userSelect: "none",
                                              touchAction: "none",
                                              ...e.style,
                                          },
                                          onKeyDown: Se(e.onKeyDown, (R) => {
                                              R.key === "Escape" &&
                                                  (a == null ||
                                                      a(R.nativeEvent),
                                                  R.nativeEvent
                                                      .defaultPrevented ||
                                                      ((g.isFocusedToastEscapeKeyDownRef.current =
                                                          !0),
                                                      L()));
                                          }),
                                          onPointerDown: Se(
                                              e.onPointerDown,
                                              (R) => {
                                                  R.button === 0 &&
                                                      (v.current = {
                                                          x: R.clientX,
                                                          y: R.clientY,
                                                      });
                                              }
                                          ),
                                          onPointerMove: Se(
                                              e.onPointerMove,
                                              (R) => {
                                                  if (!v.current) return;
                                                  const $ =
                                                          R.clientX -
                                                          v.current.x,
                                                      F =
                                                          R.clientY -
                                                          v.current.y,
                                                      _ = !!T.current,
                                                      k = [
                                                          "left",
                                                          "right",
                                                      ].includes(
                                                          g.swipeDirection
                                                      ),
                                                      M = [
                                                          "left",
                                                          "up",
                                                      ].includes(
                                                          g.swipeDirection
                                                      )
                                                          ? Math.min
                                                          : Math.max,
                                                      O = k ? M(0, $) : 0,
                                                      z = k ? 0 : M(0, F),
                                                      K =
                                                          R.pointerType ===
                                                          "touch"
                                                              ? 10
                                                              : 2,
                                                      fe = { x: O, y: z },
                                                      ce = {
                                                          originalEvent: R,
                                                          delta: fe,
                                                      };
                                                  _
                                                      ? ((T.current = fe),
                                                        zi(vT, d, ce, {
                                                            discrete: !1,
                                                        }))
                                                      : wp(
                                                            fe,
                                                            g.swipeDirection,
                                                            K
                                                        )
                                                      ? ((T.current = fe),
                                                        zi(yT, u, ce, {
                                                            discrete: !1,
                                                        }),
                                                        R.target.setPointerCapture(
                                                            R.pointerId
                                                        ))
                                                      : (Math.abs($) > K ||
                                                            Math.abs(F) > K) &&
                                                        (v.current = null);
                                              }
                                          ),
                                          onPointerUp: Se(
                                              e.onPointerUp,
                                              (R) => {
                                                  const $ = T.current,
                                                      F = R.target;
                                                  if (
                                                      (F.hasPointerCapture(
                                                          R.pointerId
                                                      ) &&
                                                          F.releasePointerCapture(
                                                              R.pointerId
                                                          ),
                                                      (T.current = null),
                                                      (v.current = null),
                                                      $)
                                                  ) {
                                                      const _ = R.currentTarget,
                                                          k = {
                                                              originalEvent: R,
                                                              delta: $,
                                                          };
                                                      wp(
                                                          $,
                                                          g.swipeDirection,
                                                          g.swipeThreshold
                                                      )
                                                          ? zi(wT, y, k, {
                                                                discrete: !0,
                                                            })
                                                          : zi(xT, f, k, {
                                                                discrete: !0,
                                                            }),
                                                          _.addEventListener(
                                                              "click",
                                                              (M) =>
                                                                  M.preventDefault(),
                                                              { once: !0 }
                                                          );
                                                  }
                                              }
                                          ),
                                      }),
                                  }),
                              }),
                              g.viewport
                          ),
                      }),
                  ],
              })
            : null;
    }),
    PT = (e) => {
        const { __scopeToast: t, children: n, ...r } = e,
            o = fa(pa, t),
            [i, s] = S.useState(!1),
            [a, l] = S.useState(!1);
        return (
            kT(() => s(!0)),
            S.useEffect(() => {
                const c = window.setTimeout(() => l(!0), 1e3);
                return () => window.clearTimeout(c);
            }, []),
            a
                ? null
                : m.jsx(by, {
                      asChild: !0,
                      children: m.jsx(da, {
                          ...r,
                          children:
                              i &&
                              m.jsxs(m.Fragment, {
                                  children: [o.label, " ", n],
                              }),
                      }),
                  })
        );
    },
    bT = "ToastTitle",
    My = S.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return m.jsx(Xe.div, { ...r, ref: t });
    });
My.displayName = bT;
var ET = "ToastDescription",
    Ly = S.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return m.jsx(Xe.div, { ...r, ref: t });
    });
Ly.displayName = ET;
var Dy = "ToastAction",
    Oy = S.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim()
            ? m.jsx(_y, {
                  altText: n,
                  asChild: !0,
                  children: m.jsx(Yu, { ...r, ref: t }),
              })
            : (console.error(
                  `Invalid prop \`altText\` supplied to \`${Dy}\`. Expected non-empty \`string\`.`
              ),
              null);
    });
Oy.displayName = Dy;
var Iy = "ToastClose",
    Yu = S.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e,
            o = TT(Iy, n);
        return m.jsx(_y, {
            asChild: !0,
            children: m.jsx(Xe.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: Se(e.onClick, o.onClose),
            }),
        });
    });
Yu.displayName = Iy;
var _y = S.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return m.jsx(Xe.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t,
    });
});
function Vy(e) {
    const t = [];
    return (
        Array.from(e.childNodes).forEach((r) => {
            if (
                (r.nodeType === r.TEXT_NODE &&
                    r.textContent &&
                    t.push(r.textContent),
                NT(r))
            ) {
                const o =
                        r.ariaHidden || r.hidden || r.style.display === "none",
                    i = r.dataset.radixToastAnnounceExclude === "";
                if (!o)
                    if (i) {
                        const s = r.dataset.radixToastAnnounceAlt;
                        s && t.push(s);
                    } else t.push(...Vy(r));
            }
        }),
        t
    );
}
function zi(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }),
        r ? Sy(o, i) : o.dispatchEvent(i);
}
var wp = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function kT(e = () => {}) {
    const t = Ft(e);
    rr(() => {
        let n = 0,
            r = 0;
        return (
            (n = window.requestAnimationFrame(
                () => (r = window.requestAnimationFrame(t))
            )),
            () => {
                window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
            }
        );
    }, [t]);
}
function NT(e) {
    return e.nodeType === e.ELEMENT_NODE;
}
function AT(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (r) => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o
                    ? NodeFilter.FILTER_SKIP
                    : r.tabIndex >= 0
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_SKIP;
            },
        });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
}
function al(e) {
    const t = document.activeElement;
    return e.some((n) =>
        n === t ? !0 : (n.focus(), document.activeElement !== t)
    );
}
var RT = ky,
    Fy = Ay,
    zy = jy,
    By = My,
    $y = Ly,
    Uy = Oy,
    Hy = Yu;
function Wy(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Wy(e[t])) && (r && (r += " "), (r += n));
        } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
}
function Ky() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Wy(e)) && (r && (r += " "), (r += t));
    return r;
}
const Sp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    Tp = Ky,
    Xu = (e, t) => (n) => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return Tp(
                e,
                n == null ? void 0 : n.class,
                n == null ? void 0 : n.className
            );
        const { variants: o, defaultVariants: i } = t,
            s = Object.keys(o).map((c) => {
                const u = n == null ? void 0 : n[c],
                    d = i == null ? void 0 : i[c];
                if (u === null) return null;
                const f = Sp(u) || Sp(d);
                return o[c][f];
            }),
            a =
                n &&
                Object.entries(n).reduce((c, u) => {
                    let [d, f] = u;
                    return f === void 0 || (c[d] = f), c;
                }, {}),
            l =
                t == null || (r = t.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((c, u) => {
                          let { class: d, className: f, ...y } = u;
                          return Object.entries(y).every((x) => {
                              let [g, w] = x;
                              return Array.isArray(w)
                                  ? w.includes({ ...i, ...a }[g])
                                  : { ...i, ...a }[g] === w;
                          })
                              ? [...c, d, f]
                              : c;
                      }, []);
        return Tp(
            e,
            s,
            l,
            n == null ? void 0 : n.class,
            n == null ? void 0 : n.className
        );
    };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Gy = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var MT = {
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
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LT = S.forwardRef(
    (
        {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: r,
            className: o = "",
            children: i,
            iconNode: s,
            ...a
        },
        l
    ) =>
        S.createElement(
            "svg",
            {
                ref: l,
                ...MT,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
                className: Gy("lucide", o),
                ...a,
            },
            [
                ...s.map(([c, u]) => S.createElement(c, u)),
                ...(Array.isArray(i) ? i : [i]),
            ]
        )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gt = (e, t) => {
    const n = S.forwardRef(({ className: r, ...o }, i) =>
        S.createElement(LT, {
            ref: i,
            iconNode: t,
            className: Gy(`lucide-${jT(e)}`, r),
            ...o,
        })
    );
    return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wc = gt("ArrowLeft", [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DT = gt("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OT = gt("CircleAlert", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IT = gt("ExternalLink", [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
        },
    ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qu = gt("Github", [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef",
        },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _T = gt("Linkedin", [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f",
        },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sc = gt("Mail", [
    [
        "rect",
        { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VT = gt("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z",
        },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FT = gt("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zT = gt("PlaneTakeoff", [
    ["path", { d: "M2 22h20", key: "272qi7" }],
    [
        "path",
        {
            d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",
            key: "fkigj9",
        },
    ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yy = gt("Play", [
    ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xy = gt("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    qu = "-",
    BT = (e) => {
        const t = UT(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } =
                e;
        return {
            getClassGroupId: (s) => {
                const a = s.split(qu);
                return (
                    a[0] === "" && a.length !== 1 && a.shift(),
                    Qy(a, t) || $T(s)
                );
            },
            getConflictingClassGroupIds: (s, a) => {
                const l = n[s] || [];
                return a && r[s] ? [...l, ...r[s]] : l;
            },
        };
    },
    Qy = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? Qy(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(qu);
        return (s = t.validators.find(({ validator: a }) => a(i))) == null
            ? void 0
            : s.classGroupId;
    },
    Cp = /^\[(.+)\]$/,
    $T = (e) => {
        if (Cp.test(e)) {
            const t = Cp.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
        }
    },
    UT = (e) => {
        const { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
        return (
            WT(Object.entries(e.classGroups), n).forEach(([i, s]) => {
                Tc(s, r, i, t);
            }),
            r
        );
    },
    Tc = (e, t, n, r) => {
        e.forEach((o) => {
            if (typeof o == "string") {
                const i = o === "" ? t : Pp(t, o);
                i.classGroupId = n;
                return;
            }
            if (typeof o == "function") {
                if (HT(o)) {
                    Tc(o(r), t, n, r);
                    return;
                }
                t.validators.push({ validator: o, classGroupId: n });
                return;
            }
            Object.entries(o).forEach(([i, s]) => {
                Tc(s, Pp(t, i), n, r);
            });
        });
    },
    Pp = (e, t) => {
        let n = e;
        return (
            t.split(qu).forEach((r) => {
                n.nextPart.has(r) ||
                    n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
                    (n = n.nextPart.get(r));
            }),
            n
        );
    },
    HT = (e) => e.isThemeGetter,
    WT = (e, t) =>
        t
            ? e.map(([n, r]) => {
                  const o = r.map((i) =>
                      typeof i == "string"
                          ? t + i
                          : typeof i == "object"
                          ? Object.fromEntries(
                                Object.entries(i).map(([s, a]) => [t + s, a])
                            )
                          : i
                  );
                  return [n, o];
              })
            : e,
    KT = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
            n = new Map(),
            r = new Map();
        const o = (i, s) => {
            n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s;
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s);
            },
        };
    },
    qy = "!",
    GT = (e) => {
        const { separator: t, experimentalParseClassName: n } = e,
            r = t.length === 1,
            o = t[0],
            i = t.length,
            s = (a) => {
                const l = [];
                let c = 0,
                    u = 0,
                    d;
                for (let w = 0; w < a.length; w++) {
                    let p = a[w];
                    if (c === 0) {
                        if (p === o && (r || a.slice(w, w + i) === t)) {
                            l.push(a.slice(u, w)), (u = w + i);
                            continue;
                        }
                        if (p === "/") {
                            d = w;
                            continue;
                        }
                    }
                    p === "[" ? c++ : p === "]" && c--;
                }
                const f = l.length === 0 ? a : a.substring(u),
                    y = f.startsWith(qy),
                    x = y ? f.substring(1) : f,
                    g = d && d > u ? d - u : void 0;
                return {
                    modifiers: l,
                    hasImportantModifier: y,
                    baseClassName: x,
                    maybePostfixModifierPosition: g,
                };
            };
        return n ? (a) => n({ className: a, parseClassName: s }) : s;
    },
    YT = (e) => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return (
            e.forEach((r) => {
                r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
            }),
            t.push(...n.sort()),
            t
        );
    },
    XT = (e) => ({ cache: KT(e.cacheSize), parseClassName: GT(e), ...BT(e) }),
    QT = /\s+/,
    qT = (e, t) => {
        const {
                parseClassName: n,
                getClassGroupId: r,
                getConflictingClassGroupIds: o,
            } = t,
            i = [],
            s = e.trim().split(QT);
        let a = "";
        for (let l = s.length - 1; l >= 0; l -= 1) {
            const c = s[l],
                {
                    modifiers: u,
                    hasImportantModifier: d,
                    baseClassName: f,
                    maybePostfixModifierPosition: y,
                } = n(c);
            let x = !!y,
                g = r(x ? f.substring(0, y) : f);
            if (!g) {
                if (!x) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (((g = r(f)), !g)) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                x = !1;
            }
            const w = YT(u).join(":"),
                p = d ? w + qy : w,
                h = p + g;
            if (i.includes(h)) continue;
            i.push(h);
            const v = o(g, x);
            for (let T = 0; T < v.length; ++T) {
                const C = v[T];
                i.push(p + C);
            }
            a = c + (a.length > 0 ? " " + a : a);
        }
        return a;
    };
function ZT() {
    let e = 0,
        t,
        n,
        r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Zy(t)) && (r && (r += " "), (r += n));
    return r;
}
const Zy = (e) => {
    if (typeof e == "string") return e;
    let t,
        n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Zy(e[r])) && (n && (n += " "), (n += t));
    return n;
};
function JT(e, ...t) {
    let n,
        r,
        o,
        i = s;
    function s(l) {
        const c = t.reduce((u, d) => d(u), e());
        return (n = XT(c)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l);
    }
    function a(l) {
        const c = r(l);
        if (c) return c;
        const u = qT(l, n);
        return o(l, u), u;
    }
    return function () {
        return i(ZT.apply(null, arguments));
    };
}
const J = (e) => {
        const t = (n) => n[e] || [];
        return (t.isThemeGetter = !0), t;
    },
    Jy = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    eC = /^\d+\/\d+$/,
    tC = new Set(["px", "full", "screen"]),
    nC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    rC =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    oC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    iC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    sC =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Ut = (e) => Dr(e) || tC.has(e) || eC.test(e),
    ln = (e) => Jr(e, "length", hC),
    Dr = (e) => !!e && !Number.isNaN(Number(e)),
    ll = (e) => Jr(e, "number", Dr),
    po = (e) => !!e && Number.isInteger(Number(e)),
    aC = (e) => e.endsWith("%") && Dr(e.slice(0, -1)),
    H = (e) => Jy.test(e),
    cn = (e) => nC.test(e),
    lC = new Set(["length", "size", "percentage"]),
    cC = (e) => Jr(e, lC, ev),
    uC = (e) => Jr(e, "position", ev),
    dC = new Set(["image", "url"]),
    fC = (e) => Jr(e, dC, gC),
    pC = (e) => Jr(e, "", mC),
    ho = () => !0,
    Jr = (e, t, n) => {
        const r = Jy.exec(e);
        return r
            ? r[1]
                ? typeof t == "string"
                    ? r[1] === t
                    : t.has(r[1])
                : n(r[2])
            : !1;
    },
    hC = (e) => rC.test(e) && !oC.test(e),
    ev = () => !1,
    mC = (e) => iC.test(e),
    gC = (e) => sC.test(e),
    yC = () => {
        const e = J("colors"),
            t = J("spacing"),
            n = J("blur"),
            r = J("brightness"),
            o = J("borderColor"),
            i = J("borderRadius"),
            s = J("borderSpacing"),
            a = J("borderWidth"),
            l = J("contrast"),
            c = J("grayscale"),
            u = J("hueRotate"),
            d = J("invert"),
            f = J("gap"),
            y = J("gradientColorStops"),
            x = J("gradientColorStopPositions"),
            g = J("inset"),
            w = J("margin"),
            p = J("opacity"),
            h = J("padding"),
            v = J("saturate"),
            T = J("scale"),
            C = J("sepia"),
            b = J("skew"),
            P = J("space"),
            E = J("translate"),
            A = () => ["auto", "contain", "none"],
            N = () => ["auto", "hidden", "clip", "visible", "scroll"],
            L = () => ["auto", H, t],
            D = () => [H, t],
            U = () => ["", Ut, ln],
            R = () => ["auto", Dr, H],
            $ = () => [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
            ],
            F = () => ["solid", "dashed", "dotted", "double", "none"],
            _ = () => [
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
            k = () => [
                "start",
                "end",
                "center",
                "between",
                "around",
                "evenly",
                "stretch",
            ],
            M = () => ["", "0", H],
            O = () => [
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column",
            ],
            z = () => [Dr, H];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [ho],
                spacing: [Ut, ln],
                blur: ["none", "", cn, H],
                brightness: z(),
                borderColor: [e],
                borderRadius: ["none", "", "full", cn, H],
                borderSpacing: D(),
                borderWidth: U(),
                contrast: z(),
                grayscale: M(),
                hueRotate: z(),
                invert: M(),
                gap: D(),
                gradientColorStops: [e],
                gradientColorStopPositions: [aC, ln],
                inset: L(),
                margin: L(),
                opacity: z(),
                padding: D(),
                saturate: z(),
                scale: z(),
                sepia: M(),
                skew: z(),
                space: D(),
                translate: D(),
            },
            classGroups: {
                aspect: [{ aspect: ["auto", "square", "video", H] }],
                container: ["container"],
                columns: [{ columns: [cn] }],
                "break-after": [{ "break-after": O() }],
                "break-before": [{ "break-before": O() }],
                "break-inside": [
                    {
                        "break-inside": [
                            "auto",
                            "avoid",
                            "avoid-page",
                            "avoid-column",
                        ],
                    },
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
                float: [{ float: ["right", "left", "none", "start", "end"] }],
                clear: [
                    {
                        clear: [
                            "left",
                            "right",
                            "both",
                            "none",
                            "start",
                            "end",
                        ],
                    },
                ],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [
                    {
                        object: [
                            "contain",
                            "cover",
                            "fill",
                            "none",
                            "scale-down",
                        ],
                    },
                ],
                "object-position": [{ object: [...$(), H] }],
                overflow: [{ overflow: N() }],
                "overflow-x": [{ "overflow-x": N() }],
                "overflow-y": [{ "overflow-y": N() }],
                overscroll: [{ overscroll: A() }],
                "overscroll-x": [{ "overscroll-x": A() }],
                "overscroll-y": [{ "overscroll-y": A() }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: [g] }],
                "inset-x": [{ "inset-x": [g] }],
                "inset-y": [{ "inset-y": [g] }],
                start: [{ start: [g] }],
                end: [{ end: [g] }],
                top: [{ top: [g] }],
                right: [{ right: [g] }],
                bottom: [{ bottom: [g] }],
                left: [{ left: [g] }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: ["auto", po, H] }],
                basis: [{ basis: L() }],
                "flex-direction": [
                    { flex: ["row", "row-reverse", "col", "col-reverse"] },
                ],
                "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                flex: [{ flex: ["1", "auto", "initial", "none", H] }],
                grow: [{ grow: M() }],
                shrink: [{ shrink: M() }],
                order: [{ order: ["first", "last", "none", po, H] }],
                "grid-cols": [{ "grid-cols": [ho] }],
                "col-start-end": [
                    { col: ["auto", { span: ["full", po, H] }, H] },
                ],
                "col-start": [{ "col-start": R() }],
                "col-end": [{ "col-end": R() }],
                "grid-rows": [{ "grid-rows": [ho] }],
                "row-start-end": [{ row: ["auto", { span: [po, H] }, H] }],
                "row-start": [{ "row-start": R() }],
                "row-end": [{ "row-end": R() }],
                "grid-flow": [
                    {
                        "grid-flow": [
                            "row",
                            "col",
                            "dense",
                            "row-dense",
                            "col-dense",
                        ],
                    },
                ],
                "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", H] }],
                "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", H] }],
                gap: [{ gap: [f] }],
                "gap-x": [{ "gap-x": [f] }],
                "gap-y": [{ "gap-y": [f] }],
                "justify-content": [{ justify: ["normal", ...k()] }],
                "justify-items": [
                    { "justify-items": ["start", "end", "center", "stretch"] },
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            "start",
                            "end",
                            "center",
                            "stretch",
                        ],
                    },
                ],
                "align-content": [{ content: ["normal", ...k(), "baseline"] }],
                "align-items": [
                    {
                        items: [
                            "start",
                            "end",
                            "center",
                            "baseline",
                            "stretch",
                        ],
                    },
                ],
                "align-self": [
                    {
                        self: [
                            "auto",
                            "start",
                            "end",
                            "center",
                            "stretch",
                            "baseline",
                        ],
                    },
                ],
                "place-content": [{ "place-content": [...k(), "baseline"] }],
                "place-items": [
                    {
                        "place-items": [
                            "start",
                            "end",
                            "center",
                            "baseline",
                            "stretch",
                        ],
                    },
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            "start",
                            "end",
                            "center",
                            "stretch",
                        ],
                    },
                ],
                p: [{ p: [h] }],
                px: [{ px: [h] }],
                py: [{ py: [h] }],
                ps: [{ ps: [h] }],
                pe: [{ pe: [h] }],
                pt: [{ pt: [h] }],
                pr: [{ pr: [h] }],
                pb: [{ pb: [h] }],
                pl: [{ pl: [h] }],
                m: [{ m: [w] }],
                mx: [{ mx: [w] }],
                my: [{ my: [w] }],
                ms: [{ ms: [w] }],
                me: [{ me: [w] }],
                mt: [{ mt: [w] }],
                mr: [{ mr: [w] }],
                mb: [{ mb: [w] }],
                ml: [{ ml: [w] }],
                "space-x": [{ "space-x": [P] }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": [P] }],
                "space-y-reverse": ["space-y-reverse"],
                w: [
                    {
                        w: [
                            "auto",
                            "min",
                            "max",
                            "fit",
                            "svw",
                            "lvw",
                            "dvw",
                            H,
                            t,
                        ],
                    },
                ],
                "min-w": [{ "min-w": [H, t, "min", "max", "fit"] }],
                "max-w": [
                    {
                        "max-w": [
                            H,
                            t,
                            "none",
                            "full",
                            "min",
                            "max",
                            "fit",
                            "prose",
                            { screen: [cn] },
                            cn,
                        ],
                    },
                ],
                h: [
                    {
                        h: [
                            H,
                            t,
                            "auto",
                            "min",
                            "max",
                            "fit",
                            "svh",
                            "lvh",
                            "dvh",
                        ],
                    },
                ],
                "min-h": [
                    {
                        "min-h": [
                            H,
                            t,
                            "min",
                            "max",
                            "fit",
                            "svh",
                            "lvh",
                            "dvh",
                        ],
                    },
                ],
                "max-h": [
                    {
                        "max-h": [
                            H,
                            t,
                            "min",
                            "max",
                            "fit",
                            "svh",
                            "lvh",
                            "dvh",
                        ],
                    },
                ],
                size: [{ size: [H, t, "auto", "min", "max", "fit"] }],
                "font-size": [{ text: ["base", cn, ln] }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [
                    {
                        font: [
                            "thin",
                            "extralight",
                            "light",
                            "normal",
                            "medium",
                            "semibold",
                            "bold",
                            "extrabold",
                            "black",
                            ll,
                        ],
                    },
                ],
                "font-family": [{ font: [ho] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [
                    {
                        tracking: [
                            "tighter",
                            "tight",
                            "normal",
                            "wide",
                            "wider",
                            "widest",
                            H,
                        ],
                    },
                ],
                "line-clamp": [{ "line-clamp": ["none", Dr, ll] }],
                leading: [
                    {
                        leading: [
                            "none",
                            "tight",
                            "snug",
                            "normal",
                            "relaxed",
                            "loose",
                            Ut,
                            H,
                        ],
                    },
                ],
                "list-image": [{ "list-image": ["none", H] }],
                "list-style-type": [{ list: ["none", "disc", "decimal", H] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "placeholder-color": [{ placeholder: [e] }],
                "placeholder-opacity": [{ "placeholder-opacity": [p] }],
                "text-alignment": [
                    {
                        text: [
                            "left",
                            "center",
                            "right",
                            "justify",
                            "start",
                            "end",
                        ],
                    },
                ],
                "text-color": [{ text: [e] }],
                "text-opacity": [{ "text-opacity": [p] }],
                "text-decoration": [
                    "underline",
                    "overline",
                    "line-through",
                    "no-underline",
                ],
                "text-decoration-style": [{ decoration: [...F(), "wavy"] }],
                "text-decoration-thickness": [
                    { decoration: ["auto", "from-font", Ut, ln] },
                ],
                "underline-offset": [{ "underline-offset": ["auto", Ut, H] }],
                "text-decoration-color": [{ decoration: [e] }],
                "text-transform": [
                    "uppercase",
                    "lowercase",
                    "capitalize",
                    "normal-case",
                ],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [
                    { text: ["wrap", "nowrap", "balance", "pretty"] },
                ],
                indent: [{ indent: D() }],
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
                            H,
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
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", H] }],
                "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                "bg-clip": [
                    { "bg-clip": ["border", "padding", "content", "text"] },
                ],
                "bg-opacity": [{ "bg-opacity": [p] }],
                "bg-origin": [
                    { "bg-origin": ["border", "padding", "content"] },
                ],
                "bg-position": [{ bg: [...$(), uC] }],
                "bg-repeat": [
                    {
                        bg: [
                            "no-repeat",
                            { repeat: ["", "x", "y", "round", "space"] },
                        ],
                    },
                ],
                "bg-size": [{ bg: ["auto", "cover", "contain", cC] }],
                "bg-image": [
                    {
                        bg: [
                            "none",
                            {
                                "gradient-to": [
                                    "t",
                                    "tr",
                                    "r",
                                    "br",
                                    "b",
                                    "bl",
                                    "l",
                                    "tl",
                                ],
                            },
                            fC,
                        ],
                    },
                ],
                "bg-color": [{ bg: [e] }],
                "gradient-from-pos": [{ from: [x] }],
                "gradient-via-pos": [{ via: [x] }],
                "gradient-to-pos": [{ to: [x] }],
                "gradient-from": [{ from: [y] }],
                "gradient-via": [{ via: [y] }],
                "gradient-to": [{ to: [y] }],
                rounded: [{ rounded: [i] }],
                "rounded-s": [{ "rounded-s": [i] }],
                "rounded-e": [{ "rounded-e": [i] }],
                "rounded-t": [{ "rounded-t": [i] }],
                "rounded-r": [{ "rounded-r": [i] }],
                "rounded-b": [{ "rounded-b": [i] }],
                "rounded-l": [{ "rounded-l": [i] }],
                "rounded-ss": [{ "rounded-ss": [i] }],
                "rounded-se": [{ "rounded-se": [i] }],
                "rounded-ee": [{ "rounded-ee": [i] }],
                "rounded-es": [{ "rounded-es": [i] }],
                "rounded-tl": [{ "rounded-tl": [i] }],
                "rounded-tr": [{ "rounded-tr": [i] }],
                "rounded-br": [{ "rounded-br": [i] }],
                "rounded-bl": [{ "rounded-bl": [i] }],
                "border-w": [{ border: [a] }],
                "border-w-x": [{ "border-x": [a] }],
                "border-w-y": [{ "border-y": [a] }],
                "border-w-s": [{ "border-s": [a] }],
                "border-w-e": [{ "border-e": [a] }],
                "border-w-t": [{ "border-t": [a] }],
                "border-w-r": [{ "border-r": [a] }],
                "border-w-b": [{ "border-b": [a] }],
                "border-w-l": [{ "border-l": [a] }],
                "border-opacity": [{ "border-opacity": [p] }],
                "border-style": [{ border: [...F(), "hidden"] }],
                "divide-x": [{ "divide-x": [a] }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": [a] }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{ "divide-opacity": [p] }],
                "divide-style": [{ divide: F() }],
                "border-color": [{ border: [o] }],
                "border-color-x": [{ "border-x": [o] }],
                "border-color-y": [{ "border-y": [o] }],
                "border-color-s": [{ "border-s": [o] }],
                "border-color-e": [{ "border-e": [o] }],
                "border-color-t": [{ "border-t": [o] }],
                "border-color-r": [{ "border-r": [o] }],
                "border-color-b": [{ "border-b": [o] }],
                "border-color-l": [{ "border-l": [o] }],
                "divide-color": [{ divide: [o] }],
                "outline-style": [{ outline: ["", ...F()] }],
                "outline-offset": [{ "outline-offset": [Ut, H] }],
                "outline-w": [{ outline: [Ut, ln] }],
                "outline-color": [{ outline: [e] }],
                "ring-w": [{ ring: U() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: [e] }],
                "ring-opacity": [{ "ring-opacity": [p] }],
                "ring-offset-w": [{ "ring-offset": [Ut, ln] }],
                "ring-offset-color": [{ "ring-offset": [e] }],
                shadow: [{ shadow: ["", "inner", "none", cn, pC] }],
                "shadow-color": [{ shadow: [ho] }],
                opacity: [{ opacity: [p] }],
                "mix-blend": [
                    { "mix-blend": [..._(), "plus-lighter", "plus-darker"] },
                ],
                "bg-blend": [{ "bg-blend": _() }],
                filter: [{ filter: ["", "none"] }],
                blur: [{ blur: [n] }],
                brightness: [{ brightness: [r] }],
                contrast: [{ contrast: [l] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", cn, H] }],
                grayscale: [{ grayscale: [c] }],
                "hue-rotate": [{ "hue-rotate": [u] }],
                invert: [{ invert: [d] }],
                saturate: [{ saturate: [v] }],
                sepia: [{ sepia: [C] }],
                "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                "backdrop-blur": [{ "backdrop-blur": [n] }],
                "backdrop-brightness": [{ "backdrop-brightness": [r] }],
                "backdrop-contrast": [{ "backdrop-contrast": [l] }],
                "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
                "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
                "backdrop-invert": [{ "backdrop-invert": [d] }],
                "backdrop-opacity": [{ "backdrop-opacity": [p] }],
                "backdrop-saturate": [{ "backdrop-saturate": [v] }],
                "backdrop-sepia": [{ "backdrop-sepia": [C] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": [s] }],
                "border-spacing-x": [{ "border-spacing-x": [s] }],
                "border-spacing-y": [{ "border-spacing-y": [s] }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [
                    {
                        transition: [
                            "none",
                            "all",
                            "",
                            "colors",
                            "opacity",
                            "shadow",
                            "transform",
                            H,
                        ],
                    },
                ],
                duration: [{ duration: z() }],
                ease: [{ ease: ["linear", "in", "out", "in-out", H] }],
                delay: [{ delay: z() }],
                animate: [
                    { animate: ["none", "spin", "ping", "pulse", "bounce", H] },
                ],
                transform: [{ transform: ["", "gpu", "none"] }],
                scale: [{ scale: [T] }],
                "scale-x": [{ "scale-x": [T] }],
                "scale-y": [{ "scale-y": [T] }],
                rotate: [{ rotate: [po, H] }],
                "translate-x": [{ "translate-x": [E] }],
                "translate-y": [{ "translate-y": [E] }],
                "skew-x": [{ "skew-x": [b] }],
                "skew-y": [{ "skew-y": [b] }],
                "transform-origin": [
                    {
                        origin: [
                            "center",
                            "top",
                            "top-right",
                            "right",
                            "bottom-right",
                            "bottom",
                            "bottom-left",
                            "left",
                            "top-left",
                            H,
                        ],
                    },
                ],
                accent: [{ accent: ["auto", e] }],
                appearance: [{ appearance: ["none", "auto"] }],
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
                            H,
                        ],
                    },
                ],
                "caret-color": [{ caret: [e] }],
                "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                resize: [{ resize: ["none", "y", "x", ""] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": D() }],
                "scroll-mx": [{ "scroll-mx": D() }],
                "scroll-my": [{ "scroll-my": D() }],
                "scroll-ms": [{ "scroll-ms": D() }],
                "scroll-me": [{ "scroll-me": D() }],
                "scroll-mt": [{ "scroll-mt": D() }],
                "scroll-mr": [{ "scroll-mr": D() }],
                "scroll-mb": [{ "scroll-mb": D() }],
                "scroll-ml": [{ "scroll-ml": D() }],
                "scroll-p": [{ "scroll-p": D() }],
                "scroll-px": [{ "scroll-px": D() }],
                "scroll-py": [{ "scroll-py": D() }],
                "scroll-ps": [{ "scroll-ps": D() }],
                "scroll-pe": [{ "scroll-pe": D() }],
                "scroll-pt": [{ "scroll-pt": D() }],
                "scroll-pr": [{ "scroll-pr": D() }],
                "scroll-pb": [{ "scroll-pb": D() }],
                "scroll-pl": [{ "scroll-pl": D() }],
                "snap-align": [
                    { snap: ["start", "end", "center", "align-none"] },
                ],
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
                        "will-change": [
                            "auto",
                            "scroll",
                            "contents",
                            "transform",
                            H,
                        ],
                    },
                ],
                fill: [{ fill: [e, "none"] }],
                "stroke-w": [{ stroke: [Ut, ln, ll] }],
                stroke: [{ stroke: [e, "none"] }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [
                    { "forced-color-adjust": ["auto", "none"] },
                ],
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: [
                    "inset-x",
                    "inset-y",
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
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
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
                    "border-w-s",
                    "border-w-e",
                    "border-w-t",
                    "border-w-r",
                    "border-w-b",
                    "border-w-l",
                ],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": [
                    "border-color-s",
                    "border-color-e",
                    "border-color-t",
                    "border-color-r",
                    "border-color-b",
                    "border-color-l",
                ],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": [
                    "scroll-mx",
                    "scroll-my",
                    "scroll-ms",
                    "scroll-me",
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
        };
    },
    vC = JT(yC);
function ve(...e) {
    return vC(Ky(e));
}
const xC = RT,
    tv = S.forwardRef(({ className: e, ...t }, n) =>
        m.jsx(Fy, {
            ref: n,
            className: ve(
                "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
                e
            ),
            ...t,
        })
    );
tv.displayName = Fy.displayName;
const wC = Xu(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        {
            variants: {
                variant: {
                    default: "border bg-background text-foreground",
                    destructive:
                        "destructive group border-destructive bg-destructive text-destructive-foreground",
                },
            },
            defaultVariants: { variant: "default" },
        }
    ),
    nv = S.forwardRef(({ className: e, variant: t, ...n }, r) =>
        m.jsx(zy, { ref: r, className: ve(wC({ variant: t }), e), ...n })
    );
nv.displayName = zy.displayName;
const SC = S.forwardRef(({ className: e, ...t }, n) =>
    m.jsx(Uy, {
        ref: n,
        className: ve(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
            e
        ),
        ...t,
    })
);
SC.displayName = Uy.displayName;
const rv = S.forwardRef(({ className: e, ...t }, n) =>
    m.jsx(Hy, {
        ref: n,
        className: ve(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e
        ),
        "toast-close": "",
        ...t,
        children: m.jsx(Xy, { className: "h-4 w-4" }),
    })
);
rv.displayName = Hy.displayName;
const ov = S.forwardRef(({ className: e, ...t }, n) =>
    m.jsx(By, { ref: n, className: ve("text-sm font-semibold", e), ...t })
);
ov.displayName = By.displayName;
const iv = S.forwardRef(({ className: e, ...t }, n) =>
    m.jsx($y, { ref: n, className: ve("text-sm opacity-90", e), ...t })
);
iv.displayName = $y.displayName;
function TC() {
    const { toasts: e } = zS();
    return m.jsxs(xC, {
        children: [
            e.map(function ({
                id: t,
                title: n,
                description: r,
                action: o,
                ...i
            }) {
                return m.jsxs(
                    nv,
                    {
                        ...i,
                        children: [
                            m.jsxs("div", {
                                className: "grid gap-1",
                                children: [
                                    n && m.jsx(ov, { children: n }),
                                    r && m.jsx(iv, { children: r }),
                                ],
                            }),
                            o,
                            m.jsx(rv, {}),
                        ],
                    },
                    t
                );
            }),
            m.jsx(tv, {}),
        ],
    });
}
const CC = ["top", "right", "bottom", "left"],
    Rn = Math.min,
    Ze = Math.max,
    Os = Math.round,
    Bi = Math.floor,
    It = (e) => ({ x: e, y: e }),
    PC = { left: "right", right: "left", bottom: "top", top: "bottom" },
    bC = { start: "end", end: "start" };
function Cc(e, t, n) {
    return Ze(e, Rn(t, n));
}
function nn(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function rn(e) {
    return e.split("-")[0];
}
function eo(e) {
    return e.split("-")[1];
}
function Zu(e) {
    return e === "x" ? "y" : "x";
}
function Ju(e) {
    return e === "y" ? "height" : "width";
}
function jn(e) {
    return ["top", "bottom"].includes(rn(e)) ? "y" : "x";
}
function ed(e) {
    return Zu(jn(e));
}
function EC(e, t, n) {
    n === void 0 && (n = !1);
    const r = eo(e),
        o = ed(e),
        i = Ju(o);
    let s =
        o === "x"
            ? r === (n ? "end" : "start")
                ? "right"
                : "left"
            : r === "start"
            ? "bottom"
            : "top";
    return t.reference[i] > t.floating[i] && (s = Is(s)), [s, Is(s)];
}
function kC(e) {
    const t = Is(e);
    return [Pc(e), t, Pc(t)];
}
function Pc(e) {
    return e.replace(/start|end/g, (t) => bC[t]);
}
function NC(e, t, n) {
    const r = ["left", "right"],
        o = ["right", "left"],
        i = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? (t ? o : r) : t ? r : o;
        case "left":
        case "right":
            return t ? i : s;
        default:
            return [];
    }
}
function AC(e, t, n, r) {
    const o = eo(e);
    let i = NC(rn(e), n === "start", r);
    return (
        o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Pc)))),
        i
    );
}
function Is(e) {
    return e.replace(/left|right|bottom|top/g, (t) => PC[t]);
}
function RC(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function sv(e) {
    return typeof e != "number"
        ? RC(e)
        : { top: e, right: e, bottom: e, left: e };
}
function _s(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n,
    };
}
function bp(e, t, n) {
    let { reference: r, floating: o } = e;
    const i = jn(t),
        s = ed(t),
        a = Ju(s),
        l = rn(t),
        c = i === "y",
        u = r.x + r.width / 2 - o.width / 2,
        d = r.y + r.height / 2 - o.height / 2,
        f = r[a] / 2 - o[a] / 2;
    let y;
    switch (l) {
        case "top":
            y = { x: u, y: r.y - o.height };
            break;
        case "bottom":
            y = { x: u, y: r.y + r.height };
            break;
        case "right":
            y = { x: r.x + r.width, y: d };
            break;
        case "left":
            y = { x: r.x - o.width, y: d };
            break;
        default:
            y = { x: r.x, y: r.y };
    }
    switch (eo(t)) {
        case "start":
            y[s] -= f * (n && c ? -1 : 1);
            break;
        case "end":
            y[s] += f * (n && c ? -1 : 1);
            break;
    }
    return y;
}
const jC = async (e, t, n) => {
    const {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: s,
        } = n,
        a = i.filter(Boolean),
        l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let c = await s.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: u, y: d } = bp(c, r, l),
        f = r,
        y = {},
        x = 0;
    for (let g = 0; g < a.length; g++) {
        const { name: w, fn: p } = a[g],
            {
                x: h,
                y: v,
                data: T,
                reset: C,
            } = await p({
                x: u,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: o,
                middlewareData: y,
                rects: c,
                platform: s,
                elements: { reference: e, floating: t },
            });
        (u = h ?? u),
            (d = v ?? d),
            (y = { ...y, [w]: { ...y[w], ...T } }),
            C &&
                x <= 50 &&
                (x++,
                typeof C == "object" &&
                    (C.placement && (f = C.placement),
                    C.rects &&
                        (c =
                            C.rects === !0
                                ? await s.getElementRects({
                                      reference: e,
                                      floating: t,
                                      strategy: o,
                                  })
                                : C.rects),
                    ({ x: u, y: d } = bp(c, f, l))),
                (g = -1));
    }
    return { x: u, y: d, placement: f, strategy: o, middlewareData: y };
};
async function ei(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
        {
            boundary: c = "clippingAncestors",
            rootBoundary: u = "viewport",
            elementContext: d = "floating",
            altBoundary: f = !1,
            padding: y = 0,
        } = nn(t, e),
        x = sv(y),
        w = a[f ? (d === "floating" ? "reference" : "floating") : d],
        p = _s(
            await i.getClippingRect({
                element:
                    (n = await (i.isElement == null
                        ? void 0
                        : i.isElement(w))) == null || n
                        ? w
                        : w.contextElement ||
                          (await (i.getDocumentElement == null
                              ? void 0
                              : i.getDocumentElement(a.floating))),
                boundary: c,
                rootBoundary: u,
                strategy: l,
            })
        ),
        h =
            d === "floating"
                ? {
                      x: r,
                      y: o,
                      width: s.floating.width,
                      height: s.floating.height,
                  }
                : s.reference,
        v = await (i.getOffsetParent == null
            ? void 0
            : i.getOffsetParent(a.floating)),
        T = (await (i.isElement == null ? void 0 : i.isElement(v)))
            ? (await (i.getScale == null ? void 0 : i.getScale(v))) || {
                  x: 1,
                  y: 1,
              }
            : { x: 1, y: 1 },
        C = _s(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await i.convertOffsetParentRelativeRectToViewportRelativeRect(
                      { elements: a, rect: h, offsetParent: v, strategy: l }
                  )
                : h
        );
    return {
        top: (p.top - C.top + x.top) / T.y,
        bottom: (C.bottom - p.bottom + x.bottom) / T.y,
        left: (p.left - C.left + x.left) / T.x,
        right: (C.right - p.right + x.right) / T.x,
    };
}
const MC = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    platform: s,
                    elements: a,
                    middlewareData: l,
                } = t,
                { element: c, padding: u = 0 } = nn(e, t) || {};
            if (c == null) return {};
            const d = sv(u),
                f = { x: n, y: r },
                y = ed(o),
                x = Ju(y),
                g = await s.getDimensions(c),
                w = y === "y",
                p = w ? "top" : "left",
                h = w ? "bottom" : "right",
                v = w ? "clientHeight" : "clientWidth",
                T = i.reference[x] + i.reference[y] - f[y] - i.floating[x],
                C = f[y] - i.reference[y],
                b = await (s.getOffsetParent == null
                    ? void 0
                    : s.getOffsetParent(c));
            let P = b ? b[v] : 0;
            (!P || !(await (s.isElement == null ? void 0 : s.isElement(b)))) &&
                (P = a.floating[v] || i.floating[x]);
            const E = T / 2 - C / 2,
                A = P / 2 - g[x] / 2 - 1,
                N = Rn(d[p], A),
                L = Rn(d[h], A),
                D = N,
                U = P - g[x] - L,
                R = P / 2 - g[x] / 2 + E,
                $ = Cc(D, R, U),
                F =
                    !l.arrow &&
                    eo(o) != null &&
                    R !== $ &&
                    i.reference[x] / 2 - (R < D ? N : L) - g[x] / 2 < 0,
                _ = F ? (R < D ? R - D : R - U) : 0;
            return {
                [y]: f[y] + _,
                data: {
                    [y]: $,
                    centerOffset: R - $ - _,
                    ...(F && { alignmentOffset: _ }),
                },
                reset: F,
            };
        },
    }),
    LC = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, r;
                    const {
                            placement: o,
                            middlewareData: i,
                            rects: s,
                            initialPlacement: a,
                            platform: l,
                            elements: c,
                        } = t,
                        {
                            mainAxis: u = !0,
                            crossAxis: d = !0,
                            fallbackPlacements: f,
                            fallbackStrategy: y = "bestFit",
                            fallbackAxisSideDirection: x = "none",
                            flipAlignment: g = !0,
                            ...w
                        } = nn(e, t);
                    if ((n = i.arrow) != null && n.alignmentOffset) return {};
                    const p = rn(o),
                        h = jn(a),
                        v = rn(a) === a,
                        T = await (l.isRTL == null
                            ? void 0
                            : l.isRTL(c.floating)),
                        C = f || (v || !g ? [Is(a)] : kC(a)),
                        b = x !== "none";
                    !f && b && C.push(...AC(a, g, x, T));
                    const P = [a, ...C],
                        E = await ei(t, w),
                        A = [];
                    let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                    if ((u && A.push(E[p]), d)) {
                        const R = EC(o, s, T);
                        A.push(E[R[0]], E[R[1]]);
                    }
                    if (
                        ((N = [...N, { placement: o, overflows: A }]),
                        !A.every((R) => R <= 0))
                    ) {
                        var L, D;
                        const R =
                                (((L = i.flip) == null ? void 0 : L.index) ||
                                    0) + 1,
                            $ = P[R];
                        if ($)
                            return {
                                data: { index: R, overflows: N },
                                reset: { placement: $ },
                            };
                        let F =
                            (D = N.filter((_) => _.overflows[0] <= 0).sort(
                                (_, k) => _.overflows[1] - k.overflows[1]
                            )[0]) == null
                                ? void 0
                                : D.placement;
                        if (!F)
                            switch (y) {
                                case "bestFit": {
                                    var U;
                                    const _ =
                                        (U = N.filter((k) => {
                                            if (b) {
                                                const M = jn(k.placement);
                                                return M === h || M === "y";
                                            }
                                            return !0;
                                        })
                                            .map((k) => [
                                                k.placement,
                                                k.overflows
                                                    .filter((M) => M > 0)
                                                    .reduce((M, O) => M + O, 0),
                                            ])
                                            .sort((k, M) => k[1] - M[1])[0]) ==
                                        null
                                            ? void 0
                                            : U[0];
                                    _ && (F = _);
                                    break;
                                }
                                case "initialPlacement":
                                    F = a;
                                    break;
                            }
                        if (o !== F) return { reset: { placement: F } };
                    }
                    return {};
                },
            }
        );
    };
function Ep(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width,
    };
}
function kp(e) {
    return CC.some((t) => e[t] >= 0);
}
const DC = function (e) {
    return (
        e === void 0 && (e = {}),
        {
            name: "hide",
            options: e,
            async fn(t) {
                const { rects: n } = t,
                    { strategy: r = "referenceHidden", ...o } = nn(e, t);
                switch (r) {
                    case "referenceHidden": {
                        const i = await ei(t, {
                                ...o,
                                elementContext: "reference",
                            }),
                            s = Ep(i, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: s,
                                referenceHidden: kp(s),
                            },
                        };
                    }
                    case "escaped": {
                        const i = await ei(t, { ...o, altBoundary: !0 }),
                            s = Ep(i, n.floating);
                        return { data: { escapedOffsets: s, escaped: kp(s) } };
                    }
                    default:
                        return {};
                }
            },
        }
    );
};
async function OC(e, t) {
    const { placement: n, platform: r, elements: o } = e,
        i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
        s = rn(n),
        a = eo(n),
        l = jn(n) === "y",
        c = ["left", "top"].includes(s) ? -1 : 1,
        u = i && l ? -1 : 1,
        d = nn(t, e);
    let {
        mainAxis: f,
        crossAxis: y,
        alignmentAxis: x,
    } = typeof d == "number"
        ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
        : {
              mainAxis: d.mainAxis || 0,
              crossAxis: d.crossAxis || 0,
              alignmentAxis: d.alignmentAxis,
          };
    return (
        a && typeof x == "number" && (y = a === "end" ? x * -1 : x),
        l ? { x: y * u, y: f * c } : { x: f * c, y: y * u }
    );
}
const IC = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, r;
                    const { x: o, y: i, placement: s, middlewareData: a } = t,
                        l = await OC(t, e);
                    return s ===
                        ((n = a.offset) == null ? void 0 : n.placement) &&
                        (r = a.arrow) != null &&
                        r.alignmentOffset
                        ? {}
                        : {
                              x: o + l.x,
                              y: i + l.y,
                              data: { ...l, placement: s },
                          };
                },
            }
        );
    },
    _C = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    const { x: n, y: r, placement: o } = t,
                        {
                            mainAxis: i = !0,
                            crossAxis: s = !1,
                            limiter: a = {
                                fn: (w) => {
                                    let { x: p, y: h } = w;
                                    return { x: p, y: h };
                                },
                            },
                            ...l
                        } = nn(e, t),
                        c = { x: n, y: r },
                        u = await ei(t, l),
                        d = jn(rn(o)),
                        f = Zu(d);
                    let y = c[f],
                        x = c[d];
                    if (i) {
                        const w = f === "y" ? "top" : "left",
                            p = f === "y" ? "bottom" : "right",
                            h = y + u[w],
                            v = y - u[p];
                        y = Cc(h, y, v);
                    }
                    if (s) {
                        const w = d === "y" ? "top" : "left",
                            p = d === "y" ? "bottom" : "right",
                            h = x + u[w],
                            v = x - u[p];
                        x = Cc(h, x, v);
                    }
                    const g = a.fn({ ...t, [f]: y, [d]: x });
                    return {
                        ...g,
                        data: {
                            x: g.x - n,
                            y: g.y - r,
                            enabled: { [f]: i, [d]: s },
                        },
                    };
                },
            }
        );
    },
    VC = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    const {
                            x: n,
                            y: r,
                            placement: o,
                            rects: i,
                            middlewareData: s,
                        } = t,
                        {
                            offset: a = 0,
                            mainAxis: l = !0,
                            crossAxis: c = !0,
                        } = nn(e, t),
                        u = { x: n, y: r },
                        d = jn(o),
                        f = Zu(d);
                    let y = u[f],
                        x = u[d];
                    const g = nn(a, t),
                        w =
                            typeof g == "number"
                                ? { mainAxis: g, crossAxis: 0 }
                                : { mainAxis: 0, crossAxis: 0, ...g };
                    if (l) {
                        const v = f === "y" ? "height" : "width",
                            T = i.reference[f] - i.floating[v] + w.mainAxis,
                            C = i.reference[f] + i.reference[v] - w.mainAxis;
                        y < T ? (y = T) : y > C && (y = C);
                    }
                    if (c) {
                        var p, h;
                        const v = f === "y" ? "width" : "height",
                            T = ["top", "left"].includes(rn(o)),
                            C =
                                i.reference[d] -
                                i.floating[v] +
                                ((T &&
                                    ((p = s.offset) == null ? void 0 : p[d])) ||
                                    0) +
                                (T ? 0 : w.crossAxis),
                            b =
                                i.reference[d] +
                                i.reference[v] +
                                (T
                                    ? 0
                                    : ((h = s.offset) == null
                                          ? void 0
                                          : h[d]) || 0) -
                                (T ? w.crossAxis : 0);
                        x < C ? (x = C) : x > b && (x = b);
                    }
                    return { [f]: y, [d]: x };
                },
            }
        );
    },
    FC = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "size",
                options: e,
                async fn(t) {
                    var n, r;
                    const {
                            placement: o,
                            rects: i,
                            platform: s,
                            elements: a,
                        } = t,
                        { apply: l = () => {}, ...c } = nn(e, t),
                        u = await ei(t, c),
                        d = rn(o),
                        f = eo(o),
                        y = jn(o) === "y",
                        { width: x, height: g } = i.floating;
                    let w, p;
                    d === "top" || d === "bottom"
                        ? ((w = d),
                          (p =
                              f ===
                              ((await (s.isRTL == null
                                  ? void 0
                                  : s.isRTL(a.floating)))
                                  ? "start"
                                  : "end")
                                  ? "left"
                                  : "right"))
                        : ((p = d), (w = f === "end" ? "top" : "bottom"));
                    const h = g - u.top - u.bottom,
                        v = x - u.left - u.right,
                        T = Rn(g - u[w], h),
                        C = Rn(x - u[p], v),
                        b = !t.middlewareData.shift;
                    let P = T,
                        E = C;
                    if (
                        ((n = t.middlewareData.shift) != null &&
                            n.enabled.x &&
                            (E = v),
                        (r = t.middlewareData.shift) != null &&
                            r.enabled.y &&
                            (P = h),
                        b && !f)
                    ) {
                        const N = Ze(u.left, 0),
                            L = Ze(u.right, 0),
                            D = Ze(u.top, 0),
                            U = Ze(u.bottom, 0);
                        y
                            ? (E =
                                  x -
                                  2 *
                                      (N !== 0 || L !== 0
                                          ? N + L
                                          : Ze(u.left, u.right)))
                            : (P =
                                  g -
                                  2 *
                                      (D !== 0 || U !== 0
                                          ? D + U
                                          : Ze(u.top, u.bottom)));
                    }
                    await l({ ...t, availableWidth: E, availableHeight: P });
                    const A = await s.getDimensions(a.floating);
                    return x !== A.width || g !== A.height
                        ? { reset: { rects: !0 } }
                        : {};
                },
            }
        );
    };
function ha() {
    return typeof window < "u";
}
function to(e) {
    return av(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
    var t;
    return (
        (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
        window
    );
}
function Bt(e) {
    var t;
    return (t = (av(e) ? e.ownerDocument : e.document) || window.document) ==
        null
        ? void 0
        : t.documentElement;
}
function av(e) {
    return ha() ? e instanceof Node || e instanceof tt(e).Node : !1;
}
function At(e) {
    return ha() ? e instanceof Element || e instanceof tt(e).Element : !1;
}
function zt(e) {
    return ha()
        ? e instanceof HTMLElement || e instanceof tt(e).HTMLElement
        : !1;
}
function Np(e) {
    return !ha() || typeof ShadowRoot > "u"
        ? !1
        : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
}
function mi(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = Rt(e);
    return (
        /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
        !["inline", "contents"].includes(o)
    );
}
function zC(e) {
    return ["table", "td", "th"].includes(to(e));
}
function ma(e) {
    return [":popover-open", ":modal"].some((t) => {
        try {
            return e.matches(t);
        } catch {
            return !1;
        }
    });
}
function td(e) {
    const t = nd(),
        n = At(e) ? Rt(e) : e;
    return (
        ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
            n[r] ? n[r] !== "none" : !1
        ) ||
        (n.containerType ? n.containerType !== "normal" : !1) ||
        (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
        (!t && (n.filter ? n.filter !== "none" : !1)) ||
        [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
        ].some((r) => (n.willChange || "").includes(r)) ||
        ["paint", "layout", "strict", "content"].some((r) =>
            (n.contain || "").includes(r)
        )
    );
}
function BC(e) {
    let t = Mn(e);
    for (; zt(t) && !Hr(t); ) {
        if (td(t)) return t;
        if (ma(t)) return null;
        t = Mn(t);
    }
    return null;
}
function nd() {
    return typeof CSS > "u" || !CSS.supports
        ? !1
        : CSS.supports("-webkit-backdrop-filter", "none");
}
function Hr(e) {
    return ["html", "body", "#document"].includes(to(e));
}
function Rt(e) {
    return tt(e).getComputedStyle(e);
}
function ga(e) {
    return At(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Mn(e) {
    if (to(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (Np(e) && e.host) || Bt(e);
    return Np(t) ? t.host : t;
}
function lv(e) {
    const t = Mn(e);
    return Hr(t)
        ? e.ownerDocument
            ? e.ownerDocument.body
            : e.body
        : zt(t) && mi(t)
        ? t
        : lv(t);
}
function ti(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = lv(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = tt(o);
    if (i) {
        const a = bc(s);
        return t.concat(
            s,
            s.visualViewport || [],
            mi(o) ? o : [],
            a && n ? ti(a) : []
        );
    }
    return t.concat(o, ti(o, [], n));
}
function bc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function cv(e) {
    const t = Rt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = zt(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        a = Os(n) !== i || Os(r) !== s;
    return a && ((n = i), (r = s)), { width: n, height: r, $: a };
}
function rd(e) {
    return At(e) ? e : e.contextElement;
}
function Or(e) {
    const t = rd(e);
    if (!zt(t)) return It(1);
    const n = t.getBoundingClientRect(),
        { width: r, height: o, $: i } = cv(t);
    let s = (i ? Os(n.width) : n.width) / r,
        a = (i ? Os(n.height) : n.height) / o;
    return (
        (!s || !Number.isFinite(s)) && (s = 1),
        (!a || !Number.isFinite(a)) && (a = 1),
        { x: s, y: a }
    );
}
const $C = It(0);
function uv(e) {
    const t = tt(e);
    return !nd() || !t.visualViewport
        ? $C
        : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function UC(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== tt(e)) ? !1 : t;
}
function or(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = rd(e);
    let s = It(1);
    t && (r ? At(r) && (s = Or(r)) : (s = Or(e)));
    const a = UC(i, n, r) ? uv(i) : It(0);
    let l = (o.left + a.x) / s.x,
        c = (o.top + a.y) / s.y,
        u = o.width / s.x,
        d = o.height / s.y;
    if (i) {
        const f = tt(i),
            y = r && At(r) ? tt(r) : r;
        let x = f,
            g = bc(x);
        for (; g && r && y !== x; ) {
            const w = Or(g),
                p = g.getBoundingClientRect(),
                h = Rt(g),
                v = p.left + (g.clientLeft + parseFloat(h.paddingLeft)) * w.x,
                T = p.top + (g.clientTop + parseFloat(h.paddingTop)) * w.y;
            (l *= w.x),
                (c *= w.y),
                (u *= w.x),
                (d *= w.y),
                (l += v),
                (c += T),
                (x = tt(g)),
                (g = bc(x));
        }
    }
    return _s({ width: u, height: d, x: l, y: c });
}
function od(e, t) {
    const n = ga(e).scrollLeft;
    return t ? t.left + n : or(Bt(e)).left + n;
}
function dv(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : od(e, r)),
        i = r.top + t.scrollTop;
    return { x: o, y: i };
}
function HC(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const i = o === "fixed",
        s = Bt(r),
        a = t ? ma(t.floating) : !1;
    if (r === s || (a && i)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
        c = It(1);
    const u = It(0),
        d = zt(r);
    if (
        (d || (!d && !i)) &&
        ((to(r) !== "body" || mi(s)) && (l = ga(r)), zt(r))
    ) {
        const y = or(r);
        (c = Or(r)), (u.x = y.x + r.clientLeft), (u.y = y.y + r.clientTop);
    }
    const f = s && !d && !i ? dv(s, l, !0) : It(0);
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
        y: n.y * c.y - l.scrollTop * c.y + u.y + f.y,
    };
}
function WC(e) {
    return Array.from(e.getClientRects());
}
function KC(e) {
    const t = Bt(e),
        n = ga(e),
        r = e.ownerDocument.body,
        o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + od(e);
    const a = -n.scrollTop;
    return (
        Rt(r).direction === "rtl" &&
            (s += Ze(t.clientWidth, r.clientWidth) - o),
        { width: o, height: i, x: s, y: a }
    );
}
function GC(e, t) {
    const n = tt(e),
        r = Bt(e),
        o = n.visualViewport;
    let i = r.clientWidth,
        s = r.clientHeight,
        a = 0,
        l = 0;
    if (o) {
        (i = o.width), (s = o.height);
        const c = nd();
        (!c || (c && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
    }
    return { width: i, height: s, x: a, y: l };
}
function YC(e, t) {
    const n = or(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = zt(e) ? Or(e) : It(1),
        s = e.clientWidth * i.x,
        a = e.clientHeight * i.y,
        l = o * i.x,
        c = r * i.y;
    return { width: s, height: a, x: l, y: c };
}
function Ap(e, t, n) {
    let r;
    if (t === "viewport") r = GC(e, n);
    else if (t === "document") r = KC(Bt(e));
    else if (At(t)) r = YC(t, n);
    else {
        const o = uv(e);
        r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
    }
    return _s(r);
}
function fv(e, t) {
    const n = Mn(e);
    return n === t || !At(n) || Hr(n)
        ? !1
        : Rt(n).position === "fixed" || fv(n, t);
}
function XC(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = ti(e, [], !1).filter((a) => At(a) && to(a) !== "body"),
        o = null;
    const i = Rt(e).position === "fixed";
    let s = i ? Mn(e) : e;
    for (; At(s) && !Hr(s); ) {
        const a = Rt(s),
            l = td(s);
        !l && a.position === "fixed" && (o = null),
            (
                i
                    ? !l && !o
                    : (!l &&
                          a.position === "static" &&
                          !!o &&
                          ["absolute", "fixed"].includes(o.position)) ||
                      (mi(s) && !l && fv(e, s))
            )
                ? (r = r.filter((u) => u !== s))
                : (o = a),
            (s = Mn(s));
    }
    return t.set(e, r), r;
}
function QC(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const s = [
            ...(n === "clippingAncestors"
                ? ma(t)
                    ? []
                    : XC(t, this._c)
                : [].concat(n)),
            r,
        ],
        a = s[0],
        l = s.reduce((c, u) => {
            const d = Ap(t, u, o);
            return (
                (c.top = Ze(d.top, c.top)),
                (c.right = Rn(d.right, c.right)),
                (c.bottom = Rn(d.bottom, c.bottom)),
                (c.left = Ze(d.left, c.left)),
                c
            );
        }, Ap(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top,
    };
}
function qC(e) {
    const { width: t, height: n } = cv(e);
    return { width: t, height: n };
}
function ZC(e, t, n) {
    const r = zt(t),
        o = Bt(t),
        i = n === "fixed",
        s = or(e, !0, i, t);
    let a = { scrollLeft: 0, scrollTop: 0 };
    const l = It(0);
    if (r || (!r && !i))
        if (((to(t) !== "body" || mi(o)) && (a = ga(t)), r)) {
            const f = or(t, !0, i, t);
            (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
        } else o && (l.x = od(o));
    const c = o && !r && !i ? dv(o, a) : It(0),
        u = s.left + a.scrollLeft - l.x - c.x,
        d = s.top + a.scrollTop - l.y - c.y;
    return { x: u, y: d, width: s.width, height: s.height };
}
function cl(e) {
    return Rt(e).position === "static";
}
function Rp(e, t) {
    if (!zt(e) || Rt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Bt(e) === n && (n = n.ownerDocument.body), n;
}
function pv(e, t) {
    const n = tt(e);
    if (ma(e)) return n;
    if (!zt(e)) {
        let o = Mn(e);
        for (; o && !Hr(o); ) {
            if (At(o) && !cl(o)) return o;
            o = Mn(o);
        }
        return n;
    }
    let r = Rp(e, t);
    for (; r && zC(r) && cl(r); ) r = Rp(r, t);
    return r && Hr(r) && cl(r) && !td(r) ? n : r || BC(e) || n;
}
const JC = async function (e) {
    const t = this.getOffsetParent || pv,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: ZC(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function eP(e) {
    return Rt(e).direction === "rtl";
}
const tP = {
    convertOffsetParentRelativeRectToViewportRelativeRect: HC,
    getDocumentElement: Bt,
    getClippingRect: QC,
    getOffsetParent: pv,
    getElementRects: JC,
    getClientRects: WC,
    getDimensions: qC,
    getScale: Or,
    isElement: At,
    isRTL: eP,
};
function hv(e, t) {
    return (
        e.x === t.x &&
        e.y === t.y &&
        e.width === t.width &&
        e.height === t.height
    );
}
function nP(e, t) {
    let n = null,
        r;
    const o = Bt(e);
    function i() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
    }
    function s(a, l) {
        a === void 0 && (a = !1), l === void 0 && (l = 1), i();
        const c = e.getBoundingClientRect(),
            { left: u, top: d, width: f, height: y } = c;
        if ((a || t(), !f || !y)) return;
        const x = Bi(d),
            g = Bi(o.clientWidth - (u + f)),
            w = Bi(o.clientHeight - (d + y)),
            p = Bi(u),
            v = {
                rootMargin: -x + "px " + -g + "px " + -w + "px " + -p + "px",
                threshold: Ze(0, Rn(1, l)) || 1,
            };
        let T = !0;
        function C(b) {
            const P = b[0].intersectionRatio;
            if (P !== l) {
                if (!T) return s();
                P
                    ? s(!1, P)
                    : (r = setTimeout(() => {
                          s(!1, 1e-7);
                      }, 1e3));
            }
            P === 1 && !hv(c, e.getBoundingClientRect()) && s(), (T = !1);
        }
        try {
            n = new IntersectionObserver(C, { ...v, root: o.ownerDocument });
        } catch {
            n = new IntersectionObserver(C, v);
        }
        n.observe(e);
    }
    return s(!0), i;
}
function rP(e, t, n, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: o = !0,
            ancestorResize: i = !0,
            elementResize: s = typeof ResizeObserver == "function",
            layoutShift: a = typeof IntersectionObserver == "function",
            animationFrame: l = !1,
        } = r,
        c = rd(e),
        u = o || i ? [...(c ? ti(c) : []), ...ti(t)] : [];
    u.forEach((p) => {
        o && p.addEventListener("scroll", n, { passive: !0 }),
            i && p.addEventListener("resize", n);
    });
    const d = c && a ? nP(c, n) : null;
    let f = -1,
        y = null;
    s &&
        ((y = new ResizeObserver((p) => {
            let [h] = p;
            h &&
                h.target === c &&
                y &&
                (y.unobserve(t),
                cancelAnimationFrame(f),
                (f = requestAnimationFrame(() => {
                    var v;
                    (v = y) == null || v.observe(t);
                }))),
                n();
        })),
        c && !l && y.observe(c),
        y.observe(t));
    let x,
        g = l ? or(e) : null;
    l && w();
    function w() {
        const p = or(e);
        g && !hv(g, p) && n(), (g = p), (x = requestAnimationFrame(w));
    }
    return (
        n(),
        () => {
            var p;
            u.forEach((h) => {
                o && h.removeEventListener("scroll", n),
                    i && h.removeEventListener("resize", n);
            }),
                d == null || d(),
                (p = y) == null || p.disconnect(),
                (y = null),
                l && cancelAnimationFrame(x);
        }
    );
}
const oP = IC,
    iP = _C,
    sP = LC,
    aP = FC,
    lP = DC,
    jp = MC,
    cP = VC,
    uP = (e, t, n) => {
        const r = new Map(),
            o = { platform: tP, ...n },
            i = { ...o.platform, _c: r };
        return jC(e, t, { ...o, platform: i });
    };
var ss = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function Vs(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!Vs(e[r], t[r])) return !1;
            return !0;
        }
        if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Vs(e[i], t[i])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function mv(e) {
    return typeof window > "u"
        ? 1
        : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Mp(e, t) {
    const n = mv(e);
    return Math.round(t * n) / n;
}
function ul(e) {
    const t = S.useRef(e);
    return (
        ss(() => {
            t.current = e;
        }),
        t
    );
}
function dP(e) {
    e === void 0 && (e = {});
    const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: o,
            elements: { reference: i, floating: s } = {},
            transform: a = !0,
            whileElementsMounted: l,
            open: c,
        } = e,
        [u, d] = S.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
        }),
        [f, y] = S.useState(r);
    Vs(f, r) || y(r);
    const [x, g] = S.useState(null),
        [w, p] = S.useState(null),
        h = S.useCallback((k) => {
            k !== b.current && ((b.current = k), g(k));
        }, []),
        v = S.useCallback((k) => {
            k !== P.current && ((P.current = k), p(k));
        }, []),
        T = i || x,
        C = s || w,
        b = S.useRef(null),
        P = S.useRef(null),
        E = S.useRef(u),
        A = l != null,
        N = ul(l),
        L = ul(o),
        D = ul(c),
        U = S.useCallback(() => {
            if (!b.current || !P.current) return;
            const k = { placement: t, strategy: n, middleware: f };
            L.current && (k.platform = L.current),
                uP(b.current, P.current, k).then((M) => {
                    const O = { ...M, isPositioned: D.current !== !1 };
                    R.current &&
                        !Vs(E.current, O) &&
                        ((E.current = O),
                        hi.flushSync(() => {
                            d(O);
                        }));
                });
        }, [f, t, n, L, D]);
    ss(() => {
        c === !1 &&
            E.current.isPositioned &&
            ((E.current.isPositioned = !1),
            d((k) => ({ ...k, isPositioned: !1 })));
    }, [c]);
    const R = S.useRef(!1);
    ss(
        () => (
            (R.current = !0),
            () => {
                R.current = !1;
            }
        ),
        []
    ),
        ss(() => {
            if ((T && (b.current = T), C && (P.current = C), T && C)) {
                if (N.current) return N.current(T, C, U);
                U();
            }
        }, [T, C, U, N, A]);
    const $ = S.useMemo(
            () => ({
                reference: b,
                floating: P,
                setReference: h,
                setFloating: v,
            }),
            [h, v]
        ),
        F = S.useMemo(() => ({ reference: T, floating: C }), [T, C]),
        _ = S.useMemo(() => {
            const k = { position: n, left: 0, top: 0 };
            if (!F.floating) return k;
            const M = Mp(F.floating, u.x),
                O = Mp(F.floating, u.y);
            return a
                ? {
                      ...k,
                      transform: "translate(" + M + "px, " + O + "px)",
                      ...(mv(F.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: M, top: O };
        }, [n, a, F.floating, u.x, u.y]);
    return S.useMemo(
        () => ({ ...u, update: U, refs: $, elements: F, floatingStyles: _ }),
        [u, U, $, F, _]
    );
}
const fP = (e) => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current");
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const { element: r, padding: o } =
                    typeof e == "function" ? e(n) : e;
                return r && t(r)
                    ? r.current != null
                        ? jp({ element: r.current, padding: o }).fn(n)
                        : {}
                    : r
                    ? jp({ element: r, padding: o }).fn(n)
                    : {};
            },
        };
    },
    pP = (e, t) => ({ ...oP(e), options: [e, t] }),
    hP = (e, t) => ({ ...iP(e), options: [e, t] }),
    mP = (e, t) => ({ ...cP(e), options: [e, t] }),
    gP = (e, t) => ({ ...sP(e), options: [e, t] }),
    yP = (e, t) => ({ ...aP(e), options: [e, t] }),
    vP = (e, t) => ({ ...lP(e), options: [e, t] }),
    xP = (e, t) => ({ ...fP(e), options: [e, t] });
var wP = "Arrow",
    gv = S.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...i } = e;
        return m.jsx(Xe.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
                ? n
                : m.jsx("polygon", { points: "0,0 30,0 15,10" }),
        });
    });
gv.displayName = wP;
var SP = gv;
function TP(e) {
    const [t, n] = S.useState(void 0);
    return (
        rr(() => {
            if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const r = new ResizeObserver((o) => {
                    if (!Array.isArray(o) || !o.length) return;
                    const i = o[0];
                    let s, a;
                    if ("borderBoxSize" in i) {
                        const l = i.borderBoxSize,
                            c = Array.isArray(l) ? l[0] : l;
                        (s = c.inlineSize), (a = c.blockSize);
                    } else (s = e.offsetWidth), (a = e.offsetHeight);
                    n({ width: s, height: a });
                });
                return (
                    r.observe(e, { box: "border-box" }), () => r.unobserve(e)
                );
            } else n(void 0);
        }, [e]),
        t
    );
}
var yv = "Popper",
    [vv, xv] = ua(yv),
    [vA, wv] = vv(yv),
    Sv = "PopperAnchor",
    Tv = S.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...o } = e,
            i = wv(Sv, n),
            s = S.useRef(null),
            a = Nt(t, s);
        return (
            S.useEffect(() => {
                i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
            }),
            r ? null : m.jsx(Xe.div, { ...o, ref: a })
        );
    });
Tv.displayName = Sv;
var id = "PopperContent",
    [CP, PP] = vv(id),
    Cv = S.forwardRef((e, t) => {
        var pe, Ce, st, Fe, q, V;
        const {
                __scopePopper: n,
                side: r = "bottom",
                sideOffset: o = 0,
                align: i = "center",
                alignOffset: s = 0,
                arrowPadding: a = 0,
                avoidCollisions: l = !0,
                collisionBoundary: c = [],
                collisionPadding: u = 0,
                sticky: d = "partial",
                hideWhenDetached: f = !1,
                updatePositionStrategy: y = "optimized",
                onPlaced: x,
                ...g
            } = e,
            w = wv(id, n),
            [p, h] = S.useState(null),
            v = Nt(t, (Y) => h(Y)),
            [T, C] = S.useState(null),
            b = TP(T),
            P = (b == null ? void 0 : b.width) ?? 0,
            E = (b == null ? void 0 : b.height) ?? 0,
            A = r + (i !== "center" ? "-" + i : ""),
            N =
                typeof u == "number"
                    ? u
                    : { top: 0, right: 0, bottom: 0, left: 0, ...u },
            L = Array.isArray(c) ? c : [c],
            D = L.length > 0,
            U = { padding: N, boundary: L.filter(EP), altBoundary: D },
            {
                refs: R,
                floatingStyles: $,
                placement: F,
                isPositioned: _,
                middlewareData: k,
            } = dP({
                strategy: "fixed",
                placement: A,
                whileElementsMounted: (...Y) =>
                    rP(...Y, { animationFrame: y === "always" }),
                elements: { reference: w.anchor },
                middleware: [
                    pP({ mainAxis: o + E, alignmentAxis: s }),
                    l &&
                        hP({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: d === "partial" ? mP() : void 0,
                            ...U,
                        }),
                    l && gP({ ...U }),
                    yP({
                        ...U,
                        apply: ({
                            elements: Y,
                            rects: re,
                            availableWidth: Ee,
                            availableHeight: at,
                        }) => {
                            const { width: vt, height: $t } = re.reference,
                                Qe = Y.floating.style;
                            Qe.setProperty(
                                "--radix-popper-available-width",
                                `${Ee}px`
                            ),
                                Qe.setProperty(
                                    "--radix-popper-available-height",
                                    `${at}px`
                                ),
                                Qe.setProperty(
                                    "--radix-popper-anchor-width",
                                    `${vt}px`
                                ),
                                Qe.setProperty(
                                    "--radix-popper-anchor-height",
                                    `${$t}px`
                                );
                        },
                    }),
                    T && xP({ element: T, padding: a }),
                    kP({ arrowWidth: P, arrowHeight: E }),
                    f && vP({ strategy: "referenceHidden", ...U }),
                ],
            }),
            [M, O] = Ev(F),
            z = Ft(x);
        rr(() => {
            _ && (z == null || z());
        }, [_, z]);
        const K = (pe = k.arrow) == null ? void 0 : pe.x,
            fe = (Ce = k.arrow) == null ? void 0 : Ce.y,
            ce = ((st = k.arrow) == null ? void 0 : st.centerOffset) !== 0,
            [yt, Ve] = S.useState();
        return (
            rr(() => {
                p && Ve(window.getComputedStyle(p).zIndex);
            }, [p]),
            m.jsx("div", {
                ref: R.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...$,
                    transform: _ ? $.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: yt,
                    "--radix-popper-transform-origin": [
                        (Fe = k.transformOrigin) == null ? void 0 : Fe.x,
                        (q = k.transformOrigin) == null ? void 0 : q.y,
                    ].join(" "),
                    ...(((V = k.hide) == null ? void 0 : V.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none",
                    }),
                },
                dir: e.dir,
                children: m.jsx(CP, {
                    scope: n,
                    placedSide: M,
                    onArrowChange: C,
                    arrowX: K,
                    arrowY: fe,
                    shouldHideArrow: ce,
                    children: m.jsx(Xe.div, {
                        "data-side": M,
                        "data-align": O,
                        ...g,
                        ref: v,
                        style: { ...g.style, animation: _ ? void 0 : "none" },
                    }),
                }),
            })
        );
    });
Cv.displayName = id;
var Pv = "PopperArrow",
    bP = { top: "bottom", right: "left", bottom: "top", left: "right" },
    bv = S.forwardRef(function (t, n) {
        const { __scopePopper: r, ...o } = t,
            i = PP(Pv, r),
            s = bP[i.placedSide];
        return m.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0",
                }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0,
            },
            children: m.jsx(SP, {
                ...o,
                ref: n,
                style: { ...o.style, display: "block" },
            }),
        });
    });
bv.displayName = Pv;
function EP(e) {
    return e !== null;
}
var kP = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, p, h;
        const { placement: n, rects: r, middlewareData: o } = t,
            s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
            a = s ? 0 : e.arrowWidth,
            l = s ? 0 : e.arrowHeight,
            [c, u] = Ev(n),
            d = { start: "0%", center: "50%", end: "100%" }[u],
            f = (((p = o.arrow) == null ? void 0 : p.x) ?? 0) + a / 2,
            y = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
        let x = "",
            g = "";
        return (
            c === "bottom"
                ? ((x = s ? d : `${f}px`), (g = `${-l}px`))
                : c === "top"
                ? ((x = s ? d : `${f}px`), (g = `${r.floating.height + l}px`))
                : c === "right"
                ? ((x = `${-l}px`), (g = s ? d : `${y}px`))
                : c === "left" &&
                  ((x = `${r.floating.width + l}px`), (g = s ? d : `${y}px`)),
            { data: { x, y: g } }
        );
    },
});
function Ev(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
}
var NP = Tv,
    AP = Cv,
    RP = bv,
    [ya, xA] = ua("Tooltip", [xv]),
    sd = xv(),
    kv = "TooltipProvider",
    jP = 700,
    Lp = "tooltip.open",
    [MP, Nv] = ya(kv),
    Av = (e) => {
        const {
                __scopeTooltip: t,
                delayDuration: n = jP,
                skipDelayDuration: r = 300,
                disableHoverableContent: o = !1,
                children: i,
            } = e,
            s = S.useRef(!0),
            a = S.useRef(!1),
            l = S.useRef(0);
        return (
            S.useEffect(() => {
                const c = l.current;
                return () => window.clearTimeout(c);
            }, []),
            m.jsx(MP, {
                scope: t,
                isOpenDelayedRef: s,
                delayDuration: n,
                onOpen: S.useCallback(() => {
                    window.clearTimeout(l.current), (s.current = !1);
                }, []),
                onClose: S.useCallback(() => {
                    window.clearTimeout(l.current),
                        (l.current = window.setTimeout(
                            () => (s.current = !0),
                            r
                        ));
                }, [r]),
                isPointerInTransitRef: a,
                onPointerInTransitChange: S.useCallback((c) => {
                    a.current = c;
                }, []),
                disableHoverableContent: o,
                children: i,
            })
        );
    };
Av.displayName = kv;
var Rv = "Tooltip",
    [wA, va] = ya(Rv),
    Ec = "TooltipTrigger",
    LP = S.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = va(Ec, n),
            i = Nv(Ec, n),
            s = sd(n),
            a = S.useRef(null),
            l = Nt(t, a, o.onTriggerChange),
            c = S.useRef(!1),
            u = S.useRef(!1),
            d = S.useCallback(() => (c.current = !1), []);
        return (
            S.useEffect(
                () => () => document.removeEventListener("pointerup", d),
                [d]
            ),
            m.jsx(NP, {
                asChild: !0,
                ...s,
                children: m.jsx(Xe.button, {
                    "aria-describedby": o.open ? o.contentId : void 0,
                    "data-state": o.stateAttribute,
                    ...r,
                    ref: l,
                    onPointerMove: Se(e.onPointerMove, (f) => {
                        f.pointerType !== "touch" &&
                            !u.current &&
                            !i.isPointerInTransitRef.current &&
                            (o.onTriggerEnter(), (u.current = !0));
                    }),
                    onPointerLeave: Se(e.onPointerLeave, () => {
                        o.onTriggerLeave(), (u.current = !1);
                    }),
                    onPointerDown: Se(e.onPointerDown, () => {
                        o.open && o.onClose(),
                            (c.current = !0),
                            document.addEventListener("pointerup", d, {
                                once: !0,
                            });
                    }),
                    onFocus: Se(e.onFocus, () => {
                        c.current || o.onOpen();
                    }),
                    onBlur: Se(e.onBlur, o.onClose),
                    onClick: Se(e.onClick, o.onClose),
                }),
            })
        );
    });
LP.displayName = Ec;
var DP = "TooltipPortal",
    [SA, OP] = ya(DP, { forceMount: void 0 }),
    Wr = "TooltipContent",
    jv = S.forwardRef((e, t) => {
        const n = OP(Wr, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
            s = va(Wr, e.__scopeTooltip);
        return m.jsx(Wu, {
            present: r || s.open,
            children: s.disableHoverableContent
                ? m.jsx(Mv, { side: o, ...i, ref: t })
                : m.jsx(IP, { side: o, ...i, ref: t }),
        });
    }),
    IP = S.forwardRef((e, t) => {
        const n = va(Wr, e.__scopeTooltip),
            r = Nv(Wr, e.__scopeTooltip),
            o = S.useRef(null),
            i = Nt(t, o),
            [s, a] = S.useState(null),
            { trigger: l, onClose: c } = n,
            u = o.current,
            { onPointerInTransitChange: d } = r,
            f = S.useCallback(() => {
                a(null), d(!1);
            }, [d]),
            y = S.useCallback(
                (x, g) => {
                    const w = x.currentTarget,
                        p = { x: x.clientX, y: x.clientY },
                        h = BP(p, w.getBoundingClientRect()),
                        v = $P(p, h),
                        T = UP(g.getBoundingClientRect()),
                        C = WP([...v, ...T]);
                    a(C), d(!0);
                },
                [d]
            );
        return (
            S.useEffect(() => () => f(), [f]),
            S.useEffect(() => {
                if (l && u) {
                    const x = (w) => y(w, u),
                        g = (w) => y(w, l);
                    return (
                        l.addEventListener("pointerleave", x),
                        u.addEventListener("pointerleave", g),
                        () => {
                            l.removeEventListener("pointerleave", x),
                                u.removeEventListener("pointerleave", g);
                        }
                    );
                }
            }, [l, u, y, f]),
            S.useEffect(() => {
                if (s) {
                    const x = (g) => {
                        const w = g.target,
                            p = { x: g.clientX, y: g.clientY },
                            h =
                                (l == null ? void 0 : l.contains(w)) ||
                                (u == null ? void 0 : u.contains(w)),
                            v = !HP(p, s);
                        h ? f() : v && (f(), c());
                    };
                    return (
                        document.addEventListener("pointermove", x),
                        () => document.removeEventListener("pointermove", x)
                    );
                }
            }, [l, u, s, c, f]),
            m.jsx(Mv, { ...e, ref: i })
        );
    }),
    [_P, VP] = ya(Rv, { isInside: !1 }),
    FP = HS("TooltipContent"),
    Mv = S.forwardRef((e, t) => {
        const {
                __scopeTooltip: n,
                children: r,
                "aria-label": o,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                ...a
            } = e,
            l = va(Wr, n),
            c = sd(n),
            { onClose: u } = l;
        return (
            S.useEffect(
                () => (
                    document.addEventListener(Lp, u),
                    () => document.removeEventListener(Lp, u)
                ),
                [u]
            ),
            S.useEffect(() => {
                if (l.trigger) {
                    const d = (f) => {
                        const y = f.target;
                        y != null && y.contains(l.trigger) && u();
                    };
                    return (
                        window.addEventListener("scroll", d, { capture: !0 }),
                        () =>
                            window.removeEventListener("scroll", d, {
                                capture: !0,
                            })
                    );
                }
            }, [l.trigger, u]),
            m.jsx(Hu, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (d) => d.preventDefault(),
                onDismiss: u,
                children: m.jsxs(AP, {
                    "data-state": l.stateAttribute,
                    ...c,
                    ...a,
                    ref: t,
                    style: {
                        ...a.style,
                        "--radix-tooltip-content-transform-origin":
                            "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width":
                            "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height":
                            "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width":
                            "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height":
                            "var(--radix-popper-anchor-height)",
                    },
                    children: [
                        m.jsx(FP, { children: r }),
                        m.jsx(_P, {
                            scope: n,
                            isInside: !0,
                            children: m.jsx(fT, {
                                id: l.contentId,
                                role: "tooltip",
                                children: o || r,
                            }),
                        }),
                    ],
                }),
            })
        );
    });
jv.displayName = Wr;
var Lv = "TooltipArrow",
    zP = S.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = sd(n);
        return VP(Lv, n).isInside ? null : m.jsx(RP, { ...o, ...r, ref: t });
    });
zP.displayName = Lv;
function BP(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}
function $P(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
            break;
        case "bottom":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
            break;
        case "left":
            r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
            break;
        case "right":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
            break;
    }
    return r;
}
function UP(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
        { x: o, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: o, y: r },
    ];
}
function HP(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const a = t[i].x,
            l = t[i].y,
            c = t[s].x,
            u = t[s].y;
        l > r != u > r && n < ((c - a) * (r - l)) / (u - l) + a && (o = !o);
    }
    return o;
}
function WP(e) {
    const t = e.slice();
    return (
        t.sort((n, r) =>
            n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
        ),
        KP(t)
    );
}
function KP(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1],
                s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
            else break;
        }
        t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1],
                s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
            else break;
        }
        n.push(o);
    }
    return (
        n.pop(),
        t.length === 1 &&
        n.length === 1 &&
        t[0].x === n[0].x &&
        t[0].y === n[0].y
            ? t
            : t.concat(n)
    );
}
var GP = Av,
    Dv = jv;
const YP = GP,
    XP = S.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
        m.jsx(Dv, {
            ref: r,
            sideOffset: t,
            className: ve(
                "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
                e
            ),
            ...n,
        })
    );
XP.displayName = Dv.displayName;
const QP = Xu(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        {
            variants: {
                variant: {
                    default:
                        "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive:
                        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline:
                        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary:
                        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline",
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10",
                },
            },
            defaultVariants: { variant: "default", size: "default" },
        }
    ),
    ge = S.forwardRef(
        ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
            const s = r ? $S : "button";
            return m.jsx(s, {
                className: ve(QP({ variant: t, size: n, className: e })),
                ref: i,
                ...o,
            });
        }
    );
ge.displayName = "Button";
function Ov() {
    const [e, t] = S.useState(!1),
        [n, r] = S.useState(!1);
    S.useEffect(() => {
        const i = () => {
            r(window.scrollY > 10);
        };
        return (
            window.addEventListener("scroll", i),
            () => window.removeEventListener("scroll", i)
        );
    }, []);
    const o = (i) => {
        const s = document.getElementById(i);
        s && s.scrollIntoView({ behavior: "smooth", block: "start" }), t(!1);
    };
    return m.jsx("nav", {
        className: `fixed w-full top-0 z-50 transition-all duration-300 ${
            n ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
        }`,
        children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                m.jsxs("div", {
                    className: "flex justify-between h-16",
                    children: [
                        m.jsx("div", {
                            className: "flex items-center",
                            children: m.jsxs("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: [
                                    "A",
                                    m.jsx("span", {
                                        className:
                                            "text-2xl font-bold text-gray-900",
                                        children: "KASH",
                                    }),
                                    " K",
                                    m.jsx("span", {
                                        className:
                                            "text-2xl font-bold text-gray-900",
                                        children: "ONETI",
                                    }),
                                ],
                            }),
                        }),
                        m.jsxs("div", {
                            className: "hidden md:flex items-center space-x-8",
                            children: [
                                m.jsx("button", {
                                    onClick: () => o("home"),
                                    className:
                                        "text-gray-700 hover:text-brand-blue transition-colors",
                                    children: "Home",
                                }),
                                m.jsx("button", {
                                    onClick: () => o("projects"),
                                    className:
                                        "text-gray-700 hover:text-brand-blue transition-colors",
                                    children: "Projects",
                                }),
                                m.jsx("button", {
                                    onClick: () => o("skills"),
                                    className:
                                        "text-gray-700 hover:text-brand-blue transition-colors",
                                    children: "Skills",
                                }),
                                m.jsx("button", {
                                    onClick: () => o("experience"),
                                    className:
                                        "text-gray-700 hover:text-brand-blue transition-colors",
                                    children: "Experience",
                                }),
                                m.jsx("button", {
                                    onClick: () => o("contact"),
                                    className:
                                        "text-gray-700 hover:text-brand-blue transition-colors",
                                    children: "Contact",
                                }),
                            ],
                        }),
                        m.jsx("div", {
                            className: "md:hidden flex items-center",
                            children: m.jsx(ge, {
                                variant: "ghost",
                                size: "sm",
                                onClick: () => t(!e),
                                children: e
                                    ? m.jsx(Xy, { className: "w-5 h-5" })
                                    : m.jsx(FT, { className: "w-5 h-5" }),
                            }),
                        }),
                    ],
                }),
                e &&
                    m.jsx("div", {
                        className:
                            "md:hidden bg-white border-t border-gray-200",
                        children: m.jsxs("div", {
                            className: "px-2 pt-2 pb-3 space-y-1",
                            children: [
                                m.jsx("button", {
                                    onClick: () => o("home"),
                                    className:
                                        "block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors",
                                    children: "Home",
                                }),
                                m.jsx("button", {
                                    onClick: () => o("projects"),
                                    className:
                                        "block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors",
                                    children: "Projects",
                                }),
                                m.jsx("button", {
                                    onClick: () => o("skills"),
                                    className:
                                        "block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors",
                                    children: "Skills",
                                }),
                                m.jsx("button", {
                                    onClick: () => o("experience"),
                                    className:
                                        "block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors",
                                    children: "Experience",
                                }),
                                m.jsx("button", {
                                    onClick: () => o("contact"),
                                    className:
                                        "block w-full text-left px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors",
                                    children: "Contact",
                                }),
                            ],
                        }),
                    }),
            ],
        }),
    });
}
function qP(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map(),
        n = (...r) => e(...r);
    return new Proxy(n, {
        get: (r, o) =>
            o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o)),
    });
}
function xa(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function";
}
const kc = (e) => Array.isArray(e);
function Iv(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0;
}
function ni(e) {
    return typeof e == "string" || Array.isArray(e);
}
function Dp(e) {
    const t = [{}, {}];
    return (
        e == null ||
            e.values.forEach((n, r) => {
                (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
            }),
        t
    );
}
function ad(e, t, n, r) {
    if (typeof t == "function") {
        const [o, i] = Dp(r);
        t = t(n !== void 0 ? n : e.custom, o, i);
    }
    if (
        (typeof t == "string" && (t = e.variants && e.variants[t]),
        typeof t == "function")
    ) {
        const [o, i] = Dp(r);
        t = t(n !== void 0 ? n : e.custom, o, i);
    }
    return t;
}
function wa(e, t, n) {
    const r = e.getProps();
    return ad(r, t, n !== void 0 ? n : r.custom, e);
}
const ld = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
    ],
    cd = ["initial", ...ld],
    gi = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
    ],
    lr = new Set(gi),
    Qt = (e) => e * 1e3,
    qt = (e) => e / 1e3,
    ZP = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    JP = (e) => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
    }),
    eb = { type: "keyframes", duration: 0.8 },
    tb = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    nb = (e, { keyframes: t }) =>
        t.length > 2
            ? eb
            : lr.has(e)
            ? e.startsWith("scale")
                ? JP(t[1])
                : ZP
            : tb;
function ud(e, t) {
    return e ? e[t] || e.default || e : void 0;
}
const rb = { skipAnimations: !1, useManualTiming: !1 },
    ob = (e) => e !== null;
function Sa(e, { repeat: t, repeatType: n = "loop" }, r) {
    const o = e.filter(ob),
        i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
    return !i || r === void 0 ? o[i] : r;
}
const Ie = (e) => e;
let Nc = Ie;
function ib(e) {
    let t = new Set(),
        n = new Set(),
        r = !1,
        o = !1;
    const i = new WeakSet();
    let s = { delta: 0, timestamp: 0, isProcessing: !1 };
    function a(c) {
        i.has(c) && (l.schedule(c), e()), c(s);
    }
    const l = {
        schedule: (c, u = !1, d = !1) => {
            const y = d && r ? t : n;
            return u && i.add(c), y.has(c) || y.add(c), c;
        },
        cancel: (c) => {
            n.delete(c), i.delete(c);
        },
        process: (c) => {
            if (((s = c), r)) {
                o = !0;
                return;
            }
            (r = !0),
                ([t, n] = [n, t]),
                n.clear(),
                t.forEach(a),
                (r = !1),
                o && ((o = !1), l.process(c));
        },
    };
    return l;
}
const $i = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
    ],
    sb = 40;
function _v(e, t) {
    let n = !1,
        r = !0;
    const o = { delta: 0, timestamp: 0, isProcessing: !1 },
        i = () => (n = !0),
        s = $i.reduce((p, h) => ((p[h] = ib(i)), p), {}),
        {
            read: a,
            resolveKeyframes: l,
            update: c,
            preRender: u,
            render: d,
            postRender: f,
        } = s,
        y = () => {
            const p = performance.now();
            (n = !1),
                (o.delta = r
                    ? 1e3 / 60
                    : Math.max(Math.min(p - o.timestamp, sb), 1)),
                (o.timestamp = p),
                (o.isProcessing = !0),
                a.process(o),
                l.process(o),
                c.process(o),
                u.process(o),
                d.process(o),
                f.process(o),
                (o.isProcessing = !1),
                n && t && ((r = !1), e(y));
        },
        x = () => {
            (n = !0), (r = !0), o.isProcessing || e(y);
        };
    return {
        schedule: $i.reduce((p, h) => {
            const v = s[h];
            return (
                (p[h] = (T, C = !1, b = !1) => (n || x(), v.schedule(T, C, b))),
                p
            );
        }, {}),
        cancel: (p) => {
            for (let h = 0; h < $i.length; h++) s[$i[h]].cancel(p);
        },
        state: o,
        steps: s,
    };
}
const {
        schedule: Q,
        cancel: Ln,
        state: Ne,
        steps: dl,
    } = _v(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ie, !0),
    Vv = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    ab = 1e-7,
    lb = 12;
function cb(e, t, n, r, o) {
    let i,
        s,
        a = 0;
    do (s = t + (n - t) / 2), (i = Vv(s, r, o) - e), i > 0 ? (n = s) : (t = s);
    while (Math.abs(i) > ab && ++a < lb);
    return s;
}
function yi(e, t, n, r) {
    if (e === t && n === r) return Ie;
    const o = (i) => cb(i, 0, 1, e, n);
    return (i) => (i === 0 || i === 1 ? i : Vv(o(i), t, r));
}
const Fv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    zv = (e) => (t) => 1 - e(1 - t),
    Bv = yi(0.33, 1.53, 0.69, 0.99),
    dd = zv(Bv),
    $v = Fv(dd),
    Uv = (e) =>
        (e *= 2) < 1 ? 0.5 * dd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
    fd = (e) => 1 - Math.sin(Math.acos(e)),
    Hv = zv(fd),
    Wv = Fv(fd),
    Kv = (e) => /^0[^.\s]+$/u.test(e);
function ub(e) {
    return typeof e == "number"
        ? e === 0
        : e !== null
        ? e === "none" || e === "0" || Kv(e)
        : !0;
}
const Gv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Yv = (e) => (t) => typeof t == "string" && t.startsWith(e),
    Xv = Yv("--"),
    db = Yv("var(--"),
    pd = (e) => (db(e) ? fb.test(e.split("/*")[0].trim()) : !1),
    fb =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    pb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function hb(e) {
    const t = pb.exec(e);
    if (!t) return [,];
    const [, n, r, o] = t;
    return [`--${n ?? r}`, o];
}
function Qv(e, t, n = 1) {
    const [r, o] = hb(e);
    if (!r) return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const s = i.trim();
        return Gv(s) ? parseFloat(s) : s;
    }
    return pd(o) ? Qv(o, t, n + 1) : o;
}
const on = (e, t, n) => (n > t ? t : n < e ? e : n),
    no = {
        test: (e) => typeof e == "number",
        parse: parseFloat,
        transform: (e) => e,
    },
    ri = { ...no, transform: (e) => on(0, 1, e) },
    Ui = { ...no, default: 1 },
    vi = (e) => ({
        test: (t) =>
            typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
    }),
    dn = vi("deg"),
    _t = vi("%"),
    B = vi("px"),
    mb = vi("vh"),
    gb = vi("vw"),
    Op = {
        ..._t,
        parse: (e) => _t.parse(e) / 100,
        transform: (e) => _t.transform(e * 100),
    },
    yb = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        "x",
        "y",
        "translateX",
        "translateY",
    ]),
    Ip = (e) => e === no || e === B,
    _p = (e, t) => parseFloat(e.split(", ")[t]),
    Vp =
        (e, t) =>
        (n, { transform: r }) => {
            if (r === "none" || !r) return 0;
            const o = r.match(/^matrix3d\((.+)\)$/u);
            if (o) return _p(o[1], t);
            {
                const i = r.match(/^matrix\((.+)\)$/u);
                return i ? _p(i[1], e) : 0;
            }
        },
    vb = new Set(["x", "y", "z"]),
    xb = gi.filter((e) => !vb.has(e));
function wb(e) {
    const t = [];
    return (
        xb.forEach((n) => {
            const r = e.getValue(n);
            r !== void 0 &&
                (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
        }),
        t
    );
}
const Kr = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
        e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
        e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Vp(4, 13),
    y: Vp(5, 14),
};
Kr.translateX = Kr.x;
Kr.translateY = Kr.y;
const qv = (e) => (t) => t.test(e),
    Sb = { test: (e) => e === "auto", parse: (e) => e },
    Zv = [no, B, _t, dn, gb, mb, Sb],
    Fp = (e) => Zv.find(qv(e)),
    qn = new Set();
let Ac = !1,
    Rc = !1;
function Jv() {
    if (Rc) {
        const e = Array.from(qn).filter((r) => r.needsMeasurement),
            t = new Set(e.map((r) => r.element)),
            n = new Map();
        t.forEach((r) => {
            const o = wb(r);
            o.length && (n.set(r, o), r.render());
        }),
            e.forEach((r) => r.measureInitialState()),
            t.forEach((r) => {
                r.render();
                const o = n.get(r);
                o &&
                    o.forEach(([i, s]) => {
                        var a;
                        (a = r.getValue(i)) === null ||
                            a === void 0 ||
                            a.set(s);
                    });
            }),
            e.forEach((r) => r.measureEndState()),
            e.forEach((r) => {
                r.suspendedScrollY !== void 0 &&
                    window.scrollTo(0, r.suspendedScrollY);
            });
    }
    (Rc = !1), (Ac = !1), qn.forEach((e) => e.complete()), qn.clear();
}
function e0() {
    qn.forEach((e) => {
        e.readKeyframes(), e.needsMeasurement && (Rc = !0);
    });
}
function Tb() {
    e0(), Jv();
}
class hd {
    constructor(t, n, r, o, i, s = !1) {
        (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = n),
            (this.name = r),
            (this.motionValue = o),
            (this.element = i),
            (this.isAsync = s);
    }
    scheduleResolve() {
        (this.isScheduled = !0),
            this.isAsync
                ? (qn.add(this),
                  Ac || ((Ac = !0), Q.read(e0), Q.resolveKeyframes(Jv)))
                : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: o,
        } = this;
        for (let i = 0; i < t.length; i++)
            if (t[i] === null)
                if (i === 0) {
                    const s = o == null ? void 0 : o.get(),
                        a = t[t.length - 1];
                    if (s !== void 0) t[0] = s;
                    else if (r && n) {
                        const l = r.readValue(n, a);
                        l != null && (t[0] = l);
                    }
                    t[0] === void 0 && (t[0] = a),
                        o && s === void 0 && o.set(t[0]);
                } else t[i] = t[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            qn.delete(this);
    }
    cancel() {
        this.isComplete || ((this.isScheduled = !1), qn.delete(this));
    }
    resume() {
        this.isComplete || this.scheduleResolve();
    }
}
const Lo = (e) => Math.round(e * 1e5) / 1e5,
    md = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Cb(e) {
    return e == null;
}
const Pb =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    gd = (e, t) => (n) =>
        !!(
            (typeof n == "string" && Pb.test(n) && n.startsWith(e)) ||
            (t && !Cb(n) && Object.prototype.hasOwnProperty.call(n, t))
        ),
    t0 = (e, t, n) => (r) => {
        if (typeof r != "string") return r;
        const [o, i, s, a] = r.match(md);
        return {
            [e]: parseFloat(o),
            [t]: parseFloat(i),
            [n]: parseFloat(s),
            alpha: a !== void 0 ? parseFloat(a) : 1,
        };
    },
    bb = (e) => on(0, 255, e),
    fl = { ...no, transform: (e) => Math.round(bb(e)) },
    Yn = {
        test: gd("rgb", "red"),
        parse: t0("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            fl.transform(e) +
            ", " +
            fl.transform(t) +
            ", " +
            fl.transform(n) +
            ", " +
            Lo(ri.transform(r)) +
            ")",
    };
function Eb(e) {
    let t = "",
        n = "",
        r = "",
        o = "";
    return (
        e.length > 5
            ? ((t = e.substring(1, 3)),
              (n = e.substring(3, 5)),
              (r = e.substring(5, 7)),
              (o = e.substring(7, 9)))
            : ((t = e.substring(1, 2)),
              (n = e.substring(2, 3)),
              (r = e.substring(3, 4)),
              (o = e.substring(4, 5)),
              (t += t),
              (n += n),
              (r += r),
              (o += o)),
        {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: o ? parseInt(o, 16) / 255 : 1,
        }
    );
}
const jc = { test: gd("#"), parse: Eb, transform: Yn.transform },
    Cr = {
        test: gd("hsl", "hue"),
        parse: t0("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            _t.transform(Lo(t)) +
            ", " +
            _t.transform(Lo(n)) +
            ", " +
            Lo(ri.transform(r)) +
            ")",
    },
    Le = {
        test: (e) => Yn.test(e) || jc.test(e) || Cr.test(e),
        parse: (e) =>
            Yn.test(e) ? Yn.parse(e) : Cr.test(e) ? Cr.parse(e) : jc.parse(e),
        transform: (e) =>
            typeof e == "string"
                ? e
                : e.hasOwnProperty("red")
                ? Yn.transform(e)
                : Cr.transform(e),
    },
    kb =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Nb(e) {
    var t, n;
    return (
        isNaN(e) &&
        typeof e == "string" &&
        (((t = e.match(md)) === null || t === void 0 ? void 0 : t.length) ||
            0) +
            (((n = e.match(kb)) === null || n === void 0 ? void 0 : n.length) ||
                0) >
            0
    );
}
const n0 = "number",
    r0 = "color",
    Ab = "var",
    Rb = "var(",
    zp = "${}",
    jb =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function oi(e) {
    const t = e.toString(),
        n = [],
        r = { color: [], number: [], var: [] },
        o = [];
    let i = 0;
    const a = t
        .replace(
            jb,
            (l) => (
                Le.test(l)
                    ? (r.color.push(i), o.push(r0), n.push(Le.parse(l)))
                    : l.startsWith(Rb)
                    ? (r.var.push(i), o.push(Ab), n.push(l))
                    : (r.number.push(i), o.push(n0), n.push(parseFloat(l))),
                ++i,
                zp
            )
        )
        .split(zp);
    return { values: n, split: a, indexes: r, types: o };
}
function o0(e) {
    return oi(e).values;
}
function i0(e) {
    const { split: t, types: n } = oi(e),
        r = t.length;
    return (o) => {
        let i = "";
        for (let s = 0; s < r; s++)
            if (((i += t[s]), o[s] !== void 0)) {
                const a = n[s];
                a === n0
                    ? (i += Lo(o[s]))
                    : a === r0
                    ? (i += Le.transform(o[s]))
                    : (i += o[s]);
            }
        return i;
    };
}
const Mb = (e) => (typeof e == "number" ? 0 : e);
function Lb(e) {
    const t = o0(e);
    return i0(e)(t.map(Mb));
}
const Dn = {
        test: Nb,
        parse: o0,
        createTransformer: i0,
        getAnimatableNone: Lb,
    },
    Db = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ob(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(md) || [];
    if (!r) return e;
    const o = n.replace(r, "");
    let i = Db.has(t) ? 1 : 0;
    return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const Ib = /\b([a-z-]*)\(.*?\)/gu,
    Mc = {
        ...Dn,
        getAnimatableNone: (e) => {
            const t = e.match(Ib);
            return t ? t.map(Ob).join(" ") : e;
        },
    },
    _b = {
        borderWidth: B,
        borderTopWidth: B,
        borderRightWidth: B,
        borderBottomWidth: B,
        borderLeftWidth: B,
        borderRadius: B,
        radius: B,
        borderTopLeftRadius: B,
        borderTopRightRadius: B,
        borderBottomRightRadius: B,
        borderBottomLeftRadius: B,
        width: B,
        maxWidth: B,
        height: B,
        maxHeight: B,
        top: B,
        right: B,
        bottom: B,
        left: B,
        padding: B,
        paddingTop: B,
        paddingRight: B,
        paddingBottom: B,
        paddingLeft: B,
        margin: B,
        marginTop: B,
        marginRight: B,
        marginBottom: B,
        marginLeft: B,
        backgroundPositionX: B,
        backgroundPositionY: B,
    },
    Vb = {
        rotate: dn,
        rotateX: dn,
        rotateY: dn,
        rotateZ: dn,
        scale: Ui,
        scaleX: Ui,
        scaleY: Ui,
        scaleZ: Ui,
        skew: dn,
        skewX: dn,
        skewY: dn,
        distance: B,
        translateX: B,
        translateY: B,
        translateZ: B,
        x: B,
        y: B,
        z: B,
        perspective: B,
        transformPerspective: B,
        opacity: ri,
        originX: Op,
        originY: Op,
        originZ: B,
    },
    Bp = { ...no, transform: Math.round },
    yd = {
        ..._b,
        ...Vb,
        zIndex: Bp,
        size: B,
        fillOpacity: ri,
        strokeOpacity: ri,
        numOctaves: Bp,
    },
    Fb = {
        ...yd,
        color: Le,
        backgroundColor: Le,
        outlineColor: Le,
        fill: Le,
        stroke: Le,
        borderColor: Le,
        borderTopColor: Le,
        borderRightColor: Le,
        borderBottomColor: Le,
        borderLeftColor: Le,
        filter: Mc,
        WebkitFilter: Mc,
    },
    vd = (e) => Fb[e];
function s0(e, t) {
    let n = vd(e);
    return (
        n !== Mc && (n = Dn),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    );
}
const zb = new Set(["auto", "none", "0"]);
function Bb(e, t, n) {
    let r = 0,
        o;
    for (; r < e.length && !o; ) {
        const i = e[r];
        typeof i == "string" && !zb.has(i) && oi(i).values.length && (o = e[r]),
            r++;
    }
    if (o && n) for (const i of t) e[i] = s0(n, o);
}
class a0 extends hd {
    constructor(t, n, r, o, i) {
        super(t, n, r, o, i, !0);
    }
    readKeyframes() {
        const { unresolvedKeyframes: t, element: n, name: r } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let c = t[l];
            if (typeof c == "string" && ((c = c.trim()), pd(c))) {
                const u = Qv(c, n.current);
                u !== void 0 && (t[l] = u),
                    l === t.length - 1 && (this.finalKeyframe = c);
            }
        }
        if ((this.resolveNoneKeyframes(), !yb.has(r) || t.length !== 2)) return;
        const [o, i] = t,
            s = Fp(o),
            a = Fp(i);
        if (s !== a)
            if (Ip(s) && Ip(a))
                for (let l = 0; l < t.length; l++) {
                    const c = t[l];
                    typeof c == "string" && (t[l] = parseFloat(c));
                }
            else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes: t, name: n } = this,
            r = [];
        for (let o = 0; o < t.length; o++) ub(t[o]) && r.push(o);
        r.length && Bb(t, r, n);
    }
    measureInitialState() {
        const { element: t, unresolvedKeyframes: n, name: r } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = Kr[r](
                t.measureViewportBox(),
                window.getComputedStyle(t.current)
            )),
            (n[0] = this.measuredOrigin);
        const o = n[n.length - 1];
        o !== void 0 && t.getValue(r, o).jump(o, !1);
    }
    measureEndState() {
        var t;
        const { element: n, name: r, unresolvedKeyframes: o } = this;
        if (!n || !n.current) return;
        const i = n.getValue(r);
        i && i.jump(this.measuredOrigin, !1);
        const s = o.length - 1,
            a = o[s];
        (o[s] = Kr[r](
            n.measureViewportBox(),
            window.getComputedStyle(n.current)
        )),
            a !== null &&
                this.finalKeyframe === void 0 &&
                (this.finalKeyframe = a),
            !((t = this.removedTransforms) === null || t === void 0) &&
                t.length &&
                this.removedTransforms.forEach(([l, c]) => {
                    n.getValue(l).set(c);
                }),
            this.resolveNoneKeyframes();
    }
}
function xd(e) {
    return typeof e == "function";
}
let as;
function $b() {
    as = void 0;
}
const Vt = {
        now: () => (
            as === void 0 &&
                Vt.set(
                    Ne.isProcessing || rb.useManualTiming
                        ? Ne.timestamp
                        : performance.now()
                ),
            as
        ),
        set: (e) => {
            (as = e), queueMicrotask($b);
        },
    },
    $p = (e, t) =>
        t === "zIndex"
            ? !1
            : !!(
                  typeof e == "number" ||
                  Array.isArray(e) ||
                  (typeof e == "string" &&
                      (Dn.test(e) || e === "0") &&
                      !e.startsWith("url("))
              );
function Ub(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Hb(e, t, n, r) {
    const o = e[0];
    if (o === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const i = e[e.length - 1],
        s = $p(o, t),
        a = $p(i, t);
    return !s || !a ? !1 : Ub(e) || ((n === "spring" || xd(n)) && r);
}
const Wb = 40;
class l0 {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: o = 0,
        repeatDelay: i = 0,
        repeatType: s = "loop",
        ...a
    }) {
        (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = Vt.now()),
            (this.options = {
                autoplay: t,
                delay: n,
                type: r,
                repeat: o,
                repeatDelay: i,
                repeatType: s,
                ...a,
            }),
            this.updateFinishedPromise();
    }
    calcStartTime() {
        return this.resolvedAt
            ? this.resolvedAt - this.createdAt > Wb
                ? this.resolvedAt
                : this.createdAt
            : this.createdAt;
    }
    get resolved() {
        return (
            !this._resolved && !this.hasAttemptedResolve && Tb(), this._resolved
        );
    }
    onKeyframesResolved(t, n) {
        (this.resolvedAt = Vt.now()), (this.hasAttemptedResolve = !0);
        const {
            name: r,
            type: o,
            velocity: i,
            delay: s,
            onComplete: a,
            onUpdate: l,
            isGenerator: c,
        } = this.options;
        if (!c && !Hb(t, r, o, i))
            if (s) this.options.duration = 0;
            else {
                l == null || l(Sa(t, this.options, n)),
                    a == null || a(),
                    this.resolveFinishedPromise();
                return;
            }
        const u = this.initPlayback(t, n);
        u !== !1 &&
            ((this._resolved = { keyframes: t, finalKeyframe: n, ...u }),
            this.onPostResolved());
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n);
    }
    flatten() {
        (this.options.type = "keyframes"), (this.options.ease = "linear");
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
        });
    }
}
const Gr = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r;
    },
    c0 = (e, t, n = 10) => {
        let r = "";
        const o = Math.max(Math.round(t / n), 2);
        for (let i = 0; i < o; i++) r += e(Gr(0, o - 1, i)) + ", ";
        return `linear(${r.substring(0, r.length - 2)})`;
    };
function u0(e, t) {
    return t ? e * (1e3 / t) : 0;
}
const Kb = 5;
function d0(e, t, n) {
    const r = Math.max(t - Kb, 0);
    return u0(n - e(r), t - r);
}
const ue = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
    },
    pl = 0.001;
function Gb({
    duration: e = ue.duration,
    bounce: t = ue.bounce,
    velocity: n = ue.velocity,
    mass: r = ue.mass,
}) {
    let o,
        i,
        s = 1 - t;
    (s = on(ue.minDamping, ue.maxDamping, s)),
        (e = on(ue.minDuration, ue.maxDuration, qt(e))),
        s < 1
            ? ((o = (c) => {
                  const u = c * s,
                      d = u * e,
                      f = u - n,
                      y = Lc(c, s),
                      x = Math.exp(-d);
                  return pl - (f / y) * x;
              }),
              (i = (c) => {
                  const d = c * s * e,
                      f = d * n + n,
                      y = Math.pow(s, 2) * Math.pow(c, 2) * e,
                      x = Math.exp(-d),
                      g = Lc(Math.pow(c, 2), s);
                  return ((-o(c) + pl > 0 ? -1 : 1) * ((f - y) * x)) / g;
              }))
            : ((o = (c) => {
                  const u = Math.exp(-c * e),
                      d = (c - n) * e + 1;
                  return -pl + u * d;
              }),
              (i = (c) => {
                  const u = Math.exp(-c * e),
                      d = (n - c) * (e * e);
                  return u * d;
              }));
    const a = 5 / e,
        l = Xb(o, i, a);
    if (((e = Qt(e)), isNaN(l)))
        return { stiffness: ue.stiffness, damping: ue.damping, duration: e };
    {
        const c = Math.pow(l, 2) * r;
        return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
    }
}
const Yb = 12;
function Xb(e, t, n) {
    let r = n;
    for (let o = 1; o < Yb; o++) r = r - e(r) / t(r);
    return r;
}
function Lc(e, t) {
    return e * Math.sqrt(1 - t * t);
}
const Dc = 2e4;
function f0(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Dc; ) (t += n), (r = e.next(t));
    return t >= Dc ? 1 / 0 : t;
}
const Qb = ["duration", "bounce"],
    qb = ["stiffness", "damping", "mass"];
function Up(e, t) {
    return t.some((n) => e[n] !== void 0);
}
function Zb(e) {
    let t = {
        velocity: ue.velocity,
        stiffness: ue.stiffness,
        damping: ue.damping,
        mass: ue.mass,
        isResolvedFromDuration: !1,
        ...e,
    };
    if (!Up(e, qb) && Up(e, Qb))
        if (e.visualDuration) {
            const n = e.visualDuration,
                r = (2 * Math.PI) / (n * 1.2),
                o = r * r,
                i = 2 * on(0.05, 1, 1 - e.bounce) * Math.sqrt(o);
            t = { ...t, mass: ue.mass, stiffness: o, damping: i };
        } else {
            const n = Gb(e);
            (t = { ...t, ...n, mass: ue.mass }),
                (t.isResolvedFromDuration = !0);
        }
    return t;
}
function p0(e = ue.visualDuration, t = ue.bounce) {
    const n =
        typeof e != "object"
            ? { visualDuration: e, keyframes: [0, 1], bounce: t }
            : e;
    let { restSpeed: r, restDelta: o } = n;
    const i = n.keyframes[0],
        s = n.keyframes[n.keyframes.length - 1],
        a = { done: !1, value: i },
        {
            stiffness: l,
            damping: c,
            mass: u,
            duration: d,
            velocity: f,
            isResolvedFromDuration: y,
        } = Zb({ ...n, velocity: -qt(n.velocity || 0) }),
        x = f || 0,
        g = c / (2 * Math.sqrt(l * u)),
        w = s - i,
        p = qt(Math.sqrt(l / u)),
        h = Math.abs(w) < 5;
    r || (r = h ? ue.restSpeed.granular : ue.restSpeed.default),
        o || (o = h ? ue.restDelta.granular : ue.restDelta.default);
    let v;
    if (g < 1) {
        const C = Lc(p, g);
        v = (b) => {
            const P = Math.exp(-g * p * b);
            return (
                s -
                P *
                    (((x + g * p * w) / C) * Math.sin(C * b) +
                        w * Math.cos(C * b))
            );
        };
    } else if (g === 1) v = (C) => s - Math.exp(-p * C) * (w + (x + p * w) * C);
    else {
        const C = p * Math.sqrt(g * g - 1);
        v = (b) => {
            const P = Math.exp(-g * p * b),
                E = Math.min(C * b, 300);
            return (
                s -
                (P * ((x + g * p * w) * Math.sinh(E) + C * w * Math.cosh(E))) /
                    C
            );
        };
    }
    const T = {
        calculatedDuration: (y && d) || null,
        next: (C) => {
            const b = v(C);
            if (y) a.done = C >= d;
            else {
                let P = 0;
                g < 1 && (P = C === 0 ? Qt(x) : d0(v, C, b));
                const E = Math.abs(P) <= r,
                    A = Math.abs(s - b) <= o;
                a.done = E && A;
            }
            return (a.value = a.done ? s : b), a;
        },
        toString: () => {
            const C = Math.min(f0(T), Dc),
                b = c0((P) => T.next(C * P).value, C, 30);
            return C + "ms " + b;
        },
    };
    return T;
}
function Hp({
    keyframes: e,
    velocity: t = 0,
    power: n = 0.8,
    timeConstant: r = 325,
    bounceDamping: o = 10,
    bounceStiffness: i = 500,
    modifyTarget: s,
    min: a,
    max: l,
    restDelta: c = 0.5,
    restSpeed: u,
}) {
    const d = e[0],
        f = { done: !1, value: d },
        y = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
        x = (E) =>
            a === void 0
                ? l
                : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
                ? a
                : l;
    let g = n * t;
    const w = d + g,
        p = s === void 0 ? w : s(w);
    p !== w && (g = p - d);
    const h = (E) => -g * Math.exp(-E / r),
        v = (E) => p + h(E),
        T = (E) => {
            const A = h(E),
                N = v(E);
            (f.done = Math.abs(A) <= c), (f.value = f.done ? p : N);
        };
    let C, b;
    const P = (E) => {
        y(f.value) &&
            ((C = E),
            (b = p0({
                keyframes: [f.value, x(f.value)],
                velocity: d0(v, E, f.value),
                damping: o,
                stiffness: i,
                restDelta: c,
                restSpeed: u,
            })));
    };
    return (
        P(0),
        {
            calculatedDuration: null,
            next: (E) => {
                let A = !1;
                return (
                    !b && C === void 0 && ((A = !0), T(E), P(E)),
                    C !== void 0 && E >= C ? b.next(E - C) : (!A && T(E), f)
                );
            },
        }
    );
}
const Jb = yi(0.42, 0, 1, 1),
    eE = yi(0, 0, 0.58, 1),
    h0 = yi(0.42, 0, 0.58, 1),
    tE = (e) => Array.isArray(e) && typeof e[0] != "number",
    wd = (e) => Array.isArray(e) && typeof e[0] == "number",
    Wp = {
        linear: Ie,
        easeIn: Jb,
        easeInOut: h0,
        easeOut: eE,
        circIn: fd,
        circInOut: Wv,
        circOut: Hv,
        backIn: dd,
        backInOut: $v,
        backOut: Bv,
        anticipate: Uv,
    },
    Kp = (e) => {
        if (wd(e)) {
            Nc(e.length === 4);
            const [t, n, r, o] = e;
            return yi(t, n, r, o);
        } else if (typeof e == "string") return Nc(Wp[e] !== void 0), Wp[e];
        return e;
    },
    nE = (e, t) => (n) => t(e(n)),
    En = (...e) => e.reduce(nE),
    ie = (e, t, n) => e + (t - e) * n;
function hl(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6
            ? e + (t - e) * 6 * n
            : n < 1 / 2
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
    );
}
function rE({ hue: e, saturation: t, lightness: n, alpha: r }) {
    (e /= 360), (t /= 100), (n /= 100);
    let o = 0,
        i = 0,
        s = 0;
    if (!t) o = i = s = n;
    else {
        const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        (o = hl(l, a, e + 1 / 3)), (i = hl(l, a, e)), (s = hl(l, a, e - 1 / 3));
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(s * 255),
        alpha: r,
    };
}
function Fs(e, t) {
    return (n) => (n > 0 ? t : e);
}
const ml = (e, t, n) => {
        const r = e * e,
            o = n * (t * t - r) + r;
        return o < 0 ? 0 : Math.sqrt(o);
    },
    oE = [jc, Yn, Cr],
    iE = (e) => oE.find((t) => t.test(e));
function Gp(e) {
    const t = iE(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === Cr && (n = rE(n)), n;
}
const Yp = (e, t) => {
        const n = Gp(e),
            r = Gp(t);
        if (!n || !r) return Fs(e, t);
        const o = { ...n };
        return (i) => (
            (o.red = ml(n.red, r.red, i)),
            (o.green = ml(n.green, r.green, i)),
            (o.blue = ml(n.blue, r.blue, i)),
            (o.alpha = ie(n.alpha, r.alpha, i)),
            Yn.transform(o)
        );
    },
    Oc = new Set(["none", "hidden"]);
function sE(e, t) {
    return Oc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function aE(e, t) {
    return (n) => ie(e, t, n);
}
function Sd(e) {
    return typeof e == "number"
        ? aE
        : typeof e == "string"
        ? pd(e)
            ? Fs
            : Le.test(e)
            ? Yp
            : uE
        : Array.isArray(e)
        ? m0
        : typeof e == "object"
        ? Le.test(e)
            ? Yp
            : lE
        : Fs;
}
function m0(e, t) {
    const n = [...e],
        r = n.length,
        o = e.map((i, s) => Sd(i)(i, t[s]));
    return (i) => {
        for (let s = 0; s < r; s++) n[s] = o[s](i);
        return n;
    };
}
function lE(e, t) {
    const n = { ...e, ...t },
        r = {};
    for (const o in n)
        e[o] !== void 0 && t[o] !== void 0 && (r[o] = Sd(e[o])(e[o], t[o]));
    return (o) => {
        for (const i in r) n[i] = r[i](o);
        return n;
    };
}
function cE(e, t) {
    var n;
    const r = [],
        o = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < t.values.length; i++) {
        const s = t.types[i],
            a = e.indexes[s][o[s]],
            l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        (r[i] = l), o[s]++;
    }
    return r;
}
const uE = (e, t) => {
    const n = Dn.createTransformer(t),
        r = oi(e),
        o = oi(t);
    return r.indexes.var.length === o.indexes.var.length &&
        r.indexes.color.length === o.indexes.color.length &&
        r.indexes.number.length >= o.indexes.number.length
        ? (Oc.has(e) && !o.values.length) || (Oc.has(t) && !r.values.length)
            ? sE(e, t)
            : En(m0(cE(r, o), o.values), n)
        : Fs(e, t);
};
function g0(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number"
        ? ie(e, t, n)
        : Sd(e)(e, t);
}
function dE(e, t, n) {
    const r = [],
        o = n || g0,
        i = e.length - 1;
    for (let s = 0; s < i; s++) {
        let a = o(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || Ie : t;
            a = En(l, a);
        }
        r.push(a);
    }
    return r;
}
function fE(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
    const i = e.length;
    if ((Nc(i === t.length), i === 1)) return () => t[0];
    if (i === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const s = dE(t, r, o),
        a = s.length,
        l = (c) => {
            let u = 0;
            if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
            const d = Gr(e[u], e[u + 1], c);
            return s[u](d);
        };
    return n ? (c) => l(on(e[0], e[i - 1], c)) : l;
}
function pE(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = Gr(0, t, r);
        e.push(ie(n, 1, o));
    }
}
function hE(e) {
    const t = [0];
    return pE(t, e.length - 1), t;
}
function mE(e, t) {
    return e.map((n) => n * t);
}
function gE(e, t) {
    return e.map(() => t || h0).splice(0, e.length - 1);
}
function zs({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut",
}) {
    const o = tE(r) ? r.map(Kp) : Kp(r),
        i = { done: !1, value: t[0] },
        s = mE(n && n.length === t.length ? n : hE(t), e),
        a = fE(s, t, { ease: Array.isArray(o) ? o : gE(t, o) });
    return {
        calculatedDuration: e,
        next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
    };
}
const yE = (e) => {
        const t = ({ timestamp: n }) => e(n);
        return {
            start: () => Q.update(t, !0),
            stop: () => Ln(t),
            now: () => (Ne.isProcessing ? Ne.timestamp : Vt.now()),
        };
    },
    vE = { decay: Hp, inertia: Hp, tween: zs, keyframes: zs, spring: p0 },
    xE = (e) => e / 100;
class Td extends l0 {
    constructor(t) {
        super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
                if (
                    (this.resolver.cancel(),
                    (this.isStopped = !0),
                    this.state === "idle")
                )
                    return;
                this.teardown();
                const { onStop: l } = this.options;
                l && l();
            });
        const {
                name: n,
                motionValue: r,
                element: o,
                keyframes: i,
            } = this.options,
            s = (o == null ? void 0 : o.KeyframeResolver) || hd,
            a = (l, c) => this.onKeyframesResolved(l, c);
        (this.resolver = new s(i, a, n, r, o)), this.resolver.scheduleResolve();
    }
    flatten() {
        super.flatten(),
            this._resolved &&
                Object.assign(
                    this._resolved,
                    this.initPlayback(this._resolved.keyframes)
                );
    }
    initPlayback(t) {
        const {
                type: n = "keyframes",
                repeat: r = 0,
                repeatDelay: o = 0,
                repeatType: i,
                velocity: s = 0,
            } = this.options,
            a = xd(n) ? n : vE[n] || zs;
        let l, c;
        a !== zs &&
            typeof t[0] != "number" &&
            ((l = En(xE, g0(t[0], t[1]))), (t = [0, 100]));
        const u = a({ ...this.options, keyframes: t });
        i === "mirror" &&
            (c = a({
                ...this.options,
                keyframes: [...t].reverse(),
                velocity: -s,
            })),
            u.calculatedDuration === null && (u.calculatedDuration = f0(u));
        const { calculatedDuration: d } = u,
            f = d + o,
            y = f * (r + 1) - o;
        return {
            generator: u,
            mirroredGenerator: c,
            mapPercentToKeyframes: l,
            calculatedDuration: d,
            resolvedDuration: f,
            totalDuration: y,
        };
    }
    onPostResolved() {
        const { autoplay: t = !0 } = this.options;
        this.play(),
            this.pendingPlayState === "paused" || !t
                ? this.pause()
                : (this.state = this.pendingPlayState);
    }
    tick(t, n = !1) {
        const { resolved: r } = this;
        if (!r) {
            const { keyframes: E } = this.options;
            return { done: !0, value: E[E.length - 1] };
        }
        const {
            finalKeyframe: o,
            generator: i,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: c,
            totalDuration: u,
            resolvedDuration: d,
        } = r;
        if (this.startTime === null) return i.next(0);
        const {
            delay: f,
            repeat: y,
            repeatType: x,
            repeatDelay: g,
            onUpdate: w,
        } = this.options;
        this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            n
                ? (this.currentTime = t)
                : this.holdTime !== null
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                      Math.round(t - this.startTime) * this.speed);
        const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
            h = this.speed >= 0 ? p < 0 : p > u;
        (this.currentTime = Math.max(p, 0)),
            this.state === "finished" &&
                this.holdTime === null &&
                (this.currentTime = u);
        let v = this.currentTime,
            T = i;
        if (y) {
            const E = Math.min(this.currentTime, u) / d;
            let A = Math.floor(E),
                N = E % 1;
            !N && E >= 1 && (N = 1),
                N === 1 && A--,
                (A = Math.min(A, y + 1)),
                !!(A % 2) &&
                    (x === "reverse"
                        ? ((N = 1 - N), g && (N -= g / d))
                        : x === "mirror" && (T = s)),
                (v = on(0, 1, N) * d);
        }
        const C = h ? { done: !1, value: l[0] } : T.next(v);
        a && (C.value = a(C.value));
        let { done: b } = C;
        !h &&
            c !== null &&
            (b =
                this.speed >= 0
                    ? this.currentTime >= u
                    : this.currentTime <= 0);
        const P =
            this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && b));
        return (
            P && o !== void 0 && (C.value = Sa(l, this.options, o)),
            w && w(C.value),
            P && this.finish(),
            C
        );
    }
    get duration() {
        const { resolved: t } = this;
        return t ? qt(t.calculatedDuration) : 0;
    }
    get time() {
        return qt(this.currentTime);
    }
    set time(t) {
        (t = Qt(t)),
            (this.currentTime = t),
            this.holdTime !== null || this.speed === 0
                ? (this.holdTime = t)
                : this.driver &&
                  (this.startTime = this.driver.now() - t / this.speed);
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        (this.playbackSpeed = t), n && (this.time = qt(this.currentTime));
    }
    play() {
        if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
        ) {
            this.pendingPlayState = "running";
            return;
        }
        if (this.isStopped) return;
        const { driver: t = yE, onPlay: n, startTime: r } = this.options;
        this.driver || (this.driver = t((i) => this.tick(i))), n && n();
        const o = this.driver.now();
        this.holdTime !== null
            ? (this.startTime = o - this.holdTime)
            : this.startTime
            ? this.state === "finished" && (this.startTime = o)
            : (this.startTime = r ?? this.calcStartTime()),
            this.state === "finished" && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
        }
        (this.state = "paused"),
            (this.holdTime =
                (t = this.currentTime) !== null && t !== void 0 ? t : 0);
    }
    complete() {
        this.state !== "running" && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
    }
    finish() {
        this.teardown(), (this.state = "finished");
        const { onComplete: t } = this.options;
        t && t();
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
    }
    teardown() {
        (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
    }
    stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(t) {
        return (this.startTime = 0), this.tick(t, !0);
    }
}
const wE = new Set(["opacity", "clipPath", "filter", "transform"]);
function Cd(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
}
const SE = { linearEasing: void 0 };
function TE(e, t) {
    const n = Cd(e);
    return () => {
        var r;
        return (r = SE[t]) !== null && r !== void 0 ? r : n();
    };
}
const Bs = TE(() => {
    try {
        document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
        return !1;
    }
    return !0;
}, "linearEasing");
function y0(e) {
    return !!(
        (typeof e == "function" && Bs()) ||
        !e ||
        (typeof e == "string" && (e in Ic || Bs())) ||
        wd(e) ||
        (Array.isArray(e) && e.every(y0))
    );
}
const wo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Ic = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: wo([0, 0.65, 0.55, 1]),
        circOut: wo([0.55, 0, 1, 0.45]),
        backIn: wo([0.31, 0.01, 0.66, -0.59]),
        backOut: wo([0.33, 1.53, 0.69, 0.99]),
    };
function v0(e, t) {
    if (e)
        return typeof e == "function" && Bs()
            ? c0(e, t)
            : wd(e)
            ? wo(e)
            : Array.isArray(e)
            ? e.map((n) => v0(n, t) || Ic.easeOut)
            : Ic[e];
}
function CE(
    e,
    t,
    n,
    {
        delay: r = 0,
        duration: o = 300,
        repeat: i = 0,
        repeatType: s = "loop",
        ease: a = "easeInOut",
        times: l,
    } = {}
) {
    const c = { [t]: n };
    l && (c.offset = l);
    const u = v0(a, o);
    return (
        Array.isArray(u) && (c.easing = u),
        e.animate(c, {
            delay: r,
            duration: o,
            easing: Array.isArray(u) ? "linear" : u,
            fill: "both",
            iterations: i + 1,
            direction: s === "reverse" ? "alternate" : "normal",
        })
    );
}
function Xp(e, t) {
    (e.timeline = t), (e.onfinish = null);
}
const PE = Cd(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    $s = 10,
    bE = 2e4;
function EE(e) {
    return xd(e.type) || e.type === "spring" || !y0(e.ease);
}
function kE(e, t) {
    const n = new Td({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0,
    });
    let r = { done: !1, value: e[0] };
    const o = [];
    let i = 0;
    for (; !r.done && i < bE; ) (r = n.sample(i)), o.push(r.value), (i += $s);
    return { times: void 0, keyframes: o, duration: i - $s, ease: "linear" };
}
const x0 = { anticipate: Uv, backInOut: $v, circInOut: Wv };
function NE(e) {
    return e in x0;
}
class Qp extends l0 {
    constructor(t) {
        super(t);
        const {
            name: n,
            motionValue: r,
            element: o,
            keyframes: i,
        } = this.options;
        (this.resolver = new a0(
            i,
            (s, a) => this.onKeyframesResolved(s, a),
            n,
            r,
            o
        )),
            this.resolver.scheduleResolve();
    }
    initPlayback(t, n) {
        var r;
        let {
            duration: o = 300,
            times: i,
            ease: s,
            type: a,
            motionValue: l,
            name: c,
            startTime: u,
        } = this.options;
        if (!(!((r = l.owner) === null || r === void 0) && r.current))
            return !1;
        if (
            (typeof s == "string" && Bs() && NE(s) && (s = x0[s]),
            EE(this.options))
        ) {
            const {
                    onComplete: f,
                    onUpdate: y,
                    motionValue: x,
                    element: g,
                    ...w
                } = this.options,
                p = kE(t, w);
            (t = p.keyframes),
                t.length === 1 && (t[1] = t[0]),
                (o = p.duration),
                (i = p.times),
                (s = p.ease),
                (a = "keyframes");
        }
        const d = CE(l.owner.current, c, t, {
            ...this.options,
            duration: o,
            times: i,
            ease: s,
        });
        return (
            (d.startTime = u ?? this.calcStartTime()),
            this.pendingTimeline
                ? (Xp(d, this.pendingTimeline), (this.pendingTimeline = void 0))
                : (d.onfinish = () => {
                      const { onComplete: f } = this.options;
                      l.set(Sa(t, this.options, n)),
                          f && f(),
                          this.cancel(),
                          this.resolveFinishedPromise();
                  }),
            {
                animation: d,
                duration: o,
                times: i,
                type: a,
                ease: s,
                keyframes: t,
            }
        );
    }
    get duration() {
        const { resolved: t } = this;
        if (!t) return 0;
        const { duration: n } = t;
        return qt(n);
    }
    get time() {
        const { resolved: t } = this;
        if (!t) return 0;
        const { animation: n } = t;
        return qt(n.currentTime || 0);
    }
    set time(t) {
        const { resolved: n } = this;
        if (!n) return;
        const { animation: r } = n;
        r.currentTime = Qt(t);
    }
    get speed() {
        const { resolved: t } = this;
        if (!t) return 1;
        const { animation: n } = t;
        return n.playbackRate;
    }
    set speed(t) {
        const { resolved: n } = this;
        if (!n) return;
        const { animation: r } = n;
        r.playbackRate = t;
    }
    get state() {
        const { resolved: t } = this;
        if (!t) return "idle";
        const { animation: n } = t;
        return n.playState;
    }
    get startTime() {
        const { resolved: t } = this;
        if (!t) return null;
        const { animation: n } = t;
        return n.startTime;
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const { resolved: n } = this;
            if (!n) return Ie;
            const { animation: r } = n;
            Xp(r, t);
        }
        return Ie;
    }
    play() {
        if (this.isStopped) return;
        const { resolved: t } = this;
        if (!t) return;
        const { animation: n } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play();
    }
    pause() {
        const { resolved: t } = this;
        if (!t) return;
        const { animation: n } = t;
        n.pause();
    }
    stop() {
        if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
        )
            return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const { resolved: t } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: r,
            duration: o,
            type: i,
            ease: s,
            times: a,
        } = t;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                    motionValue: c,
                    onUpdate: u,
                    onComplete: d,
                    element: f,
                    ...y
                } = this.options,
                x = new Td({
                    ...y,
                    keyframes: r,
                    duration: o,
                    type: i,
                    ease: s,
                    times: a,
                    isGenerator: !0,
                }),
                g = Qt(this.time);
            c.setWithVelocity(x.sample(g - $s).value, x.sample(g).value, $s);
        }
        const { onStop: l } = this.options;
        l && l(), this.cancel();
    }
    complete() {
        const { resolved: t } = this;
        t && t.animation.finish();
    }
    cancel() {
        const { resolved: t } = this;
        t && t.animation.cancel();
    }
    static supports(t) {
        const {
            motionValue: n,
            name: r,
            repeatDelay: o,
            repeatType: i,
            damping: s,
            type: a,
        } = t;
        return (
            PE() &&
            r &&
            wE.has(r) &&
            n &&
            n.owner &&
            n.owner.current instanceof HTMLElement &&
            !n.owner.getProps().onUpdate &&
            !o &&
            i !== "mirror" &&
            s !== 0 &&
            a !== "inertia"
        );
    }
}
const AE = Cd(() => window.ScrollTimeline !== void 0);
class RE {
    constructor(t) {
        (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
    }
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n);
    }
    getAll(t) {
        return this.animations[0][t];
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n;
    }
    attachTimeline(t, n) {
        const r = this.animations.map((o) =>
            AE() && o.attachTimeline ? o.attachTimeline(t) : n(o)
        );
        return () => {
            r.forEach((o, i) => {
                o && o(), this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(t) {
        this.setAll("time", t);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(t) {
        this.setAll("speed", t);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t;
    }
    runAll(t) {
        this.animations.forEach((n) => n[t]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
function jE({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: o,
    repeat: i,
    repeatType: s,
    repeatDelay: a,
    from: l,
    elapsed: c,
    ...u
}) {
    return !!Object.keys(u).length;
}
const Pd =
        (e, t, n, r = {}, o, i) =>
        (s) => {
            const a = ud(r, e) || {},
                l = a.delay || r.delay || 0;
            let { elapsed: c = 0 } = r;
            c = c - Qt(l);
            let u = {
                keyframes: Array.isArray(n) ? n : [null, n],
                ease: "easeOut",
                velocity: t.getVelocity(),
                ...a,
                delay: -c,
                onUpdate: (f) => {
                    t.set(f), a.onUpdate && a.onUpdate(f);
                },
                onComplete: () => {
                    s(), a.onComplete && a.onComplete();
                },
                name: e,
                motionValue: t,
                element: i ? void 0 : o,
            };
            jE(a) || (u = { ...u, ...nb(e, u) }),
                u.duration && (u.duration = Qt(u.duration)),
                u.repeatDelay && (u.repeatDelay = Qt(u.repeatDelay)),
                u.from !== void 0 && (u.keyframes[0] = u.from);
            let d = !1;
            if (
                ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
                    ((u.duration = 0), u.delay === 0 && (d = !0)),
                d && !i && t.get() !== void 0)
            ) {
                const f = Sa(u.keyframes, a);
                if (f !== void 0)
                    return (
                        Q.update(() => {
                            u.onUpdate(f), u.onComplete();
                        }),
                        new RE([])
                    );
            }
            return !i && Qp.supports(u) ? new Qp(u) : new Td(u);
        },
    ME = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
    LE = (e) => (kc(e) ? e[e.length - 1] || 0 : e);
function bd(e, t) {
    e.indexOf(t) === -1 && e.push(t);
}
function Ed(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
}
class kd {
    constructor() {
        this.subscriptions = [];
    }
    add(t) {
        return bd(this.subscriptions, t), () => Ed(this.subscriptions, t);
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1) this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < o; i++) {
                    const s = this.subscriptions[i];
                    s && s(t, n, r);
                }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
const qp = 30,
    DE = (e) => !isNaN(parseFloat(e));
class OE {
    constructor(t, n = {}) {
        (this.version = "11.13.1"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (r, o = !0) => {
                const i = Vt.now();
                this.updatedAt !== i && this.setPrevFrameValue(),
                    (this.prev = this.current),
                    this.setCurrent(r),
                    this.current !== this.prev &&
                        this.events.change &&
                        this.events.change.notify(this.current),
                    o &&
                        this.events.renderRequest &&
                        this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = n.owner);
    }
    setCurrent(t) {
        (this.current = t),
            (this.updatedAt = Vt.now()),
            this.canTrackVelocity === null &&
                t !== void 0 &&
                (this.canTrackVelocity = DE(this.current));
    }
    setPrevFrameValue(t = this.current) {
        (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(t) {
        return this.on("change", t);
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new kd());
        const r = this.events[t].add(n);
        return t === "change"
            ? () => {
                  r(),
                      Q.read(() => {
                          this.events.change.getSize() || this.stop();
                      });
              }
            : r;
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear();
    }
    attach(t, n) {
        (this.passiveEffect = t), (this.stopPassiveEffect = n);
    }
    set(t, n = !0) {
        !n || !this.passiveEffect
            ? this.updateAndNotify(t, n)
            : this.passiveEffect(t, this.updateAndNotify);
    }
    setWithVelocity(t, n, r) {
        this.set(n),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - r);
    }
    jump(t, n = !0) {
        this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            n && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
        return this.current;
    }
    getPrevious() {
        return this.prev;
    }
    getVelocity() {
        const t = Vt.now();
        if (
            !this.canTrackVelocity ||
            this.prevFrameValue === void 0 ||
            t - this.updatedAt > qp
        )
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, qp);
        return u0(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            n
        );
    }
    start(t) {
        return (
            this.stop(),
            new Promise((n) => {
                (this.hasAnimated = !0),
                    (this.animation = t(n)),
                    this.events.animationStart &&
                        this.events.animationStart.notify();
            }).then(() => {
                this.events.animationComplete &&
                    this.events.animationComplete.notify(),
                    this.clearAnimation();
            })
        );
    }
    stop() {
        this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
                this.events.animationCancel.notify()),
            this.clearAnimation();
    }
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    destroy() {
        this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
    }
}
function ii(e, t) {
    return new OE(e, t);
}
function IE(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ii(n));
}
function _E(e, t) {
    const n = wa(e, t);
    let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
    i = { ...i, ...r };
    for (const s in i) {
        const a = LE(i[s]);
        IE(e, s, a);
    }
}
const Nd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    VE = "framerAppearId",
    w0 = "data-" + Nd(VE);
function S0(e) {
    return e.props[w0];
}
const Oe = (e) => !!(e && e.getVelocity);
function FE(e) {
    return !!(Oe(e) && e.add);
}
function _c(e, t) {
    const n = e.getValue("willChange");
    if (FE(n)) return n.add(t);
}
function zE({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return (t[n] = !1), r;
}
function T0(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
    var i;
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: a,
        ...l
    } = t;
    r && (s = r);
    const c = [],
        u = o && e.animationState && e.animationState.getState()[o];
    for (const d in l) {
        const f = e.getValue(
                d,
                (i = e.latestValues[d]) !== null && i !== void 0 ? i : null
            ),
            y = l[d];
        if (y === void 0 || (u && zE(u, d))) continue;
        const x = { delay: n, ...ud(s || {}, d) };
        let g = !1;
        if (window.MotionHandoffAnimation) {
            const p = S0(e);
            if (p) {
                const h = window.MotionHandoffAnimation(p, d, Q);
                h !== null && ((x.startTime = h), (g = !0));
            }
        }
        _c(e, d),
            f.start(
                Pd(
                    d,
                    f,
                    y,
                    e.shouldReduceMotion && lr.has(d) ? { type: !1 } : x,
                    e,
                    g
                )
            );
        const w = f.animation;
        w && c.push(w);
    }
    return (
        a &&
            Promise.all(c).then(() => {
                Q.update(() => {
                    a && _E(e, a);
                });
            }),
        c
    );
}
function Vc(e, t, n = {}) {
    var r;
    const o = wa(
        e,
        t,
        n.type === "exit"
            ? (r = e.presenceContext) === null || r === void 0
                ? void 0
                : r.custom
            : void 0
    );
    let { transition: i = e.getDefaultTransition() || {} } = o || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = o ? () => Promise.all(T0(e, o, n)) : () => Promise.resolve(),
        a =
            e.variantChildren && e.variantChildren.size
                ? (c = 0) => {
                      const {
                          delayChildren: u = 0,
                          staggerChildren: d,
                          staggerDirection: f,
                      } = i;
                      return BE(e, t, u + c, d, f, n);
                  }
                : () => Promise.resolve(),
        { when: l } = i;
    if (l) {
        const [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
        return c().then(() => u());
    } else return Promise.all([s(), a(n.delay)]);
}
function BE(e, t, n = 0, r = 0, o = 1, i) {
    const s = [],
        a = (e.variantChildren.size - 1) * r,
        l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
    return (
        Array.from(e.variantChildren)
            .sort($E)
            .forEach((c, u) => {
                c.notify("AnimationStart", t),
                    s.push(
                        Vc(c, t, { ...i, delay: n + l(u) }).then(() =>
                            c.notify("AnimationComplete", t)
                        )
                    );
            }),
        Promise.all(s)
    );
}
function $E(e, t) {
    return e.sortNodePosition(t);
}
function UE(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map((i) => Vc(e, i, n));
        r = Promise.all(o);
    } else if (typeof t == "string") r = Vc(e, t, n);
    else {
        const o = typeof t == "function" ? wa(e, t, n.custom) : t;
        r = Promise.all(T0(e, o, n));
    }
    return r.then(() => {
        e.notify("AnimationComplete", t);
    });
}
const HE = cd.length;
function C0(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? C0(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
    }
    const t = {};
    for (let n = 0; n < HE; n++) {
        const r = cd[n],
            o = e.props[r];
        (ni(o) || o === !1) && (t[r] = o);
    }
    return t;
}
const WE = [...ld].reverse(),
    KE = ld.length;
function GE(e) {
    return (t) =>
        Promise.all(t.map(({ animation: n, options: r }) => UE(e, n, r)));
}
function YE(e) {
    let t = GE(e),
        n = Zp(),
        r = !0;
    const o = (l) => (c, u) => {
        var d;
        const f = wa(
            e,
            u,
            l === "exit"
                ? (d = e.presenceContext) === null || d === void 0
                    ? void 0
                    : d.custom
                : void 0
        );
        if (f) {
            const { transition: y, transitionEnd: x, ...g } = f;
            c = { ...c, ...g, ...x };
        }
        return c;
    };
    function i(l) {
        t = l(e);
    }
    function s(l) {
        const { props: c } = e,
            u = C0(e.parent) || {},
            d = [],
            f = new Set();
        let y = {},
            x = 1 / 0;
        for (let w = 0; w < KE; w++) {
            const p = WE[w],
                h = n[p],
                v = c[p] !== void 0 ? c[p] : u[p],
                T = ni(v),
                C = p === l ? h.isActive : null;
            C === !1 && (x = w);
            let b = v === u[p] && v !== c[p] && T;
            if (
                (b && r && e.manuallyAnimateOnMount && (b = !1),
                (h.protectedKeys = { ...y }),
                (!h.isActive && C === null) ||
                    (!v && !h.prevProp) ||
                    xa(v) ||
                    typeof v == "boolean")
            )
                continue;
            const P = XE(h.prevProp, v);
            let E = P || (p === l && h.isActive && !b && T) || (w > x && T),
                A = !1;
            const N = Array.isArray(v) ? v : [v];
            let L = N.reduce(o(p), {});
            C === !1 && (L = {});
            const { prevResolvedValues: D = {} } = h,
                U = { ...D, ...L },
                R = (_) => {
                    (E = !0),
                        f.has(_) && ((A = !0), f.delete(_)),
                        (h.needsAnimating[_] = !0);
                    const k = e.getValue(_);
                    k && (k.liveStyle = !1);
                };
            for (const _ in U) {
                const k = L[_],
                    M = D[_];
                if (y.hasOwnProperty(_)) continue;
                let O = !1;
                kc(k) && kc(M) ? (O = !Iv(k, M)) : (O = k !== M),
                    O
                        ? k != null
                            ? R(_)
                            : f.add(_)
                        : k !== void 0 && f.has(_)
                        ? R(_)
                        : (h.protectedKeys[_] = !0);
            }
            (h.prevProp = v),
                (h.prevResolvedValues = L),
                h.isActive && (y = { ...y, ...L }),
                r && e.blockInitialAnimation && (E = !1),
                E &&
                    (!(b && P) || A) &&
                    d.push(
                        ...N.map((_) => ({
                            animation: _,
                            options: { type: p },
                        }))
                    );
        }
        if (f.size) {
            const w = {};
            f.forEach((p) => {
                const h = e.getBaseTarget(p),
                    v = e.getValue(p);
                v && (v.liveStyle = !0), (w[p] = h ?? null);
            }),
                d.push({ animation: w });
        }
        let g = !!d.length;
        return (
            r &&
                (c.initial === !1 || c.initial === c.animate) &&
                !e.manuallyAnimateOnMount &&
                (g = !1),
            (r = !1),
            g ? t(d) : Promise.resolve()
        );
    }
    function a(l, c) {
        var u;
        if (n[l].isActive === c) return Promise.resolve();
        (u = e.variantChildren) === null ||
            u === void 0 ||
            u.forEach((f) => {
                var y;
                return (y = f.animationState) === null || y === void 0
                    ? void 0
                    : y.setActive(l, c);
            }),
            (n[l].isActive = c);
        const d = s(l);
        for (const f in n) n[f].protectedKeys = {};
        return d;
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: i,
        getState: () => n,
        reset: () => {
            (n = Zp()), (r = !0);
        },
    };
}
function XE(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Iv(t, e) : !1;
}
function zn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function Zp() {
    return {
        animate: zn(!0),
        whileInView: zn(),
        whileHover: zn(),
        whileTap: zn(),
        whileDrag: zn(),
        whileFocus: zn(),
        exit: zn(),
    };
}
class Vn {
    constructor(t) {
        (this.isMounted = !1), (this.node = t);
    }
    update() {}
}
class QE extends Vn {
    constructor(t) {
        super(t), t.animationState || (t.animationState = YE(t));
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        xa(t) && (this.unmountControls = t.subscribe(this.node));
    }
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate: t } = this.node.getProps(),
            { animate: n } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
            (t = this.unmountControls) === null || t === void 0 || t.call(this);
    }
}
let qE = 0;
class ZE extends Vn {
    constructor() {
        super(...arguments), (this.id = qE++);
    }
    update() {
        if (!this.node.presenceContext) return;
        const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const o = this.node.animationState.setActive("exit", !t);
        n && !t && o.then(() => n(this.id));
    }
    mount() {
        const { register: t } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id));
    }
    unmount() {}
}
const JE = { animation: { Feature: QE }, exit: { Feature: ZE } };
function ek(e, t, n) {
    var r;
    if (e instanceof Element) return [e];
    if (typeof e == "string") {
        let o = document;
        const i =
            (r = void 0) !== null && r !== void 0 ? r : o.querySelectorAll(e);
        return i ? Array.from(i) : [];
    }
    return Array.from(e);
}
const wt = { x: !1, y: !1 };
function P0() {
    return wt.x || wt.y;
}
function Jp(e) {
    return (t) => {
        t.pointerType === "touch" || P0() || e(t);
    };
}
function tk(e, t, n = {}) {
    const r = new AbortController(),
        o = { passive: !0, ...n, signal: r.signal },
        i = Jp((s) => {
            const { target: a } = s,
                l = t(s);
            if (!l || !a) return;
            const c = Jp((u) => {
                l(u), a.removeEventListener("pointerleave", c);
            });
            a.addEventListener("pointerleave", c, o);
        });
    return (
        ek(e).forEach((s) => {
            s.addEventListener("pointerenter", i, o);
        }),
        () => r.abort()
    );
}
function nk(e) {
    return e === "x" || e === "y"
        ? wt[e]
            ? null
            : ((wt[e] = !0),
              () => {
                  wt[e] = !1;
              })
        : wt.x || wt.y
        ? null
        : ((wt.x = wt.y = !0),
          () => {
              wt.x = wt.y = !1;
          });
}
const b0 = (e) =>
    e.pointerType === "mouse"
        ? typeof e.button != "number" || e.button <= 0
        : e.isPrimary !== !1;
function xi(e) {
    return { point: { x: e.pageX, y: e.pageY } };
}
const rk = (e) => (t) => b0(t) && e(t, xi(t));
function Yt(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function kn(e, t, n, r) {
    return Yt(e, t, rk(n), r);
}
const eh = (e, t) => Math.abs(e - t);
function ok(e, t) {
    const n = eh(e.x, t.x),
        r = eh(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
}
class E0 {
    constructor(
        t,
        n,
        {
            transformPagePoint: r,
            contextWindow: o,
            dragSnapToOrigin: i = !1,
        } = {}
    ) {
        if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const d = yl(this.lastMoveEventInfo, this.history),
                    f = this.startEvent !== null,
                    y = ok(d.offset, { x: 0, y: 0 }) >= 3;
                if (!f && !y) return;
                const { point: x } = d,
                    { timestamp: g } = Ne;
                this.history.push({ ...x, timestamp: g });
                const { onStart: w, onMove: p } = this.handlers;
                f ||
                    (w && w(this.lastMoveEvent, d),
                    (this.startEvent = this.lastMoveEvent)),
                    p && p(this.lastMoveEvent, d);
            }),
            (this.handlePointerMove = (d, f) => {
                (this.lastMoveEvent = d),
                    (this.lastMoveEventInfo = gl(f, this.transformPagePoint)),
                    Q.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (d, f) => {
                this.end();
                const {
                    onEnd: y,
                    onSessionEnd: x,
                    resumeAnimation: g,
                } = this.handlers;
                if (
                    (this.dragSnapToOrigin && g && g(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                )
                    return;
                const w = yl(
                    d.type === "pointercancel"
                        ? this.lastMoveEventInfo
                        : gl(f, this.transformPagePoint),
                    this.history
                );
                this.startEvent && y && y(d, w), x && x(d, w);
            }),
            !b0(t))
        )
            return;
        (this.dragSnapToOrigin = i),
            (this.handlers = n),
            (this.transformPagePoint = r),
            (this.contextWindow = o || window);
        const s = xi(t),
            a = gl(s, this.transformPagePoint),
            { point: l } = a,
            { timestamp: c } = Ne;
        this.history = [{ ...l, timestamp: c }];
        const { onSessionStart: u } = n;
        u && u(t, yl(a, this.history)),
            (this.removeListeners = En(
                kn(this.contextWindow, "pointermove", this.handlePointerMove),
                kn(this.contextWindow, "pointerup", this.handlePointerUp),
                kn(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
    }
    updateHandlers(t) {
        this.handlers = t;
    }
    end() {
        this.removeListeners && this.removeListeners(), Ln(this.updatePoint);
    }
}
function gl(e, t) {
    return t ? { point: t(e.point) } : e;
}
function th(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
function yl({ point: e }, t) {
    return {
        point: e,
        delta: th(e, k0(t)),
        offset: th(e, ik(t)),
        velocity: sk(t, 0.1),
    };
}
function ik(e) {
    return e[0];
}
function k0(e) {
    return e[e.length - 1];
}
function sk(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1,
        r = null;
    const o = k0(e);
    for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Qt(t))); ) n--;
    if (!r) return { x: 0, y: 0 };
    const i = qt(o.timestamp - r.timestamp);
    if (i === 0) return { x: 0, y: 0 };
    const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Pr(e) {
    return (
        e &&
        typeof e == "object" &&
        Object.prototype.hasOwnProperty.call(e, "current")
    );
}
const N0 = 1e-4,
    ak = 1 - N0,
    lk = 1 + N0,
    A0 = 0.01,
    ck = 0 - A0,
    uk = 0 + A0;
function rt(e) {
    return e.max - e.min;
}
function dk(e, t, n) {
    return Math.abs(e - t) <= n;
}
function nh(e, t, n, r = 0.5) {
    (e.origin = r),
        (e.originPoint = ie(t.min, t.max, e.origin)),
        (e.scale = rt(n) / rt(t)),
        (e.translate = ie(n.min, n.max, e.origin) - e.originPoint),
        ((e.scale >= ak && e.scale <= lk) || isNaN(e.scale)) && (e.scale = 1),
        ((e.translate >= ck && e.translate <= uk) || isNaN(e.translate)) &&
            (e.translate = 0);
}
function Do(e, t, n, r) {
    nh(e.x, t.x, n.x, r ? r.originX : void 0),
        nh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function rh(e, t, n) {
    (e.min = n.min + t.min), (e.max = e.min + rt(t));
}
function fk(e, t, n) {
    rh(e.x, t.x, n.x), rh(e.y, t.y, n.y);
}
function oh(e, t, n) {
    (e.min = t.min - n.min), (e.max = e.min + rt(t));
}
function Oo(e, t, n) {
    oh(e.x, t.x, n.x), oh(e.y, t.y, n.y);
}
function pk(e, { min: t, max: n }, r) {
    return (
        t !== void 0 && e < t
            ? (e = r ? ie(t, e, r.min) : Math.max(e, t))
            : n !== void 0 &&
              e > n &&
              (e = r ? ie(n, e, r.max) : Math.min(e, n)),
        e
    );
}
function ih(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
    };
}
function hk(e, { top: t, left: n, bottom: r, right: o }) {
    return { x: ih(e.x, n, o), y: ih(e.y, t, r) };
}
function sh(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return (
        t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
    );
}
function mk(e, t) {
    return { x: sh(e.x, t.x), y: sh(e.y, t.y) };
}
function gk(e, t) {
    let n = 0.5;
    const r = rt(e),
        o = rt(t);
    return (
        o > r
            ? (n = Gr(t.min, t.max - r, e.min))
            : r > o && (n = Gr(e.min, e.max - o, t.min)),
        on(0, 1, n)
    );
}
function yk(e, t) {
    const n = {};
    return (
        t.min !== void 0 && (n.min = t.min - e.min),
        t.max !== void 0 && (n.max = t.max - e.min),
        n
    );
}
const Fc = 0.35;
function vk(e = Fc) {
    return (
        e === !1 ? (e = 0) : e === !0 && (e = Fc),
        { x: ah(e, "left", "right"), y: ah(e, "top", "bottom") }
    );
}
function ah(e, t, n) {
    return { min: lh(e, t), max: lh(e, n) };
}
function lh(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
}
const ch = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    br = () => ({ x: ch(), y: ch() }),
    uh = () => ({ min: 0, max: 0 }),
    he = () => ({ x: uh(), y: uh() });
function ct(e) {
    return [e("x"), e("y")];
}
function R0({ top: e, left: t, right: n, bottom: r }) {
    return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function xk({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function wk(e, t) {
    if (!t) return e;
    const n = t({ x: e.left, y: e.top }),
        r = t({ x: e.right, y: e.bottom });
    return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function vl(e) {
    return e === void 0 || e === 1;
}
function zc({ scale: e, scaleX: t, scaleY: n }) {
    return !vl(e) || !vl(t) || !vl(n);
}
function Un(e) {
    return (
        zc(e) ||
        j0(e) ||
        e.z ||
        e.rotate ||
        e.rotateX ||
        e.rotateY ||
        e.skewX ||
        e.skewY
    );
}
function j0(e) {
    return dh(e.x) || dh(e.y);
}
function dh(e) {
    return e && e !== "0%";
}
function Us(e, t, n) {
    const r = e - n,
        o = t * r;
    return n + o;
}
function fh(e, t, n, r, o) {
    return o !== void 0 && (e = Us(e, o, r)), Us(e, n, r) + t;
}
function Bc(e, t = 0, n = 1, r, o) {
    (e.min = fh(e.min, t, n, r, o)), (e.max = fh(e.max, t, n, r, o));
}
function M0(e, { x: t, y: n }) {
    Bc(e.x, t.translate, t.scale, t.originPoint),
        Bc(e.y, n.translate, n.scale, n.originPoint);
}
const ph = 0.999999999999,
    hh = 1.0000000000001;
function Sk(e, t, n, r = !1) {
    const o = n.length;
    if (!o) return;
    t.x = t.y = 1;
    let i, s;
    for (let a = 0; a < o; a++) {
        (i = n[a]), (s = i.projectionDelta);
        const { visualElement: l } = i.options;
        (l && l.props.style && l.props.style.display === "contents") ||
            (r &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                kr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
            s && ((t.x *= s.x.scale), (t.y *= s.y.scale), M0(e, s)),
            r && Un(i.latestValues) && kr(e, i.latestValues));
    }
    t.x < hh && t.x > ph && (t.x = 1), t.y < hh && t.y > ph && (t.y = 1);
}
function Er(e, t) {
    (e.min = e.min + t), (e.max = e.max + t);
}
function mh(e, t, n, r, o = 0.5) {
    const i = ie(e.min, e.max, o);
    Bc(e, t, n, i, r);
}
function kr(e, t) {
    mh(e.x, t.x, t.scaleX, t.scale, t.originX),
        mh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function L0(e, t) {
    return R0(wk(e.getBoundingClientRect(), t));
}
function Tk(e, t, n) {
    const r = L0(e, n),
        { scroll: o } = t;
    return o && (Er(r.x, o.offset.x), Er(r.y, o.offset.y)), r;
}
const D0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
    Ck = new WeakMap();
class Pk {
    constructor(t) {
        (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = he()),
            (this.visualElement = t);
    }
    start(t, { snapToCursor: n = !1 } = {}) {
        const { presenceContext: r } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const o = (u) => {
                const { dragSnapToOrigin: d } = this.getProps();
                d ? this.pauseAnimation() : this.stopAnimation(),
                    n && this.snapToCursor(xi(u).point);
            },
            i = (u, d) => {
                const {
                    drag: f,
                    dragPropagation: y,
                    onDragStart: x,
                } = this.getProps();
                if (
                    f &&
                    !y &&
                    (this.openDragLock && this.openDragLock(),
                    (this.openDragLock = nk(f)),
                    !this.openDragLock)
                )
                    return;
                (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                        ((this.visualElement.projection.isAnimationBlocked =
                            !0),
                        (this.visualElement.projection.target = void 0)),
                    ct((w) => {
                        let p = this.getAxisMotionValue(w).get() || 0;
                        if (_t.test(p)) {
                            const { projection: h } = this.visualElement;
                            if (h && h.layout) {
                                const v = h.layout.layoutBox[w];
                                v && (p = rt(v) * (parseFloat(p) / 100));
                            }
                        }
                        this.originPoint[w] = p;
                    }),
                    x && Q.postRender(() => x(u, d)),
                    _c(this.visualElement, "transform");
                const { animationState: g } = this.visualElement;
                g && g.setActive("whileDrag", !0);
            },
            s = (u, d) => {
                const {
                    dragPropagation: f,
                    dragDirectionLock: y,
                    onDirectionLock: x,
                    onDrag: g,
                } = this.getProps();
                if (!f && !this.openDragLock) return;
                const { offset: w } = d;
                if (y && this.currentDirection === null) {
                    (this.currentDirection = bk(w)),
                        this.currentDirection !== null &&
                            x &&
                            x(this.currentDirection);
                    return;
                }
                this.updateAxis("x", d.point, w),
                    this.updateAxis("y", d.point, w),
                    this.visualElement.render(),
                    g && g(u, d);
            },
            a = (u, d) => this.stop(u, d),
            l = () =>
                ct((u) => {
                    var d;
                    return (
                        this.getAnimationState(u) === "paused" &&
                        ((d = this.getAxisMotionValue(u).animation) === null ||
                        d === void 0
                            ? void 0
                            : d.play())
                    );
                }),
            { dragSnapToOrigin: c } = this.getProps();
        this.panSession = new E0(
            t,
            {
                onSessionStart: o,
                onStart: i,
                onMove: s,
                onSessionEnd: a,
                resumeAnimation: l,
            },
            {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: c,
                contextWindow: D0(this.visualElement),
            }
        );
    }
    stop(t, n) {
        const r = this.isDragging;
        if ((this.cancel(), !r)) return;
        const { velocity: o } = n;
        this.startAnimation(o);
        const { onDragEnd: i } = this.getProps();
        i && Q.postRender(() => i(t, n));
    }
    cancel() {
        this.isDragging = !1;
        const { projection: t, animationState: n } = this.visualElement;
        t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
        const { dragPropagation: r } = this.getProps();
        !r &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            n && n.setActive("whileDrag", !1);
    }
    updateAxis(t, n, r) {
        const { drag: o } = this.getProps();
        if (!r || !Hi(t, o, this.currentDirection)) return;
        const i = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints &&
            this.constraints[t] &&
            (s = pk(s, this.constraints[t], this.elastic[t])),
            i.set(s);
    }
    resolveConstraints() {
        var t;
        const { dragConstraints: n, dragElastic: r } = this.getProps(),
            o =
                this.visualElement.projection &&
                !this.visualElement.projection.layout
                    ? this.visualElement.projection.measure(!1)
                    : (t = this.visualElement.projection) === null ||
                      t === void 0
                    ? void 0
                    : t.layout,
            i = this.constraints;
        n && Pr(n)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : n && o
            ? (this.constraints = hk(o.layoutBox, n))
            : (this.constraints = !1),
            (this.elastic = vk(r)),
            i !== this.constraints &&
                o &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                ct((s) => {
                    this.constraints !== !1 &&
                        this.getAxisMotionValue(s) &&
                        (this.constraints[s] = yk(
                            o.layoutBox[s],
                            this.constraints[s]
                        ));
                });
    }
    resolveRefConstraints() {
        const { dragConstraints: t, onMeasureDragConstraints: n } =
            this.getProps();
        if (!t || !Pr(t)) return !1;
        const r = t.current,
            { projection: o } = this.visualElement;
        if (!o || !o.layout) return !1;
        const i = Tk(r, o.root, this.visualElement.getTransformPagePoint());
        let s = mk(o.layout.layoutBox, i);
        if (n) {
            const a = n(xk(s));
            (this.hasMutatedConstraints = !!a), a && (s = R0(a));
        }
        return s;
    }
    startAnimation(t) {
        const {
                drag: n,
                dragMomentum: r,
                dragElastic: o,
                dragTransition: i,
                dragSnapToOrigin: s,
                onDragTransitionEnd: a,
            } = this.getProps(),
            l = this.constraints || {},
            c = ct((u) => {
                if (!Hi(u, n, this.currentDirection)) return;
                let d = (l && l[u]) || {};
                s && (d = { min: 0, max: 0 });
                const f = o ? 200 : 1e6,
                    y = o ? 40 : 1e7,
                    x = {
                        type: "inertia",
                        velocity: r ? t[u] : 0,
                        bounceStiffness: f,
                        bounceDamping: y,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...d,
                    };
                return this.startAxisValueAnimation(u, x);
            });
        return Promise.all(c).then(a);
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return (
            _c(this.visualElement, t),
            r.start(Pd(t, r, 0, n, this.visualElement, !1))
        );
    }
    stopAnimation() {
        ct((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
        ct((t) => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null ||
                n === void 0
                ? void 0
                : n.pause();
        });
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null ||
            n === void 0
            ? void 0
            : n.state;
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            o = r[n];
        return (
            o ||
            this.visualElement.getValue(
                t,
                (r.initial ? r.initial[t] : void 0) || 0
            )
        );
    }
    snapToCursor(t) {
        ct((n) => {
            const { drag: r } = this.getProps();
            if (!Hi(n, r, this.currentDirection)) return;
            const { projection: o } = this.visualElement,
                i = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const { min: s, max: a } = o.layout.layoutBox[n];
                i.set(t[n] - ie(s, a, 0.5));
            }
        });
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag: t, dragConstraints: n } = this.getProps(),
            { projection: r } = this.visualElement;
        if (!Pr(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const o = { x: 0, y: 0 };
        ct((s) => {
            const a = this.getAxisMotionValue(s);
            if (a && this.constraints !== !1) {
                const l = a.get();
                o[s] = gk({ min: l, max: l }, this.constraints[s]);
            }
        });
        const { transformTemplate: i } = this.visualElement.getProps();
        (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            ct((s) => {
                if (!Hi(s, t, null)) return;
                const a = this.getAxisMotionValue(s),
                    { min: l, max: c } = this.constraints[s];
                a.set(ie(l, c, o[s]));
            });
    }
    addListeners() {
        if (!this.visualElement.current) return;
        Ck.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = kn(t, "pointerdown", (l) => {
                const { drag: c, dragListener: u = !0 } = this.getProps();
                c && u && this.start(l);
            }),
            r = () => {
                const { dragConstraints: l } = this.getProps();
                Pr(l) &&
                    l.current &&
                    (this.constraints = this.resolveRefConstraints());
            },
            { projection: o } = this.visualElement,
            i = o.addEventListener("measure", r);
        o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
            Q.read(r);
        const s = Yt(window, "resize", () =>
                this.scalePositionWithinConstraints()
            ),
            a = o.addEventListener(
                "didUpdate",
                ({ delta: l, hasLayoutChanged: c }) => {
                    this.isDragging &&
                        c &&
                        (ct((u) => {
                            const d = this.getAxisMotionValue(u);
                            d &&
                                ((this.originPoint[u] += l[u].translate),
                                d.set(d.get() + l[u].translate));
                        }),
                        this.visualElement.render());
                }
            );
        return () => {
            s(), n(), i(), a && a();
        };
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: o = !1,
                dragConstraints: i = !1,
                dragElastic: s = Fc,
                dragMomentum: a = !0,
            } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: a,
        };
    }
}
function Hi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
}
function bk(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Ek extends Vn {
    constructor(t) {
        super(t),
            (this.removeGroupControls = Ie),
            (this.removeListeners = Ie),
            (this.controls = new Pk(t));
    }
    mount() {
        const { dragControls: t } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || Ie);
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners();
    }
}
const gh = (e) => (t, n) => {
    e && Q.postRender(() => e(t, n));
};
class kk extends Vn {
    constructor() {
        super(...arguments), (this.removePointerDownListener = Ie);
    }
    onPointerDown(t) {
        this.session = new E0(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: D0(this.node),
        });
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: o,
        } = this.node.getProps();
        return {
            onSessionStart: gh(t),
            onStart: gh(n),
            onMove: r,
            onEnd: (i, s) => {
                delete this.session, o && Q.postRender(() => o(i, s));
            },
        };
    }
    mount() {
        this.removePointerDownListener = kn(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
        );
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end();
    }
}
const Ad = S.createContext(null);
function Nk() {
    const e = S.useContext(Ad);
    if (e === null) return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e,
        o = S.useId();
    S.useEffect(() => r(o), []);
    const i = S.useCallback(() => n && n(o), [o, n]);
    return !t && n ? [!1, i] : [!0];
}
const O0 = S.createContext({}),
    I0 = S.createContext({}),
    ls = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function yh(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const mo = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (B.test(e)) e = parseFloat(e);
                else return e;
            const n = yh(e, t.target.x),
                r = yh(e, t.target.y);
            return `${n}% ${r}%`;
        },
    },
    Ak = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
            const r = e,
                o = Dn.parse(e);
            if (o.length > 5) return r;
            const i = Dn.createTransformer(e),
                s = typeof o[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            (o[0 + s] /= a), (o[1 + s] /= l);
            const c = ie(a, l, 0.5);
            return (
                typeof o[2 + s] == "number" && (o[2 + s] /= c),
                typeof o[3 + s] == "number" && (o[3 + s] /= c),
                i(o)
            );
        },
    },
    Hs = {};
function Rk(e) {
    Object.assign(Hs, e);
}
const { schedule: Rd, cancel: TA } = _v(queueMicrotask, !1);
class jk extends S.Component {
    componentDidMount() {
        const {
                visualElement: t,
                layoutGroup: n,
                switchLayoutGroup: r,
                layoutId: o,
            } = this.props,
            { projection: i } = t;
        Rk(Mk),
            i &&
                (n.group && n.group.add(i),
                r && r.register && o && r.register(i),
                i.root.didUpdate(),
                i.addEventListener("animationComplete", () => {
                    this.safeToRemove();
                }),
                i.setOptions({
                    ...i.options,
                    onExitComplete: () => this.safeToRemove(),
                })),
            (ls.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(t) {
        const {
                layoutDependency: n,
                visualElement: r,
                drag: o,
                isPresent: i,
            } = this.props,
            s = r.projection;
        return (
            s &&
                ((s.isPresent = i),
                o || t.layoutDependency !== n || n === void 0
                    ? s.willUpdate()
                    : this.safeToRemove(),
                t.isPresent !== i &&
                    (i
                        ? s.promote()
                        : s.relegate() ||
                          Q.postRender(() => {
                              const a = s.getStack();
                              (!a || !a.members.length) && this.safeToRemove();
                          }))),
            null
        );
    }
    componentDidUpdate() {
        const { projection: t } = this.props.visualElement;
        t &&
            (t.root.didUpdate(),
            Rd.postRender(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
    }
    componentWillUnmount() {
        const {
                visualElement: t,
                layoutGroup: n,
                switchLayoutGroup: r,
            } = this.props,
            { projection: o } = t;
        o &&
            (o.scheduleCheckAfterUnmount(),
            n && n.group && n.group.remove(o),
            r && r.deregister && r.deregister(o));
    }
    safeToRemove() {
        const { safeToRemove: t } = this.props;
        t && t();
    }
    render() {
        return null;
    }
}
function _0(e) {
    const [t, n] = Nk(),
        r = S.useContext(O0);
    return m.jsx(jk, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: S.useContext(I0),
        isPresent: t,
        safeToRemove: n,
    });
}
const Mk = {
        borderRadius: {
            ...mo,
            applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
            ],
        },
        borderTopLeftRadius: mo,
        borderTopRightRadius: mo,
        borderBottomLeftRadius: mo,
        borderBottomRightRadius: mo,
        boxShadow: Ak,
    },
    V0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    Lk = V0.length,
    vh = (e) => (typeof e == "string" ? parseFloat(e) : e),
    xh = (e) => typeof e == "number" || B.test(e);
function Dk(e, t, n, r, o, i) {
    o
        ? ((e.opacity = ie(0, n.opacity !== void 0 ? n.opacity : 1, Ok(r))),
          (e.opacityExit = ie(t.opacity !== void 0 ? t.opacity : 1, 0, Ik(r))))
        : i &&
          (e.opacity = ie(
              t.opacity !== void 0 ? t.opacity : 1,
              n.opacity !== void 0 ? n.opacity : 1,
              r
          ));
    for (let s = 0; s < Lk; s++) {
        const a = `border${V0[s]}Radius`;
        let l = wh(t, a),
            c = wh(n, a);
        if (l === void 0 && c === void 0) continue;
        l || (l = 0),
            c || (c = 0),
            l === 0 || c === 0 || xh(l) === xh(c)
                ? ((e[a] = Math.max(ie(vh(l), vh(c), r), 0)),
                  (_t.test(c) || _t.test(l)) && (e[a] += "%"))
                : (e[a] = c);
    }
    (t.rotate || n.rotate) && (e.rotate = ie(t.rotate || 0, n.rotate || 0, r));
}
function wh(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Ok = F0(0, 0.5, Hv),
    Ik = F0(0.5, 0.95, Ie);
function F0(e, t, n) {
    return (r) => (r < e ? 0 : r > t ? 1 : n(Gr(e, t, r)));
}
function Sh(e, t) {
    (e.min = t.min), (e.max = t.max);
}
function lt(e, t) {
    Sh(e.x, t.x), Sh(e.y, t.y);
}
function Th(e, t) {
    (e.translate = t.translate),
        (e.scale = t.scale),
        (e.originPoint = t.originPoint),
        (e.origin = t.origin);
}
function Ch(e, t, n, r, o) {
    return (
        (e -= t),
        (e = Us(e, 1 / n, r)),
        o !== void 0 && (e = Us(e, 1 / o, r)),
        e
    );
}
function _k(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
    if (
        (_t.test(t) &&
            ((t = parseFloat(t)), (t = ie(s.min, s.max, t / 100) - s.min)),
        typeof t != "number")
    )
        return;
    let a = ie(i.min, i.max, r);
    e === i && (a -= t),
        (e.min = Ch(e.min, t, n, a, o)),
        (e.max = Ch(e.max, t, n, a, o));
}
function Ph(e, t, [n, r, o], i, s) {
    _k(e, t[n], t[r], t[o], t.scale, i, s);
}
const Vk = ["x", "scaleX", "originX"],
    Fk = ["y", "scaleY", "originY"];
function bh(e, t, n, r) {
    Ph(e.x, t, Vk, n ? n.x : void 0, r ? r.x : void 0),
        Ph(e.y, t, Fk, n ? n.y : void 0, r ? r.y : void 0);
}
function Eh(e) {
    return e.translate === 0 && e.scale === 1;
}
function z0(e) {
    return Eh(e.x) && Eh(e.y);
}
function kh(e, t) {
    return e.min === t.min && e.max === t.max;
}
function zk(e, t) {
    return kh(e.x, t.x) && kh(e.y, t.y);
}
function Nh(e, t) {
    return (
        Math.round(e.min) === Math.round(t.min) &&
        Math.round(e.max) === Math.round(t.max)
    );
}
function B0(e, t) {
    return Nh(e.x, t.x) && Nh(e.y, t.y);
}
function Ah(e) {
    return rt(e.x) / rt(e.y);
}
function Rh(e, t) {
    return (
        e.translate === t.translate &&
        e.scale === t.scale &&
        e.originPoint === t.originPoint
    );
}
class Bk {
    constructor() {
        this.members = [];
    }
    add(t) {
        bd(this.members, t), t.scheduleRender();
    }
    remove(t) {
        if (
            (Ed(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
        ) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n);
        }
    }
    relegate(t) {
        const n = this.members.findIndex((o) => t === o);
        if (n === 0) return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const i = this.members[o];
            if (i.isPresent !== !1) {
                r = i;
                break;
            }
        }
        return r ? (this.promote(r), !0) : !1;
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
                t.scheduleRender(),
                (t.resumeFrom = r),
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot &&
                    ((t.snapshot = r.snapshot),
                    (t.snapshot.latestValues =
                        r.animationValues || r.latestValues)),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const { crossfade: o } = t.options;
            o === !1 && r.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((t) => {
            const { options: n, resumingFrom: r } = t;
            n.onExitComplete && n.onExitComplete(),
                r && r.options.onExitComplete && r.options.onExitComplete();
        });
    }
    scheduleRender() {
        this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
        });
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
}
function $k(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x,
        i = e.y.translate / t.y,
        s = (n == null ? void 0 : n.z) || 0;
    if (
        ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
        (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
        n)
    ) {
        const {
            transformPerspective: c,
            rotate: u,
            rotateX: d,
            rotateY: f,
            skewX: y,
            skewY: x,
        } = n;
        c && (r = `perspective(${c}px) ${r}`),
            u && (r += `rotate(${u}deg) `),
            d && (r += `rotateX(${d}deg) `),
            f && (r += `rotateY(${f}deg) `),
            y && (r += `skewX(${y}deg) `),
            x && (r += `skewY(${x}deg) `);
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Uk = (e, t) => e.depth - t.depth;
class Hk {
    constructor() {
        (this.children = []), (this.isDirty = !1);
    }
    add(t) {
        bd(this.children, t), (this.isDirty = !0);
    }
    remove(t) {
        Ed(this.children, t), (this.isDirty = !0);
    }
    forEach(t) {
        this.isDirty && this.children.sort(Uk),
            (this.isDirty = !1),
            this.children.forEach(t);
    }
}
function cs(e) {
    const t = Oe(e) ? e.get() : e;
    return ME(t) ? t.toValue() : t;
}
function Wk(e, t) {
    const n = Vt.now(),
        r = ({ timestamp: o }) => {
            const i = o - n;
            i >= t && (Ln(r), e(i - t));
        };
    return Q.read(r, !0), () => Ln(r);
}
function Kk(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
}
function Gk(e, t, n) {
    const r = Oe(e) ? e : ii(e);
    return r.start(Pd("", r, t, n)), r.animation;
}
const Hn = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0,
    },
    So = typeof window < "u" && window.MotionDebug !== void 0,
    xl = ["", "X", "Y", "Z"],
    Yk = { visibility: "hidden" },
    jh = 1e3;
let Xk = 0;
function wl(e, t, n, r) {
    const { latestValues: o } = t;
    o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function $0(e) {
    if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
    const { visualElement: t } = e.options;
    if (!t) return;
    const n = S0(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const { layout: o, layoutId: i } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", Q, !(o || i));
    }
    const { parent: r } = e;
    r && !r.hasCheckedOptimisedAppear && $0(r);
}
function U0({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: o,
}) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            (this.id = Xk++),
                (this.animationId = 0),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.isProjectionDirty = !1),
                (this.isSharedProjectionDirty = !1),
                (this.isTransformDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.hasCheckedOptimisedAppear = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.hasTreeAnimated = !1),
                (this.updateScheduled = !1),
                (this.scheduleUpdate = () => this.update()),
                (this.projectionUpdateScheduled = !1),
                (this.checkUpdateFailed = () => {
                    this.isUpdating &&
                        ((this.isUpdating = !1), this.clearAllSnapshots());
                }),
                (this.updateProjection = () => {
                    (this.projectionUpdateScheduled = !1),
                        So &&
                            (Hn.totalNodes =
                                Hn.resolvedTargetDeltas =
                                Hn.recalculatedProjection =
                                    0),
                        this.nodes.forEach(Zk),
                        this.nodes.forEach(rN),
                        this.nodes.forEach(oN),
                        this.nodes.forEach(Jk),
                        So && window.MotionDebug.record(Hn);
                }),
                (this.resolvedRelativeTargetAt = 0),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.latestValues = s),
                (this.root = a ? a.root || a : this),
                (this.path = a ? [...a.path, a] : []),
                (this.parent = a),
                (this.depth = a ? a.depth + 1 : 0);
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Hk());
        }
        addEventListener(s, a) {
            return (
                this.eventHandlers.has(s) ||
                    this.eventHandlers.set(s, new kd()),
                this.eventHandlers.get(s).add(a)
            );
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a);
        }
        hasListeners(s) {
            return this.eventHandlers.has(s);
        }
        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = Kk(s)), (this.instance = s);
            const { layoutId: l, layout: c, visualElement: u } = this.options;
            if (
                (u && !u.current && u.mount(s),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                a && (c || l) && (this.isLayoutDirty = !0),
                e)
            ) {
                let d;
                const f = () => (this.root.updateBlockedByResize = !1);
                e(s, () => {
                    (this.root.updateBlockedByResize = !0),
                        d && d(),
                        (d = Wk(f, 250)),
                        ls.hasAnimatedSinceResize &&
                            ((ls.hasAnimatedSinceResize = !1),
                            this.nodes.forEach(Lh));
                });
            }
            l && this.root.registerSharedNode(l, this),
                this.options.animate !== !1 &&
                    u &&
                    (l || c) &&
                    this.addEventListener(
                        "didUpdate",
                        ({
                            delta: d,
                            hasLayoutChanged: f,
                            hasRelativeTargetChanged: y,
                            layout: x,
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                (this.target = void 0),
                                    (this.relativeTarget = void 0);
                                return;
                            }
                            const g =
                                    this.options.transition ||
                                    u.getDefaultTransition() ||
                                    cN,
                                {
                                    onLayoutAnimationStart: w,
                                    onLayoutAnimationComplete: p,
                                } = u.getProps(),
                                h =
                                    !this.targetLayout ||
                                    !B0(this.targetLayout, x) ||
                                    y,
                                v = !f && y;
                            if (
                                this.options.layoutRoot ||
                                (this.resumeFrom && this.resumeFrom.instance) ||
                                v ||
                                (f && (h || !this.currentAnimation))
                            ) {
                                this.resumeFrom &&
                                    ((this.resumingFrom = this.resumeFrom),
                                    (this.resumingFrom.resumingFrom = void 0)),
                                    this.setAnimationOrigin(d, v);
                                const T = {
                                    ...ud(g, "layout"),
                                    onPlay: w,
                                    onComplete: p,
                                };
                                (u.shouldReduceMotion ||
                                    this.options.layoutRoot) &&
                                    ((T.delay = 0), (T.type = !1)),
                                    this.startAnimation(T);
                            } else
                                f || Lh(this),
                                    this.isLead() &&
                                        this.options.onExitComplete &&
                                        this.options.onExitComplete();
                            this.targetLayout = x;
                        }
                    );
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
                this.parent && this.parent.children.delete(this),
                (this.instance = void 0),
                Ln(this.updateProjection);
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (
                this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                !1
            );
        }
        startUpdate() {
            this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                this.nodes && this.nodes.forEach(iN),
                this.animationId++);
        }
        getTransformTemplate() {
            const { visualElement: s } = this.options;
            return s && s.getProps().transformTemplate;
        }
        willUpdate(s = !0) {
            if (
                ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            if (
                (window.MotionCancelOptimisedAnimation &&
                    !this.hasCheckedOptimisedAppear &&
                    $0(this),
                !this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
            )
                return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u];
                (d.shouldResetTransform = !0),
                    d.updateScroll("snapshot"),
                    d.options.layoutRoot && d.willUpdate(!1);
            }
            const { layoutId: a, layout: l } = this.options;
            if (a === void 0 && !l) return;
            const c = this.getTransformTemplate();
            (this.prevTransformTemplateValue = c
                ? c(this.latestValues, "")
                : void 0),
                this.updateSnapshot(),
                s && this.notifyListeners("willUpdate");
        }
        update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
                this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(Mh);
                return;
            }
            this.isUpdating || this.nodes.forEach(tN),
                (this.isUpdating = !1),
                this.nodes.forEach(nN),
                this.nodes.forEach(Qk),
                this.nodes.forEach(qk),
                this.clearAllSnapshots();
            const a = Vt.now();
            (Ne.delta = on(0, 1e3 / 60, a - Ne.timestamp)),
                (Ne.timestamp = a),
                (Ne.isProcessing = !0),
                dl.update.process(Ne),
                dl.preRender.process(Ne),
                dl.render.process(Ne),
                (Ne.isProcessing = !1);
        }
        didUpdate() {
            this.updateScheduled ||
                ((this.updateScheduled = !0), Rd.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
            this.nodes.forEach(eN), this.sharedNodes.forEach(sN);
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
                ((this.projectionUpdateScheduled = !0),
                Q.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
            Q.postRender(() => {
                this.isLayoutDirty
                    ? this.root.didUpdate()
                    : this.root.checkUpdateFailed();
            });
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure());
        }
        updateLayout() {
            if (
                !this.instance ||
                (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) &&
                    !this.isLayoutDirty)
            )
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const s = this.layout;
            (this.layout = this.measure(!1)),
                (this.layoutCorrected = he()),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: a } = this.options;
            a &&
                a.notify(
                    "LayoutMeasure",
                    this.layout.layoutBox,
                    s ? s.layoutBox : void 0
                );
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (
                (this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === s &&
                    (a = !1),
                a)
            ) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l,
                };
            }
        }
        resetTransform() {
            if (!o) return;
            const s =
                    this.isLayoutDirty ||
                    this.shouldResetTransform ||
                    this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !z0(this.projectionDelta),
                l = this.getTransformTemplate(),
                c = l ? l(this.latestValues, "") : void 0,
                u = c !== this.prevTransformTemplateValue;
            s &&
                (a || Un(this.latestValues) || u) &&
                (o(this.instance, c),
                (this.shouldResetTransform = !1),
                this.scheduleRender());
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return (
                s && (l = this.removeTransform(l)),
                uN(l),
                {
                    animationId: this.root.animationId,
                    measuredBox: a,
                    layoutBox: l,
                    latestValues: {},
                    source: this.id,
                }
            );
        }
        measurePageBox() {
            var s;
            const { visualElement: a } = this.options;
            if (!a) return he();
            const l = a.measureViewportBox();
            if (
                !(
                    ((s = this.scroll) === null || s === void 0
                        ? void 0
                        : s.wasRoot) || this.path.some(dN)
                )
            ) {
                const { scroll: u } = this.root;
                u && (Er(l.x, u.offset.x), Er(l.y, u.offset.y));
            }
            return l;
        }
        removeElementScroll(s) {
            var a;
            const l = he();
            if (
                (lt(l, s),
                !((a = this.scroll) === null || a === void 0) && a.wasRoot)
            )
                return l;
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c],
                    { scroll: d, options: f } = u;
                u !== this.root &&
                    d &&
                    f.layoutScroll &&
                    (d.wasRoot && lt(l, s),
                    Er(l.x, d.offset.x),
                    Er(l.y, d.offset.y));
            }
            return l;
        }
        applyTransform(s, a = !1) {
            const l = he();
            lt(l, s);
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c];
                !a &&
                    u.options.layoutScroll &&
                    u.scroll &&
                    u !== u.root &&
                    kr(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
                    Un(u.latestValues) && kr(l, u.latestValues);
            }
            return Un(this.latestValues) && kr(l, this.latestValues), l;
        }
        removeTransform(s) {
            const a = he();
            lt(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l];
                if (!c.instance || !Un(c.latestValues)) continue;
                zc(c.latestValues) && c.updateSnapshot();
                const u = he(),
                    d = c.measurePageBox();
                lt(u, d),
                    bh(
                        a,
                        c.latestValues,
                        c.snapshot ? c.snapshot.layoutBox : void 0,
                        u
                    );
            }
            return Un(this.latestValues) && bh(a, this.latestValues), a;
        }
        setTargetDelta(s) {
            (this.targetDelta = s),
                this.root.scheduleUpdateProjection(),
                (this.isProjectionDirty = !0);
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
            };
        }
        clearMeasurements() {
            (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent &&
                this.relativeParent.resolvedRelativeTargetAt !== Ne.timestamp &&
                this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(s = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty ||
                (this.isProjectionDirty = l.isProjectionDirty),
                this.isTransformDirty ||
                    (this.isTransformDirty = l.isTransformDirty),
                this.isSharedProjectionDirty ||
                    (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== l;
            if (
                !(
                    s ||
                    (c && this.isSharedProjectionDirty) ||
                    this.isProjectionDirty ||
                    (!((a = this.parent) === null || a === void 0) &&
                        a.isProjectionDirty) ||
                    this.attemptToResolveRelativeTarget ||
                    this.root.updateBlockedByResize
                )
            )
                return;
            const { layout: d, layoutId: f } = this.options;
            if (!(!this.layout || !(d || f))) {
                if (
                    ((this.resolvedRelativeTargetAt = Ne.timestamp),
                    !this.targetDelta && !this.relativeTarget)
                ) {
                    const y = this.getClosestProjectingParent();
                    y && y.layout && this.animationProgress !== 1
                        ? ((this.relativeParent = y),
                          this.forceRelativeParentToResolveTarget(),
                          (this.relativeTarget = he()),
                          (this.relativeTargetOrigin = he()),
                          Oo(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              y.layout.layoutBox
                          ),
                          lt(this.relativeTarget, this.relativeTargetOrigin))
                        : (this.relativeParent = this.relativeTarget = void 0);
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (
                        (this.target ||
                            ((this.target = he()),
                            (this.targetWithTransforms = he())),
                        this.relativeTarget &&
                        this.relativeTargetOrigin &&
                        this.relativeParent &&
                        this.relativeParent.target
                            ? (this.forceRelativeParentToResolveTarget(),
                              fk(
                                  this.target,
                                  this.relativeTarget,
                                  this.relativeParent.target
                              ))
                            : this.targetDelta
                            ? (this.resumingFrom
                                  ? (this.target = this.applyTransform(
                                        this.layout.layoutBox
                                    ))
                                  : lt(this.target, this.layout.layoutBox),
                              M0(this.target, this.targetDelta))
                            : lt(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget)
                    ) {
                        this.attemptToResolveRelativeTarget = !1;
                        const y = this.getClosestProjectingParent();
                        y &&
                        !!y.resumingFrom == !!this.resumingFrom &&
                        !y.options.layoutScroll &&
                        y.target &&
                        this.animationProgress !== 1
                            ? ((this.relativeParent = y),
                              this.forceRelativeParentToResolveTarget(),
                              (this.relativeTarget = he()),
                              (this.relativeTargetOrigin = he()),
                              Oo(
                                  this.relativeTargetOrigin,
                                  this.target,
                                  y.target
                              ),
                              lt(
                                  this.relativeTarget,
                                  this.relativeTargetOrigin
                              ))
                            : (this.relativeParent = this.relativeTarget =
                                  void 0);
                    }
                    So && Hn.resolvedTargetDeltas++;
                }
            }
        }
        getClosestProjectingParent() {
            if (
                !(
                    !this.parent ||
                    zc(this.parent.latestValues) ||
                    j0(this.parent.latestValues)
                )
            )
                return this.parent.isProjecting()
                    ? this.parent
                    : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
            return !!(
                (this.relativeTarget ||
                    this.targetDelta ||
                    this.options.layoutRoot) &&
                this.layout
            );
        }
        calcProjection() {
            var s;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let c = !0;
            if (
                ((this.isProjectionDirty ||
                    (!((s = this.parent) === null || s === void 0) &&
                        s.isProjectionDirty)) &&
                    (c = !1),
                l &&
                    (this.isSharedProjectionDirty || this.isTransformDirty) &&
                    (c = !1),
                this.resolvedRelativeTargetAt === Ne.timestamp && (c = !1),
                c)
            )
                return;
            const { layout: u, layoutId: d } = this.options;
            if (
                ((this.isTreeAnimating = !!(
                    (this.parent && this.parent.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                    (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(u || d))
            )
                return;
            lt(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                y = this.treeScale.y;
            Sk(this.layoutCorrected, this.treeScale, this.path, l),
                a.layout &&
                    !a.target &&
                    (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
                    ((a.target = a.layout.layoutBox),
                    (a.targetWithTransforms = he()));
            const { target: x } = a;
            if (!x) {
                this.prevProjectionDelta &&
                    (this.createProjectionDeltas(), this.scheduleRender());
                return;
            }
            !this.projectionDelta || !this.prevProjectionDelta
                ? this.createProjectionDeltas()
                : (Th(this.prevProjectionDelta.x, this.projectionDelta.x),
                  Th(this.prevProjectionDelta.y, this.projectionDelta.y)),
                Do(
                    this.projectionDelta,
                    this.layoutCorrected,
                    x,
                    this.latestValues
                ),
                (this.treeScale.x !== f ||
                    this.treeScale.y !== y ||
                    !Rh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                    !Rh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
                    ((this.hasProjected = !0),
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", x)),
                So && Hn.recalculatedProjection++;
        }
        hide() {
            this.isVisible = !1;
        }
        show() {
            this.isVisible = !0;
        }
        scheduleRender(s = !0) {
            var a;
            if (
                ((a = this.options.visualElement) === null ||
                    a === void 0 ||
                    a.scheduleRender(),
                s)
            ) {
                const l = this.getStack();
                l && l.scheduleRender();
            }
            this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
            (this.prevProjectionDelta = br()),
                (this.projectionDelta = br()),
                (this.projectionDeltaWithTransform = br());
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot,
                c = l ? l.latestValues : {},
                u = { ...this.latestValues },
                d = br();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
                (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !a);
            const f = he(),
                y = l ? l.source : void 0,
                x = this.layout ? this.layout.source : void 0,
                g = y !== x,
                w = this.getStack(),
                p = !w || w.members.length <= 1,
                h = !!(
                    g &&
                    !p &&
                    this.options.crossfade === !0 &&
                    !this.path.some(lN)
                );
            this.animationProgress = 0;
            let v;
            (this.mixTargetDelta = (T) => {
                const C = T / 1e3;
                Dh(d.x, s.x, C),
                    Dh(d.y, s.y, C),
                    this.setTargetDelta(d),
                    this.relativeTarget &&
                        this.relativeTargetOrigin &&
                        this.layout &&
                        this.relativeParent &&
                        this.relativeParent.layout &&
                        (Oo(
                            f,
                            this.layout.layoutBox,
                            this.relativeParent.layout.layoutBox
                        ),
                        aN(
                            this.relativeTarget,
                            this.relativeTargetOrigin,
                            f,
                            C
                        ),
                        v &&
                            zk(this.relativeTarget, v) &&
                            (this.isProjectionDirty = !1),
                        v || (v = he()),
                        lt(v, this.relativeTarget)),
                    g &&
                        ((this.animationValues = u),
                        Dk(u, c, this.latestValues, C, h, p)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    (this.animationProgress = C);
            }),
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom &&
                    this.resumingFrom.currentAnimation &&
                    this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation &&
                    (Ln(this.pendingAnimation),
                    (this.pendingAnimation = void 0)),
                (this.pendingAnimation = Q.update(() => {
                    (ls.hasAnimatedSinceResize = !0),
                        (this.currentAnimation = Gk(0, jh, {
                            ...s,
                            onUpdate: (a) => {
                                this.mixTargetDelta(a),
                                    s.onUpdate && s.onUpdate(a);
                            },
                            onComplete: () => {
                                s.onComplete && s.onComplete(),
                                    this.completeAnimation();
                            },
                        })),
                        this.resumingFrom &&
                            (this.resumingFrom.currentAnimation =
                                this.currentAnimation),
                        (this.pendingAnimation = void 0);
                }));
        }
        completeAnimation() {
            this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0));
            const s = this.getStack();
            s && s.exitAnimationComplete(),
                (this.resumingFrom =
                    this.currentAnimation =
                    this.animationValues =
                        void 0),
                this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            this.currentAnimation &&
                (this.mixTargetDelta && this.mixTargetDelta(jh),
                this.currentAnimation.stop()),
                this.completeAnimation();
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: c,
                latestValues: u,
            } = s;
            if (!(!a || !l || !c)) {
                if (
                    this !== s &&
                    this.layout &&
                    c &&
                    H0(
                        this.options.animationType,
                        this.layout.layoutBox,
                        c.layoutBox
                    )
                ) {
                    l = this.target || he();
                    const d = rt(this.layout.layoutBox.x);
                    (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
                    const f = rt(this.layout.layoutBox.y);
                    (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
                }
                lt(a, l),
                    kr(a, u),
                    Do(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        a,
                        u
                    );
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new Bk()),
                this.sharedNodes.get(s).add(a);
            const c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity:
                    c && c.shouldPreserveFollowOpacity
                        ? c.shouldPreserveFollowOpacity(a)
                        : void 0,
            });
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0;
        }
        getLead() {
            var s;
            const { layoutId: a } = this.options;
            return a
                ? ((s = this.getStack()) === null || s === void 0
                      ? void 0
                      : s.lead) || this
                : this;
        }
        getPrevLead() {
            var s;
            const { layoutId: a } = this.options;
            return a
                ? (s = this.getStack()) === null || s === void 0
                    ? void 0
                    : s.prevLead
                : void 0;
        }
        getStack() {
            const { layoutId: s } = this.options;
            if (s) return this.root.sharedNodes.get(s);
        }
        promote({
            needsReset: s,
            transition: a,
            preserveFollowOpacity: l,
        } = {}) {
            const c = this.getStack();
            c && c.promote(this, l),
                s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                a && this.setOptions({ transition: a });
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1;
        }
        resetSkewAndRotation() {
            const { visualElement: s } = this.options;
            if (!s) return;
            let a = !1;
            const { latestValues: l } = s;
            if (
                ((l.z ||
                    l.rotate ||
                    l.rotateX ||
                    l.rotateY ||
                    l.rotateZ ||
                    l.skewX ||
                    l.skewY) &&
                    (a = !0),
                !a)
            )
                return;
            const c = {};
            l.z && wl("z", s, c, this.animationValues);
            for (let u = 0; u < xl.length; u++)
                wl(`rotate${xl[u]}`, s, c, this.animationValues),
                    wl(`skew${xl[u]}`, s, c, this.animationValues);
            s.render();
            for (const u in c)
                s.setStaticValue(u, c[u]),
                    this.animationValues && (this.animationValues[u] = c[u]);
            s.scheduleRender();
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return Yk;
            const c = { visibility: "" },
                u = this.getTransformTemplate();
            if (this.needsReset)
                return (
                    (this.needsReset = !1),
                    (c.opacity = ""),
                    (c.pointerEvents =
                        cs(s == null ? void 0 : s.pointerEvents) || ""),
                    (c.transform = u ? u(this.latestValues, "") : "none"),
                    c
                );
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const g = {};
                return (
                    this.options.layoutId &&
                        ((g.opacity =
                            this.latestValues.opacity !== void 0
                                ? this.latestValues.opacity
                                : 1),
                        (g.pointerEvents =
                            cs(s == null ? void 0 : s.pointerEvents) || "")),
                    this.hasProjected &&
                        !Un(this.latestValues) &&
                        ((g.transform = u ? u({}, "") : "none"),
                        (this.hasProjected = !1)),
                    g
                );
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(),
                (c.transform = $k(
                    this.projectionDeltaWithTransform,
                    this.treeScale,
                    f
                )),
                u && (c.transform = u(f, c.transform));
            const { x: y, y: x } = this.projectionDelta;
            (c.transformOrigin = `${y.origin * 100}% ${x.origin * 100}% 0`),
                d.animationValues
                    ? (c.opacity =
                          d === this
                              ? (l =
                                    (a = f.opacity) !== null && a !== void 0
                                        ? a
                                        : this.latestValues.opacity) !== null &&
                                l !== void 0
                                  ? l
                                  : 1
                              : this.preserveOpacity
                              ? this.latestValues.opacity
                              : f.opacityExit)
                    : (c.opacity =
                          d === this
                              ? f.opacity !== void 0
                                  ? f.opacity
                                  : ""
                              : f.opacityExit !== void 0
                              ? f.opacityExit
                              : 0);
            for (const g in Hs) {
                if (f[g] === void 0) continue;
                const { correct: w, applyTo: p } = Hs[g],
                    h = c.transform === "none" ? f[g] : w(f[g], d);
                if (p) {
                    const v = p.length;
                    for (let T = 0; T < v; T++) c[p[T]] = h;
                } else c[g] = h;
            }
            return (
                this.options.layoutId &&
                    (c.pointerEvents =
                        d === this
                            ? cs(s == null ? void 0 : s.pointerEvents) || ""
                            : "none"),
                c
            );
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
            this.root.nodes.forEach((s) => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0
                    ? void 0
                    : a.stop();
            }),
                this.root.nodes.forEach(Mh),
                this.root.sharedNodes.clear();
        }
    };
}
function Qk(e) {
    e.updateLayout();
}
function qk(e) {
    var t;
    const n =
        ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
        e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: o } = e.layout,
            { animationType: i } = e.options,
            s = n.source !== e.layout.source;
        i === "size"
            ? ct((d) => {
                  const f = s ? n.measuredBox[d] : n.layoutBox[d],
                      y = rt(f);
                  (f.min = r[d].min), (f.max = f.min + y);
              })
            : H0(i, n.layoutBox, r) &&
              ct((d) => {
                  const f = s ? n.measuredBox[d] : n.layoutBox[d],
                      y = rt(r[d]);
                  (f.max = f.min + y),
                      e.relativeTarget &&
                          !e.currentAnimation &&
                          ((e.isProjectionDirty = !0),
                          (e.relativeTarget[d].max =
                              e.relativeTarget[d].min + y));
              });
        const a = br();
        Do(a, r, n.layoutBox);
        const l = br();
        s
            ? Do(l, e.applyTransform(o, !0), n.measuredBox)
            : Do(l, r, n.layoutBox);
        const c = !z0(a);
        let u = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const { snapshot: f, layout: y } = d;
                if (f && y) {
                    const x = he();
                    Oo(x, n.layoutBox, f.layoutBox);
                    const g = he();
                    Oo(g, r, y.layoutBox),
                        B0(x, g) || (u = !0),
                        d.options.layoutRoot &&
                            ((e.relativeTarget = g),
                            (e.relativeTargetOrigin = x),
                            (e.relativeParent = d));
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: u,
        });
    } else if (e.isLead()) {
        const { onExitComplete: r } = e.options;
        r && r();
    }
    e.options.transition = void 0;
}
function Zk(e) {
    So && Hn.totalNodes++,
        e.parent &&
            (e.isProjecting() ||
                (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
                (e.isSharedProjectionDirty = !!(
                    e.isProjectionDirty ||
                    e.parent.isProjectionDirty ||
                    e.parent.isSharedProjectionDirty
                )),
            e.isTransformDirty ||
                (e.isTransformDirty = e.parent.isTransformDirty));
}
function Jk(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function eN(e) {
    e.clearSnapshot();
}
function Mh(e) {
    e.clearMeasurements();
}
function tN(e) {
    e.isLayoutDirty = !1;
}
function nN(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
        e.resetTransform();
}
function Lh(e) {
    e.finishAnimation(),
        (e.targetDelta = e.relativeTarget = e.target = void 0),
        (e.isProjectionDirty = !0);
}
function rN(e) {
    e.resolveTargetDelta();
}
function oN(e) {
    e.calcProjection();
}
function iN(e) {
    e.resetSkewAndRotation();
}
function sN(e) {
    e.removeLeadSnapshot();
}
function Dh(e, t, n) {
    (e.translate = ie(t.translate, 0, n)),
        (e.scale = ie(t.scale, 1, n)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint);
}
function Oh(e, t, n, r) {
    (e.min = ie(t.min, n.min, r)), (e.max = ie(t.max, n.max, r));
}
function aN(e, t, n, r) {
    Oh(e.x, t.x, n.x, r), Oh(e.y, t.y, n.y, r);
}
function lN(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const cN = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Ih = (e) =>
        typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(e),
    _h = Ih("applewebkit/") && !Ih("chrome/") ? Math.round : Ie;
function Vh(e) {
    (e.min = _h(e.min)), (e.max = _h(e.max));
}
function uN(e) {
    Vh(e.x), Vh(e.y);
}
function H0(e, t, n) {
    return (
        e === "position" || (e === "preserve-aspect" && !dk(Ah(t), Ah(n), 0.2))
    );
}
function dN(e) {
    var t;
    return (
        e !== e.root &&
        ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
    );
}
const fN = U0({
        attachResizeListener: (e, t) => Yt(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
        }),
        checkIsScrollRoot: () => !0,
    }),
    Sl = { current: void 0 },
    W0 = U0({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
            if (!Sl.current) {
                const e = new fN({});
                e.mount(window),
                    e.setOptions({ layoutScroll: !0 }),
                    (Sl.current = e);
            }
            return Sl.current;
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none";
        },
        checkIsScrollRoot: (e) =>
            window.getComputedStyle(e).position === "fixed",
    }),
    pN = {
        pan: { Feature: kk },
        drag: { Feature: Ek, ProjectionNode: W0, MeasureLayout: _0 },
    };
function Fh(e, t, n) {
    const { props: r } = e;
    e.animationState &&
        r.whileHover &&
        e.animationState.setActive("whileHover", n);
    const o = r[n ? "onHoverStart" : "onHoverEnd"];
    o && Q.postRender(() => o(t, xi(t)));
}
class hN extends Vn {
    mount() {
        const { current: t, props: n } = this.node;
        t &&
            (this.unmount = tk(
                t,
                (r) => (Fh(this.node, r, !0), (o) => Fh(this.node, o, !1)),
                { passive: !n.onHoverStart && !n.onHoverEnd }
            ));
    }
    unmount() {}
}
class mN extends Vn {
    constructor() {
        super(...arguments), (this.isActive = !1);
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible");
        } catch {
            t = !0;
        }
        !t ||
            !this.node.animationState ||
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
    }
    onBlur() {
        !this.isActive ||
            !this.node.animationState ||
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
    }
    mount() {
        this.unmount = En(
            Yt(this.node.current, "focus", () => this.onFocus()),
            Yt(this.node.current, "blur", () => this.onBlur())
        );
    }
    unmount() {}
}
const K0 = (e, t) => (t ? (e === t ? !0 : K0(e, t.parentElement)) : !1);
function Tl(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, xi(n));
}
class gN extends Vn {
    constructor() {
        super(...arguments),
            (this.removeStartListeners = Ie),
            (this.removeEndListeners = Ie),
            (this.removeAccessibleListeners = Ie),
            (this.startPointerPress = (t, n) => {
                if (this.isPressing) return;
                this.removeEndListeners();
                const r = this.node.getProps(),
                    i = kn(
                        window,
                        "pointerup",
                        (a, l) => {
                            if (!this.checkPressEnd()) return;
                            const {
                                    onTap: c,
                                    onTapCancel: u,
                                    globalTapTarget: d,
                                } = this.node.getProps(),
                                f =
                                    !d && !K0(this.node.current, a.target)
                                        ? u
                                        : c;
                            f && Q.update(() => f(a, l));
                        },
                        { passive: !(r.onTap || r.onPointerUp) }
                    ),
                    s = kn(
                        window,
                        "pointercancel",
                        (a, l) => this.cancelPress(a, l),
                        { passive: !(r.onTapCancel || r.onPointerCancel) }
                    );
                (this.removeEndListeners = En(i, s)), this.startPress(t, n);
            }),
            (this.startAccessiblePress = () => {
                const t = (i) => {
                        if (i.key !== "Enter" || this.isPressing) return;
                        const s = (a) => {
                            a.key !== "Enter" ||
                                !this.checkPressEnd() ||
                                Tl("up", (l, c) => {
                                    const { onTap: u } = this.node.getProps();
                                    u && Q.postRender(() => u(l, c));
                                });
                        };
                        this.removeEndListeners(),
                            (this.removeEndListeners = Yt(
                                this.node.current,
                                "keyup",
                                s
                            )),
                            Tl("down", (a, l) => {
                                this.startPress(a, l);
                            });
                    },
                    n = Yt(this.node.current, "keydown", t),
                    r = () => {
                        this.isPressing &&
                            Tl("cancel", (i, s) => this.cancelPress(i, s));
                    },
                    o = Yt(this.node.current, "blur", r);
                this.removeAccessibleListeners = En(n, o);
            });
    }
    startPress(t, n) {
        this.isPressing = !0;
        const { onTapStart: r, whileTap: o } = this.node.getProps();
        o &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            r && Q.postRender(() => r(t, n));
    }
    checkPressEnd() {
        return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
                this.node.animationState &&
                this.node.animationState.setActive("whileTap", !1),
            !P0()
        );
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const { onTapCancel: r } = this.node.getProps();
        r && Q.postRender(() => r(t, n));
    }
    mount() {
        const t = this.node.getProps(),
            n = kn(
                t.globalTapTarget ? window : this.node.current,
                "pointerdown",
                this.startPointerPress,
                { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            r = Yt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = En(n, r);
    }
    unmount() {
        this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
    }
}
const $c = new WeakMap(),
    Cl = new WeakMap(),
    yN = (e) => {
        const t = $c.get(e.target);
        t && t(e);
    },
    vN = (e) => {
        e.forEach(yN);
    };
function xN({ root: e, ...t }) {
    const n = e || document;
    Cl.has(n) || Cl.set(n, {});
    const r = Cl.get(n),
        o = JSON.stringify(t);
    return (
        r[o] || (r[o] = new IntersectionObserver(vN, { root: e, ...t })), r[o]
    );
}
function wN(e, t, n) {
    const r = xN(t);
    return (
        $c.set(e, n),
        r.observe(e),
        () => {
            $c.delete(e), r.unobserve(e);
        }
    );
}
const SN = { some: 0, all: 1 };
class TN extends Vn {
    constructor() {
        super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
        this.unmount();
        const { viewport: t = {} } = this.node.getProps(),
            { root: n, margin: r, amount: o = "some", once: i } = t,
            s = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: typeof o == "number" ? o : SN[o],
            },
            a = (l) => {
                const { isIntersecting: c } = l;
                if (
                    this.isInView === c ||
                    ((this.isInView = c), i && !c && this.hasEnteredView)
                )
                    return;
                c && (this.hasEnteredView = !0),
                    this.node.animationState &&
                        this.node.animationState.setActive("whileInView", c);
                const { onViewportEnter: u, onViewportLeave: d } =
                        this.node.getProps(),
                    f = c ? u : d;
                f && f(l);
            };
        return wN(this.node.current, s, a);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const { props: t, prevProps: n } = this.node;
        ["amount", "margin", "root"].some(CN(t, n)) && this.startObserver();
    }
    unmount() {}
}
function CN({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
}
const PN = {
        inView: { Feature: TN },
        tap: { Feature: gN },
        focus: { Feature: mN },
        hover: { Feature: hN },
    },
    bN = { layout: { ProjectionNode: W0, MeasureLayout: _0 } },
    G0 = S.createContext({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
    }),
    Ta = S.createContext({}),
    jd = typeof window < "u",
    EN = jd ? S.useLayoutEffect : S.useEffect,
    Y0 = S.createContext({ strict: !1 });
function kN(e, t, n, r, o) {
    var i, s;
    const { visualElement: a } = S.useContext(Ta),
        l = S.useContext(Y0),
        c = S.useContext(Ad),
        u = S.useContext(G0).reducedMotion,
        d = S.useRef();
    (r = r || l.renderer),
        !d.current &&
            r &&
            (d.current = r(e, {
                visualState: t,
                parent: a,
                props: n,
                presenceContext: c,
                blockInitialAnimation: c ? c.initial === !1 : !1,
                reducedMotionConfig: u,
            }));
    const f = d.current,
        y = S.useContext(I0);
    f &&
        !f.projection &&
        o &&
        (f.type === "html" || f.type === "svg") &&
        NN(d.current, n, o, y);
    const x = S.useRef(!1);
    S.useInsertionEffect(() => {
        f && x.current && f.update(n, c);
    });
    const g = n[w0],
        w = S.useRef(
            !!g &&
                !(
                    !(
                        (i = window.MotionHandoffIsComplete) === null ||
                        i === void 0
                    ) && i.call(window, g)
                ) &&
                ((s = window.MotionHasOptimisedAnimation) === null ||
                s === void 0
                    ? void 0
                    : s.call(window, g))
        );
    return (
        EN(() => {
            f &&
                ((x.current = !0),
                (window.MotionIsMounted = !0),
                f.updateFeatures(),
                Rd.render(f.render),
                w.current &&
                    f.animationState &&
                    f.animationState.animateChanges());
        }),
        S.useEffect(() => {
            f &&
                (!w.current &&
                    f.animationState &&
                    f.animationState.animateChanges(),
                w.current &&
                    (queueMicrotask(() => {
                        var p;
                        (p = window.MotionHandoffMarkAsComplete) === null ||
                            p === void 0 ||
                            p.call(window, g);
                    }),
                    (w.current = !1)));
        }),
        f
    );
}
function NN(e, t, n, r) {
    const {
        layoutId: o,
        layout: i,
        drag: s,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: c,
    } = t;
    (e.projection = new n(
        e.latestValues,
        t["data-framer-portal-id"] ? void 0 : X0(e.parent)
    )),
        e.projection.setOptions({
            layoutId: o,
            layout: i,
            alwaysMeasureLayout: !!s || (a && Pr(a)),
            visualElement: e,
            animationType: typeof i == "string" ? i : "both",
            initialPromotionConfig: r,
            layoutScroll: l,
            layoutRoot: c,
        });
}
function X0(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : X0(e.parent);
}
function AN(e, t, n) {
    return S.useCallback(
        (r) => {
            r && e.mount && e.mount(r),
                t && (r ? t.mount(r) : t.unmount()),
                n && (typeof n == "function" ? n(r) : Pr(n) && (n.current = r));
        },
        [t]
    );
}
function Ca(e) {
    return xa(e.animate) || cd.some((t) => ni(e[t]));
}
function Q0(e) {
    return !!(Ca(e) || e.variants);
}
function RN(e, t) {
    if (Ca(e)) {
        const { initial: n, animate: r } = e;
        return {
            initial: n === !1 || ni(n) ? n : void 0,
            animate: ni(r) ? r : void 0,
        };
    }
    return e.inherit !== !1 ? t : {};
}
function jN(e) {
    const { initial: t, animate: n } = RN(e, S.useContext(Ta));
    return S.useMemo(() => ({ initial: t, animate: n }), [zh(t), zh(n)]);
}
function zh(e) {
    return Array.isArray(e) ? e.join(" ") : e;
}
const Bh = {
        animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
    },
    Yr = {};
for (const e in Bh) Yr[e] = { isEnabled: (t) => Bh[e].some((n) => !!t[n]) };
function MN(e) {
    for (const t in e) Yr[t] = { ...Yr[t], ...e[t] };
}
const LN = Symbol.for("motionComponentSymbol");
function DN({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: o,
}) {
    e && MN(e);
    function i(a, l) {
        let c;
        const u = { ...S.useContext(G0), ...a, layoutId: ON(a) },
            { isStatic: d } = u,
            f = jN(a),
            y = r(a, d);
        if (!d && jd) {
            IN();
            const x = _N(u);
            (c = x.MeasureLayout),
                (f.visualElement = kN(o, y, u, t, x.ProjectionNode));
        }
        return m.jsxs(Ta.Provider, {
            value: f,
            children: [
                c && f.visualElement
                    ? m.jsx(c, { visualElement: f.visualElement, ...u })
                    : null,
                n(o, a, AN(y, f.visualElement, l), y, d, f.visualElement),
            ],
        });
    }
    const s = S.forwardRef(i);
    return (s[LN] = o), s;
}
function ON({ layoutId: e }) {
    const t = S.useContext(O0).id;
    return t && e !== void 0 ? t + "-" + e : e;
}
function IN(e, t) {
    S.useContext(Y0).strict;
}
function _N(e) {
    const { drag: t, layout: n } = Yr;
    if (!t && !n) return {};
    const r = { ...t, ...n };
    return {
        MeasureLayout:
            (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
                ? r.MeasureLayout
                : void 0,
        ProjectionNode: r.ProjectionNode,
    };
}
const VN = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];
function Md(e) {
    return typeof e != "string" || e.includes("-")
        ? !1
        : !!(VN.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function q0(e, { style: t, vars: n }, r, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(r));
    for (const i in n) e.style.setProperty(i, n[i]);
}
const Z0 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);
function J0(e, t, n, r) {
    q0(e, t, void 0, r);
    for (const o in t.attrs) e.setAttribute(Z0.has(o) ? o : Nd(o), t.attrs[o]);
}
function ex(e, { layout: t, layoutId: n }) {
    return (
        lr.has(e) ||
        e.startsWith("origin") ||
        ((t || n !== void 0) && (!!Hs[e] || e === "opacity"))
    );
}
function Ld(e, t, n) {
    var r;
    const { style: o } = e,
        i = {};
    for (const s in o)
        (Oe(o[s]) ||
            (t.style && Oe(t.style[s])) ||
            ex(s, e) ||
            ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
                ? void 0
                : r.liveStyle) !== void 0) &&
            (i[s] = o[s]);
    return i;
}
function tx(e, t, n) {
    const r = Ld(e, t, n);
    for (const o in e)
        if (Oe(e[o]) || Oe(t[o])) {
            const i =
                gi.indexOf(o) !== -1
                    ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
                    : o;
            r[i] = e[o];
        }
    return r;
}
function FN(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()), t.current;
}
function zN(
    { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
    r,
    o,
    i
) {
    const s = { latestValues: BN(r, o, i, e), renderState: t() };
    return n && (s.mount = (a) => n(r, a, s)), s;
}
const nx = (e) => (t, n) => {
    const r = S.useContext(Ta),
        o = S.useContext(Ad),
        i = () => zN(e, t, r, o);
    return n ? i() : FN(i);
};
function BN(e, t, n, r) {
    const o = {},
        i = r(e, {});
    for (const f in i) o[f] = cs(i[f]);
    let { initial: s, animate: a } = e;
    const l = Ca(e),
        c = Q0(e);
    t &&
        c &&
        !l &&
        e.inherit !== !1 &&
        (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || s === !1;
    const d = u ? a : s;
    if (d && typeof d != "boolean" && !xa(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let y = 0; y < f.length; y++) {
            const x = ad(e, f[y]);
            if (x) {
                const { transitionEnd: g, transition: w, ...p } = x;
                for (const h in p) {
                    let v = p[h];
                    if (Array.isArray(v)) {
                        const T = u ? v.length - 1 : 0;
                        v = v[T];
                    }
                    v !== null && (o[h] = v);
                }
                for (const h in g) o[h] = g[h];
            }
        }
    }
    return o;
}
const Dd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
    rx = () => ({ ...Dd(), attrs: {} }),
    ox = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
    $N = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
    },
    UN = gi.length;
function HN(e, t, n) {
    let r = "",
        o = !0;
    for (let i = 0; i < UN; i++) {
        const s = gi[i],
            a = e[s];
        if (a === void 0) continue;
        let l = !0;
        if (
            (typeof a == "number"
                ? (l = a === (s.startsWith("scale") ? 1 : 0))
                : (l = parseFloat(a) === 0),
            !l || n)
        ) {
            const c = ox(a, yd[s]);
            if (!l) {
                o = !1;
                const u = $N[s] || s;
                r += `${u}(${c}) `;
            }
            n && (t[s] = c);
        }
    }
    return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
}
function Od(e, t, n) {
    const { style: r, vars: o, transformOrigin: i } = e;
    let s = !1,
        a = !1;
    for (const l in t) {
        const c = t[l];
        if (lr.has(l)) {
            s = !0;
            continue;
        } else if (Xv(l)) {
            o[l] = c;
            continue;
        } else {
            const u = ox(c, yd[l]);
            l.startsWith("origin") ? ((a = !0), (i[l] = u)) : (r[l] = u);
        }
    }
    if (
        (t.transform ||
            (s || n
                ? (r.transform = HN(t, e.transform, n))
                : r.transform && (r.transform = "none")),
        a)
    ) {
        const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = i;
        r.transformOrigin = `${l} ${c} ${u}`;
    }
}
function $h(e, t, n) {
    return typeof e == "string" ? e : B.transform(t + n * e);
}
function WN(e, t, n) {
    const r = $h(t, e.x, e.width),
        o = $h(n, e.y, e.height);
    return `${r} ${o}`;
}
const KN = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    GN = { offset: "strokeDashoffset", array: "strokeDasharray" };
function YN(e, t, n = 1, r = 0, o = !0) {
    e.pathLength = 1;
    const i = o ? KN : GN;
    e[i.offset] = B.transform(-r);
    const s = B.transform(t),
        a = B.transform(n);
    e[i.array] = `${s} ${a}`;
}
function Id(
    e,
    {
        attrX: t,
        attrY: n,
        attrScale: r,
        originX: o,
        originY: i,
        pathLength: s,
        pathSpacing: a = 1,
        pathOffset: l = 0,
        ...c
    },
    u,
    d
) {
    if ((Od(e, c, d), u)) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
    }
    (e.attrs = e.style), (e.style = {});
    const { attrs: f, style: y, dimensions: x } = e;
    f.transform && (x && (y.transform = f.transform), delete f.transform),
        x &&
            (o !== void 0 || i !== void 0 || y.transform) &&
            (y.transformOrigin = WN(
                x,
                o !== void 0 ? o : 0.5,
                i !== void 0 ? i : 0.5
            )),
        t !== void 0 && (f.x = t),
        n !== void 0 && (f.y = n),
        r !== void 0 && (f.scale = r),
        s !== void 0 && YN(f, s, a, l, !1);
}
const _d = (e) => typeof e == "string" && e.toLowerCase() === "svg",
    XN = {
        useVisualState: nx({
            scrapeMotionValuesFromProps: tx,
            createRenderState: rx,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
                Q.read(() => {
                    try {
                        n.dimensions =
                            typeof t.getBBox == "function"
                                ? t.getBBox()
                                : t.getBoundingClientRect();
                    } catch {
                        n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                }),
                    Q.render(() => {
                        Id(n, r, _d(t.tagName), e.transformTemplate), J0(t, n);
                    });
            },
        }),
    },
    QN = {
        useVisualState: nx({
            scrapeMotionValuesFromProps: Ld,
            createRenderState: Dd,
        }),
    };
function ix(e, t, n) {
    for (const r in t) !Oe(t[r]) && !ex(r, n) && (e[r] = t[r]);
}
function qN({ transformTemplate: e }, t) {
    return S.useMemo(() => {
        const n = Dd();
        return Od(n, t, e), Object.assign({}, n.vars, n.style);
    }, [t]);
}
function ZN(e, t) {
    const n = e.style || {},
        r = {};
    return ix(r, n, e), Object.assign(r, qN(e, t)), r;
}
function JN(e, t) {
    const n = {},
        r = ZN(e, t);
    return (
        e.drag &&
            e.dragListener !== !1 &&
            ((n.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction =
                e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
        e.tabIndex === void 0 &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (n.tabIndex = 0),
        (n.style = r),
        n
    );
}
const e2 = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
]);
function Ws(e) {
    return (
        e.startsWith("while") ||
        (e.startsWith("drag") && e !== "draggable") ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        e.startsWith("onLayout") ||
        e2.has(e)
    );
}
let sx = (e) => !Ws(e);
function t2(e) {
    e && (sx = (t) => (t.startsWith("on") ? !Ws(t) : e(t)));
}
try {
    t2(require("@emotion/is-prop-valid").default);
} catch {}
function n2(e, t, n) {
    const r = {};
    for (const o in e)
        (o === "values" && typeof e.values == "object") ||
            ((sx(o) ||
                (n === !0 && Ws(o)) ||
                (!t && !Ws(o)) ||
                (e.draggable && o.startsWith("onDrag"))) &&
                (r[o] = e[o]));
    return r;
}
function r2(e, t, n, r) {
    const o = S.useMemo(() => {
        const i = rx();
        return (
            Id(i, t, _d(r), e.transformTemplate),
            { ...i.attrs, style: { ...i.style } }
        );
    }, [t]);
    if (e.style) {
        const i = {};
        ix(i, e.style, e), (o.style = { ...i, ...o.style });
    }
    return o;
}
function o2(e = !1) {
    return (n, r, o, { latestValues: i }, s) => {
        const l = (Md(n) ? r2 : JN)(r, i, s, n),
            c = n2(r, typeof n == "string", e),
            u = n !== S.Fragment ? { ...c, ...l, ref: o } : {},
            { children: d } = r,
            f = S.useMemo(() => (Oe(d) ? d.get() : d), [d]);
        return S.createElement(n, { ...u, children: f });
    };
}
function i2(e, t) {
    return function (
        r,
        { forwardMotionProps: o } = { forwardMotionProps: !1 }
    ) {
        const s = {
            ...(Md(r) ? XN : QN),
            preloadedFeatures: e,
            useRender: o2(o),
            createVisualElement: t,
            Component: r,
        };
        return DN(s);
    };
}
const Uc = { current: null },
    ax = { current: !1 };
function s2() {
    if (((ax.current = !0), !!jd))
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => (Uc.current = e.matches);
            e.addListener(t), t();
        } else Uc.current = !1;
}
function a2(e, t, n) {
    for (const r in t) {
        const o = t[r],
            i = n[r];
        if (Oe(o)) e.addValue(r, o);
        else if (Oe(i)) e.addValue(r, ii(o, { owner: e }));
        else if (i !== o)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, ii(s !== void 0 ? s : o, { owner: e }));
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t;
}
const Uh = new WeakMap(),
    l2 = [...Zv, Le, Dn],
    c2 = (e) => l2.find(qv(e)),
    Hh = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
    ];
class u2 {
    scrapeMotionValuesFromProps(t, n, r) {
        return {};
    }
    constructor(
        {
            parent: t,
            props: n,
            presenceContext: r,
            reducedMotionConfig: o,
            blockInitialAnimation: i,
            visualState: s,
        },
        a = {}
    ) {
        (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = hd),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
                this.notify("Update", this.latestValues)),
            (this.render = () => {
                this.current &&
                    (this.triggerBuild(),
                    this.renderInstance(
                        this.current,
                        this.renderState,
                        this.props.style,
                        this.projection
                    ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
                const f = Vt.now();
                this.renderScheduledAt < f &&
                    ((this.renderScheduledAt = f),
                    Q.render(this.render, !1, !0));
            });
        const { latestValues: l, renderState: c } = s;
        (this.latestValues = l),
            (this.baseTarget = { ...l }),
            (this.initialValues = n.initial ? { ...l } : {}),
            (this.renderState = c),
            (this.parent = t),
            (this.props = n),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = o),
            (this.options = a),
            (this.blockInitialAnimation = !!i),
            (this.isControllingVariants = Ca(n)),
            (this.isVariantNode = Q0(n)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
        const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
            n,
            {},
            this
        );
        for (const f in d) {
            const y = d[f];
            l[f] !== void 0 && Oe(y) && y.set(l[f], !1);
        }
    }
    mount(t) {
        (this.current = t),
            Uh.set(t, this),
            this.projection &&
                !this.projection.instance &&
                this.projection.mount(t),
            this.parent &&
                this.isVariantNode &&
                !this.isControllingVariants &&
                (this.removeFromVariantTree =
                    this.parent.addVariantChild(this)),
            this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
            ax.current || s2(),
            (this.shouldReduceMotion =
                this.reducedMotionConfig === "never"
                    ? !1
                    : this.reducedMotionConfig === "always"
                    ? !0
                    : Uc.current),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
    }
    unmount() {
        Uh.delete(this.current),
            this.projection && this.projection.unmount(),
            Ln(this.notifyUpdate),
            Ln(this.render),
            this.valueSubscriptions.forEach((t) => t()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), (n.isMounted = !1));
        }
        this.current = null;
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = lr.has(t),
            o = n.on("change", (a) => {
                (this.latestValues[t] = a),
                    this.props.onUpdate && Q.preRender(this.notifyUpdate),
                    r &&
                        this.projection &&
                        (this.projection.isTransformDirty = !0);
            }),
            i = n.on("renderRequest", this.scheduleRender);
        let s;
        window.MotionCheckAppearSync &&
            (s = window.MotionCheckAppearSync(this, t, n)),
            this.valueSubscriptions.set(t, () => {
                o(), i(), s && s(), n.owner && n.stop();
            });
    }
    sortNodePosition(t) {
        return !this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== t.type
            ? 0
            : this.sortInstanceNodePosition(this.current, t.current);
    }
    updateFeatures() {
        let t = "animation";
        for (t in Yr) {
            const n = Yr[t];
            if (!n) continue;
            const { isEnabled: r, Feature: o } = n;
            if (
                (!this.features[t] &&
                    o &&
                    r(this.props) &&
                    (this.features[t] = new o(this)),
                this.features[t])
            ) {
                const i = this.features[t];
                i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : he();
    }
    getStaticValue(t) {
        return this.latestValues[t];
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n;
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = n);
        for (let r = 0; r < Hh.length; r++) {
            const o = Hh[r];
            this.propEventSubscriptions[o] &&
                (this.propEventSubscriptions[o](),
                delete this.propEventSubscriptions[o]);
            const i = "on" + o,
                s = t[i];
            s && (this.propEventSubscriptions[o] = this.on(o, s));
        }
        (this.prevMotionValues = a2(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
        )),
            this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
        return this.props;
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return (
                n.variantChildren && n.variantChildren.add(t),
                () => n.variantChildren.delete(t)
            );
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r &&
            (r && this.removeValue(t),
            this.bindToMotionValue(t, n),
            this.values.set(t, n),
            (this.latestValues[t] = n.get()));
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
        return this.values.has(t);
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return (
            r === void 0 &&
                n !== void 0 &&
                ((r = ii(n === null ? void 0 : n, { owner: this })),
                this.addValue(t, r)),
            r
        );
    }
    readValue(t, n) {
        var r;
        let o =
            this.latestValues[t] !== void 0 || !this.current
                ? this.latestValues[t]
                : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
                  r !== void 0
                ? r
                : this.readValueFromInstance(this.current, t, this.options);
        return (
            o != null &&
                (typeof o == "string" && (Gv(o) || Kv(o))
                    ? (o = parseFloat(o))
                    : !c2(o) && Dn.test(n) && (o = s0(t, n)),
                this.setBaseTarget(t, Oe(o) ? o.get() : o)),
            Oe(o) ? o.get() : o
        );
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n;
    }
    getBaseTarget(t) {
        var n;
        const { initial: r } = this.props;
        let o;
        if (typeof r == "string" || typeof r == "object") {
            const s = ad(
                this.props,
                r,
                (n = this.presenceContext) === null || n === void 0
                    ? void 0
                    : n.custom
            );
            s && (o = s[t]);
        }
        if (r && o !== void 0) return o;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Oe(i)
            ? i
            : this.initialValues[t] !== void 0 && o === void 0
            ? void 0
            : this.baseTarget[t];
    }
    on(t, n) {
        return (
            this.events[t] || (this.events[t] = new kd()), this.events[t].add(n)
        );
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n);
    }
}
class lx extends u2 {
    constructor() {
        super(...arguments), (this.KeyframeResolver = a0);
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
        delete n[t], delete r[t];
    }
    handleChildMotionValue() {
        this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
        const { children: t } = this.props;
        Oe(t) &&
            (this.childSubscription = t.on("change", (n) => {
                this.current && (this.current.textContent = `${n}`);
            }));
    }
}
function d2(e) {
    return window.getComputedStyle(e);
}
class f2 extends lx {
    constructor() {
        super(...arguments), (this.type = "html"), (this.renderInstance = q0);
    }
    readValueFromInstance(t, n) {
        if (lr.has(n)) {
            const r = vd(n);
            return (r && r.default) || 0;
        } else {
            const r = d2(t),
                o = (Xv(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof o == "string" ? o.trim() : o;
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
        return L0(t, n);
    }
    build(t, n, r) {
        Od(t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Ld(t, n, r);
    }
}
class p2 extends lx {
    constructor() {
        super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = he);
    }
    getBaseTargetFromProps(t, n) {
        return t[n];
    }
    readValueFromInstance(t, n) {
        if (lr.has(n)) {
            const r = vd(n);
            return (r && r.default) || 0;
        }
        return (n = Z0.has(n) ? n : Nd(n)), t.getAttribute(n);
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return tx(t, n, r);
    }
    build(t, n, r) {
        Id(t, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(t, n, r, o) {
        J0(t, n, r, o);
    }
    mount(t) {
        (this.isSVGTag = _d(t.tagName)), super.mount(t);
    }
}
const h2 = (e, t) =>
        Md(e) ? new p2(t) : new f2(t, { allowProjection: e !== S.Fragment }),
    m2 = i2({ ...JE, ...PN, ...pN, ...bN }, h2),
    xe = qP(m2);
function g2() {
    const e = (t) => {
        const n = document.getElementById(t);
        n && n.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return m.jsx("section", {
        id: "home",
        className: "pt-16 bg-white min-h-screen flex items-center",
        children: m.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
            children: m.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [
                    m.jsx(xe.div, {
                        initial: { opacity: 0, x: -50 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.8 },
                        children: m.jsxs("div", {
                            className: "text-center lg:text-left",
                            children: [
                                m.jsxs("div", {
                                    className:
                                        "flex flex-col sm:flex-row items-center sm:items-center gap-6 mb-6 min-h-[200px] sm:min-h-[160px]",
                                    children: [
                                        m.jsx("img", {
                                            src: "/akash.jpeg",
                                            alt: "Professional headshot",
                                            className:
                                                "w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full shadow-xl object-cover object-top flex-shrink-0",
                                        }),
                                        m.jsx("div", {
                                            className:
                                                "flex items-center justify-center h-full",
                                            children: m.jsxs("h1", {
                                                className:
                                                    "text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left",
                                                children: [
                                                    "Transforming",
                                                    " ",
                                                    m.jsx("span", {
                                                        className:
                                                            "text-brand-blue",
                                                        children:
                                                            "Complex Data",
                                                    }),
                                                    " into",
                                                    " ",
                                                    m.jsx("span", {
                                                        className:
                                                            "text-brand-blue",
                                                        children:
                                                            "Clear Decisions.",
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                m.jsx("p", {
                                    className:
                                        "text-xl text-gray-600 mb-4 leading-relaxed",
                                    children:
                                        "I’m a freelance Data Scientist and Machine Learning enthusiast passionate about turning raw data into powerful business insights. Skilled in Python, R, SQL, Tableau, and Matplotlib.",
                                }),
                                m.jsx("p", {
                                    className: "text-lg text-brand-slate mb-8",
                                    children:
                                        "I support the full data journey—right from extraction and cleaning to building predictive models and creating clear, impactful visualizations. Let’s collaborate to solve your data challenges and drive meaningful results.",
                                }),
                                m.jsxs("div", {
                                    className:
                                        "flex flex-wrap gap-4 justify-center lg:justify-start",
                                    children: [
                                        m.jsx(ge, {
                                            onClick: () => e("projects"),
                                            className:
                                                "bg-brand-blue hover:bg-blue-700 transform hover:scale-105 transition-all",
                                            children: "View My Projects",
                                        }),
                                        m.jsxs(ge, {
                                            variant: "outline",
                                            onClick: () => e("contact"),
                                            className:
                                                "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
                                            children: [
                                                m.jsx(Sc, {
                                                    className: "w-4 h-4 mr-2",
                                                }),
                                                "Contact Me",
                                            ],
                                        }),
                                        m.jsxs(ge, {
                                            variant: "secondary",
                                            className:
                                                "bg-gray-800 hover:bg-gray-900 text-white",
                                            onClick: () =>
                                                window.open(
                                                    "https://github.com/akashkoneti",
                                                    "_blank"
                                                ),
                                            children: [
                                                m.jsx(Qu, {
                                                    className: "w-4 h-4 mr-2",
                                                }),
                                                "GitHub",
                                            ],
                                        }),
                                        m.jsxs(ge, {
                                            className:
                                                "bg-blue-600 hover:bg-blue-700 text-white",
                                            onClick: () =>
                                                window.open(
                                                    "https://www.linkedin.com/in/akashkoneti",
                                                    "_blank"
                                                ),
                                            children: [
                                                m.jsx(_T, {
                                                    className: "w-4 h-4 mr-2",
                                                }),
                                                "LinkedIn",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    m.jsx(xe.div, {
                        className: "lg:pl-12",
                        initial: { opacity: 0, x: 50 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.8, delay: 0.2 },
                        children: m.jsx("img", {
                            src: "/data-science-workbook.jpeg",
                            alt: "Data science workspace with multiple monitors showing code and analytics",
                            className: "rounded-2xl shadow-2xl w-full",
                        }),
                    }),
                ],
            }),
        }),
    });
}
function Wi({ end: e, duration: t = 2e3, suffix: n = "" }) {
    const [r, o] = S.useState(0),
        [i, s] = S.useState(!1),
        a = S.useRef(null);
    return (
        S.useEffect(() => {
            const l = new IntersectionObserver(
                ([c]) => {
                    c.isIntersecting && !i && s(!0);
                },
                { threshold: 0.7 }
            );
            return a.current && l.observe(a.current), () => l.disconnect();
        }, [i]),
        S.useEffect(() => {
            if (!i) return;
            const l = e / (t / 16);
            let c = 0;
            const u = setInterval(() => {
                (c += l),
                    c >= e && ((c = e), clearInterval(u)),
                    o(Math.floor(c));
            }, 16);
            return () => clearInterval(u);
        }, [i, e, t]),
        m.jsxs("div", {
            ref: a,
            className: "text-4xl font-bold mb-2",
            children: [r, n],
        })
    );
}
function y2() {
    return m.jsx("section", {
        className: "bg-white py-16",
        children: m.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: m.jsxs(xe.div, {
                className: "grid grid-cols-2 lg:grid-cols-3 gap-8 text-center",
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                viewport: { once: !0 },
                children: [
                    m.jsxs("div", {
                        className: "p-6",
                        children: [
                            m.jsx(Wi, { end: 15 }),
                            m.jsx("div", {
                                className: "text-gray-600 font-medium",
                                children: "Projects Completed",
                            }),
                        ],
                    }),
                    m.jsxs("div", {
                        className: "p-6",
                        children: [
                            m.jsx(Wi, { end: 25 }),
                            m.jsx("div", {
                                className: "text-gray-600 font-medium",
                                children: "Skills Mastered",
                            }),
                        ],
                    }),
                    m.jsxs("div", {
                        className: "p-6",
                        children: [
                            m.jsx(Wi, { end: 3 }),
                            m.jsx("div", {
                                className: "text-gray-600 font-medium",
                                children: "Years Experience",
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
const Vd = S.forwardRef(({ className: e, ...t }, n) =>
    m.jsx("div", {
        ref: n,
        className: ve(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            e
        ),
        ...t,
    })
);
Vd.displayName = "Card";
const v2 = S.forwardRef(({ className: e, ...t }, n) =>
    m.jsx("div", {
        ref: n,
        className: ve("flex flex-col space-y-1.5 p-6", e),
        ...t,
    })
);
v2.displayName = "CardHeader";
const x2 = S.forwardRef(({ className: e, ...t }, n) =>
    m.jsx("div", {
        ref: n,
        className: ve("text-2xl font-semibold leading-none tracking-tight", e),
        ...t,
    })
);
x2.displayName = "CardTitle";
const w2 = S.forwardRef(({ className: e, ...t }, n) =>
    m.jsx("div", {
        ref: n,
        className: ve("text-sm text-muted-foreground", e),
        ...t,
    })
);
w2.displayName = "CardDescription";
const Fd = S.forwardRef(({ className: e, ...t }, n) =>
    m.jsx("div", { ref: n, className: ve("p-6 pt-0", e), ...t })
);
Fd.displayName = "CardContent";
const S2 = S.forwardRef(({ className: e, ...t }, n) =>
    m.jsx("div", {
        ref: n,
        className: ve("flex items-center p-6 pt-0", e),
        ...t,
    })
);
S2.displayName = "CardFooter";
const T2 = Xu(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground",
            },
        },
        defaultVariants: { variant: "default" },
    }
);
function C2({ className: e, variant: t, ...n }) {
    return m.jsx("div", { className: ve(T2({ variant: t }), e), ...n });
}
function P2({ project: e }) {
    return m.jsx(xe.div, {
        whileHover: { y: -5 },
        transition: { duration: 0.3 },
        children: m.jsxs(Vd, {
            className:
                "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full",
            children: [
                m.jsx("div", {
                    className: "relative",
                    children: m.jsx("img", {
                        src: e.image,
                        alt: `${e.title} visualization`,
                        className: "w-full h-64 object-cover object-center",
                    }),
                }),
                m.jsxs(Fd, {
                    className: "p-6 flex flex-col h-full",
                    children: [
                        m.jsx("h3", {
                            className: "text-xl font-bold text-gray-900 mb-3",
                            children: e.title,
                        }),
                        m.jsx("p", {
                            className: "text-gray-600 mb-4 flex-grow",
                            children: e.description,
                        }),
                        m.jsx("div", {
                            className: "flex flex-wrap gap-2 mb-4",
                            children: e.techStack.map((t, n) =>
                                m.jsx(
                                    C2,
                                    {
                                        variant: "secondary",
                                        className: "text-xs",
                                        children: t,
                                    },
                                    n
                                )
                            ),
                        }),
                        m.jsxs("div", {
                            className: "flex gap-3 mt-auto",
                            children: [
                                e.githubLink &&
                                    m.jsxs(ge, {
                                        variant: "ghost",
                                        size: "sm",
                                        className:
                                            "text-brand-blue hover:text-blue-700 p-0",
                                        onClick: () =>
                                            window.open(e.githubLink, "_blank"),
                                        children: [
                                            m.jsx(Qu, {
                                                className: "w-4 h-4 mr-1",
                                            }),
                                            "GitHub",
                                        ],
                                    }),
                                e.hasDemo &&
                                    m.jsxs(ge, {
                                        variant: "ghost",
                                        size: "sm",
                                        className:
                                            "text-brand-blue hover:text-blue-700 p-0",
                                        children: [
                                            m.jsx(Yy, {
                                                className: "w-4 h-4 mr-1",
                                            }),
                                            "Demo",
                                        ],
                                    }),
                                m.jsx(LS, {
                                    href: `/project/${e.slug}`,
                                    children: m.jsxs(ge, {
                                        variant: "ghost",
                                        size: "sm",
                                        className:
                                            "text-brand-blue hover:text-blue-700 p-0",
                                        children: [
                                            m.jsx(IT, {
                                                className: "w-4 h-4 mr-1",
                                            }),
                                            "Read More",
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
const cx = [
    {
        slug: "proteomics-data-exploration",
        title: "Interactive Proteomics Data Exploration Suite",
        icon: "📊",
        description:
            "A comprehensive, interactive data analysis suite developed in R using the Shiny framework. It is designed for exploratory analysis of proteomics datasets, integrating multiple visualization and statistical tools to help users interactively explore, compare, and interpret protein expression data.",
        image: "/assets/images/proteomics-interactive-plots.png",
        detailImage: "/proteomics-interactive-plots.png",
        techStack: ["R", "Shiny", "ggplot2", "Plotly"],
        hasDemo: !1,
        problemStatement: "",
        dataSources: [],
        methodology: "",
        keyResults: [],
        businessImpact:
            "This suite enables proteomics researchers to quickly identify significant proteins, assess experimental reproducibility, explore distribution patterns across conditions, examine mRNA-protein expression relationships, and visualize sample clustering patterns. The interactive nature significantly reduces analysis time and improves research workflow efficiency.",
        githubLink: "",
        detailsHTML: `
      <section id="overview">
        <h2>Overview</h2>
        <p>
          This project is an <strong>interactive data analysis platform</strong> built in <strong>R</strong> using the
          <strong>Shiny</strong> framework. It was designed to analyze and visualize two complementary datasets:
        </p>
        <ol>
          <li><strong>Proteomics &amp; mRNA fold-change data</strong> — used to study differential expression and concordance between protein and transcript levels.</li>
          <li><strong>Gapminder-style experimental dataset</strong> (<code>genotype</code>, <code>mouseid</code>, <code>population/sample ID</code>, <code>gene</code>, <code>lifeExp</code>, <code>gdpPercap</code>) — tidy structure enabling group-wise comparisons across genotypes and conditions.</li>
        </ol>
        <p>
          Together, these datasets support both <em>molecular-level</em> and <em>population-style</em> exploration of biological trends.
        </p>
      </section>

      <section id="features">
        <h2>Core Features</h2>

        <h3>🔹 Volcano Plot Explorer</h3>
        <ul>
          <li>Plots protein fold change vs. significance.</li>
          <li>Regex-based gene/protein search (e.g., KEGG/GO terms).</li>
          <li>Threshold-based highlighting of significant hits.</li>
        </ul>

        <h3>🔹 Regression Analysis</h3>
        <ul>
          <li>Compares replicate intensity values (log<sub>2</sub> scale).</li>
          <li>Flexible X/Y selection from dataset columns (e.g., <code>lifeExp</code> vs. <code>gdpPercap</code>).</li>
          <li>Displays regression line and R² for reproducibility checks.</li>
        </ul>

        <h3>🔹 Histogram Comparisons</h3>
        <ul>
          <li>Overlays distributions across groups (e.g., WT vs. KO).</li>
          <li>Works on both proteomics intensities and <code>lifeExp</code>-style attributes.</li>
        </ul>

        <h3>🔹 Fold Change Scatter</h3>
        <ul>
          <li>Compares proteome vs. mRNA fold changes.</li>
          <li>Threshold slider for highlighting key genes.</li>
          <li>Identifies concordant/discordant expression patterns.</li>
        </ul>

        <h3>🔹 PCA Module</h3>
        <ul>
          <li>Clusters samples using intensity or derived features.</li>
          <li>Highlights group-level differences (e.g., genotype).</li>
          <li>Shows variance explained for each principal component.</li>
        </ul>
      </section>

      <section id="tech">
        <h2>Technologies Used</h2>
        <div>
          <span class="pill">R</span>
          <span class="pill">Shiny</span>
          <span class="pill">ggplot2</span>
          <span class="pill">Plotly</span>
          <span class="pill">tidyverse / base R wrangling</span>
        </div>
      </section>

      <section id="outcomes">
        <h2>Key Outcomes</h2>
        <ul>
          <li>Explore proteomic and transcriptomic relationships.</li>
          <li>Assess reproducibility of experimental replicates.</li>
          <li>Compare sample distributions across experimental conditions.</li>
          <li>Study genotype-level survival and expression differences using tidy data.</li>
          <li>Visualize clustering and variance structure through PCA.</li>
        </ul>
      </section>
    `,
    },
    {
        slug: "customer-segmentation",
        title: "Lead Generation and Geo Clustering",
        icon: "🗺️",
        description:
            "Developed an interactive Streamlit web application to extract restaurant leads based on cuisine type and location from Yellow Pages. The app integrates web scraping, geocoding, and clustering to provide both a tabular lead list and an interactive map.",
        image: "/assets/images/restaurant-lead-generation-app.png",
        detailImage: "/restaurant-lead-generation-app.png",
        techStack: [
            "Python",
            "Pandas",
            "Folium",
            "Scikit-learn",
            "Selenium",
            "Geopy",
        ],
        hasDemo: !1,
        problemStatement:
            "A food delivery company needed to understand restaurant distribution patterns across NYC boroughs to optimize delivery zones and identify market opportunities.",
        dataSources: [
            "Customer transaction database - 50K+ records",
            "CRM system - Customer demographics and preferences",
            "Web analytics - Online behavior patterns",
            "Survey data - Customer satisfaction scores",
        ],
        methodology:
            "Applied multiple clustering algorithms including K-means, hierarchical clustering, and DBSCAN. Used PCA for dimensionality reduction and silhouette analysis for optimal cluster determination. Validated results with business stakeholders.",
        keyResults: [
            "Identified 5 distinct customer segments",
            "Increased marketing ROI by 35%",
            "Improved customer retention by 22%",
            "Reduced marketing costs by 18%",
        ],
        businessImpact:
            "Enabled personalized marketing campaigns that significantly improved customer engagement and lifetime value. The segmentation strategy is now used across all marketing channels and product development decisions.",
        detailsHTML: `
      <section id="overview">
        <h2>Overview</h2>
        <p>This project demonstrates how geo clustering can reveal market opportunities for food delivery businesses.</p>
      </section>
    `,
        githubLink: "",
    },
    {
        slug: "predictive-analysis",
        title: "Predicting Voter Pattern in Limited Ballots",
        icon: "📈",
        description:
            "Develop a robust machine learning pipeline that processes historical NBA player data (1997–2023), performs feature engineering, exploratory analysis, and builds predictive models for performance-related insights.",
        image: "/assets/images/nba-predictive-analysis-charts.png",
        detailImage: "/nba-predictive-analysis-charts.png",
        techStack: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "MatplotLib",
            "Seaborn",
        ],
        hasDemo: !1,
        problemStatement: "",
        dataSources: [],
        methodology: "",
        keyResults: [],
        businessImpact: "",
        detailsHTML: `
      <section id="overview">
      <h2>Overview</h2>
      <p>
        The Model Builder is a modular, reusable framework for creating, training, and evaluating machine learning models.
        It streamlines the end-to-end workflow—from preprocessing and feature engineering to algorithm comparison and
        hyperparameter tuning—delivering clear benchmarks and visual diagnostics.
      </p>
    </section>

    <section id="features">
      <h2>Core Features</h2>

      <h3>1) Data Preprocessing & Feature Engineering</h3>
      <ul>
        <li>Automated handling of missing values, scaling, and categorical encoding.</li>
        <li>Works with mixed numerical/categorical inputs; plug-and-play transformations.</li>
        <li>Modular steps to adapt quickly to new datasets.</li>
      </ul>

      <h3>2) Model Training & Comparison</h3>
      <ul>
        <li>Supports multiple algorithms for classification and regression.</li>
        <li>Consistent evaluation with accuracy, precision, recall, F1-score, ROC-AUC, and RMSE where applicable.</li>
        <li>Hyperparameter tuning for performance optimization.</li>
      </ul>

      <h3>3) Visualization & Interpretation</h3>
      <ul>
        <li>Confusion matrices, ROC/PR curves, error distributions, and learning curves.</li>
        <li>Feature importance and model explainability where supported.</li>
        <li>Interactive experimentation via Jupyter Notebook.</li>
      </ul>
    </section>

    <section id="tech">
      <h2>Tech Stack</h2>
      <div class="pills">
        <span class="pill">Python</span>
        <span class="pill">Pandas</span>
        <span class="pill">numPy</span>
        <span class="pill">Scikit-learn</span>
        <span class="pill">MatplotLib</span>
        <span class="pill">Seaborn</span>
      </div>
    </section>

    <section id="outcomes">
      <h2>Key Outcomes</h2>
      <ul>
        <li>Reusable pipeline for rapid ML experimentation across tasks and datasets.</li>
        <li>Streamlined comparison of algorithms with clear, reproducible metrics.</li>
        <li>Actionable visual diagnostics and model interpretability.</li>
        <li>Foundation for scaling into a production-grade ML workflow.</li>
      </ul>
    </section>
    `,
        githubLink: "",
    },
    {
        slug: "sentiment-analysis",
        title: "Analyzing Cognitive Bias in Social Media",
        icon: "💬",
        description:
            "This project examines cognitive bias in online debates in the “Greatest of the Big Three” in Tennis. Using a custom Twitter extraction tool, around 3M tweets were analyzed alongside official ATP performance records. A statistical model, aligned with ATP rankings, compared objective performance with public sentiment, revealing patterns shaped by attention, external, and cultural biases.",
        image: "/assets/images/sentiment-analysis-social-media.png",
        detailImage: "/sentiment-analysis-social-media.png",
        techStack: ["Python", "NLTK", "Transformers", "Twitter API"],
        hasDemo: !1,
        problemStatement:
            "A major brand needed to monitor and understand public perception across social media platforms. Manual monitoring was inefficient and couldn't capture the scale and nuance of online conversations.",
        dataSources: [
            "Twitter API - 100K+ tweets and mentions",
            "Reddit API - Discussion threads and comments",
            "News articles - Media coverage analysis",
            "Customer review platforms - Product feedback",
        ],
        methodology:
            "Built an end-to-end NLP pipeline using BERT-based transformers for sentiment classification. Implemented real-time data collection, preprocessing, and analysis with custom visualization dashboards.",
        keyResults: [
            "94% accuracy in sentiment classification",
            "Real-time monitoring of brand mentions",
            "Early detection of potential PR issues",
            "Comprehensive sentiment trend analysis",
        ],
        businessImpact:
            "Enabled proactive brand management and crisis prevention. The insights drove marketing strategy adjustments and product improvements, resulting in improved brand sentiment scores across all monitored platforms.",
        detailsHTML: `
      <section id="overview">
        <h2>Overview</h2>
        <p>Social media sentiment analysis with transformers. Placeholder content here.</p>
      </section>
    `,
        githubLink: "",
    },
    {
        slug: "sentiment-analysis-twitter",
        title: "Analyzing Public Reactions to Twitter Acquisition",
        icon: "🏥",
        description:
            "Analyzed ~95K tweets to study public sentiment during Twitter acquisition and mass layoffs. Built an NLP pipeline to clean, classify, and visualize trends, revealing sharp opinion shifts driven by cultural and political events.",
        image: "/assets/images/twitter-sentiment-visualizations.png",
        detailImage: "/twitter-sentiment-visualizations.png",
        techStack: [
            "Python",
            "snscrape",
            "pandas",
            "NLTK",
            "spaCy",
            "matplotlib",
            "seaborn",
            "plotly",
        ],
        hasDemo: !1,
        problemStatement:
            "Healthcare insurance companies struggle to accurately predict patient costs, leading to inadequate pricing models and financial losses. This project develops predictive models to optimize cost forecasting and risk assessment.",
        dataSources: [],
        methodology: "",
        keyResults: [],
        businessImpact: "",
        detailsHTML: `
          <section id="overview">
      <h2>Overview</h2>
      <p>
        This project analyzes public sentiment surrounding <strong>acquisition of Twitter</strong> and the
        <strong>subsequent mass layoffs</strong> using large-scale Twitter data. By combining natural language processing
        (NLP) with timeline-based event tracking, it examines how public opinion shifted during key milestones of Musk’s ownership.
      </p>
    </section>

    <section id="datasets">
      <h2>Datasets</h2>
      <ul>
        <li><strong>Acquisition Tweets</strong>: ~59,000 tweets related to the purchase and early platform decisions.</li>
        <li><strong>Layoffs Tweets</strong>: ~36,000 tweets focused on the post-acquisition layoffs.</li>
        <li>Collected via <code>snscrape</code> with keyword filters (e.g., “twitter”, “layoffs”).</li>
      </ul>
    </section>

    <section id="methodology">
      <h2>Methodology</h2>
      <ul>
        <li><strong>Preprocessing</strong>: URL/mention/punctuation removal, stop-word filtering, hashtag extraction, and lemmatization for n-gram analysis.</li>
        <li><strong>Exploratory Analysis</strong>: top hashtags, positive/negative word clouds, funnel charts for sentiment split, correlation of tweet length and sentiment, and temporal trend charts.</li>
        <li><strong>Modeling</strong>: sentiment classification into positive/neutral/negative and alignment of sentiment swings with major timeline events.</li>
      </ul>
    </section>
    <section id="tech">
      <h2>Tech Stack</h2>
      <span class="pill">Python</span>
      <span class="pill">snscrape</span>
      <span class="pill">pandas</span>
      <span class="pill">NLTK</span>
      <span class="pill">spaCy</span>
      <span class="pill">Matplotlib</span>
      <span class="pill">Plotly</span>
    </section>
    <section id="insights">
      <h2>Key Insights</h2>
      <ul>
        <li>During the <em>acquisition phase</em>, sentiment was mixed but broadly <strong>more positive</strong>, with dips around contentious announcements.</li>
        <li>During the <em>layoff phase</em>, sentiment turned <strong>overwhelmingly negative</strong>, reflecting backlash to workforce reductions and policy shifts.</li>
        <li>Sentiment spikes followed high-profile account reinstatements, revealing cultural and political drivers of opinion.</li>
      </ul>
    </section>

    <section id="conclusion">
      <h2>Conclusion</h2>
      <p>
        The analysis shows how sentiment tracking can capture fast-moving public opinion during high-profile corporate events.
        While Musk retained support through parts of the acquisition, layoffs triggered strong negative reactions—highlighting
        the volatility of public perception in response to leadership and policy decisions.
      </p>
    </section>

    
    `,
        githubLink: "",
    },
    {
        slug: "trends-homicides-usa",
        title: "Trends in Homicides in the United States",
        icon: "📊",
        description:
            "Comprehensive analysis of homicide trends across the United States using crime data, examining patterns by agency type, geographical distribution, case closure rates, and demographic factors to identify key insights for policy and law enforcement strategies.",
        image: "/assets/images/usa-homicide-trends-dashboard.png",
        detailImage: "/usa-homicide-trends-dashboard.png",
        techStack: ["Python", "Tableau", "Exploratory Data Analysis", "Excel"],
        hasDemo: !1,
        problemStatement: "",
        dataSources: [],
        methodology: "",
        keyResults: [],
        businessImpact: "",
        detailsHTML: `
      <section id="overview">
      <h2>1) Overview</h2>
      <p>
      This project is a <strong>data discovery and visualization study</strong> of homicide trends in the United States
      across 35 years. It identifies patterns in <em>case resolution by agency</em>, <em>family-related homicides</em>,
      <em>gender–weapon relationships</em>, and the relationship between <em>gun law strictness</em> and
      <em>firearm-related crime rates</em>. The work emphasizes interactive storytelling using dashboards.
      </p>
      </section>


      <section id="dataset">
      <h2>2) Dataset</h2>
      <ul>
      <li><strong>Source:</strong> Historical homicide reports (U.S.), 1980–2014.</li>
      <li><strong>Size:</strong> 638,454 records across 35 years (monthly granularity).</li>
      <li><strong>Coverage:</strong> Nationwide; cases handled by various agency types.</li>
      <li><strong>Key Fields:</strong> perpetrator & victim demographics, family relationships, weapon used, case resolution, agency type, geography.</li>
      </ul>
      <p class="callout">Note: Where gun-law strictness was required, state grades were mapped from a publicly available reference for exploratory comparison.</p>
      </section>


      <section id="features">
      <h2>3) Core Features</h2>
      <div class="grid-2">
      <div>
      <ul>
      <li><strong>Crime Resolution Analysis:</strong> Compared solve/closure rates by agency (Municipal, County, Sheriff, Tribal, Special).</li>
      <li><strong>Family Crimes Study:</strong> Examined perpetrator–victim relationships within families.</li>
      <li><strong>Gender–Weapon Mapping:</strong> Linked perpetrator gender to weapon categories (firearm, melee, asphyxiation, ingestives, etc.).</li>
      </ul>
      </div>
      <div>
      <ul>
      <li><strong>Gun Crimes vs Laws:</strong> Explored firearm-crime share against state gun-law grades.</li>
      <li><strong>Temporal Trends:</strong> Visualized long-term shifts in homicide and firearm usage.</li>
      <li><strong>Interactive Dashboards:</strong> Built guided stories for stakeholders to explore the findings.</li>
      </ul>
      </div>
      </div>
      </section>


      <section id="methodology">
      <h2>4) Methodology</h2>
      <ol>
      <li><strong>Data Preparation:</strong> Cleaned and standardized categorical fields; ensured consistent agency and weapon taxonomies.</li>
      <li><strong>Exploratory Data Analysis (EDA):</strong> Summary statistics, distributions, and cross-tabs for gender, relationship, and agency dimensions.</li>
      <li><strong>Comparative Analysis:</strong> Benchmarked agency closure performance and regional patterns.</li>
      <li><strong>Correlation & Enrichment:</strong> Joined state gun-law grading as an external reference for exploratory comparisons.</li>
      <li><strong>Visualization:</strong> Designed Tableau dashboards with filters, drill-throughs, and narrative annotations.</li>
      </ol>
      </section>


      <section id="tech">
      <h2>5) Technologies Used</h2>
      <div class="pillbar" role="list" aria-label="Technology stack">
      <span class="pill" role="listitem">Tableau</span>
      <span class="pill" role="listitem">Python</span>
      <span class="pill" role="listitem">Exploratory Data Analysis (EDA)</span>
      <span class="pill" role="listitem">Excel</span>
      </div>
      </section>

      <section id="outcomes">
      <h2>6) Key Outcomes</h2>
      <ul>
      <li><strong>Agency Performance:</strong> Municipal, County, and Special Police showed higher failure-to-close rates (≈30%+), while Tribal Police exhibited the lowest (~7.4%).</li>
      <li><strong>Family Crimes:</strong> Male perpetrators were ~3× more common; spouses were frequent victims; sons more often victims among children.</li>
      <li><strong>Gender & Weapons:</strong> Males predominantly used firearms, melee, and asphyxiation; females more often involved ingestives (drugs/poison).</li>
      <li><strong>Gun Laws:</strong> Both strict and non-strict states showed firearm-related crime shares >60% in several cases, suggesting law strictness alone isn’t a strong predictor.</li>
      <li><strong>Trend Insight:</strong> Firearm involvement increased over time across grades.</li>
      </ul>
      </section>


      <section id="improvements">
      <h2>7) Suggestions & Improvements</h2>
      <ul>
      <li>Augment with <strong>forensic and conviction</strong> details for richer context.</li>
      <li>Extend demographic categories (e.g., more granular race/ethnicity).</li>
      <li>Refresh with <strong>post-2014</strong> data to keep insights current.</li>
      </ul>
      </section>


      <section id="impact">
      <h2>8) Learning & Impact</h2>
      <ul>
      <li>Enhanced skills in <strong>dashboard design</strong> and <strong>narrative data communication</strong>.</li>
      <li>Developed practice connecting <strong>social, legal, and demographic</strong> factors to crime analysis.</li>
      <li>Delivered <strong>interactive artifacts</strong> that enable stakeholders to self-serve insights.</li>
      </ul>
      </section>
    `,
        githubLink: "",
    },
];
function b2() {
    return m.jsx("section", {
        id: "projects",
        className: "bg-gray-50 py-20",
        children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                m.jsxs(xe.div, {
                    className: "text-center mb-16",
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    viewport: { once: !0 },
                    children: [
                        m.jsx("h2", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: "Featured Projects",
                        }),
                        m.jsx("p", {
                            className:
                                "text-xl text-gray-600 max-w-3xl mx-auto",
                            children:
                                "Explore my data science projects showcasing machine learning, data visualization, and analytical problem-solving.",
                        }),
                    ],
                }),
                m.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: cx.map((e, t) =>
                        m.jsx(
                            xe.div,
                            {
                                initial: { opacity: 0, y: 50 },
                                whileInView: { opacity: 1, y: 0 },
                                transition: { duration: 0.6, delay: t * 0.1 },
                                viewport: { once: !0 },
                                children: m.jsx(P2, { project: e }),
                            },
                            e.slug
                        )
                    ),
                }),
            ],
        }),
    });
}
function E2() {
    const e = [
            { name: "Python", icon: "fab fa-python", color: "text-blue-500" },
            { name: "R", icon: "fab fa-r-project", color: "text-blue-600" },
            { name: "SQL", icon: "fas fa-database", color: "text-orange-500" },
            {
                name: "JavaScript",
                icon: "fab fa-js-square",
                color: "text-yellow-500",
            },
            { name: "Scala", icon: "fas fa-code", color: "text-gray-600" },
        ],
        t = [
            {
                name: "Scikit-learn",
                icon: "fas fa-brain",
                color: "text-blue-600",
            },
            {
                name: "TensorFlow",
                icon: "fas fa-network-wired",
                color: "text-orange-600",
            },
            { name: "PyTorch", icon: "fas fa-fire", color: "text-red-600" },
            { name: "Pandas", icon: "fas fa-table", color: "text-green-600" },
            {
                name: "NumPy",
                icon: "fas fa-calculator",
                color: "text-purple-600",
            },
            { name: "OpenCV", icon: "fas fa-eye", color: "text-indigo-600" },
        ],
        n = [
            {
                name: "Matplotlib",
                icon: "fas fa-chart-line",
                color: "text-blue-600",
            },
            {
                name: "Plotly",
                icon: "fas fa-chart-area",
                color: "text-purple-600",
            },
            {
                name: "Tableau",
                icon: "fas fa-chart-bar",
                color: "text-orange-600",
            },
            {
                name: "Power BI",
                icon: "fas fa-chart-pie",
                color: "text-yellow-600",
            },
        ],
        r = [
            { name: "AWS", icon: "fab fa-aws", color: "text-orange-500" },
            { name: "GCP", icon: "fab fa-google", color: "text-blue-500" },
            { name: "Docker", icon: "fab fa-docker", color: "text-blue-600" },
            { name: "Git", icon: "fab fa-git-alt", color: "text-red-500" },
            { name: "Jupyter", icon: "fas fa-book", color: "text-orange-600" },
        ];
    return m.jsx("section", {
        id: "skills",
        className: "bg-white py-20",
        children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                m.jsxs(xe.div, {
                    className: "text-center mb-16",
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    viewport: { once: !0 },
                    children: [
                        m.jsx("h2", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: "Technical Skills",
                        }),
                        m.jsx("p", {
                            className:
                                "text-xl text-gray-600 max-w-3xl mx-auto",
                            children:
                                "Comprehensive toolkit spanning the entire data science pipeline from data collection to model deployment.",
                        }),
                    ],
                }),
                m.jsxs(xe.div, {
                    className: "mb-12",
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    viewport: { once: !0 },
                    children: [
                        m.jsx("h3", {
                            className:
                                "text-2xl font-semibold text-gray-800 mb-6 text-center",
                            children: "Programming Languages",
                        }),
                        m.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                            children: e.map((o, i) =>
                                m.jsxs(
                                    xe.div,
                                    {
                                        className:
                                            "flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors",
                                        whileHover: { scale: 1.05 },
                                        initial: { opacity: 0, y: 30 },
                                        whileInView: { opacity: 1, y: 0 },
                                        transition: {
                                            duration: 0.6,
                                            delay: i * 0.1,
                                        },
                                        viewport: { once: !0 },
                                        children: [
                                            m.jsx("i", {
                                                className: `${o.icon} text-4xl ${o.color} mb-2`,
                                            }),
                                            m.jsx("span", {
                                                className: "font-medium",
                                                children: o.name,
                                            }),
                                        ],
                                    },
                                    o.name
                                )
                            ),
                        }),
                    ],
                }),
                m.jsxs(xe.div, {
                    className: "mb-12",
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    viewport: { once: !0 },
                    children: [
                        m.jsx("h3", {
                            className:
                                "text-2xl font-semibold text-gray-800 mb-6 text-center",
                            children: "Libraries & Frameworks",
                        }),
                        m.jsx("div", {
                            className:
                                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
                            children: t.map((o, i) =>
                                m.jsxs(
                                    xe.div,
                                    {
                                        className:
                                            "flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors",
                                        whileHover: { scale: 1.05 },
                                        initial: { opacity: 0, y: 30 },
                                        whileInView: { opacity: 1, y: 0 },
                                        transition: {
                                            duration: 0.6,
                                            delay: i * 0.1,
                                        },
                                        viewport: { once: !0 },
                                        children: [
                                            m.jsx("i", {
                                                className: `${o.icon} text-3xl ${o.color} mb-2`,
                                            }),
                                            m.jsx("span", {
                                                className:
                                                    "text-sm font-medium text-center",
                                                children: o.name,
                                            }),
                                        ],
                                    },
                                    o.name
                                )
                            ),
                        }),
                    ],
                }),
                m.jsxs(xe.div, {
                    className: "mb-12",
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    viewport: { once: !0 },
                    children: [
                        m.jsx("h3", {
                            className:
                                "text-2xl font-semibold text-gray-800 mb-6 text-center",
                            children: "Visualization & BI Tools",
                        }),
                        m.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                            children: n.map((o, i) =>
                                m.jsxs(
                                    xe.div,
                                    {
                                        className:
                                            "flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all",
                                        whileHover: { scale: 1.05, y: -5 },
                                        initial: { opacity: 0, y: 30 },
                                        whileInView: { opacity: 1, y: 0 },
                                        transition: {
                                            duration: 0.6,
                                            delay: i * 0.1,
                                        },
                                        viewport: { once: !0 },
                                        children: [
                                            m.jsx("i", {
                                                className: `${o.icon} text-4xl ${o.color} mb-3`,
                                            }),
                                            m.jsx("span", {
                                                className: "font-medium",
                                                children: o.name,
                                            }),
                                        ],
                                    },
                                    o.name
                                )
                            ),
                        }),
                    ],
                }),
                m.jsxs(xe.div, {
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    viewport: { once: !0 },
                    children: [
                        m.jsx("h3", {
                            className:
                                "text-2xl font-semibold text-gray-800 mb-6 text-center",
                            children: "Cloud & Development Tools",
                        }),
                        m.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                            children: r.map((o, i) =>
                                m.jsxs(
                                    xe.div,
                                    {
                                        className:
                                            "flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors",
                                        whileHover: { scale: 1.05 },
                                        initial: { opacity: 0, y: 30 },
                                        whileInView: { opacity: 1, y: 0 },
                                        transition: {
                                            duration: 0.6,
                                            delay: i * 0.1,
                                        },
                                        viewport: { once: !0 },
                                        children: [
                                            m.jsx("i", {
                                                className: `${o.icon} text-3xl ${o.color} mb-2`,
                                            }),
                                            m.jsx("span", {
                                                className:
                                                    "text-sm font-medium",
                                                children: o.name,
                                            }),
                                        ],
                                    },
                                    o.name
                                )
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function k2() {
    const e = [
        {
            title: "Data Science Freelancer",
            company: "Freelancer",
            period: "2023 - 2025",
            description:
                "Provided end-to-end data solutions, including data extraction, cleaning, and modeling, to deliver actionable insights. Built predictive models, statistical analyses, and visualizations using Python and R, while designing interactive dashboards and reports to support business decisions.",
            type: "experience",
            color: "bg-blue-500",
            textColor: "text-blue-500",
        },
        {
            title: "M.S. Data Science",
            company: "Rochester Institute of Technology, New York",
            period: "2021 - 2023",
            description:
                'Specialized in Machine Learning and Statistical Analysis. Thesis on "Analyzing Cognitive Biases In Social Media." GPA: 3.7/4.0',
            type: "education",
            color: "bg-green-500",
            textColor: "text-green-500",
        },
        {
            title: "Product Analyst",
            company: "Ionix Systems",
            period: "2020 – 2021",
            description:
                "Designed prototype schematics using MarvelApp and built the product’s test database schema in MySQL. Contributed to merchant onboarding by preparing guides and data sheets, while also conducting market analysis and supporting social media campaigns.",
            type: "experience",
            color: "bg-purple-500",
            textColor: "text-purple-500",
        },
        {
            title: "B.Tech Computer Science",
            company: "Vellore Institute of Technology, Tamil Nadu",
            period: "2016 - 2020",
            description:
                "Artificial Intelligence, Statistical Data Analytics for Business Research, Social and Information Networks",
            type: "experience",
            color: "bg-blue-500",
            textColor: "text-blue-500",
        },
    ];
    return m.jsx("section", {
        id: "experience",
        className: "bg-gray-50 py-20",
        children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                m.jsxs(xe.div, {
                    className: "text-center mb-16",
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    viewport: { once: !0 },
                    children: [
                        m.jsx("h2", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: "Experience & Education",
                        }),
                        m.jsx("p", {
                            className:
                                "text-xl text-gray-600 max-w-3xl mx-auto",
                            children:
                                "Professional journey and educational background in data science and analytics.",
                        }),
                    ],
                }),
                m.jsxs("div", {
                    className: "relative max-w-6xl mx-auto",
                    children: [
                        m.jsx("div", {
                            className:
                                "hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-brand-blue",
                        }),
                        e.map((t, n) =>
                            m.jsxs(
                                xe.div,
                                {
                                    className: "relative mb-8 md:mb-12",
                                    initial: {
                                        opacity: 0,
                                        x: n % 2 === 0 ? -50 : 50,
                                    },
                                    whileInView: { opacity: 1, x: 0 },
                                    transition: {
                                        duration: 0.8,
                                        delay: n * 0.2,
                                    },
                                    viewport: { once: !0 },
                                    children: [
                                        m.jsx("div", {
                                            className: "md:hidden",
                                            children: m.jsxs("div", {
                                                className:
                                                    "flex items-start mb-4",
                                                children: [
                                                    m.jsx("div", {
                                                        className: `w-3 h-3 ${t.color} rounded-full mr-4 flex-shrink-0 mt-2`,
                                                    }),
                                                    m.jsxs("div", {
                                                        className:
                                                            "flex-1 bg-white p-6 rounded-xl shadow-lg",
                                                        children: [
                                                            m.jsx("h3", {
                                                                className:
                                                                    "text-xl font-bold text-gray-900 mb-2",
                                                                children:
                                                                    t.title,
                                                            }),
                                                            m.jsx("h4", {
                                                                className: `${t.textColor} font-semibold mb-2`,
                                                                children:
                                                                    t.company,
                                                            }),
                                                            m.jsx("p", {
                                                                className:
                                                                    "text-gray-600 text-sm mb-3",
                                                                children:
                                                                    t.period,
                                                            }),
                                                            t.certifications
                                                                ? m.jsx("div", {
                                                                      className:
                                                                          "space-y-2",
                                                                      children:
                                                                          t.certifications.map(
                                                                              (
                                                                                  r,
                                                                                  o
                                                                              ) =>
                                                                                  m.jsxs(
                                                                                      "div",
                                                                                      {
                                                                                          className:
                                                                                              "flex items-center",
                                                                                          children:
                                                                                              [
                                                                                                  m.jsx(
                                                                                                      "i",
                                                                                                      {
                                                                                                          className: `${r.icon} ${r.color} mr-2`,
                                                                                                      }
                                                                                                  ),
                                                                                                  m.jsx(
                                                                                                      "span",
                                                                                                      {
                                                                                                          className:
                                                                                                              "text-gray-700",
                                                                                                          children:
                                                                                                              r.name,
                                                                                                      }
                                                                                                  ),
                                                                                              ],
                                                                                      },
                                                                                      o
                                                                                  )
                                                                          ),
                                                                  })
                                                                : m.jsx("p", {
                                                                      className:
                                                                          "text-gray-700",
                                                                      children:
                                                                          t.description,
                                                                  }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        m.jsx("div", {
                                            className: "hidden md:block",
                                            children: m.jsx("div", {
                                                className:
                                                    "flex items-center justify-between",
                                                children:
                                                    n % 2 === 0
                                                        ? m.jsxs(m.Fragment, {
                                                              children: [
                                                                  m.jsx("div", {
                                                                      className:
                                                                          "w-5/12",
                                                                      children:
                                                                          m.jsxs(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "bg-white p-6 rounded-xl shadow-lg",
                                                                                  children:
                                                                                      [
                                                                                          m.jsx(
                                                                                              "h3",
                                                                                              {
                                                                                                  className:
                                                                                                      "text-xl font-bold text-gray-900 mb-2",
                                                                                                  children:
                                                                                                      t.title,
                                                                                              }
                                                                                          ),
                                                                                          m.jsx(
                                                                                              "h4",
                                                                                              {
                                                                                                  className: `${t.textColor} font-semibold mb-2`,
                                                                                                  children:
                                                                                                      t.company,
                                                                                              }
                                                                                          ),
                                                                                          m.jsx(
                                                                                              "p",
                                                                                              {
                                                                                                  className:
                                                                                                      "text-gray-600 text-sm mb-3",
                                                                                                  children:
                                                                                                      t.period,
                                                                                              }
                                                                                          ),
                                                                                          t.certifications
                                                                                              ? m.jsx(
                                                                                                    "div",
                                                                                                    {
                                                                                                        className:
                                                                                                            "space-y-2",
                                                                                                        children:
                                                                                                            t.certifications.map(
                                                                                                                (
                                                                                                                    r,
                                                                                                                    o
                                                                                                                ) =>
                                                                                                                    m.jsxs(
                                                                                                                        "div",
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                "flex items-center",
                                                                                                                            children:
                                                                                                                                [
                                                                                                                                    m.jsx(
                                                                                                                                        "i",
                                                                                                                                        {
                                                                                                                                            className: `${r.icon} ${r.color} mr-2`,
                                                                                                                                        }
                                                                                                                                    ),
                                                                                                                                    m.jsx(
                                                                                                                                        "span",
                                                                                                                                        {
                                                                                                                                            className:
                                                                                                                                                "text-gray-700",
                                                                                                                                            children:
                                                                                                                                                r.name,
                                                                                                                                        }
                                                                                                                                    ),
                                                                                                                                ],
                                                                                                                        },
                                                                                                                        o
                                                                                                                    )
                                                                                                            ),
                                                                                                    }
                                                                                                )
                                                                                              : m.jsx(
                                                                                                    "p",
                                                                                                    {
                                                                                                        className:
                                                                                                            "text-gray-700",
                                                                                                        children:
                                                                                                            t.description,
                                                                                                    }
                                                                                                ),
                                                                                      ],
                                                                              }
                                                                          ),
                                                                  }),
                                                                  m.jsx("div", {
                                                                      className:
                                                                          "flex justify-center w-2/12",
                                                                      children:
                                                                          m.jsx(
                                                                              "div",
                                                                              {
                                                                                  className: `w-3 h-3 ${t.color} rounded-full relative z-10`,
                                                                              }
                                                                          ),
                                                                  }),
                                                                  m.jsx("div", {
                                                                      className:
                                                                          "w-5/12",
                                                                  }),
                                                              ],
                                                          })
                                                        : m.jsxs(m.Fragment, {
                                                              children: [
                                                                  m.jsx("div", {
                                                                      className:
                                                                          "w-5/12",
                                                                  }),
                                                                  m.jsx("div", {
                                                                      className:
                                                                          "flex justify-center w-2/12",
                                                                      children:
                                                                          m.jsx(
                                                                              "div",
                                                                              {
                                                                                  className: `w-3 h-3 ${t.color} rounded-full relative z-10`,
                                                                              }
                                                                          ),
                                                                  }),
                                                                  m.jsx("div", {
                                                                      className:
                                                                          "w-5/12",
                                                                      children:
                                                                          m.jsxs(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "bg-white p-6 rounded-xl shadow-lg",
                                                                                  children:
                                                                                      [
                                                                                          m.jsx(
                                                                                              "h3",
                                                                                              {
                                                                                                  className:
                                                                                                      "text-xl font-bold text-gray-900 mb-2",
                                                                                                  children:
                                                                                                      t.title,
                                                                                              }
                                                                                          ),
                                                                                          m.jsx(
                                                                                              "h4",
                                                                                              {
                                                                                                  className: `${t.textColor} font-semibold mb-2`,
                                                                                                  children:
                                                                                                      t.company,
                                                                                              }
                                                                                          ),
                                                                                          m.jsx(
                                                                                              "p",
                                                                                              {
                                                                                                  className:
                                                                                                      "text-gray-600 text-sm mb-3",
                                                                                                  children:
                                                                                                      t.period,
                                                                                              }
                                                                                          ),
                                                                                          t.certifications
                                                                                              ? m.jsx(
                                                                                                    "div",
                                                                                                    {
                                                                                                        className:
                                                                                                            "space-y-2",
                                                                                                        children:
                                                                                                            t.certifications.map(
                                                                                                                (
                                                                                                                    r,
                                                                                                                    o
                                                                                                                ) =>
                                                                                                                    m.jsxs(
                                                                                                                        "div",
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                "flex items-center",
                                                                                                                            children:
                                                                                                                                [
                                                                                                                                    m.jsx(
                                                                                                                                        "i",
                                                                                                                                        {
                                                                                                                                            className: `${r.icon} ${r.color} mr-2`,
                                                                                                                                        }
                                                                                                                                    ),
                                                                                                                                    m.jsx(
                                                                                                                                        "span",
                                                                                                                                        {
                                                                                                                                            className:
                                                                                                                                                "text-gray-700",
                                                                                                                                            children:
                                                                                                                                                r.name,
                                                                                                                                        }
                                                                                                                                    ),
                                                                                                                                ],
                                                                                                                        },
                                                                                                                        o
                                                                                                                    )
                                                                                                            ),
                                                                                                    }
                                                                                                )
                                                                                              : m.jsx(
                                                                                                    "p",
                                                                                                    {
                                                                                                        className:
                                                                                                            "text-gray-700",
                                                                                                        children:
                                                                                                            t.description,
                                                                                                    }
                                                                                                ),
                                                                                      ],
                                                                              }
                                                                          ),
                                                                  }),
                                                              ],
                                                          }),
                                            }),
                                        }),
                                    ],
                                },
                                n
                            )
                        ),
                    ],
                }),
            ],
        }),
    });
}
function N2() {
    return m.jsx("section", {
        id: "contact",
        className: "bg-white py-20",
        children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                m.jsxs(xe.div, {
                    className: "text-center mb-16",
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    viewport: { once: !0 },
                    children: [
                        m.jsx("h2", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: "Let's Connect",
                        }),
                        m.jsx("p", {
                            className:
                                "text-xl text-gray-600 max-w-3xl mx-auto",
                            children:
                                "Interested in collaborating or discussing data science opportunities? I'd love to hear from you.",
                        }),
                    ],
                }),
                m.jsx("div", {
                    className: "max-w-4xl mx-auto",
                    children: m.jsxs(xe.div, {
                        className: "grid md:grid-cols-2 gap-12",
                        initial: { opacity: 0, y: 50 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.8 },
                        viewport: { once: !0 },
                        children: [
                            m.jsxs("div", {
                                className: "space-y-8",
                                children: [
                                    m.jsxs("div", {
                                        children: [
                                            m.jsx("h3", {
                                                className:
                                                    "text-2xl font-bold text-gray-900 mb-6",
                                                children: "Get in Touch",
                                            }),
                                            m.jsxs("div", {
                                                className: "space-y-4",
                                                children: [
                                                    m.jsxs("div", {
                                                        className:
                                                            "flex items-center",
                                                        children: [
                                                            m.jsx(Sc, {
                                                                className:
                                                                    "text-brand-blue text-xl mr-4",
                                                            }),
                                                            m.jsx("span", {
                                                                className:
                                                                    "text-gray-700",
                                                                children:
                                                                    "akashkoneti@outlook.com",
                                                            }),
                                                        ],
                                                    }),
                                                    m.jsxs("div", {
                                                        className:
                                                            "flex items-center",
                                                        children: [
                                                            m.jsx(VT, {
                                                                className:
                                                                    "text-brand-blue text-xl mr-4",
                                                            }),
                                                            m.jsx("span", {
                                                                className:
                                                                    "text-gray-700",
                                                                children:
                                                                    "London, UK",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    m.jsxs("div", {
                                        children: [
                                            m.jsx("h4", {
                                                className:
                                                    "text-lg font-semibold text-gray-900 mb-4",
                                                children: "Follow Me",
                                            }),
                                            m.jsxs("div", {
                                                className: "flex space-x-4",
                                                children: [
                                                    m.jsx(ge, {
                                                        size: "sm",
                                                        variant: "secondary",
                                                        className:
                                                            "w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white",
                                                        onClick: () =>
                                                            window.open(
                                                                "https://github.com/akashkoneti",
                                                                "_blank"
                                                            ),
                                                        children: m.jsx("i", {
                                                            className:
                                                                "fab fa-github",
                                                        }),
                                                    }),
                                                    m.jsx(ge, {
                                                        size: "sm",
                                                        variant: "secondary",
                                                        className:
                                                            "w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white",
                                                        onClick: () =>
                                                            window.open(
                                                                "https://www.linkedin.com/in/akashkoneti",
                                                                "_blank"
                                                            ),
                                                        children: m.jsx("i", {
                                                            className:
                                                                "fab fa-linkedin",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            m.jsxs("div", {
                                className: "space-y-8",
                                children: [
                                    m.jsxs("div", {
                                        className:
                                            "bg-gradient-to-r from-brand-blue to-purple-600 p-8 rounded-2xl text-white",
                                        children: [
                                            m.jsx("h4", {
                                                className:
                                                    "text-2xl font-semibold mb-4",
                                                children:
                                                    "Ready to Collaborate?",
                                            }),
                                            m.jsx("p", {
                                                className: "text-blue-100 mb-6",
                                                children:
                                                    "I'm always open to discussing new opportunities, interesting projects, or just chatting about data science!",
                                            }),
                                            m.jsxs(ge, {
                                                variant: "secondary",
                                                className:
                                                    "bg-white text-brand-blue hover:bg-blue-50 mb-4 w-full",
                                                onClick: () =>
                                                    window.open(
                                                        "mailto:akashkoneti@outlook.com",
                                                        "_blank"
                                                    ),
                                                children: [
                                                    m.jsx(Sc, {
                                                        className:
                                                            "w-4 h-4 mr-2",
                                                    }),
                                                    "Send Email",
                                                ],
                                            }),
                                        ],
                                    }),
                                    m.jsxs("div", {
                                        className: "bg-gray-50 p-6 rounded-2xl",
                                        children: [
                                            m.jsx("h4", {
                                                className:
                                                    "text-lg font-semibold text-gray-900 mb-3",
                                                children:
                                                    "What I Can Help With",
                                            }),
                                            m.jsxs("ul", {
                                                className:
                                                    "text-gray-600 space-y-2",
                                                children: [
                                                    m.jsx("li", {
                                                        children:
                                                            "• Data Analysis & Visualization",
                                                    }),
                                                    m.jsx("li", {
                                                        children:
                                                            "• Machine Learning Models",
                                                    }),
                                                    m.jsx("li", {
                                                        children:
                                                            "• Statistical Analysis",
                                                    }),
                                                    m.jsx("li", {
                                                        children:
                                                            "• Business Intelligence",
                                                    }),
                                                    m.jsx("li", {
                                                        children:
                                                            "• Data Pipeline Development",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function A2() {
    return m.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            m.jsx(Ov, {}),
            m.jsx(g2, {}),
            m.jsx(y2, {}),
            m.jsx(b2, {}),
            m.jsx(E2, {}),
            m.jsx(k2, {}),
            m.jsx(N2, {}),
            m.jsx("footer", {
                className: "bg-gray-900 text-white py-12",
                children: m.jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: m.jsxs("div", {
                        className: "text-center",
                        children: [
                            m.jsx("h3", {
                                className: "text-2xl font-bold mb-4",
                                children: "Akash Koneti",
                            }),
                            m.jsx("p", {
                                className: "text-gray-300 mb-6",
                                children:
                                    "Data Science Enthusiast | Machine Learning Expert | Problem Solver",
                            }),
                            m.jsxs("div", {
                                className: "flex justify-center space-x-6",
                                children: [
                                    m.jsx("a", {
                                        href: "https://github.com/akashkoneti",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                            "text-gray-300 hover:text-white transition-colors",
                                        children: m.jsx("i", {
                                            className: "fab fa-github text-xl",
                                        }),
                                    }),
                                    m.jsx("a", {
                                        href: "https://www.linkedin.com/in/akashkoneti",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                            "text-gray-300 hover:text-white transition-colors",
                                        children: m.jsx("i", {
                                            className:
                                                "fab fa-linkedin text-xl",
                                        }),
                                    }),
                                ],
                            }),
                            m.jsx("p", {
                                className: "text-gray-400 mt-8",
                                children:
                                    "© 2024 Akash Koneti. All rights reserved.",
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function R2(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function Wh(e) {
    return R2(e) || Array.isArray(e);
}
function j2() {
    return !!(
        typeof window < "u" &&
        window.document &&
        window.document.createElement
    );
}
function zd(e, t) {
    const n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    const o = JSON.stringify(Object.keys(e.breakpoints || {})),
        i = JSON.stringify(Object.keys(t.breakpoints || {}));
    return o !== i
        ? !1
        : n.every((s) => {
              const a = e[s],
                  l = t[s];
              return typeof a == "function"
                  ? `${a}` == `${l}`
                  : !Wh(a) || !Wh(l)
                  ? a === l
                  : zd(a, l);
          });
}
function Kh(e) {
    return e
        .concat()
        .sort((t, n) => (t.name > n.name ? 1 : -1))
        .map((t) => t.options);
}
function M2(e, t) {
    if (e.length !== t.length) return !1;
    const n = Kh(e),
        r = Kh(t);
    return n.every((o, i) => {
        const s = r[i];
        return zd(o, s);
    });
}
function Bd(e) {
    return typeof e == "number";
}
function Hc(e) {
    return typeof e == "string";
}
function Pa(e) {
    return typeof e == "boolean";
}
function Gh(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function se(e) {
    return Math.abs(e);
}
function $d(e) {
    return Math.sign(e);
}
function Io(e, t) {
    return se(e - t);
}
function L2(e, t) {
    if (e === 0 || t === 0 || se(e) <= se(t)) return 0;
    const n = Io(se(e), se(t));
    return se(n / e);
}
function D2(e) {
    return Math.round(e * 100) / 100;
}
function si(e) {
    return ai(e).map(Number);
}
function Et(e) {
    return e[wi(e)];
}
function wi(e) {
    return Math.max(0, e.length - 1);
}
function Ud(e, t) {
    return t === wi(e);
}
function Yh(e, t = 0) {
    return Array.from(Array(e), (n, r) => t + r);
}
function ai(e) {
    return Object.keys(e);
}
function ux(e, t) {
    return [e, t].reduce(
        (n, r) => (
            ai(r).forEach((o) => {
                const i = n[o],
                    s = r[o],
                    a = Gh(i) && Gh(s);
                n[o] = a ? ux(i, s) : s;
            }),
            n
        ),
        {}
    );
}
function Wc(e, t) {
    return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function O2(e, t) {
    const n = { start: r, center: o, end: i };
    function r() {
        return 0;
    }
    function o(l) {
        return i(l) / 2;
    }
    function i(l) {
        return t - l;
    }
    function s(l, c) {
        return Hc(e) ? n[e](l) : e(t, l, c);
    }
    return { measure: s };
}
function li() {
    let e = [];
    function t(o, i, s, a = { passive: !0 }) {
        let l;
        if ("addEventListener" in o)
            o.addEventListener(i, s, a),
                (l = () => o.removeEventListener(i, s, a));
        else {
            const c = o;
            c.addListener(s), (l = () => c.removeListener(s));
        }
        return e.push(l), r;
    }
    function n() {
        e = e.filter((o) => o());
    }
    const r = { add: t, clear: n };
    return r;
}
function I2(e, t, n, r) {
    const o = li(),
        i = 1e3 / 60;
    let s = null,
        a = 0,
        l = 0;
    function c() {
        o.add(e, "visibilitychange", () => {
            e.hidden && x();
        });
    }
    function u() {
        y(), o.clear();
    }
    function d(w) {
        if (!l) return;
        s || ((s = w), n(), n());
        const p = w - s;
        for (s = w, a += p; a >= i; ) n(), (a -= i);
        const h = a / i;
        r(h), l && (l = t.requestAnimationFrame(d));
    }
    function f() {
        l || (l = t.requestAnimationFrame(d));
    }
    function y() {
        t.cancelAnimationFrame(l), (s = null), (a = 0), (l = 0);
    }
    function x() {
        (s = null), (a = 0);
    }
    return { init: c, destroy: u, start: f, stop: y, update: n, render: r };
}
function _2(e, t) {
    const n = t === "rtl",
        r = e === "y",
        o = r ? "y" : "x",
        i = r ? "x" : "y",
        s = !r && n ? -1 : 1,
        a = u(),
        l = d();
    function c(x) {
        const { height: g, width: w } = x;
        return r ? g : w;
    }
    function u() {
        return r ? "top" : n ? "right" : "left";
    }
    function d() {
        return r ? "bottom" : n ? "left" : "right";
    }
    function f(x) {
        return x * s;
    }
    return {
        scroll: o,
        cross: i,
        startEdge: a,
        endEdge: l,
        measureSize: c,
        direction: f,
    };
}
function ir(e = 0, t = 0) {
    const n = se(e - t);
    function r(c) {
        return c < e;
    }
    function o(c) {
        return c > t;
    }
    function i(c) {
        return r(c) || o(c);
    }
    function s(c) {
        return i(c) ? (r(c) ? e : t) : c;
    }
    function a(c) {
        return n ? c - n * Math.ceil((c - t) / n) : c;
    }
    return {
        length: n,
        max: t,
        min: e,
        constrain: s,
        reachedAny: i,
        reachedMax: o,
        reachedMin: r,
        removeOffset: a,
    };
}
function dx(e, t, n) {
    const { constrain: r } = ir(0, e),
        o = e + 1;
    let i = s(t);
    function s(f) {
        return n ? se((o + f) % o) : r(f);
    }
    function a() {
        return i;
    }
    function l(f) {
        return (i = s(f)), d;
    }
    function c(f) {
        return u().set(a() + f);
    }
    function u() {
        return dx(e, a(), n);
    }
    const d = { get: a, set: l, add: c, clone: u };
    return d;
}
function V2(e, t, n, r, o, i, s, a, l, c, u, d, f, y, x, g, w, p, h) {
    const { cross: v, direction: T } = e,
        C = ["INPUT", "SELECT", "TEXTAREA"],
        b = { passive: !1 },
        P = li(),
        E = li(),
        A = ir(50, 225).constrain(y.measure(20)),
        N = { mouse: 300, touch: 400 },
        L = { mouse: 500, touch: 600 },
        D = x ? 43 : 25;
    let U = !1,
        R = 0,
        $ = 0,
        F = !1,
        _ = !1,
        k = !1,
        M = !1;
    function O(V) {
        if (!h) return;
        function Y(Ee) {
            (Pa(h) || h(V, Ee)) && Ve(Ee);
        }
        const re = t;
        P.add(re, "dragstart", (Ee) => Ee.preventDefault(), b)
            .add(re, "touchmove", () => {}, b)
            .add(re, "touchend", () => {})
            .add(re, "touchstart", Y)
            .add(re, "mousedown", Y)
            .add(re, "touchcancel", Ce)
            .add(re, "contextmenu", Ce)
            .add(re, "click", st, !0);
    }
    function z() {
        P.clear(), E.clear();
    }
    function K() {
        const V = M ? n : t;
        E.add(V, "touchmove", pe, b)
            .add(V, "touchend", Ce)
            .add(V, "mousemove", pe, b)
            .add(V, "mouseup", Ce);
    }
    function fe(V) {
        const Y = V.nodeName || "";
        return C.includes(Y);
    }
    function ce() {
        return (x ? L : N)[M ? "mouse" : "touch"];
    }
    function yt(V, Y) {
        const re = d.add($d(V) * -1),
            Ee = u.byDistance(V, !x).distance;
        return x || se(V) < A
            ? Ee
            : w && Y
            ? Ee * 0.5
            : u.byIndex(re.get(), 0).distance;
    }
    function Ve(V) {
        const Y = Wc(V, r);
        (M = Y),
            (k = x && Y && !V.buttons && U),
            (U = Io(o.get(), s.get()) >= 2),
            !(Y && V.button !== 0) &&
                (fe(V.target) ||
                    ((F = !0),
                    i.pointerDown(V),
                    c.useFriction(0).useDuration(0),
                    o.set(s),
                    K(),
                    (R = i.readPoint(V)),
                    ($ = i.readPoint(V, v)),
                    f.emit("pointerDown")));
    }
    function pe(V) {
        if (!Wc(V, r) && V.touches.length >= 2) return Ce(V);
        const re = i.readPoint(V),
            Ee = i.readPoint(V, v),
            at = Io(re, R),
            vt = Io(Ee, $);
        if (!_ && !M && (!V.cancelable || ((_ = at > vt), !_))) return Ce(V);
        const $t = i.pointerMove(V);
        at > g && (k = !0),
            c.useFriction(0.3).useDuration(0.75),
            a.start(),
            o.add(T($t)),
            V.preventDefault();
    }
    function Ce(V) {
        const re = u.byDistance(0, !1).index !== d.get(),
            Ee = i.pointerUp(V) * ce(),
            at = yt(T(Ee), re),
            vt = L2(Ee, at),
            $t = D - 10 * vt,
            Qe = p + vt / 50;
        (_ = !1),
            (F = !1),
            E.clear(),
            c.useDuration($t).useFriction(Qe),
            l.distance(at, !x),
            (M = !1),
            f.emit("pointerUp");
    }
    function st(V) {
        k && (V.stopPropagation(), V.preventDefault(), (k = !1));
    }
    function Fe() {
        return F;
    }
    return { init: O, destroy: z, pointerDown: Fe };
}
function F2(e, t) {
    let r, o;
    function i(d) {
        return d.timeStamp;
    }
    function s(d, f) {
        const x = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
        return (Wc(d, t) ? d : d.touches[0])[x];
    }
    function a(d) {
        return (r = d), (o = d), s(d);
    }
    function l(d) {
        const f = s(d) - s(o),
            y = i(d) - i(r) > 170;
        return (o = d), y && (r = d), f;
    }
    function c(d) {
        if (!r || !o) return 0;
        const f = s(o) - s(r),
            y = i(d) - i(r),
            x = i(d) - i(o) > 170,
            g = f / y;
        return y && !x && se(g) > 0.1 ? g : 0;
    }
    return { pointerDown: a, pointerMove: l, pointerUp: c, readPoint: s };
}
function z2() {
    function e(n) {
        const {
            offsetTop: r,
            offsetLeft: o,
            offsetWidth: i,
            offsetHeight: s,
        } = n;
        return {
            top: r,
            right: o + i,
            bottom: r + s,
            left: o,
            width: i,
            height: s,
        };
    }
    return { measure: e };
}
function B2(e) {
    function t(r) {
        return e * (r / 100);
    }
    return { measure: t };
}
function $2(e, t, n, r, o, i, s) {
    const a = [e].concat(r);
    let l,
        c,
        u = [],
        d = !1;
    function f(w) {
        return o.measureSize(s.measure(w));
    }
    function y(w) {
        if (!i) return;
        (c = f(e)), (u = r.map(f));
        function p(h) {
            for (const v of h) {
                if (d) return;
                const T = v.target === e,
                    C = r.indexOf(v.target),
                    b = T ? c : u[C],
                    P = f(T ? e : r[C]);
                if (se(P - b) >= 0.5) {
                    w.reInit(), t.emit("resize");
                    break;
                }
            }
        }
        (l = new ResizeObserver((h) => {
            (Pa(i) || i(w, h)) && p(h);
        })),
            n.requestAnimationFrame(() => {
                a.forEach((h) => l.observe(h));
            });
    }
    function x() {
        (d = !0), l && l.disconnect();
    }
    return { init: y, destroy: x };
}
function U2(e, t, n, r, o, i) {
    let s = 0,
        a = 0,
        l = o,
        c = i,
        u = e.get(),
        d = 0;
    function f() {
        const b = r.get() - e.get(),
            P = !l;
        let E = 0;
        return (
            P
                ? ((s = 0), n.set(r), e.set(r), (E = b))
                : (n.set(e),
                  (s += b / l),
                  (s *= c),
                  (u += s),
                  e.add(s),
                  (E = u - d)),
            (a = $d(E)),
            (d = u),
            C
        );
    }
    function y() {
        const b = r.get() - t.get();
        return se(b) < 0.001;
    }
    function x() {
        return l;
    }
    function g() {
        return a;
    }
    function w() {
        return s;
    }
    function p() {
        return v(o);
    }
    function h() {
        return T(i);
    }
    function v(b) {
        return (l = b), C;
    }
    function T(b) {
        return (c = b), C;
    }
    const C = {
        direction: g,
        duration: x,
        velocity: w,
        seek: f,
        settled: y,
        useBaseFriction: h,
        useBaseDuration: p,
        useFriction: T,
        useDuration: v,
    };
    return C;
}
function H2(e, t, n, r, o) {
    const i = o.measure(10),
        s = o.measure(50),
        a = ir(0.1, 0.99);
    let l = !1;
    function c() {
        return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
    }
    function u(y) {
        if (!c()) return;
        const x = e.reachedMin(t.get()) ? "min" : "max",
            g = se(e[x] - t.get()),
            w = n.get() - t.get(),
            p = a.constrain(g / s);
        n.subtract(w * p),
            !y &&
                se(w) < i &&
                (n.set(e.constrain(n.get())),
                r.useDuration(25).useBaseFriction());
    }
    function d(y) {
        l = !y;
    }
    return { shouldConstrain: c, constrain: u, toggleActive: d };
}
function W2(e, t, n, r, o) {
    const i = ir(-t + e, 0),
        s = d(),
        a = u(),
        l = f();
    function c(x, g) {
        return Io(x, g) <= 1;
    }
    function u() {
        const x = s[0],
            g = Et(s),
            w = s.lastIndexOf(x),
            p = s.indexOf(g) + 1;
        return ir(w, p);
    }
    function d() {
        return n
            .map((x, g) => {
                const { min: w, max: p } = i,
                    h = i.constrain(x),
                    v = !g,
                    T = Ud(n, g);
                return v ? p : T || c(w, h) ? w : c(p, h) ? p : h;
            })
            .map((x) => parseFloat(x.toFixed(3)));
    }
    function f() {
        if (t <= e + o) return [i.max];
        if (r === "keepSnaps") return s;
        const { min: x, max: g } = a;
        return s.slice(x, g);
    }
    return { snapsContained: l, scrollContainLimit: a };
}
function K2(e, t, n) {
    const r = t[0],
        o = n ? r - e : Et(t);
    return { limit: ir(o, r) };
}
function G2(e, t, n, r) {
    const i = t.min + 0.1,
        s = t.max + 0.1,
        { reachedMin: a, reachedMax: l } = ir(i, s);
    function c(f) {
        return f === 1 ? l(n.get()) : f === -1 ? a(n.get()) : !1;
    }
    function u(f) {
        if (!c(f)) return;
        const y = e * (f * -1);
        r.forEach((x) => x.add(y));
    }
    return { loop: u };
}
function Y2(e) {
    const { max: t, length: n } = e;
    function r(i) {
        const s = i - t;
        return n ? s / -n : 0;
    }
    return { get: r };
}
function X2(e, t, n, r, o) {
    const { startEdge: i, endEdge: s } = e,
        { groupSlides: a } = o,
        l = d().map(t.measure),
        c = f(),
        u = y();
    function d() {
        return a(r)
            .map((g) => Et(g)[s] - g[0][i])
            .map(se);
    }
    function f() {
        return r.map((g) => n[i] - g[i]).map((g) => -se(g));
    }
    function y() {
        return a(c)
            .map((g) => g[0])
            .map((g, w) => g + l[w]);
    }
    return { snaps: c, snapsAligned: u };
}
function Q2(e, t, n, r, o, i) {
    const { groupSlides: s } = o,
        { min: a, max: l } = r,
        c = u();
    function u() {
        const f = s(i),
            y = !e || t === "keepSnaps";
        return n.length === 1
            ? [i]
            : y
            ? f
            : f.slice(a, l).map((x, g, w) => {
                  const p = !g,
                      h = Ud(w, g);
                  if (p) {
                      const v = Et(w[0]) + 1;
                      return Yh(v);
                  }
                  if (h) {
                      const v = wi(i) - Et(w)[0] + 1;
                      return Yh(v, Et(w)[0]);
                  }
                  return x;
              });
    }
    return { slideRegistry: c };
}
function q2(e, t, n, r, o) {
    const { reachedAny: i, removeOffset: s, constrain: a } = r;
    function l(x) {
        return x.concat().sort((g, w) => se(g) - se(w))[0];
    }
    function c(x) {
        const g = e ? s(x) : a(x),
            w = t
                .map((h, v) => ({ diff: u(h - g, 0), index: v }))
                .sort((h, v) => se(h.diff) - se(v.diff)),
            { index: p } = w[0];
        return { index: p, distance: g };
    }
    function u(x, g) {
        const w = [x, x + n, x - n];
        if (!e) return x;
        if (!g) return l(w);
        const p = w.filter((h) => $d(h) === g);
        return p.length ? l(p) : Et(w) - n;
    }
    function d(x, g) {
        const w = t[x] - o.get(),
            p = u(w, g);
        return { index: x, distance: p };
    }
    function f(x, g) {
        const w = o.get() + x,
            { index: p, distance: h } = c(w),
            v = !e && i(w);
        if (!g || v) return { index: p, distance: x };
        const T = t[p] - h,
            C = x + u(T, 0);
        return { index: p, distance: C };
    }
    return { byDistance: f, byIndex: d, shortcut: u };
}
function Z2(e, t, n, r, o, i, s) {
    function a(d) {
        const f = d.distance,
            y = d.index !== t.get();
        i.add(f),
            f &&
                (r.duration()
                    ? e.start()
                    : (e.update(), e.render(1), e.update())),
            y && (n.set(t.get()), t.set(d.index), s.emit("select"));
    }
    function l(d, f) {
        const y = o.byDistance(d, f);
        a(y);
    }
    function c(d, f) {
        const y = t.clone().set(d),
            x = o.byIndex(y.get(), f);
        a(x);
    }
    return { distance: l, index: c };
}
function J2(e, t, n, r, o, i, s, a) {
    const l = { passive: !0, capture: !0 };
    let c = 0;
    function u(y) {
        if (!a) return;
        function x(g) {
            if (new Date().getTime() - c > 10) return;
            s.emit("slideFocusStart"), (e.scrollLeft = 0);
            const h = n.findIndex((v) => v.includes(g));
            Bd(h) && (o.useDuration(0), r.index(h, 0), s.emit("slideFocus"));
        }
        i.add(document, "keydown", d, !1),
            t.forEach((g, w) => {
                i.add(
                    g,
                    "focus",
                    (p) => {
                        (Pa(a) || a(y, p)) && x(w);
                    },
                    l
                );
            });
    }
    function d(y) {
        y.code === "Tab" && (c = new Date().getTime());
    }
    return { init: u };
}
function To(e) {
    let t = e;
    function n() {
        return t;
    }
    function r(l) {
        t = s(l);
    }
    function o(l) {
        t += s(l);
    }
    function i(l) {
        t -= s(l);
    }
    function s(l) {
        return Bd(l) ? l : l.get();
    }
    return { get: n, set: r, add: o, subtract: i };
}
function fx(e, t) {
    const n = e.scroll === "x" ? s : a,
        r = t.style;
    let o = null,
        i = !1;
    function s(f) {
        return `translate3d(${f}px,0px,0px)`;
    }
    function a(f) {
        return `translate3d(0px,${f}px,0px)`;
    }
    function l(f) {
        if (i) return;
        const y = D2(e.direction(f));
        y !== o && ((r.transform = n(y)), (o = y));
    }
    function c(f) {
        i = !f;
    }
    function u() {
        i ||
            ((r.transform = ""),
            t.getAttribute("style") || t.removeAttribute("style"));
    }
    return { clear: u, to: l, toggleActive: c };
}
function eA(e, t, n, r, o, i, s, a, l) {
    const u = si(o),
        d = si(o).reverse(),
        f = p().concat(h());
    function y(P, E) {
        return P.reduce((A, N) => A - o[N], E);
    }
    function x(P, E) {
        return P.reduce((A, N) => (y(A, E) > 0 ? A.concat([N]) : A), []);
    }
    function g(P) {
        return i.map((E, A) => ({
            start: E - r[A] + 0.5 + P,
            end: E + t - 0.5 + P,
        }));
    }
    function w(P, E, A) {
        const N = g(E);
        return P.map((L) => {
            const D = A ? 0 : -n,
                U = A ? n : 0,
                R = A ? "end" : "start",
                $ = N[L][R];
            return {
                index: L,
                loopPoint: $,
                slideLocation: To(-1),
                translate: fx(e, l[L]),
                target: () => (a.get() > $ ? D : U),
            };
        });
    }
    function p() {
        const P = s[0],
            E = x(d, P);
        return w(E, n, !1);
    }
    function h() {
        const P = t - s[0] - 1,
            E = x(u, P);
        return w(E, -n, !0);
    }
    function v() {
        return f.every(({ index: P }) => {
            const E = u.filter((A) => A !== P);
            return y(E, t) <= 0.1;
        });
    }
    function T() {
        f.forEach((P) => {
            const { target: E, translate: A, slideLocation: N } = P,
                L = E();
            L !== N.get() && (A.to(L), N.set(L));
        });
    }
    function C() {
        f.forEach((P) => P.translate.clear());
    }
    return { canLoop: v, clear: C, loop: T, loopPoints: f };
}
function tA(e, t, n) {
    let r,
        o = !1;
    function i(l) {
        if (!n) return;
        function c(u) {
            for (const d of u)
                if (d.type === "childList") {
                    l.reInit(), t.emit("slidesChanged");
                    break;
                }
        }
        (r = new MutationObserver((u) => {
            o || ((Pa(n) || n(l, u)) && c(u));
        })),
            r.observe(e, { childList: !0 });
    }
    function s() {
        r && r.disconnect(), (o = !0);
    }
    return { init: i, destroy: s };
}
function nA(e, t, n, r) {
    const o = {};
    let i = null,
        s = null,
        a,
        l = !1;
    function c() {
        (a = new IntersectionObserver(
            (x) => {
                l ||
                    (x.forEach((g) => {
                        const w = t.indexOf(g.target);
                        o[w] = g;
                    }),
                    (i = null),
                    (s = null),
                    n.emit("slidesInView"));
            },
            { root: e.parentElement, threshold: r }
        )),
            t.forEach((x) => a.observe(x));
    }
    function u() {
        a && a.disconnect(), (l = !0);
    }
    function d(x) {
        return ai(o).reduce((g, w) => {
            const p = parseInt(w),
                { isIntersecting: h } = o[p];
            return ((x && h) || (!x && !h)) && g.push(p), g;
        }, []);
    }
    function f(x = !0) {
        if (x && i) return i;
        if (!x && s) return s;
        const g = d(x);
        return x && (i = g), x || (s = g), g;
    }
    return { init: c, destroy: u, get: f };
}
function rA(e, t, n, r, o, i) {
    const { measureSize: s, startEdge: a, endEdge: l } = e,
        c = n[0] && o,
        u = x(),
        d = g(),
        f = n.map(s),
        y = w();
    function x() {
        if (!c) return 0;
        const h = n[0];
        return se(t[a] - h[a]);
    }
    function g() {
        if (!c) return 0;
        const h = i.getComputedStyle(Et(r));
        return parseFloat(h.getPropertyValue(`margin-${l}`));
    }
    function w() {
        return n
            .map((h, v, T) => {
                const C = !v,
                    b = Ud(T, v);
                return C ? f[v] + u : b ? f[v] + d : T[v + 1][a] - h[a];
            })
            .map(se);
    }
    return { slideSizes: f, slideSizesWithGaps: y, startGap: u, endGap: d };
}
function oA(e, t, n, r, o, i, s, a, l) {
    const { startEdge: c, endEdge: u, direction: d } = e,
        f = Bd(n);
    function y(p, h) {
        return si(p)
            .filter((v) => v % h === 0)
            .map((v) => p.slice(v, v + h));
    }
    function x(p) {
        return p.length
            ? si(p)
                  .reduce((h, v, T) => {
                      const C = Et(h) || 0,
                          b = C === 0,
                          P = v === wi(p),
                          E = o[c] - i[C][c],
                          A = o[c] - i[v][u],
                          N = !r && b ? d(s) : 0,
                          L = !r && P ? d(a) : 0,
                          D = se(A - L - (E + N));
                      return (
                          T && D > t + l && h.push(v), P && h.push(p.length), h
                      );
                  }, [])
                  .map((h, v, T) => {
                      const C = Math.max(T[v - 1] || 0);
                      return p.slice(C, h);
                  })
            : [];
    }
    function g(p) {
        return f ? y(p, n) : x(p);
    }
    return { groupSlides: g };
}
function iA(e, t, n, r, o, i, s) {
    const {
            align: a,
            axis: l,
            direction: c,
            startIndex: u,
            loop: d,
            duration: f,
            dragFree: y,
            dragThreshold: x,
            inViewThreshold: g,
            slidesToScroll: w,
            skipSnaps: p,
            containScroll: h,
            watchResize: v,
            watchSlides: T,
            watchDrag: C,
            watchFocus: b,
        } = i,
        P = 2,
        E = z2(),
        A = E.measure(t),
        N = n.map(E.measure),
        L = _2(l, c),
        D = L.measureSize(A),
        U = B2(D),
        R = O2(a, D),
        $ = !d && !!h,
        F = d || !!h,
        {
            slideSizes: _,
            slideSizesWithGaps: k,
            startGap: M,
            endGap: O,
        } = rA(L, A, N, n, F, o),
        z = oA(L, D, w, d, A, N, M, O, P),
        { snaps: K, snapsAligned: fe } = X2(L, R, A, N, z),
        ce = -Et(K) + Et(k),
        { snapsContained: yt, scrollContainLimit: Ve } = W2(D, ce, fe, h, P),
        pe = $ ? yt : fe,
        { limit: Ce } = K2(ce, pe, d),
        st = dx(wi(pe), u, d),
        Fe = st.clone(),
        q = si(n),
        V = ({
            dragHandler: cr,
            scrollBody: Aa,
            scrollBounds: Ra,
            options: { loop: Si },
        }) => {
            Si || Ra.constrain(cr.pointerDown()), Aa.seek();
        },
        Y = (
            {
                scrollBody: cr,
                translate: Aa,
                location: Ra,
                offsetLocation: Si,
                previousLocation: wx,
                scrollLooper: Sx,
                slideLooper: Tx,
                dragHandler: Cx,
                animation: Px,
                eventHandler: Xd,
                scrollBounds: bx,
                options: { loop: Qd },
            },
            qd
        ) => {
            const Zd = cr.settled(),
                Ex = !bx.shouldConstrain(),
                Jd = Qd ? Zd : Zd && Ex,
                ef = Jd && !Cx.pointerDown();
            ef && Px.stop();
            const kx = Ra.get() * qd + wx.get() * (1 - qd);
            Si.set(kx),
                Qd && (Sx.loop(cr.direction()), Tx.loop()),
                Aa.to(Si.get()),
                ef && Xd.emit("settle"),
                Jd || Xd.emit("scroll");
        },
        re = I2(
            r,
            o,
            () => V(Na),
            (cr) => Y(Na, cr)
        ),
        Ee = 0.68,
        at = pe[st.get()],
        vt = To(at),
        $t = To(at),
        Qe = To(at),
        Fn = To(at),
        ro = U2(vt, Qe, $t, Fn, f, Ee),
        Ea = q2(d, pe, ce, Ce, Fn),
        ka = Z2(re, st, Fe, ro, Ea, Fn, s),
        Kd = Y2(Ce),
        Gd = li(),
        vx = nA(t, n, s, g),
        { slideRegistry: Yd } = Q2($, h, pe, Ve, z, q),
        xx = J2(e, n, Yd, ka, ro, Gd, s, b),
        Na = {
            ownerDocument: r,
            ownerWindow: o,
            eventHandler: s,
            containerRect: A,
            slideRects: N,
            animation: re,
            axis: L,
            dragHandler: V2(
                L,
                e,
                r,
                o,
                Fn,
                F2(L, o),
                vt,
                re,
                ka,
                ro,
                Ea,
                st,
                s,
                U,
                y,
                x,
                p,
                Ee,
                C
            ),
            eventStore: Gd,
            percentOfView: U,
            index: st,
            indexPrevious: Fe,
            limit: Ce,
            location: vt,
            offsetLocation: Qe,
            previousLocation: $t,
            options: i,
            resizeHandler: $2(t, s, o, n, L, v, E),
            scrollBody: ro,
            scrollBounds: H2(Ce, Qe, Fn, ro, U),
            scrollLooper: G2(ce, Ce, Qe, [vt, Qe, $t, Fn]),
            scrollProgress: Kd,
            scrollSnapList: pe.map(Kd.get),
            scrollSnaps: pe,
            scrollTarget: Ea,
            scrollTo: ka,
            slideLooper: eA(L, D, ce, _, k, K, pe, Qe, n),
            slideFocus: xx,
            slidesHandler: tA(t, s, T),
            slidesInView: vx,
            slideIndexes: q,
            slideRegistry: Yd,
            slidesToScroll: z,
            target: Fn,
            translate: fx(L, t),
        };
    return Na;
}
function sA() {
    let e = {},
        t;
    function n(c) {
        t = c;
    }
    function r(c) {
        return e[c] || [];
    }
    function o(c) {
        return r(c).forEach((u) => u(t, c)), l;
    }
    function i(c, u) {
        return (e[c] = r(c).concat([u])), l;
    }
    function s(c, u) {
        return (e[c] = r(c).filter((d) => d !== u)), l;
    }
    function a() {
        e = {};
    }
    const l = { init: n, emit: o, off: s, on: i, clear: a };
    return l;
}
const aA = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0,
};
function lA(e) {
    function t(i, s) {
        return ux(i, s || {});
    }
    function n(i) {
        const s = i.breakpoints || {},
            a = ai(s)
                .filter((l) => e.matchMedia(l).matches)
                .map((l) => s[l])
                .reduce((l, c) => t(l, c), {});
        return t(i, a);
    }
    function r(i) {
        return i
            .map((s) => ai(s.breakpoints || {}))
            .reduce((s, a) => s.concat(a), [])
            .map(e.matchMedia);
    }
    return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function cA(e) {
    let t = [];
    function n(i, s) {
        return (
            (t = s.filter(
                ({ options: a }) => e.optionsAtMedia(a).active !== !1
            )),
            t.forEach((a) => a.init(i, e)),
            s.reduce((a, l) => Object.assign(a, { [l.name]: l }), {})
        );
    }
    function r() {
        t = t.filter((i) => i.destroy());
    }
    return { init: n, destroy: r };
}
function Ks(e, t, n) {
    const r = e.ownerDocument,
        o = r.defaultView,
        i = lA(o),
        s = cA(i),
        a = li(),
        l = sA(),
        { mergeOptions: c, optionsAtMedia: u, optionsMediaQueries: d } = i,
        { on: f, off: y, emit: x } = l,
        g = L;
    let w = !1,
        p,
        h = c(aA, Ks.globalOptions),
        v = c(h),
        T = [],
        C,
        b,
        P;
    function E() {
        const { container: q, slides: V } = v;
        b = (Hc(q) ? e.querySelector(q) : q) || e.children[0];
        const re = Hc(V) ? b.querySelectorAll(V) : V;
        P = [].slice.call(re || b.children);
    }
    function A(q) {
        const V = iA(e, b, P, r, o, q, l);
        if (q.loop && !V.slideLooper.canLoop()) {
            const Y = Object.assign({}, q, { loop: !1 });
            return A(Y);
        }
        return V;
    }
    function N(q, V) {
        w ||
            ((h = c(h, q)),
            (v = u(h)),
            (T = V || T),
            E(),
            (p = A(v)),
            d([h, ...T.map(({ options: Y }) => Y)]).forEach((Y) =>
                a.add(Y, "change", L)
            ),
            v.active &&
                (p.translate.to(p.location.get()),
                p.animation.init(),
                p.slidesInView.init(),
                p.slideFocus.init(Fe),
                p.eventHandler.init(Fe),
                p.resizeHandler.init(Fe),
                p.slidesHandler.init(Fe),
                p.options.loop && p.slideLooper.loop(),
                b.offsetParent && P.length && p.dragHandler.init(Fe),
                (C = s.init(Fe, T))));
    }
    function L(q, V) {
        const Y = z();
        D(), N(c({ startIndex: Y }, q), V), l.emit("reInit");
    }
    function D() {
        p.dragHandler.destroy(),
            p.eventStore.clear(),
            p.translate.clear(),
            p.slideLooper.clear(),
            p.resizeHandler.destroy(),
            p.slidesHandler.destroy(),
            p.slidesInView.destroy(),
            p.animation.destroy(),
            s.destroy(),
            a.clear();
    }
    function U() {
        w || ((w = !0), a.clear(), D(), l.emit("destroy"), l.clear());
    }
    function R(q, V, Y) {
        !v.active ||
            w ||
            (p.scrollBody
                .useBaseFriction()
                .useDuration(V === !0 ? 0 : v.duration),
            p.scrollTo.index(q, Y || 0));
    }
    function $(q) {
        const V = p.index.add(1).get();
        R(V, q, -1);
    }
    function F(q) {
        const V = p.index.add(-1).get();
        R(V, q, 1);
    }
    function _() {
        return p.index.add(1).get() !== z();
    }
    function k() {
        return p.index.add(-1).get() !== z();
    }
    function M() {
        return p.scrollSnapList;
    }
    function O() {
        return p.scrollProgress.get(p.offsetLocation.get());
    }
    function z() {
        return p.index.get();
    }
    function K() {
        return p.indexPrevious.get();
    }
    function fe() {
        return p.slidesInView.get();
    }
    function ce() {
        return p.slidesInView.get(!1);
    }
    function yt() {
        return C;
    }
    function Ve() {
        return p;
    }
    function pe() {
        return e;
    }
    function Ce() {
        return b;
    }
    function st() {
        return P;
    }
    const Fe = {
        canScrollNext: _,
        canScrollPrev: k,
        containerNode: Ce,
        internalEngine: Ve,
        destroy: U,
        off: y,
        on: f,
        emit: x,
        plugins: yt,
        previousScrollSnap: K,
        reInit: g,
        rootNode: pe,
        scrollNext: $,
        scrollPrev: F,
        scrollProgress: O,
        scrollSnapList: M,
        scrollTo: R,
        selectedScrollSnap: z,
        slideNodes: st,
        slidesInView: fe,
        slidesNotInView: ce,
    };
    return N(t, n), setTimeout(() => l.emit("init"), 0), Fe;
}
Ks.globalOptions = void 0;
function Hd(e = {}, t = []) {
    const n = S.useRef(e),
        r = S.useRef(t),
        [o, i] = S.useState(),
        [s, a] = S.useState(),
        l = S.useCallback(() => {
            o && o.reInit(n.current, r.current);
        }, [o]);
    return (
        S.useEffect(() => {
            zd(n.current, e) || ((n.current = e), l());
        }, [e, l]),
        S.useEffect(() => {
            M2(r.current, t) || ((r.current = t), l());
        }, [t, l]),
        S.useEffect(() => {
            if (j2() && s) {
                Ks.globalOptions = Hd.globalOptions;
                const c = Ks(s, n.current, r.current);
                return i(c), () => c.destroy();
            } else i(void 0);
        }, [s, i]),
        [a, o]
    );
}
Hd.globalOptions = void 0;
const px = S.createContext(null);
function ba() {
    const e = S.useContext(px);
    if (!e) throw new Error("useCarousel must be used within a <Carousel />");
    return e;
}
const hx = S.forwardRef(
    (
        {
            orientation: e = "horizontal",
            opts: t,
            setApi: n,
            plugins: r,
            className: o,
            children: i,
            ...s
        },
        a
    ) => {
        const [l, c] = Hd({ ...t, axis: e === "horizontal" ? "x" : "y" }, r),
            [u, d] = S.useState(!1),
            [f, y] = S.useState(!1),
            x = S.useCallback((h) => {
                h && (d(h.canScrollPrev()), y(h.canScrollNext()));
            }, []),
            g = S.useCallback(() => {
                c == null || c.scrollPrev();
            }, [c]),
            w = S.useCallback(() => {
                c == null || c.scrollNext();
            }, [c]),
            p = S.useCallback(
                (h) => {
                    h.key === "ArrowLeft"
                        ? (h.preventDefault(), g())
                        : h.key === "ArrowRight" && (h.preventDefault(), w());
                },
                [g, w]
            );
        return (
            S.useEffect(() => {
                !c || !n || n(c);
            }, [c, n]),
            S.useEffect(() => {
                if (c)
                    return (
                        x(c),
                        c.on("reInit", x),
                        c.on("select", x),
                        () => {
                            c == null || c.off("select", x);
                        }
                    );
            }, [c, x]),
            m.jsx(px.Provider, {
                value: {
                    carouselRef: l,
                    api: c,
                    opts: t,
                    orientation:
                        e ||
                        ((t == null ? void 0 : t.axis) === "y"
                            ? "vertical"
                            : "horizontal"),
                    scrollPrev: g,
                    scrollNext: w,
                    canScrollPrev: u,
                    canScrollNext: f,
                },
                children: m.jsx("div", {
                    ref: a,
                    onKeyDownCapture: p,
                    className: ve("relative", o),
                    role: "region",
                    "aria-roledescription": "carousel",
                    ...s,
                    children: i,
                }),
            })
        );
    }
);
hx.displayName = "Carousel";
const mx = S.forwardRef(({ className: e, ...t }, n) => {
    const { carouselRef: r, orientation: o } = ba();
    return m.jsx("div", {
        ref: r,
        className: "overflow-hidden",
        children: m.jsx("div", {
            ref: n,
            className: ve(
                "flex",
                o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                e
            ),
            ...t,
        }),
    });
});
mx.displayName = "CarouselContent";
const Kc = S.forwardRef(({ className: e, ...t }, n) => {
    const { orientation: r } = ba();
    return m.jsx("div", {
        ref: n,
        role: "group",
        "aria-roledescription": "slide",
        className: ve(
            "min-w-0 shrink-0 grow-0 basis-full",
            r === "horizontal" ? "pl-4" : "pt-4",
            e
        ),
        ...t,
    });
});
Kc.displayName = "CarouselItem";
const gx = S.forwardRef(
    ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
        const { orientation: i, scrollPrev: s, canScrollPrev: a } = ba();
        return m.jsxs(ge, {
            ref: o,
            variant: t,
            size: n,
            className: ve(
                "absolute  h-8 w-8 rounded-full",
                i === "horizontal"
                    ? "-left-12 top-1/2 -translate-y-1/2"
                    : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
                e
            ),
            disabled: !a,
            onClick: s,
            ...r,
            children: [
                m.jsx(wc, { className: "h-4 w-4" }),
                m.jsx("span", {
                    className: "sr-only",
                    children: "Previous slide",
                }),
            ],
        });
    }
);
gx.displayName = "CarouselPrevious";
const yx = S.forwardRef(
    ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
        const { orientation: i, scrollNext: s, canScrollNext: a } = ba();
        return m.jsxs(ge, {
            ref: o,
            variant: t,
            size: n,
            className: ve(
                "absolute h-8 w-8 rounded-full",
                i === "horizontal"
                    ? "-right-12 top-1/2 -translate-y-1/2"
                    : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
                e
            ),
            disabled: !a,
            onClick: s,
            ...r,
            children: [
                m.jsx(DT, { className: "h-4 w-4" }),
                m.jsx("span", { className: "sr-only", children: "Next slide" }),
            ],
        });
    }
);
yx.displayName = "CarouselNext";
const uA = {
    active: !0,
    breakpoints: {},
    delay: 4e3,
    jump: !1,
    playOnInit: !0,
    stopOnFocusIn: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    stopOnLastSnap: !1,
    rootNode: null,
};
function dA(e, t) {
    const n = e.scrollSnapList();
    return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function fA(e, t) {
    const n = e.rootNode();
    return (t && t(n)) || n;
}
function Wd(e = {}) {
    let t,
        n,
        r,
        o,
        i = null,
        s = 0,
        a = !1,
        l = !1,
        c = !1,
        u = !1;
    function d(R, $) {
        n = R;
        const { mergeOptions: F, optionsAtMedia: _ } = $,
            k = F(uA, Wd.globalOptions),
            M = F(k, e);
        if (((t = _(M)), n.scrollSnapList().length <= 1)) return;
        (u = t.jump), (r = !1), (o = dA(n, t.delay));
        const { eventStore: O, ownerDocument: z } = n.internalEngine(),
            K = !!n.internalEngine().options.watchDrag,
            fe = fA(n, t.rootNode);
        O.add(z, "visibilitychange", p),
            K && n.on("pointerDown", v),
            K && !t.stopOnInteraction && n.on("pointerUp", T),
            t.stopOnMouseEnter && O.add(fe, "mouseenter", C),
            t.stopOnMouseEnter &&
                !t.stopOnInteraction &&
                O.add(fe, "mouseleave", b),
            t.stopOnFocusIn && n.on("slideFocusStart", w),
            t.stopOnFocusIn &&
                !t.stopOnInteraction &&
                O.add(n.containerNode(), "focusout", g),
            t.playOnInit && g();
    }
    function f() {
        n.off("pointerDown", v).off("pointerUp", T).off("slideFocusStart", w),
            w(),
            (r = !0),
            (a = !1);
    }
    function y() {
        const { ownerWindow: R } = n.internalEngine();
        R.clearTimeout(s),
            (s = R.setTimeout(L, o[n.selectedScrollSnap()])),
            (i = new Date().getTime()),
            n.emit("autoplay:timerset");
    }
    function x() {
        const { ownerWindow: R } = n.internalEngine();
        R.clearTimeout(s), (s = 0), (i = null), n.emit("autoplay:timerstopped");
    }
    function g() {
        if (!r) {
            if (h()) {
                c = !0;
                return;
            }
            a || n.emit("autoplay:play"), y(), (a = !0);
        }
    }
    function w() {
        r || (a && n.emit("autoplay:stop"), x(), (a = !1));
    }
    function p() {
        if (h()) return (c = a), w();
        c && g();
    }
    function h() {
        const { ownerDocument: R } = n.internalEngine();
        return R.visibilityState === "hidden";
    }
    function v() {
        l || w();
    }
    function T() {
        l || g();
    }
    function C() {
        (l = !0), w();
    }
    function b() {
        (l = !1), g();
    }
    function P(R) {
        typeof R < "u" && (u = R), g();
    }
    function E() {
        a && w();
    }
    function A() {
        a && g();
    }
    function N() {
        return a;
    }
    function L() {
        const { index: R } = n.internalEngine(),
            $ = R.clone().add(1).get(),
            F = n.scrollSnapList().length - 1,
            _ = t.stopOnLastSnap && $ === F;
        if (
            (n.canScrollNext() ? n.scrollNext(u) : n.scrollTo(0, u),
            n.emit("autoplay:select"),
            _)
        )
            return w();
        g();
    }
    function D() {
        if (!i) return null;
        const R = o[n.selectedScrollSnap()],
            $ = new Date().getTime() - i;
        return R - $;
    }
    return {
        name: "autoplay",
        options: e,
        init: d,
        destroy: f,
        play: P,
        stop: E,
        reset: A,
        isPlaying: N,
        timeUntilNext: D,
    };
}
Wd.globalOptions = void 0;
function pA() {
    const [e, t] = RS("/project/:slug"),
        n = cx.find((i) => i.slug === (t == null ? void 0 : t.slug)),
        [r, o] = S.useState([]);
    return (
        S.useEffect(() => {
            window.scrollTo(0, 0);
        }, []),
        S.useEffect(() => {
            n &&
                (async (s) => {
                    const a = [];
                    switch (s) {
                        case "sentiment-analysis-twitter":
                            a.push(
                                "/assets/images/sentiment-analysis-twitter/correlation-heatmap.png",
                                "/assets/images/sentiment-analysis-twitter/sentiment-funnel-chart.png",
                                "/assets/images/sentiment-analysis-twitter/sentiment-timeline-stacked.png",
                                "/assets/images/sentiment-analysis-twitter/sentiment-trend-lines.png",
                                "/assets/images/sentiment-analysis-twitter/word-clouds-comparison.png",
                                "/assets/images/sentiment-analysis-twitter/word-frequency-bars.png",
                                "/assets/images/sentiment-analysis-twitter/word-frequency-treemap.png"
                            );
                            break;
                        case "proteomics-data-exploration":
                            a.push(
                                "/assets/images/proteomics-data-exploration/volcano-plot-analysis.png",
                                "/assets/images/proteomics-data-exploration/regression-correlation-plot.png",
                                "/assets/images/proteomics-data-exploration/histogram-distribution-comparison.png",
                                "/assets/images/proteomics-data-exploration/fold-change-scatter-plot.png",
                                "/assets/images/proteomics-data-exploration/pca-clustering-analysis.png"
                            );
                            break;
                        case "predictive-analysis":
                            a.push(
                                "/assets/images/predictive-analysis/nba-player-stats-analysis.png",
                                "/assets/images/predictive-analysis/performance-metrics-dashboard.png",
                                "/assets/images/predictive-analysis/player-comparison-charts.png",
                                "/assets/images/predictive-analysis/seasonal-trends-visualization.png",
                                "/assets/images/predictive-analysis/predictive-model-results.png"
                            );
                            break;
                        case "trends-homicides-usa":
                            a.push(
                                "/assets/images/trends-homicides-usa/agency-type-case-statistics.png",
                                "/assets/images/trends-homicides-usa/failure-rate-treemap.png",
                                "/assets/images/trends-homicides-usa/relationship-clustering-analysis.png",
                                "/assets/images/trends-homicides-usa/gender-family-killer-distribution.png",
                                "/assets/images/trends-homicides-usa/firearm-crime-rate-map.png",
                                "/assets/images/trends-homicides-usa/state-trends-timeline.png"
                            );
                            break;
                        default:
                            const l = [
                                `/${s}/image_1756059502347.png`,
                                `/${s}/image_1756059515468.png`,
                                `/${s}/image_1756059535647.png`,
                                `/${s}/image_1756059549869.png`,
                                `/${s}/image_1756059570337.png`,
                            ];
                            for (const c of l) a.push(c);
                            break;
                    }
                    o(a);
                })(n.slug);
        }, [n]),
        n
            ? m.jsxs("div", {
                  className: "min-h-screen bg-gray-50",
                  children: [
                      m.jsx(Ov, {}),
                      m.jsx("section", {
                          className: "pt-24 pb-20",
                          children: m.jsxs("div", {
                              className:
                                  "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                              children: [
                                  m.jsx("div", {
                                      className: "mb-8",
                                      children: m.jsxs(ge, {
                                          variant: "ghost",
                                          className:
                                              "text-brand-blue hover:text-blue-700 p-0",
                                          onClick: () => window.history.back(),
                                          children: [
                                              m.jsx(wc, {
                                                  className: "w-4 h-4 mr-2",
                                              }),
                                              "Back to Projects",
                                          ],
                                      }),
                                  }),
                                  m.jsxs("div", {
                                      className: "mb-12",
                                      children: [
                                          m.jsx("h1", {
                                              className:
                                                  "text-4xl font-bold text-gray-900 mb-6",
                                              children: n.title,
                                          }),
                                          m.jsx("div", {
                                              className: "relative",
                                              children: m.jsxs(hx, {
                                                  className: "w-full",
                                                  opts: {
                                                      align: "start",
                                                      loop: !0,
                                                  },
                                                  plugins: [
                                                      Wd({
                                                          delay: 4e3,
                                                          stopOnInteraction: !0,
                                                      }),
                                                  ],
                                                  children: [
                                                      m.jsx(mx, {
                                                          children:
                                                              r.length > 0
                                                                  ? r.map(
                                                                        (
                                                                            i,
                                                                            s
                                                                        ) =>
                                                                            m.jsx(
                                                                                Kc,
                                                                                {
                                                                                    children:
                                                                                        m.jsx(
                                                                                            "div",
                                                                                            {
                                                                                                className:
                                                                                                    "p-1",
                                                                                                children:
                                                                                                    m.jsx(
                                                                                                        "img",
                                                                                                        {
                                                                                                            src: i,
                                                                                                            alt: `${
                                                                                                                n.title
                                                                                                            } visualization ${
                                                                                                                s +
                                                                                                                1
                                                                                                            }`,
                                                                                                            className:
                                                                                                                "w-full h-96 object-contain bg-gray-100 rounded-xl shadow-lg",
                                                                                                            onError:
                                                                                                                (
                                                                                                                    a
                                                                                                                ) => {
                                                                                                                    const l =
                                                                                                                        a.target;
                                                                                                                    l.style.display =
                                                                                                                        "none";
                                                                                                                },
                                                                                                        }
                                                                                                    ),
                                                                                            }
                                                                                        ),
                                                                                },
                                                                                s
                                                                            )
                                                                    )
                                                                  : m.jsx(Kc, {
                                                                        children:
                                                                            m.jsx(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        "p-1",
                                                                                    children:
                                                                                        m.jsx(
                                                                                            "p",
                                                                                            {
                                                                                                className:
                                                                                                    "text-center text-gray-500",
                                                                                                children:
                                                                                                    "No images available for this project.",
                                                                                            }
                                                                                        ),
                                                                                }
                                                                            ),
                                                                    }),
                                                      }),
                                                      m.jsx(gx, {}),
                                                      m.jsx(yx, {}),
                                                  ],
                                              }),
                                          }),
                                      ],
                                  }),
                                  m.jsxs("div", {
                                      className: "prose prose-lg max-w-none",
                                      children: [
                                          n.problemStatement &&
                                              m.jsxs(m.Fragment, {
                                                  children: [
                                                      m.jsx("h2", {
                                                          className:
                                                              "text-2xl font-bold text-gray-900 mb-4",
                                                          children:
                                                              "Problem Statement",
                                                      }),
                                                      m.jsx("p", {
                                                          className:
                                                              "text-gray-700 mb-8",
                                                          children:
                                                              n.problemStatement,
                                                      }),
                                                  ],
                                              }),
                                          n.detailsHTML &&
                                              m.jsx("div", {
                                                  className: "mb-8",
                                                  dangerouslySetInnerHTML: {
                                                      __html: n.detailsHTML,
                                                  },
                                              }),
                                          n.dataSources &&
                                              n.dataSources.length > 0 &&
                                              m.jsxs(m.Fragment, {
                                                  children: [
                                                      m.jsx("h2", {
                                                          className:
                                                              "text-2xl font-bold text-gray-900 mb-4",
                                                          children:
                                                              "Data Sources",
                                                      }),
                                                      m.jsx("div", {
                                                          className:
                                                              "bg-gray-50 p-6 rounded-xl mb-8",
                                                          children: m.jsx(
                                                              "ul",
                                                              {
                                                                  className:
                                                                      "space-y-2",
                                                                  children:
                                                                      n.dataSources.map(
                                                                          (
                                                                              i,
                                                                              s
                                                                          ) =>
                                                                              m.jsx(
                                                                                  "li",
                                                                                  {
                                                                                      className:
                                                                                          "text-gray-700",
                                                                                      children:
                                                                                          i,
                                                                                  },
                                                                                  s
                                                                              )
                                                                      ),
                                                              }
                                                          ),
                                                      }),
                                                  ],
                                              }),
                                          n.methodology &&
                                              m.jsxs(m.Fragment, {
                                                  children: [
                                                      m.jsx("h2", {
                                                          className:
                                                              "text-2xl font-bold text-gray-900 mb-4",
                                                          children:
                                                              "Methodology",
                                                      }),
                                                      m.jsx("p", {
                                                          className:
                                                              "text-gray-700 mb-8",
                                                          children:
                                                              n.methodology,
                                                      }),
                                                  ],
                                              }),
                                          n.keyResults &&
                                              n.keyResults.length > 0 &&
                                              m.jsxs(m.Fragment, {
                                                  children: [
                                                      m.jsx("h2", {
                                                          className:
                                                              "text-2xl font-bold text-gray-900 mb-4",
                                                          children:
                                                              "Key Results",
                                                      }),
                                                      m.jsx("div", {
                                                          className:
                                                              "bg-blue-50 p-6 rounded-xl mb-8",
                                                          children: m.jsx(
                                                              "ul",
                                                              {
                                                                  className:
                                                                      "space-y-2",
                                                                  children:
                                                                      n.keyResults.map(
                                                                          (
                                                                              i,
                                                                              s
                                                                          ) =>
                                                                              m.jsxs(
                                                                                  "li",
                                                                                  {
                                                                                      className:
                                                                                          "text-gray-700 flex items-start",
                                                                                      children:
                                                                                          [
                                                                                              m.jsx(
                                                                                                  "span",
                                                                                                  {
                                                                                                      className:
                                                                                                          "text-green-500 mr-2",
                                                                                                      children:
                                                                                                          "✅",
                                                                                                  }
                                                                                              ),
                                                                                              i,
                                                                                          ],
                                                                                  },
                                                                                  s
                                                                              )
                                                                      ),
                                                              }
                                                          ),
                                                      }),
                                                  ],
                                              }),
                                          n.businessImpact &&
                                              m.jsxs(m.Fragment, {
                                                  children: [
                                                      m.jsx("h2", {
                                                          className:
                                                              "text-2xl font-bold text-gray-900 mb-4",
                                                          children:
                                                              "Business Impact",
                                                      }),
                                                      m.jsx("p", {
                                                          className:
                                                              "text-gray-700 mb-8",
                                                          children:
                                                              n.businessImpact,
                                                      }),
                                                  ],
                                              }),
                                          m.jsxs("div", {
                                              className: "flex gap-4 mt-8",
                                              children: [
                                                  n.githubLink &&
                                                      m.jsxs(ge, {
                                                          className:
                                                              "bg-brand-blue hover:bg-blue-700",
                                                          onClick: () =>
                                                              window.open(
                                                                  n.githubLink,
                                                                  "_blank"
                                                              ),
                                                          children: [
                                                              m.jsx(Qu, {
                                                                  className:
                                                                      "w-4 h-4 mr-2",
                                                              }),
                                                              "View Source Code",
                                                          ],
                                                      }),
                                                  n.hasDemo &&
                                                      m.jsxs(ge, {
                                                          variant: "secondary",
                                                          className:
                                                              "bg-gray-800 hover:bg-gray-900 text-white",
                                                          children: [
                                                              m.jsx(Yy, {
                                                                  className:
                                                                      "w-4 h-4 mr-2",
                                                              }),
                                                              "Live Demo",
                                                          ],
                                                      }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      }),
                  ],
              })
            : m.jsx("div", {
                  className:
                      "min-h-screen bg-gray-50 flex items-center justify-center",
                  children: m.jsxs("div", {
                      className: "text-center",
                      children: [
                          m.jsx("h1", {
                              className:
                                  "text-2xl font-bold text-gray-900 mb-4",
                              children: "Project Not Found",
                          }),
                          m.jsxs(ge, {
                              onClick: () => window.history.back(),
                              children: [
                                  m.jsx(wc, { className: "w-4 h-4 mr-2" }),
                                  "Go Back",
                              ],
                          }),
                      ],
                  }),
              })
    );
}
function hA() {
    return m.jsx("div", {
        className:
            "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: m.jsx(Vd, {
            className: "w-full max-w-md mx-4",
            children: m.jsxs(Fd, {
                className: "pt-6",
                children: [
                    m.jsxs("div", {
                        className: "flex mb-4 gap-2",
                        children: [
                            m.jsx(OT, { className: "h-8 w-8 text-red-500" }),
                            m.jsx("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "404 Page Not Found",
                            }),
                        ],
                    }),
                    m.jsx("p", {
                        className: "mt-4 text-sm text-gray-600",
                        children:
                            "Did you forget to add the page to the router?",
                    }),
                ],
            }),
        }),
    });
}
function mA() {
    return m.jsxs(DS, {
        children: [
            m.jsx(ol, { path: "/", component: A2 }),
            m.jsx(ol, { path: "/project/:slug", component: pA }),
            m.jsx(ol, { component: hA }),
        ],
    });
}
function gA() {
    return m.jsxs(YP, { children: [m.jsx(TC, {}), m.jsx(mA, {})] });
}
ly(document.getElementById("root")).render(m.jsx(gA, {}));
