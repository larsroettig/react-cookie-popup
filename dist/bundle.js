!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 4));
})([
  function(e, t, n) {
    "use strict";
    e.exports = n(2);
  },
  function(e, t, n) {
    var r, o;
    /*!
     * JavaScript Cookie v2.2.1
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */ !(function(c) {
      if (
        (void 0 ===
          (o = "function" == typeof (r = c) ? r.call(t, n, t, e) : r) ||
          (e.exports = o),
        !0,
        (e.exports = c()),
        !!0)
      ) {
        var u = window.Cookies,
          i = (window.Cookies = c());
        i.noConflict = function() {
          return (window.Cookies = u), i;
        };
      }
    })(function() {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) t[r] = n[r];
        }
        return t;
      }
      function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return (function n(r) {
        function o() {}
        function c(t, n, c) {
          if ("undefined" != typeof document) {
            "number" == typeof (c = e({ path: "/" }, o.defaults, c)).expires &&
              (c.expires = new Date(1 * new Date() + 864e5 * c.expires)),
              (c.expires = c.expires ? c.expires.toUTCString() : "");
            try {
              var u = JSON.stringify(n);
              /^[\{\[]/.test(u) && (n = u);
            } catch (e) {}
            (n = r.write
              ? r.write(n, t)
              : encodeURIComponent(String(n)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )),
              (t = encodeURIComponent(String(t))
                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                .replace(/[\(\)]/g, escape));
            var i = "";
            for (var l in c)
              c[l] &&
                ((i += "; " + l),
                !0 !== c[l] && (i += "=" + c[l].split(";")[0]));
            return (document.cookie = t + "=" + n + i);
          }
        }
        function u(e, n) {
          if ("undefined" != typeof document) {
            for (
              var o = {},
                c = document.cookie ? document.cookie.split("; ") : [],
                u = 0;
              u < c.length;
              u++
            ) {
              var i = c[u].split("="),
                l = i.slice(1).join("=");
              n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
              try {
                var a = t(i[0]);
                if (((l = (r.read || r)(l, a) || t(l)), n))
                  try {
                    l = JSON.parse(l);
                  } catch (e) {}
                if (((o[a] = l), e === a)) break;
              } catch (e) {}
            }
            return e ? o[e] : o;
          }
        }
        return (
          (o.set = c),
          (o.get = function(e) {
            return u(e, !1);
          }),
          (o.getJSON = function(e) {
            return u(e, !0);
          }),
          (o.remove = function(t, n) {
            c(t, "", e(n, { expires: -1 }));
          }),
          (o.defaults = {}),
          (o.withConverter = n),
          o
        );
      })(function() {});
    });
  },
  function(e, t, n) {
    "use strict";
    /** @license React v16.12.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(3),
      o = "function" == typeof Symbol && Symbol.for,
      c = o ? Symbol.for("react.element") : 60103,
      u = o ? Symbol.for("react.portal") : 60106,
      i = o ? Symbol.for("react.fragment") : 60107,
      l = o ? Symbol.for("react.strict_mode") : 60108,
      a = o ? Symbol.for("react.profiler") : 60114,
      f = o ? Symbol.for("react.provider") : 60109,
      s = o ? Symbol.for("react.context") : 60110,
      p = o ? Symbol.for("react.forward_ref") : 60112,
      d = o ? Symbol.for("react.suspense") : 60113;
    o && Symbol.for("react.suspense_list");
    var y = o ? Symbol.for("react.memo") : 60115,
      m = o ? Symbol.for("react.lazy") : 60116;
    o && Symbol.for("react.fundamental"),
      o && Symbol.for("react.responder"),
      o && Symbol.for("react.scope");
    var v = "function" == typeof Symbol && Symbol.iterator;
    function h(e) {
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
    var b = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
      },
      k = {};
    function x(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = k),
        (this.updater = n || b);
    }
    function w() {}
    function g(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = k),
        (this.updater = n || b);
    }
    (x.prototype.isReactComponent = {}),
      (x.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(h(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (x.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (w.prototype = x.prototype);
    var S = (g.prototype = new w());
    (S.constructor = g), r(S, x.prototype), (S.isPureReactComponent = !0);
    var C = { current: null },
      O = { current: null },
      j = Object.prototype.hasOwnProperty,
      E = { key: !0, ref: !0, __self: !0, __source: !0 };
    function _(e, t, n) {
      var r,
        o = {},
        u = null,
        i = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (i = t.ref),
        void 0 !== t.key && (u = "" + t.key),
        t))
          j.call(t, r) && !E.hasOwnProperty(r) && (o[r] = t[r]);
      var l = arguments.length - 2;
      if (1 === l) o.children = n;
      else if (1 < l) {
        for (var a = Array(l), f = 0; f < l; f++) a[f] = arguments[f + 2];
        o.children = a;
      }
      if (e && e.defaultProps)
        for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
      return {
        $$typeof: c,
        type: e,
        key: u,
        ref: i,
        props: o,
        _owner: O.current
      };
    }
    function A(e) {
      return "object" == typeof e && null !== e && e.$$typeof === c;
    }
    var N = /\/+/g,
      P = [];
    function B(e, t, n, r) {
      if (P.length) {
        var o = P.pop();
        return (
          (o.result = e),
          (o.keyPrefix = t),
          (o.func = n),
          (o.context = r),
          (o.count = 0),
          o
        );
      }
      return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
    }
    function D(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > P.length && P.push(e);
    }
    function R(e, t, n) {
      return null == e
        ? 0
        : (function e(t, n, r, o) {
            var i = typeof t;
            ("undefined" !== i && "boolean" !== i) || (t = null);
            var l = !1;
            if (null === t) l = !0;
            else
              switch (i) {
                case "string":
                case "number":
                  l = !0;
                  break;
                case "object":
                  switch (t.$$typeof) {
                    case c:
                    case u:
                      l = !0;
                  }
              }
            if (l) return r(o, t, "" === n ? "." + $(t, 0) : n), 1;
            if (((l = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
              for (var a = 0; a < t.length; a++) {
                var f = n + $((i = t[a]), a);
                l += e(i, f, r, o);
              }
            else if (
              (null === t || "object" != typeof t
                ? (f = null)
                : (f =
                    "function" == typeof (f = (v && t[v]) || t["@@iterator"])
                      ? f
                      : null),
              "function" == typeof f)
            )
              for (t = f.call(t), a = 0; !(i = t.next()).done; )
                l += e((i = i.value), (f = n + $(i, a++)), r, o);
            else if ("object" === i)
              throw ((r = "" + t),
              Error(
                h(
                  31,
                  "[object Object]" === r
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : r,
                  ""
                )
              ));
            return l;
          })(e, "", t, n);
    }
    function $(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function(e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + e).replace(/[=:]/g, function(e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function V(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function U(e, t, n) {
      var r = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? I(e, r, n, function(e) {
              return e;
            })
          : null != e &&
            (A(e) &&
              (e = (function(e, t) {
                return {
                  $$typeof: c,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner
                };
              })(
                e,
                o +
                  (!e.key || (t && t.key === e.key)
                    ? ""
                    : ("" + e.key).replace(N, "$&/") + "/") +
                  n
              )),
            r.push(e));
    }
    function I(e, t, n, r, o) {
      var c = "";
      null != n && (c = ("" + n).replace(N, "$&/") + "/"),
        R(e, U, (t = B(t, c, r, o))),
        D(t);
    }
    function M() {
      var e = C.current;
      if (null === e) throw Error(h(321));
      return e;
    }
    var q = {
        Children: {
          map: function(e, t, n) {
            if (null == e) return e;
            var r = [];
            return I(e, r, null, t, n), r;
          },
          forEach: function(e, t, n) {
            if (null == e) return e;
            R(e, V, (t = B(null, null, t, n))), D(t);
          },
          count: function(e) {
            return R(
              e,
              function() {
                return null;
              },
              null
            );
          },
          toArray: function(e) {
            var t = [];
            return (
              I(e, t, null, function(e) {
                return e;
              }),
              t
            );
          },
          only: function(e) {
            if (!A(e)) throw Error(h(143));
            return e;
          }
        },
        createRef: function() {
          return { current: null };
        },
        Component: x,
        PureComponent: g,
        createContext: function(e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: s,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            }).Provider = { $$typeof: f, _context: e }),
            (e.Consumer = e)
          );
        },
        forwardRef: function(e) {
          return { $$typeof: p, render: e };
        },
        lazy: function(e) {
          return { $$typeof: m, _ctor: e, _status: -1, _result: null };
        },
        memo: function(e, t) {
          return { $$typeof: y, type: e, compare: void 0 === t ? null : t };
        },
        useCallback: function(e, t) {
          return M().useCallback(e, t);
        },
        useContext: function(e, t) {
          return M().useContext(e, t);
        },
        useEffect: function(e, t) {
          return M().useEffect(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return M().useImperativeHandle(e, t, n);
        },
        useDebugValue: function() {},
        useLayoutEffect: function(e, t) {
          return M().useLayoutEffect(e, t);
        },
        useMemo: function(e, t) {
          return M().useMemo(e, t);
        },
        useReducer: function(e, t, n) {
          return M().useReducer(e, t, n);
        },
        useRef: function(e) {
          return M().useRef(e);
        },
        useState: function(e) {
          return M().useState(e);
        },
        Fragment: i,
        Profiler: a,
        StrictMode: l,
        Suspense: d,
        createElement: _,
        cloneElement: function(e, t, n) {
          if (null == e) throw Error(h(267, e));
          var o = r({}, e.props),
            u = e.key,
            i = e.ref,
            l = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (l = O.current)),
              void 0 !== t.key && (u = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var a = e.type.defaultProps;
            for (f in t)
              j.call(t, f) &&
                !E.hasOwnProperty(f) &&
                (o[f] = void 0 === t[f] && void 0 !== a ? a[f] : t[f]);
          }
          var f = arguments.length - 2;
          if (1 === f) o.children = n;
          else if (1 < f) {
            a = Array(f);
            for (var s = 0; s < f; s++) a[s] = arguments[s + 2];
            o.children = a;
          }
          return {
            $$typeof: c,
            type: e.type,
            key: u,
            ref: i,
            props: o,
            _owner: l
          };
        },
        createFactory: function(e) {
          var t = _.bind(null, e);
          return (t.type = e), t;
        },
        isValidElement: A,
        version: "16.12.0",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: C,
          ReactCurrentBatchConfig: { suspense: null },
          ReactCurrentOwner: O,
          IsSomeRendererActing: { current: !1 },
          assign: r
        }
      },
      F = { default: q },
      T = (F && q) || F;
    e.exports = T.default || T;
  },
  function(e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      c = Object.prototype.propertyIsEnumerable;
    function u(e) {
      if (null == e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    e.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function(e) {
            r[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (var n, i, l = u(e), a = 1; a < arguments.length; a++) {
            for (var f in (n = Object(arguments[a])))
              o.call(n, f) && (l[f] = n[f]);
            if (r) {
              i = r(n);
              for (var s = 0; s < i.length; s++)
                c.call(n, i[s]) && (l[i[s]] = n[i[s]]);
            }
          }
          return l;
        };
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r);
    function c(e) {
      return o.a.createElement(
        "button",
        {
          onClick: function() {
            e.clickCallback();
          },
          className: e.class
        },
        e.children
      );
    }
    c.defaultProps = {
      class:
        "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-gray-700 hover:bg-gray-600 text-white rounded w-full text-xl",
      clickCallback: function() {}
    };
    var u = c,
      i = n(1),
      l = n.n(i);
    function a(e) {
      var t = Object(r.useState)(!1),
        n = t[0],
        c = t[1];
      function i() {
        e.shouldShowPopUp ||
          l.a.set(e.cookieNameShowed, e.cookieValueShowed, {
            expires: e.expires
          });
      }
      function a() {
        var e = "." + window.location.hostname;
        Object.keys(l.a.get()).forEach(function(t) {
          -1 !== t.indexOf("_") ? l.a.remove(t, { domain: e }) : l.a.remove(t);
        });
      }
      return (
        Object(r.useEffect)(
          function() {
            l.a.get(e.cookieNameAccept) === e.cookieValueAccept ? c(!1) : c(!0);
          },
          [e.cookieNameAccept, e.cookieValueAccept]
        ),
        n
          ? o.a.createElement(
              u,
              {
                class: e.classAcceptButton,
                clickCallback: function() {
                  a(),
                    i(),
                    l.a.set(e.cookieNameAccept, e.cookieValueAccept, {
                      expires: e.expires
                    }),
                    c(!1);
                }
              },
              e.textAcceptButton
            )
          : o.a.createElement(
              u,
              {
                class: e.classDeclineButton,
                clickCallback: function() {
                  a(),
                    i(),
                    l.a.set(e.cookieNameDecline, e.cookieValueDecline, {
                      expires: e.expires
                    }),
                    c(!0);
                }
              },
              e.textDeclineButton
            )
      );
    }
    a.defaultProps = {
      classAcceptButton:
        "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-green-700 hover:bg-green-600 text-white rounded w-full text-xl  mt-8",
      classDeclineButton:
        "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 bg-red-700 hover:bg-red-600 text-white rounded w-full text-xl mt-8 ",
      textAcceptButton: "Accept",
      textDeclineButton: "Deny",
      cookieNameShowed: "cookie-msg-showed",
      cookieNameAccept: "cookie-opt-in",
      cookieNameDecline: "cookie-opt-out",
      cookieValueShowed: "true",
      cookieValueAccept: "true",
      cookieValueDecline: "true",
      shouldShowPopUp: !1,
      expires: 30
    };
    var f = a;
    function s(e) {
      var t = Object(r.useState)(!1),
        n = t[0],
        c = t[1];
      function i() {
        l.a.set(e.cookieNameShowed, e.cookieValueShowed, {
          expires: e.expires
        });
      }
      return (
        Object(r.useEffect)(
          function() {
            void 0 === l.a.get(e.cookieNameShowed) && c(!0);
          },
          [e.cookieNameShowed]
        ),
        n || e.debug
          ? o.a.createElement(
              "div",
              { className: e.class, id: "cookie-popup" },
              o.a.createElement(
                "div",
                { className: "flex flex-wrap" },
                o.a.createElement(
                  "div",
                  { className: "w-full md:w-1/2 p-5" },
                  e.children
                ),
                o.a.createElement(
                  "div",
                  { className: "w-full md:w-1/2 p-5" },
                  o.a.createElement(
                    "div",
                    { className: "flex flex-row-reverse" },
                    o.a.createElement(
                      "div",
                      { className: "w-full md:w-1/2" },
                      o.a.createElement(
                        u,
                        {
                          class: e.classAcceptButton,
                          clickCallback: function() {
                            l.a.set(e.cookieNameAccept, e.cookieValueAccept, {
                              expires: e.expires
                            }),
                              i(),
                              c(!1);
                          }
                        },
                        e.textAcceptButton
                      ),
                      o.a.createElement(
                        u,
                        {
                          class: e.classDeclineButton,
                          clickCallback: function() {
                            l.a.set(e.cookieNameShowed, e.cookieValueShowed, {
                              expires: e.expires
                            }),
                              i(),
                              c(!1);
                          }
                        },
                        e.textDeclineButton
                      )
                    )
                  )
                )
              )
            )
          : null
      );
    }
    s.defaultProps = {
      class: "container mx-auto px-10",
      classAcceptButton:
        "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-green-700 hover:bg-green-600 text-white rounded w-full text-xl",
      classDeclineButton:
        "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 bg-red-700 hover:bg-red-600 text-white rounded w-full text-xl mt-8 ",
      textAcceptButton: "Accept",
      textDeclineButton: "Deny",
      cookieNameShowed: "cookie-msg-showed",
      cookieNameAccept: "cookie-opt-in",
      cookieNameDecline: "cookie-opt-out",
      cookieValueShowed: "true",
      cookieValueAccept: "true",
      cookieValueDecline: "true",
      expires: 30,
      debug: !1
    };
    var p = s;
    n.d(t, "CookieButton", function() {
      return u;
    }),
      n.d(t, "CookieImprintButton", function() {
        return f;
      }),
      n.d(t, "CookiePopup", function() {
        return p;
      });
  }
]);
