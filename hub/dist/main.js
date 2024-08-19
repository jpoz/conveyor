(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  ));

  // hub/node_modules/apexcharts/dist/apexcharts.common.js
  var require_apexcharts_common = __commonJS({
    "hub/node_modules/apexcharts/dist/apexcharts.common.js"(exports, module) {
      "use strict";
      function t(t2, e2) {
        var i2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var a2 = Object.getOwnPropertySymbols(t2);
          e2 && (a2 = a2.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
          })), i2.push.apply(i2, a2);
        }
        return i2;
      }
      function e(e2) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var a2 = arguments[i2] != null ? arguments[i2] : {};
          i2 % 2 ? t(Object(a2), !0).forEach(function(t2) {
            o(e2, t2, a2[t2]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(a2)) : t(Object(a2)).forEach(function(t2) {
            Object.defineProperty(e2, t2, Object.getOwnPropertyDescriptor(a2, t2));
          });
        }
        return e2;
      }
      function i(t2) {
        return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        }, i(t2);
      }
      function a(t2, e2) {
        if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
      }
      function s(t2, e2) {
        for (var i2 = 0; i2 < e2.length; i2++) {
          var a2 = e2[i2];
          a2.enumerable = a2.enumerable || !1, a2.configurable = !0, "value" in a2 && (a2.writable = !0), Object.defineProperty(t2, a2.key, a2);
        }
      }
      function r(t2, e2, i2) {
        return e2 && s(t2.prototype, e2), i2 && s(t2, i2), t2;
      }
      function o(t2, e2, i2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: i2, enumerable: !0, configurable: !0, writable: !0 }) : t2[e2] = i2, t2;
      }
      function n(t2, e2) {
        if (typeof e2 != "function" && e2 !== null) throw new TypeError("Super expression must either be null or a function");
        t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: !0, configurable: !0 } }), e2 && h(t2, e2);
      }
      function l(t2) {
        return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        }, l(t2);
      }
      function h(t2, e2) {
        return h = Object.setPrototypeOf || function(t3, e3) {
          return t3.__proto__ = e3, t3;
        }, h(t2, e2);
      }
      function c(t2) {
        if (t2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      }
      function d(t2) {
        var e2 = function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }();
        return function() {
          var i2, a2 = l(t2);
          if (e2) {
            var s2 = l(this).constructor;
            i2 = Reflect.construct(a2, arguments, s2);
          } else i2 = a2.apply(this, arguments);
          return function(t3, e3) {
            if (e3 && (typeof e3 == "object" || typeof e3 == "function")) return e3;
            if (e3 !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return c(t3);
          }(this, i2);
        };
      }
      function g(t2, e2) {
        return function(t3) {
          if (Array.isArray(t3)) return t3;
        }(t2) || function(t3, e3) {
          var i2 = t3 == null ? null : typeof Symbol < "u" && t3[Symbol.iterator] || t3["@@iterator"];
          if (i2 != null) {
            var a2, s2, r2 = [], o2 = !0, n2 = !1;
            try {
              for (i2 = i2.call(t3); !(o2 = (a2 = i2.next()).done) && (r2.push(a2.value), !e3 || r2.length !== e3); o2 = !0) ;
            } catch (t4) {
              n2 = !0, s2 = t4;
            } finally {
              try {
                o2 || i2.return == null || i2.return();
              } finally {
                if (n2) throw s2;
              }
            }
            return r2;
          }
        }(t2, e2) || p(t2, e2) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function u(t2) {
        return function(t3) {
          if (Array.isArray(t3)) return f(t3);
        }(t2) || function(t3) {
          if (typeof Symbol < "u" && t3[Symbol.iterator] != null || t3["@@iterator"] != null) return Array.from(t3);
        }(t2) || p(t2) || function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function p(t2, e2) {
        if (t2) {
          if (typeof t2 == "string") return f(t2, e2);
          var i2 = Object.prototype.toString.call(t2).slice(8, -1);
          return i2 === "Object" && t2.constructor && (i2 = t2.constructor.name), i2 === "Map" || i2 === "Set" ? Array.from(t2) : i2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i2) ? f(t2, e2) : void 0;
        }
      }
      function f(t2, e2) {
        (e2 == null || e2 > t2.length) && (e2 = t2.length);
        for (var i2 = 0, a2 = new Array(e2); i2 < e2; i2++) a2[i2] = t2[i2];
        return a2;
      }
      var x = function() {
        function t2() {
          a(this, t2);
        }
        return r(t2, [{ key: "shadeRGBColor", value: function(t3, e2) {
          var i2 = e2.split(","), a2 = t3 < 0 ? 0 : 255, s2 = t3 < 0 ? -1 * t3 : t3, r2 = parseInt(i2[0].slice(4), 10), o2 = parseInt(i2[1], 10), n2 = parseInt(i2[2], 10);
          return "rgb(" + (Math.round((a2 - r2) * s2) + r2) + "," + (Math.round((a2 - o2) * s2) + o2) + "," + (Math.round((a2 - n2) * s2) + n2) + ")";
        } }, { key: "shadeHexColor", value: function(t3, e2) {
          var i2 = parseInt(e2.slice(1), 16), a2 = t3 < 0 ? 0 : 255, s2 = t3 < 0 ? -1 * t3 : t3, r2 = i2 >> 16, o2 = i2 >> 8 & 255, n2 = 255 & i2;
          return "#" + (16777216 + 65536 * (Math.round((a2 - r2) * s2) + r2) + 256 * (Math.round((a2 - o2) * s2) + o2) + (Math.round((a2 - n2) * s2) + n2)).toString(16).slice(1);
        } }, { key: "shadeColor", value: function(e2, i2) {
          return t2.isColorHex(i2) ? this.shadeHexColor(e2, i2) : this.shadeRGBColor(e2, i2);
        } }], [{ key: "bind", value: function(t3, e2) {
          return function() {
            return t3.apply(e2, arguments);
          };
        } }, { key: "isObject", value: function(t3) {
          return t3 && i(t3) === "object" && !Array.isArray(t3) && t3 != null;
        } }, { key: "is", value: function(t3, e2) {
          return Object.prototype.toString.call(e2) === "[object " + t3 + "]";
        } }, { key: "listToArray", value: function(t3) {
          var e2, i2 = [];
          for (e2 = 0; e2 < t3.length; e2++) i2[e2] = t3[e2];
          return i2;
        } }, { key: "extend", value: function(t3, e2) {
          var i2 = this;
          typeof Object.assign != "function" && (Object.assign = function(t4) {
            if (t4 == null) throw new TypeError("Cannot convert undefined or null to object");
            for (var e3 = Object(t4), i3 = 1; i3 < arguments.length; i3++) {
              var a3 = arguments[i3];
              if (a3 != null) for (var s2 in a3) a3.hasOwnProperty(s2) && (e3[s2] = a3[s2]);
            }
            return e3;
          });
          var a2 = Object.assign({}, t3);
          return this.isObject(t3) && this.isObject(e2) && Object.keys(e2).forEach(function(s2) {
            i2.isObject(e2[s2]) && s2 in t3 ? a2[s2] = i2.extend(t3[s2], e2[s2]) : Object.assign(a2, o({}, s2, e2[s2]));
          }), a2;
        } }, { key: "extendArray", value: function(e2, i2) {
          var a2 = [];
          return e2.map(function(e3) {
            a2.push(t2.extend(i2, e3));
          }), e2 = a2;
        } }, { key: "monthMod", value: function(t3) {
          return t3 % 12;
        } }, { key: "clone", value: function(e2) {
          if (t2.is("Array", e2)) {
            for (var a2 = [], s2 = 0; s2 < e2.length; s2++) a2[s2] = this.clone(e2[s2]);
            return a2;
          }
          if (t2.is("Null", e2)) return null;
          if (t2.is("Date", e2)) return e2;
          if (i(e2) === "object") {
            var r2 = {};
            for (var o2 in e2) e2.hasOwnProperty(o2) && (r2[o2] = this.clone(e2[o2]));
            return r2;
          }
          return e2;
        } }, { key: "log10", value: function(t3) {
          return Math.log(t3) / Math.LN10;
        } }, { key: "roundToBase10", value: function(t3) {
          return Math.pow(10, Math.floor(Math.log10(t3)));
        } }, { key: "roundToBase", value: function(t3, e2) {
          return Math.pow(e2, Math.floor(Math.log(t3) / Math.log(e2)));
        } }, { key: "parseNumber", value: function(t3) {
          return t3 === null ? t3 : parseFloat(t3);
        } }, { key: "stripNumber", value: function(t3) {
          var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
          return Number.isInteger(t3) ? t3 : parseFloat(t3.toPrecision(e2));
        } }, { key: "randomId", value: function() {
          return (Math.random() + 1).toString(36).substring(4);
        } }, { key: "noExponents", value: function(t3) {
          var e2 = String(t3).split(/[eE]/);
          if (e2.length === 1) return e2[0];
          var i2 = "", a2 = t3 < 0 ? "-" : "", s2 = e2[0].replace(".", ""), r2 = Number(e2[1]) + 1;
          if (r2 < 0) {
            for (i2 = a2 + "0."; r2++; ) i2 += "0";
            return i2 + s2.replace(/^-/, "");
          }
          for (r2 -= s2.length; r2--; ) i2 += "0";
          return s2 + i2;
        } }, { key: "getDimensions", value: function(t3) {
          var e2 = getComputedStyle(t3, null), i2 = t3.clientHeight, a2 = t3.clientWidth;
          return i2 -= parseFloat(e2.paddingTop) + parseFloat(e2.paddingBottom), [a2 -= parseFloat(e2.paddingLeft) + parseFloat(e2.paddingRight), i2];
        } }, { key: "getBoundingClientRect", value: function(t3) {
          var e2 = t3.getBoundingClientRect();
          return { top: e2.top, right: e2.right, bottom: e2.bottom, left: e2.left, width: t3.clientWidth, height: t3.clientHeight, x: e2.left, y: e2.top };
        } }, { key: "getLargestStringFromArr", value: function(t3) {
          return t3.reduce(function(t4, e2) {
            return Array.isArray(e2) && (e2 = e2.reduce(function(t5, e3) {
              return t5.length > e3.length ? t5 : e3;
            })), t4.length > e2.length ? t4 : e2;
          }, 0);
        } }, { key: "hexToRgba", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "#999999", e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.6;
          t3.substring(0, 1) !== "#" && (t3 = "#999999");
          var i2 = t3.replace("#", "");
          i2 = i2.match(new RegExp("(.{" + i2.length / 3 + "})", "g"));
          for (var a2 = 0; a2 < i2.length; a2++) i2[a2] = parseInt(i2[a2].length === 1 ? i2[a2] + i2[a2] : i2[a2], 16);
          return e2 !== void 0 && i2.push(e2), "rgba(" + i2.join(",") + ")";
        } }, { key: "getOpacityFromRGBA", value: function(t3) {
          return parseFloat(t3.replace(/^.*,(.+)\)/, "$1"));
        } }, { key: "rgb2hex", value: function(t3) {
          return (t3 = t3.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && t3.length === 4 ? "#" + ("0" + parseInt(t3[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[3], 10).toString(16)).slice(-2) : "";
        } }, { key: "isColorHex", value: function(t3) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t3);
        } }, { key: "getPolygonPos", value: function(t3, e2) {
          for (var i2 = [], a2 = 2 * Math.PI / e2, s2 = 0; s2 < e2; s2++) {
            var r2 = {};
            r2.x = t3 * Math.sin(s2 * a2), r2.y = -t3 * Math.cos(s2 * a2), i2.push(r2);
          }
          return i2;
        } }, { key: "polarToCartesian", value: function(t3, e2, i2, a2) {
          var s2 = (a2 - 90) * Math.PI / 180;
          return { x: t3 + i2 * Math.cos(s2), y: e2 + i2 * Math.sin(s2) };
        } }, { key: "escapeString", value: function(t3) {
          var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x", i2 = t3.toString().slice();
          return i2 = i2.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, e2);
        } }, { key: "negToZero", value: function(t3) {
          return t3 < 0 ? 0 : t3;
        } }, { key: "moveIndexInArray", value: function(t3, e2, i2) {
          if (i2 >= t3.length) for (var a2 = i2 - t3.length + 1; a2--; ) t3.push(void 0);
          return t3.splice(i2, 0, t3.splice(e2, 1)[0]), t3;
        } }, { key: "extractNumber", value: function(t3) {
          return parseFloat(t3.replace(/[^\d.]*/g, ""));
        } }, { key: "findAncestor", value: function(t3, e2) {
          for (; (t3 = t3.parentElement) && !t3.classList.contains(e2); ) ;
          return t3;
        } }, { key: "setELstyles", value: function(t3, e2) {
          for (var i2 in e2) e2.hasOwnProperty(i2) && (t3.style.key = e2[i2]);
        } }, { key: "preciseAddition", value: function(t3, e2) {
          var i2 = (String(t3).split(".")[1] || "").length, a2 = (String(e2).split(".")[1] || "").length, s2 = Math.pow(10, Math.max(i2, a2));
          return (Math.round(t3 * s2) + Math.round(e2 * s2)) / s2;
        } }, { key: "isNumber", value: function(t3) {
          return !isNaN(t3) && parseFloat(Number(t3)) === t3 && !isNaN(parseInt(t3, 10));
        } }, { key: "isFloat", value: function(t3) {
          return Number(t3) === t3 && t3 % 1 != 0;
        } }, { key: "isSafari", value: function() {
          return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        } }, { key: "isFirefox", value: function() {
          return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
        } }, { key: "isIE11", value: function() {
          if (window.navigator.userAgent.indexOf("MSIE") !== -1 || window.navigator.appVersion.indexOf("Trident/") > -1) return !0;
        } }, { key: "isIE", value: function() {
          var t3 = window.navigator.userAgent, e2 = t3.indexOf("MSIE ");
          if (e2 > 0) return parseInt(t3.substring(e2 + 5, t3.indexOf(".", e2)), 10);
          if (t3.indexOf("Trident/") > 0) {
            var i2 = t3.indexOf("rv:");
            return parseInt(t3.substring(i2 + 3, t3.indexOf(".", i2)), 10);
          }
          var a2 = t3.indexOf("Edge/");
          return a2 > 0 && parseInt(t3.substring(a2 + 5, t3.indexOf(".", a2)), 10);
        } }, { key: "getGCD", value: function(t3, e2) {
          var i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 7, a2 = Math.pow(10, i2 - Math.floor(Math.log10(Math.max(t3, e2))));
          for (t3 = Math.round(Math.abs(t3) * a2), e2 = Math.round(Math.abs(e2) * a2); e2; ) {
            var s2 = e2;
            e2 = t3 % e2, t3 = s2;
          }
          return t3 / a2;
        } }, { key: "getPrimeFactors", value: function(t3) {
          for (var e2 = [], i2 = 2; t3 >= 2; ) t3 % i2 == 0 ? (e2.push(i2), t3 /= i2) : i2++;
          return e2;
        } }, { key: "mod", value: function(t3, e2) {
          var i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 7, a2 = Math.pow(10, i2 - Math.floor(Math.log10(Math.max(t3, e2))));
          return (t3 = Math.round(Math.abs(t3) * a2)) % (e2 = Math.round(Math.abs(e2) * a2)) / a2;
        } }]), t2;
      }(), b = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.setEasingFunctions();
        }
        return r(t2, [{ key: "setEasingFunctions", value: function() {
          var t3;
          if (!this.w.globals.easing) {
            switch (this.w.config.chart.animations.easing) {
              case "linear":
                t3 = "-";
                break;
              case "easein":
                t3 = "<";
                break;
              case "easeout":
                t3 = ">";
                break;
              case "easeinout":
              default:
                t3 = "<>";
                break;
              case "swing":
                t3 = function(t4) {
                  var e2 = 1.70158;
                  return (t4 -= 1) * t4 * ((e2 + 1) * t4 + e2) + 1;
                };
                break;
              case "bounce":
                t3 = function(t4) {
                  return t4 < 1 / 2.75 ? 7.5625 * t4 * t4 : t4 < 2 / 2.75 ? 7.5625 * (t4 -= 1.5 / 2.75) * t4 + 0.75 : t4 < 2.5 / 2.75 ? 7.5625 * (t4 -= 2.25 / 2.75) * t4 + 0.9375 : 7.5625 * (t4 -= 2.625 / 2.75) * t4 + 0.984375;
                };
                break;
              case "elastic":
                t3 = function(t4) {
                  return t4 === !!t4 ? t4 : Math.pow(2, -10 * t4) * Math.sin((t4 - 0.075) * (2 * Math.PI) / 0.3) + 1;
                };
            }
            this.w.globals.easing = t3;
          }
        } }, { key: "animateLine", value: function(t3, e2, i2, a2) {
          t3.attr(e2).animate(a2).attr(i2);
        } }, { key: "animateMarker", value: function(t3, e2, i2, a2) {
          t3.attr({ opacity: 0 }).animate(e2, i2).attr({ opacity: 1 }).afterAll(function() {
            a2();
          });
        } }, { key: "animateRect", value: function(t3, e2, i2, a2, s2) {
          t3.attr(e2).animate(a2).attr(i2).afterAll(function() {
            return s2();
          });
        } }, { key: "animatePathsGradually", value: function(t3) {
          var e2 = t3.el, i2 = t3.realIndex, a2 = t3.j, s2 = t3.fill, r2 = t3.pathFrom, o2 = t3.pathTo, n2 = t3.speed, l2 = t3.delay, h2 = this.w, c2 = 0;
          h2.config.chart.animations.animateGradually.enabled && (c2 = h2.config.chart.animations.animateGradually.delay), h2.config.chart.animations.dynamicAnimation.enabled && h2.globals.dataChanged && h2.config.chart.type !== "bar" && (c2 = 0), this.morphSVG(e2, i2, a2, h2.config.chart.type !== "line" || h2.globals.comboCharts ? s2 : "stroke", r2, o2, n2, l2 * c2);
        } }, { key: "showDelayedElements", value: function() {
          this.w.globals.delayedElements.forEach(function(t3) {
            var e2 = t3.el;
            e2.classList.remove("apexcharts-element-hidden"), e2.classList.add("apexcharts-hidden-element-shown");
          });
        } }, { key: "animationCompleted", value: function(t3) {
          var e2 = this.w;
          e2.globals.animationEnded || (e2.globals.animationEnded = !0, this.showDelayedElements(), typeof e2.config.chart.events.animationEnd == "function" && e2.config.chart.events.animationEnd(this.ctx, { el: t3, w: e2 }));
        } }, { key: "morphSVG", value: function(t3, e2, i2, a2, s2, r2, o2, n2) {
          var l2 = this, h2 = this.w;
          s2 || (s2 = t3.attr("pathFrom")), r2 || (r2 = t3.attr("pathTo"));
          var c2 = function(t4) {
            return h2.config.chart.type === "radar" && (o2 = 1), "M 0 ".concat(h2.globals.gridHeight);
          };
          (!s2 || s2.indexOf("undefined") > -1 || s2.indexOf("NaN") > -1) && (s2 = c2()), (!r2 || r2.indexOf("undefined") > -1 || r2.indexOf("NaN") > -1) && (r2 = c2()), h2.globals.shouldAnimate || (o2 = 1), t3.plot(s2).animate(1, h2.globals.easing, n2).plot(s2).animate(o2, h2.globals.easing, n2).plot(r2).afterAll(function() {
            x.isNumber(i2) ? i2 === h2.globals.series[h2.globals.maxValsInArrayIndex].length - 2 && h2.globals.shouldAnimate && l2.animationCompleted(t3) : a2 !== "none" && h2.globals.shouldAnimate && (!h2.globals.comboCharts && e2 === h2.globals.series.length - 1 || h2.globals.comboCharts) && l2.animationCompleted(t3), l2.showDelayedElements();
          });
        } }]), t2;
      }(), v = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "getDefaultFilter", value: function(t3, e2) {
          var i2 = this.w;
          t3.unfilter(!0), new window.SVG.Filter().size("120%", "180%", "-5%", "-40%"), i2.config.states.normal.filter !== "none" ? this.applyFilter(t3, e2, i2.config.states.normal.filter.type, i2.config.states.normal.filter.value) : i2.config.chart.dropShadow.enabled && this.dropShadow(t3, i2.config.chart.dropShadow, e2);
        } }, { key: "addNormalFilter", value: function(t3, e2) {
          var i2 = this.w;
          i2.config.chart.dropShadow.enabled && !t3.node.classList.contains("apexcharts-marker") && this.dropShadow(t3, i2.config.chart.dropShadow, e2);
        } }, { key: "addLightenFilter", value: function(t3, e2, i2) {
          var a2 = this, s2 = this.w, r2 = i2.intensity;
          t3.unfilter(!0), new window.SVG.Filter(), t3.filter(function(t4) {
            var i3 = s2.config.chart.dropShadow;
            (i3.enabled ? a2.addShadow(t4, e2, i3) : t4).componentTransfer({ rgb: { type: "linear", slope: 1.5, intercept: r2 } });
          }), t3.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t3.filterer.node);
        } }, { key: "addDarkenFilter", value: function(t3, e2, i2) {
          var a2 = this, s2 = this.w, r2 = i2.intensity;
          t3.unfilter(!0), new window.SVG.Filter(), t3.filter(function(t4) {
            var i3 = s2.config.chart.dropShadow;
            (i3.enabled ? a2.addShadow(t4, e2, i3) : t4).componentTransfer({ rgb: { type: "linear", slope: r2 } });
          }), t3.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t3.filterer.node);
        } }, { key: "applyFilter", value: function(t3, e2, i2) {
          var a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.5;
          switch (i2) {
            case "none":
              this.addNormalFilter(t3, e2);
              break;
            case "lighten":
              this.addLightenFilter(t3, e2, { intensity: a2 });
              break;
            case "darken":
              this.addDarkenFilter(t3, e2, { intensity: a2 });
          }
        } }, { key: "addShadow", value: function(t3, e2, i2) {
          var a2, s2 = this.w, r2 = i2.blur, o2 = i2.top, n2 = i2.left, l2 = i2.color, h2 = i2.opacity;
          if (((a2 = s2.config.chart.dropShadow.enabledOnSeries) === null || a2 === void 0 ? void 0 : a2.length) > 0 && s2.config.chart.dropShadow.enabledOnSeries.indexOf(e2) === -1) return t3;
          var c2 = t3.flood(Array.isArray(l2) ? l2[e2] : l2, h2).composite(t3.sourceAlpha, "in").offset(n2, o2).gaussianBlur(r2).merge(t3.source);
          return t3.blend(t3.source, c2);
        } }, { key: "dropShadow", value: function(t3, e2) {
          var i2, a2, s2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r2 = e2.top, o2 = e2.left, n2 = e2.blur, l2 = e2.color, h2 = e2.opacity, c2 = e2.noUserSpaceOnUse, d2 = this.w;
          return t3.unfilter(!0), x.isIE() && d2.config.chart.type === "radialBar" || ((i2 = d2.config.chart.dropShadow.enabledOnSeries) === null || i2 === void 0 ? void 0 : i2.length) > 0 && ((a2 = d2.config.chart.dropShadow.enabledOnSeries) === null || a2 === void 0 ? void 0 : a2.indexOf(s2)) === -1 || (l2 = Array.isArray(l2) ? l2[s2] : l2, t3.filter(function(t4) {
            var e3 = null;
            e3 = x.isSafari() || x.isFirefox() || x.isIE() ? t4.flood(l2, h2).composite(t4.sourceAlpha, "in").offset(o2, r2).gaussianBlur(n2) : t4.flood(l2, h2).composite(t4.sourceAlpha, "in").offset(o2, r2).gaussianBlur(n2).merge(t4.source), t4.blend(t4.source, e3);
          }), c2 || t3.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t3.filterer.node)), t3;
        } }, { key: "setSelectionFilter", value: function(t3, e2, i2) {
          var a2 = this.w;
          if (a2.globals.selectedDataPoints[e2] !== void 0 && a2.globals.selectedDataPoints[e2].indexOf(i2) > -1) {
            t3.node.setAttribute("selected", !0);
            var s2 = a2.config.states.active.filter;
            s2 !== "none" && this.applyFilter(t3, e2, s2.type, s2.value);
          }
        } }, { key: "_scaleFilterSize", value: function(t3) {
          (function(e2) {
            for (var i2 in e2) e2.hasOwnProperty(i2) && t3.setAttribute(i2, e2[i2]);
          })({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
        } }]), t2;
      }(), m = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "roundPathCorners", value: function(t3, e2) {
          function i2(t4, e3, i3) {
            var s3 = e3.x - t4.x, r3 = e3.y - t4.y, o3 = Math.sqrt(s3 * s3 + r3 * r3);
            return a2(t4, e3, Math.min(1, i3 / o3));
          }
          function a2(t4, e3, i3) {
            return { x: t4.x + (e3.x - t4.x) * i3, y: t4.y + (e3.y - t4.y) * i3 };
          }
          function s2(t4, e3) {
            t4.length > 2 && (t4[t4.length - 2] = e3.x, t4[t4.length - 1] = e3.y);
          }
          function r2(t4) {
            return { x: parseFloat(t4[t4.length - 2]), y: parseFloat(t4[t4.length - 1]) };
          }
          t3.indexOf("NaN") > -1 && (t3 = "");
          var o2 = t3.split(/[,\s]/).reduce(function(t4, e3) {
            var i3 = e3.match("([a-zA-Z])(.+)");
            return i3 ? (t4.push(i3[1]), t4.push(i3[2])) : t4.push(e3), t4;
          }, []).reduce(function(t4, e3) {
            return parseFloat(e3) == e3 && t4.length ? t4[t4.length - 1].push(e3) : t4.push([e3]), t4;
          }, []), n2 = [];
          if (o2.length > 1) {
            var l2 = r2(o2[0]), h2 = null;
            o2[o2.length - 1][0] == "Z" && o2[0].length > 2 && (h2 = ["L", l2.x, l2.y], o2[o2.length - 1] = h2), n2.push(o2[0]);
            for (var c2 = 1; c2 < o2.length; c2++) {
              var d2 = n2[n2.length - 1], g2 = o2[c2], u2 = g2 == h2 ? o2[1] : o2[c2 + 1];
              if (u2 && d2 && d2.length > 2 && g2[0] == "L" && u2.length > 2 && u2[0] == "L") {
                var p2, f2, x2 = r2(d2), b2 = r2(g2), v2 = r2(u2);
                p2 = i2(b2, x2, e2), f2 = i2(b2, v2, e2), s2(g2, p2), g2.origPoint = b2, n2.push(g2);
                var m2 = a2(p2, b2, 0.5), y2 = a2(b2, f2, 0.5), w2 = ["C", m2.x, m2.y, y2.x, y2.y, f2.x, f2.y];
                w2.origPoint = b2, n2.push(w2);
              } else n2.push(g2);
            }
            if (h2) {
              var k2 = r2(n2[n2.length - 1]);
              n2.push(["Z"]), s2(n2[0], k2);
            }
          } else n2 = o2;
          return n2.reduce(function(t4, e3) {
            return t4 + e3.join(" ") + " ";
          }, "");
        } }, { key: "drawLine", value: function(t3, e2, i2, a2) {
          var s2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "#a8a8a8", r2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o2 = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, n2 = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "butt";
          return this.w.globals.dom.Paper.line().attr({ x1: t3, y1: e2, x2: i2, y2: a2, stroke: s2, "stroke-dasharray": r2, "stroke-width": o2, "stroke-linecap": n2 });
        } }, { key: "drawRect", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, r2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "#fefefe", o2 = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 1, n2 = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, l2 = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : null, h2 = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : 0, c2 = this.w.globals.dom.Paper.rect();
          return c2.attr({ x: t3, y: e2, width: i2 > 0 ? i2 : 0, height: a2 > 0 ? a2 : 0, rx: s2, ry: s2, opacity: o2, "stroke-width": n2 !== null ? n2 : 0, stroke: l2 !== null ? l2 : "none", "stroke-dasharray": h2 }), c2.node.setAttribute("fill", r2), c2;
        } }, { key: "drawPolygon", value: function(t3) {
          var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "#e1e1e1", i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "none";
          return this.w.globals.dom.Paper.polygon(t3).attr({ fill: a2, stroke: e2, "stroke-width": i2 });
        } }, { key: "drawCircle", value: function(t3) {
          var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          t3 < 0 && (t3 = 0);
          var i2 = this.w.globals.dom.Paper.circle(2 * t3);
          return e2 !== null && i2.attr(e2), i2;
        } }, { key: "drawPath", value: function(t3) {
          var e2 = t3.d, i2 = e2 === void 0 ? "" : e2, a2 = t3.stroke, s2 = a2 === void 0 ? "#a8a8a8" : a2, r2 = t3.strokeWidth, o2 = r2 === void 0 ? 1 : r2, n2 = t3.fill, l2 = t3.fillOpacity, h2 = l2 === void 0 ? 1 : l2, c2 = t3.strokeOpacity, d2 = c2 === void 0 ? 1 : c2, g2 = t3.classes, u2 = t3.strokeLinecap, p2 = u2 === void 0 ? null : u2, f2 = t3.strokeDashArray, x2 = f2 === void 0 ? 0 : f2, b2 = this.w;
          return p2 === null && (p2 = b2.config.stroke.lineCap), (i2.indexOf("undefined") > -1 || i2.indexOf("NaN") > -1) && (i2 = "M 0 ".concat(b2.globals.gridHeight)), b2.globals.dom.Paper.path(i2).attr({ fill: n2, "fill-opacity": h2, stroke: s2, "stroke-opacity": d2, "stroke-linecap": p2, "stroke-width": o2, "stroke-dasharray": x2, class: g2 });
        } }, { key: "group", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e2 = this.w.globals.dom.Paper.group();
          return t3 !== null && e2.attr(t3), e2;
        } }, { key: "move", value: function(t3, e2) {
          var i2 = ["M", t3, e2].join(" ");
          return i2;
        } }, { key: "line", value: function(t3, e2) {
          var i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a2 = null;
          return i2 === null ? a2 = [" L", t3, e2].join(" ") : i2 === "H" ? a2 = [" H", t3].join(" ") : i2 === "V" && (a2 = [" V", e2].join(" ")), a2;
        } }, { key: "curve", value: function(t3, e2, i2, a2, s2, r2) {
          var o2 = ["C", t3, e2, i2, a2, s2, r2].join(" ");
          return o2;
        } }, { key: "quadraticCurve", value: function(t3, e2, i2, a2) {
          return ["Q", t3, e2, i2, a2].join(" ");
        } }, { key: "arc", value: function(t3, e2, i2, a2, s2, r2, o2) {
          var n2 = "A";
          arguments.length > 7 && arguments[7] !== void 0 && arguments[7] && (n2 = "a");
          var l2 = [n2, t3, e2, i2, a2, s2, r2, o2].join(" ");
          return l2;
        } }, { key: "renderPaths", value: function(t3) {
          var i2, a2 = t3.j, s2 = t3.realIndex, r2 = t3.pathFrom, o2 = t3.pathTo, n2 = t3.stroke, l2 = t3.strokeWidth, h2 = t3.strokeLinecap, c2 = t3.fill, d2 = t3.animationDelay, g2 = t3.initialSpeed, u2 = t3.dataChangeSpeed, p2 = t3.className, f2 = t3.shouldClipToGrid, x2 = f2 === void 0 || f2, m2 = t3.bindEventsOnPaths, y2 = m2 === void 0 || m2, w2 = t3.drawShadow, k2 = w2 === void 0 || w2, A2 = this.w, S2 = new v(this.ctx), C2 = new b(this.ctx), L2 = this.w.config.chart.animations.enabled, P2 = L2 && this.w.config.chart.animations.dynamicAnimation.enabled, M2 = !!(L2 && !A2.globals.resized || P2 && A2.globals.dataChanged && A2.globals.shouldAnimate);
          M2 ? i2 = r2 : (i2 = o2, A2.globals.animationEnded = !0);
          var I2 = A2.config.stroke.dashArray, T2 = 0;
          T2 = Array.isArray(I2) ? I2[s2] : A2.config.stroke.dashArray;
          var z2 = this.drawPath({ d: i2, stroke: n2, strokeWidth: l2, fill: c2, fillOpacity: 1, classes: p2, strokeLinecap: h2, strokeDashArray: T2 });
          if (z2.attr("index", s2), x2 && z2.attr({ "clip-path": "url(#gridRectMask".concat(A2.globals.cuid, ")") }), A2.config.states.normal.filter.type !== "none") S2.getDefaultFilter(z2, s2);
          else if (A2.config.chart.dropShadow.enabled && k2) {
            var X2 = A2.config.chart.dropShadow;
            S2.dropShadow(z2, X2, s2);
          }
          y2 && (z2.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, z2)), z2.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, z2)), z2.node.addEventListener("mousedown", this.pathMouseDown.bind(this, z2))), z2.attr({ pathTo: o2, pathFrom: r2 });
          var E2 = { el: z2, j: a2, realIndex: s2, pathFrom: r2, pathTo: o2, fill: c2, strokeWidth: l2, delay: d2 };
          return !L2 || A2.globals.resized || A2.globals.dataChanged ? !A2.globals.resized && A2.globals.dataChanged || C2.showDelayedElements() : C2.animatePathsGradually(e(e({}, E2), {}, { speed: g2 })), A2.globals.dataChanged && P2 && M2 && C2.animatePathsGradually(e(e({}, E2), {}, { speed: u2 })), z2;
        } }, { key: "drawPattern", value: function(t3, e2, i2) {
          var a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "#a8a8a8", s2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
          return this.w.globals.dom.Paper.pattern(e2, i2, function(r2) {
            t3 === "horizontalLines" ? r2.line(0, 0, i2, 0).stroke({ color: a2, width: s2 + 1 }) : t3 === "verticalLines" ? r2.line(0, 0, 0, e2).stroke({ color: a2, width: s2 + 1 }) : t3 === "slantedLines" ? r2.line(0, 0, e2, i2).stroke({ color: a2, width: s2 }) : t3 === "squares" ? r2.rect(e2, i2).fill("none").stroke({ color: a2, width: s2 }) : t3 === "circles" && r2.circle(e2).fill("none").stroke({ color: a2, width: s2 });
          });
        } }, { key: "drawGradient", value: function(t3, e2, i2, a2, s2) {
          var r2, o2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, n2 = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, l2 = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, h2 = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0, c2 = this.w;
          e2.length < 9 && e2.indexOf("#") === 0 && (e2 = x.hexToRgba(e2, a2)), i2.length < 9 && i2.indexOf("#") === 0 && (i2 = x.hexToRgba(i2, s2));
          var d2 = 0, g2 = 1, u2 = 1, p2 = null;
          n2 !== null && (d2 = n2[0] !== void 0 ? n2[0] / 100 : 0, g2 = n2[1] !== void 0 ? n2[1] / 100 : 1, u2 = n2[2] !== void 0 ? n2[2] / 100 : 1, p2 = n2[3] !== void 0 ? n2[3] / 100 : null);
          var f2 = !(c2.config.chart.type !== "donut" && c2.config.chart.type !== "pie" && c2.config.chart.type !== "polarArea" && c2.config.chart.type !== "bubble");
          if (r2 = l2 === null || l2.length === 0 ? c2.globals.dom.Paper.gradient(f2 ? "radial" : "linear", function(t4) {
            t4.at(d2, e2, a2), t4.at(g2, i2, s2), t4.at(u2, i2, s2), p2 !== null && t4.at(p2, e2, a2);
          }) : c2.globals.dom.Paper.gradient(f2 ? "radial" : "linear", function(t4) {
            (Array.isArray(l2[h2]) ? l2[h2] : l2).forEach(function(e3) {
              t4.at(e3.offset / 100, e3.color, e3.opacity);
            });
          }), f2) {
            var b2 = c2.globals.gridWidth / 2, v2 = c2.globals.gridHeight / 2;
            c2.config.chart.type !== "bubble" ? r2.attr({ gradientUnits: "userSpaceOnUse", cx: b2, cy: v2, r: o2 }) : r2.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
          } else t3 === "vertical" ? r2.from(0, 0).to(0, 1) : t3 === "diagonal" ? r2.from(0, 0).to(1, 1) : t3 === "horizontal" ? r2.from(0, 1).to(1, 1) : t3 === "diagonal2" && r2.from(1, 0).to(0, 1);
          return r2;
        } }, { key: "getTextBasedOnMaxWidth", value: function(t3) {
          var e2 = t3.text, i2 = t3.maxWidth, a2 = t3.fontSize, s2 = t3.fontFamily, r2 = this.getTextRects(e2, a2, s2), o2 = r2.width / e2.length, n2 = Math.floor(i2 / o2);
          return i2 < r2.width ? e2.slice(0, n2 - 3) + "..." : e2;
        } }, { key: "drawText", value: function(t3) {
          var i2 = this, a2 = t3.x, s2 = t3.y, r2 = t3.text, o2 = t3.textAnchor, n2 = t3.fontSize, l2 = t3.fontFamily, h2 = t3.fontWeight, c2 = t3.foreColor, d2 = t3.opacity, g2 = t3.maxWidth, u2 = t3.cssClass, p2 = u2 === void 0 ? "" : u2, f2 = t3.isPlainText, x2 = f2 === void 0 || f2, b2 = t3.dominantBaseline, v2 = b2 === void 0 ? "auto" : b2, m2 = this.w;
          r2 === void 0 && (r2 = "");
          var y2 = r2;
          o2 || (o2 = "start"), c2 && c2.length || (c2 = m2.config.chart.foreColor), l2 = l2 || m2.config.chart.fontFamily, h2 = h2 || "regular";
          var w2, k2 = { maxWidth: g2, fontSize: n2 = n2 || "11px", fontFamily: l2 };
          return Array.isArray(r2) ? w2 = m2.globals.dom.Paper.text(function(t4) {
            for (var a3 = 0; a3 < r2.length; a3++) y2 = r2[a3], g2 && (y2 = i2.getTextBasedOnMaxWidth(e({ text: r2[a3] }, k2))), a3 === 0 ? t4.tspan(y2) : t4.tspan(y2).newLine();
          }) : (g2 && (y2 = this.getTextBasedOnMaxWidth(e({ text: r2 }, k2))), w2 = x2 ? m2.globals.dom.Paper.plain(r2) : m2.globals.dom.Paper.text(function(t4) {
            return t4.tspan(y2);
          })), w2.attr({ x: a2, y: s2, "text-anchor": o2, "dominant-baseline": v2, "font-size": n2, "font-family": l2, "font-weight": h2, fill: c2, class: "apexcharts-text " + p2 }), w2.node.style.fontFamily = l2, w2.node.style.opacity = d2, w2;
        } }, { key: "getMarkerPath", value: function(t3, e2, i2, a2) {
          var s2 = "";
          switch (i2) {
            case "cross":
              s2 = "M ".concat(t3 - (a2 /= 1.4), " ").concat(e2 - a2, " L ").concat(t3 + a2, " ").concat(e2 + a2, "  M ").concat(t3 - a2, " ").concat(e2 + a2, " L ").concat(t3 + a2, " ").concat(e2 - a2);
              break;
            case "plus":
              s2 = "M ".concat(t3 - (a2 /= 1.12), " ").concat(e2, " L ").concat(t3 + a2, " ").concat(e2, "  M ").concat(t3, " ").concat(e2 - a2, " L ").concat(t3, " ").concat(e2 + a2);
              break;
            case "star":
            case "sparkle":
              var r2 = 5;
              a2 *= 1.15, i2 === "sparkle" && (a2 /= 1.1, r2 = 4);
              for (var o2 = Math.PI / r2, n2 = 0; n2 <= 2 * r2; n2++) {
                var l2 = n2 * o2, h2 = n2 % 2 == 0 ? a2 : a2 / 2;
                s2 += (n2 === 0 ? "M" : "L") + (t3 + h2 * Math.sin(l2)) + "," + (e2 - h2 * Math.cos(l2));
              }
              s2 += "Z";
              break;
            case "triangle":
              s2 = "M ".concat(t3, " ").concat(e2 - a2, ` 
             L `).concat(t3 + a2, " ").concat(e2 + a2, ` 
             L `).concat(t3 - a2, " ").concat(e2 + a2, ` 
             Z`);
              break;
            case "square":
            case "rect":
              s2 = "M ".concat(t3 - (a2 /= 1.125), " ").concat(e2 - a2, ` 
           L `).concat(t3 + a2, " ").concat(e2 - a2, ` 
           L `).concat(t3 + a2, " ").concat(e2 + a2, ` 
           L `).concat(t3 - a2, " ").concat(e2 + a2, ` 
           Z`);
              break;
            case "diamond":
              a2 *= 1.05, s2 = "M ".concat(t3, " ").concat(e2 - a2, ` 
             L `).concat(t3 + a2, " ").concat(e2, ` 
             L `).concat(t3, " ").concat(e2 + a2, ` 
             L `).concat(t3 - a2, " ").concat(e2, ` 
            Z`);
              break;
            case "line":
              s2 = "M ".concat(t3 - (a2 /= 1.1), " ").concat(e2, ` 
           L `).concat(t3 + a2, " ").concat(e2);
              break;
            default:
              a2 *= 2, s2 = "M ".concat(t3, ", ").concat(e2, ` 
           m -`).concat(a2 / 2, `, 0 
           a `).concat(a2 / 2, ",").concat(a2 / 2, " 0 1,0 ").concat(a2, `,0 
           a `).concat(a2 / 2, ",").concat(a2 / 2, " 0 1,0 -").concat(a2, ",0");
          }
          return s2;
        } }, { key: "drawMarkerShape", value: function(t3, e2, i2, a2, s2) {
          var r2 = this.drawPath({ d: this.getMarkerPath(t3, e2, i2, a2, s2), stroke: s2.pointStrokeColor, strokeDashArray: s2.pointStrokeDashArray, strokeWidth: s2.pointStrokeWidth, fill: s2.pointFillColor, fillOpacity: s2.pointFillOpacity, strokeOpacity: s2.pointStrokeOpacity });
          return r2.attr({ cx: t3, cy: e2, shape: s2.shape, class: s2.class ? s2.class : "" }), r2;
        } }, { key: "drawMarker", value: function(t3, i2, a2) {
          t3 = t3 || 0;
          var s2 = a2.pSize || 0;
          return x.isNumber(i2) || (s2 = 0, i2 = 0), this.drawMarkerShape(t3, i2, a2?.shape, s2, e(e({}, a2), a2.shape === "line" || a2.shape === "plus" || a2.shape === "cross" ? { pointStrokeColor: a2.pointFillColor, pointStrokeOpacity: a2.pointFillOpacity } : {}));
        } }, { key: "pathMouseEnter", value: function(t3, e2) {
          var i2 = this.w, a2 = new v(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10);
          if (typeof i2.config.chart.events.dataPointMouseEnter == "function" && i2.config.chart.events.dataPointMouseEnter(e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i2 }), this.ctx.events.fireEvent("dataPointMouseEnter", [e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i2 }]), (i2.config.states.active.filter.type === "none" || t3.node.getAttribute("selected") !== "true") && i2.config.states.hover.filter.type !== "none" && !i2.globals.isTouchDevice) {
            var o2 = i2.config.states.hover.filter;
            a2.applyFilter(t3, s2, o2.type, o2.value);
          }
        } }, { key: "pathMouseLeave", value: function(t3, e2) {
          var i2 = this.w, a2 = new v(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10);
          typeof i2.config.chart.events.dataPointMouseLeave == "function" && i2.config.chart.events.dataPointMouseLeave(e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i2 }), this.ctx.events.fireEvent("dataPointMouseLeave", [e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i2 }]), i2.config.states.active.filter.type !== "none" && t3.node.getAttribute("selected") === "true" || i2.config.states.hover.filter.type !== "none" && a2.getDefaultFilter(t3, s2);
        } }, { key: "pathMouseDown", value: function(t3, e2) {
          var i2 = this.w, a2 = new v(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10), o2 = "false";
          if (t3.node.getAttribute("selected") === "true") {
            if (t3.node.setAttribute("selected", "false"), i2.globals.selectedDataPoints[s2].indexOf(r2) > -1) {
              var n2 = i2.globals.selectedDataPoints[s2].indexOf(r2);
              i2.globals.selectedDataPoints[s2].splice(n2, 1);
            }
          } else {
            if (!i2.config.states.active.allowMultipleDataPointsSelection && i2.globals.selectedDataPoints.length > 0) {
              i2.globals.selectedDataPoints = [];
              var l2 = i2.globals.dom.Paper.select(".apexcharts-series path").members, h2 = i2.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members, c2 = function(t4) {
                Array.prototype.forEach.call(t4, function(t5) {
                  t5.node.setAttribute("selected", "false"), a2.getDefaultFilter(t5, s2);
                });
              };
              c2(l2), c2(h2);
            }
            t3.node.setAttribute("selected", "true"), o2 = "true", i2.globals.selectedDataPoints[s2] === void 0 && (i2.globals.selectedDataPoints[s2] = []), i2.globals.selectedDataPoints[s2].push(r2);
          }
          if (o2 === "true") {
            var d2 = i2.config.states.active.filter;
            if (d2 !== "none") a2.applyFilter(t3, s2, d2.type, d2.value);
            else if (i2.config.states.hover.filter !== "none" && !i2.globals.isTouchDevice) {
              var g2 = i2.config.states.hover.filter;
              a2.applyFilter(t3, s2, g2.type, g2.value);
            }
          } else i2.config.states.active.filter.type !== "none" && (i2.config.states.hover.filter.type === "none" || i2.globals.isTouchDevice ? a2.getDefaultFilter(t3, s2) : (g2 = i2.config.states.hover.filter, a2.applyFilter(t3, s2, g2.type, g2.value)));
          typeof i2.config.chart.events.dataPointSelection == "function" && i2.config.chart.events.dataPointSelection(e2, this.ctx, { selectedDataPoints: i2.globals.selectedDataPoints, seriesIndex: s2, dataPointIndex: r2, w: i2 }), e2 && this.ctx.events.fireEvent("dataPointSelection", [e2, this.ctx, { selectedDataPoints: i2.globals.selectedDataPoints, seriesIndex: s2, dataPointIndex: r2, w: i2 }]);
        } }, { key: "rotateAroundCenter", value: function(t3) {
          var e2 = {};
          return t3 && typeof t3.getBBox == "function" && (e2 = t3.getBBox()), { x: e2.x + e2.width / 2, y: e2.y + e2.height / 2 };
        } }, { key: "getTextRects", value: function(t3, e2, i2, a2) {
          var s2 = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], r2 = this.w, o2 = this.drawText({ x: -200, y: -200, text: t3, textAnchor: "start", fontSize: e2, fontFamily: i2, foreColor: "#fff", opacity: 0 });
          a2 && o2.attr("transform", a2), r2.globals.dom.Paper.add(o2);
          var n2 = o2.bbox();
          return s2 || (n2 = o2.node.getBoundingClientRect()), o2.remove(), { width: n2.width, height: n2.height };
        } }, { key: "placeTextWithEllipsis", value: function(t3, e2, i2) {
          if (typeof t3.getComputedTextLength == "function" && (t3.textContent = e2, e2.length > 0 && t3.getComputedTextLength() >= i2 / 1.1)) {
            for (var a2 = e2.length - 3; a2 > 0; a2 -= 3) if (t3.getSubStringLength(0, a2) <= i2 / 1.1) return void (t3.textContent = e2.substring(0, a2) + "...");
            t3.textContent = ".";
          }
        } }], [{ key: "setAttrs", value: function(t3, e2) {
          for (var i2 in e2) e2.hasOwnProperty(i2) && t3.setAttribute(i2, e2[i2]);
        } }]), t2;
      }(), y = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "getStackedSeriesTotals", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e2 = this.w, i2 = [];
          if (e2.globals.series.length === 0) return i2;
          for (var a2 = 0; a2 < e2.globals.series[e2.globals.maxValsInArrayIndex].length; a2++) {
            for (var s2 = 0, r2 = 0; r2 < e2.globals.series.length; r2++) e2.globals.series[r2][a2] !== void 0 && t3.indexOf(r2) === -1 && (s2 += e2.globals.series[r2][a2]);
            i2.push(s2);
          }
          return i2;
        } }, { key: "getSeriesTotalByIndex", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
          return t3 === null ? this.w.config.series.reduce(function(t4, e2) {
            return t4 + e2;
          }, 0) : this.w.globals.series[t3].reduce(function(t4, e2) {
            return t4 + e2;
          }, 0);
        } }, { key: "getStackedSeriesTotalsByGroups", value: function() {
          var t3 = this, e2 = this.w, i2 = [];
          return e2.globals.seriesGroups.forEach(function(a2) {
            var s2 = [];
            e2.config.series.forEach(function(t4, i3) {
              a2.indexOf(e2.globals.seriesNames[i3]) > -1 && s2.push(i3);
            });
            var r2 = e2.globals.series.map(function(t4, e3) {
              return s2.indexOf(e3) === -1 ? e3 : -1;
            }).filter(function(t4) {
              return t4 !== -1;
            });
            i2.push(t3.getStackedSeriesTotals(r2));
          }), i2;
        } }, { key: "setSeriesYAxisMappings", value: function() {
          var t3 = this.w.globals, e2 = this.w.config, i2 = [], a2 = [], s2 = [], r2 = t3.series.length > e2.yaxis.length || e2.yaxis.some(function(t4) {
            return Array.isArray(t4.seriesName);
          });
          e2.series.forEach(function(t4, e3) {
            s2.push(e3), a2.push(null);
          }), e2.yaxis.forEach(function(t4, e3) {
            i2[e3] = [];
          });
          var o2 = [];
          e2.yaxis.forEach(function(t4, a3) {
            var n3 = !1;
            if (t4.seriesName) {
              var l3 = [];
              Array.isArray(t4.seriesName) ? l3 = t4.seriesName : l3.push(t4.seriesName), l3.forEach(function(t5) {
                e2.series.forEach(function(e3, o3) {
                  if (e3.name === t5) {
                    var l4 = o3;
                    a3 === o3 || r2 ? !r2 || s2.indexOf(o3) > -1 ? i2[a3].push([a3, o3]) : console.warn("Series '" + e3.name + "' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes.") : (i2[o3].push([o3, a3]), l4 = a3), n3 = !0, (l4 = s2.indexOf(l4)) !== -1 && s2.splice(l4, 1);
                  }
                });
              });
            }
            n3 || o2.push(a3);
          }), i2 = i2.map(function(t4, e3) {
            var i3 = [];
            return t4.forEach(function(t5) {
              a2[t5[1]] = t5[0], i3.push(t5[1]);
            }), i3;
          });
          for (var n2 = e2.yaxis.length - 1, l2 = 0; l2 < o2.length && (n2 = o2[l2], i2[n2] = [], s2); l2++) {
            var h2 = s2[0];
            s2.shift(), i2[n2].push(h2), a2[h2] = n2;
          }
          s2.forEach(function(t4) {
            i2[n2].push(t4), a2[t4] = n2;
          }), t3.seriesYAxisMap = i2.map(function(t4) {
            return t4;
          }), t3.seriesYAxisReverseMap = a2.map(function(t4) {
            return t4;
          }), t3.seriesYAxisMap.forEach(function(t4, i3) {
            t4.forEach(function(t5) {
              e2.series[t5] && e2.series[t5].group === void 0 && (e2.series[t5].group = "apexcharts-axis-".concat(i3.toString()));
            });
          });
        } }, { key: "isSeriesNull", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
          return (t3 === null ? this.w.config.series.filter(function(t4) {
            return t4 !== null;
          }) : this.w.config.series[t3].data.filter(function(t4) {
            return t4 !== null;
          })).length === 0;
        } }, { key: "seriesHaveSameValues", value: function(t3) {
          return this.w.globals.series[t3].every(function(t4, e2, i2) {
            return t4 === i2[0];
          });
        } }, { key: "getCategoryLabels", value: function(t3) {
          var e2 = this.w, i2 = t3.slice();
          return e2.config.xaxis.convertedCatToNumeric && (i2 = t3.map(function(t4, i3) {
            return e2.config.xaxis.labels.formatter(t4 - e2.globals.minX + 1);
          })), i2;
        } }, { key: "getLargestSeries", value: function() {
          var t3 = this.w;
          t3.globals.maxValsInArrayIndex = t3.globals.series.map(function(t4) {
            return t4.length;
          }).indexOf(Math.max.apply(Math, t3.globals.series.map(function(t4) {
            return t4.length;
          })));
        } }, { key: "getLargestMarkerSize", value: function() {
          var t3 = this.w, e2 = 0;
          return t3.globals.markers.size.forEach(function(t4) {
            e2 = Math.max(e2, t4);
          }), t3.config.markers.discrete && t3.config.markers.discrete.length && t3.config.markers.discrete.forEach(function(t4) {
            e2 = Math.max(e2, t4.size);
          }), e2 > 0 && (e2 += t3.config.markers.hover.sizeOffset + 1), t3.globals.markers.largestSize = e2, e2;
        } }, { key: "getSeriesTotals", value: function() {
          var t3 = this.w;
          t3.globals.seriesTotals = t3.globals.series.map(function(t4, e2) {
            var i2 = 0;
            if (Array.isArray(t4)) for (var a2 = 0; a2 < t4.length; a2++) i2 += t4[a2];
            else i2 += t4;
            return i2;
          });
        } }, { key: "getSeriesTotalsXRange", value: function(t3, e2) {
          var i2 = this.w;
          return i2.globals.series.map(function(a2, s2) {
            for (var r2 = 0, o2 = 0; o2 < a2.length; o2++) i2.globals.seriesX[s2][o2] > t3 && i2.globals.seriesX[s2][o2] < e2 && (r2 += a2[o2]);
            return r2;
          });
        } }, { key: "getPercentSeries", value: function() {
          var t3 = this.w;
          t3.globals.seriesPercent = t3.globals.series.map(function(e2, i2) {
            var a2 = [];
            if (Array.isArray(e2)) for (var s2 = 0; s2 < e2.length; s2++) {
              var r2 = t3.globals.stackedSeriesTotals[s2], o2 = 0;
              r2 && (o2 = 100 * e2[s2] / r2), a2.push(o2);
            }
            else {
              var n2 = 100 * e2 / t3.globals.seriesTotals.reduce(function(t4, e3) {
                return t4 + e3;
              }, 0);
              a2.push(n2);
            }
            return a2;
          });
        } }, { key: "getCalculatedRatios", value: function() {
          var t3, e2, i2, a2 = this, s2 = this.w, r2 = s2.globals, o2 = [], n2 = 0, l2 = [], h2 = 0.1, c2 = 0;
          if (r2.yRange = [], r2.isMultipleYAxis) for (var d2 = 0; d2 < r2.minYArr.length; d2++) r2.yRange.push(Math.abs(r2.minYArr[d2] - r2.maxYArr[d2])), l2.push(0);
          else r2.yRange.push(Math.abs(r2.minY - r2.maxY));
          r2.xRange = Math.abs(r2.maxX - r2.minX), r2.zRange = Math.abs(r2.maxZ - r2.minZ);
          for (var g2 = 0; g2 < r2.yRange.length; g2++) o2.push(r2.yRange[g2] / r2.gridHeight);
          if (e2 = r2.xRange / r2.gridWidth, t3 = r2.yRange / r2.gridWidth, i2 = r2.xRange / r2.gridHeight, (n2 = r2.zRange / r2.gridHeight * 16) || (n2 = 1), r2.minY !== Number.MIN_VALUE && Math.abs(r2.minY) !== 0 && (r2.hasNegs = !0), s2.globals.seriesYAxisReverseMap.length > 0) {
            var u2 = function(t4, e3) {
              var i3 = s2.config.yaxis[s2.globals.seriesYAxisReverseMap[e3]], r3 = t4 < 0 ? -1 : 1;
              return t4 = Math.abs(t4), i3.logarithmic && (t4 = a2.getBaseLog(i3.logBase, t4)), -r3 * t4 / o2[e3];
            };
            if (r2.isMultipleYAxis) {
              l2 = [];
              for (var p2 = 0; p2 < o2.length; p2++) l2.push(u2(r2.minYArr[p2], p2));
            } else (l2 = []).push(u2(r2.minY, 0)), r2.minY !== Number.MIN_VALUE && Math.abs(r2.minY) !== 0 && (h2 = -r2.minY / t3, c2 = r2.minX / e2);
          } else (l2 = []).push(0), h2 = 0, c2 = 0;
          return { yRatio: o2, invertedYRatio: t3, zRatio: n2, xRatio: e2, invertedXRatio: i2, baseLineInvertedY: h2, baseLineY: l2, baseLineX: c2 };
        } }, { key: "getLogSeries", value: function(t3) {
          var e2 = this, i2 = this.w;
          return i2.globals.seriesLog = t3.map(function(t4, a2) {
            var s2 = i2.globals.seriesYAxisReverseMap[a2];
            return i2.config.yaxis[s2] && i2.config.yaxis[s2].logarithmic ? t4.map(function(t5) {
              return t5 === null ? null : e2.getLogVal(i2.config.yaxis[s2].logBase, t5, a2);
            }) : t4;
          }), i2.globals.invalidLogScale ? t3 : i2.globals.seriesLog;
        } }, { key: "getBaseLog", value: function(t3, e2) {
          return Math.log(e2) / Math.log(t3);
        } }, { key: "getLogVal", value: function(t3, e2, i2) {
          if (e2 <= 0) return 0;
          var a2 = this.w, s2 = a2.globals.minYArr[i2] === 0 ? -1 : this.getBaseLog(t3, a2.globals.minYArr[i2]), r2 = (a2.globals.maxYArr[i2] === 0 ? 0 : this.getBaseLog(t3, a2.globals.maxYArr[i2])) - s2;
          return e2 < 1 ? e2 / r2 : (this.getBaseLog(t3, e2) - s2) / r2;
        } }, { key: "getLogYRatios", value: function(t3) {
          var e2 = this, i2 = this.w, a2 = this.w.globals;
          return a2.yLogRatio = t3.slice(), a2.logYRange = a2.yRange.map(function(t4, s2) {
            var r2 = i2.globals.seriesYAxisReverseMap[s2];
            if (i2.config.yaxis[r2] && e2.w.config.yaxis[r2].logarithmic) {
              var o2, n2 = -Number.MAX_VALUE, l2 = Number.MIN_VALUE;
              return a2.seriesLog.forEach(function(t5, e3) {
                t5.forEach(function(t6) {
                  i2.config.yaxis[e3] && i2.config.yaxis[e3].logarithmic && (n2 = Math.max(t6, n2), l2 = Math.min(t6, l2));
                });
              }), o2 = Math.pow(a2.yRange[s2], Math.abs(l2 - n2) / a2.yRange[s2]), a2.yLogRatio[s2] = o2 / a2.gridHeight, o2;
            }
          }), a2.invalidLogScale ? t3.slice() : a2.yLogRatio;
        } }, { key: "drawSeriesByGroup", value: function(t3, e2, i2, a2) {
          var s2 = this.w, r2 = [];
          return t3.series.length > 0 && e2.forEach(function(e3) {
            var o2 = [], n2 = [];
            t3.i.forEach(function(i3, a3) {
              s2.config.series[i3].group === e3 && (o2.push(t3.series[a3]), n2.push(i3));
            }), o2.length > 0 && r2.push(a2.draw(o2, i2, n2));
          }), r2;
        } }], [{ key: "checkComboSeries", value: function(t3, e2) {
          var i2 = !1, a2 = 0, s2 = 0;
          return e2 === void 0 && (e2 = "line"), t3.length && t3[0].type !== void 0 && t3.forEach(function(t4) {
            t4.type !== "bar" && t4.type !== "column" && t4.type !== "candlestick" && t4.type !== "boxPlot" || a2++, t4.type !== void 0 && t4.type !== e2 && s2++;
          }), s2 > 0 && (i2 = !0), { comboBarCount: a2, comboCharts: i2 };
        } }, { key: "extendArrayProps", value: function(t3, e2, i2) {
          var a2, s2, r2, o2, n2, l2;
          return (a2 = e2) !== null && a2 !== void 0 && a2.yaxis && (e2 = t3.extendYAxis(e2, i2)), (s2 = e2) !== null && s2 !== void 0 && s2.annotations && (e2.annotations.yaxis && (e2 = t3.extendYAxisAnnotations(e2)), (r2 = e2) !== null && r2 !== void 0 && (o2 = r2.annotations) !== null && o2 !== void 0 && o2.xaxis && (e2 = t3.extendXAxisAnnotations(e2)), (n2 = e2) !== null && n2 !== void 0 && (l2 = n2.annotations) !== null && l2 !== void 0 && l2.points && (e2 = t3.extendPointAnnotations(e2))), e2;
        } }]), t2;
      }(), w = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.annoCtx = e2;
        }
        return r(t2, [{ key: "setOrientations", value: function(t3) {
          var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i2 = this.w;
          if (t3.label.orientation === "vertical") {
            var a2 = e2 !== null ? e2 : 0, s2 = i2.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a2, "']"));
            if (s2 !== null) {
              var r2 = s2.getBoundingClientRect();
              s2.setAttribute("x", parseFloat(s2.getAttribute("x")) - r2.height + 4), t3.label.position === "top" ? s2.setAttribute("y", parseFloat(s2.getAttribute("y")) + r2.width) : s2.setAttribute("y", parseFloat(s2.getAttribute("y")) - r2.width);
              var o2 = this.annoCtx.graphics.rotateAroundCenter(s2), n2 = o2.x, l2 = o2.y;
              s2.setAttribute("transform", "rotate(-90 ".concat(n2, " ").concat(l2, ")"));
            }
          }
        } }, { key: "addBackgroundToAnno", value: function(t3, e2) {
          var i2 = this.w;
          if (!t3 || e2.label.text === void 0 || e2.label.text !== void 0 && !String(e2.label.text).trim()) return null;
          var a2 = i2.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), s2 = t3.getBoundingClientRect(), r2 = e2.label.style.padding.left, o2 = e2.label.style.padding.right, n2 = e2.label.style.padding.top, l2 = e2.label.style.padding.bottom;
          e2.label.orientation === "vertical" && (n2 = e2.label.style.padding.left, l2 = e2.label.style.padding.right, r2 = e2.label.style.padding.top, o2 = e2.label.style.padding.bottom);
          var h2 = s2.left - a2.left - r2, c2 = s2.top - a2.top - n2, d2 = this.annoCtx.graphics.drawRect(h2 - i2.globals.barPadForNumericAxis, c2, s2.width + r2 + o2, s2.height + n2 + l2, e2.label.borderRadius, e2.label.style.background, 1, e2.label.borderWidth, e2.label.borderColor, 0);
          return e2.id && d2.node.classList.add(e2.id), d2;
        } }, { key: "annotationsBackground", value: function() {
          var t3 = this, e2 = this.w, i2 = function(i3, a2, s2) {
            var r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations .apexcharts-").concat(s2, "-annotation-label[rel='").concat(a2, "']"));
            if (r2) {
              var o2 = r2.parentNode, n2 = t3.addBackgroundToAnno(r2, i3);
              n2 && (o2.insertBefore(n2.node, r2), i3.label.mouseEnter && n2.node.addEventListener("mouseenter", i3.label.mouseEnter.bind(t3, i3)), i3.label.mouseLeave && n2.node.addEventListener("mouseleave", i3.label.mouseLeave.bind(t3, i3)), i3.label.click && n2.node.addEventListener("click", i3.label.click.bind(t3, i3)));
            }
          };
          e2.config.annotations.xaxis.map(function(t4, e3) {
            i2(t4, e3, "xaxis");
          }), e2.config.annotations.yaxis.map(function(t4, e3) {
            i2(t4, e3, "yaxis");
          }), e2.config.annotations.points.map(function(t4, e3) {
            i2(t4, e3, "point");
          });
        } }, { key: "getY1Y2", value: function(t3, e2) {
          var i2, a2 = t3 === "y1" ? e2.y : e2.y2, s2 = !1, r2 = this.w;
          if (this.annoCtx.invertAxis) {
            var o2 = r2.globals.labels;
            r2.config.xaxis.convertedCatToNumeric && (o2 = r2.globals.categoryLabels);
            var n2 = o2.indexOf(a2), l2 = r2.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (n2 + 1) + ")");
            i2 = l2 ? parseFloat(l2.getAttribute("y")) : (r2.globals.gridHeight / o2.length - 1) * (n2 + 1) - r2.globals.barHeight, e2.seriesIndex !== void 0 && r2.globals.barHeight && (i2 = i2 - r2.globals.barHeight / 2 * (r2.globals.series.length - 1) + r2.globals.barHeight * e2.seriesIndex);
          } else {
            var h2, c2 = r2.globals.seriesYAxisMap[e2.yAxisIndex][0];
            r2.config.yaxis[e2.yAxisIndex].logarithmic ? h2 = (a2 = new y(this.annoCtx.ctx).getLogVal(r2.config.yaxis[e2.yAxisIndex].logBase, a2, c2)) / r2.globals.yLogRatio[c2] : h2 = (a2 - r2.globals.minYArr[c2]) / (r2.globals.yRange[c2] / r2.globals.gridHeight), h2 > r2.globals.gridHeight ? (h2 = r2.globals.gridHeight, s2 = !0) : h2 < 0 && (h2 = 0, s2 = !0), i2 = r2.globals.gridHeight - h2, !e2.marker || e2.y !== void 0 && e2.y !== null || (i2 = 0), r2.config.yaxis[e2.yAxisIndex] && r2.config.yaxis[e2.yAxisIndex].reversed && (i2 = h2);
          }
          return typeof a2 == "string" && a2.indexOf("px") > -1 && (i2 = parseFloat(a2)), { yP: i2, clipped: s2 };
        } }, { key: "getX1X2", value: function(t3, e2) {
          var i2, a2 = t3 === "x1" ? e2.x : e2.x2, s2 = this.w, r2 = this.annoCtx.invertAxis ? s2.globals.minY : s2.globals.minX, o2 = this.annoCtx.invertAxis ? s2.globals.maxY : s2.globals.maxX, n2 = this.annoCtx.invertAxis ? s2.globals.yRange[0] : s2.globals.xRange, l2 = !1;
          return i2 = this.annoCtx.inversedReversedAxis ? (o2 - a2) / (n2 / s2.globals.gridWidth) : (a2 - r2) / (n2 / s2.globals.gridWidth), s2.config.xaxis.type !== "category" && !s2.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || s2.globals.dataFormatXNumeric || s2.config.chart.sparkline.enabled || (i2 = this.getStringX(a2)), typeof a2 == "string" && a2.indexOf("px") > -1 && (i2 = parseFloat(a2)), a2 == null && e2.marker && (i2 = s2.globals.gridWidth), e2.seriesIndex !== void 0 && s2.globals.barWidth && !this.annoCtx.invertAxis && (i2 = i2 - s2.globals.barWidth / 2 * (s2.globals.series.length - 1) + s2.globals.barWidth * e2.seriesIndex), i2 > s2.globals.gridWidth ? (i2 = s2.globals.gridWidth, l2 = !0) : i2 < 0 && (i2 = 0, l2 = !0), { x: i2, clipped: l2 };
        } }, { key: "getStringX", value: function(t3) {
          var e2 = this.w, i2 = t3;
          e2.config.xaxis.convertedCatToNumeric && e2.globals.categoryLabels.length && (t3 = e2.globals.categoryLabels.indexOf(t3) + 1);
          var a2 = e2.globals.labels.indexOf(t3), s2 = e2.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (a2 + 1) + ")");
          return s2 && (i2 = parseFloat(s2.getAttribute("x"))), i2;
        } }]), t2;
      }(), k = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.annoCtx = e2, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new w(this.annoCtx);
        }
        return r(t2, [{ key: "addXaxisAnnotation", value: function(t3, e2, i2) {
          var a2, s2 = this.w, r2 = this.helpers.getX1X2("x1", t3), o2 = r2.x, n2 = r2.clipped, l2 = !0, h2 = t3.label.text, c2 = t3.strokeDashArray;
          if (x.isNumber(o2)) {
            if (t3.x2 === null || t3.x2 === void 0) {
              if (!n2) {
                var d2 = this.annoCtx.graphics.drawLine(o2 + t3.offsetX, 0 + t3.offsetY, o2 + t3.offsetX, s2.globals.gridHeight + t3.offsetY, t3.borderColor, c2, t3.borderWidth);
                e2.appendChild(d2.node), t3.id && d2.node.classList.add(t3.id);
              }
            } else {
              var g2 = this.helpers.getX1X2("x2", t3);
              if (a2 = g2.x, l2 = g2.clipped, !n2 || !l2) {
                if (a2 < o2) {
                  var u2 = o2;
                  o2 = a2, a2 = u2;
                }
                var p2 = this.annoCtx.graphics.drawRect(o2 + t3.offsetX, 0 + t3.offsetY, a2 - o2, s2.globals.gridHeight + t3.offsetY, 0, t3.fillColor, t3.opacity, 1, t3.borderColor, c2);
                p2.node.classList.add("apexcharts-annotation-rect"), p2.attr("clip-path", "url(#gridRectMask".concat(s2.globals.cuid, ")")), e2.appendChild(p2.node), t3.id && p2.node.classList.add(t3.id);
              }
            }
            if (!n2 || !l2) {
              var f2 = this.annoCtx.graphics.getTextRects(h2, parseFloat(t3.label.style.fontSize)), b2 = t3.label.position === "top" ? 4 : t3.label.position === "center" ? s2.globals.gridHeight / 2 + (t3.label.orientation === "vertical" ? f2.width / 2 : 0) : s2.globals.gridHeight, v2 = this.annoCtx.graphics.drawText({ x: o2 + t3.label.offsetX, y: b2 + t3.label.offsetY - (t3.label.orientation === "vertical" ? t3.label.position === "top" ? f2.width / 2 - 12 : -f2.width / 2 : 0), text: h2, textAnchor: t3.label.textAnchor, fontSize: t3.label.style.fontSize, fontFamily: t3.label.style.fontFamily, fontWeight: t3.label.style.fontWeight, foreColor: t3.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "") });
              v2.attr({ rel: i2 }), e2.appendChild(v2.node), this.annoCtx.helpers.setOrientations(t3, i2);
            }
          }
        } }, { key: "drawXAxisAnnotations", value: function() {
          var t3 = this, e2 = this.w, i2 = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
          return e2.config.annotations.xaxis.map(function(e3, a2) {
            t3.addXaxisAnnotation(e3, i2.node, a2);
          }), i2;
        } }]), t2;
      }(), A = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        }
        return r(t2, [{ key: "isValidDate", value: function(t3) {
          return typeof t3 != "number" && !isNaN(this.parseDate(t3));
        } }, { key: "getTimeStamp", value: function(t3) {
          return Date.parse(t3) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t3).toISOString().substr(0, 25)).getTime() : new Date(t3).getTime() : t3;
        } }, { key: "getDate", value: function(t3) {
          return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t3).toUTCString()) : new Date(t3);
        } }, { key: "parseDate", value: function(t3) {
          var e2 = Date.parse(t3);
          if (!isNaN(e2)) return this.getTimeStamp(t3);
          var i2 = Date.parse(t3.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
          return i2 = this.getTimeStamp(i2);
        } }, { key: "parseDateWithTimezone", value: function(t3) {
          return Date.parse(t3.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
        } }, { key: "formatDate", value: function(t3, e2) {
          var i2 = this.w.globals.locale, a2 = this.w.config.xaxis.labels.datetimeUTC, s2 = ["\0"].concat(u(i2.months)), r2 = [""].concat(u(i2.shortMonths)), o2 = [""].concat(u(i2.days)), n2 = [""].concat(u(i2.shortDays));
          function l2(t4, e3) {
            var i3 = t4 + "";
            for (e3 = e3 || 2; i3.length < e3; ) i3 = "0" + i3;
            return i3;
          }
          var h2 = a2 ? t3.getUTCFullYear() : t3.getFullYear();
          e2 = (e2 = (e2 = e2.replace(/(^|[^\\])yyyy+/g, "$1" + h2)).replace(/(^|[^\\])yy/g, "$1" + h2.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h2);
          var c2 = (a2 ? t3.getUTCMonth() : t3.getMonth()) + 1;
          e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])MMMM+/g, "$1" + s2[0])).replace(/(^|[^\\])MMM/g, "$1" + r2[0])).replace(/(^|[^\\])MM/g, "$1" + l2(c2))).replace(/(^|[^\\])M/g, "$1" + c2);
          var d2 = a2 ? t3.getUTCDate() : t3.getDate();
          e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])dddd+/g, "$1" + o2[0])).replace(/(^|[^\\])ddd/g, "$1" + n2[0])).replace(/(^|[^\\])dd/g, "$1" + l2(d2))).replace(/(^|[^\\])d/g, "$1" + d2);
          var g2 = a2 ? t3.getUTCHours() : t3.getHours(), p2 = g2 > 12 ? g2 - 12 : g2 === 0 ? 12 : g2;
          e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])HH+/g, "$1" + l2(g2))).replace(/(^|[^\\])H/g, "$1" + g2)).replace(/(^|[^\\])hh+/g, "$1" + l2(p2))).replace(/(^|[^\\])h/g, "$1" + p2);
          var f2 = a2 ? t3.getUTCMinutes() : t3.getMinutes();
          e2 = (e2 = e2.replace(/(^|[^\\])mm+/g, "$1" + l2(f2))).replace(/(^|[^\\])m/g, "$1" + f2);
          var x2 = a2 ? t3.getUTCSeconds() : t3.getSeconds();
          e2 = (e2 = e2.replace(/(^|[^\\])ss+/g, "$1" + l2(x2))).replace(/(^|[^\\])s/g, "$1" + x2);
          var b2 = a2 ? t3.getUTCMilliseconds() : t3.getMilliseconds();
          e2 = e2.replace(/(^|[^\\])fff+/g, "$1" + l2(b2, 3)), b2 = Math.round(b2 / 10), e2 = e2.replace(/(^|[^\\])ff/g, "$1" + l2(b2)), b2 = Math.round(b2 / 10);
          var v2 = g2 < 12 ? "AM" : "PM";
          e2 = (e2 = (e2 = e2.replace(/(^|[^\\])f/g, "$1" + b2)).replace(/(^|[^\\])TT+/g, "$1" + v2)).replace(/(^|[^\\])T/g, "$1" + v2.charAt(0));
          var m2 = v2.toLowerCase();
          e2 = (e2 = e2.replace(/(^|[^\\])tt+/g, "$1" + m2)).replace(/(^|[^\\])t/g, "$1" + m2.charAt(0));
          var y2 = -t3.getTimezoneOffset(), w2 = a2 || !y2 ? "Z" : y2 > 0 ? "+" : "-";
          if (!a2) {
            var k2 = (y2 = Math.abs(y2)) % 60;
            w2 += l2(Math.floor(y2 / 60)) + ":" + l2(k2);
          }
          e2 = e2.replace(/(^|[^\\])K/g, "$1" + w2);
          var A2 = (a2 ? t3.getUTCDay() : t3.getDay()) + 1;
          return e2 = (e2 = (e2 = (e2 = (e2 = e2.replace(new RegExp(o2[0], "g"), o2[A2])).replace(new RegExp(n2[0], "g"), n2[A2])).replace(new RegExp(s2[0], "g"), s2[c2])).replace(new RegExp(r2[0], "g"), r2[c2])).replace(/\\(.)/g, "$1");
        } }, { key: "getTimeUnitsfromTimestamp", value: function(t3, e2, i2) {
          var a2 = this.w;
          a2.config.xaxis.min !== void 0 && (t3 = a2.config.xaxis.min), a2.config.xaxis.max !== void 0 && (e2 = a2.config.xaxis.max);
          var s2 = this.getDate(t3), r2 = this.getDate(e2), o2 = this.formatDate(s2, "yyyy MM dd HH mm ss fff").split(" "), n2 = this.formatDate(r2, "yyyy MM dd HH mm ss fff").split(" ");
          return { minMillisecond: parseInt(o2[6], 10), maxMillisecond: parseInt(n2[6], 10), minSecond: parseInt(o2[5], 10), maxSecond: parseInt(n2[5], 10), minMinute: parseInt(o2[4], 10), maxMinute: parseInt(n2[4], 10), minHour: parseInt(o2[3], 10), maxHour: parseInt(n2[3], 10), minDate: parseInt(o2[2], 10), maxDate: parseInt(n2[2], 10), minMonth: parseInt(o2[1], 10) - 1, maxMonth: parseInt(n2[1], 10) - 1, minYear: parseInt(o2[0], 10), maxYear: parseInt(n2[0], 10) };
        } }, { key: "isLeapYear", value: function(t3) {
          return t3 % 4 == 0 && t3 % 100 != 0 || t3 % 400 == 0;
        } }, { key: "calculcateLastDaysOfMonth", value: function(t3, e2, i2) {
          return this.determineDaysOfMonths(t3, e2) - i2;
        } }, { key: "determineDaysOfYear", value: function(t3) {
          var e2 = 365;
          return this.isLeapYear(t3) && (e2 = 366), e2;
        } }, { key: "determineRemainingDaysOfYear", value: function(t3, e2, i2) {
          var a2 = this.daysCntOfYear[e2] + i2;
          return e2 > 1 && this.isLeapYear() && a2++, a2;
        } }, { key: "determineDaysOfMonths", value: function(t3, e2) {
          var i2 = 30;
          switch (t3 = x.monthMod(t3), !0) {
            case this.months30.indexOf(t3) > -1:
              t3 === 2 && (i2 = this.isLeapYear(e2) ? 29 : 28);
              break;
            case this.months31.indexOf(t3) > -1:
            default:
              i2 = 31;
          }
          return i2;
        } }]), t2;
      }(), S = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.tooltipKeyFormat = "dd MMM";
        }
        return r(t2, [{ key: "xLabelFormat", value: function(t3, e2, i2, a2) {
          var s2 = this.w;
          if (s2.config.xaxis.type === "datetime" && s2.config.xaxis.labels.formatter === void 0 && s2.config.tooltip.x.formatter === void 0) {
            var r2 = new A(this.ctx);
            return r2.formatDate(r2.getDate(e2), s2.config.tooltip.x.format);
          }
          return t3(e2, i2, a2);
        } }, { key: "defaultGeneralFormatter", value: function(t3) {
          return Array.isArray(t3) ? t3.map(function(t4) {
            return t4;
          }) : t3;
        } }, { key: "defaultYFormatter", value: function(t3, e2, i2) {
          var a2 = this.w;
          if (x.isNumber(t3)) if (a2.globals.yValueDecimal !== 0) t3 = t3.toFixed(e2.decimalsInFloat !== void 0 ? e2.decimalsInFloat : a2.globals.yValueDecimal);
          else {
            var s2 = t3.toFixed(0);
            t3 = t3 == s2 ? s2 : t3.toFixed(1);
          }
          return t3;
        } }, { key: "setLabelFormatters", value: function() {
          var t3 = this, e2 = this.w;
          return e2.globals.xaxisTooltipFormatter = function(e3) {
            return t3.defaultGeneralFormatter(e3);
          }, e2.globals.ttKeyFormatter = function(e3) {
            return t3.defaultGeneralFormatter(e3);
          }, e2.globals.ttZFormatter = function(t4) {
            return t4;
          }, e2.globals.legendFormatter = function(e3) {
            return t3.defaultGeneralFormatter(e3);
          }, e2.config.xaxis.labels.formatter !== void 0 ? e2.globals.xLabelFormatter = e2.config.xaxis.labels.formatter : e2.globals.xLabelFormatter = function(t4) {
            if (x.isNumber(t4)) {
              if (!e2.config.xaxis.convertedCatToNumeric && e2.config.xaxis.type === "numeric") {
                if (x.isNumber(e2.config.xaxis.decimalsInFloat)) return t4.toFixed(e2.config.xaxis.decimalsInFloat);
                var i2 = e2.globals.maxX - e2.globals.minX;
                return i2 > 0 && i2 < 100 ? t4.toFixed(1) : t4.toFixed(0);
              }
              return e2.globals.isBarHorizontal && e2.globals.maxY - e2.globals.minYArr < 4 ? t4.toFixed(1) : t4.toFixed(0);
            }
            return t4;
          }, typeof e2.config.tooltip.x.formatter == "function" ? e2.globals.ttKeyFormatter = e2.config.tooltip.x.formatter : e2.globals.ttKeyFormatter = e2.globals.xLabelFormatter, typeof e2.config.xaxis.tooltip.formatter == "function" && (e2.globals.xaxisTooltipFormatter = e2.config.xaxis.tooltip.formatter), (Array.isArray(e2.config.tooltip.y) || e2.config.tooltip.y.formatter !== void 0) && (e2.globals.ttVal = e2.config.tooltip.y), e2.config.tooltip.z.formatter !== void 0 && (e2.globals.ttZFormatter = e2.config.tooltip.z.formatter), e2.config.legend.formatter !== void 0 && (e2.globals.legendFormatter = e2.config.legend.formatter), e2.config.yaxis.forEach(function(i2, a2) {
            i2.labels.formatter !== void 0 ? e2.globals.yLabelFormatters[a2] = i2.labels.formatter : e2.globals.yLabelFormatters[a2] = function(s2) {
              return e2.globals.xyCharts ? Array.isArray(s2) ? s2.map(function(e3) {
                return t3.defaultYFormatter(e3, i2, a2);
              }) : t3.defaultYFormatter(s2, i2, a2) : s2;
            };
          }), e2.globals;
        } }, { key: "heatmapLabelFormatters", value: function() {
          var t3 = this.w;
          if (t3.config.chart.type === "heatmap") {
            t3.globals.yAxisScale[0].result = t3.globals.seriesNames.slice();
            var e2 = t3.globals.seriesNames.reduce(function(t4, e3) {
              return t4.length > e3.length ? t4 : e3;
            }, 0);
            t3.globals.yAxisScale[0].niceMax = e2, t3.globals.yAxisScale[0].niceMin = e2;
          }
        } }]), t2;
      }(), C = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "getLabel", value: function(t3, e2, i2, a2) {
          var s2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], r2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "12px", o2 = !(arguments.length > 6 && arguments[6] !== void 0) || arguments[6], n2 = this.w, l2 = t3[a2] === void 0 ? "" : t3[a2], h2 = l2, c2 = n2.globals.xLabelFormatter, d2 = n2.config.xaxis.labels.formatter, g2 = !1, u2 = new S(this.ctx), p2 = l2;
          o2 && (h2 = u2.xLabelFormat(c2, l2, p2, { i: a2, dateFormatter: new A(this.ctx).formatDate, w: n2 }), d2 !== void 0 && (h2 = d2(l2, t3[a2], { i: a2, dateFormatter: new A(this.ctx).formatDate, w: n2 })));
          var f2, x2;
          e2.length > 0 ? (f2 = e2[a2].unit, x2 = null, e2.forEach(function(t4) {
            t4.unit === "month" ? x2 = "year" : t4.unit === "day" ? x2 = "month" : t4.unit === "hour" ? x2 = "day" : t4.unit === "minute" && (x2 = "hour");
          }), g2 = x2 === f2, i2 = e2[a2].position, h2 = e2[a2].value) : n2.config.xaxis.type === "datetime" && d2 === void 0 && (h2 = ""), h2 === void 0 && (h2 = ""), h2 = Array.isArray(h2) ? h2 : h2.toString();
          var b2 = new m(this.ctx), v2 = {};
          v2 = n2.globals.rotateXLabels && o2 ? b2.getTextRects(h2, parseInt(r2, 10), null, "rotate(".concat(n2.config.xaxis.labels.rotate, " 0 0)"), !1) : b2.getTextRects(h2, parseInt(r2, 10));
          var y2 = !n2.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
          return !Array.isArray(h2) && (String(h2) === "NaN" || s2.indexOf(h2) >= 0 && y2) && (h2 = ""), { x: i2, text: h2, textRect: v2, isBold: g2 };
        } }, { key: "checkLabelBasedOnTickamount", value: function(t3, e2, i2) {
          var a2 = this.w, s2 = a2.config.xaxis.tickAmount;
          return s2 === "dataPoints" && (s2 = Math.round(a2.globals.gridWidth / 120)), s2 > i2 || t3 % Math.round(i2 / (s2 + 1)) == 0 || (e2.text = ""), e2;
        } }, { key: "checkForOverflowingLabels", value: function(t3, e2, i2, a2, s2) {
          var r2 = this.w;
          if (t3 === 0 && r2.globals.skipFirstTimelinelabel && (e2.text = ""), t3 === i2 - 1 && r2.globals.skipLastTimelinelabel && (e2.text = ""), r2.config.xaxis.labels.hideOverlappingLabels && a2.length > 0) {
            var o2 = s2[s2.length - 1];
            e2.x < o2.textRect.width / (r2.globals.rotateXLabels ? Math.abs(r2.config.xaxis.labels.rotate) / 12 : 1.01) + o2.x && (e2.text = "");
          }
          return e2;
        } }, { key: "checkForReversedLabels", value: function(t3, e2) {
          var i2 = this.w;
          return i2.config.yaxis[t3] && i2.config.yaxis[t3].reversed && e2.reverse(), e2;
        } }, { key: "yAxisAllSeriesCollapsed", value: function(t3) {
          var e2 = this.w.globals;
          return !e2.seriesYAxisMap[t3].some(function(t4) {
            return e2.collapsedSeriesIndices.indexOf(t4) === -1;
          });
        } }, { key: "translateYAxisIndex", value: function(t3) {
          var e2 = this.w, i2 = e2.globals, a2 = e2.config.yaxis;
          return i2.series.length > a2.length || a2.some(function(t4) {
            return Array.isArray(t4.seriesName);
          }) ? t3 : i2.seriesYAxisReverseMap[t3];
        } }, { key: "isYAxisHidden", value: function(t3) {
          var e2 = this.w, i2 = e2.config.yaxis[t3];
          if (!i2.show || this.yAxisAllSeriesCollapsed(t3)) return !0;
          if (!i2.showForNullSeries) {
            var a2 = e2.globals.seriesYAxisMap[t3], s2 = new y(this.ctx);
            return a2.every(function(t4) {
              return s2.isSeriesNull(t4);
            });
          }
          return !1;
        } }, { key: "getYAxisForeColor", value: function(t3, e2) {
          var i2 = this.w;
          return Array.isArray(t3) && i2.globals.yAxisScale[e2] && this.ctx.theme.pushExtraColors(t3, i2.globals.yAxisScale[e2].result.length, !1), t3;
        } }, { key: "drawYAxisTicks", value: function(t3, e2, i2, a2, s2, r2, o2) {
          var n2 = this.w, l2 = new m(this.ctx), h2 = n2.globals.translateY + n2.config.yaxis[s2].labels.offsetY;
          if (n2.globals.isBarHorizontal ? h2 = 0 : n2.config.chart.type === "heatmap" && (h2 += r2 / 2), a2.show && e2 > 0) {
            n2.config.yaxis[s2].opposite === !0 && (t3 += a2.width);
            for (var c2 = e2; c2 >= 0; c2--) {
              var d2 = l2.drawLine(t3 + i2.offsetX - a2.width + a2.offsetX, h2 + a2.offsetY, t3 + i2.offsetX + a2.offsetX, h2 + a2.offsetY, a2.color);
              o2.add(d2), h2 += r2;
            }
          }
        } }]), t2;
      }(), L = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.annoCtx = e2, this.helpers = new w(this.annoCtx), this.axesUtils = new C(this.annoCtx);
        }
        return r(t2, [{ key: "addYaxisAnnotation", value: function(t3, e2, i2) {
          var a2, s2 = this.w, r2 = t3.strokeDashArray, o2 = this.helpers.getY1Y2("y1", t3), n2 = o2.yP, l2 = o2.clipped, h2 = !0, c2 = !1, d2 = t3.label.text;
          if (t3.y2 === null || t3.y2 === void 0) {
            if (!l2) {
              c2 = !0;
              var g2 = this.annoCtx.graphics.drawLine(0 + t3.offsetX, n2 + t3.offsetY, this._getYAxisAnnotationWidth(t3), n2 + t3.offsetY, t3.borderColor, r2, t3.borderWidth);
              e2.appendChild(g2.node), t3.id && g2.node.classList.add(t3.id);
            }
          } else {
            if (a2 = (o2 = this.helpers.getY1Y2("y2", t3)).yP, h2 = o2.clipped, a2 > n2) {
              var u2 = n2;
              n2 = a2, a2 = u2;
            }
            if (!l2 || !h2) {
              c2 = !0;
              var p2 = this.annoCtx.graphics.drawRect(0 + t3.offsetX, a2 + t3.offsetY, this._getYAxisAnnotationWidth(t3), n2 - a2, 0, t3.fillColor, t3.opacity, 1, t3.borderColor, r2);
              p2.node.classList.add("apexcharts-annotation-rect"), p2.attr("clip-path", "url(#gridRectMask".concat(s2.globals.cuid, ")")), e2.appendChild(p2.node), t3.id && p2.node.classList.add(t3.id);
            }
          }
          if (c2) {
            var f2 = t3.label.position === "right" ? s2.globals.gridWidth : t3.label.position === "center" ? s2.globals.gridWidth / 2 : 0, x2 = this.annoCtx.graphics.drawText({ x: f2 + t3.label.offsetX, y: (a2 ?? n2) + t3.label.offsetY - 3, text: d2, textAnchor: t3.label.textAnchor, fontSize: t3.label.style.fontSize, fontFamily: t3.label.style.fontFamily, fontWeight: t3.label.style.fontWeight, foreColor: t3.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "") });
            x2.attr({ rel: i2 }), e2.appendChild(x2.node);
          }
        } }, { key: "_getYAxisAnnotationWidth", value: function(t3) {
          var e2 = this.w;
          return e2.globals.gridWidth, (t3.width.indexOf("%") > -1 ? e2.globals.gridWidth * parseInt(t3.width, 10) / 100 : parseInt(t3.width, 10)) + t3.offsetX;
        } }, { key: "drawYAxisAnnotations", value: function() {
          var t3 = this, e2 = this.w, i2 = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
          return e2.config.annotations.yaxis.forEach(function(e3, a2) {
            e3.yAxisIndex = t3.axesUtils.translateYAxisIndex(e3.yAxisIndex), t3.axesUtils.isYAxisHidden(e3.yAxisIndex) && t3.axesUtils.yAxisAllSeriesCollapsed(e3.yAxisIndex) || t3.addYaxisAnnotation(e3, i2.node, a2);
          }), i2;
        } }]), t2;
      }(), P = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.annoCtx = e2, this.helpers = new w(this.annoCtx);
        }
        return r(t2, [{ key: "addPointAnnotation", value: function(t3, e2, i2) {
          if (!(this.w.globals.collapsedSeriesIndices.indexOf(t3.seriesIndex) > -1)) {
            var a2 = this.helpers.getX1X2("x1", t3), s2 = a2.x, r2 = a2.clipped, o2 = (a2 = this.helpers.getY1Y2("y1", t3)).yP, n2 = a2.clipped;
            if (x.isNumber(s2) && !n2 && !r2) {
              var l2 = { pSize: t3.marker.size, pointStrokeWidth: t3.marker.strokeWidth, pointFillColor: t3.marker.fillColor, pointStrokeColor: t3.marker.strokeColor, shape: t3.marker.shape, pRadius: t3.marker.radius, class: "apexcharts-point-annotation-marker ".concat(t3.marker.cssClass, " ").concat(t3.id ? t3.id : "") }, h2 = this.annoCtx.graphics.drawMarker(s2 + t3.marker.offsetX, o2 + t3.marker.offsetY, l2);
              e2.appendChild(h2.node);
              var c2 = t3.label.text ? t3.label.text : "", d2 = this.annoCtx.graphics.drawText({ x: s2 + t3.label.offsetX, y: o2 + t3.label.offsetY - t3.marker.size - parseFloat(t3.label.style.fontSize) / 1.6, text: c2, textAnchor: t3.label.textAnchor, fontSize: t3.label.style.fontSize, fontFamily: t3.label.style.fontFamily, fontWeight: t3.label.style.fontWeight, foreColor: t3.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "") });
              if (d2.attr({ rel: i2 }), e2.appendChild(d2.node), t3.customSVG.SVG) {
                var g2 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + t3.customSVG.cssClass });
                g2.attr({ transform: "translate(".concat(s2 + t3.customSVG.offsetX, ", ").concat(o2 + t3.customSVG.offsetY, ")") }), g2.node.innerHTML = t3.customSVG.SVG, e2.appendChild(g2.node);
              }
              if (t3.image.path) {
                var u2 = t3.image.width ? t3.image.width : 20, p2 = t3.image.height ? t3.image.height : 20;
                h2 = this.annoCtx.addImage({ x: s2 + t3.image.offsetX - u2 / 2, y: o2 + t3.image.offsetY - p2 / 2, width: u2, height: p2, path: t3.image.path, appendTo: ".apexcharts-point-annotations" });
              }
              t3.mouseEnter && h2.node.addEventListener("mouseenter", t3.mouseEnter.bind(this, t3)), t3.mouseLeave && h2.node.addEventListener("mouseleave", t3.mouseLeave.bind(this, t3)), t3.click && h2.node.addEventListener("click", t3.click.bind(this, t3));
            }
          }
        } }, { key: "drawPointAnnotations", value: function() {
          var t3 = this, e2 = this.w, i2 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
          return e2.config.annotations.points.map(function(e3, a2) {
            t3.addPointAnnotation(e3, i2.node, a2);
          }), i2;
        } }]), t2;
      }(), M = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } }, I = function() {
        function t2() {
          a(this, t2), this.yAxis = { show: !0, showAlways: !1, showForNullSeries: !0, seriesName: void 0, opposite: !1, reversed: !1, logarithmic: !1, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: !1, max: void 0, min: void 0, floating: !1, decimalsInFloat: void 0, labels: { show: !0, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: !1, offsetX: 0 }, crosshairs: { show: !0, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
        }
        return r(t2, [{ key: "init", value: function() {
          return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: !0, easing: "easeinout", speed: 800, animateGradually: { delay: 150, enabled: !0 }, dynamicAnimation: { enabled: !0, speed: 350 } }, background: "", locales: [M], defaultLocale: "en", dropShadow: { enabled: !1, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.35 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: !0, redrawOnWindowResize: !0, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, selection: { enabled: !1, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: !1 }, brush: { enabled: !1, autoScaleYaxis: !0, target: void 0, targets: void 0 }, stacked: !1, stackOnlyBar: !0, stackType: "normal", toolbar: { show: !0, offsetX: 0, offsetY: 0, tools: { download: !0, selection: !0, zoom: !0, zoomin: !0, zoomout: !0, pan: !0, reset: !0, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", categoryFormatter: void 0, valueFormatter: void 0 }, png: { filename: void 0 }, svg: { filename: void 0 } }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: !0, type: "x", autoScaleYaxis: !1, zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } } }, plotOptions: { line: { isSlopeChart: !1 }, area: { fillTo: "origin" }, bar: { horizontal: !1, columnWidth: "70%", barHeight: "70%", distributed: !1, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: !0, rangeBarGroupRows: !1, hideZeroBarsWhenGrouped: !1, isDumbbell: !1, dumbbellColors: void 0, isFunnel: !1, isFunnel3d: !0, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: !0, orientation: "horizontal", total: { enabled: !1, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: !0, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: !0 } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" } }, heatmap: { radius: 2, enableShades: !0, shadeIntensity: 0.5, reverseNegativeShade: !1, distributed: !1, useFillColorAsStroke: !1, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: !0, shadeIntensity: 0.5, distributed: !1, reverseNegativeShade: !1, useFillColorAsStroke: !1, borderRadius: 4, dataLabels: { format: "scale" }, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, radialBar: { inverseOrder: !1, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: !0, position: "front", dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, track: { show: !0, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, dataLabels: { show: !0, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: function(t3) {
            return t3;
          } }, value: { show: !0, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: function(t3) {
            return t3 + "%";
          } }, total: { show: !1, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: function(t3) {
            return t3.globals.seriesTotals.reduce(function(t4, e2) {
              return t4 + e2;
            }, 0) / t3.globals.series.length + "%";
          } } }, barLabels: { enabled: !1, offsetX: 0, offsetY: 0, useSeriesColors: !0, fontFamily: void 0, fontWeight: 600, fontSize: "16px", formatter: function(t3) {
            return t3;
          }, onClick: void 0 } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: !0, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: !1, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: function(t3) {
            return t3;
          } }, value: { show: !0, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: function(t3) {
            return t3;
          } }, total: { show: !1, showAlways: !1, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: function(t3) {
            return t3.globals.seriesTotals.reduce(function(t4, e2) {
              return t4 + e2;
            }, 0);
          } } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: !0, enabledOnSeries: void 0, formatter: function(t3) {
            return t3 !== null ? t3 : "";
          }, textAnchor: "middle", distributed: !1, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: !0, foreColor: "#fff", borderRadius: 2, padding: 4, opacity: 0.9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: 0.5, strokeWidth: void 0, dashArray: 4 }, grid: { show: !0, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !0 } }, row: { colors: void 0, opacity: 0.5 }, column: { colors: void 0, opacity: 0.5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: !0, showForSingleSeries: !1, showForNullSeries: !0, showForZeroSeries: !0, floating: !1, position: "bottom", horizontalAlign: "center", inverseOrder: !1, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], labels: { colors: void 0, useSeriesColors: !1 }, markers: { size: 7, fillColors: void 0, strokeWidth: 1, shape: void 0, offsetX: 0, offsetY: 0, customHTML: void 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 4 }, onItemClick: { toggleDataSeries: !0 }, onItemHover: { highlightDataSeries: !0 } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", offsetX: 0, offsetY: 0, showNullDataPoints: !0, onClick: void 0, onDblClick: void 0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "lighten", value: 0.1 } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "darken", value: 0.5 } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: !1, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: !1, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: !0, enabledOnSeries: void 0, shared: !0, hideEmptySeries: !1, followCursor: !1, intersect: !1, inverseOrder: !1, custom: void 0, fillSeriesColor: !1, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: !1 }, x: { show: !0, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: function(t3) {
            return t3 ? t3 + ": " : "";
          } } }, z: { formatter: void 0, title: "Size: " }, marker: { show: !0, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: !1, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: !1, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: !0, rotate: -45, rotateAlways: !1, hideOverlappingLabels: !0, trim: !1, minHeight: void 0, maxHeight: 120, showDuplicates: !0, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: !0, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: !0, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, stepSize: void 0, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: !1, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: !0, width: 1, position: "back", opacity: 0.9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } }, dropShadow: { enabled: !1, left: 0, top: 0, blur: 1, opacity: 0.4 } }, tooltip: { enabled: !0, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "", palette: "palette1", monochrome: { enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 } } };
        } }]), t2;
      }(), T = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.graphics = new m(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new w(this), this.xAxisAnnotations = new k(this), this.yAxisAnnotations = new L(this), this.pointsAnnotations = new P(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
        }
        return r(t2, [{ key: "drawAxesAnnotations", value: function() {
          var t3 = this.w;
          if (t3.globals.axisCharts) {
            for (var e2 = this.yAxisAnnotations.drawYAxisAnnotations(), i2 = this.xAxisAnnotations.drawXAxisAnnotations(), a2 = this.pointsAnnotations.drawPointAnnotations(), s2 = t3.config.chart.animations.enabled, r2 = [e2, i2, a2], o2 = [i2.node, e2.node, a2.node], n2 = 0; n2 < 3; n2++) t3.globals.dom.elGraphical.add(r2[n2]), !s2 || t3.globals.resized || t3.globals.dataChanged || t3.config.chart.type !== "scatter" && t3.config.chart.type !== "bubble" && t3.globals.dataPoints > 1 && o2[n2].classList.add("apexcharts-element-hidden"), t3.globals.delayedElements.push({ el: o2[n2], index: 0 });
            this.helpers.annotationsBackground();
          }
        } }, { key: "drawImageAnnos", value: function() {
          var t3 = this;
          this.w.config.annotations.images.map(function(e2, i2) {
            t3.addImage(e2, i2);
          });
        } }, { key: "drawTextAnnos", value: function() {
          var t3 = this;
          this.w.config.annotations.texts.map(function(e2, i2) {
            t3.addText(e2, i2);
          });
        } }, { key: "addXaxisAnnotation", value: function(t3, e2, i2) {
          this.xAxisAnnotations.addXaxisAnnotation(t3, e2, i2);
        } }, { key: "addYaxisAnnotation", value: function(t3, e2, i2) {
          this.yAxisAnnotations.addYaxisAnnotation(t3, e2, i2);
        } }, { key: "addPointAnnotation", value: function(t3, e2, i2) {
          this.pointsAnnotations.addPointAnnotation(t3, e2, i2);
        } }, { key: "addText", value: function(t3, e2) {
          var i2 = t3.x, a2 = t3.y, s2 = t3.text, r2 = t3.textAnchor, o2 = t3.foreColor, n2 = t3.fontSize, l2 = t3.fontFamily, h2 = t3.fontWeight, c2 = t3.cssClass, d2 = t3.backgroundColor, g2 = t3.borderWidth, u2 = t3.strokeDashArray, p2 = t3.borderRadius, f2 = t3.borderColor, x2 = t3.appendTo, b2 = x2 === void 0 ? ".apexcharts-svg" : x2, v2 = t3.paddingLeft, m2 = v2 === void 0 ? 4 : v2, y2 = t3.paddingRight, w2 = y2 === void 0 ? 4 : y2, k2 = t3.paddingBottom, A2 = k2 === void 0 ? 2 : k2, S2 = t3.paddingTop, C2 = S2 === void 0 ? 2 : S2, L2 = this.w, P2 = this.graphics.drawText({ x: i2, y: a2, text: s2, textAnchor: r2 || "start", fontSize: n2 || "12px", fontWeight: h2 || "regular", fontFamily: l2 || L2.config.chart.fontFamily, foreColor: o2 || L2.config.chart.foreColor, cssClass: c2 }), M2 = L2.globals.dom.baseEl.querySelector(b2);
          M2 && M2.appendChild(P2.node);
          var I2 = P2.bbox();
          if (s2) {
            var T2 = this.graphics.drawRect(I2.x - m2, I2.y - C2, I2.width + m2 + w2, I2.height + A2 + C2, p2, d2 || "transparent", 1, g2, f2, u2);
            M2.insertBefore(T2.node, P2.node);
          }
        } }, { key: "addImage", value: function(t3, e2) {
          var i2 = this.w, a2 = t3.path, s2 = t3.x, r2 = s2 === void 0 ? 0 : s2, o2 = t3.y, n2 = o2 === void 0 ? 0 : o2, l2 = t3.width, h2 = l2 === void 0 ? 20 : l2, c2 = t3.height, d2 = c2 === void 0 ? 20 : c2, g2 = t3.appendTo, u2 = g2 === void 0 ? ".apexcharts-svg" : g2, p2 = i2.globals.dom.Paper.image(a2);
          p2.size(h2, d2).move(r2, n2);
          var f2 = i2.globals.dom.baseEl.querySelector(u2);
          return f2 && f2.appendChild(p2.node), p2;
        } }, { key: "addXaxisAnnotationExternal", value: function(t3, e2, i2) {
          return this.addAnnotationExternal({ params: t3, pushToMemory: e2, context: i2, type: "xaxis", contextMethod: i2.addXaxisAnnotation }), i2;
        } }, { key: "addYaxisAnnotationExternal", value: function(t3, e2, i2) {
          return this.addAnnotationExternal({ params: t3, pushToMemory: e2, context: i2, type: "yaxis", contextMethod: i2.addYaxisAnnotation }), i2;
        } }, { key: "addPointAnnotationExternal", value: function(t3, e2, i2) {
          return this.invertAxis === void 0 && (this.invertAxis = i2.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: t3, pushToMemory: e2, context: i2, type: "point", contextMethod: i2.addPointAnnotation }), i2;
        } }, { key: "addAnnotationExternal", value: function(t3) {
          var e2 = t3.params, i2 = t3.pushToMemory, a2 = t3.context, s2 = t3.type, r2 = t3.contextMethod, o2 = a2, n2 = o2.w, l2 = n2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations")), h2 = l2.childNodes.length + 1, c2 = new I(), d2 = Object.assign({}, s2 === "xaxis" ? c2.xAxisAnnotation : s2 === "yaxis" ? c2.yAxisAnnotation : c2.pointAnnotation), g2 = x.extend(d2, e2);
          switch (s2) {
            case "xaxis":
              this.addXaxisAnnotation(g2, l2, h2);
              break;
            case "yaxis":
              this.addYaxisAnnotation(g2, l2, h2);
              break;
            case "point":
              this.addPointAnnotation(g2, l2, h2);
          }
          var u2 = n2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations .apexcharts-").concat(s2, "-annotation-label[rel='").concat(h2, "']")), p2 = this.helpers.addBackgroundToAnno(u2, g2);
          return p2 && l2.insertBefore(p2.node, u2), i2 && n2.globals.memory.methodsToExec.push({ context: o2, id: g2.id ? g2.id : x.randomId(), method: r2, label: "addAnnotation", params: e2 }), a2;
        } }, { key: "clearAnnotations", value: function(t3) {
          var e2 = t3.w, i2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
          e2.globals.memory.methodsToExec.map(function(t4, i3) {
            t4.label !== "addText" && t4.label !== "addAnnotation" || e2.globals.memory.methodsToExec.splice(i3, 1);
          }), i2 = x.listToArray(i2), Array.prototype.forEach.call(i2, function(t4) {
            for (; t4.firstChild; ) t4.removeChild(t4.firstChild);
          });
        } }, { key: "removeAnnotation", value: function(t3, e2) {
          var i2 = t3.w, a2 = i2.globals.dom.baseEl.querySelectorAll(".".concat(e2));
          a2 && (i2.globals.memory.methodsToExec.map(function(t4, a3) {
            t4.id === e2 && i2.globals.memory.methodsToExec.splice(a3, 1);
          }), Array.prototype.forEach.call(a2, function(t4) {
            t4.parentElement.removeChild(t4);
          }));
        } }]), t2;
      }(), z = function(t2) {
        var e2, i2 = t2.isTimeline, a2 = t2.ctx, s2 = t2.seriesIndex, r2 = t2.dataPointIndex, o2 = t2.y1, n2 = t2.y2, l2 = t2.w, h2 = l2.globals.seriesRangeStart[s2][r2], c2 = l2.globals.seriesRangeEnd[s2][r2], d2 = l2.globals.labels[r2], g2 = l2.config.series[s2].name ? l2.config.series[s2].name : "", u2 = l2.globals.ttKeyFormatter, p2 = l2.config.tooltip.y.title.formatter, f2 = { w: l2, seriesIndex: s2, dataPointIndex: r2, start: h2, end: c2 };
        typeof p2 == "function" && (g2 = p2(g2, f2)), (e2 = l2.config.series[s2].data[r2]) !== null && e2 !== void 0 && e2.x && (d2 = l2.config.series[s2].data[r2].x), i2 || l2.config.xaxis.type === "datetime" && (d2 = new S(a2).xLabelFormat(l2.globals.ttKeyFormatter, d2, d2, { i: void 0, dateFormatter: new A(a2).formatDate, w: l2 })), typeof u2 == "function" && (d2 = u2(d2, f2)), Number.isFinite(o2) && Number.isFinite(n2) && (h2 = o2, c2 = n2);
        var x2 = "", b2 = "", v2 = l2.globals.colors[s2];
        if (l2.config.tooltip.x.formatter === void 0) if (l2.config.xaxis.type === "datetime") {
          var m2 = new A(a2);
          x2 = m2.formatDate(m2.getDate(h2), l2.config.tooltip.x.format), b2 = m2.formatDate(m2.getDate(c2), l2.config.tooltip.x.format);
        } else x2 = h2, b2 = c2;
        else x2 = l2.config.tooltip.x.formatter(h2), b2 = l2.config.tooltip.x.formatter(c2);
        return { start: h2, end: c2, startVal: x2, endVal: b2, ylabel: d2, color: v2, seriesName: g2 };
      }, X = function(t2) {
        var e2 = t2.color, i2 = t2.seriesName, a2 = t2.ylabel, s2 = t2.start, r2 = t2.end, o2 = t2.seriesIndex, n2 = t2.dataPointIndex, l2 = t2.ctx.tooltip.tooltipLabels.getFormatters(o2);
        s2 = l2.yLbFormatter(s2), r2 = l2.yLbFormatter(r2);
        var h2 = l2.yLbFormatter(t2.w.globals.series[o2][n2]), c2 = `<span class="value start-value">
  `.concat(s2, `
  </span> <span class="separator">-</span> <span class="value end-value">
  `).concat(r2, `
  </span>`);
        return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e2 + '">' + (i2 || "") + '</span></div><div> <span class="category">' + a2 + ": </span> " + (t2.w.globals.comboCharts ? t2.w.config.series[o2].type === "rangeArea" || t2.w.config.series[o2].type === "rangeBar" ? c2 : "<span>".concat(h2, "</span>") : c2) + " </div></div>";
      }, E = function() {
        function t2(e2) {
          a(this, t2), this.opts = e2;
        }
        return r(t2, [{ key: "hideYAxis", value: function() {
          this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0;
        } }, { key: "line", value: function() {
          return { chart: { animations: { easing: "swing" } }, dataLabels: { enabled: !1 }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
        } }, { key: "sparkline", value: function(t3) {
          return this.hideYAxis(), x.extend(t3, { grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: !1 }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } }, chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 } });
        } }, { key: "slope", value: function() {
          return this.hideYAxis(), { chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !0, formatter: function(t3, e2) {
            var i2 = e2.w.config.series[e2.seriesIndex].name;
            return t3 !== null ? i2 + ": " + t3 : "";
          }, background: { enabled: !1 }, offsetX: -5 }, grid: { xaxis: { lines: { show: !0 } }, yaxis: { lines: { show: !1 } } }, xaxis: { position: "top", labels: { style: { fontSize: 14, fontWeight: 900 } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } }, markers: { size: 8, hover: { sizeOffset: 1 } }, legend: { show: !1 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, stroke: { width: 5, curve: "straight" } };
        } }, { key: "bar", value: function() {
          return { chart: { stacked: !1, animations: { easing: "swing" } }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: !1 } }, stroke: { width: 0, lineCap: "round" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square" } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { tooltip: { enabled: !1 }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: !1 }, stroke: { width: 0 } } } };
        } }, { key: "funnel", value: function() {
          return this.hideYAxis(), e(e({}, this.bar()), {}, { chart: { animations: { easing: "linear", speed: 800, animateGradually: { enabled: !1 } } }, plotOptions: { bar: { horizontal: !0, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: !1, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } } });
        } }, { key: "candlestick", value: function() {
          var t3 = this;
          return { stroke: { width: 1, colors: ["#333"] }, fill: { opacity: 1 }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(e2) {
            var i2 = e2.seriesIndex, a2 = e2.dataPointIndex, s2 = e2.w;
            return t3._getBoxTooltip(s2, i2, a2, ["Open", "High", "", "Low", "Close"], "candlestick");
          } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
        } }, { key: "boxPlot", value: function() {
          var t3 = this;
          return { chart: { animations: { dynamicAnimation: { enabled: !1 } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(e2) {
            var i2 = e2.seriesIndex, a2 = e2.dataPointIndex, s2 = e2.w;
            return t3._getBoxTooltip(s2, i2, a2, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
          } }, markers: { size: 7, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
        } }, { key: "rangeBar", value: function() {
          return { chart: { animations: { animateGradually: !1 } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: !1, formatter: function(t3, e2) {
            e2.ctx;
            var i2 = e2.seriesIndex, a2 = e2.dataPointIndex, s2 = e2.w, r2 = function() {
              var t4 = s2.globals.seriesRangeStart[i2][a2];
              return s2.globals.seriesRangeEnd[i2][a2] - t4;
            };
            return s2.globals.comboCharts ? s2.config.series[i2].type === "rangeBar" || s2.config.series[i2].type === "rangeArea" ? r2() : t3 : r2();
          }, background: { enabled: !1 }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: !1, followCursor: !0, custom: function(t3) {
            return t3.w.config.plotOptions && t3.w.config.plotOptions.bar && t3.w.config.plotOptions.bar.horizontal ? function(t4) {
              var i2 = z(e(e({}, t4), {}, { isTimeline: !0 })), a2 = i2.color, s2 = i2.seriesName, r2 = i2.ylabel, o2 = i2.startVal, n2 = i2.endVal;
              return X(e(e({}, t4), {}, { color: a2, seriesName: s2, ylabel: r2, start: o2, end: n2 }));
            }(t3) : function(t4) {
              var i2 = z(t4), a2 = i2.color, s2 = i2.seriesName, r2 = i2.ylabel, o2 = i2.start, n2 = i2.end;
              return X(e(e({}, t4), {}, { color: a2, seriesName: s2, ylabel: r2, start: o2, end: n2 }));
            }(t3);
          } }, xaxis: { tickPlacement: "between", tooltip: { enabled: !1 }, crosshairs: { stroke: { width: 0 } } } };
        } }, { key: "dumbbell", value: function(t3) {
          var e2, i2;
          return (e2 = t3.plotOptions.bar) !== null && e2 !== void 0 && e2.barHeight || (t3.plotOptions.bar.barHeight = 2), (i2 = t3.plotOptions.bar) !== null && i2 !== void 0 && i2.columnWidth || (t3.plotOptions.bar.columnWidth = 2), t3;
        } }, { key: "area", value: function() {
          return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: !1 } };
        } }, { key: "rangeArea", value: function() {
          return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: 0.6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: !1, shared: !0, followCursor: !0, custom: function(t3) {
            return function(t4) {
              var i2 = z(t4), a2 = i2.color, s2 = i2.seriesName, r2 = i2.ylabel, o2 = i2.start, n2 = i2.end;
              return X(e(e({}, t4), {}, { color: a2, seriesName: s2, ylabel: r2, start: o2, end: n2 }));
            }(t3);
          } } };
        } }, { key: "brush", value: function(t3) {
          return x.extend(t3, { chart: { toolbar: { autoSelected: "selection", show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 }, stroke: { width: 1 }, tooltip: { enabled: !1 }, xaxis: { tooltip: { enabled: !1 } } });
        } }, { key: "stacked100", value: function(t3) {
          t3.dataLabels = t3.dataLabels || {}, t3.dataLabels.formatter = t3.dataLabels.formatter || void 0;
          var e2 = t3.dataLabels.formatter;
          return t3.yaxis.forEach(function(e3, i2) {
            t3.yaxis[i2].min = 0, t3.yaxis[i2].max = 100;
          }), t3.chart.type === "bar" && (t3.dataLabels.formatter = e2 || function(t4) {
            return typeof t4 == "number" && t4 ? t4.toFixed(0) + "%" : t4;
          }), t3;
        } }, { key: "stackedBars", value: function() {
          var t3 = this.bar();
          return e(e({}, t3), {}, { plotOptions: e(e({}, t3.plotOptions), {}, { bar: e(e({}, t3.plotOptions.bar), {}, { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
        } }, { key: "convertCatToNumeric", value: function(t3) {
          return t3.xaxis.convertedCatToNumeric = !0, t3;
        } }, { key: "convertCatToNumericXaxis", value: function(t3, e2, i2) {
          t3.xaxis.type = "numeric", t3.xaxis.labels = t3.xaxis.labels || {}, t3.xaxis.labels.formatter = t3.xaxis.labels.formatter || function(t4) {
            return x.isNumber(t4) ? Math.floor(t4) : t4;
          };
          var a2 = t3.xaxis.labels.formatter, s2 = t3.xaxis.categories && t3.xaxis.categories.length ? t3.xaxis.categories : t3.labels;
          return i2 && i2.length && (s2 = i2.map(function(t4) {
            return Array.isArray(t4) ? t4 : String(t4);
          })), s2 && s2.length && (t3.xaxis.labels.formatter = function(t4) {
            return x.isNumber(t4) ? a2(s2[Math.floor(t4) - 1]) : a2(t4);
          }), t3.xaxis.categories = [], t3.labels = [], t3.xaxis.tickAmount = t3.xaxis.tickAmount || "dataPoints", t3;
        } }, { key: "bubble", value: function() {
          return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: !0, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } } };
        } }, { key: "scatter", value: function() {
          return { dataLabels: { enabled: !1 }, tooltip: { shared: !1, intersect: !0 }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } };
        } }, { key: "heatmap", value: function() {
          return { chart: { stacked: !1 }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: !0, marker: { show: !1 }, x: { show: !1 } }, legend: { position: "top", markers: { shape: "square" } }, grid: { padding: { right: 20 } } };
        } }, { key: "treemap", value: function() {
          return { chart: { zoom: { enabled: !1 } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: !0, width: 2, colors: ["#fff"] }, legend: { show: !1 }, fill: { opacity: 1, gradient: { stops: [0, 100] } }, tooltip: { followCursor: !0, x: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: !1 }, tooltip: { enabled: !1 } } };
        } }, { key: "pie", value: function() {
          return { chart: { toolbar: { show: !1 } }, plotOptions: { pie: { donut: { labels: { show: !1 } } } }, dataLabels: { formatter: function(t3) {
            return t3.toFixed(1) + "%";
          }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } };
        } }, { key: "donut", value: function() {
          return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(t3) {
            return t3.toFixed(1) + "%";
          }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: 0.35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } };
        } }, { key: "polarArea", value: function() {
          return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(t3) {
            return t3.toFixed(1) + "%";
          }, enabled: !1 }, stroke: { show: !0, width: 2 }, fill: { opacity: 0.7 }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } };
        } }, { key: "radar", value: function() {
          return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: !1, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 5, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: 0.2 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, grid: { show: !1 }, xaxis: { labels: { formatter: function(t3) {
            return t3;
          }, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } } };
        } }, { key: "radialBar", value: function() {
          return { chart: { animations: { dynamicAnimation: { enabled: !0, speed: 800 } }, toolbar: { show: !1 } }, fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: !1, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: !1, position: "right" }, tooltip: { enabled: !1, fillSeriesColor: !0 } };
        } }, { key: "_getBoxTooltip", value: function(t3, e2, i2, a2, s2) {
          var r2 = t3.globals.seriesCandleO[e2][i2], o2 = t3.globals.seriesCandleH[e2][i2], n2 = t3.globals.seriesCandleM[e2][i2], l2 = t3.globals.seriesCandleL[e2][i2], h2 = t3.globals.seriesCandleC[e2][i2];
          return t3.config.series[e2].type && t3.config.series[e2].type !== s2 ? `<div class="apexcharts-custom-tooltip">
          `.concat(t3.config.series[e2].name ? t3.config.series[e2].name : "series-" + (e2 + 1), ": <strong>").concat(t3.globals.series[e2][i2], `</strong>
        </div>`) : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t3.config.chart.type, '">') + "<div>".concat(a2[0], ': <span class="value">') + r2 + "</span></div>" + "<div>".concat(a2[1], ': <span class="value">') + o2 + "</span></div>" + (n2 ? "<div>".concat(a2[2], ': <span class="value">') + n2 + "</span></div>" : "") + "<div>".concat(a2[3], ': <span class="value">') + l2 + "</span></div>" + "<div>".concat(a2[4], ': <span class="value">') + h2 + "</span></div></div>";
        } }]), t2;
      }(), Y = function() {
        function t2(e2) {
          a(this, t2), this.opts = e2;
        }
        return r(t2, [{ key: "init", value: function(t3) {
          var e2 = t3.responsiveOverride, a2 = this.opts, s2 = new I(), r2 = new E(a2);
          this.chartType = a2.chart.type, a2 = this.extendYAxis(a2), a2 = this.extendAnnotations(a2);
          var o2 = s2.init(), n2 = {};
          if (a2 && i(a2) === "object") {
            var l2, h2, c2, d2, g2, u2, p2, f2, b2, v2, m2 = {};
            m2 = ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(a2.chart.type) !== -1 ? r2[a2.chart.type]() : r2.line(), (l2 = a2.plotOptions) !== null && l2 !== void 0 && (h2 = l2.bar) !== null && h2 !== void 0 && h2.isFunnel && (m2 = r2.funnel()), a2.chart.stacked && a2.chart.type === "bar" && (m2 = r2.stackedBars()), (c2 = a2.chart.brush) !== null && c2 !== void 0 && c2.enabled && (m2 = r2.brush(m2)), (d2 = a2.plotOptions) !== null && d2 !== void 0 && (g2 = d2.line) !== null && g2 !== void 0 && g2.isSlopeChart && (m2 = r2.slope()), a2.chart.stacked && a2.chart.stackType === "100%" && (a2 = r2.stacked100(a2)), (u2 = a2.plotOptions) !== null && u2 !== void 0 && (p2 = u2.bar) !== null && p2 !== void 0 && p2.isDumbbell && (a2 = r2.dumbbell(a2)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(a2), a2.xaxis = a2.xaxis || window.Apex.xaxis || {}, e2 || (a2.xaxis.convertedCatToNumeric = !1), ((f2 = (a2 = this.checkForCatToNumericXAxis(this.chartType, m2, a2)).chart.sparkline) !== null && f2 !== void 0 && f2.enabled || (b2 = window.Apex.chart) !== null && b2 !== void 0 && (v2 = b2.sparkline) !== null && v2 !== void 0 && v2.enabled) && (m2 = r2.sparkline(m2)), n2 = x.extend(o2, m2);
          }
          var y2 = x.extend(n2, window.Apex);
          return o2 = x.extend(y2, a2), o2 = this.handleUserInputErrors(o2);
        } }, { key: "checkForCatToNumericXAxis", value: function(t3, e2, i2) {
          var a2, s2, r2 = new E(i2), o2 = (t3 === "bar" || t3 === "boxPlot") && ((a2 = i2.plotOptions) === null || a2 === void 0 || (s2 = a2.bar) === null || s2 === void 0 ? void 0 : s2.horizontal), n2 = t3 === "pie" || t3 === "polarArea" || t3 === "donut" || t3 === "radar" || t3 === "radialBar" || t3 === "heatmap", l2 = i2.xaxis.type !== "datetime" && i2.xaxis.type !== "numeric", h2 = i2.xaxis.tickPlacement ? i2.xaxis.tickPlacement : e2.xaxis && e2.xaxis.tickPlacement;
          return o2 || n2 || !l2 || h2 === "between" || (i2 = r2.convertCatToNumeric(i2)), i2;
        } }, { key: "extendYAxis", value: function(t3, e2) {
          var i2 = new I();
          (t3.yaxis === void 0 || !t3.yaxis || Array.isArray(t3.yaxis) && t3.yaxis.length === 0) && (t3.yaxis = {}), t3.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t3.yaxis = x.extend(t3.yaxis, window.Apex.yaxis)), t3.yaxis.constructor !== Array ? t3.yaxis = [x.extend(i2.yAxis, t3.yaxis)] : t3.yaxis = x.extendArray(t3.yaxis, i2.yAxis);
          var a2 = !1;
          t3.yaxis.forEach(function(t4) {
            t4.logarithmic && (a2 = !0);
          });
          var s2 = t3.series;
          return e2 && !s2 && (s2 = e2.config.series), a2 && s2.length !== t3.yaxis.length && s2.length && (t3.yaxis = s2.map(function(e3, a3) {
            if (e3.name || (s2[a3].name = "series-".concat(a3 + 1)), t3.yaxis[a3]) return t3.yaxis[a3].seriesName = s2[a3].name, t3.yaxis[a3];
            var r2 = x.extend(i2.yAxis, t3.yaxis[0]);
            return r2.show = !1, r2;
          })), a2 && s2.length > 1 && s2.length !== t3.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), t3;
        } }, { key: "extendAnnotations", value: function(t3) {
          return t3.annotations === void 0 && (t3.annotations = {}, t3.annotations.yaxis = [], t3.annotations.xaxis = [], t3.annotations.points = []), t3 = this.extendYAxisAnnotations(t3), t3 = this.extendXAxisAnnotations(t3), t3 = this.extendPointAnnotations(t3);
        } }, { key: "extendYAxisAnnotations", value: function(t3) {
          var e2 = new I();
          return t3.annotations.yaxis = x.extendArray(t3.annotations.yaxis !== void 0 ? t3.annotations.yaxis : [], e2.yAxisAnnotation), t3;
        } }, { key: "extendXAxisAnnotations", value: function(t3) {
          var e2 = new I();
          return t3.annotations.xaxis = x.extendArray(t3.annotations.xaxis !== void 0 ? t3.annotations.xaxis : [], e2.xAxisAnnotation), t3;
        } }, { key: "extendPointAnnotations", value: function(t3) {
          var e2 = new I();
          return t3.annotations.points = x.extendArray(t3.annotations.points !== void 0 ? t3.annotations.points : [], e2.pointAnnotation), t3;
        } }, { key: "checkForDarkTheme", value: function(t3) {
          t3.theme && t3.theme.mode === "dark" && (t3.tooltip || (t3.tooltip = {}), t3.tooltip.theme !== "light" && (t3.tooltip.theme = "dark"), t3.chart.foreColor || (t3.chart.foreColor = "#f6f7f8"), t3.theme.palette || (t3.theme.palette = "palette4"));
        } }, { key: "handleUserInputErrors", value: function(t3) {
          var e2 = t3;
          if (e2.tooltip.shared && e2.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
          if (e2.chart.type === "bar" && e2.plotOptions.bar.horizontal) {
            if (e2.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
            e2.yaxis[0].reversed && (e2.yaxis[0].opposite = !0), e2.xaxis.tooltip.enabled = !1, e2.yaxis[0].tooltip.enabled = !1, e2.chart.zoom.enabled = !1;
          }
          return e2.chart.type !== "bar" && e2.chart.type !== "rangeBar" || e2.tooltip.shared && e2.xaxis.crosshairs.width === "barWidth" && e2.series.length > 1 && (e2.xaxis.crosshairs.width = "tickWidth"), e2.chart.type !== "candlestick" && e2.chart.type !== "boxPlot" || e2.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(e2.chart.type, " chart is not supported.")), e2.yaxis[0].reversed = !1), e2;
        } }]), t2;
      }(), F = function() {
        function t2() {
          a(this, t2);
        }
        return r(t2, [{ key: "initGlobalVars", value: function(t3) {
          t3.series = [], t3.seriesCandleO = [], t3.seriesCandleH = [], t3.seriesCandleM = [], t3.seriesCandleL = [], t3.seriesCandleC = [], t3.seriesRangeStart = [], t3.seriesRangeEnd = [], t3.seriesRange = [], t3.seriesPercent = [], t3.seriesGoals = [], t3.seriesX = [], t3.seriesZ = [], t3.seriesNames = [], t3.seriesTotals = [], t3.seriesLog = [], t3.seriesColors = [], t3.stackedSeriesTotals = [], t3.seriesXvalues = [], t3.seriesYvalues = [], t3.labels = [], t3.hasXaxisGroups = !1, t3.groups = [], t3.barGroups = [], t3.lineGroups = [], t3.areaGroups = [], t3.hasSeriesGroups = !1, t3.seriesGroups = [], t3.categoryLabels = [], t3.timescaleLabels = [], t3.noLabelsProvided = !1, t3.resizeTimer = null, t3.selectionResizeTimer = null, t3.delayedElements = [], t3.pointsArray = [], t3.dataLabelsRects = [], t3.isXNumeric = !1, t3.skipLastTimelinelabel = !1, t3.skipFirstTimelinelabel = !1, t3.isDataXYZ = !1, t3.isMultiLineX = !1, t3.isMultipleYAxis = !1, t3.maxY = -Number.MAX_VALUE, t3.minY = Number.MIN_VALUE, t3.minYArr = [], t3.maxYArr = [], t3.maxX = -Number.MAX_VALUE, t3.minX = Number.MAX_VALUE, t3.initialMaxX = -Number.MAX_VALUE, t3.initialMinX = Number.MAX_VALUE, t3.maxDate = 0, t3.minDate = Number.MAX_VALUE, t3.minZ = Number.MAX_VALUE, t3.maxZ = -Number.MAX_VALUE, t3.minXDiff = Number.MAX_VALUE, t3.yAxisScale = [], t3.xAxisScale = null, t3.xAxisTicksPositions = [], t3.yLabelsCoords = [], t3.yTitleCoords = [], t3.barPadForNumericAxis = 0, t3.padHorizontal = 0, t3.xRange = 0, t3.yRange = [], t3.zRange = 0, t3.dataPoints = 0, t3.xTickAmount = 0, t3.multiAxisTickAmount = 0;
        } }, { key: "globalVars", value: function(t3) {
          return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: t3.markers.size, largestSize: 0 }, animationEnded: !1, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: !1, isExecCalled: !1, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: !1, allSeriesCollapsed: !1, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: !1, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], goldenPadding: 35, invalidLogScale: !1, ignoreYAxisIndexes: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: t3.chart.toolbar.autoSelected === "zoom" && t3.chart.toolbar.tools.zoom && t3.chart.zoom.enabled, panEnabled: t3.chart.toolbar.autoSelected === "pan" && t3.chart.toolbar.tools.pan, selectionEnabled: t3.chart.toolbar.autoSelected === "selection" && t3.chart.toolbar.tools.selection, yaxis: null, mousedown: !1, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: !1, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: !0, skipLastTimelinelabel: !1, skipFirstTimelinelabel: !1, delayedElements: [], axisCharts: !0, isDataXYZ: !1, isSlopeChart: t3.plotOptions.line.isSlopeChart, resized: !1, resizeTimer: null, comboCharts: !1, dataChanged: !1, previousPaths: [], allSeriesHasEqualX: !0, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: !1, easing: null, zoomed: !1, gridWidth: 0, gridHeight: 0, rotateXLabels: !1, defaultLabels: !1, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null, niceScaleAllowedMagMsd: [[1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10], [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10]], niceScaleDefaultTicks: [1, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24], seriesYAxisMap: [], seriesYAxisReverseMap: [] };
        } }, { key: "init", value: function(t3) {
          var e2 = this.globalVars(t3);
          return this.initGlobalVars(e2), e2.initialConfig = x.extend({}, t3), e2.initialSeries = x.clone(t3.series), e2.lastXAxis = x.clone(e2.initialConfig.xaxis), e2.lastYAxis = x.clone(e2.initialConfig.yaxis), e2;
        } }]), t2;
      }(), R = function() {
        function t2(e2) {
          a(this, t2), this.opts = e2;
        }
        return r(t2, [{ key: "init", value: function() {
          var t3 = new Y(this.opts).init({ responsiveOverride: !1 });
          return { config: t3, globals: new F().init(t3) };
        } }]), t2;
      }(), H = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.opts = null, this.seriesIndex = 0;
        }
        return r(t2, [{ key: "clippedImgArea", value: function(t3) {
          var e2 = this.w, i2 = e2.config, a2 = parseInt(e2.globals.gridWidth, 10), s2 = parseInt(e2.globals.gridHeight, 10), r2 = a2 > s2 ? a2 : s2, o2 = t3.image, n2 = 0, l2 = 0;
          t3.width === void 0 && t3.height === void 0 ? i2.fill.image.width !== void 0 && i2.fill.image.height !== void 0 ? (n2 = i2.fill.image.width + 1, l2 = i2.fill.image.height) : (n2 = r2 + 1, l2 = r2) : (n2 = t3.width, l2 = t3.height);
          var h2 = document.createElementNS(e2.globals.SVGNS, "pattern");
          m.setAttrs(h2, { id: t3.patternID, patternUnits: t3.patternUnits ? t3.patternUnits : "userSpaceOnUse", width: n2 + "px", height: l2 + "px" });
          var c2 = document.createElementNS(e2.globals.SVGNS, "image");
          h2.appendChild(c2), c2.setAttributeNS(window.SVG.xlink, "href", o2), m.setAttrs(c2, { x: 0, y: 0, preserveAspectRatio: "none", width: n2 + "px", height: l2 + "px" }), c2.style.opacity = t3.opacity, e2.globals.dom.elDefs.node.appendChild(h2);
        } }, { key: "getSeriesIndex", value: function(t3) {
          var e2 = this.w, i2 = e2.config.chart.type;
          return (i2 === "bar" || i2 === "rangeBar") && e2.config.plotOptions.bar.distributed || i2 === "heatmap" || i2 === "treemap" ? this.seriesIndex = t3.seriesNumber : this.seriesIndex = t3.seriesNumber % e2.globals.series.length, this.seriesIndex;
        } }, { key: "fillPath", value: function(t3) {
          var e2 = this.w;
          this.opts = t3;
          var i2, a2, s2, r2 = this.w.config;
          this.seriesIndex = this.getSeriesIndex(t3);
          var o2 = this.getFillColors()[this.seriesIndex];
          e2.globals.seriesColors[this.seriesIndex] !== void 0 && (o2 = e2.globals.seriesColors[this.seriesIndex]), typeof o2 == "function" && (o2 = o2({ seriesIndex: this.seriesIndex, dataPointIndex: t3.dataPointIndex, value: t3.value, w: e2 }));
          var n2 = t3.fillType ? t3.fillType : this.getFillType(this.seriesIndex), l2 = Array.isArray(r2.fill.opacity) ? r2.fill.opacity[this.seriesIndex] : r2.fill.opacity;
          t3.color && (o2 = t3.color), o2 || (o2 = "#fff", console.warn("undefined color - ApexCharts"));
          var h2 = o2;
          if (o2.indexOf("rgb") === -1 ? o2.length < 9 && (h2 = x.hexToRgba(o2, l2)) : o2.indexOf("rgba") > -1 && (l2 = x.getOpacityFromRGBA(o2)), t3.opacity && (l2 = t3.opacity), n2 === "pattern" && (a2 = this.handlePatternFill({ fillConfig: t3.fillConfig, patternFill: a2, fillColor: o2, fillOpacity: l2, defaultColor: h2 })), n2 === "gradient" && (s2 = this.handleGradientFill({ fillConfig: t3.fillConfig, fillColor: o2, fillOpacity: l2, i: this.seriesIndex })), n2 === "image") {
            var c2 = r2.fill.image.src, d2 = t3.patternID ? t3.patternID : "";
            this.clippedImgArea({ opacity: l2, image: Array.isArray(c2) ? t3.seriesNumber < c2.length ? c2[t3.seriesNumber] : c2[0] : c2, width: t3.width ? t3.width : void 0, height: t3.height ? t3.height : void 0, patternUnits: t3.patternUnits, patternID: "pattern".concat(e2.globals.cuid).concat(t3.seriesNumber + 1).concat(d2) }), i2 = "url(#pattern".concat(e2.globals.cuid).concat(t3.seriesNumber + 1).concat(d2, ")");
          } else i2 = n2 === "gradient" ? s2 : n2 === "pattern" ? a2 : h2;
          return t3.solid && (i2 = h2), i2;
        } }, { key: "getFillType", value: function(t3) {
          var e2 = this.w;
          return Array.isArray(e2.config.fill.type) ? e2.config.fill.type[t3] : e2.config.fill.type;
        } }, { key: "getFillColors", value: function() {
          var t3 = this.w, e2 = t3.config, i2 = this.opts, a2 = [];
          return t3.globals.comboCharts ? t3.config.series[this.seriesIndex].type === "line" ? Array.isArray(t3.globals.stroke.colors) ? a2 = t3.globals.stroke.colors : a2.push(t3.globals.stroke.colors) : Array.isArray(t3.globals.fill.colors) ? a2 = t3.globals.fill.colors : a2.push(t3.globals.fill.colors) : e2.chart.type === "line" ? Array.isArray(t3.globals.stroke.colors) ? a2 = t3.globals.stroke.colors : a2.push(t3.globals.stroke.colors) : Array.isArray(t3.globals.fill.colors) ? a2 = t3.globals.fill.colors : a2.push(t3.globals.fill.colors), i2.fillColors !== void 0 && (a2 = [], Array.isArray(i2.fillColors) ? a2 = i2.fillColors.slice() : a2.push(i2.fillColors)), a2;
        } }, { key: "handlePatternFill", value: function(t3) {
          var e2 = t3.fillConfig, i2 = t3.patternFill, a2 = t3.fillColor, s2 = t3.fillOpacity, r2 = t3.defaultColor, o2 = this.w.config.fill;
          e2 && (o2 = e2);
          var n2 = this.opts, l2 = new m(this.ctx), h2 = Array.isArray(o2.pattern.strokeWidth) ? o2.pattern.strokeWidth[this.seriesIndex] : o2.pattern.strokeWidth, c2 = a2;
          return Array.isArray(o2.pattern.style) ? i2 = o2.pattern.style[n2.seriesNumber] !== void 0 ? l2.drawPattern(o2.pattern.style[n2.seriesNumber], o2.pattern.width, o2.pattern.height, c2, h2, s2) : r2 : i2 = l2.drawPattern(o2.pattern.style, o2.pattern.width, o2.pattern.height, c2, h2, s2), i2;
        } }, { key: "handleGradientFill", value: function(t3) {
          var i2 = t3.fillColor, a2 = t3.fillOpacity, s2 = t3.fillConfig, r2 = t3.i, o2 = this.w.config.fill;
          s2 && (o2 = e(e({}, o2), s2));
          var n2, l2 = this.opts, h2 = new m(this.ctx), c2 = new x(), d2 = o2.gradient.type, g2 = i2, u2 = o2.gradient.opacityFrom === void 0 ? a2 : Array.isArray(o2.gradient.opacityFrom) ? o2.gradient.opacityFrom[r2] : o2.gradient.opacityFrom;
          g2.indexOf("rgba") > -1 && (u2 = x.getOpacityFromRGBA(g2));
          var p2 = o2.gradient.opacityTo === void 0 ? a2 : Array.isArray(o2.gradient.opacityTo) ? o2.gradient.opacityTo[r2] : o2.gradient.opacityTo;
          if (o2.gradient.gradientToColors === void 0 || o2.gradient.gradientToColors.length === 0) n2 = o2.gradient.shade === "dark" ? c2.shadeColor(-1 * parseFloat(o2.gradient.shadeIntensity), i2.indexOf("rgb") > -1 ? x.rgb2hex(i2) : i2) : c2.shadeColor(parseFloat(o2.gradient.shadeIntensity), i2.indexOf("rgb") > -1 ? x.rgb2hex(i2) : i2);
          else if (o2.gradient.gradientToColors[l2.seriesNumber]) {
            var f2 = o2.gradient.gradientToColors[l2.seriesNumber];
            n2 = f2, f2.indexOf("rgba") > -1 && (p2 = x.getOpacityFromRGBA(f2));
          } else n2 = i2;
          if (o2.gradient.gradientFrom && (g2 = o2.gradient.gradientFrom), o2.gradient.gradientTo && (n2 = o2.gradient.gradientTo), o2.gradient.inverseColors) {
            var b2 = g2;
            g2 = n2, n2 = b2;
          }
          return g2.indexOf("rgb") > -1 && (g2 = x.rgb2hex(g2)), n2.indexOf("rgb") > -1 && (n2 = x.rgb2hex(n2)), h2.drawGradient(d2, g2, n2, u2, p2, l2.size, o2.gradient.stops, o2.gradient.colorStops, r2);
        } }]), t2;
      }(), D = function() {
        function t2(e2, i2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "setGlobalMarkerSize", value: function() {
          var t3 = this.w;
          if (t3.globals.markers.size = Array.isArray(t3.config.markers.size) ? t3.config.markers.size : [t3.config.markers.size], t3.globals.markers.size.length > 0) {
            if (t3.globals.markers.size.length < t3.globals.series.length + 1) for (var e2 = 0; e2 <= t3.globals.series.length; e2++) t3.globals.markers.size[e2] === void 0 && t3.globals.markers.size.push(t3.globals.markers.size[0]);
          } else t3.globals.markers.size = t3.config.series.map(function(e3) {
            return t3.config.markers.size;
          });
        } }, { key: "plotChartMarkers", value: function(t3, e2, i2, a2) {
          var s2, r2 = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], o2 = this.w, n2 = e2, l2 = t3, h2 = null, c2 = new m(this.ctx), d2 = o2.config.markers.discrete && o2.config.markers.discrete.length;
          if ((o2.globals.markers.size[e2] > 0 || r2 || d2) && (h2 = c2.group({ class: r2 || d2 ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(o2.globals.cuid, ")")), Array.isArray(l2.x)) for (var g2 = 0; g2 < l2.x.length; g2++) {
            var u2 = i2;
            i2 === 1 && g2 === 0 && (u2 = 0), i2 === 1 && g2 === 1 && (u2 = 1);
            var p2 = "apexcharts-marker";
            if (o2.config.chart.type !== "line" && o2.config.chart.type !== "area" || o2.globals.comboCharts || o2.config.tooltip.intersect || (p2 += " no-pointer-events"), (Array.isArray(o2.config.markers.size) ? o2.globals.markers.size[e2] > 0 : o2.config.markers.size > 0) || r2 || d2) {
              x.isNumber(l2.y[g2]) ? p2 += " w".concat(x.randomId()) : p2 = "apexcharts-nullpoint";
              var f2 = this.getMarkerConfig({ cssClass: p2, seriesIndex: e2, dataPointIndex: u2 });
              o2.config.series[n2].data[u2] && (o2.config.series[n2].data[u2].fillColor && (f2.pointFillColor = o2.config.series[n2].data[u2].fillColor), o2.config.series[n2].data[u2].strokeColor && (f2.pointStrokeColor = o2.config.series[n2].data[u2].strokeColor)), a2 !== void 0 && (f2.pSize = a2), (l2.x[g2] < -o2.globals.markers.largestSize || l2.x[g2] > o2.globals.gridWidth + o2.globals.markers.largestSize || l2.y[g2] < -o2.globals.markers.largestSize || l2.y[g2] > o2.globals.gridHeight + o2.globals.markers.largestSize) && (f2.pSize = 0), (s2 = c2.drawMarker(l2.x[g2], l2.y[g2], f2)).attr("rel", u2), s2.attr("j", u2), s2.attr("index", e2), s2.node.setAttribute("default-marker-size", f2.pSize), new v(this.ctx).setSelectionFilter(s2, e2, u2), this.addEvents(s2), h2 && h2.add(s2);
            } else o2.globals.pointsArray[e2] === void 0 && (o2.globals.pointsArray[e2] = []), o2.globals.pointsArray[e2].push([l2.x[g2], l2.y[g2]]);
          }
          return h2;
        } }, { key: "getMarkerConfig", value: function(t3) {
          var e2 = t3.cssClass, i2 = t3.seriesIndex, a2 = t3.dataPointIndex, s2 = a2 === void 0 ? null : a2, r2 = t3.radius, o2 = r2 === void 0 ? null : r2, n2 = t3.size, l2 = n2 === void 0 ? null : n2, h2 = t3.strokeWidth, c2 = h2 === void 0 ? null : h2, d2 = this.w, g2 = this.getMarkerStyle(i2), u2 = l2 === null ? d2.globals.markers.size[i2] : l2, p2 = d2.config.markers;
          return s2 !== null && p2.discrete.length && p2.discrete.map(function(t4) {
            t4.seriesIndex === i2 && t4.dataPointIndex === s2 && (g2.pointStrokeColor = t4.strokeColor, g2.pointFillColor = t4.fillColor, u2 = t4.size, g2.pointShape = t4.shape);
          }), { pSize: o2 === null ? u2 : o2, pRadius: o2 !== null ? o2 : p2.radius, pointStrokeWidth: c2 !== null ? c2 : Array.isArray(p2.strokeWidth) ? p2.strokeWidth[i2] : p2.strokeWidth, pointStrokeColor: g2.pointStrokeColor, pointFillColor: g2.pointFillColor, shape: g2.pointShape || (Array.isArray(p2.shape) ? p2.shape[i2] : p2.shape), class: e2, pointStrokeOpacity: Array.isArray(p2.strokeOpacity) ? p2.strokeOpacity[i2] : p2.strokeOpacity, pointStrokeDashArray: Array.isArray(p2.strokeDashArray) ? p2.strokeDashArray[i2] : p2.strokeDashArray, pointFillOpacity: Array.isArray(p2.fillOpacity) ? p2.fillOpacity[i2] : p2.fillOpacity, seriesIndex: i2 };
        } }, { key: "addEvents", value: function(t3) {
          var e2 = this.w, i2 = new m(this.ctx);
          t3.node.addEventListener("mouseenter", i2.pathMouseEnter.bind(this.ctx, t3)), t3.node.addEventListener("mouseleave", i2.pathMouseLeave.bind(this.ctx, t3)), t3.node.addEventListener("mousedown", i2.pathMouseDown.bind(this.ctx, t3)), t3.node.addEventListener("click", e2.config.markers.onClick), t3.node.addEventListener("dblclick", e2.config.markers.onDblClick), t3.node.addEventListener("touchstart", i2.pathMouseDown.bind(this.ctx, t3), { passive: !0 });
        } }, { key: "getMarkerStyle", value: function(t3) {
          var e2 = this.w, i2 = e2.globals.markers.colors, a2 = e2.config.markers.strokeColor || e2.config.markers.strokeColors;
          return { pointStrokeColor: Array.isArray(a2) ? a2[t3] : a2, pointFillColor: Array.isArray(i2) ? i2[t3] : i2 };
        } }]), t2;
      }(), O = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.initialAnim = this.w.config.chart.animations.enabled;
        }
        return r(t2, [{ key: "draw", value: function(t3, e2, i2) {
          var a2 = this.w, s2 = new m(this.ctx), r2 = i2.realIndex, o2 = i2.pointsPos, n2 = i2.zRatio, l2 = i2.elParent, h2 = s2.group({ class: "apexcharts-series-markers apexcharts-series-".concat(a2.config.chart.type) });
          if (h2.attr("clip-path", "url(#gridRectMarkerMask".concat(a2.globals.cuid, ")")), Array.isArray(o2.x)) for (var c2 = 0; c2 < o2.x.length; c2++) {
            var d2 = e2 + 1, g2 = !0;
            e2 === 0 && c2 === 0 && (d2 = 0), e2 === 0 && c2 === 1 && (d2 = 1);
            var u2 = a2.globals.markers.size[r2];
            if (n2 !== 1 / 0) {
              var p2 = a2.config.plotOptions.bubble;
              u2 = a2.globals.seriesZ[r2][d2], p2.zScaling && (u2 /= n2), p2.minBubbleRadius && u2 < p2.minBubbleRadius && (u2 = p2.minBubbleRadius), p2.maxBubbleRadius && u2 > p2.maxBubbleRadius && (u2 = p2.maxBubbleRadius);
            }
            var f2 = o2.x[c2], x2 = o2.y[c2];
            if (u2 = u2 || 0, x2 !== null && a2.globals.series[r2][d2] !== void 0 || (g2 = !1), g2) {
              var b2 = this.drawPoint(f2, x2, u2, r2, d2, e2);
              h2.add(b2);
            }
            l2.add(h2);
          }
        } }, { key: "drawPoint", value: function(t3, e2, i2, a2, s2, r2) {
          var o2 = this.w, n2 = a2, l2 = new b(this.ctx), h2 = new v(this.ctx), c2 = new H(this.ctx), d2 = new D(this.ctx), g2 = new m(this.ctx), u2 = d2.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: n2, dataPointIndex: s2, radius: o2.config.chart.type === "bubble" || o2.globals.comboCharts && o2.config.series[a2] && o2.config.series[a2].type === "bubble" ? i2 : null }), p2 = c2.fillPath({ seriesNumber: a2, dataPointIndex: s2, color: u2.pointFillColor, patternUnits: "objectBoundingBox", value: o2.globals.series[a2][r2] }), f2 = g2.drawMarker(t3, e2, u2);
          if (o2.config.series[n2].data[s2] && o2.config.series[n2].data[s2].fillColor && (p2 = o2.config.series[n2].data[s2].fillColor), f2.attr({ fill: p2 }), o2.config.chart.dropShadow.enabled) {
            var x2 = o2.config.chart.dropShadow;
            h2.dropShadow(f2, x2, a2);
          }
          if (!this.initialAnim || o2.globals.dataChanged || o2.globals.resized) o2.globals.animationEnded = !0;
          else {
            var y2 = o2.config.chart.animations.speed;
            l2.animateMarker(f2, y2, o2.globals.easing, function() {
              window.setTimeout(function() {
                l2.animationCompleted(f2);
              }, 100);
            });
          }
          return f2.attr({ rel: s2, j: s2, index: a2, "default-marker-size": u2.pSize }), h2.setSelectionFilter(f2, a2, s2), d2.addEvents(f2), f2.node.classList.add("apexcharts-marker"), f2;
        } }, { key: "centerTextInBubble", value: function(t3) {
          var e2 = this.w;
          return { y: t3 += parseInt(e2.config.dataLabels.style.fontSize, 10) / 4 };
        } }]), t2;
      }(), N = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "dataLabelsCorrection", value: function(t3, e2, i2, a2, s2, r2, o2) {
          var n2 = this.w, l2 = !1, h2 = new m(this.ctx).getTextRects(i2, o2), c2 = h2.width, d2 = h2.height;
          e2 < 0 && (e2 = 0), e2 > n2.globals.gridHeight + d2 && (e2 = n2.globals.gridHeight + d2 / 2), n2.globals.dataLabelsRects[a2] === void 0 && (n2.globals.dataLabelsRects[a2] = []), n2.globals.dataLabelsRects[a2].push({ x: t3, y: e2, width: c2, height: d2 });
          var g2 = n2.globals.dataLabelsRects[a2].length - 2, u2 = n2.globals.lastDrawnDataLabelsIndexes[a2] !== void 0 ? n2.globals.lastDrawnDataLabelsIndexes[a2][n2.globals.lastDrawnDataLabelsIndexes[a2].length - 1] : 0;
          if (n2.globals.dataLabelsRects[a2][g2] !== void 0) {
            var p2 = n2.globals.dataLabelsRects[a2][u2];
            (t3 > p2.x + p2.width || e2 > p2.y + p2.height || e2 + d2 < p2.y || t3 + c2 < p2.x) && (l2 = !0);
          }
          return (s2 === 0 || r2) && (l2 = !0), { x: t3, y: e2, textRects: h2, drawnextLabel: l2 };
        } }, { key: "drawDataLabel", value: function(t3) {
          var e2 = this, i2 = t3.type, a2 = t3.pos, s2 = t3.i, r2 = t3.j, o2 = t3.isRangeStart, n2 = t3.strokeWidth, l2 = n2 === void 0 ? 2 : n2, h2 = this.w, c2 = new m(this.ctx), d2 = h2.config.dataLabels, g2 = 0, u2 = 0, p2 = r2, f2 = null;
          if (h2.globals.collapsedSeriesIndices.indexOf(s2) !== -1 || !d2.enabled || !Array.isArray(a2.x)) return f2;
          f2 = c2.group({ class: "apexcharts-data-labels" });
          for (var x2 = 0; x2 < a2.x.length; x2++) if (g2 = a2.x[x2] + d2.offsetX, u2 = a2.y[x2] + d2.offsetY + l2, !isNaN(g2)) {
            r2 === 1 && x2 === 0 && (p2 = 0), r2 === 1 && x2 === 1 && (p2 = 1);
            var b2 = h2.globals.series[s2][p2];
            i2 === "rangeArea" && (b2 = o2 ? h2.globals.seriesRangeStart[s2][p2] : h2.globals.seriesRangeEnd[s2][p2]);
            var v2 = "", y2 = function(t4) {
              return h2.config.dataLabels.formatter(t4, { ctx: e2.ctx, seriesIndex: s2, dataPointIndex: p2, w: h2 });
            };
            h2.config.chart.type === "bubble" ? (v2 = y2(b2 = h2.globals.seriesZ[s2][p2]), u2 = a2.y[x2], u2 = new O(this.ctx).centerTextInBubble(u2, s2, p2).y) : b2 !== void 0 && (v2 = y2(b2));
            var w2 = h2.config.dataLabels.textAnchor;
            h2.globals.isSlopeChart && (w2 = p2 === 0 ? "end" : p2 === h2.config.series[s2].data.length - 1 ? "start" : "middle"), this.plotDataLabelsText({ x: g2, y: u2, text: v2, i: s2, j: p2, parent: f2, offsetCorrection: !0, dataLabelsConfig: h2.config.dataLabels, textAnchor: w2 });
          }
          return f2;
        } }, { key: "plotDataLabelsText", value: function(t3) {
          var e2 = this.w, i2 = new m(this.ctx), a2 = t3.x, s2 = t3.y, r2 = t3.i, o2 = t3.j, n2 = t3.text, l2 = t3.textAnchor, h2 = t3.fontSize, c2 = t3.parent, d2 = t3.dataLabelsConfig, g2 = t3.color, u2 = t3.alwaysDrawDataLabel, p2 = t3.offsetCorrection, f2 = t3.className, x2 = null;
          if (Array.isArray(e2.config.dataLabels.enabledOnSeries) && e2.config.dataLabels.enabledOnSeries.indexOf(r2) < 0) return x2;
          var b2 = { x: a2, y: s2, drawnextLabel: !0, textRects: null };
          p2 && (b2 = this.dataLabelsCorrection(a2, s2, n2, r2, o2, u2, parseInt(d2.style.fontSize, 10))), e2.globals.zoomed || (a2 = b2.x, s2 = b2.y), b2.textRects && (a2 < -20 - b2.textRects.width || a2 > e2.globals.gridWidth + b2.textRects.width + 30) && (n2 = "");
          var y2 = e2.globals.dataLabels.style.colors[r2];
          ((e2.config.chart.type === "bar" || e2.config.chart.type === "rangeBar") && e2.config.plotOptions.bar.distributed || e2.config.dataLabels.distributed) && (y2 = e2.globals.dataLabels.style.colors[o2]), typeof y2 == "function" && (y2 = y2({ series: e2.globals.series, seriesIndex: r2, dataPointIndex: o2, w: e2 })), g2 && (y2 = g2);
          var w2 = d2.offsetX, k2 = d2.offsetY;
          if (e2.config.chart.type !== "bar" && e2.config.chart.type !== "rangeBar" || (w2 = 0, k2 = 0), e2.globals.isSlopeChart && (o2 !== 0 && (w2 = -2 * d2.offsetX + 5), o2 !== 0 && o2 !== e2.config.series[r2].data.length - 1 && (w2 = 0)), b2.drawnextLabel) {
            if ((x2 = i2.drawText({ width: 100, height: parseInt(d2.style.fontSize, 10), x: a2 + w2, y: s2 + k2, foreColor: y2, textAnchor: l2 || d2.textAnchor, text: n2, fontSize: h2 || d2.style.fontSize, fontFamily: d2.style.fontFamily, fontWeight: d2.style.fontWeight || "normal" })).attr({ class: f2 || "apexcharts-datalabel", cx: a2, cy: s2 }), d2.dropShadow.enabled) {
              var A2 = d2.dropShadow;
              new v(this.ctx).dropShadow(x2, A2);
            }
            c2.add(x2), e2.globals.lastDrawnDataLabelsIndexes[r2] === void 0 && (e2.globals.lastDrawnDataLabelsIndexes[r2] = []), e2.globals.lastDrawnDataLabelsIndexes[r2].push(o2);
          }
          return x2;
        } }, { key: "addBackgroundToDataLabel", value: function(t3, e2) {
          var i2 = this.w, a2 = i2.config.dataLabels.background, s2 = a2.padding, r2 = a2.padding / 2, o2 = e2.width, n2 = e2.height, l2 = new m(this.ctx).drawRect(e2.x - s2, e2.y - r2 / 2, o2 + 2 * s2, n2 + r2, a2.borderRadius, i2.config.chart.background !== "transparent" && i2.config.chart.background ? i2.config.chart.background : "#fff", a2.opacity, a2.borderWidth, a2.borderColor);
          return a2.dropShadow.enabled && new v(this.ctx).dropShadow(l2, a2.dropShadow), l2;
        } }, { key: "dataLabelsBackground", value: function() {
          var t3 = this.w;
          if (t3.config.chart.type !== "bubble") for (var e2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i2 = 0; i2 < e2.length; i2++) {
            var a2 = e2[i2], s2 = a2.getBBox(), r2 = null;
            if (s2.width && s2.height && (r2 = this.addBackgroundToDataLabel(a2, s2)), r2) {
              a2.parentNode.insertBefore(r2.node, a2);
              var o2 = a2.getAttribute("fill");
              t3.config.chart.animations.enabled && !t3.globals.resized && !t3.globals.dataChanged ? r2.animate().attr({ fill: o2 }) : r2.attr({ fill: o2 }), a2.setAttribute("fill", t3.config.dataLabels.background.foreColor);
            }
          }
        } }, { key: "bringForward", value: function() {
          for (var t3 = this.w, e2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i2 = t3.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a2 = 0; a2 < e2.length; a2++) i2 && i2.insertBefore(e2[a2], i2.nextSibling);
        } }]), t2;
      }(), W = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.legendInactiveClass = "legend-mouseover-inactive";
        }
        return r(t2, [{ key: "getAllSeriesEls", value: function() {
          return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
        } }, { key: "getSeriesByName", value: function(t3) {
          return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(x.escapeString(t3), "']"));
        } }, { key: "isSeriesHidden", value: function(t3) {
          var e2 = this.getSeriesByName(t3), i2 = parseInt(e2.getAttribute("data:realIndex"), 10);
          return { isHidden: e2.classList.contains("apexcharts-series-collapsed"), realIndex: i2 };
        } }, { key: "addCollapsedClassToSeries", value: function(t3, e2) {
          var i2 = this.w;
          function a2(i3) {
            for (var a3 = 0; a3 < i3.length; a3++) i3[a3].index === e2 && t3.node.classList.add("apexcharts-series-collapsed");
          }
          a2(i2.globals.collapsedSeries), a2(i2.globals.ancillaryCollapsedSeries);
        } }, { key: "toggleSeries", value: function(t3) {
          var e2 = this.isSeriesHidden(t3);
          return this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, e2.isHidden), e2.isHidden;
        } }, { key: "showSeries", value: function(t3) {
          var e2 = this.isSeriesHidden(t3);
          e2.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, !0);
        } }, { key: "hideSeries", value: function(t3) {
          var e2 = this.isSeriesHidden(t3);
          e2.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, !1);
        } }, { key: "resetSeries", value: function() {
          var t3 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], e2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i2 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], a2 = this.w, s2 = x.clone(a2.globals.initialSeries);
          a2.globals.previousPaths = [], i2 ? (a2.globals.collapsedSeries = [], a2.globals.ancillaryCollapsedSeries = [], a2.globals.collapsedSeriesIndices = [], a2.globals.ancillaryCollapsedSeriesIndices = []) : s2 = this.emptyCollapsedSeries(s2), a2.config.series = s2, t3 && (e2 && (a2.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s2, a2.config.chart.animations.dynamicAnimation.enabled));
        } }, { key: "emptyCollapsedSeries", value: function(t3) {
          for (var e2 = this.w, i2 = 0; i2 < t3.length; i2++) e2.globals.collapsedSeriesIndices.indexOf(i2) > -1 && (t3[i2].data = []);
          return t3;
        } }, { key: "toggleSeriesOnHover", value: function(t3, e2) {
          var i2 = this.w;
          e2 || (e2 = t3.target);
          var a2 = i2.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");
          if (t3.type === "mousemove") {
            var s2 = parseInt(e2.getAttribute("rel"), 10) - 1, r2 = null, o2 = null, n2 = null;
            if (i2.globals.axisCharts || i2.config.chart.type === "radialBar") if (i2.globals.axisCharts) {
              r2 = i2.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s2, "']")), o2 = i2.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s2, "']"));
              var l2 = i2.globals.seriesYAxisReverseMap[s2];
              n2 = i2.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(l2, "']"));
            } else r2 = i2.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s2 + 1, "']"));
            else r2 = i2.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s2 + 1, "'] path"));
            for (var h2 = 0; h2 < a2.length; h2++) a2[h2].classList.add(this.legendInactiveClass);
            r2 !== null && (i2.globals.axisCharts || r2.parentNode.classList.remove(this.legendInactiveClass), r2.classList.remove(this.legendInactiveClass), o2 !== null && o2.classList.remove(this.legendInactiveClass), n2 !== null && n2.classList.remove(this.legendInactiveClass));
          } else if (t3.type === "mouseout") for (var c2 = 0; c2 < a2.length; c2++) a2[c2].classList.remove(this.legendInactiveClass);
        } }, { key: "highlightRangeInSeries", value: function(t3, e2) {
          var i2 = this, a2 = this.w, s2 = a2.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), r2 = function(t4) {
            for (var e3 = 0; e3 < s2.length; e3++) s2[e3].classList[t4](i2.legendInactiveClass);
          };
          if (t3.type === "mousemove") {
            var o2 = parseInt(e2.getAttribute("rel"), 10) - 1;
            r2("add"), function(t4) {
              for (var e3 = 0; e3 < s2.length; e3++) {
                var a3 = parseInt(s2[e3].getAttribute("val"), 10);
                a3 >= t4.from && a3 <= t4.to && s2[e3].classList.remove(i2.legendInactiveClass);
              }
            }(a2.config.plotOptions.heatmap.colorScale.ranges[o2]);
          } else t3.type === "mouseout" && r2("remove");
        } }, { key: "getActiveConfigSeriesIndex", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "asc", e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i2 = this.w, a2 = 0;
          if (i2.config.series.length > 1) {
            for (var s2 = i2.config.series.map(function(t4, a3) {
              return t4.data && t4.data.length > 0 && i2.globals.collapsedSeriesIndices.indexOf(a3) === -1 && (!i2.globals.comboCharts || e2.length === 0 || e2.length && e2.indexOf(i2.config.series[a3].type) > -1) ? a3 : -1;
            }), r2 = t3 === "asc" ? 0 : s2.length - 1; t3 === "asc" ? r2 < s2.length : r2 >= 0; t3 === "asc" ? r2++ : r2--) if (s2[r2] !== -1) {
              a2 = s2[r2];
              break;
            }
          }
          return a2;
        } }, { key: "getBarSeriesIndices", value: function() {
          return this.w.globals.comboCharts ? this.w.config.series.map(function(t3, e2) {
            return t3.type === "bar" || t3.type === "column" ? e2 : -1;
          }).filter(function(t3) {
            return t3 !== -1;
          }) : this.w.config.series.map(function(t3, e2) {
            return e2;
          });
        } }, { key: "getPreviousPaths", value: function() {
          var t3 = this.w;
          function e2(e3, i3, a3) {
            for (var s3 = e3[i3].childNodes, r2 = { type: a3, paths: [], realIndex: e3[i3].getAttribute("data:realIndex") }, o2 = 0; o2 < s3.length; o2++) if (s3[o2].hasAttribute("pathTo")) {
              var n2 = s3[o2].getAttribute("pathTo");
              r2.paths.push({ d: n2 });
            }
            t3.globals.previousPaths.push(r2);
          }
          t3.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach(function(i3) {
            for (var a3, s3 = (a3 = i3, t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a3, "-series .apexcharts-series"))), r2 = 0; r2 < s3.length; r2++) e2(s3, r2, i3);
          }), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
          var i2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3.config.chart.type, " .apexcharts-series"));
          if (i2.length > 0) for (var a2 = function(e3) {
            for (var i3 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(e3, "'] rect")), a3 = [], s3 = function(t4) {
              var e4 = function(e5) {
                return i3[t4].getAttribute(e5);
              }, s4 = { x: parseFloat(e4("x")), y: parseFloat(e4("y")), width: parseFloat(e4("width")), height: parseFloat(e4("height")) };
              a3.push({ rect: s4, color: i3[t4].getAttribute("color") });
            }, r2 = 0; r2 < i3.length; r2++) s3(r2);
            t3.globals.previousPaths.push(a3);
          }, s2 = 0; s2 < i2.length; s2++) a2(s2);
          t3.globals.axisCharts || (t3.globals.previousPaths = t3.globals.series);
        } }, { key: "handlePrevBubbleScatterPaths", value: function(t3) {
          var e2 = this.w, i2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3, "-series .apexcharts-series"));
          if (i2.length > 0) for (var a2 = 0; a2 < i2.length; a2++) {
            for (var s2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3, "-series .apexcharts-series[data\\:realIndex='").concat(a2, "'] circle")), r2 = [], o2 = 0; o2 < s2.length; o2++) r2.push({ x: s2[o2].getAttribute("cx"), y: s2[o2].getAttribute("cy"), r: s2[o2].getAttribute("r") });
            e2.globals.previousPaths.push(r2);
          }
        } }, { key: "clearPreviousPaths", value: function() {
          var t3 = this.w;
          t3.globals.previousPaths = [], t3.globals.allSeriesCollapsed = !1;
        } }, { key: "handleNoData", value: function() {
          var t3 = this.w, e2 = t3.config.noData, i2 = new m(this.ctx), a2 = t3.globals.svgWidth / 2, s2 = t3.globals.svgHeight / 2, r2 = "middle";
          if (t3.globals.noData = !0, t3.globals.animationEnded = !0, e2.align === "left" ? (a2 = 10, r2 = "start") : e2.align === "right" && (a2 = t3.globals.svgWidth - 10, r2 = "end"), e2.verticalAlign === "top" ? s2 = 50 : e2.verticalAlign === "bottom" && (s2 = t3.globals.svgHeight - 50), a2 += e2.offsetX, s2 = s2 + parseInt(e2.style.fontSize, 10) + 2 + e2.offsetY, e2.text !== void 0 && e2.text !== "") {
            var o2 = i2.drawText({ x: a2, y: s2, text: e2.text, textAnchor: r2, fontSize: e2.style.fontSize, fontFamily: e2.style.fontFamily, foreColor: e2.style.color, opacity: 1, class: "apexcharts-text-nodata" });
            t3.globals.dom.Paper.add(o2);
          }
        } }, { key: "setNullSeriesToZeroValues", value: function(t3) {
          for (var e2 = this.w, i2 = 0; i2 < t3.length; i2++) if (t3[i2].length === 0) for (var a2 = 0; a2 < t3[e2.globals.maxValsInArrayIndex].length; a2++) t3[i2].push(0);
          return t3;
        } }, { key: "hasAllSeriesEqualX", value: function() {
          for (var t3 = !0, e2 = this.w, i2 = this.filteredSeriesX(), a2 = 0; a2 < i2.length - 1; a2++) if (i2[a2][0] !== i2[a2 + 1][0]) {
            t3 = !1;
            break;
          }
          return e2.globals.allSeriesHasEqualX = t3, t3;
        } }, { key: "filteredSeriesX", value: function() {
          var t3 = this.w.globals.seriesX.map(function(t4) {
            return t4.length > 0 ? t4 : [];
          });
          return t3;
        } }]), t2;
      }(), B = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new y(this.ctx);
        }
        return r(t2, [{ key: "isMultiFormat", value: function() {
          return this.isFormatXY() || this.isFormat2DArray();
        } }, { key: "isFormatXY", value: function() {
          var t3 = this.w.config.series.slice(), e2 = new W(this.ctx);
          if (this.activeSeriesIndex = e2.getActiveConfigSeriesIndex(), t3[this.activeSeriesIndex].data !== void 0 && t3[this.activeSeriesIndex].data.length > 0 && t3[this.activeSeriesIndex].data[0] !== null && t3[this.activeSeriesIndex].data[0].x !== void 0 && t3[this.activeSeriesIndex].data[0] !== null) return !0;
        } }, { key: "isFormat2DArray", value: function() {
          var t3 = this.w.config.series.slice(), e2 = new W(this.ctx);
          if (this.activeSeriesIndex = e2.getActiveConfigSeriesIndex(), t3[this.activeSeriesIndex].data !== void 0 && t3[this.activeSeriesIndex].data.length > 0 && t3[this.activeSeriesIndex].data[0] !== void 0 && t3[this.activeSeriesIndex].data[0] !== null && t3[this.activeSeriesIndex].data[0].constructor === Array) return !0;
        } }, { key: "handleFormat2DArray", value: function(t3, e2) {
          for (var i2 = this.w.config, a2 = this.w.globals, s2 = i2.chart.type === "boxPlot" || i2.series[e2].type === "boxPlot", r2 = 0; r2 < t3[e2].data.length; r2++) if (t3[e2].data[r2][1] !== void 0 && (Array.isArray(t3[e2].data[r2][1]) && t3[e2].data[r2][1].length === 4 && !s2 ? this.twoDSeries.push(x.parseNumber(t3[e2].data[r2][1][3])) : t3[e2].data[r2].length >= 5 ? this.twoDSeries.push(x.parseNumber(t3[e2].data[r2][4])) : this.twoDSeries.push(x.parseNumber(t3[e2].data[r2][1])), a2.dataFormatXNumeric = !0), i2.xaxis.type === "datetime") {
            var o2 = new Date(t3[e2].data[r2][0]);
            o2 = new Date(o2).getTime(), this.twoDSeriesX.push(o2);
          } else this.twoDSeriesX.push(t3[e2].data[r2][0]);
          for (var n2 = 0; n2 < t3[e2].data.length; n2++) t3[e2].data[n2][2] !== void 0 && (this.threeDSeries.push(t3[e2].data[n2][2]), a2.isDataXYZ = !0);
        } }, { key: "handleFormatXY", value: function(t3, e2) {
          var i2 = this.w.config, a2 = this.w.globals, s2 = new A(this.ctx), r2 = e2;
          a2.collapsedSeriesIndices.indexOf(e2) > -1 && (r2 = this.activeSeriesIndex);
          for (var o2 = 0; o2 < t3[e2].data.length; o2++) t3[e2].data[o2].y !== void 0 && (Array.isArray(t3[e2].data[o2].y) ? this.twoDSeries.push(x.parseNumber(t3[e2].data[o2].y[t3[e2].data[o2].y.length - 1])) : this.twoDSeries.push(x.parseNumber(t3[e2].data[o2].y))), t3[e2].data[o2].goals !== void 0 && Array.isArray(t3[e2].data[o2].goals) ? (this.seriesGoals[e2] === void 0 && (this.seriesGoals[e2] = []), this.seriesGoals[e2].push(t3[e2].data[o2].goals)) : (this.seriesGoals[e2] === void 0 && (this.seriesGoals[e2] = []), this.seriesGoals[e2].push(null));
          for (var n2 = 0; n2 < t3[r2].data.length; n2++) {
            var l2 = typeof t3[r2].data[n2].x == "string", h2 = Array.isArray(t3[r2].data[n2].x), c2 = !h2 && !!s2.isValidDate(t3[r2].data[n2].x);
            if (l2 || c2) if (l2 || i2.xaxis.convertedCatToNumeric) {
              var d2 = a2.isBarHorizontal && a2.isRangeData;
              i2.xaxis.type !== "datetime" || d2 ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t3[r2].data[n2].x), isNaN(t3[r2].data[n2].x) || this.w.config.xaxis.type === "category" || typeof t3[r2].data[n2].x == "string" || (a2.isXNumeric = !0)) : this.twoDSeriesX.push(s2.parseDate(t3[r2].data[n2].x));
            } else i2.xaxis.type === "datetime" ? this.twoDSeriesX.push(s2.parseDate(t3[r2].data[n2].x.toString())) : (a2.dataFormatXNumeric = !0, a2.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t3[r2].data[n2].x)));
            else h2 ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t3[r2].data[n2].x)) : (a2.isXNumeric = !0, a2.dataFormatXNumeric = !0, this.twoDSeriesX.push(t3[r2].data[n2].x));
          }
          if (t3[e2].data[0] && t3[e2].data[0].z !== void 0) {
            for (var g2 = 0; g2 < t3[e2].data.length; g2++) this.threeDSeries.push(t3[e2].data[g2].z);
            a2.isDataXYZ = !0;
          }
        } }, { key: "handleRangeData", value: function(t3, e2) {
          var i2 = this.w.globals, a2 = {};
          return this.isFormat2DArray() ? a2 = this.handleRangeDataFormat("array", t3, e2) : this.isFormatXY() && (a2 = this.handleRangeDataFormat("xy", t3, e2)), i2.seriesRangeStart.push(a2.start === void 0 ? [] : a2.start), i2.seriesRangeEnd.push(a2.end === void 0 ? [] : a2.end), i2.seriesRange.push(a2.rangeUniques), i2.seriesRange.forEach(function(t4, e3) {
            t4 && t4.forEach(function(t5, e4) {
              t5.y.forEach(function(e5, i3) {
                for (var a3 = 0; a3 < t5.y.length; a3++) if (i3 !== a3) {
                  var s2 = e5.y1, r2 = e5.y2, o2 = t5.y[a3].y1;
                  s2 <= t5.y[a3].y2 && o2 <= r2 && (t5.overlaps.indexOf(e5.rangeName) < 0 && t5.overlaps.push(e5.rangeName), t5.overlaps.indexOf(t5.y[a3].rangeName) < 0 && t5.overlaps.push(t5.y[a3].rangeName));
                }
              });
            });
          }), a2;
        } }, { key: "handleCandleStickBoxData", value: function(t3, e2) {
          var i2 = this.w.globals, a2 = {};
          return this.isFormat2DArray() ? a2 = this.handleCandleStickBoxDataFormat("array", t3, e2) : this.isFormatXY() && (a2 = this.handleCandleStickBoxDataFormat("xy", t3, e2)), i2.seriesCandleO[e2] = a2.o, i2.seriesCandleH[e2] = a2.h, i2.seriesCandleM[e2] = a2.m, i2.seriesCandleL[e2] = a2.l, i2.seriesCandleC[e2] = a2.c, a2;
        } }, { key: "handleRangeDataFormat", value: function(t3, e2, i2) {
          var a2 = [], s2 = [], r2 = e2[i2].data.filter(function(t4, e3, i3) {
            return e3 === i3.findIndex(function(e4) {
              return e4.x === t4.x;
            });
          }).map(function(t4, e3) {
            return { x: t4.x, overlaps: [], y: [] };
          });
          if (t3 === "array") for (var o2 = 0; o2 < e2[i2].data.length; o2++) Array.isArray(e2[i2].data[o2]) ? (a2.push(e2[i2].data[o2][1][0]), s2.push(e2[i2].data[o2][1][1])) : (a2.push(e2[i2].data[o2]), s2.push(e2[i2].data[o2]));
          else if (t3 === "xy") for (var n2 = function(t4) {
            var o3 = Array.isArray(e2[i2].data[t4].y), n3 = x.randomId(), l3 = e2[i2].data[t4].x, h2 = { y1: o3 ? e2[i2].data[t4].y[0] : e2[i2].data[t4].y, y2: o3 ? e2[i2].data[t4].y[1] : e2[i2].data[t4].y, rangeName: n3 };
            e2[i2].data[t4].rangeName = n3;
            var c2 = r2.findIndex(function(t5) {
              return t5.x === l3;
            });
            r2[c2].y.push(h2), a2.push(h2.y1), s2.push(h2.y2);
          }, l2 = 0; l2 < e2[i2].data.length; l2++) n2(l2);
          return { start: a2, end: s2, rangeUniques: r2 };
        } }, { key: "handleCandleStickBoxDataFormat", value: function(t3, e2, i2) {
          var a2 = this.w, s2 = a2.config.chart.type === "boxPlot" || a2.config.series[i2].type === "boxPlot", r2 = [], o2 = [], n2 = [], l2 = [], h2 = [];
          if (t3 === "array") if (s2 && e2[i2].data[0].length === 6 || !s2 && e2[i2].data[0].length === 5) for (var c2 = 0; c2 < e2[i2].data.length; c2++) r2.push(e2[i2].data[c2][1]), o2.push(e2[i2].data[c2][2]), s2 ? (n2.push(e2[i2].data[c2][3]), l2.push(e2[i2].data[c2][4]), h2.push(e2[i2].data[c2][5])) : (l2.push(e2[i2].data[c2][3]), h2.push(e2[i2].data[c2][4]));
          else for (var d2 = 0; d2 < e2[i2].data.length; d2++) Array.isArray(e2[i2].data[d2][1]) && (r2.push(e2[i2].data[d2][1][0]), o2.push(e2[i2].data[d2][1][1]), s2 ? (n2.push(e2[i2].data[d2][1][2]), l2.push(e2[i2].data[d2][1][3]), h2.push(e2[i2].data[d2][1][4])) : (l2.push(e2[i2].data[d2][1][2]), h2.push(e2[i2].data[d2][1][3])));
          else if (t3 === "xy") for (var g2 = 0; g2 < e2[i2].data.length; g2++) Array.isArray(e2[i2].data[g2].y) && (r2.push(e2[i2].data[g2].y[0]), o2.push(e2[i2].data[g2].y[1]), s2 ? (n2.push(e2[i2].data[g2].y[2]), l2.push(e2[i2].data[g2].y[3]), h2.push(e2[i2].data[g2].y[4])) : (l2.push(e2[i2].data[g2].y[2]), h2.push(e2[i2].data[g2].y[3])));
          return { o: r2, h: o2, m: n2, l: l2, c: h2 };
        } }, { key: "parseDataAxisCharts", value: function(t3) {
          var e2 = this, i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.ctx, a2 = this.w.config, s2 = this.w.globals, r2 = new A(i2), o2 = a2.labels.length > 0 ? a2.labels.slice() : a2.xaxis.categories.slice();
          s2.isRangeBar = a2.chart.type === "rangeBar" && s2.isBarHorizontal, s2.hasXaxisGroups = a2.xaxis.type === "category" && a2.xaxis.group.groups.length > 0, s2.hasXaxisGroups && (s2.groups = a2.xaxis.group.groups), t3.forEach(function(t4, e3) {
            t4.name !== void 0 ? s2.seriesNames.push(t4.name) : s2.seriesNames.push("series-" + parseInt(e3 + 1, 10));
          }), this.coreUtils.setSeriesYAxisMappings();
          var n2 = [], l2 = u(new Set(a2.series.map(function(t4) {
            return t4.group;
          })));
          a2.series.forEach(function(t4, e3) {
            var i3 = l2.indexOf(t4.group);
            n2[i3] || (n2[i3] = []), n2[i3].push(s2.seriesNames[e3]);
          }), s2.seriesGroups = n2;
          for (var h2 = function() {
            for (var t4 = 0; t4 < o2.length; t4++) if (typeof o2[t4] == "string") {
              if (!r2.isValidDate(o2[t4])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
              e2.twoDSeriesX.push(r2.parseDate(o2[t4]));
            } else e2.twoDSeriesX.push(o2[t4]);
          }, c2 = 0; c2 < t3.length; c2++) {
            if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], t3[c2].data === void 0) return void console.error("It is a possibility that you may have not included 'data' property in series.");
            if (a2.chart.type !== "rangeBar" && a2.chart.type !== "rangeArea" && t3[c2].type !== "rangeBar" && t3[c2].type !== "rangeArea" || (s2.isRangeData = !0, a2.chart.type !== "rangeBar" && a2.chart.type !== "rangeArea" || this.handleRangeData(t3, c2)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t3, c2) : this.isFormatXY() && this.handleFormatXY(t3, c2), a2.chart.type !== "candlestick" && t3[c2].type !== "candlestick" && a2.chart.type !== "boxPlot" && t3[c2].type !== "boxPlot" || this.handleCandleStickBoxData(t3, c2), s2.series.push(this.twoDSeries), s2.labels.push(this.twoDSeriesX), s2.seriesX.push(this.twoDSeriesX), s2.seriesGoals = this.seriesGoals, c2 !== this.activeSeriesIndex || this.fallbackToCategory || (s2.isXNumeric = !0);
            else {
              a2.xaxis.type === "datetime" ? (s2.isXNumeric = !0, h2(), s2.seriesX.push(this.twoDSeriesX)) : a2.xaxis.type === "numeric" && (s2.isXNumeric = !0, o2.length > 0 && (this.twoDSeriesX = o2, s2.seriesX.push(this.twoDSeriesX))), s2.labels.push(this.twoDSeriesX);
              var d2 = t3[c2].data.map(function(t4) {
                return x.parseNumber(t4);
              });
              s2.series.push(d2);
            }
            s2.seriesZ.push(this.threeDSeries), t3[c2].color !== void 0 ? s2.seriesColors.push(t3[c2].color) : s2.seriesColors.push(void 0);
          }
          return this.w;
        } }, { key: "parseDataNonAxisCharts", value: function(t3) {
          var e2 = this.w.globals, i2 = this.w.config;
          e2.series = t3.slice(), e2.seriesNames = i2.labels.slice();
          for (var a2 = 0; a2 < e2.series.length; a2++) e2.seriesNames[a2] === void 0 && e2.seriesNames.push("series-" + (a2 + 1));
          return this.w;
        } }, { key: "handleExternalLabelsData", value: function(t3) {
          var e2 = this.w.config, i2 = this.w.globals;
          e2.xaxis.categories.length > 0 ? i2.labels = e2.xaxis.categories : e2.labels.length > 0 ? i2.labels = e2.labels.slice() : this.fallbackToCategory ? (i2.labels = i2.labels[0], i2.seriesRange.length && (i2.seriesRange.map(function(t4) {
            t4.forEach(function(t5) {
              i2.labels.indexOf(t5.x) < 0 && t5.x && i2.labels.push(t5.x);
            });
          }), i2.labels = Array.from(new Set(i2.labels.map(JSON.stringify)), JSON.parse)), e2.xaxis.convertedCatToNumeric && (new E(e2).convertCatToNumericXaxis(e2, this.ctx, i2.seriesX[0]), this._generateExternalLabels(t3))) : this._generateExternalLabels(t3);
        } }, { key: "_generateExternalLabels", value: function(t3) {
          var e2 = this.w.globals, i2 = this.w.config, a2 = [];
          if (e2.axisCharts) {
            if (e2.series.length > 0) if (this.isFormatXY()) for (var s2 = i2.series.map(function(t4, e3) {
              return t4.data.filter(function(t5, e4, i3) {
                return i3.findIndex(function(e5) {
                  return e5.x === t5.x;
                }) === e4;
              });
            }), r2 = s2.reduce(function(t4, e3, i3, a3) {
              return a3[t4].length > e3.length ? t4 : i3;
            }, 0), o2 = 0; o2 < s2[r2].length; o2++) a2.push(o2 + 1);
            else for (var n2 = 0; n2 < e2.series[e2.maxValsInArrayIndex].length; n2++) a2.push(n2 + 1);
            e2.seriesX = [];
            for (var l2 = 0; l2 < t3.length; l2++) e2.seriesX.push(a2);
            this.w.globals.isBarHorizontal || (e2.isXNumeric = !0);
          }
          if (a2.length === 0) {
            a2 = e2.axisCharts ? [] : e2.series.map(function(t4, e3) {
              return e3 + 1;
            });
            for (var h2 = 0; h2 < t3.length; h2++) e2.seriesX.push(a2);
          }
          e2.labels = a2, i2.xaxis.convertedCatToNumeric && (e2.categoryLabels = a2.map(function(t4) {
            return i2.xaxis.labels.formatter(t4);
          })), e2.noLabelsProvided = !0;
        } }, { key: "parseData", value: function(t3) {
          var e2 = this.w, i2 = e2.config, a2 = e2.globals;
          if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a2.axisCharts ? (this.parseDataAxisCharts(t3), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t3), i2.chart.stacked) {
            var s2 = new W(this.ctx);
            a2.series = s2.setNullSeriesToZeroValues(a2.series);
          }
          this.coreUtils.getSeriesTotals(), a2.axisCharts && (a2.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), a2.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), a2.dataFormatXNumeric || a2.isXNumeric && (i2.xaxis.type !== "numeric" || i2.labels.length !== 0 || i2.xaxis.categories.length !== 0) || this.handleExternalLabelsData(t3);
          for (var r2 = this.coreUtils.getCategoryLabels(a2.labels), o2 = 0; o2 < r2.length; o2++) if (Array.isArray(r2[o2])) {
            a2.isMultiLineX = !0;
            break;
          }
        } }, { key: "excludeCollapsedSeriesInYAxis", value: function() {
          var t3 = this.w, e2 = [];
          t3.globals.seriesYAxisMap.forEach(function(i2, a2) {
            var s2 = 0;
            i2.forEach(function(e3) {
              t3.globals.collapsedSeriesIndices.indexOf(e3) !== -1 && s2++;
            }), s2 > 0 && s2 == i2.length && e2.push(a2);
          }), t3.globals.ignoreYAxisIndexes = e2.map(function(t4) {
            return t4;
          });
        } }]), t2;
      }(), G = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "scaleSvgNode", value: function(t3, e2) {
          var i2 = parseFloat(t3.getAttributeNS(null, "width")), a2 = parseFloat(t3.getAttributeNS(null, "height"));
          t3.setAttributeNS(null, "width", i2 * e2), t3.setAttributeNS(null, "height", a2 * e2), t3.setAttributeNS(null, "viewBox", "0 0 " + i2 + " " + a2);
        } }, { key: "fixSvgStringForIe11", value: function(t3) {
          if (!x.isIE11()) return t3.replace(/&nbsp;/g, "&#160;");
          var e2 = 0, i2 = t3.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, function(t4) {
            return ++e2 === 2 ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"' : t4;
          });
          return i2 = (i2 = i2.replace(/xmlns:NS\d+=""/g, "")).replace(/NS\d+:(\w+:\w+=")/g, "$1");
        } }, { key: "getSvgString", value: function(t3) {
          t3 == null && (t3 = 1);
          var e2 = this.w.globals.dom.Paper.svg();
          if (t3 !== 1) {
            var i2 = this.w.globals.dom.Paper.node.cloneNode(!0);
            this.scaleSvgNode(i2, t3), e2 = new XMLSerializer().serializeToString(i2);
          }
          return this.fixSvgStringForIe11(e2);
        } }, { key: "cleanup", value: function() {
          var t3 = this.w, e2 = t3.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"), i2 = t3.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"), a2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
          Array.prototype.forEach.call(a2, function(t4) {
            t4.setAttribute("width", 0);
          }), e2 && e2[0] && (e2[0].setAttribute("x", -500), e2[0].setAttribute("x1", -500), e2[0].setAttribute("x2", -500)), i2 && i2[0] && (i2[0].setAttribute("y", -100), i2[0].setAttribute("y1", -100), i2[0].setAttribute("y2", -100));
        } }, { key: "svgUrl", value: function() {
          this.cleanup();
          var t3 = this.getSvgString(), e2 = new Blob([t3], { type: "image/svg+xml;charset=utf-8" });
          return URL.createObjectURL(e2);
        } }, { key: "dataURI", value: function(t3) {
          var e2 = this;
          return new Promise(function(i2) {
            var a2 = e2.w, s2 = t3 ? t3.scale || t3.width / a2.globals.svgWidth : 1;
            e2.cleanup();
            var r2 = document.createElement("canvas");
            r2.width = a2.globals.svgWidth * s2, r2.height = parseInt(a2.globals.dom.elWrap.style.height, 10) * s2;
            var o2 = a2.config.chart.background !== "transparent" && a2.config.chart.background ? a2.config.chart.background : "#fff", n2 = r2.getContext("2d");
            n2.fillStyle = o2, n2.fillRect(0, 0, r2.width * s2, r2.height * s2);
            var l2 = e2.getSvgString(s2);
            if (window.canvg && x.isIE11()) {
              var h2 = window.canvg.Canvg.fromString(n2, l2, { ignoreClear: !0, ignoreDimensions: !0 });
              h2.start();
              var c2 = r2.msToBlob();
              h2.stop(), i2({ blob: c2 });
            } else {
              var d2 = "data:image/svg+xml," + encodeURIComponent(l2), g2 = new Image();
              g2.crossOrigin = "anonymous", g2.onload = function() {
                if (n2.drawImage(g2, 0, 0), r2.msToBlob) {
                  var t4 = r2.msToBlob();
                  i2({ blob: t4 });
                } else {
                  var e3 = r2.toDataURL("image/png");
                  i2({ imgURI: e3 });
                }
              }, g2.src = d2;
            }
          });
        } }, { key: "exportToSVG", value: function() {
          this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar.export.svg.filename, ".svg");
        } }, { key: "exportToPng", value: function() {
          var t3 = this;
          this.dataURI().then(function(e2) {
            var i2 = e2.imgURI, a2 = e2.blob;
            a2 ? navigator.msSaveOrOpenBlob(a2, t3.w.globals.chartID + ".png") : t3.triggerDownload(i2, t3.w.config.chart.toolbar.export.png.filename, ".png");
          });
        } }, { key: "exportToCSV", value: function(t3) {
          var e2 = this, i2 = t3.series, a2 = t3.fileName, s2 = t3.columnDelimiter, r2 = s2 === void 0 ? "," : s2, o2 = t3.lineDelimiter, n2 = o2 === void 0 ? `
` : o2, l2 = this.w;
          i2 || (i2 = l2.config.series);
          var h2, c2, d2 = [], g2 = [], p2 = "", f2 = l2.globals.series.map(function(t4, e3) {
            return l2.globals.collapsedSeriesIndices.indexOf(e3) === -1 ? t4 : [];
          }), b2 = function(t4) {
            return typeof l2.config.chart.toolbar.export.csv.categoryFormatter == "function" ? l2.config.chart.toolbar.export.csv.categoryFormatter(t4) : l2.config.xaxis.type === "datetime" && String(t4).length >= 10 ? new Date(t4).toDateString() : x.isNumber(t4) ? t4 : t4.split(r2).join("");
          }, v2 = function(t4) {
            return typeof l2.config.chart.toolbar.export.csv.valueFormatter == "function" ? l2.config.chart.toolbar.export.csv.valueFormatter(t4) : t4;
          }, m2 = Math.max.apply(Math, u(i2.map(function(t4) {
            return t4.data ? t4.data.length : 0;
          }))), y2 = new B(this.ctx), w2 = new C(this.ctx), k2 = function(t4) {
            var i3 = "";
            if (l2.globals.axisCharts) {
              if (l2.config.xaxis.type === "category" || l2.config.xaxis.convertedCatToNumeric) if (l2.globals.isBarHorizontal) {
                var a3 = l2.globals.yLabelFormatters[0], s3 = new W(e2.ctx).getActiveConfigSeriesIndex();
                i3 = a3(l2.globals.labels[t4], { seriesIndex: s3, dataPointIndex: t4, w: l2 });
              } else i3 = w2.getLabel(l2.globals.labels, l2.globals.timescaleLabels, 0, t4).text;
              l2.config.xaxis.type === "datetime" && (l2.config.xaxis.categories.length ? i3 = l2.config.xaxis.categories[t4] : l2.config.labels.length && (i3 = l2.config.labels[t4]));
            } else i3 = l2.config.labels[t4];
            return i3 === null ? "nullvalue" : (Array.isArray(i3) && (i3 = i3.join(" ")), x.isNumber(i3) ? i3 : i3.split(r2).join(""));
          }, A2 = function(t4, e3) {
            if (d2.length && e3 === 0 && g2.push(d2.join(r2)), t4.data) {
              t4.data = t4.data.length && t4.data || u(Array(m2)).map(function() {
                return "";
              });
              for (var a3 = 0; a3 < t4.data.length; a3++) {
                d2 = [];
                var s3 = k2(a3);
                if (s3 !== "nullvalue") {
                  if (s3 || (y2.isFormatXY() ? s3 = i2[e3].data[a3].x : y2.isFormat2DArray() && (s3 = i2[e3].data[a3] ? i2[e3].data[a3][0] : "")), e3 === 0) {
                    d2.push(b2(s3));
                    for (var o3 = 0; o3 < l2.globals.series.length; o3++) {
                      var n3, h3 = y2.isFormatXY() ? (n3 = i2[o3].data[a3]) === null || n3 === void 0 ? void 0 : n3.y : f2[o3][a3];
                      d2.push(v2(h3));
                    }
                  }
                  (l2.config.chart.type === "candlestick" || t4.type && t4.type === "candlestick") && (d2.pop(), d2.push(l2.globals.seriesCandleO[e3][a3]), d2.push(l2.globals.seriesCandleH[e3][a3]), d2.push(l2.globals.seriesCandleL[e3][a3]), d2.push(l2.globals.seriesCandleC[e3][a3])), (l2.config.chart.type === "boxPlot" || t4.type && t4.type === "boxPlot") && (d2.pop(), d2.push(l2.globals.seriesCandleO[e3][a3]), d2.push(l2.globals.seriesCandleH[e3][a3]), d2.push(l2.globals.seriesCandleM[e3][a3]), d2.push(l2.globals.seriesCandleL[e3][a3]), d2.push(l2.globals.seriesCandleC[e3][a3])), l2.config.chart.type === "rangeBar" && (d2.pop(), d2.push(l2.globals.seriesRangeStart[e3][a3]), d2.push(l2.globals.seriesRangeEnd[e3][a3])), d2.length && g2.push(d2.join(r2));
                }
              }
            }
          };
          d2.push(l2.config.chart.toolbar.export.csv.headerCategory), l2.config.chart.type === "boxPlot" ? (d2.push("minimum"), d2.push("q1"), d2.push("median"), d2.push("q3"), d2.push("maximum")) : l2.config.chart.type === "candlestick" ? (d2.push("open"), d2.push("high"), d2.push("low"), d2.push("close")) : l2.config.chart.type === "rangeBar" ? (d2.push("minimum"), d2.push("maximum")) : i2.map(function(t4, e3) {
            var i3 = (t4.name ? t4.name : "series-".concat(e3)) + "";
            l2.globals.axisCharts && d2.push(i3.split(r2).join("") ? i3.split(r2).join("") : "series-".concat(e3));
          }), l2.globals.axisCharts || (d2.push(l2.config.chart.toolbar.export.csv.headerValue), g2.push(d2.join(r2))), l2.globals.allSeriesHasEqualX || !l2.globals.axisCharts || l2.config.xaxis.categories.length || l2.config.labels.length ? i2.map(function(t4, e3) {
            l2.globals.axisCharts ? A2(t4, e3) : ((d2 = []).push(b2(l2.globals.labels[e3])), d2.push(v2(f2[e3])), g2.push(d2.join(r2)));
          }) : (h2 = /* @__PURE__ */ new Set(), c2 = {}, i2.forEach(function(t4, e3) {
            t4?.data.forEach(function(t5) {
              var a3, s3;
              if (y2.isFormatXY()) a3 = t5.x, s3 = t5.y;
              else {
                if (!y2.isFormat2DArray()) return;
                a3 = t5[0], s3 = t5[1];
              }
              c2[a3] || (c2[a3] = Array(i2.length).fill("")), c2[a3][e3] = v2(s3), h2.add(a3);
            });
          }), d2.length && g2.push(d2.join(r2)), Array.from(h2).sort().forEach(function(t4) {
            g2.push([b2(t4), c2[t4].join(r2)]);
          })), p2 += g2.join(n2), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + p2), a2 || l2.config.chart.toolbar.export.csv.filename, ".csv");
        } }, { key: "triggerDownload", value: function(t3, e2, i2) {
          var a2 = document.createElement("a");
          a2.href = t3, a2.download = (e2 || this.w.globals.chartID) + i2, document.body.appendChild(a2), a2.click(), document.body.removeChild(a2);
        } }]), t2;
      }(), V = function() {
        function t2(e2, i2) {
          a(this, t2), this.ctx = e2, this.elgrid = i2, this.w = e2.w;
          var s2 = this.w;
          this.axesUtils = new C(e2), this.xaxisLabels = s2.globals.labels.slice(), s2.globals.timescaleLabels.length > 0 && !s2.globals.isBarHorizontal && (this.xaxisLabels = s2.globals.timescaleLabels.slice()), s2.config.xaxis.overwriteCategories && (this.xaxisLabels = s2.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], s2.config.xaxis.position === "top" ? this.offY = 0 : this.offY = s2.globals.gridHeight, this.offY = this.offY + s2.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = s2.config.chart.type === "bar" && s2.config.plotOptions.bar.horizontal, this.xaxisFontSize = s2.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = s2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = s2.config.xaxis.labels.style.colors, this.xaxisBorderWidth = s2.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = s2.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = s2.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = s2.config.xaxis.axisBorder.height, this.yaxis = s2.config.yaxis[0];
        }
        return r(t2, [{ key: "drawXaxis", value: function() {
          var t3 = this.w, e2 = new m(this.ctx), i2 = e2.group({ class: "apexcharts-xaxis", transform: "translate(".concat(t3.config.xaxis.offsetX, ", ").concat(t3.config.xaxis.offsetY, ")") }), a2 = e2.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(t3.globals.translateXAxisX, ", ").concat(t3.globals.translateXAxisY, ")") });
          i2.add(a2);
          for (var s2 = [], r2 = 0; r2 < this.xaxisLabels.length; r2++) s2.push(this.xaxisLabels[r2]);
          if (this.drawXAxisLabelAndGroup(!0, e2, a2, s2, t3.globals.isXNumeric, function(t4, e3) {
            return e3;
          }), t3.globals.hasXaxisGroups) {
            var o2 = t3.globals.groups;
            s2 = [];
            for (var n2 = 0; n2 < o2.length; n2++) s2.push(o2[n2].title);
            var l2 = {};
            t3.config.xaxis.group.style && (l2.xaxisFontSize = t3.config.xaxis.group.style.fontSize, l2.xaxisFontFamily = t3.config.xaxis.group.style.fontFamily, l2.xaxisForeColors = t3.config.xaxis.group.style.colors, l2.fontWeight = t3.config.xaxis.group.style.fontWeight, l2.cssClass = t3.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(!1, e2, a2, s2, !1, function(t4, e3) {
              return o2[t4].cols * e3;
            }, l2);
          }
          if (t3.config.xaxis.title.text !== void 0) {
            var h2 = e2.group({ class: "apexcharts-xaxis-title" }), c2 = e2.drawText({ x: t3.globals.gridWidth / 2 + t3.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + (t3.config.xaxis.position === "bottom" ? t3.globals.xAxisLabelsHeight : -t3.globals.xAxisLabelsHeight - 10) + t3.config.xaxis.title.offsetY, text: t3.config.xaxis.title.text, textAnchor: "middle", fontSize: t3.config.xaxis.title.style.fontSize, fontFamily: t3.config.xaxis.title.style.fontFamily, fontWeight: t3.config.xaxis.title.style.fontWeight, foreColor: t3.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + t3.config.xaxis.title.style.cssClass });
            h2.add(c2), i2.add(h2);
          }
          if (t3.config.xaxis.axisBorder.show) {
            var d2 = t3.globals.barPadForNumericAxis, g2 = e2.drawLine(t3.globals.padHorizontal + t3.config.xaxis.axisBorder.offsetX - d2, this.offY, this.xaxisBorderWidth + d2, this.offY, t3.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
            this.elgrid && this.elgrid.elGridBorders && t3.config.grid.show ? this.elgrid.elGridBorders.add(g2) : i2.add(g2);
          }
          return i2;
        } }, { key: "drawXAxisLabelAndGroup", value: function(t3, e2, i2, a2, s2, r2) {
          var o2, n2 = this, l2 = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : {}, h2 = [], c2 = [], d2 = this.w, g2 = l2.xaxisFontSize || this.xaxisFontSize, u2 = l2.xaxisFontFamily || this.xaxisFontFamily, p2 = l2.xaxisForeColors || this.xaxisForeColors, f2 = l2.fontWeight || d2.config.xaxis.labels.style.fontWeight, x2 = l2.cssClass || d2.config.xaxis.labels.style.cssClass, b2 = d2.globals.padHorizontal, v2 = a2.length, m2 = d2.config.xaxis.type === "category" ? d2.globals.dataPoints : v2;
          if (m2 === 0 && v2 > m2 && (m2 = v2), s2) {
            var y2 = m2 > 1 ? m2 - 1 : m2;
            o2 = d2.globals.gridWidth / Math.min(y2, v2 - 1), b2 = b2 + r2(0, o2) / 2 + d2.config.xaxis.labels.offsetX;
          } else o2 = d2.globals.gridWidth / m2, b2 = b2 + r2(0, o2) + d2.config.xaxis.labels.offsetX;
          for (var w2 = function(s3) {
            var l3 = b2 - r2(s3, o2) / 2 + d2.config.xaxis.labels.offsetX;
            s3 === 0 && v2 === 1 && o2 / 2 === b2 && m2 === 1 && (l3 = d2.globals.gridWidth / 2);
            var y3 = n2.axesUtils.getLabel(a2, d2.globals.timescaleLabels, l3, s3, h2, g2, t3), w3 = 28;
            if (d2.globals.rotateXLabels && t3 && (w3 = 22), d2.config.xaxis.title.text && d2.config.xaxis.position === "top" && (w3 += parseFloat(d2.config.xaxis.title.style.fontSize) + 2), t3 || (w3 = w3 + parseFloat(g2) + (d2.globals.xAxisLabelsHeight - d2.globals.xAxisGroupLabelsHeight) + (d2.globals.rotateXLabels ? 10 : 0)), y3 = d2.config.xaxis.tickAmount !== void 0 && d2.config.xaxis.tickAmount !== "dataPoints" && d2.config.xaxis.type !== "datetime" ? n2.axesUtils.checkLabelBasedOnTickamount(s3, y3, v2) : n2.axesUtils.checkForOverflowingLabels(s3, y3, v2, h2, c2), d2.config.xaxis.labels.show) {
              var k3 = e2.drawText({ x: y3.x, y: n2.offY + d2.config.xaxis.labels.offsetY + w3 - (d2.config.xaxis.position === "top" ? d2.globals.xAxisHeight + d2.config.xaxis.axisTicks.height - 2 : 0), text: y3.text, textAnchor: "middle", fontWeight: y3.isBold ? 600 : f2, fontSize: g2, fontFamily: u2, foreColor: Array.isArray(p2) ? t3 && d2.config.xaxis.convertedCatToNumeric ? p2[d2.globals.minX + s3 - 1] : p2[s3] : p2, isPlainText: !1, cssClass: (t3 ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + x2 });
              if (i2.add(k3), k3.on("click", function(t4) {
                if (typeof d2.config.chart.events.xAxisLabelClick == "function") {
                  var e3 = Object.assign({}, d2, { labelIndex: s3 });
                  d2.config.chart.events.xAxisLabelClick(t4, n2.ctx, e3);
                }
              }), t3) {
                var A2 = document.createElementNS(d2.globals.SVGNS, "title");
                A2.textContent = Array.isArray(y3.text) ? y3.text.join(" ") : y3.text, k3.node.appendChild(A2), y3.text !== "" && (h2.push(y3.text), c2.push(y3));
              }
            }
            s3 < v2 - 1 && (b2 += r2(s3 + 1, o2));
          }, k2 = 0; k2 <= v2 - 1; k2++) w2(k2);
        } }, { key: "drawXaxisInversed", value: function(t3) {
          var e2, i2, a2 = this, s2 = this.w, r2 = new m(this.ctx), o2 = s2.config.yaxis[0].opposite ? s2.globals.translateYAxisX[t3] : 0, n2 = r2.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t3 }), l2 = r2.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + o2 + ", 0)" });
          n2.add(l2);
          var h2 = [];
          if (s2.config.yaxis[t3].show) for (var c2 = 0; c2 < this.xaxisLabels.length; c2++) h2.push(this.xaxisLabels[c2]);
          e2 = s2.globals.gridHeight / h2.length, i2 = -e2 / 2.2;
          var d2 = s2.globals.yLabelFormatters[0], g2 = s2.config.yaxis[0].labels;
          if (g2.show) for (var u2 = function(o3) {
            var n3 = h2[o3] === void 0 ? "" : h2[o3];
            n3 = d2(n3, { seriesIndex: t3, dataPointIndex: o3, w: s2 });
            var c3 = a2.axesUtils.getYAxisForeColor(g2.style.colors, t3), u3 = 0;
            Array.isArray(n3) && (u3 = n3.length / 2 * parseInt(g2.style.fontSize, 10));
            var p3 = g2.offsetX - 15, f3 = "end";
            a2.yaxis.opposite && (f3 = "start"), s2.config.yaxis[0].labels.align === "left" ? (p3 = g2.offsetX, f3 = "start") : s2.config.yaxis[0].labels.align === "center" ? (p3 = g2.offsetX, f3 = "middle") : s2.config.yaxis[0].labels.align === "right" && (f3 = "end");
            var x3 = r2.drawText({ x: p3, y: i2 + e2 + g2.offsetY - u3, text: n3, textAnchor: f3, foreColor: Array.isArray(c3) ? c3[o3] : c3, fontSize: g2.style.fontSize, fontFamily: g2.style.fontFamily, fontWeight: g2.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + g2.style.cssClass, maxWidth: g2.maxWidth });
            l2.add(x3), x3.on("click", function(t4) {
              if (typeof s2.config.chart.events.xAxisLabelClick == "function") {
                var e3 = Object.assign({}, s2, { labelIndex: o3 });
                s2.config.chart.events.xAxisLabelClick(t4, a2.ctx, e3);
              }
            });
            var b3 = document.createElementNS(s2.globals.SVGNS, "title");
            if (b3.textContent = Array.isArray(n3) ? n3.join(" ") : n3, x3.node.appendChild(b3), s2.config.yaxis[t3].labels.rotate !== 0) {
              var v3 = r2.rotateAroundCenter(x3.node);
              x3.node.setAttribute("transform", "rotate(".concat(s2.config.yaxis[t3].labels.rotate, " 0 ").concat(v3.y, ")"));
            }
            i2 += e2;
          }, p2 = 0; p2 <= h2.length - 1; p2++) u2(p2);
          if (s2.config.yaxis[0].title.text !== void 0) {
            var f2 = r2.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + o2 + ", 0)" }), x2 = r2.drawText({ x: s2.config.yaxis[0].title.offsetX, y: s2.globals.gridHeight / 2 + s2.config.yaxis[0].title.offsetY, text: s2.config.yaxis[0].title.text, textAnchor: "middle", foreColor: s2.config.yaxis[0].title.style.color, fontSize: s2.config.yaxis[0].title.style.fontSize, fontWeight: s2.config.yaxis[0].title.style.fontWeight, fontFamily: s2.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + s2.config.yaxis[0].title.style.cssClass });
            f2.add(x2), n2.add(f2);
          }
          var b2 = 0;
          this.isCategoryBarHorizontal && s2.config.yaxis[0].opposite && (b2 = s2.globals.gridWidth);
          var v2 = s2.config.xaxis.axisBorder;
          if (v2.show) {
            var y2 = r2.drawLine(s2.globals.padHorizontal + v2.offsetX + b2, 1 + v2.offsetY, s2.globals.padHorizontal + v2.offsetX + b2, s2.globals.gridHeight + v2.offsetY, v2.color, 0);
            this.elgrid && this.elgrid.elGridBorders && s2.config.grid.show ? this.elgrid.elGridBorders.add(y2) : n2.add(y2);
          }
          return s2.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(b2, h2.length, s2.config.yaxis[0].axisBorder, s2.config.yaxis[0].axisTicks, 0, e2, n2), n2;
        } }, { key: "drawXaxisTicks", value: function(t3, e2, i2) {
          var a2 = this.w, s2 = t3;
          if (!(t3 < 0 || t3 - 2 > a2.globals.gridWidth)) {
            var r2 = this.offY + a2.config.xaxis.axisTicks.offsetY;
            if (e2 = e2 + r2 + a2.config.xaxis.axisTicks.height, a2.config.xaxis.position === "top" && (e2 = r2 - a2.config.xaxis.axisTicks.height), a2.config.xaxis.axisTicks.show) {
              var o2 = new m(this.ctx).drawLine(t3 + a2.config.xaxis.axisTicks.offsetX, r2 + a2.config.xaxis.offsetY, s2 + a2.config.xaxis.axisTicks.offsetX, e2 + a2.config.xaxis.offsetY, a2.config.xaxis.axisTicks.color);
              i2.add(o2), o2.node.classList.add("apexcharts-xaxis-tick");
            }
          }
        } }, { key: "getXAxisTicksPositions", value: function() {
          var t3 = this.w, e2 = [], i2 = this.xaxisLabels.length, a2 = t3.globals.padHorizontal;
          if (t3.globals.timescaleLabels.length > 0) for (var s2 = 0; s2 < i2; s2++) a2 = this.xaxisLabels[s2].position, e2.push(a2);
          else for (var r2 = i2, o2 = 0; o2 < r2; o2++) {
            var n2 = r2;
            t3.globals.isXNumeric && t3.config.chart.type !== "bar" && (n2 -= 1), a2 += t3.globals.gridWidth / n2, e2.push(a2);
          }
          return e2;
        } }, { key: "xAxisLabelCorrections", value: function() {
          var t3 = this.w, e2 = new m(this.ctx), i2 = t3.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), a2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), s2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), r2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
          if (t3.globals.rotateXLabels || t3.config.xaxis.labels.rotateAlways) for (var o2 = 0; o2 < a2.length; o2++) {
            var n2 = e2.rotateAroundCenter(a2[o2]);
            n2.y = n2.y - 1, n2.x = n2.x + 1, a2[o2].setAttribute("transform", "rotate(".concat(t3.config.xaxis.labels.rotate, " ").concat(n2.x, " ").concat(n2.y, ")")), a2[o2].setAttribute("text-anchor", "end"), i2.setAttribute("transform", "translate(0, ".concat(-10, ")"));
            var l2 = a2[o2].childNodes;
            t3.config.xaxis.labels.trim && Array.prototype.forEach.call(l2, function(i3) {
              e2.placeTextWithEllipsis(i3, i3.textContent, t3.globals.xAxisLabelsHeight - (t3.config.legend.position === "bottom" ? 20 : 10));
            });
          }
          else (function() {
            for (var i3 = t3.globals.gridWidth / (t3.globals.labels.length + 1), s3 = 0; s3 < a2.length; s3++) {
              var r3 = a2[s3].childNodes;
              t3.config.xaxis.labels.trim && t3.config.xaxis.type !== "datetime" && Array.prototype.forEach.call(r3, function(t4) {
                e2.placeTextWithEllipsis(t4, t4.textContent, i3);
              });
            }
          })();
          if (s2.length > 0) {
            var h2 = s2[s2.length - 1].getBBox(), c2 = s2[0].getBBox();
            h2.x < -20 && s2[s2.length - 1].parentNode.removeChild(s2[s2.length - 1]), c2.x + c2.width > t3.globals.gridWidth && !t3.globals.isBarHorizontal && s2[0].parentNode.removeChild(s2[0]);
            for (var d2 = 0; d2 < r2.length; d2++) e2.placeTextWithEllipsis(r2[d2], r2[d2].textContent, t3.config.yaxis[0].labels.maxWidth - (t3.config.yaxis[0].title.text ? 2 * parseFloat(t3.config.yaxis[0].title.style.fontSize) : 0) - 15);
          }
        } }]), t2;
      }(), j = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
          var i2 = this.w;
          this.xaxisLabels = i2.globals.labels.slice(), this.axesUtils = new C(e2), this.isRangeBar = i2.globals.seriesRange.length && i2.globals.isBarHorizontal, i2.globals.timescaleLabels.length > 0 && (this.xaxisLabels = i2.globals.timescaleLabels.slice());
        }
        return r(t2, [{ key: "drawGridArea", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e2 = this.w, i2 = new m(this.ctx);
          t3 === null && (t3 = i2.group({ class: "apexcharts-grid" }));
          var a2 = i2.drawLine(e2.globals.padHorizontal, 1, e2.globals.padHorizontal, e2.globals.gridHeight, "transparent"), s2 = i2.drawLine(e2.globals.padHorizontal, e2.globals.gridHeight, e2.globals.gridWidth, e2.globals.gridHeight, "transparent");
          return t3.add(s2), t3.add(a2), t3;
        } }, { key: "drawGrid", value: function() {
          var t3 = null;
          return this.w.globals.axisCharts && (t3 = this.renderGrid(), this.drawGridArea(t3.el)), t3;
        } }, { key: "createGridMask", value: function() {
          var t3 = this.w, e2 = t3.globals, i2 = new m(this.ctx), a2 = Array.isArray(t3.config.stroke.width) ? 0 : t3.config.stroke.width;
          if (Array.isArray(t3.config.stroke.width)) {
            var s2 = 0;
            t3.config.stroke.width.forEach(function(t4) {
              s2 = Math.max(s2, t4);
            }), a2 = s2;
          }
          e2.dom.elGridRectMask = document.createElementNS(e2.SVGNS, "clipPath"), e2.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e2.cuid)), e2.dom.elGridRectMarkerMask = document.createElementNS(e2.SVGNS, "clipPath"), e2.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e2.cuid)), e2.dom.elForecastMask = document.createElementNS(e2.SVGNS, "clipPath"), e2.dom.elForecastMask.setAttribute("id", "forecastMask".concat(e2.cuid)), e2.dom.elNonForecastMask = document.createElementNS(e2.SVGNS, "clipPath"), e2.dom.elNonForecastMask.setAttribute("id", "nonForecastMask".concat(e2.cuid));
          var r2 = t3.config.chart.type, o2 = 0, n2 = 0;
          (r2 === "bar" || r2 === "rangeBar" || r2 === "candlestick" || r2 === "boxPlot" || t3.globals.comboBarCount > 0) && t3.globals.isXNumeric && !t3.globals.isBarHorizontal && (o2 = t3.config.grid.padding.left, n2 = t3.config.grid.padding.right, e2.barPadForNumericAxis > o2 && (o2 = e2.barPadForNumericAxis, n2 = e2.barPadForNumericAxis)), e2.dom.elGridRect = i2.drawRect(-a2 / 2 - o2 - 2, -a2 / 2 - 2, e2.gridWidth + a2 + n2 + o2 + 4, e2.gridHeight + a2 + 4, 0, "#fff");
          var l2 = t3.globals.markers.largestSize + 1;
          e2.dom.elGridRectMarker = i2.drawRect(2 * -l2, 2 * -l2, e2.gridWidth + 4 * l2, e2.gridHeight + 4 * l2, 0, "#fff"), e2.dom.elGridRectMask.appendChild(e2.dom.elGridRect.node), e2.dom.elGridRectMarkerMask.appendChild(e2.dom.elGridRectMarker.node);
          var h2 = e2.dom.baseEl.querySelector("defs");
          h2.appendChild(e2.dom.elGridRectMask), h2.appendChild(e2.dom.elForecastMask), h2.appendChild(e2.dom.elNonForecastMask), h2.appendChild(e2.dom.elGridRectMarkerMask);
        } }, { key: "_drawGridLines", value: function(t3) {
          var e2 = t3.i, i2 = t3.x1, a2 = t3.y1, s2 = t3.x2, r2 = t3.y2, o2 = t3.xCount, n2 = t3.parent, l2 = this.w;
          if (!(e2 === 0 && l2.globals.skipFirstTimelinelabel || e2 === o2 - 1 && l2.globals.skipLastTimelinelabel && !l2.config.xaxis.labels.formatter || l2.config.chart.type === "radar")) {
            l2.config.grid.xaxis.lines.show && this._drawGridLine({ i: e2, x1: i2, y1: a2, x2: s2, y2: r2, xCount: o2, parent: n2 });
            var h2 = 0;
            if (l2.globals.hasXaxisGroups && l2.config.xaxis.tickPlacement === "between") {
              var c2 = l2.globals.groups;
              if (c2) {
                for (var d2 = 0, g2 = 0; d2 < e2 && g2 < c2.length; g2++) d2 += c2[g2].cols;
                d2 === e2 && (h2 = 0.6 * l2.globals.xAxisLabelsHeight);
              }
            }
            new V(this.ctx).drawXaxisTicks(i2, h2, l2.globals.dom.elGraphical);
          }
        } }, { key: "_drawGridLine", value: function(t3) {
          var e2 = t3.i, i2 = t3.x1, a2 = t3.y1, s2 = t3.x2, r2 = t3.y2, o2 = t3.xCount, n2 = t3.parent, l2 = this.w, h2 = !1, c2 = n2.node.classList.contains("apexcharts-gridlines-horizontal"), d2 = l2.config.grid.strokeDashArray, g2 = l2.globals.barPadForNumericAxis;
          (a2 === 0 && r2 === 0 || i2 === 0 && s2 === 0) && (h2 = !0), a2 === l2.globals.gridHeight && r2 === l2.globals.gridHeight && (h2 = !0), !l2.globals.isBarHorizontal || e2 !== 0 && e2 !== o2 - 1 || (h2 = !0);
          var u2 = new m(this).drawLine(i2 - (c2 ? g2 : 0), a2, s2 + (c2 ? g2 : 0), r2, l2.config.grid.borderColor, d2);
          u2.node.classList.add("apexcharts-gridline"), h2 && l2.config.grid.show ? this.elGridBorders.add(u2) : n2.add(u2);
        } }, { key: "_drawGridBandRect", value: function(t3) {
          var e2 = t3.c, i2 = t3.x1, a2 = t3.y1, s2 = t3.x2, r2 = t3.y2, o2 = t3.type, n2 = this.w, l2 = new m(this.ctx), h2 = n2.globals.barPadForNumericAxis;
          if (o2 !== "column" || n2.config.xaxis.type !== "datetime") {
            var c2 = n2.config.grid[o2].colors[e2], d2 = l2.drawRect(i2 - (o2 === "row" ? h2 : 0), a2, s2 + (o2 === "row" ? 2 * h2 : 0), r2, 0, c2, n2.config.grid[o2].opacity);
            this.elg.add(d2), d2.attr("clip-path", "url(#gridRectMask".concat(n2.globals.cuid, ")")), d2.node.classList.add("apexcharts-grid-".concat(o2));
          }
        } }, { key: "_drawXYLines", value: function(t3) {
          var e2 = this, i2 = t3.xCount, a2 = t3.tickAmount, s2 = this.w;
          if (s2.config.grid.xaxis.lines.show || s2.config.xaxis.axisTicks.show) {
            var r2, o2 = s2.globals.padHorizontal, n2 = s2.globals.gridHeight;
            s2.globals.timescaleLabels.length ? function(t4) {
              for (var a3 = t4.xC, s3 = t4.x1, r3 = t4.y1, o3 = t4.x2, n3 = t4.y2, l3 = 0; l3 < a3; l3++) s3 = e2.xaxisLabels[l3].position, o3 = e2.xaxisLabels[l3].position, e2._drawGridLines({ i: l3, x1: s3, y1: r3, x2: o3, y2: n3, xCount: i2, parent: e2.elgridLinesV });
            }({ xC: i2, x1: o2, y1: 0, x2: r2, y2: n2 }) : (s2.globals.isXNumeric && (i2 = s2.globals.xAxisScale.result.length), function(t4) {
              for (var a3 = t4.xC, r3 = t4.x1, o3 = t4.y1, n3 = t4.x2, l3 = t4.y2, h3 = 0; h3 < a3 + (s2.globals.isXNumeric ? 0 : 1); h3++) h3 === 0 && a3 === 1 && s2.globals.dataPoints === 1 && (n3 = r3 = s2.globals.gridWidth / 2), e2._drawGridLines({ i: h3, x1: r3, y1: o3, x2: n3, y2: l3, xCount: i2, parent: e2.elgridLinesV }), n3 = r3 += s2.globals.gridWidth / (s2.globals.isXNumeric ? a3 - 1 : a3);
            }({ xC: i2, x1: o2, y1: 0, x2: r2, y2: n2 }));
          }
          if (s2.config.grid.yaxis.lines.show) {
            var l2 = 0, h2 = 0, c2 = s2.globals.gridWidth, d2 = a2 + 1;
            this.isRangeBar && (d2 = s2.globals.labels.length);
            for (var g2 = 0; g2 < d2 + (this.isRangeBar ? 1 : 0); g2++) this._drawGridLine({ i: g2, xCount: d2 + (this.isRangeBar ? 1 : 0), x1: 0, y1: l2, x2: c2, y2: h2, parent: this.elgridLinesH }), h2 = l2 += s2.globals.gridHeight / (this.isRangeBar ? d2 : a2);
          }
        } }, { key: "_drawInvertedXYLines", value: function(t3) {
          var e2 = t3.xCount, i2 = this.w;
          if (i2.config.grid.xaxis.lines.show || i2.config.xaxis.axisTicks.show) for (var a2, s2 = i2.globals.padHorizontal, r2 = i2.globals.gridHeight, o2 = 0; o2 < e2 + 1; o2++)
            i2.config.grid.xaxis.lines.show && this._drawGridLine({ i: o2, xCount: e2 + 1, x1: s2, y1: 0, x2: a2, y2: r2, parent: this.elgridLinesV }), new V(this.ctx).drawXaxisTicks(s2, 0, i2.globals.dom.elGraphical), a2 = s2 += i2.globals.gridWidth / e2;
          if (i2.config.grid.yaxis.lines.show) for (var n2 = 0, l2 = 0, h2 = i2.globals.gridWidth, c2 = 0; c2 < i2.globals.dataPoints + 1; c2++) this._drawGridLine({ i: c2, xCount: i2.globals.dataPoints + 1, x1: 0, y1: n2, x2: h2, y2: l2, parent: this.elgridLinesH }), l2 = n2 += i2.globals.gridHeight / i2.globals.dataPoints;
        } }, { key: "renderGrid", value: function() {
          var t3 = this.w, e2 = t3.globals, i2 = new m(this.ctx);
          this.elg = i2.group({ class: "apexcharts-grid" }), this.elgridLinesH = i2.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = i2.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = i2.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t3.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
          for (var a2 = 0; a2 < e2.seriesYAxisMap.length && e2.ignoreYAxisIndexes.indexOf(a2) !== -1; ) a2++;
          a2 === e2.seriesYAxisMap.length && (a2 = 0);
          var s2, r2 = e2.yAxisScale[a2].result.length - 1;
          if (!e2.isBarHorizontal || this.isRangeBar) {
            var o2, n2, l2;
            s2 = this.xaxisLabels.length, this.isRangeBar && (r2 = e2.labels.length, t3.config.xaxis.tickAmount && t3.config.xaxis.labels.formatter && (s2 = t3.config.xaxis.tickAmount), ((o2 = e2.yAxisScale) === null || o2 === void 0 || (n2 = o2[a2]) === null || n2 === void 0 || (l2 = n2.result) === null || l2 === void 0 ? void 0 : l2.length) > 0 && t3.config.xaxis.type !== "datetime" && (s2 = e2.yAxisScale[a2].result.length - 1)), this._drawXYLines({ xCount: s2, tickAmount: r2 });
          } else s2 = r2, r2 = e2.xTickAmount, this._drawInvertedXYLines({ xCount: s2, tickAmount: r2 });
          return this.drawGridBands(s2, r2), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: e2.gridWidth / s2 };
        } }, { key: "drawGridBands", value: function(t3, e2) {
          var i2 = this.w;
          if (i2.config.grid.row.colors !== void 0 && i2.config.grid.row.colors.length > 0) for (var a2 = 0, s2 = i2.globals.gridHeight / e2, r2 = i2.globals.gridWidth, o2 = 0, n2 = 0; o2 < e2; o2++, n2++) n2 >= i2.config.grid.row.colors.length && (n2 = 0), this._drawGridBandRect({ c: n2, x1: 0, y1: a2, x2: r2, y2: s2, type: "row" }), a2 += i2.globals.gridHeight / e2;
          if (i2.config.grid.column.colors !== void 0 && i2.config.grid.column.colors.length > 0) for (var l2 = i2.globals.isBarHorizontal || i2.config.xaxis.tickPlacement !== "on" || i2.config.xaxis.type !== "category" && !i2.config.xaxis.convertedCatToNumeric ? t3 : t3 - 1, h2 = i2.globals.padHorizontal, c2 = i2.globals.padHorizontal + i2.globals.gridWidth / l2, d2 = i2.globals.gridHeight, g2 = 0, u2 = 0; g2 < t3; g2++, u2++) u2 >= i2.config.grid.column.colors.length && (u2 = 0), this._drawGridBandRect({ c: u2, x1: h2, y1: 0, x2: c2, y2: d2, type: "column" }), h2 += i2.globals.gridWidth / l2;
        } }]), t2;
      }(), _ = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "niceScale", value: function(t3, e2) {
          var i2, a2, s2, r2, o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n2 = 1e-11, l2 = this.w, h2 = l2.globals;
          h2.isBarHorizontal ? (i2 = l2.config.xaxis, a2 = Math.max((h2.svgWidth - 100) / 25, 2)) : (i2 = l2.config.yaxis[o2], a2 = Math.max((h2.svgHeight - 100) / 15, 2)), s2 = i2.min !== void 0 && i2.min !== null, r2 = i2.max !== void 0 && i2.min !== null;
          var c2 = i2.stepSize !== void 0 && i2.stepSize !== null, d2 = i2.tickAmount !== void 0 && i2.tickAmount !== null, g2 = d2 ? i2.tickAmount : i2.forceNiceScale ? h2.niceScaleDefaultTicks[Math.min(Math.round(a2 / 2), h2.niceScaleDefaultTicks.length - 1)] : 10;
          if (h2.isMultipleYAxis && !d2 && h2.multiAxisTickAmount > 0 && (g2 = h2.multiAxisTickAmount, d2 = !0), g2 = g2 === "dataPoints" ? h2.dataPoints - 1 : Math.abs(Math.round(g2)), (t3 === Number.MIN_VALUE && e2 === 0 || !x.isNumber(t3) && !x.isNumber(e2) || t3 === Number.MIN_VALUE && e2 === -Number.MAX_VALUE) && (t3 = x.isNumber(i2.min) ? i2.min : 0, e2 = x.isNumber(i2.max) ? i2.max : t3 + g2, h2.allSeriesCollapsed = !1), t3 > e2) {
            console.warn("axis.min cannot be greater than axis.max: swapping min and max");
            var u2 = e2;
            e2 = t3, t3 = u2;
          } else t3 === e2 && (t3 = t3 === 0 ? 0 : t3 - 1, e2 = e2 === 0 ? 2 : e2 + 1);
          var p2 = [];
          g2 < 1 && (g2 = 1);
          var f2 = g2, b2 = Math.abs(e2 - t3);
          i2.forceNiceScale && (!s2 && t3 > 0 && t3 / b2 < 0.15 && (t3 = 0, s2 = !0), !r2 && e2 < 0 && -e2 / b2 < 0.15 && (e2 = 0, r2 = !0), b2 = Math.abs(e2 - t3));
          var v2 = b2 / f2, m2 = v2, y2 = Math.floor(Math.log10(m2)), w2 = Math.pow(10, y2), k2 = Math.ceil(m2 / w2);
          if (v2 = m2 = (k2 = h2.niceScaleAllowedMagMsd[h2.yValueDecimal === 0 ? 0 : 1][k2]) * w2, h2.isBarHorizontal && i2.stepSize && i2.type !== "datetime" ? (v2 = i2.stepSize, c2 = !0) : c2 && (v2 = i2.stepSize), c2 && i2.forceNiceScale) {
            var A2 = Math.floor(Math.log10(v2));
            v2 *= Math.pow(10, y2 - A2);
          }
          if (s2 && r2) {
            var S2 = b2 / f2;
            if (d2) if (c2) if (x.mod(b2, v2) != 0) {
              var C2 = x.getGCD(v2, S2);
              v2 = S2 / C2 < 10 ? C2 : S2;
            } else x.mod(v2, S2) == 0 ? v2 = S2 : (S2 = v2, d2 = !1);
            else v2 = S2;
            else if (c2) x.mod(b2, v2) == 0 ? S2 = v2 : v2 = S2;
            else if (x.mod(b2, v2) == 0) S2 = v2;
            else {
              S2 = b2 / (f2 = Math.ceil(b2 / v2));
              var L2 = x.getGCD(b2, v2);
              b2 / L2 < a2 && (S2 = L2), v2 = S2;
            }
            f2 = Math.round(b2 / v2);
          } else {
            if (s2 || r2) {
              if (r2) if (d2) t3 = e2 - v2 * f2;
              else {
                var P2 = t3;
                t3 = v2 * Math.floor(t3 / v2), Math.abs(e2 - t3) / x.getGCD(b2, v2) > a2 && (t3 = e2 - v2 * g2, t3 += v2 * Math.floor((P2 - t3) / v2));
              }
              else if (s2) if (d2) e2 = t3 + v2 * f2;
              else {
                var M2 = e2;
                e2 = v2 * Math.ceil(e2 / v2), Math.abs(e2 - t3) / x.getGCD(b2, v2) > a2 && (e2 = t3 + v2 * g2, e2 += v2 * Math.ceil((M2 - e2) / v2));
              }
            } else if (d2) {
              var I2 = v2 / (e2 - t3 > e2 ? 1 : 2), T2 = I2 * Math.floor(t3 / I2);
              Math.abs(T2 - t3) <= I2 / 2 ? e2 = (t3 = T2) + v2 * f2 : t3 = (e2 = I2 * Math.ceil(e2 / I2)) - v2 * f2;
            } else t3 = v2 * Math.floor(t3 / v2), e2 = v2 * Math.ceil(e2 / v2);
            b2 = Math.abs(e2 - t3), v2 = x.getGCD(b2, v2), f2 = Math.round(b2 / v2);
          }
          if (d2 || s2 || r2 || (f2 = Math.ceil((b2 - n2) / (v2 + n2))) > 16 && x.getPrimeFactors(f2).length < 2 && f2++, !d2 && i2.forceNiceScale && h2.yValueDecimal === 0 && f2 > b2 && (f2 = b2, v2 = Math.round(b2 / f2)), f2 > a2 && (!d2 && !c2 || i2.forceNiceScale)) {
            var z2 = x.getPrimeFactors(f2), X2 = z2.length - 1, E2 = f2;
            t: for (var Y2 = 0; Y2 < X2; Y2++) for (var F2 = 0; F2 <= X2 - Y2; F2++) {
              for (var R2 = Math.min(F2 + Y2, X2), H2 = E2, D2 = 1, O2 = F2; O2 <= R2; O2++) D2 *= z2[O2];
              if ((H2 /= D2) < a2) {
                E2 = H2;
                break t;
              }
            }
            v2 = E2 === f2 ? b2 : b2 / E2, f2 = Math.round(b2 / v2);
          }
          h2.isMultipleYAxis && h2.multiAxisTickAmount == 0 && h2.ignoreYAxisIndexes.indexOf(o2) < 0 && (h2.multiAxisTickAmount = f2);
          var N2 = t3 - v2, W2 = v2 * n2;
          do
            N2 += v2, p2.push(x.stripNumber(N2, 7));
          while (e2 - N2 > W2);
          return { result: p2, niceMin: p2[0], niceMax: p2[p2.length - 1] };
        } }, { key: "linearScale", value: function(t3, e2) {
          var i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0, r2 = Math.abs(e2 - t3), o2 = [];
          if (t3 === e2) return { result: o2 = [t3], niceMin: o2[0], niceMax: o2[o2.length - 1] };
          (i2 = this._adjustTicksForSmallRange(i2, a2, r2)) === "dataPoints" && (i2 = this.w.globals.dataPoints - 1), s2 || (s2 = r2 / i2), s2 = Math.round(10 * (s2 + Number.EPSILON)) / 10, i2 === Number.MAX_VALUE && (i2 = 5, s2 = 1);
          for (var n2 = t3; i2 >= 0; ) o2.push(n2), n2 = x.preciseAddition(n2, s2), i2 -= 1;
          return { result: o2, niceMin: o2[0], niceMax: o2[o2.length - 1] };
        } }, { key: "logarithmicScaleNice", value: function(t3, e2, i2) {
          e2 <= 0 && (e2 = Math.max(t3, i2)), t3 <= 0 && (t3 = Math.min(e2, i2));
          for (var a2 = [], s2 = Math.ceil(Math.log(e2) / Math.log(i2) + 1), r2 = Math.floor(Math.log(t3) / Math.log(i2)); r2 < s2; r2++) a2.push(Math.pow(i2, r2));
          return { result: a2, niceMin: a2[0], niceMax: a2[a2.length - 1] };
        } }, { key: "logarithmicScale", value: function(t3, e2, i2) {
          e2 <= 0 && (e2 = Math.max(t3, i2)), t3 <= 0 && (t3 = Math.min(e2, i2));
          for (var a2 = [], s2 = Math.log(e2) / Math.log(i2), r2 = Math.log(t3) / Math.log(i2), o2 = s2 - r2, n2 = Math.round(o2), l2 = o2 / n2, h2 = 0, c2 = r2; h2 < n2; h2++, c2 += l2) a2.push(Math.pow(i2, c2));
          return a2.push(Math.pow(i2, s2)), { result: a2, niceMin: t3, niceMax: e2 };
        } }, { key: "_adjustTicksForSmallRange", value: function(t3, e2, i2) {
          var a2 = t3;
          if (e2 !== void 0 && this.w.config.yaxis[e2].labels.formatter && this.w.config.yaxis[e2].tickAmount === void 0) {
            var s2 = Number(this.w.config.yaxis[e2].labels.formatter(1));
            x.isNumber(s2) && this.w.globals.yValueDecimal === 0 && (a2 = Math.ceil(i2));
          }
          return a2 < t3 ? a2 : t3;
        } }, { key: "setYScaleForIndex", value: function(t3, e2, i2) {
          var a2 = this.w.globals, s2 = this.w.config, r2 = a2.isBarHorizontal ? s2.xaxis : s2.yaxis[t3];
          a2.yAxisScale[t3] === void 0 && (a2.yAxisScale[t3] = []);
          var o2 = Math.abs(i2 - e2);
          r2.logarithmic && o2 <= 5 && (a2.invalidLogScale = !0), r2.logarithmic && o2 > 5 ? (a2.allSeriesCollapsed = !1, a2.yAxisScale[t3] = r2.forceNiceScale ? this.logarithmicScaleNice(e2, i2, r2.logBase) : this.logarithmicScale(e2, i2, r2.logBase)) : i2 !== -Number.MAX_VALUE && x.isNumber(i2) && e2 !== Number.MAX_VALUE && x.isNumber(e2) ? (a2.allSeriesCollapsed = !1, a2.yAxisScale[t3] = this.niceScale(e2, i2, t3)) : a2.yAxisScale[t3] = this.niceScale(Number.MIN_VALUE, 0, t3);
        } }, { key: "setXScale", value: function(t3, e2) {
          var i2 = this.w, a2 = i2.globals, s2 = Math.abs(e2 - t3);
          if (e2 !== -Number.MAX_VALUE && x.isNumber(e2)) {
            var r2 = a2.xTickAmount + 1;
            s2 < 10 && s2 > 1 && (r2 = s2), a2.xAxisScale = this.linearScale(t3, e2, r2, 0, i2.config.xaxis.stepSize);
          } else a2.xAxisScale = this.linearScale(0, 10, 10);
          return a2.xAxisScale;
        } }, { key: "setSeriesYAxisMappings", value: function() {
          var t3 = this.w.globals, e2 = this.w.config, i2 = [], a2 = [], s2 = [], r2 = t3.series.length > e2.yaxis.length || e2.yaxis.some(function(t4) {
            return Array.isArray(t4.seriesName);
          });
          e2.series.forEach(function(t4, e3) {
            s2.push(e3), a2.push(null);
          }), e2.yaxis.forEach(function(t4, e3) {
            i2[e3] = [];
          });
          var o2 = [];
          e2.yaxis.forEach(function(t4, a3) {
            var n3 = !1;
            if (t4.seriesName) {
              var l3 = [];
              Array.isArray(t4.seriesName) ? l3 = t4.seriesName : l3.push(t4.seriesName), l3.forEach(function(t5) {
                e2.series.forEach(function(e3, o3) {
                  if (e3.name === t5) {
                    var l4 = o3;
                    a3 === o3 || r2 ? !r2 || s2.indexOf(o3) > -1 ? i2[a3].push([a3, o3]) : console.warn("Series '" + e3.name + "' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes.") : (i2[o3].push([o3, a3]), l4 = a3), n3 = !0, (l4 = s2.indexOf(l4)) !== -1 && s2.splice(l4, 1);
                  }
                });
              });
            }
            n3 || o2.push(a3);
          }), i2 = i2.map(function(t4, e3) {
            var i3 = [];
            return t4.forEach(function(t5) {
              a2[t5[1]] = t5[0], i3.push(t5[1]);
            }), i3;
          });
          for (var n2 = e2.yaxis.length - 1, l2 = 0; l2 < o2.length && (n2 = o2[l2], i2[n2] = [], s2); l2++) {
            var h2 = s2[0];
            s2.shift(), i2[n2].push(h2), a2[h2] = n2;
          }
          s2.forEach(function(t4) {
            i2[n2].push(t4), a2[t4] = n2;
          }), t3.seriesYAxisMap = i2.map(function(t4) {
            return t4;
          }), t3.seriesYAxisReverseMap = a2.map(function(t4) {
            return t4;
          });
        } }, { key: "scaleMultipleYAxes", value: function() {
          var t3 = this, e2 = this.w.config, i2 = this.w.globals;
          this.setSeriesYAxisMappings();
          var a2 = i2.seriesYAxisMap, s2 = i2.minYArr, r2 = i2.maxYArr;
          i2.allSeriesCollapsed = !0, i2.barGroups = [], a2.forEach(function(a3, o2) {
            var n2 = [];
            a3.forEach(function(t4) {
              var i3 = e2.series[t4].group;
              n2.indexOf(i3) < 0 && n2.push(i3);
            }), a3.length > 0 ? function() {
              var l2, h2, c2 = Number.MAX_VALUE, d2 = -Number.MAX_VALUE, g2 = c2, u2 = d2;
              if (e2.chart.stacked) (function() {
                var t4 = i2.seriesX[a3[0]], s3 = [], r3 = [], p3 = [];
                n2.forEach(function() {
                  s3.push(t4.map(function() {
                    return Number.MIN_VALUE;
                  })), r3.push(t4.map(function() {
                    return Number.MIN_VALUE;
                  })), p3.push(t4.map(function() {
                    return Number.MIN_VALUE;
                  }));
                });
                for (var f3 = function(t5) {
                  !l2 && e2.series[a3[t5]].type && (l2 = e2.series[a3[t5]].type);
                  var c3 = a3[t5];
                  h2 = e2.series[c3].group ? e2.series[c3].group : "axis-".concat(o2), !(i2.collapsedSeriesIndices.indexOf(c3) < 0 && i2.ancillaryCollapsedSeriesIndices.indexOf(c3) < 0) || (i2.allSeriesCollapsed = !1, n2.forEach(function(t6, a4) {
                    if (e2.series[c3].group === t6) for (var o3 = 0; o3 < i2.series[c3].length; o3++) {
                      var n3 = i2.series[c3][o3];
                      n3 >= 0 ? r3[a4][o3] += n3 : p3[a4][o3] += n3, s3[a4][o3] += n3, g2 = Math.min(g2, n3), u2 = Math.max(u2, n3);
                    }
                  })), l2 !== "bar" && l2 !== "column" || i2.barGroups.push(h2);
                }, x2 = 0; x2 < a3.length; x2++) f3(x2);
                l2 || (l2 = e2.chart.type), l2 === "bar" || l2 === "column" ? n2.forEach(function(t5, e3) {
                  c2 = Math.min(c2, Math.min.apply(null, p3[e3])), d2 = Math.max(d2, Math.max.apply(null, r3[e3]));
                }) : (n2.forEach(function(t5, e3) {
                  g2 = Math.min(g2, Math.min.apply(null, s3[e3])), u2 = Math.max(u2, Math.max.apply(null, s3[e3]));
                }), c2 = g2, d2 = u2), c2 === Number.MIN_VALUE && d2 === Number.MIN_VALUE && (d2 = -Number.MAX_VALUE);
              })();
              else for (var p2 = 0; p2 < a3.length; p2++) {
                var f2 = a3[p2];
                c2 = Math.min(c2, s2[f2]), d2 = Math.max(d2, r2[f2]), !(i2.collapsedSeriesIndices.indexOf(f2) < 0 && i2.ancillaryCollapsedSeriesIndices.indexOf(f2) < 0) || (i2.allSeriesCollapsed = !1);
              }
              e2.yaxis[o2].min !== void 0 && (c2 = typeof e2.yaxis[o2].min == "function" ? e2.yaxis[o2].min(c2) : e2.yaxis[o2].min), e2.yaxis[o2].max !== void 0 && (d2 = typeof e2.yaxis[o2].max == "function" ? e2.yaxis[o2].max(d2) : e2.yaxis[o2].max), i2.barGroups = i2.barGroups.filter(function(t4, e3, i3) {
                return i3.indexOf(t4) === e3;
              }), t3.setYScaleForIndex(o2, c2, d2), a3.forEach(function(t4) {
                s2[t4] = i2.yAxisScale[o2].niceMin, r2[t4] = i2.yAxisScale[o2].niceMax;
              });
            }() : t3.setYScaleForIndex(o2, 0, -Number.MAX_VALUE);
          });
        } }]), t2;
      }(), U = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.scales = new _(e2);
        }
        return r(t2, [{ key: "init", value: function() {
          this.setYRange(), this.setXRange(), this.setZRange();
        } }, { key: "getMinYMaxY", value: function(t3) {
          var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -Number.MAX_VALUE, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, s2 = this.w.config, r2 = this.w.globals, o2 = -Number.MAX_VALUE, n2 = Number.MIN_VALUE;
          a2 === null && (a2 = t3 + 1);
          var l2 = r2.series, h2 = l2, c2 = l2;
          s2.chart.type === "candlestick" ? (h2 = r2.seriesCandleL, c2 = r2.seriesCandleH) : s2.chart.type === "boxPlot" ? (h2 = r2.seriesCandleO, c2 = r2.seriesCandleC) : r2.isRangeData && (h2 = r2.seriesRangeStart, c2 = r2.seriesRangeEnd);
          var d2 = !1;
          if (r2.seriesX.length >= a2) {
            var g2, u2 = (g2 = r2.brushSource) === null || g2 === void 0 ? void 0 : g2.w.config.chart.brush;
            (s2.chart.zoom.enabled && s2.chart.zoom.autoScaleYaxis || u2 != null && u2.enabled && u2 != null && u2.autoScaleYaxis) && (d2 = !0);
          }
          for (var p2 = t3; p2 < a2; p2++) {
            r2.dataPoints = Math.max(r2.dataPoints, l2[p2].length);
            var f2 = s2.series[p2].type;
            r2.categoryLabels.length && (r2.dataPoints = r2.categoryLabels.filter(function(t4) {
              return t4 !== void 0;
            }).length), r2.labels.length && s2.xaxis.type !== "datetime" && r2.series.reduce(function(t4, e3) {
              return t4 + e3.length;
            }, 0) !== 0 && (r2.dataPoints = Math.max(r2.dataPoints, r2.labels.length));
            var b2 = 0, v2 = l2[p2].length - 1;
            if (d2) {
              if (s2.xaxis.min) for (; b2 < v2 && r2.seriesX[p2][b2] < s2.xaxis.min; b2++) ;
              if (s2.xaxis.max) for (; v2 > b2 && r2.seriesX[p2][v2] > s2.xaxis.max; v2--) ;
            }
            for (var m2 = b2; m2 <= v2 && m2 < r2.series[p2].length; m2++) {
              var y2 = l2[p2][m2];
              if (y2 !== null && x.isNumber(y2)) {
                switch (c2[p2][m2] !== void 0 && (o2 = Math.max(o2, c2[p2][m2]), e2 = Math.min(e2, c2[p2][m2])), h2[p2][m2] !== void 0 && (e2 = Math.min(e2, h2[p2][m2]), i2 = Math.max(i2, h2[p2][m2])), f2) {
                  case "candlestick":
                    r2.seriesCandleC[p2][m2] !== void 0 && (o2 = Math.max(o2, r2.seriesCandleH[p2][m2]), e2 = Math.min(e2, r2.seriesCandleL[p2][m2]));
                    break;
                  case "boxPlot":
                    r2.seriesCandleC[p2][m2] !== void 0 && (o2 = Math.max(o2, r2.seriesCandleC[p2][m2]), e2 = Math.min(e2, r2.seriesCandleO[p2][m2]));
                }
                f2 && f2 !== "candlestick" && f2 !== "boxPlot" && f2 !== "rangeArea" && f2 !== "rangeBar" && (o2 = Math.max(o2, r2.series[p2][m2]), e2 = Math.min(e2, r2.series[p2][m2])), i2 = o2, r2.seriesGoals[p2] && r2.seriesGoals[p2][m2] && Array.isArray(r2.seriesGoals[p2][m2]) && r2.seriesGoals[p2][m2].forEach(function(t4) {
                  n2 !== Number.MIN_VALUE && (n2 = Math.min(n2, t4.value), e2 = n2), o2 = Math.max(o2, t4.value), i2 = o2;
                }), x.isFloat(y2) && (y2 = x.noExponents(y2), r2.yValueDecimal = Math.max(r2.yValueDecimal, y2.toString().split(".")[1].length)), n2 > h2[p2][m2] && h2[p2][m2] < 0 && (n2 = h2[p2][m2]);
              } else r2.hasNullValues = !0;
            }
            f2 !== "bar" && f2 !== "column" || (n2 < 0 && o2 < 0 && (o2 = 0, i2 = Math.max(i2, 0)), n2 === Number.MIN_VALUE && (n2 = 0, e2 = Math.min(e2, 0)));
          }
          return s2.chart.type === "rangeBar" && r2.seriesRangeStart.length && r2.isBarHorizontal && (n2 = e2), s2.chart.type === "bar" && (n2 < 0 && o2 < 0 && (o2 = 0), n2 === Number.MIN_VALUE && (n2 = 0)), { minY: n2, maxY: o2, lowestY: e2, highestY: i2 };
        } }, { key: "setYRange", value: function() {
          var t3 = this.w.globals, e2 = this.w.config;
          t3.maxY = -Number.MAX_VALUE, t3.minY = Number.MIN_VALUE;
          var i2, a2 = Number.MAX_VALUE;
          if (t3.isMultipleYAxis) {
            a2 = Number.MAX_VALUE;
            for (var s2 = 0; s2 < t3.series.length; s2++) i2 = this.getMinYMaxY(s2), t3.minYArr[s2] = i2.lowestY, t3.maxYArr[s2] = i2.highestY, a2 = Math.min(a2, i2.lowestY);
          }
          return i2 = this.getMinYMaxY(0, a2, null, t3.series.length), e2.chart.type === "bar" ? (t3.minY = i2.minY, t3.maxY = i2.maxY) : (t3.minY = i2.lowestY, t3.maxY = i2.highestY), a2 = i2.lowestY, e2.chart.stacked && this._setStackedMinMax(), e2.chart.type === "line" || e2.chart.type === "area" || e2.chart.type === "scatter" || e2.chart.type === "candlestick" || e2.chart.type === "boxPlot" || e2.chart.type === "rangeBar" && !t3.isBarHorizontal ? t3.minY === Number.MIN_VALUE && a2 !== -Number.MAX_VALUE && a2 !== t3.maxY && (t3.minY = a2) : t3.minY = i2.minY, e2.yaxis.forEach(function(e3, i3) {
            e3.max !== void 0 && (typeof e3.max == "number" ? t3.maxYArr[i3] = e3.max : typeof e3.max == "function" && (t3.maxYArr[i3] = e3.max(t3.isMultipleYAxis ? t3.maxYArr[i3] : t3.maxY)), t3.maxY = t3.maxYArr[i3]), e3.min !== void 0 && (typeof e3.min == "number" ? t3.minYArr[i3] = e3.min : typeof e3.min == "function" && (t3.minYArr[i3] = e3.min(t3.isMultipleYAxis ? t3.minYArr[i3] === Number.MIN_VALUE ? 0 : t3.minYArr[i3] : t3.minY)), t3.minY = t3.minYArr[i3]);
          }), t3.isBarHorizontal && ["min", "max"].forEach(function(i3) {
            e2.xaxis[i3] !== void 0 && typeof e2.xaxis[i3] == "number" && (i3 === "min" ? t3.minY = e2.xaxis[i3] : t3.maxY = e2.xaxis[i3]);
          }), t3.isMultipleYAxis ? (this.scales.scaleMultipleYAxes(), t3.minY = a2) : (this.scales.setYScaleForIndex(0, t3.minY, t3.maxY), t3.minY = t3.yAxisScale[0].niceMin, t3.maxY = t3.yAxisScale[0].niceMax, t3.minYArr[0] = t3.minY, t3.maxYArr[0] = t3.maxY), t3.barGroups = [], t3.lineGroups = [], t3.areaGroups = [], e2.series.forEach(function(i3) {
            switch (i3.type || e2.chart.type) {
              case "bar":
              case "column":
                t3.barGroups.push(i3.group);
                break;
              case "line":
                t3.lineGroups.push(i3.group);
                break;
              case "area":
                t3.areaGroups.push(i3.group);
            }
          }), t3.barGroups = t3.barGroups.filter(function(t4, e3, i3) {
            return i3.indexOf(t4) === e3;
          }), t3.lineGroups = t3.lineGroups.filter(function(t4, e3, i3) {
            return i3.indexOf(t4) === e3;
          }), t3.areaGroups = t3.areaGroups.filter(function(t4, e3, i3) {
            return i3.indexOf(t4) === e3;
          }), { minY: t3.minY, maxY: t3.maxY, minYArr: t3.minYArr, maxYArr: t3.maxYArr, yAxisScale: t3.yAxisScale };
        } }, { key: "setXRange", value: function() {
          var t3 = this.w.globals, e2 = this.w.config, i2 = e2.xaxis.type === "numeric" || e2.xaxis.type === "datetime" || e2.xaxis.type === "category" && !t3.noLabelsProvided || t3.noLabelsProvided || t3.isXNumeric;
          if (t3.isXNumeric && function() {
            for (var e3 = 0; e3 < t3.series.length; e3++) if (t3.labels[e3]) for (var i3 = 0; i3 < t3.labels[e3].length; i3++) t3.labels[e3][i3] !== null && x.isNumber(t3.labels[e3][i3]) && (t3.maxX = Math.max(t3.maxX, t3.labels[e3][i3]), t3.initialMaxX = Math.max(t3.maxX, t3.labels[e3][i3]), t3.minX = Math.min(t3.minX, t3.labels[e3][i3]), t3.initialMinX = Math.min(t3.minX, t3.labels[e3][i3]));
          }(), t3.noLabelsProvided && e2.xaxis.categories.length === 0 && (t3.maxX = t3.labels[t3.labels.length - 1], t3.initialMaxX = t3.labels[t3.labels.length - 1], t3.minX = 1, t3.initialMinX = 1), t3.isXNumeric || t3.noLabelsProvided || t3.dataFormatXNumeric) {
            var a2;
            if (e2.xaxis.tickAmount === void 0 ? (a2 = Math.round(t3.svgWidth / 150), e2.xaxis.type === "numeric" && t3.dataPoints < 30 && (a2 = t3.dataPoints - 1), a2 > t3.dataPoints && t3.dataPoints !== 0 && (a2 = t3.dataPoints - 1)) : e2.xaxis.tickAmount === "dataPoints" ? (t3.series.length > 1 && (a2 = t3.series[t3.maxValsInArrayIndex].length - 1), t3.isXNumeric && (a2 = t3.maxX - t3.minX - 1)) : a2 = e2.xaxis.tickAmount, t3.xTickAmount = a2, e2.xaxis.max !== void 0 && typeof e2.xaxis.max == "number" && (t3.maxX = e2.xaxis.max), e2.xaxis.min !== void 0 && typeof e2.xaxis.min == "number" && (t3.minX = e2.xaxis.min), e2.xaxis.range !== void 0 && (t3.minX = t3.maxX - e2.xaxis.range), t3.minX !== Number.MAX_VALUE && t3.maxX !== -Number.MAX_VALUE) if (e2.xaxis.convertedCatToNumeric && !t3.dataFormatXNumeric) {
              for (var s2 = [], r2 = t3.minX - 1; r2 < t3.maxX; r2++) s2.push(r2 + 1);
              t3.xAxisScale = { result: s2, niceMin: s2[0], niceMax: s2[s2.length - 1] };
            } else t3.xAxisScale = this.scales.setXScale(t3.minX, t3.maxX);
            else t3.xAxisScale = this.scales.linearScale(0, a2, a2, 0, e2.xaxis.stepSize), t3.noLabelsProvided && t3.labels.length > 0 && (t3.xAxisScale = this.scales.linearScale(1, t3.labels.length, a2 - 1, 0, e2.xaxis.stepSize), t3.seriesX = t3.labels.slice());
            i2 && (t3.labels = t3.xAxisScale.result.slice());
          }
          return t3.isBarHorizontal && t3.labels.length && (t3.xTickAmount = t3.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: t3.minX, maxX: t3.maxX };
        } }, { key: "setZRange", value: function() {
          var t3 = this.w.globals;
          if (t3.isDataXYZ) {
            for (var e2 = 0; e2 < t3.series.length; e2++) if (t3.seriesZ[e2] !== void 0) for (var i2 = 0; i2 < t3.seriesZ[e2].length; i2++) t3.seriesZ[e2][i2] !== null && x.isNumber(t3.seriesZ[e2][i2]) && (t3.maxZ = Math.max(t3.maxZ, t3.seriesZ[e2][i2]), t3.minZ = Math.min(t3.minZ, t3.seriesZ[e2][i2]));
          }
        } }, { key: "_handleSingleDataPoint", value: function() {
          var t3 = this.w.globals, e2 = this.w.config;
          if (t3.minX === t3.maxX) {
            var i2 = new A(this.ctx);
            if (e2.xaxis.type === "datetime") {
              var a2 = i2.getDate(t3.minX);
              e2.xaxis.labels.datetimeUTC ? a2.setUTCDate(a2.getUTCDate() - 2) : a2.setDate(a2.getDate() - 2), t3.minX = new Date(a2).getTime();
              var s2 = i2.getDate(t3.maxX);
              e2.xaxis.labels.datetimeUTC ? s2.setUTCDate(s2.getUTCDate() + 2) : s2.setDate(s2.getDate() + 2), t3.maxX = new Date(s2).getTime();
            } else (e2.xaxis.type === "numeric" || e2.xaxis.type === "category" && !t3.noLabelsProvided) && (t3.minX = t3.minX - 2, t3.initialMinX = t3.minX, t3.maxX = t3.maxX + 2, t3.initialMaxX = t3.maxX);
          }
        } }, { key: "_getMinXDiff", value: function() {
          var t3 = this.w.globals;
          t3.isXNumeric && t3.seriesX.forEach(function(e2, i2) {
            e2.length === 1 && e2.push(t3.seriesX[t3.maxValsInArrayIndex][t3.seriesX[t3.maxValsInArrayIndex].length - 1]);
            var a2 = e2.slice();
            a2.sort(function(t4, e3) {
              return t4 - e3;
            }), a2.forEach(function(e3, i3) {
              if (i3 > 0) {
                var s2 = e3 - a2[i3 - 1];
                s2 > 0 && (t3.minXDiff = Math.min(s2, t3.minXDiff));
              }
            }), t3.dataPoints !== 1 && t3.minXDiff !== Number.MAX_VALUE || (t3.minXDiff = 0.5);
          });
        } }, { key: "_setStackedMinMax", value: function() {
          var t3 = this, e2 = this.w.globals;
          if (e2.series.length) {
            var i2 = e2.seriesGroups;
            i2.length || (i2 = [this.w.globals.seriesNames.map(function(t4) {
              return t4;
            })]);
            var a2 = {}, s2 = {};
            i2.forEach(function(i3) {
              a2[i3] = [], s2[i3] = [], t3.w.config.series.map(function(t4, a3) {
                return i3.indexOf(e2.seriesNames[a3]) > -1 ? a3 : null;
              }).filter(function(t4) {
                return t4 !== null;
              }).forEach(function(r2) {
                for (var o2 = 0; o2 < e2.series[e2.maxValsInArrayIndex].length; o2++) {
                  var n2, l2, h2, c2;
                  a2[i3][o2] === void 0 && (a2[i3][o2] = 0, s2[i3][o2] = 0), (t3.w.config.chart.stacked && !e2.comboCharts || t3.w.config.chart.stacked && e2.comboCharts && (!t3.w.config.chart.stackOnlyBar || ((n2 = t3.w.config.series) === null || n2 === void 0 || (l2 = n2[r2]) === null || l2 === void 0 ? void 0 : l2.type) === "bar" || ((h2 = t3.w.config.series) === null || h2 === void 0 || (c2 = h2[r2]) === null || c2 === void 0 ? void 0 : c2.type) === "column")) && e2.series[r2][o2] !== null && x.isNumber(e2.series[r2][o2]) && (e2.series[r2][o2] > 0 ? a2[i3][o2] += parseFloat(e2.series[r2][o2]) + 1e-4 : s2[i3][o2] += parseFloat(e2.series[r2][o2]));
                }
              });
            }), Object.entries(a2).forEach(function(t4) {
              var i3 = g(t4, 1)[0];
              a2[i3].forEach(function(t5, r2) {
                e2.maxY = Math.max(e2.maxY, a2[i3][r2]), e2.minY = Math.min(e2.minY, s2[i3][r2]);
              });
            });
          }
        } }]), t2;
      }(), q = function() {
        function t2(e2, i2) {
          a(this, t2), this.ctx = e2, this.elgrid = i2, this.w = e2.w;
          var s2 = this.w;
          this.xaxisFontSize = s2.config.xaxis.labels.style.fontSize, this.axisFontFamily = s2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = s2.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = s2.config.chart.type === "bar" && s2.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, s2.config.xaxis.position === "bottom" && (this.xAxisoffX = s2.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new C(e2);
        }
        return r(t2, [{ key: "drawYaxis", value: function(t3) {
          var e2 = this, i2 = this.w, a2 = new m(this.ctx), s2 = i2.config.yaxis[t3].labels.style, r2 = s2.fontSize, o2 = s2.fontFamily, n2 = s2.fontWeight, l2 = a2.group({ class: "apexcharts-yaxis", rel: t3, transform: "translate(" + i2.globals.translateYAxisX[t3] + ", 0)" });
          if (this.axesUtils.isYAxisHidden(t3)) return l2;
          var h2 = a2.group({ class: "apexcharts-yaxis-texts-g" });
          l2.add(h2);
          var c2 = i2.globals.yAxisScale[t3].result.length - 1, d2 = i2.globals.gridHeight / c2, g2 = i2.globals.yLabelFormatters[t3], u2 = i2.globals.yAxisScale[t3].result.slice();
          u2 = this.axesUtils.checkForReversedLabels(t3, u2);
          var p2 = "";
          if (i2.config.yaxis[t3].labels.show) {
            var f2 = i2.globals.translateY + i2.config.yaxis[t3].labels.offsetY;
            i2.globals.isBarHorizontal ? f2 = 0 : i2.config.chart.type === "heatmap" && (f2 -= d2 / 2), f2 += parseInt(i2.config.yaxis[t3].labels.style.fontSize, 10) / 3;
            for (var b2 = function(l3) {
              var b3 = u2[l3];
              b3 = g2(b3, l3, i2);
              var v3 = i2.config.yaxis[t3].labels.padding;
              i2.config.yaxis[t3].opposite && i2.config.yaxis.length !== 0 && (v3 *= -1);
              var m2 = "end";
              i2.config.yaxis[t3].opposite && (m2 = "start"), i2.config.yaxis[t3].labels.align === "left" ? m2 = "start" : i2.config.yaxis[t3].labels.align === "center" ? m2 = "middle" : i2.config.yaxis[t3].labels.align === "right" && (m2 = "end");
              var y3 = e2.axesUtils.getYAxisForeColor(s2.colors, t3), w3 = x.listToArray(i2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-label tspan"))).map(function(t4) {
                return t4.textContent;
              }), k3 = a2.drawText({ x: v3, y: f2, text: w3.indexOf(b3) >= 0 ? "" : b3, textAnchor: m2, fontSize: r2, fontFamily: o2, fontWeight: n2, maxWidth: i2.config.yaxis[t3].labels.maxWidth, foreColor: Array.isArray(y3) ? y3[l3] : y3, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + s2.cssClass });
              l3 === c2 && (p2 = k3), h2.add(k3);
              var A3 = document.createElementNS(i2.globals.SVGNS, "title");
              if (A3.textContent = Array.isArray(b3) ? b3.join(" ") : b3, k3.node.appendChild(A3), i2.config.yaxis[t3].labels.rotate !== 0) {
                var S3 = a2.rotateAroundCenter(p2.node), C3 = a2.rotateAroundCenter(k3.node);
                k3.node.setAttribute("transform", "rotate(".concat(i2.config.yaxis[t3].labels.rotate, " ").concat(S3.x, " ").concat(C3.y, ")"));
              }
              f2 += d2;
            }, v2 = c2; v2 >= 0; v2--) b2(v2);
          }
          if (i2.config.yaxis[t3].title.text !== void 0) {
            var y2 = a2.group({ class: "apexcharts-yaxis-title" }), w2 = 0;
            i2.config.yaxis[t3].opposite && (w2 = i2.globals.translateYAxisX[t3]);
            var k2 = a2.drawText({ x: w2, y: i2.globals.gridHeight / 2 + i2.globals.translateY + i2.config.yaxis[t3].title.offsetY, text: i2.config.yaxis[t3].title.text, textAnchor: "end", foreColor: i2.config.yaxis[t3].title.style.color, fontSize: i2.config.yaxis[t3].title.style.fontSize, fontWeight: i2.config.yaxis[t3].title.style.fontWeight, fontFamily: i2.config.yaxis[t3].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + i2.config.yaxis[t3].title.style.cssClass });
            y2.add(k2), l2.add(y2);
          }
          var A2 = i2.config.yaxis[t3].axisBorder, S2 = 31 + A2.offsetX;
          if (i2.config.yaxis[t3].opposite && (S2 = -31 - A2.offsetX), A2.show) {
            var C2 = a2.drawLine(S2, i2.globals.translateY + A2.offsetY - 2, S2, i2.globals.gridHeight + i2.globals.translateY + A2.offsetY + 2, A2.color, 0, A2.width);
            l2.add(C2);
          }
          return i2.config.yaxis[t3].axisTicks.show && this.axesUtils.drawYAxisTicks(S2, c2, A2, i2.config.yaxis[t3].axisTicks, t3, d2, l2), l2;
        } }, { key: "drawYaxisInversed", value: function(t3) {
          var e2 = this.w, i2 = new m(this.ctx), a2 = i2.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), s2 = i2.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e2.globals.translateXAxisX, ", ").concat(e2.globals.translateXAxisY, ")") });
          a2.add(s2);
          var r2 = e2.globals.yAxisScale[t3].result.length - 1, o2 = e2.globals.gridWidth / r2 + 0.1, n2 = o2 + e2.config.xaxis.labels.offsetX, l2 = e2.globals.xLabelFormatter, h2 = e2.globals.yAxisScale[t3].result.slice(), c2 = e2.globals.timescaleLabels;
          c2.length > 0 && (this.xaxisLabels = c2.slice(), r2 = (h2 = c2.slice()).length), h2 = this.axesUtils.checkForReversedLabels(t3, h2);
          var d2 = c2.length;
          if (e2.config.xaxis.labels.show) for (var g2 = d2 ? 0 : r2; d2 ? g2 < d2 : g2 >= 0; d2 ? g2++ : g2--) {
            var u2 = h2[g2];
            u2 = l2(u2, g2, e2);
            var p2 = e2.globals.gridWidth + e2.globals.padHorizontal - (n2 - o2 + e2.config.xaxis.labels.offsetX);
            if (c2.length) {
              var f2 = this.axesUtils.getLabel(h2, c2, p2, g2, this.drawnLabels, this.xaxisFontSize);
              p2 = f2.x, u2 = f2.text, this.drawnLabels.push(f2.text), g2 === 0 && e2.globals.skipFirstTimelinelabel && (u2 = ""), g2 === h2.length - 1 && e2.globals.skipLastTimelinelabel && (u2 = "");
            }
            var x2 = i2.drawText({ x: p2, y: this.xAxisoffX + e2.config.xaxis.labels.offsetY + 30 - (e2.config.xaxis.position === "top" ? e2.globals.xAxisHeight + e2.config.xaxis.axisTicks.height - 2 : 0), text: u2, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t3] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: e2.config.xaxis.labels.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-xaxis-label " + e2.config.xaxis.labels.style.cssClass });
            s2.add(x2), x2.tspan(u2);
            var b2 = document.createElementNS(e2.globals.SVGNS, "title");
            b2.textContent = u2, x2.node.appendChild(b2), n2 += o2;
          }
          return this.inversedYAxisTitleText(a2), this.inversedYAxisBorder(a2), a2;
        } }, { key: "inversedYAxisBorder", value: function(t3) {
          var e2 = this.w, i2 = new m(this.ctx), a2 = e2.config.xaxis.axisBorder;
          if (a2.show) {
            var s2 = 0;
            e2.config.chart.type === "bar" && e2.globals.isXNumeric && (s2 -= 15);
            var r2 = i2.drawLine(e2.globals.padHorizontal + s2 + a2.offsetX, this.xAxisoffX, e2.globals.gridWidth, this.xAxisoffX, a2.color, 0, a2.height);
            this.elgrid && this.elgrid.elGridBorders && e2.config.grid.show ? this.elgrid.elGridBorders.add(r2) : t3.add(r2);
          }
        } }, { key: "inversedYAxisTitleText", value: function(t3) {
          var e2 = this.w, i2 = new m(this.ctx);
          if (e2.config.xaxis.title.text !== void 0) {
            var a2 = i2.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), s2 = i2.drawText({ x: e2.globals.gridWidth / 2 + e2.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e2.config.xaxis.title.style.fontSize) + e2.config.xaxis.title.offsetY + 20, text: e2.config.xaxis.title.text, textAnchor: "middle", fontSize: e2.config.xaxis.title.style.fontSize, fontFamily: e2.config.xaxis.title.style.fontFamily, fontWeight: e2.config.xaxis.title.style.fontWeight, foreColor: e2.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + e2.config.xaxis.title.style.cssClass });
            a2.add(s2), t3.add(a2);
          }
        } }, { key: "yAxisTitleRotate", value: function(t3, e2) {
          var i2 = this.w, a2 = new m(this.ctx), s2 = { width: 0, height: 0 }, r2 = { width: 0, height: 0 }, o2 = i2.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-texts-g"));
          o2 !== null && (s2 = o2.getBoundingClientRect());
          var n2 = i2.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-title text"));
          if (n2 !== null && (r2 = n2.getBoundingClientRect()), n2 !== null) {
            var l2 = this.xPaddingForYAxisTitle(t3, s2, r2, e2);
            n2.setAttribute("x", l2.xPos - (e2 ? 10 : 0));
          }
          if (n2 !== null) {
            var h2 = a2.rotateAroundCenter(n2);
            n2.setAttribute("transform", "rotate(".concat(e2 ? -1 * i2.config.yaxis[t3].title.rotate : i2.config.yaxis[t3].title.rotate, " ").concat(h2.x, " ").concat(h2.y, ")"));
          }
        } }, { key: "xPaddingForYAxisTitle", value: function(t3, e2, i2, a2) {
          var s2 = this.w, r2 = 0, o2 = 0, n2 = 10;
          return s2.config.yaxis[t3].title.text === void 0 || t3 < 0 ? { xPos: o2, padd: 0 } : (a2 ? (o2 = e2.width + s2.config.yaxis[t3].title.offsetX + i2.width / 2 + n2 / 2, (r2 += 1) === 0 && (o2 -= n2 / 2)) : (o2 = -1 * e2.width + s2.config.yaxis[t3].title.offsetX + n2 / 2 + i2.width / 2, s2.globals.isBarHorizontal && (n2 = 25, o2 = -1 * e2.width - s2.config.yaxis[t3].title.offsetX - n2)), { xPos: o2, padd: n2 });
        } }, { key: "setYAxisXPosition", value: function(t3, e2) {
          var i2 = this.w, a2 = 0, s2 = 0, r2 = 18, o2 = 1;
          i2.config.yaxis.length > 1 && (this.multipleYs = !0), i2.config.yaxis.map(function(n2, l2) {
            var h2 = i2.globals.ignoreYAxisIndexes.indexOf(l2) > -1 || !n2.show || n2.floating || t3[l2].width === 0, c2 = t3[l2].width + e2[l2].width;
            n2.opposite ? i2.globals.isBarHorizontal ? (s2 = i2.globals.gridWidth + i2.globals.translateX - 1, i2.globals.translateYAxisX[l2] = s2 - n2.labels.offsetX) : (s2 = i2.globals.gridWidth + i2.globals.translateX + o2, h2 || (o2 = o2 + c2 + 20), i2.globals.translateYAxisX[l2] = s2 - n2.labels.offsetX + 20) : (a2 = i2.globals.translateX - r2, h2 || (r2 = r2 + c2 + 20), i2.globals.translateYAxisX[l2] = a2 + n2.labels.offsetX);
          });
        } }, { key: "setYAxisTextAlignments", value: function() {
          var t3 = this.w, e2 = t3.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");
          (e2 = x.listToArray(e2)).forEach(function(e3, i2) {
            var a2 = t3.config.yaxis[i2];
            if (a2 && !a2.floating && a2.labels.align !== void 0) {
              var s2 = t3.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i2, "'] .apexcharts-yaxis-texts-g")), r2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i2, "'] .apexcharts-yaxis-label"));
              r2 = x.listToArray(r2);
              var o2 = s2.getBoundingClientRect();
              a2.labels.align === "left" ? (r2.forEach(function(t4, e4) {
                t4.setAttribute("text-anchor", "start");
              }), a2.opposite || s2.setAttribute("transform", "translate(-".concat(o2.width, ", 0)"))) : a2.labels.align === "center" ? (r2.forEach(function(t4, e4) {
                t4.setAttribute("text-anchor", "middle");
              }), s2.setAttribute("transform", "translate(".concat(o2.width / 2 * (a2.opposite ? 1 : -1), ", 0)"))) : a2.labels.align === "right" && (r2.forEach(function(t4, e4) {
                t4.setAttribute("text-anchor", "end");
              }), a2.opposite && s2.setAttribute("transform", "translate(".concat(o2.width, ", 0)")));
            }
          });
        } }]), t2;
      }(), Z = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.documentEvent = x.bind(this.documentEvent, this);
        }
        return r(t2, [{ key: "addEventListener", value: function(t3, e2) {
          var i2 = this.w;
          i2.globals.events.hasOwnProperty(t3) ? i2.globals.events[t3].push(e2) : i2.globals.events[t3] = [e2];
        } }, { key: "removeEventListener", value: function(t3, e2) {
          var i2 = this.w;
          if (i2.globals.events.hasOwnProperty(t3)) {
            var a2 = i2.globals.events[t3].indexOf(e2);
            a2 !== -1 && i2.globals.events[t3].splice(a2, 1);
          }
        } }, { key: "fireEvent", value: function(t3, e2) {
          var i2 = this.w;
          if (i2.globals.events.hasOwnProperty(t3)) {
            e2 && e2.length || (e2 = []);
            for (var a2 = i2.globals.events[t3], s2 = a2.length, r2 = 0; r2 < s2; r2++) a2[r2].apply(null, e2);
          }
        } }, { key: "setupEventHandlers", value: function() {
          var t3 = this, e2 = this.w, i2 = this.ctx, a2 = e2.globals.dom.baseEl.querySelector(e2.globals.chartClass);
          this.ctx.eventList.forEach(function(t4) {
            a2.addEventListener(t4, function(t5) {
              var a3 = Object.assign({}, e2, { seriesIndex: e2.globals.axisCharts ? e2.globals.capturedSeriesIndex : 0, dataPointIndex: e2.globals.capturedDataPointIndex });
              t5.type === "mousemove" || t5.type === "touchmove" ? typeof e2.config.chart.events.mouseMove == "function" && e2.config.chart.events.mouseMove(t5, i2, a3) : t5.type === "mouseleave" || t5.type === "touchleave" ? typeof e2.config.chart.events.mouseLeave == "function" && e2.config.chart.events.mouseLeave(t5, i2, a3) : (t5.type === "mouseup" && t5.which === 1 || t5.type === "touchend") && (typeof e2.config.chart.events.click == "function" && e2.config.chart.events.click(t5, i2, a3), i2.ctx.events.fireEvent("click", [t5, i2, a3]));
            }, { capture: !1, passive: !0 });
          }), this.ctx.eventList.forEach(function(i3) {
            e2.globals.dom.baseEl.addEventListener(i3, t3.documentEvent, { passive: !0 });
          }), this.ctx.core.setupBrushHandler();
        } }, { key: "documentEvent", value: function(t3) {
          var e2 = this.w, i2 = t3.target.className;
          if (t3.type === "click") {
            var a2 = e2.globals.dom.baseEl.querySelector(".apexcharts-menu");
            a2 && a2.classList.contains("apexcharts-menu-open") && i2 !== "apexcharts-menu-icon" && a2.classList.remove("apexcharts-menu-open");
          }
          e2.globals.clientX = t3.type === "touchmove" ? t3.touches[0].clientX : t3.clientX, e2.globals.clientY = t3.type === "touchmove" ? t3.touches[0].clientY : t3.clientY;
        } }]), t2;
      }(), $ = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "setCurrentLocaleValues", value: function(t3) {
          var e2 = this.w.config.chart.locales;
          window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e2 = this.w.config.chart.locales.concat(window.Apex.chart.locales));
          var i2 = e2.filter(function(e3) {
            return e3.name === t3;
          })[0];
          if (!i2) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
          var a2 = x.extend(M, i2);
          this.w.globals.locale = a2.options;
        } }]), t2;
      }(), J = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "drawAxis", value: function(t3, e2) {
          var i2, a2, s2 = this, r2 = this.w.globals, o2 = this.w.config, n2 = new V(this.ctx, e2), l2 = new q(this.ctx, e2);
          r2.axisCharts && t3 !== "radar" && (r2.isBarHorizontal ? (a2 = l2.drawYaxisInversed(0), i2 = n2.drawXaxisInversed(0), r2.dom.elGraphical.add(i2), r2.dom.elGraphical.add(a2)) : (i2 = n2.drawXaxis(), r2.dom.elGraphical.add(i2), o2.yaxis.map(function(t4, e3) {
            if (r2.ignoreYAxisIndexes.indexOf(e3) === -1 && (a2 = l2.drawYaxis(e3), r2.dom.Paper.add(a2), s2.w.config.grid.position === "back")) {
              var i3 = r2.dom.Paper.children()[1];
              i3.remove(), r2.dom.Paper.add(i3);
            }
          })));
        } }]), t2;
      }(), Q = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "drawXCrosshairs", value: function() {
          var t3 = this.w, e2 = new m(this.ctx), i2 = new v(this.ctx), a2 = t3.config.xaxis.crosshairs.fill.gradient, s2 = t3.config.xaxis.crosshairs.dropShadow, r2 = t3.config.xaxis.crosshairs.fill.type, o2 = a2.colorFrom, n2 = a2.colorTo, l2 = a2.opacityFrom, h2 = a2.opacityTo, c2 = a2.stops, d2 = s2.enabled, g2 = s2.left, u2 = s2.top, p2 = s2.blur, f2 = s2.color, b2 = s2.opacity, y2 = t3.config.xaxis.crosshairs.fill.color;
          if (t3.config.xaxis.crosshairs.show) {
            r2 === "gradient" && (y2 = e2.drawGradient("vertical", o2, n2, l2, h2, null, c2, null));
            var w2 = e2.drawRect();
            t3.config.xaxis.crosshairs.width === 1 && (w2 = e2.drawLine());
            var k2 = t3.globals.gridHeight;
            (!x.isNumber(k2) || k2 < 0) && (k2 = 0);
            var A2 = t3.config.xaxis.crosshairs.width;
            (!x.isNumber(A2) || A2 < 0) && (A2 = 0), w2.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: k2, width: A2, height: k2, fill: y2, filter: "none", "fill-opacity": t3.config.xaxis.crosshairs.opacity, stroke: t3.config.xaxis.crosshairs.stroke.color, "stroke-width": t3.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": t3.config.xaxis.crosshairs.stroke.dashArray }), d2 && (w2 = i2.dropShadow(w2, { left: g2, top: u2, blur: p2, color: f2, opacity: b2 })), t3.globals.dom.elGraphical.add(w2);
          }
        } }, { key: "drawYCrosshairs", value: function() {
          var t3 = this.w, e2 = new m(this.ctx), i2 = t3.config.yaxis[0].crosshairs, a2 = t3.globals.barPadForNumericAxis;
          if (t3.config.yaxis[0].crosshairs.show) {
            var s2 = e2.drawLine(-a2, 0, t3.globals.gridWidth + a2, 0, i2.stroke.color, i2.stroke.dashArray, i2.stroke.width);
            s2.attr({ class: "apexcharts-ycrosshairs" }), t3.globals.dom.elGraphical.add(s2);
          }
          var r2 = e2.drawLine(-a2, 0, t3.globals.gridWidth + a2, 0, i2.stroke.color, 0, 0);
          r2.attr({ class: "apexcharts-ycrosshairs-hidden" }), t3.globals.dom.elGraphical.add(r2);
        } }]), t2;
      }(), K = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "checkResponsiveConfig", value: function(t3) {
          var e2 = this, i2 = this.w, a2 = i2.config;
          if (a2.responsive.length !== 0) {
            var s2 = a2.responsive.slice();
            s2.sort(function(t4, e3) {
              return t4.breakpoint > e3.breakpoint ? 1 : e3.breakpoint > t4.breakpoint ? -1 : 0;
            }).reverse();
            var r2 = new Y({}), o2 = function() {
              var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a3 = s2[0].breakpoint, o3 = window.innerWidth > 0 ? window.innerWidth : screen.width;
              if (o3 > a3) {
                var n3 = x.clone(i2.globals.initialConfig);
                n3.series = x.clone(i2.config.series);
                var l2 = y.extendArrayProps(r2, n3, i2);
                t4 = x.extend(l2, t4), t4 = x.extend(i2.config, t4), e2.overrideResponsiveOptions(t4);
              } else for (var h2 = 0; h2 < s2.length; h2++) o3 < s2[h2].breakpoint && (t4 = y.extendArrayProps(r2, s2[h2].options, i2), t4 = x.extend(i2.config, t4), e2.overrideResponsiveOptions(t4));
            };
            if (t3) {
              var n2 = y.extendArrayProps(r2, t3, i2);
              n2 = x.extend(i2.config, n2), o2(n2 = x.extend(n2, t3));
            } else o2({});
          }
        } }, { key: "overrideResponsiveOptions", value: function(t3) {
          var e2 = new Y(t3).init({ responsiveOverride: !0 });
          this.w.config = e2;
        } }]), t2;
      }(), tt = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.colors = [], this.w = e2.w;
          var i2 = this.w;
          this.isColorFn = !1, this.isHeatmapDistributed = i2.config.chart.type === "treemap" && i2.config.plotOptions.treemap.distributed || i2.config.chart.type === "heatmap" && i2.config.plotOptions.heatmap.distributed, this.isBarDistributed = i2.config.plotOptions.bar.distributed && (i2.config.chart.type === "bar" || i2.config.chart.type === "rangeBar");
        }
        return r(t2, [{ key: "init", value: function() {
          this.setDefaultColors();
        } }, { key: "setDefaultColors", value: function() {
          var t3, e2 = this, i2 = this.w, a2 = new x();
          if (i2.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(i2.config.theme.mode)), i2.config.colors === void 0 || ((t3 = i2.config.colors) === null || t3 === void 0 ? void 0 : t3.length) === 0 ? i2.globals.colors = this.predefined() : (i2.globals.colors = i2.config.colors, Array.isArray(i2.config.colors) && i2.config.colors.length > 0 && typeof i2.config.colors[0] == "function" && (i2.globals.colors = i2.config.series.map(function(t4, a3) {
            var s3 = i2.config.colors[a3];
            return s3 || (s3 = i2.config.colors[0]), typeof s3 == "function" ? (e2.isColorFn = !0, s3({ value: i2.globals.axisCharts ? i2.globals.series[a3][0] ? i2.globals.series[a3][0] : 0 : i2.globals.series[a3], seriesIndex: a3, dataPointIndex: a3, w: i2 })) : s3;
          }))), i2.globals.seriesColors.map(function(t4, e3) {
            t4 && (i2.globals.colors[e3] = t4);
          }), i2.config.theme.monochrome.enabled) {
            var s2 = [], r2 = i2.globals.series.length;
            (this.isBarDistributed || this.isHeatmapDistributed) && (r2 = i2.globals.series[0].length * i2.globals.series.length);
            for (var o2 = i2.config.theme.monochrome.color, n2 = 1 / (r2 / i2.config.theme.monochrome.shadeIntensity), l2 = i2.config.theme.monochrome.shadeTo, h2 = 0, c2 = 0; c2 < r2; c2++) {
              var d2 = void 0;
              l2 === "dark" ? (d2 = a2.shadeColor(-1 * h2, o2), h2 += n2) : (d2 = a2.shadeColor(h2, o2), h2 += n2), s2.push(d2);
            }
            i2.globals.colors = s2.slice();
          }
          var g2 = i2.globals.colors.slice();
          this.pushExtraColors(i2.globals.colors), ["fill", "stroke"].forEach(function(t4) {
            i2.config[t4].colors === void 0 ? i2.globals[t4].colors = e2.isColorFn ? i2.config.colors : g2 : i2.globals[t4].colors = i2.config[t4].colors.slice(), e2.pushExtraColors(i2.globals[t4].colors);
          }), i2.config.dataLabels.style.colors === void 0 ? i2.globals.dataLabels.style.colors = g2 : i2.globals.dataLabels.style.colors = i2.config.dataLabels.style.colors.slice(), this.pushExtraColors(i2.globals.dataLabels.style.colors, 50), i2.config.plotOptions.radar.polygons.fill.colors === void 0 ? i2.globals.radarPolygons.fill.colors = [i2.config.theme.mode === "dark" ? "#424242" : "none"] : i2.globals.radarPolygons.fill.colors = i2.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(i2.globals.radarPolygons.fill.colors, 20), i2.config.markers.colors === void 0 ? i2.globals.markers.colors = g2 : i2.globals.markers.colors = i2.config.markers.colors.slice(), this.pushExtraColors(i2.globals.markers.colors);
        } }, { key: "pushExtraColors", value: function(t3, e2) {
          var i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a2 = this.w, s2 = e2 || a2.globals.series.length;
          if (i2 === null && (i2 = this.isBarDistributed || this.isHeatmapDistributed || a2.config.chart.type === "heatmap" && a2.config.plotOptions.heatmap.colorScale.inverse), i2 && a2.globals.series.length && (s2 = a2.globals.series[a2.globals.maxValsInArrayIndex].length * a2.globals.series.length), t3.length < s2) for (var r2 = s2 - t3.length, o2 = 0; o2 < r2; o2++) t3.push(t3[o2]);
        } }, { key: "updateThemeOptions", value: function(t3) {
          t3.chart = t3.chart || {}, t3.tooltip = t3.tooltip || {};
          var e2 = t3.theme.mode, i2 = e2 === "dark" ? "palette4" : e2 === "light" ? "palette1" : t3.theme.palette || "palette1", a2 = e2 === "dark" ? "#f6f7f8" : e2 === "light" ? "#373d3f" : t3.chart.foreColor || "#373d3f";
          return t3.tooltip.theme = e2 || "light", t3.chart.foreColor = a2, t3.theme.palette = i2, t3;
        } }, { key: "predefined", value: function() {
          switch (this.w.config.theme.palette) {
            case "palette1":
            default:
              this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
              break;
            case "palette2":
              this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
              break;
            case "palette3":
              this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
              break;
            case "palette4":
              this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"];
              break;
            case "palette5":
              this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
              break;
            case "palette6":
              this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
              break;
            case "palette7":
              this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
              break;
            case "palette8":
              this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
              break;
            case "palette9":
              this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
              break;
            case "palette10":
              this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"];
          }
          return this.colors;
        } }]), t2;
      }(), et = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "draw", value: function() {
          this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
        } }, { key: "drawTitleSubtitle", value: function(t3) {
          var e2 = this.w, i2 = t3 === "title" ? e2.config.title : e2.config.subtitle, a2 = e2.globals.svgWidth / 2, s2 = i2.offsetY, r2 = "middle";
          if (i2.align === "left" ? (a2 = 10, r2 = "start") : i2.align === "right" && (a2 = e2.globals.svgWidth - 10, r2 = "end"), a2 += i2.offsetX, s2 = s2 + parseInt(i2.style.fontSize, 10) + i2.margin / 2, i2.text !== void 0) {
            var o2 = new m(this.ctx).drawText({ x: a2, y: s2, text: i2.text, textAnchor: r2, fontSize: i2.style.fontSize, fontFamily: i2.style.fontFamily, fontWeight: i2.style.fontWeight, foreColor: i2.style.color, opacity: 1 });
            o2.node.setAttribute("class", "apexcharts-".concat(t3, "-text")), e2.globals.dom.Paper.add(o2);
          }
        } }]), t2;
      }(), it = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.dCtx = e2;
        }
        return r(t2, [{ key: "getTitleSubtitleCoords", value: function(t3) {
          var e2 = this.w, i2 = 0, a2 = 0, s2 = t3 === "title" ? e2.config.title.floating : e2.config.subtitle.floating, r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-".concat(t3, "-text"));
          if (r2 !== null && !s2) {
            var o2 = r2.getBoundingClientRect();
            i2 = o2.width, a2 = e2.globals.axisCharts ? o2.height + 5 : o2.height;
          }
          return { width: i2, height: a2 };
        } }, { key: "getLegendsRect", value: function() {
          var t3 = this.w, e2 = t3.globals.dom.elLegendWrap;
          t3.config.legend.height || t3.config.legend.position !== "top" && t3.config.legend.position !== "bottom" || (e2.style.maxHeight = t3.globals.svgHeight / 2 + "px");
          var i2 = Object.assign({}, x.getBoundingClientRect(e2));
          return e2 !== null && !t3.config.legend.floating && t3.config.legend.show ? this.dCtx.lgRect = { x: i2.x, y: i2.y, height: i2.height, width: i2.height === 0 ? 0 : i2.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, t3.config.legend.position !== "left" && t3.config.legend.position !== "right" || 1.5 * this.dCtx.lgRect.width > t3.globals.svgWidth && (this.dCtx.lgRect.width = t3.globals.svgWidth / 1.5), this.dCtx.lgRect;
        } }, { key: "getDatalabelsRect", value: function() {
          var t3 = this, e2 = this.w, i2 = [];
          e2.config.series.forEach(function(s3, r3) {
            s3.data.forEach(function(s4, o3) {
              var n2;
              n2 = e2.globals.series[r3][o3], a2 = e2.config.dataLabels.formatter(n2, { ctx: t3.dCtx.ctx, seriesIndex: r3, dataPointIndex: o3, w: e2 }), i2.push(a2);
            });
          });
          var a2 = x.getLargestStringFromArr(i2), s2 = new m(this.dCtx.ctx), r2 = e2.config.dataLabels.style, o2 = s2.getTextRects(a2, parseInt(r2.fontSize), r2.fontFamily);
          return { width: 1.05 * o2.width, height: o2.height };
        } }, { key: "getLargestStringFromMultiArr", value: function(t3, e2) {
          var i2 = t3;
          if (this.w.globals.isMultiLineX) {
            var a2 = e2.map(function(t4, e3) {
              return Array.isArray(t4) ? t4.length : 1;
            }), s2 = Math.max.apply(Math, u(a2));
            i2 = e2[a2.indexOf(s2)];
          }
          return i2;
        } }]), t2;
      }(), at = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.dCtx = e2;
        }
        return r(t2, [{ key: "getxAxisLabelsCoords", value: function() {
          var t3, e2 = this.w, i2 = e2.globals.labels.slice();
          if (e2.config.xaxis.convertedCatToNumeric && i2.length === 0 && (i2 = e2.globals.categoryLabels), e2.globals.timescaleLabels.length > 0) {
            var a2 = this.getxAxisTimeScaleLabelsCoords();
            t3 = { width: a2.width, height: a2.height }, e2.globals.rotateXLabels = !1;
          } else {
            this.dCtx.lgWidthForSideLegends = e2.config.legend.position !== "left" && e2.config.legend.position !== "right" || e2.config.legend.floating ? 0 : this.dCtx.lgRect.width;
            var s2 = e2.globals.xLabelFormatter, r2 = x.getLargestStringFromArr(i2), o2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r2, i2);
            e2.globals.isBarHorizontal && (o2 = r2 = e2.globals.yAxisScale[0].result.reduce(function(t4, e3) {
              return t4.length > e3.length ? t4 : e3;
            }, 0));
            var n2 = new S(this.dCtx.ctx), l2 = r2;
            r2 = n2.xLabelFormat(s2, r2, l2, { i: void 0, dateFormatter: new A(this.dCtx.ctx).formatDate, w: e2 }), o2 = n2.xLabelFormat(s2, o2, l2, { i: void 0, dateFormatter: new A(this.dCtx.ctx).formatDate, w: e2 }), (e2.config.xaxis.convertedCatToNumeric && r2 === void 0 || String(r2).trim() === "") && (o2 = r2 = "1");
            var h2 = new m(this.dCtx.ctx), c2 = h2.getTextRects(r2, e2.config.xaxis.labels.style.fontSize), d2 = c2;
            if (r2 !== o2 && (d2 = h2.getTextRects(o2, e2.config.xaxis.labels.style.fontSize)), (t3 = { width: c2.width >= d2.width ? c2.width : d2.width, height: c2.height >= d2.height ? c2.height : d2.height }).width * i2.length > e2.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && e2.config.xaxis.labels.rotate !== 0 || e2.config.xaxis.labels.rotateAlways) {
              if (!e2.globals.isBarHorizontal) {
                e2.globals.rotateXLabels = !0;
                var g2 = function(t4) {
                  return h2.getTextRects(t4, e2.config.xaxis.labels.style.fontSize, e2.config.xaxis.labels.style.fontFamily, "rotate(".concat(e2.config.xaxis.labels.rotate, " 0 0)"), !1);
                };
                c2 = g2(r2), r2 !== o2 && (d2 = g2(o2)), t3.height = (c2.height > d2.height ? c2.height : d2.height) / 1.5, t3.width = c2.width > d2.width ? c2.width : d2.width;
              }
            } else e2.globals.rotateXLabels = !1;
          }
          return e2.config.xaxis.labels.show || (t3 = { width: 0, height: 0 }), { width: t3.width, height: t3.height };
        } }, { key: "getxAxisGroupLabelsCoords", value: function() {
          var t3, e2 = this.w;
          if (!e2.globals.hasXaxisGroups) return { width: 0, height: 0 };
          var i2, a2 = ((t3 = e2.config.xaxis.group.style) === null || t3 === void 0 ? void 0 : t3.fontSize) || e2.config.xaxis.labels.style.fontSize, s2 = e2.globals.groups.map(function(t4) {
            return t4.title;
          }), r2 = x.getLargestStringFromArr(s2), o2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r2, s2), n2 = new m(this.dCtx.ctx), l2 = n2.getTextRects(r2, a2), h2 = l2;
          return r2 !== o2 && (h2 = n2.getTextRects(o2, a2)), i2 = { width: l2.width >= h2.width ? l2.width : h2.width, height: l2.height >= h2.height ? l2.height : h2.height }, e2.config.xaxis.labels.show || (i2 = { width: 0, height: 0 }), { width: i2.width, height: i2.height };
        } }, { key: "getxAxisTitleCoords", value: function() {
          var t3 = this.w, e2 = 0, i2 = 0;
          if (t3.config.xaxis.title.text !== void 0) {
            var a2 = new m(this.dCtx.ctx).getTextRects(t3.config.xaxis.title.text, t3.config.xaxis.title.style.fontSize);
            e2 = a2.width, i2 = a2.height;
          }
          return { width: e2, height: i2 };
        } }, { key: "getxAxisTimeScaleLabelsCoords", value: function() {
          var t3, e2 = this.w;
          this.dCtx.timescaleLabels = e2.globals.timescaleLabels.slice();
          var i2 = this.dCtx.timescaleLabels.map(function(t4) {
            return t4.value;
          }), a2 = i2.reduce(function(t4, e3) {
            return t4 === void 0 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t4.length > e3.length ? t4 : e3;
          }, 0);
          return 1.05 * (t3 = new m(this.dCtx.ctx).getTextRects(a2, e2.config.xaxis.labels.style.fontSize)).width * i2.length > e2.globals.gridWidth && e2.config.xaxis.labels.rotate !== 0 && (e2.globals.overlappingXLabels = !0), t3;
        } }, { key: "additionalPaddingXLabels", value: function(t3) {
          var e2 = this, i2 = this.w, a2 = i2.globals, s2 = i2.config, r2 = s2.xaxis.type, o2 = t3.width;
          a2.skipLastTimelinelabel = !1, a2.skipFirstTimelinelabel = !1;
          var n2 = i2.config.yaxis[0].opposite && i2.globals.isBarHorizontal, l2 = function(t4, n3) {
            s2.yaxis.length > 1 && function(t5) {
              return a2.collapsedSeriesIndices.indexOf(t5) !== -1;
            }(n3) || function(t5) {
              if (e2.dCtx.timescaleLabels && e2.dCtx.timescaleLabels.length) {
                var n4 = e2.dCtx.timescaleLabels[0], l3 = e2.dCtx.timescaleLabels[e2.dCtx.timescaleLabels.length - 1].position + o2 / 1.75 - e2.dCtx.yAxisWidthRight, h2 = n4.position - o2 / 1.75 + e2.dCtx.yAxisWidthLeft, c2 = i2.config.legend.position === "right" && e2.dCtx.lgRect.width > 0 ? e2.dCtx.lgRect.width : 0;
                l3 > a2.svgWidth - a2.translateX - c2 && (a2.skipLastTimelinelabel = !0), h2 < -(t5.show && !t5.floating || s2.chart.type !== "bar" && s2.chart.type !== "candlestick" && s2.chart.type !== "rangeBar" && s2.chart.type !== "boxPlot" ? 10 : o2 / 1.75) && (a2.skipFirstTimelinelabel = !0);
              } else r2 === "datetime" ? e2.dCtx.gridPad.right < o2 && !a2.rotateXLabels && (a2.skipLastTimelinelabel = !0) : r2 !== "datetime" && e2.dCtx.gridPad.right < o2 / 2 - e2.dCtx.yAxisWidthRight && !a2.rotateXLabels && !i2.config.xaxis.labels.trim && (e2.dCtx.xPadRight = o2 / 2 + 1);
            }(t4);
          };
          s2.yaxis.forEach(function(t4, i3) {
            n2 ? (e2.dCtx.gridPad.left < o2 && (e2.dCtx.xPadLeft = o2 / 2 + 1), e2.dCtx.xPadRight = o2 / 2 + 1) : l2(t4, i3);
          });
        } }]), t2;
      }(), st = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.dCtx = e2;
        }
        return r(t2, [{ key: "getyAxisLabelsCoords", value: function() {
          var t3 = this, e2 = this.w, i2 = [], a2 = 10, s2 = new C(this.dCtx.ctx);
          return e2.config.yaxis.map(function(r2, o2) {
            var n2 = { seriesIndex: o2, dataPointIndex: -1, w: e2 }, l2 = e2.globals.yAxisScale[o2], h2 = 0;
            if (!s2.isYAxisHidden(o2) && r2.labels.show && r2.labels.minWidth !== void 0 && (h2 = r2.labels.minWidth), !s2.isYAxisHidden(o2) && r2.labels.show && l2.result.length) {
              var c2 = e2.globals.yLabelFormatters[o2], d2 = l2.niceMin === Number.MIN_VALUE ? 0 : l2.niceMin, g2 = l2.result.reduce(function(t4, e3) {
                var i3, a3;
                return ((i3 = String(c2(t4, n2))) === null || i3 === void 0 ? void 0 : i3.length) > ((a3 = String(c2(e3, n2))) === null || a3 === void 0 ? void 0 : a3.length) ? t4 : e3;
              }, d2), u2 = g2 = c2(g2, n2);
              if (g2 !== void 0 && g2.length !== 0 || (g2 = l2.niceMax), e2.globals.isBarHorizontal) {
                a2 = 0;
                var p2 = e2.globals.labels.slice();
                g2 = x.getLargestStringFromArr(p2), g2 = c2(g2, { seriesIndex: o2, dataPointIndex: -1, w: e2 }), u2 = t3.dCtx.dimHelpers.getLargestStringFromMultiArr(g2, p2);
              }
              var f2 = new m(t3.dCtx.ctx), b2 = "rotate(".concat(r2.labels.rotate, " 0 0)"), v2 = f2.getTextRects(g2, r2.labels.style.fontSize, r2.labels.style.fontFamily, b2, !1), y2 = v2;
              g2 !== u2 && (y2 = f2.getTextRects(u2, r2.labels.style.fontSize, r2.labels.style.fontFamily, b2, !1)), i2.push({ width: (h2 > y2.width || h2 > v2.width ? h2 : y2.width > v2.width ? y2.width : v2.width) + a2, height: y2.height > v2.height ? y2.height : v2.height });
            } else i2.push({ width: 0, height: 0 });
          }), i2;
        } }, { key: "getyAxisTitleCoords", value: function() {
          var t3 = this, e2 = this.w, i2 = [];
          return e2.config.yaxis.map(function(e3, a2) {
            if (e3.show && e3.title.text !== void 0) {
              var s2 = new m(t3.dCtx.ctx), r2 = "rotate(".concat(e3.title.rotate, " 0 0)"), o2 = s2.getTextRects(e3.title.text, e3.title.style.fontSize, e3.title.style.fontFamily, r2, !1);
              i2.push({ width: o2.width, height: o2.height });
            } else i2.push({ width: 0, height: 0 });
          }), i2;
        } }, { key: "getTotalYAxisWidth", value: function() {
          var t3 = this.w, e2 = 0, i2 = 0, a2 = 0, s2 = t3.globals.yAxisScale.length > 1 ? 10 : 0, r2 = new C(this.dCtx.ctx), o2 = function(o3, n2) {
            var l2 = t3.config.yaxis[n2].floating, h2 = 0;
            o3.width > 0 && !l2 ? (h2 = o3.width + s2, function(e3) {
              return t3.globals.ignoreYAxisIndexes.indexOf(e3) > -1;
            }(n2) && (h2 = h2 - o3.width - s2)) : h2 = l2 || r2.isYAxisHidden(n2) ? 0 : 5, t3.config.yaxis[n2].opposite ? a2 += h2 : i2 += h2, e2 += h2;
          };
          return t3.globals.yLabelsCoords.map(function(t4, e3) {
            o2(t4, e3);
          }), t3.globals.yTitleCoords.map(function(t4, e3) {
            o2(t4, e3);
          }), t3.globals.isBarHorizontal && !t3.config.yaxis[0].floating && (e2 = t3.globals.yLabelsCoords[0].width + t3.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i2, this.dCtx.yAxisWidthRight = a2, e2;
        } }]), t2;
      }(), rt = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.dCtx = e2;
        }
        return r(t2, [{ key: "gridPadForColumnsInNumericAxis", value: function(t3) {
          var e2 = this.w, i2 = e2.config, a2 = e2.globals;
          if (a2.noData || a2.collapsedSeries.length + a2.ancillaryCollapsedSeries.length === i2.series.length) return 0;
          var s2 = function(t4) {
            return t4 === "bar" || t4 === "rangeBar" || t4 === "candlestick" || t4 === "boxPlot";
          }, r2 = i2.chart.type, o2 = 0, n2 = s2(r2) ? i2.series.length : 1;
          a2.comboBarCount > 0 && (n2 = a2.comboBarCount), a2.collapsedSeries.forEach(function(t4) {
            s2(t4.type) && (n2 -= 1);
          }), i2.chart.stacked && (n2 = 1);
          var l2 = s2(r2) || a2.comboBarCount > 0, h2 = Math.abs(a2.initialMaxX - a2.initialMinX);
          if (l2 && a2.isXNumeric && !a2.isBarHorizontal && n2 > 0 && h2 !== 0) {
            var c2, d2;
            h2 <= 3 && (h2 = a2.dataPoints), c2 = h2 / t3, a2.minXDiff && a2.minXDiff / c2 > 0 && (d2 = a2.minXDiff / c2), d2 > t3 / 2 && (d2 /= 2), (o2 = d2 * parseInt(i2.plotOptions.bar.columnWidth, 10) / 100) < 1 && (o2 = 1), a2.barPadForNumericAxis = o2;
          }
          return o2;
        } }, { key: "gridPadFortitleSubtitle", value: function() {
          var t3 = this, e2 = this.w, i2 = e2.globals, a2 = this.dCtx.isSparkline || !e2.globals.axisCharts ? 0 : 10;
          ["title", "subtitle"].forEach(function(i3) {
            e2.config[i3].text !== void 0 ? a2 += e2.config[i3].margin : a2 += t3.dCtx.isSparkline || !e2.globals.axisCharts ? 0 : 5;
          }), !e2.config.legend.show || e2.config.legend.position !== "bottom" || e2.config.legend.floating || e2.globals.axisCharts || (a2 += 10);
          var s2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), r2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
          i2.gridHeight = i2.gridHeight - s2.height - r2.height - a2, i2.translateY = i2.translateY + s2.height + r2.height + a2;
        } }, { key: "setGridXPosForDualYAxis", value: function(t3, e2) {
          var i2 = this.w, a2 = new C(this.dCtx.ctx);
          i2.config.yaxis.map(function(s2, r2) {
            i2.globals.ignoreYAxisIndexes.indexOf(r2) !== -1 || s2.floating || a2.isYAxisHidden(r2) || (s2.opposite && (i2.globals.translateX = i2.globals.translateX - (e2[r2].width + t3[r2].width) - parseInt(i2.config.yaxis[r2].labels.style.fontSize, 10) / 1.2 - 12), i2.globals.translateX < 2 && (i2.globals.translateX = 2));
          });
        } }]), t2;
      }(), ot = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new it(this), this.dimYAxis = new st(this), this.dimXAxis = new at(this), this.dimGrid = new rt(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
        }
        return r(t2, [{ key: "plotCoords", value: function() {
          var t3 = this, e2 = this.w, i2 = e2.globals;
          this.lgRect = this.dimHelpers.getLegendsRect(), this.datalabelsCoords = { width: 0, height: 0 };
          var a2 = Array.isArray(e2.config.stroke.width) ? Math.max.apply(Math, u(e2.config.stroke.width)) : e2.config.stroke.width;
          this.isSparkline && ((e2.config.markers.discrete.length > 0 || e2.config.markers.size > 0) && Object.entries(this.gridPad).forEach(function(e3) {
            var i3 = g(e3, 2), a3 = i3[0], s3 = i3[1];
            t3.gridPad[a3] = Math.max(s3, t3.w.globals.markers.largestSize / 1.5);
          }), this.gridPad.top = Math.max(a2 / 2, this.gridPad.top), this.gridPad.bottom = Math.max(a2 / 2, this.gridPad.bottom)), i2.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i2.gridHeight = i2.gridHeight - this.gridPad.top - this.gridPad.bottom, i2.gridWidth = i2.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
          var s2 = this.dimGrid.gridPadForColumnsInNumericAxis(i2.gridWidth);
          i2.gridWidth = i2.gridWidth - 2 * s2, i2.translateX = i2.translateX + this.gridPad.left + this.xPadLeft + (s2 > 0 ? s2 : 0), i2.translateY = i2.translateY + this.gridPad.top;
        } }, { key: "setDimensionsForAxisCharts", value: function() {
          var t3 = this, e2 = this.w, i2 = e2.globals, a2 = this.dimYAxis.getyAxisLabelsCoords(), s2 = this.dimYAxis.getyAxisTitleCoords();
          i2.isSlopeChart && (this.datalabelsCoords = this.dimHelpers.getDatalabelsRect()), e2.globals.yLabelsCoords = [], e2.globals.yTitleCoords = [], e2.config.yaxis.map(function(t4, i3) {
            e2.globals.yLabelsCoords.push({ width: a2[i3].width, index: i3 }), e2.globals.yTitleCoords.push({ width: s2[i3].width, index: i3 });
          }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
          var r2 = this.dimXAxis.getxAxisLabelsCoords(), o2 = this.dimXAxis.getxAxisGroupLabelsCoords(), n2 = this.dimXAxis.getxAxisTitleCoords();
          this.conditionalChecksForAxisCoords(r2, n2, o2), i2.translateXAxisY = e2.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i2.translateXAxisX = e2.globals.rotateXLabels && e2.globals.isXNumeric && e2.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e2.globals.isBarHorizontal && (i2.rotateXLabels = !1, i2.translateXAxisY = parseInt(e2.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i2.translateXAxisY = i2.translateXAxisY + e2.config.xaxis.labels.offsetY, i2.translateXAxisX = i2.translateXAxisX + e2.config.xaxis.labels.offsetX;
          var l2 = this.yAxisWidth, h2 = this.xAxisHeight;
          i2.xAxisLabelsHeight = this.xAxisHeight - n2.height, i2.xAxisGroupLabelsHeight = i2.xAxisLabelsHeight - r2.height, i2.xAxisLabelsWidth = this.xAxisWidth, i2.xAxisHeight = this.xAxisHeight;
          var c2 = 10;
          (e2.config.chart.type === "radar" || this.isSparkline) && (l2 = 0, h2 = i2.goldenPadding), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || e2.config.chart.type === "treemap") && (l2 = 0, h2 = 0, c2 = 0), this.isSparkline || this.dimXAxis.additionalPaddingXLabels(r2);
          var d2 = function() {
            i2.translateX = l2 + t3.datalabelsCoords.width, i2.gridHeight = i2.svgHeight - t3.lgRect.height - h2 - (t3.isSparkline || e2.config.chart.type === "treemap" ? 0 : e2.globals.rotateXLabels ? 10 : 15), i2.gridWidth = i2.svgWidth - l2 - 2 * t3.datalabelsCoords.width;
          };
          switch (e2.config.xaxis.position === "top" && (c2 = i2.xAxisHeight - e2.config.xaxis.axisTicks.height - 5), e2.config.legend.position) {
            case "bottom":
              i2.translateY = c2, d2();
              break;
            case "top":
              i2.translateY = this.lgRect.height + c2, d2();
              break;
            case "left":
              i2.translateY = c2, i2.translateX = this.lgRect.width + l2 + this.datalabelsCoords.width, i2.gridHeight = i2.svgHeight - h2 - 12, i2.gridWidth = i2.svgWidth - this.lgRect.width - l2 - 2 * this.datalabelsCoords.width;
              break;
            case "right":
              i2.translateY = c2, i2.translateX = l2 + this.datalabelsCoords.width, i2.gridHeight = i2.svgHeight - h2 - 12, i2.gridWidth = i2.svgWidth - this.lgRect.width - l2 - 2 * this.datalabelsCoords.width - 5;
              break;
            default:
              throw new Error("Legend position not supported");
          }
          this.dimGrid.setGridXPosForDualYAxis(s2, a2), new q(this.ctx).setYAxisXPosition(a2, s2);
        } }, { key: "setDimensionsForNonAxisCharts", value: function() {
          var t3 = this.w, e2 = t3.globals, i2 = t3.config, a2 = 0;
          t3.config.legend.show && !t3.config.legend.floating && (a2 = 20);
          var s2 = i2.chart.type === "pie" || i2.chart.type === "polarArea" || i2.chart.type === "donut" ? "pie" : "radialBar", r2 = i2.plotOptions[s2].offsetY, o2 = i2.plotOptions[s2].offsetX;
          if (!i2.legend.show || i2.legend.floating) {
            e2.gridHeight = e2.svgHeight - i2.grid.padding.top - i2.grid.padding.bottom;
            var n2 = e2.dom.elWrap.getBoundingClientRect().width;
            return e2.gridWidth = Math.min(n2, e2.gridHeight) - i2.grid.padding.left - i2.grid.padding.right, e2.translateY = r2, void (e2.translateX = o2 + (e2.svgWidth - e2.gridWidth) / 2);
          }
          switch (i2.legend.position) {
            case "bottom":
              e2.gridHeight = e2.svgHeight - this.lgRect.height - e2.goldenPadding, e2.gridWidth = e2.svgWidth, e2.translateY = r2 - 10, e2.translateX = o2 + (e2.svgWidth - e2.gridWidth) / 2;
              break;
            case "top":
              e2.gridHeight = e2.svgHeight - this.lgRect.height - e2.goldenPadding, e2.gridWidth = e2.svgWidth, e2.translateY = this.lgRect.height + r2 + 10, e2.translateX = o2 + (e2.svgWidth - e2.gridWidth) / 2;
              break;
            case "left":
              e2.gridWidth = e2.svgWidth - this.lgRect.width - a2, e2.gridHeight = i2.chart.height !== "auto" ? e2.svgHeight : e2.gridWidth, e2.translateY = r2, e2.translateX = o2 + this.lgRect.width + a2;
              break;
            case "right":
              e2.gridWidth = e2.svgWidth - this.lgRect.width - a2 - 5, e2.gridHeight = i2.chart.height !== "auto" ? e2.svgHeight : e2.gridWidth, e2.translateY = r2, e2.translateX = o2 + 10;
              break;
            default:
              throw new Error("Legend position not supported");
          }
        } }, { key: "conditionalChecksForAxisCoords", value: function(t3, e2, i2) {
          var a2 = this.w, s2 = a2.globals.hasXaxisGroups ? 2 : 1, r2 = i2.height + t3.height + e2.height, o2 = a2.globals.isMultiLineX ? 1.2 : a2.globals.LINE_HEIGHT_RATIO, n2 = a2.globals.rotateXLabels ? 22 : 10, l2 = a2.globals.rotateXLabels && a2.config.legend.position === "bottom" ? 10 : 0;
          this.xAxisHeight = r2 * o2 + s2 * n2 + l2, this.xAxisWidth = t3.width, this.xAxisHeight - e2.height > a2.config.xaxis.labels.maxHeight && (this.xAxisHeight = a2.config.xaxis.labels.maxHeight), a2.config.xaxis.labels.minHeight && this.xAxisHeight < a2.config.xaxis.labels.minHeight && (this.xAxisHeight = a2.config.xaxis.labels.minHeight), a2.config.xaxis.floating && (this.xAxisHeight = 0);
          var h2 = 0, c2 = 0;
          a2.config.yaxis.forEach(function(t4) {
            h2 += t4.labels.minWidth, c2 += t4.labels.maxWidth;
          }), this.yAxisWidth < h2 && (this.yAxisWidth = h2), this.yAxisWidth > c2 && (this.yAxisWidth = c2);
        } }]), t2;
      }(), nt = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.lgCtx = e2;
        }
        return r(t2, [{ key: "getLegendStyles", value: function() {
          var t3, e2, i2, a2 = document.createElement("style");
          a2.setAttribute("type", "text/css");
          var s2 = ((t3 = this.lgCtx.ctx) === null || t3 === void 0 || (e2 = t3.opts) === null || e2 === void 0 || (i2 = e2.chart) === null || i2 === void 0 ? void 0 : i2.nonce) || this.w.config.chart.nonce;
          s2 && a2.setAttribute("nonce", s2);
          var r2 = document.createTextNode(`
      .apexcharts-legend {
        display: flex;
        overflow: auto;
        padding: 0 10px;
      }
      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {
        flex-wrap: wrap
      }
      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        flex-direction: column;
        bottom: 0;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        justify-content: flex-start;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {
        justify-content: center;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {
        justify-content: flex-end;
      }
      .apexcharts-legend-series {
        cursor: pointer;
        line-height: normal;
        display: flex;
        align-items: center;
      }
      .apexcharts-legend-text {
        position: relative;
        font-size: 14px;
      }
      .apexcharts-legend-text *, .apexcharts-legend-marker * {
        pointer-events: none;
      }
      .apexcharts-legend-marker {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-right: 1px;
      }

      .apexcharts-legend-series.apexcharts-no-click {
        cursor: auto;
      }
      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {
        display: none !important;
      }
      .apexcharts-inactive-legend {
        opacity: 0.45;
      }`);
          return a2.appendChild(r2), a2;
        } }, { key: "getLegendDimensions", value: function() {
          var t3 = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend"), e2 = t3.offsetWidth;
          return { clwh: t3.offsetHeight, clww: e2 };
        } }, { key: "appendToForeignObject", value: function() {
          this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles());
        } }, { key: "toggleDataSeries", value: function(t3, e2) {
          var i2 = this, a2 = this.w;
          if (a2.globals.axisCharts || a2.config.chart.type === "radialBar") {
            a2.globals.resized = !0;
            var s2 = null, r2 = null;
            a2.globals.risingSeries = [], a2.globals.axisCharts ? (s2 = a2.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t3, "']")), r2 = parseInt(s2.getAttribute("data:realIndex"), 10)) : (s2 = a2.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t3 + 1, "']")), r2 = parseInt(s2.getAttribute("rel"), 10) - 1), e2 ? [{ cs: a2.globals.collapsedSeries, csi: a2.globals.collapsedSeriesIndices }, { cs: a2.globals.ancillaryCollapsedSeries, csi: a2.globals.ancillaryCollapsedSeriesIndices }].forEach(function(t4) {
              i2.riseCollapsedSeries(t4.cs, t4.csi, r2);
            }) : this.hideSeries({ seriesEl: s2, realIndex: r2 });
          } else {
            var o2 = a2.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t3 + 1, "'] path")), n2 = a2.config.chart.type;
            if (n2 === "pie" || n2 === "polarArea" || n2 === "donut") {
              var l2 = a2.config.plotOptions.pie.donut.labels;
              new m(this.lgCtx.ctx).pathMouseDown(o2.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(o2.members[0].node, l2);
            }
            o2.fire("click");
          }
        } }, { key: "hideSeries", value: function(t3) {
          var e2 = t3.seriesEl, i2 = t3.realIndex, a2 = this.w, s2 = a2.globals, r2 = x.clone(a2.config.series);
          if (s2.axisCharts) {
            var o2 = a2.config.yaxis[s2.seriesYAxisReverseMap[i2]];
            if (o2 && o2.show && o2.showAlways) s2.ancillaryCollapsedSeriesIndices.indexOf(i2) < 0 && (s2.ancillaryCollapsedSeries.push({ index: i2, data: r2[i2].data.slice(), type: e2.parentNode.className.baseVal.split("-")[1] }), s2.ancillaryCollapsedSeriesIndices.push(i2));
            else if (s2.collapsedSeriesIndices.indexOf(i2) < 0) {
              s2.collapsedSeries.push({ index: i2, data: r2[i2].data.slice(), type: e2.parentNode.className.baseVal.split("-")[1] }), s2.collapsedSeriesIndices.push(i2);
              var n2 = s2.risingSeries.indexOf(i2);
              s2.risingSeries.splice(n2, 1);
            }
          } else s2.collapsedSeries.push({ index: i2, data: r2[i2] }), s2.collapsedSeriesIndices.push(i2);
          for (var l2 = e2.childNodes, h2 = 0; h2 < l2.length; h2++) l2[h2].classList.contains("apexcharts-series-markers-wrap") && (l2[h2].classList.contains("apexcharts-hide") ? l2[h2].classList.remove("apexcharts-hide") : l2[h2].classList.add("apexcharts-hide"));
          s2.allSeriesCollapsed = s2.collapsedSeries.length + s2.ancillaryCollapsedSeries.length === a2.config.series.length, r2 = this._getSeriesBasedOnCollapsedState(r2), this.lgCtx.ctx.updateHelpers._updateSeries(r2, a2.config.chart.animations.dynamicAnimation.enabled);
        } }, { key: "riseCollapsedSeries", value: function(t3, e2, i2) {
          var a2 = this.w, s2 = x.clone(a2.config.series);
          if (t3.length > 0) {
            for (var r2 = 0; r2 < t3.length; r2++) t3[r2].index === i2 && (a2.globals.axisCharts ? (s2[i2].data = t3[r2].data.slice(), t3.splice(r2, 1), e2.splice(r2, 1), a2.globals.risingSeries.push(i2)) : (s2[i2] = t3[r2].data, t3.splice(r2, 1), e2.splice(r2, 1), a2.globals.risingSeries.push(i2)));
            s2 = this._getSeriesBasedOnCollapsedState(s2), this.lgCtx.ctx.updateHelpers._updateSeries(s2, a2.config.chart.animations.dynamicAnimation.enabled);
          }
        } }, { key: "_getSeriesBasedOnCollapsedState", value: function(t3) {
          var e2 = this.w, i2 = 0;
          return e2.globals.axisCharts ? t3.forEach(function(a2, s2) {
            e2.globals.collapsedSeriesIndices.indexOf(s2) < 0 && e2.globals.ancillaryCollapsedSeriesIndices.indexOf(s2) < 0 || (t3[s2].data = [], i2++);
          }) : t3.forEach(function(a2, s2) {
            !e2.globals.collapsedSeriesIndices.indexOf(s2) < 0 && (t3[s2] = 0, i2++);
          }), e2.globals.allSeriesCollapsed = i2 === t3.length, t3;
        } }]), t2;
      }(), lt = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = this.w.config.chart.type === "bar" && this.w.config.plotOptions.bar.distributed && this.w.config.series.length === 1, this.legendHelpers = new nt(this);
        }
        return r(t2, [{ key: "init", value: function() {
          var t3 = this.w, e2 = t3.globals, i2 = t3.config;
          if ((i2.legend.showForSingleSeries && e2.series.length === 1 || this.isBarsDistributed || e2.series.length > 1 || !e2.axisCharts) && i2.legend.show) {
            for (; e2.dom.elLegendWrap.firstChild; ) e2.dom.elLegendWrap.removeChild(e2.dom.elLegendWrap.firstChild);
            this.drawLegends(), x.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()) : this.legendHelpers.appendToForeignObject(), i2.legend.position === "bottom" || i2.legend.position === "top" ? this.legendAlignHorizontal() : i2.legend.position !== "right" && i2.legend.position !== "left" || this.legendAlignVertical();
          }
        } }, { key: "createLegendMarker", value: function(t3) {
          var i2 = t3.i, a2 = t3.fillcolor, s2 = this.w, r2 = document.createElement("span");
          r2.classList.add("apexcharts-legend-marker");
          var o2 = s2.config.legend.markers.shape || s2.config.markers.shape, n2 = o2;
          Array.isArray(o2) && (n2 = o2[i2]);
          var l2 = Array.isArray(s2.config.legend.markers.size) ? parseFloat(s2.config.legend.markers.size[i2]) : parseFloat(s2.config.legend.markers.size), h2 = Array.isArray(s2.config.legend.markers.offsetX) ? parseFloat(s2.config.legend.markers.offsetX[i2]) : parseFloat(s2.config.legend.markers.offsetX), c2 = Array.isArray(s2.config.legend.markers.offsetY) ? parseFloat(s2.config.legend.markers.offsetY[i2]) : parseFloat(s2.config.legend.markers.offsetY), d2 = Array.isArray(s2.config.legend.markers.strokeWidth) ? parseFloat(s2.config.legend.markers.strokeWidth[i2]) : parseFloat(s2.config.legend.markers.strokeWidth), g2 = r2.style;
          if (g2.height = 2 * (l2 + d2) + "px", g2.width = 2 * (l2 + d2) + "px", g2.left = h2 + "px", g2.top = c2 + "px", s2.config.legend.markers.customHTML) g2.background = "transparent", g2.color = a2[i2], Array.isArray(s2.config.legend.markers.customHTML) ? s2.config.legend.markers.customHTML[i2] && (r2.innerHTML = s2.config.legend.markers.customHTML[i2]()) : r2.innerHTML = s2.config.legend.markers.customHTML();
          else {
            var u2 = new D(this.ctx).getMarkerConfig({ cssClass: "apexcharts-legend-marker apexcharts-marker apexcharts-marker-".concat(n2), seriesIndex: i2, strokeWidth: d2, size: l2 }), p2 = SVG(r2).size("100%", "100%"), f2 = new m(this.ctx).drawMarker(0, 0, e(e({}, u2), {}, { pointFillColor: Array.isArray(a2) ? a2[i2] : u2.pointFillColor, shape: n2 }));
            SVG.select(".apexcharts-legend-marker.apexcharts-marker").members.forEach(function(t4) {
              t4.node.classList.contains("apexcharts-marker-triangle") ? t4.node.style.transform = "translate(50%, 45%)" : t4.node.style.transform = "translate(50%, 50%)";
            }), p2.add(f2);
          }
          return r2;
        } }, { key: "drawLegends", value: function() {
          var t3 = this, e2 = this.w, i2 = e2.config.legend.fontFamily, a2 = e2.globals.seriesNames, s2 = e2.config.legend.markers.fillColors ? e2.config.legend.markers.fillColors.slice() : e2.globals.colors.slice();
          if (e2.config.chart.type === "heatmap") {
            var r2 = e2.config.plotOptions.heatmap.colorScale.ranges;
            a2 = r2.map(function(t4) {
              return t4.name ? t4.name : t4.from + " - " + t4.to;
            }), s2 = r2.map(function(t4) {
              return t4.color;
            });
          } else this.isBarsDistributed && (a2 = e2.globals.labels.slice());
          e2.config.legend.customLegendItems.length && (a2 = e2.config.legend.customLegendItems);
          for (var o2 = e2.globals.legendFormatter, n2 = e2.config.legend.inverseOrder, l2 = n2 ? a2.length - 1 : 0; n2 ? l2 >= 0 : l2 <= a2.length - 1; n2 ? l2-- : l2++) {
            var h2, c2 = o2(a2[l2], { seriesIndex: l2, w: e2 }), d2 = !1, g2 = !1;
            if (e2.globals.collapsedSeries.length > 0) for (var u2 = 0; u2 < e2.globals.collapsedSeries.length; u2++) e2.globals.collapsedSeries[u2].index === l2 && (d2 = !0);
            if (e2.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var p2 = 0; p2 < e2.globals.ancillaryCollapsedSeriesIndices.length; p2++) e2.globals.ancillaryCollapsedSeriesIndices[p2] === l2 && (g2 = !0);
            var f2 = this.createLegendMarker({ i: l2, fillcolor: s2 });
            m.setAttrs(f2, { rel: l2 + 1, "data:collapsed": d2 || g2 }), (d2 || g2) && f2.classList.add("apexcharts-inactive-legend");
            var b2 = document.createElement("div"), v2 = document.createElement("span");
            v2.classList.add("apexcharts-legend-text"), v2.innerHTML = Array.isArray(c2) ? c2.join(" ") : c2;
            var w2 = e2.config.legend.labels.useSeriesColors ? e2.globals.colors[l2] : Array.isArray(e2.config.legend.labels.colors) ? (h2 = e2.config.legend.labels.colors) === null || h2 === void 0 ? void 0 : h2[l2] : e2.config.legend.labels.colors;
            w2 || (w2 = e2.config.chart.foreColor), v2.style.color = w2, v2.style.fontSize = parseFloat(e2.config.legend.fontSize) + "px", v2.style.fontWeight = e2.config.legend.fontWeight, v2.style.fontFamily = i2 || e2.config.chart.fontFamily, m.setAttrs(v2, { rel: l2 + 1, i: l2, "data:default-text": encodeURIComponent(c2), "data:collapsed": d2 || g2 }), b2.appendChild(f2), b2.appendChild(v2);
            var k2 = new y(this.ctx);
            e2.config.legend.showForZeroSeries || k2.getSeriesTotalByIndex(l2) === 0 && k2.seriesHaveSameValues(l2) && !k2.isSeriesNull(l2) && e2.globals.collapsedSeriesIndices.indexOf(l2) === -1 && e2.globals.ancillaryCollapsedSeriesIndices.indexOf(l2) === -1 && b2.classList.add("apexcharts-hidden-zero-series"), e2.config.legend.showForNullSeries || k2.isSeriesNull(l2) && e2.globals.collapsedSeriesIndices.indexOf(l2) === -1 && e2.globals.ancillaryCollapsedSeriesIndices.indexOf(l2) === -1 && b2.classList.add("apexcharts-hidden-null-series"), e2.globals.dom.elLegendWrap.appendChild(b2), e2.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e2.config.legend.horizontalAlign)), e2.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + e2.config.legend.position), b2.classList.add("apexcharts-legend-series"), b2.style.margin = "".concat(e2.config.legend.itemMargin.vertical, "px ").concat(e2.config.legend.itemMargin.horizontal, "px"), e2.globals.dom.elLegendWrap.style.width = e2.config.legend.width ? e2.config.legend.width + "px" : "", e2.globals.dom.elLegendWrap.style.height = e2.config.legend.height ? e2.config.legend.height + "px" : "", m.setAttrs(b2, { rel: l2 + 1, seriesName: x.escapeString(a2[l2]), "data:collapsed": d2 || g2 }), (d2 || g2) && b2.classList.add("apexcharts-inactive-legend"), e2.config.legend.onItemClick.toggleDataSeries || b2.classList.add("apexcharts-no-click");
          }
          e2.globals.dom.elWrap.addEventListener("click", t3.onLegendClick, !0), e2.config.legend.onItemHover.highlightDataSeries && e2.config.legend.customLegendItems.length === 0 && (e2.globals.dom.elWrap.addEventListener("mousemove", t3.onLegendHovered, !0), e2.globals.dom.elWrap.addEventListener("mouseout", t3.onLegendHovered, !0));
        } }, { key: "setLegendWrapXY", value: function(t3, e2) {
          var i2 = this.w, a2 = i2.globals.dom.elLegendWrap, s2 = a2.getBoundingClientRect(), r2 = 0, o2 = 0;
          if (i2.config.legend.position === "bottom") o2 += i2.globals.svgHeight - s2.height / 2;
          else if (i2.config.legend.position === "top") {
            var n2 = new ot(this.ctx), l2 = n2.dimHelpers.getTitleSubtitleCoords("title").height, h2 = n2.dimHelpers.getTitleSubtitleCoords("subtitle").height;
            o2 = o2 + (l2 > 0 ? l2 - 10 : 0) + (h2 > 0 ? h2 - 10 : 0);
          }
          a2.style.position = "absolute", r2 = r2 + t3 + i2.config.legend.offsetX, o2 = o2 + e2 + i2.config.legend.offsetY, a2.style.left = r2 + "px", a2.style.top = o2 + "px", i2.config.legend.position === "bottom" ? (a2.style.top = "auto", a2.style.bottom = 5 - i2.config.legend.offsetY + "px") : i2.config.legend.position === "right" && (a2.style.left = "auto", a2.style.right = 25 + i2.config.legend.offsetX + "px"), ["width", "height"].forEach(function(t4) {
            a2.style[t4] && (a2.style[t4] = parseInt(i2.config.legend[t4], 10) + "px");
          });
        } }, { key: "legendAlignHorizontal", value: function() {
          var t3 = this.w;
          t3.globals.dom.elLegendWrap.style.right = 0;
          var e2 = this.legendHelpers.getLegendDimensions(), i2 = new ot(this.ctx), a2 = i2.dimHelpers.getTitleSubtitleCoords("title"), s2 = i2.dimHelpers.getTitleSubtitleCoords("subtitle"), r2 = 0;
          t3.config.legend.position === "bottom" ? r2 = -e2.clwh / 1.8 : t3.config.legend.position === "top" && (r2 = a2.height + s2.height + t3.config.title.margin + t3.config.subtitle.margin - 10), this.setLegendWrapXY(20, r2);
        } }, { key: "legendAlignVertical", value: function() {
          var t3 = this.w, e2 = this.legendHelpers.getLegendDimensions(), i2 = 0;
          t3.config.legend.position === "left" && (i2 = 20), t3.config.legend.position === "right" && (i2 = t3.globals.svgWidth - e2.clww - 10), this.setLegendWrapXY(i2, 20);
        } }, { key: "onLegendHovered", value: function(t3) {
          var e2 = this.w, i2 = t3.target.classList.contains("apexcharts-legend-series") || t3.target.classList.contains("apexcharts-legend-text") || t3.target.classList.contains("apexcharts-legend-marker");
          if (e2.config.chart.type === "heatmap" || this.isBarsDistributed) {
            if (i2) {
              var a2 = parseInt(t3.target.getAttribute("rel"), 10) - 1;
              this.ctx.events.fireEvent("legendHover", [this.ctx, a2, this.w]), new W(this.ctx).highlightRangeInSeries(t3, t3.target);
            }
          } else !t3.target.classList.contains("apexcharts-inactive-legend") && i2 && new W(this.ctx).toggleSeriesOnHover(t3, t3.target);
        } }, { key: "onLegendClick", value: function(t3) {
          var e2 = this.w;
          if (!e2.config.legend.customLegendItems.length && (t3.target.classList.contains("apexcharts-legend-series") || t3.target.classList.contains("apexcharts-legend-text") || t3.target.classList.contains("apexcharts-legend-marker"))) {
            var i2 = parseInt(t3.target.getAttribute("rel"), 10) - 1, a2 = t3.target.getAttribute("data:collapsed") === "true", s2 = this.w.config.chart.events.legendClick;
            typeof s2 == "function" && s2(this.ctx, i2, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i2, this.w]);
            var r2 = this.w.config.legend.markers.onClick;
            typeof r2 == "function" && t3.target.classList.contains("apexcharts-legend-marker") && (r2(this.ctx, i2, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i2, this.w])), e2.config.chart.type !== "treemap" && e2.config.chart.type !== "heatmap" && !this.isBarsDistributed && e2.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i2, a2);
          }
        } }]), t2;
      }(), ht = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
          var i2 = this.w;
          this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = i2.globals.minX, this.maxX = i2.globals.maxX;
        }
        return r(t2, [{ key: "createToolbar", value: function() {
          var t3 = this, e2 = this.w, i2 = function() {
            return document.createElement("div");
          }, a2 = i2();
          if (a2.setAttribute("class", "apexcharts-toolbar"), a2.style.top = e2.config.chart.toolbar.offsetY + "px", a2.style.right = 3 - e2.config.chart.toolbar.offsetX + "px", e2.globals.dom.elWrap.appendChild(a2), this.elZoom = i2(), this.elZoomIn = i2(), this.elZoomOut = i2(), this.elPan = i2(), this.elSelection = i2(), this.elZoomReset = i2(), this.elMenuIcon = i2(), this.elMenu = i2(), this.elCustomIcons = [], this.t = e2.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var s2 = 0; s2 < this.t.customIcons.length; s2++) this.elCustomIcons.push(i2());
          var r2 = [], o2 = function(i3, a3, s3) {
            var o3 = i3.toLowerCase();
            t3.t[o3] && e2.config.chart.zoom.enabled && r2.push({ el: a3, icon: typeof t3.t[o3] == "string" ? t3.t[o3] : s3, title: t3.localeValues[i3], class: "apexcharts-".concat(o3, "-icon") });
          };
          o2("zoomIn", this.elZoomIn, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`), o2("zoomOut", this.elZoomOut, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`);
          var n2 = function(i3) {
            t3.t[i3] && e2.config.chart[i3].enabled && r2.push({ el: i3 === "zoom" ? t3.elZoom : t3.elSelection, icon: typeof t3.t[i3] == "string" ? t3.t[i3] : i3 === "zoom" ? `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
</svg>` : `<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>
</svg>`, title: t3.localeValues[i3 === "zoom" ? "selectionZoom" : "selection"], class: e2.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(i3, "-icon") });
          };
          n2("zoom"), n2("selection"), this.t.pan && e2.config.chart.zoom.enabled && r2.push({ el: this.elPan, icon: typeof this.t.pan == "string" ? this.t.pan : `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <defs>
        <path d="M0 0h24v24H0z" id="a"/>
    </defs>
    <clipPath id="b">
        <use overflow="visible" xlink:href="#a"/>
    </clipPath>
    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
</svg>`, title: this.localeValues.pan, class: e2.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon" }), o2("reset", this.elZoomReset, `<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`), this.t.download && r2.push({ el: this.elMenuIcon, icon: typeof this.t.download == "string" ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
          for (var l2 = 0; l2 < this.elCustomIcons.length; l2++) r2.push({ el: this.elCustomIcons[l2], icon: this.t.customIcons[l2].icon, title: this.t.customIcons[l2].title, index: this.t.customIcons[l2].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[l2].class });
          r2.forEach(function(t4, e3) {
            t4.index && x.moveIndexInArray(r2, e3, t4.index);
          });
          for (var h2 = 0; h2 < r2.length; h2++) m.setAttrs(r2[h2].el, { class: r2[h2].class, title: r2[h2].title }), r2[h2].el.innerHTML = r2[h2].icon, a2.appendChild(r2[h2].el);
          this._createHamburgerMenu(a2), e2.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : e2.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : e2.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
        } }, { key: "_createHamburgerMenu", value: function(t3) {
          this.elMenuItems = [], t3.appendChild(this.elMenu), m.setAttrs(this.elMenu, { class: "apexcharts-menu" });
          for (var e2 = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }], i2 = 0; i2 < e2.length; i2++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i2].innerHTML = e2[i2].title, m.setAttrs(this.elMenuItems[i2], { class: "apexcharts-menu-item ".concat(e2[i2].name), title: e2[i2].title }), this.elMenu.appendChild(this.elMenuItems[i2]);
        } }, { key: "addToolbarEventListeners", value: function() {
          var t3 = this;
          this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function(e3) {
            e3.classList.contains("exportSVG") ? e3.addEventListener("click", t3.handleDownload.bind(t3, "svg")) : e3.classList.contains("exportPNG") ? e3.addEventListener("click", t3.handleDownload.bind(t3, "png")) : e3.classList.contains("exportCSV") && e3.addEventListener("click", t3.handleDownload.bind(t3, "csv"));
          });
          for (var e2 = 0; e2 < this.t.customIcons.length; e2++) this.elCustomIcons[e2].addEventListener("click", this.t.customIcons[e2].click.bind(this, this.ctx, this.ctx.w));
        } }, { key: "toggleZoomSelection", value: function(t3) {
          this.ctx.getSyncedCharts().forEach(function(e2) {
            e2.ctx.toolbar.toggleOtherControls();
            var i2 = t3 === "selection" ? e2.ctx.toolbar.elSelection : e2.ctx.toolbar.elZoom, a2 = t3 === "selection" ? "selectionEnabled" : "zoomEnabled";
            e2.w.globals[a2] = !e2.w.globals[a2], i2.classList.contains(e2.ctx.toolbar.selectedClass) ? i2.classList.remove(e2.ctx.toolbar.selectedClass) : i2.classList.add(e2.ctx.toolbar.selectedClass);
          });
        } }, { key: "getToolbarIconsReference", value: function() {
          var t3 = this.w;
          this.elZoom || (this.elZoom = t3.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t3.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t3.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
        } }, { key: "enableZoomPanFromToolbar", value: function(t3) {
          this.toggleOtherControls(), t3 === "pan" ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
          var e2 = t3 === "pan" ? this.elPan : this.elZoom, i2 = t3 === "pan" ? this.elZoom : this.elPan;
          e2 && e2.classList.add(this.selectedClass), i2 && i2.classList.remove(this.selectedClass);
        } }, { key: "togglePanning", value: function() {
          this.ctx.getSyncedCharts().forEach(function(t3) {
            t3.ctx.toolbar.toggleOtherControls(), t3.w.globals.panEnabled = !t3.w.globals.panEnabled, t3.ctx.toolbar.elPan.classList.contains(t3.ctx.toolbar.selectedClass) ? t3.ctx.toolbar.elPan.classList.remove(t3.ctx.toolbar.selectedClass) : t3.ctx.toolbar.elPan.classList.add(t3.ctx.toolbar.selectedClass);
          });
        } }, { key: "toggleOtherControls", value: function() {
          var t3 = this, e2 = this.w;
          e2.globals.panEnabled = !1, e2.globals.zoomEnabled = !1, e2.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach(function(e3) {
            e3 && e3.classList.remove(t3.selectedClass);
          });
        } }, { key: "handleZoomIn", value: function() {
          var t3 = this.w;
          t3.globals.isRangeBar && (this.minX = t3.globals.minY, this.maxX = t3.globals.maxY);
          var e2 = (this.minX + this.maxX) / 2, i2 = (this.minX + e2) / 2, a2 = (this.maxX + e2) / 2, s2 = this._getNewMinXMaxX(i2, a2);
          t3.globals.disableZoomIn || this.zoomUpdateOptions(s2.minX, s2.maxX);
        } }, { key: "handleZoomOut", value: function() {
          var t3 = this.w;
          if (t3.globals.isRangeBar && (this.minX = t3.globals.minY, this.maxX = t3.globals.maxY), !(t3.config.xaxis.type === "datetime" && new Date(this.minX).getUTCFullYear() < 1e3)) {
            var e2 = (this.minX + this.maxX) / 2, i2 = this.minX - (e2 - this.minX), a2 = this.maxX - (e2 - this.maxX), s2 = this._getNewMinXMaxX(i2, a2);
            t3.globals.disableZoomOut || this.zoomUpdateOptions(s2.minX, s2.maxX);
          }
        } }, { key: "_getNewMinXMaxX", value: function(t3, e2) {
          var i2 = this.w.config.xaxis.convertedCatToNumeric;
          return { minX: i2 ? Math.floor(t3) : t3, maxX: i2 ? Math.floor(e2) : e2 };
        } }, { key: "zoomUpdateOptions", value: function(t3, e2) {
          var i2 = this.w;
          if (t3 !== void 0 || e2 !== void 0) {
            if (!(i2.config.xaxis.convertedCatToNumeric && (t3 < 1 && (t3 = 1, e2 = i2.globals.dataPoints), e2 - t3 < 2))) {
              var a2 = { min: t3, max: e2 }, s2 = this.getBeforeZoomRange(a2);
              s2 && (a2 = s2.xaxis);
              var r2 = { xaxis: a2 }, o2 = x.clone(i2.globals.initialConfig.yaxis);
              i2.config.chart.group || (r2.yaxis = o2), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(r2, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a2, o2);
            }
          } else this.handleZoomReset();
        } }, { key: "zoomCallback", value: function(t3, e2) {
          typeof this.ev.zoomed == "function" && this.ev.zoomed(this.ctx, { xaxis: t3, yaxis: e2 });
        } }, { key: "getBeforeZoomRange", value: function(t3, e2) {
          var i2 = null;
          return typeof this.ev.beforeZoom == "function" && (i2 = this.ev.beforeZoom(this, { xaxis: t3, yaxis: e2 })), i2;
        } }, { key: "toggleMenu", value: function() {
          var t3 = this;
          window.setTimeout(function() {
            t3.elMenu.classList.contains("apexcharts-menu-open") ? t3.elMenu.classList.remove("apexcharts-menu-open") : t3.elMenu.classList.add("apexcharts-menu-open");
          }, 0);
        } }, { key: "handleDownload", value: function(t3) {
          var e2 = this.w, i2 = new G(this.ctx);
          switch (t3) {
            case "svg":
              i2.exportToSVG(this.ctx);
              break;
            case "png":
              i2.exportToPng(this.ctx);
              break;
            case "csv":
              i2.exportToCSV({ series: e2.config.series, columnDelimiter: e2.config.chart.toolbar.export.csv.columnDelimiter });
          }
        } }, { key: "handleZoomReset", value: function(t3) {
          this.ctx.getSyncedCharts().forEach(function(t4) {
            var e2 = t4.w;
            if (e2.globals.lastXAxis.min = e2.globals.initialConfig.xaxis.min, e2.globals.lastXAxis.max = e2.globals.initialConfig.xaxis.max, t4.updateHelpers.revertDefaultAxisMinMax(), typeof e2.config.chart.events.beforeResetZoom == "function") {
              var i2 = e2.config.chart.events.beforeResetZoom(t4, e2);
              i2 && t4.updateHelpers.revertDefaultAxisMinMax(i2);
            }
            typeof e2.config.chart.events.zoomed == "function" && t4.ctx.toolbar.zoomCallback({ min: e2.config.xaxis.min, max: e2.config.xaxis.max }), e2.globals.zoomed = !1;
            var a2 = t4.ctx.series.emptyCollapsedSeries(x.clone(e2.globals.initialSeries));
            t4.updateHelpers._updateSeries(a2, e2.config.chart.animations.dynamicAnimation.enabled);
          });
        } }, { key: "destroy", value: function() {
          this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
        } }]), t2;
      }(), ct = function(t2) {
        n(i2, ht);
        var e2 = d(i2);
        function i2(t3) {
          var s2;
          return a(this, i2), (s2 = e2.call(this, t3)).ctx = t3, s2.w = t3.w, s2.dragged = !1, s2.graphics = new m(s2.ctx), s2.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], s2.clientX = 0, s2.clientY = 0, s2.startX = 0, s2.endX = 0, s2.dragX = 0, s2.startY = 0, s2.endY = 0, s2.dragY = 0, s2.moveDirection = "none", s2;
        }
        return r(i2, [{ key: "init", value: function(t3) {
          var e3 = this, i3 = t3.xyRatios, a2 = this.w, s2 = this;
          this.xyRatios = i3, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = a2.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), a2.globals.dom.elGraphical.add(this.zoomRect), a2.globals.dom.elGraphical.add(this.selectionRect), a2.config.chart.selection.type === "x" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: a2.globals.gridWidth, maxY: a2.globals.gridHeight }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : a2.config.chart.selection.type === "y" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: a2.globals.gridWidth }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = a2.globals.dom.baseEl.querySelector("".concat(a2.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function(t4) {
            e3.hoverArea.addEventListener(t4, s2.svgMouseEvents.bind(s2, i3), { capture: !1, passive: !0 });
          });
        } }, { key: "destroy", value: function() {
          this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
        } }, { key: "svgMouseEvents", value: function(t3, e3) {
          var i3 = this.w, a2 = this, s2 = this.ctx.toolbar, r2 = i3.globals.zoomEnabled ? i3.config.chart.zoom.type : i3.config.chart.selection.type, o2 = i3.config.chart.toolbar.autoSelected;
          if (e3.shiftKey ? (this.shiftWasPressed = !0, s2.enableZoomPanFromToolbar(o2 === "pan" ? "zoom" : "pan")) : this.shiftWasPressed && (s2.enableZoomPanFromToolbar(o2), this.shiftWasPressed = !1), e3.target) {
            var n2, l2 = e3.target.classList;
            if (e3.target.parentNode && e3.target.parentNode !== null && (n2 = e3.target.parentNode.classList), !(l2.contains("apexcharts-selection-rect") || l2.contains("apexcharts-legend-marker") || l2.contains("apexcharts-legend-text") || n2 && n2.contains("apexcharts-toolbar"))) {
              if (a2.clientX = e3.type === "touchmove" || e3.type === "touchstart" ? e3.touches[0].clientX : e3.type === "touchend" ? e3.changedTouches[0].clientX : e3.clientX, a2.clientY = e3.type === "touchmove" || e3.type === "touchstart" ? e3.touches[0].clientY : e3.type === "touchend" ? e3.changedTouches[0].clientY : e3.clientY, e3.type === "mousedown" && e3.which === 1) {
                var h2 = a2.gridRect.getBoundingClientRect();
                a2.startX = a2.clientX - h2.left, a2.startY = a2.clientY - h2.top, a2.dragged = !1, a2.w.globals.mousedown = !0;
              }
              if ((e3.type === "mousemove" && e3.which === 1 || e3.type === "touchmove") && (a2.dragged = !0, i3.globals.panEnabled ? (i3.globals.selection = null, a2.w.globals.mousedown && a2.panDragging({ context: a2, zoomtype: r2, xyRatios: t3 })) : (a2.w.globals.mousedown && i3.globals.zoomEnabled || a2.w.globals.mousedown && i3.globals.selectionEnabled) && (a2.selection = a2.selectionDrawing({ context: a2, zoomtype: r2 }))), e3.type === "mouseup" || e3.type === "touchend" || e3.type === "mouseleave") {
                var c2, d2 = (c2 = a2.gridRect) === null || c2 === void 0 ? void 0 : c2.getBoundingClientRect();
                d2 && a2.w.globals.mousedown && (a2.endX = a2.clientX - d2.left, a2.endY = a2.clientY - d2.top, a2.dragX = Math.abs(a2.endX - a2.startX), a2.dragY = Math.abs(a2.endY - a2.startY), (i3.globals.zoomEnabled || i3.globals.selectionEnabled) && a2.selectionDrawn({ context: a2, zoomtype: r2 }), i3.globals.panEnabled && i3.config.xaxis.convertedCatToNumeric && a2.delayedPanScrolled()), i3.globals.zoomEnabled && a2.hideSelectionRect(this.selectionRect), a2.dragged = !1, a2.w.globals.mousedown = !1;
              }
              this.makeSelectionRectDraggable();
            }
          }
        } }, { key: "makeSelectionRectDraggable", value: function() {
          var t3 = this.w;
          if (this.selectionRect) {
            var e3 = this.selectionRect.node.getBoundingClientRect();
            e3.width > 0 && e3.height > 0 && this.slDraggableRect.selectize({ points: "l, r", pointSize: 8, pointType: "rect" }).resize({ constraint: { minX: 0, minY: 0, maxX: t3.globals.gridWidth, maxY: t3.globals.gridHeight } }).on("resizing", this.selectionDragging.bind(this, "resizing"));
          }
        } }, { key: "preselectedSelection", value: function() {
          var t3 = this.w, e3 = this.xyRatios;
          if (!t3.globals.zoomEnabled) {
            if (t3.globals.selection !== void 0 && t3.globals.selection !== null) this.drawSelectionRect(t3.globals.selection);
            else if (t3.config.chart.selection.xaxis.min !== void 0 && t3.config.chart.selection.xaxis.max !== void 0) {
              var i3 = (t3.config.chart.selection.xaxis.min - t3.globals.minX) / e3.xRatio, a2 = t3.globals.gridWidth - (t3.globals.maxX - t3.config.chart.selection.xaxis.max) / e3.xRatio - i3;
              t3.globals.isRangeBar && (i3 = (t3.config.chart.selection.xaxis.min - t3.globals.yAxisScale[0].niceMin) / e3.invertedYRatio, a2 = (t3.config.chart.selection.xaxis.max - t3.config.chart.selection.xaxis.min) / e3.invertedYRatio);
              var s2 = { x: i3, y: 0, width: a2, height: t3.globals.gridHeight, translateX: 0, translateY: 0, selectionEnabled: !0 };
              this.drawSelectionRect(s2), this.makeSelectionRectDraggable(), typeof t3.config.chart.events.selection == "function" && t3.config.chart.events.selection(this.ctx, { xaxis: { min: t3.config.chart.selection.xaxis.min, max: t3.config.chart.selection.xaxis.max }, yaxis: {} });
            }
          }
        } }, { key: "drawSelectionRect", value: function(t3) {
          var e3 = t3.x, i3 = t3.y, a2 = t3.width, s2 = t3.height, r2 = t3.translateX, o2 = r2 === void 0 ? 0 : r2, n2 = t3.translateY, l2 = n2 === void 0 ? 0 : n2, h2 = this.w, c2 = this.zoomRect, d2 = this.selectionRect;
          if (this.dragged || h2.globals.selection !== null) {
            var g2 = { transform: "translate(" + o2 + ", " + l2 + ")" };
            h2.globals.zoomEnabled && this.dragged && (a2 < 0 && (a2 = 1), c2.attr({ x: e3, y: i3, width: a2, height: s2, fill: h2.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": h2.config.chart.zoom.zoomedArea.fill.opacity, stroke: h2.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": h2.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": h2.config.chart.zoom.zoomedArea.stroke.opacity }), m.setAttrs(c2.node, g2)), h2.globals.selectionEnabled && (d2.attr({ x: e3, y: i3, width: a2 > 0 ? a2 : 0, height: s2 > 0 ? s2 : 0, fill: h2.config.chart.selection.fill.color, "fill-opacity": h2.config.chart.selection.fill.opacity, stroke: h2.config.chart.selection.stroke.color, "stroke-width": h2.config.chart.selection.stroke.width, "stroke-dasharray": h2.config.chart.selection.stroke.dashArray, "stroke-opacity": h2.config.chart.selection.stroke.opacity }), m.setAttrs(d2.node, g2));
          }
        } }, { key: "hideSelectionRect", value: function(t3) {
          t3 && t3.attr({ x: 0, y: 0, width: 0, height: 0 });
        } }, { key: "selectionDrawing", value: function(t3) {
          var e3 = t3.context, i3 = t3.zoomtype, a2 = this.w, s2 = e3, r2 = this.gridRect.getBoundingClientRect(), o2 = s2.startX - 1, n2 = s2.startY, l2 = !1, h2 = !1, c2 = s2.clientX - r2.left - o2, d2 = s2.clientY - r2.top - n2, g2 = {};
          return Math.abs(c2 + o2) > a2.globals.gridWidth ? c2 = a2.globals.gridWidth - o2 : s2.clientX - r2.left < 0 && (c2 = o2), o2 > s2.clientX - r2.left && (l2 = !0, c2 = Math.abs(c2)), n2 > s2.clientY - r2.top && (h2 = !0, d2 = Math.abs(d2)), g2 = i3 === "x" ? { x: l2 ? o2 - c2 : o2, y: 0, width: c2, height: a2.globals.gridHeight } : i3 === "y" ? { x: 0, y: h2 ? n2 - d2 : n2, width: a2.globals.gridWidth, height: d2 } : { x: l2 ? o2 - c2 : o2, y: h2 ? n2 - d2 : n2, width: c2, height: d2 }, s2.drawSelectionRect(g2), s2.selectionDragging("resizing"), g2;
        } }, { key: "selectionDragging", value: function(t3, e3) {
          var i3 = this, a2 = this.w, s2 = this.xyRatios, r2 = this.selectionRect, o2 = 0;
          t3 === "resizing" && (o2 = 30);
          var n2 = function(t4) {
            return parseFloat(r2.node.getAttribute(t4));
          }, l2 = { x: n2("x"), y: n2("y"), width: n2("width"), height: n2("height") };
          a2.globals.selection = l2, typeof a2.config.chart.events.selection == "function" && a2.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
            var t4, e4, o3, n3, l3 = i3.gridRect.getBoundingClientRect(), h2 = r2.node.getBoundingClientRect();
            a2.globals.isRangeBar ? (t4 = a2.globals.yAxisScale[0].niceMin + (h2.left - l3.left) * s2.invertedYRatio, e4 = a2.globals.yAxisScale[0].niceMin + (h2.right - l3.left) * s2.invertedYRatio, o3 = 0, n3 = 1) : (t4 = a2.globals.xAxisScale.niceMin + (h2.left - l3.left) * s2.xRatio, e4 = a2.globals.xAxisScale.niceMin + (h2.right - l3.left) * s2.xRatio, o3 = a2.globals.yAxisScale[0].niceMin + (l3.bottom - h2.bottom) * s2.yRatio[0], n3 = a2.globals.yAxisScale[0].niceMax - (h2.top - l3.top) * s2.yRatio[0]);
            var c2 = { xaxis: { min: t4, max: e4 }, yaxis: { min: o3, max: n3 } };
            a2.config.chart.events.selection(i3.ctx, c2), a2.config.chart.brush.enabled && a2.config.chart.events.brushScrolled !== void 0 && a2.config.chart.events.brushScrolled(i3.ctx, c2);
          }, o2));
        } }, { key: "selectionDrawn", value: function(t3) {
          var e3 = t3.context, i3 = t3.zoomtype, a2 = this.w, s2 = e3, r2 = this.xyRatios, o2 = this.ctx.toolbar;
          if (s2.startX > s2.endX) {
            var n2 = s2.startX;
            s2.startX = s2.endX, s2.endX = n2;
          }
          if (s2.startY > s2.endY) {
            var l2 = s2.startY;
            s2.startY = s2.endY, s2.endY = l2;
          }
          var h2 = void 0, c2 = void 0;
          a2.globals.isRangeBar ? (h2 = a2.globals.yAxisScale[0].niceMin + s2.startX * r2.invertedYRatio, c2 = a2.globals.yAxisScale[0].niceMin + s2.endX * r2.invertedYRatio) : (h2 = a2.globals.xAxisScale.niceMin + s2.startX * r2.xRatio, c2 = a2.globals.xAxisScale.niceMin + s2.endX * r2.xRatio);
          var d2 = [], g2 = [];
          if (a2.config.yaxis.forEach(function(t4, e4) {
            var i4 = a2.globals.seriesYAxisMap[e4][0];
            d2.push(a2.globals.yAxisScale[e4].niceMax - r2.yRatio[i4] * s2.startY), g2.push(a2.globals.yAxisScale[e4].niceMax - r2.yRatio[i4] * s2.endY);
          }), s2.dragged && (s2.dragX > 10 || s2.dragY > 10) && h2 !== c2) {
            if (a2.globals.zoomEnabled) {
              var u2 = x.clone(a2.globals.initialConfig.yaxis), p2 = x.clone(a2.globals.initialConfig.xaxis);
              if (a2.globals.zoomed = !0, a2.config.xaxis.convertedCatToNumeric && (h2 = Math.floor(h2), c2 = Math.floor(c2), h2 < 1 && (h2 = 1, c2 = a2.globals.dataPoints), c2 - h2 < 2 && (c2 = h2 + 1)), i3 !== "xy" && i3 !== "x" || (p2 = { min: h2, max: c2 }), i3 !== "xy" && i3 !== "y" || u2.forEach(function(t4, e4) {
                u2[e4].min = g2[e4], u2[e4].max = d2[e4];
              }), o2) {
                var f2 = o2.getBeforeZoomRange(p2, u2);
                f2 && (p2 = f2.xaxis ? f2.xaxis : p2, u2 = f2.yaxis ? f2.yaxis : u2);
              }
              var b2 = { xaxis: p2 };
              a2.config.chart.group || (b2.yaxis = u2), s2.ctx.updateHelpers._updateOptions(b2, !1, s2.w.config.chart.animations.dynamicAnimation.enabled), typeof a2.config.chart.events.zoomed == "function" && o2.zoomCallback(p2, u2);
            } else if (a2.globals.selectionEnabled) {
              var v2, m2 = null;
              v2 = { min: h2, max: c2 }, i3 !== "xy" && i3 !== "y" || (m2 = x.clone(a2.config.yaxis)).forEach(function(t4, e4) {
                m2[e4].min = g2[e4], m2[e4].max = d2[e4];
              }), a2.globals.selection = s2.selection, typeof a2.config.chart.events.selection == "function" && a2.config.chart.events.selection(s2.ctx, { xaxis: v2, yaxis: m2 });
            }
          }
        } }, { key: "panDragging", value: function(t3) {
          var e3 = t3.context, i3 = this.w, a2 = e3;
          if (i3.globals.lastClientPosition.x !== void 0) {
            var s2 = i3.globals.lastClientPosition.x - a2.clientX, r2 = i3.globals.lastClientPosition.y - a2.clientY;
            Math.abs(s2) > Math.abs(r2) && s2 > 0 ? this.moveDirection = "left" : Math.abs(s2) > Math.abs(r2) && s2 < 0 ? this.moveDirection = "right" : Math.abs(r2) > Math.abs(s2) && r2 > 0 ? this.moveDirection = "up" : Math.abs(r2) > Math.abs(s2) && r2 < 0 && (this.moveDirection = "down");
          }
          i3.globals.lastClientPosition = { x: a2.clientX, y: a2.clientY };
          var o2 = i3.globals.isRangeBar ? i3.globals.minY : i3.globals.minX, n2 = i3.globals.isRangeBar ? i3.globals.maxY : i3.globals.maxX;
          i3.config.xaxis.convertedCatToNumeric || a2.panScrolled(o2, n2);
        } }, { key: "delayedPanScrolled", value: function() {
          var t3 = this.w, e3 = t3.globals.minX, i3 = t3.globals.maxX, a2 = (t3.globals.maxX - t3.globals.minX) / 2;
          this.moveDirection === "left" ? (e3 = t3.globals.minX + a2, i3 = t3.globals.maxX + a2) : this.moveDirection === "right" && (e3 = t3.globals.minX - a2, i3 = t3.globals.maxX - a2), e3 = Math.floor(e3), i3 = Math.floor(i3), this.updateScrolledChart({ xaxis: { min: e3, max: i3 } }, e3, i3);
        } }, { key: "panScrolled", value: function(t3, e3) {
          var i3 = this.w, a2 = this.xyRatios, s2 = x.clone(i3.globals.initialConfig.yaxis), r2 = a2.xRatio, o2 = i3.globals.minX, n2 = i3.globals.maxX;
          i3.globals.isRangeBar && (r2 = a2.invertedYRatio, o2 = i3.globals.minY, n2 = i3.globals.maxY), this.moveDirection === "left" ? (t3 = o2 + i3.globals.gridWidth / 15 * r2, e3 = n2 + i3.globals.gridWidth / 15 * r2) : this.moveDirection === "right" && (t3 = o2 - i3.globals.gridWidth / 15 * r2, e3 = n2 - i3.globals.gridWidth / 15 * r2), i3.globals.isRangeBar || (t3 < i3.globals.initialMinX || e3 > i3.globals.initialMaxX) && (t3 = o2, e3 = n2);
          var l2 = { xaxis: { min: t3, max: e3 } };
          i3.config.chart.group || (l2.yaxis = s2), this.updateScrolledChart(l2, t3, e3);
        } }, { key: "updateScrolledChart", value: function(t3, e3, i3) {
          var a2 = this.w;
          this.ctx.updateHelpers._updateOptions(t3, !1, !1), typeof a2.config.chart.events.scrolled == "function" && a2.config.chart.events.scrolled(this.ctx, { xaxis: { min: e3, max: i3 } });
        } }]), i2;
      }(), dt = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.ttCtx = e2, this.ctx = e2.ctx;
        }
        return r(t2, [{ key: "getNearestValues", value: function(t3) {
          var e2 = t3.hoverArea, i2 = t3.elGrid, a2 = t3.clientX, s2 = t3.clientY, r2 = this.w, o2 = i2.getBoundingClientRect(), n2 = o2.width, l2 = o2.height, h2 = n2 / (r2.globals.dataPoints - 1), c2 = l2 / r2.globals.dataPoints, d2 = this.hasBars();
          !r2.globals.comboCharts && !d2 || r2.config.xaxis.convertedCatToNumeric || (h2 = n2 / r2.globals.dataPoints);
          var g2 = a2 - o2.left - r2.globals.barPadForNumericAxis, u2 = s2 - o2.top;
          g2 < 0 || u2 < 0 || g2 > n2 || u2 > l2 ? (e2.classList.remove("hovering-zoom"), e2.classList.remove("hovering-pan")) : r2.globals.zoomEnabled ? (e2.classList.remove("hovering-pan"), e2.classList.add("hovering-zoom")) : r2.globals.panEnabled && (e2.classList.remove("hovering-zoom"), e2.classList.add("hovering-pan"));
          var p2 = Math.round(g2 / h2), f2 = Math.floor(u2 / c2);
          d2 && !r2.config.xaxis.convertedCatToNumeric && (p2 = Math.ceil(g2 / h2), p2 -= 1);
          var b2 = null, v2 = null, m2 = r2.globals.seriesXvalues.map(function(t4) {
            return t4.filter(function(t5) {
              return x.isNumber(t5);
            });
          }), y2 = r2.globals.seriesYvalues.map(function(t4) {
            return t4.filter(function(t5) {
              return x.isNumber(t5);
            });
          });
          if (r2.globals.isXNumeric) {
            var w2 = this.ttCtx.getElGrid().getBoundingClientRect(), k2 = g2 * (w2.width / n2), A2 = u2 * (w2.height / l2);
            b2 = (v2 = this.closestInMultiArray(k2, A2, m2, y2)).index, p2 = v2.j, b2 !== null && (m2 = r2.globals.seriesXvalues[b2], p2 = (v2 = this.closestInArray(k2, m2)).index);
          }
          return r2.globals.capturedSeriesIndex = b2 === null ? -1 : b2, (!p2 || p2 < 1) && (p2 = 0), r2.globals.isBarHorizontal ? r2.globals.capturedDataPointIndex = f2 : r2.globals.capturedDataPointIndex = p2, { capturedSeries: b2, j: r2.globals.isBarHorizontal ? f2 : p2, hoverX: g2, hoverY: u2 };
        } }, { key: "closestInMultiArray", value: function(t3, e2, i2, a2) {
          var s2 = this.w, r2 = 0, o2 = null, n2 = -1;
          s2.globals.series.length > 1 ? r2 = this.getFirstActiveXArray(i2) : o2 = 0;
          var l2 = i2[r2][0], h2 = Math.abs(t3 - l2);
          if (i2.forEach(function(e3) {
            e3.forEach(function(e4, i3) {
              var a3 = Math.abs(t3 - e4);
              a3 <= h2 && (h2 = a3, n2 = i3);
            });
          }), n2 !== -1) {
            var c2 = a2[r2][n2], d2 = Math.abs(e2 - c2);
            o2 = r2, a2.forEach(function(t4, i3) {
              var a3 = Math.abs(e2 - t4[n2]);
              a3 <= d2 && (d2 = a3, o2 = i3);
            });
          }
          return { index: o2, j: n2 };
        } }, { key: "getFirstActiveXArray", value: function(t3) {
          for (var e2 = this.w, i2 = 0, a2 = t3.map(function(t4, e3) {
            return t4.length > 0 ? e3 : -1;
          }), s2 = 0; s2 < a2.length; s2++) if (a2[s2] !== -1 && e2.globals.collapsedSeriesIndices.indexOf(s2) === -1 && e2.globals.ancillaryCollapsedSeriesIndices.indexOf(s2) === -1) {
            i2 = a2[s2];
            break;
          }
          return i2;
        } }, { key: "closestInArray", value: function(t3, e2) {
          for (var i2 = e2[0], a2 = null, s2 = Math.abs(t3 - i2), r2 = 0; r2 < e2.length; r2++) {
            var o2 = Math.abs(t3 - e2[r2]);
            o2 < s2 && (s2 = o2, a2 = r2);
          }
          return { index: a2 };
        } }, { key: "isXoverlap", value: function(t3) {
          var e2 = [], i2 = this.w.globals.seriesX.filter(function(t4) {
            return t4[0] !== void 0;
          });
          if (i2.length > 0) for (var a2 = 0; a2 < i2.length - 1; a2++) i2[a2][t3] !== void 0 && i2[a2 + 1][t3] !== void 0 && i2[a2][t3] !== i2[a2 + 1][t3] && e2.push("unEqual");
          return e2.length === 0;
        } }, { key: "isInitialSeriesSameLen", value: function() {
          for (var t3 = !0, e2 = this.w.globals.initialSeries, i2 = 0; i2 < e2.length - 1; i2++) if (e2[i2].data.length !== e2[i2 + 1].data.length) {
            t3 = !1;
            break;
          }
          return t3;
        } }, { key: "getBarsHeight", value: function(t3) {
          return u(t3).reduce(function(t4, e2) {
            return t4 + e2.getBBox().height;
          }, 0);
        } }, { key: "getElMarkers", value: function(t3) {
          return typeof t3 == "number" ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(t3, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
        } }, { key: "getAllMarkers", value: function() {
          var t3 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
          (t3 = u(t3)).sort(function(t4, e3) {
            var i2 = Number(t4.getAttribute("data:realIndex")), a2 = Number(e3.getAttribute("data:realIndex"));
            return a2 < i2 ? 1 : a2 > i2 ? -1 : 0;
          });
          var e2 = [];
          return t3.forEach(function(t4) {
            e2.push(t4.querySelector(".apexcharts-marker"));
          }), e2;
        } }, { key: "hasMarkers", value: function(t3) {
          return this.getElMarkers(t3).length > 0;
        } }, { key: "getPathFromPoint", value: function(t3, e2) {
          var i2 = Number(t3.getAttribute("cx")), a2 = Number(t3.getAttribute("cy")), s2 = t3.getAttribute("shape");
          return new m(this.ctx).getMarkerPath(i2, a2, s2, e2);
        } }, { key: "getElBars", value: function() {
          return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
        } }, { key: "hasBars", value: function() {
          return this.getElBars().length > 0;
        } }, { key: "getHoverMarkerSize", value: function(t3) {
          var e2 = this.w, i2 = e2.config.markers.hover.size;
          return i2 === void 0 && (i2 = e2.globals.markers.size[t3] + e2.config.markers.hover.sizeOffset), i2;
        } }, { key: "toggleAllTooltipSeriesGroups", value: function(t3) {
          var e2 = this.w, i2 = this.ttCtx;
          i2.allTooltipSeriesGroups.length === 0 && (i2.allTooltipSeriesGroups = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
          for (var a2 = i2.allTooltipSeriesGroups, s2 = 0; s2 < a2.length; s2++) t3 === "enable" ? (a2[s2].classList.add("apexcharts-active"), a2[s2].style.display = e2.config.tooltip.items.display) : (a2[s2].classList.remove("apexcharts-active"), a2[s2].style.display = "none");
        } }]), t2;
      }(), gt = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.ctx = e2.ctx, this.ttCtx = e2, this.tooltipUtil = new dt(e2);
        }
        return r(t2, [{ key: "drawSeriesTexts", value: function(t3) {
          var e2 = t3.shared, i2 = e2 === void 0 || e2, a2 = t3.ttItems, s2 = t3.i, r2 = s2 === void 0 ? 0 : s2, o2 = t3.j, n2 = o2 === void 0 ? null : o2, l2 = t3.y1, h2 = t3.y2, c2 = t3.e, d2 = this.w;
          d2.config.tooltip.custom !== void 0 ? this.handleCustomTooltip({ i: r2, j: n2, y1: l2, y2: h2, w: d2 }) : this.toggleActiveInactiveSeries(i2, r2);
          var g2 = this.getValuesToPrint({ i: r2, j: n2 });
          this.printLabels({ i: r2, j: n2, values: g2, ttItems: a2, shared: i2, e: c2 });
          var u2 = this.ttCtx.getElTooltip();
          this.ttCtx.tooltipRect.ttWidth = u2.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = u2.getBoundingClientRect().height;
        } }, { key: "printLabels", value: function(t3) {
          var i2, a2 = this, s2 = t3.i, r2 = t3.j, o2 = t3.values, n2 = t3.ttItems, l2 = t3.shared, h2 = t3.e, c2 = this.w, d2 = [], g2 = function(t4) {
            return c2.globals.seriesGoals[t4] && c2.globals.seriesGoals[t4][r2] && Array.isArray(c2.globals.seriesGoals[t4][r2]);
          }, u2 = o2.xVal, p2 = o2.zVal, f2 = o2.xAxisTTVal, x2 = "", b2 = c2.globals.colors[s2];
          r2 !== null && c2.config.plotOptions.bar.distributed && (b2 = c2.globals.colors[r2]);
          for (var v2 = function(t4, o3) {
            var v3 = a2.getFormatters(s2);
            x2 = a2.getSeriesName({ fn: v3.yLbTitleFormatter, index: s2, seriesIndex: s2, j: r2 }), c2.config.chart.type === "treemap" && (x2 = v3.yLbTitleFormatter(String(c2.config.series[s2].data[r2].x), { series: c2.globals.series, seriesIndex: s2, dataPointIndex: r2, w: c2 }));
            var m3 = c2.config.tooltip.inverseOrder ? o3 : t4;
            if (c2.globals.axisCharts) {
              var y3 = function(t5) {
                var e2, i3, a3, s3;
                return c2.globals.isRangeData ? v3.yLbFormatter((e2 = c2.globals.seriesRangeStart) === null || e2 === void 0 || (i3 = e2[t5]) === null || i3 === void 0 ? void 0 : i3[r2], { series: c2.globals.seriesRangeStart, seriesIndex: t5, dataPointIndex: r2, w: c2 }) + " - " + v3.yLbFormatter((a3 = c2.globals.seriesRangeEnd) === null || a3 === void 0 || (s3 = a3[t5]) === null || s3 === void 0 ? void 0 : s3[r2], { series: c2.globals.seriesRangeEnd, seriesIndex: t5, dataPointIndex: r2, w: c2 }) : v3.yLbFormatter(c2.globals.series[t5][r2], { series: c2.globals.series, seriesIndex: t5, dataPointIndex: r2, w: c2 });
              };
              if (l2) v3 = a2.getFormatters(m3), x2 = a2.getSeriesName({ fn: v3.yLbTitleFormatter, index: m3, seriesIndex: s2, j: r2 }), b2 = c2.globals.colors[m3], i2 = y3(m3), g2(m3) && (d2 = c2.globals.seriesGoals[m3][r2].map(function(t5) {
                return { attrs: t5, val: v3.yLbFormatter(t5.value, { seriesIndex: m3, dataPointIndex: r2, w: c2 }) };
              }));
              else {
                var w2, k2 = h2 == null || (w2 = h2.target) === null || w2 === void 0 ? void 0 : w2.getAttribute("fill");
                k2 && (b2 = k2.indexOf("url") !== -1 ? document.querySelector(k2.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke") : k2), i2 = y3(s2), g2(s2) && Array.isArray(c2.globals.seriesGoals[s2][r2]) && (d2 = c2.globals.seriesGoals[s2][r2].map(function(t5) {
                  return { attrs: t5, val: v3.yLbFormatter(t5.value, { seriesIndex: s2, dataPointIndex: r2, w: c2 }) };
                }));
              }
            }
            r2 === null && (i2 = v3.yLbFormatter(c2.globals.series[s2], e(e({}, c2), {}, { seriesIndex: s2, dataPointIndex: s2 }))), a2.DOMHandling({ i: s2, t: m3, j: r2, ttItems: n2, values: { val: i2, goalVals: d2, xVal: u2, xAxisTTVal: f2, zVal: p2 }, seriesName: x2, shared: l2, pColor: b2 });
          }, m2 = 0, y2 = c2.globals.series.length - 1; m2 < c2.globals.series.length; m2++, y2--) v2(m2, y2);
        } }, { key: "getFormatters", value: function(t3) {
          var e2, i2 = this.w, a2 = i2.globals.yLabelFormatters[t3];
          return i2.globals.ttVal !== void 0 ? Array.isArray(i2.globals.ttVal) ? (a2 = i2.globals.ttVal[t3] && i2.globals.ttVal[t3].formatter, e2 = i2.globals.ttVal[t3] && i2.globals.ttVal[t3].title && i2.globals.ttVal[t3].title.formatter) : (a2 = i2.globals.ttVal.formatter, typeof i2.globals.ttVal.title.formatter == "function" && (e2 = i2.globals.ttVal.title.formatter)) : e2 = i2.config.tooltip.y.title.formatter, typeof a2 != "function" && (a2 = i2.globals.yLabelFormatters[0] ? i2.globals.yLabelFormatters[0] : function(t4) {
            return t4;
          }), typeof e2 != "function" && (e2 = function(t4) {
            return t4;
          }), { yLbFormatter: a2, yLbTitleFormatter: e2 };
        } }, { key: "getSeriesName", value: function(t3) {
          var e2 = t3.fn, i2 = t3.index, a2 = t3.seriesIndex, s2 = t3.j, r2 = this.w;
          return e2(String(r2.globals.seriesNames[i2]), { series: r2.globals.series, seriesIndex: a2, dataPointIndex: s2, w: r2 });
        } }, { key: "DOMHandling", value: function(t3) {
          t3.i;
          var e2 = t3.t, i2 = t3.j, a2 = t3.ttItems, s2 = t3.values, r2 = t3.seriesName, o2 = t3.shared, n2 = t3.pColor, l2 = this.w, h2 = this.ttCtx, c2 = s2.val, d2 = s2.goalVals, g2 = s2.xVal, u2 = s2.xAxisTTVal, p2 = s2.zVal, f2 = null;
          f2 = a2[e2].children, l2.config.tooltip.fillSeriesColor && (a2[e2].style.backgroundColor = n2, f2[0].style.display = "none"), h2.showTooltipTitle && (h2.tooltipTitle === null && (h2.tooltipTitle = l2.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), h2.tooltipTitle.innerHTML = g2), h2.isXAxisTooltipEnabled && (h2.xaxisTooltipText.innerHTML = u2 !== "" ? u2 : g2);
          var x2 = a2[e2].querySelector(".apexcharts-tooltip-text-y-label");
          x2 && (x2.innerHTML = r2 || "");
          var b2 = a2[e2].querySelector(".apexcharts-tooltip-text-y-value");
          b2 && (b2.innerHTML = c2 !== void 0 ? c2 : ""), f2[0] && f2[0].classList.contains("apexcharts-tooltip-marker") && (l2.config.tooltip.marker.fillColors && Array.isArray(l2.config.tooltip.marker.fillColors) && (n2 = l2.config.tooltip.marker.fillColors[e2]), f2[0].style.backgroundColor = n2), l2.config.tooltip.marker.show || (f2[0].style.display = "none");
          var v2 = a2[e2].querySelector(".apexcharts-tooltip-text-goals-label"), m2 = a2[e2].querySelector(".apexcharts-tooltip-text-goals-value");
          if (d2.length && l2.globals.seriesGoals[e2]) {
            var y2 = function() {
              var t4 = "<div >", e3 = "<div>";
              d2.forEach(function(i3, a3) {
                t4 += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i3.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i3.attrs.name, "</div>"), e3 += "<div>".concat(i3.val, "</div>");
              }), v2.innerHTML = t4 + "</div>", m2.innerHTML = e3 + "</div>";
            };
            o2 ? l2.globals.seriesGoals[e2][i2] && Array.isArray(l2.globals.seriesGoals[e2][i2]) ? y2() : (v2.innerHTML = "", m2.innerHTML = "") : y2();
          } else v2.innerHTML = "", m2.innerHTML = "";
          if (p2 !== null && (a2[e2].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = l2.config.tooltip.z.title, a2[e2].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = p2 !== void 0 ? p2 : ""), o2 && f2[0]) {
            if (l2.config.tooltip.hideEmptySeries) {
              var w2 = a2[e2].querySelector(".apexcharts-tooltip-marker"), k2 = a2[e2].querySelector(".apexcharts-tooltip-text");
              parseFloat(c2) == 0 ? (w2.style.display = "none", k2.style.display = "none") : (w2.style.display = "block", k2.style.display = "block");
            }
            c2 == null || l2.globals.ancillaryCollapsedSeriesIndices.indexOf(e2) > -1 || l2.globals.collapsedSeriesIndices.indexOf(e2) > -1 || Array.isArray(h2.tConfig.enabledOnSeries) && h2.tConfig.enabledOnSeries.indexOf(e2) === -1 ? f2[0].parentNode.style.display = "none" : f2[0].parentNode.style.display = l2.config.tooltip.items.display;
          } else Array.isArray(h2.tConfig.enabledOnSeries) && h2.tConfig.enabledOnSeries.indexOf(e2) === -1 && (f2[0].parentNode.style.display = "none");
        } }, { key: "toggleActiveInactiveSeries", value: function(t3, e2) {
          var i2 = this.w;
          if (t3) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
          else {
            this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
            var a2 = i2.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group-".concat(e2));
            a2 && (a2.classList.add("apexcharts-active"), a2.style.display = i2.config.tooltip.items.display);
          }
        } }, { key: "getValuesToPrint", value: function(t3) {
          var e2 = t3.i, i2 = t3.j, a2 = this.w, s2 = this.ctx.series.filteredSeriesX(), r2 = "", o2 = "", n2 = null, l2 = null, h2 = { series: a2.globals.series, seriesIndex: e2, dataPointIndex: i2, w: a2 }, c2 = a2.globals.ttZFormatter;
          i2 === null ? l2 = a2.globals.series[e2] : a2.globals.isXNumeric && a2.config.chart.type !== "treemap" ? (r2 = s2[e2][i2], s2[e2].length === 0 && (r2 = s2[this.tooltipUtil.getFirstActiveXArray(s2)][i2])) : r2 = a2.globals.labels[i2] !== void 0 ? a2.globals.labels[i2] : "";
          var d2 = r2;
          return a2.globals.isXNumeric && a2.config.xaxis.type === "datetime" ? r2 = new S(this.ctx).xLabelFormat(a2.globals.ttKeyFormatter, d2, d2, { i: void 0, dateFormatter: new A(this.ctx).formatDate, w: this.w }) : r2 = a2.globals.isBarHorizontal ? a2.globals.yLabelFormatters[0](d2, h2) : a2.globals.xLabelFormatter(d2, h2), a2.config.tooltip.x.formatter !== void 0 && (r2 = a2.globals.ttKeyFormatter(d2, h2)), a2.globals.seriesZ.length > 0 && a2.globals.seriesZ[e2].length > 0 && (n2 = c2(a2.globals.seriesZ[e2][i2], a2)), o2 = typeof a2.config.xaxis.tooltip.formatter == "function" ? a2.globals.xaxisTooltipFormatter(d2, h2) : r2, { val: Array.isArray(l2) ? l2.join(" ") : l2, xVal: Array.isArray(r2) ? r2.join(" ") : r2, xAxisTTVal: Array.isArray(o2) ? o2.join(" ") : o2, zVal: n2 };
        } }, { key: "handleCustomTooltip", value: function(t3) {
          var e2 = t3.i, i2 = t3.j, a2 = t3.y1, s2 = t3.y2, r2 = t3.w, o2 = this.ttCtx.getElTooltip(), n2 = r2.config.tooltip.custom;
          Array.isArray(n2) && n2[e2] && (n2 = n2[e2]), o2.innerHTML = n2({ ctx: this.ctx, series: r2.globals.series, seriesIndex: e2, dataPointIndex: i2, y1: a2, y2: s2, w: r2 });
        } }]), t2;
      }(), ut = function() {
        function t2(e2) {
          a(this, t2), this.ttCtx = e2, this.ctx = e2.ctx, this.w = e2.w;
        }
        return r(t2, [{ key: "moveXCrosshairs", value: function(t3) {
          var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i2 = this.ttCtx, a2 = this.w, s2 = i2.getElXCrosshairs(), r2 = t3 - i2.xcrosshairsWidth / 2, o2 = a2.globals.labels.slice().length;
          if (e2 !== null && (r2 = a2.globals.gridWidth / o2 * e2), s2 === null || a2.globals.isBarHorizontal || (s2.setAttribute("x", r2), s2.setAttribute("x1", r2), s2.setAttribute("x2", r2), s2.setAttribute("y2", a2.globals.gridHeight), s2.classList.add("apexcharts-active")), r2 < 0 && (r2 = 0), r2 > a2.globals.gridWidth && (r2 = a2.globals.gridWidth), i2.isXAxisTooltipEnabled) {
            var n2 = r2;
            a2.config.xaxis.crosshairs.width !== "tickWidth" && a2.config.xaxis.crosshairs.width !== "barWidth" || (n2 = r2 + i2.xcrosshairsWidth / 2), this.moveXAxisTooltip(n2);
          }
        } }, { key: "moveYCrosshairs", value: function(t3) {
          var e2 = this.ttCtx;
          e2.ycrosshairs !== null && m.setAttrs(e2.ycrosshairs, { y1: t3, y2: t3 }), e2.ycrosshairsHidden !== null && m.setAttrs(e2.ycrosshairsHidden, { y1: t3, y2: t3 });
        } }, { key: "moveXAxisTooltip", value: function(t3) {
          var e2 = this.w, i2 = this.ttCtx;
          if (i2.xaxisTooltip !== null && i2.xcrosshairsWidth !== 0) {
            i2.xaxisTooltip.classList.add("apexcharts-active");
            var a2 = i2.xaxisOffY + e2.config.xaxis.tooltip.offsetY + e2.globals.translateY + 1 + e2.config.xaxis.offsetY;
            if (t3 -= i2.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t3)) {
              t3 += e2.globals.translateX;
              var s2;
              s2 = new m(this.ctx).getTextRects(i2.xaxisTooltipText.innerHTML), i2.xaxisTooltipText.style.minWidth = s2.width + "px", i2.xaxisTooltip.style.left = t3 + "px", i2.xaxisTooltip.style.top = a2 + "px";
            }
          }
        } }, { key: "moveYAxisTooltip", value: function(t3) {
          var e2 = this.w, i2 = this.ttCtx;
          i2.yaxisTTEls === null && (i2.yaxisTTEls = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
          var a2 = parseInt(i2.ycrosshairsHidden.getAttribute("y1"), 10), s2 = e2.globals.translateY + a2, r2 = i2.yaxisTTEls[t3].getBoundingClientRect().height, o2 = e2.globals.translateYAxisX[t3] - 2;
          e2.config.yaxis[t3].opposite && (o2 -= 26), s2 -= r2 / 2, e2.globals.ignoreYAxisIndexes.indexOf(t3) === -1 ? (i2.yaxisTTEls[t3].classList.add("apexcharts-active"), i2.yaxisTTEls[t3].style.top = s2 + "px", i2.yaxisTTEls[t3].style.left = o2 + e2.config.yaxis[t3].tooltip.offsetX + "px") : i2.yaxisTTEls[t3].classList.remove("apexcharts-active");
        } }, { key: "moveTooltip", value: function(t3, e2) {
          var i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a2 = this.w, s2 = this.ttCtx, r2 = s2.getElTooltip(), o2 = s2.tooltipRect, n2 = i2 !== null ? parseFloat(i2) : 1, l2 = parseFloat(t3) + n2 + 5, h2 = parseFloat(e2) + n2 / 2;
          if (l2 > a2.globals.gridWidth / 2 && (l2 = l2 - o2.ttWidth - n2 - 10), l2 > a2.globals.gridWidth - o2.ttWidth - 10 && (l2 = a2.globals.gridWidth - o2.ttWidth), l2 < -20 && (l2 = -20), a2.config.tooltip.followCursor) {
            var c2 = s2.getElGrid().getBoundingClientRect();
            (l2 = s2.e.clientX - c2.left) > a2.globals.gridWidth / 2 && (l2 -= s2.tooltipRect.ttWidth), (h2 = s2.e.clientY + a2.globals.translateY - c2.top) > a2.globals.gridHeight / 2 && (h2 -= s2.tooltipRect.ttHeight);
          } else a2.globals.isBarHorizontal || o2.ttHeight / 2 + h2 > a2.globals.gridHeight && (h2 = a2.globals.gridHeight - o2.ttHeight + a2.globals.translateY);
          isNaN(l2) || (l2 += a2.globals.translateX, r2.style.left = l2 + "px", r2.style.top = h2 + "px");
        } }, { key: "moveMarkers", value: function(t3, e2) {
          var i2 = this.w, a2 = this.ttCtx;
          if (i2.globals.markers.size[t3] > 0) for (var s2 = i2.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t3, "'] .apexcharts-marker")), r2 = 0; r2 < s2.length; r2++) parseInt(s2[r2].getAttribute("rel"), 10) === e2 && (a2.marker.resetPointsSize(), a2.marker.enlargeCurrentPoint(e2, s2[r2]));
          else a2.marker.resetPointsSize(), this.moveDynamicPointOnHover(e2, t3);
        } }, { key: "moveDynamicPointOnHover", value: function(t3, e2) {
          var i2, a2, s2, r2, o2 = this.w, n2 = this.ttCtx, l2 = new m(this.ctx), h2 = o2.globals.pointsArray, c2 = n2.tooltipUtil.getHoverMarkerSize(e2), d2 = o2.config.series[e2].type;
          if (!d2 || d2 !== "column" && d2 !== "candlestick" && d2 !== "boxPlot") {
            s2 = (i2 = h2[e2][t3]) === null || i2 === void 0 ? void 0 : i2[0], r2 = ((a2 = h2[e2][t3]) === null || a2 === void 0 ? void 0 : a2[1]) || 0;
            var g2 = o2.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e2, "'] .apexcharts-series-markers path"));
            if (g2 && r2 < o2.globals.gridHeight && r2 > 0) {
              var u2 = g2.getAttribute("shape"), p2 = l2.getMarkerPath(s2, r2, u2, 1.5 * c2);
              g2.setAttribute("d", p2);
            }
            this.moveXCrosshairs(s2), n2.fixedTooltip || this.moveTooltip(s2, r2, c2);
          }
        } }, { key: "moveDynamicPointsOnHover", value: function(t3) {
          var e2, i2 = this.ttCtx, a2 = i2.w, s2 = 0, r2 = 0, o2 = a2.globals.pointsArray, n2 = new W(this.ctx), l2 = new m(this.ctx);
          e2 = n2.getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
          var h2 = i2.tooltipUtil.getHoverMarkerSize(e2);
          o2[e2] && (s2 = o2[e2][t3][0], r2 = o2[e2][t3][1]);
          var c2 = i2.tooltipUtil.getAllMarkers();
          if (c2 !== null) for (var d2 = 0; d2 < a2.globals.series.length; d2++) {
            var g2 = o2[d2];
            if (a2.globals.comboCharts && g2 === void 0 && c2.splice(d2, 0, null), g2 && g2.length) {
              var u2 = o2[d2][t3][1], p2 = void 0;
              c2[d2].setAttribute("cx", s2);
              var f2 = c2[d2].getAttribute("shape");
              if (a2.config.chart.type === "rangeArea" && !a2.globals.comboCharts) {
                var x2 = t3 + a2.globals.series[d2].length;
                p2 = o2[d2][x2][1], u2 -= Math.abs(u2 - p2) / 2;
              }
              if (u2 !== null && !isNaN(u2) && u2 < a2.globals.gridHeight + h2 && u2 + h2 > 0) {
                var b2 = l2.getMarkerPath(s2, u2, f2, h2);
                c2[d2].setAttribute("d", b2);
              } else c2[d2].setAttribute("d", "");
            }
          }
          this.moveXCrosshairs(s2), i2.fixedTooltip || this.moveTooltip(s2, r2 || a2.globals.gridHeight, h2);
        } }, { key: "moveStickyTooltipOverBars", value: function(t3, e2) {
          var i2 = this.w, a2 = this.ttCtx, s2 = i2.globals.columnSeries ? i2.globals.columnSeries.length : i2.globals.series.length, r2 = s2 >= 2 && s2 % 2 == 0 ? Math.floor(s2 / 2) : Math.floor(s2 / 2) + 1;
          i2.globals.isBarHorizontal && (r2 = new W(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
          var o2 = i2.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "']"));
          o2 || typeof e2 != "number" || (o2 = i2.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(e2, "'] path[j='").concat(t3, `'],
        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='`).concat(e2, "'] path[j='").concat(t3, `'],
        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='`).concat(e2, "'] path[j='").concat(t3, `'],
        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='`).concat(e2, "'] path[j='").concat(t3, "']")));
          var n2 = o2 ? parseFloat(o2.getAttribute("cx")) : 0, l2 = o2 ? parseFloat(o2.getAttribute("cy")) : 0, h2 = o2 ? parseFloat(o2.getAttribute("barWidth")) : 0, c2 = a2.getElGrid().getBoundingClientRect(), d2 = o2 && (o2.classList.contains("apexcharts-candlestick-area") || o2.classList.contains("apexcharts-boxPlot-area"));
          i2.globals.isXNumeric ? (o2 && !d2 && (n2 -= s2 % 2 != 0 ? h2 / 2 : 0), o2 && d2 && i2.globals.comboCharts && (n2 -= h2 / 2)) : i2.globals.isBarHorizontal || (n2 = a2.xAxisTicksPositions[t3 - 1] + a2.dataPointsDividedWidth / 2, isNaN(n2) && (n2 = a2.xAxisTicksPositions[t3] - a2.dataPointsDividedWidth / 2)), i2.globals.isBarHorizontal ? l2 -= a2.tooltipRect.ttHeight : i2.config.tooltip.followCursor ? l2 = a2.e.clientY - c2.top - a2.tooltipRect.ttHeight / 2 : l2 + a2.tooltipRect.ttHeight + 15 > i2.globals.gridHeight && (l2 = i2.globals.gridHeight), i2.globals.isBarHorizontal || this.moveXCrosshairs(n2), a2.fixedTooltip || this.moveTooltip(n2, l2 || i2.globals.gridHeight);
        } }]), t2;
      }(), pt = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.ttCtx = e2, this.ctx = e2.ctx, this.tooltipPosition = new ut(e2);
        }
        return r(t2, [{ key: "drawDynamicPoints", value: function() {
          var t3 = this.w, e2 = new m(this.ctx), i2 = new D(this.ctx), a2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
          a2 = u(a2), t3.config.chart.stacked && a2.sort(function(t4, e3) {
            return parseFloat(t4.getAttribute("data:realIndex")) - parseFloat(e3.getAttribute("data:realIndex"));
          });
          for (var s2 = 0; s2 < a2.length; s2++) {
            var r2 = a2[s2].querySelector(".apexcharts-series-markers-wrap");
            if (r2 !== null) {
              var o2 = void 0, n2 = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
              t3.config.chart.type !== "line" && t3.config.chart.type !== "area" || t3.globals.comboCharts || t3.config.tooltip.intersect || (n2 += " no-pointer-events");
              var l2 = i2.getMarkerConfig({ cssClass: n2, seriesIndex: Number(r2.getAttribute("data:realIndex")) });
              (o2 = e2.drawMarker(0, 0, l2)).node.setAttribute("default-marker-size", 0);
              var h2 = document.createElementNS(t3.globals.SVGNS, "g");
              h2.classList.add("apexcharts-series-markers"), h2.appendChild(o2.node), r2.appendChild(h2);
            }
          }
        } }, { key: "enlargeCurrentPoint", value: function(t3, e2) {
          var i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, s2 = this.w;
          s2.config.chart.type !== "bubble" && this.newPointSize(t3, e2);
          var r2 = e2.getAttribute("cx"), o2 = e2.getAttribute("cy");
          if (i2 !== null && a2 !== null && (r2 = i2, o2 = a2), this.tooltipPosition.moveXCrosshairs(r2), !this.fixedTooltip) {
            if (s2.config.chart.type === "radar") {
              var n2 = this.ttCtx.getElGrid().getBoundingClientRect();
              r2 = this.ttCtx.e.clientX - n2.left;
            }
            this.tooltipPosition.moveTooltip(r2, o2, s2.config.markers.hover.size);
          }
        } }, { key: "enlargePoints", value: function(t3) {
          for (var e2 = this.w, i2 = this, a2 = this.ttCtx, s2 = t3, r2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), o2 = e2.config.markers.hover.size, n2 = 0; n2 < r2.length; n2++) {
            var l2 = r2[n2].getAttribute("rel"), h2 = r2[n2].getAttribute("index");
            if (o2 === void 0 && (o2 = e2.globals.markers.size[h2] + e2.config.markers.hover.sizeOffset), s2 === parseInt(l2, 10)) {
              i2.newPointSize(s2, r2[n2]);
              var c2 = r2[n2].getAttribute("cx"), d2 = r2[n2].getAttribute("cy");
              i2.tooltipPosition.moveXCrosshairs(c2), a2.fixedTooltip || i2.tooltipPosition.moveTooltip(c2, d2, o2);
            } else i2.oldPointSize(r2[n2]);
          }
        } }, { key: "newPointSize", value: function(t3, e2) {
          var i2 = this.w, a2 = i2.config.markers.hover.size, s2 = t3 === 0 ? e2.parentNode.firstChild : e2.parentNode.lastChild;
          if (s2.getAttribute("default-marker-size") !== "0") {
            var r2 = parseInt(s2.getAttribute("index"), 10);
            a2 === void 0 && (a2 = i2.globals.markers.size[r2] + i2.config.markers.hover.sizeOffset), a2 < 0 && (a2 = 0);
            var o2 = this.ttCtx.tooltipUtil.getPathFromPoint(e2, a2);
            e2.setAttribute("d", o2);
          }
        } }, { key: "oldPointSize", value: function(t3) {
          var e2 = parseFloat(t3.getAttribute("default-marker-size")), i2 = this.ttCtx.tooltipUtil.getPathFromPoint(t3, e2);
          t3.setAttribute("d", i2);
        } }, { key: "resetPointsSize", value: function() {
          for (var t3 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e2 = 0; e2 < t3.length; e2++) {
            var i2 = parseFloat(t3[e2].getAttribute("default-marker-size"));
            if (x.isNumber(i2) && i2 >= 0) {
              var a2 = this.ttCtx.tooltipUtil.getPathFromPoint(t3[e2], i2);
              t3[e2].setAttribute("d", a2);
            } else t3[e2].setAttribute("d", "M0,0");
          }
        } }]), t2;
      }(), ft = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w;
          var i2 = this.w;
          this.ttCtx = e2, this.isVerticalGroupedRangeBar = !i2.globals.isBarHorizontal && i2.config.chart.type === "rangeBar" && i2.config.plotOptions.bar.rangeBarGroupRows;
        }
        return r(t2, [{ key: "getAttr", value: function(t3, e2) {
          return parseFloat(t3.target.getAttribute(e2));
        } }, { key: "handleHeatTreeTooltip", value: function(t3) {
          var e2 = t3.e, i2 = t3.opt, a2 = t3.x, s2 = t3.y, r2 = t3.type, o2 = this.ttCtx, n2 = this.w;
          if (e2.target.classList.contains("apexcharts-".concat(r2, "-rect"))) {
            var l2 = this.getAttr(e2, "i"), h2 = this.getAttr(e2, "j"), c2 = this.getAttr(e2, "cx"), d2 = this.getAttr(e2, "cy"), g2 = this.getAttr(e2, "width"), u2 = this.getAttr(e2, "height");
            if (o2.tooltipLabels.drawSeriesTexts({ ttItems: i2.ttItems, i: l2, j: h2, shared: !1, e: e2 }), n2.globals.capturedSeriesIndex = l2, n2.globals.capturedDataPointIndex = h2, a2 = c2 + o2.tooltipRect.ttWidth / 2 + g2, s2 = d2 + o2.tooltipRect.ttHeight / 2 - u2 / 2, o2.tooltipPosition.moveXCrosshairs(c2 + g2 / 2), a2 > n2.globals.gridWidth / 2 && (a2 = c2 - o2.tooltipRect.ttWidth / 2 + g2), o2.w.config.tooltip.followCursor) {
              var p2 = n2.globals.dom.elWrap.getBoundingClientRect();
              a2 = n2.globals.clientX - p2.left - (a2 > n2.globals.gridWidth / 2 ? o2.tooltipRect.ttWidth : 0), s2 = n2.globals.clientY - p2.top - (s2 > n2.globals.gridHeight / 2 ? o2.tooltipRect.ttHeight : 0);
            }
          }
          return { x: a2, y: s2 };
        } }, { key: "handleMarkerTooltip", value: function(t3) {
          var e2, i2, a2 = t3.e, s2 = t3.opt, r2 = t3.x, o2 = t3.y, n2 = this.w, l2 = this.ttCtx;
          if (a2.target.classList.contains("apexcharts-marker")) {
            var h2 = parseInt(s2.paths.getAttribute("cx"), 10), c2 = parseInt(s2.paths.getAttribute("cy"), 10), d2 = parseFloat(s2.paths.getAttribute("val"));
            if (i2 = parseInt(s2.paths.getAttribute("rel"), 10), e2 = parseInt(s2.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, l2.intersect) {
              var g2 = x.findAncestor(s2.paths, "apexcharts-series");
              g2 && (e2 = parseInt(g2.getAttribute("data:realIndex"), 10));
            }
            if (l2.tooltipLabels.drawSeriesTexts({ ttItems: s2.ttItems, i: e2, j: i2, shared: !l2.showOnIntersect && n2.config.tooltip.shared, e: a2 }), a2.type === "mouseup" && l2.markerClick(a2, e2, i2), n2.globals.capturedSeriesIndex = e2, n2.globals.capturedDataPointIndex = i2, r2 = h2, o2 = c2 + n2.globals.translateY - 1.4 * l2.tooltipRect.ttHeight, l2.w.config.tooltip.followCursor) {
              var u2 = l2.getElGrid().getBoundingClientRect();
              o2 = l2.e.clientY + n2.globals.translateY - u2.top;
            }
            d2 < 0 && (o2 = c2), l2.marker.enlargeCurrentPoint(i2, s2.paths, r2, o2);
          }
          return { x: r2, y: o2 };
        } }, { key: "handleBarTooltip", value: function(t3) {
          var e2, i2, a2 = t3.e, s2 = t3.opt, r2 = this.w, o2 = this.ttCtx, n2 = o2.getElTooltip(), l2 = 0, h2 = 0, c2 = 0, d2 = this.getBarTooltipXY({ e: a2, opt: s2 });
          e2 = d2.i, d2.barHeight;
          var g2 = d2.j;
          r2.globals.capturedSeriesIndex = e2, r2.globals.capturedDataPointIndex = g2, r2.globals.isBarHorizontal && o2.tooltipUtil.hasBars() || !r2.config.tooltip.shared ? (h2 = d2.x, c2 = d2.y, i2 = Array.isArray(r2.config.stroke.width) ? r2.config.stroke.width[e2] : r2.config.stroke.width, l2 = h2) : r2.globals.comboCharts || r2.config.tooltip.shared || (l2 /= 2), isNaN(c2) && (c2 = r2.globals.svgHeight - o2.tooltipRect.ttHeight);
          var u2 = parseInt(s2.paths.parentNode.getAttribute("data:realIndex"), 10);
          if (r2.globals.isMultipleYAxis ? r2.config.yaxis[u2] && r2.config.yaxis[u2].reversed : r2.config.yaxis[0].reversed, h2 + o2.tooltipRect.ttWidth > r2.globals.gridWidth ? h2 -= o2.tooltipRect.ttWidth : h2 < 0 && (h2 = 0), o2.w.config.tooltip.followCursor) {
            var p2 = o2.getElGrid().getBoundingClientRect();
            c2 = o2.e.clientY - p2.top;
          }
          o2.tooltip === null && (o2.tooltip = r2.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r2.config.tooltip.shared || (r2.globals.comboBarCount > 0 ? o2.tooltipPosition.moveXCrosshairs(l2 + i2 / 2) : o2.tooltipPosition.moveXCrosshairs(l2)), !o2.fixedTooltip && (!r2.config.tooltip.shared || r2.globals.isBarHorizontal && o2.tooltipUtil.hasBars()) && (c2 = c2 + r2.globals.translateY - o2.tooltipRect.ttHeight / 2, n2.style.left = h2 + r2.globals.translateX + "px", n2.style.top = c2 + "px");
        } }, { key: "getBarTooltipXY", value: function(t3) {
          var e2 = this, i2 = t3.e, a2 = t3.opt, s2 = this.w, r2 = null, o2 = this.ttCtx, n2 = 0, l2 = 0, h2 = 0, c2 = 0, d2 = 0, g2 = i2.target.classList;
          if (g2.contains("apexcharts-bar-area") || g2.contains("apexcharts-candlestick-area") || g2.contains("apexcharts-boxPlot-area") || g2.contains("apexcharts-rangebar-area")) {
            var u2 = i2.target, p2 = u2.getBoundingClientRect(), f2 = a2.elGrid.getBoundingClientRect(), x2 = p2.height;
            d2 = p2.height;
            var b2 = p2.width, v2 = parseInt(u2.getAttribute("cx"), 10), m2 = parseInt(u2.getAttribute("cy"), 10);
            c2 = parseFloat(u2.getAttribute("barWidth"));
            var y2 = i2.type === "touchmove" ? i2.touches[0].clientX : i2.clientX;
            r2 = parseInt(u2.getAttribute("j"), 10), n2 = parseInt(u2.parentNode.getAttribute("rel"), 10) - 1;
            var w2 = u2.getAttribute("data-range-y1"), k2 = u2.getAttribute("data-range-y2");
            s2.globals.comboCharts && (n2 = parseInt(u2.parentNode.getAttribute("data:realIndex"), 10));
            var A2 = function(t4) {
              return s2.globals.isXNumeric ? v2 - b2 / 2 : e2.isVerticalGroupedRangeBar ? v2 + b2 / 2 : v2 - o2.dataPointsDividedWidth + b2 / 2;
            }, S2 = function() {
              return m2 - o2.dataPointsDividedHeight + x2 / 2 - o2.tooltipRect.ttHeight / 2;
            };
            o2.tooltipLabels.drawSeriesTexts({ ttItems: a2.ttItems, i: n2, j: r2, y1: w2 ? parseInt(w2, 10) : null, y2: k2 ? parseInt(k2, 10) : null, shared: !o2.showOnIntersect && s2.config.tooltip.shared, e: i2 }), s2.config.tooltip.followCursor ? s2.globals.isBarHorizontal ? (l2 = y2 - f2.left + 15, h2 = S2()) : (l2 = A2(), h2 = i2.clientY - f2.top - o2.tooltipRect.ttHeight / 2 - 15) : s2.globals.isBarHorizontal ? ((l2 = v2) < o2.xyRatios.baseLineInvertedY && (l2 = v2 - o2.tooltipRect.ttWidth), h2 = S2()) : (l2 = A2(), h2 = m2);
          }
          return { x: l2, y: h2, barHeight: d2, barWidth: c2, i: n2, j: r2 };
        } }]), t2;
      }(), xt = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.ttCtx = e2;
        }
        return r(t2, [{ key: "drawXaxisTooltip", value: function() {
          var t3 = this.w, e2 = this.ttCtx, i2 = t3.config.xaxis.position === "bottom";
          e2.xaxisOffY = i2 ? t3.globals.gridHeight + 1 : -t3.globals.xAxisHeight - t3.config.xaxis.axisTicks.height + 3;
          var a2 = i2 ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", s2 = t3.globals.dom.elWrap;
          e2.isXAxisTooltipEnabled && t3.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") === null && (e2.xaxisTooltip = document.createElement("div"), e2.xaxisTooltip.setAttribute("class", a2 + " apexcharts-theme-" + t3.config.tooltip.theme), s2.appendChild(e2.xaxisTooltip), e2.xaxisTooltipText = document.createElement("div"), e2.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e2.xaxisTooltipText.style.fontFamily = t3.config.xaxis.tooltip.style.fontFamily || t3.config.chart.fontFamily, e2.xaxisTooltipText.style.fontSize = t3.config.xaxis.tooltip.style.fontSize, e2.xaxisTooltip.appendChild(e2.xaxisTooltipText));
        } }, { key: "drawYaxisTooltip", value: function() {
          for (var t3 = this.w, e2 = this.ttCtx, i2 = 0; i2 < t3.config.yaxis.length; i2++) {
            var a2 = t3.config.yaxis[i2].opposite || t3.config.yaxis[i2].crosshairs.opposite;
            e2.yaxisOffX = a2 ? t3.globals.gridWidth + 1 : 1;
            var s2 = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i2, a2 ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"), r2 = t3.globals.dom.elWrap;
            t3.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i2)) === null && (e2.yaxisTooltip = document.createElement("div"), e2.yaxisTooltip.setAttribute("class", s2 + " apexcharts-theme-" + t3.config.tooltip.theme), r2.appendChild(e2.yaxisTooltip), i2 === 0 && (e2.yaxisTooltipText = []), e2.yaxisTooltipText[i2] = document.createElement("div"), e2.yaxisTooltipText[i2].classList.add("apexcharts-yaxistooltip-text"), e2.yaxisTooltip.appendChild(e2.yaxisTooltipText[i2]));
          }
        } }, { key: "setXCrosshairWidth", value: function() {
          var t3 = this.w, e2 = this.ttCtx, i2 = e2.getElXCrosshairs();
          if (e2.xcrosshairsWidth = parseInt(t3.config.xaxis.crosshairs.width, 10), t3.globals.comboCharts) {
            var a2 = t3.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
            if (a2 !== null && t3.config.xaxis.crosshairs.width === "barWidth") {
              var s2 = parseFloat(a2.getAttribute("barWidth"));
              e2.xcrosshairsWidth = s2;
            } else if (t3.config.xaxis.crosshairs.width === "tickWidth") {
              var r2 = t3.globals.labels.length;
              e2.xcrosshairsWidth = t3.globals.gridWidth / r2;
            }
          } else if (t3.config.xaxis.crosshairs.width === "tickWidth") {
            var o2 = t3.globals.labels.length;
            e2.xcrosshairsWidth = t3.globals.gridWidth / o2;
          } else if (t3.config.xaxis.crosshairs.width === "barWidth") {
            var n2 = t3.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
            if (n2 !== null) {
              var l2 = parseFloat(n2.getAttribute("barWidth"));
              e2.xcrosshairsWidth = l2;
            } else e2.xcrosshairsWidth = 1;
          }
          t3.globals.isBarHorizontal && (e2.xcrosshairsWidth = 0), i2 !== null && e2.xcrosshairsWidth > 0 && i2.setAttribute("width", e2.xcrosshairsWidth);
        } }, { key: "handleYCrosshair", value: function() {
          var t3 = this.w, e2 = this.ttCtx;
          e2.ycrosshairs = t3.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e2.ycrosshairsHidden = t3.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
        } }, { key: "drawYaxisTooltipText", value: function(t3, e2, i2) {
          var a2 = this.ttCtx, s2 = this.w, r2 = s2.globals, o2 = r2.seriesYAxisMap[t3];
          if (a2.yaxisTooltips[t3] && o2.length > 0) {
            var n2 = r2.yLabelFormatters[t3], l2 = a2.getElGrid().getBoundingClientRect(), h2 = o2[0], c2 = 0;
            i2.yRatio.length > 1 && (c2 = h2);
            var d2 = (e2 - l2.top) * i2.yRatio[c2], g2 = r2.maxYArr[h2] - r2.minYArr[h2], u2 = r2.minYArr[h2] + (g2 - d2);
            s2.config.yaxis[t3].reversed && (u2 = r2.maxYArr[h2] - (g2 - d2)), a2.tooltipPosition.moveYCrosshairs(e2 - l2.top), a2.yaxisTooltipText[t3].innerHTML = n2(u2), a2.tooltipPosition.moveYAxisTooltip(t3);
          }
        } }]), t2;
      }(), bt = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
          var i2 = this.w;
          this.tConfig = i2.config.tooltip, this.tooltipUtil = new dt(this), this.tooltipLabels = new gt(this), this.tooltipPosition = new ut(this), this.marker = new pt(this), this.intersect = new ft(this), this.axesTooltip = new xt(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !i2.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
        }
        return r(t2, [{ key: "getElTooltip", value: function(t3) {
          return t3 || (t3 = this), t3.w.globals.dom.baseEl ? t3.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
        } }, { key: "getElXCrosshairs", value: function() {
          return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
        } }, { key: "getElGrid", value: function() {
          return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
        } }, { key: "drawTooltip", value: function(t3) {
          var e2 = this.w;
          this.xyRatios = t3, this.isXAxisTooltipEnabled = e2.config.xaxis.tooltip.enabled && e2.globals.axisCharts, this.yaxisTooltips = e2.config.yaxis.map(function(t4, i3) {
            return !!(t4.show && t4.tooltip.enabled && e2.globals.axisCharts);
          }), this.allTooltipSeriesGroups = [], e2.globals.axisCharts || (this.showTooltipTitle = !1);
          var i2 = document.createElement("div");
          if (i2.classList.add("apexcharts-tooltip"), e2.config.tooltip.cssClass && i2.classList.add(e2.config.tooltip.cssClass), i2.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e2.globals.dom.elWrap.appendChild(i2), e2.globals.axisCharts) {
            this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
            var a2 = new V(this.ctx);
            this.xAxisTicksPositions = a2.getXAxisTicksPositions();
          }
          if (!e2.globals.comboCharts && !this.tConfig.intersect && e2.config.chart.type !== "rangeBar" || this.tConfig.shared || (this.showOnIntersect = !0), e2.config.markers.size !== 0 && e2.globals.markers.largestSize !== 0 || this.marker.drawDynamicPoints(this), e2.globals.collapsedSeries.length !== e2.globals.series.length) {
            this.dataPointsDividedHeight = e2.globals.gridHeight / e2.globals.dataPoints, this.dataPointsDividedWidth = e2.globals.gridWidth / e2.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e2.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i2.appendChild(this.tooltipTitle));
            var s2 = e2.globals.series.length;
            (e2.globals.xyCharts || e2.globals.comboCharts) && this.tConfig.shared && (s2 = this.showOnIntersect ? 1 : e2.globals.series.length), this.legendLabels = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s2), this.addSVGEvents();
          }
        } }, { key: "createTTElements", value: function(t3) {
          for (var e2 = this, i2 = this.w, a2 = [], s2 = this.getElTooltip(), r2 = function(r3) {
            var o3 = document.createElement("div");
            o3.classList.add("apexcharts-tooltip-series-group", "apexcharts-tooltip-series-group-".concat(r3)), o3.style.order = i2.config.tooltip.inverseOrder ? t3 - r3 : r3 + 1;
            var n2 = document.createElement("span");
            n2.classList.add("apexcharts-tooltip-marker"), n2.style.backgroundColor = i2.globals.colors[r3], o3.appendChild(n2);
            var l2 = document.createElement("div");
            l2.classList.add("apexcharts-tooltip-text"), l2.style.fontFamily = e2.tConfig.style.fontFamily || i2.config.chart.fontFamily, l2.style.fontSize = e2.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function(t4) {
              var e3 = document.createElement("div");
              e3.classList.add("apexcharts-tooltip-".concat(t4, "-group"));
              var i3 = document.createElement("span");
              i3.classList.add("apexcharts-tooltip-text-".concat(t4, "-label")), e3.appendChild(i3);
              var a3 = document.createElement("span");
              a3.classList.add("apexcharts-tooltip-text-".concat(t4, "-value")), e3.appendChild(a3), l2.appendChild(e3);
            }), o3.appendChild(l2), s2.appendChild(o3), a2.push(o3);
          }, o2 = 0; o2 < t3; o2++) r2(o2);
          return a2;
        } }, { key: "addSVGEvents", value: function() {
          var t3 = this.w, e2 = t3.config.chart.type, i2 = this.getElTooltip(), a2 = !(e2 !== "bar" && e2 !== "candlestick" && e2 !== "boxPlot" && e2 !== "rangeBar"), s2 = e2 === "area" || e2 === "line" || e2 === "scatter" || e2 === "bubble" || e2 === "radar", r2 = t3.globals.dom.Paper.node, o2 = this.getElGrid();
          o2 && (this.seriesBound = o2.getBoundingClientRect());
          var n2, l2 = [], h2 = [], c2 = { hoverArea: r2, elGrid: o2, tooltipEl: i2, tooltipY: l2, tooltipX: h2, ttItems: this.ttItems };
          if (t3.globals.axisCharts && (s2 ? n2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a2 ? n2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : e2 !== "heatmap" && e2 !== "treemap" || (n2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), n2 && n2.length)) for (var d2 = 0; d2 < n2.length; d2++) l2.push(n2[d2].getAttribute("cy")), h2.push(n2[d2].getAttribute("cx"));
          if (t3.globals.xyCharts && !this.showOnIntersect || t3.globals.comboCharts && !this.showOnIntersect || a2 && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([r2], c2);
          else if (a2 && !t3.globals.comboCharts || s2 && this.showOnIntersect) this.addDatapointEventsListeners(c2);
          else if (!t3.globals.axisCharts || e2 === "heatmap" || e2 === "treemap") {
            var g2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
            this.addPathsEventListeners(g2, c2);
          }
          if (this.showOnIntersect) {
            var u2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
            u2.length > 0 && this.addPathsEventListeners(u2, c2), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(c2);
          }
        } }, { key: "drawFixedTooltipRect", value: function() {
          var t3 = this.w, e2 = this.getElTooltip(), i2 = e2.getBoundingClientRect(), a2 = i2.width + 10, s2 = i2.height + 10, r2 = this.tConfig.fixed.offsetX, o2 = this.tConfig.fixed.offsetY, n2 = this.tConfig.fixed.position.toLowerCase();
          return n2.indexOf("right") > -1 && (r2 = r2 + t3.globals.svgWidth - a2 + 10), n2.indexOf("bottom") > -1 && (o2 = o2 + t3.globals.svgHeight - s2 - 10), e2.style.left = r2 + "px", e2.style.top = o2 + "px", { x: r2, y: o2, ttWidth: a2, ttHeight: s2 };
        } }, { key: "addDatapointEventsListeners", value: function(t3) {
          var e2 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
          this.addPathsEventListeners(e2, t3);
        } }, { key: "addPathsEventListeners", value: function(t3, e2) {
          for (var i2 = this, a2 = function(a3) {
            var s3 = { paths: t3[a3], tooltipEl: e2.tooltipEl, tooltipY: e2.tooltipY, tooltipX: e2.tooltipX, elGrid: e2.elGrid, hoverArea: e2.hoverArea, ttItems: e2.ttItems };
            ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function(e3) {
              return t3[a3].addEventListener(e3, i2.onSeriesHover.bind(i2, s3), { capture: !1, passive: !0 });
            });
          }, s2 = 0; s2 < t3.length; s2++) a2(s2);
        } }, { key: "onSeriesHover", value: function(t3, e2) {
          var i2 = this, a2 = Date.now() - this.lastHoverTime;
          a2 >= 100 ? this.seriesHover(t3, e2) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function() {
            i2.seriesHover(t3, e2);
          }, 100 - a2));
        } }, { key: "seriesHover", value: function(t3, e2) {
          var i2 = this;
          this.lastHoverTime = Date.now();
          var a2 = [], s2 = this.w;
          s2.config.chart.group && (a2 = this.ctx.getGroupedCharts()), s2.globals.axisCharts && (s2.globals.minX === -1 / 0 && s2.globals.maxX === 1 / 0 || s2.globals.dataPoints === 0) || (a2.length ? a2.forEach(function(a3) {
            var s3 = i2.getElTooltip(a3), r2 = { paths: t3.paths, tooltipEl: s3, tooltipY: t3.tooltipY, tooltipX: t3.tooltipX, elGrid: t3.elGrid, hoverArea: t3.hoverArea, ttItems: a3.w.globals.tooltip.ttItems };
            a3.w.globals.minX === i2.w.globals.minX && a3.w.globals.maxX === i2.w.globals.maxX && a3.w.globals.tooltip.seriesHoverByContext({ chartCtx: a3, ttCtx: a3.w.globals.tooltip, opt: r2, e: e2 });
          }) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t3, e: e2 }));
        } }, { key: "seriesHoverByContext", value: function(t3) {
          var e2 = t3.chartCtx, i2 = t3.ttCtx, a2 = t3.opt, s2 = t3.e, r2 = e2.w, o2 = this.getElTooltip();
          o2 && (i2.tooltipRect = { x: 0, y: 0, ttWidth: o2.getBoundingClientRect().width, ttHeight: o2.getBoundingClientRect().height }, i2.e = s2, i2.tooltipUtil.hasBars() && !r2.globals.comboCharts && !i2.isBarShared && this.tConfig.onDatasetHover.highlightDataSeries && new W(e2).toggleSeriesOnHover(s2, s2.target.parentNode), i2.fixedTooltip && i2.drawFixedTooltipRect(), r2.globals.axisCharts ? i2.axisChartsTooltips({ e: s2, opt: a2, tooltipRect: i2.tooltipRect }) : i2.nonAxisChartsTooltips({ e: s2, opt: a2, tooltipRect: i2.tooltipRect }));
        } }, { key: "axisChartsTooltips", value: function(t3) {
          var e2, i2, a2 = t3.e, s2 = t3.opt, r2 = this.w, o2 = s2.elGrid.getBoundingClientRect(), n2 = a2.type === "touchmove" ? a2.touches[0].clientX : a2.clientX, l2 = a2.type === "touchmove" ? a2.touches[0].clientY : a2.clientY;
          if (this.clientY = l2, this.clientX = n2, r2.globals.capturedSeriesIndex = -1, r2.globals.capturedDataPointIndex = -1, l2 < o2.top || l2 > o2.top + o2.height) this.handleMouseOut(s2);
          else {
            if (Array.isArray(this.tConfig.enabledOnSeries) && !r2.config.tooltip.shared) {
              var h2 = parseInt(s2.paths.getAttribute("index"), 10);
              if (this.tConfig.enabledOnSeries.indexOf(h2) < 0) return void this.handleMouseOut(s2);
            }
            var c2 = this.getElTooltip(), d2 = this.getElXCrosshairs(), g2 = r2.globals.xyCharts || r2.config.chart.type === "bar" && !r2.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r2.globals.comboCharts && this.tooltipUtil.hasBars();
            if (a2.type === "mousemove" || a2.type === "touchmove" || a2.type === "mouseup") {
              if (r2.globals.collapsedSeries.length + r2.globals.ancillaryCollapsedSeries.length === r2.globals.series.length) return;
              d2 !== null && d2.classList.add("apexcharts-active");
              var u2 = this.yaxisTooltips.filter(function(t4) {
                return t4 === !0;
              });
              if (this.ycrosshairs !== null && u2.length && this.ycrosshairs.classList.add("apexcharts-active"), g2 && !this.showOnIntersect) this.handleStickyTooltip(a2, n2, l2, s2);
              else if (r2.config.chart.type === "heatmap" || r2.config.chart.type === "treemap") {
                var p2 = this.intersect.handleHeatTreeTooltip({ e: a2, opt: s2, x: e2, y: i2, type: r2.config.chart.type });
                e2 = p2.x, i2 = p2.y, c2.style.left = e2 + "px", c2.style.top = i2 + "px";
              } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: a2, opt: s2 }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: a2, opt: s2, x: e2, y: i2 });
              if (this.yaxisTooltips.length) for (var f2 = 0; f2 < r2.config.yaxis.length; f2++) this.axesTooltip.drawYaxisTooltipText(f2, l2, this.xyRatios);
              r2.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), s2.tooltipEl.classList.add("apexcharts-active");
            } else a2.type !== "mouseout" && a2.type !== "touchend" || this.handleMouseOut(s2);
          }
        } }, { key: "nonAxisChartsTooltips", value: function(t3) {
          var e2 = t3.e, i2 = t3.opt, a2 = t3.tooltipRect, s2 = this.w, r2 = i2.paths.getAttribute("rel"), o2 = this.getElTooltip(), n2 = s2.globals.dom.elWrap.getBoundingClientRect();
          if (e2.type === "mousemove" || e2.type === "touchmove") {
            s2.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), o2.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i2.ttItems, i: parseInt(r2, 10) - 1, shared: !1 });
            var l2 = s2.globals.clientX - n2.left - a2.ttWidth / 2, h2 = s2.globals.clientY - n2.top - a2.ttHeight - 10;
            if (o2.style.left = l2 + "px", o2.style.top = h2 + "px", s2.config.legend.tooltipHoverFormatter) {
              var c2 = r2 - 1, d2 = (0, s2.config.legend.tooltipHoverFormatter)(this.legendLabels[c2].getAttribute("data:default-text"), { seriesIndex: c2, dataPointIndex: c2, w: s2 });
              this.legendLabels[c2].innerHTML = d2;
            }
          } else e2.type !== "mouseout" && e2.type !== "touchend" || (o2.classList.remove("apexcharts-active"), s2.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), s2.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t4) {
            var e3 = t4.getAttribute("data:default-text");
            t4.innerHTML = decodeURIComponent(e3);
          }));
        } }, { key: "handleStickyTooltip", value: function(t3, e2, i2, a2) {
          var s2 = this.w, r2 = this.tooltipUtil.getNearestValues({ context: this, hoverArea: a2.hoverArea, elGrid: a2.elGrid, clientX: e2, clientY: i2 }), o2 = r2.j, n2 = r2.capturedSeries;
          s2.globals.collapsedSeriesIndices.includes(n2) && (n2 = null);
          var l2 = a2.elGrid.getBoundingClientRect();
          if (r2.hoverX < 0 || r2.hoverX > l2.width) this.handleMouseOut(a2);
          else if (n2 !== null) this.handleStickyCapturedSeries(t3, n2, a2, o2);
          else if (this.tooltipUtil.isXoverlap(o2) || s2.globals.isBarHorizontal) {
            var h2 = s2.globals.series.findIndex(function(t4, e3) {
              return !s2.globals.collapsedSeriesIndices.includes(e3);
            });
            this.create(t3, this, h2, o2, a2.ttItems);
          }
        } }, { key: "handleStickyCapturedSeries", value: function(t3, e2, i2, a2) {
          var s2 = this.w;
          if (!this.tConfig.shared && s2.globals.series[e2][a2] === null) return void this.handleMouseOut(i2);
          if (s2.globals.series[e2][a2] !== void 0) this.tConfig.shared && this.tooltipUtil.isXoverlap(a2) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t3, this, e2, a2, i2.ttItems) : this.create(t3, this, e2, a2, i2.ttItems, !1);
          else if (this.tooltipUtil.isXoverlap(a2)) {
            var r2 = s2.globals.series.findIndex(function(t4, e3) {
              return !s2.globals.collapsedSeriesIndices.includes(e3);
            });
            this.create(t3, this, r2, a2, i2.ttItems);
          }
        } }, { key: "deactivateHoverFilter", value: function() {
          for (var t3 = this.w, e2 = new m(this.ctx), i2 = t3.globals.dom.Paper.select(".apexcharts-bar-area"), a2 = 0; a2 < i2.length; a2++) e2.pathMouseLeave(i2[a2]);
        } }, { key: "handleMouseOut", value: function(t3) {
          var e2 = this.w, i2 = this.getElXCrosshairs();
          if (e2.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), t3.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), e2.config.chart.type !== "bubble" && this.marker.resetPointsSize(), i2 !== null && i2.classList.remove("apexcharts-active"), this.ycrosshairs !== null && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
            this.yaxisTTEls === null && (this.yaxisTTEls = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
            for (var a2 = 0; a2 < this.yaxisTTEls.length; a2++) this.yaxisTTEls[a2].classList.remove("apexcharts-active");
          }
          e2.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t4) {
            var e3 = t4.getAttribute("data:default-text");
            t4.innerHTML = decodeURIComponent(e3);
          });
        } }, { key: "markerClick", value: function(t3, e2, i2) {
          var a2 = this.w;
          typeof a2.config.chart.events.markerClick == "function" && a2.config.chart.events.markerClick(t3, this.ctx, { seriesIndex: e2, dataPointIndex: i2, w: a2 }), this.ctx.events.fireEvent("markerClick", [t3, this.ctx, { seriesIndex: e2, dataPointIndex: i2, w: a2 }]);
        } }, { key: "create", value: function(t3, i2, a2, s2, r2) {
          var o2, n2, l2, h2, c2, d2, g2, u2, p2, f2, x2, b2, v2, y2, w2, k2, A2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, S2 = this.w, C2 = i2;
          t3.type === "mouseup" && this.markerClick(t3, a2, s2), A2 === null && (A2 = this.tConfig.shared);
          var L2 = this.tooltipUtil.hasMarkers(a2), P2 = this.tooltipUtil.getElBars();
          if (S2.config.legend.tooltipHoverFormatter) {
            var M2 = S2.config.legend.tooltipHoverFormatter, I2 = Array.from(this.legendLabels);
            I2.forEach(function(t4) {
              var e2 = t4.getAttribute("data:default-text");
              t4.innerHTML = decodeURIComponent(e2);
            });
            for (var T2 = 0; T2 < I2.length; T2++) {
              var z2 = I2[T2], X2 = parseInt(z2.getAttribute("i"), 10), E2 = decodeURIComponent(z2.getAttribute("data:default-text")), Y2 = M2(E2, { seriesIndex: A2 ? X2 : a2, dataPointIndex: s2, w: S2 });
              if (A2) z2.innerHTML = S2.globals.collapsedSeriesIndices.indexOf(X2) < 0 ? Y2 : E2;
              else if (z2.innerHTML = X2 === a2 ? Y2 : E2, a2 === X2) break;
            }
          }
          var F2 = e(e({ ttItems: r2, i: a2, j: s2 }, ((o2 = S2.globals.seriesRange) === null || o2 === void 0 || (n2 = o2[a2]) === null || n2 === void 0 || (l2 = n2[s2]) === null || l2 === void 0 || (h2 = l2.y[0]) === null || h2 === void 0 ? void 0 : h2.y1) !== void 0 && { y1: (c2 = S2.globals.seriesRange) === null || c2 === void 0 || (d2 = c2[a2]) === null || d2 === void 0 || (g2 = d2[s2]) === null || g2 === void 0 || (u2 = g2.y[0]) === null || u2 === void 0 ? void 0 : u2.y1 }), ((p2 = S2.globals.seriesRange) === null || p2 === void 0 || (f2 = p2[a2]) === null || f2 === void 0 || (x2 = f2[s2]) === null || x2 === void 0 || (b2 = x2.y[0]) === null || b2 === void 0 ? void 0 : b2.y2) !== void 0 && { y2: (v2 = S2.globals.seriesRange) === null || v2 === void 0 || (y2 = v2[a2]) === null || y2 === void 0 || (w2 = y2[s2]) === null || w2 === void 0 || (k2 = w2.y[0]) === null || k2 === void 0 ? void 0 : k2.y2 });
          if (A2) {
            if (C2.tooltipLabels.drawSeriesTexts(e(e({}, F2), {}, { shared: !this.showOnIntersect && this.tConfig.shared })), L2) S2.globals.markers.largestSize > 0 ? C2.marker.enlargePoints(s2) : C2.tooltipPosition.moveDynamicPointsOnHover(s2);
            else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(P2), this.barSeriesHeight > 0)) {
              var R2 = new m(this.ctx), H2 = S2.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(s2, "']"));
              this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(s2, a2);
              for (var D2 = 0; D2 < H2.length; D2++) R2.pathMouseEnter(H2[D2]);
            }
          } else C2.tooltipLabels.drawSeriesTexts(e({ shared: !1 }, F2)), this.tooltipUtil.hasBars() && C2.tooltipPosition.moveStickyTooltipOverBars(s2, a2), L2 && C2.tooltipPosition.moveMarkers(a2, s2);
        } }]), t2;
      }(), vt = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.barCtx = e2, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
        }
        return r(t2, [{ key: "handleBarDataLabels", value: function(t3) {
          var e2, i2, a2 = t3.x, s2 = t3.y, r2 = t3.y1, o2 = t3.y2, n2 = t3.i, l2 = t3.j, h2 = t3.realIndex, c2 = t3.columnGroupIndex, d2 = t3.series, g2 = t3.barHeight, u2 = t3.barWidth, p2 = t3.barXPosition, f2 = t3.barYPosition, x2 = t3.visibleSeries, b2 = t3.renderedPath, v2 = this.w, y2 = new m(this.barCtx.ctx), w2 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[h2] : this.barCtx.strokeWidth;
          v2.globals.isXNumeric && !v2.globals.isBarHorizontal ? (e2 = a2 + parseFloat(u2 * (x2 + 1)), i2 = s2 + parseFloat(g2 * (x2 + 1)) - w2) : (e2 = a2 + parseFloat(u2 * x2), i2 = s2 + parseFloat(g2 * x2));
          var k2, A2 = null, S2 = a2, C2 = s2, L2 = {}, P2 = v2.config.dataLabels, M2 = this.barCtx.barOptions.dataLabels, I2 = this.barCtx.barOptions.dataLabels.total;
          f2 !== void 0 && this.barCtx.isRangeBar && (i2 = f2, C2 = f2), p2 !== void 0 && this.barCtx.isVerticalGroupedRangeBar && (e2 = p2, S2 = p2);
          var T2 = P2.offsetX, z2 = P2.offsetY, X2 = { width: 0, height: 0 };
          if (v2.config.dataLabels.enabled) {
            var E2 = v2.globals.series[n2][l2];
            X2 = y2.getTextRects(v2.globals.yLabelFormatters[0](E2), parseFloat(P2.style.fontSize));
          }
          var Y2 = { x: a2, y: s2, i: n2, j: l2, realIndex: h2, columnGroupIndex: c2, renderedPath: b2, bcx: e2, bcy: i2, barHeight: g2, barWidth: u2, textRects: X2, strokeWidth: w2, dataLabelsX: S2, dataLabelsY: C2, dataLabelsConfig: P2, barDataLabelsConfig: M2, barTotalDataLabelsConfig: I2, offX: T2, offY: z2 };
          return L2 = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(Y2) : this.calculateColumnsDataLabelsPosition(Y2), b2.attr({ cy: L2.bcy, cx: L2.bcx, j: l2, val: v2.globals.series[n2][l2], barHeight: g2, barWidth: u2 }), k2 = this.drawCalculatedDataLabels({ x: L2.dataLabelsX, y: L2.dataLabelsY, val: this.barCtx.isRangeBar ? [r2, o2] : v2.config.chart.stackType === "100%" ? d2[n2][l2] : v2.globals.series[n2][l2], i: h2, j: l2, barWidth: u2, barHeight: g2, textRects: X2, dataLabelsConfig: P2 }), v2.config.chart.stacked && I2.enabled && (A2 = this.drawTotalDataLabels({ x: L2.totalDataLabelsX, y: L2.totalDataLabelsY, barWidth: u2, barHeight: g2, realIndex: h2, textAnchor: L2.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: h2, j: l2 }), dataLabelsConfig: P2, barTotalDataLabelsConfig: I2 })), { dataLabels: k2, totalDataLabels: A2 };
        } }, { key: "getStackedTotalDataLabel", value: function(t3) {
          var i2 = t3.realIndex, a2 = t3.j, s2 = this.w, r2 = this.barCtx.stackedSeriesTotals[a2];
          return this.totalFormatter && (r2 = this.totalFormatter(r2, e(e({}, s2), {}, { seriesIndex: i2, dataPointIndex: a2, w: s2 }))), r2;
        } }, { key: "calculateColumnsDataLabelsPosition", value: function(t3) {
          var e2 = this.w, i2 = t3.i, a2 = t3.j, s2 = t3.realIndex;
          t3.columnGroupIndex;
          var r2, o2, n2 = t3.y, l2 = t3.bcx, h2 = t3.barWidth, c2 = t3.barHeight, d2 = t3.textRects, g2 = t3.dataLabelsX, u2 = t3.dataLabelsY, p2 = t3.dataLabelsConfig, f2 = t3.barDataLabelsConfig, x2 = t3.barTotalDataLabelsConfig, b2 = t3.strokeWidth, v2 = t3.offX, y2 = t3.offY, w2 = l2;
          c2 = Math.abs(c2);
          var k2 = e2.config.plotOptions.bar.dataLabels.orientation === "vertical", A2 = this.barCtx.barHelpers.getZeroValueEncounters({ i: i2, j: a2 }).zeroEncounters;
          l2 -= b2 / 2;
          var S2 = e2.globals.gridWidth / e2.globals.dataPoints;
          this.barCtx.isVerticalGroupedRangeBar ? g2 += h2 / 2 : (g2 = e2.globals.isXNumeric ? l2 - h2 / 2 + v2 : l2 - S2 + h2 / 2 + v2, A2 > 0 && e2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (g2 -= h2 * A2)), k2 && (g2 = g2 + d2.height / 2 - b2 / 2 - 2);
          var C2 = e2.globals.series[i2][a2] < 0, L2 = n2;
          switch (this.barCtx.isReversed && (L2 = n2 + (C2 ? c2 : -c2)), f2.position) {
            case "center":
              u2 = k2 ? C2 ? L2 - c2 / 2 + y2 : L2 + c2 / 2 - y2 : C2 ? L2 - c2 / 2 + d2.height / 2 + y2 : L2 + c2 / 2 + d2.height / 2 - y2;
              break;
            case "bottom":
              u2 = k2 ? C2 ? L2 - c2 + y2 : L2 + c2 - y2 : C2 ? L2 - c2 + d2.height + b2 + y2 : L2 + c2 - d2.height / 2 + b2 - y2;
              break;
            case "top":
              u2 = k2 ? C2 ? L2 + y2 : L2 - y2 : C2 ? L2 - d2.height / 2 - y2 : L2 + d2.height + y2;
          }
          if (this.barCtx.lastActiveBarSerieIndex === s2 && x2.enabled) {
            var P2 = new m(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: s2, j: a2 }), p2.fontSize);
            r2 = C2 ? L2 - P2.height / 2 - y2 - x2.offsetY + 18 : L2 + P2.height + y2 + x2.offsetY - 18;
            var M2 = S2;
            o2 = w2 + (e2.globals.isXNumeric ? -h2 * e2.globals.barGroups.length / 2 : e2.globals.barGroups.length * h2 / 2 - (e2.globals.barGroups.length - 1) * h2 - M2) + x2.offsetX;
          }
          return e2.config.chart.stacked || (u2 < 0 ? u2 = 0 + b2 : u2 + d2.height / 3 > e2.globals.gridHeight && (u2 = e2.globals.gridHeight - b2)), { bcx: l2, bcy: n2, dataLabelsX: g2, dataLabelsY: u2, totalDataLabelsX: o2, totalDataLabelsY: r2, totalDataLabelsAnchor: "middle" };
        } }, { key: "calculateBarsDataLabelsPosition", value: function(t3) {
          var e2 = this.w, i2 = t3.x, a2 = t3.i, s2 = t3.j, r2 = t3.realIndex;
          t3.columnGroupIndex;
          var o2 = t3.bcy, n2 = t3.barHeight, l2 = t3.barWidth, h2 = t3.textRects, c2 = t3.dataLabelsX, d2 = t3.strokeWidth, g2 = t3.dataLabelsConfig, u2 = t3.barDataLabelsConfig, p2 = t3.barTotalDataLabelsConfig, f2 = t3.offX, x2 = t3.offY, b2 = e2.globals.gridHeight / e2.globals.dataPoints;
          l2 = Math.abs(l2);
          var v2, y2, w2 = o2 - (this.barCtx.isRangeBar ? 0 : b2) + n2 / 2 + h2.height / 2 + x2 - 3, k2 = "start", A2 = e2.globals.series[a2][s2] < 0, S2 = i2;
          switch (this.barCtx.isReversed && (S2 = i2 + (A2 ? -l2 : l2), k2 = A2 ? "start" : "end"), u2.position) {
            case "center":
              c2 = A2 ? S2 + l2 / 2 - f2 : Math.max(h2.width / 2, S2 - l2 / 2) + f2;
              break;
            case "bottom":
              c2 = A2 ? S2 + l2 - d2 - Math.round(h2.width / 2) - f2 : S2 - l2 + d2 + Math.round(h2.width / 2) + f2;
              break;
            case "top":
              c2 = A2 ? S2 - d2 + Math.round(h2.width / 2) - f2 : S2 - d2 - Math.round(h2.width / 2) + f2;
          }
          if (this.barCtx.lastActiveBarSerieIndex === r2 && p2.enabled) {
            var C2 = new m(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: r2, j: s2 }), g2.fontSize);
            A2 ? (v2 = S2 - d2 - f2 - p2.offsetX, k2 = "end") : v2 = S2 + f2 + p2.offsetX + (this.barCtx.isReversed ? -(l2 + d2) : d2), y2 = w2 - h2.height / 2 + C2.height / 2 + p2.offsetY + d2;
          }
          return e2.config.chart.stacked || (c2 < 0 ? c2 = c2 + h2.width + d2 : c2 + h2.width / 2 > e2.globals.gridWidth && (c2 = e2.globals.gridWidth - h2.width - d2)), { bcx: i2, bcy: o2, dataLabelsX: c2, dataLabelsY: w2, totalDataLabelsX: v2, totalDataLabelsY: y2, totalDataLabelsAnchor: k2 };
        } }, { key: "drawCalculatedDataLabels", value: function(t3) {
          var i2 = t3.x, a2 = t3.y, s2 = t3.val, r2 = t3.i, o2 = t3.j, n2 = t3.textRects, l2 = t3.barHeight, h2 = t3.barWidth, c2 = t3.dataLabelsConfig, d2 = this.w, g2 = "rotate(0)";
          d2.config.plotOptions.bar.dataLabels.orientation === "vertical" && (g2 = "rotate(-90, ".concat(i2, ", ").concat(a2, ")"));
          var u2 = new N(this.barCtx.ctx), p2 = new m(this.barCtx.ctx), f2 = c2.formatter, x2 = null, b2 = d2.globals.collapsedSeriesIndices.indexOf(r2) > -1;
          if (c2.enabled && !b2) {
            x2 = p2.group({ class: "apexcharts-data-labels", transform: g2 });
            var v2 = "";
            s2 !== void 0 && (v2 = f2(s2, e(e({}, d2), {}, { seriesIndex: r2, dataPointIndex: o2, w: d2 }))), !s2 && d2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (v2 = "");
            var y2 = d2.globals.series[r2][o2] < 0, w2 = d2.config.plotOptions.bar.dataLabels.position;
            d2.config.plotOptions.bar.dataLabels.orientation === "vertical" && (w2 === "top" && (c2.textAnchor = y2 ? "end" : "start"), w2 === "center" && (c2.textAnchor = "middle"), w2 === "bottom" && (c2.textAnchor = y2 ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && h2 < p2.getTextRects(v2, parseFloat(c2.style.fontSize)).width && (v2 = ""), d2.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? n2.width / 1.6 > Math.abs(h2) && (v2 = "") : n2.height / 1.6 > Math.abs(l2) && (v2 = ""));
            var k2 = e({}, c2);
            this.barCtx.isHorizontal && s2 < 0 && (c2.textAnchor === "start" ? k2.textAnchor = "end" : c2.textAnchor === "end" && (k2.textAnchor = "start")), u2.plotDataLabelsText({ x: i2, y: a2, text: v2, i: r2, j: o2, parent: x2, dataLabelsConfig: k2, alwaysDrawDataLabel: !0, offsetCorrection: !0 });
          }
          return x2;
        } }, { key: "drawTotalDataLabels", value: function(t3) {
          var e2 = t3.x, i2 = t3.y, a2 = t3.val;
          t3.barWidth, t3.barHeight;
          var s2 = t3.realIndex, r2 = t3.textAnchor, o2 = t3.barTotalDataLabelsConfig;
          this.w;
          var n2, l2 = new m(this.barCtx.ctx);
          return o2.enabled && e2 !== void 0 && i2 !== void 0 && this.barCtx.lastActiveBarSerieIndex === s2 && (n2 = l2.drawText({ x: e2, y: i2, foreColor: o2.style.color, text: a2, textAnchor: r2, fontFamily: o2.style.fontFamily, fontSize: o2.style.fontSize, fontWeight: o2.style.fontWeight })), n2;
        } }]), t2;
      }(), mt = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.barCtx = e2;
        }
        return r(t2, [{ key: "initVariables", value: function(t3) {
          var e2 = this.w;
          this.barCtx.series = t3, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
          for (var i2 = 0; i2 < t3.length; i2++) if (t3[i2].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t3[i2].length), e2.globals.isXNumeric) for (var a2 = 0; a2 < t3[i2].length; a2++) e2.globals.seriesX[i2][a2] > e2.globals.minX && e2.globals.seriesX[i2][a2] < e2.globals.maxX && this.barCtx.visibleItems++;
          else this.barCtx.visibleItems = e2.globals.dataPoints;
          this.barCtx.seriesLen === 0 && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], e2.globals.comboCharts || this.checkZeroSeries({ series: t3 });
        } }, { key: "initialPositions", value: function() {
          var t3, e2, i2, a2, s2, r2, o2, n2, l2 = this.w, h2 = l2.globals.dataPoints;
          this.barCtx.isRangeBar && (h2 = l2.globals.labels.length);
          var c2 = this.barCtx.seriesLen;
          if (l2.config.plotOptions.bar.rangeBarGroupRows && (c2 = 1), this.barCtx.isHorizontal) s2 = (i2 = l2.globals.gridHeight / h2) / c2, l2.globals.isXNumeric && (s2 = (i2 = l2.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), s2 = s2 * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, String(this.barCtx.barOptions.barHeight).indexOf("%") === -1 && (s2 = parseInt(this.barCtx.barOptions.barHeight, 10)), n2 = this.barCtx.baseLineInvertedY + l2.globals.padHorizontal + (this.barCtx.isReversed ? l2.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (n2 = l2.globals.gridWidth / 2), e2 = (i2 - s2 * this.barCtx.seriesLen) / 2;
          else {
            if (a2 = l2.globals.gridWidth / this.barCtx.visibleItems, l2.config.xaxis.convertedCatToNumeric && (a2 = l2.globals.gridWidth / l2.globals.dataPoints), r2 = a2 / c2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, l2.globals.isXNumeric) {
              var d2 = this.barCtx.xRatio;
              l2.globals.minXDiff && l2.globals.minXDiff !== 0.5 && l2.globals.minXDiff / d2 > 0 && (a2 = l2.globals.minXDiff / d2), (r2 = a2 / c2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (r2 = 1);
            }
            String(this.barCtx.barOptions.columnWidth).indexOf("%") === -1 && (r2 = parseInt(this.barCtx.barOptions.columnWidth, 10)), o2 = l2.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.translationsIndex] - (this.barCtx.isReversed ? l2.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.translationsIndex] : 0), t3 = l2.globals.padHorizontal + (a2 - r2 * this.barCtx.seriesLen) / 2;
          }
          return l2.globals.barHeight = s2, l2.globals.barWidth = r2, { x: t3, y: e2, yDivision: i2, xDivision: a2, barHeight: s2, barWidth: r2, zeroH: o2, zeroW: n2 };
        } }, { key: "initializeStackedPrevVars", value: function(t3) {
          t3.w.globals.seriesGroups.forEach(function(e2) {
            t3[e2] || (t3[e2] = {}), t3[e2].prevY = [], t3[e2].prevX = [], t3[e2].prevYF = [], t3[e2].prevXF = [], t3[e2].prevYVal = [], t3[e2].prevXVal = [];
          });
        } }, { key: "initializeStackedXYVars", value: function(t3) {
          t3.w.globals.seriesGroups.forEach(function(e2) {
            t3[e2] || (t3[e2] = {}), t3[e2].xArrj = [], t3[e2].xArrjF = [], t3[e2].xArrjVal = [], t3[e2].yArrj = [], t3[e2].yArrjF = [], t3[e2].yArrjVal = [];
          });
        } }, { key: "getPathFillColor", value: function(t3, e2, i2, a2) {
          var s2, r2, o2, n2, l2, h2 = this.w, c2 = new H(this.barCtx.ctx), d2 = null, g2 = this.barCtx.barOptions.distributed ? i2 : e2;
          return this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map(function(a3) {
            t3[e2][i2] >= a3.from && t3[e2][i2] <= a3.to && (d2 = a3.color);
          }), (s2 = h2.config.series[e2].data[i2]) !== null && s2 !== void 0 && s2.fillColor && (d2 = h2.config.series[e2].data[i2].fillColor), c2.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? g2 : a2, dataPointIndex: i2, color: d2, value: t3[e2][i2], fillConfig: (r2 = h2.config.series[e2].data[i2]) === null || r2 === void 0 ? void 0 : r2.fill, fillType: (o2 = h2.config.series[e2].data[i2]) !== null && o2 !== void 0 && (n2 = o2.fill) !== null && n2 !== void 0 && n2.type ? (l2 = h2.config.series[e2].data[i2]) === null || l2 === void 0 ? void 0 : l2.fill.type : Array.isArray(h2.config.fill.type) ? h2.config.fill.type[a2] : h2.config.fill.type });
        } }, { key: "getStrokeWidth", value: function(t3, e2, i2) {
          var a2 = 0, s2 = this.w;
          return this.barCtx.series[t3][e2] === void 0 || this.barCtx.series[t3][e2] === null ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, s2.config.stroke.show && (this.barCtx.isNullValue || (a2 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i2] : this.barCtx.strokeWidth)), a2;
        } }, { key: "shouldApplyRadius", value: function(t3) {
          var e2 = this.w, i2 = !1;
          return e2.config.plotOptions.bar.borderRadius > 0 && (e2.config.chart.stacked && e2.config.plotOptions.bar.borderRadiusWhenStacked === "last" ? this.barCtx.lastActiveBarSerieIndex === t3 && (i2 = !0) : i2 = !0), i2;
        } }, { key: "barBackground", value: function(t3) {
          var e2 = t3.j, i2 = t3.i, a2 = t3.x1, s2 = t3.x2, r2 = t3.y1, o2 = t3.y2, n2 = t3.elSeries, l2 = this.w, h2 = new m(this.barCtx.ctx), c2 = new W(this.barCtx.ctx).getActiveConfigSeriesIndex();
          if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && c2 === i2) {
            e2 >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e2 %= this.barCtx.barOptions.colors.backgroundBarColors.length);
            var d2 = this.barCtx.barOptions.colors.backgroundBarColors[e2], g2 = h2.drawRect(a2 !== void 0 ? a2 : 0, r2 !== void 0 ? r2 : 0, s2 !== void 0 ? s2 : l2.globals.gridWidth, o2 !== void 0 ? o2 : l2.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, d2, this.barCtx.barOptions.colors.backgroundBarOpacity);
            n2.add(g2), g2.node.classList.add("apexcharts-backgroundBar");
          }
        } }, { key: "getColumnPaths", value: function(t3) {
          var e2, i2 = t3.barWidth, a2 = t3.barXPosition, s2 = t3.y1, r2 = t3.y2, o2 = t3.strokeWidth, n2 = t3.seriesGroup, l2 = t3.realIndex, h2 = t3.i, c2 = t3.j, d2 = t3.w, g2 = new m(this.barCtx.ctx);
          (o2 = Array.isArray(o2) ? o2[l2] : o2) || (o2 = 0);
          var u2 = i2, p2 = a2;
          (e2 = d2.config.series[l2].data[c2]) !== null && e2 !== void 0 && e2.columnWidthOffset && (p2 = a2 - d2.config.series[l2].data[c2].columnWidthOffset / 2, u2 = i2 + d2.config.series[l2].data[c2].columnWidthOffset);
          var f2 = o2 / 2, x2 = p2 + f2, b2 = p2 + u2 - f2;
          s2 += 1e-3 - f2, r2 += 1e-3 + f2;
          var v2 = g2.move(x2, s2), y2 = g2.move(x2, s2), w2 = g2.line(b2, s2);
          if (d2.globals.previousPaths.length > 0 && (y2 = this.barCtx.getPreviousPath(l2, c2, !1)), v2 = v2 + g2.line(x2, r2) + g2.line(b2, r2) + g2.line(b2, s2) + (d2.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), y2 = y2 + g2.line(x2, s2) + w2 + w2 + w2 + w2 + w2 + g2.line(x2, s2) + (d2.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), this.shouldApplyRadius(l2) && (v2 = g2.roundPathCorners(v2, d2.config.plotOptions.bar.borderRadius)), d2.config.chart.stacked) {
            var k2 = this.barCtx;
            (k2 = this.barCtx[n2]).yArrj.push(r2 - f2), k2.yArrjF.push(Math.abs(s2 - r2 + o2)), k2.yArrjVal.push(this.barCtx.series[h2][c2]);
          }
          return { pathTo: v2, pathFrom: y2 };
        } }, { key: "getBarpaths", value: function(t3) {
          var e2, i2 = t3.barYPosition, a2 = t3.barHeight, s2 = t3.x1, r2 = t3.x2, o2 = t3.strokeWidth, n2 = t3.seriesGroup, l2 = t3.realIndex, h2 = t3.i, c2 = t3.j, d2 = t3.w, g2 = new m(this.barCtx.ctx);
          (o2 = Array.isArray(o2) ? o2[l2] : o2) || (o2 = 0);
          var u2 = i2, p2 = a2;
          (e2 = d2.config.series[l2].data[c2]) !== null && e2 !== void 0 && e2.barHeightOffset && (u2 = i2 - d2.config.series[l2].data[c2].barHeightOffset / 2, p2 = a2 + d2.config.series[l2].data[c2].barHeightOffset);
          var f2 = o2 / 2, x2 = u2 + f2, b2 = u2 + p2 - f2;
          s2 += 1e-3 - f2, r2 += 1e-3 + f2;
          var v2 = g2.move(s2, x2), y2 = g2.move(s2, x2);
          d2.globals.previousPaths.length > 0 && (y2 = this.barCtx.getPreviousPath(l2, c2, !1));
          var w2 = g2.line(s2, b2);
          if (v2 = v2 + g2.line(r2, x2) + g2.line(r2, b2) + w2 + (d2.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), y2 = y2 + g2.line(s2, x2) + w2 + w2 + w2 + w2 + w2 + g2.line(s2, x2) + (d2.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), this.shouldApplyRadius(l2) && (v2 = g2.roundPathCorners(v2, d2.config.plotOptions.bar.borderRadius)), d2.config.chart.stacked) {
            var k2 = this.barCtx;
            (k2 = this.barCtx[n2]).xArrj.push(r2 + f2), k2.xArrjF.push(Math.abs(s2 - r2)), k2.xArrjVal.push(this.barCtx.series[h2][c2]);
          }
          return { pathTo: v2, pathFrom: y2 };
        } }, { key: "checkZeroSeries", value: function(t3) {
          for (var e2 = t3.series, i2 = this.w, a2 = 0; a2 < e2.length; a2++) {
            for (var s2 = 0, r2 = 0; r2 < e2[i2.globals.maxValsInArrayIndex].length; r2++) s2 += e2[a2][r2];
            s2 === 0 && this.barCtx.zeroSerieses.push(a2);
          }
        } }, { key: "getXForValue", value: function(t3, e2) {
          var i2 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2] ? e2 : null;
          return t3 != null && (i2 = e2 + t3 / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t3 / this.barCtx.invertedYRatio : 0)), i2;
        } }, { key: "getYForValue", value: function(t3, e2, i2) {
          var a2 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3] ? e2 : null;
          return t3 != null && (a2 = e2 - t3 / this.barCtx.yRatio[i2] + 2 * (this.barCtx.isReversed ? t3 / this.barCtx.yRatio[i2] : 0)), a2;
        } }, { key: "getGoalValues", value: function(t3, i2, a2, s2, r2, n2) {
          var l2 = this, h2 = this.w, c2 = [], d2 = function(e2, s3) {
            var r3;
            c2.push((o(r3 = {}, t3, t3 === "x" ? l2.getXForValue(e2, i2, !1) : l2.getYForValue(e2, a2, n2, !1)), o(r3, "attrs", s3), r3));
          };
          if (h2.globals.seriesGoals[s2] && h2.globals.seriesGoals[s2][r2] && Array.isArray(h2.globals.seriesGoals[s2][r2]) && h2.globals.seriesGoals[s2][r2].forEach(function(t4) {
            d2(t4.value, t4);
          }), this.barCtx.barOptions.isDumbbell && h2.globals.seriesRange.length) {
            var g2 = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : h2.globals.colors, u2 = { strokeHeight: t3 === "x" ? 0 : h2.globals.markers.size[s2], strokeWidth: t3 === "x" ? h2.globals.markers.size[s2] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(g2[s2]) ? g2[s2][0] : g2[s2] };
            d2(h2.globals.seriesRangeStart[s2][r2], u2), d2(h2.globals.seriesRangeEnd[s2][r2], e(e({}, u2), {}, { strokeColor: Array.isArray(g2[s2]) ? g2[s2][1] : g2[s2] }));
          }
          return c2;
        } }, { key: "drawGoalLine", value: function(t3) {
          var e2 = t3.barXPosition, i2 = t3.barYPosition, a2 = t3.goalX, s2 = t3.goalY, r2 = t3.barWidth, o2 = t3.barHeight, n2 = new m(this.barCtx.ctx), l2 = n2.group({ className: "apexcharts-bar-goals-groups" });
          l2.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: l2.node }), l2.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
          var h2 = null;
          return this.barCtx.isHorizontal ? Array.isArray(a2) && a2.forEach(function(t4) {
            if (t4.x >= -1 && t4.x <= n2.w.globals.gridWidth + 1) {
              var e3 = t4.attrs.strokeHeight !== void 0 ? t4.attrs.strokeHeight : o2 / 2, a3 = i2 + e3 + o2 / 2;
              h2 = n2.drawLine(t4.x, a3 - 2 * e3, t4.x, a3, t4.attrs.strokeColor ? t4.attrs.strokeColor : void 0, t4.attrs.strokeDashArray, t4.attrs.strokeWidth ? t4.attrs.strokeWidth : 2, t4.attrs.strokeLineCap), l2.add(h2);
            }
          }) : Array.isArray(s2) && s2.forEach(function(t4) {
            if (t4.y >= -1 && t4.y <= n2.w.globals.gridHeight + 1) {
              var i3 = t4.attrs.strokeWidth !== void 0 ? t4.attrs.strokeWidth : r2 / 2, a3 = e2 + i3 + r2 / 2;
              h2 = n2.drawLine(a3 - 2 * i3, t4.y, a3, t4.y, t4.attrs.strokeColor ? t4.attrs.strokeColor : void 0, t4.attrs.strokeDashArray, t4.attrs.strokeHeight ? t4.attrs.strokeHeight : 2, t4.attrs.strokeLineCap), l2.add(h2);
            }
          }), l2;
        } }, { key: "drawBarShadow", value: function(t3) {
          var e2 = t3.prevPaths, i2 = t3.currPaths, a2 = t3.color, s2 = this.w, r2 = e2.x, o2 = e2.x1, n2 = e2.barYPosition, l2 = i2.x, h2 = i2.x1, c2 = i2.barYPosition, d2 = n2 + i2.barHeight, g2 = new m(this.barCtx.ctx), u2 = new x(), p2 = g2.move(o2, d2) + g2.line(r2, d2) + g2.line(l2, c2) + g2.line(h2, c2) + g2.line(o2, d2) + (s2.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z");
          return g2.drawPath({ d: p2, fill: u2.shadeColor(0.5, x.rgb2hex(a2)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadows" });
        } }, { key: "getZeroValueEncounters", value: function(t3) {
          var e2, i2 = t3.i, a2 = t3.j, s2 = this.w, r2 = 0, o2 = 0;
          return (s2.config.plotOptions.bar.horizontal ? s2.globals.series.map(function(t4, e3) {
            return e3;
          }) : ((e2 = s2.globals.columnSeries) === null || e2 === void 0 ? void 0 : e2.i.map(function(t4) {
            return t4;
          })) || []).forEach(function(t4) {
            var e3 = s2.globals.seriesPercent[t4][a2];
            e3 && r2++, t4 < i2 && e3 === 0 && o2++;
          }), { nonZeroColumns: r2, zeroEncounters: o2 };
        } }, { key: "getGroupIndex", value: function(t3) {
          var e2 = this.w, i2 = e2.globals.seriesGroups.findIndex(function(i3) {
            return i3.indexOf(e2.globals.seriesNames[t3]) > -1;
          }), a2 = this.barCtx.columnGroupIndices, s2 = a2.indexOf(i2);
          return s2 < 0 && (a2.push(i2), s2 = a2.length - 1), { groupIndex: i2, columnGroupIndex: s2 };
        } }]), t2;
      }(), yt = function() {
        function t2(e2, i2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
          var s2 = this.w;
          this.barOptions = s2.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = s2.config.stroke.width, this.isNullValue = !1, this.isRangeBar = s2.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !s2.globals.isBarHorizontal && s2.globals.seriesRange.length && s2.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = i2, this.xyRatios !== null && (this.xRatio = i2.xRatio, this.yRatio = i2.yRatio, this.invertedXRatio = i2.invertedXRatio, this.invertedYRatio = i2.invertedYRatio, this.baseLineY = i2.baseLineY, this.baseLineInvertedY = i2.baseLineInvertedY), this.yaxisIndex = 0, this.translationsIndex = 0, this.seriesLen = 0, this.pathArr = [];
          var r2 = new W(this.ctx);
          this.lastActiveBarSerieIndex = r2.getActiveConfigSeriesIndex("desc", ["bar", "column"]), this.columnGroupIndices = [];
          var o2 = r2.getBarSeriesIndices(), n2 = new y(this.ctx);
          this.stackedSeriesTotals = n2.getStackedSeriesTotals(this.w.config.series.map(function(t3, e3) {
            return o2.indexOf(e3) === -1 ? e3 : -1;
          }).filter(function(t3) {
            return t3 !== -1;
          })), this.barHelpers = new mt(this);
        }
        return r(t2, [{ key: "draw", value: function(t3, i2) {
          var a2 = this.w, s2 = new m(this.ctx), r2 = new y(this.ctx, a2);
          t3 = r2.getLogSeries(t3), this.series = t3, this.yRatio = r2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3);
          var o2 = s2.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
          a2.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
          for (var n2 = 0, l2 = 0; n2 < t3.length; n2++, l2++) {
            var h2, c2, d2, g2, u2 = void 0, p2 = void 0, f2 = [], b2 = [], v2 = a2.globals.comboCharts ? i2[n2] : n2, w2 = this.barHelpers.getGroupIndex(v2).columnGroupIndex, k2 = s2.group({ class: "apexcharts-series", rel: n2 + 1, seriesName: x.escapeString(a2.globals.seriesNames[v2]), "data:realIndex": v2 });
            this.ctx.series.addCollapsedClassToSeries(k2, v2), t3[n2].length > 0 && (this.visibleI = this.visibleI + 1);
            var A2 = 0, S2 = 0;
            this.yRatio.length > 1 && (this.yaxisIndex = a2.globals.seriesYAxisReverseMap[v2], this.translationsIndex = v2);
            var C2 = this.translationsIndex;
            this.isReversed = a2.config.yaxis[this.yaxisIndex] && a2.config.yaxis[this.yaxisIndex].reversed;
            var L2 = this.barHelpers.initialPositions();
            p2 = L2.y, A2 = L2.barHeight, c2 = L2.yDivision, g2 = L2.zeroW, u2 = L2.x, S2 = L2.barWidth, h2 = L2.xDivision, d2 = L2.zeroH, this.horizontal || b2.push(u2 + S2 / 2);
            var P2 = s2.group({ class: "apexcharts-datalabels", "data:realIndex": v2 });
            a2.globals.delayedElements.push({ el: P2.node }), P2.node.classList.add("apexcharts-element-hidden");
            var M2 = s2.group({ class: "apexcharts-bar-goals-markers" }), I2 = s2.group({ class: "apexcharts-bar-shadows" });
            a2.globals.delayedElements.push({ el: I2.node }), I2.node.classList.add("apexcharts-element-hidden");
            for (var T2 = 0; T2 < t3[n2].length; T2++) {
              var z2 = this.barHelpers.getStrokeWidth(n2, T2, v2), X2 = null, E2 = { indexes: { i: n2, j: T2, realIndex: v2, translationsIndex: C2, bc: l2 }, x: u2, y: p2, strokeWidth: z2, elSeries: k2 };
              this.isHorizontal ? (X2 = this.drawBarPaths(e(e({}, E2), {}, { barHeight: A2, zeroW: g2, yDivision: c2 })), S2 = this.series[n2][T2] / this.invertedYRatio) : (X2 = this.drawColumnPaths(e(e({}, E2), {}, { xDivision: h2, barWidth: S2, zeroH: d2 })), A2 = this.series[n2][T2] / this.yRatio[C2]);
              var Y2 = this.barHelpers.getPathFillColor(t3, n2, T2, v2);
              if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && T2 > 0) {
                var F2 = this.barHelpers.drawBarShadow({ color: typeof Y2 == "string" && Y2?.indexOf("url") === -1 ? Y2 : x.hexToRgba(a2.globals.colors[n2]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: X2 });
                F2 && I2.add(F2);
              }
              this.pathArr.push(X2);
              var R2 = this.barHelpers.drawGoalLine({ barXPosition: X2.barXPosition, barYPosition: X2.barYPosition, goalX: X2.goalX, goalY: X2.goalY, barHeight: A2, barWidth: S2 });
              R2 && M2.add(R2), p2 = X2.y, u2 = X2.x, T2 > 0 && b2.push(u2 + S2 / 2), f2.push(p2), this.renderSeries({ realIndex: v2, pathFill: Y2, j: T2, i: n2, columnGroupIndex: w2, pathFrom: X2.pathFrom, pathTo: X2.pathTo, strokeWidth: z2, elSeries: k2, x: u2, y: p2, series: t3, barHeight: Math.abs(X2.barHeight ? X2.barHeight : A2), barWidth: Math.abs(X2.barWidth ? X2.barWidth : S2), elDataLabelsWrap: P2, elGoalsMarkers: M2, elBarShadows: I2, visibleSeries: this.visibleI, type: "bar" });
            }
            a2.globals.seriesXvalues[v2] = b2, a2.globals.seriesYvalues[v2] = f2, o2.add(k2);
          }
          return o2;
        } }, { key: "renderSeries", value: function(t3) {
          var e2 = t3.realIndex, i2 = t3.pathFill, a2 = t3.lineFill, s2 = t3.j, r2 = t3.i, o2 = t3.columnGroupIndex, n2 = t3.pathFrom, l2 = t3.pathTo, h2 = t3.strokeWidth, c2 = t3.elSeries, d2 = t3.x, g2 = t3.y, u2 = t3.y1, p2 = t3.y2, f2 = t3.series, x2 = t3.barHeight, b2 = t3.barWidth, y2 = t3.barXPosition, w2 = t3.barYPosition, k2 = t3.elDataLabelsWrap, A2 = t3.elGoalsMarkers, S2 = t3.elBarShadows, C2 = t3.visibleSeries, L2 = t3.type, P2 = this.w, M2 = new m(this.ctx);
          if (!a2) {
            var I2 = typeof P2.globals.stroke.colors[e2] == "function" ? function(t4) {
              var e3, i3 = P2.config.stroke.colors;
              return Array.isArray(i3) && i3.length > 0 && ((e3 = i3[t4]) || (e3 = ""), typeof e3 == "function") ? e3({ value: P2.globals.series[t4][s2], dataPointIndex: s2, w: P2 }) : e3;
            }(e2) : P2.globals.stroke.colors[e2];
            a2 = this.barOptions.distributed ? P2.globals.stroke.colors[s2] : I2;
          }
          P2.config.series[r2].data[s2] && P2.config.series[r2].data[s2].strokeColor && (a2 = P2.config.series[r2].data[s2].strokeColor), this.isNullValue && (i2 = "none");
          var T2 = s2 / P2.config.chart.animations.animateGradually.delay * (P2.config.chart.animations.speed / P2.globals.dataPoints) / 2.4, z2 = M2.renderPaths({ i: r2, j: s2, realIndex: e2, pathFrom: n2, pathTo: l2, stroke: a2, strokeWidth: h2, strokeLineCap: P2.config.stroke.lineCap, fill: i2, animationDelay: T2, initialSpeed: P2.config.chart.animations.speed, dataChangeSpeed: P2.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(L2, "-area") });
          z2.attr("clip-path", "url(#gridRectMask".concat(P2.globals.cuid, ")"));
          var X2 = P2.config.forecastDataPoints;
          X2.count > 0 && s2 >= P2.globals.dataPoints - X2.count && (z2.node.setAttribute("stroke-dasharray", X2.dashArray), z2.node.setAttribute("stroke-width", X2.strokeWidth), z2.node.setAttribute("fill-opacity", X2.fillOpacity)), u2 !== void 0 && p2 !== void 0 && (z2.attr("data-range-y1", u2), z2.attr("data-range-y2", p2)), new v(this.ctx).setSelectionFilter(z2, e2, s2), c2.add(z2);
          var E2 = new vt(this).handleBarDataLabels({ x: d2, y: g2, y1: u2, y2: p2, i: r2, j: s2, series: f2, realIndex: e2, columnGroupIndex: o2, barHeight: x2, barWidth: b2, barXPosition: y2, barYPosition: w2, renderedPath: z2, visibleSeries: C2 });
          return E2.dataLabels !== null && k2.add(E2.dataLabels), E2.totalDataLabels && k2.add(E2.totalDataLabels), c2.add(k2), A2 && c2.add(A2), S2 && c2.add(S2), c2;
        } }, { key: "drawBarPaths", value: function(t3) {
          var e2, i2 = t3.indexes, a2 = t3.barHeight, s2 = t3.strokeWidth, r2 = t3.zeroW, o2 = t3.x, n2 = t3.y, l2 = t3.yDivision, h2 = t3.elSeries, c2 = this.w, d2 = i2.i, g2 = i2.j;
          if (c2.globals.isXNumeric) e2 = (n2 = (c2.globals.seriesX[d2][g2] - c2.globals.minX) / this.invertedXRatio - a2) + a2 * this.visibleI;
          else if (c2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
            var u2 = 0, p2 = 0;
            c2.globals.seriesPercent.forEach(function(t4, e3) {
              t4[g2] && u2++, e3 < d2 && t4[g2] === 0 && p2++;
            }), u2 > 0 && (a2 = this.seriesLen * a2 / u2), e2 = n2 + a2 * this.visibleI, e2 -= a2 * p2;
          } else e2 = n2 + a2 * this.visibleI;
          this.isFunnel && (r2 -= (this.barHelpers.getXForValue(this.series[d2][g2], r2) - r2) / 2), o2 = this.barHelpers.getXForValue(this.series[d2][g2], r2);
          var f2 = this.barHelpers.getBarpaths({ barYPosition: e2, barHeight: a2, x1: r2, x2: o2, strokeWidth: s2, series: this.series, realIndex: i2.realIndex, i: d2, j: g2, w: c2 });
          return c2.globals.isXNumeric || (n2 += l2), this.barHelpers.barBackground({ j: g2, i: d2, y1: e2 - a2 * this.visibleI, y2: a2 * this.seriesLen, elSeries: h2 }), { pathTo: f2.pathTo, pathFrom: f2.pathFrom, x1: r2, x: o2, y: n2, goalX: this.barHelpers.getGoalValues("x", r2, null, d2, g2), barYPosition: e2, barHeight: a2 };
        } }, { key: "drawColumnPaths", value: function(t3) {
          var e2, i2 = t3.indexes, a2 = t3.x, s2 = t3.y, r2 = t3.xDivision, o2 = t3.barWidth, n2 = t3.zeroH, l2 = t3.strokeWidth, h2 = t3.elSeries, c2 = this.w, d2 = i2.realIndex, g2 = i2.translationsIndex, u2 = i2.i, p2 = i2.j, f2 = i2.bc;
          if (c2.globals.isXNumeric) {
            var x2 = this.getBarXForNumericXAxis({ x: a2, j: p2, realIndex: d2, barWidth: o2 });
            a2 = x2.x, e2 = x2.barXPosition;
          } else if (c2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
            var b2 = this.barHelpers.getZeroValueEncounters({ i: u2, j: p2 }), v2 = b2.nonZeroColumns, m2 = b2.zeroEncounters;
            v2 > 0 && (o2 = this.seriesLen * o2 / v2), e2 = a2 + o2 * this.visibleI, e2 -= o2 * m2;
          } else e2 = a2 + o2 * this.visibleI;
          s2 = this.barHelpers.getYForValue(this.series[u2][p2], n2, g2);
          var y2 = this.barHelpers.getColumnPaths({ barXPosition: e2, barWidth: o2, y1: n2, y2: s2, strokeWidth: l2, series: this.series, realIndex: d2, i: u2, j: p2, w: c2 });
          return c2.globals.isXNumeric || (a2 += r2), this.barHelpers.barBackground({ bc: f2, j: p2, i: u2, x1: e2 - l2 / 2 - o2 * this.visibleI, x2: o2 * this.seriesLen + l2 / 2, elSeries: h2 }), { pathTo: y2.pathTo, pathFrom: y2.pathFrom, x: a2, y: s2, goalY: this.barHelpers.getGoalValues("y", null, n2, u2, p2, g2), barXPosition: e2, barWidth: o2 };
        } }, { key: "getBarXForNumericXAxis", value: function(t3) {
          var e2 = t3.x, i2 = t3.barWidth, a2 = t3.realIndex, s2 = t3.j, r2 = this.w, o2 = a2;
          return r2.globals.seriesX[a2].length || (o2 = r2.globals.maxValsInArrayIndex), r2.globals.seriesX[o2][s2] && (e2 = (r2.globals.seriesX[o2][s2] - r2.globals.minX) / this.xRatio - i2 * this.seriesLen / 2), { barXPosition: e2 + i2 * this.visibleI, x: e2 };
        } }, { key: "getPreviousPath", value: function(t3, e2) {
          for (var i2, a2 = this.w, s2 = 0; s2 < a2.globals.previousPaths.length; s2++) {
            var r2 = a2.globals.previousPaths[s2];
            r2.paths && r2.paths.length > 0 && parseInt(r2.realIndex, 10) === parseInt(t3, 10) && a2.globals.previousPaths[s2].paths[e2] !== void 0 && (i2 = a2.globals.previousPaths[s2].paths[e2].d);
          }
          return i2;
        } }]), t2;
      }(), wt = function(t2) {
        n(s2, yt);
        var i2 = d(s2);
        function s2() {
          return a(this, s2), i2.apply(this, arguments);
        }
        return r(s2, [{ key: "draw", value: function(t3, i3) {
          var a2 = this, s3 = this.w;
          this.graphics = new m(this.ctx), this.bar = new yt(this.ctx, this.xyRatios);
          var r2 = new y(this.ctx, s3);
          t3 = r2.getLogSeries(t3), this.yRatio = r2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3), s3.config.chart.stackType === "100%" && (t3 = s3.globals.comboCharts ? i3.map(function(t4) {
            return s3.globals.seriesPercent[t4];
          }) : s3.globals.seriesPercent.slice()), this.series = t3, this.barHelpers.initializeStackedPrevVars(this);
          for (var o2 = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), n2 = 0, l2 = 0, h2 = function(r3, h3) {
            var c3 = void 0, d3 = void 0, g2 = void 0, u2 = void 0, p2 = s3.globals.comboCharts ? i3[r3] : r3, f2 = a2.barHelpers.getGroupIndex(p2), b2 = f2.groupIndex, v2 = f2.columnGroupIndex;
            a2.groupCtx = a2[s3.globals.seriesGroups[b2]];
            var m2 = [], y2 = [], w2 = 0;
            a2.yRatio.length > 1 && (a2.yaxisIndex = s3.globals.seriesYAxisReverseMap[p2][0], w2 = p2), a2.isReversed = s3.config.yaxis[a2.yaxisIndex] && s3.config.yaxis[a2.yaxisIndex].reversed;
            var k2 = a2.graphics.group({ class: "apexcharts-series", seriesName: x.escapeString(s3.globals.seriesNames[p2]), rel: r3 + 1, "data:realIndex": p2 });
            a2.ctx.series.addCollapsedClassToSeries(k2, p2);
            var A2 = a2.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": p2 }), S2 = a2.graphics.group({ class: "apexcharts-bar-goals-markers" }), C2 = 0, L2 = 0, P2 = a2.initialPositions(n2, l2, c3, d3, g2, u2, w2);
            l2 = P2.y, C2 = P2.barHeight, d3 = P2.yDivision, u2 = P2.zeroW, n2 = P2.x, L2 = P2.barWidth, c3 = P2.xDivision, g2 = P2.zeroH, s3.globals.barHeight = C2, s3.globals.barWidth = L2, a2.barHelpers.initializeStackedXYVars(a2), a2.groupCtx.prevY.length === 1 && a2.groupCtx.prevY[0].every(function(t4) {
              return isNaN(t4);
            }) && (a2.groupCtx.prevY[0] = a2.groupCtx.prevY[0].map(function() {
              return g2;
            }), a2.groupCtx.prevYF[0] = a2.groupCtx.prevYF[0].map(function() {
              return 0;
            }));
            for (var M2 = 0; M2 < s3.globals.dataPoints; M2++) {
              var I2 = a2.barHelpers.getStrokeWidth(r3, M2, p2), T2 = { indexes: { i: r3, j: M2, realIndex: p2, translationsIndex: w2, bc: h3 }, strokeWidth: I2, x: n2, y: l2, elSeries: k2, columnGroupIndex: v2, seriesGroup: s3.globals.seriesGroups[b2] }, z2 = null;
              a2.isHorizontal ? (z2 = a2.drawStackedBarPaths(e(e({}, T2), {}, { zeroW: u2, barHeight: C2, yDivision: d3 })), L2 = a2.series[r3][M2] / a2.invertedYRatio) : (z2 = a2.drawStackedColumnPaths(e(e({}, T2), {}, { xDivision: c3, barWidth: L2, zeroH: g2 })), C2 = a2.series[r3][M2] / a2.yRatio[w2]);
              var X2 = a2.barHelpers.drawGoalLine({ barXPosition: z2.barXPosition, barYPosition: z2.barYPosition, goalX: z2.goalX, goalY: z2.goalY, barHeight: C2, barWidth: L2 });
              X2 && S2.add(X2), l2 = z2.y, n2 = z2.x, m2.push(n2), y2.push(l2);
              var E2 = a2.barHelpers.getPathFillColor(t3, r3, M2, p2);
              k2 = a2.renderSeries({ realIndex: p2, pathFill: E2, j: M2, i: r3, columnGroupIndex: v2, pathFrom: z2.pathFrom, pathTo: z2.pathTo, strokeWidth: I2, elSeries: k2, x: n2, y: l2, series: t3, barHeight: C2, barWidth: L2, elDataLabelsWrap: A2, elGoalsMarkers: S2, type: "bar", visibleSeries: v2 });
            }
            s3.globals.seriesXvalues[p2] = m2, s3.globals.seriesYvalues[p2] = y2, a2.groupCtx.prevY.push(a2.groupCtx.yArrj), a2.groupCtx.prevYF.push(a2.groupCtx.yArrjF), a2.groupCtx.prevYVal.push(a2.groupCtx.yArrjVal), a2.groupCtx.prevX.push(a2.groupCtx.xArrj), a2.groupCtx.prevXF.push(a2.groupCtx.xArrjF), a2.groupCtx.prevXVal.push(a2.groupCtx.xArrjVal), o2.add(k2);
          }, c2 = 0, d2 = 0; c2 < t3.length; c2++, d2++) h2(c2, d2);
          return o2;
        } }, { key: "initialPositions", value: function(t3, e2, i3, a2, s3, r2, o2) {
          var n2, l2, h2 = this.w;
          if (this.isHorizontal) {
            a2 = h2.globals.gridHeight / h2.globals.dataPoints;
            var c2 = h2.config.plotOptions.bar.barHeight;
            n2 = String(c2).indexOf("%") === -1 ? parseInt(c2, 10) : a2 * parseInt(c2, 10) / 100, r2 = h2.globals.padHorizontal + (this.isReversed ? h2.globals.gridWidth - this.baseLineInvertedY : this.baseLineInvertedY), e2 = (a2 - n2) / 2;
          } else {
            l2 = i3 = h2.globals.gridWidth / h2.globals.dataPoints;
            var d2 = h2.config.plotOptions.bar.columnWidth;
            h2.globals.isXNumeric && h2.globals.dataPoints > 1 ? l2 = (i3 = h2.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : String(d2).indexOf("%") === -1 ? l2 = parseInt(d2, 10) : l2 *= parseInt(d2, 10) / 100, s3 = h2.globals.gridHeight - this.baseLineY[o2] - (this.isReversed ? h2.globals.gridHeight : 0), t3 = h2.globals.padHorizontal + (i3 - l2) / 2;
          }
          var g2 = h2.globals.barGroups.length || 1;
          return { x: t3, y: e2, yDivision: a2, xDivision: i3, barHeight: n2 / g2, barWidth: l2 / g2, zeroH: s3, zeroW: r2 };
        } }, { key: "drawStackedBarPaths", value: function(t3) {
          for (var e2, i3 = t3.indexes, a2 = t3.barHeight, s3 = t3.strokeWidth, r2 = t3.zeroW, o2 = t3.x, n2 = t3.y, l2 = t3.columnGroupIndex, h2 = t3.seriesGroup, c2 = t3.yDivision, d2 = t3.elSeries, g2 = this.w, u2 = n2 + l2 * a2, p2 = i3.i, f2 = i3.j, x2 = i3.realIndex, b2 = i3.translationsIndex, v2 = 0, m2 = 0; m2 < this.groupCtx.prevXF.length; m2++) v2 += this.groupCtx.prevXF[m2][f2];
          var y2;
          if ((y2 = h2.indexOf(g2.config.series[x2].name)) > 0) {
            var w2 = r2;
            this.groupCtx.prevXVal[y2 - 1][f2] < 0 ? w2 = this.series[p2][f2] >= 0 ? this.groupCtx.prevX[y2 - 1][f2] + v2 - 2 * (this.isReversed ? v2 : 0) : this.groupCtx.prevX[y2 - 1][f2] : this.groupCtx.prevXVal[y2 - 1][f2] >= 0 && (w2 = this.series[p2][f2] >= 0 ? this.groupCtx.prevX[y2 - 1][f2] : this.groupCtx.prevX[y2 - 1][f2] - v2 + 2 * (this.isReversed ? v2 : 0)), e2 = w2;
          } else e2 = r2;
          o2 = this.series[p2][f2] === null ? e2 : e2 + this.series[p2][f2] / this.invertedYRatio - 2 * (this.isReversed ? this.series[p2][f2] / this.invertedYRatio : 0);
          var k2 = this.barHelpers.getBarpaths({ barYPosition: u2, barHeight: a2, x1: e2, x2: o2, strokeWidth: s3, series: this.series, realIndex: i3.realIndex, seriesGroup: h2, i: p2, j: f2, w: g2 });
          return this.barHelpers.barBackground({ j: f2, i: p2, y1: u2, y2: a2, elSeries: d2 }), n2 += c2, { pathTo: k2.pathTo, pathFrom: k2.pathFrom, goalX: this.barHelpers.getGoalValues("x", r2, null, p2, f2, b2), barXPosition: e2, barYPosition: u2, x: o2, y: n2 };
        } }, { key: "drawStackedColumnPaths", value: function(t3) {
          var e2 = t3.indexes, i3 = t3.x, a2 = t3.y, s3 = t3.xDivision, r2 = t3.barWidth, o2 = t3.zeroH, n2 = t3.columnGroupIndex, l2 = t3.seriesGroup, h2 = t3.elSeries, c2 = this.w, d2 = e2.i, g2 = e2.j, u2 = e2.bc, p2 = e2.realIndex, f2 = e2.translationsIndex;
          if (c2.globals.isXNumeric) {
            var x2 = c2.globals.seriesX[p2][g2];
            x2 || (x2 = 0), i3 = (x2 - c2.globals.minX) / this.xRatio - r2 / 2 * c2.globals.barGroups.length;
          }
          for (var b2, v2 = i3 + n2 * r2, m2 = 0, y2 = 0; y2 < this.groupCtx.prevYF.length; y2++) m2 += isNaN(this.groupCtx.prevYF[y2][g2]) ? 0 : this.groupCtx.prevYF[y2][g2];
          var w2 = d2;
          if (l2 && (w2 = l2.indexOf(c2.globals.seriesNames[p2])), w2 > 0 && !c2.globals.isXNumeric || w2 > 0 && c2.globals.isXNumeric && c2.globals.seriesX[p2 - 1][g2] === c2.globals.seriesX[p2][g2]) {
            var k2, A2, S2, C2 = Math.min(this.yRatio.length + 1, p2 + 1);
            if (this.groupCtx.prevY[w2 - 1] !== void 0 && this.groupCtx.prevY[w2 - 1].length) for (var L2 = 1; L2 < C2; L2++) {
              var P2;
              if (!isNaN((P2 = this.groupCtx.prevY[w2 - L2]) === null || P2 === void 0 ? void 0 : P2[g2])) {
                S2 = this.groupCtx.prevY[w2 - L2][g2];
                break;
              }
            }
            for (var M2 = 1; M2 < C2; M2++) {
              var I2, T2;
              if (((I2 = this.groupCtx.prevYVal[w2 - M2]) === null || I2 === void 0 ? void 0 : I2[g2]) < 0) {
                A2 = this.series[d2][g2] >= 0 ? S2 - m2 + 2 * (this.isReversed ? m2 : 0) : S2;
                break;
              }
              if (((T2 = this.groupCtx.prevYVal[w2 - M2]) === null || T2 === void 0 ? void 0 : T2[g2]) >= 0) {
                A2 = this.series[d2][g2] >= 0 ? S2 : S2 + m2 - 2 * (this.isReversed ? m2 : 0);
                break;
              }
            }
            A2 === void 0 && (A2 = c2.globals.gridHeight), b2 = (k2 = this.groupCtx.prevYF[0]) !== null && k2 !== void 0 && k2.every(function(t4) {
              return t4 === 0;
            }) && this.groupCtx.prevYF.slice(1, w2).every(function(t4) {
              return t4.every(function(t5) {
                return isNaN(t5);
              });
            }) ? o2 : A2;
          } else b2 = o2;
          a2 = this.series[d2][g2] ? b2 - this.series[d2][g2] / this.yRatio[f2] + 2 * (this.isReversed ? this.series[d2][g2] / this.yRatio[f2] : 0) : b2;
          var z2 = this.barHelpers.getColumnPaths({ barXPosition: v2, barWidth: r2, y1: b2, y2: a2, yRatio: this.yRatio[f2], strokeWidth: this.strokeWidth, series: this.series, seriesGroup: l2, realIndex: e2.realIndex, i: d2, j: g2, w: c2 });
          return this.barHelpers.barBackground({ bc: u2, j: g2, i: d2, x1: v2, x2: r2, elSeries: h2 }), { pathTo: z2.pathTo, pathFrom: z2.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, o2, d2, g2), barXPosition: v2, x: c2.globals.isXNumeric ? i3 : i3 + s3, y: a2 };
        } }]), s2;
      }(), kt = function(t2) {
        n(s2, yt);
        var i2 = d(s2);
        function s2() {
          return a(this, s2), i2.apply(this, arguments);
        }
        return r(s2, [{ key: "draw", value: function(t3, i3, a2) {
          var s3 = this, r2 = this.w, o2 = new m(this.ctx), n2 = r2.globals.comboCharts ? i3 : r2.config.chart.type, l2 = new H(this.ctx);
          this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = r2.config.plotOptions.bar.horizontal;
          var h2 = new y(this.ctx, r2);
          t3 = h2.getLogSeries(t3), this.series = t3, this.yRatio = h2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3);
          for (var c2 = o2.group({ class: "apexcharts-".concat(n2, "-series apexcharts-plot-series") }), d2 = function(i4) {
            s3.isBoxPlot = r2.config.chart.type === "boxPlot" || r2.config.series[i4].type === "boxPlot";
            var n3, h3, d3, g3, u2 = void 0, p2 = void 0, f2 = [], b2 = [], v2 = r2.globals.comboCharts ? a2[i4] : i4, m2 = s3.barHelpers.getGroupIndex(v2).columnGroupIndex, y2 = o2.group({ class: "apexcharts-series", seriesName: x.escapeString(r2.globals.seriesNames[v2]), rel: i4 + 1, "data:realIndex": v2 });
            s3.ctx.series.addCollapsedClassToSeries(y2, v2), t3[i4].length > 0 && (s3.visibleI = s3.visibleI + 1);
            var w2, k2, A2 = 0;
            s3.yRatio.length > 1 && (s3.yaxisIndex = r2.globals.seriesYAxisReverseMap[v2][0], A2 = v2);
            var S2 = s3.barHelpers.initialPositions();
            p2 = S2.y, w2 = S2.barHeight, h3 = S2.yDivision, g3 = S2.zeroW, u2 = S2.x, k2 = S2.barWidth, n3 = S2.xDivision, d3 = S2.zeroH, b2.push(u2 + k2 / 2);
            for (var C2 = o2.group({ class: "apexcharts-datalabels", "data:realIndex": v2 }), L2 = function(a3) {
              var o3 = s3.barHelpers.getStrokeWidth(i4, a3, v2), c3 = null, x2 = { indexes: { i: i4, j: a3, realIndex: v2, translationsIndex: A2 }, x: u2, y: p2, strokeWidth: o3, elSeries: y2 };
              c3 = s3.isHorizontal ? s3.drawHorizontalBoxPaths(e(e({}, x2), {}, { yDivision: h3, barHeight: w2, zeroW: g3 })) : s3.drawVerticalBoxPaths(e(e({}, x2), {}, { xDivision: n3, barWidth: k2, zeroH: d3 })), p2 = c3.y, u2 = c3.x, a3 > 0 && b2.push(u2 + k2 / 2), f2.push(p2), c3.pathTo.forEach(function(e2, n4) {
                var h4 = !s3.isBoxPlot && s3.candlestickOptions.wick.useFillColor ? c3.color[n4] : r2.globals.stroke.colors[i4], d4 = l2.fillPath({ seriesNumber: v2, dataPointIndex: a3, color: c3.color[n4], value: t3[i4][a3] });
                s3.renderSeries({ realIndex: v2, pathFill: d4, lineFill: h4, j: a3, i: i4, pathFrom: c3.pathFrom, pathTo: e2, strokeWidth: o3, elSeries: y2, x: u2, y: p2, series: t3, columnGroupIndex: m2, barHeight: w2, barWidth: k2, elDataLabelsWrap: C2, visibleSeries: s3.visibleI, type: r2.config.chart.type });
              });
            }, P2 = 0; P2 < r2.globals.dataPoints; P2++) L2(P2);
            r2.globals.seriesXvalues[v2] = b2, r2.globals.seriesYvalues[v2] = f2, c2.add(y2);
          }, g2 = 0; g2 < t3.length; g2++) d2(g2);
          return c2;
        } }, { key: "drawVerticalBoxPaths", value: function(t3) {
          var e2 = t3.indexes, i3 = t3.x;
          t3.y;
          var a2 = t3.xDivision, s3 = t3.barWidth, r2 = t3.zeroH, o2 = t3.strokeWidth, n2 = this.w, l2 = new m(this.ctx), h2 = e2.i, c2 = e2.j, d2 = !0, g2 = n2.config.plotOptions.candlestick.colors.upward, u2 = n2.config.plotOptions.candlestick.colors.downward, p2 = "";
          this.isBoxPlot && (p2 = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
          var f2 = this.yRatio[e2.translationsIndex], x2 = e2.realIndex, b2 = this.getOHLCValue(x2, c2), v2 = r2, y2 = r2;
          b2.o > b2.c && (d2 = !1);
          var w2 = Math.min(b2.o, b2.c), k2 = Math.max(b2.o, b2.c), A2 = b2.m;
          n2.globals.isXNumeric && (i3 = (n2.globals.seriesX[x2][c2] - n2.globals.minX) / this.xRatio - s3 / 2);
          var S2 = i3 + s3 * this.visibleI;
          this.series[h2][c2] === void 0 || this.series[h2][c2] === null ? (w2 = r2, k2 = r2) : (w2 = r2 - w2 / f2, k2 = r2 - k2 / f2, v2 = r2 - b2.h / f2, y2 = r2 - b2.l / f2, A2 = r2 - b2.m / f2);
          var C2 = l2.move(S2, r2), L2 = l2.move(S2 + s3 / 2, w2);
          return n2.globals.previousPaths.length > 0 && (L2 = this.getPreviousPath(x2, c2, !0)), C2 = this.isBoxPlot ? [l2.move(S2, w2) + l2.line(S2 + s3 / 2, w2) + l2.line(S2 + s3 / 2, v2) + l2.line(S2 + s3 / 4, v2) + l2.line(S2 + s3 - s3 / 4, v2) + l2.line(S2 + s3 / 2, v2) + l2.line(S2 + s3 / 2, w2) + l2.line(S2 + s3, w2) + l2.line(S2 + s3, A2) + l2.line(S2, A2) + l2.line(S2, w2 + o2 / 2), l2.move(S2, A2) + l2.line(S2 + s3, A2) + l2.line(S2 + s3, k2) + l2.line(S2 + s3 / 2, k2) + l2.line(S2 + s3 / 2, y2) + l2.line(S2 + s3 - s3 / 4, y2) + l2.line(S2 + s3 / 4, y2) + l2.line(S2 + s3 / 2, y2) + l2.line(S2 + s3 / 2, k2) + l2.line(S2, k2) + l2.line(S2, A2) + "z"] : [l2.move(S2, k2) + l2.line(S2 + s3 / 2, k2) + l2.line(S2 + s3 / 2, v2) + l2.line(S2 + s3 / 2, k2) + l2.line(S2 + s3, k2) + l2.line(S2 + s3, w2) + l2.line(S2 + s3 / 2, w2) + l2.line(S2 + s3 / 2, y2) + l2.line(S2 + s3 / 2, w2) + l2.line(S2, w2) + l2.line(S2, k2 - o2 / 2)], L2 += l2.move(S2, w2), n2.globals.isXNumeric || (i3 += a2), { pathTo: C2, pathFrom: L2, x: i3, y: k2, barXPosition: S2, color: this.isBoxPlot ? p2 : d2 ? [g2] : [u2] };
        } }, { key: "drawHorizontalBoxPaths", value: function(t3) {
          var e2 = t3.indexes;
          t3.x;
          var i3 = t3.y, a2 = t3.yDivision, s3 = t3.barHeight, r2 = t3.zeroW, o2 = t3.strokeWidth, n2 = this.w, l2 = new m(this.ctx), h2 = e2.i, c2 = e2.j, d2 = this.boxOptions.colors.lower;
          this.isBoxPlot && (d2 = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
          var g2 = this.invertedYRatio, u2 = e2.realIndex, p2 = this.getOHLCValue(u2, c2), f2 = r2, x2 = r2, b2 = Math.min(p2.o, p2.c), v2 = Math.max(p2.o, p2.c), y2 = p2.m;
          n2.globals.isXNumeric && (i3 = (n2.globals.seriesX[u2][c2] - n2.globals.minX) / this.invertedXRatio - s3 / 2);
          var w2 = i3 + s3 * this.visibleI;
          this.series[h2][c2] === void 0 || this.series[h2][c2] === null ? (b2 = r2, v2 = r2) : (b2 = r2 + b2 / g2, v2 = r2 + v2 / g2, f2 = r2 + p2.h / g2, x2 = r2 + p2.l / g2, y2 = r2 + p2.m / g2);
          var k2 = l2.move(r2, w2), A2 = l2.move(b2, w2 + s3 / 2);
          return n2.globals.previousPaths.length > 0 && (A2 = this.getPreviousPath(u2, c2, !0)), k2 = [l2.move(b2, w2) + l2.line(b2, w2 + s3 / 2) + l2.line(f2, w2 + s3 / 2) + l2.line(f2, w2 + s3 / 2 - s3 / 4) + l2.line(f2, w2 + s3 / 2 + s3 / 4) + l2.line(f2, w2 + s3 / 2) + l2.line(b2, w2 + s3 / 2) + l2.line(b2, w2 + s3) + l2.line(y2, w2 + s3) + l2.line(y2, w2) + l2.line(b2 + o2 / 2, w2), l2.move(y2, w2) + l2.line(y2, w2 + s3) + l2.line(v2, w2 + s3) + l2.line(v2, w2 + s3 / 2) + l2.line(x2, w2 + s3 / 2) + l2.line(x2, w2 + s3 - s3 / 4) + l2.line(x2, w2 + s3 / 4) + l2.line(x2, w2 + s3 / 2) + l2.line(v2, w2 + s3 / 2) + l2.line(v2, w2) + l2.line(y2, w2) + "z"], A2 += l2.move(b2, w2), n2.globals.isXNumeric || (i3 += a2), { pathTo: k2, pathFrom: A2, x: v2, y: i3, barYPosition: w2, color: d2 };
        } }, { key: "getOHLCValue", value: function(t3, e2) {
          var i3 = this.w;
          return { o: this.isBoxPlot ? i3.globals.seriesCandleH[t3][e2] : i3.globals.seriesCandleO[t3][e2], h: this.isBoxPlot ? i3.globals.seriesCandleO[t3][e2] : i3.globals.seriesCandleH[t3][e2], m: i3.globals.seriesCandleM[t3][e2], l: this.isBoxPlot ? i3.globals.seriesCandleC[t3][e2] : i3.globals.seriesCandleL[t3][e2], c: this.isBoxPlot ? i3.globals.seriesCandleL[t3][e2] : i3.globals.seriesCandleC[t3][e2] };
        } }]), s2;
      }(), At = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "checkColorRange", value: function() {
          var t3 = this.w, e2 = !1, i2 = t3.config.plotOptions[t3.config.chart.type];
          return i2.colorScale.ranges.length > 0 && i2.colorScale.ranges.map(function(t4, i3) {
            t4.from <= 0 && (e2 = !0);
          }), e2;
        } }, { key: "getShadeColor", value: function(t3, e2, i2, a2) {
          var s2 = this.w, r2 = 1, o2 = s2.config.plotOptions[t3].shadeIntensity, n2 = this.determineColor(t3, e2, i2);
          s2.globals.hasNegs || a2 ? r2 = s2.config.plotOptions[t3].reverseNegativeShade ? n2.percent < 0 ? n2.percent / 100 * (1.25 * o2) : (1 - n2.percent / 100) * (1.25 * o2) : n2.percent <= 0 ? 1 - (1 + n2.percent / 100) * o2 : (1 - n2.percent / 100) * o2 : (r2 = 1 - n2.percent / 100, t3 === "treemap" && (r2 = (1 - n2.percent / 100) * (1.25 * o2)));
          var l2 = n2.color, h2 = new x();
          return s2.config.plotOptions[t3].enableShades && (l2 = this.w.config.theme.mode === "dark" ? x.hexToRgba(h2.shadeColor(-1 * r2, n2.color), s2.config.fill.opacity) : x.hexToRgba(h2.shadeColor(r2, n2.color), s2.config.fill.opacity)), { color: l2, colorProps: n2 };
        } }, { key: "determineColor", value: function(t3, e2, i2) {
          var a2 = this.w, s2 = a2.globals.series[e2][i2], r2 = a2.config.plotOptions[t3], o2 = r2.colorScale.inverse ? i2 : e2;
          r2.distributed && a2.config.chart.type === "treemap" && (o2 = i2);
          var n2 = a2.globals.colors[o2], l2 = null, h2 = Math.min.apply(Math, u(a2.globals.series[e2])), c2 = Math.max.apply(Math, u(a2.globals.series[e2]));
          r2.distributed || t3 !== "heatmap" || (h2 = a2.globals.minY, c2 = a2.globals.maxY), r2.colorScale.min !== void 0 && (h2 = r2.colorScale.min < a2.globals.minY ? r2.colorScale.min : a2.globals.minY, c2 = r2.colorScale.max > a2.globals.maxY ? r2.colorScale.max : a2.globals.maxY);
          var d2 = Math.abs(c2) + Math.abs(h2), g2 = 100 * s2 / (d2 === 0 ? d2 - 1e-6 : d2);
          return r2.colorScale.ranges.length > 0 && r2.colorScale.ranges.map(function(t4, e3) {
            if (s2 >= t4.from && s2 <= t4.to) {
              n2 = t4.color, l2 = t4.foreColor ? t4.foreColor : null, h2 = t4.from, c2 = t4.to;
              var i3 = Math.abs(c2) + Math.abs(h2);
              g2 = 100 * s2 / (i3 === 0 ? i3 - 1e-6 : i3);
            }
          }), { color: n2, foreColor: l2, percent: g2 };
        } }, { key: "calculateDataLabels", value: function(t3) {
          var e2 = t3.text, i2 = t3.x, a2 = t3.y, s2 = t3.i, r2 = t3.j, o2 = t3.colorProps, n2 = t3.fontSize, l2 = this.w.config.dataLabels, h2 = new m(this.ctx), c2 = new N(this.ctx), d2 = null;
          if (l2.enabled) {
            d2 = h2.group({ class: "apexcharts-data-labels" });
            var g2 = l2.offsetX, u2 = l2.offsetY, p2 = i2 + g2, f2 = a2 + parseFloat(l2.style.fontSize) / 3 + u2;
            c2.plotDataLabelsText({ x: p2, y: f2, text: e2, i: s2, j: r2, color: o2.foreColor, parent: d2, fontSize: n2, dataLabelsConfig: l2 });
          }
          return d2;
        } }, { key: "addListeners", value: function(t3) {
          var e2 = new m(this.ctx);
          t3.node.addEventListener("mouseenter", e2.pathMouseEnter.bind(this, t3)), t3.node.addEventListener("mouseleave", e2.pathMouseLeave.bind(this, t3)), t3.node.addEventListener("mousedown", e2.pathMouseDown.bind(this, t3));
        } }]), t2;
      }(), St = function() {
        function t2(e2, i2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.xRatio = i2.xRatio, this.yRatio = i2.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new At(e2), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
        }
        return r(t2, [{ key: "draw", value: function(t3) {
          var e2 = this.w, i2 = new m(this.ctx), a2 = i2.group({ class: "apexcharts-heatmap" });
          a2.attr("clip-path", "url(#gridRectMask".concat(e2.globals.cuid, ")"));
          var s2 = e2.globals.gridWidth / e2.globals.dataPoints, r2 = e2.globals.gridHeight / e2.globals.series.length, o2 = 0, n2 = !1;
          this.negRange = this.helpers.checkColorRange();
          var l2 = t3.slice();
          e2.config.yaxis[0].reversed && (n2 = !0, l2.reverse());
          for (var h2 = n2 ? 0 : l2.length - 1; n2 ? h2 < l2.length : h2 >= 0; n2 ? h2++ : h2--) {
            var c2 = i2.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: x.escapeString(e2.globals.seriesNames[h2]), rel: h2 + 1, "data:realIndex": h2 });
            if (this.ctx.series.addCollapsedClassToSeries(c2, h2), e2.config.chart.dropShadow.enabled) {
              var d2 = e2.config.chart.dropShadow;
              new v(this.ctx).dropShadow(c2, d2, h2);
            }
            for (var g2 = 0, u2 = e2.config.plotOptions.heatmap.shadeIntensity, p2 = 0; p2 < l2[h2].length; p2++) {
              var f2 = this.helpers.getShadeColor(e2.config.chart.type, h2, p2, this.negRange), b2 = f2.color, y2 = f2.colorProps;
              e2.config.fill.type === "image" && (b2 = new H(this.ctx).fillPath({ seriesNumber: h2, dataPointIndex: p2, opacity: e2.globals.hasNegs ? y2.percent < 0 ? 1 - (1 + y2.percent / 100) : u2 + y2.percent / 100 : y2.percent / 100, patternID: x.randomId(), width: e2.config.fill.image.width ? e2.config.fill.image.width : s2, height: e2.config.fill.image.height ? e2.config.fill.image.height : r2 }));
              var w2 = this.rectRadius, k2 = i2.drawRect(g2, o2, s2, r2, w2);
              if (k2.attr({ cx: g2, cy: o2 }), k2.node.classList.add("apexcharts-heatmap-rect"), c2.add(k2), k2.attr({ fill: b2, i: h2, index: h2, j: p2, val: t3[h2][p2], "stroke-width": this.strokeWidth, stroke: e2.config.plotOptions.heatmap.useFillColorAsStroke ? b2 : e2.globals.stroke.colors[0], color: b2 }), this.helpers.addListeners(k2), e2.config.chart.animations.enabled && !e2.globals.dataChanged) {
                var A2 = 1;
                e2.globals.resized || (A2 = e2.config.chart.animations.speed), this.animateHeatMap(k2, g2, o2, s2, r2, A2);
              }
              if (e2.globals.dataChanged) {
                var S2 = 1;
                if (this.dynamicAnim.enabled && e2.globals.shouldAnimate) {
                  S2 = this.dynamicAnim.speed;
                  var C2 = e2.globals.previousPaths[h2] && e2.globals.previousPaths[h2][p2] && e2.globals.previousPaths[h2][p2].color;
                  C2 || (C2 = "rgba(255, 255, 255, 0)"), this.animateHeatColor(k2, x.isColorHex(C2) ? C2 : x.rgb2hex(C2), x.isColorHex(b2) ? b2 : x.rgb2hex(b2), S2);
                }
              }
              var L2 = (0, e2.config.dataLabels.formatter)(e2.globals.series[h2][p2], { value: e2.globals.series[h2][p2], seriesIndex: h2, dataPointIndex: p2, w: e2 }), P2 = this.helpers.calculateDataLabels({ text: L2, x: g2 + s2 / 2, y: o2 + r2 / 2, i: h2, j: p2, colorProps: y2, series: l2 });
              P2 !== null && c2.add(P2), g2 += s2;
            }
            o2 += r2, a2.add(c2);
          }
          var M2 = e2.globals.yAxisScale[0].result.slice();
          return e2.config.yaxis[0].reversed ? M2.unshift("") : M2.push(""), e2.globals.yAxisScale[0].result = M2, a2;
        } }, { key: "animateHeatMap", value: function(t3, e2, i2, a2, s2, r2) {
          var o2 = new b(this.ctx);
          o2.animateRect(t3, { x: e2 + a2 / 2, y: i2 + s2 / 2, width: 0, height: 0 }, { x: e2, y: i2, width: a2, height: s2 }, r2, function() {
            o2.animationCompleted(t3);
          });
        } }, { key: "animateHeatColor", value: function(t3, e2, i2, a2) {
          t3.attr({ fill: e2 }).animate(a2).attr({ fill: i2 });
        } }]), t2;
      }(), Ct = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "drawYAxisTexts", value: function(t3, e2, i2, a2) {
          var s2 = this.w, r2 = s2.config.yaxis[0], o2 = s2.globals.yLabelFormatters[0];
          return new m(this.ctx).drawText({ x: t3 + r2.labels.offsetX, y: e2 + r2.labels.offsetY, text: o2(a2, i2), textAnchor: "middle", fontSize: r2.labels.style.fontSize, fontFamily: r2.labels.style.fontFamily, foreColor: Array.isArray(r2.labels.style.colors) ? r2.labels.style.colors[i2] : r2.labels.style.colors });
        } }]), t2;
      }(), Lt = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
          var i2 = this.w;
          this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = i2.globals.stroke.colors !== void 0 ? i2.globals.stroke.colors : i2.globals.colors, this.defaultSize = Math.min(i2.globals.gridWidth, i2.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = i2.globals.gridWidth / 2, i2.config.chart.type === "radialBar" ? this.fullAngle = 360 : this.fullAngle = Math.abs(i2.config.plotOptions.pie.endAngle - i2.config.plotOptions.pie.startAngle), this.initialAngle = i2.config.plotOptions.pie.startAngle % this.fullAngle, i2.globals.radialSize = this.defaultSize / 2.05 - i2.config.stroke.width - (i2.config.chart.sparkline.enabled ? 0 : i2.config.chart.dropShadow.blur), this.donutSize = i2.globals.radialSize * parseInt(i2.config.plotOptions.pie.donut.size, 10) / 100;
          var s2 = i2.config.plotOptions.pie.customScale, r2 = i2.globals.gridWidth / 2, o2 = i2.globals.gridHeight / 2;
          this.translateX = r2 - r2 * s2, this.translateY = o2 - o2 * s2, this.dataLabelsGroup = new m(this.ctx).group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(s2, ")") }), this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
        }
        return r(t2, [{ key: "draw", value: function(t3) {
          var e2 = this, i2 = this.w, a2 = new m(this.ctx), s2 = a2.group({ class: "apexcharts-pie" });
          if (i2.globals.noData) return s2;
          for (var r2 = 0, o2 = 0; o2 < t3.length; o2++) r2 += x.negToZero(t3[o2]);
          var n2 = [], l2 = a2.group();
          r2 === 0 && (r2 = 1e-5), t3.forEach(function(t4) {
            e2.maxY = Math.max(e2.maxY, t4);
          }), i2.config.yaxis[0].max && (this.maxY = i2.config.yaxis[0].max), i2.config.grid.position === "back" && this.chartType === "polarArea" && this.drawPolarElements(s2);
          for (var h2 = 0; h2 < t3.length; h2++) {
            var c2 = this.fullAngle * x.negToZero(t3[h2]) / r2;
            n2.push(c2), this.chartType === "polarArea" ? (n2[h2] = this.fullAngle / t3.length, this.sliceSizes.push(i2.globals.radialSize * t3[h2] / this.maxY)) : this.sliceSizes.push(i2.globals.radialSize);
          }
          if (i2.globals.dataChanged) {
            for (var d2, g2 = 0, u2 = 0; u2 < i2.globals.previousPaths.length; u2++) g2 += x.negToZero(i2.globals.previousPaths[u2]);
            for (var p2 = 0; p2 < i2.globals.previousPaths.length; p2++) d2 = this.fullAngle * x.negToZero(i2.globals.previousPaths[p2]) / g2, this.prevSectorAngleArr.push(d2);
          }
          if (this.donutSize < 0 && (this.donutSize = 0), this.chartType === "donut") {
            var f2 = a2.drawCircle(this.donutSize);
            f2.attr({ cx: this.centerX, cy: this.centerY, fill: i2.config.plotOptions.pie.donut.background ? i2.config.plotOptions.pie.donut.background : "transparent" }), l2.add(f2);
          }
          var b2 = this.drawArcs(n2, t3);
          if (this.sliceLabels.forEach(function(t4) {
            b2.add(t4);
          }), l2.attr({ transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(i2.config.plotOptions.pie.customScale, ")") }), l2.add(b2), s2.add(l2), this.donutDataLabels.show) {
            var v2 = this.renderInnerDataLabels(this.dataLabelsGroup, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
            s2.add(v2);
          }
          return i2.config.grid.position === "front" && this.chartType === "polarArea" && this.drawPolarElements(s2), s2;
        } }, { key: "drawArcs", value: function(t3, e2) {
          var i2 = this.w, a2 = new v(this.ctx), s2 = new m(this.ctx), r2 = new H(this.ctx), o2 = s2.group({ class: "apexcharts-slices" }), n2 = this.initialAngle, l2 = this.initialAngle, h2 = this.initialAngle, c2 = this.initialAngle;
          this.strokeWidth = i2.config.stroke.show ? i2.config.stroke.width : 0;
          for (var d2 = 0; d2 < t3.length; d2++) {
            var g2 = s2.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: x.escapeString(i2.globals.seriesNames[d2]), rel: d2 + 1, "data:realIndex": d2 });
            o2.add(g2), l2 = c2, h2 = (n2 = h2) + t3[d2], c2 = l2 + this.prevSectorAngleArr[d2];
            var u2 = h2 < n2 ? this.fullAngle + h2 - n2 : h2 - n2, p2 = r2.fillPath({ seriesNumber: d2, size: this.sliceSizes[d2], value: e2[d2] }), f2 = this.getChangedPath(l2, c2), b2 = s2.drawPath({ d: f2, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[d2] : this.lineColorArr, strokeWidth: 0, fill: p2, fillOpacity: i2.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(d2) });
            if (b2.attr({ index: 0, j: d2 }), a2.setSelectionFilter(b2, 0, d2), i2.config.chart.dropShadow.enabled) {
              var y2 = i2.config.chart.dropShadow;
              a2.dropShadow(b2, y2, d2);
            }
            this.addListeners(b2, this.donutDataLabels), m.setAttrs(b2.node, { "data:angle": u2, "data:startAngle": n2, "data:strokeWidth": this.strokeWidth, "data:value": e2[d2] });
            var w2 = { x: 0, y: 0 };
            this.chartType === "pie" || this.chartType === "polarArea" ? w2 = x.polarToCartesian(this.centerX, this.centerY, i2.globals.radialSize / 1.25 + i2.config.plotOptions.pie.dataLabels.offset, (n2 + u2 / 2) % this.fullAngle) : this.chartType === "donut" && (w2 = x.polarToCartesian(this.centerX, this.centerY, (i2.globals.radialSize + this.donutSize) / 2 + i2.config.plotOptions.pie.dataLabels.offset, (n2 + u2 / 2) % this.fullAngle)), g2.add(b2);
            var k2 = 0;
            if (!this.initialAnim || i2.globals.resized || i2.globals.dataChanged ? this.animBeginArr.push(0) : ((k2 = u2 / this.fullAngle * i2.config.chart.animations.speed) === 0 && (k2 = 1), this.animDur = k2 + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i2.globals.dataChanged ? this.animatePaths(b2, { size: this.sliceSizes[d2], endAngle: h2, startAngle: n2, prevStartAngle: l2, prevEndAngle: c2, animateStartingPos: !0, i: d2, animBeginArr: this.animBeginArr, shouldSetPrevPaths: !0, dur: i2.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(b2, { size: this.sliceSizes[d2], endAngle: h2, startAngle: n2, i: d2, totalItems: t3.length - 1, animBeginArr: this.animBeginArr, dur: k2 }), i2.config.plotOptions.pie.expandOnClick && this.chartType !== "polarArea" && b2.node.addEventListener("mouseup", this.pieClicked.bind(this, d2)), i2.globals.selectedDataPoints[0] !== void 0 && i2.globals.selectedDataPoints[0].indexOf(d2) > -1 && this.pieClicked(d2), i2.config.dataLabels.enabled) {
              var A2 = w2.x, S2 = w2.y, C2 = 100 * u2 / this.fullAngle + "%";
              if (u2 !== 0 && i2.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t3[d2]) {
                var L2 = i2.config.dataLabels.formatter;
                L2 !== void 0 && (C2 = L2(i2.globals.seriesPercent[d2][0], { seriesIndex: d2, w: i2 }));
                var P2 = i2.globals.dataLabels.style.colors[d2], M2 = s2.group({ class: "apexcharts-datalabels" }), I2 = s2.drawText({ x: A2, y: S2, text: C2, textAnchor: "middle", fontSize: i2.config.dataLabels.style.fontSize, fontFamily: i2.config.dataLabels.style.fontFamily, fontWeight: i2.config.dataLabels.style.fontWeight, foreColor: P2 });
                if (M2.add(I2), i2.config.dataLabels.dropShadow.enabled) {
                  var T2 = i2.config.dataLabels.dropShadow;
                  a2.dropShadow(I2, T2);
                }
                I2.node.classList.add("apexcharts-pie-label"), i2.config.chart.animations.animate && i2.globals.resized === !1 && (I2.node.classList.add("apexcharts-pie-label-delay"), I2.node.style.animationDelay = i2.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(M2);
              }
            }
          }
          return o2;
        } }, { key: "addListeners", value: function(t3, e2) {
          var i2 = new m(this.ctx);
          t3.node.addEventListener("mouseenter", i2.pathMouseEnter.bind(this, t3)), t3.node.addEventListener("mouseleave", i2.pathMouseLeave.bind(this, t3)), t3.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t3.node, e2)), t3.node.addEventListener("mousedown", i2.pathMouseDown.bind(this, t3)), this.donutDataLabels.total.showAlways || (t3.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t3.node, e2)), t3.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t3.node, e2)));
        } }, { key: "animatePaths", value: function(t3, e2) {
          var i2 = this.w, a2 = e2.endAngle < e2.startAngle ? this.fullAngle + e2.endAngle - e2.startAngle : e2.endAngle - e2.startAngle, s2 = a2, r2 = e2.startAngle, o2 = e2.startAngle;
          e2.prevStartAngle !== void 0 && e2.prevEndAngle !== void 0 && (r2 = e2.prevEndAngle, s2 = e2.prevEndAngle < e2.prevStartAngle ? this.fullAngle + e2.prevEndAngle - e2.prevStartAngle : e2.prevEndAngle - e2.prevStartAngle), e2.i === i2.config.series.length - 1 && (a2 + o2 > this.fullAngle ? e2.endAngle = e2.endAngle - (a2 + o2) : a2 + o2 < this.fullAngle && (e2.endAngle = e2.endAngle + (this.fullAngle - (a2 + o2)))), a2 === this.fullAngle && (a2 = this.fullAngle - 0.01), this.animateArc(t3, r2, o2, a2, s2, e2);
        } }, { key: "animateArc", value: function(t3, e2, i2, a2, s2, r2) {
          var o2, n2 = this, l2 = this.w, h2 = new b(this.ctx), c2 = r2.size;
          (isNaN(e2) || isNaN(s2)) && (e2 = i2, s2 = a2, r2.dur = 0);
          var d2 = a2, g2 = i2, u2 = e2 < i2 ? this.fullAngle + e2 - i2 : e2 - i2;
          l2.globals.dataChanged && r2.shouldSetPrevPaths && r2.prevEndAngle && (o2 = n2.getPiePath({ me: n2, startAngle: r2.prevStartAngle, angle: r2.prevEndAngle < r2.prevStartAngle ? this.fullAngle + r2.prevEndAngle - r2.prevStartAngle : r2.prevEndAngle - r2.prevStartAngle, size: c2 }), t3.attr({ d: o2 })), r2.dur !== 0 ? t3.animate(r2.dur, l2.globals.easing, r2.animBeginArr[r2.i]).afterAll(function() {
            n2.chartType !== "pie" && n2.chartType !== "donut" && n2.chartType !== "polarArea" || this.animate(l2.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": n2.strokeWidth }), r2.i === l2.config.series.length - 1 && h2.animationCompleted(t3);
          }).during(function(l3) {
            d2 = u2 + (a2 - u2) * l3, r2.animateStartingPos && (d2 = s2 + (a2 - s2) * l3, g2 = e2 - s2 + (i2 - (e2 - s2)) * l3), o2 = n2.getPiePath({ me: n2, startAngle: g2, angle: d2, size: c2 }), t3.node.setAttribute("data:pathOrig", o2), t3.attr({ d: o2 });
          }) : (o2 = n2.getPiePath({ me: n2, startAngle: g2, angle: a2, size: c2 }), r2.isTrack || (l2.globals.animationEnded = !0), t3.node.setAttribute("data:pathOrig", o2), t3.attr({ d: o2, "stroke-width": n2.strokeWidth }));
        } }, { key: "pieClicked", value: function(t3) {
          var e2, i2 = this.w, a2 = this, s2 = a2.sliceSizes[t3] + (i2.config.plotOptions.pie.expandOnClick ? 4 : 0), r2 = i2.globals.dom.Paper.select(".apexcharts-".concat(a2.chartType.toLowerCase(), "-slice-").concat(t3)).members[0];
          if (r2.attr("data:pieClicked") !== "true") {
            var o2 = i2.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
            Array.prototype.forEach.call(o2, function(t4) {
              t4.setAttribute("data:pieClicked", "false");
              var e3 = t4.getAttribute("data:pathOrig");
              e3 && t4.setAttribute("d", e3);
            }), i2.globals.capturedDataPointIndex = t3, r2.attr("data:pieClicked", "true");
            var n2 = parseInt(r2.attr("data:startAngle"), 10), l2 = parseInt(r2.attr("data:angle"), 10);
            e2 = a2.getPiePath({ me: a2, startAngle: n2, angle: l2, size: s2 }), l2 !== 360 && r2.plot(e2);
          } else {
            r2.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(r2.node, this.donutDataLabels);
            var h2 = r2.attr("data:pathOrig");
            r2.attr({ d: h2 });
          }
        } }, { key: "getChangedPath", value: function(t3, e2) {
          var i2 = "";
          return this.dynamicAnim && this.w.globals.dataChanged && (i2 = this.getPiePath({ me: this, startAngle: t3, angle: e2 - t3, size: this.size })), i2;
        } }, { key: "getPiePath", value: function(t3) {
          var e2, i2 = t3.me, a2 = t3.startAngle, s2 = t3.angle, r2 = t3.size, o2 = new m(this.ctx), n2 = a2, l2 = Math.PI * (n2 - 90) / 180, h2 = s2 + a2;
          Math.ceil(h2) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (h2 = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(h2) > this.fullAngle && (h2 -= this.fullAngle);
          var c2 = Math.PI * (h2 - 90) / 180, d2 = i2.centerX + r2 * Math.cos(l2), g2 = i2.centerY + r2 * Math.sin(l2), u2 = i2.centerX + r2 * Math.cos(c2), p2 = i2.centerY + r2 * Math.sin(c2), f2 = x.polarToCartesian(i2.centerX, i2.centerY, i2.donutSize, h2), b2 = x.polarToCartesian(i2.centerX, i2.centerY, i2.donutSize, n2), v2 = s2 > 180 ? 1 : 0, y2 = ["M", d2, g2, "A", r2, r2, 0, v2, 1, u2, p2];
          return e2 = i2.chartType === "donut" ? [].concat(y2, ["L", f2.x, f2.y, "A", i2.donutSize, i2.donutSize, 0, v2, 0, b2.x, b2.y, "L", d2, g2, "z"]).join(" ") : i2.chartType === "pie" || i2.chartType === "polarArea" ? [].concat(y2, ["L", i2.centerX, i2.centerY, "L", d2, g2]).join(" ") : [].concat(y2).join(" "), o2.roundPathCorners(e2, 2 * this.strokeWidth);
        } }, { key: "drawPolarElements", value: function(t3) {
          var e2 = this.w, i2 = new _(this.ctx), a2 = new m(this.ctx), s2 = new Ct(this.ctx), r2 = a2.group(), o2 = a2.group(), n2 = i2.niceScale(0, Math.ceil(this.maxY), 0), l2 = n2.result.reverse(), h2 = n2.result.length;
          this.maxY = n2.niceMax;
          for (var c2 = e2.globals.radialSize, d2 = c2 / (h2 - 1), g2 = 0; g2 < h2 - 1; g2++) {
            var u2 = a2.drawCircle(c2);
            if (u2.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": e2.config.plotOptions.polarArea.rings.strokeWidth, stroke: e2.config.plotOptions.polarArea.rings.strokeColor }), e2.config.yaxis[0].show) {
              var p2 = s2.drawYAxisTexts(this.centerX, this.centerY - c2 + parseInt(e2.config.yaxis[0].labels.style.fontSize, 10) / 2, g2, l2[g2]);
              o2.add(p2);
            }
            r2.add(u2), c2 -= d2;
          }
          this.drawSpokes(t3), t3.add(r2), t3.add(o2);
        } }, { key: "renderInnerDataLabels", value: function(t3, e2, i2) {
          var a2 = this.w, s2 = new m(this.ctx), r2 = e2.total.show;
          t3.node.innerHTML = "", t3.node.style.opacity = i2.opacity;
          var o2, n2, l2 = i2.centerX, h2 = i2.centerY;
          o2 = e2.name.color === void 0 ? a2.globals.colors[0] : e2.name.color;
          var c2 = e2.name.fontSize, d2 = e2.name.fontFamily, g2 = e2.name.fontWeight;
          n2 = e2.value.color === void 0 ? a2.config.chart.foreColor : e2.value.color;
          var u2 = e2.value.formatter, p2 = "", f2 = "";
          if (r2 ? (o2 = e2.total.color, c2 = e2.total.fontSize, d2 = e2.total.fontFamily, g2 = e2.total.fontWeight, f2 = e2.total.label, p2 = e2.total.formatter(a2)) : a2.globals.series.length === 1 && (p2 = u2(a2.globals.series[0], a2), f2 = a2.globals.seriesNames[0]), f2 && (f2 = e2.name.formatter(f2, e2.total.show, a2)), e2.name.show) {
            var x2 = s2.drawText({ x: l2, y: h2 + parseFloat(e2.name.offsetY), text: f2, textAnchor: "middle", foreColor: o2, fontSize: c2, fontWeight: g2, fontFamily: d2 });
            x2.node.classList.add("apexcharts-datalabel-label"), t3.add(x2);
          }
          if (e2.value.show) {
            var b2 = e2.name.show ? parseFloat(e2.value.offsetY) + 16 : e2.value.offsetY, v2 = s2.drawText({ x: l2, y: h2 + b2, text: p2, textAnchor: "middle", foreColor: n2, fontWeight: e2.value.fontWeight, fontSize: e2.value.fontSize, fontFamily: e2.value.fontFamily });
            v2.node.classList.add("apexcharts-datalabel-value"), t3.add(v2);
          }
          return t3;
        } }, { key: "printInnerLabels", value: function(t3, e2, i2, a2) {
          var s2, r2 = this.w;
          a2 ? s2 = t3.name.color === void 0 ? r2.globals.colors[parseInt(a2.parentNode.getAttribute("rel"), 10) - 1] : t3.name.color : r2.globals.series.length > 1 && t3.total.show && (s2 = t3.total.color);
          var o2 = r2.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), n2 = r2.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
          i2 = (0, t3.value.formatter)(i2, r2), a2 || typeof t3.total.formatter != "function" || (i2 = t3.total.formatter(r2));
          var l2 = e2 === t3.total.label;
          e2 = t3.name.formatter(e2, l2, r2), o2 !== null && (o2.textContent = e2), n2 !== null && (n2.textContent = i2), o2 !== null && (o2.style.fill = s2);
        } }, { key: "printDataLabelsInner", value: function(t3, e2) {
          var i2 = this.w, a2 = t3.getAttribute("data:value"), s2 = i2.globals.seriesNames[parseInt(t3.parentNode.getAttribute("rel"), 10) - 1];
          i2.globals.series.length > 1 && this.printInnerLabels(e2, s2, a2, t3);
          var r2 = i2.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
          r2 !== null && (r2.style.opacity = 1);
        } }, { key: "drawSpokes", value: function(t3) {
          var e2 = this, i2 = this.w, a2 = new m(this.ctx), s2 = i2.config.plotOptions.polarArea.spokes;
          if (s2.strokeWidth !== 0) {
            for (var r2 = [], o2 = 360 / i2.globals.series.length, n2 = 0; n2 < i2.globals.series.length; n2++) r2.push(x.polarToCartesian(this.centerX, this.centerY, i2.globals.radialSize, i2.config.plotOptions.pie.startAngle + o2 * n2));
            r2.forEach(function(i3, r3) {
              var o3 = a2.drawLine(i3.x, i3.y, e2.centerX, e2.centerY, Array.isArray(s2.connectorColors) ? s2.connectorColors[r3] : s2.connectorColors);
              t3.add(o3);
            });
          }
        } }, { key: "revertDataLabelsInner", value: function() {
          var t3 = this.w;
          if (this.donutDataLabels.show) {
            var e2 = t3.globals.dom.Paper.select(".apexcharts-datalabels-group").members[0], i2 = this.renderInnerDataLabels(e2, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
            t3.globals.dom.Paper.select(".apexcharts-radialbar, .apexcharts-pie").members[0].add(i2);
          }
        } }]), t2;
      }(), Pt = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
          var i2 = this.w;
          this.graphics = new m(this.ctx), this.lineColorArr = i2.globals.stroke.colors !== void 0 ? i2.globals.stroke.colors : i2.globals.colors, this.defaultSize = i2.globals.svgHeight < i2.globals.svgWidth ? i2.globals.gridHeight + 1.5 * i2.globals.goldenPadding : i2.globals.gridWidth, this.isLog = i2.config.yaxis[0].logarithmic, this.logBase = i2.config.yaxis[0].logBase, this.coreUtils = new y(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, i2.globals.maxY, 0) : i2.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0) : i2.globals.minY, this.polygons = i2.config.plotOptions.radar.polygons, this.strokeWidth = i2.config.stroke.show ? i2.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - i2.config.chart.dropShadow.blur, i2.config.xaxis.labels.show && (this.size = this.size - i2.globals.xAxisLabelsWidth / 1.75), i2.config.plotOptions.radar.size !== void 0 && (this.size = i2.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
        }
        return r(t2, [{ key: "draw", value: function(t3) {
          var i2 = this, a2 = this.w, s2 = new H(this.ctx), r2 = [], o2 = new N(this.ctx);
          t3.length && (this.dataPointsLen = t3[a2.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
          var n2 = a2.globals.gridWidth / 2, l2 = a2.globals.gridHeight / 2, h2 = n2 + a2.config.plotOptions.radar.offsetX, c2 = l2 + a2.config.plotOptions.radar.offsetY, d2 = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(h2 || 0, ", ").concat(c2 || 0, ")") }), g2 = [], u2 = null, p2 = null;
          if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), t3.forEach(function(t4, n3) {
            var l3 = t4.length === a2.globals.dataPoints, h3 = i2.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": l3, seriesName: x.escapeString(a2.globals.seriesNames[n3]), rel: n3 + 1, "data:realIndex": n3 });
            i2.dataRadiusOfPercent[n3] = [], i2.dataRadius[n3] = [], i2.angleArr[n3] = [], t4.forEach(function(t5, e2) {
              var a3 = Math.abs(i2.maxValue - i2.minValue);
              t5 -= i2.minValue, i2.isLog && (t5 = i2.coreUtils.getLogVal(i2.logBase, t5, 0)), i2.dataRadiusOfPercent[n3][e2] = t5 / a3, i2.dataRadius[n3][e2] = i2.dataRadiusOfPercent[n3][e2] * i2.size, i2.angleArr[n3][e2] = e2 * i2.disAngle;
            }), g2 = i2.getDataPointsPos(i2.dataRadius[n3], i2.angleArr[n3]);
            var c3 = i2.createPaths(g2, { x: 0, y: 0 });
            u2 = i2.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), p2 = i2.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": n3 }), a2.globals.delayedElements.push({ el: u2.node, index: n3 });
            var d3 = { i: n3, realIndex: n3, animationDelay: n3, initialSpeed: a2.config.chart.animations.speed, dataChangeSpeed: a2.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: !1, bindEventsOnPaths: !1, stroke: a2.globals.stroke.colors[n3], strokeLineCap: a2.config.stroke.lineCap }, f3 = null;
            a2.globals.previousPaths.length > 0 && (f3 = i2.getPreviousPath(n3));
            for (var b2 = 0; b2 < c3.linePathsTo.length; b2++) {
              var m2 = i2.graphics.renderPaths(e(e({}, d3), {}, { pathFrom: f3 === null ? c3.linePathsFrom[b2] : f3, pathTo: c3.linePathsTo[b2], strokeWidth: Array.isArray(i2.strokeWidth) ? i2.strokeWidth[n3] : i2.strokeWidth, fill: "none", drawShadow: !1 }));
              h3.add(m2);
              var y2 = s2.fillPath({ seriesNumber: n3 }), w2 = i2.graphics.renderPaths(e(e({}, d3), {}, { pathFrom: f3 === null ? c3.areaPathsFrom[b2] : f3, pathTo: c3.areaPathsTo[b2], strokeWidth: 0, fill: y2, drawShadow: !1 }));
              if (a2.config.chart.dropShadow.enabled) {
                var k2 = new v(i2.ctx), A2 = a2.config.chart.dropShadow;
                k2.dropShadow(w2, Object.assign({}, A2, { noUserSpaceOnUse: !0 }), n3);
              }
              h3.add(w2);
            }
            t4.forEach(function(t5, s3) {
              var r3 = new D(i2.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: n3, dataPointIndex: s3 }), l4 = i2.graphics.drawMarker(g2[s3].x, g2[s3].y, r3);
              l4.attr("rel", s3), l4.attr("j", s3), l4.attr("index", n3), l4.node.setAttribute("default-marker-size", r3.pSize);
              var c4 = i2.graphics.group({ class: "apexcharts-series-markers" });
              c4 && c4.add(l4), u2.add(c4), h3.add(u2);
              var d4 = a2.config.dataLabels;
              if (d4.enabled) {
                var f4 = d4.formatter(a2.globals.series[n3][s3], { seriesIndex: n3, dataPointIndex: s3, w: a2 });
                o2.plotDataLabelsText({ x: g2[s3].x, y: g2[s3].y, text: f4, textAnchor: "middle", i: n3, j: n3, parent: p2, offsetCorrection: !1, dataLabelsConfig: e({}, d4) });
              }
              h3.add(p2);
            }), r2.push(h3);
          }), this.drawPolygons({ parent: d2 }), a2.config.xaxis.labels.show) {
            var f2 = this.drawXAxisTexts();
            d2.add(f2);
          }
          return r2.forEach(function(t4) {
            d2.add(t4);
          }), d2.add(this.yaxisLabels), d2;
        } }, { key: "drawPolygons", value: function(t3) {
          for (var e2 = this, i2 = this.w, a2 = t3.parent, s2 = new Ct(this.ctx), r2 = i2.globals.yAxisScale[0].result.reverse(), o2 = r2.length, n2 = [], l2 = this.size / (o2 - 1), h2 = 0; h2 < o2; h2++) n2[h2] = l2 * h2;
          n2.reverse();
          var c2 = [], d2 = [];
          n2.forEach(function(t4, i3) {
            var a3 = x.getPolygonPos(t4, e2.dataPointsLen), s3 = "";
            a3.forEach(function(t5, a4) {
              if (i3 === 0) {
                var r3 = e2.graphics.drawLine(t5.x, t5.y, 0, 0, Array.isArray(e2.polygons.connectorColors) ? e2.polygons.connectorColors[a4] : e2.polygons.connectorColors);
                d2.push(r3);
              }
              a4 === 0 && e2.yaxisLabelsTextsPos.push({ x: t5.x, y: t5.y }), s3 += t5.x + "," + t5.y + " ";
            }), c2.push(s3);
          }), c2.forEach(function(t4, s3) {
            var r3 = e2.polygons.strokeColors, o3 = e2.polygons.strokeWidth, n3 = e2.graphics.drawPolygon(t4, Array.isArray(r3) ? r3[s3] : r3, Array.isArray(o3) ? o3[s3] : o3, i2.globals.radarPolygons.fill.colors[s3]);
            a2.add(n3);
          }), d2.forEach(function(t4) {
            a2.add(t4);
          }), i2.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function(t4, i3) {
            var a3 = s2.drawYAxisTexts(t4.x, t4.y, i3, r2[i3]);
            e2.yaxisLabels.add(a3);
          });
        } }, { key: "drawXAxisTexts", value: function() {
          var t3 = this, i2 = this.w, a2 = i2.config.xaxis.labels, s2 = this.graphics.group({ class: "apexcharts-xaxis" }), r2 = x.getPolygonPos(this.size, this.dataPointsLen);
          return i2.globals.labels.forEach(function(o2, n2) {
            var l2 = i2.config.xaxis.labels.formatter, h2 = new N(t3.ctx);
            if (r2[n2]) {
              var c2 = t3.getTextPos(r2[n2], t3.size), d2 = l2(o2, { seriesIndex: -1, dataPointIndex: n2, w: i2 });
              h2.plotDataLabelsText({ x: c2.newX, y: c2.newY, text: d2, textAnchor: c2.textAnchor, i: n2, j: n2, parent: s2, className: "apexcharts-xaxis-label", color: Array.isArray(a2.style.colors) && a2.style.colors[n2] ? a2.style.colors[n2] : "#a8a8a8", dataLabelsConfig: e({ textAnchor: c2.textAnchor, dropShadow: { enabled: !1 } }, a2), offsetCorrection: !1 }).on("click", function(e2) {
                if (typeof i2.config.chart.events.xAxisLabelClick == "function") {
                  var a3 = Object.assign({}, i2, { labelIndex: n2 });
                  i2.config.chart.events.xAxisLabelClick(e2, t3.ctx, a3);
                }
              });
            }
          }), s2;
        } }, { key: "createPaths", value: function(t3, e2) {
          var i2 = this, a2 = [], s2 = [], r2 = [], o2 = [];
          if (t3.length) {
            s2 = [this.graphics.move(e2.x, e2.y)], o2 = [this.graphics.move(e2.x, e2.y)];
            var n2 = this.graphics.move(t3[0].x, t3[0].y), l2 = this.graphics.move(t3[0].x, t3[0].y);
            t3.forEach(function(e3, a3) {
              n2 += i2.graphics.line(e3.x, e3.y), l2 += i2.graphics.line(e3.x, e3.y), a3 === t3.length - 1 && (n2 += "Z", l2 += "Z");
            }), a2.push(n2), r2.push(l2);
          }
          return { linePathsFrom: s2, linePathsTo: a2, areaPathsFrom: o2, areaPathsTo: r2 };
        } }, { key: "getTextPos", value: function(t3, e2) {
          var i2 = "middle", a2 = t3.x, s2 = t3.y;
          return Math.abs(t3.x) >= 10 ? t3.x > 0 ? (i2 = "start", a2 += 10) : t3.x < 0 && (i2 = "end", a2 -= 10) : i2 = "middle", Math.abs(t3.y) >= e2 - 10 && (t3.y < 0 ? s2 -= 10 : t3.y > 0 && (s2 += 10)), { textAnchor: i2, newX: a2, newY: s2 };
        } }, { key: "getPreviousPath", value: function(t3) {
          for (var e2 = this.w, i2 = null, a2 = 0; a2 < e2.globals.previousPaths.length; a2++) {
            var s2 = e2.globals.previousPaths[a2];
            s2.paths.length > 0 && parseInt(s2.realIndex, 10) === parseInt(t3, 10) && e2.globals.previousPaths[a2].paths[0] !== void 0 && (i2 = e2.globals.previousPaths[a2].paths[0].d);
          }
          return i2;
        } }, { key: "getDataPointsPos", value: function(t3, e2) {
          var i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.dataPointsLen;
          t3 = t3 || [], e2 = e2 || [];
          for (var a2 = [], s2 = 0; s2 < i2; s2++) {
            var r2 = {};
            r2.x = t3[s2] * Math.sin(e2[s2]), r2.y = -t3[s2] * Math.cos(e2[s2]), a2.push(r2);
          }
          return a2;
        } }]), t2;
      }(), Mt = function(t2) {
        n(i2, Lt);
        var e2 = d(i2);
        function i2(t3) {
          var s2;
          a(this, i2), (s2 = e2.call(this, t3)).ctx = t3, s2.w = t3.w, s2.animBeginArr = [0], s2.animDur = 0;
          var r2 = s2.w;
          return s2.startAngle = r2.config.plotOptions.radialBar.startAngle, s2.endAngle = r2.config.plotOptions.radialBar.endAngle, s2.totalAngle = Math.abs(r2.config.plotOptions.radialBar.endAngle - r2.config.plotOptions.radialBar.startAngle), s2.trackStartAngle = r2.config.plotOptions.radialBar.track.startAngle, s2.trackEndAngle = r2.config.plotOptions.radialBar.track.endAngle, s2.barLabels = s2.w.config.plotOptions.radialBar.barLabels, s2.donutDataLabels = s2.w.config.plotOptions.radialBar.dataLabels, s2.radialDataLabels = s2.donutDataLabels, s2.trackStartAngle || (s2.trackStartAngle = s2.startAngle), s2.trackEndAngle || (s2.trackEndAngle = s2.endAngle), s2.endAngle === 360 && (s2.endAngle = 359.99), s2.margin = parseInt(r2.config.plotOptions.radialBar.track.margin, 10), s2.onBarLabelClick = s2.onBarLabelClick.bind(c(s2)), s2;
        }
        return r(i2, [{ key: "draw", value: function(t3) {
          var e3 = this.w, i3 = new m(this.ctx), a2 = i3.group({ class: "apexcharts-radialbar" });
          if (e3.globals.noData) return a2;
          var s2 = i3.group(), r2 = this.defaultSize / 2, o2 = e3.globals.gridWidth / 2, n2 = this.defaultSize / 2.05;
          e3.config.chart.sparkline.enabled || (n2 = n2 - e3.config.stroke.width - e3.config.chart.dropShadow.blur);
          var l2 = e3.globals.fill.colors;
          if (e3.config.plotOptions.radialBar.track.show) {
            var h2 = this.drawTracks({ size: n2, centerX: o2, centerY: r2, colorArr: l2, series: t3 });
            s2.add(h2);
          }
          var c2 = this.drawArcs({ size: n2, centerX: o2, centerY: r2, colorArr: l2, series: t3 }), d2 = 360;
          e3.config.plotOptions.radialBar.startAngle < 0 && (d2 = this.totalAngle);
          var g2 = (360 - d2) / 360;
          if (e3.globals.radialSize = n2 - n2 * g2, this.radialDataLabels.value.show) {
            var u2 = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
            e3.globals.radialSize += u2 * g2;
          }
          return s2.add(c2.g), e3.config.plotOptions.radialBar.hollow.position === "front" && (c2.g.add(c2.elHollow), c2.dataLabels && c2.g.add(c2.dataLabels)), a2.add(s2), a2;
        } }, { key: "drawTracks", value: function(t3) {
          var e3 = this.w, i3 = new m(this.ctx), a2 = i3.group({ class: "apexcharts-tracks" }), s2 = new v(this.ctx), r2 = new H(this.ctx), o2 = this.getStrokeWidth(t3);
          t3.size = t3.size - o2 / 2;
          for (var n2 = 0; n2 < t3.series.length; n2++) {
            var l2 = i3.group({ class: "apexcharts-radialbar-track apexcharts-track" });
            a2.add(l2), l2.attr({ rel: n2 + 1 }), t3.size = t3.size - o2 - this.margin;
            var h2 = e3.config.plotOptions.radialBar.track, c2 = r2.fillPath({ seriesNumber: 0, size: t3.size, fillColors: Array.isArray(h2.background) ? h2.background[n2] : h2.background, solid: !0 }), d2 = this.trackStartAngle, g2 = this.trackEndAngle;
            Math.abs(g2) + Math.abs(d2) >= 360 && (g2 = 360 - Math.abs(this.startAngle) - 0.1);
            var u2 = i3.drawPath({ d: "", stroke: c2, strokeWidth: o2 * parseInt(h2.strokeWidth, 10) / 100, fill: "none", strokeOpacity: h2.opacity, classes: "apexcharts-radialbar-area" });
            if (h2.dropShadow.enabled) {
              var p2 = h2.dropShadow;
              s2.dropShadow(u2, p2);
            }
            l2.add(u2), u2.attr("id", "apexcharts-radialbarTrack-" + n2), this.animatePaths(u2, { centerX: t3.centerX, centerY: t3.centerY, endAngle: g2, startAngle: d2, size: t3.size, i: n2, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: !0, easing: e3.globals.easing });
          }
          return a2;
        } }, { key: "drawArcs", value: function(t3) {
          var e3 = this.w, i3 = new m(this.ctx), a2 = new H(this.ctx), s2 = new v(this.ctx), r2 = i3.group(), o2 = this.getStrokeWidth(t3);
          t3.size = t3.size - o2 / 2;
          var n2 = e3.config.plotOptions.radialBar.hollow.background, l2 = t3.size - o2 * t3.series.length - this.margin * t3.series.length - o2 * parseInt(e3.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, h2 = l2 - e3.config.plotOptions.radialBar.hollow.margin;
          e3.config.plotOptions.radialBar.hollow.image !== void 0 && (n2 = this.drawHollowImage(t3, r2, l2, n2));
          var c2 = this.drawHollow({ size: h2, centerX: t3.centerX, centerY: t3.centerY, fill: n2 || "transparent" });
          if (e3.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
            var d2 = e3.config.plotOptions.radialBar.hollow.dropShadow;
            s2.dropShadow(c2, d2);
          }
          var g2 = 1;
          !this.radialDataLabels.total.show && e3.globals.series.length > 1 && (g2 = 0);
          var u2 = null;
          if (this.radialDataLabels.show) {
            var p2 = e3.globals.dom.Paper.select(".apexcharts-datalabels-group").members[0];
            u2 = this.renderInnerDataLabels(p2, this.radialDataLabels, { hollowSize: l2, centerX: t3.centerX, centerY: t3.centerY, opacity: g2 });
          }
          e3.config.plotOptions.radialBar.hollow.position === "back" && (r2.add(c2), u2 && r2.add(u2));
          var f2 = !1;
          e3.config.plotOptions.radialBar.inverseOrder && (f2 = !0);
          for (var b2 = f2 ? t3.series.length - 1 : 0; f2 ? b2 >= 0 : b2 < t3.series.length; f2 ? b2-- : b2++) {
            var y2 = i3.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: x.escapeString(e3.globals.seriesNames[b2]) });
            r2.add(y2), y2.attr({ rel: b2 + 1, "data:realIndex": b2 }), this.ctx.series.addCollapsedClassToSeries(y2, b2), t3.size = t3.size - o2 - this.margin;
            var w2 = a2.fillPath({ seriesNumber: b2, size: t3.size, value: t3.series[b2] }), k2 = this.startAngle, A2 = void 0, S2 = x.negToZero(t3.series[b2] > 100 ? 100 : t3.series[b2]) / 100, C2 = Math.round(this.totalAngle * S2) + this.startAngle, L2 = void 0;
            e3.globals.dataChanged && (A2 = this.startAngle, L2 = Math.round(this.totalAngle * x.negToZero(e3.globals.previousPaths[b2]) / 100) + A2), Math.abs(C2) + Math.abs(k2) >= 360 && (C2 -= 0.01), Math.abs(L2) + Math.abs(A2) >= 360 && (L2 -= 0.01);
            var P2 = C2 - k2, M2 = Array.isArray(e3.config.stroke.dashArray) ? e3.config.stroke.dashArray[b2] : e3.config.stroke.dashArray, I2 = i3.drawPath({ d: "", stroke: w2, strokeWidth: o2, fill: "none", fillOpacity: e3.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + b2, strokeDashArray: M2 });
            if (m.setAttrs(I2.node, { "data:angle": P2, "data:value": t3.series[b2] }), e3.config.chart.dropShadow.enabled) {
              var T2 = e3.config.chart.dropShadow;
              s2.dropShadow(I2, T2, b2);
            }
            if (s2.setSelectionFilter(I2, 0, b2), this.addListeners(I2, this.radialDataLabels), y2.add(I2), I2.attr({ index: 0, j: b2 }), this.barLabels.enabled) {
              var z2 = x.polarToCartesian(t3.centerX, t3.centerY, t3.size, k2), X2 = this.barLabels.formatter(e3.globals.seriesNames[b2], { seriesIndex: b2, w: e3 }), E2 = ["apexcharts-radialbar-label"];
              this.barLabels.onClick || E2.push("apexcharts-no-click");
              var Y2 = this.barLabels.useSeriesColors ? e3.globals.colors[b2] : e3.config.chart.foreColor;
              Y2 || (Y2 = e3.config.chart.foreColor);
              var F2 = z2.x + this.barLabels.offsetX, R2 = z2.y + this.barLabels.offsetY, D2 = i3.drawText({ x: F2, y: R2, text: X2, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: Y2, cssClass: E2.join(" ") });
              D2.on("click", this.onBarLabelClick), D2.attr({ rel: b2 + 1 }), k2 !== 0 && D2.attr({ "transform-origin": "".concat(F2, " ").concat(R2), transform: "rotate(".concat(k2, " 0 0)") }), y2.add(D2);
            }
            var O2 = 0;
            !this.initialAnim || e3.globals.resized || e3.globals.dataChanged || (O2 = e3.config.chart.animations.speed), e3.globals.dataChanged && (O2 = e3.config.chart.animations.dynamicAnimation.speed), this.animDur = O2 / (1.2 * t3.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(I2, { centerX: t3.centerX, centerY: t3.centerY, endAngle: C2, startAngle: k2, prevEndAngle: L2, prevStartAngle: A2, size: t3.size, i: b2, totalItems: 2, animBeginArr: this.animBeginArr, dur: O2, shouldSetPrevPaths: !0, easing: e3.globals.easing });
          }
          return { g: r2, elHollow: c2, dataLabels: u2 };
        } }, { key: "drawHollow", value: function(t3) {
          var e3 = new m(this.ctx).drawCircle(2 * t3.size);
          return e3.attr({ class: "apexcharts-radialbar-hollow", cx: t3.centerX, cy: t3.centerY, r: t3.size, fill: t3.fill }), e3;
        } }, { key: "drawHollowImage", value: function(t3, e3, i3, a2) {
          var s2 = this.w, r2 = new H(this.ctx), o2 = x.randomId(), n2 = s2.config.plotOptions.radialBar.hollow.image;
          if (s2.config.plotOptions.radialBar.hollow.imageClipped) r2.clippedImgArea({ width: i3, height: i3, image: n2, patternID: "pattern".concat(s2.globals.cuid).concat(o2) }), a2 = "url(#pattern".concat(s2.globals.cuid).concat(o2, ")");
          else {
            var l2 = s2.config.plotOptions.radialBar.hollow.imageWidth, h2 = s2.config.plotOptions.radialBar.hollow.imageHeight;
            if (l2 === void 0 && h2 === void 0) {
              var c2 = s2.globals.dom.Paper.image(n2).loaded(function(e4) {
                this.move(t3.centerX - e4.width / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetX, t3.centerY - e4.height / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetY);
              });
              e3.add(c2);
            } else {
              var d2 = s2.globals.dom.Paper.image(n2).loaded(function(e4) {
                this.move(t3.centerX - l2 / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetX, t3.centerY - h2 / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l2, h2);
              });
              e3.add(d2);
            }
          }
          return a2;
        } }, { key: "getStrokeWidth", value: function(t3) {
          var e3 = this.w;
          return t3.size * (100 - parseInt(e3.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t3.series.length + 1) - this.margin;
        } }, { key: "onBarLabelClick", value: function(t3) {
          var e3 = parseInt(t3.target.getAttribute("rel"), 10) - 1, i3 = this.barLabels.onClick, a2 = this.w;
          i3 && i3(a2.globals.seriesNames[e3], { w: a2, seriesIndex: e3 });
        } }]), i2;
      }(), It = function(t2) {
        n(s2, yt);
        var i2 = d(s2);
        function s2() {
          return a(this, s2), i2.apply(this, arguments);
        }
        return r(s2, [{ key: "draw", value: function(t3, i3) {
          var a2 = this.w, s3 = new m(this.ctx);
          this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t3, this.seriesRangeStart = a2.globals.seriesRangeStart, this.seriesRangeEnd = a2.globals.seriesRangeEnd, this.barHelpers.initVariables(t3);
          for (var r2 = s3.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), o2 = 0; o2 < t3.length; o2++) {
            var n2, l2, h2, c2, d2 = void 0, g2 = void 0, u2 = a2.globals.comboCharts ? i3[o2] : o2, p2 = this.barHelpers.getGroupIndex(u2).columnGroupIndex, f2 = s3.group({ class: "apexcharts-series", seriesName: x.escapeString(a2.globals.seriesNames[u2]), rel: o2 + 1, "data:realIndex": u2 });
            this.ctx.series.addCollapsedClassToSeries(f2, u2), t3[o2].length > 0 && (this.visibleI = this.visibleI + 1);
            var b2 = 0, v2 = 0, y2 = 0;
            this.yRatio.length > 1 && (this.yaxisIndex = a2.globals.seriesYAxisReverseMap[u2][0], y2 = u2);
            var w2 = this.barHelpers.initialPositions();
            g2 = w2.y, c2 = w2.zeroW, d2 = w2.x, v2 = w2.barWidth, b2 = w2.barHeight, n2 = w2.xDivision, l2 = w2.yDivision, h2 = w2.zeroH;
            for (var k2 = s3.group({ class: "apexcharts-datalabels", "data:realIndex": u2 }), A2 = s3.group({ class: "apexcharts-rangebar-goals-markers" }), S2 = 0; S2 < a2.globals.dataPoints; S2++) {
              var C2 = this.barHelpers.getStrokeWidth(o2, S2, u2), L2 = this.seriesRangeStart[o2][S2], P2 = this.seriesRangeEnd[o2][S2], M2 = null, I2 = null, T2 = null, z2 = { x: d2, y: g2, strokeWidth: C2, elSeries: f2 }, X2 = this.seriesLen;
              if (a2.config.plotOptions.bar.rangeBarGroupRows && (X2 = 1), a2.config.series[o2].data[S2] === void 0) break;
              if (this.isHorizontal) {
                T2 = g2 + b2 * this.visibleI;
                var E2 = (l2 - b2 * X2) / 2;
                if (a2.config.series[o2].data[S2].x) {
                  var Y2 = this.detectOverlappingBars({ i: o2, j: S2, barYPosition: T2, srty: E2, barHeight: b2, yDivision: l2, initPositions: w2 });
                  b2 = Y2.barHeight, T2 = Y2.barYPosition;
                }
                v2 = (M2 = this.drawRangeBarPaths(e({ indexes: { i: o2, j: S2, realIndex: u2 }, barHeight: b2, barYPosition: T2, zeroW: c2, yDivision: l2, y1: L2, y2: P2 }, z2))).barWidth;
              } else {
                a2.globals.isXNumeric && (d2 = (a2.globals.seriesX[o2][S2] - a2.globals.minX) / this.xRatio - v2 / 2), I2 = d2 + v2 * this.visibleI;
                var F2 = (n2 - v2 * X2) / 2;
                if (a2.config.series[o2].data[S2].x) {
                  var R2 = this.detectOverlappingBars({ i: o2, j: S2, barXPosition: I2, srtx: F2, barWidth: v2, xDivision: n2, initPositions: w2 });
                  v2 = R2.barWidth, I2 = R2.barXPosition;
                }
                b2 = (M2 = this.drawRangeColumnPaths(e({ indexes: { i: o2, j: S2, realIndex: u2, translationsIndex: y2 }, barWidth: v2, barXPosition: I2, zeroH: h2, xDivision: n2 }, z2))).barHeight;
              }
              var H2 = this.barHelpers.drawGoalLine({ barXPosition: M2.barXPosition, barYPosition: T2, goalX: M2.goalX, goalY: M2.goalY, barHeight: b2, barWidth: v2 });
              H2 && A2.add(H2), g2 = M2.y, d2 = M2.x;
              var D2 = this.barHelpers.getPathFillColor(t3, o2, S2, u2), O2 = a2.globals.stroke.colors[u2];
              this.renderSeries({ realIndex: u2, pathFill: D2, lineFill: O2, j: S2, i: o2, x: d2, y: g2, y1: L2, y2: P2, pathFrom: M2.pathFrom, pathTo: M2.pathTo, strokeWidth: C2, elSeries: f2, series: t3, barHeight: b2, barWidth: v2, barXPosition: I2, barYPosition: T2, columnGroupIndex: p2, elDataLabelsWrap: k2, elGoalsMarkers: A2, visibleSeries: this.visibleI, type: "rangebar" });
            }
            r2.add(f2);
          }
          return r2;
        } }, { key: "detectOverlappingBars", value: function(t3) {
          var e2 = t3.i, i3 = t3.j, a2 = t3.barYPosition, s3 = t3.barXPosition, r2 = t3.srty, o2 = t3.srtx, n2 = t3.barHeight, l2 = t3.barWidth, h2 = t3.yDivision, c2 = t3.xDivision, d2 = t3.initPositions, g2 = this.w, u2 = [], p2 = g2.config.series[e2].data[i3].rangeName, f2 = g2.config.series[e2].data[i3].x, x2 = Array.isArray(f2) ? f2.join(" ") : f2, b2 = g2.globals.labels.map(function(t4) {
            return Array.isArray(t4) ? t4.join(" ") : t4;
          }).indexOf(x2), v2 = g2.globals.seriesRange[e2].findIndex(function(t4) {
            return t4.x === x2 && t4.overlaps.length > 0;
          });
          return this.isHorizontal ? (a2 = g2.config.plotOptions.bar.rangeBarGroupRows ? r2 + h2 * b2 : r2 + n2 * this.visibleI + h2 * b2, v2 > -1 && !g2.config.plotOptions.bar.rangeBarOverlap && (u2 = g2.globals.seriesRange[e2][v2].overlaps).indexOf(p2) > -1 && (a2 = (n2 = d2.barHeight / u2.length) * this.visibleI + h2 * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + n2 * (this.visibleI + u2.indexOf(p2)) + h2 * b2)) : (b2 > -1 && !g2.globals.timescaleLabels.length && (s3 = g2.config.plotOptions.bar.rangeBarGroupRows ? o2 + c2 * b2 : o2 + l2 * this.visibleI + c2 * b2), v2 > -1 && !g2.config.plotOptions.bar.rangeBarOverlap && (u2 = g2.globals.seriesRange[e2][v2].overlaps).indexOf(p2) > -1 && (s3 = (l2 = d2.barWidth / u2.length) * this.visibleI + c2 * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + l2 * (this.visibleI + u2.indexOf(p2)) + c2 * b2)), { barYPosition: a2, barXPosition: s3, barHeight: n2, barWidth: l2 };
        } }, { key: "drawRangeColumnPaths", value: function(t3) {
          var e2 = t3.indexes, i3 = t3.x, a2 = t3.xDivision, s3 = t3.barWidth, r2 = t3.barXPosition, o2 = t3.zeroH, n2 = this.w, l2 = e2.i, h2 = e2.j, c2 = e2.realIndex, d2 = e2.translationsIndex, g2 = this.yRatio[d2], u2 = this.getRangeValue(c2, h2), p2 = Math.min(u2.start, u2.end), f2 = Math.max(u2.start, u2.end);
          this.series[l2][h2] === void 0 || this.series[l2][h2] === null ? p2 = o2 : (p2 = o2 - p2 / g2, f2 = o2 - f2 / g2);
          var x2 = Math.abs(f2 - p2), b2 = this.barHelpers.getColumnPaths({ barXPosition: r2, barWidth: s3, y1: p2, y2: f2, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: c2, i: c2, j: h2, w: n2 });
          if (n2.globals.isXNumeric) {
            var v2 = this.getBarXForNumericXAxis({ x: i3, j: h2, realIndex: c2, barWidth: s3 });
            i3 = v2.x, r2 = v2.barXPosition;
          } else i3 += a2;
          return { pathTo: b2.pathTo, pathFrom: b2.pathFrom, barHeight: x2, x: i3, y: u2.start < 0 && u2.end < 0 ? p2 : f2, goalY: this.barHelpers.getGoalValues("y", null, o2, l2, h2, d2), barXPosition: r2 };
        } }, { key: "preventBarOverflow", value: function(t3) {
          var e2 = this.w;
          return t3 < 0 && (t3 = 0), t3 > e2.globals.gridWidth && (t3 = e2.globals.gridWidth), t3;
        } }, { key: "drawRangeBarPaths", value: function(t3) {
          var e2 = t3.indexes, i3 = t3.y, a2 = t3.y1, s3 = t3.y2, r2 = t3.yDivision, o2 = t3.barHeight, n2 = t3.barYPosition, l2 = t3.zeroW, h2 = this.w, c2 = e2.realIndex, d2 = e2.j, g2 = this.preventBarOverflow(l2 + a2 / this.invertedYRatio), u2 = this.preventBarOverflow(l2 + s3 / this.invertedYRatio), p2 = this.getRangeValue(c2, d2), f2 = Math.abs(u2 - g2), x2 = this.barHelpers.getBarpaths({ barYPosition: n2, barHeight: o2, x1: g2, x2: u2, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: c2, realIndex: c2, j: d2, w: h2 });
          return h2.globals.isXNumeric || (i3 += r2), { pathTo: x2.pathTo, pathFrom: x2.pathFrom, barWidth: f2, x: p2.start < 0 && p2.end < 0 ? g2 : u2, goalX: this.barHelpers.getGoalValues("x", l2, null, c2, d2), y: i3 };
        } }, { key: "getRangeValue", value: function(t3, e2) {
          var i3 = this.w;
          return { start: i3.globals.seriesRangeStart[t3][e2], end: i3.globals.seriesRangeEnd[t3][e2] };
        } }]), s2;
      }(), Tt = function() {
        function t2(e2) {
          a(this, t2), this.w = e2.w, this.lineCtx = e2;
        }
        return r(t2, [{ key: "sameValueSeriesFix", value: function(t3, e2) {
          var i2 = this.w;
          if ((i2.config.fill.type === "gradient" || i2.config.fill.type[t3] === "gradient") && new y(this.lineCtx.ctx, i2).seriesHaveSameValues(t3)) {
            var a2 = e2[t3].slice();
            a2[a2.length - 1] = a2[a2.length - 1] + 1e-6, e2[t3] = a2;
          }
          return e2;
        } }, { key: "calculatePoints", value: function(t3) {
          var e2 = t3.series, i2 = t3.realIndex, a2 = t3.x, s2 = t3.y, r2 = t3.i, o2 = t3.j, n2 = t3.prevY, l2 = this.w, h2 = [], c2 = [];
          if (o2 === 0) {
            var d2 = this.lineCtx.categoryAxisCorrection + l2.config.markers.offsetX;
            l2.globals.isXNumeric && (d2 = (l2.globals.seriesX[i2][0] - l2.globals.minX) / this.lineCtx.xRatio + l2.config.markers.offsetX), h2.push(d2), c2.push(x.isNumber(e2[r2][0]) ? n2 + l2.config.markers.offsetY : null), h2.push(a2 + l2.config.markers.offsetX), c2.push(x.isNumber(e2[r2][o2 + 1]) ? s2 + l2.config.markers.offsetY : null);
          } else h2.push(a2 + l2.config.markers.offsetX), c2.push(x.isNumber(e2[r2][o2 + 1]) ? s2 + l2.config.markers.offsetY : null);
          return { x: h2, y: c2 };
        } }, { key: "checkPreviousPaths", value: function(t3) {
          for (var e2 = t3.pathFromLine, i2 = t3.pathFromArea, a2 = t3.realIndex, s2 = this.w, r2 = 0; r2 < s2.globals.previousPaths.length; r2++) {
            var o2 = s2.globals.previousPaths[r2];
            (o2.type === "line" || o2.type === "area") && o2.paths.length > 0 && parseInt(o2.realIndex, 10) === parseInt(a2, 10) && (o2.type === "line" ? (this.lineCtx.appendPathFrom = !1, e2 = s2.globals.previousPaths[r2].paths[0].d) : o2.type === "area" && (this.lineCtx.appendPathFrom = !1, i2 = s2.globals.previousPaths[r2].paths[0].d, s2.config.stroke.show && s2.globals.previousPaths[r2].paths[1] && (e2 = s2.globals.previousPaths[r2].paths[1].d)));
          }
          return { pathFromLine: e2, pathFromArea: i2 };
        } }, { key: "determineFirstPrevY", value: function(t3) {
          var e2, i2, a2, s2 = t3.i, r2 = t3.realIndex, o2 = t3.series, n2 = t3.prevY, l2 = t3.lineYPosition, h2 = t3.translationsIndex, c2 = this.w, d2 = c2.config.chart.stacked && !c2.globals.comboCharts || c2.config.chart.stacked && c2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((e2 = this.w.config.series[r2]) === null || e2 === void 0 ? void 0 : e2.type) === "bar" || ((i2 = this.w.config.series[r2]) === null || i2 === void 0 ? void 0 : i2.type) === "column");
          if (((a2 = o2[s2]) === null || a2 === void 0 ? void 0 : a2[0]) !== void 0) n2 = (l2 = d2 && s2 > 0 ? this.lineCtx.prevSeriesY[s2 - 1][0] : this.lineCtx.zeroY) - o2[s2][0] / this.lineCtx.yRatio[h2] + 2 * (this.lineCtx.isReversed ? o2[s2][0] / this.lineCtx.yRatio[h2] : 0);
          else if (d2 && s2 > 0 && o2[s2][0] === void 0) {
            for (var g2 = s2 - 1; g2 >= 0; g2--) if (o2[g2][0] !== null && o2[g2][0] !== void 0) {
              n2 = l2 = this.lineCtx.prevSeriesY[g2][0];
              break;
            }
          }
          return { prevY: n2, lineYPosition: l2 };
        } }]), t2;
      }(), zt = function(t2) {
        for (var e2, i2, a2, s2, r2 = function(t3) {
          for (var e3 = [], i3 = t3[0], a3 = t3[1], s3 = e3[0] = Yt(i3, a3), r3 = 1, o3 = t3.length - 1; r3 < o3; r3++) i3 = a3, a3 = t3[r3 + 1], e3[r3] = 0.5 * (s3 + (s3 = Yt(i3, a3)));
          return e3[r3] = s3, e3;
        }(t2), o2 = t2.length - 1, n2 = [], l2 = 0; l2 < o2; l2++) a2 = Yt(t2[l2], t2[l2 + 1]), Math.abs(a2) < 1e-6 ? r2[l2] = r2[l2 + 1] = 0 : (s2 = (e2 = r2[l2] / a2) * e2 + (i2 = r2[l2 + 1] / a2) * i2) > 9 && (s2 = 3 * a2 / Math.sqrt(s2), r2[l2] = s2 * e2, r2[l2 + 1] = s2 * i2);
        for (var h2 = 0; h2 <= o2; h2++) s2 = (t2[Math.min(o2, h2 + 1)][0] - t2[Math.max(0, h2 - 1)][0]) / (6 * (1 + r2[h2] * r2[h2])), n2.push([s2 || 0, r2[h2] * s2 || 0]);
        return n2;
      }, Xt = function(t2) {
        var e2 = zt(t2), i2 = t2[1], a2 = t2[0], s2 = [], r2 = e2[1], o2 = e2[0];
        s2.push(a2, [a2[0] + o2[0], a2[1] + o2[1], i2[0] - r2[0], i2[1] - r2[1], i2[0], i2[1]]);
        for (var n2 = 2, l2 = e2.length; n2 < l2; n2++) {
          var h2 = t2[n2], c2 = e2[n2];
          s2.push([h2[0] - c2[0], h2[1] - c2[1], h2[0], h2[1]]);
        }
        return s2;
      }, Et = function(t2, e2, i2) {
        var a2 = t2.slice(e2, i2);
        if (e2) {
          if (i2 - e2 > 1 && a2[1].length < 6) {
            var s2 = a2[0].length;
            a2[1] = [2 * a2[0][s2 - 2] - a2[0][s2 - 4], 2 * a2[0][s2 - 1] - a2[0][s2 - 3]].concat(a2[1]);
          }
          a2[0] = a2[0].slice(-2);
        }
        return a2;
      };
      function Yt(t2, e2) {
        return (e2[1] - t2[1]) / (e2[0] - t2[0]);
      }
      var Ft = function() {
        function t2(e2, i2, s2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.xyRatios = i2, this.pointsChart = !(this.w.config.chart.type !== "bubble" && this.w.config.chart.type !== "scatter") || s2, this.scatter = new O(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Tt(this), this.markers = new D(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
        }
        return r(t2, [{ key: "draw", value: function(t3, i2, a2, s2) {
          var r2, o2 = this.w, n2 = new m(this.ctx), l2 = o2.globals.comboCharts ? i2 : o2.config.chart.type, h2 = n2.group({ class: "apexcharts-".concat(l2, "-series apexcharts-plot-series") }), c2 = new y(this.ctx, o2);
          this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t3 = c2.getLogSeries(t3), this.yRatio = c2.getLogYRatios(this.yRatio), this.prevSeriesY = [];
          for (var d2 = [], g2 = 0; g2 < t3.length; g2++) {
            t3 = this.lineHelpers.sameValueSeriesFix(g2, t3);
            var u2 = o2.globals.comboCharts ? a2[g2] : g2, p2 = this.yRatio.length > 1 ? u2 : 0;
            this._initSerieVariables(t3, g2, u2);
            var f2 = [], x2 = [], b2 = [], v2 = o2.globals.padHorizontal + this.categoryAxisCorrection;
            this.ctx.series.addCollapsedClassToSeries(this.elSeries, u2), o2.globals.isXNumeric && o2.globals.seriesX.length > 0 && (v2 = (o2.globals.seriesX[u2][0] - o2.globals.minX) / this.xRatio), b2.push(v2);
            var w2, k2 = v2, A2 = void 0, S2 = k2, C2 = this.zeroY, L2 = this.zeroY;
            C2 = this.lineHelpers.determineFirstPrevY({ i: g2, realIndex: u2, series: t3, prevY: C2, lineYPosition: 0, translationsIndex: p2 }).prevY, o2.config.stroke.curve === "monotoneCubic" && t3[g2][0] === null ? f2.push(null) : f2.push(C2), w2 = C2, l2 === "rangeArea" && (A2 = L2 = this.lineHelpers.determineFirstPrevY({ i: g2, realIndex: u2, series: s2, prevY: L2, lineYPosition: 0, translationsIndex: p2 }).prevY, x2.push(f2[0] !== null ? L2 : null));
            var P2 = this._calculatePathsFrom({ type: l2, series: t3, i: g2, realIndex: u2, translationsIndex: p2, prevX: S2, prevY: C2, prevY2: L2 }), M2 = [f2[0]], I2 = [x2[0]], T2 = { type: l2, series: t3, realIndex: u2, translationsIndex: p2, i: g2, x: v2, y: 1, pX: k2, pY: w2, pathsFrom: P2, linePaths: [], areaPaths: [], seriesIndex: a2, lineYPosition: 0, xArrj: b2, yArrj: f2, y2Arrj: x2, seriesRangeEnd: s2 }, z2 = this._iterateOverDataPoints(e(e({}, T2), {}, { iterations: l2 === "rangeArea" ? t3[g2].length - 1 : void 0, isRangeStart: !0 }));
            if (l2 === "rangeArea") {
              for (var X2 = this._calculatePathsFrom({ series: s2, i: g2, realIndex: u2, prevX: S2, prevY: L2 }), E2 = this._iterateOverDataPoints(e(e({}, T2), {}, { series: s2, xArrj: [v2], yArrj: M2, y2Arrj: I2, pY: A2, areaPaths: z2.areaPaths, pathsFrom: X2, iterations: s2[g2].length - 1, isRangeStart: !1 })), Y2 = z2.linePaths.length / 2, F2 = 0; F2 < Y2; F2++) z2.linePaths[F2] = E2.linePaths[F2 + Y2] + z2.linePaths[F2];
              z2.linePaths.splice(Y2), z2.pathFromLine = E2.pathFromLine + z2.pathFromLine;
            } else z2.pathFromArea += "z";
            this._handlePaths({ type: l2, realIndex: u2, i: g2, paths: z2 }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), d2.push(this.elSeries);
          }
          if (((r2 = o2.config.series[0]) === null || r2 === void 0 ? void 0 : r2.zIndex) !== void 0 && d2.sort(function(t4, e2) {
            return Number(t4.node.getAttribute("zIndex")) - Number(e2.node.getAttribute("zIndex"));
          }), o2.config.chart.stacked) for (var R2 = d2.length - 1; R2 >= 0; R2--) h2.add(d2[R2]);
          else for (var H2 = 0; H2 < d2.length; H2++) h2.add(d2[H2]);
          return h2;
        } }, { key: "_initSerieVariables", value: function(t3, e2, i2) {
          var a2 = this.w, s2 = new m(this.ctx);
          this.xDivision = a2.globals.gridWidth / (a2.globals.dataPoints - (a2.config.xaxis.tickPlacement === "on" ? 1 : 0)), this.strokeWidth = Array.isArray(a2.config.stroke.width) ? a2.config.stroke.width[i2] : a2.config.stroke.width;
          var r2 = 0;
          this.yRatio.length > 1 && (this.yaxisIndex = a2.globals.seriesYAxisReverseMap[i2], r2 = i2), this.isReversed = a2.config.yaxis[this.yaxisIndex] && a2.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a2.globals.gridHeight - this.baseLineY[r2] - (this.isReversed ? a2.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[r2] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a2.globals.gridHeight || a2.config.plotOptions.area.fillTo === "end") && (this.areaBottomY = a2.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s2.group({ class: "apexcharts-series", zIndex: a2.config.series[i2].zIndex !== void 0 ? a2.config.series[i2].zIndex : i2, seriesName: x.escapeString(a2.globals.seriesNames[i2]) }), this.elPointsMain = s2.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": i2 }), this.elDataLabelsWrap = s2.group({ class: "apexcharts-datalabels", "data:realIndex": i2 });
          var o2 = t3[e2].length === a2.globals.dataPoints;
          this.elSeries.attr({ "data:longestSeries": o2, rel: e2 + 1, "data:realIndex": i2 }), this.appendPathFrom = !0;
        } }, { key: "_calculatePathsFrom", value: function(t3) {
          var e2, i2, a2, s2, r2 = t3.type, o2 = t3.series, n2 = t3.i, l2 = t3.realIndex, h2 = t3.translationsIndex, c2 = t3.prevX, d2 = t3.prevY, g2 = t3.prevY2, u2 = this.w, p2 = new m(this.ctx);
          if (o2[n2][0] === null) {
            for (var f2 = 0; f2 < o2[n2].length; f2++) if (o2[n2][f2] !== null) {
              c2 = this.xDivision * f2, d2 = this.zeroY - o2[n2][f2] / this.yRatio[h2], e2 = p2.move(c2, d2), i2 = p2.move(c2, this.areaBottomY);
              break;
            }
          } else e2 = p2.move(c2, d2), r2 === "rangeArea" && (e2 = p2.move(c2, g2) + p2.line(c2, d2)), i2 = p2.move(c2, this.areaBottomY) + p2.line(c2, d2);
          if (a2 = p2.move(0, this.zeroY) + p2.line(0, this.zeroY), s2 = p2.move(0, this.zeroY) + p2.line(0, this.zeroY), u2.globals.previousPaths.length > 0) {
            var x2 = this.lineHelpers.checkPreviousPaths({ pathFromLine: a2, pathFromArea: s2, realIndex: l2 });
            a2 = x2.pathFromLine, s2 = x2.pathFromArea;
          }
          return { prevX: c2, prevY: d2, linePath: e2, areaPath: i2, pathFromLine: a2, pathFromArea: s2 };
        } }, { key: "_handlePaths", value: function(t3) {
          var i2 = t3.type, a2 = t3.realIndex, s2 = t3.i, r2 = t3.paths, o2 = this.w, n2 = new m(this.ctx), l2 = new H(this.ctx);
          this.prevSeriesY.push(r2.yArrj), o2.globals.seriesXvalues[a2] = r2.xArrj, o2.globals.seriesYvalues[a2] = r2.yArrj;
          var h2 = o2.config.forecastDataPoints;
          if (h2.count > 0 && i2 !== "rangeArea") {
            var c2 = o2.globals.seriesXvalues[a2][o2.globals.seriesXvalues[a2].length - h2.count - 1], d2 = n2.drawRect(c2, 0, o2.globals.gridWidth, o2.globals.gridHeight, 0);
            o2.globals.dom.elForecastMask.appendChild(d2.node);
            var g2 = n2.drawRect(0, 0, c2, o2.globals.gridHeight, 0);
            o2.globals.dom.elNonForecastMask.appendChild(g2.node);
          }
          this.pointsChart || o2.globals.delayedElements.push({ el: this.elPointsMain.node, index: a2 });
          var u2 = { i: s2, realIndex: a2, animationDelay: s2, initialSpeed: o2.config.chart.animations.speed, dataChangeSpeed: o2.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(i2) };
          if (i2 === "area") for (var p2 = l2.fillPath({ seriesNumber: a2 }), f2 = 0; f2 < r2.areaPaths.length; f2++) {
            var x2 = n2.renderPaths(e(e({}, u2), {}, { pathFrom: r2.pathFromArea, pathTo: r2.areaPaths[f2], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: p2 }));
            this.elSeries.add(x2);
          }
          if (o2.config.stroke.show && !this.pointsChart) {
            var b2 = null;
            if (i2 === "line") b2 = l2.fillPath({ seriesNumber: a2, i: s2 });
            else if (o2.config.stroke.fill.type === "solid") b2 = o2.globals.stroke.colors[a2];
            else {
              var v2 = o2.config.fill;
              o2.config.fill = o2.config.stroke.fill, b2 = l2.fillPath({ seriesNumber: a2, i: s2 }), o2.config.fill = v2;
            }
            for (var y2 = 0; y2 < r2.linePaths.length; y2++) {
              var w2 = b2;
              i2 === "rangeArea" && (w2 = l2.fillPath({ seriesNumber: a2 }));
              var k2 = e(e({}, u2), {}, { pathFrom: r2.pathFromLine, pathTo: r2.linePaths[y2], stroke: b2, strokeWidth: this.strokeWidth, strokeLineCap: o2.config.stroke.lineCap, fill: i2 === "rangeArea" ? w2 : "none" }), A2 = n2.renderPaths(k2);
              if (this.elSeries.add(A2), A2.attr("fill-rule", "evenodd"), h2.count > 0 && i2 !== "rangeArea") {
                var S2 = n2.renderPaths(k2);
                S2.node.setAttribute("stroke-dasharray", h2.dashArray), h2.strokeWidth && S2.node.setAttribute("stroke-width", h2.strokeWidth), this.elSeries.add(S2), S2.attr("clip-path", "url(#forecastMask".concat(o2.globals.cuid, ")")), A2.attr("clip-path", "url(#nonForecastMask".concat(o2.globals.cuid, ")"));
              }
            }
          }
        } }, { key: "_iterateOverDataPoints", value: function(t3) {
          var e2, i2, a2 = this, s2 = t3.type, r2 = t3.series, o2 = t3.iterations, n2 = t3.realIndex, l2 = t3.translationsIndex, h2 = t3.i, c2 = t3.x, d2 = t3.y, g2 = t3.pX, u2 = t3.pY, p2 = t3.pathsFrom, f2 = t3.linePaths, b2 = t3.areaPaths, v2 = t3.seriesIndex, y2 = t3.lineYPosition, w2 = t3.xArrj, k2 = t3.yArrj, A2 = t3.y2Arrj, S2 = t3.isRangeStart, C2 = t3.seriesRangeEnd, L2 = this.w, P2 = new m(this.ctx), M2 = this.yRatio, I2 = p2.prevY, T2 = p2.linePath, z2 = p2.areaPath, X2 = p2.pathFromLine, E2 = p2.pathFromArea, Y2 = x.isNumber(L2.globals.minYArr[n2]) ? L2.globals.minYArr[n2] : L2.globals.minY;
          o2 || (o2 = L2.globals.dataPoints > 1 ? L2.globals.dataPoints - 1 : L2.globals.dataPoints);
          var F2 = function(t4, e3) {
            return e3 - t4 / M2[l2] + 2 * (a2.isReversed ? t4 / M2[l2] : 0);
          }, R2 = d2, H2 = L2.config.chart.stacked && !L2.globals.comboCharts || L2.config.chart.stacked && L2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((e2 = this.w.config.series[n2]) === null || e2 === void 0 ? void 0 : e2.type) === "bar" || ((i2 = this.w.config.series[n2]) === null || i2 === void 0 ? void 0 : i2.type) === "column"), D2 = L2.config.stroke.curve;
          Array.isArray(D2) && (D2 = Array.isArray(v2) ? D2[v2[h2]] : D2[h2]);
          for (var O2, N2 = 0, W2 = 0; W2 < o2; W2++) {
            var B2 = r2[h2][W2 + 1] === void 0 || r2[h2][W2 + 1] === null;
            if (L2.globals.isXNumeric) {
              var G2 = L2.globals.seriesX[n2][W2 + 1];
              L2.globals.seriesX[n2][W2 + 1] === void 0 && (G2 = L2.globals.seriesX[n2][o2 - 1]), c2 = (G2 - L2.globals.minX) / this.xRatio;
            } else c2 += this.xDivision;
            H2 ? h2 > 0 && L2.globals.collapsedSeries.length < L2.config.series.length - 1 ? y2 = this.prevSeriesY[function(t4) {
              for (var e3 = t4; e3 > 0; e3--) {
                if (!(L2.globals.collapsedSeriesIndices.indexOf(v2?.[e3] || e3) > -1)) return e3;
                e3--;
              }
              return 0;
            }(h2 - 1)][W2 + 1] : y2 = this.zeroY : y2 = this.zeroY, B2 ? d2 = F2(Y2, y2) : (d2 = F2(r2[h2][W2 + 1], y2), s2 === "rangeArea" && (R2 = F2(C2[h2][W2 + 1], y2))), w2.push(c2), !B2 || L2.config.stroke.curve !== "smooth" && L2.config.stroke.curve !== "monotoneCubic" ? (k2.push(d2), A2.push(R2)) : (k2.push(null), A2.push(null));
            var V2 = this.lineHelpers.calculatePoints({ series: r2, x: c2, y: d2, realIndex: n2, i: h2, j: W2, prevY: I2 }), j2 = this._createPaths({ type: s2, series: r2, i: h2, realIndex: n2, j: W2, x: c2, y: d2, y2: R2, xArrj: w2, yArrj: k2, y2Arrj: A2, pX: g2, pY: u2, pathState: N2, segmentStartX: O2, linePath: T2, areaPath: z2, linePaths: f2, areaPaths: b2, curve: D2, isRangeStart: S2 });
            b2 = j2.areaPaths, f2 = j2.linePaths, g2 = j2.pX, u2 = j2.pY, N2 = j2.pathState, O2 = j2.segmentStartX, z2 = j2.areaPath, T2 = j2.linePath, !this.appendPathFrom || D2 === "monotoneCubic" && s2 === "rangeArea" || (X2 += P2.line(c2, this.zeroY), E2 += P2.line(c2, this.zeroY)), this.handleNullDataPoints(r2, V2, h2, W2, n2), this._handleMarkersAndLabels({ type: s2, pointsPos: V2, i: h2, j: W2, realIndex: n2, isRangeStart: S2 });
          }
          return { yArrj: k2, xArrj: w2, pathFromArea: E2, areaPaths: b2, pathFromLine: X2, linePaths: f2, linePath: T2, areaPath: z2 };
        } }, { key: "_handleMarkersAndLabels", value: function(t3) {
          var e2 = t3.type, i2 = t3.pointsPos, a2 = t3.isRangeStart, s2 = t3.i, r2 = t3.j, o2 = t3.realIndex, n2 = this.w, l2 = new N(this.ctx);
          if (this.pointsChart) this.scatter.draw(this.elSeries, r2, { realIndex: o2, pointsPos: i2, zRatio: this.zRatio, elParent: this.elPointsMain });
          else {
            n2.globals.series[s2].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
            var h2 = this.markers.plotChartMarkers(i2, o2, r2 + 1);
            h2 !== null && this.elPointsMain.add(h2);
          }
          var c2 = l2.drawDataLabel({ type: e2, isRangeStart: a2, pos: i2, i: o2, j: r2 + 1 });
          c2 !== null && this.elDataLabelsWrap.add(c2);
        } }, { key: "_createPaths", value: function(t3) {
          var e2 = t3.type, i2 = t3.series, a2 = t3.i;
          t3.realIndex;
          var s2 = t3.j, r2 = t3.x, o2 = t3.y, n2 = t3.xArrj, l2 = t3.yArrj, h2 = t3.y2, c2 = t3.y2Arrj, d2 = t3.pX, g2 = t3.pY, u2 = t3.pathState, p2 = t3.segmentStartX, f2 = t3.linePath, x2 = t3.areaPath, b2 = t3.linePaths, v2 = t3.areaPaths, y2 = t3.curve, w2 = t3.isRangeStart;
          this.w;
          var k2, A2 = new m(this.ctx), S2 = this.areaBottomY, C2 = e2 === "rangeArea", L2 = e2 === "rangeArea" && w2;
          switch (y2) {
            case "monotoneCubic":
              var P2 = w2 ? l2 : c2;
              switch (u2) {
                case 0:
                  if (P2[s2 + 1] === null) break;
                  u2 = 1;
                case 1:
                  if (!(C2 ? n2.length === i2[a2].length : s2 === i2[a2].length - 2)) break;
                case 2:
                  var M2 = w2 ? n2 : n2.slice().reverse(), I2 = w2 ? P2 : P2.slice().reverse(), T2 = (k2 = I2, M2.map(function(t4, e3) {
                    return [t4, k2[e3]];
                  }).filter(function(t4) {
                    return t4[1] !== null;
                  })), z2 = T2.length > 1 ? Xt(T2) : T2, X2 = [];
                  C2 && (L2 ? v2 = T2 : X2 = v2.reverse());
                  var E2 = 0, Y2 = 0;
                  if (function(t4, e3) {
                    for (var i3 = function(t5) {
                      var e4 = [], i4 = 0;
                      return t5.forEach(function(t6) {
                        t6 !== null ? i4++ : i4 > 0 && (e4.push(i4), i4 = 0);
                      }), i4 > 0 && e4.push(i4), e4;
                    }(t4), a3 = [], s3 = 0, r3 = 0; s3 < i3.length; r3 += i3[s3++]) a3[s3] = Et(e3, r3, r3 + i3[s3]);
                    return a3;
                  }(I2, z2).forEach(function(t4) {
                    E2++;
                    var e3 = function(t5) {
                      for (var e4 = "", i4 = 0; i4 < t5.length; i4++) {
                        var a4 = t5[i4], s3 = a4.length;
                        s3 > 4 ? (e4 += "C".concat(a4[0], ", ").concat(a4[1]), e4 += ", ".concat(a4[2], ", ").concat(a4[3]), e4 += ", ".concat(a4[4], ", ").concat(a4[5])) : s3 > 2 && (e4 += "S".concat(a4[0], ", ").concat(a4[1]), e4 += ", ".concat(a4[2], ", ").concat(a4[3]));
                      }
                      return e4;
                    }(t4), i3 = Y2, a3 = (Y2 += t4.length) - 1;
                    L2 ? f2 = A2.move(T2[i3][0], T2[i3][1]) + e3 : C2 ? f2 = A2.move(X2[i3][0], X2[i3][1]) + A2.line(T2[i3][0], T2[i3][1]) + e3 + A2.line(X2[a3][0], X2[a3][1]) : (f2 = A2.move(T2[i3][0], T2[i3][1]) + e3, x2 = f2 + A2.line(T2[a3][0], S2) + A2.line(T2[i3][0], S2) + "z", v2.push(x2)), b2.push(f2);
                  }), C2 && E2 > 1 && !L2) {
                    var F2 = b2.slice(E2).reverse();
                    b2.splice(E2), F2.forEach(function(t4) {
                      return b2.push(t4);
                    });
                  }
                  u2 = 0;
              }
              break;
            case "smooth":
              var R2 = 0.35 * (r2 - d2);
              if (i2[a2][s2] === null) u2 = 0;
              else switch (u2) {
                case 0:
                  if (p2 = d2, f2 = L2 ? A2.move(d2, c2[s2]) + A2.line(d2, g2) : A2.move(d2, g2), x2 = A2.move(d2, g2), u2 = 1, s2 < i2[a2].length - 2) {
                    var H2 = A2.curve(d2 + R2, g2, r2 - R2, o2, r2, o2);
                    f2 += H2, x2 += H2;
                    break;
                  }
                case 1:
                  if (i2[a2][s2 + 1] === null) f2 += L2 ? A2.line(d2, h2) : A2.move(d2, g2), x2 += A2.line(d2, S2) + A2.line(p2, S2) + "z", b2.push(f2), v2.push(x2), u2 = -1;
                  else {
                    var D2 = A2.curve(d2 + R2, g2, r2 - R2, o2, r2, o2);
                    f2 += D2, x2 += D2, s2 >= i2[a2].length - 2 && (L2 && (f2 += A2.curve(r2, o2, r2, o2, r2, h2) + A2.move(r2, h2)), x2 += A2.curve(r2, o2, r2, o2, r2, S2) + A2.line(p2, S2) + "z", b2.push(f2), v2.push(x2), u2 = -1);
                  }
              }
              d2 = r2, g2 = o2;
              break;
            default:
              var O2 = function(t4, e3, i3) {
                var a3 = [];
                switch (t4) {
                  case "stepline":
                    a3 = A2.line(e3, null, "H") + A2.line(null, i3, "V");
                    break;
                  case "linestep":
                    a3 = A2.line(null, i3, "V") + A2.line(e3, null, "H");
                    break;
                  case "straight":
                    a3 = A2.line(e3, i3);
                }
                return a3;
              };
              if (i2[a2][s2] === null) u2 = 0;
              else switch (u2) {
                case 0:
                  if (p2 = d2, f2 = L2 ? A2.move(d2, c2[s2]) + A2.line(d2, g2) : A2.move(d2, g2), x2 = A2.move(d2, g2), u2 = 1, s2 < i2[a2].length - 2) {
                    var N2 = O2(y2, r2, o2);
                    f2 += N2, x2 += N2;
                    break;
                  }
                case 1:
                  if (i2[a2][s2 + 1] === null) f2 += L2 ? A2.line(d2, h2) : A2.move(d2, g2), x2 += A2.line(d2, S2) + A2.line(p2, S2) + "z", b2.push(f2), v2.push(x2), u2 = -1;
                  else {
                    var W2 = O2(y2, r2, o2);
                    f2 += W2, x2 += W2, s2 >= i2[a2].length - 2 && (L2 && (f2 += A2.line(r2, h2)), x2 += A2.line(r2, S2) + A2.line(p2, S2) + "z", b2.push(f2), v2.push(x2), u2 = -1);
                  }
              }
              d2 = r2, g2 = o2;
          }
          return { linePaths: b2, areaPaths: v2, pX: d2, pY: g2, pathState: u2, segmentStartX: p2, linePath: f2, areaPath: x2 };
        } }, { key: "handleNullDataPoints", value: function(t3, e2, i2, a2, s2) {
          var r2 = this.w;
          if (t3[i2][a2] === null && r2.config.markers.showNullDataPoints || t3[i2].length === 1) {
            var o2 = this.strokeWidth - r2.config.markers.strokeWidth / 2;
            o2 > 0 || (o2 = 0);
            var n2 = this.markers.plotChartMarkers(e2, s2, a2 + 1, o2, !0);
            n2 !== null && this.elPointsMain.add(n2);
          }
        } }]), t2;
      }();
      window.TreemapSquared = {}, window.TreemapSquared.generate = /* @__PURE__ */ function() {
        function t2(e3, i3, a3, s3) {
          this.xoffset = e3, this.yoffset = i3, this.height = s3, this.width = a3, this.shortestEdge = function() {
            return Math.min(this.height, this.width);
          }, this.getCoordinates = function(t3) {
            var e4, i4 = [], a4 = this.xoffset, s4 = this.yoffset, o3 = r2(t3) / this.height, n2 = r2(t3) / this.width;
            if (this.width >= this.height) for (e4 = 0; e4 < t3.length; e4++) i4.push([a4, s4, a4 + o3, s4 + t3[e4] / o3]), s4 += t3[e4] / o3;
            else for (e4 = 0; e4 < t3.length; e4++) i4.push([a4, s4, a4 + t3[e4] / n2, s4 + n2]), a4 += t3[e4] / n2;
            return i4;
          }, this.cutArea = function(e4) {
            var i4;
            if (this.width >= this.height) {
              var a4 = e4 / this.height, s4 = this.width - a4;
              i4 = new t2(this.xoffset + a4, this.yoffset, s4, this.height);
            } else {
              var r3 = e4 / this.width, o3 = this.height - r3;
              i4 = new t2(this.xoffset, this.yoffset + r3, this.width, o3);
            }
            return i4;
          };
        }
        function e2(e3, a3, s3, o3, n2) {
          o3 = o3 === void 0 ? 0 : o3, n2 = n2 === void 0 ? 0 : n2;
          var l2 = i2(function(t3, e4) {
            var i3, a4 = [], s4 = e4 / r2(t3);
            for (i3 = 0; i3 < t3.length; i3++) a4[i3] = t3[i3] * s4;
            return a4;
          }(e3, a3 * s3), [], new t2(o3, n2, a3, s3), []);
          return function(t3) {
            var e4, i3, a4 = [];
            for (e4 = 0; e4 < t3.length; e4++) for (i3 = 0; i3 < t3[e4].length; i3++) a4.push(t3[e4][i3]);
            return a4;
          }(l2);
        }
        function i2(t3, e3, s3, o3) {
          var n2, l2, h2;
          if (t3.length !== 0) return n2 = s3.shortestEdge(), function(t4, e4, i3) {
            var s4;
            if (t4.length === 0) return !0;
            (s4 = t4.slice()).push(e4);
            var r3 = a2(t4, i3), o4 = a2(s4, i3);
            return r3 >= o4;
          }(e3, l2 = t3[0], n2) ? (e3.push(l2), i2(t3.slice(1), e3, s3, o3)) : (h2 = s3.cutArea(r2(e3), o3), o3.push(s3.getCoordinates(e3)), i2(t3, [], h2, o3)), o3;
          o3.push(s3.getCoordinates(e3));
        }
        function a2(t3, e3) {
          var i3 = Math.min.apply(Math, t3), a3 = Math.max.apply(Math, t3), s3 = r2(t3);
          return Math.max(Math.pow(e3, 2) * a3 / Math.pow(s3, 2), Math.pow(s3, 2) / (Math.pow(e3, 2) * i3));
        }
        function s2(t3) {
          return t3 && t3.constructor === Array;
        }
        function r2(t3) {
          var e3, i3 = 0;
          for (e3 = 0; e3 < t3.length; e3++) i3 += t3[e3];
          return i3;
        }
        function o2(t3) {
          var e3, i3 = 0;
          if (s2(t3[0])) for (e3 = 0; e3 < t3.length; e3++) i3 += o2(t3[e3]);
          else i3 = r2(t3);
          return i3;
        }
        return function t3(i3, a3, r3, n2, l2) {
          n2 = n2 === void 0 ? 0 : n2, l2 = l2 === void 0 ? 0 : l2;
          var h2, c2, d2 = [], g2 = [];
          if (s2(i3[0])) {
            for (c2 = 0; c2 < i3.length; c2++) d2[c2] = o2(i3[c2]);
            for (h2 = e2(d2, a3, r3, n2, l2), c2 = 0; c2 < i3.length; c2++) g2.push(t3(i3[c2], h2[c2][2] - h2[c2][0], h2[c2][3] - h2[c2][1], h2[c2][0], h2[c2][1]));
          } else g2 = e2(i3, a3, r3, n2, l2);
          return g2;
        };
      }();
      var Rt, Ht, Dt = function() {
        function t2(e2, i2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new At(e2), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
        }
        return r(t2, [{ key: "draw", value: function(t3) {
          var e2 = this, i2 = this.w, a2 = new m(this.ctx), s2 = new H(this.ctx), r2 = a2.group({ class: "apexcharts-treemap" });
          if (i2.globals.noData) return r2;
          var o2 = [];
          return t3.forEach(function(t4) {
            var e3 = t4.map(function(t5) {
              return Math.abs(t5);
            });
            o2.push(e3);
          }), this.negRange = this.helpers.checkColorRange(), i2.config.series.forEach(function(t4, i3) {
            t4.data.forEach(function(t5) {
              Array.isArray(e2.labels[i3]) || (e2.labels[i3] = []), e2.labels[i3].push(t5.x);
            });
          }), window.TreemapSquared.generate(o2, i2.globals.gridWidth, i2.globals.gridHeight).forEach(function(o3, n2) {
            var l2 = a2.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: x.escapeString(i2.globals.seriesNames[n2]), rel: n2 + 1, "data:realIndex": n2 });
            if (i2.config.chart.dropShadow.enabled) {
              var h2 = i2.config.chart.dropShadow;
              new v(e2.ctx).dropShadow(r2, h2, n2);
            }
            var c2 = a2.group({ class: "apexcharts-data-labels" });
            o3.forEach(function(r3, o4) {
              var h3 = r3[0], c3 = r3[1], d2 = r3[2], g2 = r3[3], u2 = a2.drawRect(h3, c3, d2 - h3, g2 - c3, i2.config.plotOptions.treemap.borderRadius, "#fff", 1, e2.strokeWidth, i2.config.plotOptions.treemap.useFillColorAsStroke ? f2 : i2.globals.stroke.colors[n2]);
              u2.attr({ cx: h3, cy: c3, index: n2, i: n2, j: o4, width: d2 - h3, height: g2 - c3 });
              var p2 = e2.helpers.getShadeColor(i2.config.chart.type, n2, o4, e2.negRange), f2 = p2.color;
              i2.config.series[n2].data[o4] !== void 0 && i2.config.series[n2].data[o4].fillColor && (f2 = i2.config.series[n2].data[o4].fillColor);
              var x2 = s2.fillPath({ color: f2, seriesNumber: n2, dataPointIndex: o4 });
              u2.node.classList.add("apexcharts-treemap-rect"), u2.attr({ fill: x2 }), e2.helpers.addListeners(u2);
              var b2 = { x: h3 + (d2 - h3) / 2, y: c3 + (g2 - c3) / 2, width: 0, height: 0 }, v2 = { x: h3, y: c3, width: d2 - h3, height: g2 - c3 };
              if (i2.config.chart.animations.enabled && !i2.globals.dataChanged) {
                var m2 = 1;
                i2.globals.resized || (m2 = i2.config.chart.animations.speed), e2.animateTreemap(u2, b2, v2, m2);
              }
              if (i2.globals.dataChanged) {
                var y2 = 1;
                e2.dynamicAnim.enabled && i2.globals.shouldAnimate && (y2 = e2.dynamicAnim.speed, i2.globals.previousPaths[n2] && i2.globals.previousPaths[n2][o4] && i2.globals.previousPaths[n2][o4].rect && (b2 = i2.globals.previousPaths[n2][o4].rect), e2.animateTreemap(u2, b2, v2, y2));
              }
              var w2 = e2.getFontSize(r3), k2 = i2.config.dataLabels.formatter(e2.labels[n2][o4], { value: i2.globals.series[n2][o4], seriesIndex: n2, dataPointIndex: o4, w: i2 });
              i2.config.plotOptions.treemap.dataLabels.format === "truncate" && (w2 = parseInt(i2.config.dataLabels.style.fontSize, 10), k2 = e2.truncateLabels(k2, w2, h3, c3, d2, g2));
              var A2 = e2.helpers.calculateDataLabels({ text: k2, x: (h3 + d2) / 2, y: (c3 + g2) / 2 + e2.strokeWidth / 2 + w2 / 3, i: n2, j: o4, colorProps: p2, fontSize: w2, series: t3 });
              i2.config.dataLabels.enabled && A2 && e2.rotateToFitLabel(A2, w2, k2, h3, c3, d2, g2), l2.add(u2), A2 !== null && l2.add(A2);
            }), l2.add(c2), r2.add(l2);
          }), r2;
        } }, { key: "getFontSize", value: function(t3) {
          var e2 = this.w, i2, a2, s2, r2, o2 = function t4(e3) {
            var i3, a3 = 0;
            if (Array.isArray(e3[0])) for (i3 = 0; i3 < e3.length; i3++) a3 += t4(e3[i3]);
            else for (i3 = 0; i3 < e3.length; i3++) a3 += e3[i3].length;
            return a3;
          }(this.labels) / function t4(e3) {
            var i3, a3 = 0;
            if (Array.isArray(e3[0])) for (i3 = 0; i3 < e3.length; i3++) a3 += t4(e3[i3]);
            else for (i3 = 0; i3 < e3.length; i3++) a3 += 1;
            return a3;
          }(this.labels);
          return i2 = t3[2] - t3[0], a2 = t3[3] - t3[1], s2 = i2 * a2, r2 = Math.pow(s2, 0.5), Math.min(r2 / o2, parseInt(e2.config.dataLabels.style.fontSize, 10));
        } }, { key: "rotateToFitLabel", value: function(t3, e2, i2, a2, s2, r2, o2) {
          var n2 = new m(this.ctx), l2 = n2.getTextRects(i2, e2);
          if (l2.width + this.w.config.stroke.width + 5 > r2 - a2 && l2.width <= o2 - s2) {
            var h2 = n2.rotateAroundCenter(t3.node);
            t3.node.setAttribute("transform", "rotate(-90 ".concat(h2.x, " ").concat(h2.y, ") translate(").concat(l2.height / 3, ")"));
          }
        } }, { key: "truncateLabels", value: function(t3, e2, i2, a2, s2, r2) {
          var o2 = new m(this.ctx), n2 = o2.getTextRects(t3, e2).width + this.w.config.stroke.width + 5 > s2 - i2 && r2 - a2 > s2 - i2 ? r2 - a2 : s2 - i2, l2 = o2.getTextBasedOnMaxWidth({ text: t3, maxWidth: n2, fontSize: e2 });
          return t3.length !== l2.length && n2 / e2 < 5 ? "" : l2;
        } }, { key: "animateTreemap", value: function(t3, e2, i2, a2) {
          var s2 = new b(this.ctx);
          s2.animateRect(t3, { x: e2.x, y: e2.y, width: e2.width, height: e2.height }, { x: i2.x, y: i2.y, width: i2.width, height: i2.height }, a2, function() {
            s2.animationCompleted(t3);
          });
        } }]), t2;
      }(), Ot = 86400, Nt = 10 / Ot, Wt = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
        }
        return r(t2, [{ key: "calculateTimeScaleTicks", value: function(t3, i2) {
          var a2 = this, s2 = this.w;
          if (s2.globals.allSeriesCollapsed) return s2.globals.labels = [], s2.globals.timescaleLabels = [], [];
          var r2 = new A(this.ctx), o2 = (i2 - t3) / 864e5;
          this.determineInterval(o2), s2.globals.disableZoomIn = !1, s2.globals.disableZoomOut = !1, o2 < Nt ? s2.globals.disableZoomIn = !0 : o2 > 5e4 && (s2.globals.disableZoomOut = !0);
          var n2 = r2.getTimeUnitsfromTimestamp(t3, i2, this.utc), l2 = s2.globals.gridWidth / o2, h2 = l2 / 24, c2 = h2 / 60, d2 = c2 / 60, g2 = Math.floor(24 * o2), u2 = Math.floor(1440 * o2), p2 = Math.floor(o2 * Ot), f2 = Math.floor(o2), x2 = Math.floor(o2 / 30), b2 = Math.floor(o2 / 365), v2 = { minMillisecond: n2.minMillisecond, minSecond: n2.minSecond, minMinute: n2.minMinute, minHour: n2.minHour, minDate: n2.minDate, minMonth: n2.minMonth, minYear: n2.minYear }, m2 = { firstVal: v2, currentMillisecond: v2.minMillisecond, currentSecond: v2.minSecond, currentMinute: v2.minMinute, currentHour: v2.minHour, currentMonthDate: v2.minDate, currentDate: v2.minDate, currentMonth: v2.minMonth, currentYear: v2.minYear, daysWidthOnXAxis: l2, hoursWidthOnXAxis: h2, minutesWidthOnXAxis: c2, secondsWidthOnXAxis: d2, numberOfSeconds: p2, numberOfMinutes: u2, numberOfHours: g2, numberOfDays: f2, numberOfMonths: x2, numberOfYears: b2 };
          switch (this.tickInterval) {
            case "years":
              this.generateYearScale(m2);
              break;
            case "months":
            case "half_year":
              this.generateMonthScale(m2);
              break;
            case "months_days":
            case "months_fortnight":
            case "days":
            case "week_days":
              this.generateDayScale(m2);
              break;
            case "hours":
              this.generateHourScale(m2);
              break;
            case "minutes_fives":
            case "minutes":
              this.generateMinuteScale(m2);
              break;
            case "seconds_tens":
            case "seconds_fives":
            case "seconds":
              this.generateSecondScale(m2);
          }
          var y2 = this.timeScaleArray.map(function(t4) {
            var i3 = { position: t4.position, unit: t4.unit, year: t4.year, day: t4.day ? t4.day : 1, hour: t4.hour ? t4.hour : 0, month: t4.month + 1 };
            return t4.unit === "month" ? e(e({}, i3), {}, { day: 1, value: t4.value + 1 }) : t4.unit === "day" || t4.unit === "hour" ? e(e({}, i3), {}, { value: t4.value }) : t4.unit === "minute" ? e(e({}, i3), {}, { value: t4.value, minute: t4.value }) : t4.unit === "second" ? e(e({}, i3), {}, { value: t4.value, minute: t4.minute, second: t4.second }) : t4;
          });
          return y2.filter(function(t4) {
            var e2 = 1, i3 = Math.ceil(s2.globals.gridWidth / 120), r3 = t4.value;
            s2.config.xaxis.tickAmount !== void 0 && (i3 = s2.config.xaxis.tickAmount), y2.length > i3 && (e2 = Math.floor(y2.length / i3));
            var o3 = !1, n3 = !1;
            switch (a2.tickInterval) {
              case "years":
                t4.unit === "year" && (o3 = !0);
                break;
              case "half_year":
                e2 = 7, t4.unit === "year" && (o3 = !0);
                break;
              case "months":
                e2 = 1, t4.unit === "year" && (o3 = !0);
                break;
              case "months_fortnight":
                e2 = 15, t4.unit !== "year" && t4.unit !== "month" || (o3 = !0), r3 === 30 && (n3 = !0);
                break;
              case "months_days":
                e2 = 10, t4.unit === "month" && (o3 = !0), r3 === 30 && (n3 = !0);
                break;
              case "week_days":
                e2 = 8, t4.unit === "month" && (o3 = !0);
                break;
              case "days":
                e2 = 1, t4.unit === "month" && (o3 = !0);
                break;
              case "hours":
                t4.unit === "day" && (o3 = !0);
                break;
              case "minutes_fives":
              case "seconds_fives":
                r3 % 5 != 0 && (n3 = !0);
                break;
              case "seconds_tens":
                r3 % 10 != 0 && (n3 = !0);
            }
            if (a2.tickInterval === "hours" || a2.tickInterval === "minutes_fives" || a2.tickInterval === "seconds_tens" || a2.tickInterval === "seconds_fives") {
              if (!n3) return !0;
            } else if ((r3 % e2 == 0 || o3) && !n3) return !0;
          });
        } }, { key: "recalcDimensionsBasedOnFormat", value: function(t3, e2) {
          var i2 = this.w, a2 = this.formatDates(t3), s2 = this.removeOverlappingTS(a2);
          i2.globals.timescaleLabels = s2.slice(), new ot(this.ctx).plotCoords();
        } }, { key: "determineInterval", value: function(t3) {
          var e2 = 24 * t3, i2 = 60 * e2;
          switch (!0) {
            case t3 / 365 > 5:
              this.tickInterval = "years";
              break;
            case t3 > 800:
              this.tickInterval = "half_year";
              break;
            case t3 > 180:
              this.tickInterval = "months";
              break;
            case t3 > 90:
              this.tickInterval = "months_fortnight";
              break;
            case t3 > 60:
              this.tickInterval = "months_days";
              break;
            case t3 > 30:
              this.tickInterval = "week_days";
              break;
            case t3 > 2:
              this.tickInterval = "days";
              break;
            case e2 > 2.4:
              this.tickInterval = "hours";
              break;
            case i2 > 15:
              this.tickInterval = "minutes_fives";
              break;
            case i2 > 5:
              this.tickInterval = "minutes";
              break;
            case i2 > 1:
              this.tickInterval = "seconds_tens";
              break;
            case 60 * i2 > 20:
              this.tickInterval = "seconds_fives";
              break;
            default:
              this.tickInterval = "seconds";
          }
        } }, { key: "generateYearScale", value: function(t3) {
          var e2 = t3.firstVal, i2 = t3.currentMonth, a2 = t3.currentYear, s2 = t3.daysWidthOnXAxis, r2 = t3.numberOfYears, o2 = e2.minYear, n2 = 0, l2 = new A(this.ctx), h2 = "year";
          if (e2.minDate > 1 || e2.minMonth > 0) {
            var c2 = l2.determineRemainingDaysOfYear(e2.minYear, e2.minMonth, e2.minDate);
            n2 = (l2.determineDaysOfYear(e2.minYear) - c2 + 1) * s2, o2 = e2.minYear + 1, this.timeScaleArray.push({ position: n2, value: o2, unit: h2, year: o2, month: x.monthMod(i2 + 1) });
          } else e2.minDate === 1 && e2.minMonth === 0 && this.timeScaleArray.push({ position: n2, value: o2, unit: h2, year: a2, month: x.monthMod(i2 + 1) });
          for (var d2 = o2, g2 = n2, u2 = 0; u2 < r2; u2++) d2++, g2 = l2.determineDaysOfYear(d2 - 1) * s2 + g2, this.timeScaleArray.push({ position: g2, value: d2, unit: h2, year: d2, month: 1 });
        } }, { key: "generateMonthScale", value: function(t3) {
          var e2 = t3.firstVal, i2 = t3.currentMonthDate, a2 = t3.currentMonth, s2 = t3.currentYear, r2 = t3.daysWidthOnXAxis, o2 = t3.numberOfMonths, n2 = a2, l2 = 0, h2 = new A(this.ctx), c2 = "month", d2 = 0;
          if (e2.minDate > 1) {
            l2 = (h2.determineDaysOfMonths(a2 + 1, e2.minYear) - i2 + 1) * r2, n2 = x.monthMod(a2 + 1);
            var g2 = s2 + d2, u2 = x.monthMod(n2), p2 = n2;
            n2 === 0 && (c2 = "year", p2 = g2, u2 = 1, g2 += d2 += 1), this.timeScaleArray.push({ position: l2, value: p2, unit: c2, year: g2, month: u2 });
          } else this.timeScaleArray.push({ position: l2, value: n2, unit: c2, year: s2, month: x.monthMod(a2) });
          for (var f2 = n2 + 1, b2 = l2, v2 = 0, m2 = 1; v2 < o2; v2++, m2++) {
            (f2 = x.monthMod(f2)) === 0 ? (c2 = "year", d2 += 1) : c2 = "month";
            var y2 = this._getYear(s2, f2, d2);
            b2 = h2.determineDaysOfMonths(f2, y2) * r2 + b2;
            var w2 = f2 === 0 ? y2 : f2;
            this.timeScaleArray.push({ position: b2, value: w2, unit: c2, year: y2, month: f2 === 0 ? 1 : f2 }), f2++;
          }
        } }, { key: "generateDayScale", value: function(t3) {
          var e2 = t3.firstVal, i2 = t3.currentMonth, a2 = t3.currentYear, s2 = t3.hoursWidthOnXAxis, r2 = t3.numberOfDays, o2 = new A(this.ctx), n2 = "day", l2 = e2.minDate + 1, h2 = l2, c2 = function(t4, e3, i3) {
            return t4 > o2.determineDaysOfMonths(e3 + 1, i3) && (h2 = 1, n2 = "month", g2 = e3 += 1), e3;
          }, d2 = (24 - e2.minHour) * s2, g2 = l2, u2 = c2(h2, i2, a2);
          e2.minHour === 0 && e2.minDate === 1 ? (d2 = 0, g2 = x.monthMod(e2.minMonth), n2 = "month", h2 = e2.minDate) : e2.minDate !== 1 && e2.minHour === 0 && e2.minMinute === 0 && (d2 = 0, l2 = e2.minDate, g2 = l2, u2 = c2(h2 = l2, i2, a2)), this.timeScaleArray.push({ position: d2, value: g2, unit: n2, year: this._getYear(a2, u2, 0), month: x.monthMod(u2), day: h2 });
          for (var p2 = d2, f2 = 0; f2 < r2; f2++) {
            n2 = "day", u2 = c2(h2 += 1, u2, this._getYear(a2, u2, 0));
            var b2 = this._getYear(a2, u2, 0);
            p2 = 24 * s2 + p2;
            var v2 = h2 === 1 ? x.monthMod(u2) : h2;
            this.timeScaleArray.push({ position: p2, value: v2, unit: n2, year: b2, month: x.monthMod(u2), day: v2 });
          }
        } }, { key: "generateHourScale", value: function(t3) {
          var e2 = t3.firstVal, i2 = t3.currentDate, a2 = t3.currentMonth, s2 = t3.currentYear, r2 = t3.minutesWidthOnXAxis, o2 = t3.numberOfHours, n2 = new A(this.ctx), l2 = "hour", h2 = function(t4, e3) {
            return t4 > n2.determineDaysOfMonths(e3 + 1, s2) && (f2 = 1, e3 += 1), { month: e3, date: f2 };
          }, c2 = function(t4, e3) {
            return t4 > n2.determineDaysOfMonths(e3 + 1, s2) ? e3 += 1 : e3;
          }, d2 = 60 - (e2.minMinute + e2.minSecond / 60), g2 = d2 * r2, u2 = e2.minHour + 1, p2 = u2;
          d2 === 60 && (g2 = 0, p2 = u2 = e2.minHour);
          var f2 = i2;
          p2 >= 24 && (p2 = 0, f2 += 1, l2 = "day");
          var b2 = h2(f2, a2).month;
          b2 = c2(f2, b2), this.timeScaleArray.push({ position: g2, value: u2, unit: l2, day: f2, hour: p2, year: s2, month: x.monthMod(b2) }), p2++;
          for (var v2 = g2, m2 = 0; m2 < o2; m2++) {
            l2 = "hour", p2 >= 24 && (p2 = 0, l2 = "day", b2 = h2(f2 += 1, b2).month, b2 = c2(f2, b2));
            var y2 = this._getYear(s2, b2, 0);
            v2 = 60 * r2 + v2;
            var w2 = p2 === 0 ? f2 : p2;
            this.timeScaleArray.push({ position: v2, value: w2, unit: l2, hour: p2, day: f2, year: y2, month: x.monthMod(b2) }), p2++;
          }
        } }, { key: "generateMinuteScale", value: function(t3) {
          for (var e2 = t3.currentMillisecond, i2 = t3.currentSecond, a2 = t3.currentMinute, s2 = t3.currentHour, r2 = t3.currentDate, o2 = t3.currentMonth, n2 = t3.currentYear, l2 = t3.minutesWidthOnXAxis, h2 = t3.secondsWidthOnXAxis, c2 = t3.numberOfMinutes, d2 = a2 + 1, g2 = r2, u2 = o2, p2 = n2, f2 = s2, b2 = (60 - i2 - e2 / 1e3) * h2, v2 = 0; v2 < c2; v2++) d2 >= 60 && (d2 = 0, (f2 += 1) === 24 && (f2 = 0)), this.timeScaleArray.push({ position: b2, value: d2, unit: "minute", hour: f2, minute: d2, day: g2, year: this._getYear(p2, u2, 0), month: x.monthMod(u2) }), b2 += l2, d2++;
        } }, { key: "generateSecondScale", value: function(t3) {
          for (var e2 = t3.currentMillisecond, i2 = t3.currentSecond, a2 = t3.currentMinute, s2 = t3.currentHour, r2 = t3.currentDate, o2 = t3.currentMonth, n2 = t3.currentYear, l2 = t3.secondsWidthOnXAxis, h2 = t3.numberOfSeconds, c2 = i2 + 1, d2 = a2, g2 = r2, u2 = o2, p2 = n2, f2 = s2, b2 = (1e3 - e2) / 1e3 * l2, v2 = 0; v2 < h2; v2++) c2 >= 60 && (c2 = 0, ++d2 >= 60 && (d2 = 0, ++f2 === 24 && (f2 = 0))), this.timeScaleArray.push({ position: b2, value: c2, unit: "second", hour: f2, minute: d2, second: c2, day: g2, year: this._getYear(p2, u2, 0), month: x.monthMod(u2) }), b2 += l2, c2++;
        } }, { key: "createRawDateString", value: function(t3, e2) {
          var i2 = t3.year;
          return t3.month === 0 && (t3.month = 1), i2 += "-" + ("0" + t3.month.toString()).slice(-2), t3.unit === "day" ? i2 += t3.unit === "day" ? "-" + ("0" + e2).slice(-2) : "-01" : i2 += "-" + ("0" + (t3.day ? t3.day : "1")).slice(-2), t3.unit === "hour" ? i2 += t3.unit === "hour" ? "T" + ("0" + e2).slice(-2) : "T00" : i2 += "T" + ("0" + (t3.hour ? t3.hour : "0")).slice(-2), t3.unit === "minute" ? i2 += ":" + ("0" + e2).slice(-2) : i2 += ":" + (t3.minute ? ("0" + t3.minute).slice(-2) : "00"), t3.unit === "second" ? i2 += ":" + ("0" + e2).slice(-2) : i2 += ":00", this.utc && (i2 += ".000Z"), i2;
        } }, { key: "formatDates", value: function(t3) {
          var e2 = this, i2 = this.w;
          return t3.map(function(t4) {
            var a2 = t4.value.toString(), s2 = new A(e2.ctx), r2 = e2.createRawDateString(t4, a2), o2 = s2.getDate(s2.parseDate(r2));
            if (e2.utc || (o2 = s2.getDate(s2.parseDateWithTimezone(r2))), i2.config.xaxis.labels.format === void 0) {
              var n2 = "dd MMM", l2 = i2.config.xaxis.labels.datetimeFormatter;
              t4.unit === "year" && (n2 = l2.year), t4.unit === "month" && (n2 = l2.month), t4.unit === "day" && (n2 = l2.day), t4.unit === "hour" && (n2 = l2.hour), t4.unit === "minute" && (n2 = l2.minute), t4.unit === "second" && (n2 = l2.second), a2 = s2.formatDate(o2, n2);
            } else a2 = s2.formatDate(o2, i2.config.xaxis.labels.format);
            return { dateString: r2, position: t4.position, value: a2, unit: t4.unit, year: t4.year, month: t4.month };
          });
        } }, { key: "removeOverlappingTS", value: function(t3) {
          var e2, i2 = this, a2 = new m(this.ctx), s2 = !1;
          t3.length > 0 && t3[0].value && t3.every(function(e3) {
            return e3.value.length === t3[0].value.length;
          }) && (s2 = !0, e2 = a2.getTextRects(t3[0].value).width);
          var r2 = 0, o2 = t3.map(function(o3, n2) {
            if (n2 > 0 && i2.w.config.xaxis.labels.hideOverlappingLabels) {
              var l2 = s2 ? e2 : a2.getTextRects(t3[r2].value).width, h2 = t3[r2].position;
              return o3.position > h2 + l2 + 10 ? (r2 = n2, o3) : null;
            }
            return o3;
          });
          return o2 = o2.filter(function(t4) {
            return t4 !== null;
          });
        } }, { key: "_getYear", value: function(t3, e2, i2) {
          return t3 + Math.floor(e2 / 12) + i2;
        } }]), t2;
      }(), Bt = function() {
        function t2(e2, i2) {
          a(this, t2), this.ctx = i2, this.w = i2.w, this.el = e2;
        }
        return r(t2, [{ key: "setupElements", value: function() {
          var t3 = this.w.globals, e2 = this.w.config, i2 = e2.chart.type;
          t3.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].indexOf(i2) > -1, t3.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].indexOf(i2) > -1, t3.isBarHorizontal = (e2.chart.type === "bar" || e2.chart.type === "rangeBar" || e2.chart.type === "boxPlot") && e2.plotOptions.bar.horizontal, t3.chartClass = ".apexcharts" + t3.chartID, t3.dom.baseEl = this.el, t3.dom.elWrap = document.createElement("div"), m.setAttrs(t3.dom.elWrap, { id: t3.chartClass.substring(1), class: "apexcharts-canvas " + t3.chartClass.substring(1) }), this.el.appendChild(t3.dom.elWrap), t3.dom.Paper = new window.SVG.Doc(t3.dom.elWrap), t3.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(e2.chart.offsetX, ", ").concat(e2.chart.offsetY, ")") }), t3.dom.Paper.node.style.background = e2.theme.mode !== "dark" || e2.chart.background ? e2.theme.mode !== "light" || e2.chart.background ? e2.chart.background : "#fff" : "#424242", this.setSVGDimensions(), t3.dom.elLegendForeign = document.createElementNS(t3.SVGNS, "foreignObject"), m.setAttrs(t3.dom.elLegendForeign, { x: 0, y: 0, width: t3.svgWidth, height: t3.svgHeight }), t3.dom.elLegendWrap = document.createElement("div"), t3.dom.elLegendWrap.classList.add("apexcharts-legend"), t3.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), t3.dom.elLegendForeign.appendChild(t3.dom.elLegendWrap), t3.dom.Paper.node.appendChild(t3.dom.elLegendForeign), t3.dom.elGraphical = t3.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), t3.dom.elDefs = t3.dom.Paper.defs(), t3.dom.Paper.add(t3.dom.elGraphical), t3.dom.elGraphical.add(t3.dom.elDefs);
        } }, { key: "plotChartType", value: function(t3, e2) {
          var i2 = this.w, a2 = i2.config, s2 = i2.globals, r2 = { series: [], i: [] }, o2 = { series: [], i: [] }, n2 = { series: [], i: [] }, l2 = { series: [], i: [] }, h2 = { series: [], i: [] }, c2 = { series: [], i: [] }, d2 = { series: [], i: [] }, g2 = { series: [], i: [] }, p2 = { series: [], seriesRangeEnd: [], i: [] }, f2 = a2.chart.type !== void 0 ? a2.chart.type : "line", x2 = null, b2 = 0;
          s2.series.forEach(function(e3, a3) {
            var u2 = t3[a3].type || f2;
            switch (u2) {
              case "column":
              case "bar":
                h2.series.push(e3), h2.i.push(a3), i2.globals.columnSeries = h2;
                break;
              case "area":
                o2.series.push(e3), o2.i.push(a3);
                break;
              case "line":
                r2.series.push(e3), r2.i.push(a3);
                break;
              case "scatter":
                n2.series.push(e3), n2.i.push(a3);
                break;
              case "bubble":
                l2.series.push(e3), l2.i.push(a3);
                break;
              case "candlestick":
                c2.series.push(e3), c2.i.push(a3);
                break;
              case "boxPlot":
                d2.series.push(e3), d2.i.push(a3);
                break;
              case "rangeBar":
                g2.series.push(e3), g2.i.push(a3);
                break;
              case "rangeArea":
                p2.series.push(s2.seriesRangeStart[a3]), p2.seriesRangeEnd.push(s2.seriesRangeEnd[a3]), p2.i.push(a3);
                break;
              case "heatmap":
              case "treemap":
              case "pie":
              case "donut":
              case "polarArea":
              case "radialBar":
              case "radar":
                x2 = u2;
                break;
              default:
                console.warn("You have specified an unrecognized series type (", u2, ").");
            }
            f2 !== u2 && u2 !== "scatter" && b2++;
          }), b2 > 0 && (x2 !== null && console.warn("Chart or series type ", x2, " can not appear with other chart or series types."), h2.series.length > 0 && a2.plotOptions.bar.horizontal && (b2 -= h2.length, h2 = { series: [], i: [] }, i2.globals.columnSeries = { series: [], i: [] }, console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"))), s2.comboCharts || (s2.comboCharts = b2 > 0);
          var v2 = new Ft(this.ctx, e2), m2 = new kt(this.ctx, e2);
          this.ctx.pie = new Lt(this.ctx);
          var w2 = new Mt(this.ctx);
          this.ctx.rangeBar = new It(this.ctx, e2);
          var k2 = new Pt(this.ctx), A2 = [];
          if (s2.comboCharts) {
            var S2, C2, L2 = new y(this.ctx);
            if (o2.series.length > 0 && (S2 = A2).push.apply(S2, u(L2.drawSeriesByGroup(o2, s2.areaGroups, "area", v2))), h2.series.length > 0) if (i2.config.chart.stacked) {
              var P2 = new wt(this.ctx, e2);
              A2.push(P2.draw(h2.series, h2.i));
            } else this.ctx.bar = new yt(this.ctx, e2), A2.push(this.ctx.bar.draw(h2.series, h2.i));
            if (p2.series.length > 0 && A2.push(v2.draw(p2.series, "rangeArea", p2.i, p2.seriesRangeEnd)), r2.series.length > 0 && (C2 = A2).push.apply(C2, u(L2.drawSeriesByGroup(r2, s2.lineGroups, "line", v2))), c2.series.length > 0 && A2.push(m2.draw(c2.series, "candlestick", c2.i)), d2.series.length > 0 && A2.push(m2.draw(d2.series, "boxPlot", d2.i)), g2.series.length > 0 && A2.push(this.ctx.rangeBar.draw(g2.series, g2.i)), n2.series.length > 0) {
              var M2 = new Ft(this.ctx, e2, !0);
              A2.push(M2.draw(n2.series, "scatter", n2.i));
            }
            if (l2.series.length > 0) {
              var I2 = new Ft(this.ctx, e2, !0);
              A2.push(I2.draw(l2.series, "bubble", l2.i));
            }
          } else switch (a2.chart.type) {
            case "line":
              A2 = v2.draw(s2.series, "line");
              break;
            case "area":
              A2 = v2.draw(s2.series, "area");
              break;
            case "bar":
              a2.chart.stacked ? A2 = new wt(this.ctx, e2).draw(s2.series) : (this.ctx.bar = new yt(this.ctx, e2), A2 = this.ctx.bar.draw(s2.series));
              break;
            case "candlestick":
              A2 = new kt(this.ctx, e2).draw(s2.series, "candlestick");
              break;
            case "boxPlot":
              A2 = new kt(this.ctx, e2).draw(s2.series, a2.chart.type);
              break;
            case "rangeBar":
              A2 = this.ctx.rangeBar.draw(s2.series);
              break;
            case "rangeArea":
              A2 = v2.draw(s2.seriesRangeStart, "rangeArea", void 0, s2.seriesRangeEnd);
              break;
            case "heatmap":
              A2 = new St(this.ctx, e2).draw(s2.series);
              break;
            case "treemap":
              A2 = new Dt(this.ctx, e2).draw(s2.series);
              break;
            case "pie":
            case "donut":
            case "polarArea":
              A2 = this.ctx.pie.draw(s2.series);
              break;
            case "radialBar":
              A2 = w2.draw(s2.series);
              break;
            case "radar":
              A2 = k2.draw(s2.series);
              break;
            default:
              A2 = v2.draw(s2.series);
          }
          return A2;
        } }, { key: "setSVGDimensions", value: function() {
          var t3 = this.w.globals, e2 = this.w.config;
          e2.chart.width || (e2.chart.width = "100%"), e2.chart.height || (e2.chart.height = "auto"), t3.svgWidth = e2.chart.width, t3.svgHeight = e2.chart.height;
          var i2 = x.getDimensions(this.el), a2 = e2.chart.width.toString().split(/[0-9]+/g).pop();
          a2 === "%" ? x.isNumber(i2[0]) && (i2[0].width === 0 && (i2 = x.getDimensions(this.el.parentNode)), t3.svgWidth = i2[0] * parseInt(e2.chart.width, 10) / 100) : a2 !== "px" && a2 !== "" || (t3.svgWidth = parseInt(e2.chart.width, 10));
          var s2 = String(e2.chart.height).toString().split(/[0-9]+/g).pop();
          if (t3.svgHeight !== "auto" && t3.svgHeight !== "") if (s2 === "%") {
            var r2 = x.getDimensions(this.el.parentNode);
            t3.svgHeight = r2[1] * parseInt(e2.chart.height, 10) / 100;
          } else t3.svgHeight = parseInt(e2.chart.height, 10);
          else t3.axisCharts ? t3.svgHeight = t3.svgWidth / 1.61 : t3.svgHeight = t3.svgWidth / 1.2;
          if (t3.svgWidth < 0 && (t3.svgWidth = 0), t3.svgHeight < 0 && (t3.svgHeight = 0), m.setAttrs(t3.dom.Paper.node, { width: t3.svgWidth, height: t3.svgHeight }), s2 !== "%") {
            var o2 = e2.chart.sparkline.enabled ? 0 : t3.axisCharts ? e2.chart.parentHeightOffset : 0;
            t3.dom.Paper.node.parentNode.parentNode.style.minHeight = t3.svgHeight + o2 + "px";
          }
          t3.dom.elWrap.style.width = t3.svgWidth + "px", t3.dom.elWrap.style.height = t3.svgHeight + "px";
        } }, { key: "shiftGraphPosition", value: function() {
          var t3 = this.w.globals, e2 = t3.translateY, i2 = { transform: "translate(" + t3.translateX + ", " + e2 + ")" };
          m.setAttrs(t3.dom.elGraphical.node, i2);
        } }, { key: "resizeNonAxisCharts", value: function() {
          var t3 = this.w, e2 = t3.globals, i2 = 0, a2 = t3.config.chart.sparkline.enabled ? 1 : 15;
          a2 += t3.config.grid.padding.bottom, t3.config.legend.position !== "top" && t3.config.legend.position !== "bottom" || !t3.config.legend.show || t3.config.legend.floating || (i2 = new lt(this.ctx).legendHelpers.getLegendDimensions().clwh + 10);
          var s2 = t3.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), r2 = 2.05 * t3.globals.radialSize;
          if (s2 && !t3.config.chart.sparkline.enabled && t3.config.plotOptions.radialBar.startAngle !== 0) {
            var o2 = x.getBoundingClientRect(s2);
            r2 = o2.bottom;
            var n2 = o2.bottom - o2.top;
            r2 = Math.max(2.05 * t3.globals.radialSize, n2);
          }
          var l2 = r2 + e2.translateY + i2 + a2;
          e2.dom.elLegendForeign && e2.dom.elLegendForeign.setAttribute("height", l2), t3.config.chart.height && String(t3.config.chart.height).indexOf("%") > 0 || (e2.dom.elWrap.style.height = l2 + "px", m.setAttrs(e2.dom.Paper.node, { height: l2 }), e2.dom.Paper.node.parentNode.parentNode.style.minHeight = l2 + "px");
        } }, { key: "coreCalculations", value: function() {
          new U(this.ctx).init();
        } }, { key: "resetGlobals", value: function() {
          var t3 = this, e2 = function() {
            return t3.w.config.series.map(function(t4) {
              return [];
            });
          }, i2 = new F(), a2 = this.w.globals;
          i2.initGlobalVars(a2), a2.seriesXvalues = e2(), a2.seriesYvalues = e2();
        } }, { key: "isMultipleY", value: function() {
          if (this.w.config.yaxis.constructor === Array && this.w.config.yaxis.length > 1) return this.w.globals.isMultipleYAxis = !0, !0;
        } }, { key: "xySettings", value: function() {
          var t3 = null, e2 = this.w;
          if (e2.globals.axisCharts) {
            if (e2.config.xaxis.crosshairs.position === "back" && new Q(this.ctx).drawXCrosshairs(), e2.config.yaxis[0].crosshairs.position === "back" && new Q(this.ctx).drawYCrosshairs(), e2.config.xaxis.type === "datetime" && e2.config.xaxis.labels.formatter === void 0) {
              this.ctx.timeScale = new Wt(this.ctx);
              var i2 = [];
              isFinite(e2.globals.minX) && isFinite(e2.globals.maxX) && !e2.globals.isBarHorizontal ? i2 = this.ctx.timeScale.calculateTimeScaleTicks(e2.globals.minX, e2.globals.maxX) : e2.globals.isBarHorizontal && (i2 = this.ctx.timeScale.calculateTimeScaleTicks(e2.globals.minY, e2.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i2);
            }
            t3 = new y(this.ctx).getCalculatedRatios();
          }
          return t3;
        } }, { key: "updateSourceChart", value: function(t3) {
          this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: t3.w.globals.minX, max: t3.w.globals.maxX } } } }, !1, !1);
        } }, { key: "setupBrushHandler", value: function() {
          var t3 = this, e2 = this.w;
          if (e2.config.chart.brush.enabled && typeof e2.config.chart.events.selection != "function") {
            var i2 = Array.isArray(e2.config.chart.brush.targets) ? e2.config.chart.brush.targets : [e2.config.chart.brush.target];
            i2.forEach(function(e3) {
              var i3 = ApexCharts.getChartByID(e3);
              i3.w.globals.brushSource = t3.ctx, typeof i3.w.config.chart.events.zoomed != "function" && (i3.w.config.chart.events.zoomed = function() {
                t3.updateSourceChart(i3);
              }), typeof i3.w.config.chart.events.scrolled != "function" && (i3.w.config.chart.events.scrolled = function() {
                t3.updateSourceChart(i3);
              });
            }), e2.config.chart.events.selection = function(t4, e3) {
              i2.forEach(function(t5) {
                ApexCharts.getChartByID(t5).ctx.updateHelpers._updateOptions({ xaxis: { min: e3.xaxis.min, max: e3.xaxis.max } }, !1, !1, !1, !1);
              });
            };
          }
        } }]), t2;
      }(), Gt = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "_updateOptions", value: function(t3) {
          var e2 = this, a2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], s2 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], r2 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], o2 = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
          return new Promise(function(n2) {
            var l2 = [e2.ctx];
            r2 && (l2 = e2.ctx.getSyncedCharts()), e2.ctx.w.globals.isExecCalled && (l2 = [e2.ctx], e2.ctx.w.globals.isExecCalled = !1), l2.forEach(function(r3, h2) {
              var c2 = r3.w;
              if (c2.globals.shouldAnimate = s2, a2 || (c2.globals.resized = !0, c2.globals.dataChanged = !0, s2 && r3.series.getPreviousPaths()), t3 && i(t3) === "object" && (r3.config = new Y(t3), t3 = y.extendArrayProps(r3.config, t3, c2), r3.w.globals.chartID !== e2.ctx.w.globals.chartID && delete t3.series, c2.config = x.extend(c2.config, t3), o2 && (c2.globals.lastXAxis = t3.xaxis ? x.clone(t3.xaxis) : [], c2.globals.lastYAxis = t3.yaxis ? x.clone(t3.yaxis) : [], c2.globals.initialConfig = x.extend({}, c2.config), c2.globals.initialSeries = x.clone(c2.config.series), t3.series))) {
                for (var d2 = 0; d2 < c2.globals.collapsedSeriesIndices.length; d2++) {
                  var g2 = c2.config.series[c2.globals.collapsedSeriesIndices[d2]];
                  c2.globals.collapsedSeries[d2].data = c2.globals.axisCharts ? g2.data.slice() : g2;
                }
                for (var u2 = 0; u2 < c2.globals.ancillaryCollapsedSeriesIndices.length; u2++) {
                  var p2 = c2.config.series[c2.globals.ancillaryCollapsedSeriesIndices[u2]];
                  c2.globals.ancillaryCollapsedSeries[u2].data = c2.globals.axisCharts ? p2.data.slice() : p2;
                }
                r3.series.emptyCollapsedSeries(c2.config.series);
              }
              return r3.update(t3).then(function() {
                h2 === l2.length - 1 && n2(r3);
              });
            });
          });
        } }, { key: "_updateSeries", value: function(t3, e2) {
          var i2 = this, a2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
          return new Promise(function(s2) {
            var r2, o2 = i2.w;
            return o2.globals.shouldAnimate = e2, o2.globals.dataChanged = !0, e2 && i2.ctx.series.getPreviousPaths(), o2.globals.axisCharts ? ((r2 = t3.map(function(t4, e3) {
              return i2._extendSeries(t4, e3);
            })).length === 0 && (r2 = [{ data: [] }]), o2.config.series = r2) : o2.config.series = t3.slice(), a2 && (o2.globals.initialConfig.series = x.clone(o2.config.series), o2.globals.initialSeries = x.clone(o2.config.series)), i2.ctx.update().then(function() {
              s2(i2.ctx);
            });
          });
        } }, { key: "_extendSeries", value: function(t3, i2) {
          var a2 = this.w, s2 = a2.config.series[i2];
          return e(e({}, a2.config.series[i2]), {}, { name: t3.name ? t3.name : s2?.name, color: t3.color ? t3.color : s2?.color, type: t3.type ? t3.type : s2?.type, group: t3.group ? t3.group : s2?.group, data: t3.data ? t3.data : s2?.data, zIndex: t3.zIndex !== void 0 ? t3.zIndex : i2 });
        } }, { key: "toggleDataPointSelection", value: function(t3, e2) {
          var i2 = this.w, a2 = null, s2 = ".apexcharts-series[data\\:realIndex='".concat(t3, "']");
          return i2.globals.axisCharts ? a2 = i2.globals.dom.Paper.select("".concat(s2, " path[j='").concat(e2, "'], ").concat(s2, " circle[j='").concat(e2, "'], ").concat(s2, " rect[j='").concat(e2, "']")).members[0] : e2 === void 0 && (a2 = i2.globals.dom.Paper.select("".concat(s2, " path[j='").concat(t3, "']")).members[0], i2.config.chart.type !== "pie" && i2.config.chart.type !== "polarArea" && i2.config.chart.type !== "donut" || this.ctx.pie.pieClicked(t3)), a2 ? (new m(this.ctx).pathMouseDown(a2, null), a2.node ? a2.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
        } }, { key: "forceXAxisUpdate", value: function(t3) {
          var e2 = this.w;
          if (["min", "max"].forEach(function(i3) {
            t3.xaxis[i3] !== void 0 && (e2.config.xaxis[i3] = t3.xaxis[i3], e2.globals.lastXAxis[i3] = t3.xaxis[i3]);
          }), t3.xaxis.categories && t3.xaxis.categories.length && (e2.config.xaxis.categories = t3.xaxis.categories), e2.config.xaxis.convertedCatToNumeric) {
            var i2 = new E(t3);
            t3 = i2.convertCatToNumericXaxis(t3, this.ctx);
          }
          return t3;
        } }, { key: "forceYAxisUpdate", value: function(t3) {
          return t3.chart && t3.chart.stacked && t3.chart.stackType === "100%" && (Array.isArray(t3.yaxis) ? t3.yaxis.forEach(function(e2, i2) {
            t3.yaxis[i2].min = 0, t3.yaxis[i2].max = 100;
          }) : (t3.yaxis.min = 0, t3.yaxis.max = 100)), t3;
        } }, { key: "revertDefaultAxisMinMax", value: function(t3) {
          var e2 = this, i2 = this.w, a2 = i2.globals.lastXAxis, s2 = i2.globals.lastYAxis;
          t3 && t3.xaxis && (a2 = t3.xaxis), t3 && t3.yaxis && (s2 = t3.yaxis), i2.config.xaxis.min = a2.min, i2.config.xaxis.max = a2.max;
          var r2 = function(t4) {
            s2[t4] !== void 0 && (i2.config.yaxis[t4].min = s2[t4].min, i2.config.yaxis[t4].max = s2[t4].max);
          };
          i2.config.yaxis.map(function(t4, a3) {
            i2.globals.zoomed || s2[a3] !== void 0 ? r2(a3) : e2.ctx.opts.yaxis[a3] !== void 0 && (t4.min = e2.ctx.opts.yaxis[a3].min, t4.max = e2.ctx.opts.yaxis[a3].max);
          });
        } }]), t2;
      }();
      Rt = typeof window < "u" ? window : void 0, Ht = function(t2, e2) {
        var a2 = (this !== void 0 ? this : t2).SVG = function(t3) {
          if (a2.supported) return t3 = new a2.Doc(t3), a2.parser.draw || a2.prepare(), t3;
        };
        if (a2.ns = "http://www.w3.org/2000/svg", a2.xmlns = "http://www.w3.org/2000/xmlns/", a2.xlink = "http://www.w3.org/1999/xlink", a2.svgjs = "http://svgjs.dev", a2.supported = !0, !a2.supported) return !1;
        a2.did = 1e3, a2.eid = function(t3) {
          return "Svgjs" + d2(t3) + a2.did++;
        }, a2.create = function(t3) {
          var i2 = e2.createElementNS(this.ns, t3);
          return i2.setAttribute("id", this.eid(t3)), i2;
        }, a2.extend = function() {
          var t3, e3;
          e3 = (t3 = [].slice.call(arguments)).pop();
          for (var i2 = t3.length - 1; i2 >= 0; i2--) if (t3[i2]) for (var s3 in e3) t3[i2].prototype[s3] = e3[s3];
          a2.Set && a2.Set.inherit && a2.Set.inherit();
        }, a2.invent = function(t3) {
          var e3 = typeof t3.create == "function" ? t3.create : function() {
            this.constructor.call(this, a2.create(t3.create));
          };
          return t3.inherit && (e3.prototype = new t3.inherit()), t3.extend && a2.extend(e3, t3.extend), t3.construct && a2.extend(t3.parent || a2.Container, t3.construct), e3;
        }, a2.adopt = function(e3) {
          return e3 ? e3.instance ? e3.instance : ((i2 = e3.nodeName == "svg" ? e3.parentNode instanceof t2.SVGElement ? new a2.Nested() : new a2.Doc() : e3.nodeName == "linearGradient" ? new a2.Gradient("linear") : e3.nodeName == "radialGradient" ? new a2.Gradient("radial") : a2[d2(e3.nodeName)] ? new a2[d2(e3.nodeName)]() : new a2.Element(e3)).type = e3.nodeName, i2.node = e3, e3.instance = i2, i2 instanceof a2.Doc && i2.namespace().defs(), i2.setData(JSON.parse(e3.getAttribute("svgjs:data")) || {}), i2) : null;
          var i2;
        }, a2.prepare = function() {
          var t3 = e2.getElementsByTagName("body")[0], i2 = (t3 ? new a2.Doc(t3) : a2.adopt(e2.documentElement).nested()).size(2, 0);
          a2.parser = { body: t3 || e2.documentElement, draw: i2.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node, poly: i2.polyline().node, path: i2.path().node, native: a2.create("svg") };
        }, a2.parser = { native: a2.create("svg") }, e2.addEventListener("DOMContentLoaded", function() {
          a2.parser.draw || a2.prepare();
        }, !1), a2.regex = { numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, rgb: /rgb\((\d+),(\d+),(\d+)\)/, reference: /#([a-z0-9\-_]+)/i, transforms: /\)\s*,?\s*/, whitespace: /\s/g, isHex: /^#[a-f0-9]{3,6}$/i, isRgb: /^rgb\(/, isCss: /[^:]+:[^;]+;?/, isBlank: /^(\s+)?$/, isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, isPercent: /^-?[\d\.]+%$/, isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, delimiter: /[\s,]+/, hyphen: /([^e])\-/gi, pathLetters: /[MLHVCSQTAZ]/gi, isPathLetter: /[MLHVCSQTAZ]/i, numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi, dots: /\./g }, a2.utils = { map: function(t3, e3) {
          for (var i2 = t3.length, a3 = [], s3 = 0; s3 < i2; s3++) a3.push(e3(t3[s3]));
          return a3;
        }, filter: function(t3, e3) {
          for (var i2 = t3.length, a3 = [], s3 = 0; s3 < i2; s3++) e3(t3[s3]) && a3.push(t3[s3]);
          return a3;
        }, filterSVGElements: function(e3) {
          return this.filter(e3, function(e4) {
            return e4 instanceof t2.SVGElement;
          });
        } }, a2.defaults = { attrs: { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "font-size": 16, "font-family": "Helvetica, Arial, sans-serif", "text-anchor": "start" } }, a2.Color = function(t3) {
          var e3, s3;
          this.r = 0, this.g = 0, this.b = 0, t3 && (typeof t3 == "string" ? a2.regex.isRgb.test(t3) ? (e3 = a2.regex.rgb.exec(t3.replace(a2.regex.whitespace, "")), this.r = parseInt(e3[1]), this.g = parseInt(e3[2]), this.b = parseInt(e3[3])) : a2.regex.isHex.test(t3) && (e3 = a2.regex.hex.exec((s3 = t3).length == 4 ? ["#", s3.substring(1, 2), s3.substring(1, 2), s3.substring(2, 3), s3.substring(2, 3), s3.substring(3, 4), s3.substring(3, 4)].join("") : s3), this.r = parseInt(e3[1], 16), this.g = parseInt(e3[2], 16), this.b = parseInt(e3[3], 16)) : i(t3) === "object" && (this.r = t3.r, this.g = t3.g, this.b = t3.b));
        }, a2.extend(a2.Color, { toString: function() {
          return this.toHex();
        }, toHex: function() {
          return "#" + g2(this.r) + g2(this.g) + g2(this.b);
        }, toRgb: function() {
          return "rgb(" + [this.r, this.g, this.b].join() + ")";
        }, brightness: function() {
          return this.r / 255 * 0.3 + this.g / 255 * 0.59 + this.b / 255 * 0.11;
        }, morph: function(t3) {
          return this.destination = new a2.Color(t3), this;
        }, at: function(t3) {
          return this.destination ? (t3 = t3 < 0 ? 0 : t3 > 1 ? 1 : t3, new a2.Color({ r: ~~(this.r + (this.destination.r - this.r) * t3), g: ~~(this.g + (this.destination.g - this.g) * t3), b: ~~(this.b + (this.destination.b - this.b) * t3) })) : this;
        } }), a2.Color.test = function(t3) {
          return t3 += "", a2.regex.isHex.test(t3) || a2.regex.isRgb.test(t3);
        }, a2.Color.isRgb = function(t3) {
          return t3 && typeof t3.r == "number" && typeof t3.g == "number" && typeof t3.b == "number";
        }, a2.Color.isColor = function(t3) {
          return a2.Color.isRgb(t3) || a2.Color.test(t3);
        }, a2.Array = function(t3, e3) {
          (t3 = (t3 || []).valueOf()).length == 0 && e3 && (t3 = e3.valueOf()), this.value = this.parse(t3);
        }, a2.extend(a2.Array, { toString: function() {
          return this.value.join(" ");
        }, valueOf: function() {
          return this.value;
        }, parse: function(t3) {
          return t3 = t3.valueOf(), Array.isArray(t3) ? t3 : this.split(t3);
        } }), a2.PointArray = function(t3, e3) {
          a2.Array.call(this, t3, e3 || [[0, 0]]);
        }, a2.PointArray.prototype = new a2.Array(), a2.PointArray.prototype.constructor = a2.PointArray;
        for (var s2 = { M: function(t3, e3, i2) {
          return e3.x = i2.x = t3[0], e3.y = i2.y = t3[1], ["M", e3.x, e3.y];
        }, L: function(t3, e3) {
          return e3.x = t3[0], e3.y = t3[1], ["L", t3[0], t3[1]];
        }, H: function(t3, e3) {
          return e3.x = t3[0], ["H", t3[0]];
        }, V: function(t3, e3) {
          return e3.y = t3[0], ["V", t3[0]];
        }, C: function(t3, e3) {
          return e3.x = t3[4], e3.y = t3[5], ["C", t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]];
        }, Q: function(t3, e3) {
          return e3.x = t3[2], e3.y = t3[3], ["Q", t3[0], t3[1], t3[2], t3[3]];
        }, S: function(t3, e3) {
          return e3.x = t3[2], e3.y = t3[3], ["S", t3[0], t3[1], t3[2], t3[3]];
        }, Z: function(t3, e3, i2) {
          return e3.x = i2.x, e3.y = i2.y, ["Z"];
        } }, r2 = "mlhvqtcsaz".split(""), o2 = 0, n2 = r2.length; o2 < n2; ++o2) s2[r2[o2]] = /* @__PURE__ */ function(t3) {
          return function(e3, i2, a3) {
            if (t3 == "H") e3[0] = e3[0] + i2.x;
            else if (t3 == "V") e3[0] = e3[0] + i2.y;
            else if (t3 == "A") e3[5] = e3[5] + i2.x, e3[6] = e3[6] + i2.y;
            else for (var r3 = 0, o3 = e3.length; r3 < o3; ++r3) e3[r3] = e3[r3] + (r3 % 2 ? i2.y : i2.x);
            if (s2 && typeof s2[t3] == "function") return s2[t3](e3, i2, a3);
          };
        }(r2[o2].toUpperCase());
        a2.PathArray = function(t3, e3) {
          a2.Array.call(this, t3, e3 || [["M", 0, 0]]);
        }, a2.PathArray.prototype = new a2.Array(), a2.PathArray.prototype.constructor = a2.PathArray, a2.extend(a2.PathArray, { toString: function() {
          return function(t3) {
            for (var e3 = 0, i2 = t3.length, a3 = ""; e3 < i2; e3++) a3 += t3[e3][0], t3[e3][1] != null && (a3 += t3[e3][1], t3[e3][2] != null && (a3 += " ", a3 += t3[e3][2], t3[e3][3] != null && (a3 += " ", a3 += t3[e3][3], a3 += " ", a3 += t3[e3][4], t3[e3][5] != null && (a3 += " ", a3 += t3[e3][5], a3 += " ", a3 += t3[e3][6], t3[e3][7] != null && (a3 += " ", a3 += t3[e3][7])))));
            return a3 + " ";
          }(this.value);
        }, move: function(t3, e3) {
          var i2 = this.bbox();
          return i2.x, i2.y, this;
        }, at: function(t3) {
          if (!this.destination) return this;
          for (var e3 = this.value, i2 = this.destination.value, s3 = [], r3 = new a2.PathArray(), o3 = 0, n3 = e3.length; o3 < n3; o3++) {
            s3[o3] = [e3[o3][0]];
            for (var l3 = 1, h3 = e3[o3].length; l3 < h3; l3++) s3[o3][l3] = e3[o3][l3] + (i2[o3][l3] - e3[o3][l3]) * t3;
            s3[o3][0] === "A" && (s3[o3][4] = +(s3[o3][4] != 0), s3[o3][5] = +(s3[o3][5] != 0));
          }
          return r3.value = s3, r3;
        }, parse: function(t3) {
          if (t3 instanceof a2.PathArray) return t3.valueOf();
          var e3, i2 = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
          t3 = typeof t3 == "string" ? t3.replace(a2.regex.numbersWithDots, h2).replace(a2.regex.pathLetters, " $& ").replace(a2.regex.hyphen, "$1 -").trim().split(a2.regex.delimiter) : t3.reduce(function(t4, e4) {
            return [].concat.call(t4, e4);
          }, []);
          var r3 = [], o3 = new a2.Point(), n3 = new a2.Point(), l3 = 0, c3 = t3.length;
          do
            a2.regex.isPathLetter.test(t3[l3]) ? (e3 = t3[l3], ++l3) : e3 == "M" ? e3 = "L" : e3 == "m" && (e3 = "l"), r3.push(s2[e3].call(null, t3.slice(l3, l3 += i2[e3.toUpperCase()]).map(parseFloat), o3, n3));
          while (c3 > l3);
          return r3;
        }, bbox: function() {
          return a2.parser.draw || a2.prepare(), a2.parser.path.setAttribute("d", this.toString()), a2.parser.path.getBBox();
        } }), a2.Number = a2.invent({ create: function(t3, e3) {
          this.value = 0, this.unit = e3 || "", typeof t3 == "number" ? this.value = isNaN(t3) ? 0 : isFinite(t3) ? t3 : t3 < 0 ? -34e37 : 34e37 : typeof t3 == "string" ? (e3 = t3.match(a2.regex.numberAndUnit)) && (this.value = parseFloat(e3[1]), e3[5] == "%" ? this.value /= 100 : e3[5] == "s" && (this.value *= 1e3), this.unit = e3[5]) : t3 instanceof a2.Number && (this.value = t3.valueOf(), this.unit = t3.unit);
        }, extend: { toString: function() {
          return (this.unit == "%" ? ~~(1e8 * this.value) / 1e6 : this.unit == "s" ? this.value / 1e3 : this.value) + this.unit;
        }, toJSON: function() {
          return this.toString();
        }, valueOf: function() {
          return this.value;
        }, plus: function(t3) {
          return t3 = new a2.Number(t3), new a2.Number(this + t3, this.unit || t3.unit);
        }, minus: function(t3) {
          return t3 = new a2.Number(t3), new a2.Number(this - t3, this.unit || t3.unit);
        }, times: function(t3) {
          return t3 = new a2.Number(t3), new a2.Number(this * t3, this.unit || t3.unit);
        }, divide: function(t3) {
          return t3 = new a2.Number(t3), new a2.Number(this / t3, this.unit || t3.unit);
        }, to: function(t3) {
          var e3 = new a2.Number(this);
          return typeof t3 == "string" && (e3.unit = t3), e3;
        }, morph: function(t3) {
          return this.destination = new a2.Number(t3), t3.relative && (this.destination.value += this.value), this;
        }, at: function(t3) {
          return this.destination ? new a2.Number(this.destination).minus(this).times(t3).plus(this) : this;
        } } }), a2.Element = a2.invent({ create: function(t3) {
          this._stroke = a2.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t3) && (this.type = t3.nodeName, this.node.instance = this, this._stroke = t3.getAttribute("stroke") || this._stroke);
        }, extend: { x: function(t3) {
          return this.attr("x", t3);
        }, y: function(t3) {
          return this.attr("y", t3);
        }, cx: function(t3) {
          return t3 == null ? this.x() + this.width() / 2 : this.x(t3 - this.width() / 2);
        }, cy: function(t3) {
          return t3 == null ? this.y() + this.height() / 2 : this.y(t3 - this.height() / 2);
        }, move: function(t3, e3) {
          return this.x(t3).y(e3);
        }, center: function(t3, e3) {
          return this.cx(t3).cy(e3);
        }, width: function(t3) {
          return this.attr("width", t3);
        }, height: function(t3) {
          return this.attr("height", t3);
        }, size: function(t3, e3) {
          var i2 = u2(this, t3, e3);
          return this.width(new a2.Number(i2.width)).height(new a2.Number(i2.height));
        }, clone: function(t3) {
          this.writeDataToDom();
          var e3 = x2(this.node.cloneNode(!0));
          return t3 ? t3.add(e3) : this.after(e3), e3;
        }, remove: function() {
          return this.parent() && this.parent().removeElement(this), this;
        }, replace: function(t3) {
          return this.after(t3).remove(), t3;
        }, addTo: function(t3) {
          return t3.put(this);
        }, putIn: function(t3) {
          return t3.add(this);
        }, id: function(t3) {
          return this.attr("id", t3);
        }, show: function() {
          return this.style("display", "");
        }, hide: function() {
          return this.style("display", "none");
        }, visible: function() {
          return this.style("display") != "none";
        }, toString: function() {
          return this.attr("id");
        }, classes: function() {
          var t3 = this.attr("class");
          return t3 == null ? [] : t3.trim().split(a2.regex.delimiter);
        }, hasClass: function(t3) {
          return this.classes().indexOf(t3) != -1;
        }, addClass: function(t3) {
          if (!this.hasClass(t3)) {
            var e3 = this.classes();
            e3.push(t3), this.attr("class", e3.join(" "));
          }
          return this;
        }, removeClass: function(t3) {
          return this.hasClass(t3) && this.attr("class", this.classes().filter(function(e3) {
            return e3 != t3;
          }).join(" ")), this;
        }, toggleClass: function(t3) {
          return this.hasClass(t3) ? this.removeClass(t3) : this.addClass(t3);
        }, reference: function(t3) {
          return a2.get(this.attr(t3));
        }, parent: function(e3) {
          var i2 = this;
          if (!i2.node.parentNode) return null;
          if (i2 = a2.adopt(i2.node.parentNode), !e3) return i2;
          for (; i2 && i2.node instanceof t2.SVGElement; ) {
            if (typeof e3 == "string" ? i2.matches(e3) : i2 instanceof e3) return i2;
            if (!i2.node.parentNode || i2.node.parentNode.nodeName == "#document") return null;
            i2 = a2.adopt(i2.node.parentNode);
          }
        }, doc: function() {
          return this instanceof a2.Doc ? this : this.parent(a2.Doc);
        }, parents: function(t3) {
          var e3 = [], i2 = this;
          do {
            if (!(i2 = i2.parent(t3)) || !i2.node) break;
            e3.push(i2);
          } while (i2.parent);
          return e3;
        }, matches: function(t3) {
          return function(t4, e3) {
            return (t4.matches || t4.matchesSelector || t4.msMatchesSelector || t4.mozMatchesSelector || t4.webkitMatchesSelector || t4.oMatchesSelector).call(t4, e3);
          }(this.node, t3);
        }, native: function() {
          return this.node;
        }, svg: function(t3) {
          var i2 = e2.createElementNS("http://www.w3.org/2000/svg", "svg");
          if (!(t3 && this instanceof a2.Parent)) return i2.appendChild(t3 = e2.createElementNS("http://www.w3.org/2000/svg", "svg")), this.writeDataToDom(), t3.appendChild(this.node.cloneNode(!0)), i2.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
          i2.innerHTML = "<svg>" + t3.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
          for (var s3 = 0, r3 = i2.firstChild.childNodes.length; s3 < r3; s3++) this.node.appendChild(i2.firstChild.firstChild);
          return this;
        }, writeDataToDom: function() {
          return (this.each || this.lines) && (this.each ? this : this.lines()).each(function() {
            this.writeDataToDom();
          }), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this;
        }, setData: function(t3) {
          return this.dom = t3, this;
        }, is: function(t3) {
          return function(t4, e3) {
            return t4 instanceof e3;
          }(this, t3);
        } } }), a2.easing = { "-": function(t3) {
          return t3;
        }, "<>": function(t3) {
          return -Math.cos(t3 * Math.PI) / 2 + 0.5;
        }, ">": function(t3) {
          return Math.sin(t3 * Math.PI / 2);
        }, "<": function(t3) {
          return 1 - Math.cos(t3 * Math.PI / 2);
        } }, a2.morph = function(t3) {
          return function(e3, i2) {
            return new a2.MorphObj(e3, i2).at(t3);
          };
        }, a2.Situation = a2.invent({ create: function(t3) {
          this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new a2.Number(t3.duration).valueOf(), this.delay = new a2.Number(t3.delay).valueOf(), this.start = +/* @__PURE__ */ new Date() + this.delay, this.finish = this.start + this.duration, this.ease = t3.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {};
        } }), a2.FX = a2.invent({ create: function(t3) {
          this._target = t3, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1;
        }, extend: { animate: function(t3, e3, s3) {
          i(t3) === "object" && (e3 = t3.ease, s3 = t3.delay, t3 = t3.duration);
          var r3 = new a2.Situation({ duration: t3 || 1e3, delay: s3 || 0, ease: a2.easing[e3 || "-"] || e3 });
          return this.queue(r3), this;
        }, target: function(t3) {
          return t3 && t3 instanceof a2.Element ? (this._target = t3, this) : this._target;
        }, timeToAbsPos: function(t3) {
          return (t3 - this.situation.start) / (this.situation.duration / this._speed);
        }, absPosToTime: function(t3) {
          return this.situation.duration / this._speed * t3 + this.situation.start;
        }, startAnimFrame: function() {
          this.stopAnimFrame(), this.animationFrame = t2.requestAnimationFrame(function() {
            this.step();
          }.bind(this));
        }, stopAnimFrame: function() {
          t2.cancelAnimationFrame(this.animationFrame);
        }, start: function() {
          return !this.active && this.situation && (this.active = !0, this.startCurrent()), this;
        }, startCurrent: function() {
          return this.situation.start = +/* @__PURE__ */ new Date() + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step();
        }, queue: function(t3) {
          return (typeof t3 == "function" || t3 instanceof a2.Situation) && this.situations.push(t3), this.situation || (this.situation = this.situations.shift()), this;
        }, dequeue: function() {
          return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof a2.Situation ? this.start() : this.situation.call(this)), this;
        }, initAnimations: function() {
          var t3, e3 = this.situation;
          if (e3.init) return this;
          for (var i2 in e3.animations) {
            t3 = this.target()[i2](), Array.isArray(t3) || (t3 = [t3]), Array.isArray(e3.animations[i2]) || (e3.animations[i2] = [e3.animations[i2]]);
            for (var s3 = t3.length; s3--; ) e3.animations[i2][s3] instanceof a2.Number && (t3[s3] = new a2.Number(t3[s3])), e3.animations[i2][s3] = t3[s3].morph(e3.animations[i2][s3]);
          }
          for (var i2 in e3.attrs) e3.attrs[i2] = new a2.MorphObj(this.target().attr(i2), e3.attrs[i2]);
          for (var i2 in e3.styles) e3.styles[i2] = new a2.MorphObj(this.target().style(i2), e3.styles[i2]);
          return e3.initialTransformation = this.target().matrixify(), e3.init = !0, this;
        }, clearQueue: function() {
          return this.situations = [], this;
        }, clearCurrent: function() {
          return this.situation = null, this;
        }, stop: function(t3, e3) {
          var i2 = this.active;
          return this.active = !1, e3 && this.clearQueue(), t3 && this.situation && (!i2 && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent();
        }, after: function(t3) {
          var e3 = this.last();
          return this.target().on("finished.fx", function i2(a3) {
            a3.detail.situation == e3 && (t3.call(this, e3), this.off("finished.fx", i2));
          }), this._callStart();
        }, during: function(t3) {
          var e3 = this.last(), i2 = function(i3) {
            i3.detail.situation == e3 && t3.call(this, i3.detail.pos, a2.morph(i3.detail.pos), i3.detail.eased, e3);
          };
          return this.target().off("during.fx", i2).on("during.fx", i2), this.after(function() {
            this.off("during.fx", i2);
          }), this._callStart();
        }, afterAll: function(t3) {
          var e3 = function e4(i2) {
            t3.call(this), this.off("allfinished.fx", e4);
          };
          return this.target().off("allfinished.fx", e3).on("allfinished.fx", e3), this._callStart();
        }, last: function() {
          return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
        }, add: function(t3, e3, i2) {
          return this.last()[i2 || "animations"][t3] = e3, this._callStart();
        }, step: function(t3) {
          var e3, i2, a3;
          t3 || (this.absPos = this.timeToAbsPos(+/* @__PURE__ */ new Date())), this.situation.loops !== !1 ? (e3 = Math.max(this.absPos, 0), i2 = Math.floor(e3), this.situation.loops === !0 || i2 < this.situation.loops ? (this.pos = e3 - i2, a3 = this.situation.loop, this.situation.loop = i2) : (this.absPos = this.situation.loops, this.pos = 1, a3 = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != !!((this.situation.loop - a3) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
          var s3 = this.situation.ease(this.pos);
          for (var r3 in this.situation.once) r3 > this.lastPos && r3 <= s3 && (this.situation.once[r3].call(this.target(), this.pos, s3), delete this.situation.once[r3]);
          return this.active && this.target().fire("during", { pos: this.pos, eased: s3, fx: this, situation: this.situation }), this.situation ? (this.eachAt(), this.pos == 1 && !this.situation.reversed || this.situation.reversed && this.pos == 0 ? (this.stopAnimFrame(), this.target().fire("finished", { fx: this, situation: this.situation }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = s3, this) : this;
        }, eachAt: function() {
          var t3, e3 = this, i2 = this.target(), s3 = this.situation;
          for (var r3 in s3.animations) t3 = [].concat(s3.animations[r3]).map(function(t4) {
            return typeof t4 != "string" && t4.at ? t4.at(s3.ease(e3.pos), e3.pos) : t4;
          }), i2[r3].apply(i2, t3);
          for (var r3 in s3.attrs) t3 = [r3].concat(s3.attrs[r3]).map(function(t4) {
            return typeof t4 != "string" && t4.at ? t4.at(s3.ease(e3.pos), e3.pos) : t4;
          }), i2.attr.apply(i2, t3);
          for (var r3 in s3.styles) t3 = [r3].concat(s3.styles[r3]).map(function(t4) {
            return typeof t4 != "string" && t4.at ? t4.at(s3.ease(e3.pos), e3.pos) : t4;
          }), i2.style.apply(i2, t3);
          if (s3.transforms.length) {
            t3 = s3.initialTransformation, r3 = 0;
            for (var o3 = s3.transforms.length; r3 < o3; r3++) {
              var n3 = s3.transforms[r3];
              n3 instanceof a2.Matrix ? t3 = n3.relative ? t3.multiply(new a2.Matrix().morph(n3).at(s3.ease(this.pos))) : t3.morph(n3).at(s3.ease(this.pos)) : (n3.relative || n3.undo(t3.extract()), t3 = t3.multiply(n3.at(s3.ease(this.pos))));
            }
            i2.matrix(t3);
          }
          return this;
        }, once: function(t3, e3, i2) {
          var a3 = this.last();
          return i2 || (t3 = a3.ease(t3)), a3.once[t3] = e3, this;
        }, _callStart: function() {
          return setTimeout(function() {
            this.start();
          }.bind(this), 0), this;
        } }, parent: a2.Element, construct: { animate: function(t3, e3, i2) {
          return (this.fx || (this.fx = new a2.FX(this))).animate(t3, e3, i2);
        }, delay: function(t3) {
          return (this.fx || (this.fx = new a2.FX(this))).delay(t3);
        }, stop: function(t3, e3) {
          return this.fx && this.fx.stop(t3, e3), this;
        }, finish: function() {
          return this.fx && this.fx.finish(), this;
        } } }), a2.MorphObj = a2.invent({ create: function(t3, e3) {
          return a2.Color.isColor(e3) ? new a2.Color(t3).morph(e3) : a2.regex.delimiter.test(t3) ? a2.regex.pathLetters.test(t3) ? new a2.PathArray(t3).morph(e3) : new a2.Array(t3).morph(e3) : a2.regex.numberAndUnit.test(e3) ? new a2.Number(t3).morph(e3) : (this.value = t3, void (this.destination = e3));
        }, extend: { at: function(t3, e3) {
          return e3 < 1 ? this.value : this.destination;
        }, valueOf: function() {
          return this.value;
        } } }), a2.extend(a2.FX, { attr: function(t3, e3, a3) {
          if (i(t3) === "object") for (var s3 in t3) this.attr(s3, t3[s3]);
          else this.add(t3, e3, "attrs");
          return this;
        }, plot: function(t3, e3, i2, a3) {
          return arguments.length == 4 ? this.plot([t3, e3, i2, a3]) : this.add("plot", new (this.target()).morphArray(t3));
        } }), a2.Box = a2.invent({ create: function(t3, e3, s3, r3) {
          if (!(i(t3) !== "object" || t3 instanceof a2.Element)) return a2.Box.call(this, t3.left != null ? t3.left : t3.x, t3.top != null ? t3.top : t3.y, t3.width, t3.height);
          var o3;
          arguments.length == 4 && (this.x = t3, this.y = e3, this.width = s3, this.height = r3), (o3 = this).x == null && (o3.x = 0, o3.y = 0, o3.width = 0, o3.height = 0), o3.w = o3.width, o3.h = o3.height, o3.x2 = o3.x + o3.width, o3.y2 = o3.y + o3.height, o3.cx = o3.x + o3.width / 2, o3.cy = o3.y + o3.height / 2;
        } }), a2.BBox = a2.invent({ create: function(t3) {
          if (a2.Box.apply(this, [].slice.call(arguments)), t3 instanceof a2.Element) {
            var i2;
            try {
              if (!e2.documentElement.contains) {
                for (var s3 = t3.node; s3.parentNode; ) s3 = s3.parentNode;
                if (s3 != e2) throw new Error("Element not in the dom");
              }
              i2 = t3.node.getBBox();
            } catch {
              if (t3 instanceof a2.Shape) {
                a2.parser.draw || a2.prepare();
                var r3 = t3.clone(a2.parser.draw.instance).show();
                r3 && r3.node && typeof r3.node.getBBox == "function" && (i2 = r3.node.getBBox()), r3 && typeof r3.remove == "function" && r3.remove();
              } else i2 = { x: t3.node.clientLeft, y: t3.node.clientTop, width: t3.node.clientWidth, height: t3.node.clientHeight };
            }
            a2.Box.call(this, i2);
          }
        }, inherit: a2.Box, parent: a2.Element, construct: { bbox: function() {
          return new a2.BBox(this);
        } } }), a2.BBox.prototype.constructor = a2.BBox, a2.Matrix = a2.invent({ create: function(t3) {
          var e3 = f2([1, 0, 0, 1, 0, 0]);
          t3 = t3 === null ? e3 : t3 instanceof a2.Element ? t3.matrixify() : typeof t3 == "string" ? f2(t3.split(a2.regex.delimiter).map(parseFloat)) : arguments.length == 6 ? f2([].slice.call(arguments)) : Array.isArray(t3) ? f2(t3) : t3 && i(t3) === "object" ? t3 : e3;
          for (var s3 = v2.length - 1; s3 >= 0; --s3) this[v2[s3]] = t3[v2[s3]] != null ? t3[v2[s3]] : e3[v2[s3]];
        }, extend: { extract: function() {
          var t3 = p2(this, 0, 1);
          p2(this, 1, 0);
          var e3 = 180 / Math.PI * Math.atan2(t3.y, t3.x) - 90;
          return { x: this.e, y: this.f, transformedX: (this.e * Math.cos(e3 * Math.PI / 180) + this.f * Math.sin(e3 * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b), transformedY: (this.f * Math.cos(e3 * Math.PI / 180) + this.e * Math.sin(-e3 * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d), rotation: e3, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f, matrix: new a2.Matrix(this) };
        }, clone: function() {
          return new a2.Matrix(this);
        }, morph: function(t3) {
          return this.destination = new a2.Matrix(t3), this;
        }, multiply: function(t3) {
          return new a2.Matrix(this.native().multiply(function(t4) {
            return t4 instanceof a2.Matrix || (t4 = new a2.Matrix(t4)), t4;
          }(t3).native()));
        }, inverse: function() {
          return new a2.Matrix(this.native().inverse());
        }, translate: function(t3, e3) {
          return new a2.Matrix(this.native().translate(t3 || 0, e3 || 0));
        }, native: function() {
          for (var t3 = a2.parser.native.createSVGMatrix(), e3 = v2.length - 1; e3 >= 0; e3--) t3[v2[e3]] = this[v2[e3]];
          return t3;
        }, toString: function() {
          return "matrix(" + b2(this.a) + "," + b2(this.b) + "," + b2(this.c) + "," + b2(this.d) + "," + b2(this.e) + "," + b2(this.f) + ")";
        } }, parent: a2.Element, construct: { ctm: function() {
          return new a2.Matrix(this.node.getCTM());
        }, screenCTM: function() {
          if (this instanceof a2.Nested) {
            var t3 = this.rect(1, 1), e3 = t3.node.getScreenCTM();
            return t3.remove(), new a2.Matrix(e3);
          }
          return new a2.Matrix(this.node.getScreenCTM());
        } } }), a2.Point = a2.invent({ create: function(t3, e3) {
          var a3;
          a3 = Array.isArray(t3) ? { x: t3[0], y: t3[1] } : i(t3) === "object" ? { x: t3.x, y: t3.y } : t3 != null ? { x: t3, y: e3 ?? t3 } : { x: 0, y: 0 }, this.x = a3.x, this.y = a3.y;
        }, extend: { clone: function() {
          return new a2.Point(this);
        }, morph: function(t3, e3) {
          return this.destination = new a2.Point(t3, e3), this;
        } } }), a2.extend(a2.Element, { point: function(t3, e3) {
          return new a2.Point(t3, e3).transform(this.screenCTM().inverse());
        } }), a2.extend(a2.Element, { attr: function(t3, e3, s3) {
          if (t3 == null) {
            for (t3 = {}, s3 = (e3 = this.node.attributes).length - 1; s3 >= 0; s3--) t3[e3[s3].nodeName] = a2.regex.isNumber.test(e3[s3].nodeValue) ? parseFloat(e3[s3].nodeValue) : e3[s3].nodeValue;
            return t3;
          }
          if (i(t3) === "object") for (var r3 in t3) this.attr(r3, t3[r3]);
          else if (e3 === null) this.node.removeAttribute(t3);
          else {
            if (e3 == null) return (e3 = this.node.getAttribute(t3)) == null ? a2.defaults.attrs[t3] : a2.regex.isNumber.test(e3) ? parseFloat(e3) : e3;
            t3 == "stroke-width" ? this.attr("stroke", parseFloat(e3) > 0 ? this._stroke : null) : t3 == "stroke" && (this._stroke = e3), t3 != "fill" && t3 != "stroke" || (a2.regex.isImage.test(e3) && (e3 = this.doc().defs().image(e3, 0, 0)), e3 instanceof a2.Image && (e3 = this.doc().defs().pattern(0, 0, function() {
              this.add(e3);
            }))), typeof e3 == "number" ? e3 = new a2.Number(e3) : a2.Color.isColor(e3) ? e3 = new a2.Color(e3) : Array.isArray(e3) && (e3 = new a2.Array(e3)), t3 == "leading" ? this.leading && this.leading(e3) : typeof s3 == "string" ? this.node.setAttributeNS(s3, t3, e3.toString()) : this.node.setAttribute(t3, e3.toString()), !this.rebuild || t3 != "font-size" && t3 != "x" || this.rebuild(t3, e3);
          }
          return this;
        } }), a2.extend(a2.Element, { transform: function(t3, e3) {
          var s3;
          return i(t3) !== "object" ? (s3 = new a2.Matrix(this).extract(), typeof t3 == "string" ? s3[t3] : s3) : (s3 = new a2.Matrix(this), e3 = !!e3 || !!t3.relative, t3.a != null && (s3 = e3 ? s3.multiply(new a2.Matrix(t3)) : new a2.Matrix(t3)), this.attr("transform", s3));
        } }), a2.extend(a2.Element, { untransform: function() {
          return this.attr("transform", null);
        }, matrixify: function() {
          return (this.attr("transform") || "").split(a2.regex.transforms).slice(0, -1).map(function(t3) {
            var e3 = t3.trim().split("(");
            return [e3[0], e3[1].split(a2.regex.delimiter).map(function(t4) {
              return parseFloat(t4);
            })];
          }).reduce(function(t3, e3) {
            return e3[0] == "matrix" ? t3.multiply(f2(e3[1])) : t3[e3[0]].apply(t3, e3[1]);
          }, new a2.Matrix());
        }, toParent: function(t3) {
          if (this == t3) return this;
          var e3 = this.screenCTM(), i2 = t3.screenCTM().inverse();
          return this.addTo(t3).untransform().transform(i2.multiply(e3)), this;
        }, toDoc: function() {
          return this.toParent(this.doc());
        } }), a2.Transformation = a2.invent({ create: function(t3, e3) {
          if (arguments.length > 1 && typeof e3 != "boolean") return this.constructor.call(this, [].slice.call(arguments));
          if (Array.isArray(t3)) for (var a3 = 0, s3 = this.arguments.length; a3 < s3; ++a3) this[this.arguments[a3]] = t3[a3];
          else if (t3 && i(t3) === "object") for (a3 = 0, s3 = this.arguments.length; a3 < s3; ++a3) this[this.arguments[a3]] = t3[this.arguments[a3]];
          this.inversed = !1, e3 === !0 && (this.inversed = !0);
        } }), a2.Translate = a2.invent({ parent: a2.Matrix, inherit: a2.Transformation, create: function(t3, e3) {
          this.constructor.apply(this, [].slice.call(arguments));
        }, extend: { arguments: ["transformedX", "transformedY"], method: "translate" } }), a2.extend(a2.Element, { style: function(t3, e3) {
          if (arguments.length == 0) return this.node.style.cssText || "";
          if (arguments.length < 2) if (i(t3) === "object") for (var s3 in t3) this.style(s3, t3[s3]);
          else {
            if (!a2.regex.isCss.test(t3)) return this.node.style[c2(t3)];
            for (t3 = t3.split(/\s*;\s*/).filter(function(t4) {
              return !!t4;
            }).map(function(t4) {
              return t4.split(/\s*:\s*/);
            }); e3 = t3.pop(); ) this.style(e3[0], e3[1]);
          }
          else this.node.style[c2(t3)] = e3 === null || a2.regex.isBlank.test(e3) ? "" : e3;
          return this;
        } }), a2.Parent = a2.invent({ create: function(t3) {
          this.constructor.call(this, t3);
        }, inherit: a2.Element, extend: { children: function() {
          return a2.utils.map(a2.utils.filterSVGElements(this.node.childNodes), function(t3) {
            return a2.adopt(t3);
          });
        }, add: function(t3, e3) {
          return e3 == null ? this.node.appendChild(t3.node) : t3.node != this.node.childNodes[e3] && this.node.insertBefore(t3.node, this.node.childNodes[e3]), this;
        }, put: function(t3, e3) {
          return this.add(t3, e3), t3;
        }, has: function(t3) {
          return this.index(t3) >= 0;
        }, index: function(t3) {
          return [].slice.call(this.node.childNodes).indexOf(t3.node);
        }, get: function(t3) {
          return a2.adopt(this.node.childNodes[t3]);
        }, first: function() {
          return this.get(0);
        }, last: function() {
          return this.get(this.node.childNodes.length - 1);
        }, each: function(t3, e3) {
          for (var i2 = this.children(), s3 = 0, r3 = i2.length; s3 < r3; s3++) i2[s3] instanceof a2.Element && t3.apply(i2[s3], [s3, i2]), e3 && i2[s3] instanceof a2.Container && i2[s3].each(t3, e3);
          return this;
        }, removeElement: function(t3) {
          return this.node.removeChild(t3.node), this;
        }, clear: function() {
          for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
          return delete this._defs, this;
        }, defs: function() {
          return this.doc().defs();
        } } }), a2.extend(a2.Parent, { ungroup: function(t3, e3) {
          return e3 === 0 || this instanceof a2.Defs || this.node == a2.parser.draw || (t3 = t3 || (this instanceof a2.Doc ? this : this.parent(a2.Parent)), e3 = e3 || 1 / 0, this.each(function() {
            return this instanceof a2.Defs ? this : this instanceof a2.Parent ? this.ungroup(t3, e3 - 1) : this.toParent(t3);
          }), this.node.firstChild || this.remove()), this;
        }, flatten: function(t3, e3) {
          return this.ungroup(t3, e3);
        } }), a2.Container = a2.invent({ create: function(t3) {
          this.constructor.call(this, t3);
        }, inherit: a2.Parent }), a2.ViewBox = a2.invent({ parent: a2.Container, construct: {} }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function(t3) {
          a2.Element.prototype[t3] = function(e3) {
            return a2.on(this.node, t3, e3), this;
          };
        }), a2.listeners = [], a2.handlerMap = [], a2.listenerId = 0, a2.on = function(t3, e3, i2, s3, r3) {
          var o3 = i2.bind(s3 || t3.instance || t3), n3 = (a2.handlerMap.indexOf(t3) + 1 || a2.handlerMap.push(t3)) - 1, l3 = e3.split(".")[0], h3 = e3.split(".")[1] || "*";
          a2.listeners[n3] = a2.listeners[n3] || {}, a2.listeners[n3][l3] = a2.listeners[n3][l3] || {}, a2.listeners[n3][l3][h3] = a2.listeners[n3][l3][h3] || {}, i2._svgjsListenerId || (i2._svgjsListenerId = ++a2.listenerId), a2.listeners[n3][l3][h3][i2._svgjsListenerId] = o3, t3.addEventListener(l3, o3, r3 || { passive: !1 });
        }, a2.off = function(t3, e3, i2) {
          var s3 = a2.handlerMap.indexOf(t3), r3 = e3 && e3.split(".")[0], o3 = e3 && e3.split(".")[1], n3 = "";
          if (s3 != -1) if (i2) {
            if (typeof i2 == "function" && (i2 = i2._svgjsListenerId), !i2) return;
            a2.listeners[s3][r3] && a2.listeners[s3][r3][o3 || "*"] && (t3.removeEventListener(r3, a2.listeners[s3][r3][o3 || "*"][i2], !1), delete a2.listeners[s3][r3][o3 || "*"][i2]);
          } else if (o3 && r3) {
            if (a2.listeners[s3][r3] && a2.listeners[s3][r3][o3]) {
              for (var l3 in a2.listeners[s3][r3][o3]) a2.off(t3, [r3, o3].join("."), l3);
              delete a2.listeners[s3][r3][o3];
            }
          } else if (o3) for (var h3 in a2.listeners[s3]) for (var n3 in a2.listeners[s3][h3]) o3 === n3 && a2.off(t3, [h3, o3].join("."));
          else if (r3) {
            if (a2.listeners[s3][r3]) {
              for (var n3 in a2.listeners[s3][r3]) a2.off(t3, [r3, n3].join("."));
              delete a2.listeners[s3][r3];
            }
          } else {
            for (var h3 in a2.listeners[s3]) a2.off(t3, h3);
            delete a2.listeners[s3], delete a2.handlerMap[s3];
          }
        }, a2.extend(a2.Element, { on: function(t3, e3, i2, s3) {
          return a2.on(this.node, t3, e3, i2, s3), this;
        }, off: function(t3, e3) {
          return a2.off(this.node, t3, e3), this;
        }, fire: function(e3, i2) {
          return e3 instanceof t2.Event ? this.node.dispatchEvent(e3) : this.node.dispatchEvent(e3 = new a2.CustomEvent(e3, { detail: i2, cancelable: !0 })), this._event = e3, this;
        }, event: function() {
          return this._event;
        } }), a2.Defs = a2.invent({ create: "defs", inherit: a2.Container }), a2.G = a2.invent({ create: "g", inherit: a2.Container, extend: { x: function(t3) {
          return t3 == null ? this.transform("x") : this.transform({ x: t3 - this.x() }, !0);
        } }, construct: { group: function() {
          return this.put(new a2.G());
        } } }), a2.Doc = a2.invent({ create: function(t3) {
          t3 && ((t3 = typeof t3 == "string" ? e2.getElementById(t3) : t3).nodeName == "svg" ? this.constructor.call(this, t3) : (this.constructor.call(this, a2.create("svg")), t3.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs());
        }, inherit: a2.Container, extend: { namespace: function() {
          return this.attr({ xmlns: a2.ns, version: "1.1" }).attr("xmlns:xlink", a2.xlink, a2.xmlns).attr("xmlns:svgjs", a2.svgjs, a2.xmlns);
        }, defs: function() {
          var t3;
          return this._defs || ((t3 = this.node.getElementsByTagName("defs")[0]) ? this._defs = a2.adopt(t3) : this._defs = new a2.Defs(), this.node.appendChild(this._defs.node)), this._defs;
        }, parent: function() {
          return this.node.parentNode && this.node.parentNode.nodeName != "#document" ? this.node.parentNode : null;
        }, remove: function() {
          return this.parent() && this.parent().removeChild(this.node), this;
        }, clear: function() {
          for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
          return delete this._defs, a2.parser.draw && !a2.parser.draw.parentNode && this.node.appendChild(a2.parser.draw), this;
        }, clone: function(t3) {
          this.writeDataToDom();
          var e3 = this.node, i2 = x2(e3.cloneNode(!0));
          return t3 ? (t3.node || t3).appendChild(i2.node) : e3.parentNode.insertBefore(i2.node, e3.nextSibling), i2;
        } } }), a2.extend(a2.Element, {}), a2.Gradient = a2.invent({ create: function(t3) {
          this.constructor.call(this, a2.create(t3 + "Gradient")), this.type = t3;
        }, inherit: a2.Container, extend: { at: function(t3, e3, i2) {
          return this.put(new a2.Stop()).update(t3, e3, i2);
        }, update: function(t3) {
          return this.clear(), typeof t3 == "function" && t3.call(this, this), this;
        }, fill: function() {
          return "url(#" + this.id() + ")";
        }, toString: function() {
          return this.fill();
        }, attr: function(t3, e3, i2) {
          return t3 == "transform" && (t3 = "gradientTransform"), a2.Container.prototype.attr.call(this, t3, e3, i2);
        } }, construct: { gradient: function(t3, e3) {
          return this.defs().gradient(t3, e3);
        } } }), a2.extend(a2.Gradient, a2.FX, { from: function(t3, e3) {
          return (this._target || this).type == "radial" ? this.attr({ fx: new a2.Number(t3), fy: new a2.Number(e3) }) : this.attr({ x1: new a2.Number(t3), y1: new a2.Number(e3) });
        }, to: function(t3, e3) {
          return (this._target || this).type == "radial" ? this.attr({ cx: new a2.Number(t3), cy: new a2.Number(e3) }) : this.attr({ x2: new a2.Number(t3), y2: new a2.Number(e3) });
        } }), a2.extend(a2.Defs, { gradient: function(t3, e3) {
          return this.put(new a2.Gradient(t3)).update(e3);
        } }), a2.Stop = a2.invent({ create: "stop", inherit: a2.Element, extend: { update: function(t3) {
          return (typeof t3 == "number" || t3 instanceof a2.Number) && (t3 = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), t3.opacity != null && this.attr("stop-opacity", t3.opacity), t3.color != null && this.attr("stop-color", t3.color), t3.offset != null && this.attr("offset", new a2.Number(t3.offset)), this;
        } } }), a2.Pattern = a2.invent({ create: "pattern", inherit: a2.Container, extend: { fill: function() {
          return "url(#" + this.id() + ")";
        }, update: function(t3) {
          return this.clear(), typeof t3 == "function" && t3.call(this, this), this;
        }, toString: function() {
          return this.fill();
        }, attr: function(t3, e3, i2) {
          return t3 == "transform" && (t3 = "patternTransform"), a2.Container.prototype.attr.call(this, t3, e3, i2);
        } }, construct: { pattern: function(t3, e3, i2) {
          return this.defs().pattern(t3, e3, i2);
        } } }), a2.extend(a2.Defs, { pattern: function(t3, e3, i2) {
          return this.put(new a2.Pattern()).update(i2).attr({ x: 0, y: 0, width: t3, height: e3, patternUnits: "userSpaceOnUse" });
        } }), a2.Shape = a2.invent({ create: function(t3) {
          this.constructor.call(this, t3);
        }, inherit: a2.Element }), a2.Symbol = a2.invent({ create: "symbol", inherit: a2.Container, construct: { symbol: function() {
          return this.put(new a2.Symbol());
        } } }), a2.Use = a2.invent({ create: "use", inherit: a2.Shape, extend: { element: function(t3, e3) {
          return this.attr("href", (e3 || "") + "#" + t3, a2.xlink);
        } }, construct: { use: function(t3, e3) {
          return this.put(new a2.Use()).element(t3, e3);
        } } }), a2.Rect = a2.invent({ create: "rect", inherit: a2.Shape, construct: { rect: function(t3, e3) {
          return this.put(new a2.Rect()).size(t3, e3);
        } } }), a2.Circle = a2.invent({ create: "circle", inherit: a2.Shape, construct: { circle: function(t3) {
          return this.put(new a2.Circle()).rx(new a2.Number(t3).divide(2)).move(0, 0);
        } } }), a2.extend(a2.Circle, a2.FX, { rx: function(t3) {
          return this.attr("r", t3);
        }, ry: function(t3) {
          return this.rx(t3);
        } }), a2.Ellipse = a2.invent({ create: "ellipse", inherit: a2.Shape, construct: { ellipse: function(t3, e3) {
          return this.put(new a2.Ellipse()).size(t3, e3).move(0, 0);
        } } }), a2.extend(a2.Ellipse, a2.Rect, a2.FX, { rx: function(t3) {
          return this.attr("rx", t3);
        }, ry: function(t3) {
          return this.attr("ry", t3);
        } }), a2.extend(a2.Circle, a2.Ellipse, { x: function(t3) {
          return t3 == null ? this.cx() - this.rx() : this.cx(t3 + this.rx());
        }, y: function(t3) {
          return t3 == null ? this.cy() - this.ry() : this.cy(t3 + this.ry());
        }, cx: function(t3) {
          return t3 == null ? this.attr("cx") : this.attr("cx", t3);
        }, cy: function(t3) {
          return t3 == null ? this.attr("cy") : this.attr("cy", t3);
        }, width: function(t3) {
          return t3 == null ? 2 * this.rx() : this.rx(new a2.Number(t3).divide(2));
        }, height: function(t3) {
          return t3 == null ? 2 * this.ry() : this.ry(new a2.Number(t3).divide(2));
        }, size: function(t3, e3) {
          var i2 = u2(this, t3, e3);
          return this.rx(new a2.Number(i2.width).divide(2)).ry(new a2.Number(i2.height).divide(2));
        } }), a2.Line = a2.invent({ create: "line", inherit: a2.Shape, extend: { array: function() {
          return new a2.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
        }, plot: function(t3, e3, i2, s3) {
          return t3 == null ? this.array() : (t3 = e3 !== void 0 ? { x1: t3, y1: e3, x2: i2, y2: s3 } : new a2.PointArray(t3).toLine(), this.attr(t3));
        }, move: function(t3, e3) {
          return this.attr(this.array().move(t3, e3).toLine());
        }, size: function(t3, e3) {
          var i2 = u2(this, t3, e3);
          return this.attr(this.array().size(i2.width, i2.height).toLine());
        } }, construct: { line: function(t3, e3, i2, s3) {
          return a2.Line.prototype.plot.apply(this.put(new a2.Line()), t3 != null ? [t3, e3, i2, s3] : [0, 0, 0, 0]);
        } } }), a2.Polyline = a2.invent({ create: "polyline", inherit: a2.Shape, construct: { polyline: function(t3) {
          return this.put(new a2.Polyline()).plot(t3 || new a2.PointArray());
        } } }), a2.Polygon = a2.invent({ create: "polygon", inherit: a2.Shape, construct: { polygon: function(t3) {
          return this.put(new a2.Polygon()).plot(t3 || new a2.PointArray());
        } } }), a2.extend(a2.Polyline, a2.Polygon, { array: function() {
          return this._array || (this._array = new a2.PointArray(this.attr("points")));
        }, plot: function(t3) {
          return t3 == null ? this.array() : this.clear().attr("points", typeof t3 == "string" ? t3 : this._array = new a2.PointArray(t3));
        }, clear: function() {
          return delete this._array, this;
        }, move: function(t3, e3) {
          return this.attr("points", this.array().move(t3, e3));
        }, size: function(t3, e3) {
          var i2 = u2(this, t3, e3);
          return this.attr("points", this.array().size(i2.width, i2.height));
        } }), a2.extend(a2.Line, a2.Polyline, a2.Polygon, { morphArray: a2.PointArray, x: function(t3) {
          return t3 == null ? this.bbox().x : this.move(t3, this.bbox().y);
        }, y: function(t3) {
          return t3 == null ? this.bbox().y : this.move(this.bbox().x, t3);
        }, width: function(t3) {
          var e3 = this.bbox();
          return t3 == null ? e3.width : this.size(t3, e3.height);
        }, height: function(t3) {
          var e3 = this.bbox();
          return t3 == null ? e3.height : this.size(e3.width, t3);
        } }), a2.Path = a2.invent({ create: "path", inherit: a2.Shape, extend: { morphArray: a2.PathArray, array: function() {
          return this._array || (this._array = new a2.PathArray(this.attr("d")));
        }, plot: function(t3) {
          return t3 == null ? this.array() : this.clear().attr("d", typeof t3 == "string" ? t3 : this._array = new a2.PathArray(t3));
        }, clear: function() {
          return delete this._array, this;
        } }, construct: { path: function(t3) {
          return this.put(new a2.Path()).plot(t3 || new a2.PathArray());
        } } }), a2.Image = a2.invent({ create: "image", inherit: a2.Shape, extend: { load: function(e3) {
          if (!e3) return this;
          var i2 = this, s3 = new t2.Image();
          return a2.on(s3, "load", function() {
            a2.off(s3);
            var t3 = i2.parent(a2.Pattern);
            t3 !== null && (i2.width() == 0 && i2.height() == 0 && i2.size(s3.width, s3.height), t3 && t3.width() == 0 && t3.height() == 0 && t3.size(i2.width(), i2.height()), typeof i2._loaded == "function" && i2._loaded.call(i2, { width: s3.width, height: s3.height, ratio: s3.width / s3.height, url: e3 }));
          }), a2.on(s3, "error", function(t3) {
            a2.off(s3), typeof i2._error == "function" && i2._error.call(i2, t3);
          }), this.attr("href", s3.src = this.src = e3, a2.xlink);
        }, loaded: function(t3) {
          return this._loaded = t3, this;
        }, error: function(t3) {
          return this._error = t3, this;
        } }, construct: { image: function(t3, e3, i2) {
          return this.put(new a2.Image()).load(t3).size(e3 || 0, i2 || e3 || 0);
        } } }), a2.Text = a2.invent({ create: function() {
          this.constructor.call(this, a2.create("text")), this.dom.leading = new a2.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", a2.defaults.attrs["font-family"]);
        }, inherit: a2.Shape, extend: { x: function(t3) {
          return t3 == null ? this.attr("x") : this.attr("x", t3);
        }, text: function(t3) {
          if (t3 === void 0) {
            t3 = "";
            for (var e3 = this.node.childNodes, i2 = 0, s3 = e3.length; i2 < s3; ++i2) i2 != 0 && e3[i2].nodeType != 3 && a2.adopt(e3[i2]).dom.newLined == 1 && (t3 += `
`), t3 += e3[i2].textContent;
            return t3;
          }
          if (this.clear().build(!0), typeof t3 == "function") t3.call(this, this);
          else {
            i2 = 0;
            for (var r3 = (t3 = t3.split(`
`)).length; i2 < r3; i2++) this.tspan(t3[i2]).newLine();
          }
          return this.build(!1).rebuild();
        }, size: function(t3) {
          return this.attr("font-size", t3).rebuild();
        }, leading: function(t3) {
          return t3 == null ? this.dom.leading : (this.dom.leading = new a2.Number(t3), this.rebuild());
        }, lines: function() {
          var t3 = (this.textPath && this.textPath() || this).node, e3 = a2.utils.map(a2.utils.filterSVGElements(t3.childNodes), function(t4) {
            return a2.adopt(t4);
          });
          return new a2.Set(e3);
        }, rebuild: function(t3) {
          if (typeof t3 == "boolean" && (this._rebuild = t3), this._rebuild) {
            var e3 = this, i2 = 0, s3 = this.dom.leading * new a2.Number(this.attr("font-size"));
            this.lines().each(function() {
              this.dom.newLined && (e3.textPath() || this.attr("x", e3.attr("x")), this.text() == `
` ? i2 += s3 : (this.attr("dy", s3 + i2), i2 = 0));
            }), this.fire("rebuild");
          }
          return this;
        }, build: function(t3) {
          return this._build = !!t3, this;
        }, setData: function(t3) {
          return this.dom = t3, this.dom.leading = new a2.Number(t3.leading || 1.3), this;
        } }, construct: { text: function(t3) {
          return this.put(new a2.Text()).text(t3);
        }, plain: function(t3) {
          return this.put(new a2.Text()).plain(t3);
        } } }), a2.Tspan = a2.invent({ create: "tspan", inherit: a2.Shape, extend: { text: function(t3) {
          return t3 == null ? this.node.textContent + (this.dom.newLined ? `
` : "") : (typeof t3 == "function" ? t3.call(this, this) : this.plain(t3), this);
        }, dx: function(t3) {
          return this.attr("dx", t3);
        }, dy: function(t3) {
          return this.attr("dy", t3);
        }, newLine: function() {
          var t3 = this.parent(a2.Text);
          return this.dom.newLined = !0, this.dy(t3.dom.leading * t3.attr("font-size")).attr("x", t3.x());
        } } }), a2.extend(a2.Text, a2.Tspan, { plain: function(t3) {
          return this._build === !1 && this.clear(), this.node.appendChild(e2.createTextNode(t3)), this;
        }, tspan: function(t3) {
          var e3 = (this.textPath && this.textPath() || this).node, i2 = new a2.Tspan();
          return this._build === !1 && this.clear(), e3.appendChild(i2.node), i2.text(t3);
        }, clear: function() {
          for (var t3 = (this.textPath && this.textPath() || this).node; t3.hasChildNodes(); ) t3.removeChild(t3.lastChild);
          return this;
        }, length: function() {
          return this.node.getComputedTextLength();
        } }), a2.TextPath = a2.invent({ create: "textPath", inherit: a2.Parent, parent: a2.Text, construct: { morphArray: a2.PathArray, array: function() {
          var t3 = this.track();
          return t3 ? t3.array() : null;
        }, plot: function(t3) {
          var e3 = this.track(), i2 = null;
          return e3 && (i2 = e3.plot(t3)), t3 == null ? i2 : this;
        }, track: function() {
          var t3 = this.textPath();
          if (t3) return t3.reference("href");
        }, textPath: function() {
          if (this.node.firstChild && this.node.firstChild.nodeName == "textPath") return a2.adopt(this.node.firstChild);
        } } }), a2.Nested = a2.invent({ create: function() {
          this.constructor.call(this, a2.create("svg")), this.style("overflow", "visible");
        }, inherit: a2.Container, construct: { nested: function() {
          return this.put(new a2.Nested());
        } } });
        var l2 = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function(t3, e3) {
          return e3 == "color" ? t3 : t3 + "-" + e3;
        } };
        function h2(t3, e3, i2, s3) {
          return i2 + s3.replace(a2.regex.dots, " .");
        }
        function c2(t3) {
          return t3.toLowerCase().replace(/-(.)/g, function(t4, e3) {
            return e3.toUpperCase();
          });
        }
        function d2(t3) {
          return t3.charAt(0).toUpperCase() + t3.slice(1);
        }
        function g2(t3) {
          var e3 = t3.toString(16);
          return e3.length == 1 ? "0" + e3 : e3;
        }
        function u2(t3, e3, i2) {
          if (e3 == null || i2 == null) {
            var a3 = t3.bbox();
            e3 == null ? e3 = a3.width / a3.height * i2 : i2 == null && (i2 = a3.height / a3.width * e3);
          }
          return { width: e3, height: i2 };
        }
        function p2(t3, e3, i2) {
          return { x: e3 * t3.a + i2 * t3.c + 0, y: e3 * t3.b + i2 * t3.d + 0 };
        }
        function f2(t3) {
          return { a: t3[0], b: t3[1], c: t3[2], d: t3[3], e: t3[4], f: t3[5] };
        }
        function x2(e3) {
          for (var i2 = e3.childNodes.length - 1; i2 >= 0; i2--) e3.childNodes[i2] instanceof t2.SVGElement && x2(e3.childNodes[i2]);
          return a2.adopt(e3).id(a2.eid(e3.nodeName));
        }
        function b2(t3) {
          return Math.abs(t3) > 1e-37 ? t3 : 0;
        }
        ["fill", "stroke"].forEach(function(t3) {
          var e3 = {};
          e3[t3] = function(e4) {
            if (e4 === void 0) return this;
            if (typeof e4 == "string" || a2.Color.isRgb(e4) || e4 && typeof e4.fill == "function") this.attr(t3, e4);
            else for (var i2 = l2[t3].length - 1; i2 >= 0; i2--) e4[l2[t3][i2]] != null && this.attr(l2.prefix(t3, l2[t3][i2]), e4[l2[t3][i2]]);
            return this;
          }, a2.extend(a2.Element, a2.FX, e3);
        }), a2.extend(a2.Element, a2.FX, { translate: function(t3, e3) {
          return this.transform({ x: t3, y: e3 });
        }, matrix: function(t3) {
          return this.attr("transform", new a2.Matrix(arguments.length == 6 ? [].slice.call(arguments) : t3));
        }, opacity: function(t3) {
          return this.attr("opacity", t3);
        }, dx: function(t3) {
          return this.x(new a2.Number(t3).plus(this instanceof a2.FX ? 0 : this.x()), !0);
        }, dy: function(t3) {
          return this.y(new a2.Number(t3).plus(this instanceof a2.FX ? 0 : this.y()), !0);
        } }), a2.extend(a2.Path, { length: function() {
          return this.node.getTotalLength();
        }, pointAt: function(t3) {
          return this.node.getPointAtLength(t3);
        } }), a2.Set = a2.invent({ create: function(t3) {
          Array.isArray(t3) ? this.members = t3 : this.clear();
        }, extend: { add: function() {
          for (var t3 = [].slice.call(arguments), e3 = 0, i2 = t3.length; e3 < i2; e3++) this.members.push(t3[e3]);
          return this;
        }, remove: function(t3) {
          var e3 = this.index(t3);
          return e3 > -1 && this.members.splice(e3, 1), this;
        }, each: function(t3) {
          for (var e3 = 0, i2 = this.members.length; e3 < i2; e3++) t3.apply(this.members[e3], [e3, this.members]);
          return this;
        }, clear: function() {
          return this.members = [], this;
        }, length: function() {
          return this.members.length;
        }, has: function(t3) {
          return this.index(t3) >= 0;
        }, index: function(t3) {
          return this.members.indexOf(t3);
        }, get: function(t3) {
          return this.members[t3];
        }, first: function() {
          return this.get(0);
        }, last: function() {
          return this.get(this.members.length - 1);
        }, valueOf: function() {
          return this.members;
        } }, construct: { set: function(t3) {
          return new a2.Set(t3);
        } } }), a2.FX.Set = a2.invent({ create: function(t3) {
          this.set = t3;
        } }), a2.Set.inherit = function() {
          var t3 = [];
          for (var e3 in a2.Shape.prototype) typeof a2.Shape.prototype[e3] == "function" && typeof a2.Set.prototype[e3] != "function" && t3.push(e3);
          for (var e3 in t3.forEach(function(t4) {
            a2.Set.prototype[t4] = function() {
              for (var e4 = 0, i2 = this.members.length; e4 < i2; e4++) this.members[e4] && typeof this.members[e4][t4] == "function" && this.members[e4][t4].apply(this.members[e4], arguments);
              return t4 == "animate" ? this.fx || (this.fx = new a2.FX.Set(this)) : this;
            };
          }), t3 = [], a2.FX.prototype) typeof a2.FX.prototype[e3] == "function" && typeof a2.FX.Set.prototype[e3] != "function" && t3.push(e3);
          t3.forEach(function(t4) {
            a2.FX.Set.prototype[t4] = function() {
              for (var e4 = 0, i2 = this.set.members.length; e4 < i2; e4++) this.set.members[e4].fx[t4].apply(this.set.members[e4].fx, arguments);
              return this;
            };
          });
        }, a2.extend(a2.Element, {}), a2.extend(a2.Element, { remember: function(t3, e3) {
          if (i(arguments[0]) === "object") for (var a3 in t3) this.remember(a3, t3[a3]);
          else {
            if (arguments.length == 1) return this.memory()[t3];
            this.memory()[t3] = e3;
          }
          return this;
        }, forget: function() {
          if (arguments.length == 0) this._memory = {};
          else for (var t3 = arguments.length - 1; t3 >= 0; t3--) delete this.memory()[arguments[t3]];
          return this;
        }, memory: function() {
          return this._memory || (this._memory = {});
        } }), a2.get = function(t3) {
          var i2 = e2.getElementById(function(t4) {
            var e3 = (t4 || "").toString().match(a2.regex.reference);
            if (e3) return e3[1];
          }(t3) || t3);
          return a2.adopt(i2);
        }, a2.select = function(t3, i2) {
          return new a2.Set(a2.utils.map((i2 || e2).querySelectorAll(t3), function(t4) {
            return a2.adopt(t4);
          }));
        }, a2.extend(a2.Parent, { select: function(t3) {
          return a2.select(t3, this.node);
        } });
        var v2 = "abcdef".split("");
        if (typeof t2.CustomEvent != "function") {
          var m2 = function(t3, i2) {
            i2 = i2 || { bubbles: !1, cancelable: !1, detail: void 0 };
            var a3 = e2.createEvent("CustomEvent");
            return a3.initCustomEvent(t3, i2.bubbles, i2.cancelable, i2.detail), a3;
          };
          m2.prototype = t2.Event.prototype, a2.CustomEvent = m2;
        } else a2.CustomEvent = t2.CustomEvent;
        return a2;
      }, typeof define == "function" && define.amd ? define(function() {
        return Ht(Rt, Rt.document);
      }) : (typeof exports > "u" ? "undefined" : i(exports)) === "object" && typeof module < "u" ? module.exports = Rt.document ? Ht(Rt, Rt.document) : function(t2) {
        return Ht(t2, t2.document);
      } : Rt.SVG = Ht(Rt, Rt.document), /*! svg.filter.js - v2.0.2 - 2016-02-24
      * https://github.com/wout/svg.filter.js
      * Copyright (c) 2016 Wout Fierens; Licensed MIT */
      function() {
        SVG.Filter = SVG.invent({ create: "filter", inherit: SVG.Parent, extend: { source: "SourceGraphic", sourceAlpha: "SourceAlpha", background: "BackgroundImage", backgroundAlpha: "BackgroundAlpha", fill: "FillPaint", stroke: "StrokePaint", autoSetIn: !0, put: function(t3, e3) {
          return this.add(t3, e3), !t3.attr("in") && this.autoSetIn && t3.attr("in", this.source), t3.attr("result") || t3.attr("result", t3), t3;
        }, blend: function(t3, e3, i3) {
          return this.put(new SVG.BlendEffect(t3, e3, i3));
        }, colorMatrix: function(t3, e3) {
          return this.put(new SVG.ColorMatrixEffect(t3, e3));
        }, convolveMatrix: function(t3) {
          return this.put(new SVG.ConvolveMatrixEffect(t3));
        }, componentTransfer: function(t3) {
          return this.put(new SVG.ComponentTransferEffect(t3));
        }, composite: function(t3, e3, i3) {
          return this.put(new SVG.CompositeEffect(t3, e3, i3));
        }, flood: function(t3, e3) {
          return this.put(new SVG.FloodEffect(t3, e3));
        }, offset: function(t3, e3) {
          return this.put(new SVG.OffsetEffect(t3, e3));
        }, image: function(t3) {
          return this.put(new SVG.ImageEffect(t3));
        }, merge: function() {
          var t3 = [void 0];
          for (var e3 in arguments) t3.push(arguments[e3]);
          return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t3))());
        }, gaussianBlur: function(t3, e3) {
          return this.put(new SVG.GaussianBlurEffect(t3, e3));
        }, morphology: function(t3, e3) {
          return this.put(new SVG.MorphologyEffect(t3, e3));
        }, diffuseLighting: function(t3, e3, i3) {
          return this.put(new SVG.DiffuseLightingEffect(t3, e3, i3));
        }, displacementMap: function(t3, e3, i3, a3, s3) {
          return this.put(new SVG.DisplacementMapEffect(t3, e3, i3, a3, s3));
        }, specularLighting: function(t3, e3, i3, a3) {
          return this.put(new SVG.SpecularLightingEffect(t3, e3, i3, a3));
        }, tile: function() {
          return this.put(new SVG.TileEffect());
        }, turbulence: function(t3, e3, i3, a3, s3) {
          return this.put(new SVG.TurbulenceEffect(t3, e3, i3, a3, s3));
        }, toString: function() {
          return "url(#" + this.attr("id") + ")";
        } } }), SVG.extend(SVG.Defs, { filter: function(t3) {
          var e3 = this.put(new SVG.Filter());
          return typeof t3 == "function" && t3.call(e3, e3), e3;
        } }), SVG.extend(SVG.Container, { filter: function(t3) {
          return this.defs().filter(t3);
        } }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, { filter: function(t3) {
          return this.filterer = t3 instanceof SVG.Element ? t3 : this.doc().filter(t3), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer;
        }, unfilter: function(t3) {
          return this.filterer && t3 === !0 && this.filterer.remove(), delete this.filterer, this.attr("filter", null);
        } }), SVG.Effect = SVG.invent({ create: function() {
          this.constructor.call(this);
        }, inherit: SVG.Element, extend: { in: function(t3) {
          return t3 == null ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t3);
        }, result: function(t3) {
          return t3 == null ? this.attr("result") : this.attr("result", t3);
        }, toString: function() {
          return this.result();
        } } }), SVG.ParentEffect = SVG.invent({ create: function() {
          this.constructor.call(this);
        }, inherit: SVG.Parent, extend: { in: function(t3) {
          return t3 == null ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t3);
        }, result: function(t3) {
          return t3 == null ? this.attr("result") : this.attr("result", t3);
        }, toString: function() {
          return this.result();
        } } });
        var t2 = { blend: function(t3, e3) {
          return this.parent() && this.parent().blend(this, t3, e3);
        }, colorMatrix: function(t3, e3) {
          return this.parent() && this.parent().colorMatrix(t3, e3).in(this);
        }, convolveMatrix: function(t3) {
          return this.parent() && this.parent().convolveMatrix(t3).in(this);
        }, componentTransfer: function(t3) {
          return this.parent() && this.parent().componentTransfer(t3).in(this);
        }, composite: function(t3, e3) {
          return this.parent() && this.parent().composite(this, t3, e3);
        }, flood: function(t3, e3) {
          return this.parent() && this.parent().flood(t3, e3);
        }, offset: function(t3, e3) {
          return this.parent() && this.parent().offset(t3, e3).in(this);
        }, image: function(t3) {
          return this.parent() && this.parent().image(t3);
        }, merge: function() {
          return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments));
        }, gaussianBlur: function(t3, e3) {
          return this.parent() && this.parent().gaussianBlur(t3, e3).in(this);
        }, morphology: function(t3, e3) {
          return this.parent() && this.parent().morphology(t3, e3).in(this);
        }, diffuseLighting: function(t3, e3, i3) {
          return this.parent() && this.parent().diffuseLighting(t3, e3, i3).in(this);
        }, displacementMap: function(t3, e3, i3, a3) {
          return this.parent() && this.parent().displacementMap(this, t3, e3, i3, a3);
        }, specularLighting: function(t3, e3, i3, a3) {
          return this.parent() && this.parent().specularLighting(t3, e3, i3, a3).in(this);
        }, tile: function() {
          return this.parent() && this.parent().tile().in(this);
        }, turbulence: function(t3, e3, i3, a3, s3) {
          return this.parent() && this.parent().turbulence(t3, e3, i3, a3, s3).in(this);
        } };
        SVG.extend(SVG.Effect, t2), SVG.extend(SVG.ParentEffect, t2), SVG.ChildEffect = SVG.invent({ create: function() {
          this.constructor.call(this);
        }, inherit: SVG.Element, extend: { in: function(t3) {
          this.attr("in", t3);
        } } });
        var e2 = { blend: function(t3, e3, i3) {
          this.attr({ in: t3, in2: e3, mode: i3 || "normal" });
        }, colorMatrix: function(t3, e3) {
          t3 == "matrix" && (e3 = s2(e3)), this.attr({ type: t3, values: e3 === void 0 ? null : e3 });
        }, convolveMatrix: function(t3) {
          t3 = s2(t3), this.attr({ order: Math.sqrt(t3.split(" ").length), kernelMatrix: t3 });
        }, composite: function(t3, e3, i3) {
          this.attr({ in: t3, in2: e3, operator: i3 });
        }, flood: function(t3, e3) {
          this.attr("flood-color", t3), e3 != null && this.attr("flood-opacity", e3);
        }, offset: function(t3, e3) {
          this.attr({ dx: t3, dy: e3 });
        }, image: function(t3) {
          this.attr("href", t3, SVG.xlink);
        }, displacementMap: function(t3, e3, i3, a3, s3) {
          this.attr({ in: t3, in2: e3, scale: i3, xChannelSelector: a3, yChannelSelector: s3 });
        }, gaussianBlur: function(t3, e3) {
          t3 != null || e3 != null ? this.attr("stdDeviation", function(t4) {
            if (!Array.isArray(t4)) return t4;
            for (var e4 = 0, i3 = t4.length, a3 = []; e4 < i3; e4++) a3.push(t4[e4]);
            return a3.join(" ");
          }(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0");
        }, morphology: function(t3, e3) {
          this.attr({ operator: t3, radius: e3 });
        }, tile: function() {
        }, turbulence: function(t3, e3, i3, a3, s3) {
          this.attr({ numOctaves: e3, seed: i3, stitchTiles: a3, baseFrequency: t3, type: s3 });
        } }, i2 = { merge: function() {
          var t3;
          if (arguments[0] instanceof SVG.Set) {
            var e3 = this;
            arguments[0].each(function(t4) {
              this instanceof SVG.MergeNode ? e3.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e3.put(new SVG.MergeNode(this));
            });
          } else {
            t3 = Array.isArray(arguments[0]) ? arguments[0] : arguments;
            for (var i3 = 0; i3 < t3.length; i3++) t3[i3] instanceof SVG.MergeNode ? this.put(t3[i3]) : this.put(new SVG.MergeNode(t3[i3]));
          }
        }, componentTransfer: function(t3) {
          if (this.rgb = new SVG.Set(), ["r", "g", "b", "a"].forEach(function(t4) {
            this[t4] = new SVG["Func" + t4.toUpperCase()]("identity"), this.rgb.add(this[t4]), this.node.appendChild(this[t4].node);
          }.bind(this)), t3) for (var e3 in t3.rgb && (["r", "g", "b"].forEach(function(e4) {
            this[e4].attr(t3.rgb);
          }.bind(this)), delete t3.rgb), t3) this[e3].attr(t3[e3]);
        }, diffuseLighting: function(t3, e3, i3) {
          this.attr({ surfaceScale: t3, diffuseConstant: e3, kernelUnitLength: i3 });
        }, specularLighting: function(t3, e3, i3, a3) {
          this.attr({ surfaceScale: t3, diffuseConstant: e3, specularExponent: i3, kernelUnitLength: a3 });
        } }, a2 = { distantLight: function(t3, e3) {
          this.attr({ azimuth: t3, elevation: e3 });
        }, pointLight: function(t3, e3, i3) {
          this.attr({ x: t3, y: e3, z: i3 });
        }, spotLight: function(t3, e3, i3, a3, s3, r3) {
          this.attr({ x: t3, y: e3, z: i3, pointsAtX: a3, pointsAtY: s3, pointsAtZ: r3 });
        }, mergeNode: function(t3) {
          this.attr("in", t3);
        } };
        function s2(t3) {
          return Array.isArray(t3) && (t3 = new SVG.Array(t3)), t3.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
        }
        function r2() {
          var t3 = function() {
          };
          for (var e3 in typeof arguments[arguments.length - 1] == "function" && (t3 = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments) for (var i3 in arguments[e3]) t3(arguments[e3][i3], i3, arguments[e3]);
        }
        ["r", "g", "b", "a"].forEach(function(t3) {
          a2["Func" + t3.toUpperCase()] = function(t4) {
            switch (this.attr("type", t4), t4) {
              case "table":
                this.attr("tableValues", arguments[1]);
                break;
              case "linear":
                this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
                break;
              case "gamma":
                this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2]);
            }
          };
        }), r2(e2, function(t3, e3) {
          var i3 = e3.charAt(0).toUpperCase() + e3.slice(1);
          SVG[i3 + "Effect"] = SVG.invent({ create: function() {
            this.constructor.call(this, SVG.create("fe" + i3)), t3.apply(this, arguments), this.result(this.attr("id") + "Out");
          }, inherit: SVG.Effect, extend: {} });
        }), r2(i2, function(t3, e3) {
          var i3 = e3.charAt(0).toUpperCase() + e3.slice(1);
          SVG[i3 + "Effect"] = SVG.invent({ create: function() {
            this.constructor.call(this, SVG.create("fe" + i3)), t3.apply(this, arguments), this.result(this.attr("id") + "Out");
          }, inherit: SVG.ParentEffect, extend: {} });
        }), r2(a2, function(t3, e3) {
          var i3 = e3.charAt(0).toUpperCase() + e3.slice(1);
          SVG[i3] = SVG.invent({ create: function() {
            this.constructor.call(this, SVG.create("fe" + i3)), t3.apply(this, arguments);
          }, inherit: SVG.ChildEffect, extend: {} });
        }), SVG.extend(SVG.MergeEffect, { in: function(t3) {
          return t3 instanceof SVG.MergeNode ? this.add(t3, 0) : this.add(new SVG.MergeNode(t3), 0), this;
        } }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, { in2: function(t3) {
          return t3 == null ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t3);
        } }), SVG.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] };
      }.call(void 0), function() {
        function t2(t3, s3, r2, o2, n2, l2, h2) {
          for (var c2 = t3.slice(s3, r2 || h2), d2 = o2.slice(n2, l2 || h2), g2 = 0, u2 = { pos: [0, 0], start: [0, 0] }, p2 = { pos: [0, 0], start: [0, 0] }; c2[g2] = e2.call(u2, c2[g2]), d2[g2] = e2.call(p2, d2[g2]), c2[g2][0] != d2[g2][0] || c2[g2][0] == "M" || c2[g2][0] == "A" && (c2[g2][4] != d2[g2][4] || c2[g2][5] != d2[g2][5]) ? (Array.prototype.splice.apply(c2, [g2, 1].concat(a2.call(u2, c2[g2]))), Array.prototype.splice.apply(d2, [g2, 1].concat(a2.call(p2, d2[g2])))) : (c2[g2] = i2.call(u2, c2[g2]), d2[g2] = i2.call(p2, d2[g2])), !(++g2 == c2.length && g2 == d2.length); )
            g2 == c2.length && c2.push(["C", u2.pos[0], u2.pos[1], u2.pos[0], u2.pos[1], u2.pos[0], u2.pos[1]]), g2 == d2.length && d2.push(["C", p2.pos[0], p2.pos[1], p2.pos[0], p2.pos[1], p2.pos[0], p2.pos[1]]);
          return { start: c2, dest: d2 };
        }
        function e2(t3) {
          switch (t3[0]) {
            case "z":
            case "Z":
              t3[0] = "L", t3[1] = this.start[0], t3[2] = this.start[1];
              break;
            case "H":
              t3[0] = "L", t3[2] = this.pos[1];
              break;
            case "V":
              t3[0] = "L", t3[2] = t3[1], t3[1] = this.pos[0];
              break;
            case "T":
              t3[0] = "Q", t3[3] = t3[1], t3[4] = t3[2], t3[1] = this.reflection[1], t3[2] = this.reflection[0];
              break;
            case "S":
              t3[0] = "C", t3[6] = t3[4], t3[5] = t3[3], t3[4] = t3[2], t3[3] = t3[1], t3[2] = this.reflection[1], t3[1] = this.reflection[0];
          }
          return t3;
        }
        function i2(t3) {
          var e3 = t3.length;
          return this.pos = [t3[e3 - 2], t3[e3 - 1]], "SCQT".indexOf(t3[0]) != -1 && (this.reflection = [2 * this.pos[0] - t3[e3 - 4], 2 * this.pos[1] - t3[e3 - 3]]), t3;
        }
        function a2(t3) {
          var e3 = [t3];
          switch (t3[0]) {
            case "M":
              return this.pos = this.start = [t3[1], t3[2]], e3;
            case "L":
              t3[5] = t3[3] = t3[1], t3[6] = t3[4] = t3[2], t3[1] = this.pos[0], t3[2] = this.pos[1];
              break;
            case "Q":
              t3[6] = t3[4], t3[5] = t3[3], t3[4] = 1 * t3[4] / 3 + 2 * t3[2] / 3, t3[3] = 1 * t3[3] / 3 + 2 * t3[1] / 3, t3[2] = 1 * this.pos[1] / 3 + 2 * t3[2] / 3, t3[1] = 1 * this.pos[0] / 3 + 2 * t3[1] / 3;
              break;
            case "A":
              e3 = function(t4, e4) {
                var i3, a3, s3, r2, o2, n2, l2, h2, c2, d2, g2, u2, p2, f2, x2, b2, v2, m2, y2, w2, k2, A2, S2, C2, L2, P2, M2 = Math.abs(e4[1]), I2 = Math.abs(e4[2]), T2 = e4[3] % 360, z2 = e4[4], X2 = e4[5], E2 = e4[6], Y2 = e4[7], F2 = new SVG.Point(t4), R2 = new SVG.Point(E2, Y2), H2 = [];
                if (M2 === 0 || I2 === 0 || F2.x === R2.x && F2.y === R2.y) return [["C", F2.x, F2.y, R2.x, R2.y, R2.x, R2.y]];
                for (i3 = new SVG.Point((F2.x - R2.x) / 2, (F2.y - R2.y) / 2).transform(new SVG.Matrix().rotate(T2)), (a3 = i3.x * i3.x / (M2 * M2) + i3.y * i3.y / (I2 * I2)) > 1 && (M2 *= a3 = Math.sqrt(a3), I2 *= a3), s3 = new SVG.Matrix().rotate(T2).scale(1 / M2, 1 / I2).rotate(-T2), F2 = F2.transform(s3), R2 = R2.transform(s3), r2 = [R2.x - F2.x, R2.y - F2.y], n2 = r2[0] * r2[0] + r2[1] * r2[1], o2 = Math.sqrt(n2), r2[0] /= o2, r2[1] /= o2, l2 = n2 < 4 ? Math.sqrt(1 - n2 / 4) : 0, z2 === X2 && (l2 *= -1), h2 = new SVG.Point((R2.x + F2.x) / 2 + l2 * -r2[1], (R2.y + F2.y) / 2 + l2 * r2[0]), c2 = new SVG.Point(F2.x - h2.x, F2.y - h2.y), d2 = new SVG.Point(R2.x - h2.x, R2.y - h2.y), g2 = Math.acos(c2.x / Math.sqrt(c2.x * c2.x + c2.y * c2.y)), c2.y < 0 && (g2 *= -1), u2 = Math.acos(d2.x / Math.sqrt(d2.x * d2.x + d2.y * d2.y)), d2.y < 0 && (u2 *= -1), X2 && g2 > u2 && (u2 += 2 * Math.PI), !X2 && g2 < u2 && (u2 -= 2 * Math.PI), f2 = Math.ceil(2 * Math.abs(g2 - u2) / Math.PI), b2 = [], v2 = g2, p2 = (u2 - g2) / f2, x2 = 4 * Math.tan(p2 / 4) / 3, k2 = 0; k2 <= f2; k2++) y2 = Math.cos(v2), m2 = Math.sin(v2), w2 = new SVG.Point(h2.x + y2, h2.y + m2), b2[k2] = [new SVG.Point(w2.x + x2 * m2, w2.y - x2 * y2), w2, new SVG.Point(w2.x - x2 * m2, w2.y + x2 * y2)], v2 += p2;
                for (b2[0][0] = b2[0][1].clone(), b2[b2.length - 1][2] = b2[b2.length - 1][1].clone(), s3 = new SVG.Matrix().rotate(T2).scale(M2, I2).rotate(-T2), k2 = 0, A2 = b2.length; k2 < A2; k2++) b2[k2][0] = b2[k2][0].transform(s3), b2[k2][1] = b2[k2][1].transform(s3), b2[k2][2] = b2[k2][2].transform(s3);
                for (k2 = 1, A2 = b2.length; k2 < A2; k2++) S2 = (w2 = b2[k2 - 1][2]).x, C2 = w2.y, L2 = (w2 = b2[k2][0]).x, P2 = w2.y, E2 = (w2 = b2[k2][1]).x, Y2 = w2.y, H2.push(["C", S2, C2, L2, P2, E2, Y2]);
                return H2;
              }(this.pos, t3), t3 = e3[0];
          }
          return t3[0] = "C", this.pos = [t3[5], t3[6]], this.reflection = [2 * t3[5] - t3[3], 2 * t3[6] - t3[4]], e3;
        }
        function s2(t3, e3) {
          if (e3 === !1) return !1;
          for (var i3 = e3, a3 = t3.length; i3 < a3; ++i3) if (t3[i3][0] == "M") return i3;
          return !1;
        }
        SVG.extend(SVG.PathArray, { morph: function(e3) {
          for (var i3 = this.value, a3 = this.parse(e3), r2 = 0, o2 = 0, n2 = !1, l2 = !1; r2 !== !1 || o2 !== !1; ) {
            var h2;
            n2 = s2(i3, r2 !== !1 && r2 + 1), l2 = s2(a3, o2 !== !1 && o2 + 1), r2 === !1 && (r2 = (h2 = new SVG.PathArray(c2.start).bbox()).height == 0 || h2.width == 0 ? i3.push(i3[0]) - 1 : i3.push(["M", h2.x + h2.width / 2, h2.y + h2.height / 2]) - 1), o2 === !1 && (o2 = (h2 = new SVG.PathArray(c2.dest).bbox()).height == 0 || h2.width == 0 ? a3.push(a3[0]) - 1 : a3.push(["M", h2.x + h2.width / 2, h2.y + h2.height / 2]) - 1);
            var c2 = t2(i3, r2, n2, a3, o2, l2);
            i3 = i3.slice(0, r2).concat(c2.start, n2 === !1 ? [] : i3.slice(n2)), a3 = a3.slice(0, o2).concat(c2.dest, l2 === !1 ? [] : a3.slice(l2)), r2 = n2 !== !1 && r2 + c2.start.length, o2 = l2 !== !1 && o2 + c2.dest.length;
          }
          return this.value = i3, this.destination = new SVG.PathArray(), this.destination.value = a3, this;
        } });
      }(), /*! svg.draggable.js - v2.2.2 - 2019-01-08
      * https://github.com/svgdotjs/svg.draggable.js
      * Copyright (c) 2019 Wout Fierens; Licensed MIT */
      function() {
        function t2(t3) {
          t3.remember("_draggable", this), this.el = t3;
        }
        t2.prototype.init = function(t3, e2) {
          var i2 = this;
          this.constraint = t3, this.value = e2, this.el.on("mousedown.drag", function(t4) {
            i2.start(t4);
          }), this.el.on("touchstart.drag", function(t4) {
            i2.start(t4);
          });
        }, t2.prototype.transformPoint = function(t3, e2) {
          var i2 = (t3 = t3 || window.event).changedTouches && t3.changedTouches[0] || t3;
          return this.p.x = i2.clientX - (e2 || 0), this.p.y = i2.clientY, this.p.matrixTransform(this.m);
        }, t2.prototype.getBBox = function() {
          var t3 = this.el.bbox();
          return this.el instanceof SVG.Nested && (t3 = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t3.x = this.el.x(), t3.y = this.el.y()), t3;
        }, t2.prototype.start = function(t3) {
          if (t3.type != "click" && t3.type != "mousedown" && t3.type != "mousemove" || (t3.which || t3.buttons) == 1) {
            var e2 = this;
            if (this.el.fire("beforedrag", { event: t3, handler: this }), !this.el.event().defaultPrevented) {
              t3.preventDefault(), t3.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
              var i2, a2 = this.getBBox();
              if (this.el instanceof SVG.Text) switch (i2 = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
                case "middle":
                  i2 /= 2;
                  break;
                case "start":
                  i2 = 0;
              }
              this.startPoints = { point: this.transformPoint(t3, i2), box: a2, transform: this.el.transform() }, SVG.on(window, "mousemove.drag", function(t4) {
                e2.drag(t4);
              }), SVG.on(window, "touchmove.drag", function(t4) {
                e2.drag(t4);
              }), SVG.on(window, "mouseup.drag", function(t4) {
                e2.end(t4);
              }), SVG.on(window, "touchend.drag", function(t4) {
                e2.end(t4);
              }), this.el.fire("dragstart", { event: t3, p: this.startPoints.point, m: this.m, handler: this });
            }
          }
        }, t2.prototype.drag = function(t3) {
          var e2 = this.getBBox(), i2 = this.transformPoint(t3), a2 = this.startPoints.box.x + i2.x - this.startPoints.point.x, s2 = this.startPoints.box.y + i2.y - this.startPoints.point.y, r2 = this.constraint, o2 = i2.x - this.startPoints.point.x, n2 = i2.y - this.startPoints.point.y;
          if (this.el.fire("dragmove", { event: t3, p: i2, m: this.m, handler: this }), this.el.event().defaultPrevented) return i2;
          if (typeof r2 == "function") {
            var l2 = r2.call(this.el, a2, s2, this.m);
            typeof l2 == "boolean" && (l2 = { x: l2, y: l2 }), l2.x === !0 ? this.el.x(a2) : l2.x !== !1 && this.el.x(l2.x), l2.y === !0 ? this.el.y(s2) : l2.y !== !1 && this.el.y(l2.y);
          } else typeof r2 == "object" && (r2.minX != null && a2 < r2.minX ? o2 = (a2 = r2.minX) - this.startPoints.box.x : r2.maxX != null && a2 > r2.maxX - e2.width && (o2 = (a2 = r2.maxX - e2.width) - this.startPoints.box.x), r2.minY != null && s2 < r2.minY ? n2 = (s2 = r2.minY) - this.startPoints.box.y : r2.maxY != null && s2 > r2.maxY - e2.height && (n2 = (s2 = r2.maxY - e2.height) - this.startPoints.box.y), r2.snapToGrid != null && (a2 -= a2 % r2.snapToGrid, s2 -= s2 % r2.snapToGrid, o2 -= o2 % r2.snapToGrid, n2 -= n2 % r2.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({ x: o2, y: n2 }, !0) : this.el.move(a2, s2));
          return i2;
        }, t2.prototype.end = function(t3) {
          var e2 = this.drag(t3);
          this.el.fire("dragend", { event: t3, p: e2, m: this.m, handler: this }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag");
        }, SVG.extend(SVG.Element, { draggable: function(e2, i2) {
          typeof e2 != "function" && typeof e2 != "object" || (i2 = e2, e2 = !0);
          var a2 = this.remember("_draggable") || new t2(this);
          return (e2 = e2 === void 0 || e2) ? a2.init(i2 || {}, e2) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this;
        } });
      }.call(void 0), function() {
        function t2(t3) {
          this.el = t3, t3.remember("_selectHandler", this), this.pointSelection = { isSelected: !1 }, this.rectSelection = { isSelected: !1 }, this.pointsList = { lt: [0, 0], rt: ["width", 0], rb: ["width", "height"], lb: [0, "height"], t: ["width", 0], r: ["width", "height"], b: ["width", "height"], l: [0, "height"] }, this.pointCoord = function(t4, e2, i2) {
            var a2 = typeof t4 != "string" ? t4 : e2[t4];
            return i2 ? a2 / 2 : a2;
          }, this.pointCoords = function(t4, e2) {
            var i2 = this.pointsList[t4];
            return { x: this.pointCoord(i2[0], e2, t4 === "t" || t4 === "b"), y: this.pointCoord(i2[1], e2, t4 === "r" || t4 === "l") };
          };
        }
        t2.prototype.init = function(t3, e2) {
          var i2 = this.el.bbox();
          this.options = {};
          var a2 = this.el.selectize.defaults.points;
          for (var s2 in this.el.selectize.defaults) this.options[s2] = this.el.selectize.defaults[s2], e2[s2] !== void 0 && (this.options[s2] = e2[s2]);
          var r2 = ["points", "pointsExclude"];
          for (var s2 in r2) {
            var o2 = this.options[r2[s2]];
            typeof o2 == "string" ? o2 = o2.length > 0 ? o2.split(/\s*,\s*/i) : [] : typeof o2 == "boolean" && r2[s2] === "points" && (o2 = o2 ? a2 : []), this.options[r2[s2]] = o2;
          }
          this.options.points = [a2, this.options.points].reduce(function(t4, e3) {
            return t4.filter(function(t5) {
              return e3.indexOf(t5) > -1;
            });
          }), this.options.points = [this.options.points, this.options.pointsExclude].reduce(function(t4, e3) {
            return t4.filter(function(t5) {
              return e3.indexOf(t5) < 0;
            });
          }), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i2.x, i2.y)), this.options.deepSelect && ["line", "polyline", "polygon"].indexOf(this.el.type) !== -1 ? this.selectPoints(t3) : this.selectRect(t3), this.observe(), this.cleanup();
        }, t2.prototype.selectPoints = function(t3) {
          return this.pointSelection.isSelected = t3, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this;
        }, t2.prototype.getPointArray = function() {
          var t3 = this.el.bbox();
          return this.el.array().valueOf().map(function(e2) {
            return [e2[0] - t3.x, e2[1] - t3.y];
          });
        }, t2.prototype.drawPoints = function() {
          for (var t3 = this, e2 = this.getPointArray(), i2 = 0, a2 = e2.length; i2 < a2; ++i2) {
            var s2 = /* @__PURE__ */ function(e3) {
              return function(i3) {
                (i3 = i3 || window.event).preventDefault ? i3.preventDefault() : i3.returnValue = !1, i3.stopPropagation();
                var a3 = i3.pageX || i3.touches[0].pageX, s3 = i3.pageY || i3.touches[0].pageY;
                t3.el.fire("point", { x: a3, y: s3, i: e3, event: i3 });
              };
            }(i2), r2 = this.drawPoint(e2[i2][0], e2[i2][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", s2).on("mousedown", s2);
            this.pointSelection.set.add(r2);
          }
        }, t2.prototype.drawPoint = function(t3, e2) {
          var i2 = this.options.pointType;
          switch (i2) {
            case "circle":
              return this.drawCircle(t3, e2);
            case "rect":
              return this.drawRect(t3, e2);
            default:
              if (typeof i2 == "function") return i2.call(this, t3, e2);
              throw new Error("Unknown " + i2 + " point type!");
          }
        }, t2.prototype.drawCircle = function(t3, e2) {
          return this.nested.circle(this.options.pointSize).center(t3, e2);
        }, t2.prototype.drawRect = function(t3, e2) {
          return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t3, e2);
        }, t2.prototype.updatePointSelection = function() {
          var t3 = this.getPointArray();
          this.pointSelection.set.each(function(e2) {
            this.cx() === t3[e2][0] && this.cy() === t3[e2][1] || this.center(t3[e2][0], t3[e2][1]);
          });
        }, t2.prototype.updateRectSelection = function() {
          var t3 = this, e2 = this.el.bbox();
          if (this.rectSelection.set.get(0).attr({ width: e2.width, height: e2.height }), this.options.points.length && this.options.points.map(function(i3, a2) {
            var s2 = t3.pointCoords(i3, e2);
            t3.rectSelection.set.get(a2 + 1).center(s2.x, s2.y);
          }), this.options.rotationPoint) {
            var i2 = this.rectSelection.set.length();
            this.rectSelection.set.get(i2 - 1).center(e2.width / 2, 20);
          }
        }, t2.prototype.selectRect = function(t3) {
          var e2 = this, i2 = this.el.bbox();
          function a2(t4) {
            return function(i3) {
              (i3 = i3 || window.event).preventDefault ? i3.preventDefault() : i3.returnValue = !1, i3.stopPropagation();
              var a3 = i3.pageX || i3.touches[0].pageX, s3 = i3.pageY || i3.touches[0].pageY;
              e2.el.fire(t4, { x: a3, y: s3, event: i3 });
            };
          }
          if (this.rectSelection.isSelected = t3, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i2.width, i2.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2 && (this.options.points.map(function(t4, s3) {
            var r3 = e2.pointCoords(t4, i2), o2 = e2.drawPoint(r3.x, r3.y).attr("class", e2.options.classPoints + "_" + t4).on("mousedown", a2(t4)).on("touchstart", a2(t4));
            e2.rectSelection.set.add(o2);
          }), this.rectSelection.set.each(function() {
            this.addClass(e2.options.classPoints);
          })), this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
            var s2 = function(t4) {
              (t4 = t4 || window.event).preventDefault ? t4.preventDefault() : t4.returnValue = !1, t4.stopPropagation();
              var i3 = t4.pageX || t4.touches[0].pageX, a3 = t4.pageY || t4.touches[0].pageY;
              e2.el.fire("rot", { x: i3, y: a3, event: t4 });
            }, r2 = this.drawPoint(i2.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", s2).on("mousedown", s2);
            this.rectSelection.set.add(r2);
          }
        }, t2.prototype.handler = function() {
          var t3 = this.el.bbox();
          this.nested.matrix(new SVG.Matrix(this.el).translate(t3.x, t3.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection();
        }, t2.prototype.observe = function() {
          var t3 = this;
          if (MutationObserver) if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver(function() {
            t3.handler();
          }), this.observerInst.observe(this.el.node, { attributes: !0 });
          else try {
            this.observerInst.disconnect(), delete this.observerInst;
          } catch {
          }
          else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function() {
            t3.handler();
          });
        }, t2.prototype.cleanup = function() {
          !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function() {
            this.remove();
          }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function() {
            this.remove();
          }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested);
        }, SVG.extend(SVG.Element, { selectize: function(e2, i2) {
          return typeof e2 == "object" && (i2 = e2, e2 = !0), (this.remember("_selectHandler") || new t2(this)).init(e2 === void 0 || e2, i2 || {}), this;
        } }), SVG.Element.prototype.selectize.defaults = { points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"], pointsExclude: [], classRect: "svg_select_boundingRect", classPoints: "svg_select_points", pointSize: 7, rotationPoint: !0, deepSelect: !1, pointType: "circle" };
      }(), function() {
        (function() {
          function t2(t3) {
            t3.remember("_resizeHandler", this), this.el = t3, this.parameters = {}, this.lastUpdateCall = null, this.p = t3.doc().node.createSVGPoint();
          }
          t2.prototype.transformPoint = function(t3, e2, i2) {
            return this.p.x = t3 - (this.offset.x - window.pageXOffset), this.p.y = e2 - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i2 || this.m);
          }, t2.prototype._extractPosition = function(t3) {
            return { x: t3.clientX != null ? t3.clientX : t3.touches[0].clientX, y: t3.clientY != null ? t3.clientY : t3.touches[0].clientY };
          }, t2.prototype.init = function(t3) {
            var e2 = this;
            if (this.stop(), t3 !== "stop") {
              for (var i2 in this.options = {}, this.el.resize.defaults) this.options[i2] = this.el.resize.defaults[i2], t3[i2] !== void 0 && (this.options[i2] = t3[i2]);
              this.el.on("lt.resize", function(t4) {
                e2.resize(t4 || window.event);
              }), this.el.on("rt.resize", function(t4) {
                e2.resize(t4 || window.event);
              }), this.el.on("rb.resize", function(t4) {
                e2.resize(t4 || window.event);
              }), this.el.on("lb.resize", function(t4) {
                e2.resize(t4 || window.event);
              }), this.el.on("t.resize", function(t4) {
                e2.resize(t4 || window.event);
              }), this.el.on("r.resize", function(t4) {
                e2.resize(t4 || window.event);
              }), this.el.on("b.resize", function(t4) {
                e2.resize(t4 || window.event);
              }), this.el.on("l.resize", function(t4) {
                e2.resize(t4 || window.event);
              }), this.el.on("rot.resize", function(t4) {
                e2.resize(t4 || window.event);
              }), this.el.on("point.resize", function(t4) {
                e2.resize(t4 || window.event);
              }), this.update();
            }
          }, t2.prototype.stop = function() {
            return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this;
          }, t2.prototype.resize = function(t3) {
            var e2 = this;
            this.m = this.el.node.getScreenCTM().inverse(), this.offset = { x: window.pageXOffset, y: window.pageYOffset };
            var i2 = this._extractPosition(t3.detail.event);
            if (this.parameters = { type: this.el.type, p: this.transformPoint(i2.x, i2.y), x: t3.detail.x, y: t3.detail.y, box: this.el.bbox(), rotation: this.el.transform().rotation }, this.el.type === "text" && (this.parameters.fontSize = this.el.attr()["font-size"]), t3.detail.i !== void 0) {
              var a2 = this.el.array().valueOf();
              this.parameters.i = t3.detail.i, this.parameters.pointCoords = [a2[t3.detail.i][0], a2[t3.detail.i][1]];
            }
            switch (t3.type) {
              case "lt":
                this.calc = function(t4, e3) {
                  var i3 = this.snapToGrid(t4, e3);
                  if (this.parameters.box.width - i3[0] > 0 && this.parameters.box.height - i3[1] > 0) {
                    if (this.parameters.type === "text") return this.el.move(this.parameters.box.x + i3[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i3[0]);
                    i3 = this.checkAspectRatio(i3), this.el.move(this.parameters.box.x + i3[0], this.parameters.box.y + i3[1]).size(this.parameters.box.width - i3[0], this.parameters.box.height - i3[1]);
                  }
                };
                break;
              case "rt":
                this.calc = function(t4, e3) {
                  var i3 = this.snapToGrid(t4, e3, 2);
                  if (this.parameters.box.width + i3[0] > 0 && this.parameters.box.height - i3[1] > 0) {
                    if (this.parameters.type === "text") return this.el.move(this.parameters.box.x - i3[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i3[0]);
                    i3 = this.checkAspectRatio(i3, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + i3[1]).size(this.parameters.box.width + i3[0], this.parameters.box.height - i3[1]);
                  }
                };
                break;
              case "rb":
                this.calc = function(t4, e3) {
                  var i3 = this.snapToGrid(t4, e3, 0);
                  if (this.parameters.box.width + i3[0] > 0 && this.parameters.box.height + i3[1] > 0) {
                    if (this.parameters.type === "text") return this.el.move(this.parameters.box.x - i3[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i3[0]);
                    i3 = this.checkAspectRatio(i3), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i3[0], this.parameters.box.height + i3[1]);
                  }
                };
                break;
              case "lb":
                this.calc = function(t4, e3) {
                  var i3 = this.snapToGrid(t4, e3, 1);
                  if (this.parameters.box.width - i3[0] > 0 && this.parameters.box.height + i3[1] > 0) {
                    if (this.parameters.type === "text") return this.el.move(this.parameters.box.x + i3[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i3[0]);
                    i3 = this.checkAspectRatio(i3, !0), this.el.move(this.parameters.box.x + i3[0], this.parameters.box.y).size(this.parameters.box.width - i3[0], this.parameters.box.height + i3[1]);
                  }
                };
                break;
              case "t":
                this.calc = function(t4, e3) {
                  var i3 = this.snapToGrid(t4, e3, 2);
                  if (this.parameters.box.height - i3[1] > 0) {
                    if (this.parameters.type === "text") return;
                    this.el.move(this.parameters.box.x, this.parameters.box.y + i3[1]).height(this.parameters.box.height - i3[1]);
                  }
                };
                break;
              case "r":
                this.calc = function(t4, e3) {
                  var i3 = this.snapToGrid(t4, e3, 0);
                  if (this.parameters.box.width + i3[0] > 0) {
                    if (this.parameters.type === "text") return;
                    this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i3[0]);
                  }
                };
                break;
              case "b":
                this.calc = function(t4, e3) {
                  var i3 = this.snapToGrid(t4, e3, 0);
                  if (this.parameters.box.height + i3[1] > 0) {
                    if (this.parameters.type === "text") return;
                    this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i3[1]);
                  }
                };
                break;
              case "l":
                this.calc = function(t4, e3) {
                  var i3 = this.snapToGrid(t4, e3, 1);
                  if (this.parameters.box.width - i3[0] > 0) {
                    if (this.parameters.type === "text") return;
                    this.el.move(this.parameters.box.x + i3[0], this.parameters.box.y).width(this.parameters.box.width - i3[0]);
                  }
                };
                break;
              case "rot":
                this.calc = function(t4, e3) {
                  var i3 = t4 + this.parameters.p.x, a3 = e3 + this.parameters.p.y, s2 = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2), r2 = Math.atan2(a3 - this.parameters.box.y - this.parameters.box.height / 2, i3 - this.parameters.box.x - this.parameters.box.width / 2), o2 = this.parameters.rotation + 180 * (r2 - s2) / Math.PI + this.options.snapToAngle / 2;
                  this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(o2 - o2 % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy);
                };
                break;
              case "point":
                this.calc = function(t4, e3) {
                  var i3 = this.snapToGrid(t4, e3, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), a3 = this.el.array().valueOf();
                  a3[this.parameters.i][0] = this.parameters.pointCoords[0] + i3[0], a3[this.parameters.i][1] = this.parameters.pointCoords[1] + i3[1], this.el.plot(a3);
                };
            }
            this.el.fire("resizestart", { dx: this.parameters.x, dy: this.parameters.y, event: t3 }), SVG.on(window, "touchmove.resize", function(t4) {
              e2.update(t4 || window.event);
            }), SVG.on(window, "touchend.resize", function() {
              e2.done();
            }), SVG.on(window, "mousemove.resize", function(t4) {
              e2.update(t4 || window.event);
            }), SVG.on(window, "mouseup.resize", function() {
              e2.done();
            });
          }, t2.prototype.update = function(t3) {
            if (t3) {
              var e2 = this._extractPosition(t3), i2 = this.transformPoint(e2.x, e2.y), a2 = i2.x - this.parameters.p.x, s2 = i2.y - this.parameters.p.y;
              this.lastUpdateCall = [a2, s2], this.calc(a2, s2), this.el.fire("resizing", { dx: a2, dy: s2, event: t3 });
            } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]);
          }, t2.prototype.done = function() {
            this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone");
          }, t2.prototype.snapToGrid = function(t3, e2, i2, a2) {
            var s2;
            return a2 !== void 0 ? s2 = [(i2 + t3) % this.options.snapToGrid, (a2 + e2) % this.options.snapToGrid] : (i2 = i2 ?? 3, s2 = [(this.parameters.box.x + t3 + (1 & i2 ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e2 + (2 & i2 ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t3 < 0 && (s2[0] -= this.options.snapToGrid), e2 < 0 && (s2[1] -= this.options.snapToGrid), t3 -= Math.abs(s2[0]) < this.options.snapToGrid / 2 ? s2[0] : s2[0] - (t3 < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e2 -= Math.abs(s2[1]) < this.options.snapToGrid / 2 ? s2[1] : s2[1] - (e2 < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t3, e2, i2, a2);
          }, t2.prototype.constraintToBox = function(t3, e2, i2, a2) {
            var s2, r2, o2 = this.options.constraint || {};
            return a2 !== void 0 ? (s2 = i2, r2 = a2) : (s2 = this.parameters.box.x + (1 & i2 ? 0 : this.parameters.box.width), r2 = this.parameters.box.y + (2 & i2 ? 0 : this.parameters.box.height)), o2.minX !== void 0 && s2 + t3 < o2.minX && (t3 = o2.minX - s2), o2.maxX !== void 0 && s2 + t3 > o2.maxX && (t3 = o2.maxX - s2), o2.minY !== void 0 && r2 + e2 < o2.minY && (e2 = o2.minY - r2), o2.maxY !== void 0 && r2 + e2 > o2.maxY && (e2 = o2.maxY - r2), [t3, e2];
          }, t2.prototype.checkAspectRatio = function(t3, e2) {
            if (!this.options.saveAspectRatio) return t3;
            var i2 = t3.slice(), a2 = this.parameters.box.width / this.parameters.box.height, s2 = this.parameters.box.width + t3[0], r2 = this.parameters.box.height - t3[1], o2 = s2 / r2;
            return o2 < a2 ? (i2[1] = s2 / a2 - this.parameters.box.height, e2 && (i2[1] = -i2[1])) : o2 > a2 && (i2[0] = this.parameters.box.width - r2 * a2, e2 && (i2[0] = -i2[0])), i2;
          }, SVG.extend(SVG.Element, { resize: function(e2) {
            return (this.remember("_resizeHandler") || new t2(this)).init(e2 || {}), this;
          } }), SVG.Element.prototype.resize.defaults = { snapToAngle: 0.1, snapToGrid: 1, constraint: {}, saveAspectRatio: !1 };
        }).call(this);
      }(), window.Apex === void 0 && (window.Apex = {});
      var Vt = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "initModules", value: function() {
          this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new b(this.ctx), this.ctx.axes = new J(this.ctx), this.ctx.core = new Bt(this.ctx.el, this.ctx), this.ctx.config = new Y({}), this.ctx.data = new B(this.ctx), this.ctx.grid = new j(this.ctx), this.ctx.graphics = new m(this.ctx), this.ctx.coreUtils = new y(this.ctx), this.ctx.crosshairs = new Q(this.ctx), this.ctx.events = new Z(this.ctx), this.ctx.exports = new G(this.ctx), this.ctx.localization = new $(this.ctx), this.ctx.options = new I(), this.ctx.responsive = new K(this.ctx), this.ctx.series = new W(this.ctx), this.ctx.theme = new tt(this.ctx), this.ctx.formatters = new S(this.ctx), this.ctx.titleSubtitle = new et(this.ctx), this.ctx.legend = new lt(this.ctx), this.ctx.toolbar = new ht(this.ctx), this.ctx.tooltip = new bt(this.ctx), this.ctx.dimensions = new ot(this.ctx), this.ctx.updateHelpers = new Gt(this.ctx), this.ctx.zoomPanSelection = new ct(this.ctx), this.ctx.w.globals.tooltip = new bt(this.ctx);
        } }]), t2;
      }(), jt = function() {
        function t2(e2) {
          a(this, t2), this.ctx = e2, this.w = e2.w;
        }
        return r(t2, [{ key: "clear", value: function(t3) {
          var e2 = t3.isUpdating;
          this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: e2 });
        } }, { key: "killSVG", value: function(t3) {
          t3.each(function(t4, e2) {
            this.removeClass("*"), this.off(), this.stop();
          }, !0), t3.ungroup(), t3.clear();
        } }, { key: "clearDomElements", value: function(t3) {
          var e2 = this, i2 = t3.isUpdating, a2 = this.w.globals.dom.Paper.node;
          a2.parentNode && a2.parentNode.parentNode && !i2 && (a2.parentNode.parentNode.style.minHeight = "unset");
          var s2 = this.w.globals.dom.baseEl;
          s2 && this.ctx.eventList.forEach(function(t4) {
            s2.removeEventListener(t4, e2.ctx.events.documentEvent);
          });
          var r2 = this.w.globals.dom;
          if (this.ctx.el !== null) for (; this.ctx.el.firstChild; ) this.ctx.el.removeChild(this.ctx.el.firstChild);
          this.killSVG(r2.Paper), r2.Paper.remove(), r2.elWrap = null, r2.elGraphical = null, r2.elLegendWrap = null, r2.elLegendForeign = null, r2.baseEl = null, r2.elGridRect = null, r2.elGridRectMask = null, r2.elGridRectMarkerMask = null, r2.elForecastMask = null, r2.elNonForecastMask = null, r2.elDefs = null;
        } }]), t2;
      }(), _t = /* @__PURE__ */ new WeakMap(), Ut = function() {
        function t2(e2, i2) {
          a(this, t2), this.opts = i2, this.ctx = this, this.w = new R(i2).init(), this.el = e2, this.w.globals.cuid = x.randomId(), this.w.globals.chartID = this.w.config.chart.id ? x.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new Vt(this).initModules(), this.create = x.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
        }
        return r(t2, [{ key: "render", value: function() {
          var t3 = this;
          return new Promise(function(e2, i2) {
            if (t3.el !== null) {
              Apex._chartInstances === void 0 && (Apex._chartInstances = []), t3.w.config.chart.id && Apex._chartInstances.push({ id: t3.w.globals.chartID, group: t3.w.config.chart.group, chart: t3 }), t3.setLocale(t3.w.config.chart.defaultLocale);
              var a2 = t3.w.config.chart.events.beforeMount;
              typeof a2 == "function" && a2(t3, t3.w), t3.events.fireEvent("beforeMount", [t3, t3.w]), window.addEventListener("resize", t3.windowResizeHandler), function(t4, e3) {
                var i3 = !1;
                if (t4.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
                  var a3 = t4.getBoundingClientRect();
                  t4.style.display !== "none" && a3.width !== 0 || (i3 = !0);
                }
                var s3 = new ResizeObserver(function(a4) {
                  i3 && e3.call(t4, a4), i3 = !0;
                });
                t4.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(t4.children).forEach(function(t5) {
                  return s3.observe(t5);
                }) : s3.observe(t4), _t.set(e3, s3);
              }(t3.el.parentNode, t3.parentResizeHandler);
              var s2 = t3.el.getRootNode && t3.el.getRootNode(), r2 = x.is("ShadowRoot", s2), o2 = t3.el.ownerDocument, n2 = r2 ? s2.getElementById("apexcharts-css") : o2.getElementById("apexcharts-css");
              if (!n2) {
                var l2;
                (n2 = document.createElement("style")).id = "apexcharts-css", n2.textContent = `@keyframes opaque {
  0% {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

@keyframes resizeanim {

  0%,
  to {
    opacity: 0
  }
}

.apexcharts-canvas {
  position: relative;
  user-select: none
}

.apexcharts-canvas ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px
}

.apexcharts-canvas ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)
}

.apexcharts-inner {
  position: relative
}

.apexcharts-text tspan {
  font-family: inherit
}

rect.legend-mouseover-inactive,
.legend-mouseover-inactive rect,
.legend-mouseover-inactive path,
.legend-mouseover-inactive circle,
.legend-mouseover-inactive line,
.legend-mouseover-inactive text.apexcharts-yaxis-title-text,
.legend-mouseover-inactive text.apexcharts-yaxis-label {
  transition: .15s ease all;
  opacity: .2
}

.apexcharts-legend-text {
  padding-left: 15px;
  margin-left: -15px;
}

.apexcharts-series-collapsed {
  opacity: 0
}

.apexcharts-tooltip {
  border-radius: 5px;
  box-shadow: 2px 2px 6px -4px #999;
  cursor: default;
  font-size: 14px;
  left: 62px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  z-index: 12;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid #e3e3e3;
  background: rgba(255, 255, 255, .96)
}

.apexcharts-tooltip.apexcharts-theme-dark {
  color: #fff;
  background: rgba(30, 30, 30, .8)
}

.apexcharts-tooltip * {
  font-family: inherit
}

.apexcharts-tooltip-title {
  padding: 6px;
  font-size: 15px;
  margin-bottom: 4px
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: #eceff1;
  border-bottom: 1px solid #ddd
}

.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
  background: rgba(0, 0, 0, .7);
  border-bottom: 1px solid #333
}

.apexcharts-tooltip-text-goals-value,
.apexcharts-tooltip-text-y-value,
.apexcharts-tooltip-text-z-value {
  display: inline-block;
  margin-left: 5px;
  font-weight: 600
}

.apexcharts-tooltip-text-goals-label:empty,
.apexcharts-tooltip-text-goals-value:empty,
.apexcharts-tooltip-text-y-label:empty,
.apexcharts-tooltip-text-y-value:empty,
.apexcharts-tooltip-text-z-value:empty,
.apexcharts-tooltip-title:empty {
  display: none
}

.apexcharts-tooltip-text-goals-label,
.apexcharts-tooltip-text-goals-value {
  padding: 6px 0 5px
}

.apexcharts-tooltip-goals-group,
.apexcharts-tooltip-text-goals-label,
.apexcharts-tooltip-text-goals-value {
  display: flex
}

.apexcharts-tooltip-text-goals-label:not(:empty),
.apexcharts-tooltip-text-goals-value:not(:empty) {
  margin-top: -6px
}

.apexcharts-tooltip-marker {
  width: 12px;
  height: 12px;
  position: relative;
  top: 0;
  margin-right: 10px;
  border-radius: 50%
}

.apexcharts-tooltip-series-group {
  padding: 0 10px;
  display: none;
  text-align: left;
  justify-content: left;
  align-items: center
}

.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
  opacity: 1
}

.apexcharts-tooltip-series-group.apexcharts-active,
.apexcharts-tooltip-series-group:last-child {
  padding-bottom: 4px
}

.apexcharts-tooltip-y-group {
  padding: 6px 0 5px
}

.apexcharts-custom-tooltip,
.apexcharts-tooltip-box {
  padding: 4px 8px
}

.apexcharts-tooltip-boxPlot {
  display: flex;
  flex-direction: column-reverse
}

.apexcharts-tooltip-box>div {
  margin: 4px 0
}

.apexcharts-tooltip-box span.value {
  font-weight: 700
}

.apexcharts-tooltip-rangebar {
  padding: 5px 8px
}

.apexcharts-tooltip-rangebar .category {
  font-weight: 600;
  color: #777
}

.apexcharts-tooltip-rangebar .series-name {
  font-weight: 700;
  display: block;
  margin-bottom: 5px
}

.apexcharts-xaxistooltip,
.apexcharts-yaxistooltip {
  opacity: 0;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #eceff1;
  border: 1px solid #90a4ae
}

.apexcharts-xaxistooltip {
  padding: 9px 10px;
  transition: .15s ease all
}

.apexcharts-xaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .5);
  color: #fff
}

.apexcharts-xaxistooltip:after,
.apexcharts-xaxistooltip:before {
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-xaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-left: -6px
}

.apexcharts-xaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-left: -7px
}

.apexcharts-xaxistooltip-bottom:after,
.apexcharts-xaxistooltip-bottom:before {
  bottom: 100%
}

.apexcharts-xaxistooltip-top:after,
.apexcharts-xaxistooltip-top:before {
  top: 100%
}

.apexcharts-xaxistooltip-bottom:after {
  border-bottom-color: #eceff1
}

.apexcharts-xaxistooltip-bottom:before {
  border-bottom-color: #90a4ae
}

.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,
.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
  border-bottom-color: rgba(0, 0, 0, .5)
}

.apexcharts-xaxistooltip-top:after {
  border-top-color: #eceff1
}

.apexcharts-xaxistooltip-top:before {
  border-top-color: #90a4ae
}

.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,
.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
  border-top-color: rgba(0, 0, 0, .5)
}

.apexcharts-xaxistooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-yaxistooltip {
  padding: 4px 10px
}

.apexcharts-yaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .5);
  color: #fff
}

.apexcharts-yaxistooltip:after,
.apexcharts-yaxistooltip:before {
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-yaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-top: -6px
}

.apexcharts-yaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-top: -7px
}

.apexcharts-yaxistooltip-left:after,
.apexcharts-yaxistooltip-left:before {
  left: 100%
}

.apexcharts-yaxistooltip-right:after,
.apexcharts-yaxistooltip-right:before {
  right: 100%
}

.apexcharts-yaxistooltip-left:after {
  border-left-color: #eceff1
}

.apexcharts-yaxistooltip-left:before {
  border-left-color: #90a4ae
}

.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,
.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
  border-left-color: rgba(0, 0, 0, .5)
}

.apexcharts-yaxistooltip-right:after {
  border-right-color: #eceff1
}

.apexcharts-yaxistooltip-right:before {
  border-right-color: #90a4ae
}

.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,
.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
  border-right-color: rgba(0, 0, 0, .5)
}

.apexcharts-yaxistooltip.apexcharts-active {
  opacity: 1
}

.apexcharts-yaxistooltip-hidden {
  display: none
}

.apexcharts-xcrosshairs,
.apexcharts-ycrosshairs {
  pointer-events: none;
  opacity: 0;
  transition: .15s ease all
}

.apexcharts-xcrosshairs.apexcharts-active,
.apexcharts-ycrosshairs.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-ycrosshairs-hidden {
  opacity: 0
}

.apexcharts-selection-rect {
  cursor: move
}

.svg_select_boundingRect,
.svg_select_points_rot {
  pointer-events: none;
  opacity: 0;
  visibility: hidden
}

.apexcharts-selection-rect+g .svg_select_boundingRect,
.apexcharts-selection-rect+g .svg_select_points_rot {
  opacity: 0;
  visibility: hidden
}

.apexcharts-selection-rect+g .svg_select_points_l,
.apexcharts-selection-rect+g .svg_select_points_r {
  cursor: ew-resize;
  opacity: 1;
  visibility: visible
}

.svg_select_points {
  fill: #efefef;
  stroke: #333;
  rx: 2
}

.apexcharts-svg.apexcharts-zoomable.hovering-zoom {
  cursor: crosshair
}

.apexcharts-svg.apexcharts-zoomable.hovering-pan {
  cursor: move
}

.apexcharts-menu-icon,
.apexcharts-pan-icon,
.apexcharts-reset-icon,
.apexcharts-selection-icon,
.apexcharts-toolbar-custom-icon,
.apexcharts-zoom-icon,
.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: #6e8192;
  text-align: center
}

.apexcharts-menu-icon svg,
.apexcharts-reset-icon svg,
.apexcharts-zoom-icon svg,
.apexcharts-zoomin-icon svg,
.apexcharts-zoomout-icon svg {
  fill: #6e8192
}

.apexcharts-selection-icon svg {
  fill: #444;
  transform: scale(.76)
}

.apexcharts-theme-dark .apexcharts-menu-icon svg,
.apexcharts-theme-dark .apexcharts-pan-icon svg,
.apexcharts-theme-dark .apexcharts-reset-icon svg,
.apexcharts-theme-dark .apexcharts-selection-icon svg,
.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,
.apexcharts-theme-dark .apexcharts-zoom-icon svg,
.apexcharts-theme-dark .apexcharts-zoomin-icon svg,
.apexcharts-theme-dark .apexcharts-zoomout-icon svg {
  fill: #f3f4f5
}

.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {
  fill: #008ffb
}

.apexcharts-theme-light .apexcharts-menu-icon:hover svg,
.apexcharts-theme-light .apexcharts-reset-icon:hover svg,
.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {
  fill: #333
}

.apexcharts-menu-icon,
.apexcharts-selection-icon {
  position: relative
}

.apexcharts-reset-icon {
  margin-left: 5px
}

.apexcharts-menu-icon,
.apexcharts-reset-icon,
.apexcharts-zoom-icon {
  transform: scale(.85)
}

.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  transform: scale(.7)
}

.apexcharts-zoomout-icon {
  margin-right: 3px
}

.apexcharts-pan-icon {
  transform: scale(.62);
  position: relative;
  left: 1px;
  top: 0
}

.apexcharts-pan-icon svg {
  fill: #fff;
  stroke: #6e8192;
  stroke-width: 2
}

.apexcharts-pan-icon.apexcharts-selected svg {
  stroke: #008ffb
}

.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
  stroke: #333
}

.apexcharts-toolbar {
  position: absolute;
  z-index: 11;
  max-width: 176px;
  text-align: right;
  border-radius: 3px;
  padding: 0 6px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center
}

.apexcharts-menu {
  background: #fff;
  position: absolute;
  top: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 3px;
  right: 10px;
  opacity: 0;
  min-width: 110px;
  transition: .15s ease all;
  pointer-events: none
}

.apexcharts-menu.apexcharts-menu-open {
  opacity: 1;
  pointer-events: all;
  transition: .15s ease all
}

.apexcharts-menu-item {
  padding: 6px 7px;
  font-size: 12px;
  cursor: pointer
}

.apexcharts-theme-light .apexcharts-menu-item:hover {
  background: #eee
}

.apexcharts-theme-dark .apexcharts-menu {
  background: rgba(0, 0, 0, .7);
  color: #fff
}

@media screen and (min-width:768px) {
  .apexcharts-canvas:hover .apexcharts-toolbar {
    opacity: 1
  }
}

.apexcharts-canvas .apexcharts-element-hidden,
.apexcharts-datalabel.apexcharts-element-hidden,
.apexcharts-hide .apexcharts-series-points {
  opacity: 0;
}

.apexcharts-hidden-element-shown {
  opacity: 1;
  transition: 0.25s ease all;
}

.apexcharts-datalabel,
.apexcharts-datalabel-label,
.apexcharts-datalabel-value,
.apexcharts-datalabels,
.apexcharts-pie-label {
  cursor: default;
  pointer-events: none
}

.apexcharts-pie-label-delay {
  opacity: 0;
  animation-name: opaque;
  animation-duration: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease
}

.apexcharts-radialbar-label {
  cursor: pointer;
}

.apexcharts-annotation-rect,
.apexcharts-area-series .apexcharts-area,
.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
.apexcharts-gridline,
.apexcharts-line,
.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
.apexcharts-point-annotation-label,
.apexcharts-radar-series path:not(.apexcharts-marker),
.apexcharts-radar-series polygon,
.apexcharts-toolbar svg,
.apexcharts-tooltip .apexcharts-marker,
.apexcharts-xaxis-annotation-label,
.apexcharts-yaxis-annotation-label,
.apexcharts-zoom-rect {
  pointer-events: none
}

.apexcharts-tooltip-active .apexcharts-marker {
  transition: .15s ease all
}

.resize-triggers {
  animation: 1ms resizeanim;
  visibility: hidden;
  opacity: 0;
  height: 100%;
  width: 100%;
  overflow: hidden
}

.contract-trigger:before,
.resize-triggers,
.resize-triggers>div {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0
}

.resize-triggers>div {
  height: 100%;
  width: 100%;
  background: #eee;
  overflow: auto
}

.contract-trigger:before {
  overflow: hidden;
  width: 200%;
  height: 200%
}

.apexcharts-bar-goals-markers {
  pointer-events: none
}

.apexcharts-bar-shadows {
  pointer-events: none
}

.apexcharts-rangebar-goals-markers {
  pointer-events: none
}`;
                var h2 = ((l2 = t3.opts.chart) === null || l2 === void 0 ? void 0 : l2.nonce) || t3.w.config.chart.nonce;
                h2 && n2.setAttribute("nonce", h2), r2 ? s2.prepend(n2) : o2.head.appendChild(n2);
              }
              var c2 = t3.create(t3.w.config.series, {});
              if (!c2) return e2(t3);
              t3.mount(c2).then(function() {
                typeof t3.w.config.chart.events.mounted == "function" && t3.w.config.chart.events.mounted(t3, t3.w), t3.events.fireEvent("mounted", [t3, t3.w]), e2(c2);
              }).catch(function(t4) {
                i2(t4);
              });
            } else i2(new Error("Element not found"));
          });
        } }, { key: "create", value: function(t3, e2) {
          var i2 = this.w;
          new Vt(this).initModules();
          var a2 = this.w.globals;
          if (a2.noData = !1, a2.animationEnded = !1, this.responsive.checkResponsiveConfig(e2), i2.config.xaxis.convertedCatToNumeric && new E(i2.config).convertCatToNumericXaxis(i2.config, this.ctx), this.el === null || (this.core.setupElements(), i2.config.chart.type === "treemap" && (i2.config.grid.show = !1, i2.config.yaxis[0].show = !1), a2.svgWidth === 0)) return a2.animationEnded = !0, null;
          var s2 = y.checkComboSeries(t3, i2.config.chart.type);
          a2.comboCharts = s2.comboCharts, a2.comboBarCount = s2.comboBarCount;
          var r2 = t3.every(function(t4) {
            return t4.data && t4.data.length === 0;
          });
          (t3.length === 0 || r2 && a2.collapsedSeries.length < 1) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(t3), this.theme.init(), new D(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a2.noData && a2.collapsedSeries.length !== a2.series.length && !i2.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), a2.axisCharts && (this.core.coreCalculations(), i2.config.xaxis.type !== "category" && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = i2.globals.minX, this.ctx.toolbar.maxX = i2.globals.maxX), this.formatters.heatmapLabelFormatters(), new y(this).getLargestMarkerSize(), this.dimensions.plotCoords();
          var o2 = this.core.xySettings();
          this.grid.createGridMask();
          var n2 = this.core.plotChartType(t3, o2), l2 = new N(this);
          return l2.bringForward(), i2.config.dataLabels.background.enabled && l2.dataLabelsBackground(), this.core.shiftGraphPosition(), { elGraph: n2, xyRatios: o2, dimensions: { plot: { left: i2.globals.translateX, top: i2.globals.translateY, width: i2.globals.gridWidth, height: i2.globals.gridHeight } } };
        } }, { key: "mount", value: function() {
          var t3 = this, e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i2 = this, a2 = i2.w;
          return new Promise(function(s2, r2) {
            if (i2.el === null) return r2(new Error("Not enough data to display or target element not found"));
            (e2 === null || a2.globals.allSeriesCollapsed) && i2.series.handleNoData(), i2.grid = new j(i2);
            var o2, n2, l2 = i2.grid.drawGrid();
            if (i2.annotations = new T(i2), i2.annotations.drawImageAnnos(), i2.annotations.drawTextAnnos(), a2.config.grid.position === "back" && (l2 && a2.globals.dom.elGraphical.add(l2.el), l2 != null && (o2 = l2.elGridBorders) !== null && o2 !== void 0 && o2.node && a2.globals.dom.elGraphical.add(l2.elGridBorders)), Array.isArray(e2.elGraph)) for (var h2 = 0; h2 < e2.elGraph.length; h2++) a2.globals.dom.elGraphical.add(e2.elGraph[h2]);
            else a2.globals.dom.elGraphical.add(e2.elGraph);
            a2.config.grid.position === "front" && (l2 && a2.globals.dom.elGraphical.add(l2.el), l2 != null && (n2 = l2.elGridBorders) !== null && n2 !== void 0 && n2.node && a2.globals.dom.elGraphical.add(l2.elGridBorders)), a2.config.xaxis.crosshairs.position === "front" && i2.crosshairs.drawXCrosshairs(), a2.config.yaxis[0].crosshairs.position === "front" && i2.crosshairs.drawYCrosshairs(), a2.config.chart.type !== "treemap" && i2.axes.drawAxis(a2.config.chart.type, l2);
            var c2 = new V(t3.ctx, l2), d2 = new q(t3.ctx, l2);
            if (l2 !== null && (c2.xAxisLabelCorrections(l2.xAxisTickWidth), d2.setYAxisTextAlignments(), a2.config.yaxis.map(function(t4, e3) {
              a2.globals.ignoreYAxisIndexes.indexOf(e3) === -1 && d2.yAxisTitleRotate(e3, t4.opposite);
            })), i2.annotations.drawAxesAnnotations(), !a2.globals.noData) {
              if (a2.config.tooltip.enabled && !a2.globals.noData && i2.w.globals.tooltip.drawTooltip(e2.xyRatios), a2.globals.axisCharts && (a2.globals.isXNumeric || a2.config.xaxis.convertedCatToNumeric || a2.globals.isRangeBar)) (a2.config.chart.zoom.enabled || a2.config.chart.selection && a2.config.chart.selection.enabled || a2.config.chart.pan && a2.config.chart.pan.enabled) && i2.zoomPanSelection.init({ xyRatios: e2.xyRatios });
              else {
                var g2 = a2.config.chart.toolbar.tools;
                ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function(t4) {
                  g2[t4] = !1;
                });
              }
              a2.config.chart.toolbar.show && !a2.globals.allSeriesCollapsed && i2.toolbar.createToolbar();
            }
            a2.globals.memory.methodsToExec.length > 0 && a2.globals.memory.methodsToExec.forEach(function(t4) {
              t4.method(t4.params, !1, t4.context);
            }), a2.globals.axisCharts || a2.globals.noData || i2.core.resizeNonAxisCharts(), s2(i2);
          });
        } }, { key: "destroy", value: function() {
          var t3, e2;
          window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, t3 = this.parentResizeHandler, (e2 = _t.get(t3)) && (e2.disconnect(), _t.delete(t3));
          var i2 = this.w.config.chart.id;
          i2 && Apex._chartInstances.forEach(function(t4, e3) {
            t4.id === x.escapeString(i2) && Apex._chartInstances.splice(e3, 1);
          }), new jt(this.ctx).clear({ isUpdating: !1 });
        } }, { key: "updateOptions", value: function(t3) {
          var e2 = this, i2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], a2 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], s2 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], r2 = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], o2 = this.w;
          return o2.globals.selection = void 0, t3.series && (this.series.resetSeries(!1, !0, !1), t3.series.length && t3.series[0].data && (t3.series = t3.series.map(function(t4, i3) {
            return e2.updateHelpers._extendSeries(t4, i3);
          })), this.updateHelpers.revertDefaultAxisMinMax()), t3.xaxis && (t3 = this.updateHelpers.forceXAxisUpdate(t3)), t3.yaxis && (t3 = this.updateHelpers.forceYAxisUpdate(t3)), o2.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t3.theme && (t3 = this.theme.updateThemeOptions(t3)), this.updateHelpers._updateOptions(t3, i2, a2, s2, r2);
        } }, { key: "updateSeries", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i2 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
          return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t3, e2, i2);
        } }, { key: "appendSeries", value: function(t3) {
          var e2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i2 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], a2 = this.w.config.series.slice();
          return a2.push(t3), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a2, e2, i2);
        } }, { key: "appendData", value: function(t3) {
          var e2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i2 = this;
          i2.w.globals.dataChanged = !0, i2.series.getPreviousPaths();
          for (var a2 = i2.w.config.series.slice(), s2 = 0; s2 < a2.length; s2++) if (t3[s2] !== null && t3[s2] !== void 0) for (var r2 = 0; r2 < t3[s2].data.length; r2++) a2[s2].data.push(t3[s2].data[r2]);
          return i2.w.config.series = a2, e2 && (i2.w.globals.initialSeries = x.clone(i2.w.config.series)), this.update();
        } }, { key: "update", value: function(t3) {
          var e2 = this;
          return new Promise(function(i2, a2) {
            new jt(e2.ctx).clear({ isUpdating: !0 });
            var s2 = e2.create(e2.w.config.series, t3);
            if (!s2) return i2(e2);
            e2.mount(s2).then(function() {
              typeof e2.w.config.chart.events.updated == "function" && e2.w.config.chart.events.updated(e2, e2.w), e2.events.fireEvent("updated", [e2, e2.w]), e2.w.globals.isDirty = !0, i2(e2);
            }).catch(function(t4) {
              a2(t4);
            });
          });
        } }, { key: "getSyncedCharts", value: function() {
          var t3 = this.getGroupedCharts(), e2 = [this];
          return t3.length && (e2 = [], t3.forEach(function(t4) {
            e2.push(t4);
          })), e2;
        } }, { key: "getGroupedCharts", value: function() {
          var t3 = this;
          return Apex._chartInstances.filter(function(t4) {
            if (t4.group) return !0;
          }).map(function(e2) {
            return t3.w.config.chart.group === e2.group ? e2.chart : t3;
          });
        } }, { key: "toggleSeries", value: function(t3) {
          return this.series.toggleSeries(t3);
        } }, { key: "highlightSeriesOnLegendHover", value: function(t3, e2) {
          return this.series.toggleSeriesOnHover(t3, e2);
        } }, { key: "showSeries", value: function(t3) {
          this.series.showSeries(t3);
        } }, { key: "hideSeries", value: function(t3) {
          this.series.hideSeries(t3);
        } }, { key: "isSeriesHidden", value: function(t3) {
          this.series.isSeriesHidden(t3);
        } }, { key: "resetSeries", value: function() {
          var t3 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], e2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          this.series.resetSeries(t3, e2);
        } }, { key: "addEventListener", value: function(t3, e2) {
          this.events.addEventListener(t3, e2);
        } }, { key: "removeEventListener", value: function(t3, e2) {
          this.events.removeEventListener(t3, e2);
        } }, { key: "addXaxisAnnotation", value: function(t3) {
          var e2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a2 = this;
          i2 && (a2 = i2), a2.annotations.addXaxisAnnotationExternal(t3, e2, a2);
        } }, { key: "addYaxisAnnotation", value: function(t3) {
          var e2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a2 = this;
          i2 && (a2 = i2), a2.annotations.addYaxisAnnotationExternal(t3, e2, a2);
        } }, { key: "addPointAnnotation", value: function(t3) {
          var e2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a2 = this;
          i2 && (a2 = i2), a2.annotations.addPointAnnotationExternal(t3, e2, a2);
        } }, { key: "clearAnnotations", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0, e2 = this;
          t3 && (e2 = t3), e2.annotations.clearAnnotations(e2);
        } }, { key: "removeAnnotation", value: function(t3) {
          var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, i2 = this;
          e2 && (i2 = e2), i2.annotations.removeAnnotation(i2, t3);
        } }, { key: "getChartArea", value: function() {
          return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
        } }, { key: "getSeriesTotalXRange", value: function(t3, e2) {
          return this.coreUtils.getSeriesTotalsXRange(t3, e2);
        } }, { key: "getHighestValueInSeries", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return new U(this.ctx).getMinYMaxY(t3).highestY;
        } }, { key: "getLowestValueInSeries", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return new U(this.ctx).getMinYMaxY(t3).lowestY;
        } }, { key: "getSeriesTotal", value: function() {
          return this.w.globals.seriesTotals;
        } }, { key: "toggleDataPointSelection", value: function(t3, e2) {
          return this.updateHelpers.toggleDataPointSelection(t3, e2);
        } }, { key: "zoomX", value: function(t3, e2) {
          this.ctx.toolbar.zoomUpdateOptions(t3, e2);
        } }, { key: "setLocale", value: function(t3) {
          this.localization.setCurrentLocaleValues(t3);
        } }, { key: "dataURI", value: function(t3) {
          return new G(this.ctx).dataURI(t3);
        } }, { key: "exportToCSV", value: function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new G(this.ctx).exportToCSV(t3);
        } }, { key: "paper", value: function() {
          return this.w.globals.dom.Paper;
        } }, { key: "_parentResizeCallback", value: function() {
          this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
        } }, { key: "_windowResize", value: function() {
          var t3 = this;
          clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function() {
            t3.w.globals.resized = !0, t3.w.globals.dataChanged = !1, t3.ctx.update();
          }, 150);
        } }, { key: "_windowResizeHandler", value: function() {
          var t3 = this.w.config.chart.redrawOnWindowResize;
          typeof t3 == "function" && (t3 = t3()), t3 && this._windowResize();
        } }], [{ key: "getChartByID", value: function(t3) {
          var e2 = x.escapeString(t3);
          if (Apex._chartInstances) {
            var i2 = Apex._chartInstances.filter(function(t4) {
              return t4.id === e2;
            })[0];
            return i2 && i2.chart;
          }
        } }, { key: "initOnLoad", value: function() {
          for (var e2 = document.querySelectorAll("[data-apexcharts]"), i2 = 0; i2 < e2.length; i2++)
            new t2(e2[i2], JSON.parse(e2[i2].getAttribute("data-options"))).render();
        } }, { key: "exec", value: function(t3, e2) {
          var i2 = this.getChartByID(t3);
          if (i2) {
            i2.w.globals.isExecCalled = !0;
            var a2 = null;
            if (i2.publicMethods.indexOf(e2) !== -1) {
              for (var s2 = arguments.length, r2 = new Array(s2 > 2 ? s2 - 2 : 0), o2 = 2; o2 < s2; o2++) r2[o2 - 2] = arguments[o2];
              a2 = i2[e2].apply(i2, r2);
            }
            return a2;
          }
        } }, { key: "merge", value: function(t3, e2) {
          return x.extend(t3, e2);
        } }]), t2;
      }();
      module.exports = Ut;
    }
  });

  // hub/src/main.ts
  var import_apexcharts = __toESM(require_apexcharts_common(), 1);

  // hub/src/relative.ts
  var RelativeTimeComponent = class extends HTMLElement {
    connectedCallback() {
      this.parseAndFormatDate();
    }
    parseAndFormatDate() {
      let dateStr = this.innerHTML.trim(), date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        console.error("Invalid date:", dateStr);
        return;
      }
      this.title = date.toLocaleString();
      let relativeTime = this.getRelativeTime(date);
      this.innerHTML = relativeTime;
    }
    getRelativeTime(date) {
      let seconds = Math.round(((/* @__PURE__ */ new Date()).getTime() - date.getTime()) / 1e3), minutes = Math.round(seconds / 60), hours = Math.round(minutes / 60), days = Math.round(hours / 24);
      return hours < -24 ? `in ${Math.abs(days)} days` : minutes < -60 ? `in ${Math.abs(hours)} hours` : seconds < -60 ? `in ${Math.abs(minutes)} minutes` : seconds < 0 ? `in ${Math.abs(seconds)} seconds` : seconds < 60 ? "now" : minutes < 60 ? `${minutes} minutes ago` : hours < 24 ? `${hours} hours ago` : days < 7 ? `${days} days ago` : date.toLocaleDateString();
    }
  };
  customElements.define("relative-time", RelativeTimeComponent);

  // hub/src/charts.ts
  var StackedBarChart = class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.render();
    }
    async fetchData(url) {
      return await (await fetch(url)).json();
    }
    async render() {
      let url = this.getAttribute("data-url");
      if (!url) {
        console.error("Missing data-url attribute");
        return;
      }
      let data = await this.fetchData(url), options = deepMerge({
        chart: {
          height: 300,
          type: "bar",
          stacked: !0
        },
        xaxis: {
          type: "datetime"
        }
      }, data), chartDiv = document.createElement("div");
      this.appendChild(chartDiv), new ApexCharts(chartDiv, options).render();
    }
  };
  customElements.define("stacked-bar-chart", StackedBarChart);
  function deepMerge(target, source) {
    for (let key of Object.keys(source))
      source[key] instanceof Object && key in target && Object.assign(source[key], deepMerge(target[key], source[key]));
    return Object.assign(target || {}, source);
  }

  // hub/src/main.ts
  window.ApexCharts = import_apexcharts.default;
  window.Apex = {
    chart: {
      foreColor: "#ccc",
      toolbar: {
        show: !1
      }
    },
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: !1
    },
    tooltip: {
      theme: "dark"
    },
    grid: {
      borderColor: "#535A6C",
      xaxis: {
        lines: {
          show: !1
        }
      },
      yaxis: {
        lines: {
          show: !1
        }
      }
    }
  };
})();
/*! Bundled license information:

apexcharts/dist/apexcharts.common.js:
  (*!
   * ApexCharts v3.52.0
   * (c) 2018-2024 ApexCharts
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=main.js.map
