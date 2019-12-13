"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Lightning v1.3.0
 *
 * https://github.com/WebPlatformForEmbedded/Lightning
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.lng = e();
}(void 0, function () {
  "use strict";

  var StageUtils =
  /*#__PURE__*/
  function () {
    function StageUtils() {
      _classCallCheck(this, StageUtils);
    }

    _createClass(StageUtils, null, [{
      key: "mergeNumbers",
      value: function mergeNumbers(t, e, i) {
        return t * i + e * (1 - i);
      }
    }, {
      key: "rgb",
      value: function rgb(t, e, i) {
        return (t << 16) + (e << 8) + i + 4278190080;
      }
    }, {
      key: "rgba",
      value: function rgba(t, e, i, s) {
        return (t << 16) + (e << 8) + i + 16777216 * (255 * s | 0);
      }
    }, {
      key: "getRgbString",
      value: function getRgbString(t) {
        return "rgb(" + (t / 65536 | 0) % 256 + "," + (t / 256 | 0) % 256 + "," + t % 256 + ")";
      }
    }, {
      key: "getRgbaString",
      value: function getRgbaString(t) {
        return "rgba(" + (t / 65536 | 0) % 256 + "," + (t / 256 | 0) % 256 + "," + t % 256 + "," + ((t / 16777216 | 0) / 255).toFixed(4) + ")";
      }
    }, {
      key: "getRgbaStringFromArray",
      value: function getRgbaStringFromArray(t) {
        return "rgba(" + Math.floor(255 * t[0]) + "," + Math.floor(255 * t[1]) + "," + Math.floor(255 * t[2]) + "," + (Math.floor(255 * t[3]) / 255).toFixed(4) + ")";
      }
    }, {
      key: "getRgbaComponentsNormalized",
      value: function getRgbaComponentsNormalized(t) {
        return [(t / 65536 | 0) % 256 / 255, (t / 256 | 0) % 256 / 255, t % 256 / 255, (t / 16777216 | 0) / 255];
      }
    }, {
      key: "getRgbComponentsNormalized",
      value: function getRgbComponentsNormalized(t) {
        return [(t / 65536 | 0) % 256 / 255, (t / 256 | 0) % 256 / 255, t % 256 / 255];
      }
    }, {
      key: "getRgbaComponents",
      value: function getRgbaComponents(t) {
        return [(t / 65536 | 0) % 256, (t / 256 | 0) % 256, t % 256, t / 16777216 | 0];
      }
    }, {
      key: "getArgbNumber",
      value: function getArgbNumber(t) {
        t[0] = Math.max(0, Math.min(255, t[0])), t[1] = Math.max(0, Math.min(255, t[1])), t[2] = Math.max(0, Math.min(255, t[2])), t[3] = Math.max(0, Math.min(255, t[3]));
        var e = ((0 | t[3]) << 24) + ((0 | t[0]) << 16) + ((0 | t[1]) << 8) + (0 | t[2]);
        return e < 0 && (e = 4294967295 + e + 1), e;
      }
    }, {
      key: "mergeColors",
      value: function mergeColors(t, e, i) {
        var s = (t / 65536 | 0) % 256 * i + (e / 65536 | 0) % 256 * (1 - i),
            r = (t / 256 | 0) % 256 * i + (e / 256 | 0) % 256 * (1 - i),
            n = t % 256 * i + e % 256 * (1 - i),
            o = (t / 16777216 | 0) * i + (e / 16777216 | 0) * (1 - i);
        return 16777216 * Math.round(o) + 65536 * Math.round(s) + 256 * Math.round(r) + Math.round(n);
      }
    }, {
      key: "mergeMultiColors",
      value: function mergeMultiColors(t, e) {
        var i = 0,
            s = 0,
            r = 0,
            n = 0,
            o = 0,
            a = t.length;

        for (var h = 0; h < a; h++) {
          var _a = (t[h] / 65536 | 0) % 256,
              l = (t[h] / 256 | 0) % 256,
              _ = t[h] % 256,
              u = t[h] / 16777216 | 0;

          i += _a * e[h], s += l * e[h], r += _ * e[h], n += u * e[h], o += e[h];
        }

        return o = 1 / o, 16777216 * Math.round(n * o) + 65536 * Math.round(i * o) + 256 * Math.round(s * o) + Math.round(r * o);
      }
    }, {
      key: "mergeMultiColorsEqual",
      value: function mergeMultiColorsEqual(t) {
        var e = 0,
            i = 0,
            s = 0,
            r = 0,
            n = 0,
            o = t.length;

        for (var a = 0; a < o; a++) {
          e += (t[a] / 65536 | 0) % 256, i += (t[a] / 256 | 0) % 256, s += t[a] % 256, r += t[a] / 16777216 | 0, n += 1;
        }

        return n = 1 / n, 16777216 * Math.round(r * n) + 65536 * Math.round(e * n) + 256 * Math.round(i * n) + Math.round(s * n);
      }
    }, {
      key: "mergeColorAlpha",
      value: function mergeColorAlpha(t, e) {
        var i = (t / 16777216 | 0) * e | 0;
        return ((t >> 16 & 255) * i / 255 & 255) + ((65280 & t) * i / 255 & 65280) + (((255 & t) << 16) * i / 255 & 16711680) + (i << 24);
      }
    }, {
      key: "rad",
      value: function rad(t) {
        return t * (Math.PI / 180);
      }
    }, {
      key: "getTimingBezier",
      value: function getTimingBezier(t, e, i, s) {
        var r = 3 * t,
            n = 3 * (i - t) - r,
            o = 1 - r - n,
            a = 3 * e,
            h = 3 * (s - e) - a,
            l = 1 - a - h;
        return function (t) {
          if (t >= 1) return 1;
          if (t <= 0) return 0;
          var e,
              i,
              s,
              _ = .5;

          for (var _u = 0; _u < 20; _u++) {
            if ((s = t - (e = _ * (_ * (_ * o + n) + r))) > -1e-8 && s < 1e-8) return _ * (_ * (_ * l + h) + a);
            if ((i = _ * (_ * (3 * o) + 2 * n) + r) > 1e-10 && i < 1e-10) break;
            _ += s / i;
          }

          var u = 0,
              c = 1;

          for (var _i = 0; _i < 20; _i++) {
            if ((s = t - (e = (_ = .5 * (u + c)) * (_ * (_ * o + n) + r))) > -1e-8 && s < 1e-8) return _ * (_ * (_ * l + h) + a);
            s < 0 ? c = _ : u = _;
          }
        };
      }
    }, {
      key: "getTimingFunction",
      value: function getTimingFunction(t) {
        switch (t) {
          case "linear":
            return function (t) {
              return t;
            };

          case "ease":
            return StageUtils.getTimingBezier(.25, .1, .25, 1);

          case "ease-in":
            return StageUtils.getTimingBezier(.42, 0, 1, 1);

          case "ease-out":
            return StageUtils.getTimingBezier(0, 0, .58, 1);

          case "ease-in-out":
            return StageUtils.getTimingBezier(.42, 0, .58, 1);

          case "step-start":
            return function () {
              return 1;
            };

          case "step-end":
            return function (t) {
              return 1 === t ? 1 : 0;
            };

          default:
            var _e = "cubic-bezier(";

            if (t && 0 === t.indexOf(_e)) {
              var i = t.substr(_e.length, t.length - _e.length - 1).split(",");
              if (4 !== i.length) return console.warn("Unknown timing function: " + t), function (t) {
                return t;
              };
              var s = parseFloat(i[0]),
                  r = parseFloat(i[1]),
                  n = parseFloat(i[2]),
                  o = parseFloat(i[3]);
              return isNaN(s) || isNaN(r) || isNaN(n) || isNaN(o) ? (console.warn("Unknown timing function: " + t), function (t) {
                return t;
              }) : StageUtils.getTimingBezier(s, r, n, o);
            }

            return console.warn("Unknown timing function: " + t), function (t) {
              return t;
            };
        }
      }
    }]);

    return StageUtils;
  }();

  var Utils =
  /*#__PURE__*/
  function () {
    function Utils() {
      _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
      key: "isFunction",
      value: function isFunction(t) {
        return "function" == typeof t;
      }
    }, {
      key: "isNumber",
      value: function isNumber(t) {
        return "number" == typeof t;
      }
    }, {
      key: "isInteger",
      value: function isInteger(t) {
        return "number" == typeof t && t % 1 == 0;
      }
    }, {
      key: "isBoolean",
      value: function isBoolean(t) {
        return !0 === t || !1 === t;
      }
    }, {
      key: "isString",
      value: function isString(t) {
        return "string" == typeof t;
      }
    }, {
      key: "clone",
      value: function clone(t) {
        return Utils.isObjectLiteral(t) || Array.isArray(t) ? Utils.getDeepClone(t) : t;
      }
    }, {
      key: "cloneObjShallow",
      value: function cloneObjShallow(t) {
        var e = Object.keys(t),
            i = {};

        for (var s = 0; s < e.length; s++) {
          i[e[s]] = t[e[s]];
        }

        return i;
      }
    }, {
      key: "merge",
      value: function merge(t, e) {
        var i = Object.keys(e);

        for (var s = 0; s < i.length; s++) {
          t[i[s]] = e[i[s]];
        }

        return t;
      }
    }, {
      key: "isObject",
      value: function isObject(t) {
        var e = _typeof(t);

        return !!t && ("object" === e || "function" === e);
      }
    }, {
      key: "isPlainObject",
      value: function isPlainObject(t) {
        return !!t && "object" === _typeof(t);
      }
    }, {
      key: "isObjectLiteral",
      value: function isObjectLiteral(t) {
        return "object" == _typeof(t) && t && t.constructor === Object;
      }
    }, {
      key: "getArrayIndex",
      value: function getArrayIndex(t, e) {
        return Utils.getModuloIndex(t, e.length);
      }
    }, {
      key: "getModuloIndex",
      value: function getModuloIndex(t, e) {
        if (0 === e) return t;

        for (; t < 0;) {
          t += Math.ceil(-t / e) * e;
        }

        return t %= e;
      }
    }, {
      key: "getDeepClone",
      value: function getDeepClone(t) {
        var e, i;
        if (Utils.isFunction(t)) return t;

        if (Array.isArray(t)) {
          i = [];
          var s = Object.keys(t);

          for (e = 0; e < s.length; e++) {
            i[s[e]] = Utils.getDeepClone(t[s[e]]);
          }

          return i;
        }

        if (Utils.isObject(t)) {
          i = {};

          var _s = Object.keys(t);

          for (e = 0; e < _s.length; e++) {
            i[_s[e]] = Utils.getDeepClone(t[_s[e]]);
          }

          return i;
        }

        return t;
      }
    }, {
      key: "equalValues",
      value: function equalValues(t, e) {
        return _typeof(t) == _typeof(e) && (Utils.isObjectLiteral(t) ? Utils.isObjectLiteral(e) && Utils.equalObjectLiterals(t, e) : Array.isArray(t) ? Array.isArray(e) && Utils.equalArrays(t, e) : t === e);
      }
    }, {
      key: "equalObjectLiterals",
      value: function equalObjectLiterals(t, e) {
        var i = Object.keys(t),
            s = Object.keys(e);
        if (i.length !== s.length) return !1;

        for (var r = 0, n = i.length; r < n; r++) {
          var _n = i[r],
              o = s[r];
          if (_n !== o) return !1;
          var a = t[_n],
              h = e[o];
          if (!Utils.equalValues(a, h)) return !1;
        }

        return !0;
      }
    }, {
      key: "equalArrays",
      value: function equalArrays(t, e) {
        if (t.length !== e.length) return !1;

        for (var i = 0, s = t.length; i < s; i++) {
          if (!this.equalValues(t[i], e[i])) return !1;
        }

        return !0;
      }
    }, {
      key: "setToArray",
      value: function setToArray(t) {
        var e = [];
        return t.forEach(function (t) {
          e.push(t);
        }), e;
      }
    }, {
      key: "iteratorToArray",
      value: function iteratorToArray(t) {
        var e = [],
            i = t.next();

        for (; !i.done;) {
          e.push(i.value), i = t.next();
        }

        return e;
      }
    }, {
      key: "isUcChar",
      value: function isUcChar(t) {
        return t >= 65 && t <= 90;
      }
    }]);

    return Utils;
  }();

  Utils.isNode = "undefined" == typeof window, Utils.isWeb = "undefined" != typeof window, Utils.isWPE = Utils.isWeb && -1 !== navigator.userAgent.indexOf("WPE"), Utils.isSpark = "undefined" == typeof window && "undefined" != typeof sparkscene;

  var Base =
  /*#__PURE__*/
  function () {
    function Base() {
      _classCallCheck(this, Base);
    }

    _createClass(Base, null, [{
      key: "defaultSetter",
      value: function defaultSetter(t, e, i) {
        t[e] = i;
      }
    }, {
      key: "patchObject",
      value: function patchObject(t, e) {
        if (Utils.isObjectLiteral(e)) {
          var i = Object.keys(e);

          for (var s = 0, r = i.length; s < r; s++) {
            var _r = i[s];
            this.patchObjectProperty(t, _r, e[_r]);
          }
        } else console.error("Settings must be object literal");
      }
    }, {
      key: "patchObjectProperty",
      value: function patchObjectProperty(t, e, i) {
        var s = t.setSetting || Base.defaultSetter;
        "_" === e.charAt(0) ? "__create" !== e && console.error("Patch of private property '" + e + "' is not allowed") : "type" !== e && (Utils.isFunction(i) && i.__local && (i = i.__local(t)), s(t, e, i));
      }
    }, {
      key: "local",
      value: function local(t) {
        t.__local = !0;
      }
    }]);

    return Base;
  }();

  var SpacingCalculator =
  /*#__PURE__*/
  function () {
    function SpacingCalculator() {
      _classCallCheck(this, SpacingCalculator);
    }

    _createClass(SpacingCalculator, null, [{
      key: "getSpacing",
      value: function getSpacing(t, e, i) {
        var s = e - 1;
        var r, n, o;

        switch (t) {
          case "flex-start":
            n = 0, o = 0;
            break;

          case "flex-end":
            n = i, o = 0;
            break;

          case "center":
            n = i / 2, o = 0;
            break;

          case "space-between":
            n = 0, o = Math.max(0, i) / s;
            break;

          case "space-around":
            if (i < 0) return this.getSpacing("center", e, i);
            n = .5 * (r = i / (s + 1)), o = r;
            break;

          case "space-evenly":
            if (i < 0) return this.getSpacing("center", e, i);
            n = r = i / (s + 2), o = r;
            break;

          case "stretch":
            n = 0, o = 0;
            break;

          default:
            throw new Error("Unknown mode: " + t);
        }

        return {
          spacingBefore: n,
          spacingBetween: o
        };
      }
    }]);

    return SpacingCalculator;
  }();

  var ContentAligner =
  /*#__PURE__*/
  function () {
    function ContentAligner(t) {
      _classCallCheck(this, ContentAligner);

      this._layout = t, this._totalCrossAxisSize = 0;
    }

    _createClass(ContentAligner, [{
      key: "init",
      value: function init() {
        this._totalCrossAxisSize = this._getTotalCrossAxisSize();
      }
    }, {
      key: "align",
      value: function align() {
        var t = this._layout.crossAxisSize - this._totalCrossAxisSize,
            _this$_getSpacing = this._getSpacing(t),
            e = _this$_getSpacing.spacingBefore,
            i = _this$_getSpacing.spacingBetween,
            s = this._lines;

        var r = 0;
        "stretch" === this._layout._flexContainer.alignContent && s.length && t > 0 && (r = t / s.length);
        var n = e;

        for (var _t = 0, _e2 = s.length; _t < _e2; _t++) {
          var _e3 = n,
              o = s[_t].createItemAligner();

          var a = s[_t].crossAxisLayoutSize + r;
          o.setCrossAxisLayoutSize(a), o.setCrossAxisLayoutOffset(_e3), o.align(), o.recursiveResizeOccured && s[_t].setItemPositions(), n += a, n += i;
        }
      }
    }, {
      key: "_getTotalCrossAxisSize",
      value: function _getTotalCrossAxisSize() {
        var t = this._lines;
        var e = 0;

        for (var i = 0, s = t.length; i < s; i++) {
          e += t[i].crossAxisLayoutSize;
        }

        return e;
      }
    }, {
      key: "_getSpacing",
      value: function _getSpacing(t) {
        var e = this._layout._flexContainer.alignContent,
            i = this._lines.length;
        return SpacingCalculator.getSpacing(e, i, t);
      }
    }, {
      key: "_lines",
      get: function get() {
        return this._layout._lines;
      }
    }, {
      key: "totalCrossAxisSize",
      get: function get() {
        return this._totalCrossAxisSize;
      }
    }]);

    return ContentAligner;
  }();

  var FlexUtils =
  /*#__PURE__*/
  function () {
    function FlexUtils() {
      _classCallCheck(this, FlexUtils);
    }

    _createClass(FlexUtils, null, [{
      key: "getParentAxisSizeWithPadding",
      value: function getParentAxisSizeWithPadding(t, e) {
        var i = t.target.getParent();

        if (i) {
          var s = t.flexParent;
          return s ? this.getAxisLayoutSize(s, e) + this.getTotalPadding(s, e) : e ? i.w : i.h;
        }

        return 0;
      }
    }, {
      key: "getRelAxisSize",
      value: function getRelAxisSize(t, e) {
        return e ? t.funcW ? this._allowRelAxisSizeFunction(t, !0) ? t.funcW(this.getParentAxisSizeWithPadding(t, !0)) : 0 : t.originalWidth : t.funcH ? this._allowRelAxisSizeFunction(t, !1) ? t.funcH(this.getParentAxisSizeWithPadding(t, !1)) : 0 : t.originalHeight;
      }
    }, {
      key: "_allowRelAxisSizeFunction",
      value: function _allowRelAxisSizeFunction(t, e) {
        var i = t.flexParent;
        return !i || !i._flex._layout.isAxisFitToContents(e);
      }
    }, {
      key: "isZeroAxisSize",
      value: function isZeroAxisSize(t, e) {
        return e ? !t.originalWidth && !t.funcW : !t.originalHeight && !t.funcH;
      }
    }, {
      key: "getAxisLayoutPos",
      value: function getAxisLayoutPos(t, e) {
        return e ? t.x : t.y;
      }
    }, {
      key: "getAxisLayoutSize",
      value: function getAxisLayoutSize(t, e) {
        return e ? t.w : t.h;
      }
    }, {
      key: "setAxisLayoutPos",
      value: function setAxisLayoutPos(t, e, i) {
        e ? t.x = i : t.y = i;
      }
    }, {
      key: "setAxisLayoutSize",
      value: function setAxisLayoutSize(t, e, i) {
        e ? t.w = i : t.h = i;
      }
    }, {
      key: "getAxisMinSize",
      value: function getAxisMinSize(t, e) {
        var i = this.getPlainAxisMinSize(t, e),
            s = 0;
        return t.isFlexItemEnabled() && (s = t._flexItem._getMinSizeSetting(e)), s > 0 && (i = Math.max(i, s)), i;
      }
    }, {
      key: "getPlainAxisMinSize",
      value: function getPlainAxisMinSize(t, e) {
        if (t.isFlexEnabled()) return t._flex._layout.getAxisMinSize(e);
        return 0 !== t.flexItem.shrink ? 0 : this.getRelAxisSize(t, e);
      }
    }, {
      key: "resizeAxis",
      value: function resizeAxis(t, e, i) {
        if (t.isFlexEnabled()) {
          t._flex._horizontal === e ? t._flex._layout.resizeMainAxis(i) : t._flex._layout.resizeCrossAxis(i);
        } else this.setAxisLayoutSize(t, e, i);
      }
    }, {
      key: "getPaddingOffset",
      value: function getPaddingOffset(t, e) {
        if (t.isFlexEnabled()) {
          var i = t._flex;
          return e ? i.paddingLeft : i.paddingTop;
        }

        return 0;
      }
    }, {
      key: "getTotalPadding",
      value: function getTotalPadding(t, e) {
        if (t.isFlexEnabled()) {
          var i = t._flex;
          return e ? i.paddingRight + i.paddingLeft : i.paddingTop + i.paddingBottom;
        }

        return 0;
      }
    }, {
      key: "getMarginOffset",
      value: function getMarginOffset(t, e) {
        var i = t.flexItem;
        return i ? e ? i.marginLeft : i.marginTop : 0;
      }
    }, {
      key: "getTotalMargin",
      value: function getTotalMargin(t, e) {
        var i = t.flexItem;
        return i ? e ? i.marginRight + i.marginLeft : i.marginTop + i.marginBottom : 0;
      }
    }]);

    return FlexUtils;
  }();

  var SizeShrinker =
  /*#__PURE__*/
  function () {
    function SizeShrinker(t) {
      _classCallCheck(this, SizeShrinker);

      this._line = t, this._amountRemaining = 0, this._shrunkSize = 0;
    }

    _createClass(SizeShrinker, [{
      key: "shrink",
      value: function shrink(t) {
        this._shrunkSize = 0, this._amountRemaining = t;

        var e = this._getTotalShrinkAmount();

        if (e) {
          var _t2 = this._line.items;

          do {
            var i = this._amountRemaining / e;

            for (var s = this._line.startIndex; s <= this._line.endIndex; s++) {
              var r = _t2[s].flexItem,
                  n = r.shrink;

              if (n > 0) {
                var _t3 = n * i;

                var _s2 = r._getMainAxisMinSize(),
                    o = r._getMainAxisLayoutSize();

                if (o > _s2) {
                  var _i2 = o - _s2;

                  _t3 >= _i2 && (_t3 = _i2, e -= n);
                  var a = o - _t3;
                  if (r._resizeMainAxis(a), this._shrunkSize += _t3, this._amountRemaining -= _t3, Math.abs(this._amountRemaining) < 1e-5) return;
                }
              }
            }
          } while (e && Math.abs(this._amountRemaining) > 1e-5);
        }
      }
    }, {
      key: "_getTotalShrinkAmount",
      value: function _getTotalShrinkAmount() {
        var t = 0;
        var e = this._line.items;

        for (var i = this._line.startIndex; i <= this._line.endIndex; i++) {
          var s = e[i].flexItem;

          if (s.shrink) {
            var _e4 = s._getMainAxisMinSize();

            s._getMainAxisLayoutSize() > _e4 && (t += s.shrink);
          }
        }

        return t;
      }
    }, {
      key: "getShrunkSize",
      value: function getShrunkSize() {
        return this._shrunkSize;
      }
    }]);

    return SizeShrinker;
  }();

  var SizeGrower =
  /*#__PURE__*/
  function () {
    function SizeGrower(t) {
      _classCallCheck(this, SizeGrower);

      this._line = t, this._amountRemaining = 0, this._grownSize = 0;
    }

    _createClass(SizeGrower, [{
      key: "grow",
      value: function grow(t) {
        this._grownSize = 0, this._amountRemaining = t;

        var e = this._getTotalGrowAmount();

        if (e) {
          var _t4 = this._line.items;

          do {
            var i = this._amountRemaining / e;

            for (var s = this._line.startIndex; s <= this._line.endIndex; s++) {
              var r = _t4[s].flexItem,
                  n = r.grow;

              if (n > 0) {
                var _t5 = n * i;

                var _s3 = r._getMainAxisMaxSizeSetting(),
                    o = r._getMainAxisLayoutSize();

                if (_s3 > 0) if (o >= _s3) _t5 = 0;else {
                  var _i3 = _s3 - o;

                  _t5 >= _i3 && (_t5 = _i3, e -= n);
                }

                if (_t5 > 0) {
                  var _e5 = o + _t5;

                  if (r._resizeMainAxis(_e5), this._grownSize += _t5, this._amountRemaining -= _t5, Math.abs(this._amountRemaining) < 1e-5) return;
                }
              }
            }
          } while (e && Math.abs(this._amountRemaining) > 1e-5);
        }
      }
    }, {
      key: "_getTotalGrowAmount",
      value: function _getTotalGrowAmount() {
        var t = 0;
        var e = this._line.items;

        for (var i = this._line.startIndex; i <= this._line.endIndex; i++) {
          var s = e[i].flexItem;

          if (s.grow) {
            var _e6 = s._getMainAxisMaxSizeSetting(),
                _i4 = s._getMainAxisLayoutSize();

            (0 === _e6 || _i4 < _e6) && (t += s.grow);
          }
        }

        return t;
      }
    }, {
      key: "getGrownSize",
      value: function getGrownSize() {
        return this._grownSize;
      }
    }]);

    return SizeGrower;
  }();

  var ItemPositioner =
  /*#__PURE__*/
  function () {
    function ItemPositioner(t) {
      _classCallCheck(this, ItemPositioner);

      this._line = t;
    }

    _createClass(ItemPositioner, [{
      key: "position",
      value: function position() {
        var _this$_getSpacing2 = this._getSpacing(),
            t = _this$_getSpacing2.spacingBefore,
            e = _this$_getSpacing2.spacingBetween;

        var i = t;
        var s = this._line.items;

        for (var _t6 = this._line.startIndex; _t6 <= this._line.endIndex; _t6++) {
          var r = s[_t6];
          r.flexItem._setMainAxisLayoutPos(i), i += r.flexItem._getMainAxisLayoutSizeWithPaddingAndMargin(), i += e;
        }
      }
    }, {
      key: "_getSpacing",
      value: function _getSpacing() {
        var t = this._line._availableSpace;
        var e = this._layout._flexContainer.justifyContent;
        var i = this._line.numberOfItems;
        return SpacingCalculator.getSpacing(e, i, t);
      }
    }, {
      key: "_layout",
      get: function get() {
        return this._line._layout;
      }
    }]);

    return ItemPositioner;
  }();

  var ItemAligner =
  /*#__PURE__*/
  function () {
    function ItemAligner(t) {
      _classCallCheck(this, ItemAligner);

      this._line = t, this._crossAxisLayoutSize = 0, this._crossAxisLayoutOffset = 0, this._alignItemsSetting = null, this._recursiveResizeOccured = !1, this._isCrossAxisFitToContents = !1;
    }

    _createClass(ItemAligner, [{
      key: "setCrossAxisLayoutSize",
      value: function setCrossAxisLayoutSize(t) {
        this._crossAxisLayoutSize = t;
      }
    }, {
      key: "setCrossAxisLayoutOffset",
      value: function setCrossAxisLayoutOffset(t) {
        this._crossAxisLayoutOffset = t;
      }
    }, {
      key: "align",
      value: function align() {
        this._alignItemsSetting = this._flexContainer.alignItems, this._isCrossAxisFitToContents = this._layout.isAxisFitToContents(!this._flexContainer._horizontal), this._recursiveResizeOccured = !1;
        var t = this._line.items;

        for (var _e7 = this._line.startIndex; _e7 <= this._line.endIndex; _e7++) {
          var i = t[_e7];

          this._alignItem(i);
        }
      }
    }, {
      key: "_alignItem",
      value: function _alignItem(t) {
        var e = t.flexItem;
        var i = e.alignSelf || this._alignItemsSetting;

        switch ("stretch" === i && this._preventStretch(e) && (i = "flex-start"), "stretch" === i || this._isCrossAxisFitToContents || e._hasRelCrossAxisSize() && e._resetCrossAxisLayoutSize(), i) {
          case "flex-start":
            this._alignItemFlexStart(e);

            break;

          case "flex-end":
            this._alignItemFlexEnd(e);

            break;

          case "center":
            this._alignItemFlexCenter(e);

            break;

          case "stretch":
            this._alignItemStretch(e);

        }
      }
    }, {
      key: "_alignItemFlexStart",
      value: function _alignItemFlexStart(t) {
        t._setCrossAxisLayoutPos(this._crossAxisLayoutOffset);
      }
    }, {
      key: "_alignItemFlexEnd",
      value: function _alignItemFlexEnd(t) {
        var e = t._getCrossAxisLayoutSizeWithPaddingAndMargin();

        t._setCrossAxisLayoutPos(this._crossAxisLayoutOffset + (this._crossAxisLayoutSize - e));
      }
    }, {
      key: "_alignItemFlexCenter",
      value: function _alignItemFlexCenter(t) {
        var e = t._getCrossAxisLayoutSizeWithPaddingAndMargin(),
            i = (this._crossAxisLayoutSize - e) / 2;

        t._setCrossAxisLayoutPos(this._crossAxisLayoutOffset + i);
      }
    }, {
      key: "_alignItemStretch",
      value: function _alignItemStretch(t) {
        t._setCrossAxisLayoutPos(this._crossAxisLayoutOffset);

        var e = t._getMainAxisLayoutSize();

        var i = this._crossAxisLayoutSize - t._getCrossAxisMargin() - t._getCrossAxisPadding();

        var s = t._getCrossAxisMinSizeSetting();

        s > 0 && (i = Math.max(i, s));

        var r = t._getCrossAxisMaxSizeSetting();

        r > 0 && (i = Math.min(i, r)), t._resizeCrossAxis(i), t._getMainAxisLayoutSize() !== e && (this._recursiveResizeOccured = !0);
      }
    }, {
      key: "_preventStretch",
      value: function _preventStretch(t) {
        var e = t._hasFixedCrossAxisSize(),
            i = "stretch" === t.alignSelf;

        return e && !i;
      }
    }, {
      key: "_layout",
      get: function get() {
        return this._line._layout;
      }
    }, {
      key: "_flexContainer",
      get: function get() {
        return this._layout._flexContainer;
      }
    }, {
      key: "recursiveResizeOccured",
      get: function get() {
        return this._recursiveResizeOccured;
      }
    }]);

    return ItemAligner;
  }();

  var LineLayout =
  /*#__PURE__*/
  function () {
    function LineLayout(t, e, i, s) {
      _classCallCheck(this, LineLayout);

      this._layout = t, this.items = t.items, this.startIndex = e, this.endIndex = i, this._availableSpace = s;
    }

    _createClass(LineLayout, [{
      key: "performLayout",
      value: function performLayout() {
        this._setItemSizes(), this.setItemPositions(), this._calcLayoutInfo();
      }
    }, {
      key: "_setItemSizes",
      value: function _setItemSizes() {
        this._availableSpace > 0 ? this._growItemSizes(this._availableSpace) : this._availableSpace < 0 && this._shrinkItemSizes(-this._availableSpace);
      }
    }, {
      key: "_growItemSizes",
      value: function _growItemSizes(t) {
        var e = new SizeGrower(this);
        e.grow(t), this._availableSpace -= e.getGrownSize();
      }
    }, {
      key: "_shrinkItemSizes",
      value: function _shrinkItemSizes(t) {
        var e = new SizeShrinker(this);
        e.shrink(t), this._availableSpace += e.getShrunkSize();
      }
    }, {
      key: "setItemPositions",
      value: function setItemPositions() {
        new ItemPositioner(this).position();
      }
    }, {
      key: "createItemAligner",
      value: function createItemAligner() {
        return new ItemAligner(this);
      }
    }, {
      key: "_calcLayoutInfo",
      value: function _calcLayoutInfo() {
        this._calcCrossAxisMaxLayoutSize();
      }
    }, {
      key: "getMainAxisMinSize",
      value: function getMainAxisMinSize() {
        var t = 0;

        for (var _e8 = this.startIndex; _e8 <= this.endIndex; _e8++) {
          t += this.items[_e8].flexItem._getMainAxisMinSizeWithPaddingAndMargin();
        }

        return t;
      }
    }, {
      key: "_calcCrossAxisMaxLayoutSize",
      value: function _calcCrossAxisMaxLayoutSize() {
        this._crossAxisMaxLayoutSize = this._getCrossAxisMaxLayoutSize();
      }
    }, {
      key: "_getCrossAxisMaxLayoutSize",
      value: function _getCrossAxisMaxLayoutSize() {
        var t = 0;

        for (var _e9 = this.startIndex; _e9 <= this.endIndex; _e9++) {
          var i = this.items[_e9];
          t = Math.max(t, i.flexItem._getCrossAxisLayoutSizeWithPaddingAndMargin());
        }

        return t;
      }
    }, {
      key: "numberOfItems",
      get: function get() {
        return this.endIndex - this.startIndex + 1;
      }
    }, {
      key: "crossAxisLayoutSize",
      get: function get() {
        var t = this._layout.isCrossAxisFitToContents() && !this._layout.resizingCrossAxis;
        return this._layout.isWrapping() || t ? this._crossAxisMaxLayoutSize : this._layout.crossAxisSize;
      }
    }]);

    return LineLayout;
  }();

  var LineLayouter =
  /*#__PURE__*/
  function () {
    function LineLayouter(t) {
      _classCallCheck(this, LineLayouter);

      this._layout = t, this._mainAxisMinSize = -1, this._crossAxisMinSize = -1, this._mainAxisContentSize = 0;
    }

    _createClass(LineLayouter, [{
      key: "layoutLines",
      value: function layoutLines() {
        this._setup();

        var t = this._layout.items,
            e = this._layout.isWrapping();

        var i,
            s = 0;
        var r = t.length;

        for (i = 0; i < r; i++) {
          var _r2 = t[i];

          this._layoutFlexItem(_r2);

          var n = _r2.flexItem._getMainAxisLayoutSizeWithPaddingAndMargin();

          if (e && i > s) {
            this._curMainAxisPos + n > this._mainAxisSize && (this._layoutLine(s, i - 1), this._curMainAxisPos = 0, s = i);
          }

          this._addToMainAxisPos(n);
        }

        s < i && this._layoutLine(s, i - 1);
      }
    }, {
      key: "_layoutFlexItem",
      value: function _layoutFlexItem(t) {
        t.isFlexEnabled() ? t.flexLayout.updateTreeLayout() : t.flexItem._resetLayoutSize();
      }
    }, {
      key: "_setup",
      value: function _setup() {
        this._mainAxisSize = this._layout.mainAxisSize, this._curMainAxisPos = 0, this._maxMainAxisPos = 0, this._lines = [], this._mainAxisMinSize = -1, this._crossAxisMinSize = -1, this._mainAxisContentSize = 0;
      }
    }, {
      key: "_addToMainAxisPos",
      value: function _addToMainAxisPos(t) {
        this._curMainAxisPos += t, this._curMainAxisPos > this._maxMainAxisPos && (this._maxMainAxisPos = this._curMainAxisPos);
      }
    }, {
      key: "_layoutLine",
      value: function _layoutLine(t, e) {
        var i = this._getAvailableMainAxisLayoutSpace(),
            s = new LineLayout(this._layout, t, e, i);

        s.performLayout(), this._lines.push(s), (0 === this._mainAxisContentSize || this._curMainAxisPos > this._mainAxisContentSize) && (this._mainAxisContentSize = this._curMainAxisPos);
      }
    }, {
      key: "_getAvailableMainAxisLayoutSpace",
      value: function _getAvailableMainAxisLayoutSpace() {
        return !this._layout.resizingMainAxis && this._layout.isMainAxisFitToContents() ? 0 : this._mainAxisSize - this._curMainAxisPos;
      }
    }, {
      key: "_getCrossAxisMinSize",
      value: function _getCrossAxisMinSize() {
        var t = 0;
        var e = this._layout.items;

        for (var i = 0, s = e.length; i < s; i++) {
          var _s4 = e[i].flexItem._getCrossAxisMinSizeWithPaddingAndMargin();

          t = Math.max(t, _s4);
        }

        return t;
      }
    }, {
      key: "_getMainAxisMinSize",
      value: function _getMainAxisMinSize() {
        return 1 === this._lines.length ? this._lines[0].getMainAxisMinSize() : this._layout.mainAxisSize;
      }
    }, {
      key: "lines",
      get: function get() {
        return this._lines;
      }
    }, {
      key: "mainAxisMinSize",
      get: function get() {
        return -1 === this._mainAxisMinSize && (this._mainAxisMinSize = this._getMainAxisMinSize()), this._mainAxisMinSize;
      }
    }, {
      key: "crossAxisMinSize",
      get: function get() {
        return -1 === this._crossAxisMinSize && (this._crossAxisMinSize = this._getCrossAxisMinSize()), this._crossAxisMinSize;
      }
    }, {
      key: "mainAxisContentSize",
      get: function get() {
        return this._mainAxisContentSize;
      }
    }]);

    return LineLayouter;
  }();

  var ItemCoordinatesUpdater =
  /*#__PURE__*/
  function () {
    function ItemCoordinatesUpdater(t) {
      _classCallCheck(this, ItemCoordinatesUpdater);

      this._layout = t, this._isReverse = this._flexContainer._reverse, this._horizontalPaddingOffset = this._layout._getHorizontalPaddingOffset(), this._verticalPaddingOffset = this._layout._getVerticalPaddingOffset();
    }

    _createClass(ItemCoordinatesUpdater, [{
      key: "finalize",
      value: function finalize() {
        var t = this._layout.getParentFlexContainer();

        if (t) {
          new ItemCoordinatesUpdater(t._layout)._finalizeItemAndChildren(this._flexContainer.item);
        } else this._finalizeRoot(), this._finalizeItems();
      }
    }, {
      key: "_finalizeRoot",
      value: function _finalizeRoot() {
        var t = this._flexContainer.item;
        var e = FlexUtils.getAxisLayoutPos(t, !0),
            i = FlexUtils.getAxisLayoutPos(t, !1),
            s = FlexUtils.getAxisLayoutSize(t, !0),
            r = FlexUtils.getAxisLayoutSize(t, !1);
        s += this._layout._getHorizontalPadding(), r += this._layout._getVerticalPadding(), t.clearRecalcFlag(), t.setLayout(e, i, s, r);
      }
    }, {
      key: "_finalizeItems",
      value: function _finalizeItems() {
        var t = this._layout.items;

        for (var _e10 = 0, i = t.length; _e10 < i; _e10++) {
          var _i5 = t[_e10],
              s = this._validateItemCache(_i5);

          this._finalizeItem(_i5), s || this._finalizeItemChildren(_i5);
        }
      }
    }, {
      key: "_validateItemCache",
      value: function _validateItemCache(t) {
        if (0 === t.recalc && t.isFlexEnabled()) {
          var _e11 = t._flex._layout;
          if (t.w === t.target.w && t.h === t.target.h) return !0;
          {
            var _t7 = _e11.crossAxisSize;
            _e11.performResizeMainAxis(_e11.mainAxisSize), _e11.performResizeCrossAxis(_t7);
          }
        }

        return !1;
      }
    }, {
      key: "_finalizeItemAndChildren",
      value: function _finalizeItemAndChildren(t) {
        this._finalizeItem(t), this._finalizeItemChildren(t);
      }
    }, {
      key: "_finalizeItem",
      value: function _finalizeItem(t) {
        this._isReverse && this._reverseMainAxisLayoutPos(t);
        var e = FlexUtils.getAxisLayoutPos(t, !0),
            i = FlexUtils.getAxisLayoutPos(t, !1),
            s = FlexUtils.getAxisLayoutSize(t, !0),
            r = FlexUtils.getAxisLayoutSize(t, !1);
        e += this._horizontalPaddingOffset, i += this._verticalPaddingOffset, t.flex && (s += t._flex._layout._getHorizontalPadding(), r += t._flex._layout._getVerticalPadding());
        var n = t.flexItem;
        n && (e += n._getHorizontalMarginOffset(), i += n._getVerticalMarginOffset()), t.clearRecalcFlag(), t.setLayout(e, i, s, r);
      }
    }, {
      key: "_finalizeItemChildren",
      value: function _finalizeItemChildren(t) {
        var e = t._flex;

        if (e) {
          new ItemCoordinatesUpdater(e._layout)._finalizeItems();
        }
      }
    }, {
      key: "_reverseMainAxisLayoutPos",
      value: function _reverseMainAxisLayoutPos(t) {
        var e = t.flexItem._getMainAxisLayoutPos() + t.flexItem._getMainAxisLayoutSizeWithPaddingAndMargin(),
            i = this._layout.mainAxisSize - e;

        t.flexItem._setMainAxisLayoutPos(i);
      }
    }, {
      key: "_flexContainer",
      get: function get() {
        return this._layout._flexContainer;
      }
    }]);

    return ItemCoordinatesUpdater;
  }();

  var FlexLayout =
  /*#__PURE__*/
  function () {
    function FlexLayout(t) {
      _classCallCheck(this, FlexLayout);

      this._flexContainer = t, this._lineLayouter = new LineLayouter(this), this._resizingMainAxis = !1, this._resizingCrossAxis = !1, this._cachedMainAxisSizeAfterLayout = 0, this._cachedCrossAxisSizeAfterLayout = 0, this._shrunk = !1;
    }

    _createClass(FlexLayout, [{
      key: "layoutTree",
      value: function layoutTree() {
        null !== this.item.flexParent ? this._updateSubTreeLayout() : this.updateTreeLayout(), this.updateItemCoords();
      }
    }, {
      key: "updateTreeLayout",
      value: function updateTreeLayout() {
        this.recalc ? this._performUpdateLayoutTree() : this._performUpdateLayoutTreeFromCache();
      }
    }, {
      key: "_performUpdateLayoutTree",
      value: function _performUpdateLayoutTree() {
        this._setInitialAxisSizes(), this._layoutAxes(), this._refreshLayoutCache();
      }
    }, {
      key: "_refreshLayoutCache",
      value: function _refreshLayoutCache() {
        this._cachedMainAxisSizeAfterLayout = this.mainAxisSize, this._cachedCrossAxisSizeAfterLayout = this.crossAxisSize;
      }
    }, {
      key: "_performUpdateLayoutTreeFromCache",
      value: function _performUpdateLayoutTreeFromCache() {
        this.item.funcW || this.item.funcH ? (this.item.enableLocalRecalcFlag(), this._performUpdateLayoutTree()) : (this.mainAxisSize = this._cachedMainAxisSizeAfterLayout, this.crossAxisSize = this._cachedCrossAxisSizeAfterLayout);
      }
    }, {
      key: "updateItemCoords",
      value: function updateItemCoords() {
        new ItemCoordinatesUpdater(this).finalize();
      }
    }, {
      key: "_updateSubTreeLayout",
      value: function _updateSubTreeLayout() {
        var t = this.crossAxisSize;
        this._layoutMainAxis(), this.performResizeCrossAxis(t);
      }
    }, {
      key: "_setInitialAxisSizes",
      value: function _setInitialAxisSizes() {
        this.item.isFlexItemEnabled() ? this.item.flexItem._resetLayoutSize() : (this.mainAxisSize = this._getMainAxisBasis(), this.crossAxisSize = this._getCrossAxisBasis()), this._resizingMainAxis = !1, this._resizingCrossAxis = !1, this._shrunk = !1;
      }
    }, {
      key: "_layoutAxes",
      value: function _layoutAxes() {
        this._layoutMainAxis(), this._layoutCrossAxis();
      }
    }, {
      key: "_layoutMainAxis",
      value: function _layoutMainAxis() {
        this._layoutLines(), this._fitMainAxisSizeToContents();
      }
    }, {
      key: "_layoutLines",
      value: function _layoutLines() {
        this._lineLayouter.layoutLines();
      }
    }, {
      key: "_fitMainAxisSizeToContents",
      value: function _fitMainAxisSizeToContents() {
        this._resizingMainAxis || this.isMainAxisFitToContents() && (this.mainAxisSize = this._lineLayouter.mainAxisContentSize);
      }
    }, {
      key: "_layoutCrossAxis",
      value: function _layoutCrossAxis() {
        var t = new ContentAligner(this);
        t.init(), this._totalCrossAxisSize = t.totalCrossAxisSize, this._fitCrossAxisSizeToContents(), t.align();
      }
    }, {
      key: "_fitCrossAxisSizeToContents",
      value: function _fitCrossAxisSizeToContents() {
        this._resizingCrossAxis || this.isCrossAxisFitToContents() && (this.crossAxisSize = this._totalCrossAxisSize);
      }
    }, {
      key: "isWrapping",
      value: function isWrapping() {
        return this._flexContainer.wrap;
      }
    }, {
      key: "isAxisFitToContents",
      value: function isAxisFitToContents(t) {
        return this._horizontal === t ? this.isMainAxisFitToContents() : this.isCrossAxisFitToContents();
      }
    }, {
      key: "isMainAxisFitToContents",
      value: function isMainAxisFitToContents() {
        return !this.isWrapping() && !this._hasFixedMainAxisBasis();
      }
    }, {
      key: "isCrossAxisFitToContents",
      value: function isCrossAxisFitToContents() {
        return !this._hasFixedCrossAxisBasis();
      }
    }, {
      key: "_hasFixedMainAxisBasis",
      value: function _hasFixedMainAxisBasis() {
        return !FlexUtils.isZeroAxisSize(this.item, this._horizontal);
      }
    }, {
      key: "_hasFixedCrossAxisBasis",
      value: function _hasFixedCrossAxisBasis() {
        return !FlexUtils.isZeroAxisSize(this.item, !this._horizontal);
      }
    }, {
      key: "getAxisMinSize",
      value: function getAxisMinSize(t) {
        return this._horizontal === t ? this._getMainAxisMinSize() : this._getCrossAxisMinSize();
      }
    }, {
      key: "_getMainAxisMinSize",
      value: function _getMainAxisMinSize() {
        return this._lineLayouter.mainAxisMinSize;
      }
    }, {
      key: "_getCrossAxisMinSize",
      value: function _getCrossAxisMinSize() {
        return this._lineLayouter.crossAxisMinSize;
      }
    }, {
      key: "resizeMainAxis",
      value: function resizeMainAxis(t) {
        this.mainAxisSize !== t && (this.recalc > 0 ? this.performResizeMainAxis(t) : this._checkValidCacheMainAxisResize() ? (this.mainAxisSize = t, this._fitCrossAxisSizeToContents()) : (this.item.enableLocalRecalcFlag(), this.performResizeMainAxis(t)));
      }
    }, {
      key: "_checkValidCacheMainAxisResize",
      value: function _checkValidCacheMainAxisResize(t) {
        return t === this.targetMainAxisSize || !this.isCrossAxisFitToContents();
      }
    }, {
      key: "performResizeMainAxis",
      value: function performResizeMainAxis(t) {
        var e = t < this.mainAxisSize;
        this._shrunk = e, this.mainAxisSize = t, this._resizingMainAxis = !0, this._layoutAxes(), this._resizingMainAxis = !1;
      }
    }, {
      key: "resizeCrossAxis",
      value: function resizeCrossAxis(t) {
        this.crossAxisSize !== t && (this.recalc > 0 ? this.performResizeCrossAxis(t) : this.crossAxisSize = t);
      }
    }, {
      key: "performResizeCrossAxis",
      value: function performResizeCrossAxis(t) {
        this.crossAxisSize = t, this._resizingCrossAxis = !0, this._layoutCrossAxis(), this._resizingCrossAxis = !1;
      }
    }, {
      key: "getParentFlexContainer",
      value: function getParentFlexContainer() {
        return this.item.isFlexItemEnabled() ? this.item.flexItem.ctr : null;
      }
    }, {
      key: "_getHorizontalPadding",
      value: function _getHorizontalPadding() {
        return FlexUtils.getTotalPadding(this.item, !0);
      }
    }, {
      key: "_getVerticalPadding",
      value: function _getVerticalPadding() {
        return FlexUtils.getTotalPadding(this.item, !1);
      }
    }, {
      key: "_getHorizontalPaddingOffset",
      value: function _getHorizontalPaddingOffset() {
        return FlexUtils.getPaddingOffset(this.item, !0);
      }
    }, {
      key: "_getVerticalPaddingOffset",
      value: function _getVerticalPaddingOffset() {
        return FlexUtils.getPaddingOffset(this.item, !1);
      }
    }, {
      key: "_getMainAxisBasis",
      value: function _getMainAxisBasis() {
        return FlexUtils.getRelAxisSize(this.item, this._horizontal);
      }
    }, {
      key: "_getCrossAxisBasis",
      value: function _getCrossAxisBasis() {
        return FlexUtils.getRelAxisSize(this.item, !this._horizontal);
      }
    }, {
      key: "shrunk",
      get: function get() {
        return this._shrunk;
      }
    }, {
      key: "recalc",
      get: function get() {
        return this.item.recalc;
      }
    }, {
      key: "_lines",
      get: function get() {
        return this._lineLayouter.lines;
      }
    }, {
      key: "targetMainAxisSize",
      get: function get() {
        return this._horizontal ? this.item.target.w : this.item.target.h;
      }
    }, {
      key: "targetCrossAxisSize",
      get: function get() {
        return this._horizontal ? this.item.target.h : this.item.target.w;
      }
    }, {
      key: "_horizontal",
      get: function get() {
        return this._flexContainer._horizontal;
      }
    }, {
      key: "_reverse",
      get: function get() {
        return this._flexContainer._reverse;
      }
    }, {
      key: "item",
      get: function get() {
        return this._flexContainer.item;
      }
    }, {
      key: "items",
      get: function get() {
        return this.item.items;
      }
    }, {
      key: "resizingMainAxis",
      get: function get() {
        return this._resizingMainAxis;
      }
    }, {
      key: "resizingCrossAxis",
      get: function get() {
        return this._resizingCrossAxis;
      }
    }, {
      key: "numberOfItems",
      get: function get() {
        return this.items.length;
      }
    }, {
      key: "mainAxisSize",
      get: function get() {
        return FlexUtils.getAxisLayoutSize(this.item, this._horizontal);
      },
      set: function set(t) {
        FlexUtils.setAxisLayoutSize(this.item, this._horizontal, t);
      }
    }, {
      key: "crossAxisSize",
      get: function get() {
        return FlexUtils.getAxisLayoutSize(this.item, !this._horizontal);
      },
      set: function set(t) {
        FlexUtils.setAxisLayoutSize(this.item, !this._horizontal, t);
      }
    }]);

    return FlexLayout;
  }();

  var FlexContainer =
  /*#__PURE__*/
  function () {
    function FlexContainer(t) {
      _classCallCheck(this, FlexContainer);

      this._item = t, this._layout = new FlexLayout(this), this._horizontal = !0, this._reverse = !1, this._wrap = !1, this._alignItems = "stretch", this._justifyContent = "flex-start", this._alignContent = "flex-start", this._paddingLeft = 0, this._paddingTop = 0, this._paddingRight = 0, this._paddingBottom = 0;
    }

    _createClass(FlexContainer, [{
      key: "_changedDimensions",
      value: function _changedDimensions() {
        this._item.changedDimensions();
      }
    }, {
      key: "_changedContents",
      value: function _changedContents() {
        this._item.changedContents();
      }
    }, {
      key: "patch",
      value: function patch(t) {
        Base.patchObject(this, t);
      }
    }, {
      key: "item",
      get: function get() {
        return this._item;
      }
    }, {
      key: "direction",
      get: function get() {
        return (this._horizontal ? "row" : "column") + (this._reverse ? "-reverse" : "");
      },
      set: function set(t) {
        this.direction !== t && (this._horizontal = "row" === t || "row-reverse" === t, this._reverse = "row-reverse" === t || "column-reverse" === t, this._changedContents());
      }
    }, {
      key: "wrap",
      set: function set(t) {
        this._wrap = t, this._changedContents();
      },
      get: function get() {
        return this._wrap;
      }
    }, {
      key: "alignItems",
      get: function get() {
        return this._alignItems;
      },
      set: function set(t) {
        if (this._alignItems !== t) {
          if (-1 === FlexContainer.ALIGN_ITEMS.indexOf(t)) throw new Error("Unknown alignItems, options: " + FlexContainer.ALIGN_ITEMS.join(","));
          this._alignItems = t, this._changedContents();
        }
      }
    }, {
      key: "alignContent",
      get: function get() {
        return this._alignContent;
      },
      set: function set(t) {
        if (this._alignContent !== t) {
          if (-1 === FlexContainer.ALIGN_CONTENT.indexOf(t)) throw new Error("Unknown alignContent, options: " + FlexContainer.ALIGN_CONTENT.join(","));
          this._alignContent = t, this._changedContents();
        }
      }
    }, {
      key: "justifyContent",
      get: function get() {
        return this._justifyContent;
      },
      set: function set(t) {
        if (this._justifyContent !== t) {
          if (-1 === FlexContainer.JUSTIFY_CONTENT.indexOf(t)) throw new Error("Unknown justifyContent, options: " + FlexContainer.JUSTIFY_CONTENT.join(","));
          this._justifyContent = t, this._changedContents();
        }
      }
    }, {
      key: "padding",
      set: function set(t) {
        this.paddingLeft = t, this.paddingTop = t, this.paddingRight = t, this.paddingBottom = t;
      },
      get: function get() {
        return this.paddingLeft;
      }
    }, {
      key: "paddingLeft",
      set: function set(t) {
        this._paddingLeft = t, this._changedDimensions();
      },
      get: function get() {
        return this._paddingLeft;
      }
    }, {
      key: "paddingTop",
      set: function set(t) {
        this._paddingTop = t, this._changedDimensions();
      },
      get: function get() {
        return this._paddingTop;
      }
    }, {
      key: "paddingRight",
      set: function set(t) {
        this._paddingRight = t, this._changedDimensions();
      },
      get: function get() {
        return this._paddingRight;
      }
    }, {
      key: "paddingBottom",
      set: function set(t) {
        this._paddingBottom = t, this._changedDimensions();
      },
      get: function get() {
        return this._paddingBottom;
      }
    }]);

    return FlexContainer;
  }();

  FlexContainer.ALIGN_ITEMS = ["flex-start", "flex-end", "center", "stretch"], FlexContainer.ALIGN_CONTENT = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch"], FlexContainer.JUSTIFY_CONTENT = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];

  var FlexItem =
  /*#__PURE__*/
  function () {
    function FlexItem(t) {
      _classCallCheck(this, FlexItem);

      this._ctr = null, this._item = t, this._grow = 0, this._shrink = FlexItem.SHRINK_AUTO, this._alignSelf = void 0, this._minWidth = 0, this._minHeight = 0, this._maxWidth = 0, this._maxHeight = 0, this._marginLeft = 0, this._marginTop = 0, this._marginRight = 0, this._marginBottom = 0;
    }

    _createClass(FlexItem, [{
      key: "_getDefaultShrink",
      value: function _getDefaultShrink() {
        return this.item.isFlexEnabled() ? 1 : 0;
      }
    }, {
      key: "_changed",
      value: function _changed() {
        this.ctr && this.ctr._changedContents();
      }
    }, {
      key: "patch",
      value: function patch(t) {
        Base.patchObject(this, t);
      }
    }, {
      key: "_resetLayoutSize",
      value: function _resetLayoutSize() {
        this._resetHorizontalAxisLayoutSize(), this._resetVerticalAxisLayoutSize();
      }
    }, {
      key: "_resetCrossAxisLayoutSize",
      value: function _resetCrossAxisLayoutSize() {
        this.ctr._horizontal ? this._resetVerticalAxisLayoutSize() : this._resetHorizontalAxisLayoutSize();
      }
    }, {
      key: "_resetHorizontalAxisLayoutSize",
      value: function _resetHorizontalAxisLayoutSize() {
        var t = FlexUtils.getRelAxisSize(this.item, !0);
        this._minWidth && (t = Math.max(this._minWidth, t)), this._maxWidth && (t = Math.min(this._maxWidth, t)), FlexUtils.setAxisLayoutSize(this.item, !0, t);
      }
    }, {
      key: "_resetVerticalAxisLayoutSize",
      value: function _resetVerticalAxisLayoutSize() {
        var t = FlexUtils.getRelAxisSize(this.item, !1);
        this._minHeight && (t = Math.max(this._minHeight, t)), this._maxHeight && (t = Math.min(this._maxHeight, t)), FlexUtils.setAxisLayoutSize(this.item, !1, t);
      }
    }, {
      key: "_getCrossAxisMinSizeSetting",
      value: function _getCrossAxisMinSizeSetting() {
        return this._getMinSizeSetting(!this.ctr._horizontal);
      }
    }, {
      key: "_getCrossAxisMaxSizeSetting",
      value: function _getCrossAxisMaxSizeSetting() {
        return this._getMaxSizeSetting(!this.ctr._horizontal);
      }
    }, {
      key: "_getMainAxisMaxSizeSetting",
      value: function _getMainAxisMaxSizeSetting() {
        return this._getMaxSizeSetting(this.ctr._horizontal);
      }
    }, {
      key: "_getMinSizeSetting",
      value: function _getMinSizeSetting(t) {
        return t ? this._minWidth : this._minHeight;
      }
    }, {
      key: "_getMaxSizeSetting",
      value: function _getMaxSizeSetting(t) {
        return t ? this._maxWidth : this._maxHeight;
      }
    }, {
      key: "_getMainAxisMinSize",
      value: function _getMainAxisMinSize() {
        return FlexUtils.getAxisMinSize(this.item, this.ctr._horizontal);
      }
    }, {
      key: "_getCrossAxisMinSize",
      value: function _getCrossAxisMinSize() {
        return FlexUtils.getAxisMinSize(this.item, !this.ctr._horizontal);
      }
    }, {
      key: "_getMainAxisLayoutSize",
      value: function _getMainAxisLayoutSize() {
        return FlexUtils.getAxisLayoutSize(this.item, this.ctr._horizontal);
      }
    }, {
      key: "_getMainAxisLayoutPos",
      value: function _getMainAxisLayoutPos() {
        return FlexUtils.getAxisLayoutPos(this.item, this.ctr._horizontal);
      }
    }, {
      key: "_setMainAxisLayoutPos",
      value: function _setMainAxisLayoutPos(t) {
        return FlexUtils.setAxisLayoutPos(this.item, this.ctr._horizontal, t);
      }
    }, {
      key: "_setCrossAxisLayoutPos",
      value: function _setCrossAxisLayoutPos(t) {
        return FlexUtils.setAxisLayoutPos(this.item, !this.ctr._horizontal, t);
      }
    }, {
      key: "_getCrossAxisLayoutSize",
      value: function _getCrossAxisLayoutSize() {
        return FlexUtils.getAxisLayoutSize(this.item, !this.ctr._horizontal);
      }
    }, {
      key: "_resizeCrossAxis",
      value: function _resizeCrossAxis(t) {
        return FlexUtils.resizeAxis(this.item, !this.ctr._horizontal, t);
      }
    }, {
      key: "_resizeMainAxis",
      value: function _resizeMainAxis(t) {
        return FlexUtils.resizeAxis(this.item, this.ctr._horizontal, t);
      }
    }, {
      key: "_getMainAxisPadding",
      value: function _getMainAxisPadding() {
        return FlexUtils.getTotalPadding(this.item, this.ctr._horizontal);
      }
    }, {
      key: "_getCrossAxisPadding",
      value: function _getCrossAxisPadding() {
        return FlexUtils.getTotalPadding(this.item, !this.ctr._horizontal);
      }
    }, {
      key: "_getMainAxisMargin",
      value: function _getMainAxisMargin() {
        return FlexUtils.getTotalMargin(this.item, this.ctr._horizontal);
      }
    }, {
      key: "_getCrossAxisMargin",
      value: function _getCrossAxisMargin() {
        return FlexUtils.getTotalMargin(this.item, !this.ctr._horizontal);
      }
    }, {
      key: "_getHorizontalMarginOffset",
      value: function _getHorizontalMarginOffset() {
        return FlexUtils.getMarginOffset(this.item, !0);
      }
    }, {
      key: "_getVerticalMarginOffset",
      value: function _getVerticalMarginOffset() {
        return FlexUtils.getMarginOffset(this.item, !1);
      }
    }, {
      key: "_getMainAxisMinSizeWithPaddingAndMargin",
      value: function _getMainAxisMinSizeWithPaddingAndMargin() {
        return this._getMainAxisMinSize() + this._getMainAxisPadding() + this._getMainAxisMargin();
      }
    }, {
      key: "_getCrossAxisMinSizeWithPaddingAndMargin",
      value: function _getCrossAxisMinSizeWithPaddingAndMargin() {
        return this._getCrossAxisMinSize() + this._getCrossAxisPadding() + this._getCrossAxisMargin();
      }
    }, {
      key: "_getMainAxisLayoutSizeWithPaddingAndMargin",
      value: function _getMainAxisLayoutSizeWithPaddingAndMargin() {
        return this._getMainAxisLayoutSize() + this._getMainAxisPadding() + this._getMainAxisMargin();
      }
    }, {
      key: "_getCrossAxisLayoutSizeWithPaddingAndMargin",
      value: function _getCrossAxisLayoutSizeWithPaddingAndMargin() {
        return this._getCrossAxisLayoutSize() + this._getCrossAxisPadding() + this._getCrossAxisMargin();
      }
    }, {
      key: "_hasFixedCrossAxisSize",
      value: function _hasFixedCrossAxisSize() {
        return !FlexUtils.isZeroAxisSize(this.item, !this.ctr._horizontal);
      }
    }, {
      key: "_hasRelCrossAxisSize",
      value: function _hasRelCrossAxisSize() {
        return !!(this.ctr._horizontal ? this.item.funcH : this.item.funcW);
      }
    }, {
      key: "item",
      get: function get() {
        return this._item;
      }
    }, {
      key: "grow",
      get: function get() {
        return this._grow;
      },
      set: function set(t) {
        this._grow !== t && (this._grow = parseInt(t) || 0, this._changed());
      }
    }, {
      key: "shrink",
      get: function get() {
        return this._shrink === FlexItem.SHRINK_AUTO ? this._getDefaultShrink() : this._shrink;
      },
      set: function set(t) {
        this._shrink !== t && (this._shrink = parseInt(t) || 0, this._changed());
      }
    }, {
      key: "alignSelf",
      get: function get() {
        return this._alignSelf;
      },
      set: function set(t) {
        if (this._alignSelf !== t) {
          if (void 0 === t) this._alignSelf = void 0;else {
            if (-1 === FlexContainer.ALIGN_ITEMS.indexOf(t)) throw new Error("Unknown alignSelf, options: " + FlexContainer.ALIGN_ITEMS.join(","));
            this._alignSelf = t;
          }

          this._changed();
        }
      }
    }, {
      key: "minWidth",
      get: function get() {
        return this._minWidth;
      },
      set: function set(t) {
        this._minWidth = Math.max(0, t), this._item.changedDimensions(!0, !1);
      }
    }, {
      key: "minHeight",
      get: function get() {
        return this._minHeight;
      },
      set: function set(t) {
        this._minHeight = Math.max(0, t), this._item.changedDimensions(!1, !0);
      }
    }, {
      key: "maxWidth",
      get: function get() {
        return this._maxWidth;
      },
      set: function set(t) {
        this._maxWidth = Math.max(0, t), this._item.changedDimensions(!0, !1);
      }
    }, {
      key: "maxHeight",
      get: function get() {
        return this._maxHeight;
      },
      set: function set(t) {
        this._maxHeight = Math.max(0, t), this._item.changedDimensions(!1, !0);
      }
    }, {
      key: "margin",
      set: function set(t) {
        this.marginLeft = t, this.marginTop = t, this.marginRight = t, this.marginBottom = t;
      },
      get: function get() {
        return this.marginLeft;
      }
    }, {
      key: "marginLeft",
      set: function set(t) {
        this._marginLeft = t, this._changed();
      },
      get: function get() {
        return this._marginLeft;
      }
    }, {
      key: "marginTop",
      set: function set(t) {
        this._marginTop = t, this._changed();
      },
      get: function get() {
        return this._marginTop;
      }
    }, {
      key: "marginRight",
      set: function set(t) {
        this._marginRight = t, this._changed();
      },
      get: function get() {
        return this._marginRight;
      }
    }, {
      key: "marginBottom",
      set: function set(t) {
        this._marginBottom = t, this._changed();
      },
      get: function get() {
        return this._marginBottom;
      }
    }, {
      key: "ctr",
      set: function set(t) {
        this._ctr = t;
      },
      get: function get() {
        return this._ctr;
      }
    }]);

    return FlexItem;
  }();

  FlexItem.SHRINK_AUTO = -1;

  var FlexTarget =
  /*#__PURE__*/
  function () {
    function FlexTarget(t) {
      _classCallCheck(this, FlexTarget);

      this._target = t, this._recalc = 0, this._enabled = !1, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this._originalX = 0, this._originalY = 0, this._originalWidth = 0, this._originalHeight = 0, this._flex = null, this._flexItem = null, this._flexItemDisabled = !1, this._items = null;
    }

    _createClass(FlexTarget, [{
      key: "layoutFlexTree",
      value: function layoutFlexTree() {
        this.isFlexEnabled() && this.isChanged() && this.flexLayout.layoutTree();
      }
    }, {
      key: "_enableFlex",
      value: function _enableFlex() {
        this._flex = new FlexContainer(this), this._checkEnabled(), this.changedDimensions(), this._enableChildrenAsFlexItems();
      }
    }, {
      key: "_disableFlex",
      value: function _disableFlex() {
        this.changedDimensions(), this._flex = null, this._checkEnabled(), this._disableChildrenAsFlexItems();
      }
    }, {
      key: "_enableChildrenAsFlexItems",
      value: function _enableChildrenAsFlexItems() {
        var t = this._target._children;
        if (t) for (var _e12 = 0, i = t.length; _e12 < i; _e12++) {
          t[_e12].layout._enableFlexItem();
        }
      }
    }, {
      key: "_disableChildrenAsFlexItems",
      value: function _disableChildrenAsFlexItems() {
        var t = this._target._children;
        if (t) for (var _e13 = 0, i = t.length; _e13 < i; _e13++) {
          t[_e13].layout._disableFlexItem();
        }
      }
    }, {
      key: "_enableFlexItem",
      value: function _enableFlexItem() {
        this._ensureFlexItem();

        var t = this._target._parent._layout;
        this._flexItem.ctr = t._flex, t.changedContents(), this._checkEnabled();
      }
    }, {
      key: "_disableFlexItem",
      value: function _disableFlexItem() {
        this._flexItem && (this._flexItem.ctr = null), this._checkEnabled(), this._resetOffsets();
      }
    }, {
      key: "_resetOffsets",
      value: function _resetOffsets() {
        this.x = 0, this.y = 0;
      }
    }, {
      key: "_ensureFlexItem",
      value: function _ensureFlexItem() {
        this._flexItem || (this._flexItem = new FlexItem(this));
      }
    }, {
      key: "_checkEnabled",
      value: function _checkEnabled() {
        var t = this.isEnabled();
        this._enabled !== t && (t ? this._enable() : this._disable(), this._enabled = t);
      }
    }, {
      key: "_enable",
      value: function _enable() {
        this._setupTargetForFlex(), this._target.enableFlexLayout();
      }
    }, {
      key: "_disable",
      value: function _disable() {
        this._restoreTargetToNonFlex(), this._target.disableFlexLayout();
      }
    }, {
      key: "isEnabled",
      value: function isEnabled() {
        return this.isFlexEnabled() || this.isFlexItemEnabled();
      }
    }, {
      key: "isFlexEnabled",
      value: function isFlexEnabled() {
        return null !== this._flex;
      }
    }, {
      key: "isFlexItemEnabled",
      value: function isFlexItemEnabled() {
        return null !== this.flexParent;
      }
    }, {
      key: "_restoreTargetToNonFlex",
      value: function _restoreTargetToNonFlex() {
        var t = this._target;
        t.x = this._originalX, t.y = this._originalY, t.setDimensions(this._originalWidth, this._originalHeight);
      }
    }, {
      key: "_setupTargetForFlex",
      value: function _setupTargetForFlex() {
        var t = this._target;
        this._originalX = t._x, this._originalY = t._y, this._originalWidth = t._w, this._originalHeight = t._h;
      }
    }, {
      key: "setParent",
      value: function setParent(t, e) {
        t && t.isFlexContainer() && t._layout._changedChildren(), e && e.isFlexContainer() && (this._enableFlexItem(), e._layout._changedChildren()), this._checkEnabled();
      }
    }, {
      key: "setVisible",
      value: function setVisible(t) {
        var e = this.flexParent;
        e && e._changedChildren();
      }
    }, {
      key: "_getFlexItems",
      value: function _getFlexItems() {
        var t = [],
            e = this._target._children;
        if (e) for (var i = 0, s = e.length; i < s; i++) {
          var _s5 = e[i];
          _s5.visible && _s5.isFlexItem() && t.push(_s5.layout);
        }
        return t;
      }
    }, {
      key: "_changedChildren",
      value: function _changedChildren() {
        this._clearFlexItemsCache(), this.changedContents();
      }
    }, {
      key: "_clearFlexItemsCache",
      value: function _clearFlexItemsCache() {
        this._items = null;
      }
    }, {
      key: "setLayout",
      value: function setLayout(t, e, i, s) {
        var r = this._originalX,
            n = this._originalY;
        this.funcX && (r = this.funcX(FlexUtils.getParentAxisSizeWithPadding(this, !0))), this.funcY && (n = this.funcY(FlexUtils.getParentAxisSizeWithPadding(this, !1))), this.isFlexItemEnabled() ? this.target.setLayout(t + r, e + n, i, s) : this.target.setLayout(r, n, i, s);
      }
    }, {
      key: "changedDimensions",
      value: function changedDimensions() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;

        this._updateRecalc(t, e);
      }
    }, {
      key: "changedContents",
      value: function changedContents() {
        this._updateRecalc();
      }
    }, {
      key: "forceLayout",
      value: function forceLayout() {
        this._updateRecalc();
      }
    }, {
      key: "isChanged",
      value: function isChanged() {
        return this._recalc > 0;
      }
    }, {
      key: "_updateRecalc",
      value: function _updateRecalc() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

        if (this.isFlexEnabled()) {
          var _i6 = this._flex._layout;
          t = t || _i6.isAxisFitToContents(!0), e = e || _i6.isAxisFitToContents(!1);
        }

        var i = 1 + (t ? 2 : 0) + (e ? 4 : 0),
            s = this.getNewRecalcFlags(i);
        this._recalc |= i, s > 1 && this.flexParent ? this.flexParent._updateRecalcBottomUp(i) : this._target.triggerLayout();
      }
    }, {
      key: "getNewRecalcFlags",
      value: function getNewRecalcFlags(t) {
        return 7 - this._recalc & t;
      }
    }, {
      key: "_updateRecalcBottomUp",
      value: function _updateRecalcBottomUp(t) {
        var e = this._getRecalcFromChangedChildRecalc(t),
            i = this.getNewRecalcFlags(e);

        if (this._recalc |= e, i > 1) {
          var _t8 = this.flexParent;
          _t8 ? _t8._updateRecalcBottomUp(e) : this._target.triggerLayout();
        } else this._target.triggerLayout();
      }
    }, {
      key: "_getRecalcFromChangedChildRecalc",
      value: function _getRecalcFromChangedChildRecalc(t) {
        var e = this._flex._layout,
            i = e._horizontal ? 1 : 2,
            s = e._horizontal ? 2 : 1;

        if (!(t & s)) {
          if (t & i) {
            if (e.isWrapping()) {
              e.isCrossAxisFitToContents() && (t += s);
            }
          }
        }

        var r = e.isAxisFitToContents(!0),
            n = e.isAxisFitToContents(!1);
        return e.shrunk && (e._horizontal ? r = !0 : n = !0), t & 1 + (r ? 2 : 0) + (n ? 4 : 0);
      }
    }, {
      key: "clearRecalcFlag",
      value: function clearRecalcFlag() {
        this._recalc = 0;
      }
    }, {
      key: "enableLocalRecalcFlag",
      value: function enableLocalRecalcFlag() {
        this._recalc = 1;
      }
    }, {
      key: "setOriginalXWithoutUpdatingLayout",
      value: function setOriginalXWithoutUpdatingLayout(t) {
        this._originalX = t;
      }
    }, {
      key: "setOriginalYWithoutUpdatingLayout",
      value: function setOriginalYWithoutUpdatingLayout(t) {
        this._originalY = t;
      }
    }, {
      key: "flexLayout",
      get: function get() {
        return this.flex ? this.flex._layout : null;
      }
    }, {
      key: "target",
      get: function get() {
        return this._target;
      }
    }, {
      key: "flex",
      get: function get() {
        return this._flex;
      },
      set: function set(t) {
        t ? (this.isFlexEnabled() || this._enableFlex(), this._flex.patch(t)) : this.isFlexEnabled() && this._disableFlex();
      }
    }, {
      key: "flexItem",
      get: function get() {
        return !this._flexItemDisabled && (this._ensureFlexItem(), this._flexItem);
      },
      set: function set(t) {
        if (!1 === t) {
          if (!this._flexItemDisabled) {
            var _t9 = this.flexParent;
            this._flexItemDisabled = !0, this._checkEnabled(), _t9 && (_t9._clearFlexItemsCache(), _t9.changedContents());
          }
        } else if (this._ensureFlexItem(), this._flexItem.patch(t), this._flexItemDisabled) {
          this._flexItemDisabled = !1, this._checkEnabled();
          var _t10 = this.flexParent;
          _t10 && (_t10._clearFlexItemsCache(), _t10.changedContents());
        }
      }
    }, {
      key: "flexParent",
      get: function get() {
        if (this._flexItemDisabled) return null;
        var t = this._target._parent;
        return t && t.isFlexContainer() ? t._layout : null;
      }
    }, {
      key: "items",
      get: function get() {
        return this._items || (this._items = this._getFlexItems()), this._items;
      }
    }, {
      key: "recalc",
      get: function get() {
        return this._recalc;
      }
    }, {
      key: "originalX",
      get: function get() {
        return this._originalX;
      }
    }, {
      key: "originalY",
      get: function get() {
        return this._originalY;
      }
    }, {
      key: "originalWidth",
      get: function get() {
        return this._originalWidth;
      },
      set: function set(t) {
        this._originalWidth !== t && (this._originalWidth = t, this.changedDimensions(!0, !1));
      }
    }, {
      key: "originalHeight",
      get: function get() {
        return this._originalHeight;
      },
      set: function set(t) {
        this._originalHeight !== t && (this._originalHeight = t, this.changedDimensions(!1, !0));
      }
    }, {
      key: "funcX",
      get: function get() {
        return this._target.funcX;
      }
    }, {
      key: "funcY",
      get: function get() {
        return this._target.funcY;
      }
    }, {
      key: "funcW",
      get: function get() {
        return this._target.funcW;
      }
    }, {
      key: "funcH",
      get: function get() {
        return this._target.funcH;
      }
    }]);

    return FlexTarget;
  }();

  var TextureSource =
  /*#__PURE__*/
  function () {
    function TextureSource(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, TextureSource);

      this.id = TextureSource.id++, this.manager = t, this.stage = t.stage, this.textures = new Set(), this._activeTextureCount = 0, this.loader = e, this.lookupId = null, this._cancelCb = null, this.loadingSince = 0, this.w = 0, this.h = 0, this._nativeTexture = null, this.permanent = !1, this.renderInfo = null, this._isResultTexture = !this.loader, this._loadError = null, this._imageRef = null;
    }

    _createClass(TextureSource, [{
      key: "addTexture",
      value: function addTexture(t) {
        this.textures.has(t) || this.textures.add(t);
      }
    }, {
      key: "removeTexture",
      value: function removeTexture(t) {
        this.textures["delete"](t);
      }
    }, {
      key: "incActiveTextureCount",
      value: function incActiveTextureCount() {
        this._activeTextureCount++, 1 === this._activeTextureCount && this.becomesUsed();
      }
    }, {
      key: "decActiveTextureCount",
      value: function decActiveTextureCount() {
        this._activeTextureCount--, 0 === this._activeTextureCount && this.becomesUnused();
      }
    }, {
      key: "forEachEnabledElement",
      value: function forEachEnabledElement(t) {
        this.textures.forEach(function (e) {
          e.elements.forEach(t);
        });
      }
    }, {
      key: "hasEnabledElements",
      value: function hasEnabledElements() {
        return this.textures.size > 0;
      }
    }, {
      key: "forEachActiveElement",
      value: function forEachActiveElement(t) {
        this.textures.forEach(function (e) {
          e.elements.forEach(function (e) {
            e.active && t(e);
          });
        });
      }
    }, {
      key: "getRenderWidth",
      value: function getRenderWidth() {
        return this.w;
      }
    }, {
      key: "getRenderHeight",
      value: function getRenderHeight() {
        return this.h;
      }
    }, {
      key: "allowCleanup",
      value: function allowCleanup() {
        return !this.permanent && !this.isUsed();
      }
    }, {
      key: "becomesUsed",
      value: function becomesUsed() {
        this.load();
      }
    }, {
      key: "becomesUnused",
      value: function becomesUnused() {
        this.cancel();
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.isLoading() && (this._cancelCb && (this._cancelCb(this), this._cancelCb = null), this.loadingSince = 0);
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return !!this._nativeTexture;
      }
    }, {
      key: "isLoading",
      value: function isLoading() {
        return this.loadingSince > 0;
      }
    }, {
      key: "isError",
      value: function isError() {
        return !!this._loadError;
      }
    }, {
      key: "reload",
      value: function reload() {
        this.free(), this.isUsed() && this.load();
      }
    }, {
      key: "load",
      value: function load() {
        var _this = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        this.isResultTexture || this._nativeTexture || this.isLoading() || (this.loadingSince = new Date().getTime(), this._cancelCb = this.loader(function (e, i) {
          if (_this.isLoading()) {
            if (_this._cancelCb = null, _this.manager.stage.destroyed) return;
            if (e) _this.onError(e);else if (i && i.source) if (_this.stage.isUpdatingFrame() || t || !1 === i.throttle) _this.processLoadedSource(i);else {
              var _t11 = _this.stage.textureThrottler;
              _this._cancelCb = _t11.genericCancelCb, _t11.add(_this, i);
            }
          }
        }, this));
      }
    }, {
      key: "processLoadedSource",
      value: function processLoadedSource(t) {
        this.loadingSince = 0, this.setSource(t);
      }
    }, {
      key: "setSource",
      value: function setSource(t) {
        var e = t.source;
        this.w = e.width || t && t.w || 0, this.h = e.height || t && t.h || 0, t && t.renderInfo && (this.renderInfo = t.renderInfo), this.permanent = !!t.permanent, t && t.imageRef && (this._imageRef = t.imageRef), this._isNativeTexture(e) ? (this._nativeTexture = e, this.w = this.w || e.w, this.h = this.h || e.h, this.permanent = !t.hasOwnProperty("permanent") || t.permanent) : this.manager.uploadTextureSource(this, t), this._loadError = null, this.onLoad();
      }
    }, {
      key: "isUsed",
      value: function isUsed() {
        return this._activeTextureCount > 0;
      }
    }, {
      key: "onLoad",
      value: function onLoad() {
        this.isUsed() && this.textures.forEach(function (t) {
          t.onLoad();
        });
      }
    }, {
      key: "forceRenderUpdate",
      value: function forceRenderUpdate() {
        this._nativeTexture && (this._nativeTexture.update = this.stage.frameCounter), this.forEachActiveElement(function (t) {
          t.forceRenderUpdate();
        });
      }
    }, {
      key: "forceUpdateRenderCoords",
      value: function forceUpdateRenderCoords() {
        this.forEachActiveElement(function (t) {
          t._updateTextureCoords();
        });
      }
    }, {
      key: "clearNativeTexture",
      value: function clearNativeTexture() {
        this._nativeTexture = null, this._imageRef = null;
      }
    }, {
      key: "replaceNativeTexture",
      value: function replaceNativeTexture(t, e, i) {
        var s = this._nativeTexture;
        this._nativeTexture = t, this.w = e, this.h = i, !s && this._nativeTexture && this.forEachActiveElement(function (t) {
          return t.onTextureSourceLoaded();
        }), this._nativeTexture || this.forEachActiveElement(function (t) {
          return t._setDisplayedTexture(null);
        }), this.forEachEnabledElement(function (t) {
          return t._updateDimensions();
        });
      }
    }, {
      key: "onError",
      value: function onError(t) {
        this._loadError = t, this.loadingSince = 0, console.error("texture load error", t, this.lookupId), this.forEachActiveElement(function (e) {
          return e.onTextureSourceLoadError(t);
        });
      }
    }, {
      key: "free",
      value: function free() {
        this.isLoaded() && this.manager.freeTextureSource(this);
      }
    }, {
      key: "_isNativeTexture",
      value: function _isNativeTexture(t) {
        return Utils.isNode ? "WebGLTexture" === t.constructor.name : t instanceof WebGLTexture;
      }
    }, {
      key: "loadError",
      get: function get() {
        return this._loadError;
      }
    }, {
      key: "isResultTexture",
      get: function get() {
        return this._isResultTexture;
      },
      set: function set(t) {
        this._isResultTexture = t;
      }
    }, {
      key: "nativeTexture",
      get: function get() {
        return this._nativeTexture;
      }
    }]);

    return TextureSource;
  }();

  TextureSource.prototype.isTextureSource = !0, TextureSource.id = 1;

  var ElementTexturizer =
  /*#__PURE__*/
  function () {
    function ElementTexturizer(t) {
      _classCallCheck(this, ElementTexturizer);

      this._element = t.element, this._core = t, this.ctx = this._core.ctx, this._enabled = !1, this.lazy = !1, this._colorize = !1, this._renderTexture = null, this._renderTextureReused = !1, this._resultTextureSource = null, this._renderOffscreen = !1, this.empty = !1;
    }

    _createClass(ElementTexturizer, [{
      key: "_getTextureSource",
      value: function _getTextureSource() {
        return this._resultTextureSource || (this._resultTextureSource = new TextureSource(this._element.stage.textureManager), this.updateResultTexture()), this._resultTextureSource;
      }
    }, {
      key: "hasResultTexture",
      value: function hasResultTexture() {
        return !!this._resultTextureSource;
      }
    }, {
      key: "resultTextureInUse",
      value: function resultTextureInUse() {
        return this._resultTextureSource && this._resultTextureSource.hasEnabledElements();
      }
    }, {
      key: "updateResultTexture",
      value: function updateResultTexture() {
        var t = this.getResultTexture();

        if (this._resultTextureSource) {
          if (this._resultTextureSource.nativeTexture !== t) {
            var _e14 = t ? t.w : 0,
                i = t ? t.h : 0;

            this._resultTextureSource.replaceNativeTexture(t, _e14, i);
          }

          this._resultTextureSource.forEachEnabledElement(function (t) {
            t._updateDimensions(), t.core.setHasRenderUpdates(3);
          });
        }
      }
    }, {
      key: "mustRenderToTexture",
      value: function mustRenderToTexture() {
        return !(!this._enabled || this.lazy) || !!(this._enabled && this.lazy && this._core._hasRenderUpdates < 3);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this.release();
      }
    }, {
      key: "release",
      value: function release() {
        this.releaseRenderTexture();
      }
    }, {
      key: "releaseRenderTexture",
      value: function releaseRenderTexture() {
        this._renderTexture && (this._renderTextureReused || this.ctx.releaseRenderTexture(this._renderTexture), this._renderTexture = null, this._renderTextureReused = !1, this.updateResultTexture());
      }
    }, {
      key: "reuseTextureAsRenderTexture",
      value: function reuseTextureAsRenderTexture(t) {
        this._renderTexture !== t && (this.releaseRenderTexture(), this._renderTexture = t, this._renderTextureReused = !0);
      }
    }, {
      key: "hasRenderTexture",
      value: function hasRenderTexture() {
        return !!this._renderTexture;
      }
    }, {
      key: "getRenderTexture",
      value: function getRenderTexture() {
        return this._renderTexture || (this._renderTexture = this.ctx.allocateRenderTexture(this._core._w, this._core._h), this._renderTextureReused = !1), this._renderTexture;
      }
    }, {
      key: "getResultTexture",
      value: function getResultTexture() {
        return this._renderTexture;
      }
    }, {
      key: "enabled",
      get: function get() {
        return this._enabled;
      },
      set: function set(t) {
        this._enabled = t, this._core.updateRenderToTextureEnabled();
      }
    }, {
      key: "renderOffscreen",
      get: function get() {
        return this._renderOffscreen;
      },
      set: function set(t) {
        this._renderOffscreen = t, this._core.setHasRenderUpdates(1), this._core._setRecalc(6);
      }
    }, {
      key: "colorize",
      get: function get() {
        return this._colorize;
      },
      set: function set(t) {
        this._colorize !== t && (this._colorize = t, this._core.setHasRenderUpdates(1));
      }
    }, {
      key: "renderTextureReused",
      get: function get() {
        return this._renderTextureReused;
      }
    }]);

    return ElementTexturizer;
  }();

  var ElementCore =
  /*#__PURE__*/
  function () {
    function ElementCore(t) {
      _classCallCheck(this, ElementCore);

      this._element = t, this.ctx = t.stage.ctx, this._recalc = 0, this._parent = null, this._onUpdate = null, this._pRecalc = 0, this._worldContext = new ElementCoreContext(), this._hasUpdates = !1, this._localAlpha = 1, this._onAfterCalcs = null, this._onAfterUpdate = null, this._localPx = 0, this._localPy = 0, this._localTa = 1, this._localTb = 0, this._localTc = 0, this._localTd = 1, this._isComplex = !1, this._dimsUnknown = !1, this._clipping = !1, this._zSort = !1, this._outOfBounds = 0, this._displayedTextureSource = null, this._zContextUsage = 0, this._children = null, this._hasRenderUpdates = 0, this._zIndexedChildren = null, this._renderContext = this._worldContext, this.renderState = this.ctx.renderState, this._scissor = null, this._shaderOwner = null, this._updateTreeOrder = 0, this._colorUl = this._colorUr = this._colorBl = this._colorBr = 4294967295, this._x = 0, this._y = 0, this._w = 0, this._h = 0, this._optFlags = 0, this._funcX = null, this._funcY = null, this._funcW = null, this._funcH = null, this._scaleX = 1, this._scaleY = 1, this._pivotX = .5, this._pivotY = .5, this._mountX = 0, this._mountY = 0, this._rotation = 0, this._alpha = 1, this._visible = !0, this._ulx = 0, this._uly = 0, this._brx = 1, this._bry = 1, this._zIndex = 0, this._forceZIndexContext = !1, this._zParent = null, this._isRoot = !1, this._zIndexResort = !1, this._shader = null, this._renderToTextureEnabled = !1, this._texturizer = null, this._useRenderToTexture = !1, this._boundsMargin = null, this._recBoundsMargin = null, this._withinBoundsMargin = !1, this._viewport = null, this._clipbox = !0, this.render = this._renderSimple, this._layout = null;
    }

    _createClass(ElementCore, [{
      key: "_disableFuncX",
      value: function _disableFuncX() {
        this._optFlags = 65534 & this._optFlags, this._funcX = null;
      }
    }, {
      key: "_disableFuncY",
      value: function _disableFuncY() {
        this._optFlags = 65533 & this._optFlags, this._funcY = null;
      }
    }, {
      key: "disableFuncW",
      value: function disableFuncW() {
        this._optFlags = 65531 & this._optFlags, this._funcW = null;
      }
    }, {
      key: "disableFuncH",
      value: function disableFuncH() {
        this._optFlags = 65527 & this._optFlags, this._funcH = null;
      }
    }, {
      key: "getRenderWidth",
      value: function getRenderWidth() {
        return this.hasFlexLayout() ? this._layout.originalWidth : this._w;
      }
    }, {
      key: "getRenderHeight",
      value: function getRenderHeight() {
        return this.hasFlexLayout() ? this._layout.originalHeight : this._h;
      }
    }, {
      key: "_updateLocalTransform",
      value: function _updateLocalTransform() {
        if (0 !== this._rotation && this._rotation % (2 * Math.PI)) {
          var _t12 = Math.sin(this._rotation),
              _e15 = Math.cos(this._rotation);

          this._setLocalTransform(_e15 * this._scaleX, -_t12 * this._scaleY, _t12 * this._scaleX, _e15 * this._scaleY);
        } else this._setLocalTransform(this._scaleX, 0, 0, this._scaleY);

        this._updateLocalTranslate();
      }
    }, {
      key: "_updateLocalTranslate",
      value: function _updateLocalTranslate() {
        this._recalcLocalTranslate(), this._triggerRecalcTranslate();
      }
    }, {
      key: "_recalcLocalTranslate",
      value: function _recalcLocalTranslate() {
        var t = this._pivotX * this._w,
            e = this._pivotY * this._h,
            i = this._x - (t * this._localTa + e * this._localTb) + t,
            s = this._y - (t * this._localTc + e * this._localTd) + e;
        i -= this._mountX * this._w, s -= this._mountY * this._h, this._localPx = i, this._localPy = s;
      }
    }, {
      key: "_updateLocalTranslateDelta",
      value: function _updateLocalTranslateDelta(t, e) {
        this._addLocalTranslate(t, e);
      }
    }, {
      key: "_updateLocalAlpha",
      value: function _updateLocalAlpha() {
        this._setLocalAlpha(this._visible ? this._alpha : 0);
      }
    }, {
      key: "setHasRenderUpdates",
      value: function setHasRenderUpdates(t) {
        if (this._worldContext.alpha) {
          var _e16 = this;

          for (_e16._hasRenderUpdates = Math.max(t, _e16._hasRenderUpdates); (_e16 = _e16._parent) && 3 !== _e16._hasRenderUpdates;) {
            _e16._hasRenderUpdates = 3;
          }
        }
      }
    }, {
      key: "_setRecalc",
      value: function _setRecalc(t) {
        this._recalc |= t, this._setHasUpdates(), this._parent && this._parent.setHasRenderUpdates(3);
      }
    }, {
      key: "_setHasUpdates",
      value: function _setHasUpdates() {
        var t = this;

        for (; t && !t._hasUpdates;) {
          t._hasUpdates = !0, t = t._parent;
        }
      }
    }, {
      key: "getParent",
      value: function getParent() {
        return this._parent;
      }
    }, {
      key: "setParent",
      value: function setParent(t) {
        if (t !== this._parent) {
          var _e17 = this.isZContext(),
              i = this._parent;

          if (this._parent = t, (this._layout || t && t.isFlexContainer()) && this.layout.setParent(i, t), i && i.setHasRenderUpdates(3), this._setRecalc(7), this._parent && this._parent._setHasUpdates(), 0 === this._zIndex ? this.setZParent(t) : this.setZParent(t ? t.findZContext() : null), _e17 !== this.isZContext() && (this.isZContext() ? this.enableZContext(i.findZContext()) : this.disableZContext()), this._zIndexResort = !0, this._zParent && this._zParent.enableZSort(), !this._shader) {
            var _e18 = t && !t._renderToTextureEnabled ? t._shaderOwner : null;

            _e18 !== this._shaderOwner && (this.setHasRenderUpdates(1), this._setShaderOwnerRecursive(_e18));
          }
        }
      }
    }, {
      key: "enableZSort",
      value: function enableZSort() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        !this._zSort && this._zContextUsage > 0 && (this._zSort = !0, t && this.ctx.forceZSort(this));
      }
    }, {
      key: "addChildAt",
      value: function addChildAt(t, e) {
        this._children || (this._children = []), this._children.splice(t, 0, e), e.setParent(this);
      }
    }, {
      key: "setChildAt",
      value: function setChildAt(t, e) {
        this._children || (this._children = []), this._children[t].setParent(null), this._children[t] = e, e.setParent(this);
      }
    }, {
      key: "removeChildAt",
      value: function removeChildAt(t) {
        var e = this._children[t];
        this._children.splice(t, 1), e.setParent(null);
      }
    }, {
      key: "removeChildren",
      value: function removeChildren() {
        if (this._children) {
          for (var _t13 = 0, _e19 = this._children.length; _t13 < _e19; _t13++) {
            this._children[_t13].setParent(null);
          }

          this._children.splice(0), this._zIndexedChildren && this._zIndexedChildren.splice(0);
        }
      }
    }, {
      key: "syncChildren",
      value: function syncChildren(t, e, i) {
        this._children = i;

        for (var _e20 = 0, _i7 = t.length; _e20 < _i7; _e20++) {
          t[_e20].setParent(null);
        }

        for (var _t14 = 0, _i8 = e.length; _t14 < _i8; _t14++) {
          e[_t14].setParent(this);
        }
      }
    }, {
      key: "moveChild",
      value: function moveChild(t, e) {
        var i = this._children[t];
        this._children.splice(t, 1), this._children.splice(e, 0, i), this._zIndexResort = !0, this._zParent && this._zParent.enableZSort();
      }
    }, {
      key: "_setLocalTransform",
      value: function _setLocalTransform(t, e, i, s) {
        this._setRecalc(4), this._localTa = t, this._localTb = e, this._localTc = i, this._localTd = s, this._isComplex = 0 !== e || 0 !== i || t < 0 || s < 0;
      }
    }, {
      key: "_addLocalTranslate",
      value: function _addLocalTranslate(t, e) {
        this._localPx += t, this._localPy += e, this._triggerRecalcTranslate();
      }
    }, {
      key: "_setLocalAlpha",
      value: function _setLocalAlpha(t) {
        !this._worldContext.alpha && this._parent && this._parent._worldContext.alpha && t ? this._setRecalc(129) : this._setRecalc(1), t < 1e-14 && (t = 0), this._localAlpha = t;
      }
    }, {
      key: "setDimensions",
      value: function setDimensions(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._dimsUnknown;
        if (this._dimsUnknown = i, this.hasFlexLayout()) this._layout.originalWidth = t, this._layout.originalHeight = e;else if (this._w !== t || this._h !== e) return this._updateDimensions(t, e), !0;
        return !1;
      }
    }, {
      key: "_updateDimensions",
      value: function _updateDimensions(t, e) {
        this._w === t && this._h === e || (this._w = t, this._h = e, this._triggerRecalcTranslate(), this._texturizer && (this._texturizer.releaseRenderTexture(), this._texturizer.updateResultTexture()), this._updateLocalTranslate());
      }
    }, {
      key: "setTextureCoords",
      value: function setTextureCoords(t, e, i, s) {
        this.setHasRenderUpdates(3), this._ulx = t, this._uly = e, this._brx = i, this._bry = s;
      }
    }, {
      key: "setDisplayedTextureSource",
      value: function setDisplayedTextureSource(t) {
        this.setHasRenderUpdates(3), this._displayedTextureSource = t;
      }
    }, {
      key: "setAsRoot",
      value: function setAsRoot() {
        this._parent = new ElementCore(this._element), this._parent._hasRenderUpdates = 3, this._parent._hasUpdates = !0, this._isRoot = !0, this.ctx.root = this, this._parent._viewport = [0, 0, this.ctx.stage.coordsWidth, this.ctx.stage.coordsHeight], this._parent._scissor = this._parent._viewport, this._parent._recBoundsMargin = null, this._setRecalc(7);
      }
    }, {
      key: "isAncestorOf",
      value: function isAncestorOf(t) {
        var e = t;

        for (; e = e._parent;) {
          if (this === e) return !0;
        }

        return !1;
      }
    }, {
      key: "isZContext",
      value: function isZContext() {
        return this._forceZIndexContext || this._renderToTextureEnabled || 0 !== this._zIndex || this._isRoot || !this._parent;
      }
    }, {
      key: "findZContext",
      value: function findZContext() {
        return this.isZContext() ? this : this._parent.findZContext();
      }
    }, {
      key: "setZParent",
      value: function setZParent(t) {
        if (this._zParent !== t) {
          if (null !== this._zParent && (0 !== this._zIndex && this._zParent.decZContextUsage(), this._zParent.enableZSort()), null !== t) {
            var _e21 = t._zContextUsage > 0;

            0 !== this._zIndex && t.incZContextUsage(), t._zContextUsage > 0 && ((_e21 || this._parent !== t) && t._zIndexedChildren.push(this), t.enableZSort());
          }

          this._zParent = t, this._zIndexResort = !0;
        }
      }
    }, {
      key: "incZContextUsage",
      value: function incZContextUsage() {
        if (this._zContextUsage++, 1 === this._zContextUsage && (this._zIndexedChildren || (this._zIndexedChildren = []), this._children)) {
          for (var _t15 = 0, _e22 = this._children.length; _t15 < _e22; _t15++) {
            this._zIndexedChildren.push(this._children[_t15]);
          }

          this._zSort = !1;
        }
      }
    }, {
      key: "decZContextUsage",
      value: function decZContextUsage() {
        this._zContextUsage--, 0 === this._zContextUsage && (this._zSort = !1, this._zIndexedChildren.splice(0));
      }
    }, {
      key: "enableZContext",
      value: function enableZContext(t) {
        var _this2 = this;

        if (t && t._zContextUsage > 0) {
          this._getZIndexedDescs().forEach(function (t) {
            _this2.isAncestorOf(t) && 0 !== t._zIndex && t.setZParent(_this2);
          });
        }
      }
    }, {
      key: "_getZIndexedDescs",
      value: function _getZIndexedDescs() {
        var t = [];
        if (this._children) for (var _e23 = 0, i = this._children.length; _e23 < i; _e23++) {
          this._children[_e23]._getZIndexedDescsRec(t);
        }
        return t;
      }
    }, {
      key: "_getZIndexedDescsRec",
      value: function _getZIndexedDescsRec(t) {
        if (this._zIndex) t.push(this);else if (this._children && !this.isZContext()) for (var _e24 = 0, i = this._children.length; _e24 < i; _e24++) {
          this._children[_e24]._getZIndexedDescsRec(t);
        }
      }
    }, {
      key: "disableZContext",
      value: function disableZContext() {
        if (this._zContextUsage > 0) {
          var _t16 = this._parent.findZContext();

          this._zSort && this.sortZIndexedChildren(), this._zIndexedChildren.slice().forEach(function (e) {
            0 !== e._zIndex && e.setZParent(_t16);
          });
        }
      }
    }, {
      key: "_setShaderOwnerRecursive",
      value: function _setShaderOwnerRecursive(t) {
        if (this._shaderOwner = t, this._children && !this._renderToTextureEnabled) for (var _e25 = 0, i = this._children.length; _e25 < i; _e25++) {
          var _i9 = this._children[_e25];
          _i9._shader || (_i9._setShaderOwnerRecursive(t), _i9._hasRenderUpdates = 3);
        }
      }
    }, {
      key: "_setShaderOwnerChildrenRecursive",
      value: function _setShaderOwnerChildrenRecursive(t) {
        if (this._children) for (var _e26 = 0, i = this._children.length; _e26 < i; _e26++) {
          var _i10 = this._children[_e26];
          _i10._shader || (_i10._setShaderOwnerRecursive(t), _i10._hasRenderUpdates = 3);
        }
      }
    }, {
      key: "_hasRenderContext",
      value: function _hasRenderContext() {
        return this._renderContext !== this._worldContext;
      }
    }, {
      key: "updateRenderToTextureEnabled",
      value: function updateRenderToTextureEnabled() {
        this.texturizer._enabled ? this._enableRenderToTexture() : (this._disableRenderToTexture(), this._texturizer.releaseRenderTexture());
      }
    }, {
      key: "_enableRenderToTexture",
      value: function _enableRenderToTexture() {
        if (!this._renderToTextureEnabled) {
          var _t17 = this.isZContext();

          this._renderToTextureEnabled = !0, this._renderContext = new ElementCoreContext(), this._setShaderOwnerChildrenRecursive(null), _t17 || this.enableZContext(this._parent ? this._parent.findZContext() : null), this.setHasRenderUpdates(3), this._setRecalc(7), this.render = this._renderAdvanced;
        }
      }
    }, {
      key: "_disableRenderToTexture",
      value: function _disableRenderToTexture() {
        this._renderToTextureEnabled && (this._renderToTextureEnabled = !1, this._setShaderOwnerChildrenRecursive(this._shaderOwner), this._renderContext = this._worldContext, this.isZContext() || this.disableZContext(), this._setRecalc(7), this.setHasRenderUpdates(3), this.render = this._renderSimple);
      }
    }, {
      key: "isWhite",
      value: function isWhite() {
        return 4294967295 === this._colorUl && 4294967295 === this._colorUr && 4294967295 === this._colorBl && 4294967295 === this._colorBr;
      }
    }, {
      key: "hasSimpleTexCoords",
      value: function hasSimpleTexCoords() {
        return 0 === this._ulx && 0 === this._uly && 1 === this._brx && 1 === this._bry;
      }
    }, {
      key: "_stashTexCoords",
      value: function _stashTexCoords() {
        this._stashedTexCoords = [this._ulx, this._uly, this._brx, this._bry], this._ulx = 0, this._uly = 0, this._brx = 1, this._bry = 1;
      }
    }, {
      key: "_unstashTexCoords",
      value: function _unstashTexCoords() {
        this._ulx = this._stashedTexCoords[0], this._uly = this._stashedTexCoords[1], this._brx = this._stashedTexCoords[2], this._bry = this._stashedTexCoords[3], this._stashedTexCoords = null;
      }
    }, {
      key: "_stashColors",
      value: function _stashColors() {
        this._stashedColors = [this._colorUl, this._colorUr, this._colorBr, this._colorBl], this._colorUl = 4294967295, this._colorUr = 4294967295, this._colorBr = 4294967295, this._colorBl = 4294967295;
      }
    }, {
      key: "_unstashColors",
      value: function _unstashColors() {
        this._colorUl = this._stashedColors[0], this._colorUr = this._stashedColors[1], this._colorBr = this._stashedColors[2], this._colorBl = this._stashedColors[3], this._stashedColors = null;
      }
    }, {
      key: "isVisible",
      value: function isVisible() {
        return this._localAlpha > 1e-14;
      }
    }, {
      key: "update",
      value: function update() {
        this._recalc |= this._parent._pRecalc, this._layout && this._layout.isEnabled() ? 256 & this._recalc && this._layout.layoutFlexTree() : 2 & this._recalc && this._optFlags && this._applyRelativeDimFuncs(), this._onUpdate && (this._hasUpdates = !0, this._onUpdate(this.element, this));
        var t = this._parent._worldContext;
        var e = this._worldContext;
        var i = t.alpha && this._localAlpha;

        if (this._hasUpdates || this._recalc && i || e.alpha && !i) {
          var s = this._recalc;
          1 & s && (!e.alpha && i && (this._hasRenderUpdates = 3), e.alpha = t.alpha * this._localAlpha, e.alpha < 1e-14 && (e.alpha = 0)), 6 & s && (e.px = t.px + this._localPx * t.ta, e.py = t.py + this._localPy * t.td, 0 !== t.tb && (e.px += this._localPy * t.tb), 0 !== t.tc && (e.py += this._localPx * t.tc)), 4 & s && (e.ta = this._localTa * t.ta, e.tb = this._localTd * t.tb, e.tc = this._localTa * t.tc, e.td = this._localTd * t.td, this._isComplex && (e.ta += this._localTc * t.tb, e.tb += this._localTb * t.ta, e.tc += this._localTc * t.td, e.td += this._localTb * t.tc));
          var r = this._parent._renderContext;

          if (this._parent._hasRenderContext()) {
            var _t18 = this._renderContext === this._worldContext;

            _t18 && (this._renderContext = new ElementCoreContext());
            var _e27 = this._renderContext;
            (_t18 || 1 & s) && (_e27.alpha = r.alpha * this._localAlpha, _e27.alpha < 1e-14 && (_e27.alpha = 0)), (_t18 || 6 & s) && (_e27.px = r.px + this._localPx * r.ta, _e27.py = r.py + this._localPy * r.td, 0 !== r.tb && (_e27.px += this._localPy * r.tb), 0 !== r.tc && (_e27.py += this._localPx * r.tc)), _t18 && (s |= 2), (_t18 || 4 & s) && (_e27.ta = this._localTa * r.ta, _e27.tb = this._localTd * r.tb, _e27.tc = this._localTa * r.tc, _e27.td = this._localTd * r.td, this._isComplex && (_e27.ta += this._localTc * r.tb, _e27.tb += this._localTb * r.ta, _e27.tc += this._localTc * r.td, _e27.td += this._localTb * r.tc));
          } else this._renderContext = this._worldContext;

          -1 === this.ctx.updateTreeOrder ? this.ctx.updateTreeOrder = this._updateTreeOrder + 1 : this._updateTreeOrder = this.ctx.updateTreeOrder++;

          var n = this._renderToTextureEnabled && this._texturizer.mustRenderToTexture();

          this._useRenderToTexture !== n && (this._recalc |= 6, s |= 2, this._useRenderToTexture || this._texturizer.release()), this._useRenderToTexture = n;
          var o = this._renderContext,
              a = this._dimsUnknown ? 2048 : this._w,
              h = this._dimsUnknown ? 2048 : this._h;

          var l, _, u, c;

          var d = 0 !== o.tb || 0 !== o.tc || o.ta < 0 || o.td < 0;

          if (d ? (l = Math.min(0, a * o.ta, a * o.ta + h * o.tb, h * o.tb) + o.px, u = Math.max(0, a * o.ta, a * o.ta + h * o.tb, h * o.tb) + o.px, _ = Math.min(0, a * o.tc, a * o.tc + h * o.td, h * o.td) + o.py, c = Math.max(0, a * o.tc, a * o.tc + h * o.td, h * o.td) + o.py) : (l = o.px, u = o.px + o.ta * a, _ = o.py, c = o.py + o.td * h), this._dimsUnknown && (d || this._localTa < 1 || this._localTb < 1)) {
            var _t19 = this._x * r.ta + this._y * r.tb + r.px,
                _e28 = this._x * r.tc + this._y * r.td + r.py;

            _t19 < l && (l = _t19), _e28 < _ && (_ = _e28), _t19 > u && (u = _t19), _e28 > c && (c = _e28);
          }

          if (6 & s || !this._scissor) if (this._clipping && o.isSquare()) {
            var _t20 = this._parent._useRenderToTexture ? this._parent._viewport : this._parent._scissor;

            if (_t20) {
              var _e29 = Math.max(_t20[0], l),
                  _i11 = Math.max(_t20[1], _);

              this._scissor = [_e29, _i11, Math.min(_t20[2] + _t20[0], u) - _e29, Math.min(_t20[3] + _t20[1], c) - _i11];
            } else this._scissor = [l, _, u - l, c - _];
          } else this._scissor = this._parent._useRenderToTexture ? this._parent._viewport : this._parent._scissor;

          if (this._boundsMargin ? this._recBoundsMargin = this._boundsMargin : this._recBoundsMargin = this._parent._recBoundsMargin, this._onAfterCalcs && this._onAfterCalcs(this.element) && (d ? (l = Math.min(0, a * o.ta, a * o.ta + h * o.tb, h * o.tb) + o.px, u = Math.max(0, a * o.ta, a * o.ta + h * o.tb, h * o.tb) + o.px, _ = Math.min(0, a * o.tc, a * o.tc + h * o.td, h * o.td) + o.py, c = Math.max(0, a * o.tc, a * o.tc + h * o.td, h * o.td) + o.py) : (l = o.px, u = o.px + o.ta * a, _ = o.py, c = o.py + o.td * h), this._dimsUnknown && (d || this._localTa < 1 || this._localTb < 1))) {
            var _t21 = this._x * r.ta + this._y * r.tb + r.px,
                _e30 = this._x * r.tc + this._y * r.td + r.py;

            _t21 < l && (l = _t21), _e30 < _ && (_ = _e30), _t21 > u && (u = _t21), _e30 > c && (c = _e30);
          }

          if (2 === this._parent._outOfBounds) this._outOfBounds = 2, this._withinBoundsMargin && (this._withinBoundsMargin = !1, this.element._disableWithinBoundsMargin());else if (6 & s) {
            this._outOfBounds = 0;

            var _t22 = !0;

            if (this._renderToTextureEnabled && this._texturizer && this._texturizer.renderOffscreen || (this._scissor && (this._scissor[2] <= 0 || this._scissor[3] <= 0) ? this._outOfBounds = 2 : ((this._scissor[0] > u || this._scissor[1] > c || l > this._scissor[0] + this._scissor[2] || _ > this._scissor[1] + this._scissor[3]) && (this._outOfBounds = 1), this._outOfBounds && (this._clipping || this._useRenderToTexture || this._clipbox && a && h) && (this._outOfBounds = 2)), (_t22 = 0 === this._outOfBounds) || (_t22 = this._recBoundsMargin ? !(u < this._scissor[0] - this._recBoundsMargin[2] || c < this._scissor[1] - this._recBoundsMargin[3] || l > this._scissor[0] + this._scissor[2] + this._recBoundsMargin[0] || _ > this._scissor[1] + this._scissor[3] + this._recBoundsMargin[1]) : !(u < this._scissor[0] - 100 || c < this._scissor[1] - 100 || l > this._scissor[0] + this._scissor[2] + 100 || _ > this._scissor[1] + this._scissor[3] + 100)) && 2 === this._outOfBounds && (this._outOfBounds = 1)), this._withinBoundsMargin !== _t22) if (this._withinBoundsMargin = _t22, this._withinBoundsMargin) {
              this._hasUpdates = !0;
              var _t23 = this._recalc;
              if (this._recalc = 0, this.element._enableWithinBoundsMargin(), this._recalc) return this.update();
              this._recalc = _t23;
            } else this.element._disableWithinBoundsMargin();
          }

          if (this._useRenderToTexture && (this._viewport ? (this._viewport[2] = a, this._viewport[3] = h) : this._viewport = [0, 0, a, h]), this._pRecalc = 135 & this._recalc, this._recalc = 0, this._hasUpdates = !1, this._outOfBounds < 2) {
            if (this._useRenderToTexture && (this._worldContext.isIdentity() ? this._renderContext = this._worldContext : this._renderContext = ElementCoreContext.IDENTITY), this._children) for (var _t24 = 0, _e31 = this._children.length; _t24 < _e31; _t24++) {
              this._children[_t24].update();
            }
            this._useRenderToTexture && (this._renderContext = o);
          } else if (this._children) for (var _t25 = 0, _e32 = this._children.length; _t25 < _e32; _t25++) {
            this._children[_t25]._hasUpdates ? this._children[_t25].update() : (this._children[_t25]._recalc |= this._pRecalc, this._children[_t25].updateOutOfBounds());
          }

          this._onAfterUpdate && this._onAfterUpdate(this.element);
        } else -1 === this.ctx.updateTreeOrder || this._updateTreeOrder >= this.ctx.updateTreeOrder ? this.ctx.updateTreeOrder = -1 : this.updateTreeOrder();
      }
    }, {
      key: "_applyRelativeDimFuncs",
      value: function _applyRelativeDimFuncs() {
        if (1 & this._optFlags) {
          var _t26 = this._funcX(this._parent.w);

          _t26 !== this._x && (this._localPx += _t26 - this._x, this._x = _t26);
        }

        if (2 & this._optFlags) {
          var _t27 = this._funcY(this._parent.h);

          _t27 !== this._y && (this._localPy += _t27 - this._y, this._y = _t27);
        }

        var t = !1;

        if (4 & this._optFlags) {
          var _e33 = this._funcW(this._parent.w);

          _e33 !== this._w && (this._w = _e33, t = !0);
        }

        if (8 & this._optFlags) {
          var _e34 = this._funcH(this._parent.h);

          _e34 !== this._h && (this._h = _e34, t = !0);
        }

        t && (this._recalcLocalTranslate(), this.element.onDimensionsChanged(this._w, this._h));
      }
    }, {
      key: "updateOutOfBounds",
      value: function updateOutOfBounds() {
        if (2 !== this._outOfBounds && this._renderContext.alpha > 0 && (this._outOfBounds = 2, this._withinBoundsMargin && (this._withinBoundsMargin = !1, this.element._disableWithinBoundsMargin()), this._children)) for (var _t28 = 0, _e35 = this._children.length; _t28 < _e35; _t28++) {
          this._children[_t28].updateOutOfBounds();
        }
      }
    }, {
      key: "updateTreeOrder",
      value: function updateTreeOrder() {
        if (this._localAlpha && 2 !== this._outOfBounds && (this._updateTreeOrder = this.ctx.updateTreeOrder++, this._children)) for (var _t29 = 0, _e36 = this._children.length; _t29 < _e36; _t29++) {
          this._children[_t29].updateTreeOrder();
        }
      }
    }, {
      key: "_renderSimple",
      value: function _renderSimple() {
        if (this._hasRenderUpdates = 0, this._zSort && this.sortZIndexedChildren(), this._outOfBounds < 2 && this._renderContext.alpha) {
          var _t30 = this.renderState;
          if (0 === this._outOfBounds && this._displayedTextureSource && (_t30.setShader(this.activeShader, this._shaderOwner), _t30.setScissor(this._scissor), this.renderState.addQuad(this)), this._children) if (this._zContextUsage) for (var _t31 = 0, _e37 = this._zIndexedChildren.length; _t31 < _e37; _t31++) {
            this._zIndexedChildren[_t31].render();
          } else for (var _t32 = 0, _e38 = this._children.length; _t32 < _e38; _t32++) {
            0 === this._children[_t32]._zIndex && this._children[_t32].render();
          }
        }
      }
    }, {
      key: "_renderAdvanced",
      value: function _renderAdvanced() {
        var t = this._hasRenderUpdates;

        if (this._hasRenderUpdates = 0, this._zSort && this.sortZIndexedChildren(), this._outOfBounds < 2 && this._renderContext.alpha) {
          var _e39,
              i,
              s = this.renderState,
              r = !0;

          if (this._useRenderToTexture) {
            if (0 === this._w || 0 === this._h) return;

            if (!this._texturizer.hasRenderTexture() || t >= 3) {
              if (s.setShader(s.defaultShader, this), i = s.renderTextureInfo, _e39 = {
                nativeTexture: null,
                offset: 0,
                w: this._w,
                h: this._h,
                empty: !0,
                cleared: !1,
                ignore: !1,
                cache: !1
              }, (this._texturizer.hasResultTexture() || !s.isCachingTexturizer && t < 3) && (_e39.cache = !0, s.isCachingTexturizer = !0), this._texturizer.hasResultTexture() || this._texturizer.releaseRenderTexture(), s.setRenderTextureInfo(_e39), s.setScissor(null), this._displayedTextureSource) {
                var _t33 = this._renderContext;
                this._renderContext = ElementCoreContext.IDENTITY, this.renderState.addQuad(this), this._renderContext = _t33;
              }
            } else r = !1;
          } else 0 === this._outOfBounds && this._displayedTextureSource && (s.setShader(this.activeShader, this._shaderOwner), s.setScissor(this._scissor), this.renderState.addQuad(this));

          if (r && this._children) if (this._zContextUsage) for (var _t34 = 0, _e40 = this._zIndexedChildren.length; _t34 < _e40; _t34++) {
            this._zIndexedChildren[_t34].render();
          } else for (var _t35 = 0, _e41 = this._children.length; _t35 < _e41; _t35++) {
            0 === this._children[_t35]._zIndex && this._children[_t35].render();
          }

          if (this._useRenderToTexture) {
            var _t36 = !1;

            if (r && (s.finishedRenderTexture(), this._texturizer.empty = _e39.empty, _e39.empty ? this._texturizer.releaseRenderTexture() : _e39.nativeTexture ? (this._texturizer.reuseTextureAsRenderTexture(_e39.nativeTexture), _e39.ignore = !0) : (this._texturizer.renderTextureReused && this._texturizer.releaseRenderTexture(), _e39.nativeTexture = this._texturizer.getRenderTexture()), s.setRenderTextureInfo(i), _t36 = !0), !this._texturizer.empty) {
              var _i12 = this._texturizer.getResultTexture();

              if (_t36 && (_i12 && (_i12.update = s.stage.frameCounter), this._texturizer.updateResultTexture()), !this._texturizer.renderOffscreen) {
                s.setShader(this.activeShader, this._shaderOwner), s.setScissor(this._scissor);

                var _t37 = !_e39 || _e39.cache;

                s.setTexturizer(this._texturizer, _t37), this._stashTexCoords(), this._texturizer.colorize || this._stashColors(), this.renderState.addQuad(this, !0), this._texturizer.colorize || this._unstashColors(), this._unstashTexCoords(), s.setTexturizer(null);
              }
            }
          }

          _e39 && _e39.cache && (s.isCachingTexturizer = !1);
        }
      }
    }, {
      key: "sortZIndexedChildren",
      value: function sortZIndexedChildren() {
        var t = this._zIndexedChildren.length;
        var e = 0;
        var i = this._zIndexedChildren,
            s = [];

        for (var _r3 = 0; _r3 < t; _r3++) {
          i[_r3]._zParent === this && (i[_r3]._zIndexResort ? s.push(i[_r3]) : (e !== _r3 && (i[e] = i[_r3]), e++));
        }

        var r = s.length;

        if (r) {
          for (var _t39 = 0; _t39 < r; _t39++) {
            s[_t39]._zIndexResort = !1;
          }

          s.sort(ElementCore.sortZIndexedChildren);
          var _t38 = e;

          if (_t38) {
            e = 0;
            var n = 0,
                o = 0;
            var a = [];

            for (;;) {
              var h = (i[n]._zIndex === s[o]._zIndex ? i[n]._updateTreeOrder - s[o]._updateTreeOrder : i[n]._zIndex - s[o]._zIndex) > 0 ? s[o++] : i[n++];

              if (0 !== e && a[e - 1] === h || (a[e++] = h), n >= _t38) {
                do {
                  var _t40 = s[o++];
                  0 !== e && a[e - 1] === _t40 || (a[e++] = _t40);
                } while (o < r);

                break;
              }

              if (o >= r) {
                do {
                  var _t41 = i[n++];
                  0 !== e && a[e - 1] === _t41 || (a[e++] = _t41);
                } while (n < _t38);

                break;
              }
            }

            this._zIndexedChildren = a;
          } else {
            e = 0;
            var _t42 = 0;

            do {
              i[e++] = s[_t42++];
            } while (_t42 < r);

            i.length > e && i.splice(e);
          }
        } else i.length > e && i.splice(e);

        this._zSort = !1;
      }
    }, {
      key: "getCornerPoints",
      value: function getCornerPoints() {
        var t = this._worldContext;
        return [t.px, t.py, t.px + this._w * t.ta, t.py + this._w * t.tc, t.px + this._w * t.ta + this._h * t.tb, t.py + this._w * t.tc + this._h * t.td, t.px + this._h * t.tb, t.py + this._h * t.td];
      }
    }, {
      key: "getRenderTextureCoords",
      value: function getRenderTextureCoords(t, e) {
        var i = this._renderContext;
        return [i.px + i.ta * t + i.tb * e, i.py + i.tc * t + i.td * e];
      }
    }, {
      key: "getAbsoluteCoords",
      value: function getAbsoluteCoords(t, e) {
        var i = this._renderContext;
        return [i.px + i.ta * t + i.tb * e, i.py + i.tc * t + i.td * e];
      }
    }, {
      key: "isFlexItem",
      value: function isFlexItem() {
        return !!this._layout && this._layout.isFlexItemEnabled();
      }
    }, {
      key: "isFlexContainer",
      value: function isFlexContainer() {
        return !!this._layout && this._layout.isFlexEnabled();
      }
    }, {
      key: "enableFlexLayout",
      value: function enableFlexLayout() {
        this._ensureLayout();
      }
    }, {
      key: "_ensureLayout",
      value: function _ensureLayout() {
        this._layout || (this._layout = new FlexTarget(this));
      }
    }, {
      key: "disableFlexLayout",
      value: function disableFlexLayout() {
        this._triggerRecalcTranslate();
      }
    }, {
      key: "hasFlexLayout",
      value: function hasFlexLayout() {
        return this._layout && this._layout.isEnabled();
      }
    }, {
      key: "setLayout",
      value: function setLayout(t, e, i, s) {
        this.x = t, this.y = e, this._updateDimensions(i, s);
      }
    }, {
      key: "triggerLayout",
      value: function triggerLayout() {
        this._setRecalc(256);
      }
    }, {
      key: "_triggerRecalcTranslate",
      value: function _triggerRecalcTranslate() {
        this._setRecalc(2);
      }
    }, {
      key: "offsetX",
      get: function get() {
        return this._funcX ? this._funcX : this.hasFlexLayout() ? this._layout.originalX : this._x;
      },
      set: function set(t) {
        Utils.isFunction(t) ? this.funcX = t : (this._disableFuncX(), this.hasFlexLayout() ? (this.x += t - this._layout.originalX, this._layout.setOriginalXWithoutUpdatingLayout(t)) : this.x = t);
      }
    }, {
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        t !== this._x && (this._updateLocalTranslateDelta(t - this._x, 0), this._x = t);
      }
    }, {
      key: "funcX",
      get: function get() {
        return 1 & this._optFlags ? this._funcX : null;
      },
      set: function set(t) {
        this._funcX !== t && (this._optFlags |= 1, this._funcX = t, this.hasFlexLayout() ? (this._layout.setOriginalXWithoutUpdatingLayout(0), this.layout.forceLayout()) : (this._x = 0, this._triggerRecalcTranslate()));
      }
    }, {
      key: "offsetY",
      get: function get() {
        return this._funcY ? this._funcY : this.hasFlexLayout() ? this._layout.originalY : this._y;
      },
      set: function set(t) {
        Utils.isFunction(t) ? this.funcY = t : (this._disableFuncY(), this.hasFlexLayout() ? (this.y += t - this._layout.originalY, this._layout.setOriginalYWithoutUpdatingLayout(t)) : this.y = t);
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        t !== this._y && (this._updateLocalTranslateDelta(0, t - this._y), this._y = t);
      }
    }, {
      key: "funcY",
      get: function get() {
        return 2 & this._optFlags ? this._funcY : null;
      },
      set: function set(t) {
        this._funcY !== t && (this._optFlags |= 2, this._funcY = t, this.hasFlexLayout() ? (this._layout.setOriginalYWithoutUpdatingLayout(0), this.layout.forceLayout()) : (this._y = 0, this._triggerRecalcTranslate()));
      }
    }, {
      key: "funcW",
      get: function get() {
        return 4 & this._optFlags ? this._funcW : null;
      },
      set: function set(t) {
        this._funcW !== t && (this._optFlags |= 4, this._funcW = t, this.hasFlexLayout() ? (this._layout._originalWidth = 0, this.layout.changedDimensions(!0, !1)) : (this._w = 0, this._triggerRecalcTranslate()));
      }
    }, {
      key: "funcH",
      get: function get() {
        return 8 & this._optFlags ? this._funcH : null;
      },
      set: function set(t) {
        this._funcH !== t && (this._optFlags |= 8, this._funcH = t, this.hasFlexLayout() ? (this._layout._originalHeight = 0, this.layout.changedDimensions(!1, !0)) : (this._h = 0, this._triggerRecalcTranslate()));
      }
    }, {
      key: "w",
      get: function get() {
        return this._w;
      }
    }, {
      key: "h",
      get: function get() {
        return this._h;
      }
    }, {
      key: "scaleX",
      get: function get() {
        return this._scaleX;
      },
      set: function set(t) {
        this._scaleX !== t && (this._scaleX = t, this._updateLocalTransform());
      }
    }, {
      key: "scaleY",
      get: function get() {
        return this._scaleY;
      },
      set: function set(t) {
        this._scaleY !== t && (this._scaleY = t, this._updateLocalTransform());
      }
    }, {
      key: "scale",
      get: function get() {
        return this.scaleX;
      },
      set: function set(t) {
        this._scaleX === t && this._scaleY === t || (this._scaleX = t, this._scaleY = t, this._updateLocalTransform());
      }
    }, {
      key: "pivotX",
      get: function get() {
        return this._pivotX;
      },
      set: function set(t) {
        this._pivotX !== t && (this._pivotX = t, this._updateLocalTranslate());
      }
    }, {
      key: "pivotY",
      get: function get() {
        return this._pivotY;
      },
      set: function set(t) {
        this._pivotY !== t && (this._pivotY = t, this._updateLocalTranslate());
      }
    }, {
      key: "pivot",
      get: function get() {
        return this._pivotX;
      },
      set: function set(t) {
        this._pivotX === t && this._pivotY === t || (this._pivotX = t, this._pivotY = t, this._updateLocalTranslate());
      }
    }, {
      key: "mountX",
      get: function get() {
        return this._mountX;
      },
      set: function set(t) {
        this._mountX !== t && (this._mountX = t, this._updateLocalTranslate());
      }
    }, {
      key: "mountY",
      get: function get() {
        return this._mountY;
      },
      set: function set(t) {
        this._mountY !== t && (this._mountY = t, this._updateLocalTranslate());
      }
    }, {
      key: "mount",
      get: function get() {
        return this._mountX;
      },
      set: function set(t) {
        this._mountX === t && this._mountY === t || (this._mountX = t, this._mountY = t, this._updateLocalTranslate());
      }
    }, {
      key: "rotation",
      get: function get() {
        return this._rotation;
      },
      set: function set(t) {
        this._rotation !== t && (this._rotation = t, this._updateLocalTransform());
      }
    }, {
      key: "alpha",
      get: function get() {
        return this._alpha;
      },
      set: function set(t) {
        if (t = t > 1 ? 1 : t < 1e-14 ? 0 : t, this._alpha !== t) {
          var _e42 = this._alpha;
          this._alpha = t, this._updateLocalAlpha(), 0 === _e42 != (0 === t) && this._element._updateEnabledFlag();
        }
      }
    }, {
      key: "visible",
      get: function get() {
        return this._visible;
      },
      set: function set(t) {
        this._visible !== t && (this._visible = t, this._updateLocalAlpha(), this._element._updateEnabledFlag(), this.hasFlexLayout() && this.layout.setVisible(t));
      }
    }, {
      key: "displayedTextureSource",
      get: function get() {
        return this._displayedTextureSource;
      }
    }, {
      key: "isRoot",
      get: function get() {
        return this._isRoot;
      }
    }, {
      key: "zIndex",
      get: function get() {
        return this._zIndex;
      },
      set: function set(t) {
        if (this._zIndex !== t) {
          this.setHasRenderUpdates(1);
          var _e43 = this._zParent,
              i = this.isZContext();
          0 === t && 0 !== this._zIndex ? this._parent === this._zParent ? this._zParent && this._zParent.decZContextUsage() : _e43 = this._parent : 0 !== t && 0 === this._zIndex ? (_e43 = this._parent ? this._parent.findZContext() : null) === this._zParent && this._zParent && (this._zParent.incZContextUsage(), this._zParent.enableZSort()) : t !== this._zIndex && this._zParent && this._zParent._zContextUsage && this._zParent.enableZSort(), _e43 !== this._zParent && this.setZParent(null), this._zIndex = t, _e43 !== this._zParent && this.setZParent(_e43), i !== this.isZContext() && (this.isZContext() ? this.enableZContext(this._parent.findZContext()) : this.disableZContext()), this._zIndexResort = !0, this._zParent && this._zParent.enableZSort();
        }
      }
    }, {
      key: "forceZIndexContext",
      get: function get() {
        return this._forceZIndexContext;
      },
      set: function set(t) {
        this.setHasRenderUpdates(1);
        var e = this.isZContext();
        this._forceZIndexContext = t, e !== this.isZContext() && (this.isZContext() ? this.enableZContext(this._parent.findZContext()) : this.disableZContext());
      }
    }, {
      key: "colorUl",
      get: function get() {
        return this._colorUl;
      },
      set: function set(t) {
        this._colorUl !== t && (this.setHasRenderUpdates(this._displayedTextureSource ? 3 : 1), this._colorUl = t);
      }
    }, {
      key: "colorUr",
      get: function get() {
        return this._colorUr;
      },
      set: function set(t) {
        this._colorUr !== t && (this.setHasRenderUpdates(this._displayedTextureSource ? 3 : 1), this._colorUr = t);
      }
    }, {
      key: "colorBl",
      get: function get() {
        return this._colorBl;
      },
      set: function set(t) {
        this._colorBl !== t && (this.setHasRenderUpdates(this._displayedTextureSource ? 3 : 1), this._colorBl = t);
      }
    }, {
      key: "colorBr",
      get: function get() {
        return this._colorBr;
      },
      set: function set(t) {
        this._colorBr !== t && (this.setHasRenderUpdates(this._displayedTextureSource ? 3 : 1), this._colorBr = t);
      }
    }, {
      key: "onUpdate",
      set: function set(t) {
        this._onUpdate = t, this._setRecalc(7);
      }
    }, {
      key: "onAfterUpdate",
      set: function set(t) {
        this._onAfterUpdate = t, this._setRecalc(7);
      }
    }, {
      key: "onAfterCalcs",
      set: function set(t) {
        this._onAfterCalcs = t, this._setRecalc(7);
      }
    }, {
      key: "shader",
      get: function get() {
        return this._shader;
      },
      set: function set(t) {
        this.setHasRenderUpdates(1);
        var e = this._shader;

        if (this._shader = t, !t && e) {
          var _t43 = this._parent && !this._parent._renderToTextureEnabled ? this._parent._shaderOwner : null;

          this._setShaderOwnerRecursive(_t43);
        } else t && this._setShaderOwnerRecursive(this);
      }
    }, {
      key: "activeShader",
      get: function get() {
        return this._shaderOwner ? this._shaderOwner.shader : this.renderState.defaultShader;
      }
    }, {
      key: "activeShaderOwner",
      get: function get() {
        return this._shaderOwner;
      }
    }, {
      key: "clipping",
      get: function get() {
        return this._clipping;
      },
      set: function set(t) {
        this._clipping !== t && (this._clipping = t, this._setRecalc(3));
      }
    }, {
      key: "clipbox",
      get: function get() {
        return this._clipbox;
      },
      set: function set(t) {
        this._clipbox = t;
      }
    }, {
      key: "renderContext",
      get: function get() {
        return this._renderContext;
      }
    }, {
      key: "outOfBounds",
      get: function get() {
        return this._outOfBounds;
      }
    }, {
      key: "boundsMargin",
      set: function set(t) {
        this._boundsMargin = t ? t.slice() : null, this._triggerRecalcTranslate();
      },
      get: function get() {
        return this._boundsMargin;
      }
    }, {
      key: "zSort",
      get: function get() {
        return this._zSort;
      }
    }, {
      key: "localTa",
      get: function get() {
        return this._localTa;
      }
    }, {
      key: "localTb",
      get: function get() {
        return this._localTb;
      }
    }, {
      key: "localTc",
      get: function get() {
        return this._localTc;
      }
    }, {
      key: "localTd",
      get: function get() {
        return this._localTd;
      }
    }, {
      key: "element",
      get: function get() {
        return this._element;
      }
    }, {
      key: "renderUpdates",
      get: function get() {
        return this._hasRenderUpdates;
      }
    }, {
      key: "texturizer",
      get: function get() {
        return this._texturizer || (this._texturizer = new ElementTexturizer(this)), this._texturizer;
      }
    }, {
      key: "layout",
      get: function get() {
        return this._ensureLayout(), this._layout;
      }
    }, {
      key: "flex",
      get: function get() {
        return this._layout ? this._layout.flex : null;
      },
      set: function set(t) {
        this.layout.flex = t;
      }
    }, {
      key: "flexItem",
      get: function get() {
        return this._layout ? this._layout.flexItem : null;
      },
      set: function set(t) {
        this.layout.flexItem = t;
      }
    }]);

    return ElementCore;
  }();

  var ElementCoreContext =
  /*#__PURE__*/
  function () {
    function ElementCoreContext() {
      _classCallCheck(this, ElementCoreContext);

      this.alpha = 1, this.px = 0, this.py = 0, this.ta = 1, this.tb = 0, this.tc = 0, this.td = 1;
    }

    _createClass(ElementCoreContext, [{
      key: "isIdentity",
      value: function isIdentity() {
        return 1 === this.alpha && 0 === this.px && 0 === this.py && 1 === this.ta && 0 === this.tb && 0 === this.tc && 1 === this.td;
      }
    }, {
      key: "isSquare",
      value: function isSquare() {
        return 0 === this.tb && 0 === this.tc;
      }
    }]);

    return ElementCoreContext;
  }();

  ElementCoreContext.IDENTITY = new ElementCoreContext(), ElementCore.sortZIndexedChildren = function (t, e) {
    return t._zIndex === e._zIndex ? t._updateTreeOrder - e._updateTreeOrder : t._zIndex - e._zIndex;
  };

  var EventEmitter =
  /*#__PURE__*/
  function () {
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);

      this._hasEventListeners = !1;
    }

    _createClass(EventEmitter, [{
      key: "on",
      value: function on(t, e) {
        this._hasEventListeners || (this._eventFunction = {}, this._eventListeners = {}, this._hasEventListeners = !0), this._eventFunction[t] ? this._eventFunction[t] !== EventEmitter.combiner ? (this._eventListeners[t] = [this._eventFunction[t], e], this._eventFunction[t] = EventEmitter.combiner) : this._eventListeners[t].push(e) : this._eventFunction[t] = e;
      }
    }, {
      key: "has",
      value: function has(t, e) {
        if (this._hasEventListeners) {
          var i = this._eventFunction[t];

          if (i) {
            if (i === EventEmitter.combiner) {
              return this._eventListeners[t].indexOf(e) >= 0;
            }

            if (this._eventFunction[t] === e) return !0;
          }
        }

        return !1;
      }
    }, {
      key: "off",
      value: function off(t, e) {
        if (this._hasEventListeners) {
          var i = this._eventFunction[t];
          if (i) if (i === EventEmitter.combiner) {
            var _i13 = this._eventListeners[t];

            var s = _i13.indexOf(e);

            s >= 0 && _i13.splice(s, 1), 1 === _i13.length && (this._eventFunction[t] = _i13[0], this._eventListeners[t] = void 0);
          } else this._eventFunction[t] === e && (this._eventFunction[t] = void 0);
        }
      }
    }, {
      key: "removeListener",
      value: function removeListener(t, e) {
        this.off(t, e);
      }
    }, {
      key: "emit",
      value: function emit(t, e, i, s) {
        if (this._hasEventListeners) {
          var r = this._eventFunction[t];
          r && (r === EventEmitter.combiner ? r(this, t, e, i, s) : r(e, i, s));
        }
      }
    }, {
      key: "listenerCount",
      value: function listenerCount(t) {
        if (!this._hasEventListeners) return 0;
        {
          var _e44 = this._eventFunction[t];
          if (_e44) return _e44 === EventEmitter.combiner ? this._eventListeners[t].length : 1;
        }
      }
    }, {
      key: "removeAllListeners",
      value: function removeAllListeners(t) {
        this._hasEventListeners && (delete this._eventFunction[t], delete this._eventListeners[t]);
      }
    }]);

    return EventEmitter;
  }();

  EventEmitter.combiner = function (t, e, i, s, r) {
    var n = t._eventListeners[e];
    n && n.forEach(function (t) {
      t(i, s, r);
    });
  }, EventEmitter.addAsMixin = function (t) {
    t.prototype.on = EventEmitter.prototype.on, t.prototype.has = EventEmitter.prototype.has, t.prototype.off = EventEmitter.prototype.off, t.prototype.removeListener = EventEmitter.prototype.removeListener, t.prototype.emit = EventEmitter.prototype.emit, t.prototype.listenerCount = EventEmitter.prototype.listenerCount, t.prototype.removeAllListeners = EventEmitter.prototype.removeAllListeners;
  };

  var Shader =
  /*#__PURE__*/
  function () {
    function Shader(t) {
      _classCallCheck(this, Shader);

      this._initialized = !1, this.ctx = t, this._elements = new Set();
    }

    _createClass(Shader, [{
      key: "addElement",
      value: function addElement(t) {
        this._elements.add(t);
      }
    }, {
      key: "removeElement",
      value: function removeElement(t) {
        this._elements["delete"](t), this._elements || this.cleanup();
      }
    }, {
      key: "redraw",
      value: function redraw() {
        this._elements.forEach(function (t) {
          t.setHasRenderUpdates(2);
        });
      }
    }, {
      key: "patch",
      value: function patch(t) {
        Base.patchObject(this, t);
      }
    }, {
      key: "useDefault",
      value: function useDefault() {
        return !1;
      }
    }, {
      key: "addEmpty",
      value: function addEmpty() {
        return !1;
      }
    }, {
      key: "cleanup",
      value: function cleanup() {}
    }, {
      key: "isShader",
      get: function get() {
        return !0;
      }
    }], [{
      key: "create",
      value: function create(t, e) {
        var i;
        if (Utils.isObjectLiteral(e)) (i = e.type ? t.renderer.createShader(t.ctx, e) : this.shader) && Base.patchObject(i, e);else if (null === e) i = t.ctx.renderState.defaultShader;else if (void 0 === e) i = null;else {
          if (!e.isShader) return void console.error("Please specify a shader type.");
          t.renderer.isValidShaderType(e.constructor) || (console.error("Invalid shader type"), e = null), i = e;
        }
        return i;
      }
    }, {
      key: "getWebGL",
      value: function getWebGL() {}
    }, {
      key: "getC2d",
      value: function getC2d() {}
    }]);

    return Shader;
  }();

  var Texture =
  /*#__PURE__*/
  function () {
    function Texture(t) {
      _classCallCheck(this, Texture);

      this.stage = t, this.manager = this.stage.textureManager, this.id = Texture.id++, this.elements = new Set(), this._activeCount = 0, this._source = null, this._resizeMode = null, this._x = 0, this._y = 0, this._w = 0, this._h = 0, this._precision = 1, this.mw = 0, this.mh = 0, this.clipping = !1, this._mustUpdate = !0;
    }

    _createClass(Texture, [{
      key: "addElement",
      value: function addElement(t) {
        this.elements.has(t) || (this.elements.add(t), 1 === this.elements.size && this._source && this._source.addTexture(this), t.active && this.incActiveCount());
      }
    }, {
      key: "removeElement",
      value: function removeElement(t) {
        this.elements["delete"](t) && (0 === this.elements.size && this._source && this._source.removeTexture(this), t.active && this.decActiveCount());
      }
    }, {
      key: "incActiveCount",
      value: function incActiveCount() {
        this.source && this._checkForNewerReusableTextureSource(), this._activeCount++, 1 === this._activeCount && this.becomesUsed();
      }
    }, {
      key: "decActiveCount",
      value: function decActiveCount() {
        this.source;
        this._activeCount--, this._activeCount || this.becomesUnused();
      }
    }, {
      key: "becomesUsed",
      value: function becomesUsed() {
        this.source && this.source.incActiveTextureCount();
      }
    }, {
      key: "onLoad",
      value: function onLoad() {
        this._resizeMode && this._applyResizeMode(), this.elements.forEach(function (t) {
          t.active && t.onTextureSourceLoaded();
        });
      }
    }, {
      key: "_checkForNewerReusableTextureSource",
      value: function _checkForNewerReusableTextureSource() {
        var t = this.source;
        if (t.isLoaded()) this._resizeMode && this._applyResizeMode();else {
          var _e45 = this._getReusableTextureSource();

          _e45 && _e45.isLoaded() && _e45 !== t && this._replaceTextureSource(_e45);
        }
      }
    }, {
      key: "becomesUnused",
      value: function becomesUnused() {
        this.source && this.source.decActiveTextureCount();
      }
    }, {
      key: "isUsed",
      value: function isUsed() {
        return this._activeCount > 0;
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return null;
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        throw new Error("Texture.generate must be implemented.");
      }
    }, {
      key: "_getIsValid",
      value: function _getIsValid() {
        return !0;
      }
    }, {
      key: "_changed",
      value: function _changed() {
        this.isUsed() ? this._updateSource() : this._mustUpdate = !0;
      }
    }, {
      key: "_updateSource",
      value: function _updateSource() {
        this.stage.addUpdateSourceTexture(this);
      }
    }, {
      key: "_performUpdateSource",
      value: function _performUpdateSource() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

        if (t || this.isUsed()) {
          this._mustUpdate = !1;

          var _t44 = this._getTextureSource();

          this._replaceTextureSource(_t44);
        }
      }
    }, {
      key: "_getTextureSource",
      value: function _getTextureSource() {
        var t = null;

        if (this._getIsValid()) {
          var _e46 = this._getLookupId();

          (t = this._getReusableTextureSource(_e46)) || (t = this.manager.getTextureSource(this._getSourceLoader(), _e46));
        }

        return t;
      }
    }, {
      key: "_getReusableTextureSource",
      value: function _getReusableTextureSource() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getLookupId();
        return this._getIsValid() && t ? this.manager.getReusableTextureSource(t) : null;
      }
    }, {
      key: "_replaceTextureSource",
      value: function _replaceTextureSource() {
        var _this3 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var e = this._source;
        if (this._source = t, this.elements.size && (e && (this._activeCount && e.decActiveTextureCount(), e.removeTexture(this)), t && (t.addTexture(this), this._activeCount && t.incActiveTextureCount())), this.isUsed()) if (t) {
          if (t.isLoaded()) this.elements.forEach(function (t) {
            t.active && t._setDisplayedTexture(_this3);
          });else {
            var _e47 = t.loadError;
            _e47 && this.elements.forEach(function (t) {
              t.active && t.onTextureSourceLoadError(_e47);
            });
          }
        } else this.elements.forEach(function (t) {
          t.active && t._setDisplayedTexture(null);
        });
      }
    }, {
      key: "load",
      value: function load() {
        this.source && (this.isLoaded() || this.source.load(!0));
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return this._source && this._source.isLoaded();
      }
    }, {
      key: "free",
      value: function free() {
        this._source && this._source.free();
      }
    }, {
      key: "_clearResizeMode",
      value: function _clearResizeMode() {
        this._resizeMode = null;
      }
    }, {
      key: "_applyResizeMode",
      value: function _applyResizeMode() {
        "cover" === this._resizeMode.type ? this._applyResizeCover() : "contain" === this._resizeMode.type && this._applyResizeContain(), this._updatePrecision(), this._updateClipping();
      }
    }, {
      key: "_applyResizeCover",
      value: function _applyResizeCover() {
        var t = this._resizeMode.w / this._source.w,
            e = this._resizeMode.h / this._source.h;
        var i = Math.max(t, e);

        if (i) {
          if (this._precision = 1 / i, t && t < i) {
            var _t45 = this._precision * this._resizeMode.w,
                _e48 = this._source.w - _t45;

            this._x = _e48 * this._resizeMode.clipX, this._w = this._source.w - _e48;
          }

          if (e && e < i) {
            var _t46 = this._precision * this._resizeMode.h,
                _e49 = this._source.h - _t46;

            this._y = _e49 * this._resizeMode.clipY, this._h = this._source.h - _e49;
          }
        }
      }
    }, {
      key: "_applyResizeContain",
      value: function _applyResizeContain() {
        var t = this._resizeMode.w / this._source.w,
            e = this._resizeMode.h / this._source.h;
        var i = t;
        (!i || e < i) && (i = e), i && (this._precision = 1 / i);
      }
    }, {
      key: "enableClipping",
      value: function enableClipping(t, e, i, s) {
        this._clearResizeMode(), t *= this._precision, e *= this._precision, i *= this._precision, s *= this._precision, this._x === t && this._y === e && this._w === i && this._h === s || (this._x = t, this._y = e, this._w = i, this._h = s, this._updateClipping(!0));
      }
    }, {
      key: "disableClipping",
      value: function disableClipping() {
        this._clearResizeMode(), (this._x || this._y || this._w || this._h) && (this._x = 0, this._y = 0, this._w = 0, this._h = 0, this._updateClipping());
      }
    }, {
      key: "_updateClipping",
      value: function _updateClipping() {
        this.clipping = !!(this._x || this._y || this._w || this._h);
        var t = this;
        this.elements.forEach(function (e) {
          e.displayedTexture === t && e.onDisplayedTextureClippingChanged();
        });
      }
    }, {
      key: "_updatePrecision",
      value: function _updatePrecision() {
        var t = this;
        this.elements.forEach(function (e) {
          e.displayedTexture === t && e.onPrecisionChanged();
        });
      }
    }, {
      key: "getNonDefaults",
      value: function getNonDefaults() {
        var t = {};
        return t.type = this.constructor.name, 0 !== this.x && (t.x = this.x), 0 !== this.y && (t.y = this.y), 0 !== this.w && (t.w = this.w), 0 !== this.h && (t.h = this.h), 1 !== this.precision && (t.precision = this.precision), t;
      }
    }, {
      key: "isAutosizeTexture",
      value: function isAutosizeTexture() {
        return !0;
      }
    }, {
      key: "getRenderWidth",
      value: function getRenderWidth() {
        return this.isAutosizeTexture() ? (this._w || (this._source ? this._source.getRenderWidth() - this._x : 0)) / this._precision : 0;
      }
    }, {
      key: "getRenderHeight",
      value: function getRenderHeight() {
        return this.isAutosizeTexture() ? (this._h || (this._source ? this._source.getRenderHeight() - this._y : 0)) / this._precision : 0;
      }
    }, {
      key: "patch",
      value: function patch(t) {
        Base.patchObject(this, t);
      }
    }, {
      key: "source",
      get: function get() {
        return (this._mustUpdate || this.stage.hasUpdateSourceTexture(this)) && (this._performUpdateSource(!0), this.stage.removeUpdateSourceTexture(this)), this._source;
      }
    }, {
      key: "isValid",
      get: function get() {
        return this._getIsValid();
      }
    }, {
      key: "loadError",
      get: function get() {
        return this._source && this._source.loadError;
      }
    }, {
      key: "resizeMode",
      set: function set(_ref) {
        var _ref$type = _ref.type,
            t = _ref$type === void 0 ? "cover" : _ref$type,
            _ref$w = _ref.w,
            e = _ref$w === void 0 ? 0 : _ref$w,
            _ref$h = _ref.h,
            i = _ref$h === void 0 ? 0 : _ref$h,
            _ref$clipX = _ref.clipX,
            s = _ref$clipX === void 0 ? .5 : _ref$clipX,
            _ref$clipY = _ref.clipY,
            r = _ref$clipY === void 0 ? .5 : _ref$clipY;
        this._resizeMode = {
          type: t,
          w: e,
          h: i,
          clipX: s,
          clipY: r
        }, this.isLoaded() && this._applyResizeMode();
      },
      get: function get() {
        return this._resizeMode;
      }
    }, {
      key: "px",
      get: function get() {
        return this._x;
      }
    }, {
      key: "py",
      get: function get() {
        return this._y;
      }
    }, {
      key: "pw",
      get: function get() {
        return this._w;
      }
    }, {
      key: "ph",
      get: function get() {
        return this._h;
      }
    }, {
      key: "x",
      get: function get() {
        return this._x / this._precision;
      },
      set: function set(t) {
        this._clearResizeMode(), t *= this._precision, this._x !== t && (this._x = t, this._updateClipping());
      }
    }, {
      key: "y",
      get: function get() {
        return this._y / this._precision;
      },
      set: function set(t) {
        this._clearResizeMode(), t *= this._precision, this._y !== t && (this._y = t, this._updateClipping());
      }
    }, {
      key: "w",
      get: function get() {
        return this._w / this._precision;
      },
      set: function set(t) {
        this._clearResizeMode(), t *= this._precision, this._w !== t && (this._w = t, this._updateClipping());
      }
    }, {
      key: "h",
      get: function get() {
        return this._h / this._precision;
      },
      set: function set(t) {
        this._clearResizeMode(), t *= this._precision, this._h !== t && (this._h = t, this._updateClipping());
      }
    }, {
      key: "precision",
      get: function get() {
        return this._precision;
      },
      set: function set(t) {
        this._clearResizeMode(), this._precision !== t && (this._precision = t, this._updatePrecision());
      }
    }]);

    return Texture;
  }();

  Texture.prototype.isTexture = !0, Texture.id = 0;

  var ImageTexture =
  /*#__PURE__*/
  function (_Texture) {
    _inherits(ImageTexture, _Texture);

    function ImageTexture(t) {
      var _this4;

      _classCallCheck(this, ImageTexture);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(ImageTexture).call(this, t)), _this4._src = void 0, _this4._hasAlpha = !1;
      return _this4;
    }

    _createClass(ImageTexture, [{
      key: "_getIsValid",
      value: function _getIsValid() {
        return !!this._src;
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return this._src;
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        var _this5 = this;

        var t = this._src,
            e = this._hasAlpha;

        if (this.stage.getOption("srcBasePath")) {
          var i = t.charCodeAt(0);
          -1 === t.indexOf("//") && (i >= 65 && i <= 90 || i >= 97 && i <= 122 || 46 == i) && (t = this.stage.getOption("srcBasePath") + t);
        }

        return function (i) {
          return _this5.stage.platform.loadSrcTexture({
            src: t,
            hasAlpha: e
          }, i);
        };
      }
    }, {
      key: "getNonDefaults",
      value: function getNonDefaults() {
        var t = _get(_getPrototypeOf(ImageTexture.prototype), "getNonDefaults", this).call(this);

        return this._src && (t.src = this._src), t;
      }
    }, {
      key: "src",
      get: function get() {
        return this._src;
      },
      set: function set(t) {
        this._src !== t && (this._src = t, this._changed());
      }
    }, {
      key: "hasAlpha",
      get: function get() {
        return this._hasAlpha;
      },
      set: function set(t) {
        this._hasAlpha !== t && (this._hasAlpha = t, this._changed());
      }
    }]);

    return ImageTexture;
  }(Texture);

  var TextTextureRenderer =
  /*#__PURE__*/
  function () {
    function TextTextureRenderer(t, e, i) {
      _classCallCheck(this, TextTextureRenderer);

      this._stage = t, this._canvas = e, this._context = this._canvas.getContext("2d"), this._settings = i;
    }

    _createClass(TextTextureRenderer, [{
      key: "getPrecision",
      value: function getPrecision() {
        return this._settings.precision;
      }
    }, {
      key: "setFontProperties",
      value: function setFontProperties() {
        this._context.font = this._getFontSetting(), this._context.textBaseline = this._settings.textBaseline;
      }
    }, {
      key: "_getFontSetting",
      value: function _getFontSetting() {
        var t = this._settings.fontFace;
        Array.isArray(t) || (t = [t]);
        var e = [];

        for (var i = 0, s = t.length; i < s; i++) {
          "serif" === t[i] || "sans-serif" === t[i] ? e.push(t[i]) : e.push("\"".concat(t[i], "\""));
        }

        return "".concat(this._settings.fontStyle, " ").concat(this._settings.fontSize * this.getPrecision(), "px ").concat(e.join(","));
      }
    }, {
      key: "_load",
      value: function _load() {
        var _this6 = this;

        if (Utils.isWeb && document.fonts) {
          var _t47 = this._getFontSetting();

          try {
            if (!document.fonts.check(_t47, this._settings.text)) return document.fonts.load(_t47, this._settings.text)["catch"](function (e) {
              console.warn("Font load error", e, _t47);
            }).then(function () {
              document.fonts.check(_t47, _this6._settings.text) || console.warn("Font not found", _t47);
            });
          } catch (e) {
            console.warn("Can't check font loading for " + _t47);
          }
        }
      }
    }, {
      key: "draw",
      value: function draw() {
        var _this7 = this;

        var t = this._load();

        return t ? t.then(function () {
          return Utils.isSpark ? _this7._stage.platform.drawText(_this7) : _this7._draw();
        }) : Utils.isSpark ? this._stage.platform.drawText(this) : this._draw();
      }
    }, {
      key: "_draw",
      value: function _draw() {
        var t = {};
        var e = this.getPrecision();
        var i = this._settings.paddingLeft * e,
            s = this._settings.paddingRight * e;
        var r = this._settings.fontSize * e;
        var n = null === this._settings.offsetY ? null : this._settings.offsetY * e,
            o = this._settings.lineHeight * e;
        var a = this._settings.w * e,
            h = this._settings.h * e;
        var l = this._settings.wordWrapWidth * e;

        var _ = this._settings.cutSx * e,
            u = this._settings.cutEx * e,
            c = this._settings.cutSy * e,
            d = this._settings.cutEy * e;

        this.setFontProperties();
        var g,
            p = a || 2048 / this.getPrecision(),
            x = p - i;

        if (x < 10 && (p += 10 - x, x += 10 - x), l || (l = x), this._settings.textOverflow && !this._settings.wordWrap) {
          var _t48;

          switch (this._settings.textOverflow) {
            case "clip":
              _t48 = "";
              break;

            case "ellipsis":
              _t48 = this._settings.maxLinesSuffix;
              break;

            default:
              _t48 = this._settings.textOverflow;
          }

          this._settings.text = this.wrapWord(this._settings.text, l, _t48);
        }

        if (this._settings.wordWrap) g = this.wrapText(this._settings.text, l);else {
          var _t49 = (g = {
            l: this._settings.text.split(/(?:\r\n|\r|\n)/),
            n: []
          }).l.length;

          for (var _e50 = 0; _e50 < _t49 - 1; _e50++) {
            g.n.push(_e50);
          }
        }
        var f = g.l;

        if (this._settings.maxLines && f.length > this._settings.maxLines) {
          var _e51 = f.slice(0, this._settings.maxLines),
              _i14 = null;

          if (this._settings.maxLinesSuffix) {
            var _t50 = this._settings.maxLinesSuffix ? this._context.measureText(this._settings.maxLinesSuffix).width : 0,
                _s7 = this.wrapText(_e51[_e51.length - 1], l - _t50);

            _e51[_e51.length - 1] = _s7.l[0] + this._settings.maxLinesSuffix, _i14 = [_s7.l.length > 1 ? _s7.l[1] : ""];
          } else _i14 = [""];

          var _s6,
              _r4 = f.length,
              _n2 = 0,
              _o = g.n.length;

          for (_s6 = this._settings.maxLines; _s6 < _r4; _s6++) {
            _i14[_n2] += (_i14[_n2] ? " " : "") + f[_s6], _s6 + 1 < _o && g.n[_s6 + 1] && _n2++;
          }

          t.remainingText = _i14.join("\n"), t.moreTextLines = !0, f = _e51;
        } else t.moreTextLines = !1, t.remainingText = "";

        var m,
            S,
            T,
            y = 0,
            v = [];

        for (var _t51 = 0; _t51 < f.length; _t51++) {
          var _e52 = this._context.measureText(f[_t51]).width;

          v.push(_e52), y = Math.max(y, _e52);
        }

        t.lineWidths = v, a || (p = y + i + s, x = y), o = o || r, m = h || o * (f.length - 1) + .5 * r + Math.max(o, r) + n, null === n && (n = r), t.w = p, t.h = m, t.lines = f, t.precision = e, p || (p = 1), m || (m = 1), (_ || u) && (p = Math.min(p, u - _)), (c || d) && (m = Math.min(m, d - c)), this._canvas.width = Math.ceil(p + this._stage.getOption("textRenderIssueMargin")), this._canvas.height = Math.ceil(m), this.setFontProperties(), r >= 128 && (this._context.globalAlpha = .01, this._context.fillRect(0, 0, .01, .01), this._context.globalAlpha = 1), (_ || c) && this._context.translate(-_, -c);
        var b = [];

        for (var _t52 = 0, _e53 = f.length; _t52 < _e53; _t52++) {
          S = 0, T = _t52 * o + n, "right" === this._settings.textAlign ? S += x - v[_t52] : "center" === this._settings.textAlign && (S += (x - v[_t52]) / 2), S += i, b.push({
            text: f[_t52],
            x: S,
            y: T,
            w: v[_t52]
          });
        }

        if (this._settings.highlight) {
          var _t53 = this._settings.highlightColor || 0,
              _n3 = this._settings.highlightHeight * e || 1.5 * r,
              _o2 = null !== this._settings.highlightOffset ? this._settings.highlightOffset * e : -.5 * r;

          var _a2 = null !== this._settings.highlightPaddingLeft ? this._settings.highlightPaddingLeft * e : i,
              _h = null !== this._settings.highlightPaddingRight ? this._settings.highlightPaddingRight * e : s;

          this._context.fillStyle = StageUtils.getRgbaString(_t53);

          for (var _t54 = 0; _t54 < b.length; _t54++) {
            var _e54 = b[_t54];

            this._context.fillRect(_e54.x - _a2, _e54.y + _o2, _e54.w + _h + _a2, _n3);
          }
        }

        var C = null;
        this._settings.shadow && (C = [this._context.shadowColor, this._context.shadowOffsetX, this._context.shadowOffsetY, this._context.shadowBlur], this._context.shadowColor = StageUtils.getRgbaString(this._settings.shadowColor), this._context.shadowOffsetX = this._settings.shadowOffsetX * e, this._context.shadowOffsetY = this._settings.shadowOffsetY * e, this._context.shadowBlur = this._settings.shadowBlur * e), this._context.fillStyle = StageUtils.getRgbaString(this._settings.textColor);

        for (var _t55 = 0, _e55 = b.length; _t55 < _e55; _t55++) {
          var _e56 = b[_t55];

          this._context.fillText(_e56.text, _e56.x, _e56.y);
        }

        C && (this._context.shadowColor = C[0], this._context.shadowOffsetX = C[1], this._context.shadowOffsetY = C[2], this._context.shadowBlur = C[3]), (_ || c) && this._context.translate(_, c), this.renderInfo = t;
      }
    }, {
      key: "wrapWord",
      value: function wrapWord(t, e, i) {
        var s = this._context.measureText(i).width,
            r = t.length,
            n = this._context.measureText(t).width;

        if (n <= e) return t;
        var o = Math.floor(e * r / n),
            a = this._context.measureText(t.substring(0, o)).width + s;
        if (a > e) for (; o > 0 && (a = this._context.measureText(t.substring(0, o)).width + s) > e;) {
          o -= 1;
        } else for (; o < r;) {
          if (!((a = this._context.measureText(t.substring(0, o)).width + s) < e)) {
            o -= 1;
            break;
          }

          o += 1;
        }
        return t.substring(0, o) + (e >= s ? i : "");
      }
    }, {
      key: "wrapText",
      value: function wrapText(t, e) {
        var i = t.split(/\r?\n/g),
            s = [],
            r = [];

        for (var _t56 = 0; _t56 < i.length; _t56++) {
          var n = [],
              o = "",
              a = e,
              h = i[_t56].split(" ");

          for (var _t57 = 0; _t57 < h.length; _t57++) {
            var _i15 = this._context.measureText(h[_t57]).width,
                _s8 = _i15 + this._context.measureText(" ").width;

            0 === _t57 || _s8 > a ? (_t57 > 0 && (n.push(o), o = ""), o += h[_t57], a = e - _i15) : (a -= _s8, o += " " + h[_t57]);
          }

          o && (n.push(o), o = ""), s = s.concat(n), _t56 < i.length - 1 && r.push(s.length);
        }

        return {
          l: s,
          n: r
        };
      }
    }]);

    return TextTextureRenderer;
  }();

  var TextTexture =
  /*#__PURE__*/
  function (_Texture2) {
    _inherits(TextTexture, _Texture2);

    function TextTexture(t) {
      var _this8;

      _classCallCheck(this, TextTexture);

      _this8 = _possibleConstructorReturn(this, _getPrototypeOf(TextTexture).call(this, t)), _this8._precision = _this8.stage.getOption("precision");
      return _this8;
    }

    _createClass(TextTexture, [{
      key: "_getIsValid",
      value: function _getIsValid() {
        return !!this.text;
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        var t = [];
        return 0 !== this.w && t.push("w " + this.w), 0 !== this.h && t.push("h " + this.h), "normal" !== this.fontStyle && t.push("fS" + this.fontStyle), 40 !== this.fontSize && t.push("fs" + this.fontSize), null !== this.fontFace && t.push("ff" + (Array.isArray(this.fontFace) ? this.fontFace.join(",") : this.fontFace)), !0 !== this.wordWrap && t.push("wr" + (this.wordWrap ? 1 : 0)), 0 !== this.wordWrapWidth && t.push("ww" + this.wordWrapWidth), "" != this.textOverflow && t.push("to" + this.textOverflow), null !== this.lineHeight && t.push("lh" + this.lineHeight), "alphabetic" !== this.textBaseline && t.push("tb" + this.textBaseline), "left" !== this.textAlign && t.push("ta" + this.textAlign), null !== this.offsetY && t.push("oy" + this.offsetY), 0 !== this.maxLines && t.push("ml" + this.maxLines), ".." !== this.maxLinesSuffix && t.push("ms" + this.maxLinesSuffix), t.push("pc" + this.precision), 4294967295 !== this.textColor && t.push("co" + this.textColor.toString(16)), 0 !== this.paddingLeft && t.push("pl" + this.paddingLeft), 0 !== this.paddingRight && t.push("pr" + this.paddingRight), !1 !== this.shadow && t.push("sh" + (this.shadow ? 1 : 0)), 4278190080 !== this.shadowColor && t.push("sc" + this.shadowColor.toString(16)), 0 !== this.shadowOffsetX && t.push("sx" + this.shadowOffsetX), 0 !== this.shadowOffsetY && t.push("sy" + this.shadowOffsetY), 5 !== this.shadowBlur && t.push("sb" + this.shadowBlur), !1 !== this.highlight && t.push("hL" + (this.highlight ? 1 : 0)), 0 !== this.highlightHeight && t.push("hh" + this.highlightHeight), 4278190080 !== this.highlightColor && t.push("hc" + this.highlightColor.toString(16)), null !== this.highlightOffset && t.push("ho" + this.highlightOffset), null !== this.highlightPaddingLeft && t.push("hl" + this.highlightPaddingLeft), null !== this.highlightPaddingRight && t.push("hr" + this.highlightPaddingRight), this.cutSx && t.push("csx" + this.cutSx), this.cutEx && t.push("cex" + this.cutEx), this.cutSy && t.push("csy" + this.cutSy), this.cutEy && t.push("cey" + this.cutEy), "TX$" + t.join("|") + ":" + this.text;
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        var t = this.cloneArgs();
        return null === t.fontFace && (t.fontFace = this.stage.getOption("defaultFontFace")), function (e) {
          var _this9 = this;

          var i = this.stage.platform.getDrawingCanvas(),
              s = new TextTextureRenderer(this.stage, i, t),
              r = s.draw();
          r ? r.then(function () {
            e(null, Object.assign({
              renderInfo: s.renderInfo,
              throttle: !1
            }, _this9.stage.platform.getTextureOptionsForDrawingCanvas(i)));
          })["catch"](function (t) {
            e(t);
          }) : e(null, Object.assign({
            renderInfo: s.renderInfo,
            throttle: !1
          }, this.stage.platform.getTextureOptionsForDrawingCanvas(i)));
        };
      }
    }, {
      key: "getNonDefaults",
      value: function getNonDefaults() {
        var t = _get(_getPrototypeOf(TextTexture.prototype), "getNonDefaults", this).call(this);

        return "" !== this.text && (t.text = this.text), 0 !== this.w && (t.w = this.w), 0 !== this.h && (t.h = this.h), "normal" !== this.fontStyle && (t.fontStyle = this.fontStyle), 40 !== this.fontSize && (t.fontSize = this.fontSize), null !== this.fontFace && (t.fontFace = this.fontFace), !0 !== this.wordWrap && (t.wordWrap = this.wordWrap), 0 !== this.wordWrapWidth && (t.wordWrapWidth = this.wordWrapWidth), "" != this.textOverflow && (t.textOverflow = this.textOverflow), null !== this.lineHeight && (t.lineHeight = this.lineHeight), "alphabetic" !== this.textBaseline && (t.textBaseline = this.textBaseline), "left" !== this.textAlign && (t.textAlign = this.textAlign), null !== this.offsetY && (t.offsetY = this.offsetY), 0 !== this.maxLines && (t.maxLines = this.maxLines), ".." !== this.maxLinesSuffix && (t.maxLinesSuffix = this.maxLinesSuffix), this.precision !== this.stage.getOption("precision") && (t.precision = this.precision), 4294967295 !== this.textColor && (t.textColor = this.textColor), 0 !== this.paddingLeft && (t.paddingLeft = this.paddingLeft), 0 !== this.paddingRight && (t.paddingRight = this.paddingRight), !1 !== this.shadow && (t.shadow = this.shadow), 4278190080 !== this.shadowColor && (t.shadowColor = this.shadowColor), 0 !== this.shadowOffsetX && (t.shadowOffsetX = this.shadowOffsetX), 0 !== this.shadowOffsetY && (t.shadowOffsetY = this.shadowOffsetY), 5 !== this.shadowBlur && (t.shadowBlur = this.shadowBlur), !1 !== this.highlight && (t.highlight = this.highlight), 0 !== this.highlightHeight && (t.highlightHeight = this.highlightHeight), 4278190080 !== this.highlightColor && (t.highlightColor = this.highlightColor), 0 !== this.highlightOffset && (t.highlightOffset = this.highlightOffset), 0 !== this.highlightPaddingLeft && (t.highlightPaddingLeft = this.highlightPaddingLeft), 0 !== this.highlightPaddingRight && (t.highlightPaddingRight = this.highlightPaddingRight), this.cutSx && (t.cutSx = this.cutSx), this.cutEx && (t.cutEx = this.cutEx), this.cutSy && (t.cutSy = this.cutSy), this.cutEy && (t.cutEy = this.cutEy), t;
      }
    }, {
      key: "cloneArgs",
      value: function cloneArgs() {
        var t = {};
        return t.text = this._text, t.w = this._w, t.h = this._h, t.fontStyle = this._fontStyle, t.fontSize = this._fontSize, t.fontFace = this._fontFace, t.wordWrap = this._wordWrap, t.wordWrapWidth = this._wordWrapWidth, t.textOverflow = this._textOverflow, t.lineHeight = this._lineHeight, t.textBaseline = this._textBaseline, t.textAlign = this._textAlign, t.offsetY = this._offsetY, t.maxLines = this._maxLines, t.maxLinesSuffix = this._maxLinesSuffix, t.precision = this._precision, t.textColor = this._textColor, t.paddingLeft = this._paddingLeft, t.paddingRight = this._paddingRight, t.shadow = this._shadow, t.shadowColor = this._shadowColor, t.shadowOffsetX = this._shadowOffsetX, t.shadowOffsetY = this._shadowOffsetY, t.shadowBlur = this._shadowBlur, t.highlight = this._highlight, t.highlightHeight = this._highlightHeight, t.highlightColor = this._highlightColor, t.highlightOffset = this._highlightOffset, t.highlightPaddingLeft = this._highlightPaddingLeft, t.highlightPaddingRight = this._highlightPaddingRight, t.cutSx = this._cutSx, t.cutEx = this._cutEx, t.cutSy = this._cutSy, t.cutEy = this._cutEy, t;
      }
    }, {
      key: "text",
      get: function get() {
        return this._text;
      },
      set: function set(t) {
        this._text !== t && (this._text = "" + t, this._changed());
      }
    }, {
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set(t) {
        this._w !== t && (this._w = t, this._changed());
      }
    }, {
      key: "h",
      get: function get() {
        return this._h;
      },
      set: function set(t) {
        this._h !== t && (this._h = t, this._changed());
      }
    }, {
      key: "fontStyle",
      get: function get() {
        return this._fontStyle;
      },
      set: function set(t) {
        this._fontStyle !== t && (this._fontStyle = t, this._changed());
      }
    }, {
      key: "fontSize",
      get: function get() {
        return this._fontSize;
      },
      set: function set(t) {
        this._fontSize !== t && (this._fontSize = t, this._changed());
      }
    }, {
      key: "fontFace",
      get: function get() {
        return this._fontFace;
      },
      set: function set(t) {
        this._fontFace !== t && (this._fontFace = t, this._changed());
      }
    }, {
      key: "wordWrap",
      get: function get() {
        return this._wordWrap;
      },
      set: function set(t) {
        this._wordWrap !== t && (this._wordWrap = t, this._changed());
      }
    }, {
      key: "wordWrapWidth",
      get: function get() {
        return this._wordWrapWidth;
      },
      set: function set(t) {
        this._wordWrapWidth !== t && (this._wordWrapWidth = t, this._changed());
      }
    }, {
      key: "textOverflow",
      get: function get() {
        return this._textOverflow;
      },
      set: function set(t) {
        t != this._textOverflow && (this._textOverflow = t, this._changed());
      }
    }, {
      key: "lineHeight",
      get: function get() {
        return this._lineHeight;
      },
      set: function set(t) {
        this._lineHeight !== t && (this._lineHeight = t, this._changed());
      }
    }, {
      key: "textBaseline",
      get: function get() {
        return this._textBaseline;
      },
      set: function set(t) {
        this._textBaseline !== t && (this._textBaseline = t, this._changed());
      }
    }, {
      key: "textAlign",
      get: function get() {
        return this._textAlign;
      },
      set: function set(t) {
        this._textAlign !== t && (this._textAlign = t, this._changed());
      }
    }, {
      key: "offsetY",
      get: function get() {
        return this._offsetY;
      },
      set: function set(t) {
        this._offsetY !== t && (this._offsetY = t, this._changed());
      }
    }, {
      key: "maxLines",
      get: function get() {
        return this._maxLines;
      },
      set: function set(t) {
        this._maxLines !== t && (this._maxLines = t, this._changed());
      }
    }, {
      key: "maxLinesSuffix",
      get: function get() {
        return this._maxLinesSuffix;
      },
      set: function set(t) {
        this._maxLinesSuffix !== t && (this._maxLinesSuffix = t, this._changed());
      }
    }, {
      key: "textColor",
      get: function get() {
        return this._textColor;
      },
      set: function set(t) {
        this._textColor !== t && (this._textColor = t, this._changed());
      }
    }, {
      key: "paddingLeft",
      get: function get() {
        return this._paddingLeft;
      },
      set: function set(t) {
        this._paddingLeft !== t && (this._paddingLeft = t, this._changed());
      }
    }, {
      key: "paddingRight",
      get: function get() {
        return this._paddingRight;
      },
      set: function set(t) {
        this._paddingRight !== t && (this._paddingRight = t, this._changed());
      }
    }, {
      key: "shadow",
      get: function get() {
        return this._shadow;
      },
      set: function set(t) {
        this._shadow !== t && (this._shadow = t, this._changed());
      }
    }, {
      key: "shadowColor",
      get: function get() {
        return this._shadowColor;
      },
      set: function set(t) {
        this._shadowColor !== t && (this._shadowColor = t, this._changed());
      }
    }, {
      key: "shadowOffsetX",
      get: function get() {
        return this._shadowOffsetX;
      },
      set: function set(t) {
        this._shadowOffsetX !== t && (this._shadowOffsetX = t, this._changed());
      }
    }, {
      key: "shadowOffsetY",
      get: function get() {
        return this._shadowOffsetY;
      },
      set: function set(t) {
        this._shadowOffsetY !== t && (this._shadowOffsetY = t, this._changed());
      }
    }, {
      key: "shadowBlur",
      get: function get() {
        return this._shadowBlur;
      },
      set: function set(t) {
        this._shadowBlur !== t && (this._shadowBlur = t, this._changed());
      }
    }, {
      key: "highlight",
      get: function get() {
        return this._highlight;
      },
      set: function set(t) {
        this._highlight !== t && (this._highlight = t, this._changed());
      }
    }, {
      key: "highlightHeight",
      get: function get() {
        return this._highlightHeight;
      },
      set: function set(t) {
        this._highlightHeight !== t && (this._highlightHeight = t, this._changed());
      }
    }, {
      key: "highlightColor",
      get: function get() {
        return this._highlightColor;
      },
      set: function set(t) {
        this._highlightColor !== t && (this._highlightColor = t, this._changed());
      }
    }, {
      key: "highlightOffset",
      get: function get() {
        return this._highlightOffset;
      },
      set: function set(t) {
        this._highlightOffset !== t && (this._highlightOffset = t, this._changed());
      }
    }, {
      key: "highlightPaddingLeft",
      get: function get() {
        return this._highlightPaddingLeft;
      },
      set: function set(t) {
        this._highlightPaddingLeft !== t && (this._highlightPaddingLeft = t, this._changed());
      }
    }, {
      key: "highlightPaddingRight",
      get: function get() {
        return this._highlightPaddingRight;
      },
      set: function set(t) {
        this._highlightPaddingRight !== t && (this._highlightPaddingRight = t, this._changed());
      }
    }, {
      key: "cutSx",
      get: function get() {
        return this._cutSx;
      },
      set: function set(t) {
        this._cutSx !== t && (this._cutSx = t, this._changed());
      }
    }, {
      key: "cutEx",
      get: function get() {
        return this._cutEx;
      },
      set: function set(t) {
        this._cutEx !== t && (this._cutEx = t, this._changed());
      }
    }, {
      key: "cutSy",
      get: function get() {
        return this._cutSy;
      },
      set: function set(t) {
        this._cutSy !== t && (this._cutSy = t, this._changed());
      }
    }, {
      key: "cutEy",
      get: function get() {
        return this._cutEy;
      },
      set: function set(t) {
        this._cutEy !== t && (this._cutEy = t, this._changed());
      }
    }, {
      key: "precision",
      get: function get() {
        return _get(_getPrototypeOf(TextTexture.prototype), "precision", this);
      },
      set: function set(t) {
        this.precision !== t && (_set(_getPrototypeOf(TextTexture.prototype), "precision", t, this, true), this._changed());
      }
    }]);

    return TextTexture;
  }(Texture);

  var t = TextTexture.prototype;
  t._text = "", t._w = 0, t._h = 0, t._fontStyle = "normal", t._fontSize = 40, t._fontFace = null, t._wordWrap = !0, t._wordWrapWidth = 0, t._textOverflow = "", t._lineHeight = null, t._textBaseline = "alphabetic", t._textAlign = "left", t._offsetY = null, t._maxLines = 0, t._maxLinesSuffix = "..", t._textColor = 4294967295, t._paddingLeft = 0, t._paddingRight = 0, t._shadow = !1, t._shadowColor = 4278190080, t._shadowOffsetX = 0, t._shadowOffsetY = 0, t._shadowBlur = 5, t._highlight = !1, t._highlightHeight = 0, t._highlightColor = 4278190080, t._highlightOffset = 0, t._highlightPaddingLeft = 0, t._highlightPaddingRight = 0, t._cutSx = 0, t._cutEx = 0, t._cutSy = 0, t._cutEy = 0;

  var SourceTexture =
  /*#__PURE__*/
  function (_Texture3) {
    _inherits(SourceTexture, _Texture3);

    function SourceTexture(t) {
      var _this10;

      _classCallCheck(this, SourceTexture);

      _this10 = _possibleConstructorReturn(this, _getPrototypeOf(SourceTexture).call(this, t)), _this10._textureSource = void 0;
      return _this10;
    }

    _createClass(SourceTexture, [{
      key: "_getTextureSource",
      value: function _getTextureSource() {
        return this._textureSource;
      }
    }, {
      key: "textureSource",
      get: function get() {
        return this._textureSource;
      },
      set: function set(t) {
        t !== this._textureSource && (t.isResultTexture && (this._precision = this.stage.getRenderPrecision()), this._textureSource = t, this._changed());
      }
    }]);

    return SourceTexture;
  }(Texture);

  var Transition =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(Transition, _EventEmitter);

    function Transition(t, e, i, s) {
      var _this11;

      _classCallCheck(this, Transition);

      _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Transition).call(this)), _this11.manager = t, _this11._settings = e, _this11._element = i, _this11._getter = i.constructor.getGetter(s), _this11._setter = i.constructor.getSetter(s), _this11._merger = e.merger, _this11._merger || (_this11._merger = i.constructor.getMerger(s)), _this11._startValue = _this11._getter(_this11._element), _this11._targetValue = _this11._startValue, _this11._p = 1, _this11._delayLeft = 0;
      return _this11;
    }

    _createClass(Transition, [{
      key: "start",
      value: function start(t) {
        this._startValue = this._getter(this._element), this.isAttached() ? t === this._startValue ? this.reset(t, 1) : (this._targetValue = t, this._p = 0, this._delayLeft = this._settings.delay, this.emit("start"), this.add()) : (this._targetValue = t, this._p = 1, this._updateDrawValue());
      }
    }, {
      key: "finish",
      value: function finish() {
        this._p < 1 && (this._p = 1);
      }
    }, {
      key: "stop",
      value: function stop() {
        this.emit("stop"), this.manager.removeActive(this);
      }
    }, {
      key: "pause",
      value: function pause() {
        this.stop();
      }
    }, {
      key: "play",
      value: function play() {
        this.manager.addActive(this);
      }
    }, {
      key: "reset",
      value: function reset(t, e) {
        this.isAttached() ? (this._startValue = this._getter(this._element), this._targetValue = t, this._p = e, this.add()) : (this._startValue = this._getter(this._element), this._targetValue = t, this._p = 1, this._updateDrawValue());
      }
    }, {
      key: "_updateDrawValue",
      value: function _updateDrawValue() {
        this._setter(this._element, this.getDrawValue());
      }
    }, {
      key: "add",
      value: function add() {
        this.manager.addActive(this);
      }
    }, {
      key: "isAttached",
      value: function isAttached() {
        return this._element.attached;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this._p < 1;
      }
    }, {
      key: "progress",
      value: function progress(t) {
        if (this.isAttached() || (this._p = 1), this.p < 1) {
          if (this.delayLeft > 0) {
            if (this._delayLeft -= t, !(this.delayLeft < 0)) return;
            t = -this.delayLeft, this._delayLeft = 0, this.emit("delayEnd");
          }

          0 == this._settings.duration ? this._p = 1 : this._p += t / this._settings.duration, this._p >= 1 && (this._p = 1);
        }

        this._updateDrawValue(), this.invokeListeners();
      }
    }, {
      key: "invokeListeners",
      value: function invokeListeners() {
        this.emit("progress", this.p), 1 === this.p && this.emit("finish");
      }
    }, {
      key: "updateTargetValue",
      value: function updateTargetValue(t) {
        var e = this._settings.timingFunctionImpl(this.p);

        1 === e ? this._targetValue = t : 0 === e ? (this._startValue = this._targetValue, this._targetValue = t) : (this._startValue = t - (t - this._targetValue) / (1 - e), this._targetValue = t);
      }
    }, {
      key: "getDrawValue",
      value: function getDrawValue() {
        if (this.p >= 1) return this.targetValue;
        {
          var _t58 = this._settings._timingFunctionImpl(this.p);

          return this._merger(this.targetValue, this.startValue, _t58);
        }
      }
    }, {
      key: "skipDelay",
      value: function skipDelay() {
        this._delayLeft = 0;
      }
    }, {
      key: "startValue",
      get: function get() {
        return this._startValue;
      }
    }, {
      key: "targetValue",
      get: function get() {
        return this._targetValue;
      }
    }, {
      key: "p",
      get: function get() {
        return this._p;
      }
    }, {
      key: "delayLeft",
      get: function get() {
        return this._delayLeft;
      }
    }, {
      key: "element",
      get: function get() {
        return this._element;
      }
    }, {
      key: "settings",
      get: function get() {
        return this._settings;
      },
      set: function set(t) {
        this._settings = t;
      }
    }]);

    return Transition;
  }(EventEmitter);

  Transition.prototype.isTransition = !0;

  var ObjectList =
  /*#__PURE__*/
  function () {
    function ObjectList() {
      _classCallCheck(this, ObjectList);

      this._items = [], this._refs = {};
    }

    _createClass(ObjectList, [{
      key: "get",
      value: function get() {
        return this._items;
      }
    }, {
      key: "add",
      value: function add(t) {
        this.addAt(t, this._items.length);
      }
    }, {
      key: "addAt",
      value: function addAt(t, e) {
        if (!(e >= 0 && e <= this._items.length)) throw new Error("addAt: The index " + e + " is out of bounds " + this._items.length);
        {
          var i = this._items.indexOf(t);

          if (i === e) return t;
          -1 != i ? this.setAt(t, e) : (t.ref && (this._refs[t.ref] = t), this._items.splice(e, 0, t), this.onAdd(t, e));
        }
      }
    }, {
      key: "replaceByRef",
      value: function replaceByRef(t) {
        if (!t.ref) throw new Error("replaceByRef: no ref specified in item");
        {
          var _e57 = this.getByRef(t.ref);

          if (!_e57) throw new Error("replaceByRef: no item found with reference: " + t.ref);
          this.replace(t, _e57);
        }
        this.addAt(t, this._items.length);
      }
    }, {
      key: "replace",
      value: function replace(t, e) {
        var i = this.getIndex(e);
        if (-1 === i) throw new Error("replace: The previous item does not exist");
        this.setAt(t, i);
      }
    }, {
      key: "setAt",
      value: function setAt(t, e) {
        if (!(e >= 0 && e <= this._items.length)) throw new Error("setAt: The index " + e + " is out of bounds " + this._items.length);
        {
          var i = this._items.indexOf(t);

          if (-1 != i) {
            if (i !== e) {
              var s = i;
              s !== e && (this._items.splice(s, 1), this._items.splice(e, 0, t), this.onMove(t, s, e));
            }
          } else {
            e < this._items.length && this._items[e].ref && (this._refs[this._items[e].ref] = void 0);
            var _i16 = this._items[e];
            this._items[e] = t, t.ref && (this._refs[t.ref] = t), this.onSet(t, e, _i16);
          }
        }
      }
    }, {
      key: "getAt",
      value: function getAt(t) {
        return this._items[t];
      }
    }, {
      key: "getIndex",
      value: function getIndex(t) {
        return this._items.indexOf(t);
      }
    }, {
      key: "remove",
      value: function remove(t) {
        var e = this._items.indexOf(t);

        -1 !== e && this.removeAt(e);
      }
    }, {
      key: "removeAt",
      value: function removeAt(t) {
        var e = this._items[t];
        return e.ref && (this._refs[e.ref] = void 0), this._items.splice(t, 1), this.onRemove(e, t), e;
      }
    }, {
      key: "clear",
      value: function clear() {
        if (this._items.length) {
          var _t59 = this._items;
          this._items = [], this._refs = {}, this.onSync(_t59, [], []);
        }
      }
    }, {
      key: "a",
      value: function a(t) {
        if (Utils.isObjectLiteral(t)) {
          var _e58 = this.createItem(t);

          return _e58.patch(t), this.add(_e58), _e58;
        }

        if (Array.isArray(t)) {
          for (var _e59 = 0, i = t.length; _e59 < i; _e59++) {
            this.a(t[_e59]);
          }

          return null;
        }

        if (this.isItem(t)) return this.add(t), t;
      }
    }, {
      key: "_getRefs",
      value: function _getRefs() {
        return this._refs;
      }
    }, {
      key: "getByRef",
      value: function getByRef(t) {
        return this._refs[t];
      }
    }, {
      key: "clearRef",
      value: function clearRef(t) {
        delete this._refs[t];
      }
    }, {
      key: "setRef",
      value: function setRef(t, e) {
        this._refs[t] = e;
      }
    }, {
      key: "patch",
      value: function patch(t) {
        Utils.isObjectLiteral(t) ? this._setByObject(t) : Array.isArray(t) && this._setByArray(t);
      }
    }, {
      key: "_setByObject",
      value: function _setByObject(t) {
        var e = this._getRefs(),
            i = Object.keys(t);

        for (var s = 0, r = i.length; s < r; s++) {
          var _r5 = i[s],
              n = t[_r5],
              o = e[_r5];
          if (o) {
            if (this.isItem(n)) {
              if (o !== n) {
                var _t60 = this.getIndex(o);

                n.ref = _r5, this.setAt(n, _t60);
              }
            } else o.patch(n);
          } else this.isItem(n) ? (n.ref = _r5, this.add(n)) : ((o = this.createItem(n)).ref = _r5, o.patch(n), this.add(o));
        }
      }
    }, {
      key: "_equalsArray",
      value: function _equalsArray(t) {
        var e = !0;
        if (t.length === this._items.length) for (var i = 0, s = this._items.length; i < s && e; i++) {
          e = e && this._items[i] === t[i];
        } else e = !1;
        return e;
      }
    }, {
      key: "_setByArray",
      value: function _setByArray(t) {
        if (this._equalsArray(t)) return;

        for (var _t61 = 0, _e60 = this._items.length; _t61 < _e60; _t61++) {
          this._items[_t61].marker = !0;
        }

        var e,
            i = [];

        for (var s = 0, r = t.length; s < r; s++) {
          var _r6 = t[s];
          if (this.isItem(_r6)) _r6.marker = !1, i.push(_r6);else {
            var _t62 = void 0,
                _s9 = _r6.ref;

            _s9 && (e || (e = this._getRefs()), _t62 = e[_s9]), _t62 ? _t62.marker = !1 : _t62 = this.createItem(_r6), Utils.isObjectLiteral(_r6) && _t62.patch(_r6), i.push(_t62);
          }
        }

        this._setItems(i);
      }
    }, {
      key: "_setItems",
      value: function _setItems(t) {
        var e = this._items;
        this._items = t;
        var i = e.filter(function (t) {
          var e = t.marker;
          return delete t.marker, e;
        }),
            s = t.filter(function (t) {
          return -1 === e.indexOf(t);
        });

        if (i.length || s.length) {
          this._refs = {};

          for (var _t63 = 0, _e61 = this._items.length; _t63 < _e61; _t63++) {
            var _e62 = this._items[_t63].ref;
            _e62 && (this._refs[_e62] = this._items[_t63]);
          }
        }

        this.onSync(i, s, t);
      }
    }, {
      key: "sort",
      value: function sort(t) {
        var e = this._items.slice();

        e.sort(t), this._setByArray(e);
      }
    }, {
      key: "onAdd",
      value: function onAdd(t, e) {}
    }, {
      key: "onRemove",
      value: function onRemove(t, e) {}
    }, {
      key: "onSync",
      value: function onSync(t, e, i) {}
    }, {
      key: "onSet",
      value: function onSet(t, e, i) {}
    }, {
      key: "onMove",
      value: function onMove(t, e, i) {}
    }, {
      key: "createItem",
      value: function createItem(t) {
        throw new Error("ObjectList.createItem must create and return a new object");
      }
    }, {
      key: "isItem",
      value: function isItem(t) {
        return !1;
      }
    }, {
      key: "forEach",
      value: function forEach(t) {
        this.get().forEach(t);
      }
    }, {
      key: "first",
      get: function get() {
        return this._items[0];
      }
    }, {
      key: "last",
      get: function get() {
        return this._items.length ? this._items[this._items.length - 1] : void 0;
      }
    }, {
      key: "length",
      get: function get() {
        return this._items.length;
      }
    }]);

    return ObjectList;
  }();

  var ElementChildList =
  /*#__PURE__*/
  function (_ObjectList) {
    _inherits(ElementChildList, _ObjectList);

    function ElementChildList(t) {
      var _this12;

      _classCallCheck(this, ElementChildList);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(ElementChildList).call(this)), _this12._element = t;
      return _this12;
    }

    _createClass(ElementChildList, [{
      key: "_connectParent",
      value: function _connectParent(t) {
        var e = t.parent;

        if (e && e !== this._element) {
          var i = t.parent.childList,
              s = i.getIndex(t);
          t.ref && (i._refs[t.ref] = void 0), i._items.splice(s, 1), e.core.removeChildAt(s);
        }

        t._setParent(this._element);
      }
    }, {
      key: "onAdd",
      value: function onAdd(t, e) {
        this._connectParent(t), this._element.core.addChildAt(e, t.core);
      }
    }, {
      key: "onRemove",
      value: function onRemove(t, e) {
        t._setParent(null), this._element.core.removeChildAt(e);
      }
    }, {
      key: "onSync",
      value: function onSync(t, e, i) {
        for (var _e63 = 0, _i17 = t.length; _e63 < _i17; _e63++) {
          t[_e63]._setParent(null);
        }

        for (var _t64 = 0, _i18 = e.length; _t64 < _i18; _t64++) {
          this._connectParent(e[_t64]);
        }

        var gc = function gc(t) {
          return t.core;
        };

        this._element.core.syncChildren(t.map(gc), e.map(gc), i.map(gc));
      }
    }, {
      key: "onSet",
      value: function onSet(t, e, i) {
        i._setParent(null), this._connectParent(t), this._element.core.setChildAt(e, t.core);
      }
    }, {
      key: "onMove",
      value: function onMove(t, e, i) {
        this._element.core.moveChild(e, i);
      }
    }, {
      key: "createItem",
      value: function createItem(t) {
        return t.type ? new t.type(this._element.stage) : this._element.stage.createElement();
      }
    }, {
      key: "isItem",
      value: function isItem(t) {
        return t.isElement;
      }
    }]);

    return ElementChildList;
  }(ObjectList);

  var Element =
  /*#__PURE__*/
  function () {
    function Element(t) {
      _classCallCheck(this, Element);

      this.stage = t, this.__id = Element.id++, this.__start(), this._hasEventListeners = !1, this.__core = new ElementCore(this), this.__ref = null, this.__attached = !1, this.__enabled = !1, this.__active = !1, this.__parent = null, this.__texture = null, this.__displayedTexture = null, this.__tags = null, this.__treeTags = null, this.__tagRoot = !1, this.__childList = null, this._w = 0, this._h = 0;
    }

    _createClass(Element, [{
      key: "__start",
      value: function __start() {}
    }, {
      key: "setAsRoot",
      value: function setAsRoot() {
        this.__core.setAsRoot(), this._updateAttachedFlag(), this._updateEnabledFlag();
      }
    }, {
      key: "_setParent",
      value: function _setParent(t) {
        this.__parent !== t && (this.__parent && this._unsetTagsParent(), this.__parent = t, t && this._setTagsParent(), this._updateAttachedFlag(), this._updateEnabledFlag(), this.isRoot && t && this._throwError("Root should not be added as a child! Results are unspecified!"));
      }
    }, {
      key: "getDepth",
      value: function getDepth() {
        var t = 0,
            e = this.__parent;

        for (; e;) {
          t++, e = e.__parent;
        }

        return t;
      }
    }, {
      key: "getAncestor",
      value: function getAncestor(t) {
        var e = this;

        for (; t > 0 && e.__parent;) {
          e = e.__parent, t--;
        }

        return e;
      }
    }, {
      key: "getAncestorAtDepth",
      value: function getAncestorAtDepth(t) {
        var e = this.getDepth() - t;
        return e < 0 ? null : this.getAncestor(e);
      }
    }, {
      key: "isAncestorOf",
      value: function isAncestorOf(t) {
        var e = t;

        for (; e = e.parent;) {
          if (this === e) return !0;
        }

        return !1;
      }
    }, {
      key: "getSharedAncestor",
      value: function getSharedAncestor(t) {
        var e = this,
            i = t,
            s = e.getDepth(),
            r = i.getDepth();
        s > r ? e = e.getAncestor(s - r) : r > s && (i = i.getAncestor(r - s));

        do {
          if (e === i) return e;
          e = e.__parent, i = i.__parent;
        } while (e && i);

        return null;
      }
    }, {
      key: "_isAttached",
      value: function _isAttached() {
        return this.__parent ? this.__parent.__attached : this.stage.root === this;
      }
    }, {
      key: "_isEnabled",
      value: function _isEnabled() {
        return this.__core.visible && this.__core.alpha > 0 && (this.__parent ? this.__parent.__enabled : this.stage.root === this);
      }
    }, {
      key: "_isActive",
      value: function _isActive() {
        return this._isEnabled() && this.withinBoundsMargin;
      }
    }, {
      key: "_updateAttachedFlag",
      value: function _updateAttachedFlag() {
        var t = this._isAttached();

        if (this.__attached !== t) {
          this.__attached = t, t && this._onSetup();

          var _e64 = this._children.get();

          if (_e64) {
            var _t65 = _e64.length;
            if (_t65 > 0) for (var i = 0; i < _t65; i++) {
              _e64[i]._updateAttachedFlag();
            }
          }

          t ? this._onAttach() : this._onDetach();
        }
      }
    }, {
      key: "_updateEnabledFlag",
      value: function _updateEnabledFlag() {
        var t = this._isEnabled();

        if (this.__enabled !== t) {
          t ? (this._onEnabled(), this._setEnabledFlag()) : (this._onDisabled(), this._unsetEnabledFlag());

          var _e65 = this._children.get();

          if (_e65) {
            var _t66 = _e65.length;
            if (_t66 > 0) for (var i = 0; i < _t66; i++) {
              _e65[i]._updateEnabledFlag();
            }
          }
        }
      }
    }, {
      key: "_setEnabledFlag",
      value: function _setEnabledFlag() {
        this.__enabled = !0, this._updateDimensions(), this._updateTextureCoords(), this.__texture && this.__texture.addElement(this), this.withinBoundsMargin && this._setActiveFlag(), this.__core.shader && this.__core.shader.addElement(this.__core);
      }
    }, {
      key: "_unsetEnabledFlag",
      value: function _unsetEnabledFlag() {
        var _this13 = this;

        this.__active && this._unsetActiveFlag(), this.__texture && this.__texture.removeElement(this), this.__core.shader && this.__core.shader.removeElement(this.__core), this._texturizer && this.texturizer.filters.forEach(function (t) {
          return t.removeElement(_this13.__core);
        }), this.__enabled = !1;
      }
    }, {
      key: "_setActiveFlag",
      value: function _setActiveFlag() {
        this.__active = !0, this.__texture && this.__texture.incActiveCount(), this.__texture && this._enableTexture(), this._onActive();
      }
    }, {
      key: "_unsetActiveFlag",
      value: function _unsetActiveFlag() {
        this.__texture && this.__texture.decActiveCount(), this.__active = !1, this.__texture && this._disableTexture(), this._hasTexturizer() && this.texturizer.deactivate(), this._onInactive();
      }
    }, {
      key: "_onSetup",
      value: function _onSetup() {}
    }, {
      key: "_onAttach",
      value: function _onAttach() {}
    }, {
      key: "_onDetach",
      value: function _onDetach() {}
    }, {
      key: "_onEnabled",
      value: function _onEnabled() {}
    }, {
      key: "_onDisabled",
      value: function _onDisabled() {}
    }, {
      key: "_onActive",
      value: function _onActive() {}
    }, {
      key: "_onInactive",
      value: function _onInactive() {}
    }, {
      key: "_onResize",
      value: function _onResize() {}
    }, {
      key: "_getRenderWidth",
      value: function _getRenderWidth() {
        return this._w ? this._w : this.__displayedTexture ? this.__displayedTexture.getRenderWidth() : this.__texture ? this.__texture.getRenderWidth() : 0;
      }
    }, {
      key: "_getRenderHeight",
      value: function _getRenderHeight() {
        return this._h ? this._h : this.__displayedTexture ? this.__displayedTexture.getRenderHeight() : this.__texture ? this.__texture.getRenderHeight() : 0;
      }
    }, {
      key: "textureIsLoaded",
      value: function textureIsLoaded() {
        return this.__texture && this.__texture.isLoaded();
      }
    }, {
      key: "loadTexture",
      value: function loadTexture() {
        this.__texture && (this.__texture.load(), this.__texture.isUsed() && this._isEnabled() || this._updateDimensions());
      }
    }, {
      key: "_enableTextureError",
      value: function _enableTextureError() {
        var t = this.__texture.loadError;
        t && this.emit("txError", t, this.__texture._source);
      }
    }, {
      key: "_enableTexture",
      value: function _enableTexture() {
        this.__texture.isLoaded() ? this._setDisplayedTexture(this.__texture) : (this._setDisplayedTexture(null), this._enableTextureError());
      }
    }, {
      key: "_disableTexture",
      value: function _disableTexture() {
        this._setDisplayedTexture(null);
      }
    }, {
      key: "_setDisplayedTexture",
      value: function _setDisplayedTexture(t) {
        var e = this.__displayedTexture;
        e && t !== e && this.__texture !== e && e.removeElement(this);
        var i = this.__core.displayedTextureSource ? this.__core.displayedTextureSource._source : null,
            s = (t ? t._source : null) !== i;
        this.__displayedTexture = t, this._updateDimensions(), this.__displayedTexture ? s && (this._updateTextureCoords(), this.__core.setDisplayedTextureSource(this.__displayedTexture._source)) : this.__core.setDisplayedTextureSource(null), s && (this.__displayedTexture ? this.emit("txLoaded", this.__displayedTexture) : this.emit("txUnloaded", this.__displayedTexture));
      }
    }, {
      key: "onTextureSourceLoaded",
      value: function onTextureSourceLoaded() {
        this.active && this._setDisplayedTexture(this.__texture);
      }
    }, {
      key: "onTextureSourceLoadError",
      value: function onTextureSourceLoadError(t) {
        this.emit("txError", t, this.__texture._source);
      }
    }, {
      key: "forceRenderUpdate",
      value: function forceRenderUpdate() {
        this.__core.setHasRenderUpdates(3);
      }
    }, {
      key: "onDisplayedTextureClippingChanged",
      value: function onDisplayedTextureClippingChanged() {
        this._updateDimensions(), this._updateTextureCoords();
      }
    }, {
      key: "onPrecisionChanged",
      value: function onPrecisionChanged() {
        this._updateDimensions();
      }
    }, {
      key: "onDimensionsChanged",
      value: function onDimensionsChanged(t, e) {
        this.texture instanceof TextTexture && (this.texture.w = t, this.texture.h = e, this.w = t, this.h = e);
      }
    }, {
      key: "_updateDimensions",
      value: function _updateDimensions() {
        var t = this._getRenderWidth(),
            e = this._getRenderHeight(),
            i = !1;

        t && e || !this.__displayedTexture && this.__texture && (t = t || this.__texture.mw, e = e || this.__texture.mh, t && e || !this.__texture.isAutosizeTexture() || (i = !0)), this.__core.setDimensions(t, e, i) && this._onResize();
      }
    }, {
      key: "_updateTextureCoords",
      value: function _updateTextureCoords() {
        if (this.displayedTexture && this.displayedTexture._source) {
          var _t67 = this.displayedTexture,
              _e66 = this.displayedTexture._source,
              i = 0,
              s = 0,
              r = 1,
              n = 1;

          if (_t67.clipping) {
            var o,
                a,
                h,
                l,
                _ = _e66.getRenderWidth(),
                u = _e66.getRenderHeight();

            o = 1 / _, a = 1 / u, h = _t67.pw ? _t67.pw * o : (_ - _t67.px) * o, l = _t67.ph ? _t67.ph * a : (u - _t67.py) * a, o *= _t67.px, a *= _t67.py, i = o, s = a, r = r * h + o, n = n * l + a, i = Math.max(0, i), s = Math.max(0, s), r = Math.min(1, r), n = Math.min(1, n);
          }

          this.__core.setTextureCoords(i, s, r, n);
        }
      }
    }, {
      key: "getCornerPoints",
      value: function getCornerPoints() {
        return this.__core.getCornerPoints();
      }
    }, {
      key: "_unsetTagsParent",
      value: function _unsetTagsParent() {
        var _this14 = this;

        this.__tags && this.__tags.forEach(function (t) {
          var e = _this14;

          for (; e = e.__parent;) {
            if (e.__treeTags.get(t)["delete"](_this14), e.__tagRoot) break;
          }
        });
        var t = null,
            e = 0;
        if (this.__treeTags && !this.__tagRoot && (e = (t = Utils.iteratorToArray(this.__treeTags.keys())).length) > 0) for (var i = 0; i < e; i++) {
          var _e67 = this.__treeTags.get(t[i]),
              s = this;

          var _loop = function _loop() {
            var r = s.__treeTags.get(t[i]);

            if (_e67.forEach(function (t) {
              r["delete"](t);
            }), s.__tagRoot) return "break";
          };

          for (; s = s.__parent;) {
            var _ret = _loop();

            if (_ret === "break") break;
          }
        }
      }
    }, {
      key: "_setTagsParent",
      value: function _setTagsParent() {
        var _this15 = this;

        this.__tags && this.__tags.forEach(function (t) {
          var e = _this15;

          for (; e = e.__parent;) {
            e.__treeTags || (e.__treeTags = new Map());

            var i = e.__treeTags.get(t);

            if (i || (i = new Set(), e.__treeTags.set(t, i)), i.add(_this15), e.__tagRoot) break;
          }
        }), this.__treeTags && this.__treeTags.size && (this.__tagRoot || this.__treeTags.forEach(function (t, e) {
          var i = _this15;

          var _loop2 = function _loop2() {
            i.__tagRoot, i.__treeTags || (i.__treeTags = new Map());

            var s = i.__treeTags.get(e);

            s || (s = new Set(), i.__treeTags.set(e, s)), t.forEach(function (t) {
              s.add(t);
            });
          };

          for (; !i.__tagRoot && (i = i.__parent);) {
            _loop2();
          }
        }));
      }
    }, {
      key: "_getByTag",
      value: function _getByTag(t) {
        if (!this.__treeTags) return [];

        var e = this.__treeTags.get(t);

        return e ? Utils.setToArray(e) : [];
      }
    }, {
      key: "getTags",
      value: function getTags() {
        return this.__tags ? this.__tags : [];
      }
    }, {
      key: "setTags",
      value: function setTags(t) {
        t = t.reduce(function (t, e) {
          return t.concat(e.split(" "));
        }, []), this.__ref && t.push(this.__ref);
        var e,
            i = t.length,
            s = [],
            r = [];

        for (e = 0; e < i; e++) {
          this.hasTag(t[e]) || r.push(t[e]);
        }

        var n = this.tags || [];

        for (i = n.length, e = 0; e < i; e++) {
          -1 == t.indexOf(n[e]) && s.push(n[e]);
        }

        for (e = 0; e < s.length; e++) {
          this.removeTag(s[e]);
        }

        for (e = 0; e < r.length; e++) {
          this.addTag(r[e]);
        }
      }
    }, {
      key: "addTag",
      value: function addTag(t) {
        if (-1 === t.indexOf(" ")) Utils.isUcChar(t.charCodeAt(0)) && this._throwError("Tag may not start with an upper case character."), this._addTag(t);else {
          var _e68 = t.split(" ");

          for (var _t68 = 0, i = _e68.length; _t68 < i; _t68++) {
            var _i19 = _e68[_t68];
            Utils.isUcChar(_i19.charCodeAt(0)) && this._throwError("Tag may not start with an upper case character."), this._addTag(_i19);
          }
        }
      }
    }, {
      key: "_addTag",
      value: function _addTag(t) {
        if (this.__tags || (this.__tags = []), -1 === this.__tags.indexOf(t)) {
          this.__tags.push(t);

          var _e69 = this.__parent;
          if (_e69) do {
            _e69.__treeTags || (_e69.__treeTags = new Map());

            var i = _e69.__treeTags.get(t);

            i || (i = new Set(), _e69.__treeTags.set(t, i)), i.add(this);
          } while (!_e69.__tagRoot && (_e69 = _e69.__parent));
        }
      }
    }, {
      key: "removeTag",
      value: function removeTag(t) {
        var e = this.__tags.indexOf(t);

        if (-1 !== e) {
          this.__tags.splice(e, 1);

          var i = this.__parent;
          if (i) do {
            var _e70 = i.__treeTags.get(t);

            _e70 && _e70["delete"](this);
          } while (!i.__tagRoot && (i = i.__parent));
        }
      }
    }, {
      key: "hasTag",
      value: function hasTag(t) {
        return this.__tags && -1 !== this.__tags.indexOf(t);
      }
    }, {
      key: "_tag",
      value: function _tag(t) {
        if (-1 !== t.indexOf(".")) return this.mtag(t)[0];

        if (this.__treeTags) {
          var _e71 = this.__treeTags.get(t);

          if (_e71) {
            var _t69 = _e71.values().next();

            return _t69 ? _t69.value : void 0;
          }
        }
      }
    }, {
      key: "mtag",
      value: function mtag(t) {
        if (t.indexOf(".") >= 0) {
          var _e72 = t.split("."),
              i = this._getByTag(_e72[0]),
              s = 1,
              r = _e72.length;

          for (; i.length && s < r;) {
            var _t70 = [];

            for (var _r7 = 0, n = i.length; _r7 < n; _r7++) {
              _t70 = _t70.concat(i[_r7]._getByTag(_e72[s]));
            }

            i = _t70, s++;
          }

          return i;
        }

        return this._getByTag(t);
      }
    }, {
      key: "stag",
      value: function stag(t, e) {
        var i = this.mtag(t),
            s = i.length;

        for (var _t71 = 0; _t71 < s; _t71++) {
          Base.patchObject(i[_t71], e);
        }
      }
    }, {
      key: "sel",
      value: function sel(t) {
        var e = this.select(t);
        return e.length ? e[0] : void 0;
      }
    }, {
      key: "select",
      value: function select(t) {
        if (-1 !== t.indexOf(",")) {
          var _e73 = t.split(","),
              i = [];

          for (var _t72 = 0; _t72 < _e73.length; _t72++) {
            i = i.concat(this._select(_e73[_t72]));
          }

          return i;
        }

        return this._select(t);
      }
    }, {
      key: "_select",
      value: function _select(t) {
        if ("" === t) return [this];
        var e,
            i = t.indexOf("."),
            s = t.indexOf(">");
        return -1 === i && -1 === s ? this.mtag(t) : (0 === s ? (e = !0, t = t.substr(1)) : 0 === i ? (e = !1, t = t.substr(1)) : e = !1, this._selectChilds(t, e));
      }
    }, {
      key: "_selectChilds",
      value: function _selectChilds(t, e) {
        var i = t.indexOf("."),
            s = t.indexOf(">");

        if (-1 === i && -1 === s) {
          if (e) {
            var _e74 = this.getByRef(t);

            return _e74 ? [_e74] : [];
          }

          return this.mtag(t);
        }

        if (-1 === s || -1 !== i && i < s) {
          var _s10;

          var r = t.substr(0, i);

          if (e) {
            var _t73 = this.getByRef(r);

            _s10 = _t73 ? [_t73] : [];
          } else _s10 = this.mtag(r);

          var n = [];
          var o = t.substr(i + 1);

          for (var _t74 = 0, _e75 = _s10.length; _t74 < _e75; _t74++) {
            n = n.concat(_s10[_t74]._selectChilds(o, !1));
          }

          return n;
        }

        {
          var _i20;

          var _r8 = t.substr(0, s);

          if (e) {
            var _t75 = this.getByRef(_r8);

            _i20 = _t75 ? [_t75] : [];
          } else _i20 = this.mtag(_r8);

          var _n4 = [];

          var _o3 = t.substr(s + 1);

          for (var _t76 = 0, _e76 = _i20.length; _t76 < _e76; _t76++) {
            _n4 = _n4.concat(_i20[_t76]._selectChilds(_o3, !0));
          }

          return _n4;
        }
      }
    }, {
      key: "getByRef",
      value: function getByRef(t) {
        return this.childList.getByRef(t);
      }
    }, {
      key: "getLocationString",
      value: function getLocationString() {
        var t;
        t = this.__parent ? this.__parent._children.getIndex(this) : "R";
        var e = this.getTags(),
            i = this.__parent ? this.__parent.getLocationString() : "";
        return this.ref ? i += ":[" + t + "]" + this.ref : e.length ? i += ":[" + t + "]" + e.join(",") : i += ":[" + t + "]#" + this.id, i;
      }
    }, {
      key: "toString",
      value: function toString() {
        var t = this.getSettings();
        return Element.getPrettyString(t, "");
      }
    }, {
      key: "getSettings",
      value: function getSettings() {
        var t = this.getNonDefaults(),
            e = this._children.get();

        if (e) {
          var i = e.length;

          if (i) {
            var s = [];
            var r = !1;

            for (var _t77 = 0; _t77 < i; _t77++) {
              s.push(e[_t77].getSettings()), r = r || !e[_t77].ref;
            }

            r ? t.children = s : (t.children = {}, s.forEach(function (e) {
              t.children[e.ref] = e;
            }));
          }
        }

        return t.id = this.id, t;
      }
    }, {
      key: "getNonDefaults",
      value: function getNonDefaults() {
        var t = {};

        if (this.constructor !== Element && (t.type = this.constructor.name), this.__ref && (t.ref = this.__ref), this.__tags && this.__tags.length && (t.tags = this.__tags), 0 !== this.x && (t.x = this.x), 0 !== this.y && (t.y = this.y), 0 !== this.w && (t.w = this.w), 0 !== this.h && (t.h = this.h), this.scaleX === this.scaleY ? 1 !== this.scaleX && (t.scale = this.scaleX) : (1 !== this.scaleX && (t.scaleX = this.scaleX), 1 !== this.scaleY && (t.scaleY = this.scaleY)), this.pivotX === this.pivotY ? .5 !== this.pivotX && (t.pivot = this.pivotX) : (.5 !== this.pivotX && (t.pivotX = this.pivotX), .5 !== this.pivotY && (t.pivotY = this.pivotY)), this.mountX === this.mountY ? 0 !== this.mountX && (t.mount = this.mountX) : (0 !== this.mountX && (t.mountX = this.mountX), 0 !== this.mountY && (t.mountY = this.mountY)), 1 !== this.alpha && (t.alpha = this.alpha), this.visible || (t.visible = !1), 0 !== this.rotation && (t.rotation = this.rotation), this.colorUl === this.colorUr && this.colorBl === this.colorBr && this.colorUl === this.colorBl ? 4294967295 !== this.colorUl && (t.color = this.colorUl.toString(16)) : (4294967295 !== this.colorUl && (t.colorUl = this.colorUl.toString(16)), 4294967295 !== this.colorUr && (t.colorUr = this.colorUr.toString(16)), 4294967295 !== this.colorBl && (t.colorBl = this.colorBl.toString(16)), 4294967295 !== this.colorBr && (t.colorBr = this.colorBr.toString(16))), this.zIndex && (t.zIndex = this.zIndex), this.forceZIndexContext && (t.forceZIndexContext = !0), this.clipping && (t.clipping = this.clipping), this.clipbox || (t.clipbox = this.clipbox), this.__texture) {
          var _e77 = this.__texture.getNonDefaults();

          Object.keys(_e77).length && (t.texture = _e77);
        }

        if (this.shader) {
          var _e78 = this.shader.getNonDefaults();

          Object.keys(_e78).length && (t.shader = _e78);
        }

        return this._hasTexturizer() && (this.texturizer.enabled && (t.renderToTexture = this.texturizer.enabled), this.texturizer.lazy && (t.renderToTextureLazy = this.texturizer.lazy), this.texturizer.colorize && (t.colorizeResultTexture = this.texturizer.colorize), this.texturizer.renderOffscreen && (t.renderOffscreen = this.texturizer.renderOffscreen)), t;
      }
    }, {
      key: "_enableWithinBoundsMargin",
      value: function _enableWithinBoundsMargin() {
        this.__enabled && this._setActiveFlag();
      }
    }, {
      key: "_disableWithinBoundsMargin",
      value: function _disableWithinBoundsMargin() {
        this.__active && this._unsetActiveFlag();
      }
    }, {
      key: "hasChildren",
      value: function hasChildren() {
        return this._allowChildrenAccess() && this.__childList && this.__childList.length > 0;
      }
    }, {
      key: "_allowChildrenAccess",
      value: function _allowChildrenAccess() {
        return !0;
      }
    }, {
      key: "add",
      value: function add(t) {
        return this.childList.a(t);
      }
    }, {
      key: "enableTextTexture",
      value: function enableTextTexture() {
        return this.texture && this.texture instanceof TextTexture || (this.texture = new TextTexture(this.stage), this.texture.w || this.texture.h || (this.texture.w = this.w, this.texture.h = this.h)), this.texture;
      }
    }, {
      key: "forceUpdate",
      value: function forceUpdate() {
        this.__core._setHasUpdates();
      }
    }, {
      key: "_hasTexturizer",
      value: function _hasTexturizer() {
        return !!this.__core._texturizer;
      }
    }, {
      key: "getTexture",
      value: function getTexture() {
        return this.texturizer._getTextureSource();
      }
    }, {
      key: "patch",
      value: function patch(t) {
        var e = Object.keys(t);

        for (var i = 0, s = e.length; i < s; i++) {
          var _s11 = e[i];

          var r = t[_s11],
              n = _s11.charCodeAt(0);

          if (Utils.isUcChar(n)) {
            var _t78 = this.getByRef(_s11);

            if (_t78) void 0 === r ? _t78.parent && _t78.parent.childList.remove(_t78) : Utils.isObjectLiteral(r) ? _t78.patch(r) : r.isElement ? (r.ref = _s11, this.childList.replace(r, _t78)) : this._throwError("Unexpected value for path: " + _s11);else if (void 0 !== r) {
              var _t79 = void 0;

              Utils.isObjectLiteral(r) ? (_t79 = this.childList.createItem(r)).patch(r) : Utils.isObject(r) && (_t79 = r), _t79.isElement && (_t79.ref = _s11), this.childList.a(_t79);
            }
          } else Base.patchObjectProperty(this, _s11, r);
        }
      }
    }, {
      key: "_throwError",
      value: function _throwError(t) {
        throw new Error(this.constructor.name + " (" + this.getLocationString() + "): " + t);
      }
    }, {
      key: "animation",
      value: function animation(t) {
        return this.stage.animations.createAnimation(this, t);
      }
    }, {
      key: "transition",
      value: function transition(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return null === e ? this._getTransition(t) : (this._setTransition(t, e), null);
      }
    }, {
      key: "fastForward",
      value: function fastForward(t) {
        if (this._transitions) {
          var _e79 = this._transitions[t];
          _e79 && _e79.isTransition && _e79.finish();
        }
      }
    }, {
      key: "_getTransition",
      value: function _getTransition(t) {
        this._transitions || (this._transitions = {});
        var e = this._transitions[t];
        return e ? e.isTransitionSettings && (e = new Transition(this.stage.transitions, e, this, t)) : e = new Transition(this.stage.transitions, this.stage.transitions.defaultTransitionSettings, this, t), this._transitions[t] = e, e;
      }
    }, {
      key: "_setTransition",
      value: function _setTransition(t, e) {
        if (e) {
          Utils.isObjectLiteral(e) && (e = this.stage.transitions.createSettings(e)), this._transitions || (this._transitions = {});
          var i = this._transitions[t];
          if (i && i.isTransition) return i.settings = e, i;
          this._transitions[t] = e;
        } else this._removeTransition(t);
      }
    }, {
      key: "_removeTransition",
      value: function _removeTransition(t) {
        this._transitions && delete this._transitions[t];
      }
    }, {
      key: "getSmooth",
      value: function getSmooth(t, e) {
        var i = this._getTransition(t);

        return i && i.isAttached() ? i.targetValue : e;
      }
    }, {
      key: "setSmooth",
      value: function setSmooth(t, e, i) {
        i && this._setTransition(t, i);

        var s = this._getTransition(t);

        return s.start(e), s;
      }
    }, {
      key: "id",
      get: function get() {
        return this.__id;
      }
    }, {
      key: "ref",
      set: function set(t) {
        if (this.__ref !== t) {
          var _e80 = t.charCodeAt(0);

          Utils.isUcChar(_e80) || this._throwError("Ref must start with an upper case character: " + t), null !== this.__ref && (this.removeTag(this.__ref), this.__parent && this.__parent.__childList.clearRef(this.__ref)), this.__ref = t, this.__ref && (this._addTag(this.__ref), this.__parent && this.__parent.__childList.setRef(this.__ref, this));
        }
      },
      get: function get() {
        return this.__ref;
      }
    }, {
      key: "core",
      get: function get() {
        return this.__core;
      }
    }, {
      key: "isRoot",
      get: function get() {
        return this.__core.isRoot;
      }
    }, {
      key: "attached",
      get: function get() {
        return this.__attached;
      }
    }, {
      key: "enabled",
      get: function get() {
        return this.__enabled;
      }
    }, {
      key: "active",
      get: function get() {
        return this.__active;
      }
    }, {
      key: "renderWidth",
      get: function get() {
        return this.__enabled ? this.__core.getRenderWidth() : this._getRenderWidth();
      }
    }, {
      key: "renderHeight",
      get: function get() {
        return this.__enabled ? this.__core.getRenderHeight() : this._getRenderHeight();
      }
    }, {
      key: "finalX",
      get: function get() {
        return this.__core.x;
      }
    }, {
      key: "finalY",
      get: function get() {
        return this.__core.y;
      }
    }, {
      key: "finalW",
      get: function get() {
        return this.__core.w;
      }
    }, {
      key: "finalH",
      get: function get() {
        return this.__core.h;
      }
    }, {
      key: "texture",
      get: function get() {
        return this.__texture;
      },
      set: function set(t) {
        var e;
        if (Utils.isObjectLiteral(t)) (e = t.type ? new t.type(this.stage) : this.texture) && Base.patchObject(e, t);else if (t) {
          if (t.isTexture) e = t;else {
            if (!t.isTextureSource) return void console.error("Please specify a texture type.");
            (e = new SourceTexture(this.stage)).textureSource = t;
          }
        } else e = null;
        var i = this.__texture;
        e !== i && (this.__texture = e, this.__texture ? this.__enabled && (this.__texture.addElement(this), this.withinBoundsMargin && (this.__texture.isLoaded() ? this._setDisplayedTexture(this.__texture) : this._enableTextureError())) : this._setDisplayedTexture(null), i && i !== this.__displayedTexture && i.removeElement(this), this._updateDimensions());
      }
    }, {
      key: "displayedTexture",
      get: function get() {
        return this.__displayedTexture;
      }
    }, {
      key: "tag",
      get: function get() {
        return this._tag;
      },
      set: function set(t) {
        this.tags = t;
      }
    }, {
      key: "tagRoot",
      get: function get() {
        return this.__tagRoot;
      },
      set: function set(t) {
        this.__tagRoot !== t && (t ? this._unsetTagsParent() : this._setTagsParent(), this.__tagRoot = t);
      }
    }, {
      key: "withinBoundsMargin",
      get: function get() {
        return this.__core._withinBoundsMargin;
      }
    }, {
      key: "boundsMargin",
      set: function set(t) {
        if (!Array.isArray(t) && null !== t) throw new Error("boundsMargin should be an array of left-top-right-bottom values or null (inherit margin)");
        this.__core.boundsMargin = t;
      },
      get: function get() {
        return this.__core.boundsMargin;
      }
    }, {
      key: "x",
      get: function get() {
        return this.__core.offsetX;
      },
      set: function set(t) {
        this.__core.offsetX = t;
      }
    }, {
      key: "y",
      get: function get() {
        return this.__core.offsetY;
      },
      set: function set(t) {
        this.__core.offsetY = t;
      }
    }, {
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set(t) {
        Utils.isFunction(t) ? (this._w = 0, this.__core.funcW = t) : (t = Math.max(t, 0), this._w !== t && (this.__core.disableFuncW(), this._w = t, this._updateDimensions()));
      }
    }, {
      key: "h",
      get: function get() {
        return this._h;
      },
      set: function set(t) {
        Utils.isFunction(t) ? (this._h = 0, this.__core.funcH = t) : (t = Math.max(t, 0), this._h !== t && (this.__core.disableFuncH(), this._h = t, this._updateDimensions()));
      }
    }, {
      key: "scaleX",
      get: function get() {
        return this.__core.scaleX;
      },
      set: function set(t) {
        this.__core.scaleX = t;
      }
    }, {
      key: "scaleY",
      get: function get() {
        return this.__core.scaleY;
      },
      set: function set(t) {
        this.__core.scaleY = t;
      }
    }, {
      key: "scale",
      get: function get() {
        return this.__core.scale;
      },
      set: function set(t) {
        this.__core.scale = t;
      }
    }, {
      key: "pivotX",
      get: function get() {
        return this.__core.pivotX;
      },
      set: function set(t) {
        this.__core.pivotX = t;
      }
    }, {
      key: "pivotY",
      get: function get() {
        return this.__core.pivotY;
      },
      set: function set(t) {
        this.__core.pivotY = t;
      }
    }, {
      key: "pivot",
      get: function get() {
        return this.__core.pivot;
      },
      set: function set(t) {
        this.__core.pivot = t;
      }
    }, {
      key: "mountX",
      get: function get() {
        return this.__core.mountX;
      },
      set: function set(t) {
        this.__core.mountX = t;
      }
    }, {
      key: "mountY",
      get: function get() {
        return this.__core.mountY;
      },
      set: function set(t) {
        this.__core.mountY = t;
      }
    }, {
      key: "mount",
      get: function get() {
        return this.__core.mount;
      },
      set: function set(t) {
        this.__core.mount = t;
      }
    }, {
      key: "rotation",
      get: function get() {
        return this.__core.rotation;
      },
      set: function set(t) {
        this.__core.rotation = t;
      }
    }, {
      key: "alpha",
      get: function get() {
        return this.__core.alpha;
      },
      set: function set(t) {
        this.__core.alpha = t;
      }
    }, {
      key: "visible",
      get: function get() {
        return this.__core.visible;
      },
      set: function set(t) {
        this.__core.visible = t;
      }
    }, {
      key: "colorUl",
      get: function get() {
        return this.__core.colorUl;
      },
      set: function set(t) {
        this.__core.colorUl = t;
      }
    }, {
      key: "colorUr",
      get: function get() {
        return this.__core.colorUr;
      },
      set: function set(t) {
        this.__core.colorUr = t;
      }
    }, {
      key: "colorBl",
      get: function get() {
        return this.__core.colorBl;
      },
      set: function set(t) {
        this.__core.colorBl = t;
      }
    }, {
      key: "colorBr",
      get: function get() {
        return this.__core.colorBr;
      },
      set: function set(t) {
        this.__core.colorBr = t;
      }
    }, {
      key: "color",
      get: function get() {
        return this.__core.colorUl;
      },
      set: function set(t) {
        this.colorUl === t && this.colorUr === t && this.colorBl === t && this.colorBr === t || (this.colorUl = t, this.colorUr = t, this.colorBl = t, this.colorBr = t);
      }
    }, {
      key: "colorTop",
      get: function get() {
        return this.colorUl;
      },
      set: function set(t) {
        this.colorUl === t && this.colorUr === t || (this.colorUl = t, this.colorUr = t);
      }
    }, {
      key: "colorBottom",
      get: function get() {
        return this.colorBl;
      },
      set: function set(t) {
        this.colorBl === t && this.colorBr === t || (this.colorBl = t, this.colorBr = t);
      }
    }, {
      key: "colorLeft",
      get: function get() {
        return this.colorUl;
      },
      set: function set(t) {
        this.colorUl === t && this.colorBl === t || (this.colorUl = t, this.colorBl = t);
      }
    }, {
      key: "colorRight",
      get: function get() {
        return this.colorUr;
      },
      set: function set(t) {
        this.colorUr === t && this.colorBr === t || (this.colorUr = t, this.colorBr = t);
      }
    }, {
      key: "zIndex",
      get: function get() {
        return this.__core.zIndex;
      },
      set: function set(t) {
        this.__core.zIndex = t;
      }
    }, {
      key: "forceZIndexContext",
      get: function get() {
        return this.__core.forceZIndexContext;
      },
      set: function set(t) {
        this.__core.forceZIndexContext = t;
      }
    }, {
      key: "clipping",
      get: function get() {
        return this.__core.clipping;
      },
      set: function set(t) {
        this.__core.clipping = t;
      }
    }, {
      key: "clipbox",
      get: function get() {
        return this.__core.clipbox;
      },
      set: function set(t) {
        this.__core.clipbox = t;
      }
    }, {
      key: "tags",
      get: function get() {
        return this.getTags();
      },
      set: function set(t) {
        Array.isArray(t) || (t = [t]), this.setTags(t);
      }
    }, {
      key: "t",
      set: function set(t) {
        this.tags = t;
      }
    }, {
      key: "_children",
      get: function get() {
        return this.__childList || (this.__childList = new ElementChildList(this, !1)), this.__childList;
      }
    }, {
      key: "childList",
      get: function get() {
        return this._allowChildrenAccess() || this._throwError("Direct access to children is not allowed in " + this.getLocationString()), this._children;
      }
    }, {
      key: "children",
      get: function get() {
        return this.childList.get();
      },
      set: function set(t) {
        this.childList.patch(t);
      }
    }, {
      key: "p",
      get: function get() {
        return this.__parent;
      }
    }, {
      key: "parent",
      get: function get() {
        return this.__parent;
      }
    }, {
      key: "src",
      get: function get() {
        return this.texture && this.texture instanceof ImageTexture ? this.texture._src : void 0;
      },
      set: function set(t) {
        var e = new ImageTexture(this.stage);
        e.src = t, this.texture = e;
      }
    }, {
      key: "mw",
      set: function set(t) {
        this.texture ? (this.texture.mw = t, this._updateDimensions()) : this._throwError("Please set mw after setting a texture.");
      }
    }, {
      key: "mh",
      set: function set(t) {
        this.texture ? (this.texture.mh = t, this._updateDimensions()) : this._throwError("Please set mh after setting a texture.");
      }
    }, {
      key: "rect",
      get: function get() {
        return this.texture === this.stage.rectangleTexture;
      },
      set: function set(t) {
        this.texture = t ? this.stage.rectangleTexture : null;
      }
    }, {
      key: "text",
      get: function get() {
        return this.texture && this.texture instanceof TextTexture ? this.texture : null;
      },
      set: function set(t) {
        this.texture && this.texture instanceof TextTexture || this.enableTextTexture(), Utils.isString(t) ? this.texture.text = t : this.texture.patch(t);
      }
    }, {
      key: "onUpdate",
      set: function set(t) {
        this.__core.onUpdate = t;
      }
    }, {
      key: "onAfterCalcs",
      set: function set(t) {
        this.__core.onAfterCalcs = t;
      }
    }, {
      key: "onAfterUpdate",
      set: function set(t) {
        this.__core.onAfterUpdate = t;
      }
    }, {
      key: "shader",
      get: function get() {
        return this.__core.shader;
      },
      set: function set(t) {
        if (Utils.isObjectLiteral(t) && !t.type) this.shader && this.shader.patch(t);else {
          var _e81 = Shader.create(this.stage, t);

          this.__enabled && this.__core.shader && this.__core.shader.removeElement(this.__core), this.__core.shader = _e81, this.__enabled && this.__core.shader && this.__core.shader.addElement(this.__core);
        }
      }
    }, {
      key: "renderToTexture",
      get: function get() {
        return this.rtt;
      },
      set: function set(t) {
        this.rtt = t;
      }
    }, {
      key: "rtt",
      get: function get() {
        return this._hasTexturizer() && this.texturizer.enabled;
      },
      set: function set(t) {
        this.texturizer.enabled = t;
      }
    }, {
      key: "rttLazy",
      get: function get() {
        return this._hasTexturizer() && this.texturizer.lazy;
      },
      set: function set(t) {
        this.texturizer.lazy = t;
      }
    }, {
      key: "renderOffscreen",
      get: function get() {
        return this._hasTexturizer() && this.texturizer.renderOffscreen;
      },
      set: function set(t) {
        this.texturizer.renderOffscreen = t;
      }
    }, {
      key: "colorizeResultTexture",
      get: function get() {
        return this._hasTexturizer() && this.texturizer.colorize;
      },
      set: function set(t) {
        this.texturizer.colorize = t;
      }
    }, {
      key: "texturizer",
      get: function get() {
        return this.__core.texturizer;
      }
    }, {
      key: "transitions",
      set: function set(t) {
        var _this16 = this;

        Object.keys(t).forEach(function (e) {
          _this16.transition(e, t[e]);
        });
      }
    }, {
      key: "smooth",
      set: function set(t) {
        var _this17 = this;

        Object.keys(t).forEach(function (e) {
          var i = t[e];
          Array.isArray(i) ? _this17.setSmooth(e, i[0], i[1]) : _this17.setSmooth(e, i);
        });
      }
    }, {
      key: "flex",
      get: function get() {
        return this.__core.flex;
      },
      set: function set(t) {
        this.__core.flex = t;
      }
    }, {
      key: "flexItem",
      get: function get() {
        return this.__core.flexItem;
      },
      set: function set(t) {
        this.__core.flexItem = t;
      }
    }], [{
      key: "getPrettyString",
      value: function getPrettyString(t, e) {
        var i = t.children;
        delete t.children;
        var s = ["color", "colorUl", "colorUr", "colorBl", "colorBr"],
            r = JSON.stringify(t, function (t, e) {
          return -1 !== s.indexOf(t) ? "COLOR[" + e.toString(16) + "]" : e;
        });

        if (r = r.replace(/"COLOR\[([a-f0-9]{1,8})\]"/g, "0x$1"), i) {
          var _t80 = "";

          if (Utils.isObjectLiteral(i)) {
            var _s12 = Object.keys(i);

            _t80 = "";

            for (var _r9 = 0, _n5 = _s12.length; _r9 < _n5; _r9++) {
              _t80 += "\n".concat(e, "  \"").concat(_s12[_r9], "\":"), delete i[_s12[_r9]].ref, _t80 += Element.getPrettyString(i[_s12[_r9]], e + "  ") + (_r9 < _n5 - 1 ? "," : "");
            }

            var n = "{}" === r;
            r = r.substr(0, r.length - 1) + (n ? "" : ",") + _t80 + "\n" + e + "}";
          } else {
            var _s13 = i.length;
            _t80 = "[";

            for (var _r10 = 0; _r10 < _s13; _r10++) {
              _t80 += Element.getPrettyString(i[_r10], e + "  ") + (_r10 < _s13 - 1 ? "," : "") + "\n";
            }

            _t80 += e + "]}";

            var _n6 = "{}" === r;

            r = r.substr(0, r.length - 1) + (_n6 ? "" : ",") + '"children":\n' + e + _t80 + "}";
          }
        }

        return r;
      }
    }, {
      key: "getGetter",
      value: function getGetter(t) {
        var e = Element.PROP_GETTERS.get(t);
        return e || (e = new Function("obj", "return obj." + t), Element.PROP_GETTERS.set(t, e)), e;
      }
    }, {
      key: "getSetter",
      value: function getSetter(t) {
        var e = Element.PROP_SETTERS.get(t);
        return e || (e = new Function("obj", "v", "obj." + t + " = v"), Element.PROP_SETTERS.set(t, e)), e;
      }
    }, {
      key: "isColorProperty",
      value: function isColorProperty(t) {
        return t.toLowerCase().indexOf("color") >= 0;
      }
    }, {
      key: "getMerger",
      value: function getMerger(t) {
        return Element.isColorProperty(t) ? StageUtils.mergeColors : StageUtils.mergeNumbers;
      }
    }]);

    return Element;
  }();

  EventEmitter.addAsMixin(Element), Element.prototype.isElement = 1, Element.id = 1, Element.PROP_GETTERS = new Map(), Element.PROP_SETTERS = new Map();

  var StateMachine =
  /*#__PURE__*/
  function () {
    function StateMachine() {
      _classCallCheck(this, StateMachine);

      StateMachine.setupStateMachine(this);
    }

    _createClass(StateMachine, [{
      key: "fire",
      value: function fire(t) {
        for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          e[_key - 1] = arguments[_key];
        }

        if (this._hasMethod(t)) return this[t].apply(this, e);
      }
    }, {
      key: "_getState",
      value: function _getState() {
        return this._state.__path;
      }
    }, {
      key: "_inState",
      value: function _inState(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._state.__path;

        var i = this._sm.getStateByPath(t),
            s = this._sm.getStateByPath(e),
            r = i.__level;

        return StateMachine._getStateAtLevel(s, r) === i;
      }
    }, {
      key: "_hasMember",
      value: function _hasMember(t) {
        return !!this.constructor.prototype[t];
      }
    }, {
      key: "_hasMethod",
      value: function _hasMethod(t) {
        var e = this.constructor.prototype[t];
        return !!e && "function" == typeof e;
      }
    }, {
      key: "_setState",
      value: function _setState(t, e) {
        var i = ++this._setStateCounter;

        if (this._setStateId = i, this._state.__path !== t) {
          var s = this._sm._stateMap[t];
          s || (s = this._sm.getStateByPath(t));
          var r = this._state,
              n = s.prototype.$enter !== this._state.prototype.$enter,
              o = s.prototype.$exit !== this._state.prototype.$exit;

          if (n || o) {
            var _t81 = StateMachine._getSharedState(this._state, s),
                a = {
              newState: s.__path,
              prevState: r.__path,
              sharedState: _t81.__path
            },
                h = _t81.__level;

            if (o) {
              var _t82 = StateMachine._getStatesUntilLevel(this._state, h);

              for (var _s14 = 0, _r11 = _t82.length; _s14 < _r11; _s14++) {
                if (this.__setState(_t82[_s14]), this._callExit(this._state, e, a), this._setStateId !== i) return;
              }
            }

            if (n) {
              var _t83 = StateMachine._getStatesUntilLevel(s, h).reverse();

              for (var _s15 = 0, _r12 = _t83.length; _s15 < _r12; _s15++) {
                if (this.__setState(_t83[_s15]), this._callEnter(this._state, e, a), this._setStateId !== i) return;
              }
            }
          }

          if (this.__setState(s), this._changedState) {
            var _t84 = {
              newState: s.__path,
              prevState: r.__path
            };
            e ? this._changedState.apply(this, [_t84].concat(_toConsumableArray(e))) : this._changedState(_t84);
          }

          if (this._onStateChange) {
            var _t85 = {
              newState: s.__path,
              prevState: r.__path
            };

            this._onStateChange(_t85);
          }
        }
      }
    }, {
      key: "_callEnter",
      value: function _callEnter(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var i = arguments.length > 2 ? arguments[2] : undefined;
        var s = !!t.__parent;
        t.prototype.$enter && (s && t.__parent.prototype.$enter === t.prototype.$enter || t.prototype.$enter.apply(this, [i].concat(_toConsumableArray(e))));
      }
    }, {
      key: "_callExit",
      value: function _callExit(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var i = arguments.length > 2 ? arguments[2] : undefined;
        var s = !!t.__parent;
        t.prototype.$exit && (s && t.__parent.prototype.$exit === t.prototype.$exit || t.prototype.$exit.apply(this, [i].concat(_toConsumableArray(e))));
      }
    }, {
      key: "__setState",
      value: function __setState(t) {
        this._state = t, this._stateIndex = t.__index, this.constructor = t;
      }
    }, {
      key: "_initStateMachine",
      value: function _initStateMachine() {
        this._state = null, this._stateIndex = 0, this._setStateCounter = 0, this._sm = this._routedType._sm, this.__setState(this._sm.getStateByPath(""));
        var t = {
          newState: "",
          prevState: void 0,
          sharedState: void 0
        };
        this._callEnter(this._state, [], t), this._onStateChange = void 0;
      }
    }, {
      key: "_getMostSpecificHandledMember",
      value: function _getMostSpecificHandledMember(t) {
        var e = this._state;

        do {
          for (var i = 0, s = t.length; i < s; i++) {
            var _s16 = t[i];

            if (e.__parent) {
              if (this[StateMachineType.getStateMemberAlias(e.__path, _s16)]) return _s16;
            } else if (e.prototype[_s16]) return _s16;
          }

          e = e.__parent;
        } while (e);
      }
    }], [{
      key: "setupStateMachine",
      value: function setupStateMachine(t) {
        var e = t.constructor,
            i = StateMachine.create(e);
        Object.setPrototypeOf(t, i.prototype), t.constructor = e, t._initStateMachine();
      }
    }, {
      key: "create",
      value: function create(t) {
        if (!t.hasOwnProperty("_sm")) {
          var _e82 = new StateMachineType(t);

          t._sm = _e82;
        }

        return t._sm.router;
      }
    }, {
      key: "_getStatesUntilLevel",
      value: function _getStatesUntilLevel(t, e) {
        var i = [];

        for (; t.__level > e;) {
          i.push(t), t = t.__parent;
        }

        return i;
      }
    }, {
      key: "_getSharedState",
      value: function _getSharedState(t, e) {
        var i = StateMachine._getAncestorStates(t),
            s = StateMachine._getAncestorStates(e),
            r = Math.min(i.length, s.length);

        for (var _t86 = 0; _t86 < r; _t86++) {
          if (i[_t86] !== s[_t86]) return i[_t86 - 1];
        }

        return i[r - 1];
      }
    }, {
      key: "_getAncestorStates",
      value: function _getAncestorStates(t) {
        var e = [];

        do {
          e.push(t);
        } while (t = t.__parent);

        return e.reverse();
      }
    }, {
      key: "_getStateAtLevel",
      value: function _getStateAtLevel(t, e) {
        if (!(e > t.__level)) {
          for (; e < t.__level;) {
            t = t.__parent;
          }

          return t;
        }
      }
    }]);

    return StateMachine;
  }();

  var StateMachineType =
  /*#__PURE__*/
  function () {
    function StateMachineType(t) {
      _classCallCheck(this, StateMachineType);

      this._type = t, this._router = null, this.init();
    }

    _createClass(StateMachineType, [{
      key: "init",
      value: function init() {
        this._router = this._createRouter(), this._stateMap = this._getStateMap(), this._addStateMemberDelegatorsToRouter();
      }
    }, {
      key: "_createRouter",
      value: function _createRouter() {
        var t = this._type,
            e =
        /*#__PURE__*/
        function (_t87) {
          _inherits(StateMachineRouter, _t87);

          function StateMachineRouter() {
            var _this18;

            _classCallCheck(this, StateMachineRouter);

            if (_this18 = _possibleConstructorReturn(this, _getPrototypeOf(StateMachineRouter).apply(this, arguments)), !_this18.constructor.hasOwnProperty("_isRouter")) throw new Error("You need to extend ".concat(t.name, ".original instead of ").concat(t.name, "."));
            return _possibleConstructorReturn(_this18);
          }

          return StateMachineRouter;
        }(t);

        return e._isRouter = !0, e.prototype._routedType = t, e.original = t, this._mixinStateMachineMethods(e), e;
      }
    }, {
      key: "_mixinStateMachineMethods",
      value: function _mixinStateMachineMethods(t) {
        var e = Object.getOwnPropertyNames(StateMachine.prototype);

        for (var i = 0, s = e.length; i < s; i++) {
          var _s17 = e[i];

          if ("constructor" !== _s17) {
            var _e83 = Object.getOwnPropertyDescriptor(StateMachine.prototype, _s17);

            Object.defineProperty(t.prototype, _s17, _e83);
          }
        }
      }
    }, {
      key: "_addStateMemberDelegatorsToRouter",
      value: function _addStateMemberDelegatorsToRouter() {
        var _this19 = this;

        this._getAllMemberNames().forEach(function (t) {
          _this19._addMemberRouter(t);
        });
      }
    }, {
      key: "_addMemberRouter",
      value: function _addMemberRouter(t) {
        var _this20 = this;

        var e = Object.keys(this._stateMap),
            i = [],
            s = [];
        e.forEach(function (e, r) {
          var n = _this20._stateMap[e],
              o = _this20._getDescriptor(n, t);

          if (o) {
            i[r] = o;

            var _e84 = StateMachineType.getStateMemberAlias(o._source.__path, t);

            s[r] = _e84, _this20._router.prototype.hasOwnProperty(_e84) || Object.defineProperty(_this20._router.prototype, _e84, o);
          } else i[r] = null, s[r] = null;
        });
        var r = void 0;

        switch (i.forEach(function (e) {
          if (e) {
            var _i21 = _this20._getDescriptorType(e);

            if (r && r !== _i21) return void console.warn("Member ".concat(t, " in ").concat(_this20._type.name, " has inconsistent types."));
            r = _i21;
          }
        }), r) {
          case "method":
            this._addMethodRouter(t, i, s);

            break;

          case "getter":
            this._addGetterSetterRouters(t);

            break;

          case "property":
            console.warn("Fixed properties are not supported; please use a getter instead!");
        }
      }
    }, {
      key: "_getDescriptor",
      value: function _getDescriptor(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
          return !0;
        };
        var s = t,
            r = t;

        do {
          var _t88 = Object.getOwnPropertyDescriptor(s.prototype, e);

          if (_t88 && i(_t88)) return _t88._source = r, _t88;
          (s = Object.getPrototypeOf(s)) && s.hasOwnProperty("__state") && (r = s);
        } while (s && s.prototype);
      }
    }, {
      key: "_getDescriptorType",
      value: function _getDescriptorType(t) {
        return t.get || t.set ? "getter" : "function" == typeof t.value ? "method" : "property";
      }
    }, {
      key: "_addMethodRouter",
      value: function _addMethodRouter(t, e, i) {
        var s = ["//@ sourceURL=StateMachineRouter.js", "const i = this._stateIndex;"];
        var r = i[0];

        var n = StateMachineType._supportsSpread();

        for (var _t89 = 1, _e85 = i.length; _t89 < _e85; _t89++) {
          var _e86 = i[_t89];
          _e86 !== r && (r ? n ? s.push("if (i < ".concat(_t89, ") return this[\"").concat(r, "\"](...arguments); else")) : s.push("if (i < ".concat(_t89, ") return this[\"").concat(r, "\"].apply(this, arguments); else")) : s.push("if (i < ".concat(_t89, ") return ; else"))), r = _e86;
        }

        r ? n ? s.push("return this[\"".concat(r, "\"](...arguments);")) : s.push("return this[\"".concat(r, "\"].apply(this, arguments);")) : s.push(";");
        var o = s.join("\n"),
            a = {
          value: new Function([], o)
        };
        Object.defineProperty(this._router.prototype, t, a);
      }
    }, {
      key: "_addGetterSetterRouters",
      value: function _addGetterSetterRouters(t) {
        var e = {
          get: this._getGetterRouter(t),
          set: this._getSetterRouter(t)
        };
        Object.defineProperty(this._router.prototype, t, e);
      }
    }, {
      key: "_getGetterRouter",
      value: function _getGetterRouter(t) {
        var _this21 = this;

        var e = Object.keys(this._stateMap),
            i = [],
            s = [];
        e.forEach(function (e, r) {
          var n = _this21._stateMap[e],
              o = _this21._getDescriptor(n, t, function (t) {
            return t.get;
          });

          if (o) {
            i[r] = o;

            var _e87 = StateMachineType.getStateMemberAlias(o._source.__path, t);

            s[r] = _e87, _this21._router.prototype.hasOwnProperty(_e87) || Object.defineProperty(_this21._router.prototype, _e87, o);
          } else i[r] = null, s[r] = null;
        });
        var r = ["//@ sourceURL=StateMachineRouter.js", "const i = this._stateIndex;"];
        var n = s[0];

        for (var _t90 = 1, _e88 = s.length; _t90 < _e88; _t90++) {
          var _e89 = s[_t90];
          _e89 !== n && (n ? r.push("if (i < ".concat(_t90, ") return this[\"").concat(n, "\"]; else")) : r.push("if (i < ".concat(_t90, ") return ; else"))), n = _e89;
        }

        n ? r.push("return this[\"".concat(n, "\"];")) : r.push(";");
        var o = r.join("\n");
        return new Function([], o);
      }
    }, {
      key: "_getSetterRouter",
      value: function _getSetterRouter(t) {
        var _this22 = this;

        var e = Object.keys(this._stateMap),
            i = [],
            s = [];
        e.forEach(function (e, r) {
          var n = _this22._stateMap[e],
              o = _this22._getDescriptor(n, t, function (t) {
            return t.set;
          });

          if (o) {
            i[r] = o;

            var _e90 = StateMachineType.getStateMemberAlias(o._source.__path, t);

            s[r] = _e90, _this22._router.prototype.hasOwnProperty(_e90) || Object.defineProperty(_this22._router.prototype, _e90, o);
          } else i[r] = null, s[r] = null;
        });
        var r = ["//@ sourceURL=StateMachineRouter.js", "const i = this._stateIndex;"];
        var n = s[0];

        for (var _t91 = 1, _e91 = s.length; _t91 < _e91; _t91++) {
          var _e92 = s[_t91];
          _e92 !== n && (n ? r.push("if (i < ".concat(_t91, ") this[\"").concat(n, "\"] = arg; else")) : r.push("if (i < ".concat(_t91, ") ; else"))), n = _e92;
        }

        n ? r.push("this[\"".concat(n, "\"] = arg;")) : r.push(";");
        var o = r.join("\n");
        return new Function(["arg"], o);
      }
    }, {
      key: "_getAllMemberNames",
      value: function _getAllMemberNames() {
        var _this23 = this;

        var t = this._stateMap,
            e = Object.keys(t);
        var i = new Set();
        return e.forEach(function (e) {
          if ("" === e) return;
          var s = t[e];

          _this23._getStateMemberNames(s).forEach(function (t) {
            i.add(t);
          });
        }), _toConsumableArray(i);
      }
    }, {
      key: "_getStateMemberNames",
      value: function _getStateMemberNames(t) {
        var e = t,
            i = new Set();
        var s = this._type === t;

        do {
          this._getStateMemberNamesForType(e).forEach(function (t) {
            i.add(t);
          }), e = Object.getPrototypeOf(e);
        } while (e && e.prototype && (!e.hasOwnProperty("__state") || s));

        return i;
      }
    }, {
      key: "_getStateMemberNamesForType",
      value: function _getStateMemberNamesForType(t) {
        return Object.getOwnPropertyNames(t.prototype).filter(function (t) {
          return "constructor" !== t && !StateMachineType._isStateLocalMember(t);
        });
      }
    }, {
      key: "getStateByPath",
      value: function getStateByPath(t) {
        if (this._stateMap[t]) return this._stateMap[t];
        var e = t.split(".");

        for (; e.pop();) {
          var _t92 = e.join(".");

          if (this._stateMap[_t92]) return this._stateMap[_t92];
        }
      }
    }, {
      key: "_getStateMap",
      value: function _getStateMap() {
        return this._stateMap || (this._stateMap = this._createStateMap()), this._stateMap;
      }
    }, {
      key: "_createStateMap",
      value: function _createStateMap() {
        var t = {};
        return this._addState(this._type, null, "", t), t;
      }
    }, {
      key: "_addState",
      value: function _addState(t, e, i, s) {
        var _this24 = this;

        t.__state = !0, t.__name = i, this._addStaticStateProperty(t, e);
        var r = e ? e.__path : "";
        var n = (r ? r + "." : "") + i;
        t.__path = n, t.__level = e ? e.__level + 1 : 0, t.__parent = e, t.__index = Object.keys(s).length, s[n] = t;
        var o = t._states;

        if (o) {
          if (!(e && e._states === o)) {
            t._states().forEach(function (e) {
              var i = StateMachineType._getStateName(e);

              _this24._addState(e, t, i, s);
            });
          }
        }
      }
    }, {
      key: "_addStaticStateProperty",
      value: function _addStaticStateProperty(t, e) {
        if (e) {
          e && !e.__parent ? this._router[t.__name] = t : e[t.__name] = t;
        }
      }
    }, {
      key: "router",
      get: function get() {
        return this._router;
      }
    }], [{
      key: "_supportsSpread",
      value: function _supportsSpread() {
        if (void 0 === this.__supportsSpread) {
          this.__supportsSpread = !1;

          try {
            new Function("return [].concat(...arguments);")(), this.__supportsSpread = !0;
          } catch (t) {}
        }

        return this.__supportsSpread;
      }
    }, {
      key: "getStateMemberAlias",
      value: function getStateMemberAlias(t, e) {
        return "$" + (t ? t + "." : "") + e;
      }
    }, {
      key: "_isStateLocalMember",
      value: function _isStateLocalMember(t) {
        return "$enter" === t || "$exit" === t;
      }
    }, {
      key: "_getStateName",
      value: function _getStateName(t) {
        var e = t.name,
            i = e.indexOf("$");
        return i > 0 ? e.substr(0, i) : e;
      }
    }]);

    return StateMachineType;
  }();

  var Component =
  /*#__PURE__*/
  function (_Element) {
    _inherits(Component, _Element);

    function Component(t, e) {
      var _this25;

      _classCallCheck(this, Component);

      _this25 = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, t)), _this25.tagRoot = !0, Utils.isObjectLiteral(e) && Object.assign(_assertThisInitialized(_this25), e), _this25.__initialized = !1, _this25.__firstActive = !1, _this25.__firstEnable = !1, _this25.__signals = void 0, _this25.__passSignals = void 0, _this25.__construct();

      var i = _this25.constructor.getTemplateFunc();

      i.f(_assertThisInitialized(_this25), i.a), _this25._build();
      return _this25;
    }

    _createClass(Component, [{
      key: "__start",
      value: function __start() {
        StateMachine.setupStateMachine(this), this._onStateChange = Component.prototype.__onStateChange;
      }
    }, {
      key: "__onStateChange",
      value: function __onStateChange() {
        this.application && this.application.updateFocusPath();
      }
    }, {
      key: "_refocus",
      value: function _refocus() {
        this.application && this.application.updateFocusPath();
      }
    }, {
      key: "_onSetup",
      value: function _onSetup() {
        this.__initialized || this._setup();
      }
    }, {
      key: "_setup",
      value: function _setup() {}
    }, {
      key: "_onAttach",
      value: function _onAttach() {
        this.__initialized || (this.__init(), this.__initialized = !0), this._attach();
      }
    }, {
      key: "_attach",
      value: function _attach() {}
    }, {
      key: "_onDetach",
      value: function _onDetach() {
        this._detach();
      }
    }, {
      key: "_detach",
      value: function _detach() {}
    }, {
      key: "_onEnabled",
      value: function _onEnabled() {
        this.__firstEnable || (this._firstEnable(), this.__firstEnable = !0), this._enable();
      }
    }, {
      key: "_firstEnable",
      value: function _firstEnable() {}
    }, {
      key: "_enable",
      value: function _enable() {}
    }, {
      key: "_onDisabled",
      value: function _onDisabled() {
        this._disable();
      }
    }, {
      key: "_disable",
      value: function _disable() {}
    }, {
      key: "_onActive",
      value: function _onActive() {
        this.__firstActive || (this._firstActive(), this.__firstActive = !0), this._active();
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {}
    }, {
      key: "_active",
      value: function _active() {}
    }, {
      key: "_onInactive",
      value: function _onInactive() {
        this._inactive();
      }
    }, {
      key: "_inactive",
      value: function _inactive() {}
    }, {
      key: "__construct",
      value: function __construct() {
        this._construct();
      }
    }, {
      key: "_construct",
      value: function _construct() {}
    }, {
      key: "_build",
      value: function _build() {}
    }, {
      key: "__init",
      value: function __init() {
        this._init();
      }
    }, {
      key: "_init",
      value: function _init() {}
    }, {
      key: "_focus",
      value: function _focus(t, e) {}
    }, {
      key: "_unfocus",
      value: function _unfocus(t) {}
    }, {
      key: "_focusChange",
      value: function _focusChange(t, e) {}
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this;
      }
    }, {
      key: "_setFocusSettings",
      value: function _setFocusSettings(t) {}
    }, {
      key: "_handleFocusSettings",
      value: function _handleFocusSettings(t) {}
    }, {
      key: "hasFinalFocus",
      value: function hasFinalFocus() {
        var t = this.application._focusPath;
        return t && t.length && t[t.length - 1] === this;
      }
    }, {
      key: "hasFocus",
      value: function hasFocus() {
        var t = this.application._focusPath;
        return t && t.indexOf(this) >= 0;
      }
    }, {
      key: "seekAncestorByType",
      value: function seekAncestorByType(t) {
        var e = this.cparent;

        for (; e;) {
          if (e.constructor === t) return e;
          e = e.cparent;
        }
      }
    }, {
      key: "getSharedAncestorComponent",
      value: function getSharedAncestorComponent(t) {
        var e = this.getSharedAncestor(t);

        for (; e && !e.isComponent;) {
          e = e.parent;
        }

        return e;
      }
    }, {
      key: "signal",
      value: function signal(t) {
        for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          e[_key2 - 1] = arguments[_key2];
        }

        return this._signal(t, e);
      }
    }, {
      key: "_signal",
      value: function _signal(t, e) {
        var i = this._getParentSignalHandler();

        if (i) {
          if (this.__signals) {
            var _s18 = this.__signals[t];
            if (!1 === _s18) return;
            if (_s18 && (!0 === _s18 && (_s18 = t), i._hasMethod(_s18))) return i[_s18].apply(i, _toConsumableArray(e));
          }

          var s = this.__passSignals && this.__passSignals[t];
          if (s) return s && !0 !== s && (t = s), i._signal(t, e);
        }
      }
    }, {
      key: "_getParentSignalHandler",
      value: function _getParentSignalHandler() {
        return this.cparent ? this.cparent._getSignalHandler() : null;
      }
    }, {
      key: "_getSignalHandler",
      value: function _getSignalHandler() {
        return this._signalProxy ? this.cparent ? this.cparent._getSignalHandler() : null : this;
      }
    }, {
      key: "fireAncestors",
      value: function fireAncestors(t) {
        if (!t.startsWith("$")) throw new Error("Ancestor event name must be prefixed by dollar sign.");

        var i = this._getParentSignalHandler();

        for (var _len3 = arguments.length, e = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          e[_key3 - 1] = arguments[_key3];
        }

        if (i) return i._doFireAncestors(t, e);
      }
    }, {
      key: "_doFireAncestors",
      value: function _doFireAncestors(t, e) {
        if (this._hasMethod(t)) return this.fire.apply(this, [t].concat(_toConsumableArray(e)));
        {
          var i = this._getParentSignalHandler();

          if (i) return i._doFireAncestors(t, e);
        }
      }
    }, {
      key: "state",
      get: function get() {
        return this._getState();
      }
    }, {
      key: "application",
      get: function get() {
        return this.stage.application;
      }
    }, {
      key: "cparent",
      get: function get() {
        return Component.getParent(this);
      }
    }, {
      key: "signals",
      get: function get() {
        return this.__signals;
      },
      set: function set(t) {
        Utils.isObjectLiteral(t) || this._throwError("Signals: specify an object with signal-to-fire mappings"), this.__signals = t;
      }
    }, {
      key: "alterSignals",
      set: function set(t) {
        Utils.isObjectLiteral(t) || this._throwError("Signals: specify an object with signal-to-fire mappings"), this.__signals || (this.__signals = {});

        for (var _e93 in t) {
          void 0 === t[_e93] ? delete this.__signals[_e93] : this.__signals[_e93] = t;
        }
      }
    }, {
      key: "passSignals",
      get: function get() {
        return this.__passSignals || {};
      },
      set: function set(t) {
        this.__passSignals = Object.assign(this.__passSignals || {}, t);
      }
    }, {
      key: "alterPassSignals",
      set: function set(t) {
        Utils.isObjectLiteral(t) || this._throwError("Signals: specify an object with signal-to-fire mappings"), this.__passSignals || (this.__passSignals = {});

        for (var _e94 in t) {
          void 0 === t[_e94] ? delete this.__passSignals[_e94] : this.__passSignals[_e94] = t;
        }
      }
    }, {
      key: "_signalProxy",
      get: function get() {
        return !1;
      }
    }], [{
      key: "getTemplateFunc",
      value: function getTemplateFunc() {
        var t = "_templateFunc";
        return this.__has_templateFunc !== this && (this.__has_templateFunc = this, this[t] = this.parseTemplate(this._template())), this[t];
      }
    }, {
      key: "parseTemplate",
      value: function parseTemplate(t) {
        var e = {
          loc: [],
          store: [],
          rid: 0
        };
        this.parseTemplateRec(t, e, "element");
        var i = e.loc.join(";\n");
        return {
          f: new Function("element", "store", i),
          a: e.store
        };
      }
    }, {
      key: "parseTemplateRec",
      value: function parseTemplateRec(t, e, i) {
        var _this26 = this;

        var s = e.store,
            r = e.loc;
        Object.keys(t).forEach(function (n) {
          var o = t[n];
          if (Utils.isUcChar(n.charCodeAt(0))) {
            if (Utils.isObjectLiteral(o)) {
              var _t93 = "r".concat(n.replace(/[^a-z0-9]/gi, "") + e.rid);

              var a = o.type ? o.type : Element;
              a === Element ? r.push("const ".concat(_t93, " = element.stage.createElement()")) : (s.push(a), r.push("const ".concat(_t93, " = new store[").concat(s.length - 1, "](").concat(i, ".stage)"))), r.push("".concat(_t93, ".ref = \"").concat(n, "\"")), e.rid++, _this26.parseTemplateRec(o, e, _t93), r.push("".concat(i, ".childList.add(").concat(_t93, ")"));
            } else Utils.isObject(o) && (s.push(o), r.push("".concat(i, ".childList.add(store[").concat(s.length - 1, "])")));
          } else if ("text" === n) {
            var _t94 = i + "__text";

            r.push("const ".concat(_t94, " = ").concat(i, ".enableTextTexture()")), _this26.parseTemplatePropRec(o, e, _t94);
          } else if ("texture" === n && Utils.isObjectLiteral(o)) {
            var _t95 = i + "__texture",
                _a3 = o.type;

            _a3 ? (s.push(_a3), r.push("const ".concat(_t95, " = new store[").concat(s.length - 1, "](").concat(i, ".stage)")), _this26.parseTemplatePropRec(o, e, _t95), r.push("".concat(i, "[\"").concat(n, "\"] = ").concat(_t95))) : (r.push("".concat(_t95, " = ").concat(i, ".texture")), _this26.parseTemplatePropRec(o, e, _t95));
          } else Utils.isNumber(o) ? r.push("".concat(i, "[\"").concat(n, "\"] = ").concat(o)) : Utils.isBoolean(o) ? r.push("".concat(i, "[\"").concat(n, "\"] = ").concat(o ? "true" : "false")) : Utils.isObject(o) || Array.isArray(o) ? (s.push(o), r.push("".concat(i, "[\"").concat(n, "\"] = store[").concat(s.length - 1, "]"))) : r.push("".concat(i, "[\"").concat(n, "\"] = ").concat(JSON.stringify(o)));
        });
      }
    }, {
      key: "parseTemplatePropRec",
      value: function parseTemplatePropRec(t, e, i) {
        var s = e.store,
            r = e.loc;
        Object.keys(t).forEach(function (e) {
          if ("type" !== e) {
            var n = t[e];
            Utils.isNumber(n) ? r.push("".concat(i, "[\"").concat(e, "\"] = ").concat(n)) : Utils.isBoolean(n) ? r.push("".concat(i, "[\"").concat(e, "\"] = ").concat(n ? "true" : "false")) : Utils.isObject(n) || Array.isArray(n) ? (s.push(n), r.push("".concat(i, "[\"").concat(e, "\"] = store[").concat(s.length - 1, "]"))) : r.push("".concat(i, "[\"").concat(e, "\"] = ").concat(JSON.stringify(n)));
          }
        });
      }
    }, {
      key: "_template",
      value: function _template() {
        return {};
      }
    }, {
      key: "collectSubComponents",
      value: function collectSubComponents(t, e) {
        if (e.hasChildren()) {
          var i = e.__childList;

          for (var _e95 = 0, s = i.length; _e95 < s; _e95++) {
            var _s19 = i.getAt(_e95);

            _s19.isComponent ? t.push(_s19) : Component.collectSubComponents(t, _s19);
          }
        }
      }
    }, {
      key: "getComponent",
      value: function getComponent(t) {
        var e = t;

        for (; e && !e.isComponent;) {
          e = e.parent;
        }

        return e;
      }
    }, {
      key: "getParent",
      value: function getParent(t) {
        return Component.getComponent(t.parent);
      }
    }]);

    return Component;
  }(Element);

  Component.prototype.isComponent = !0;

  var CoreQuadList =
  /*#__PURE__*/
  function () {
    function CoreQuadList(t) {
      _classCallCheck(this, CoreQuadList);

      this.ctx = t, this.quadTextures = [], this.quadElements = [];
    }

    _createClass(CoreQuadList, [{
      key: "reset",
      value: function reset() {
        this.quadTextures = [], this.quadElements = [], this.dataLength = 0;
      }
    }, {
      key: "getElement",
      value: function getElement(t) {
        return this.quadElements[t]._element;
      }
    }, {
      key: "getElementCore",
      value: function getElementCore(t) {
        return this.quadElements[t];
      }
    }, {
      key: "getTexture",
      value: function getTexture(t) {
        return this.quadTextures[t];
      }
    }, {
      key: "getTextureWidth",
      value: function getTextureWidth(t) {
        var e = this.quadTextures[t];
        return e.w ? e.w : this.quadElements[t]._displayedTextureSource.w;
      }
    }, {
      key: "getTextureHeight",
      value: function getTextureHeight(t) {
        var e = this.quadTextures[t];
        return e.h ? e.h : this.quadElements[t]._displayedTextureSource.h;
      }
    }, {
      key: "length",
      get: function get() {
        return this.quadTextures.length;
      }
    }]);

    return CoreQuadList;
  }();

  var WebGLCoreQuadList =
  /*#__PURE__*/
  function (_CoreQuadList) {
    _inherits(WebGLCoreQuadList, _CoreQuadList);

    function WebGLCoreQuadList(t) {
      var _this27;

      _classCallCheck(this, WebGLCoreQuadList);

      _this27 = _possibleConstructorReturn(this, _getPrototypeOf(WebGLCoreQuadList).call(this, t));
      var e = t.stage.getOption("bufferMemory");
      _this27.dataLength = 0, _this27.data = new ArrayBuffer(e), _this27.floats = new Float32Array(_this27.data), _this27.uints = new Uint32Array(_this27.data);
      return _this27;
    }

    _createClass(WebGLCoreQuadList, [{
      key: "getAttribsDataByteOffset",
      value: function getAttribsDataByteOffset(t) {
        return 80 * t;
      }
    }, {
      key: "getQuadContents",
      value: function getQuadContents() {
        var t = this.floats,
            e = this.uints,
            i = [];

        for (var s = 1; s <= this.length; s++) {
          var r = "entry " + s + ": ";

          for (var _i22 = 0; _i22 < 4; _i22++) {
            var n = 20 * s + 4 * _i22;
            r += t[n] + "," + t[n + 1] + ":" + t[n + 2] + "," + t[n + 3] + "[" + e[n + 4].toString(16) + "] ";
          }

          i.push(r);
        }

        return i;
      }
    }]);

    return WebGLCoreQuadList;
  }(CoreQuadList);

  var CoreQuadOperation =
  /*#__PURE__*/
  function () {
    function CoreQuadOperation(t, e, i, s, r, n) {
      _classCallCheck(this, CoreQuadOperation);

      this.ctx = t, this.shader = e, this.shaderOwner = i, this.renderTextureInfo = s, this.scissor = r, this.index = n, this.length = 0;
    }

    _createClass(CoreQuadOperation, [{
      key: "getTexture",
      value: function getTexture(t) {
        return this.quads.getTexture(this.index + t);
      }
    }, {
      key: "getElementCore",
      value: function getElementCore(t) {
        return this.quads.getElementCore(this.index + t);
      }
    }, {
      key: "getElement",
      value: function getElement(t) {
        return this.quads.getElement(this.index + t);
      }
    }, {
      key: "getElementWidth",
      value: function getElementWidth(t) {
        return this.getElement(t).renderWidth;
      }
    }, {
      key: "getElementHeight",
      value: function getElementHeight(t) {
        return this.getElement(t).renderHeight;
      }
    }, {
      key: "getTextureWidth",
      value: function getTextureWidth(t) {
        return this.quads.getTextureWidth(this.index + t);
      }
    }, {
      key: "getTextureHeight",
      value: function getTextureHeight(t) {
        return this.quads.getTextureHeight(this.index + t);
      }
    }, {
      key: "getRenderWidth",
      value: function getRenderWidth() {
        return this.renderTextureInfo ? this.renderTextureInfo.w : this.ctx.stage.w;
      }
    }, {
      key: "getRenderHeight",
      value: function getRenderHeight() {
        return this.renderTextureInfo ? this.renderTextureInfo.h : this.ctx.stage.h;
      }
    }, {
      key: "quads",
      get: function get() {
        return this.ctx.renderState.quads;
      }
    }]);

    return CoreQuadOperation;
  }();

  var WebGLCoreQuadOperation =
  /*#__PURE__*/
  function (_CoreQuadOperation) {
    _inherits(WebGLCoreQuadOperation, _CoreQuadOperation);

    function WebGLCoreQuadOperation(t, e, i, s, r, n) {
      var _this28;

      _classCallCheck(this, WebGLCoreQuadOperation);

      _this28 = _possibleConstructorReturn(this, _getPrototypeOf(WebGLCoreQuadOperation).call(this, t, e, i, s, r, n)), _this28.extraAttribsDataByteOffset = 0;
      return _this28;
    }

    _createClass(WebGLCoreQuadOperation, [{
      key: "getAttribsDataByteOffset",
      value: function getAttribsDataByteOffset(t) {
        return this.quads.getAttribsDataByteOffset(this.index + t);
      }
    }, {
      key: "getNormalRenderTextureCoords",
      value: function getNormalRenderTextureCoords(t, e) {
        var i = this.shaderOwner.getRenderTextureCoords(t, e);
        return i[0] /= this.getRenderWidth(), i[1] /= this.getRenderHeight(), i[0] = 2 * i[0] - 1, i[1] = 1 - 2 * i[1], i;
      }
    }, {
      key: "getProjection",
      value: function getProjection() {
        return null === this.renderTextureInfo ? this.ctx.renderExec._projection : this.renderTextureInfo.nativeTexture.projection;
      }
    }]);

    return WebGLCoreQuadOperation;
  }(CoreQuadOperation);

  var CoreRenderExecutor =
  /*#__PURE__*/
  function () {
    function CoreRenderExecutor(t) {
      _classCallCheck(this, CoreRenderExecutor);

      this.ctx = t, this.renderState = t.renderState, this.gl = this.ctx.stage.gl;
    }

    _createClass(CoreRenderExecutor, [{
      key: "destroy",
      value: function destroy() {}
    }, {
      key: "_reset",
      value: function _reset() {
        this._bindRenderTexture(null), this._setScissor(null), this._clearRenderTexture();
      }
    }, {
      key: "execute",
      value: function execute() {
        this._reset();

        var t = this.renderState.quadOperations,
            e = 0,
            i = t.length;

        for (; e < i;) {
          this._processQuadOperation(t[e]), e++;
        }
      }
    }, {
      key: "_processQuadOperation",
      value: function _processQuadOperation(t) {
        t.renderTextureInfo && t.renderTextureInfo.ignore || (this._setupQuadOperation(t), this._execQuadOperation(t));
      }
    }, {
      key: "_setupQuadOperation",
      value: function _setupQuadOperation(t) {}
    }, {
      key: "_execQuadOperation",
      value: function _execQuadOperation(t) {
        var e = t.renderTextureInfo ? t.renderTextureInfo.nativeTexture : null;
        this._renderTexture !== e && this._bindRenderTexture(e), t.renderTextureInfo && !t.renderTextureInfo.cleared ? (this._setScissor(null), this._clearRenderTexture(), t.renderTextureInfo.cleared = !0, this._setScissor(t.scissor)) : this._setScissor(t.scissor), this._renderQuadOperation(t);
      }
    }, {
      key: "_renderQuadOperation",
      value: function _renderQuadOperation(t) {}
    }, {
      key: "_bindRenderTexture",
      value: function _bindRenderTexture(t) {
        this._renderTexture = t;
      }
    }, {
      key: "_clearRenderTexture",
      value: function _clearRenderTexture(t) {}
    }, {
      key: "_setScissor",
      value: function _setScissor(t) {}
    }]);

    return CoreRenderExecutor;
  }();

  var WebGLCoreRenderExecutor =
  /*#__PURE__*/
  function (_CoreRenderExecutor) {
    _inherits(WebGLCoreRenderExecutor, _CoreRenderExecutor);

    function WebGLCoreRenderExecutor(t) {
      var _this29;

      _classCallCheck(this, WebGLCoreRenderExecutor);

      _this29 = _possibleConstructorReturn(this, _getPrototypeOf(WebGLCoreRenderExecutor).call(this, t)), _this29.gl = _this29.ctx.stage.gl, _this29.init();
      return _this29;
    }

    _createClass(WebGLCoreRenderExecutor, [{
      key: "init",
      value: function init() {
        var t = this.gl;
        this._attribsBuffer = t.createBuffer();
        var e = Math.floor(this.renderState.quads.data.byteLength / 80),
            i = new Uint16Array(6 * e);

        for (var _t96 = 0, s = 0; _t96 < e; _t96 += 6, s += 4) {
          i[_t96] = s, i[_t96 + 1] = s + 1, i[_t96 + 2] = s + 2, i[_t96 + 3] = s, i[_t96 + 4] = s + 2, i[_t96 + 5] = s + 3;
        }

        this._quadsBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._quadsBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, i, t.STATIC_DRAW), this._projection = new Float32Array([2 / this.ctx.stage.coordsWidth, -2 / this.ctx.stage.coordsHeight]);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(WebGLCoreRenderExecutor.prototype), "destroy", this).call(this), this.gl.deleteBuffer(this._attribsBuffer), this.gl.deleteBuffer(this._quadsBuffer);
      }
    }, {
      key: "_reset",
      value: function _reset() {
        _get(_getPrototypeOf(WebGLCoreRenderExecutor.prototype), "_reset", this).call(this);

        var t = this.gl;
        t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA), t.enable(t.BLEND), t.disable(t.DEPTH_TEST), this._stopShaderProgram(), this._setupBuffers();
      }
    }, {
      key: "_setupBuffers",
      value: function _setupBuffers() {
        var t = this.gl;
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._quadsBuffer);
        var e = new Float32Array(this.renderState.quads.data, 0, this.renderState.quads.dataLength);
        t.bindBuffer(t.ARRAY_BUFFER, this._attribsBuffer), t.bufferData(t.ARRAY_BUFFER, e, t.DYNAMIC_DRAW);
      }
    }, {
      key: "_setupQuadOperation",
      value: function _setupQuadOperation(t) {
        _get(_getPrototypeOf(WebGLCoreRenderExecutor.prototype), "_setupQuadOperation", this).call(this, t), this._useShaderProgram(t.shader, t);
      }
    }, {
      key: "_renderQuadOperation",
      value: function _renderQuadOperation(t) {
        var e = t.shader;
        (t.length || t.shader.addEmpty()) && (e.beforeDraw(t), e.draw(t), e.afterDraw(t));
      }
    }, {
      key: "_useShaderProgram",
      value: function _useShaderProgram(t, e) {
        t.hasSameProgram(this._currentShaderProgram) || (this._currentShaderProgram && this._currentShaderProgram.stopProgram(), t.useProgram(), this._currentShaderProgram = t), t.setupUniforms(e);
      }
    }, {
      key: "_stopShaderProgram",
      value: function _stopShaderProgram() {
        this._currentShaderProgram && (this._currentShaderProgram.stopProgram(), this._currentShaderProgram = null);
      }
    }, {
      key: "_bindRenderTexture",
      value: function _bindRenderTexture(t) {
        _get(_getPrototypeOf(WebGLCoreRenderExecutor.prototype), "_bindRenderTexture", this).call(this, t);

        var e = this.gl;
        this._renderTexture ? (e.bindFramebuffer(e.FRAMEBUFFER, this._renderTexture.framebuffer), e.viewport(0, 0, this._renderTexture.w, this._renderTexture.h)) : (e.bindFramebuffer(e.FRAMEBUFFER, null), e.viewport(0, 0, this.ctx.stage.w, this.ctx.stage.h));
      }
    }, {
      key: "_clearRenderTexture",
      value: function _clearRenderTexture() {
        _get(_getPrototypeOf(WebGLCoreRenderExecutor.prototype), "_clearRenderTexture", this).call(this);

        var t = this.gl;
        if (this._renderTexture) t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT);else {
          var _e96 = this.ctx.stage.getClearColor();

          _e96 && (t.clearColor(_e96[0] * _e96[3], _e96[1] * _e96[3], _e96[2] * _e96[3], _e96[3]), t.clear(t.COLOR_BUFFER_BIT));
        }
      }
    }, {
      key: "_setScissor",
      value: function _setScissor(t) {
        if (_get(_getPrototypeOf(WebGLCoreRenderExecutor.prototype), "_setScissor", this).call(this, t), this._scissor === t) return;
        this._scissor = t;
        var e = this.gl;

        if (t) {
          e.enable(e.SCISSOR_TEST);
          var i = this.ctx.stage.getRenderPrecision(),
              s = t[1];
          null === this._renderTexture && (s = this.ctx.stage.h / i - (t[1] + t[3])), e.scissor(Math.round(t[0] * i), Math.round(s * i), Math.round(t[2] * i), Math.round(t[3] * i));
        } else e.disable(e.SCISSOR_TEST);
      }
    }]);

    return WebGLCoreRenderExecutor;
  }(CoreRenderExecutor);

  var CoreRenderState =
  /*#__PURE__*/
  function () {
    function CoreRenderState(t) {
      _classCallCheck(this, CoreRenderState);

      this.ctx = t, this.stage = t.stage, this.defaultShader = this.stage.renderer.getDefaultShader(t), this.renderer = t.stage.renderer, this.quads = this.renderer.createCoreQuadList(t);
    }

    _createClass(CoreRenderState, [{
      key: "reset",
      value: function reset() {
        this._renderTextureInfo = null, this._scissor = null, this._shader = null, this._shaderOwner = null, this._realShader = null, this._check = !1, this.quadOperations = [], this._texturizer = null, this._texturizerTemporary = !1, this._quadOperation = null, this.quads.reset(), this._temporaryTexturizers = [], this._isCachingTexturizer = !1;
      }
    }, {
      key: "setShader",
      value: function setShader(t, e) {
        this._shaderOwner === e && this._realShader === t || (this._realShader = t, t.useDefault() && (t = this.defaultShader), this._shader === t && this._shaderOwner === e || (this._shader = t, this._shaderOwner = e, this._check = !0));
      }
    }, {
      key: "setScissor",
      value: function setScissor(t) {
        this._scissor !== t && (this._scissor = t || null, this._check = !0);
      }
    }, {
      key: "getScissor",
      value: function getScissor() {
        return this._scissor;
      }
    }, {
      key: "setRenderTextureInfo",
      value: function setRenderTextureInfo(t) {
        this._renderTextureInfo !== t && (this._renderTextureInfo = t, this._scissor = null, this._check = !0);
      }
    }, {
      key: "setTexturizer",
      value: function setTexturizer(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        this._texturizer = t, this._cacheTexturizer = e;
      }
    }, {
      key: "addQuad",
      value: function addQuad(t) {
        this._quadOperation ? this._check && this._hasChanges() && (this._finishQuadOperation(), this._check = !1) : this._createQuadOperation();
        var e = null;
        this._texturizer && (e = this._texturizer.getResultTexture(), this._cacheTexturizer || this._temporaryTexturizers.push(this._texturizer)), e || (e = t._displayedTextureSource.nativeTexture), this._renderTextureInfo && (this._shader === this.defaultShader && this._renderTextureInfo.empty ? (this._renderTextureInfo.nativeTexture = e, this._renderTextureInfo.offset = this.length) : this._renderTextureInfo.nativeTexture = null, this._renderTextureInfo.empty = !1), this.quads.quadTextures.push(e), this.quads.quadElements.push(t), this._quadOperation.length++, this.renderer.addQuad(this, this.quads, this.length - 1);
      }
    }, {
      key: "finishedRenderTexture",
      value: function finishedRenderTexture() {
        this._renderTextureInfo.nativeTexture && (this._isRenderTextureReusable() || (this._renderTextureInfo.nativeTexture = null));
      }
    }, {
      key: "_isRenderTextureReusable",
      value: function _isRenderTextureReusable() {
        var t = this._renderTextureInfo.offset;
        return this.quads.quadTextures[t].w === this._renderTextureInfo.w && this.quads.quadTextures[t].h === this._renderTextureInfo.h && this.renderer.isRenderTextureReusable(this, this._renderTextureInfo);
      }
    }, {
      key: "_hasChanges",
      value: function _hasChanges() {
        var t = this._quadOperation;
        return this._shader !== t.shader || this._shaderOwner !== t.shaderOwner || this._renderTextureInfo !== t.renderTextureInfo || this._scissor !== t.scissor && (this._scissor[0] !== t.scissor[0] || this._scissor[1] !== t.scissor[1] || this._scissor[2] !== t.scissor[2] || this._scissor[3] !== t.scissor[3]);
      }
    }, {
      key: "_finishQuadOperation",
      value: function _finishQuadOperation() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;

        if (this._quadOperation) {
          if ((this._quadOperation.length || this._shader.addEmpty()) && (!this._quadOperation.scissor || this._quadOperation.scissor[2] > 0 && this._quadOperation.scissor[3] > 0) && this.quadOperations.push(this._quadOperation), this._temporaryTexturizers.length) {
            for (var _t97 = 0, _e97 = this._temporaryTexturizers.length; _t97 < _e97; _t97++) {
              this._temporaryTexturizers[_t97].releaseRenderTexture();
            }

            this._temporaryTexturizers = [];
          }

          this._quadOperation = null;
        }

        t && this._createQuadOperation();
      }
    }, {
      key: "_createQuadOperation",
      value: function _createQuadOperation() {
        this._quadOperation = this.renderer.createCoreQuadOperation(this.ctx, this._shader, this._shaderOwner, this._renderTextureInfo, this._scissor, this.length), this._check = !1;
      }
    }, {
      key: "finish",
      value: function finish() {
        this._quadOperation && this._finishQuadOperation(!1), this.renderer.finishRenderState(this);
      }
    }, {
      key: "length",
      get: function get() {
        return this.quads.quadTextures.length;
      }
    }, {
      key: "renderTextureInfo",
      get: function get() {
        return this._renderTextureInfo;
      }
    }, {
      key: "isCachingTexturizer",
      set: function set(t) {
        this._isCachingTexturizer = t;
      },
      get: function get() {
        return this._isCachingTexturizer;
      }
    }]);

    return CoreRenderState;
  }();

  var WebGLShaderProgram =
  /*#__PURE__*/
  function () {
    function WebGLShaderProgram(t, e) {
      _classCallCheck(this, WebGLShaderProgram);

      this.vertexShaderSource = t, this.fragmentShaderSource = e, this._program = null, this._uniformLocations = new Map(), this._attributeLocations = new Map(), this._currentUniformValues = {};
    }

    _createClass(WebGLShaderProgram, [{
      key: "compile",
      value: function compile(t) {
        if (this._program) return;
        this.gl = t, this._program = t.createProgram();

        var e = this._glCompile(t.VERTEX_SHADER, this.vertexShaderSource),
            i = this._glCompile(t.FRAGMENT_SHADER, this.fragmentShaderSource);

        t.attachShader(this._program, e), t.attachShader(this._program, i), t.linkProgram(this._program), t.getProgramParameter(this._program, t.LINK_STATUS) || (console.error("Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(this._program, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(this._program) && console.warn("Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(this._program)), t.deleteProgram(this._program), this._program = null), t.deleteShader(e), t.deleteShader(i);
      }
    }, {
      key: "_glCompile",
      value: function _glCompile(t, e) {
        var i = this.gl.createShader(t);

        if (this.gl.shaderSource(i, e), this.gl.compileShader(i), !this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS)) {
          console.log(this.constructor.name, "Type: " + (t === this.gl.VERTEX_SHADER ? "vertex shader" : "fragment shader")), console.log(this.gl.getShaderInfoLog(i));
          var s = 0;
          return console.log("========== source ==========\n" + e.split("\n").map(function (t) {
            return ++s + ": " + t;
          }).join("\n")), null;
        }

        return i;
      }
    }, {
      key: "getUniformLocation",
      value: function getUniformLocation(t) {
        var e = this._uniformLocations.get(t);

        return void 0 === e && (e = this.gl.getUniformLocation(this._program, t), this._uniformLocations.set(t, e)), e;
      }
    }, {
      key: "getAttribLocation",
      value: function getAttribLocation(t) {
        var e = this._attributeLocations.get(t);

        return void 0 === e && (e = this.gl.getAttribLocation(this._program, t), this._attributeLocations.set(t, e)), e;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._program && (this.gl.deleteProgram(this._program), this._program = null);
      }
    }, {
      key: "_valueEquals",
      value: function _valueEquals(t, e) {
        if (t.length && e.length) {
          for (var i = 0, s = t.length; i < s; i++) {
            if (t[i] !== e[i]) return !1;
          }

          return !0;
        }

        return t === e;
      }
    }, {
      key: "_valueClone",
      value: function _valueClone(t) {
        return t.length ? t.slice(0) : t;
      }
    }, {
      key: "setUniformValue",
      value: function setUniformValue(t, e, i) {
        var s = this._currentUniformValues[t];

        if (void 0 === s || !this._valueEquals(s, e)) {
          var _s20 = this._valueClone(e);

          this._currentUniformValues[t] = _s20;
          var r = this.getUniformLocation(t);

          if (r) {
            i === this.gl.uniformMatrix2fv || i === this.gl.uniformMatrix3fv || i === this.gl.uniformMatrix4fv ? i.call(this.gl, r, !1, _s20) : i.call(this.gl, r, _s20);
          }
        }
      }
    }, {
      key: "glProgram",
      get: function get() {
        return this._program;
      }
    }, {
      key: "compiled",
      get: function get() {
        return !!this._program;
      }
    }]);

    return WebGLShaderProgram;
  }();

  var WebGLShader =
  /*#__PURE__*/
  function (_Shader) {
    _inherits(WebGLShader, _Shader);

    function WebGLShader(t) {
      var _this30;

      _classCallCheck(this, WebGLShader);

      _this30 = _possibleConstructorReturn(this, _getPrototypeOf(WebGLShader).call(this, t));
      var e = t.stage;
      _this30._program = e.renderer.shaderPrograms.get(_this30.constructor), _this30._program || (_this30._program = new WebGLShaderProgram(_this30.constructor.vertexShaderSource, _this30.constructor.fragmentShaderSource), e.renderer.shaderPrograms.set(_this30.constructor, _this30._program)), _this30.gl = e.gl;
      return _this30;
    }

    _createClass(WebGLShader, [{
      key: "_init",
      value: function _init() {
        this._initialized || (this.initialize(), this._initialized = !0);
      }
    }, {
      key: "initialize",
      value: function initialize() {
        this._program.compile(this.gl);
      }
    }, {
      key: "_uniform",
      value: function _uniform(t) {
        return this._program.getUniformLocation(t);
      }
    }, {
      key: "_attrib",
      value: function _attrib(t) {
        return this._program.getAttribLocation(t);
      }
    }, {
      key: "_setUniform",
      value: function _setUniform(t, e, i) {
        this._program.setUniformValue(t, e, i);
      }
    }, {
      key: "useProgram",
      value: function useProgram() {
        this._init(), this.gl.useProgram(this.glProgram), this.beforeUsage(), this.enableAttribs();
      }
    }, {
      key: "stopProgram",
      value: function stopProgram() {
        this.afterUsage(), this.disableAttribs();
      }
    }, {
      key: "hasSameProgram",
      value: function hasSameProgram(t) {
        return t && (t === this || t._program === this._program);
      }
    }, {
      key: "beforeUsage",
      value: function beforeUsage() {}
    }, {
      key: "afterUsage",
      value: function afterUsage() {}
    }, {
      key: "enableAttribs",
      value: function enableAttribs() {}
    }, {
      key: "disableAttribs",
      value: function disableAttribs() {}
    }, {
      key: "getExtraAttribBytesPerVertex",
      value: function getExtraAttribBytesPerVertex() {
        return 0;
      }
    }, {
      key: "getVertexAttribPointerOffset",
      value: function getVertexAttribPointerOffset(t) {
        return t.extraAttribsDataByteOffset - 4 * (t.index + 1) * this.getExtraAttribBytesPerVertex();
      }
    }, {
      key: "setExtraAttribsInBuffer",
      value: function setExtraAttribsInBuffer(t) {}
    }, {
      key: "setupUniforms",
      value: function setupUniforms(t) {}
    }, {
      key: "_getProjection",
      value: function _getProjection(t) {
        return t.getProjection();
      }
    }, {
      key: "getFlipY",
      value: function getFlipY(t) {
        return this._getProjection(t)[1] < 0;
      }
    }, {
      key: "beforeDraw",
      value: function beforeDraw(t) {}
    }, {
      key: "draw",
      value: function draw(t) {}
    }, {
      key: "afterDraw",
      value: function afterDraw(t) {}
    }, {
      key: "cleanup",
      value: function cleanup() {
        this._initialized = !1;
      }
    }, {
      key: "glProgram",
      get: function get() {
        return this._program.glProgram;
      }
    }, {
      key: "initialized",
      get: function get() {
        return this._initialized;
      }
    }]);

    return WebGLShader;
  }(Shader);

  var DefaultShader =
  /*#__PURE__*/
  function (_WebGLShader) {
    _inherits(DefaultShader, _WebGLShader);

    function DefaultShader() {
      _classCallCheck(this, DefaultShader);

      return _possibleConstructorReturn(this, _getPrototypeOf(DefaultShader).apply(this, arguments));
    }

    _createClass(DefaultShader, [{
      key: "enableAttribs",
      value: function enableAttribs() {
        var t = this.gl;
        t.vertexAttribPointer(this._attrib("aVertexPosition"), 2, t.FLOAT, !1, 20, 0), t.enableVertexAttribArray(this._attrib("aVertexPosition")), -1 !== this._attrib("aTextureCoord") && (t.vertexAttribPointer(this._attrib("aTextureCoord"), 2, t.FLOAT, !1, 20, 8), t.enableVertexAttribArray(this._attrib("aTextureCoord"))), -1 !== this._attrib("aColor") && (t.vertexAttribPointer(this._attrib("aColor"), 4, t.UNSIGNED_BYTE, !0, 20, 16), t.enableVertexAttribArray(this._attrib("aColor")));
      }
    }, {
      key: "disableAttribs",
      value: function disableAttribs() {
        var t = this.gl;
        t.disableVertexAttribArray(this._attrib("aVertexPosition")), -1 !== this._attrib("aTextureCoord") && t.disableVertexAttribArray(this._attrib("aTextureCoord")), -1 !== this._attrib("aColor") && t.disableVertexAttribArray(this._attrib("aColor"));
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(t) {
        this._setUniform("projection", this._getProjection(t), this.gl.uniform2fv, !1);
      }
    }, {
      key: "draw",
      value: function draw(t) {
        var e = this.gl,
            i = t.length;

        if (i) {
          var s = t.getTexture(0),
              r = 0;

          for (var n = 0; n < i; n++) {
            var _i23 = t.getTexture(n);

            s !== _i23 && (e.bindTexture(e.TEXTURE_2D, s), e.drawElements(e.TRIANGLES, 6 * (n - r), e.UNSIGNED_SHORT, 6 * (r + t.index) * 2), s = _i23, r = n);
          }

          r < i && (e.bindTexture(e.TEXTURE_2D, s), e.drawElements(e.TRIANGLES, 6 * (i - r), e.UNSIGNED_SHORT, 6 * (r + t.index) * 2));
        }
      }
    }]);

    return DefaultShader;
  }(WebGLShader);

  DefaultShader.vertexShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    attribute vec2 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    attribute vec4 aColor;\n    uniform vec2 projection;\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    void main(void){\n        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);\n        vTextureCoord = aTextureCoord;\n        vColor = aColor;\n        gl_Position.y = -sign(projection.y) * gl_Position.y;\n    }\n", DefaultShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    void main(void){\n        gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;\n    }\n";

  var Renderer =
  /*#__PURE__*/
  function () {
    function Renderer(t) {
      _classCallCheck(this, Renderer);

      this.stage = t, this._defaultShader = void 0;
    }

    _createClass(Renderer, [{
      key: "gc",
      value: function gc(t) {}
    }, {
      key: "destroy",
      value: function destroy() {}
    }, {
      key: "getDefaultShader",
      value: function getDefaultShader() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.stage.ctx;
        return this._defaultShader || (this._defaultShader = this._createDefaultShader(t)), this._defaultShader;
      }
    }, {
      key: "_createDefaultShader",
      value: function _createDefaultShader(t) {}
    }, {
      key: "isValidShaderType",
      value: function isValidShaderType(t) {
        return t.prototype instanceof this._getShaderBaseType();
      }
    }, {
      key: "createShader",
      value: function createShader(t, e) {
        var i = e.type;

        if (this.isValidShaderType(i)) {
          var s = new i(t);
          return Base.patchObject(this, e), s;
        }

        {
          var _e98 = this._getShaderAlternative(i);

          return _e98 ? new _e98(t) : (console.warn("Shader has no implementation for render target: " + i.name), this._createDefaultShader(t));
        }
      }
    }, {
      key: "_getShaderBaseType",
      value: function _getShaderBaseType() {}
    }, {
      key: "_getShaderAlternative",
      value: function _getShaderAlternative(t) {
        return this.getDefaultShader();
      }
    }, {
      key: "copyRenderTexture",
      value: function copyRenderTexture(t, e, i) {
        console.warn("copyRenderTexture not supported by renderer");
      }
    }]);

    return Renderer;
  }();

  var WebGLRenderer =
  /*#__PURE__*/
  function (_Renderer) {
    _inherits(WebGLRenderer, _Renderer);

    function WebGLRenderer(t) {
      var _this31;

      _classCallCheck(this, WebGLRenderer);

      _this31 = _possibleConstructorReturn(this, _getPrototypeOf(WebGLRenderer).call(this, t)), _this31.shaderPrograms = new Map();
      return _this31;
    }

    _createClass(WebGLRenderer, [{
      key: "destroy",
      value: function destroy() {
        this.shaderPrograms.forEach(function (t) {
          return t.destroy();
        });
      }
    }, {
      key: "_createDefaultShader",
      value: function _createDefaultShader(t) {
        return new DefaultShader(t);
      }
    }, {
      key: "_getShaderBaseType",
      value: function _getShaderBaseType() {
        return WebGLShader;
      }
    }, {
      key: "_getShaderAlternative",
      value: function _getShaderAlternative(t) {
        return t.getWebGL && t.getWebGL();
      }
    }, {
      key: "createCoreQuadList",
      value: function createCoreQuadList(t) {
        return new WebGLCoreQuadList(t);
      }
    }, {
      key: "createCoreQuadOperation",
      value: function createCoreQuadOperation(t, e, i, s, r, n) {
        return new WebGLCoreQuadOperation(t, e, i, s, r, n);
      }
    }, {
      key: "createCoreRenderExecutor",
      value: function createCoreRenderExecutor(t) {
        return new WebGLCoreRenderExecutor(t);
      }
    }, {
      key: "createCoreRenderState",
      value: function createCoreRenderState(t) {
        return new CoreRenderState(t);
      }
    }, {
      key: "createRenderTexture",
      value: function createRenderTexture(t, e, i, s) {
        var r = this.stage.gl,
            n = r.createTexture();
        return r.bindTexture(r.TEXTURE_2D, n), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, i, s, 0, r.RGBA, r.UNSIGNED_BYTE, null), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), n.params = {}, n.params[r.TEXTURE_MAG_FILTER] = r.LINEAR, n.params[r.TEXTURE_MIN_FILTER] = r.LINEAR, n.params[r.TEXTURE_WRAP_S] = r.CLAMP_TO_EDGE, n.params[r.TEXTURE_WRAP_T] = r.CLAMP_TO_EDGE, n.options = {
          format: r.RGBA,
          internalFormat: r.RGBA,
          type: r.UNSIGNED_BYTE
        }, n.framebuffer = r.createFramebuffer(), n.projection = new Float32Array([2 / t, 2 / e]), r.bindFramebuffer(r.FRAMEBUFFER, n.framebuffer), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, n, 0), n;
      }
    }, {
      key: "freeRenderTexture",
      value: function freeRenderTexture(t) {
        var e = this.stage.gl;
        e.deleteFramebuffer(t.framebuffer), e.deleteTexture(t);
      }
    }, {
      key: "uploadTextureSource",
      value: function uploadTextureSource(t, e) {
        var i = this.stage.gl,
            s = e.source,
            r = {
          premultiplyAlpha: !0,
          hasAlpha: !0
        };
        e && e.hasOwnProperty("premultiplyAlpha") && (r.premultiplyAlpha = e.premultiplyAlpha), e && e.hasOwnProperty("flipBlueRed") && (r.flipBlueRed = e.flipBlueRed), e && e.hasOwnProperty("hasAlpha") && (r.hasAlpha = e.hasAlpha), r.hasAlpha || (r.premultiplyAlpha = !1), r.texParams = e.texParams || {}, r.texOptions = e.texOptions || {};
        var n = i.createTexture();
        i.bindTexture(i.TEXTURE_2D, n), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha), Utils.isNode && i.pixelStorei(i.UNPACK_FLIP_BLUE_RED, !!r.flipBlueRed);
        var o = r.texParams;
        o[i.TEXTURE_MAG_FILTER] || (o[i.TEXTURE_MAG_FILTER] = i.LINEAR), o[i.TEXTURE_MIN_FILTER] || (o[i.TEXTURE_MIN_FILTER] = i.LINEAR), o[i.TEXTURE_WRAP_S] || (o[i.TEXTURE_WRAP_S] = i.CLAMP_TO_EDGE), o[i.TEXTURE_WRAP_T] || (o[i.TEXTURE_WRAP_T] = i.CLAMP_TO_EDGE), Object.keys(o).forEach(function (t) {
          var e = o[t];
          i.texParameteri(i.TEXTURE_2D, parseInt(t), e);
        });
        var a = r.texOptions;
        return a.format = a.format || (r.hasAlpha ? i.RGBA : i.RGB), a.type = a.type || i.UNSIGNED_BYTE, a.internalFormat = a.internalFormat || a.format, this.stage.platform.uploadGlTexture(i, t, s, a), n.params = Utils.cloneObjShallow(o), n.options = Utils.cloneObjShallow(a), n;
      }
    }, {
      key: "freeTextureSource",
      value: function freeTextureSource(t) {
        this.stage.gl.deleteTexture(t.nativeTexture);
      }
    }, {
      key: "addQuad",
      value: function addQuad(t, e, i) {
        var s = 20 * i;
        var r = e.quadElements[i];
        var n = r._renderContext,
            o = t.quads.floats,
            a = t.quads.uints;
        var h = StageUtils.mergeColorAlpha;
        if (0 !== n.tb || 0 !== n.tc) o[s++] = n.px, o[s++] = n.py, o[s++] = r._ulx, o[s++] = r._uly, a[s++] = h(r._colorUl, n.alpha), o[s++] = n.px + r._w * n.ta, o[s++] = n.py + r._w * n.tc, o[s++] = r._brx, o[s++] = r._uly, a[s++] = h(r._colorUr, n.alpha), o[s++] = n.px + r._w * n.ta + r._h * n.tb, o[s++] = n.py + r._w * n.tc + r._h * n.td, o[s++] = r._brx, o[s++] = r._bry, a[s++] = h(r._colorBr, n.alpha), o[s++] = n.px + r._h * n.tb, o[s++] = n.py + r._h * n.td, o[s++] = r._ulx, o[s++] = r._bry, a[s] = h(r._colorBl, n.alpha);else {
          var _t98 = n.px + r._w * n.ta,
              _e99 = n.py + r._h * n.td;

          o[s++] = n.px, o[s++] = n.py, o[s++] = r._ulx, o[s++] = r._uly, a[s++] = h(r._colorUl, n.alpha), o[s++] = _t98, o[s++] = n.py, o[s++] = r._brx, o[s++] = r._uly, a[s++] = h(r._colorUr, n.alpha), o[s++] = _t98, o[s++] = _e99, o[s++] = r._brx, o[s++] = r._bry, a[s++] = h(r._colorBr, n.alpha), o[s++] = n.px, o[s++] = _e99, o[s++] = r._ulx, o[s++] = r._bry, a[s] = h(r._colorBl, n.alpha);
        }
      }
    }, {
      key: "isRenderTextureReusable",
      value: function isRenderTextureReusable(t, e) {
        var i = 80 * t._renderTextureInfo.offset / 4,
            s = t.quads.floats,
            r = t.quads.uints;
        return 0 === s[i] && 0 === s[i + 1] && 0 === s[i + 2] && 0 === s[i + 3] && 4294967295 === r[i + 4] && s[i + 5] === e.w && 0 === s[i + 6] && 1 === s[i + 7] && 0 === s[i + 8] && 4294967295 === r[i + 9] && s[i + 10] === e.w && s[i + 11] === e.h && 1 === s[i + 12] && 1 === s[i + 13] && 4294967295 === r[i + 14] && 0 === s[i + 15] && s[i + 16] === e.h && 0 === s[i + 17] && 1 === s[i + 18] && 4294967295 === r[i + 19];
      }
    }, {
      key: "finishRenderState",
      value: function finishRenderState(t) {
        var e = 80 * t.length;

        for (var i = 0, s = t.quadOperations.length; i < s; i++) {
          t.quadOperations[i].extraAttribsDataByteOffset = e;

          var _s21 = 4 * t.quadOperations[i].shader.getExtraAttribBytesPerVertex() * t.quadOperations[i].length;

          e += _s21, _s21 && t.quadOperations[i].shader.setExtraAttribsInBuffer(t.quadOperations[i], t.quads);
        }

        t.quads.dataLength = e;
      }
    }, {
      key: "copyRenderTexture",
      value: function copyRenderTexture(t, e, i) {
        var s = this.stage.gl;
        s.bindTexture(s.TEXTURE_2D, e), s.bindFramebuffer(s.FRAMEBUFFER, t.framebuffer);
        var r = t.precision;
        s.copyTexSubImage2D(s.TEXTURE_2D, 0, r * (i.sx || 0), r * (i.sy || 0), r * (i.x || 0), r * (i.y || 0), r * (i.w || t.ow), r * (i.h || t.oh));
      }
    }]);

    return WebGLRenderer;
  }(Renderer);

  var C2dCoreQuadList =
  /*#__PURE__*/
  function (_CoreQuadList2) {
    _inherits(C2dCoreQuadList, _CoreQuadList2);

    function C2dCoreQuadList(t) {
      var _this32;

      _classCallCheck(this, C2dCoreQuadList);

      _this32 = _possibleConstructorReturn(this, _getPrototypeOf(C2dCoreQuadList).call(this, t)), _this32.renderContexts = [], _this32.modes = [];
      return _this32;
    }

    _createClass(C2dCoreQuadList, [{
      key: "setRenderContext",
      value: function setRenderContext(t, e) {
        this.renderContexts[t] = e;
      }
    }, {
      key: "setSimpleTc",
      value: function setSimpleTc(t, e) {
        e ? this.modes[t] |= 1 : this.modes[t] -= 1 & this.modes[t];
      }
    }, {
      key: "setWhite",
      value: function setWhite(t, e) {
        e ? this.modes[t] |= 2 : this.modes[t] -= 2 & this.modes[t];
      }
    }, {
      key: "getRenderContext",
      value: function getRenderContext(t) {
        return this.renderContexts[t];
      }
    }, {
      key: "getSimpleTc",
      value: function getSimpleTc(t) {
        return 1 & this.modes[t];
      }
    }, {
      key: "getWhite",
      value: function getWhite(t) {
        return 2 & this.modes[t];
      }
    }]);

    return C2dCoreQuadList;
  }(CoreQuadList);

  var C2dCoreQuadOperation =
  /*#__PURE__*/
  function (_CoreQuadOperation2) {
    _inherits(C2dCoreQuadOperation, _CoreQuadOperation2);

    function C2dCoreQuadOperation() {
      _classCallCheck(this, C2dCoreQuadOperation);

      return _possibleConstructorReturn(this, _getPrototypeOf(C2dCoreQuadOperation).apply(this, arguments));
    }

    _createClass(C2dCoreQuadOperation, [{
      key: "getRenderContext",
      value: function getRenderContext(t) {
        return this.quads.getRenderContext(this.index + t);
      }
    }, {
      key: "getSimpleTc",
      value: function getSimpleTc(t) {
        return this.quads.getSimpleTc(this.index + t);
      }
    }, {
      key: "getWhite",
      value: function getWhite(t) {
        return this.quads.getWhite(this.index + t);
      }
    }]);

    return C2dCoreQuadOperation;
  }(CoreQuadOperation);

  var C2dCoreRenderExecutor =
  /*#__PURE__*/
  function (_CoreRenderExecutor2) {
    _inherits(C2dCoreRenderExecutor, _CoreRenderExecutor2);

    function C2dCoreRenderExecutor() {
      _classCallCheck(this, C2dCoreRenderExecutor);

      return _possibleConstructorReturn(this, _getPrototypeOf(C2dCoreRenderExecutor).apply(this, arguments));
    }

    _createClass(C2dCoreRenderExecutor, [{
      key: "init",
      value: function init() {
        this._mainRenderTexture = this.ctx.stage.getCanvas();
      }
    }, {
      key: "_renderQuadOperation",
      value: function _renderQuadOperation(t) {
        var e = t.shader;

        if (t.length || t.shader.addEmpty()) {
          var i = this._renderTexture || this._mainRenderTexture;
          e.beforeDraw(t, i), e.draw(t, i), e.afterDraw(t, i);
        }
      }
    }, {
      key: "_clearRenderTexture",
      value: function _clearRenderTexture() {
        var t = this._getContext();

        var e = [0, 0, 0, 0];
        this._mainRenderTexture.ctx === t && (e = this.ctx.stage.getClearColor());
        var i = t.canvas;
        t.setTransform(1, 0, 0, 1, 0, 0), e[0] || e[1] || e[2] || e[3] ? (t.fillStyle = StageUtils.getRgbaStringFromArray(e), t.globalCompositeOperation = "copy", t.beginPath(), t.rect(0, 0, i.width, i.height), t.closePath(), t.fill(), t.globalCompositeOperation = "source-over") : t.clearRect(0, 0, i.width, i.height);
      }
    }, {
      key: "_getContext",
      value: function _getContext() {
        return this._renderTexture ? this._renderTexture.ctx : this._mainRenderTexture.ctx;
      }
    }, {
      key: "_restoreContext",
      value: function _restoreContext() {
        var t = this._getContext();

        t.restore(), t.save(), t._scissor = null;
      }
    }, {
      key: "_setScissor",
      value: function _setScissor(t) {
        var e = this._getContext();

        if (!C2dCoreRenderExecutor._equalScissorAreas(e.canvas, e._scissor, t)) {
          this._restoreContext();

          var i = this.ctx.stage.getRenderPrecision();
          t && (e.beginPath(), e.rect(Math.round(t[0] * i), Math.round(t[1] * i), Math.round(t[2] * i), Math.round(t[3] * i)), e.closePath(), e.clip()), e._scissor = t;
        }
      }
    }], [{
      key: "_equalScissorAreas",
      value: function _equalScissorAreas(t, e, i) {
        return e || (e = [0, 0, t.width, t.height]), i || (i = [0, 0, t.width, t.height]), Utils.equalValues(e, i);
      }
    }]);

    return C2dCoreRenderExecutor;
  }(CoreRenderExecutor);

  var C2dShader =
  /*#__PURE__*/
  function (_Shader2) {
    _inherits(C2dShader, _Shader2);

    function C2dShader() {
      _classCallCheck(this, C2dShader);

      return _possibleConstructorReturn(this, _getPrototypeOf(C2dShader).apply(this, arguments));
    }

    _createClass(C2dShader, [{
      key: "beforeDraw",
      value: function beforeDraw(t) {}
    }, {
      key: "draw",
      value: function draw(t) {}
    }, {
      key: "afterDraw",
      value: function afterDraw(t) {}
    }]);

    return C2dShader;
  }(Shader);

  var DefaultShader$1 =
  /*#__PURE__*/
  function (_C2dShader) {
    _inherits(DefaultShader$1, _C2dShader);

    function DefaultShader$1(t) {
      var _this33;

      _classCallCheck(this, DefaultShader$1);

      _this33 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultShader$1).call(this, t)), _this33._rectangleTexture = t.stage.rectangleTexture.source.nativeTexture, _this33._tintManager = _this33.ctx.stage.renderer.tintManager;
      return _this33;
    }

    _createClass(DefaultShader$1, [{
      key: "draw",
      value: function draw(t, e) {
        var i = e.ctx;
        var s = t.length;

        for (var r = 0; r < s; r++) {
          var _s22 = t.getTexture(r),
              n = t.getElementCore(r),
              o = t.getRenderContext(r),
              a = t.getWhite(r),
              h = t.getSimpleTc(r),
              l = this.ctx.stage.getRenderPrecision();

          i.setTransform(o.ta * l, o.tc * l, o.tb * l, o.td * l, o.px * l, o.py * l);

          var _ = _s22 === this._rectangleTexture,
              u = {
            operation: t,
            target: e,
            index: r,
            rect: _
          };

          if (_) a ? i.fillStyle = "white" : this._setColorGradient(i, n), i.globalAlpha = o.alpha, this._beforeDrawEl(u), i.fillRect(0, 0, n.w, n.h), this._afterDrawEl(u), i.globalAlpha = 1;else {
            i.globalAlpha = o.alpha, this._beforeDrawEl(u);

            var _t99 = h ? 0 : n._ulx * _s22.w,
                _e100 = h ? 0 : n._uly * _s22.h,
                _r13 = (h ? 1 : n._brx - n._ulx) * _s22.w,
                _l = (h ? 1 : n._bry - n._uly) * _s22.h;

            if (!a) {
              var _o4 = n._colorUl;
              n._colorUl === n._colorUr && n._colorUr === n._colorBl && n._colorBr === n._colorBl || (_o4 = StageUtils.mergeMultiColorsEqual([n._colorUl, n._colorUr, n._colorBl, n._colorBr]));

              var _a4 = (_o4 / 16777216 | 0) / 255;

              i.globalAlpha *= _a4;

              var _h2 = 16777215 & _o4,
                  _2 = this._tintManager.getTintTexture(_s22, _h2);

              i.fillStyle = "white", i.drawImage(_2, _t99, _e100, _r13, _l, 0, 0, n.w, n.h);
            } else i.fillStyle = "white", i.drawImage(_s22, _t99, _e100, _r13, _l, 0, 0, n.w, n.h);

            this._afterDrawEl(u), i.globalAlpha = 1;
          }
        }
      }
    }, {
      key: "_setColorGradient",
      value: function _setColorGradient(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.w;
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.h;
        var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
        var n,
            o = e._colorUl;
        e._colorUl === e._colorUr ? e._colorBl === e._colorBr && (e._colorUl === e.colorBl || (n = t.createLinearGradient(0, 0, 0, s), r ? (n.addColorStop(0, StageUtils.getRgbaString(e._colorUl)), n.addColorStop(1, StageUtils.getRgbaString(e._colorBl))) : (n.addColorStop(0, StageUtils.getRgbString(e._colorUl)), n.addColorStop(1, StageUtils.getRgbString(e._colorBl))))) : e._colorUl === e._colorBl && e._colorUr === e._colorBr && (n = t.createLinearGradient(0, 0, i, 0), r ? (n.addColorStop(0, StageUtils.getRgbaString(e._colorUl)), n.addColorStop(1, StageUtils.getRgbaString(e._colorBr))) : (n.addColorStop(0, StageUtils.getRgbString(e._colorUl)), n.addColorStop(1, StageUtils.getRgbString(e._colorBr)))), t.fillStyle = n || (r ? StageUtils.getRgbaString(o) : StageUtils.getRgbString(o));
      }
    }, {
      key: "_beforeDrawEl",
      value: function _beforeDrawEl(t) {}
    }, {
      key: "_afterDrawEl",
      value: function _afterDrawEl(t) {}
    }]);

    return DefaultShader$1;
  }(C2dShader);

  var C2dTextureTintManager =
  /*#__PURE__*/
  function () {
    function C2dTextureTintManager(t) {
      _classCallCheck(this, C2dTextureTintManager);

      this.stage = t, this._usedMemory = 0, this._cachedNativeTextures = new Set();
    }

    _createClass(C2dTextureTintManager, [{
      key: "destroy",
      value: function destroy() {
        this.gc(!0);
      }
    }, {
      key: "_addMemoryUsage",
      value: function _addMemoryUsage(t) {
        this._usedMemory += t, this.stage.addMemoryUsage(t);
      }
    }, {
      key: "delete",
      value: function _delete(t) {
        if (this._hasCache(t)) {
          var _e101 = this._getCache(t),
              i = _e101.memoryUsage;

          _e101.clear(), this._cachedNativeTextures["delete"](t), this._addMemoryUsage(_e101.memoryUsage - i);
        }
      }
    }, {
      key: "getTintTexture",
      value: function getTintTexture(t, e) {
        var i = this.stage.frameCounter;

        this._cachedNativeTextures.add(t);

        var s = this._getCache(t),
            r = s.get(e);

        if (r.lf = i, r.tx) return t.update > r.u && this._tintTexture(r.tx, t, e), r.tx;
        {
          var _r14 = s.memoryUsage;
          var n = s.reuseTexture(i);
          n ? n.ctx.clearRect(0, 0, n.width, n.height) : ((n = document.createElement("canvas")).width = t.w, n.height = t.h, n.ctx = n.getContext("2d")), this._tintTexture(n, t, e), s.set(e, n, i);
          var o = s.memoryUsage;
          return o !== _r14 && this._addMemoryUsage(o - _r14), n;
        }
      }
    }, {
      key: "_tintTexture",
      value: function _tintTexture(t, e, i) {
        var s = i.toString(16);

        for (; s.length < 6;) {
          s = "0" + s;
        }

        t.ctx.fillStyle = "#" + s, t.ctx.globalCompositeOperation = "copy", t.ctx.fillRect(0, 0, e.w, e.h), t.ctx.globalCompositeOperation = "multiply", t.ctx.drawImage(e, 0, 0, e.w, e.h, 0, 0, t.width, t.height), t.ctx.globalCompositeOperation = "destination-in", t.ctx.drawImage(e, 0, 0, e.w, e.h, 0, 0, t.width, t.height);
      }
    }, {
      key: "_hasCache",
      value: function _hasCache(t) {
        return !!t._tintCache;
      }
    }, {
      key: "_getCache",
      value: function _getCache(t) {
        return t._tintCache || (t._tintCache = new C2dTintCache(t)), t._tintCache;
      }
    }, {
      key: "gc",
      value: function gc() {
        var _this34 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        var e = this.stage.frameCounter;
        var i = 0;
        this._cachedNativeTextures.forEach(function (s) {
          var r = _this34._getCache(s);

          if (t) i += r.memoryUsage, s.clear();else {
            var _t100 = r.memoryUsage;
            r.cleanup(e), r.releaseBlancoTextures(), i += r.memoryUsage - _t100;
          }
        }), t && this._cachedNativeTextures.clear(), i && this._addMemoryUsage(i);
      }
    }]);

    return C2dTextureTintManager;
  }();

  var C2dTintCache =
  /*#__PURE__*/
  function () {
    function C2dTintCache(t) {
      _classCallCheck(this, C2dTintCache);

      this._tx = t, this._colors = new Map(), this._blancoTextures = null, this._lastCleanupFrame = 0, this._memTextures = 0;
    }

    _createClass(C2dTintCache, [{
      key: "releaseBlancoTextures",
      value: function releaseBlancoTextures() {
        this._memTextures -= this._blancoTextures.length, this._blancoTextures = [];
      }
    }, {
      key: "clear",
      value: function clear() {
        this._blancoTextures = null, this._colors.clear(), this._memTextures = 0;
      }
    }, {
      key: "get",
      value: function get(t) {
        var e = this._colors.get(t);

        return e || (e = {
          lf: -1,
          tx: void 0,
          u: -1
        }, this._colors.set(t, e)), e;
      }
    }, {
      key: "set",
      value: function set(t, e, i) {
        var s = this.get(t);
        s.lf = i, s.tx = e, s.u = i, this._memTextures++;
      }
    }, {
      key: "cleanup",
      value: function cleanup(t) {
        var _this35 = this;

        this._lastCleanupFrame !== t && (this._blancoTextures = [], this._colors.forEach(function (e, i) {
          e.lf < t - 1 && (e.tx && _this35._blancoTextures.push(e.tx), _this35._colors["delete"](i));
        }), this._lastCleanupFrame = t);
      }
    }, {
      key: "reuseTexture",
      value: function reuseTexture(t) {
        if (this.cleanup(t), this._blancoTextures && this._blancoTextures.length) return this._memTextures--, this._blancoTextures.pop();
      }
    }, {
      key: "memoryUsage",
      get: function get() {
        return this._memTextures * this._tx.w * this._tx.h;
      }
    }]);

    return C2dTintCache;
  }();

  var C2dRenderer =
  /*#__PURE__*/
  function (_Renderer2) {
    _inherits(C2dRenderer, _Renderer2);

    function C2dRenderer(t) {
      var _this36;

      _classCallCheck(this, C2dRenderer);

      _this36 = _possibleConstructorReturn(this, _getPrototypeOf(C2dRenderer).call(this, t)), _this36.tintManager = new C2dTextureTintManager(t), _this36.setupC2d(_this36.stage.c2d.canvas);
      return _this36;
    }

    _createClass(C2dRenderer, [{
      key: "destroy",
      value: function destroy() {
        this.tintManager.destroy();
      }
    }, {
      key: "_createDefaultShader",
      value: function _createDefaultShader(t) {
        return new DefaultShader$1(t);
      }
    }, {
      key: "_getShaderBaseType",
      value: function _getShaderBaseType() {
        return C2dShader;
      }
    }, {
      key: "_getShaderAlternative",
      value: function _getShaderAlternative(t) {
        return t.getC2d && t.getC2d();
      }
    }, {
      key: "createCoreQuadList",
      value: function createCoreQuadList(t) {
        return new C2dCoreQuadList(t);
      }
    }, {
      key: "createCoreQuadOperation",
      value: function createCoreQuadOperation(t, e, i, s, r, n) {
        return new C2dCoreQuadOperation(t, e, i, s, r, n);
      }
    }, {
      key: "createCoreRenderExecutor",
      value: function createCoreRenderExecutor(t) {
        return new C2dCoreRenderExecutor(t);
      }
    }, {
      key: "createCoreRenderState",
      value: function createCoreRenderState(t) {
        return new CoreRenderState(t);
      }
    }, {
      key: "createRenderTexture",
      value: function createRenderTexture(t, e, i, s) {
        var r = document.createElement("canvas");
        return r.width = i, r.height = s, this.setupC2d(r), r;
      }
    }, {
      key: "freeRenderTexture",
      value: function freeRenderTexture(t) {
        this.tintManager["delete"](t);
      }
    }, {
      key: "gc",
      value: function gc(t) {
        this.tintManager.gc(t);
      }
    }, {
      key: "uploadTextureSource",
      value: function uploadTextureSource(t, e) {
        if (e.source.buffer) {
          var _t101 = document.createElement("canvas");

          _t101.width = e.w, _t101.height = e.h;
          var i = new ImageData(new Uint8ClampedArray(e.source.buffer), e.w, e.h);
          return _t101.getContext("2d").putImageData(i, 0, 0), _t101;
        }

        return e.source;
      }
    }, {
      key: "freeTextureSource",
      value: function freeTextureSource(t) {
        this.tintManager["delete"](t.nativeTexture);
      }
    }, {
      key: "addQuad",
      value: function addQuad(t, e, i) {
        var s = e.quadElements[i];
        e.setRenderContext(i, s._renderContext), e.setWhite(i, s.isWhite()), e.setSimpleTc(i, s.hasSimpleTexCoords());
      }
    }, {
      key: "isRenderTextureReusable",
      value: function isRenderTextureReusable(t, e) {
        return !1;
      }
    }, {
      key: "finishRenderState",
      value: function finishRenderState(t) {}
    }, {
      key: "setupC2d",
      value: function setupC2d(t) {
        var e = t.getContext("2d");
        t.ctx = e, e._scissor = null, t.ctx.save();
      }
    }]);

    return C2dRenderer;
  }(Renderer);

  var ImageWorker =
  /*#__PURE__*/
  function () {
    function ImageWorker() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ImageWorker);

      this._items = new Map(), this._id = 0, this._initWorker();
    }

    _createClass(ImageWorker, [{
      key: "destroy",
      value: function destroy() {
        this._worker && this._worker.terminate();
      }
    }, {
      key: "_initWorker",
      value: function _initWorker() {
        var _this37 = this;

        var t = "(".concat(createWorker.toString(), ")()"),
            e = new Blob([t.replace('"use strict";', "")]),
            i = (window.URL ? URL : webkitURL).createObjectURL(e, {
          type: "application/javascript; charset=utf-8"
        });
        this._worker = new Worker(i), this._worker.postMessage({
          type: "config",
          config: {
            path: window.location.href
          }
        }), this._worker.onmessage = function (t) {
          if (t.data && t.data.id) {
            var _e102 = t.data.id,
                _i24 = _this37._items.get(_e102);

            _i24 && ("data" == t.data.type ? _this37.finish(_i24, t.data.info) : _this37.error(_i24, t.data.info));
          }
        };
      }
    }, {
      key: "create",
      value: function create(t) {
        var e = ++this._id,
            i = new ImageWorkerImage(this, e, t);
        return this._items.set(e, i), this._worker.postMessage({
          type: "add",
          id: e,
          src: t
        }), i;
      }
    }, {
      key: "cancel",
      value: function cancel(t) {
        this._worker.postMessage({
          type: "cancel",
          id: t.id
        }), this._items["delete"](t.id);
      }
    }, {
      key: "error",
      value: function error(t, e) {
        t.error(e), this._items["delete"](t.id);
      }
    }, {
      key: "finish",
      value: function finish(t, e) {
        t.load(e), this._items["delete"](t.id);
      }
    }]);

    return ImageWorker;
  }();

  var ImageWorkerImage =
  /*#__PURE__*/
  function () {
    function ImageWorkerImage(t, e, i) {
      _classCallCheck(this, ImageWorkerImage);

      this._manager = t, this._id = e, this._src = i, this._onError = null, this._onLoad = null;
    }

    _createClass(ImageWorkerImage, [{
      key: "cancel",
      value: function cancel() {
        this._manager.cancel(this);
      }
    }, {
      key: "load",
      value: function load(t) {
        this._onLoad && this._onLoad(t);
      }
    }, {
      key: "error",
      value: function error(t) {
        this._onError && this._onError(t);
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "src",
      get: function get() {
        return this._src;
      }
    }, {
      key: "onError",
      set: function set(t) {
        this._onError = t;
      }
    }, {
      key: "onLoad",
      set: function set(t) {
        this._onLoad = t;
      }
    }]);

    return ImageWorkerImage;
  }();

  var createWorker = function createWorker() {
    function ImageWorkerServer() {
      this.items = new Map();
      var t = this;

      onmessage = function onmessage(e) {
        t._receiveMessage(e);
      };
    }

    function ImageWorkerServerItem(t, e) {
      this._onError = void 0, this._onFinish = void 0, this._id = t, this._src = e, this._xhr = void 0, this._mimeType = void 0, this._canceled = !1;
    }

    ImageWorkerServer.isPathAbsolute = function (t) {
      return /^(?:\/|[a-z]+:\/\/)/.test(t);
    }, ImageWorkerServer.prototype._receiveMessage = function (t) {
      if ("config" === t.data.type) {
        this.config = t.data.config;
        var e = this.config.path.split("/");
        e.pop(), this._relativeBase = e.join("/") + "/";
      } else "add" === t.data.type ? this.add(t.data.id, t.data.src) : "cancel" === t.data.type && this.cancel(t.data.id);
    }, ImageWorkerServer.prototype.add = function (t, e) {
      ImageWorkerServer.isPathAbsolute(e) || (e = this._relativeBase + e), "//" === e.substr(0, 2) && (e = "http:" + e);
      var i = new ImageWorkerServerItem(t, e);
      var s = this;
      i.onFinish = function (t) {
        s.finish(i, t);
      }, i.onError = function (t) {
        s.error(i, t);
      }, this.items.set(t, i), i.start();
    }, ImageWorkerServer.prototype.cancel = function (t) {
      var e = this.items.get(t);
      e && (e.cancel(), this.items["delete"](t));
    }, ImageWorkerServer.prototype.finish = function (t, _ref2) {
      var e = _ref2.imageBitmap,
          i = _ref2.hasAlphaChannel;
      postMessage({
        type: "data",
        id: t.id,
        info: {
          imageBitmap: e,
          hasAlphaChannel: i
        }
      }, [e]), this.items["delete"](t.id);
    }, ImageWorkerServer.prototype.error = function (t, _ref3) {
      var e = _ref3.type,
          i = _ref3.message;
      postMessage({
        type: "error",
        id: t.id,
        info: {
          type: e,
          message: i
        }
      }), this.items["delete"](t.id);
    }, ImageWorkerServer.isWPEBrowser = function () {
      return -1 !== navigator.userAgent.indexOf("WPE");
    }, Object.defineProperty(ImageWorkerServerItem.prototype, "id", {
      get: function get() {
        return this._id;
      }
    }), Object.defineProperty(ImageWorkerServerItem.prototype, "onFinish", {
      get: function get() {
        return this._onFinish;
      },
      set: function set(t) {
        this._onFinish = t;
      }
    }), Object.defineProperty(ImageWorkerServerItem.prototype, "onError", {
      get: function get() {
        return this._onError;
      },
      set: function set(t) {
        this._onError = t;
      }
    }), ImageWorkerServerItem.prototype.start = function () {
      this._xhr = new XMLHttpRequest(), this._xhr.open("GET", this._src, !0), this._xhr.responseType = "blob";
      var t = this;
      this._xhr.onerror = function (e) {
        t.error({
          type: "connection",
          message: "Connection error"
        });
      }, this._xhr.onload = function (e) {
        var i = t._xhr.response;
        t._mimeType = i.type, t._createImageBitmap(i);
      }, this._xhr.send();
    }, ImageWorkerServerItem.prototype._createImageBitmap = function (t) {
      var e = this;
      createImageBitmap(t, {
        premultiplyAlpha: "premultiply",
        colorSpaceConversion: "none",
        imageOrientation: "none"
      }).then(function (t) {
        e.finish({
          imageBitmap: t,
          hasAlphaChannel: e._hasAlphaChannel()
        });
      })["catch"](function (t) {
        e.error({
          type: "parse",
          message: "Error parsing image data"
        });
      });
    }, ImageWorkerServerItem.prototype._hasAlphaChannel = function () {
      return !!ImageWorkerServer.isWPEBrowser() || -1 !== this._mimeType.indexOf("image/png");
    }, ImageWorkerServerItem.prototype.cancel = function () {
      this._canceled || (this._xhr && this._xhr.abort(), this._canceled = !0);
    }, ImageWorkerServerItem.prototype.error = function (t, e) {
      !this._canceled && this._onError && this._onError({
        type: t,
        message: e
      });
    }, ImageWorkerServerItem.prototype.finish = function (t) {
      !this._canceled && this._onFinish && this._onFinish(t);
    };
    new ImageWorkerServer();
  };

  var WebPlatform =
  /*#__PURE__*/
  function () {
    function WebPlatform() {
      _classCallCheck(this, WebPlatform);
    }

    _createClass(WebPlatform, [{
      key: "init",
      value: function init(t) {
        this.stage = t, this._looping = !1, this._awaitingLoop = !1, this.stage.getOption("useImageWorker") && (window.createImageBitmap && window.Worker ? (console.log("Using image worker!"), this._imageWorker = new ImageWorker()) : console.warn("Can't use image worker because browser does not have createImageBitmap and Web Worker support"));
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._imageWorker && this._imageWorker.destroy(), this._removeKeyHandler();
      }
    }, {
      key: "startLoop",
      value: function startLoop() {
        this._looping = !0, this._awaitingLoop || this.loop();
      }
    }, {
      key: "stopLoop",
      value: function stopLoop() {
        this._looping = !1;
      }
    }, {
      key: "loop",
      value: function loop() {
        var t = this,
            lp = function lp() {
          t._awaitingLoop = !1, t._looping && (t.stage.drawFrame(), requestAnimationFrame(lp), t._awaitingLoop = !0);
        };

        requestAnimationFrame(lp);
      }
    }, {
      key: "uploadGlTexture",
      value: function uploadGlTexture(t, e, i, s) {
        i instanceof ImageData || i instanceof HTMLImageElement || i instanceof HTMLCanvasElement || i instanceof HTMLVideoElement || window.ImageBitmap && i instanceof ImageBitmap ? t.texImage2D(t.TEXTURE_2D, 0, s.internalFormat, s.format, s.type, i) : t.texImage2D(t.TEXTURE_2D, 0, s.internalFormat, e.w, e.h, 0, s.format, s.type, i);
      }
    }, {
      key: "loadSrcTexture",
      value: function loadSrcTexture(_ref4, i) {
        var t = _ref4.src,
            e = _ref4.hasAlpha;
        var s = void 0,
            r = t.indexOf(".png") >= 0;

        if (this._imageWorker) {
          var _e103 = this._imageWorker.create(t);

          _e103.onError = function (t) {
            return i("Image load error");
          }, _e103.onLoad = function (_ref5) {
            var e = _ref5.imageBitmap,
                s = _ref5.hasAlphaChannel;
            i(null, {
              source: e,
              renderInfo: {
                src: t
              },
              hasAlpha: s,
              premultiplyAlpha: !0
            });
          }, s = function s() {
            _e103.cancel();
          };
        } else {
          var n = new Image();
          "data:" != t.substr(0, 5) && (n.crossOrigin = "Anonymous"), n.onerror = function (t) {
            if (n.src) return i("Image load error");
          }, n.onload = function () {
            i(null, {
              source: n,
              renderInfo: {
                src: t
              },
              hasAlpha: r || e
            });
          }, n.src = t, s = function s() {
            n.onerror = null, n.onload = null, n.removeAttribute("src");
          };
        }

        return s;
      }
    }, {
      key: "createWebGLContext",
      value: function createWebGLContext(t, e) {
        var i = this.stage.getOption("canvas") || document.createElement("canvas");
        t && e && (i.width = t, i.height = e);
        var s = {
          alpha: !0,
          antialias: !1,
          premultipliedAlpha: !0,
          stencil: !0,
          preserveDrawingBuffer: !1
        },
            r = i.getContext("webgl", s) || i.getContext("experimental-webgl", s);
        if (!r) throw new Error("This browser does not support webGL.");
        return r;
      }
    }, {
      key: "createCanvasContext",
      value: function createCanvasContext(t, e) {
        var i = this.stage.getOption("canvas") || document.createElement("canvas");
        t && e && (i.width = t, i.height = e);
        var s = i.getContext("2d");
        if (!s) throw new Error("This browser does not support 2d canvas.");
        return s;
      }
    }, {
      key: "getHrTime",
      value: function getHrTime() {
        return window.performance ? window.performance.now() : new Date().getTime();
      }
    }, {
      key: "getDrawingCanvas",
      value: function getDrawingCanvas() {
        return document.createElement("canvas");
      }
    }, {
      key: "getTextureOptionsForDrawingCanvas",
      value: function getTextureOptionsForDrawingCanvas(t) {
        var e = {};
        return e.source = t, e;
      }
    }, {
      key: "nextFrame",
      value: function nextFrame(t) {}
    }, {
      key: "registerKeydownHandler",
      value: function registerKeydownHandler(t) {
        this._keydownListener = function (e) {
          t(e);
        }, window.addEventListener("keydown", this._keydownListener);
      }
    }, {
      key: "registerKeyupHandler",
      value: function registerKeyupHandler(t) {
        this._keyupListener = function (e) {
          t(e);
        }, window.addEventListener("keyup", this._keyupListener);
      }
    }, {
      key: "_removeKeyHandler",
      value: function _removeKeyHandler() {
        this._keydownListener && window.removeEventListener("keydown", this._keydownListener), this._keyupListener && window.removeEventListener("keyup", this._keyupListener);
      }
    }]);

    return WebPlatform;
  }();

  var PlatformLoader =
  /*#__PURE__*/
  function () {
    function PlatformLoader() {
      _classCallCheck(this, PlatformLoader);
    }

    _createClass(PlatformLoader, null, [{
      key: "load",
      value: function load(t) {
        return t.platform ? t.platform : WebPlatform;
      }
    }]);

    return PlatformLoader;
  }();

  var Utils$1 =
  /*#__PURE__*/
  function () {
    function Utils$1() {
      _classCallCheck(this, Utils$1);
    }

    _createClass(Utils$1, null, [{
      key: "isFunction",
      value: function isFunction(t) {
        return "function" == typeof t;
      }
    }, {
      key: "isNumber",
      value: function isNumber(t) {
        return "number" == typeof t;
      }
    }, {
      key: "isInteger",
      value: function isInteger(t) {
        return "number" == typeof t && t % 1 == 0;
      }
    }, {
      key: "isBoolean",
      value: function isBoolean(t) {
        return !0 === t || !1 === t;
      }
    }, {
      key: "isString",
      value: function isString(t) {
        return "string" == typeof t;
      }
    }, {
      key: "isObject",
      value: function isObject(t) {
        var e = _typeof(t);

        return !!t && ("object" == e || "function" == e);
      }
    }, {
      key: "isPlainObject",
      value: function isPlainObject(t) {
        return !!t && "object" == _typeof(t);
      }
    }, {
      key: "isObjectLiteral",
      value: function isObjectLiteral(t) {
        return "object" == _typeof(t) && t && t.constructor === Object;
      }
    }, {
      key: "getArrayIndex",
      value: function getArrayIndex(t, e) {
        return Utils$1.getModuloIndex(t, e.length);
      }
    }, {
      key: "equalValues",
      value: function equalValues(t, e) {
        return _typeof(t) == _typeof(e) && (Utils$1.isObjectLiteral(t) ? Utils$1.isObjectLiteral(e) && Utils$1.equalObjectLiterals(t, e) : Array.isArray(t) ? Array.isArray(e) && Utils$1.equalArrays(t, e) : t === e);
      }
    }, {
      key: "equalObjectLiterals",
      value: function equalObjectLiterals(t, e) {
        var i = Object.keys(t),
            s = Object.keys(e);
        if (i.length !== s.length) return !1;

        for (var r = 0, n = i.length; r < n; r++) {
          var _n7 = i[r],
              o = s[r];
          if (_n7 !== o) return !1;
          var a = t[_n7],
              h = e[o];
          if (!Utils$1.equalValues(a, h)) return !1;
        }

        return !0;
      }
    }, {
      key: "equalArrays",
      value: function equalArrays(t, e) {
        if (t.length !== e.length) return !1;

        for (var i = 0, s = t.length; i < s; i++) {
          if (!this.equalValues(t[i], e[i])) return !1;
        }

        return !0;
      }
    }]);

    return Utils$1;
  }();

  var WebGLState =
  /*#__PURE__*/
  function () {
    function WebGLState(t, e) {
      _classCallCheck(this, WebGLState);

      this._id = t, this._gl = e, this._program = void 0, this._buffers = new Map(), this._framebuffers = new Map(), this._renderbuffers = new Map(), this._vertexAttribs = new Array(16), this._nonDefaultFlags = new Set(), this._settings = new Map(), this._textures = new Array(8), this._maxTexture = 0, this._activeTexture = e.TEXTURE0, this._pixelStorei = new Array(5);
    }

    _createClass(WebGLState, [{
      key: "_getDefaultFlag",
      value: function _getDefaultFlag(t) {
        return t === this._gl.DITHER;
      }
    }, {
      key: "setFlag",
      value: function setFlag(t, e) {
        return e === this._getDefaultFlag(t) ? this._nonDefaultFlags["delete"](t) : !this._nonDefaultFlags.has(t) && (this._nonDefaultFlags.add(t), !0);
      }
    }, {
      key: "setBuffer",
      value: function setBuffer(t, e) {
        var i = this._buffers.get(t) !== e;
        return this._buffers.set(t, e), i && t === this._gl.ARRAY_BUFFER && (this._vertexAttribs = []), i;
      }
    }, {
      key: "setFramebuffer",
      value: function setFramebuffer(t, e) {
        var i = this._framebuffers.get(t) !== e;
        return this._framebuffers.set(t, e), i;
      }
    }, {
      key: "setRenderbuffer",
      value: function setRenderbuffer(t, e) {
        var i = this._renderbuffers.get(t) !== e;
        return this._renderbuffers.set(t, e), i;
      }
    }, {
      key: "setProgram",
      value: function setProgram(t) {
        var e = this._program !== t;
        return this._program = t, e;
      }
    }, {
      key: "setSetting",
      value: function setSetting(t, e) {
        var i = this._settings.get(t),
            s = !i || !Utils$1.equalValues(i, e);

        return this._settings.set(t, e), s;
      }
    }, {
      key: "disableVertexAttribArray",
      value: function disableVertexAttribArray(t) {
        var e = this._vertexAttribs[t];
        return !(!e || !e[5]) && (e[5] = !1, !0);
      }
    }, {
      key: "enableVertexAttribArray",
      value: function enableVertexAttribArray(t) {
        var e = this._vertexAttribs[t];
        return e ? !e[0] && (e[0] = !0, !0) : (this._vertexAttribs[t] = [0, 0, 0, 0, 0, !0], !0);
      }
    }, {
      key: "vertexAttribPointer",
      value: function vertexAttribPointer(t, e) {
        var i = this._vertexAttribs[t],
            s = !1;
        return i && (s = i[0] === e[0] && i[1] === e[1] && i[2] === e[2] && i[3] === e[3] && i[4] === e[4]), !s && (e[5] = !!i && i[5], !0);
      }
    }, {
      key: "setActiveTexture",
      value: function setActiveTexture(t) {
        var e = this._activeTexture !== t;
        return this._activeTexture = t, e;
      }
    }, {
      key: "bindTexture",
      value: function bindTexture(t, e) {
        var i = WebGLState._getTextureIndex(this._activeTexture);

        this._maxTexture = Math.max(this._maxTexture, i + 1);

        var s = this._textures[i],
            r = WebGLState._getTextureTargetIndex(t);

        return s ? s[r] !== e && (s[r] = e, !0) : !!e && (this._textures[i] = [], this._textures[i][r] = e, !0);
      }
    }, {
      key: "setPixelStorei",
      value: function setPixelStorei(t, e) {
        var i = WebGLState._getPixelStoreiIndex(t),
            s = !Utils$1.equalValues(this._pixelStorei[i], e);

        return this._pixelStorei[i] = e, s;
      }
    }, {
      key: "migrate",
      value: function migrate(t) {
        var e = this;
        this._migrateFlags(e, t), t._program !== e._program && this._gl._useProgram(t._program), this._migrateFramebuffers(e, t), this._migrateRenderbuffers(e, t);

        var i = this._migrateBuffers(e, t);

        this._migrateAttributes(e, t, i), this._migrateFlags(e, t), this._migrateSettings(e, t), this._migratePixelStorei(e, t), this._migrateTextures(e, t);
      }
    }, {
      key: "_migratePixelStorei",
      value: function _migratePixelStorei(t, e) {
        for (var i = 0, s = t._pixelStorei.length; i < s; i++) {
          if (t._pixelStorei[i] !== e._pixelStorei[i]) {
            var _t102 = void 0 !== e._pixelStorei[i] ? e._pixelStorei[i] : WebGLState._getDefaultPixelStoreiByIndex(i);

            this._gl._pixelStorei(WebGLState._getPixelStoreiByIndex(i), _t102);
          }
        }
      }
    }, {
      key: "_migrateTextures",
      value: function _migrateTextures(t, e) {
        var i = Math.max(t._maxTexture, e._maxTexture);
        var s = t._activeTexture;

        for (var r = 0; r < i; r++) {
          var _i25 = e._textures[r],
              n = t._textures[r],
              o = WebGLState._getTextureByIndex(r);

          for (var _t103 = 0, _e104 = Math.max(n ? n.length : 0, _i25 ? _i25.length : 0); _t103 < _e104; _t103++) {
            var _e105 = WebGLState._getTextureTargetByIndex(_t103);

            s !== o && (this._gl._activeTexture(o), s = o);

            var _r15 = _i25 && _i25[_t103] || null;

            this._gl._bindTexture(_e105, _r15);
          }
        }

        e._activeTexture !== s && this._gl._activeTexture(e._activeTexture);
      }
    }, {
      key: "_migrateBuffers",
      value: function _migrateBuffers(t, e) {
        var _this38 = this;

        return e._buffers.forEach(function (e, i) {
          t._buffers.get(i) !== e && _this38._gl._bindBuffer(i, e);
        }), t._buffers.forEach(function (t, i) {
          void 0 === e._buffers.get(i) && _this38._gl._bindBuffer(i, null);
        }), e._buffers.get(this._gl.ARRAY_BUFFER) !== t._buffers.get(this._gl.ARRAY_BUFFER);
      }
    }, {
      key: "_migrateFramebuffers",
      value: function _migrateFramebuffers(t, e) {
        var _this39 = this;

        e._framebuffers.forEach(function (e, i) {
          t._framebuffers.get(i) !== e && _this39._gl._bindFramebuffer(i, e);
        }), t._framebuffers.forEach(function (t, i) {
          void 0 === e._framebuffers.get(i) && _this39._gl._bindFramebuffer(i, null);
        });
      }
    }, {
      key: "_migrateRenderbuffers",
      value: function _migrateRenderbuffers(t, e) {
        var _this40 = this;

        e._renderbuffers.forEach(function (e, i) {
          t._renderbuffers.get(i) !== e && _this40._gl._bindRenderbuffer(i, e);
        }), t._renderbuffers.forEach(function (t, i) {
          void 0 === e._renderbuffers.get(i) && _this40._gl._bindRenderbuffer(i, null);
        });
      }
    }, {
      key: "_migrateAttributes",
      value: function _migrateAttributes(t, e, i) {
        var _this41 = this;

        i ? e._vertexAttribs.forEach(function (t, e) {
          t[0] && _this41._gl._vertexAttribPointer(e, t[0], t[1], t[2], t[3], t[4]), t[5] && _this41._gl._enableVertexAttribArray(e);
        }) : (t._vertexAttribs.forEach(function (t, i) {
          e._vertexAttribs[i] || _this41._gl._disableVertexAttribArray(i);
        }), e._vertexAttribs.forEach(function (t, e) {
          _this41._gl._vertexAttribPointer(e, t[0], t[1], t[2], t[4]), t[5] ? _this41._gl._enableVertexAttribArray(e) : _this41._gl._disableVertexAttribArray(e);
        }));
      }
    }, {
      key: "_migrateSettings",
      value: function _migrateSettings(t, e) {
        var _this42 = this;

        var i = this.constructor.getDefaultSettings();
        t._settings.forEach(function (t, s) {
          var r = s.name || s.xname;

          if (!e._settings.has(s)) {
            var _t104 = i.get(r);

            Utils$1.isFunction(_t104) && (_t104 = _t104(_this42._gl)), e._settings.set(s, _t104), s.apply(_this42._gl, _t104);
          }
        }), e._settings.forEach(function (e, i) {
          var s = t._settings.get(i);

          s && Utils$1.equalValues(s, e) || i.apply(_this42._gl, e);
        });
      }
    }, {
      key: "_migrateFlags",
      value: function _migrateFlags(t, e) {
        var _this43 = this;

        t._nonDefaultFlags.forEach(function (t) {
          e._nonDefaultFlags.has(t) || (_this43._getDefaultFlag(t) ? _this43._gl._enable(t) : _this43._gl._disable(t));
        }), e._nonDefaultFlags.forEach(function (e) {
          t._nonDefaultFlags.has(e) || (_this43._getDefaultFlag(e) ? _this43._gl._disable(e) : _this43._gl._enable(e));
        });
      }
    }], [{
      key: "getDefaultSettings",
      value: function getDefaultSettings() {
        if (!this._defaultSettings) {
          this._defaultSettings = new Map();
          var _t105 = this._defaultSettings,
              _e106 = WebGLRenderingContext.prototype;
          _t105.set("viewport", function (t) {
            return [0, 0, t.canvas.width, t.canvas.height];
          }), _t105.set("scissor", function (t) {
            return [0, 0, t.canvas.width, t.canvas.height];
          }), _t105.set("blendColor", [0, 0, 0, 0]), _t105.set("blendEquation", [_e106.FUNC_ADD]), _t105.set("blendEquationSeparate", [_e106.FUNC_ADD, _e106.FUNC_ADD]), _t105.set("blendFunc", [_e106.ONE, _e106.ZERO]), _t105.set("blendFuncSeparate", [_e106.ONE, _e106.ZERO, _e106.ONE, _e106.ZERO]), _t105.set("clearColor", [0, 0, 0, 0]), _t105.set("clearDepth", [1]), _t105.set("clearStencil", [0]), _t105.set("colorMask", [!0, !0, !0, !0]), _t105.set("cullFace", [_e106.BACK]), _t105.set("depthFunc", [_e106.LESS]), _t105.set("depthMask", [!0]), _t105.set("depthRange", [0, 1]), _t105.set("frontFace", [_e106.CCW]), _t105.set("lineWidth", [1]), _t105.set("polygonOffset", [0, 0]), _t105.set("sampleCoverage", [1, !1]), _t105.set("stencilFunc", [_e106.ALWAYS, 0, 1]), _t105.set("_stencilFuncSeparateFront", [_e106.ALWAYS, 0, 1]), _t105.set("_stencilFuncSeparateBack", [_e106.ALWAYS, 0, 1]), _t105.set("_stencilFuncSeparateFrontAndBack", [_e106.ALWAYS, 0, 1]), _t105.set("stencilMask", [1]), _t105.set("_stencilMaskSeparateFront", [1]), _t105.set("_stencilMaskSeparateBack", [1]), _t105.set("_stencilMaskSeparateFrontAndBack", [1]), _t105.set("stencilOp", [_e106.KEEP, _e106.KEEP, _e106.KEEP]), _t105.set("_stencilOpSeparateFront", [_e106.KEEP, _e106.KEEP, _e106.KEEP]), _t105.set("_stencilOpSeparateBack", [_e106.KEEP, _e106.KEEP, _e106.KEEP]), _t105.set("_stencilOpSeparateFrontAndBack", [_e106.KEEP, _e106.KEEP, _e106.KEEP]), _t105.set("vertexAttrib1f", []), _t105.set("vertexAttrib1fv", []), _t105.set("vertexAttrib2f", []), _t105.set("vertexAttrib2fv", []), _t105.set("vertexAttrib3f", []), _t105.set("vertexAttrib3fv", []), _t105.set("vertexAttrib4f", []), _t105.set("vertexAttrib4fv", []);
        }

        return this._defaultSettings;
      }
    }, {
      key: "_getTextureTargetIndex",
      value: function _getTextureTargetIndex(t) {
        switch (t) {
          case 3553:
            return 0;

          case 34067:
            return 1;

          default:
            throw new Error("Unknown texture target: " + t);
        }
      }
    }, {
      key: "_getTextureTargetByIndex",
      value: function _getTextureTargetByIndex(t) {
        return this._textureTargetIndices || (this._textureTargetIndices = [3553, 34067]), this._textureTargetIndices[t];
      }
    }, {
      key: "_getTextureIndex",
      value: function _getTextureIndex(t) {
        return t - 33984;
      }
    }, {
      key: "_getTextureByIndex",
      value: function _getTextureByIndex(t) {
        return t + 33984;
      }
    }, {
      key: "_getPixelStoreiIndex",
      value: function _getPixelStoreiIndex(t) {
        switch (t) {
          case 3333:
            return 0;

          case 3317:
            return 1;

          case 37440:
            return 2;

          case 37441:
            return 3;

          case 37443:
            return 4;

          case 37445:
            return 5;

          default:
            throw new Error("Unknown pixelstorei: " + t);
        }
      }
    }, {
      key: "_getPixelStoreiByIndex",
      value: function _getPixelStoreiByIndex(t) {
        return this._pixelStoreiIndices || (this._pixelStoreiIndices = [3333, 3317, 37440, 37441, 37443]), this._pixelStoreiIndices[t];
      }
    }, {
      key: "_getDefaultPixelStoreiByIndex",
      value: function _getDefaultPixelStoreiByIndex(t) {
        return this._pixelStoreiDefaults || (this._pixelStoreiDefaults = [4, 4, !1, !1, WebGLRenderingContext.prototype.BROWSER_DEFAULT_WEBGL]), this._pixelStoreiDefaults[t];
      }
    }]);

    return WebGLState;
  }();

  var WebGLStateManager =
  /*#__PURE__*/
  function () {
    function WebGLStateManager() {
      _classCallCheck(this, WebGLStateManager);
    }

    _createClass(WebGLStateManager, [{
      key: "_initStateManager",
      value: function _initStateManager() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";
        this._states = {}, this._state = this._getState(t);
      }
    }, {
      key: "_getState",
      value: function _getState(t) {
        return this._states[t] || (this._states[t] = new WebGLState(t, this)), this._states[t];
      }
    }, {
      key: "switchState",
      value: function switchState() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";

        if (this._state._id !== t) {
          var _e107 = this._getState(t);

          this._state.migrate(_e107), this._state = _e107;
        }
      }
    }, {
      key: "$useProgram",
      value: function $useProgram(t) {
        this._state.setProgram(t) && this._useProgram(t);
      }
    }, {
      key: "$bindBuffer",
      value: function $bindBuffer(t, e) {
        this._state.setBuffer(t, e) && this._bindBuffer(t, e);
      }
    }, {
      key: "$bindFramebuffer",
      value: function $bindFramebuffer(t, e) {
        this._state.setFramebuffer(t, e) && this._bindFramebuffer(t, e);
      }
    }, {
      key: "$bindRenderbuffer",
      value: function $bindRenderbuffer(t, e) {
        this._state.setRenderbuffer(t, e) && this._bindRenderbuffer(t, e);
      }
    }, {
      key: "$enable",
      value: function $enable(t) {
        this._state.setFlag(t, !0) && this._enable(t);
      }
    }, {
      key: "$disable",
      value: function $disable(t) {
        this._state.setFlag(t, !1) && this._disable(t);
      }
    }, {
      key: "$viewport",
      value: function $viewport(t, e, i, s) {
        this._state.setSetting(this._viewport, [t, e, i, s]) && this._viewport(t, e, i, s);
      }
    }, {
      key: "$scissor",
      value: function $scissor(t, e, i, s) {
        this._state.setSetting(this._scissor, [t, e, i, s]) && this._scissor(t, e, i, s);
      }
    }, {
      key: "$disableVertexAttribArray",
      value: function $disableVertexAttribArray(t) {
        this._state.disableVertexAttribArray(t) && this._disableVertexAttribArray(t);
      }
    }, {
      key: "$enableVertexAttribArray",
      value: function $enableVertexAttribArray(t) {
        this._state.enableVertexAttribArray(t) && this._enableVertexAttribArray(t);
      }
    }, {
      key: "$vertexAttribPointer",
      value: function $vertexAttribPointer(t, e, i, s, r, n) {
        this._state.vertexAttribPointer(t, [e, i, s, r, n]) && this._vertexAttribPointer(t, e, i, s, r, n);
      }
    }, {
      key: "$activeTexture",
      value: function $activeTexture(t) {
        this._state.setActiveTexture(t) && this._activeTexture(t);
      }
    }, {
      key: "$bindTexture",
      value: function $bindTexture(t, e) {
        this._state.bindTexture(t, e) && this._bindTexture(t, e);
      }
    }, {
      key: "$pixelStorei",
      value: function $pixelStorei(t, e) {
        this._state.setPixelStorei(t, e) && this._pixelStorei(t, e);
      }
    }, {
      key: "$stencilFuncSeparate",
      value: function $stencilFuncSeparate(t, e, i, s) {
        var r;

        switch (t) {
          case this.FRONT:
            r = this._stencilFuncSeparateFront;
            break;

          case this.BACK:
            r = this._stencilFuncSeparateBack;
            break;

          case this.FRONT_AND_BACK:
            r = this._stencilFuncSeparateFrontAndBack;
        }

        this._state.setSetting(r, [e, i, s]) && r.apply(this, [e, i, s]);
      }
    }, {
      key: "_stencilFuncSeparateFront",
      value: function _stencilFuncSeparateFront(t, e, i) {
        this._stencilFuncSeparate(this.FRONT, t, e, i);
      }
    }, {
      key: "_stencilFuncSeparateBack",
      value: function _stencilFuncSeparateBack(t, e, i) {
        this._stencilFuncSeparate(this.BACK, t, e, i);
      }
    }, {
      key: "_stencilFuncSeparateFrontAndBack",
      value: function _stencilFuncSeparateFrontAndBack(t, e, i) {
        this._stencilFuncSeparate(this.FRONT_AND_BACK, t, e, i);
      }
    }, {
      key: "$stencilMaskSeparate",
      value: function $stencilMaskSeparate(t, e) {
        var i;

        switch (t) {
          case this.FRONT:
            i = this._stencilMaskSeparateFront;
            break;

          case this.BACK:
            i = this._stencilMaskSeparateBack;
            break;

          case this.FRONT_AND_BACK:
            i = this._stencilMaskSeparateFrontAndBack;
        }

        this._state.setSetting(i, [e]) && i.apply(this, [e]);
      }
    }, {
      key: "_stencilMaskSeparateFront",
      value: function _stencilMaskSeparateFront(t) {
        this._stencilMaskSeparate(this.FRONT, t);
      }
    }, {
      key: "_stencilMaskSeparateBack",
      value: function _stencilMaskSeparateBack(t) {
        this._stencilMaskSeparate(this.BACK, t);
      }
    }, {
      key: "_stencilMaskSeparateFrontAndBack",
      value: function _stencilMaskSeparateFrontAndBack(t) {
        this._stencilMaskSeparate(this.FRONT_AND_BACK, t);
      }
    }, {
      key: "$stencilOpSeparate",
      value: function $stencilOpSeparate(t, e, i, s) {
        var r;

        switch (t) {
          case this.FRONT:
            r = this._stencilOpSeparateFront;
            break;

          case this.BACK:
            r = this._stencilOpSeparateBack;
            break;

          case this.FRONT_AND_BACK:
            r = this._stencilOpSeparateFrontAndBack;
        }

        this._state.setSetting(r, [e, i, s]) && r.apply(this, [e, i, s]);
      }
    }, {
      key: "_stencilOpSeparateFront",
      value: function _stencilOpSeparateFront(t, e, i) {
        this._stencilOpSeparate(this.FRONT, t, e, i);
      }
    }, {
      key: "_stencilOpSeparateBack",
      value: function _stencilOpSeparateBack(t, e, i) {
        this._stencilOpSeparate(this.BACK, t, e, i);
      }
    }, {
      key: "_stencilOpSeparateFrontAndBack",
      value: function _stencilOpSeparateFrontAndBack(t, e, i) {
        this._stencilOpSeparate(this.FRONT_AND_BACK, t, e, i);
      }
    }, {
      key: "$blendColor",
      value: function $blendColor(t, e, i, s) {
        this._state.setSetting(this._blendColor, [t, e, i, s]) && this._blendColor(t, e, i, s);
      }
    }, {
      key: "$blendEquation",
      value: function $blendEquation(t) {
        this._state.setSetting(this._blendEquation, [t]) && this._blendEquation(t);
      }
    }, {
      key: "$blendEquationSeparate",
      value: function $blendEquationSeparate(t, e) {
        this._state.setSetting(this._blendEquationSeparate, [t, e]) && this._blendEquationSeparate(t, e);
      }
    }, {
      key: "$blendFunc",
      value: function $blendFunc(t, e) {
        this._state.setSetting(this._blendFunc, [t, e]) && this._blendFunc(t, e);
      }
    }, {
      key: "$blendFuncSeparate",
      value: function $blendFuncSeparate(t, e, i, s) {
        this._state.setSetting(this._blendFuncSeparate, [t, e, i, s]) && this._blendFuncSeparate(t, e, i, s);
      }
    }, {
      key: "$clearColor",
      value: function $clearColor(t, e, i, s) {
        this._state.setSetting(this._clearColor, [t, e, i, s]) && this._clearColor(t, e, i, s);
      }
    }, {
      key: "$clearDepth",
      value: function $clearDepth(t) {
        this._state.setSetting(this._clearDepth, [t]) && this._clearDepth(t);
      }
    }, {
      key: "$clearStencil",
      value: function $clearStencil(t) {
        this._state.setSetting(this._clearStencil, [t]) && this._clearStencil(t);
      }
    }, {
      key: "$colorMask",
      value: function $colorMask(t, e, i, s) {
        this._state.setSetting(this._colorMask, [t, e, i, s]) && this._colorMask(t, e, i, s);
      }
    }, {
      key: "$cullFace",
      value: function $cullFace(t) {
        this._state.setSetting(this._cullFace, [t]) && this._cullFace(t);
      }
    }, {
      key: "$depthFunc",
      value: function $depthFunc(t) {
        this._state.setSetting(this._depthFunc, [t]) && this._depthFunc(t);
      }
    }, {
      key: "$depthMask",
      value: function $depthMask(t) {
        this._state.setSetting(this._depthMask, [t]) && this._depthMask(t);
      }
    }, {
      key: "$depthRange",
      value: function $depthRange(t, e) {
        this._state.setSetting(this._depthRange, [t, e]) && this._depthRange(t, e);
      }
    }, {
      key: "$frontFace",
      value: function $frontFace(t) {
        this._state.setSetting(this._frontFace, [t]) && this._frontFace(t);
      }
    }, {
      key: "$lineWidth",
      value: function $lineWidth(t) {
        this._state.setSetting(this._lineWidth, [t]) && this._lineWidth(t);
      }
    }, {
      key: "$polygonOffset",
      value: function $polygonOffset(t, e) {
        this._state.setSetting(this._polygonOffset, [t, e]) && this._polygonOffset(t, e);
      }
    }, {
      key: "$sampleCoverage",
      value: function $sampleCoverage(t, e) {
        this._state.setSetting(this._sampleCoverage, [t, e]) && this._sampleCoverage(t, e);
      }
    }, {
      key: "$stencilFunc",
      value: function $stencilFunc(t, e, i) {
        this._state.setSetting(this._stencilFunc, [t, e, i]) && this._stencilFunc(t, e, i);
      }
    }, {
      key: "$stencilMask",
      value: function $stencilMask(t) {
        this._state.setSetting(this._stencilMask, [t]) && this._stencilMask(t);
      }
    }, {
      key: "$stencilOp",
      value: function $stencilOp(t, e, i) {
        this._state.setSetting(this._stencilOp, [t, e, i]) && this._stencilOp(t, e, i);
      }
    }, {
      key: "$vertexAttrib1f",
      value: function $vertexAttrib1f(t, e) {
        this._state.setSetting(this._vertexAttrib1f, [t, e]) && this._vertexAttrib1f(t, e);
      }
    }, {
      key: "$vertexAttrib1fv",
      value: function $vertexAttrib1fv(t, e) {
        this._state.setSetting(this._vertexAttrib1fv, [t, e]) && this._vertexAttrib1fv(t, e);
      }
    }, {
      key: "$vertexAttrib2f",
      value: function $vertexAttrib2f(t, e, i) {
        this._state.setSetting(this._vertexAttrib2f, [t, e, i]) && this._vertexAttrib2f(t, e, i);
      }
    }, {
      key: "$vertexAttrib2fv",
      value: function $vertexAttrib2fv(t, e) {
        this._state.setSetting(this._vertexAttrib2fv, [t, e]) && this._vertexAttrib2fv(t, e);
      }
    }, {
      key: "$vertexAttrib3f",
      value: function $vertexAttrib3f(t, e, i, s) {
        this._state.setSetting(this._vertexAttrib3f, [t, e, i, s]) && this._vertexAttrib3f(t, e, i, s);
      }
    }, {
      key: "$vertexAttrib3fv",
      value: function $vertexAttrib3fv(t, e) {
        this._state.setSetting(this._vertexAttrib3fv, [t, e]) && this._vertexAttrib3fv(t, e);
      }
    }, {
      key: "$vertexAttrib4f",
      value: function $vertexAttrib4f(t, e, i, s, r) {
        this._state.setSetting(this._vertexAttrib4f, [t, e, i, s, r]) && this._vertexAttrib4f(t, e, i, s, r);
      }
    }, {
      key: "$vertexAttrib4fv",
      value: function $vertexAttrib4fv(t, e) {
        this._state.setSetting(this._vertexAttrib4fv, [t, e]) && this._vertexAttrib4fv(t, e);
      }
    }], [{
      key: "enable",
      value: function enable(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
        var i = Object.getOwnPropertyNames(WebGLStateManager.prototype);
        t.__proto__;
        return i.forEach(function (e) {
          if ("constructor" !== e) {
            var _i26 = WebGLStateManager.prototype[e];
            "$" === e.charAt(0) && (e = e.substr(1)), t[e] && (t[e].name || (t[e].xname = e), t["_" + e] = t[e]), t[e] = _i26;
          }
        }), WebGLStateManager.prototype._initStateManager.call(t, e), t;
      }
    }]);

    return WebGLStateManager;
  }();

  var TextureManager =
  /*#__PURE__*/
  function () {
    function TextureManager(t) {
      _classCallCheck(this, TextureManager);

      this.stage = t, this._usedMemory = 0, this._uploadedTextureSources = [], this.textureSourceHashmap = new Map();
    }

    _createClass(TextureManager, [{
      key: "destroy",
      value: function destroy() {
        for (var _t106 = 0, _e108 = this._uploadedTextureSources.length; _t106 < _e108; _t106++) {
          this._nativeFreeTextureSource(this._uploadedTextureSources[_t106]);
        }

        this.textureSourceHashmap.clear(), this._usedMemory = 0;
      }
    }, {
      key: "getReusableTextureSource",
      value: function getReusableTextureSource(t) {
        return this.textureSourceHashmap.get(t);
      }
    }, {
      key: "getTextureSource",
      value: function getTextureSource(t, e) {
        var i = e ? this.textureSourceHashmap.get(e) : null;
        return i || (i = new TextureSource(this, t), e && (i.lookupId = e, this.textureSourceHashmap.set(e, i))), i;
      }
    }, {
      key: "uploadTextureSource",
      value: function uploadTextureSource(t, e) {
        if (t.isLoaded()) return;

        this._addMemoryUsage(t.w * t.h);

        var i = this._nativeUploadTextureSource(t, e);

        t._nativeTexture = i, i.w = t.w, i.h = t.h, i.update = this.stage.frameCounter, this._uploadedTextureSources.push(t), this.addToLookupMap(t);
      }
    }, {
      key: "_addMemoryUsage",
      value: function _addMemoryUsage(t) {
        this._usedMemory += t, this.stage.addMemoryUsage(t);
      }
    }, {
      key: "addToLookupMap",
      value: function addToLookupMap(t) {
        var e = t.lookupId;
        e && (this.textureSourceHashmap.has(e) || this.textureSourceHashmap.set(e, t));
      }
    }, {
      key: "gc",
      value: function gc() {
        this.freeUnusedTextureSources(), this._cleanupLookupMap();
      }
    }, {
      key: "freeUnusedTextureSources",
      value: function freeUnusedTextureSources() {
        var t = [];

        for (var _e109 = 0, i = this._uploadedTextureSources.length; _e109 < i; _e109++) {
          var _i27 = this._uploadedTextureSources[_e109];
          _i27.allowCleanup() ? this._freeManagedTextureSource(_i27) : t.push(_i27);
        }

        this._uploadedTextureSources = t, this._cleanupLookupMap();
      }
    }, {
      key: "_freeManagedTextureSource",
      value: function _freeManagedTextureSource(t) {
        t.isLoaded() && (this._nativeFreeTextureSource(t), this._addMemoryUsage(-t.w * t.h)), t.loadingSince = null;
      }
    }, {
      key: "_cleanupLookupMap",
      value: function _cleanupLookupMap() {
        var _this44 = this;

        this.textureSourceHashmap.forEach(function (t, e) {
          t.isLoaded() || t.isLoading() || t.isUsed() || _this44.textureSourceHashmap["delete"](e);
        });
      }
    }, {
      key: "freeTextureSource",
      value: function freeTextureSource(t) {
        var e = this._uploadedTextureSources.indexOf(t),
            i = -1 !== e;

        t.isLoaded() && (i && (this._addMemoryUsage(-t.w * t.h), this._uploadedTextureSources.splice(e, 1)), this._nativeFreeTextureSource(t)), t.loadingSince = null;
      }
    }, {
      key: "_nativeUploadTextureSource",
      value: function _nativeUploadTextureSource(t, e) {
        return this.stage.renderer.uploadTextureSource(t, e);
      }
    }, {
      key: "_nativeFreeTextureSource",
      value: function _nativeFreeTextureSource(t) {
        this.stage.renderer.freeTextureSource(t), t.clearNativeTexture();
      }
    }, {
      key: "usedMemory",
      get: function get() {
        return this._usedMemory;
      }
    }]);

    return TextureManager;
  }();

  var TextureThrottler =
  /*#__PURE__*/
  function () {
    function TextureThrottler(t) {
      var _this45 = this;

      _classCallCheck(this, TextureThrottler);

      this.stage = t, this.genericCancelCb = function (t) {
        _this45._remove(t);
      }, this._sources = [], this._data = [];
    }

    _createClass(TextureThrottler, [{
      key: "destroy",
      value: function destroy() {
        this._sources = [], this._data = [];
      }
    }, {
      key: "processSome",
      value: function processSome() {
        if (this._sources.length) {
          var _t107 = Date.now();

          do {
            this._processItem();
          } while (this._sources.length && Date.now() - _t107 < TextureThrottler.MAX_UPLOAD_TIME_PER_FRAME);
        }
      }
    }, {
      key: "_processItem",
      value: function _processItem() {
        var t = this._sources.pop(),
            e = this._data.pop();

        t.isLoading() && t.processLoadedSource(e);
      }
    }, {
      key: "add",
      value: function add(t, e) {
        this._sources.push(t), this._data.push(e);
      }
    }, {
      key: "_remove",
      value: function _remove(t) {
        var e = this._sources.indexOf(t);

        e >= 0 && (this._sources.splice(e, 1), this._data.splice(e, 1));
      }
    }]);

    return TextureThrottler;
  }();

  TextureThrottler.MAX_UPLOAD_TIME_PER_FRAME = 10;

  var CoreContext =
  /*#__PURE__*/
  function () {
    function CoreContext(t) {
      _classCallCheck(this, CoreContext);

      this.stage = t, this.root = null, this.updateTreeOrder = 0, this.renderState = this.stage.renderer.createCoreRenderState(this), this.renderExec = this.stage.renderer.createCoreRenderExecutor(this), this.renderExec.init(), this._usedMemory = 0, this._renderTexturePool = [], this._renderTextureId = 1, this._zSorts = [];
    }

    _createClass(CoreContext, [{
      key: "destroy",
      value: function destroy() {
        var _this46 = this;

        this._renderTexturePool.forEach(function (t) {
          return _this46._freeRenderTexture(t);
        }), this._usedMemory = 0;
      }
    }, {
      key: "hasRenderUpdates",
      value: function hasRenderUpdates() {
        return !!this.root._parent._hasRenderUpdates;
      }
    }, {
      key: "render",
      value: function render() {
        this.root._parent._hasRenderUpdates = 0, this._render();
      }
    }, {
      key: "update",
      value: function update() {
        this._update(), this.root._hasUpdates && this._update(), this._performForcedZSorts();
      }
    }, {
      key: "_performForcedZSorts",
      value: function _performForcedZSorts() {
        if (this._zSorts.length) {
          for (var _t108 = 0, _e110 = this._zSorts.length; _t108 < _e110; _t108++) {
            this._zSorts[_t108].zSort && this._zSorts[_t108].sortZIndexedChildren();
          }

          this._zSorts = [];
        }
      }
    }, {
      key: "_update",
      value: function _update() {
        this.updateTreeOrder = 0, this.root.update();
      }
    }, {
      key: "_render",
      value: function _render() {
        if (this._fillRenderState(), this.stage.getOption("readPixelsBeforeDraw")) {
          var _t109 = new Uint8Array(4),
              _e111 = this.stage.gl;

          _e111.readPixels(0, 0, 1, 1, _e111.RGBA, _e111.UNSIGNED_BYTE, _t109);
        }

        this._performRender();
      }
    }, {
      key: "_fillRenderState",
      value: function _fillRenderState() {
        this.renderState.reset(), this.root.render(), this.renderState.finish();
      }
    }, {
      key: "_performRender",
      value: function _performRender() {
        this.renderExec.execute();
      }
    }, {
      key: "_addMemoryUsage",
      value: function _addMemoryUsage(t) {
        this._usedMemory += t, this.stage.addMemoryUsage(t);
      }
    }, {
      key: "allocateRenderTexture",
      value: function allocateRenderTexture(t, e) {
        var i = this.stage.getRenderPrecision(),
            s = Math.max(1, Math.round(t * i)),
            r = Math.max(1, Math.round(e * i));

        for (var _t110 = this._renderTexturePool.length - 1; _t110 >= 0; _t110--) {
          var _e112 = this._renderTexturePool[_t110];
          if (_e112.w === s && _e112.h === r && _e112.update !== this.stage.frameCounter) return _e112.f = this.stage.frameCounter, this._renderTexturePool.splice(_t110, 1), _e112;
        }

        var n = this._createRenderTexture(t, e, s, r);

        return n.precision = i, n;
      }
    }, {
      key: "releaseRenderTexture",
      value: function releaseRenderTexture(t) {
        this._renderTexturePool.push(t);
      }
    }, {
      key: "freeUnusedRenderTextures",
      value: function freeUnusedRenderTextures() {
        var _this47 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;
        var e = this.stage.frameCounter - t;
        this._renderTexturePool = this._renderTexturePool.filter(function (t) {
          return !(t.f <= e) || (_this47._freeRenderTexture(t), !1);
        });
      }
    }, {
      key: "_createRenderTexture",
      value: function _createRenderTexture(t, e, i, s) {
        this._addMemoryUsage(i * s);

        var r = this.stage.renderer.createRenderTexture(t, e, i, s);
        return r.id = this._renderTextureId++, r.f = this.stage.frameCounter, r.ow = t, r.oh = e, r.w = i, r.h = s, r;
      }
    }, {
      key: "_freeRenderTexture",
      value: function _freeRenderTexture(t) {
        this.stage.renderer.freeRenderTexture(t), this._addMemoryUsage(-t.w * t.h);
      }
    }, {
      key: "copyRenderTexture",
      value: function copyRenderTexture(t, e, i) {
        this.stage.renderer.copyRenderTexture(t, e, i);
      }
    }, {
      key: "forceZSort",
      value: function forceZSort(t) {
        this._zSorts.push(t);
      }
    }, {
      key: "usedMemory",
      get: function get() {
        return this._usedMemory;
      }
    }]);

    return CoreContext;
  }();

  var TransitionSettings =
  /*#__PURE__*/
  function () {
    function TransitionSettings(t) {
      _classCallCheck(this, TransitionSettings);

      this.stage = t, this._timingFunction = "ease", this._timingFunctionImpl = StageUtils.getTimingFunction(this._timingFunction), this.delay = 0, this.duration = .2, this.merger = null;
    }

    _createClass(TransitionSettings, [{
      key: "patch",
      value: function patch(t) {
        Base.patchObject(this, t);
      }
    }, {
      key: "timingFunction",
      get: function get() {
        return this._timingFunction;
      },
      set: function set(t) {
        this._timingFunction = t, this._timingFunctionImpl = StageUtils.getTimingFunction(t);
      }
    }, {
      key: "timingFunctionImpl",
      get: function get() {
        return this._timingFunctionImpl;
      }
    }]);

    return TransitionSettings;
  }();

  TransitionSettings.prototype.isTransitionSettings = !0;

  var TransitionManager =
  /*#__PURE__*/
  function () {
    function TransitionManager(t) {
      var _this48 = this;

      _classCallCheck(this, TransitionManager);

      this.stage = t, this.stage.on("frameStart", function () {
        return _this48.progress();
      }), this.active = new Set(), this.defaultTransitionSettings = new TransitionSettings(this.stage);
    }

    _createClass(TransitionManager, [{
      key: "progress",
      value: function progress() {
        if (this.active.size) {
          var _t111 = this.stage.dt,
              _e113 = !1;

          this.active.forEach(function (i) {
            i.progress(_t111), i.isRunning() || (_e113 = !0);
          }), _e113 && (this.active = new Set(_toConsumableArray(this.active).filter(function (t) {
            return t.isRunning();
          })));
        }
      }
    }, {
      key: "createSettings",
      value: function createSettings(t) {
        var e = new TransitionSettings();
        return Base.patchObject(e, t), e;
      }
    }, {
      key: "addActive",
      value: function addActive(t) {
        this.active.add(t);
      }
    }, {
      key: "removeActive",
      value: function removeActive(t) {
        this.active["delete"](t);
      }
    }]);

    return TransitionManager;
  }();

  var MultiSpline =
  /*#__PURE__*/
  function () {
    function MultiSpline() {
      _classCallCheck(this, MultiSpline);

      this._clear();
    }

    _createClass(MultiSpline, [{
      key: "_clear",
      value: function _clear() {
        this._p = [], this._pe = [], this._idp = [], this._f = [], this._v = [], this._lv = [], this._sm = [], this._s = [], this._ve = [], this._sme = [], this._se = [], this._length = 0;
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        var i, s;
        Utils.isObjectLiteral(e) || (e = {
          0: e
        });
        var r = .5,
            n = [];

        for (var _t112 in e) {
          if (e.hasOwnProperty(_t112)) {
            var _i28 = e[_t112];
            Utils.isObjectLiteral(_i28) || (_i28 = {
              v: _i28
            });

            var _s23 = parseFloat(_t112);

            "sm" === _t112 ? r = _i28.v : !isNaN(_s23) && _s23 >= 0 && _s23 <= 2 && (_i28.p = _s23, _i28.f = Utils.isFunction(_i28.v), _i28.lv = _i28.f ? _i28.v(0, 0) : _i28.v, n.push(_i28));
          }
        }

        for (s = (n = n.sort(function (t, e) {
          return t.p - e.p;
        })).length, i = 0; i < s; i++) {
          var _t113 = i === s - 1;

          if (n[i].hasOwnProperty("pe")) {
            var _t114 = i < s - 1 ? n[i + 1].p : 1;

            n[i].pe > _t114 && (n[i].pe = _t114);
          } else n[i].pe = _t113 ? n[i].p <= 1 ? 1 : 2 : n[i + 1].p;

          n[i].pe === n[i].p ? n[i].idp = 0 : n[i].idp = 1 / (n[i].pe - n[i].p);
        }

        for (i = 0; i < s; i++) {
          if (n[i].hasOwnProperty("sm") || (n[i].sm = r), !n[i].hasOwnProperty("s")) if (0 === i || i === s - 1 || 1 === n[i].p) n[i].s = t ? [0, 0, 0, 0] : 0;else {
            var _e114 = n[i - 1],
                _s24 = n[i + 1];
            if (_e114.p === _s24.p) n[i].s = t ? [0, 0, 0, 0] : 0;else if (t) {
              var _t115 = MultiSpline.getRgbaComponents(_s24.lv),
                  _r16 = MultiSpline.getRgbaComponents(_e114.lv),
                  o = 1 / (_s24.p - _e114.p);

              n[i].s = [o * (_t115[0] - _r16[0]), o * (_t115[1] - _r16[1]), o * (_t115[2] - _r16[2]), o * (_t115[3] - _r16[3])];
            } else n[i].s = (_s24.lv - _e114.lv) / (_s24.p - _e114.p);
          }
        }

        for (i = 0; i < s - 1; i++) {
          if (!n[i].f) {
            var _e115 = i === s - 1;

            n[i].hasOwnProperty("ve") || (n[i].ve = _e115 ? n[i].lv : n[i + 1].lv), Utils.isNumber(n[i].v) && Utils.isNumber(n[i].lv) && (n[i].hasOwnProperty("sme") || (n[i].sme = _e115 ? r : n[i + 1].sm), n[i].hasOwnProperty("se") || (n[i].se = _e115 ? t ? [0, 0, 0, 0] : 0 : n[i + 1].s), n[i].v = t ? MultiSpline.getSplineRgbaValueFunction(n[i].v, n[i].ve, n[i].p, n[i].pe, n[i].sm, n[i].sme, n[i].s, n[i].se) : MultiSpline.getSplineValueFunction(n[i].v, n[i].ve, n[i].p, n[i].pe, n[i].sm, n[i].sme, n[i].s, n[i].se), n[i].f = !0);
          }
        }

        for (this.length && this._clear(), i = 0, s = n.length; i < s; i++) {
          this._add(n[i]);
        }
      }
    }, {
      key: "_add",
      value: function _add(t) {
        this._p.push(t.p || 0), this._pe.push(t.pe || 0), this._idp.push(t.idp || 0), this._f.push(t.f || !1), this._v.push(t.hasOwnProperty("v") ? t.v : 0), this._lv.push(t.lv || 0), this._sm.push(t.sm || 0), this._s.push(t.s || 0), this._ve.push(t.ve || 0), this._sme.push(t.sme || 0), this._se.push(t.se || 0), this._length++;
      }
    }, {
      key: "_getItem",
      value: function _getItem(t) {
        var e = this._length;
        if (!e) return -1;
        if (t < this._p[0]) return 0;

        for (var i = 0; i < e; i++) {
          if (this._p[i] <= t && t < this._pe[i]) return i;
        }

        return e - 1;
      }
    }, {
      key: "getValue",
      value: function getValue(t) {
        var e = this._getItem(t);

        if (-1 !== e) {
          if (this._f[e]) {
            var i = Math.min(1, Math.max(0, (t - this._p[e]) * this._idp[e]));
            return this._v[e](i);
          }

          return this._v[e];
        }
      }
    }, {
      key: "length",
      get: function get() {
        return this._length;
      }
    }], [{
      key: "getRgbaComponents",
      value: function getRgbaComponents(t) {
        return [(t / 65536 | 0) % 256, (t / 256 | 0) % 256, t % 256, t / 16777216 | 0];
      }
    }, {
      key: "getSplineValueFunction",
      value: function getSplineValueFunction(t, e, i, s, r, n, o, a) {
        var h = s - i;
        o *= h, a *= h;
        var l = MultiSpline.getSplineHelpers(t, e, r, n, o, a);
        return l ? function (i) {
          return 0 === i ? t : 1 === i ? e : MultiSpline.calculateSpline(l, i);
        } : function (i) {
          return 0 === i ? t : 1 === i ? e : e * i + t * (1 - i);
        };
      }
    }, {
      key: "getSplineRgbaValueFunction",
      value: function getSplineRgbaValueFunction(t, e, i, s, r, n, o, a) {
        var h = s - i;
        o[0] *= h, o[1] *= h, o[2] *= h, o[3] *= h, a[0] *= h, a[1] *= h, a[2] *= h, a[3] *= h;

        var l = MultiSpline.getRgbaComponents(t),
            _ = MultiSpline.getRgbaComponents(e),
            u = [MultiSpline.getSplineHelpers(l[0], _[0], r, n, o[0], a[0]), MultiSpline.getSplineHelpers(l[1], _[1], r, n, o[1], a[1]), MultiSpline.getSplineHelpers(l[2], _[2], r, n, o[2], a[2]), MultiSpline.getSplineHelpers(l[3], _[3], r, n, o[3], a[3])];

        return u[0] ? function (i) {
          return 0 === i ? t : 1 === i ? e : MultiSpline.getArgbNumber([Math.min(255, MultiSpline.calculateSpline(u[0], i)), Math.min(255, MultiSpline.calculateSpline(u[1], i)), Math.min(255, MultiSpline.calculateSpline(u[2], i)), Math.min(255, MultiSpline.calculateSpline(u[3], i))]);
        } : function (i) {
          return 0 === i ? t : 1 === i ? e : MultiSpline.mergeColors(e, t, i);
        };
      }
    }, {
      key: "getSplineHelpers",
      value: function getSplineHelpers(t, e, i, s, r, n) {
        if (!i && !s) return null;
        var o = t + r * i,
            a = 1 - s,
            h = e - n * s;
        return [3 * i - 3 * a + 1, -6 * i + 3 * a, 3 * i, 3 * o - 3 * h + e - t, 3 * (h + t) - 6 * o, 3 * (o - t), t];
      }
    }, {
      key: "calculateSpline",
      value: function calculateSpline(t, e) {
        var i = t[0],
            s = t[1],
            r = t[2],
            n = t[3],
            o = t[4],
            a = t[5],
            h = t[6];
        if (-2 === i && -2 === n && 0 === r && 0 === a) return e;

        var l,
            _,
            u = .5;

        for (var _t116 = 0; _t116 < 20; _t116++) {
          if ((_ = e - (l = u * (u * (u * i + s) + r))) > -1e-8 && _ < 1e-8) return u * (u * (u * n + o) + a) + h;

          var _t117 = u * (u * (3 * i) + 2 * s) + r;

          if (_t117 > 1e-10 && _t117 < 1e-10) break;
          u += _ / _t117;
        }

        var c = 0,
            d = 1;

        for (var _t118 = 0; _t118 < 20; _t118++) {
          if ((_ = e - (l = (u = .5 * (c + d)) * (u * (u * i + s) + r))) > -1e-8 && _ < 1e-8) return u * (u * (u * n + o) + a) + h;
          _ < 0 ? d = u : c = u;
        }

        return u;
      }
    }, {
      key: "mergeColors",
      value: function mergeColors(t, e, i) {
        var s = (t / 65536 | 0) % 256 * i + (e / 65536 | 0) % 256 * (1 - i),
            r = (t / 256 | 0) % 256 * i + (e / 256 | 0) % 256 * (1 - i),
            n = t % 256 * i + e % 256 * (1 - i),
            o = (t / 16777216 | 0) * i + (e / 16777216 | 0) * (1 - i);
        return 16777216 * Math.round(o) + 65536 * Math.round(s) + 256 * Math.round(r) + Math.round(n);
      }
    }, {
      key: "getArgbNumber",
      value: function getArgbNumber(t) {
        t[0] = Math.max(0, Math.min(255, t[0])), t[1] = Math.max(0, Math.min(255, t[1])), t[2] = Math.max(0, Math.min(255, t[2])), t[3] = Math.max(0, Math.min(255, t[3]));
        var e = ((0 | t[3]) << 24) + ((0 | t[0]) << 16) + ((0 | t[1]) << 8) + (0 | t[2]);
        return e < 0 && (e = 4294967295 + e + 1), e;
      }
    }]);

    return MultiSpline;
  }();

  var AnimationActionSettings =
  /*#__PURE__*/
  function () {
    function AnimationActionSettings(t) {
      _classCallCheck(this, AnimationActionSettings);

      this.animationSettings = t, this._selector = "", this._items = new MultiSpline(), this._props = [], this._propSetters = [], this._resetValue = void 0, this._hasResetValue = !1, this._hasColorProperty = void 0;
    }

    _createClass(AnimationActionSettings, [{
      key: "getResetValue",
      value: function getResetValue() {
        return this._hasResetValue ? this._resetValue : this._items.getValue(0);
      }
    }, {
      key: "apply",
      value: function apply(t, e, i) {
        var s = this.getAnimatedElements(t);

        var r = this._items.getValue(e);

        if (void 0 === r || !s.length) return;

        if (1 !== i) {
          var _t119 = this.getResetValue();

          Utils.isNumber(r) && Utils.isNumber(_t119) && (r = this.hasColorProperty() ? StageUtils.mergeColors(r, _t119, i) : StageUtils.mergeNumbers(r, _t119, i));
        }

        var n = this._propSetters.length,
            o = s.length;

        for (var _t120 = 0; _t120 < o; _t120++) {
          for (var _e116 = 0; _e116 < n; _e116++) {
            this._propSetters[_e116](s[_t120], r);
          }
        }
      }
    }, {
      key: "getAnimatedElements",
      value: function getAnimatedElements(t) {
        return t.select(this._selector);
      }
    }, {
      key: "reset",
      value: function reset(t) {
        var e = this.getAnimatedElements(t);
        var i = this.getResetValue();
        if (void 0 === i || !e.length) return;
        var s = this._propSetters.length,
            r = e.length;

        for (var _t121 = 0; _t121 < r; _t121++) {
          for (var _r17 = 0; _r17 < s; _r17++) {
            this._propSetters[_r17](e[_t121], i);
          }
        }
      }
    }, {
      key: "patch",
      value: function patch(t) {
        Base.patchObject(this, t);
      }
    }, {
      key: "hasColorProperty",
      value: function hasColorProperty() {
        return void 0 === this._hasColorProperty && (this._hasColorProperty = !!this._props.length && Element.isColorProperty(this._props[0])), this._hasColorProperty;
      }
    }, {
      key: "selector",
      set: function set(t) {
        this._selector = t;
      }
    }, {
      key: "t",
      set: function set(t) {
        this.selector = t;
      }
    }, {
      key: "resetValue",
      get: function get() {
        return this._resetValue;
      },
      set: function set(t) {
        this._resetValue = t, this._hasResetValue = void 0 !== t;
      }
    }, {
      key: "rv",
      set: function set(t) {
        this.resetValue = t;
      }
    }, {
      key: "value",
      set: function set(t) {
        this._items.parse(this.hasColorProperty(), t);
      }
    }, {
      key: "v",
      set: function set(t) {
        this.value = t;
      }
    }, {
      key: "properties",
      set: function set(t) {
        var _this49 = this;

        Array.isArray(t) || (t = [t]), this._props = [], t.forEach(function (t) {
          _this49._props.push(t), _this49._propSetters.push(Element.getSetter(t));
        });
      }
    }, {
      key: "property",
      set: function set(t) {
        this._hasColorProperty = void 0, this.properties = t;
      }
    }, {
      key: "p",
      set: function set(t) {
        this.properties = t;
      }
    }]);

    return AnimationActionSettings;
  }();

  AnimationActionSettings.prototype.isAnimationActionSettings = !0;

  var AnimationSettings =
  /*#__PURE__*/
  function () {
    function AnimationSettings() {
      _classCallCheck(this, AnimationSettings);

      this._actions = [], this.delay = 0, this.duration = 1, this.repeat = 0, this.repeatOffset = 0, this.repeatDelay = 0, this.autostop = !1, this.stopMethod = AnimationSettings.STOP_METHODS.FADE, this._stopTimingFunction = "ease", this._stopTimingFunctionImpl = StageUtils.getTimingFunction(this._stopTimingFunction), this.stopDuration = 0, this.stopDelay = 0;
    }

    _createClass(AnimationSettings, [{
      key: "apply",
      value: function apply(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        this._actions.forEach(function (s) {
          s.apply(t, e, i);
        });
      }
    }, {
      key: "reset",
      value: function reset(t) {
        this._actions.forEach(function (e) {
          e.reset(t);
        });
      }
    }, {
      key: "patch",
      value: function patch(t) {
        Base.patchObject(this, t);
      }
    }, {
      key: "actions",
      get: function get() {
        return this._actions;
      },
      set: function set(t) {
        this._actions = [];

        for (var _e117 = 0, i = t.length; _e117 < i; _e117++) {
          var _i29 = t[_e117];
          if (_i29.isAnimationActionSettings) this._actions.push(_i29);else {
            var _t122 = new AnimationActionSettings(this);

            _t122.patch(_i29), this._actions.push(_t122);
          }
        }
      }
    }, {
      key: "stopTimingFunction",
      get: function get() {
        return this._stopTimingFunction;
      },
      set: function set(t) {
        this._stopTimingFunction = t, this._stopTimingFunctionImpl = StageUtils.getTimingFunction(t);
      }
    }, {
      key: "stopTimingFunctionImpl",
      get: function get() {
        return this._stopTimingFunctionImpl;
      }
    }]);

    return AnimationSettings;
  }();

  AnimationSettings.STOP_METHODS = {
    FADE: "fade",
    REVERSE: "reverse",
    FORWARD: "forward",
    IMMEDIATE: "immediate",
    ONETOTWO: "onetotwo"
  };

  var Animation =
  /*#__PURE__*/
  function (_EventEmitter2) {
    _inherits(Animation, _EventEmitter2);

    function Animation(t, e, i) {
      var _this50;

      _classCallCheck(this, Animation);

      _this50 = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this)), _this50.manager = t, _this50._settings = e, _this50._element = i, _this50._state = Animation.STATES.IDLE, _this50._p = 0, _this50._delayLeft = 0, _this50._repeatsLeft = 0, _this50._stopDelayLeft = 0, _this50._stopP = 0;
      return _this50;
    }

    _createClass(Animation, [{
      key: "start",
      value: function start() {
        this._element && this._element.attached ? (this._p = 0, this._delayLeft = this.settings.delay, this._repeatsLeft = this.settings.repeat, this._state = Animation.STATES.PLAYING, this.emit("start"), this.checkActive()) : console.warn("Element must be attached before starting animation");
      }
    }, {
      key: "play",
      value: function play() {
        this._state === Animation.STATES.PAUSED ? (this._state = Animation.STATES.PLAYING, this.checkActive(), this.emit("resume")) : this._state == Animation.STATES.STOPPING && this.settings.stopMethod == AnimationSettings.STOP_METHODS.REVERSE ? (this._state = Animation.STATES.PLAYING, this.emit("stopContinue")) : this._state != Animation.STATES.PLAYING && this._state != Animation.STATES.FINISHED && this.start();
      }
    }, {
      key: "pause",
      value: function pause() {
        this._state === Animation.STATES.PLAYING && (this._state = Animation.STATES.PAUSED, this.emit("pause"));
      }
    }, {
      key: "replay",
      value: function replay() {
        this._state == Animation.STATES.FINISHED ? this.start() : this.play();
      }
    }, {
      key: "skipDelay",
      value: function skipDelay() {
        this._delayLeft = 0, this._stopDelayLeft = 0;
      }
    }, {
      key: "finish",
      value: function finish() {
        this._state === Animation.STATES.PLAYING ? (this._delayLeft = 0, this._p = 1) : this._state === Animation.STATES.STOPPING && (this._stopDelayLeft = 0, this._p = 0);
      }
    }, {
      key: "stop",
      value: function stop() {
        this._state !== Animation.STATES.STOPPED && this._state !== Animation.STATES.IDLE && (this._stopDelayLeft = this.settings.stopDelay || 0, this.settings.stopMethod === AnimationSettings.STOP_METHODS.IMMEDIATE && !this._stopDelayLeft || this._delayLeft > 0 ? (this._state = Animation.STATES.STOPPING, this.emit("stop")) : (this.settings.stopMethod === AnimationSettings.STOP_METHODS.FADE && (this._stopP = 0), this._state = Animation.STATES.STOPPING, this.emit("stop")), this.checkActive());
      }
    }, {
      key: "stopNow",
      value: function stopNow() {
        this._state === Animation.STATES.STOPPED && this._state === Animation.STATES.IDLE || (this._state = Animation.STATES.STOPPING, this._p = 0, this.emit("stop"), this.reset(), this._state = Animation.STATES.STOPPED, this.emit("stopFinish"));
      }
    }, {
      key: "isPaused",
      value: function isPaused() {
        return this._state === Animation.STATES.PAUSED;
      }
    }, {
      key: "isPlaying",
      value: function isPlaying() {
        return this._state === Animation.STATES.PLAYING;
      }
    }, {
      key: "isStopping",
      value: function isStopping() {
        return this._state === Animation.STATES.STOPPING;
      }
    }, {
      key: "isFinished",
      value: function isFinished() {
        return this._state === Animation.STATES.FINISHED;
      }
    }, {
      key: "checkActive",
      value: function checkActive() {
        this.isActive() && this.manager.addActive(this);
      }
    }, {
      key: "isActive",
      value: function isActive() {
        return (this._state == Animation.STATES.PLAYING || this._state == Animation.STATES.STOPPING) && this._element && this._element.attached;
      }
    }, {
      key: "progress",
      value: function progress(t) {
        this._element && (this._progress(t), this.apply());
      }
    }, {
      key: "_progress",
      value: function _progress(t) {
        if (this._state != Animation.STATES.STOPPING) {
          if (this._state == Animation.STATES.PLAYING) {
            if (this._delayLeft > 0) {
              if (this._delayLeft -= t, !(this._delayLeft < 0)) return;
              t = -this._delayLeft, this._delayLeft = 0, this.emit("delayEnd");
            }

            0 === this.settings.duration ? this._p = 1 : this.settings.duration > 0 && (this._p += t / this.settings.duration), this._p >= 1 ? -1 == this.settings.repeat || this._repeatsLeft > 0 ? (this._repeatsLeft > 0 && this._repeatsLeft--, this._p = this.settings.repeatOffset, this.settings.repeatDelay && (this._delayLeft = this.settings.repeatDelay), this.emit("repeat", this._repeatsLeft)) : (this._p = 1, this._state = Animation.STATES.FINISHED, this.emit("finish"), this.settings.autostop && this.stop()) : this.emit("progress", this._p);
          }
        } else this._stopProgress(t);
      }
    }, {
      key: "_stopProgress",
      value: function _stopProgress(t) {
        var e = this._getStopDuration();

        if (this._stopDelayLeft > 0) {
          if (this._stopDelayLeft -= t, !(this._stopDelayLeft < 0)) return;
          t = -this._stopDelayLeft, this._stopDelayLeft = 0, this.emit("stopDelayEnd");
        }

        this.settings.stopMethod == AnimationSettings.STOP_METHODS.IMMEDIATE ? (this._state = Animation.STATES.STOPPED, this.emit("stopFinish")) : this.settings.stopMethod == AnimationSettings.STOP_METHODS.REVERSE ? (0 === e ? this._p = 0 : e > 0 && (this._p -= t / e), this._p <= 0 && (this._p = 0, this._state = Animation.STATES.STOPPED, this.emit("stopFinish"))) : this.settings.stopMethod == AnimationSettings.STOP_METHODS.FADE ? (this._progressStopTransition(t), this._stopP >= 1 && (this._p = 0, this._state = Animation.STATES.STOPPED, this.emit("stopFinish"))) : this.settings.stopMethod == AnimationSettings.STOP_METHODS.ONETOTWO ? this._p < 2 && (0 === e ? this._p = 2 : e > 0 && (this._p < 1 ? this._p += t / this.settings.duration : this._p += t / e), this._p >= 2 ? (this._p = 2, this._state = Animation.STATES.STOPPED, this.emit("stopFinish")) : this.emit("progress", this._p)) : this.settings.stopMethod == AnimationSettings.STOP_METHODS.FORWARD && this._p < 1 && (0 == this.settings.duration ? this._p = 1 : this._p += t / this.settings.duration, this._p >= 1 ? this.settings.stopMethod == AnimationSettings.STOP_METHODS.FORWARD ? (this._p = 1, this._state = Animation.STATES.STOPPED, this.emit("stopFinish")) : this._repeatsLeft > 0 ? (this._repeatsLeft--, this._p = 0, this.emit("repeat", this._repeatsLeft)) : (this._p = 1, this._state = Animation.STATES.STOPPED, this.emit("stopFinish")) : this.emit("progress", this._p));
      }
    }, {
      key: "_progressStopTransition",
      value: function _progressStopTransition(t) {
        if (this._stopP < 1) {
          if (this._stopDelayLeft > 0) {
            if (this._stopDelayLeft -= t, !(this._stopDelayLeft < 0)) return;
            t = -this._stopDelayLeft, this._stopDelayLeft = 0, this.emit("delayEnd");
          }

          var _e118 = this._getStopDuration();

          0 == _e118 ? this._stopP = 1 : this._stopP += t / _e118, this._stopP >= 1 && (this._stopP = 1);
        }
      }
    }, {
      key: "_getStopDuration",
      value: function _getStopDuration() {
        return this.settings.stopDuration || this.settings.duration;
      }
    }, {
      key: "apply",
      value: function apply() {
        if (this._state === Animation.STATES.STOPPED) this.reset();else {
          var _t123 = 1;
          this._state === Animation.STATES.STOPPING && this.settings.stopMethod === AnimationSettings.STOP_METHODS.FADE && (_t123 = 1 - this.settings.stopTimingFunctionImpl(this._stopP)), this._settings.apply(this._element, this._p, _t123);
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        this._settings.reset(this._element);
      }
    }, {
      key: "state",
      get: function get() {
        return this._state;
      }
    }, {
      key: "p",
      get: function get() {
        return this._p;
      }
    }, {
      key: "delayLeft",
      get: function get() {
        return this._delayLeft;
      }
    }, {
      key: "element",
      get: function get() {
        return this._element;
      }
    }, {
      key: "frame",
      get: function get() {
        return Math.round(this._p * this._settings.duration * 60);
      }
    }, {
      key: "settings",
      get: function get() {
        return this._settings;
      }
    }]);

    return Animation;
  }(EventEmitter);

  Animation.STATES = {
    IDLE: 0,
    PLAYING: 1,
    STOPPING: 2,
    STOPPED: 3,
    FINISHED: 4,
    PAUSED: 5
  };

  var AnimationManager =
  /*#__PURE__*/
  function () {
    function AnimationManager(t) {
      var _this51 = this;

      _classCallCheck(this, AnimationManager);

      this.stage = t, this.stage.on("frameStart", function () {
        return _this51.progress();
      }), this.active = new Set();
    }

    _createClass(AnimationManager, [{
      key: "progress",
      value: function progress() {
        if (this.active.size) {
          var _t124 = this.stage.dt,
              _e119 = !1;

          this.active.forEach(function (i) {
            i.isActive() ? i.progress(_t124) : _e119 = !0;
          }), _e119 && (this.active = new Set(_toConsumableArray(this.active).filter(function (t) {
            return t.isActive();
          })));
        }
      }
    }, {
      key: "createAnimation",
      value: function createAnimation(t, e) {
        return Utils.isObjectLiteral(e) && (e = this.createSettings(e)), new Animation(this, e, t);
      }
    }, {
      key: "createSettings",
      value: function createSettings(t) {
        var e = new AnimationSettings();
        return Base.patchObject(e, t), e;
      }
    }, {
      key: "addActive",
      value: function addActive(t) {
        this.active.add(t);
      }
    }]);

    return AnimationManager;
  }();

  var RectangleTexture =
  /*#__PURE__*/
  function (_Texture4) {
    _inherits(RectangleTexture, _Texture4);

    function RectangleTexture() {
      _classCallCheck(this, RectangleTexture);

      return _possibleConstructorReturn(this, _getPrototypeOf(RectangleTexture).apply(this, arguments));
    }

    _createClass(RectangleTexture, [{
      key: "_getLookupId",
      value: function _getLookupId() {
        return "__whitepix";
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        return function (t) {
          t(null, {
            source: new Uint8Array([255, 255, 255, 255]),
            w: 1,
            h: 1,
            permanent: !0
          });
        };
      }
    }, {
      key: "isAutosizeTexture",
      value: function isAutosizeTexture() {
        return !1;
      }
    }]);

    return RectangleTexture;
  }(Texture);

  var Stage =
  /*#__PURE__*/
  function (_EventEmitter3) {
    _inherits(Stage, _EventEmitter3);

    function Stage() {
      var _this52;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Stage);

      _this52 = _possibleConstructorReturn(this, _getPrototypeOf(Stage).call(this)), _this52._setOptions(t), _this52._usedMemory = 0, _this52._lastGcFrame = 0;
      var e = Stage.platform ? Stage.platform : PlatformLoader.load(t);
      _this52.platform = new e(), _this52.platform.init && _this52.platform.init(_assertThisInitialized(_this52)), _this52.gl = null, _this52.c2d = null;

      var i = _this52.getOption("context");

      i ? i.useProgram ? _this52.gl = i : _this52.c2d = i : !Utils.isWeb || Stage.isWebglSupported() && !_this52.getOption("canvas2d") ? _this52.gl = _this52.platform.createWebGLContext(_this52.getOption("w"), _this52.getOption("h")) : (console.log("Using canvas2d renderer"), _this52.c2d = _this52.platform.createCanvasContext(_this52.getOption("w"), _this52.getOption("h"))), _this52.gl && WebGLStateManager.enable(_this52.gl, "lightning"), _this52._mode = _this52.gl ? 0 : 1, _this52.getCanvas() && (_this52._options.w = _this52.getCanvas().width, _this52._options.h = _this52.getCanvas().height), 0 === _this52._mode ? _this52._renderer = new WebGLRenderer(_assertThisInitialized(_this52)) : _this52._renderer = new C2dRenderer(_assertThisInitialized(_this52)), _this52.setClearColor(_this52.getOption("clearColor")), _this52.frameCounter = 0, _this52.transitions = new TransitionManager(_assertThisInitialized(_this52)), _this52.animations = new AnimationManager(_assertThisInitialized(_this52)), _this52.textureManager = new TextureManager(_assertThisInitialized(_this52)), _this52.textureThrottler = new TextureThrottler(_assertThisInitialized(_this52)), _this52.startTime = 0, _this52.currentTime = 0, _this52.dt = 0, _this52.rectangleTexture = new RectangleTexture(_assertThisInitialized(_this52)), _this52.rectangleTexture.load(), _this52.rectangleTexture.source.permanent = !0, _this52.ctx = new CoreContext(_assertThisInitialized(_this52)), _this52._updateSourceTextures = new Set();
      return _this52;
    }

    _createClass(Stage, [{
      key: "isWebgl",
      value: function isWebgl() {
        return 0 === this.mode;
      }
    }, {
      key: "isC2d",
      value: function isC2d() {
        return 1 === this.mode;
      }
    }, {
      key: "getOption",
      value: function getOption(t) {
        return this._options[t];
      }
    }, {
      key: "_setOptions",
      value: function _setOptions(t) {
        var _this53 = this;

        this._options = {};

        var opt = function opt(e, i) {
          var s = t[e];
          _this53._options[e] = void 0 === s ? i : s;
        };

        opt("canvas", null), opt("context", null), opt("w", 1920), opt("h", 1080), opt("srcBasePath", null), opt("memoryPressure", 24e6), opt("bufferMemory", 2e6), opt("textRenderIssueMargin", 0), opt("clearColor", [0, 0, 0, 0]), opt("defaultFontFace", "sans-serif"), opt("fixedDt", 0), opt("useImageWorker", !0), opt("autostart", !0), opt("precision", 1), opt("canvas2d", !1), opt("platform", null), opt("readPixelsBeforeDraw", !1);
      }
    }, {
      key: "setApplication",
      value: function setApplication(t) {
        this.application = t;
      }
    }, {
      key: "init",
      value: function init() {
        this.application.setAsRoot(), this.getOption("autostart") && this.platform.startLoop();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.platform.stopLoop(), this.platform.destroy(), this.ctx.destroy(), this.textureManager.destroy(), this._renderer.destroy();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.platform.stopLoop();
      }
    }, {
      key: "resume",
      value: function resume() {
        this.platform.startLoop();
      }
    }, {
      key: "getCanvas",
      value: function getCanvas() {
        return this._mode ? this.c2d.canvas : this.gl.canvas;
      }
    }, {
      key: "getRenderPrecision",
      value: function getRenderPrecision() {
        return this._options.precision;
      }
    }, {
      key: "addUpdateSourceTexture",
      value: function addUpdateSourceTexture(t) {
        this._updatingFrame ? t._performUpdateSource() : this._updateSourceTextures.add(t);
      }
    }, {
      key: "removeUpdateSourceTexture",
      value: function removeUpdateSourceTexture(t) {
        this._updateSourceTextures && this._updateSourceTextures["delete"](t);
      }
    }, {
      key: "hasUpdateSourceTexture",
      value: function hasUpdateSourceTexture(t) {
        return this._updateSourceTextures && this._updateSourceTextures.has(t);
      }
    }, {
      key: "drawFrame",
      value: function drawFrame() {
        this.startTime = this.currentTime, this.currentTime = this.platform.getHrTime(), this._options.fixedDt ? this.dt = this._options.fixedDt : this.dt = this.startTime ? .001 * (this.currentTime - this.startTime) : .02, this.emit("frameStart"), this._updateSourceTextures.size && (this._updateSourceTextures.forEach(function (t) {
          t._performUpdateSource();
        }), this._updateSourceTextures = new Set()), this.emit("update");
        var t = this.ctx.hasRenderUpdates();
        this.textureThrottler.processSome(), t && (this._updatingFrame = !0, this.ctx.update(), this.ctx.render(), this._updatingFrame = !1), this.platform.nextFrame(t), this.emit("frameEnd"), this.frameCounter++;
      }
    }, {
      key: "isUpdatingFrame",
      value: function isUpdatingFrame() {
        return this._updatingFrame;
      }
    }, {
      key: "renderFrame",
      value: function renderFrame() {
        this.ctx.frame();
      }
    }, {
      key: "forceRenderUpdate",
      value: function forceRenderUpdate() {
        this.root && this.root.core._parent.setHasRenderUpdates(1);
      }
    }, {
      key: "setClearColor",
      value: function setClearColor(t) {
        this.forceRenderUpdate(), null === t ? this._clearColor = null : Array.isArray(t) ? this._clearColor = t : this._clearColor = StageUtils.getRgbaComponentsNormalized(t);
      }
    }, {
      key: "getClearColor",
      value: function getClearColor() {
        return this._clearColor;
      }
    }, {
      key: "createElement",
      value: function createElement(t) {
        return t ? this.element(t) : new Element(this);
      }
    }, {
      key: "createShader",
      value: function createShader(t) {
        return Shader.create(this, t);
      }
    }, {
      key: "element",
      value: function element(t) {
        if (t.isElement) return t;
        var e;
        return (e = t.type ? new t.type(this) : new Element(this)).patch(t), e;
      }
    }, {
      key: "c",
      value: function c(t) {
        return this.element(t);
      }
    }, {
      key: "addMemoryUsage",
      value: function addMemoryUsage(t) {
        this._usedMemory += t, this._lastGcFrame !== this.frameCounter && this._usedMemory > this.getOption("memoryPressure") && (this.gc(!1), this._usedMemory > this.getOption("memoryPressure") - 2e6 && this.gc(!0));
      }
    }, {
      key: "gc",
      value: function gc(t) {
        if (this._lastGcFrame !== this.frameCounter) {
          this._lastGcFrame = this.frameCounter;
          var _e120 = this._usedMemory;
          this.gcTextureMemory(t), this.gcRenderTextureMemory(t), this.renderer.gc(t), console.log("GC".concat(t ? "[aggressive]" : "", "! Frame ").concat(this._lastGcFrame, " Freed ").concat(((_e120 - this._usedMemory) / 1e6).toFixed(2), "MP from GPU memory. Remaining: ").concat((this._usedMemory / 1e6).toFixed(2), "MP"));
          var i = this._usedMemory - this.textureManager.usedMemory - this.ctx.usedMemory;
          console.log(" Textures: ".concat((this.textureManager.usedMemory / 1e6).toFixed(2), "MP, Render Textures: ").concat((this.ctx.usedMemory / 1e6).toFixed(2), "MP, Renderer caches: ").concat((i / 1e6).toFixed(2), "MP"));
        }
      }
    }, {
      key: "gcTextureMemory",
      value: function gcTextureMemory() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        t && this.ctx.root.visible ? (this.ctx.root.visible = !1, this.textureManager.gc(), this.ctx.root.visible = !0) : this.textureManager.gc();
      }
    }, {
      key: "gcRenderTextureMemory",
      value: function gcRenderTextureMemory() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        t && this.root.visible ? (this.root.visible = !1, this.ctx.freeUnusedRenderTextures(0), this.root.visible = !0) : this.ctx.freeUnusedRenderTextures(0);
      }
    }, {
      key: "getDrawingCanvas",
      value: function getDrawingCanvas() {
        return this.platform.getDrawingCanvas();
      }
    }, {
      key: "update",
      value: function update() {
        this.ctx.update();
      }
    }, {
      key: "renderer",
      get: function get() {
        return this._renderer;
      }
    }, {
      key: "mode",
      get: function get() {
        return this._mode;
      }
    }, {
      key: "root",
      get: function get() {
        return this.application;
      }
    }, {
      key: "w",
      get: function get() {
        return this._options.w;
      }
    }, {
      key: "h",
      get: function get() {
        return this._options.h;
      }
    }, {
      key: "coordsWidth",
      get: function get() {
        return this.w / this._options.precision;
      }
    }, {
      key: "coordsHeight",
      get: function get() {
        return this.h / this._options.precision;
      }
    }, {
      key: "usedMemory",
      get: function get() {
        return this._usedMemory;
      }
    }], [{
      key: "isWebglSupported",
      value: function isWebglSupported() {
        if (Utils.isNode) return !0;

        try {
          return !!window.WebGLRenderingContext;
        } catch (t) {
          return !1;
        }
      }
    }]);

    return Stage;
  }(EventEmitter);

  var Application =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Application, _Component);

    function Application() {
      var _this54;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var e = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, Application);

      Application._temp_options = t, Application.booting = !0, _this54 = _possibleConstructorReturn(this, _getPrototypeOf(Application).call(this, new Stage(t.stage), e)), Application.booting = !1, _this54.__updateFocusCounter = 0, _this54.__keypressTimers = new Map(), _this54.stage.init(), _this54.updateFocusSettings(), _this54.__keymap = _this54.getOption("keys"), _this54.__keymap && (_this54.stage.platform.registerKeydownHandler(function (t) {
        _this54._receiveKeydown(t);
      }), _this54.stage.platform.registerKeyupHandler(function (t) {
        _this54._receiveKeyup(t);
      }));
      return _this54;
    }

    _createClass(Application, [{
      key: "getOption",
      value: function getOption(t) {
        return this.__options[t];
      }
    }, {
      key: "_setOptions",
      value: function _setOptions(t) {
        var _this55 = this;

        this.__options = {};

        var opt = function opt(e, i) {
          var s = t[e];
          _this55.__options[e] = void 0 === s ? i : s;
        };

        opt("debug", !1), opt("keys", {
          38: "Up",
          40: "Down",
          37: "Left",
          39: "Right",
          13: "Enter",
          8: "Back",
          27: "Exit"
        });
      }
    }, {
      key: "__construct",
      value: function __construct() {
        this.stage.setApplication(this), this._setOptions(Application._temp_options), delete Application._temp_options, _get(_getPrototypeOf(Application.prototype), "__construct", this).call(this);
      }
    }, {
      key: "__init",
      value: function __init() {
        _get(_getPrototypeOf(Application.prototype), "__init", this).call(this), this.__updateFocus();
      }
    }, {
      key: "updateFocusPath",
      value: function updateFocusPath() {
        this.__updateFocus();
      }
    }, {
      key: "__updateFocus",
      value: function __updateFocus() {
        var t = this.__updateFocusRec();

        !Application.booting && t && this.updateFocusSettings();
      }
    }, {
      key: "__updateFocusRec",
      value: function __updateFocusRec() {
        var t = ++this.__updateFocusCounter;
        this.__updateFocusId = t;

        var e = this.__getFocusPath(),
            i = e[e.length - 1],
            s = this._focusPath ? this._focusPath[this._focusPath.length - 1] : void 0;

        if (!s) {
          this._focusPath = [];

          for (var _s25 = 0, r = e.length; _s25 < r; _s25++) {
            if (this._focusPath.push(e[_s25]), this._focusPath[_s25]._focus(i, void 0), this.__updateFocusId !== t) return !1;
          }

          return !0;
        }

        {
          var _r18,
              n = Math.min(this._focusPath.length, e.length);

          for (_r18 = 0; _r18 < n && this._focusPath[_r18] === e[_r18]; _r18++) {
            ;
          }

          if (this._focusPath.length !== e.length || _r18 !== e.length) {
            this.__options.debug && console.log("FOCUS " + i.getLocationString());

            for (var _e121 = this._focusPath.length - 1; _e121 >= _r18; _e121--) {
              if (this._focusPath.pop()._unfocus(i, s), this.__updateFocusId !== t) return !1;
            }

            for (var _n8 = _r18, o = e.length; _n8 < o; _n8++) {
              if (this._focusPath.push(e[_n8]), this._focusPath[_n8]._focus(i, s), this.__updateFocusId !== t) return !1;
            }

            for (var _t125 = 0; _t125 < _r18; _t125++) {
              this._focusPath[_t125]._focusChange(i, s);
            }
          }
        }
        return !0;
      }
    }, {
      key: "updateFocusSettings",
      value: function updateFocusSettings() {
        var t = this._focusPath[this._focusPath.length - 1],
            e = {},
            i = Component.prototype._setFocusSettings;

        for (var _t126 = 0, _s26 = this._focusPath.length; _t126 < _s26; _t126++) {
          this._focusPath[_t126]._setFocusSettings !== i && this._focusPath[_t126]._setFocusSettings(e);
        }

        var s = Component.prototype._handleFocusSettings;

        for (var _i30 = 0, r = this._focusPath.length; _i30 < r; _i30++) {
          this._focusPath[_i30]._handleFocusSettings !== s && this._focusPath[_i30]._handleFocusSettings(e, this.__prevFocusSettings, t);
        }

        this.__prevFocusSettings = e;
      }
    }, {
      key: "_handleFocusSettings",
      value: function _handleFocusSettings(t, e, i, s) {}
    }, {
      key: "__getFocusPath",
      value: function __getFocusPath() {
        var t = [this];
        var e = this;

        for (;;) {
          var i = e._getFocused();

          if (!i || i === e) break;
          var s = i.cparent;
          if (s === e) t.push(i);else {
            var r = [i];

            do {
              s || e._throwError("Return value for _getFocused must be an attached descendant component but its '" + i.getLocationString() + "'"), r.push(s), s = s.cparent;
            } while (s !== e);

            for (var _e122 = 0, _i31 = r.length; _e122 < _i31; _e122++) {
              t.push(r[_i31 - _e122 - 1]);
            }
          }
          e = i;
        }

        return t;
      }
    }, {
      key: "focusTopDownEvent",
      value: function focusTopDownEvent(t) {
        var i = this.focusPath,
            s = i.length;

        for (var _len4 = arguments.length, e = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          e[_key4 - 1] = arguments[_key4];
        }

        for (var r = 0; r < s; r++) {
          var _s27 = i[r]._getMostSpecificHandledMember(t);

          if (void 0 !== _s27) {
            var _i$r;

            if (!1 !== (_i$r = i[r])[_s27].apply(_i$r, e)) return !0;
          }
        }

        return !1;
      }
    }, {
      key: "focusBottomUpEvent",
      value: function focusBottomUpEvent(t) {
        var i = this.focusPath;

        for (var _len5 = arguments.length, e = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          e[_key5 - 1] = arguments[_key5];
        }

        for (var s = i.length - 1; s >= 0; s--) {
          var r = i[s]._getMostSpecificHandledMember(t);

          if (void 0 !== r) {
            var _i$s;

            if (!1 !== (_i$s = i[s])[r].apply(_i$s, e)) return !0;
          }
        }

        return !1;
      }
    }, {
      key: "_receiveKeydown",
      value: function _receiveKeydown(t) {
        var e = t,
            i = this.__keymap[t.keyCode],
            s = this.focusPath;

        if (i) {
          var _t127 = this.__keypressTimers.has(i);

          if (s[s.length - 1].longpress && _t127) return;
        }

        i ? this.stage.application.focusTopDownEvent(["_capture".concat(i), "_captureKey"], e) || this.stage.application.focusBottomUpEvent(["_handle".concat(i), "_handleKey"], e) : this.stage.application.focusTopDownEvent(["_captureKey"], e) || this.stage.application.focusBottomUpEvent(["_handleKey"], e), this.updateFocusPath();
        var r = s[s.length - 1];
        i && r.longpress && this._startLongpressTimer(i, r);
      }
    }, {
      key: "_receiveKeyup",
      value: function _receiveKeyup(t) {
        var e = t,
            i = this.__keymap[t.keyCode];
        i ? this.stage.application.focusTopDownEvent(["_capture".concat(i, "Release"), "_captureKeyRelease"], e) || this.stage.application.focusBottomUpEvent(["_handle".concat(i, "Release"), "_handleKeyRelease"], e) : this.stage.application.focusTopDownEvent(["_captureKeyRelease"], e) || this.stage.application.focusBottomUpEvent(["_handleKeyRelease"], e), this.updateFocusPath(), i && this.__keypressTimers.has(i) && (clearTimeout(this.__keypressTimers.get(i)), this.__keypressTimers["delete"](i));
      }
    }, {
      key: "_startLongpressTimer",
      value: function _startLongpressTimer(t, e) {
        var _this56 = this;

        var i = e.longpress,
            s = t.toLowerCase();

        if (i[s]) {
          var r = i[s];
          Utils.isNumber(r) ? this.__keypressTimers.set(t, setTimeout(function () {
            _this56.stage.application.focusTopDownEvent(["_capture".concat(t, "Long"), "_captureKey"], {}) || _this56.stage.application.focusBottomUpEvent(["_handle".concat(t, "Long"), "_handleKey"], {}), _this56.__keypressTimers["delete"](t);
          }, r || 500)) : e._throwError("config value for longpress must be a number");
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._destroyed || (this._destroy(), this.stage.destroy(), this._destroyed = !0);
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        if (this.stage.setApplication(void 0), this._updateAttachedFlag(), this._updateEnabledFlag(), this.__keypressTimers.size) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.__keypressTimers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _t128 = _step.value;
              clearTimeout(_t128);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.__keypressTimers.clear();
        }
      }
    }, {
      key: "getCanvas",
      value: function getCanvas() {
        return this.stage.getCanvas();
      }
    }, {
      key: "focusPath",
      get: function get() {
        return this._focusPath;
      }
    }]);

    return Application;
  }(Component);

  var StaticCanvasTexture =
  /*#__PURE__*/
  function (_Texture5) {
    _inherits(StaticCanvasTexture, _Texture5);

    function StaticCanvasTexture(t) {
      var _this57;

      _classCallCheck(this, StaticCanvasTexture);

      _this57 = _possibleConstructorReturn(this, _getPrototypeOf(StaticCanvasTexture).call(this, t)), _this57._factory = void 0, _this57._lookupId = void 0;
      return _this57;
    }

    _createClass(StaticCanvasTexture, [{
      key: "_getIsValid",
      value: function _getIsValid() {
        return !!this._factory;
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return this._lookupId;
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        var _this58 = this;

        var t = this._factory;
        return function (e) {
          return t(function (t, i) {
            if (t) return e(t);
            e(null, _this58.stage.platform.getTextureOptionsForDrawingCanvas(i));
          }, _this58.stage);
        };
      }
    }, {
      key: "content",
      set: function set(_ref6) {
        var t = _ref6.factory,
            e = _ref6.lookupId;
        this._factory = t, this._lookupId = e, this._changed();
      }
    }]);

    return StaticCanvasTexture;
  }(Texture);

  var Tools =
  /*#__PURE__*/
  function () {
    function Tools() {
      _classCallCheck(this, Tools);
    }

    _createClass(Tools, null, [{
      key: "getCanvasTexture",
      value: function getCanvasTexture(t, e) {
        return {
          type: StaticCanvasTexture,
          content: {
            factory: t,
            lookupId: e
          }
        };
      }
    }, {
      key: "getRoundRect",
      value: function getRoundRect(t, e, i, s, r, n, o) {
        var _this59 = this;

        Array.isArray(i) || (i = [i, i, i, i]);
        var a = "rect" + [t, e, s, r, n ? 1 : 0, o].concat(i).join(",");
        return Tools.getCanvasTexture(function (a, h) {
          Utils.isSpark ? h.platform.createRoundRect(a, h, t, e, i, s, r, n, o) : a(null, _this59.createRoundRect(h, t, e, i, s, r, n, o));
        }, a);
      }
    }, {
      key: "createRoundRect",
      value: function createRoundRect(t, e, i, s, r, n, o, a) {
        void 0 === o && (o = !0), void 0 === r && (r = 0);
        var h = t.platform.getDrawingCanvas(),
            l = h.getContext("2d");
        l.imageSmoothingEnabled = !0, h.width = e + r + 2, h.height = i + r + 2, l.beginPath();

        var _ = .5 * r + 1,
            u = .5 * r + 1;

        return l.moveTo(_ + s[0], u), l.lineTo(_ + e - s[1], u), l.arcTo(_ + e, u, _ + e, u + s[1], s[1]), l.lineTo(_ + e, u + i - s[2]), l.arcTo(_ + e, u + i, _ + e - s[2], u + i, s[2]), l.lineTo(_ + s[3], u + i), l.arcTo(_, u + i, _, u + i - s[3], s[3]), l.lineTo(_, u + s[0]), l.arcTo(_, u, _ + s[0], u, s[0]), l.closePath(), o && (Utils.isNumber(a) ? l.fillStyle = StageUtils.getRgbaString(a) : l.fillStyle = "white", l.fill()), r && (Utils.isNumber(n) ? l.strokeStyle = StageUtils.getRgbaString(n) : l.strokeStyle = "white", l.lineWidth = r, l.stroke()), h;
      }
    }, {
      key: "getShadowRect",
      value: function getShadowRect(t, e) {
        var _this60 = this;

        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
        var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2 * s;
        Array.isArray(i) || (i = [i, i, i, i]);
        var n = "shadow" + [t, e, s, r].concat(i).join(",");
        return Tools.getCanvasTexture(function (n, o) {
          Utils.isSpark ? o.platform.createShadowRect(n, o, t, e, i, s, r) : n(null, _this60.createShadowRect(o, t, e, i, s, r));
        }, n);
      }
    }, {
      key: "createShadowRect",
      value: function createShadowRect(t, e, i, s, r, n) {
        var o = t.platform.getDrawingCanvas(),
            a = o.getContext("2d");
        a.imageSmoothingEnabled = !0, o.width = e + 2 * n, o.height = i + 2 * n, a.globalAlpha = .01, a.fillRect(0, 0, .01, .01), a.globalAlpha = 1, a.shadowColor = StageUtils.getRgbaString(4294967295), a.fillStyle = StageUtils.getRgbaString(4294967295), a.shadowBlur = r, a.shadowOffsetX = e + 10 + n, a.shadowOffsetY = n, a.beginPath();
        var h = -(e + 10);
        return a.moveTo(h + s[0], 0), a.lineTo(h + e - s[1], 0), a.arcTo(h + e, 0, h + e, 0 + s[1], s[1]), a.lineTo(h + e, 0 + i - s[2]), a.arcTo(h + e, 0 + i, h + e - s[2], 0 + i, s[2]), a.lineTo(h + s[3], 0 + i), a.arcTo(h, 0 + i, h, 0 + i - s[3], s[3]), a.lineTo(h, 0 + s[0]), a.arcTo(h, 0, h + s[0], 0, s[0]), a.closePath(), a.fill(), o;
      }
    }, {
      key: "getSvgTexture",
      value: function getSvgTexture(t, e, i) {
        var _this61 = this;

        var s = "svg" + [e, i, t].join(",");
        return Tools.getCanvasTexture(function (s, r) {
          Utils.isSpark ? r.platform.createSvg(s, r, t, e, i) : _this61.createSvg(s, r, t, e, i);
        }, s);
      }
    }, {
      key: "createSvg",
      value: function createSvg(t, e, i, s, r) {
        var n = e.platform.getDrawingCanvas(),
            o = n.getContext("2d");
        o.imageSmoothingEnabled = !0;
        var a = new Image();
        a.onload = function () {
          n.width = s, n.height = r, o.drawImage(a, 0, 0, n.width, n.height), t(null, n);
        }, a.onError = function (e) {
          t(e);
        }, a.src = i;
      }
    }]);

    return Tools;
  }();

  var ObjMerger =
  /*#__PURE__*/
  function () {
    function ObjMerger() {
      _classCallCheck(this, ObjMerger);
    }

    _createClass(ObjMerger, null, [{
      key: "isMf",
      value: function isMf(t) {
        return Utils.isFunction(t) && t.__mf;
      }
    }, {
      key: "mf",
      value: function mf(t) {
        return t.__mf = !0, t;
      }
    }, {
      key: "merge",
      value: function merge(t, e) {
        var i = Object.keys(t),
            s = Object.keys(e);
        if (!s.length) return t;
        var r = {},
            n = {};

        for (var _t129 = 0, _e123 = s.length; _t129 < _e123; _t129++) {
          var _e124 = s[_t129];
          r[_e124] = -1, n[_e124] = _t129;
        }

        for (var _t130 = 0, _e125 = i.length; _t130 < _e125; _t130++) {
          var _e126 = i[_t130];
          r[_e126] = _t130, void 0 === n[_e126] && (n[_e126] = -1);
        }

        var o = i.length,
            a = {};

        for (var _o5 = 0, _h3 = s.length; _o5 < _h3; _o5++) {
          var _h4 = s[_o5],
              l = r[_h4];
          var _ = l;

          for (; --_ >= 0;) {
            if (-1 !== n[i[_]]) break;
          }

          for (; ++_ < l;) {
            var _e127 = i[_];
            a[_e127] = t[_e127];
          }

          var u = e[_h4],
              c = t[_h4];
          var d = void 0;
          void 0 !== (d = this.isMf(u) ? u(c) : Utils.isObjectLiteral(c) && Utils.isObjectLiteral(u) ? ObjMerger.merge(c, u) : u) && (a[_h4] = d);
        }

        var h = o;

        for (; --h >= 0;) {
          if (-1 !== n[i[h]]) break;
        }

        for (; ++h < o;) {
          var _e128 = i[h];
          a[_e128] = t[_e128];
        }

        return a;
      }
    }]);

    return ObjMerger;
  }();

  var ObjectListProxy =
  /*#__PURE__*/
  function (_ObjectList2) {
    _inherits(ObjectListProxy, _ObjectList2);

    function ObjectListProxy(t) {
      var _this62;

      _classCallCheck(this, ObjectListProxy);

      _this62 = _possibleConstructorReturn(this, _getPrototypeOf(ObjectListProxy).call(this)), _this62._target = t;
      return _this62;
    }

    _createClass(ObjectListProxy, [{
      key: "onAdd",
      value: function onAdd(t, e) {
        this._target.addAt(t, e);
      }
    }, {
      key: "onRemove",
      value: function onRemove(t, e) {
        this._target.removeAt(e);
      }
    }, {
      key: "onSync",
      value: function onSync(t, e, i) {
        this._target._setByArray(i);
      }
    }, {
      key: "onSet",
      value: function onSet(t, e) {
        this._target.setAt(t, e);
      }
    }, {
      key: "onMove",
      value: function onMove(t, e, i) {
        this._target.setAt(t, i);
      }
    }, {
      key: "createItem",
      value: function createItem(t) {
        return this._target.createItem(t);
      }
    }, {
      key: "isItem",
      value: function isItem(t) {
        return this._target.isItem(t);
      }
    }]);

    return ObjectListProxy;
  }(ObjectList);

  var ObjectListWrapper =
  /*#__PURE__*/
  function (_ObjectListProxy) {
    _inherits(ObjectListWrapper, _ObjectListProxy);

    function ObjectListWrapper(t, e) {
      var _this63;

      _classCallCheck(this, ObjectListWrapper);

      _this63 = _possibleConstructorReturn(this, _getPrototypeOf(ObjectListWrapper).call(this, t)), _this63._wrap = e;
      return _this63;
    }

    _createClass(ObjectListWrapper, [{
      key: "wrap",
      value: function wrap(t) {
        var e = this._wrap(t);

        return t._wrapper = e, e;
      }
    }, {
      key: "onAdd",
      value: function onAdd(t, e) {
        t = this.wrap(t), _get(_getPrototypeOf(ObjectListWrapper.prototype), "onAdd", this).call(this, t, e);
      }
    }, {
      key: "onRemove",
      value: function onRemove(t, e) {
        _get(_getPrototypeOf(ObjectListWrapper.prototype), "onRemove", this).call(this, t, e);
      }
    }, {
      key: "onSync",
      value: function onSync(t, e, i) {
        var _this64 = this;

        e.forEach(function (t) {
          return _this64.wrap(t);
        }), i = i.map(function (t) {
          return t._wrapper;
        }), _get(_getPrototypeOf(ObjectListWrapper.prototype), "onSync", this).call(this, t, e, i);
      }
    }, {
      key: "onSet",
      value: function onSet(t, e) {
        t = this.wrap(t), _get(_getPrototypeOf(ObjectListWrapper.prototype), "onSet", this).call(this, t, e);
      }
    }, {
      key: "onMove",
      value: function onMove(t, e, i) {
        _get(_getPrototypeOf(ObjectListWrapper.prototype), "onMove", this).call(this, t, e, i);
      }
    }]);

    return ObjectListWrapper;
  }(ObjectListProxy);

  var NoiseTexture =
  /*#__PURE__*/
  function (_Texture6) {
    _inherits(NoiseTexture, _Texture6);

    function NoiseTexture() {
      _classCallCheck(this, NoiseTexture);

      return _possibleConstructorReturn(this, _getPrototypeOf(NoiseTexture).apply(this, arguments));
    }

    _createClass(NoiseTexture, [{
      key: "_getLookupId",
      value: function _getLookupId() {
        return "__noise";
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        var t = this.stage.gl;
        return function (e) {
          var i = new Uint8Array(65536);

          for (var _t131 = 0; _t131 < 65536; _t131 += 4) {
            var _e129 = Math.floor(256 * Math.random());

            i[_t131] = _e129, i[_t131 + 1] = _e129, i[_t131 + 2] = _e129, i[_t131 + 3] = 255;
          }

          var s = {};
          t && (s[t.TEXTURE_WRAP_S] = t.REPEAT, s[t.TEXTURE_WRAP_T] = t.REPEAT, s[t.TEXTURE_MIN_FILTER] = t.NEAREST, s[t.TEXTURE_MAG_FILTER] = t.NEAREST), e(null, {
            source: i,
            w: 128,
            h: 128,
            texParams: s
          });
        };
      }
    }]);

    return NoiseTexture;
  }(Texture);

  var HtmlTexture =
  /*#__PURE__*/
  function (_Texture7) {
    _inherits(HtmlTexture, _Texture7);

    function HtmlTexture(t) {
      var _this65;

      _classCallCheck(this, HtmlTexture);

      _this65 = _possibleConstructorReturn(this, _getPrototypeOf(HtmlTexture).call(this, t)), _this65._htmlElement = void 0, _this65._scale = 1;
      return _this65;
    }

    _createClass(HtmlTexture, [{
      key: "_getIsValid",
      value: function _getIsValid() {
        return this.htmlElement;
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return this._scale + ":" + this._htmlElement.innerHTML;
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        var t = this._htmlElement,
            e = this._scale;
        return function (i) {
          if (!window.html2canvas) return i(new Error("Please include html2canvas (https://html2canvas.hertzen.com/)"));
          var s = HtmlTexture.getPreloadArea();
          s.appendChild(t), html2canvas(t, {
            backgroundColor: null,
            scale: e
          }).then(function (e) {
            if (s.removeChild(t), 0 === e.height) return i(new Error("Canvas height is 0"));
            i(null, {
              source: e,
              width: e.width,
              height: e.height
            });
          })["catch"](function (t) {
            console.error(t);
          });
        };
      }
    }, {
      key: "htmlElement",
      set: function set(t) {
        this._htmlElement = t, this._changed();
      },
      get: function get() {
        return this._htmlElement;
      }
    }, {
      key: "scale",
      set: function set(t) {
        this._scale = t, this._changed();
      },
      get: function get() {
        return this._scale;
      }
    }, {
      key: "html",
      set: function set(t) {
        if (t) {
          var _e130 = document.createElement("div");

          _e130.innerHTML = "<div>" + t + "</div>", this.htmlElement = _e130.firstElementChild;
        } else this.htmlElement = void 0;
      },
      get: function get() {
        return this._htmlElement.innerHTML;
      }
    }], [{
      key: "getPreloadArea",
      value: function getPreloadArea() {
        return this._preloadArea || (this._preloadArea = document.createElement("div"), this._preloadArea.attachShadow && this._preloadArea.attachShadow({
          mode: "closed"
        }), this._preloadArea.style.opacity = 0, this._preloadArea.style.pointerEvents = "none", this._preloadArea.style.position = "fixed", this._preloadArea.style.display = "block", this._preloadArea.style.top = "100vh", this._preloadArea.style.overflow = "hidden", document.body.appendChild(this._preloadArea)), this._preloadArea;
      }
    }]);

    return HtmlTexture;
  }(Texture);

  var ListItems =
  /*#__PURE__*/
  function (_ObjectListWrapper) {
    _inherits(ListItems, _ObjectListWrapper);

    function ListItems(t) {
      var _this66;

      _classCallCheck(this, ListItems);

      _this66 = _possibleConstructorReturn(this, _getPrototypeOf(ListItems).call(this, t._wrapper._children, function (t) {
        var e = t.stage.createElement();
        return e.add(t), e.visible = !1, e;
      })), _this66.list = t;
      return _this66;
    }

    _createClass(ListItems, [{
      key: "onAdd",
      value: function onAdd(t, e) {
        _get(_getPrototypeOf(ListItems.prototype), "onAdd", this).call(this, t, e), this.checkStarted(e);
      }
    }, {
      key: "checkStarted",
      value: function checkStarted(t) {
        this.list._reloadVisibleElements = !0, this.list._started ? (1 === this.list.length ? this.list.setIndex(0, !0, !0) : this.list._index >= this.list.length && this.list.setIndex(0), this.list.update()) : this.list.start();
      }
    }, {
      key: "onRemove",
      value: function onRemove(t, e) {
        _get(_getPrototypeOf(ListItems.prototype), "onRemove", this).call(this, t, e);

        var i = this.list.realIndex;
        i === e ? (i === this.list.length && i--, i >= 0 && this.list.setIndex(i)) : i > e && this.list.setIndex(i - 1), this.list._reloadVisibleElements = !0;
      }
    }, {
      key: "onSet",
      value: function onSet(t, e) {
        _get(_getPrototypeOf(ListItems.prototype), "onSet", this).call(this, t, e), this.checkStarted(e);
      }
    }, {
      key: "onSync",
      value: function onSync(t, e, i) {
        _get(_getPrototypeOf(ListItems.prototype), "onSync", this).call(this, t, e, i), this.checkStarted(0);
      }
    }, {
      key: "_signalProxy",
      get: function get() {
        return !0;
      }
    }]);

    return ListItems;
  }(ObjectListWrapper);

  var LinearBlurShader =
  /*#__PURE__*/
  function (_DefaultShader) {
    _inherits(LinearBlurShader, _DefaultShader);

    function LinearBlurShader(t) {
      var _this67;

      _classCallCheck(this, LinearBlurShader);

      _this67 = _possibleConstructorReturn(this, _getPrototypeOf(LinearBlurShader).call(this, t)), _this67._direction = new Float32Array([1, 0]), _this67._kernelRadius = 1;
      return _this67;
    }

    _createClass(LinearBlurShader, [{
      key: "useDefault",
      value: function useDefault() {
        return 0 === this._kernelRadius;
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(LinearBlurShader.prototype), "setupUniforms", this).call(this, t), this._setUniform("direction", this._direction, this.gl.uniform2fv), this._setUniform("kernelRadius", this._kernelRadius, this.gl.uniform1i);
        var e = t.getRenderWidth(),
            i = t.getRenderHeight();

        this._setUniform("resolution", new Float32Array([e, i]), this.gl.uniform2fv);
      }
    }, {
      key: "x",
      get: function get() {
        return this._direction[0];
      },
      set: function set(t) {
        this._direction[0] = t, this.redraw();
      }
    }, {
      key: "y",
      get: function get() {
        return this._direction[1];
      },
      set: function set(t) {
        this._direction[1] = t, this.redraw();
      }
    }, {
      key: "kernelRadius",
      get: function get() {
        return this._kernelRadius;
      },
      set: function set(t) {
        this._kernelRadius = t, this.redraw();
      }
    }]);

    return LinearBlurShader;
  }(DefaultShader);

  LinearBlurShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    uniform vec2 resolution;\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform vec2 direction;\n    uniform int kernelRadius;\n    \n    vec4 blur1(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n        vec4 color = vec4(0.0);\n        vec2 off1 = vec2(1.3333333333333333) * direction;\n        color += texture2D(image, uv) * 0.29411764705882354;\n        color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;\n        color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;\n        return color; \n    }\n    \n    vec4 blur2(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n        vec4 color = vec4(0.0);\n        vec2 off1 = vec2(1.3846153846) * direction;\n        vec2 off2 = vec2(3.2307692308) * direction;\n        color += texture2D(image, uv) * 0.2270270270;\n        color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;\n        color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;\n        color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;\n        color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;\n        return color;\n    }\n    \n    vec4 blur3(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n        vec4 color = vec4(0.0);\n        vec2 off1 = vec2(1.411764705882353) * direction;\n        vec2 off2 = vec2(3.2941176470588234) * direction;\n        vec2 off3 = vec2(5.176470588235294) * direction;\n        color += texture2D(image, uv) * 0.1964825501511404;\n        color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;\n        color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;\n        color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;\n        color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;\n        color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;\n        color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;\n        return color;\n    }    \n\n    void main(void){\n        if (kernelRadius == 1) {\n            gl_FragColor = blur1(uSampler, vTextureCoord, resolution, direction) * vColor;\n        } else if (kernelRadius == 2) {\n            gl_FragColor = blur2(uSampler, vTextureCoord, resolution, direction) * vColor;\n        } else {\n            gl_FragColor = blur3(uSampler, vTextureCoord, resolution, direction) * vColor;\n        }\n    }\n";

  var BoxBlurShader =
  /*#__PURE__*/
  function (_DefaultShader2) {
    _inherits(BoxBlurShader, _DefaultShader2);

    function BoxBlurShader() {
      _classCallCheck(this, BoxBlurShader);

      return _possibleConstructorReturn(this, _getPrototypeOf(BoxBlurShader).apply(this, arguments));
    }

    _createClass(BoxBlurShader, [{
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(BoxBlurShader.prototype), "setupUniforms", this).call(this, t);

        var e = 1 / t.getTextureWidth(0),
            i = 1 / t.getTextureHeight(0);

        this._setUniform("stepTextureCoord", new Float32Array([e, i]), this.gl.uniform2fv);
      }
    }]);

    return BoxBlurShader;
  }(DefaultShader);

  BoxBlurShader.vertexShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    uniform vec2 stepTextureCoord;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    attribute vec4 aColor;\n    uniform vec2 projection;\n    varying vec4 vColor;\n    varying vec2 vTextureCoordUl;\n    varying vec2 vTextureCoordUr;\n    varying vec2 vTextureCoordBl;\n    varying vec2 vTextureCoordBr;\n    void main(void){\n        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);\n        vTextureCoordUl = aTextureCoord - stepTextureCoord;\n        vTextureCoordBr = aTextureCoord + stepTextureCoord;\n        vTextureCoordUr = vec2(vTextureCoordBr.x, vTextureCoordUl.y);\n        vTextureCoordBl = vec2(vTextureCoordUl.x, vTextureCoordBr.y);\n        vColor = aColor;\n        gl_Position.y = -sign(projection.y) * gl_Position.y;\n    }\n", BoxBlurShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoordUl;\n    varying vec2 vTextureCoordUr;\n    varying vec2 vTextureCoordBl;\n    varying vec2 vTextureCoordBr;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    void main(void){\n        vec4 color = 0.25 * (texture2D(uSampler, vTextureCoordUl) + texture2D(uSampler, vTextureCoordUr) + texture2D(uSampler, vTextureCoordBl) + texture2D(uSampler, vTextureCoordBr));\n        gl_FragColor = color * vColor;\n    }\n";

  var BlurShader =
  /*#__PURE__*/
  function (_DefaultShader$) {
    _inherits(BlurShader, _DefaultShader$);

    function BlurShader(t) {
      var _this68;

      _classCallCheck(this, BlurShader);

      _this68 = _possibleConstructorReturn(this, _getPrototypeOf(BlurShader).call(this, t)), _this68._kernelRadius = 1;
      return _this68;
    }

    _createClass(BlurShader, [{
      key: "useDefault",
      value: function useDefault() {
        return 0 === this._amount;
      }
    }, {
      key: "_beforeDrawEl",
      value: function _beforeDrawEl(_ref7) {
        var t = _ref7.target;
        t.ctx.filter = "blur(" + this._kernelRadius + "px)";
      }
    }, {
      key: "_afterDrawEl",
      value: function _afterDrawEl(_ref8) {
        var t = _ref8.target;
        t.ctx.filter = "none";
      }
    }, {
      key: "kernelRadius",
      get: function get() {
        return this._kernelRadius;
      },
      set: function set(t) {
        this._kernelRadius = t, this.redraw();
      }
    }]);

    return BlurShader;
  }(DefaultShader$1);

  var C2dFastBlurComponent =
  /*#__PURE__*/
  function (_Component2) {
    _inherits(C2dFastBlurComponent, _Component2);

    _createClass(C2dFastBlurComponent, null, [{
      key: "_template",
      value: function _template() {
        return {
          forceZIndexContext: !0,
          rtt: !0,
          Textwrap: {
            shader: {
              type: BlurShader
            },
            Content: {}
          }
        };
      }
    }]);

    function C2dFastBlurComponent(t) {
      var _this69;

      _classCallCheck(this, C2dFastBlurComponent);

      _this69 = _possibleConstructorReturn(this, _getPrototypeOf(C2dFastBlurComponent).call(this, t)), _this69._textwrap = _this69.sel("Textwrap"), _this69._wrapper = _this69.sel("Textwrap>Content"), _this69._amount = 0, _this69._paddingX = 0, _this69._paddingY = 0;
      return _this69;
    }

    _createClass(C2dFastBlurComponent, [{
      key: "_updateBlurSize",
      value: function _updateBlurSize() {
        var t = this.renderWidth,
            e = this.renderHeight,
            i = this._paddingX,
            s = this._paddingY;
        this._wrapper.x = i, this._textwrap.x = -i, this._wrapper.y = s, this._textwrap.y = -s, this._textwrap.w = t + 2 * i, this._textwrap.h = e + 2 * s;
      }
    }, {
      key: "content",
      get: function get() {
        return this.sel("Textwrap>Content");
      },
      set: function set(t) {
        this.sel("Textwrap>Content").patch(t, !0);
      }
    }, {
      key: "padding",
      set: function set(t) {
        this._paddingX = t, this._paddingY = t, this._updateBlurSize();
      }
    }, {
      key: "paddingX",
      set: function set(t) {
        this._paddingX = t, this._updateBlurSize();
      }
    }, {
      key: "paddingY",
      set: function set(t) {
        this._paddingY = t, this._updateBlurSize();
      }
    }, {
      key: "amount",
      get: function get() {
        return this._amount;
      },
      set: function set(t) {
        this._amount = t, this._textwrap.shader.kernelRadius = C2dFastBlurComponent._amountToKernelRadius(t);
      }
    }, {
      key: "_signalProxy",
      get: function get() {
        return !0;
      }
    }], [{
      key: "getSpline",
      value: function getSpline() {
        return this._multiSpline || (this._multiSpline = new MultiSpline(), this._multiSpline.parse(!1, {
          0: 0,
          .25: 1.5,
          .5: 5.5,
          .75: 18,
          1: 39
        })), this._multiSpline;
      }
    }, {
      key: "_amountToKernelRadius",
      value: function _amountToKernelRadius(t) {
        return C2dFastBlurComponent.getSpline().getValue(Math.min(1, .25 * t));
      }
    }]);

    return C2dFastBlurComponent;
  }(Component);

  var WebGLFastBlurComponent =
  /*#__PURE__*/
  function (_Component3) {
    _inherits(WebGLFastBlurComponent, _Component3);

    _createClass(WebGLFastBlurComponent, [{
      key: "_signalProxy",
      get: function get() {
        return !0;
      }
    }], [{
      key: "_template",
      value: function _template() {
        var onUpdate = function onUpdate(t, e) {
          if (130 & e._recalc) {
            var _t132 = e.w,
                i = e.h;
            var s = e;

            do {
              (s = s._children[0])._element.w = _t132, s._element.h = i;
            } while (s._children);
          }
        };

        return {
          Textwrap: {
            rtt: !0,
            forceZIndexContext: !0,
            renderOffscreen: !0,
            Content: {}
          },
          Layers: {
            L0: {
              rtt: !0,
              onUpdate: onUpdate,
              renderOffscreen: !0,
              visible: !1,
              Content: {
                shader: {
                  type: BoxBlurShader
                }
              }
            },
            L1: {
              rtt: !0,
              onUpdate: onUpdate,
              renderOffscreen: !0,
              visible: !1,
              Content: {
                shader: {
                  type: BoxBlurShader
                }
              }
            },
            L2: {
              rtt: !0,
              onUpdate: onUpdate,
              renderOffscreen: !0,
              visible: !1,
              Content: {
                shader: {
                  type: BoxBlurShader
                }
              }
            },
            L3: {
              rtt: !0,
              onUpdate: onUpdate,
              renderOffscreen: !0,
              visible: !1,
              Content: {
                shader: {
                  type: BoxBlurShader
                }
              }
            }
          },
          Result: {
            shader: {
              type: FastBlurOutputShader
            },
            visible: !1
          }
        };
      }
    }]);

    function WebGLFastBlurComponent(t) {
      var _this70;

      _classCallCheck(this, WebGLFastBlurComponent);

      _this70 = _possibleConstructorReturn(this, _getPrototypeOf(WebGLFastBlurComponent).call(this, t)), _this70._textwrap = _this70.sel("Textwrap"), _this70._wrapper = _this70.sel("Textwrap>Content"), _this70._layers = _this70.sel("Layers"), _this70._output = _this70.sel("Result"), _this70._amount = 0, _this70._paddingX = 0, _this70._paddingY = 0;
      return _this70;
    }

    _createClass(WebGLFastBlurComponent, [{
      key: "_buildLayers",
      value: function _buildLayers() {
        var _this71 = this;

        var t = [{
          x: 1,
          y: 0,
          kernelRadius: 1
        }, {
          x: 0,
          y: 1,
          kernelRadius: 1
        }, {
          x: 1.5,
          y: 0,
          kernelRadius: 1
        }, {
          x: 0,
          y: 1.5,
          kernelRadius: 1
        }].map(function (t) {
          return Shader.create(_this71.stage, Object.assign({
            type: LinearBlurShader
          }, t));
        });
        this._setLayerTexture(this.getLayerContents(0), this._textwrap.getTexture(), []), this._setLayerTexture(this.getLayerContents(1), this.getLayer(0).getTexture(), [t[0], t[1]]), this._setLayerTexture(this.getLayerContents(2), this.getLayer(1).getTexture(), [t[0], t[1], t[2], t[3]]), this._setLayerTexture(this.getLayerContents(3), this.getLayer(2).getTexture(), [t[0], t[1], t[2], t[3]]);
      }
    }, {
      key: "_setLayerTexture",
      value: function _setLayerTexture(t, e, i) {
        if (i.length) {
          var s = i.pop(),
              r = t.stage.c({
            rtt: !0,
            shader: s
          });
          this._setLayerTexture(r, e, i), t.childList.add(r);
        } else t.texture = e;

        return t;
      }
    }, {
      key: "getLayer",
      value: function getLayer(t) {
        return this._layers.sel("L" + t);
      }
    }, {
      key: "getLayerContents",
      value: function getLayerContents(t) {
        return this.getLayer(t).sel("Content");
      }
    }, {
      key: "_onResize",
      value: function _onResize() {
        this._updateBlurSize();
      }
    }, {
      key: "_updateBlurSize",
      value: function _updateBlurSize() {
        var t = this.renderWidth,
            e = this.renderHeight,
            i = this._paddingX,
            s = this._paddingY,
            r = t + 2 * i,
            n = e + 2 * s;
        this._textwrap.w = r, this._wrapper.x = i, this.getLayer(0).w = this.getLayerContents(0).w = r / 2, this.getLayer(1).w = this.getLayerContents(1).w = r / 4, this.getLayer(2).w = this.getLayerContents(2).w = r / 8, this.getLayer(3).w = this.getLayerContents(3).w = r / 16, this._output.x = -i, this._textwrap.x = -i, this._output.w = r, this._textwrap.h = n, this._wrapper.y = s, this.getLayer(0).h = this.getLayerContents(0).h = n / 2, this.getLayer(1).h = this.getLayerContents(1).h = n / 4, this.getLayer(2).h = this.getLayerContents(2).h = n / 8, this.getLayer(3).h = this.getLayerContents(3).h = n / 16, this._output.y = -s, this._textwrap.y = -s, this._output.h = n, this.w = t, this.h = e;
      }
    }, {
      key: "_update",
      value: function _update() {
        var t = Math.min(4, Math.max(0, this._amount));
        0 === t ? (this._textwrap.renderToTexture = !1, this._output.shader.otherTextureSource = null, this._output.visible = !1) : (this._textwrap.renderToTexture = !0, this._output.visible = !0, this.getLayer(0).visible = t > 0, this.getLayer(1).visible = t > 1, this.getLayer(2).visible = t > 2, this.getLayer(3).visible = t > 3, t <= 1 ? (this._output.texture = this._textwrap.getTexture(), this._output.shader.otherTextureSource = this.getLayer(0).getTexture(), this._output.shader.a = t) : t <= 2 ? (this._output.texture = this.getLayer(0).getTexture(), this._output.shader.otherTextureSource = this.getLayer(1).getTexture(), this._output.shader.a = t - 1) : t <= 3 ? (this._output.texture = this.getLayer(1).getTexture(), this._output.shader.otherTextureSource = this.getLayer(2).getTexture(), this._output.shader.a = t - 2) : t <= 4 && (this._output.texture = this.getLayer(2).getTexture(), this._output.shader.otherTextureSource = this.getLayer(3).getTexture(), this._output.shader.a = t - 3));
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this._buildLayers();
      }
    }, {
      key: "content",
      get: function get() {
        return this.sel("Textwrap>Content");
      },
      set: function set(t) {
        this.sel("Textwrap>Content").patch(t, !0);
      }
    }, {
      key: "padding",
      set: function set(t) {
        this._paddingX = t, this._paddingY = t, this._updateBlurSize();
      }
    }, {
      key: "paddingX",
      set: function set(t) {
        this._paddingX = t, this._updateBlurSize();
      }
    }, {
      key: "paddingY",
      set: function set(t) {
        this._paddingY = t, this._updateBlurSize();
      }
    }, {
      key: "amount",
      set: function set(t) {
        this._amount = t, this._update();
      },
      get: function get() {
        return this._amount;
      }
    }, {
      key: "shader",
      set: function set(t) {
        _set(_getPrototypeOf(WebGLFastBlurComponent.prototype), "shader", t, this, true), this.renderToTexture || console.warn("Please enable renderToTexture to use with a shader.");
      }
    }]);

    return WebGLFastBlurComponent;
  }(Component);

  var FastBlurOutputShader =
  /*#__PURE__*/
  function (_DefaultShader3) {
    _inherits(FastBlurOutputShader, _DefaultShader3);

    function FastBlurOutputShader(t) {
      var _this72;

      _classCallCheck(this, FastBlurOutputShader);

      _this72 = _possibleConstructorReturn(this, _getPrototypeOf(FastBlurOutputShader).call(this, t)), _this72._a = 0, _this72._otherTextureSource = null;
      return _this72;
    }

    _createClass(FastBlurOutputShader, [{
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(FastBlurOutputShader.prototype), "setupUniforms", this).call(this, t), this._setUniform("a", this._a, this.gl.uniform1f), this._setUniform("uSampler2", 1, this.gl.uniform1i);
      }
    }, {
      key: "beforeDraw",
      value: function beforeDraw(t) {
        var e = this._otherTextureSource ? this._otherTextureSource.nativeTexture : null,
            i = this.gl;
        i.activeTexture(i.TEXTURE1), i.bindTexture(i.TEXTURE_2D, e), i.activeTexture(i.TEXTURE0);
      }
    }, {
      key: "a",
      get: function get() {
        return this._a;
      },
      set: function set(t) {
        this._a = t, this.redraw();
      }
    }, {
      key: "otherTextureSource",
      set: function set(t) {
        this._otherTextureSource = t, this.redraw();
      }
    }]);

    return FastBlurOutputShader;
  }(DefaultShader);

  FastBlurOutputShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform sampler2D uSampler2;\n    uniform float a;\n    void main(void){\n        if (a == 1.0) {\n            gl_FragColor = texture2D(uSampler2, vTextureCoord) * vColor;\n        } else {\n            gl_FragColor = ((1.0 - a) * texture2D(uSampler, vTextureCoord) + (a * texture2D(uSampler2, vTextureCoord))) * vColor;\n        }\n    }\n";

  var BloomBaseShader =
  /*#__PURE__*/
  function (_DefaultShader4) {
    _inherits(BloomBaseShader, _DefaultShader4);

    function BloomBaseShader() {
      _classCallCheck(this, BloomBaseShader);

      return _possibleConstructorReturn(this, _getPrototypeOf(BloomBaseShader).apply(this, arguments));
    }

    return BloomBaseShader;
  }(DefaultShader);

  BloomBaseShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    void main(void){\n        vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n        float m = max(max(color.r, color.g), color.b);\n        float c = max(0.0, (m - 0.80)) * 5.0;\n        color = color * c;\n        gl_FragColor = color;\n    }\n";

  var SmoothScaleComponent =
  /*#__PURE__*/
  function (_Component4) {
    _inherits(SmoothScaleComponent, _Component4);

    _createClass(SmoothScaleComponent, null, [{
      key: "_template",
      value: function _template() {
        return {
          ContentWrap: {
            renderOffscreen: !0,
            forceZIndexContext: !0,
            onAfterUpdate: SmoothScaleComponent._updateDimensions,
            Content: {}
          },
          Scale: {
            visible: !1
          }
        };
      }
    }]);

    function SmoothScaleComponent(t) {
      var _this73;

      _classCallCheck(this, SmoothScaleComponent);

      _this73 = _possibleConstructorReturn(this, _getPrototypeOf(SmoothScaleComponent).call(this, t)), _this73._smoothScale = 1, _this73._iterations = 0;
      return _this73;
    }

    _createClass(SmoothScaleComponent, [{
      key: "_setIterations",
      value: function _setIterations(t) {
        if (this._iterations !== t) {
          var _e131 = this.sel("Scale").childList,
              i = this.sel("ContentWrap");

          for (; _e131.length < t;) {
            var _t133 = 0 === _e131.length ? i.getTexture() : _e131.last.getTexture();

            _e131.a({
              rtt: !0,
              renderOffscreen: !0,
              texture: _t133
            });
          }

          SmoothScaleComponent._updateDimensions(this.tag("ContentWrap"), !0);

          var s = t > 0;
          this.patch({
            ContentWrap: {
              renderToTexture: s
            },
            Scale: {
              visible: s
            }
          });

          for (var _i32 = 0, _s28 = _e131.length; _i32 < _s28; _i32++) {
            _e131.getAt(_i32).patch({
              visible: _i32 < t,
              renderOffscreen: _i32 !== t - 1
            });
          }

          this._iterations = t;
        }
      }
    }, {
      key: "content",
      get: function get() {
        return this.tag("Content");
      },
      set: function set(t) {
        this.tag("Content").patch(t, !0);
      }
    }, {
      key: "smoothScale",
      get: function get() {
        return this._smoothScale;
      },
      set: function set(t) {
        if (this._smoothScale !== t) {
          var _e132 = 0;

          for (; t < .5 && _e132 < 12;) {
            _e132++, t *= 2;
          }

          this.scale = t, this._setIterations(_e132), this._smoothScale = t;
        }
      }
    }, {
      key: "_signalProxy",
      get: function get() {
        return !0;
      }
    }], [{
      key: "_updateDimensions",
      value: function _updateDimensions(t, e) {
        var i = t.children[0];
        var s = i.renderWidth,
            r = i.renderHeight;

        if (s !== t.w || r !== t.h || e) {
          t.w = s, t.h = r;
          var _e133 = t.parent.tag("Scale").children;

          for (var _t134 = 0, _i33 = _e133.length; _t134 < _i33; _t134++) {
            s *= .5, r *= .5, _e133[_t134].w = s, _e133[_t134].h = r;
          }
        }
      }
    }]);

    return SmoothScaleComponent;
  }(Component);

  var WebGLGrayscaleShader =
  /*#__PURE__*/
  function (_DefaultShader5) {
    _inherits(WebGLGrayscaleShader, _DefaultShader5);

    function WebGLGrayscaleShader(t) {
      var _this74;

      _classCallCheck(this, WebGLGrayscaleShader);

      _this74 = _possibleConstructorReturn(this, _getPrototypeOf(WebGLGrayscaleShader).call(this, t)), _this74._amount = 1;
      return _this74;
    }

    _createClass(WebGLGrayscaleShader, [{
      key: "useDefault",
      value: function useDefault() {
        return 0 === this._amount;
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(WebGLGrayscaleShader.prototype), "setupUniforms", this).call(this, t), this._setUniform("amount", this._amount, this.gl.uniform1f);
      }
    }, {
      key: "amount",
      set: function set(t) {
        this._amount = t, this.redraw();
      },
      get: function get() {
        return this._amount;
      }
    }], [{
      key: "getC2d",
      value: function getC2d() {
        return C2dGrayscaleShader;
      }
    }]);

    return WebGLGrayscaleShader;
  }(DefaultShader);

  WebGLGrayscaleShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform float amount;\n    void main(void){\n        vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n        float grayness = 0.2 * color.r + 0.6 * color.g + 0.2 * color.b;\n        gl_FragColor = vec4(amount * vec3(grayness, grayness, grayness) + (1.0 - amount) * color.rgb, color.a);\n    }\n";

  var C2dGrayscaleShader =
  /*#__PURE__*/
  function (_DefaultShader$2) {
    _inherits(C2dGrayscaleShader, _DefaultShader$2);

    function C2dGrayscaleShader(t) {
      var _this75;

      _classCallCheck(this, C2dGrayscaleShader);

      _this75 = _possibleConstructorReturn(this, _getPrototypeOf(C2dGrayscaleShader).call(this, t)), _this75._amount = 1;
      return _this75;
    }

    _createClass(C2dGrayscaleShader, [{
      key: "useDefault",
      value: function useDefault() {
        return 0 === this._amount;
      }
    }, {
      key: "_beforeDrawEl",
      value: function _beforeDrawEl(_ref9) {
        var t = _ref9.target;
        t.ctx.filter = "grayscale(" + this._amount + ")";
      }
    }, {
      key: "_afterDrawEl",
      value: function _afterDrawEl(_ref10) {
        var t = _ref10.target;
        t.ctx.filter = "none";
      }
    }, {
      key: "amount",
      set: function set(t) {
        this._amount = t, this.redraw();
      },
      get: function get() {
        return this._amount;
      }
    }], [{
      key: "getWebGL",
      value: function getWebGL() {
        return WebGLGrayscaleShader;
      }
    }]);

    return C2dGrayscaleShader;
  }(DefaultShader$1);

  var DitheringShader =
  /*#__PURE__*/
  function (_DefaultShader6) {
    _inherits(DitheringShader, _DefaultShader6);

    function DitheringShader(t) {
      var _this76;

      _classCallCheck(this, DitheringShader);

      _this76 = _possibleConstructorReturn(this, _getPrototypeOf(DitheringShader).call(this, t)), _this76._noiseTexture = new NoiseTexture(t.stage), _this76._graining = 1 / 256, _this76._random = !1;
      return _this76;
    }

    _createClass(DitheringShader, [{
      key: "setExtraAttribsInBuffer",
      value: function setExtraAttribsInBuffer(t) {
        this._noiseTexture.load();

        var e = t.extraAttribsDataByteOffset / 4,
            i = t.quads.floats,
            s = t.length;

        for (var r = 0; r < s; r++) {
          var _s29 = t.getElementWidth(r) / this._noiseTexture.getRenderWidth(),
              n = t.getElementHeight(r) / this._noiseTexture.getRenderHeight(),
              o = 0,
              a = 0;

          if (this._random) {
            if (o = Math.random(), a = Math.random(), _s29 += o, n += a, Math.random() < .5) {
              var _t135 = o;
              o = _s29, _s29 = _t135;
            }

            if (Math.random() < .5) {
              var _t136 = a;
              a = n, n = _t136;
            }
          }

          i[e] = o, i[e + 1] = a, i[e + 2] = _s29, i[e + 3] = a, i[e + 4] = _s29, i[e + 5] = n, i[e + 6] = o, i[e + 7] = n, e += 8;
        }
      }
    }, {
      key: "beforeDraw",
      value: function beforeDraw(t) {
        var e = this.gl;
        e.vertexAttribPointer(this._attrib("aNoiseTextureCoord"), 2, e.FLOAT, !1, 8, this.getVertexAttribPointerOffset(t));
        var i = this._noiseTexture.source.nativeTexture;
        e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, i), e.activeTexture(e.TEXTURE0);
      }
    }, {
      key: "getExtraAttribBytesPerVertex",
      value: function getExtraAttribBytesPerVertex() {
        return 8;
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(DitheringShader.prototype), "setupUniforms", this).call(this, t), this._setUniform("uNoiseSampler", 1, this.gl.uniform1i), this._setUniform("graining", 2 * this._graining, this.gl.uniform1f);
      }
    }, {
      key: "enableAttribs",
      value: function enableAttribs() {
        _get(_getPrototypeOf(DitheringShader.prototype), "enableAttribs", this).call(this), this.gl.enableVertexAttribArray(this._attrib("aNoiseTextureCoord"));
      }
    }, {
      key: "disableAttribs",
      value: function disableAttribs() {
        _get(_getPrototypeOf(DitheringShader.prototype), "disableAttribs", this).call(this), this.gl.disableVertexAttribArray(this._attrib("aNoiseTextureCoord"));
      }
    }, {
      key: "useDefault",
      value: function useDefault() {
        return 0 === this._graining;
      }
    }, {
      key: "afterDraw",
      value: function afterDraw(t) {
        this._random && this.redraw();
      }
    }, {
      key: "graining",
      set: function set(t) {
        this._graining = t, this.redraw();
      }
    }, {
      key: "random",
      set: function set(t) {
        this._random = t, this.redraw();
      }
    }]);

    return DitheringShader;
  }(DefaultShader);

  DitheringShader.vertexShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    attribute vec2 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    attribute vec2 aNoiseTextureCoord;\n    attribute vec4 aColor;\n    uniform vec2 projection;\n    varying vec2 vTextureCoord;\n    varying vec2 vNoiseTextureCoord;\n    varying vec4 vColor;\n    void main(void){\n        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);\n        vTextureCoord = aTextureCoord;\n        vNoiseTextureCoord = aNoiseTextureCoord;\n        vColor = aColor;\n        gl_Position.y = -sign(projection.y) * gl_Position.y;\n    }\n", DitheringShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec2 vNoiseTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform sampler2D uNoiseSampler;\n    uniform float graining;\n    void main(void){\n        vec4 noise = texture2D(uNoiseSampler, vNoiseTextureCoord);\n        vec4 color = texture2D(uSampler, vTextureCoord);\n        gl_FragColor = (color * vColor) + graining * (noise.r - 0.5);\n    }\n";

  var CircularPushShader =
  /*#__PURE__*/
  function (_DefaultShader7) {
    _inherits(CircularPushShader, _DefaultShader7);

    function CircularPushShader(t) {
      var _this77;

      _classCallCheck(this, CircularPushShader);

      _this77 = _possibleConstructorReturn(this, _getPrototypeOf(CircularPushShader).call(this, t)), _this77._inputValue = 0, _this77._maxDerivative = .01, _this77._normalizedValue = 0, _this77._offset = 0, _this77._amount = .1, _this77._aspectRatio = 1, _this77._offsetX = 0, _this77._offsetY = 0, _this77.buckets = 100;
      return _this77;
    }

    _createClass(CircularPushShader, [{
      key: "_getValues",
      value: function _getValues(t) {
        var e = [];

        for (var i = 0; i < t; i++) {
          e.push(this._inputValue);
        }

        return e;
      }
    }, {
      key: "progress",
      value: function progress(t) {
        this._offset += t * this._buckets;
        var e = Math.floor(this._offset);
        this._offset -= e, this._shiftBuckets(e), this.redraw();
      }
    }, {
      key: "_shiftBuckets",
      value: function _shiftBuckets(t) {
        for (var _e134 = this._buckets - 1; _e134 >= 0; _e134--) {
          var i = _e134 - t;
          i < 0 ? (this._normalizedValue = Math.min(this._normalizedValue + this._maxDerivative, Math.max(this._normalizedValue - this._maxDerivative, this._inputValue)), this._values[_e134] = 255 * this._normalizedValue) : this._values[_e134] = this._values[i];
        }
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(CircularPushShader.prototype), "setupUniforms", this).call(this, t), this._setUniform("aspectRatio", this._aspectRatio, this.gl.uniform1f), this._setUniform("offsetX", this._offsetX, this.gl.uniform1f), this._setUniform("offsetY", this._offsetY, this.gl.uniform1f), this._setUniform("amount", this._amount, this.gl.uniform1f), this._setUniform("offset", this._offset, this.gl.uniform1f), this._setUniform("buckets", this._buckets, this.gl.uniform1f), this._setUniform("uValueSampler", 1, this.gl.uniform1i);
      }
    }, {
      key: "useDefault",
      value: function useDefault() {
        return 0 === this._amount;
      }
    }, {
      key: "beforeDraw",
      value: function beforeDraw(t) {
        var e = this.gl;
        e.activeTexture(e.TEXTURE1), this._valuesTexture ? e.bindTexture(e.TEXTURE_2D, this._valuesTexture) : (this._valuesTexture = e.createTexture(), e.bindTexture(e.TEXTURE_2D, this._valuesTexture), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), Utils.isNode && e.pixelStorei(e.UNPACK_FLIP_BLUE_RED, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1)), e.texImage2D(e.TEXTURE_2D, 0, e.ALPHA, this._buckets, 1, 0, e.ALPHA, e.UNSIGNED_BYTE, this._values), e.activeTexture(e.TEXTURE0);
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this._valuesTexture && this.gl.deleteTexture(this._valuesTexture);
      }
    }, {
      key: "aspectRatio",
      get: function get() {
        return this._aspectRatio;
      },
      set: function set(t) {
        this._aspectRatio = t, this.redraw();
      }
    }, {
      key: "offsetX",
      get: function get() {
        return this._offsetX;
      },
      set: function set(t) {
        this._offsetX = t, this.redraw();
      }
    }, {
      key: "offsetY",
      get: function get() {
        return this._offsetY;
      },
      set: function set(t) {
        this._offsetY = t, this.redraw();
      }
    }, {
      key: "amount",
      set: function set(t) {
        this._amount = t, this.redraw();
      },
      get: function get() {
        return this._amount;
      }
    }, {
      key: "inputValue",
      set: function set(t) {
        this._inputValue = t;
      },
      get: function get() {
        return this._inputValue;
      }
    }, {
      key: "maxDerivative",
      set: function set(t) {
        this._maxDerivative = t;
      },
      get: function get() {
        return this._maxDerivative;
      }
    }, {
      key: "buckets",
      set: function set(t) {
        t > 100 && (console.warn("CircularPushShader: supports max 100 buckets"), t = 100), this._buckets = t, this._values = new Uint8Array(this._getValues(t)), this.redraw();
      },
      get: function get() {
        return this._buckets;
      }
    }, {
      key: "offset",
      set: function set(t) {
        this._offset = t, this.redraw();
      }
    }]);

    return CircularPushShader;
  }(DefaultShader);

  CircularPushShader.vertexShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    attribute vec2 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    attribute vec4 aColor;\n    uniform vec2 projection;\n    uniform float offsetX;\n    uniform float offsetY;\n    uniform float aspectRatio;\n    varying vec2 vTextureCoord;\n    varying vec2 vPos;\n    varying vec4 vColor;\n    void main(void){\n        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);\n        vTextureCoord = aTextureCoord;\n        vPos = vTextureCoord * 2.0 - 1.0;\n        vPos.y = vPos.y * aspectRatio;\n        vPos.y = vPos.y + offsetY;\n        vPos.x = vPos.x + offsetX;\n        vColor = aColor;\n        gl_Position.y = -sign(projection.y) * gl_Position.y;\n    }\n", CircularPushShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    varying vec2 vPos;\n    uniform float amount;\n    uniform float offset;\n    uniform float values[100];\n    uniform float buckets;\n    uniform sampler2D uSampler;\n    uniform sampler2D uValueSampler;\n    void main(void){\n        float l = length(vPos);\n        float m = (l * buckets * 0.678 - offset) / buckets;\n        float f = texture2D(uValueSampler, vec2(m, 0.0)).a * amount;\n        vec2 unit = vPos / l;\n        gl_FragColor = texture2D(uSampler, vTextureCoord - f * unit) * vColor;\n    }\n";

  var InversionShader =
  /*#__PURE__*/
  function (_DefaultShader8) {
    _inherits(InversionShader, _DefaultShader8);

    function InversionShader(t) {
      var _this78;

      _classCallCheck(this, InversionShader);

      _this78 = _possibleConstructorReturn(this, _getPrototypeOf(InversionShader).call(this, t)), _this78._amount = 1;
      return _this78;
    }

    _createClass(InversionShader, [{
      key: "useDefault",
      value: function useDefault() {
        return 0 === this._amount;
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(InversionShader.prototype), "setupUniforms", this).call(this, t), this._setUniform("amount", this._amount, this.gl.uniform1f);
      }
    }, {
      key: "amount",
      set: function set(t) {
        this._amount = t, this.redraw();
      },
      get: function get() {
        return this._amount;
      }
    }]);

    return InversionShader;
  }(DefaultShader);

  InversionShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform float amount;\n    void main(void){\n        vec4 color = texture2D(uSampler, vTextureCoord);\n        color.rgb = color.rgb * (1.0 - amount) + amount * (1.0 * color.a - color.rgb); \n        gl_FragColor = color * vColor;\n    }\n";

  var OutlineShader =
  /*#__PURE__*/
  function (_DefaultShader9) {
    _inherits(OutlineShader, _DefaultShader9);

    function OutlineShader(t) {
      var _this79;

      _classCallCheck(this, OutlineShader);

      _this79 = _possibleConstructorReturn(this, _getPrototypeOf(OutlineShader).call(this, t)), _this79._width = 5, _this79._col = 4294967295, _this79._color = [1, 1, 1, 1];
      return _this79;
    }

    _createClass(OutlineShader, [{
      key: "useDefault",
      value: function useDefault() {
        return 0 === this._width || 0 === this._col[3];
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(OutlineShader.prototype), "setupUniforms", this).call(this, t);

        var e = this.gl;

        this._setUniform("color", new Float32Array(this._color), e.uniform4fv);
      }
    }, {
      key: "enableAttribs",
      value: function enableAttribs() {
        _get(_getPrototypeOf(OutlineShader.prototype), "enableAttribs", this).call(this), this.gl.enableVertexAttribArray(this._attrib("aCorner"));
      }
    }, {
      key: "disableAttribs",
      value: function disableAttribs() {
        _get(_getPrototypeOf(OutlineShader.prototype), "disableAttribs", this).call(this), this.gl.disableVertexAttribArray(this._attrib("aCorner"));
      }
    }, {
      key: "setExtraAttribsInBuffer",
      value: function setExtraAttribsInBuffer(t) {
        var e = t.extraAttribsDataByteOffset / 4,
            i = t.quads.floats,
            s = t.length;

        for (var r = 0; r < s; r++) {
          var _s30 = t.getElementCore(r),
              n = this._width / _s30.w,
              o = n / (1 - 2 * n),
              a = this._width / _s30.h,
              h = a / (1 - 2 * a);

          i[e] = -o, i[e + 1] = -h, i[e + 2] = 1 + o, i[e + 3] = -h, i[e + 4] = 1 + o, i[e + 5] = 1 + h, i[e + 6] = -o, i[e + 7] = 1 + h, e += 8;
        }
      }
    }, {
      key: "beforeDraw",
      value: function beforeDraw(t) {
        var e = this.gl;
        e.vertexAttribPointer(this._attrib("aCorner"), 2, e.FLOAT, !1, 8, this.getVertexAttribPointerOffset(t));
      }
    }, {
      key: "getExtraAttribBytesPerVertex",
      value: function getExtraAttribBytesPerVertex() {
        return 8;
      }
    }, {
      key: "width",
      set: function set(t) {
        this._width = t, this.redraw();
      }
    }, {
      key: "color",
      get: function get() {
        return this._col;
      },
      set: function set(t) {
        if (this._col !== t) {
          var _e135 = StageUtils.getRgbaComponentsNormalized(t);

          _e135[0] = _e135[0] * _e135[3], _e135[1] = _e135[1] * _e135[3], _e135[2] = _e135[2] * _e135[3], this._color = _e135, this.redraw(), this._col = t;
        }
      }
    }]);

    return OutlineShader;
  }(DefaultShader);

  OutlineShader.vertexShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    attribute vec2 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    attribute vec4 aColor;\n    attribute vec2 aCorner;\n    uniform vec2 projection;\n    varying vec2 vTextureCoord;\n    varying vec2 vCorner;\n    varying vec4 vColor;\n    void main(void){\n        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);\n        vTextureCoord = aTextureCoord;\n        vCorner = aCorner;\n        vColor = aColor;\n        gl_Position.y = -sign(projection.y) * gl_Position.y;\n    }\n", OutlineShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    varying vec2 vCorner;\n    uniform vec4 color;\n    uniform sampler2D uSampler;\n    void main(void){\n        vec2 m = min(vCorner, 1.0 - vCorner);\n        float value = step(0.0, min(m.x, m.y));\n        gl_FragColor = mix(color, texture2D(uSampler, vTextureCoord) * vColor, value);\n    }\n";

  var PixelateShader =
  /*#__PURE__*/
  function (_DefaultShader10) {
    _inherits(PixelateShader, _DefaultShader10);

    function PixelateShader(t) {
      var _this80;

      _classCallCheck(this, PixelateShader);

      _this80 = _possibleConstructorReturn(this, _getPrototypeOf(PixelateShader).call(this, t)), _this80._size = new Float32Array([4, 4]);
      return _this80;
    }

    _createClass(PixelateShader, [{
      key: "useDefault",
      value: function useDefault() {
        return 0 === this._size[0] && 0 === this._size[1];
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(PixelateShader.prototype), "setupUniforms", this).call(this, t);

        var e = this.gl;

        this._setUniform("size", new Float32Array(this._size), e.uniform2fv);
      }
    }, {
      key: "getExtraAttribBytesPerVertex",
      value: function getExtraAttribBytesPerVertex() {
        return 8;
      }
    }, {
      key: "enableAttribs",
      value: function enableAttribs() {
        _get(_getPrototypeOf(PixelateShader.prototype), "enableAttribs", this).call(this), this.gl.enableVertexAttribArray(this._attrib("aTextureRes"));
      }
    }, {
      key: "disableAttribs",
      value: function disableAttribs() {
        _get(_getPrototypeOf(PixelateShader.prototype), "disableAttribs", this).call(this), this.gl.disableVertexAttribArray(this._attrib("aTextureRes"));
      }
    }, {
      key: "setExtraAttribsInBuffer",
      value: function setExtraAttribsInBuffer(t) {
        var e = t.extraAttribsDataByteOffset / 4,
            i = t.quads.floats,
            s = t.length;

        for (var r = 0; r < s; r++) {
          var _s31 = t.quads.getTextureWidth(t.index + r),
              n = t.quads.getTextureHeight(t.index + r);

          i[e] = _s31, i[e + 1] = n, i[e + 2] = _s31, i[e + 3] = n, i[e + 4] = _s31, i[e + 5] = n, i[e + 6] = _s31, i[e + 7] = n, e += 8;
        }
      }
    }, {
      key: "beforeDraw",
      value: function beforeDraw(t) {
        var e = this.gl;
        e.vertexAttribPointer(this._attrib("aTextureRes"), 2, e.FLOAT, !1, this.getExtraAttribBytesPerVertex(), this.getVertexAttribPointerOffset(t));
      }
    }, {
      key: "x",
      get: function get() {
        return this._size[0];
      },
      set: function set(t) {
        this._size[0] = t, this.redraw();
      }
    }, {
      key: "y",
      get: function get() {
        return this._size[1];
      },
      set: function set(t) {
        this._size[1] = t, this.redraw();
      }
    }, {
      key: "size",
      get: function get() {
        return this._size[0];
      },
      set: function set(t) {
        this._size[0] = t, this._size[1] = t, this.redraw();
      }
    }], [{
      key: "getWebGLImpl",
      value: function getWebGLImpl() {
        return WebGLPixelateShaderImpl;
      }
    }]);

    return PixelateShader;
  }(DefaultShader);

  PixelateShader.vertexShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    attribute vec2 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    attribute vec4 aColor;\n    attribute vec2 aTextureRes;\n    uniform vec2 projection;\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    varying vec2 vTextureRes;\n    void main(void){\n        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);\n        vTextureCoord = aTextureCoord;\n        vColor = aColor;\n        vTextureRes = aTextureRes;\n        gl_Position.y = -sign(projection.y) * gl_Position.y;\n    }\n", PixelateShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    varying vec2 vTextureRes;\n\n    uniform vec2 size;\n    uniform sampler2D uSampler;\n    \n    vec2 mapCoord( vec2 coord )\n    {\n        coord *= vTextureRes.xy;\n        return coord;\n    }\n    \n    vec2 unmapCoord( vec2 coord )\n    {\n        coord /= vTextureRes.xy;\n        return coord;\n    }\n    \n    vec2 pixelate(vec2 coord, vec2 size)\n    {\n        return floor( coord / size ) * size;\n    }\n    \n    void main(void)\n    {\n        vec2 coord = mapCoord(vTextureCoord);\n        coord = pixelate(coord, size);\n        coord = unmapCoord(coord);\n        gl_FragColor = texture2D(uSampler, coord) * vColor;\n    }\n";

  var RadialFilterShader =
  /*#__PURE__*/
  function (_DefaultShader11) {
    _inherits(RadialFilterShader, _DefaultShader11);

    function RadialFilterShader(t) {
      var _this81;

      _classCallCheck(this, RadialFilterShader);

      _this81 = _possibleConstructorReturn(this, _getPrototypeOf(RadialFilterShader).call(this, t)), _this81._radius = 0, _this81._cutoff = 1;
      return _this81;
    }

    _createClass(RadialFilterShader, [{
      key: "useDefault",
      value: function useDefault() {
        return 0 === this._radius;
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(RadialFilterShader.prototype), "setupUniforms", this).call(this, t), this._setUniform("radius", 2 * (this._radius - .5) / t.getRenderWidth(), this.gl.uniform1f), this._setUniform("cutoff", .5 * t.getRenderWidth() / this._cutoff, this.gl.uniform1f);
      }
    }, {
      key: "radius",
      set: function set(t) {
        this._radius = t, this.redraw();
      },
      get: function get() {
        return this._radius;
      }
    }, {
      key: "cutoff",
      set: function set(t) {
        this._cutoff = t, this.redraw();
      },
      get: function get() {
        return this._cutoff;
      }
    }]);

    return RadialFilterShader;
  }(DefaultShader);

  RadialFilterShader.vertexShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    attribute vec2 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    attribute vec4 aColor;\n    uniform vec2 projection;\n    varying vec2 pos;\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    void main(void){\n        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);\n        vTextureCoord = aTextureCoord;\n        vColor = aColor;\n        gl_Position.y = -sign(projection.y) * gl_Position.y;\n        pos = gl_Position.xy;\n    }\n", RadialFilterShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec2 pos;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform float radius;\n    uniform float cutoff;\n    void main(void){\n        vec4 color = texture2D(uSampler, vTextureCoord);\n        float f = max(0.0, min(1.0, 1.0 - (length(pos) - radius) * cutoff));\n        gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor * f;\n    }\n";

  var RoundedRectangleShader =
  /*#__PURE__*/
  function (_DefaultShader12) {
    _inherits(RoundedRectangleShader, _DefaultShader12);

    function RoundedRectangleShader(t) {
      var _this82;

      _classCallCheck(this, RoundedRectangleShader);

      _this82 = _possibleConstructorReturn(this, _getPrototypeOf(RoundedRectangleShader).call(this, t)), _this82._radius = 1;
      return _this82;
    }

    _createClass(RoundedRectangleShader, [{
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(RoundedRectangleShader.prototype), "setupUniforms", this).call(this, t);

        var e = t.shaderOwner,
            i = this.ctx.stage.getRenderPrecision();
        this._setUniform("radius", (this._radius + .5) * i, this.gl.uniform1f), this._setUniform("resolution", new Float32Array([e._w * i, e._h * i]), this.gl.uniform2fv);
      }
    }, {
      key: "radius",
      set: function set(t) {
        t < 1 && (t = 1), this._radius = t, this.redraw();
      }
    }]);

    return RoundedRectangleShader;
  }(DefaultShader);

  RoundedRectangleShader.vertexShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    attribute vec2 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    \n    attribute vec4 aColor;\n    uniform vec2 projection;\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    \n    void main(void){\n        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);\n        vTextureCoord = aTextureCoord;\n        vColor = aColor;\n        gl_Position.y = -sign(projection.y) * gl_Position.y;\n    }\n", RoundedRectangleShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    #define PI 3.14159265359\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform vec2 resolution;\n    uniform float radius;\n    float roundBox(vec2 p, vec2 b, float r) {\n        float d = length(max(abs(p)-b+r, 0.1))-r;\n        return smoothstep(0.0, 1.0, d);\n    }\n    void main() {\n        vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n        vec2 halfRes = 0.5 * resolution.xy;\n        float b = roundBox(vTextureCoord.xy * resolution - halfRes, halfRes, radius);\n        gl_FragColor = mix(color, vec4(0.0), b);\n    }\n";

  var RadialGradientShader =
  /*#__PURE__*/
  function (_DefaultShader13) {
    _inherits(RadialGradientShader, _DefaultShader13);

    function RadialGradientShader(t) {
      var _this83;

      _classCallCheck(this, RadialGradientShader);

      _this83 = _possibleConstructorReturn(this, _getPrototypeOf(RadialGradientShader).call(this, t)), _this83._x = 0, _this83._y = 0, _this83.color = 4294901760, _this83._radiusX = 100, _this83._radiusY = 100;
      return _this83;
    }

    _createClass(RadialGradientShader, [{
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(RadialGradientShader.prototype), "setupUniforms", this).call(this, t);

        var e = t.getNormalRenderTextureCoords(this._x, this._y);
        this._setUniform("center", new Float32Array(e), this.gl.uniform2fv), this._setUniform("radius", 2 * this._radiusX / t.getRenderWidth(), this.gl.uniform1f), this._setUniform("alpha", t.getElementCore(0).renderContext.alpha, this.gl.uniform1f), this._setUniform("color", this._rawColor, this.gl.uniform4fv), this._setUniform("aspectRatio", this._radiusX / this._radiusY * t.getRenderHeight() / t.getRenderWidth(), this.gl.uniform1f);
      }
    }, {
      key: "x",
      set: function set(t) {
        this._x = t, this.redraw();
      }
    }, {
      key: "y",
      set: function set(t) {
        this._y = t, this.redraw();
      }
    }, {
      key: "radiusX",
      set: function set(t) {
        this._radiusX = t, this.redraw();
      },
      get: function get() {
        return this._radiusX;
      }
    }, {
      key: "radiusY",
      set: function set(t) {
        this._radiusY = t, this.redraw();
      },
      get: function get() {
        return this._radiusY;
      }
    }, {
      key: "radius",
      set: function set(t) {
        this.radiusX = t, this.radiusY = t;
      }
    }, {
      key: "color",
      get: function get() {
        return this._color;
      },
      set: function set(t) {
        if (this._color !== t) {
          var _e136 = StageUtils.getRgbaComponentsNormalized(t);

          _e136[0] = _e136[0] * _e136[3], _e136[1] = _e136[1] * _e136[3], _e136[2] = _e136[2] * _e136[3], this._rawColor = new Float32Array(_e136), this.redraw(), this._color = t;
        }
      }
    }]);

    return RadialGradientShader;
  }(DefaultShader);

  RadialGradientShader.vertexShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    attribute vec2 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    attribute vec4 aColor;\n    uniform vec2 projection;\n    uniform vec2 center;\n    uniform float aspectRatio;\n    varying vec2 pos;\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    void main(void){\n        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);\n        vTextureCoord = aTextureCoord;\n        vColor = aColor;\n        gl_Position.y = -sign(projection.y) * gl_Position.y;\n        pos = gl_Position.xy - center;\n        pos.y = pos.y * aspectRatio;\n    }\n", RadialGradientShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    varying vec2 pos;\n    uniform sampler2D uSampler;\n    uniform float radius;\n    uniform vec4 color;\n    uniform float alpha;\n    void main(void){\n        float dist = length(pos);\n        gl_FragColor = mix(color * alpha, texture2D(uSampler, vTextureCoord) * vColor, min(1.0, dist / radius));\n    }\n";

  var Light3dShader =
  /*#__PURE__*/
  function (_DefaultShader14) {
    _inherits(Light3dShader, _DefaultShader14);

    function Light3dShader(t) {
      var _this84;

      _classCallCheck(this, Light3dShader);

      _this84 = _possibleConstructorReturn(this, _getPrototypeOf(Light3dShader).call(this, t)), _this84._strength = .5, _this84._ambient = .5, _this84._fudge = .4, _this84._rx = 0, _this84._ry = 0, _this84._z = 0, _this84._pivotX = NaN, _this84._pivotY = NaN, _this84._pivotZ = 0, _this84._lightY = 0, _this84._lightZ = 0;
      return _this84;
    }

    _createClass(Light3dShader, [{
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(Light3dShader.prototype), "setupUniforms", this).call(this, t);

        var e = t.shaderOwner,
            i = e.element,
            s = isNaN(this._pivotX) ? i.pivotX * e.w : this._pivotX,
            r = isNaN(this._pivotY) ? i.pivotY * e.h : this._pivotY,
            n = e.getRenderTextureCoords(s, r),
            o = -Math.atan2(e._renderContext.tc, e._renderContext.ta),
            a = this.gl;
        this._setUniform("pivot", new Float32Array([n[0], n[1], this._pivotZ]), a.uniform3fv), this._setUniform("rot", new Float32Array([this._rx, this._ry, o]), a.uniform3fv), this._setUniform("z", this._z, a.uniform1f), this._setUniform("lightY", this.lightY, a.uniform1f), this._setUniform("lightZ", this.lightZ, a.uniform1f), this._setUniform("strength", this._strength, a.uniform1f), this._setUniform("ambient", this._ambient, a.uniform1f), this._setUniform("fudge", this._fudge, a.uniform1f);
      }
    }, {
      key: "useDefault",
      value: function useDefault() {
        return 0 === this._rx && 0 === this._ry && 0 === this._z && 0 === this._strength && 1 === this._ambient;
      }
    }, {
      key: "strength",
      set: function set(t) {
        this._strength = t, this.redraw();
      },
      get: function get() {
        return this._strength;
      }
    }, {
      key: "ambient",
      set: function set(t) {
        this._ambient = t, this.redraw();
      },
      get: function get() {
        return this._ambient;
      }
    }, {
      key: "fudge",
      set: function set(t) {
        this._fudge = t, this.redraw();
      },
      get: function get() {
        return this._fudge;
      }
    }, {
      key: "rx",
      get: function get() {
        return this._rx;
      },
      set: function set(t) {
        this._rx = t, this.redraw();
      }
    }, {
      key: "ry",
      get: function get() {
        return this._ry;
      },
      set: function set(t) {
        this._ry = t, this.redraw();
      }
    }, {
      key: "z",
      get: function get() {
        return this._z;
      },
      set: function set(t) {
        this._z = t, this.redraw();
      }
    }, {
      key: "pivotX",
      get: function get() {
        return this._pivotX;
      },
      set: function set(t) {
        this._pivotX = t + 1, this.redraw();
      }
    }, {
      key: "pivotY",
      get: function get() {
        return this._pivotY;
      },
      set: function set(t) {
        this._pivotY = t + 1, this.redraw();
      }
    }, {
      key: "lightY",
      get: function get() {
        return this._lightY;
      },
      set: function set(t) {
        this._lightY = t, this.redraw();
      }
    }, {
      key: "pivotZ",
      get: function get() {
        return this._pivotZ;
      },
      set: function set(t) {
        this._pivotZ = t, this.redraw();
      }
    }, {
      key: "lightZ",
      get: function get() {
        return this._lightZ;
      },
      set: function set(t) {
        this._lightZ = t, this.redraw();
      }
    }]);

    return Light3dShader;
  }(DefaultShader);

  Light3dShader.vertexShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    attribute vec2 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    attribute vec4 aColor;\n    uniform vec2 projection;\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n\n    uniform float fudge;\n    uniform float strength;\n    uniform float ambient;\n    uniform float z;\n    uniform float lightY;\n    uniform float lightZ;\n    uniform vec3 pivot;\n    uniform vec3 rot;\n    varying vec3 pos;\n\n    void main(void) {\n        pos = vec3(aVertexPosition.xy, z);\n        \n        pos -= pivot;\n        \n        // Undo XY rotation\n        mat2 iRotXy = mat2( cos(rot.z), sin(rot.z), \n                           -sin(rot.z), cos(rot.z));\n        pos.xy = iRotXy * pos.xy;\n        \n        // Perform 3d rotations\n        gl_Position.x = cos(rot.x) * pos.x - sin(rot.x) * pos.z;\n        gl_Position.y = pos.y;\n        gl_Position.z = sin(rot.x) * pos.x + cos(rot.x) * pos.z;\n        \n        pos.x = gl_Position.x;\n        pos.y = cos(rot.y) * gl_Position.y - sin(rot.y) * gl_Position.z;\n        pos.z = sin(rot.y) * gl_Position.y + cos(rot.y) * gl_Position.z;\n        \n        // Redo XY rotation\n        iRotXy[0][1] = -iRotXy[0][1];\n        iRotXy[1][0] = -iRotXy[1][0];\n        pos.xy = iRotXy * pos.xy; \n\n        // Undo translate to pivot position\n        pos.xyz += pivot;\n\n        pos = vec3(pos.x * projection.x - 1.0, pos.y * -abs(projection.y) + 1.0, pos.z * projection.x);\n        \n        // Set depth perspective\n        float perspective = 1.0 + fudge * pos.z;\n\n        pos.z += lightZ * projection.x;\n\n        // Map coords to gl coordinate space.\n        // Set z to 0 because we don't want to perform z-clipping\n        gl_Position = vec4(pos.xy, 0.0, perspective);\n\n        // Correct light source position.\n        pos.y += lightY * abs(projection.y);\n\n        vTextureCoord = aTextureCoord;\n        vColor = aColor;\n        \n        gl_Position.y = -sign(projection.y) * gl_Position.y;\n    }\n", Light3dShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    varying vec3 pos;\n    uniform sampler2D uSampler;\n    uniform float ambient;\n    uniform float strength;\n    void main(void){\n        vec4 rgba = texture2D(uSampler, vTextureCoord);\n        float d = length(pos);\n        float n = 1.0 / max(0.1, d);\n        rgba.rgb = rgba.rgb * (strength * n + ambient);\n        gl_FragColor = rgba * vColor;\n    }\n";
  var e = {
    Application: Application,
    Component: Component,
    Base: Base,
    Utils: Utils,
    StageUtils: StageUtils,
    Element: Element,
    Tools: Tools,
    Stage: Stage,
    ElementCore: ElementCore,
    ElementTexturizer: ElementTexturizer,
    Texture: Texture,
    EventEmitter: EventEmitter,
    shaders: {
      Grayscale: WebGLGrayscaleShader,
      BoxBlur: BoxBlurShader,
      Dithering: DitheringShader,
      CircularPush: CircularPushShader,
      Inversion: InversionShader,
      LinearBlur: LinearBlurShader,
      Outline: OutlineShader,
      Pixelate: PixelateShader,
      RadialFilter: RadialFilterShader,
      RoundedRectangle: RoundedRectangleShader,
      RadialGradient: RadialGradientShader,
      Light3d: Light3dShader,
      WebGLShader: WebGLShader,
      WebGLDefaultShader: DefaultShader,
      C2dShader: C2dShader,
      C2dDefaultShader: DefaultShader$1,
      c2d: {
        Grayscale: C2dGrayscaleShader,
        Blur: BlurShader
      }
    },
    textures: {
      RectangleTexture: RectangleTexture,
      NoiseTexture: NoiseTexture,
      TextTexture: TextTexture,
      ImageTexture: ImageTexture,
      HtmlTexture: HtmlTexture,
      StaticTexture:
      /*#__PURE__*/
      function (_Texture8) {
        _inherits(StaticTexture, _Texture8);

        function StaticTexture(t, e) {
          var _this85;

          _classCallCheck(this, StaticTexture);

          _this85 = _possibleConstructorReturn(this, _getPrototypeOf(StaticTexture).call(this, t)), _this85._options = e;
          return _this85;
        }

        _createClass(StaticTexture, [{
          key: "_getIsValid",
          value: function _getIsValid() {
            return !!this._options;
          }
        }, {
          key: "_getSourceLoader",
          value: function _getSourceLoader() {
            var _this86 = this;

            return function (t) {
              t(null, _this86._options);
            };
          }
        }, {
          key: "options",
          set: function set(t) {
            this._options !== t && (this._options = t, this._changed());
          },
          get: function get() {
            return this._options;
          }
        }]);

        return StaticTexture;
      }(Texture),
      StaticCanvasTexture: StaticCanvasTexture,
      SourceTexture: SourceTexture
    },
    components: {
      FastBlurComponent:
      /*#__PURE__*/
      function (_Component5) {
        _inherits(FastBlurComponent, _Component5);

        function FastBlurComponent() {
          _classCallCheck(this, FastBlurComponent);

          return _possibleConstructorReturn(this, _getPrototypeOf(FastBlurComponent).apply(this, arguments));
        }

        _createClass(FastBlurComponent, [{
          key: "_onResize",
          value: function _onResize() {
            this.wrap.w = this.renderWidth, this.wrap.h = this.renderHeight;
          }
        }, {
          key: "_build",
          value: function _build() {
            this.patch({
              Wrap: {
                type: this.stage.gl ? WebGLFastBlurComponent : C2dFastBlurComponent
              }
            });
          }
        }, {
          key: "wrap",
          get: function get() {
            return this.tag("Wrap");
          }
        }, {
          key: "content",
          set: function set(t) {
            return this.wrap.content = t;
          },
          get: function get() {
            return this.wrap.content;
          }
        }, {
          key: "padding",
          set: function set(t) {
            this.wrap._paddingX = t, this.wrap._paddingY = t, this.wrap._updateBlurSize();
          }
        }, {
          key: "paddingX",
          set: function set(t) {
            this.wrap._paddingX = t, this.wrap._updateBlurSize();
          }
        }, {
          key: "paddingY",
          set: function set(t) {
            this.wrap._paddingY = t, this.wrap._updateBlurSize();
          }
        }, {
          key: "amount",
          set: function set(t) {
            return this.wrap.amount = t;
          },
          get: function get() {
            return this.wrap.amount;
          }
        }, {
          key: "_signalProxy",
          get: function get() {
            return !0;
          }
        }], [{
          key: "_template",
          value: function _template() {
            return {};
          }
        }]);

        return FastBlurComponent;
      }(Component),
      BloomComponent:
      /*#__PURE__*/
      function (_Component6) {
        _inherits(BloomComponent, _Component6);

        _createClass(BloomComponent, [{
          key: "_signalProxy",
          get: function get() {
            return !0;
          }
        }], [{
          key: "_template",
          value: function _template() {
            var onUpdate = function onUpdate(t, e) {
              if (130 & e._recalc) {
                var _t137 = e.w,
                    i = e.h;
                var s = e;

                do {
                  (s = s._children[0])._element.w = _t137, s._element.h = i;
                } while (s._children);
              }
            };

            return {
              Textwrap: {
                rtt: !0,
                forceZIndexContext: !0,
                renderOffscreen: !0,
                BloomBase: {
                  shader: {
                    type: BloomBaseShader
                  },
                  Content: {}
                }
              },
              Layers: {
                L0: {
                  rtt: !0,
                  onUpdate: onUpdate,
                  scale: 2,
                  pivot: 0,
                  visible: !1,
                  Content: {
                    shader: {
                      type: BoxBlurShader
                    }
                  }
                },
                L1: {
                  rtt: !0,
                  onUpdate: onUpdate,
                  scale: 4,
                  pivot: 0,
                  visible: !1,
                  Content: {
                    shader: {
                      type: BoxBlurShader
                    }
                  }
                },
                L2: {
                  rtt: !0,
                  onUpdate: onUpdate,
                  scale: 8,
                  pivot: 0,
                  visible: !1,
                  Content: {
                    shader: {
                      type: BoxBlurShader
                    }
                  }
                },
                L3: {
                  rtt: !0,
                  onUpdate: onUpdate,
                  scale: 16,
                  pivot: 0,
                  visible: !1,
                  Content: {
                    shader: {
                      type: BoxBlurShader
                    }
                  }
                }
              }
            };
          }
        }]);

        function BloomComponent(t) {
          var _this87;

          _classCallCheck(this, BloomComponent);

          _this87 = _possibleConstructorReturn(this, _getPrototypeOf(BloomComponent).call(this, t)), _this87._textwrap = _this87.sel("Textwrap"), _this87._wrapper = _this87.sel("Textwrap.Content"), _this87._layers = _this87.sel("Layers"), _this87._amount = 0, _this87._paddingX = 0, _this87._paddingY = 0;
          return _this87;
        }

        _createClass(BloomComponent, [{
          key: "_build",
          value: function _build() {
            var _this88 = this;

            var t = [{
              x: 1,
              y: 0,
              kernelRadius: 3
            }, {
              x: 0,
              y: 1,
              kernelRadius: 3
            }, {
              x: 1.5,
              y: 0,
              kernelRadius: 3
            }, {
              x: 0,
              y: 1.5,
              kernelRadius: 3
            }].map(function (t) {
              return _this88.stage.createShader(Object.assign({
                type: LinearBlurShader
              }, t));
            });
            this._setLayerTexture(this.getLayerContents(0), this._textwrap.getTexture(), []), this._setLayerTexture(this.getLayerContents(1), this.getLayer(0).getTexture(), [t[0], t[1]]), this._setLayerTexture(this.getLayerContents(2), this.getLayer(1).getTexture(), [t[0], t[1], t[2], t[3]]), this._setLayerTexture(this.getLayerContents(3), this.getLayer(2).getTexture(), [t[0], t[1], t[2], t[3]]);
          }
        }, {
          key: "_setLayerTexture",
          value: function _setLayerTexture(t, e, i) {
            if (i.length) {
              var s = i.pop(),
                  r = t.stage.c({
                rtt: !0,
                shader: s
              });
              this._setLayerTexture(r, e, i), t.childList.add(r);
            } else t.texture = e;

            return t;
          }
        }, {
          key: "getLayer",
          value: function getLayer(t) {
            return this._layers.sel("L" + t);
          }
        }, {
          key: "getLayerContents",
          value: function getLayerContents(t) {
            return this.getLayer(t).sel("Content");
          }
        }, {
          key: "_onResize",
          value: function _onResize() {
            this._updateBlurSize();
          }
        }, {
          key: "_updateBlurSize",
          value: function _updateBlurSize() {
            var t = this.renderWidth,
                e = this.renderHeight,
                i = this._paddingX,
                s = this._paddingY,
                r = t + 2 * i,
                n = e + 2 * s;
            this._textwrap.w = r, this._wrapper.x = i, this.getLayer(0).w = this.getLayerContents(0).w = r / 2, this.getLayer(1).w = this.getLayerContents(1).w = r / 4, this.getLayer(2).w = this.getLayerContents(2).w = r / 8, this.getLayer(3).w = this.getLayerContents(3).w = r / 16, this._textwrap.x = -i, this._textwrap.h = n, this._wrapper.y = s, this.getLayer(0).h = this.getLayerContents(0).h = n / 2, this.getLayer(1).h = this.getLayerContents(1).h = n / 4, this.getLayer(2).h = this.getLayerContents(2).h = n / 8, this.getLayer(3).h = this.getLayerContents(3).h = n / 16, this._textwrap.y = -s, this.w = t, this.h = e;
          }
        }, {
          key: "_update",
          value: function _update() {
            var t = Math.min(4, Math.max(0, this._amount));
            t > 0 && (this.getLayer(0).visible = t > 0, this.getLayer(1).visible = t > 1, this.getLayer(2).visible = t > 2, this.getLayer(3).visible = t > 3);
          }
        }, {
          key: "_firstActive",
          value: function _firstActive() {
            this._build();
          }
        }, {
          key: "content",
          get: function get() {
            return this.sel("Textwrap.Content");
          },
          set: function set(t) {
            this.sel("Textwrap.Content").patch(t);
          }
        }, {
          key: "padding",
          set: function set(t) {
            this._paddingX = t, this._paddingY = t, this._updateBlurSize();
          }
        }, {
          key: "paddingX",
          set: function set(t) {
            this._paddingX = t, this._updateBlurSize();
          }
        }, {
          key: "paddingY",
          set: function set(t) {
            this._paddingY = t, this._updateBlurSize();
          }
        }, {
          key: "amount",
          set: function set(t) {
            this._amount = t, this._update();
          },
          get: function get() {
            return this._amount;
          }
        }, {
          key: "shader",
          set: function set(t) {
            _set(_getPrototypeOf(BloomComponent.prototype), "shader", t, this, true), this.renderToTexture || console.warn("Please enable renderToTexture to use with a shader.");
          }
        }]);

        return BloomComponent;
      }(Component),
      SmoothScaleComponent: SmoothScaleComponent,
      BorderComponent:
      /*#__PURE__*/
      function (_Component7) {
        _inherits(BorderComponent, _Component7);

        _createClass(BorderComponent, [{
          key: "_signalProxy",
          get: function get() {
            return !0;
          }
        }], [{
          key: "_template",
          value: function _template() {
            return {
              Content: {},
              Borders: {
                Top: {
                  rect: !0,
                  visible: !1,
                  mountY: 1
                },
                Right: {
                  rect: !0,
                  visible: !1
                },
                Bottom: {
                  rect: !0,
                  visible: !1
                },
                Left: {
                  rect: !0,
                  visible: !1,
                  mountX: 1
                }
              }
            };
          }
        }]);

        function BorderComponent(t) {
          var _this89;

          _classCallCheck(this, BorderComponent);

          _this89 = _possibleConstructorReturn(this, _getPrototypeOf(BorderComponent).call(this, t)), _this89._borderTop = _this89.tag("Top"), _this89._borderRight = _this89.tag("Right"), _this89._borderBottom = _this89.tag("Bottom"), _this89._borderLeft = _this89.tag("Left"), _this89.onAfterUpdate = function (t) {
            var e = t.childList.first;
            var i = t.core.w || e.renderWidth,
                s = t.core.h || e.renderHeight;
            t._borderTop.w = i, t._borderBottom.y = s, t._borderBottom.w = i, t._borderLeft.h = s + t._borderTop.h + t._borderBottom.h, t._borderLeft.y = -t._borderTop.h, t._borderRight.x = i, t._borderRight.h = s + t._borderTop.h + t._borderBottom.h, t._borderRight.y = -t._borderTop.h;
          }, _this89.borderWidth = 1;
          return _this89;
        }

        _createClass(BorderComponent, [{
          key: "content",
          get: function get() {
            return this.sel("Content");
          },
          set: function set(t) {
            this.sel("Content").patch(t, !0);
          }
        }, {
          key: "borderWidth",
          get: function get() {
            return this.borderWidthTop;
          },
          set: function set(t) {
            this.borderWidthTop = t, this.borderWidthRight = t, this.borderWidthBottom = t, this.borderWidthLeft = t;
          }
        }, {
          key: "borderWidthTop",
          get: function get() {
            return this._borderTop.h;
          },
          set: function set(t) {
            this._borderTop.h = t, this._borderTop.visible = t > 0;
          }
        }, {
          key: "borderWidthRight",
          get: function get() {
            return this._borderRight.w;
          },
          set: function set(t) {
            this._borderRight.w = t, this._borderRight.visible = t > 0;
          }
        }, {
          key: "borderWidthBottom",
          get: function get() {
            return this._borderBottom.h;
          },
          set: function set(t) {
            this._borderBottom.h = t, this._borderBottom.visible = t > 0;
          }
        }, {
          key: "borderWidthLeft",
          get: function get() {
            return this._borderLeft.w;
          },
          set: function set(t) {
            this._borderLeft.w = t, this._borderLeft.visible = t > 0;
          }
        }, {
          key: "colorBorder",
          get: function get() {
            return this.colorBorderTop;
          },
          set: function set(t) {
            this.colorBorderTop = t, this.colorBorderRight = t, this.colorBorderBottom = t, this.colorBorderLeft = t;
          }
        }, {
          key: "colorBorderTop",
          get: function get() {
            return this._borderTop.color;
          },
          set: function set(t) {
            this._borderTop.color = t;
          }
        }, {
          key: "colorBorderRight",
          get: function get() {
            return this._borderRight.color;
          },
          set: function set(t) {
            this._borderRight.color = t;
          }
        }, {
          key: "colorBorderBottom",
          get: function get() {
            return this._borderBottom.color;
          },
          set: function set(t) {
            this._borderBottom.color = t;
          }
        }, {
          key: "colorBorderLeft",
          get: function get() {
            return this._borderLeft.color;
          },
          set: function set(t) {
            this._borderLeft.color = t;
          }
        }, {
          key: "borderTop",
          get: function get() {
            return this._borderTop;
          },
          set: function set(t) {
            this.borderTop.patch(t);
          }
        }, {
          key: "borderRight",
          get: function get() {
            return this._borderRight;
          },
          set: function set(t) {
            this.borderRight.patch(t);
          }
        }, {
          key: "borderBottom",
          get: function get() {
            return this._borderBottom;
          },
          set: function set(t) {
            this.borderBottom.patch(t);
          }
        }, {
          key: "borderLeft",
          get: function get() {
            return this._borderLeft;
          },
          set: function set(t) {
            this.borderLeft.patch(t);
          }
        }, {
          key: "borders",
          set: function set(t) {
            this.borderTop = t, this.borderLeft = t, this.borderBottom = t, this.borderRight = t;
          }
        }]);

        return BorderComponent;
      }(Component),
      ListComponent:
      /*#__PURE__*/
      function (_Component8) {
        _inherits(ListComponent, _Component8);

        function ListComponent(t) {
          var _this90;

          _classCallCheck(this, ListComponent);

          _this90 = _possibleConstructorReturn(this, _getPrototypeOf(ListComponent).call(this, t)), _this90._wrapper = _get(_getPrototypeOf(ListComponent.prototype), "_children", _assertThisInitialized(_this90)).a({}), _this90._reloadVisibleElements = !1, _this90._visibleItems = new Set(), _this90._index = 0, _this90._started = !1, _this90._scrollTransitionSettings = _this90.stage.transitions.createSettings({}), _this90._itemSize = 100, _this90._viewportScrollOffset = 0, _this90._itemScrollOffset = 0, _this90._roll = !1, _this90._rollMin = 0, _this90._rollMax = 0, _this90._progressAnimation = null, _this90._invertDirection = !1, _this90._horizontal = !0, _this90.itemList = new ListItems(_assertThisInitialized(_this90));
          return _this90;
        }

        _createClass(ListComponent, [{
          key: "_allowChildrenAccess",
          value: function _allowChildrenAccess() {
            return !1;
          }
        }, {
          key: "start",
          value: function start() {
            var _this91 = this;

            this._wrapper.transition(this.property, this._scrollTransitionSettings), this._scrollTransition = this._wrapper.transition(this.property), this._scrollTransition.on("progress", function (t) {
              return _this91.update();
            }), this.setIndex(0, !0, !0), this._started = !0, this.update();
          }
        }, {
          key: "setIndex",
          value: function setIndex(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            var s = this.length;
            if (!s) return;

            if (this.emit("unfocus", this.getElement(this.realIndex), this._index, this.realIndex), i) {
              var _e137 = Utils.getModuloIndex(t, s) - Utils.getModuloIndex(this.index, s);

              _e137 > .5 * s ? _e137 -= s : _e137 < -.5 * s && (_e137 += s), this._index += _e137;
            } else this._index = t;

            (this._roll || this.viewportSize > this._itemSize * s) && (this._index = Utils.getModuloIndex(this._index, s));
            var r = this._horizontal ^ this._invertDirection ? -1 : 1,
                n = r * this._index * this._itemSize;

            if (this._roll) {
              var _t138, _e138, _i34;

              if (1 == r) _e138 = (s - 1) * this._itemSize, _e138 -= _i34 = this._viewportScrollOffset * this.viewportSize - this._itemScrollOffset * this._itemSize, _t138 = this.viewportSize - (this._itemSize + _i34), this._rollMin && (_t138 -= this._rollMin), this._rollMax && (_e138 += this._rollMax), n = Math.max(Math.min(n, _e138), _t138);else {
                _e138 = s * this._itemSize - this.viewportSize, _e138 += _i34 = this._viewportScrollOffset * this.viewportSize - this._itemScrollOffset * this._itemSize;
                var _t139 = _i34;
                this._rollMin && (_t139 -= this._rollMin), this._rollMax && (_e138 += this._rollMax), n = Math.min(Math.max(-_e138, n), -_t139);
              }
            }

            this._scrollTransition.start(n), e && this._scrollTransition.finish(), this.emit("focus", this.getElement(this.realIndex), this._index, this.realIndex);
          }
        }, {
          key: "getAxisPosition",
          value: function getAxisPosition() {
            var t = -this._scrollTransition._targetValue,
                e = -(this._horizontal ^ this._invertDirection ? -1 : 1) * this._index * this._itemSize;
            return this._viewportScrollOffset * this.viewportSize + (e - t);
          }
        }, {
          key: "update",
          value: function update() {
            if (!this._started) return;
            var t = this.length;
            if (!t) return;
            var e,
                i,
                s,
                r,
                n = this._horizontal ^ this._invertDirection ? -1 : 1,
                o = this._horizontal ? this._wrapper.x : this._wrapper.y,
                a = this.viewportSize,
                h = this._viewportScrollOffset * a - this._itemScrollOffset * this._itemSize;
            o += h, -1 == n ? (e = Math.floor(-o / this._itemSize), s = 1 - (-o / this._itemSize - e), i = Math.floor((a - o) / this._itemSize), r = (a - o) / this._itemSize - i) : (e = Math.ceil(o / this._itemSize), s = 1 + o / this._itemSize - e, r = (i = Math.ceil((o - a) / this._itemSize)) - (o - a) / this._itemSize), (this._roll || a > this._itemSize * t) && (i >= t && (i = t - 1, r = 1), e >= t && (e = t - 1, s = 1), i <= -1 && (i = 0, r = 1), e <= -1 && (e = 0, s = 1));

            var l,
                _ = -n * e * this._itemSize;

            for (var _o6 = e; -1 == n ? _o6 <= i : _o6 >= i; -1 == n ? _o6++ : _o6--) {
              var _n9 = Utils.getModuloIndex(_o6, t),
                  _a5 = this.getElement(_n9);

              l = _a5.parent, this._visibleItems["delete"](l), this._horizontal ? l.x = _ + h : l.y = _ + h;
              var _u2 = l.visible;

              if (l.visible = !0, _u2 && !this._reloadVisibleElements || this.emit("visible", _o6, _n9), this._progressAnimation) {
                var _t140 = 1;
                _o6 == e ? _t140 = s : _o6 == i && (_t140 = r), this._progressAnimation.apply(_a5, _t140);
              }

              _ += this._itemSize;
            }

            var u = this;

            this._visibleItems.forEach(function (t) {
              t.visible = !1, u._visibleItems["delete"](t);
            });

            for (var _s32 = e; -1 == n ? _s32 <= i : _s32 >= i; -1 == n ? _s32++ : _s32--) {
              var _e139 = Utils.getModuloIndex(_s32, t);

              this._visibleItems.add(this.getWrapper(_e139));
            }

            this._reloadVisibleElements = !1;
          }
        }, {
          key: "setPrevious",
          value: function setPrevious() {
            this.setIndex(this._index - 1);
          }
        }, {
          key: "setNext",
          value: function setNext() {
            this.setIndex(this._index + 1);
          }
        }, {
          key: "getWrapper",
          value: function getWrapper(t) {
            return this._wrapper.children[t];
          }
        }, {
          key: "getElement",
          value: function getElement(t) {
            var e = this._wrapper.children[t];
            return e ? e.children[0] : null;
          }
        }, {
          key: "reload",
          value: function reload() {
            this._reloadVisibleElements = !0, this.update();
          }
        }, {
          key: "items",
          get: function get() {
            return this.itemList.get();
          },
          set: function set(t) {
            this.itemList.patch(t);
          }
        }, {
          key: "element",
          get: function get() {
            var t = this._wrapper.children[this.realIndex];
            return t ? t.children[0] : null;
          }
        }, {
          key: "length",
          get: function get() {
            return this._wrapper.children.length;
          }
        }, {
          key: "property",
          get: function get() {
            return this._horizontal ? "x" : "y";
          }
        }, {
          key: "viewportSize",
          get: function get() {
            return this._horizontal ? this.w : this.h;
          }
        }, {
          key: "index",
          get: function get() {
            return this._index;
          }
        }, {
          key: "realIndex",
          get: function get() {
            return Utils.getModuloIndex(this._index, this.length);
          }
        }, {
          key: "itemSize",
          get: function get() {
            return this._itemSize;
          },
          set: function set(t) {
            this._itemSize = t, this.update();
          }
        }, {
          key: "viewportScrollOffset",
          get: function get() {
            return this._viewportScrollOffset;
          },
          set: function set(t) {
            this._viewportScrollOffset = t, this.update();
          }
        }, {
          key: "itemScrollOffset",
          get: function get() {
            return this._itemScrollOffset;
          },
          set: function set(t) {
            this._itemScrollOffset = t, this.update();
          }
        }, {
          key: "scrollTransitionSettings",
          get: function get() {
            return this._scrollTransitionSettings;
          },
          set: function set(t) {
            this._scrollTransitionSettings.patch(t);
          }
        }, {
          key: "scrollTransition",
          set: function set(t) {
            this._scrollTransitionSettings.patch(t);
          },
          get: function get() {
            return this._scrollTransition;
          }
        }, {
          key: "progressAnimation",
          get: function get() {
            return this._progressAnimation;
          },
          set: function set(t) {
            Utils.isObjectLiteral(t) ? this._progressAnimation = this.stage.animations.createSettings(t) : this._progressAnimation = t, this.update();
          }
        }, {
          key: "roll",
          get: function get() {
            return this._roll;
          },
          set: function set(t) {
            this._roll = t, this.update();
          }
        }, {
          key: "rollMin",
          get: function get() {
            return this._rollMin;
          },
          set: function set(t) {
            this._rollMin = t, this.update();
          }
        }, {
          key: "rollMax",
          get: function get() {
            return this._rollMax;
          },
          set: function set(t) {
            this._rollMax = t, this.update();
          }
        }, {
          key: "invertDirection",
          get: function get() {
            return this._invertDirection;
          },
          set: function set(t) {
            this._started || (this._invertDirection = t);
          }
        }, {
          key: "horizontal",
          get: function get() {
            return this._horizontal;
          },
          set: function set(t) {
            t !== this._horizontal && (this._started || (this._horizontal = t));
          }
        }]);

        return ListComponent;
      }(Component)
    },
    tools: {
      ObjMerger: ObjMerger,
      ObjectListProxy: ObjectListProxy,
      ObjectListWrapper: ObjectListWrapper
    }
  };
  return Utils.isWeb && (window.lng = e), e;
});