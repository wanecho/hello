/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@fancyapps/ui/dist/fancybox.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* binding */ y),
/* harmony export */   "Fancybox": () => (/* binding */ F),
/* harmony export */   "Panzoom": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");




function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// @fancyapps/ui/Fancybox v4.0.27
var t = function t(_t) {
  return "object" == typeof _t && null !== _t && _t.constructor === Object && "[object Object]" === Object.prototype.toString.call(_t);
},
    e = function e() {
  var s = !1;

  for (var _len = arguments.length, i = new Array(_len), _key = 0; _key < _len; _key++) {
    i[_key] = arguments[_key];
  }

  "boolean" == typeof i[0] && (s = i.shift());
  var o = i[0];
  if (!o || "object" != typeof o) throw new Error("extendee must be an object");
  var n = i.slice(1),
      a = n.length;

  for (var _i = 0; _i < a; _i++) {
    var _a = n[_i];

    for (var _i2 in _a) {
      if (_a.hasOwnProperty(_i2)) {
        var _n = _a[_i2];

        if (s && (Array.isArray(_n) || t(_n))) {
          var _t2 = Array.isArray(_n) ? [] : {};

          o[_i2] = e(!0, o.hasOwnProperty(_i2) ? o[_i2] : _t2, _n);
        } else o[_i2] = _n;
      }
    }
  }

  return o;
},
    i = function i(t, e) {
  if (e === void 0) {
    e = 1e4;
  }

  return t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e;
},
    s = function s(t) {
  return !!(t && "object" == typeof t && t instanceof Element && t !== document.body) && !t.__Panzoom && (function (t) {
    var e = getComputedStyle(t)["overflow-y"],
        i = getComputedStyle(t)["overflow-x"],
        s = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1,
        o = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;
    return s || o;
  }(t) ? t : s(t.parentNode));
},
    o = "undefined" != typeof window && window.ResizeObserver || /*#__PURE__*/function () {
  function _class(t) {
    this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = t;
  }

  var _proto = _class.prototype;

  _proto.observe = function observe(t) {
    if (this.observables.some(function (e) {
      return e.el === t;
    })) return;
    var e = {
      el: t,
      size: {
        height: t.clientHeight,
        width: t.clientWidth
      }
    };
    this.observables.push(e);
  };

  _proto.unobserve = function unobserve(t) {
    this.observables = this.observables.filter(function (e) {
      return e.el !== t;
    });
  };

  _proto.disconnect = function disconnect() {
    this.observables = [];
  };

  _proto.check = function check() {
    var t = this.observables.filter(function (t) {
      var e = t.el.clientHeight,
          i = t.el.clientWidth;
      if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, !0;
    }).map(function (t) {
      return t.el;
    });
    t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck);
  };

  return _class;
}();

var n = function n(t) {
  this.id = self.Touch && t instanceof Touch ? t.identifier : -1, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY;
};

var a = function a(t, e) {
  return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
},
    r = function r(t, e) {
  return e ? {
    clientX: (t.clientX + e.clientX) / 2,
    clientY: (t.clientY + e.clientY) / 2
  } : t;
};

var h = /*#__PURE__*/function () {
  function h(t, _temp) {
    var _this = this;

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$start = _ref.start,
        e = _ref$start === void 0 ? function () {
      return !0;
    } : _ref$start,
        _ref$move = _ref.move,
        i = _ref$move === void 0 ? function () {} : _ref$move,
        _ref$end = _ref.end,
        s = _ref$end === void 0 ? function () {} : _ref$end;

    this._element = t, this.startPointers = [], this.currentPointers = [], this._pointerStart = function (t) {
      if (t.buttons > 0 && 0 !== t.button) return;
      var e = new n(t);
      _this.currentPointers.some(function (t) {
        return t.id === e.id;
      }) || _this._triggerPointerStart(e, t) && (window.addEventListener("mousemove", _this._move), window.addEventListener("mouseup", _this._pointerEnd));
    }, this._touchStart = function (t) {
      for (var _i3 = 0, _Array$from = Array.from(t.changedTouches || []); _i3 < _Array$from.length; _i3++) {
        var _e = _Array$from[_i3];

        _this._triggerPointerStart(new n(_e), t);
      }
    }, this._move = function (t) {
      var e = _this.currentPointers.slice(),
          i = function (t) {
        return "changedTouches" in t;
      }(t) ? Array.from(t.changedTouches).map(function (t) {
        return new n(t);
      }) : [new n(t)];

      var _loop = function _loop() {
        var t = _step.value;

        var e = _this.currentPointers.findIndex(function (e) {
          return e.id === t.id;
        });

        e < 0 || (_this.currentPointers[e] = t);
      };

      for (var _iterator = _createForOfIteratorHelperLoose(i), _step; !(_step = _iterator()).done;) {
        _loop();
      }

      _this._moveCallback(e, _this.currentPointers.slice(), t);
    }, this._triggerPointerEnd = function (t, e) {
      var i = _this.currentPointers.findIndex(function (e) {
        return e.id === t.id;
      });

      return !(i < 0) && (_this.currentPointers.splice(i, 1), _this.startPointers.splice(i, 1), _this._endCallback(t, e), !0);
    }, this._pointerEnd = function (t) {
      t.buttons > 0 && 0 !== t.button || _this._triggerPointerEnd(new n(t), t) && (window.removeEventListener("mousemove", _this._move, {
        passive: !1
      }), window.removeEventListener("mouseup", _this._pointerEnd, {
        passive: !1
      }));
    }, this._touchEnd = function (t) {
      for (var _i4 = 0, _Array$from2 = Array.from(t.changedTouches || []); _i4 < _Array$from2.length; _i4++) {
        var _e2 = _Array$from2[_i4];

        _this._triggerPointerEnd(new n(_e2), t);
      }
    }, this._startCallback = e, this._moveCallback = i, this._endCallback = s, this._element.addEventListener("mousedown", this._pointerStart, {
      passive: !1
    }), this._element.addEventListener("touchstart", this._touchStart, {
      passive: !1
    }), this._element.addEventListener("touchmove", this._move, {
      passive: !1
    }), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd);
  }

  var _proto2 = h.prototype;

  _proto2.stop = function stop() {
    this._element.removeEventListener("mousedown", this._pointerStart, {
      passive: !1
    }), this._element.removeEventListener("touchstart", this._touchStart, {
      passive: !1
    }), this._element.removeEventListener("touchmove", this._move, {
      passive: !1
    }), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd);
  };

  _proto2._triggerPointerStart = function _triggerPointerStart(t, e) {
    return !!this._startCallback(t, e) && (this.currentPointers.push(t), this.startPointers.push(t), !0);
  };

  return h;
}();

var l = /*#__PURE__*/function () {
  function l(t) {
    if (t === void 0) {
      t = {};
    }

    this.options = e(!0, {}, t), this.plugins = [], this.events = {};

    for (var _i5 = 0, _arr = ["on", "once"]; _i5 < _arr.length; _i5++) {
      var _t3 = _arr[_i5];

      for (var _i6 = 0, _Object$entries = Object.entries(this.options[_t3] || {}); _i6 < _Object$entries.length; _i6++) {
        var _e3 = _Object$entries[_i6];

        this[_t3].apply(this, _e3);
      }
    }
  }

  var _proto3 = l.prototype;

  _proto3.option = function option(t, e) {
    var _s;

    t = String(t);
    var s = (o = t, n = this.options, o.split(".").reduce(function (t, e) {
      return t && t[e];
    }, n));
    var o, n;

    for (var _len2 = arguments.length, i = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      i[_key2 - 2] = arguments[_key2];
    }

    return "function" == typeof s && (s = (_s = s).call.apply(_s, [this, this].concat(i))), void 0 === s ? e : s;
  };

  _proto3.localize = function localize(t, e) {
    var _this2 = this;

    if (e === void 0) {
      e = [];
    }

    return t = (t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, function (t, i, s) {
      var o = "";
      s ? o = _this2.option(i[0] + i.toLowerCase().substring(1) + ".l10n." + s) : i && (o = _this2.option("l10n." + i)), o || (o = t);

      for (var _t4 = 0; _t4 < e.length; _t4++) {
        o = o.split(e[_t4][0]).join(e[_t4][1]);
      }

      return o;
    })).replace(/\{\{(.*)\}\}/, function (t, e) {
      return e;
    });
  };

  _proto3.on = function on(e, i) {
    var _this3 = this;

    if (t(e)) {
      for (var _i7 = 0, _Object$entries2 = Object.entries(e); _i7 < _Object$entries2.length; _i7++) {
        var _t5 = _Object$entries2[_i7];
        this.on.apply(this, _t5);
      }

      return this;
    }

    return String(e).split(" ").forEach(function (t) {
      var e = _this3.events[t] = _this3.events[t] || [];
      -1 == e.indexOf(i) && e.push(i);
    }), this;
  };

  _proto3.once = function once(e, i) {
    var _this4 = this;

    if (t(e)) {
      for (var _i8 = 0, _Object$entries3 = Object.entries(e); _i8 < _Object$entries3.length; _i8++) {
        var _t6 = _Object$entries3[_i8];
        this.once.apply(this, _t6);
      }

      return this;
    }

    return String(e).split(" ").forEach(function (t) {
      var e = function e() {
        for (var _len3 = arguments.length, s = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          s[_key3] = arguments[_key3];
        }

        _this4.off(t, e), i.call.apply(i, [_this4, _this4].concat(s));
      };

      e._ = i, _this4.on(t, e);
    }), this;
  };

  _proto3.off = function off(e, i) {
    var _this5 = this;

    if (!t(e)) return e.split(" ").forEach(function (t) {
      var e = _this5.events[t];
      if (!e || !e.length) return _this5;
      var s = -1;

      for (var _t7 = 0, _o = e.length; _t7 < _o; _t7++) {
        var _o2 = e[_t7];

        if (_o2 && (_o2 === i || _o2._ === i)) {
          s = _t7;
          break;
        }
      }

      -1 != s && e.splice(s, 1);
    }), this;

    for (var _i9 = 0, _Object$entries4 = Object.entries(e); _i9 < _Object$entries4.length; _i9++) {
      var _t8 = _Object$entries4[_i9];
      this.off.apply(this, _t8);
    }
  };

  _proto3.trigger = function trigger(t) {
    for (var _len4 = arguments.length, e = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      e[_key4 - 1] = arguments[_key4];
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose([].concat(this.events[t] || []).slice()), _step2; !(_step2 = _iterator2()).done;) {
      var _i10 = _step2.value;
      if (_i10 && !1 === _i10.call.apply(_i10, [this, this].concat(e))) return !1;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose([].concat(this.events["*"] || []).slice()), _step3; !(_step3 = _iterator3()).done;) {
      var _i11 = _step3.value;
      if (_i11 && !1 === _i11.call.apply(_i11, [this, t, this].concat(e))) return !1;
    }

    return !0;
  };

  _proto3.attachPlugins = function attachPlugins(t) {
    var i = {};

    for (var _i12 = 0, _Object$entries5 = Object.entries(t || {}); _i12 < _Object$entries5.length; _i12++) {
      var _Object$entries5$_i = _Object$entries5[_i12],
          _s2 = _Object$entries5$_i[0],
          _o3 = _Object$entries5$_i[1];
      !1 === this.options[_s2] || this.plugins[_s2] || (this.options[_s2] = e({}, _o3.defaults || {}, this.options[_s2]), i[_s2] = new _o3(this));
    }

    for (var _i13 = 0, _Object$entries6 = Object.entries(i); _i13 < _Object$entries6.length; _i13++) {
      var _Object$entries6$_i = _Object$entries6[_i13],
          _t9 = _Object$entries6$_i[0],
          _e4 = _Object$entries6$_i[1];

      _e4.attach(this);
    }

    return this.plugins = Object.assign({}, this.plugins, i), this;
  };

  _proto3.detachPlugins = function detachPlugins() {
    for (var _t10 in this.plugins) {
      var _e5 = void 0;

      (_e5 = this.plugins[_t10]) && "function" == typeof _e5.detach && _e5.detach(this);
    }

    return this.plugins = {}, this;
  };

  return l;
}();

var c = {
  touch: !0,
  zoom: !0,
  pinchToZoom: !0,
  panOnlyZoomed: !1,
  lockAxis: !1,
  friction: .64,
  decelFriction: .88,
  zoomFriction: .74,
  bounceForce: .2,
  baseScale: 1,
  minScale: 1,
  maxScale: 2,
  step: .5,
  textSelection: !1,
  click: "toggleZoom",
  wheel: "zoom",
  wheelFactor: 42,
  wheelLimit: 5,
  draggableClass: "is-draggable",
  draggingClass: "is-dragging",
  ratio: 1
};

var d = /*#__PURE__*/function (_l) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(d, _l);

  function d(t, i) {
    var _this6;

    if (i === void 0) {
      i = {};
    }

    _this6 = _l.call(this, e(!0, {}, c, i)) || this, _this6.state = "init", _this6.$container = t;

    for (var _i14 = 0, _arr2 = ["onLoad", "onWheel", "onClick"]; _i14 < _arr2.length; _i14++) {
      var _t11 = _arr2[_i14];
      _this6[_t11] = _this6[_t11].bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this6));
    }

    _this6.initLayout(), _this6.resetValues(), _this6.attachPlugins(d.Plugins), _this6.trigger("init"), _this6.updateMetrics(), _this6.attachEvents(), _this6.trigger("ready"), !1 === _this6.option("centerOnStart") ? _this6.state = "ready" : _this6.panTo({
      friction: 0
    }), t.__Panzoom = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this6);
    return _this6;
  }

  var _proto4 = d.prototype;

  _proto4.initLayout = function initLayout() {
    var _i15;

    var t = this.$container;
    if (!(t instanceof HTMLElement)) throw new Error("Panzoom: Container not found");
    var e = this.option("content") || t.querySelector(".panzoom__content");
    if (!e) throw new Error("Panzoom: Content not found");
    this.$content = e;
    var i = this.option("viewport") || t.querySelector(".panzoom__viewport");
    i || !1 === this.option("wrapInner") || (i = document.createElement("div"), i.classList.add("panzoom__viewport"), (_i15 = i).append.apply(_i15, t.childNodes), t.appendChild(i)), this.$viewport = i || e.parentNode;
  };

  _proto4.resetValues = function resetValues() {
    this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = {
      width: 0,
      height: 0
    }, this.viewport = {
      width: 0,
      height: 0
    }, this.content = {
      origWidth: 0,
      origHeight: 0,
      width: 0,
      height: 0,
      x: this.option("x", 0),
      y: this.option("y", 0),
      scale: this.option("baseScale")
    }, this.transform = {
      x: 0,
      y: 0,
      scale: 1
    }, this.resetDragPosition();
  };

  _proto4.onLoad = function onLoad(t) {
    this.updateMetrics(), this.panTo({
      scale: this.option("baseScale"),
      friction: 0
    }), this.trigger("load", t);
  };

  _proto4.onClick = function onClick(t) {
    if (t.defaultPrevented) return;
    if (this.option("textSelection") && window.getSelection().toString().length) return void t.stopPropagation();
    var e = this.$content.getClientRects()[0];
    if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(e.top - this.dragStart.rect.top) > 1 || Math.abs(e.left - this.dragStart.rect.left) > 1)) return t.preventDefault(), void t.stopPropagation();
    !1 !== this.trigger("click", t) && this.option("zoom") && "toggleZoom" === this.option("click") && (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t));
  };

  _proto4.onWheel = function onWheel(t) {
    !1 !== this.trigger("wheel", t) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t);
  };

  _proto4.zoomWithWheel = function zoomWithWheel(t) {
    void 0 === this.changedDelta && (this.changedDelta = 0);
    var e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)),
        i = this.content.scale;
    var s = i * (100 + e * this.option("wheelFactor")) / 100;
    if (e < 0 && Math.abs(i - this.option("minScale")) < .01 || e > 0 && Math.abs(i - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(e), s = i) : (this.changedDelta = 0, s = Math.max(Math.min(s, this.option("maxScale")), this.option("minScale"))), this.changedDelta > this.option("wheelLimit")) return;
    if (t.preventDefault(), s === i) return;
    var o = this.$content.getBoundingClientRect(),
        n = t.clientX - o.left,
        a = t.clientY - o.top;
    this.zoomTo(s, {
      x: n,
      y: a
    });
  };

  _proto4.zoomWithClick = function zoomWithClick(t) {
    var e = this.$content.getClientRects()[0],
        i = t.clientX - e.left,
        s = t.clientY - e.top;
    this.toggleZoom({
      x: i,
      y: s
    });
  };

  _proto4.attachEvents = function attachEvents() {
    var _this7 = this;

    this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, {
      passive: !1
    }), this.$container.addEventListener("click", this.onClick, {
      passive: !1
    }), this.initObserver();
    var t = new h(this.$container, {
      start: function start(e, i) {
        if (!_this7.option("touch")) return !1;
        if (_this7.velocity.scale < 0) return !1;
        var o = i.composedPath()[0];

        if (!t.currentPointers.length) {
          if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(o.nodeName)) return !1;
          if (_this7.option("textSelection") && function (t, e, i) {
            var s = t.childNodes,
                o = document.createRange();

            for (var _t12 = 0; _t12 < s.length; _t12++) {
              var _n2 = s[_t12];
              if (_n2.nodeType !== Node.TEXT_NODE) continue;
              o.selectNodeContents(_n2);

              var _a2 = o.getBoundingClientRect();

              if (e >= _a2.left && i >= _a2.top && e <= _a2.right && i <= _a2.bottom) return _n2;
            }

            return !1;
          }(o, e.clientX, e.clientY)) return !1;
        }

        return !s(o) && !1 !== _this7.trigger("touchStart", i) && ("mousedown" === i.type && i.preventDefault(), _this7.state = "pointerdown", _this7.resetDragPosition(), _this7.dragPosition.midPoint = null, _this7.dragPosition.time = Date.now(), !0);
      },
      move: function move(e, i, s) {
        if ("pointerdown" !== _this7.state) return;
        if (!1 === _this7.trigger("touchMove", s)) return void s.preventDefault();
        if (i.length < 2 && !0 === _this7.option("panOnlyZoomed") && _this7.content.width <= _this7.viewport.width && _this7.content.height <= _this7.viewport.height && _this7.transform.scale <= _this7.option("baseScale")) return;
        if (i.length > 1 && (!_this7.option("zoom") || !1 === _this7.option("pinchToZoom"))) return;

        var o = r(e[0], e[1]),
            n = r(i[0], i[1]),
            h = n.clientX - o.clientX,
            l = n.clientY - o.clientY,
            c = a(e[0], e[1]),
            _d = a(i[0], i[1]),
            u = c && _d ? _d / c : 1;

        _this7.dragOffset.x += h, _this7.dragOffset.y += l, _this7.dragOffset.scale *= u, _this7.dragOffset.time = Date.now() - _this7.dragPosition.time;

        var f = 1 === _this7.dragStart.scale && _this7.option("lockAxis");

        if (f && !_this7.lockAxis) {
          if (Math.abs(_this7.dragOffset.x) < 6 && Math.abs(_this7.dragOffset.y) < 6) return void s.preventDefault();

          var _t13 = Math.abs(180 * Math.atan2(_this7.dragOffset.y, _this7.dragOffset.x) / Math.PI);

          _this7.lockAxis = _t13 > 45 && _t13 < 135 ? "y" : "x";
        }

        if ("xy" === f || "y" !== _this7.lockAxis) {
          if (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), _this7.lockAxis && (_this7.dragOffset["x" === _this7.lockAxis ? "y" : "x"] = 0), _this7.$container.classList.add(_this7.option("draggingClass")), _this7.transform.scale === _this7.option("baseScale") && "y" === _this7.lockAxis || (_this7.dragPosition.x = _this7.dragStart.x + _this7.dragOffset.x), _this7.transform.scale === _this7.option("baseScale") && "x" === _this7.lockAxis || (_this7.dragPosition.y = _this7.dragStart.y + _this7.dragOffset.y), _this7.dragPosition.scale = _this7.dragStart.scale * _this7.dragOffset.scale, i.length > 1) {
            var _e6 = r(t.startPointers[0], t.startPointers[1]),
                _i16 = _e6.clientX - _this7.dragStart.rect.x,
                _s3 = _e6.clientY - _this7.dragStart.rect.y,
                _this7$getZoomDelta = _this7.getZoomDelta(_this7.content.scale * _this7.dragOffset.scale, _i16, _s3),
                _o4 = _this7$getZoomDelta.deltaX,
                _a3 = _this7$getZoomDelta.deltaY;

            _this7.dragPosition.x -= _o4, _this7.dragPosition.y -= _a3, _this7.dragPosition.midPoint = n;
          } else _this7.setDragResistance();

          _this7.transform = {
            x: _this7.dragPosition.x,
            y: _this7.dragPosition.y,
            scale: _this7.dragPosition.scale
          }, _this7.startAnimation();
        }
      },
      end: function end(e, i) {
        if ("pointerdown" !== _this7.state) return;
        if (_this7._dragOffset = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this7.dragOffset), t.currentPointers.length) return void _this7.resetDragPosition();
        if (_this7.state = "decel", _this7.friction = _this7.option("decelFriction"), _this7.recalculateTransform(), _this7.$container.classList.remove(_this7.option("draggingClass")), !1 === _this7.trigger("touchEnd", i)) return;
        if ("decel" !== _this7.state) return;

        var s = _this7.option("minScale");

        if (_this7.transform.scale < s) return void _this7.zoomTo(s, {
          friction: .64
        });

        var o = _this7.option("maxScale");

        if (_this7.transform.scale - o > .01) {
          var _t14 = _this7.dragPosition.midPoint || e,
              _i17 = _this7.$content.getClientRects()[0];

          _this7.zoomTo(o, {
            friction: .64,
            x: _t14.clientX - _i17.left,
            y: _t14.clientY - _i17.top
          });
        } else ;
      }
    });
    this.pointerTracker = t;
  };

  _proto4.initObserver = function initObserver() {
    var _this8 = this;

    this.resizeObserver || (this.resizeObserver = new o(function () {
      _this8.updateTimer || (_this8.updateTimer = setTimeout(function () {
        var t = _this8.$container.getBoundingClientRect();

        t.width && t.height ? ((Math.abs(t.width - _this8.container.width) > 1 || Math.abs(t.height - _this8.container.height) > 1) && (_this8.isAnimating() && _this8.endAnimation(!0), _this8.updateMetrics(), _this8.panTo({
          x: _this8.content.x,
          y: _this8.content.y,
          scale: _this8.option("baseScale"),
          friction: 0
        })), _this8.updateTimer = null) : _this8.updateTimer = null;
      }, _this8.updateRate));
    }), this.resizeObserver.observe(this.$container));
  };

  _proto4.resetDragPosition = function resetDragPosition() {
    this.lockAxis = null, this.friction = this.option("friction"), this.velocity = {
      x: 0,
      y: 0,
      scale: 0
    };
    var _this$content = this.content,
        t = _this$content.x,
        e = _this$content.y,
        i = _this$content.scale;
    this.dragStart = {
      rect: this.$content.getBoundingClientRect(),
      x: t,
      y: e,
      scale: i
    }, this.dragPosition = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.dragPosition, {
      x: t,
      y: e,
      scale: i
    }), this.dragOffset = {
      x: 0,
      y: 0,
      scale: 1,
      time: 0
    };
  };

  _proto4.updateMetrics = function updateMetrics(t) {
    !0 !== t && this.trigger("beforeUpdate");
    var e = this.$container,
        s = this.$content,
        o = this.$viewport,
        n = s instanceof HTMLImageElement,
        a = this.option("zoom"),
        r = this.option("resizeParent", a);
    var h = this.option("width"),
        l = this.option("height"),
        c = h || (_d2 = s, Math.max(parseFloat(_d2.naturalWidth || 0), parseFloat(_d2.width && _d2.width.baseVal && _d2.width.baseVal.value || 0), parseFloat(_d2.offsetWidth || 0), parseFloat(_d2.scrollWidth || 0)));

    var _d2;

    var u = l || function (t) {
      return Math.max(parseFloat(t.naturalHeight || 0), parseFloat(t.height && t.height.baseVal && t.height.baseVal.value || 0), parseFloat(t.offsetHeight || 0), parseFloat(t.scrollHeight || 0));
    }(s);

    Object.assign(s.style, {
      width: h ? h + "px" : "",
      height: l ? l + "px" : "",
      maxWidth: "",
      maxHeight: ""
    }), r && Object.assign(o.style, {
      width: "",
      height: ""
    });
    var f = this.option("ratio");
    c = i(c * f), u = i(u * f), h = c, l = u;
    var g = s.getBoundingClientRect(),
        p = o.getBoundingClientRect(),
        m = o == e ? p : e.getBoundingClientRect();
    var y = Math.max(o.offsetWidth, i(p.width)),
        v = Math.max(o.offsetHeight, i(p.height)),
        b = window.getComputedStyle(o);

    if (y -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight), v -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom), this.viewport.width = y, this.viewport.height = v, a) {
      if (Math.abs(c - g.width) > .1 || Math.abs(u - g.height) > .1) {
        var _t15 = function (t, e, i, s) {
          var o = Math.min(i / t || 0, s / e);
          return {
            width: t * o || 0,
            height: e * o || 0
          };
        }(c, u, Math.min(c, g.width), Math.min(u, g.height));

        h = i(_t15.width), l = i(_t15.height);
      }

      Object.assign(s.style, {
        width: h + "px",
        height: l + "px",
        transform: ""
      });
    }

    if (r && (Object.assign(o.style, {
      width: h + "px",
      height: l + "px"
    }), this.viewport = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.viewport, {
      width: h,
      height: l
    })), n && a && "function" != typeof this.options.maxScale) {
      var _t16 = this.option("maxScale");

      this.options.maxScale = function () {
        return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : _t16;
      };
    }

    this.content = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.content, {
      origWidth: c,
      origHeight: u,
      fitWidth: h,
      fitHeight: l,
      width: h,
      height: l,
      scale: 1,
      isZoomable: a
    }), this.container = {
      width: m.width,
      height: m.height
    }, !0 !== t && this.trigger("afterUpdate");
  };

  _proto4.zoomIn = function zoomIn(t) {
    this.zoomTo(this.content.scale + (t || this.option("step")));
  };

  _proto4.zoomOut = function zoomOut(t) {
    this.zoomTo(this.content.scale - (t || this.option("step")));
  };

  _proto4.toggleZoom = function toggleZoom(t) {
    if (t === void 0) {
      t = {};
    }

    var e = this.option("maxScale"),
        i = this.option("baseScale"),
        s = this.content.scale > i + .5 * (e - i) ? i : e;
    this.zoomTo(s, t);
  };

  _proto4.zoomTo = function zoomTo(t, _temp2) {
    if (t === void 0) {
      t = this.option("baseScale");
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$x = _ref2.x,
        e = _ref2$x === void 0 ? null : _ref2$x,
        _ref2$y = _ref2.y,
        s = _ref2$y === void 0 ? null : _ref2$y;

    t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));
    var o = i(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
    null === e && (e = this.content.width * o * .5), null === s && (s = this.content.height * o * .5);

    var _this$getZoomDelta = this.getZoomDelta(t, e, s),
        n = _this$getZoomDelta.deltaX,
        a = _this$getZoomDelta.deltaY;

    e = this.content.x - n, s = this.content.y - a, this.panTo({
      x: e,
      y: s,
      scale: t,
      friction: this.option("zoomFriction")
    });
  };

  _proto4.getZoomDelta = function getZoomDelta(t, e, i) {
    if (e === void 0) {
      e = 0;
    }

    if (i === void 0) {
      i = 0;
    }

    var s = this.content.fitWidth * this.content.scale,
        o = this.content.fitHeight * this.content.scale,
        n = e > 0 && s ? e / s : 0,
        a = i > 0 && o ? i / o : 0;
    return {
      deltaX: (this.content.fitWidth * t - s) * n,
      deltaY: (this.content.fitHeight * t - o) * a
    };
  };

  _proto4.panTo = function panTo(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$x = _ref3.x,
        t = _ref3$x === void 0 ? this.content.x : _ref3$x,
        _ref3$y = _ref3.y,
        e = _ref3$y === void 0 ? this.content.y : _ref3$y,
        i = _ref3.scale,
        _ref3$friction = _ref3.friction,
        s = _ref3$friction === void 0 ? this.option("friction") : _ref3$friction,
        _ref3$ignoreBounds = _ref3.ignoreBounds,
        o = _ref3$ignoreBounds === void 0 ? !1 : _ref3$ignoreBounds;

    if (i = i || this.content.scale || 1, !o) {
      var _this$getBounds = this.getBounds(i),
          _s4 = _this$getBounds.boundX,
          _o5 = _this$getBounds.boundY;

      _s4 && (t = Math.max(Math.min(t, _s4.to), _s4.from)), _o5 && (e = Math.max(Math.min(e, _o5.to), _o5.from));
    }

    this.friction = s, this.transform = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.transform, {
      x: t,
      y: e,
      scale: i
    }), s ? (this.state = "panning", this.velocity = {
      x: (1 / this.friction - 1) * (t - this.content.x),
      y: (1 / this.friction - 1) * (e - this.content.y),
      scale: (1 / this.friction - 1) * (i - this.content.scale)
    }, this.startAnimation()) : this.endAnimation();
  };

  _proto4.startAnimation = function startAnimation() {
    var _this9 = this;

    this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame(function () {
      return _this9.animate();
    });
  };

  _proto4.animate = function animate() {
    var _this10 = this;

    if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform();else if ("pointerdown" !== this.state) return void this.endAnimation();
    this.rAF = requestAnimationFrame(function () {
      return _this10.animate();
    });
  };

  _proto4.getBounds = function getBounds(t) {
    var e = this.boundX,
        s = this.boundY;
    if (void 0 !== e && void 0 !== s) return {
      boundX: e,
      boundY: s
    };
    e = {
      from: 0,
      to: 0
    }, s = {
      from: 0,
      to: 0
    }, t = t || this.transform.scale;
    var o = this.content.fitWidth * t,
        n = this.content.fitHeight * t,
        a = this.viewport.width,
        r = this.viewport.height;

    if (o < a) {
      var _t17 = i(.5 * (a - o));

      e.from = _t17, e.to = _t17;
    } else e.from = i(a - o);

    if (n < r) {
      var _t18 = .5 * (r - n);

      s.from = _t18, s.to = _t18;
    } else s.from = i(r - n);

    return {
      boundX: e,
      boundY: s
    };
  };

  _proto4.setEdgeForce = function setEdgeForce() {
    if ("decel" !== this.state) return;

    var t = this.option("bounceForce"),
        _this$getBounds2 = this.getBounds(Math.max(this.transform.scale, this.content.scale)),
        e = _this$getBounds2.boundX,
        i = _this$getBounds2.boundY;

    var s, o, n, a;

    if (e && (s = this.content.x < e.from, o = this.content.x > e.to), i && (n = this.content.y < i.from, a = this.content.y > i.to), s || o) {
      var _i18 = ((s ? e.from : e.to) - this.content.x) * t;

      var _o6 = this.content.x + (this.velocity.x + _i18) / this.friction;

      _o6 >= e.from && _o6 <= e.to && (_i18 += this.velocity.x), this.velocity.x = _i18, this.recalculateTransform();
    }

    if (n || a) {
      var _e7 = ((n ? i.from : i.to) - this.content.y) * t;

      var _s5 = this.content.y + (_e7 + this.velocity.y) / this.friction;

      _s5 >= i.from && _s5 <= i.to && (_e7 += this.velocity.y), this.velocity.y = _e7, this.recalculateTransform();
    }
  };

  _proto4.setDragResistance = function setDragResistance() {
    if ("pointerdown" !== this.state) return;

    var _this$getBounds3 = this.getBounds(this.dragPosition.scale),
        t = _this$getBounds3.boundX,
        e = _this$getBounds3.boundY;

    var i, s, o, n;

    if (t && (i = this.dragPosition.x < t.from, s = this.dragPosition.x > t.to), e && (o = this.dragPosition.y < e.from, n = this.dragPosition.y > e.to), (i || s) && (!i || !s)) {
      var _e8 = i ? t.from : t.to,
          _s6 = _e8 - this.dragPosition.x;

      this.dragPosition.x = _e8 - .3 * _s6;
    }

    if ((o || n) && (!o || !n)) {
      var _t19 = o ? e.from : e.to,
          _i19 = _t19 - this.dragPosition.y;

      this.dragPosition.y = _t19 - .3 * _i19;
    }
  };

  _proto4.setDragForce = function setDragForce() {
    "pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale);
  };

  _proto4.recalculateTransform = function recalculateTransform() {
    this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1);
  };

  _proto4.isAnimating = function isAnimating() {
    return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05));
  };

  _proto4.setTransform = function setTransform(t) {
    var e, s, o;

    if (t ? (e = i(this.transform.x), s = i(this.transform.y), o = this.transform.scale, this.content = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.content, {
      x: e,
      y: s,
      scale: o
    })) : (e = i(this.content.x), s = i(this.content.y), o = this.content.scale / (this.content.width / this.content.fitWidth), this.content = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.content, {
      x: e,
      y: s
    })), this.trigger("beforeTransform"), e = i(this.content.x), s = i(this.content.y), t && this.option("zoom")) {
      var _t20, _n3;

      _t20 = i(this.content.fitWidth * o), _n3 = i(this.content.fitHeight * o), this.content.width = _t20, this.content.height = _n3, this.transform = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.transform, {
        width: _t20,
        height: _n3,
        scale: o
      }), Object.assign(this.$content.style, {
        width: _t20 + "px",
        height: _n3 + "px",
        maxWidth: "none",
        maxHeight: "none",
        transform: "translate3d(" + e + "px, " + s + "px, 0) scale(1)"
      });
    } else this.$content.style.transform = "translate3d(" + e + "px, " + s + "px, 0) scale(" + o + ")";

    this.trigger("afterTransform");
  };

  _proto4.endAnimation = function endAnimation(t) {
    cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {
      x: 0,
      y: 0,
      scale: 0
    }, this.setTransform(!0), this.state = "ready", this.handleCursor(), !0 !== t && this.trigger("endAnimation");
  };

  _proto4.handleCursor = function handleCursor() {
    var t = this.option("draggableClass");
    t && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t) : this.$container.classList.add(t));
  };

  _proto4.detachEvents = function detachEvents() {
    this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, {
      passive: !1
    }), this.$container.removeEventListener("click", this.onClick, {
      passive: !1
    }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
  };

  _proto4.destroy = function destroy() {
    "destroy" !== this.state && (this.state = "destroy", clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition());
  };

  return d;
}(l);

d.version = "4.0.27", d.Plugins = {};

var u = function u(t, e) {
  var i = 0;
  return function () {
    var o = new Date().getTime();
    if (!(o - i < e)) return i = o, t.apply(void 0, arguments);
  };
};

var f = /*#__PURE__*/function () {
  function f(t) {
    this.$container = null, this.$prev = null, this.$next = null, this.carousel = t, this.onRefresh = this.onRefresh.bind(this);
  }

  var _proto5 = f.prototype;

  _proto5.option = function option(t) {
    return this.carousel.option("Navigation." + t);
  };

  _proto5.createButton = function createButton(t) {
    var _e$classList,
        _this11 = this;

    var e = document.createElement("button");
    e.setAttribute("title", this.carousel.localize("{{" + t.toUpperCase() + "}}"));
    var i = this.option("classNames.button") + " " + this.option("classNames." + t);
    return (_e$classList = e.classList).add.apply(_e$classList, i.split(" ")), e.setAttribute("tabindex", "0"), e.innerHTML = this.carousel.localize(this.option(t + "Tpl")), e.addEventListener("click", function (e) {
      e.preventDefault(), e.stopPropagation(), _this11.carousel["slide" + ("next" === t ? "Next" : "Prev")]();
    }), e;
  };

  _proto5.build = function build() {
    var _this$$container$clas;

    this.$container || (this.$container = document.createElement("div"), (_this$$container$clas = this.$container.classList).add.apply(_this$$container$clas, this.option("classNames.main").split(" ")), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev));
  };

  _proto5.onRefresh = function onRefresh() {
    var t = this.carousel.pages.length;
    t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")));
  };

  _proto5.cleanup = function cleanup() {
    this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null;
  };

  _proto5.attach = function attach() {
    this.carousel.on("refresh change", this.onRefresh);
  };

  _proto5.detach = function detach() {
    this.carousel.off("refresh change", this.onRefresh), this.cleanup();
  };

  return f;
}();

f.defaults = {
  prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
  nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
  classNames: {
    main: "carousel__nav",
    button: "carousel__button",
    next: "is-next",
    prev: "is-prev"
  }
};

var g = /*#__PURE__*/function () {
  function g(t) {
    this.carousel = t, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this);
  }

  var _proto6 = g.prototype;

  _proto6.addAsTargetFor = function addAsTargetFor(t) {
    this.target = this.carousel, this.nav = t, this.attachEvents();
  };

  _proto6.addAsNavFor = function addAsNavFor(t) {
    this.target = t, this.nav = this.carousel, this.attachEvents();
  };

  _proto6.attachEvents = function attachEvents() {
    this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange);
  };

  _proto6.onNavReady = function onNavReady() {
    this.onTargetChange(!0);
  };

  _proto6.onNavClick = function onNavClick(t, e, i) {
    var s = i.target.closest(".carousel__slide");
    if (!s) return;
    i.stopPropagation();
    var o = parseInt(s.dataset.index, 10),
        n = this.target.findPageForSlide(o);
    this.target.page !== n && this.target.slideTo(n, {
      friction: this.friction
    }), this.markSelectedSlide(o);
  };

  _proto6.onNavCreateSlide = function onNavCreateSlide(t, e) {
    e.index === this.selectedIndex && this.markSelectedSlide(e.index);
  };

  _proto6.onTargetChange = function onTargetChange() {
    var t = this.target.pages[this.target.page].indexes[0],
        e = this.nav.findPageForSlide(t);
    this.nav.slideTo(e), this.markSelectedSlide(t);
  };

  _proto6.markSelectedSlide = function markSelectedSlide(t) {
    this.selectedIndex = t, [].concat(this.nav.slides).filter(function (t) {
      return t.$el && t.$el.classList.remove("is-nav-selected");
    });
    var e = this.nav.slides[t];
    e && e.$el && e.$el.classList.add("is-nav-selected");
  };

  _proto6.attach = function attach(t) {
    var e = t.options.Sync;
    (e.target || e.nav) && (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav), this.friction = e.friction);
  };

  _proto6.detach = function detach() {
    this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), this.target.off("change", this.onTargetChange));
  };

  return g;
}();

g.defaults = {
  friction: .92
};
var p = {
  Navigation: f,
  Dots: /*#__PURE__*/function () {
    function Dots(t) {
      this.carousel = t, this.$list = null, this.events = {
        change: this.onChange.bind(this),
        refresh: this.onRefresh.bind(this)
      };
    }

    var _proto7 = Dots.prototype;

    _proto7.buildList = function buildList() {
      var _this12 = this;

      if (this.carousel.pages.length < this.carousel.option("Dots.minSlideCount")) return;
      var t = document.createElement("ol");
      return t.classList.add("carousel__dots"), t.addEventListener("click", function (t) {
        if (!("page" in t.target.dataset)) return;
        t.preventDefault(), t.stopPropagation();
        var e = parseInt(t.target.dataset.page, 10),
            i = _this12.carousel;
        e !== i.page && (i.pages.length < 3 && i.option("infinite") ? i[0 == e ? "slidePrev" : "slideNext"]() : i.slideTo(e));
      }), this.$list = t, this.carousel.$container.appendChild(t), this.carousel.$container.classList.add("has-dots"), t;
    };

    _proto7.removeList = function removeList() {
      this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots");
    };

    _proto7.rebuildDots = function rebuildDots() {
      var _this13 = this;

      var t = this.$list;
      var e = !!t,
          i = this.carousel.pages.length;
      if (i < 2) return void (e && this.removeList());
      e || (t = this.buildList());
      var s = this.$list.children.length;
      if (s > i) for (var _t21 = i; _t21 < s; _t21++) {
        this.$list.removeChild(this.$list.lastChild);
      } else {
        var _loop2 = function _loop2(_t22) {
          var e = document.createElement("li");
          e.classList.add("carousel__dot"), e.dataset.page = _t22, e.setAttribute("role", "button"), e.setAttribute("tabindex", "0"), e.setAttribute("title", _this13.carousel.localize("{{GOTO}}", [["%d", _t22 + 1]])), e.addEventListener("keydown", function (t) {
            var i = t.code;
            var s;
            "Enter" === i || "NumpadEnter" === i ? s = e : "ArrowRight" === i ? s = e.nextSibling : "ArrowLeft" === i && (s = e.previousSibling), s && s.click();
          }), _this13.$list.appendChild(e);
        };

        for (var _t22 = s; _t22 < i; _t22++) {
          _loop2(_t22);
        }

        this.setActiveDot();
      }
    };

    _proto7.setActiveDot = function setActiveDot() {
      if (!this.$list) return;
      this.$list.childNodes.forEach(function (t) {
        t.classList.remove("is-selected");
      });
      var t = this.$list.childNodes[this.carousel.page];
      t && t.classList.add("is-selected");
    };

    _proto7.onChange = function onChange() {
      this.setActiveDot();
    };

    _proto7.onRefresh = function onRefresh() {
      this.rebuildDots();
    };

    _proto7.attach = function attach() {
      this.carousel.on(this.events);
    };

    _proto7.detach = function detach() {
      this.removeList(), this.carousel.off(this.events), this.carousel = null;
    };

    return Dots;
  }(),
  Sync: g
};
var m = {
  slides: [],
  preload: 0,
  slidesPerPage: "auto",
  initialPage: null,
  initialSlide: null,
  friction: .92,
  center: !0,
  infinite: !0,
  fill: !0,
  dragFree: !1,
  prefix: "",
  classNames: {
    viewport: "carousel__viewport",
    track: "carousel__track",
    slide: "carousel__slide",
    slideSelected: "is-selected"
  },
  l10n: {
    NEXT: "Next slide",
    PREV: "Previous slide",
    GOTO: "Go to slide #%d"
  }
};

var y = /*#__PURE__*/function (_l2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(y, _l2);

  function y(t, i) {
    var _this14;

    if (i === void 0) {
      i = {};
    }

    if (_this14 = _l2.call(this, i = e(!0, {}, m, i)) || this, _this14.state = "init", _this14.$container = t, !(_this14.$container instanceof HTMLElement)) throw new Error("No root element provided");
    _this14.slideNext = u(_this14.slideNext.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this14)), 250), _this14.slidePrev = u(_this14.slidePrev.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this14)), 250), _this14.init(), t.__Carousel = (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this14);
    return (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this14);
  }

  var _proto8 = y.prototype;

  _proto8.init = function init() {
    this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(y.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = "translate3d(" + -1 * this.pages[this.page].left + "px, 0px, 0) scale(1)"), this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready");
  };

  _proto8.initLayout = function initLayout() {
    var _this$$viewport$class, _this$$viewport, _this$$track$classLis, _this$$track;

    var t = this.option("prefix"),
        e = this.option("classNames");
    this.$viewport = this.option("viewport") || this.$container.querySelector("." + t + e.viewport), this.$viewport || (this.$viewport = document.createElement("div"), (_this$$viewport$class = this.$viewport.classList).add.apply(_this$$viewport$class, (t + e.viewport).split(" ")), (_this$$viewport = this.$viewport).append.apply(_this$$viewport, this.$container.childNodes), this.$container.appendChild(this.$viewport)), this.$track = this.option("track") || this.$container.querySelector("." + t + e.track), this.$track || (this.$track = document.createElement("div"), (_this$$track$classLis = this.$track.classList).add.apply(_this$$track$classLis, (t + e.track).split(" ")), (_this$$track = this.$track).append.apply(_this$$track, this.$viewport.childNodes), this.$viewport.appendChild(this.$track));
  };

  _proto8.initSlides = function initSlides() {
    var _this15 = this;

    this.slides = [];
    this.$viewport.querySelectorAll("." + this.option("prefix") + this.option("classNames.slide")).forEach(function (t) {
      var e = {
        $el: t,
        isDom: !0
      };
      _this15.slides.push(e), _this15.trigger("createSlide", e, _this15.slides.length);
    }), Array.isArray(this.options.slides) && (this.slides = e(!0, [].concat(this.slides), this.options.slides));
  };

  _proto8.updateMetrics = function updateMetrics() {
    var _this16 = this;

    var t,
        e = 0,
        s = [];
    this.slides.forEach(function (i, o) {
      var n = i.$el,
          a = i.isDom || !t ? _this16.getSlideMetrics(n) : t;
      i.index = o, i.width = a, i.left = e, t = a, e += a, s.push(o);
    });
    var o = Math.max(this.$track.offsetWidth, i(this.$track.getBoundingClientRect().width)),
        n = getComputedStyle(this.$track);
    o -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight), this.contentWidth = e, this.viewportWidth = o;
    var a = [],
        r = this.option("slidesPerPage");
    if (Number.isInteger(r) && e > o) for (var _t23 = 0; _t23 < this.slides.length; _t23 += r) {
      a.push({
        indexes: s.slice(_t23, _t23 + r),
        slides: this.slides.slice(_t23, _t23 + r)
      });
    } else {
      var _t24 = 0,
          _e9 = 0;

      for (var _i20 = 0; _i20 < this.slides.length; _i20 += 1) {
        var _s7 = this.slides[_i20];
        (!a.length || _e9 + _s7.width > o) && (a.push({
          indexes: [],
          slides: []
        }), _t24 = a.length - 1, _e9 = 0), _e9 += _s7.width, a[_t24].indexes.push(_i20), a[_t24].slides.push(_s7);
      }
    }
    var h = this.option("center"),
        l = this.option("fill");
    a.forEach(function (t, i) {
      t.index = i, t.width = t.slides.reduce(function (t, e) {
        return t + e.width;
      }, 0), t.left = t.slides[0].left, h && (t.left += .5 * (o - t.width) * -1), l && !_this16.option("infiniteX", _this16.option("infinite")) && e > o && (t.left = Math.max(t.left, 0), t.left = Math.min(t.left, e - o));
    });
    var c = [];
    var d;
    a.forEach(function (t) {
      var e = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, t);

      d && e.left === d.left ? (d.width += e.width, d.slides = [].concat(d.slides, e.slides), d.indexes = [].concat(d.indexes, e.indexes)) : (e.index = c.length, d = e, c.push(e));
    }), this.pages = c;
    var u = this.page;

    if (null === u) {
      var _t25 = this.option("initialSlide");

      u = null !== _t25 ? this.findPageForSlide(_t25) : parseInt(this.option("initialPage", 0), 10) || 0, c[u] || (u = c.length && u > c.length ? c[c.length - 1].index : 0), this.page = u, this.pageIndex = u;
    }

    this.updatePanzoom(), this.trigger("refresh");
  };

  _proto8.getSlideMetrics = function getSlideMetrics(t) {
    if (!t) {
      var _t$classList, _t$classList2;

      var _e10 = this.slides[0];
      (t = document.createElement("div")).dataset.isTestEl = 1, t.style.visibility = "hidden", (_t$classList = t.classList).add.apply(_t$classList, (this.option("prefix") + this.option("classNames.slide")).split(" ")), _e10.customClass && (_t$classList2 = t.classList).add.apply(_t$classList2, _e10.customClass.split(" ")), this.$track.prepend(t);
    }

    var e = Math.max(t.offsetWidth, i(t.getBoundingClientRect().width));
    var s = t.currentStyle || window.getComputedStyle(t);
    return e = e + (parseFloat(s.marginLeft) || 0) + (parseFloat(s.marginRight) || 0), t.dataset.isTestEl && t.remove(), e;
  };

  _proto8.findPageForSlide = function findPageForSlide(t) {
    t = parseInt(t, 10) || 0;
    var e = this.pages.find(function (e) {
      return e.indexes.indexOf(t) > -1;
    });
    return e ? e.index : null;
  };

  _proto8.slideNext = function slideNext() {
    this.slideTo(this.pageIndex + 1);
  };

  _proto8.slidePrev = function slidePrev() {
    this.slideTo(this.pageIndex - 1);
  };

  _proto8.slideTo = function slideTo(t, e) {
    if (e === void 0) {
      e = {};
    }

    var _e11 = e,
        _e11$x = _e11.x,
        i = _e11$x === void 0 ? -1 * this.setPage(t, !0) : _e11$x,
        _e11$y = _e11.y,
        s = _e11$y === void 0 ? 0 : _e11$y,
        _e11$friction = _e11.friction,
        o = _e11$friction === void 0 ? this.option("friction") : _e11$friction;
    this.Panzoom.content.x === i && !this.Panzoom.velocity.x && o || (this.Panzoom.panTo({
      x: i,
      y: s,
      friction: o,
      ignoreBounds: !0
    }), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"));
  };

  _proto8.initPanzoom = function initPanzoom() {
    var _this17 = this;

    this.Panzoom && this.Panzoom.destroy();
    var t = e(!0, {}, {
      content: this.$track,
      wrapInner: !1,
      resizeParent: !1,
      zoom: !1,
      click: !1,
      lockAxis: "x",
      x: this.pages.length ? -1 * this.pages[this.page].left : 0,
      centerOnStart: !1,
      textSelection: function textSelection() {
        return _this17.option("textSelection", !1);
      },
      panOnlyZoomed: function panOnlyZoomed() {
        return this.content.width <= this.viewport.width;
      }
    }, this.option("Panzoom"));
    this.Panzoom = new d(this.$container, t), this.Panzoom.on({
      "*": function _(t) {
        for (var _len5 = arguments.length, e = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          e[_key5 - 1] = arguments[_key5];
        }

        return _this17.trigger.apply(_this17, ["Panzoom." + t].concat(e));
      },
      afterUpdate: function afterUpdate() {
        _this17.updatePage();
      },
      beforeTransform: this.onBeforeTransform.bind(this),
      touchEnd: this.onTouchEnd.bind(this),
      endAnimation: function endAnimation() {
        _this17.trigger("settle");
      }
    }), this.updateMetrics(), this.manageSlideVisiblity();
  };

  _proto8.updatePanzoom = function updatePanzoom() {
    this.Panzoom && (this.Panzoom.content = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.Panzoom.content, {
      fitWidth: this.contentWidth,
      origWidth: this.contentWidth,
      width: this.contentWidth
    }), this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {
      from: -1 * this.pages[this.pages.length - 1].left,
      to: -1 * this.pages[0].left
    }), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
      from: 0,
      to: 0
    }, this.Panzoom.handleCursor());
  };

  _proto8.manageSlideVisiblity = function manageSlideVisiblity() {
    var _this18 = this;

    var t = this.contentWidth,
        e = this.viewportWidth;
    var i = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0;
    var s = this.option("preload"),
        o = this.option("infiniteX", this.option("infinite")),
        n = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")),
        a = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
    this.slides.forEach(function (r) {
      var h,
          l,
          c = 0;
      h = i - n, l = i + e + a, h -= s * (e + n + a), l += s * (e + n + a);
      var d = r.left + r.width > h && r.left < l;
      h = i + t - n, l = i + t + e + a, h -= s * (e + n + a);
      var u = o && r.left + r.width > h && r.left < l;
      h = i - t - n, l = i - t + e + a, h -= s * (e + n + a);
      var f = o && r.left + r.width > h && r.left < l;
      u || d || f ? (_this18.createSlideEl(r), d && (c = 0), u && (c = -1), f && (c = 1), r.left + r.width > i && r.left <= i + e + a && (c = 0)) : _this18.removeSlideEl(r), r.hasDiff = c;
    });
    var r = 0,
        h = 0;
    this.slides.forEach(function (e, i) {
      var s = 0;
      e.$el ? (i !== r || e.hasDiff ? s = h + e.hasDiff * t : h = 0, e.$el.style.left = Math.abs(s) > .1 ? h + e.hasDiff * t + "px" : "", r++) : h += e.width;
    }), this.markSelectedSlides();
  };

  _proto8.createSlideEl = function createSlideEl(t) {
    var _e$classList2, _e$classList3;

    if (!t) return;

    if (t.$el) {
      var _e12 = t.$el.dataset.index;

      if (!_e12 || parseInt(_e12, 10) !== t.index) {
        var _e13;

        t.$el.dataset.index = t.index, t.$el.querySelectorAll("[data-lazy-srcset]").forEach(function (t) {
          t.srcset = t.dataset.lazySrcset;
        }), t.$el.querySelectorAll("[data-lazy-src]").forEach(function (t) {
          var e = t.dataset.lazySrc;
          t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = "url('" + e + "')";
        }), (_e13 = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = "url('" + _e13 + "')"), t.state = "ready";
      }

      return;
    }

    var e = document.createElement("div");
    e.dataset.index = t.index, (_e$classList2 = e.classList).add.apply(_e$classList2, (this.option("prefix") + this.option("classNames.slide")).split(" ")), t.customClass && (_e$classList3 = e.classList).add.apply(_e$classList3, t.customClass.split(" ")), t.html && (e.innerHTML = t.html);
    var i = [];
    this.slides.forEach(function (t, e) {
      t.$el && i.push(e);
    });
    var s = t.index;
    var o = null;

    if (i.length) {
      var _t26 = i.reduce(function (t, e) {
        return Math.abs(e - s) < Math.abs(t - s) ? e : t;
      });

      o = this.slides[_t26];
    }

    return this.$track.insertBefore(e, o && o.$el ? o.index < t.index ? o.$el.nextSibling : o.$el : null), t.$el = e, this.trigger("createSlide", t, s), t;
  };

  _proto8.removeSlideEl = function removeSlideEl(t) {
    t.$el && !t.isDom && (this.trigger("removeSlide", t), t.$el.remove(), t.$el = null);
  };

  _proto8.markSelectedSlides = function markSelectedSlides() {
    var _this19 = this;

    var t = this.option("classNames.slideSelected"),
        e = "aria-hidden";
    this.slides.forEach(function (i, s) {
      var o = i.$el;
      if (!o) return;
      var n = _this19.pages[_this19.page];
      n && n.indexes && n.indexes.indexOf(s) > -1 ? (t && !o.classList.contains(t) && (o.classList.add(t), _this19.trigger("selectSlide", i)), o.removeAttribute(e)) : (t && o.classList.contains(t) && (o.classList.remove(t), _this19.trigger("unselectSlide", i)), o.setAttribute(e, !0));
    });
  };

  _proto8.updatePage = function updatePage() {
    this.updateMetrics(), this.slideTo(this.page, {
      friction: 0
    });
  };

  _proto8.onBeforeTransform = function onBeforeTransform() {
    this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity();
  };

  _proto8.manageInfiniteTrack = function manageInfiniteTrack() {
    var t = this.contentWidth,
        e = this.viewportWidth;
    if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t < e) return;
    var i = this.Panzoom;
    var s = !1;
    return i.content.x < -1 * (t - e) && (i.content.x += t, this.pageIndex = this.pageIndex - this.pages.length, s = !0), i.content.x > e && (i.content.x -= t, this.pageIndex = this.pageIndex + this.pages.length, s = !0), s && "pointerdown" === i.state && i.resetDragPosition(), s;
  };

  _proto8.onTouchEnd = function onTouchEnd(t, e) {
    var i = this.option("dragFree");
    if (!i && this.pages.length > 1 && t.dragOffset.time < 350 && Math.abs(t.dragOffset.y) < 1 && Math.abs(t.dragOffset.x) > 5) this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();else if (i) {
      var _this$getPageFromPosi = this.getPageFromPosition(-1 * t.transform.x),
          _e14 = _this$getPageFromPosi[1];

      this.setPage(_e14);
    } else this.slideToClosest();
  };

  _proto8.slideToClosest = function slideToClosest(t) {
    if (t === void 0) {
      t = {};
    }

    var _this$getPageFromPosi2 = this.getPageFromPosition(-1 * this.Panzoom.content.x),
        e = _this$getPageFromPosi2[1];

    this.slideTo(e, t);
  };

  _proto8.getPageFromPosition = function getPageFromPosition(t) {
    var e = this.pages.length;
    this.option("center") && (t += .5 * this.viewportWidth);
    var i = Math.floor(t / this.contentWidth);
    t -= i * this.contentWidth;
    var s = this.slides.find(function (e) {
      return e.left <= t && e.left + e.width > t;
    });

    if (s) {
      var _t27 = this.findPageForSlide(s.index);

      return [_t27, _t27 + i * e];
    }

    return [0, 0];
  };

  _proto8.setPage = function setPage(t, e) {
    var i = 0,
        s = parseInt(t, 10) || 0;
    var o = this.page,
        n = this.pageIndex,
        a = this.pages.length,
        r = this.contentWidth,
        h = this.viewportWidth;

    if (t = (s % a + a) % a, this.option("infiniteX", this.option("infinite")) && r > h) {
      var _o7 = Math.floor(s / a) || 0,
          _n4 = r;

      if (i = this.pages[t].left + _o7 * _n4, !0 === e && a > 2) {
        var _t28 = -1 * this.Panzoom.content.x;

        var _e15 = i - _n4,
            _o8 = i + _n4,
            _r = Math.abs(_t28 - i),
            _h = Math.abs(_t28 - _e15),
            _l3 = Math.abs(_t28 - _o8);

        _l3 < _r && _l3 <= _h ? (i = _o8, s += a) : _h < _r && _h < _l3 && (i = _e15, s -= a);
      }
    } else t = s = Math.max(0, Math.min(s, a - 1)), i = this.pages.length ? this.pages[t].left : 0;

    return this.page = t, this.pageIndex = s, null !== o && t !== o && (this.prevPage = o, this.prevPageIndex = n, this.trigger("change", t, o)), i;
  };

  _proto8.destroy = function destroy() {
    var _this20 = this;

    this.state = "destroy", this.slides.forEach(function (t) {
      _this20.removeSlideEl(t);
    }), this.slides = [], this.Panzoom.destroy(), this.detachPlugins();
  };

  return y;
}(l);

y.version = "4.0.27", y.Plugins = p;
var v = !("undefined" == typeof window || !window.document || !window.document.createElement);
var b = null;

var x = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'],
    w = function w(t) {
  if (t && v) {
    null === b && document.createElement("div").focus({
      get preventScroll() {
        return b = !0, !1;
      }

    });

    try {
      if (t.setActive) t.setActive();else if (b) t.focus({
        preventScroll: !0
      });else {
        var _e16 = window.pageXOffset || document.body.scrollTop,
            _i21 = window.pageYOffset || document.body.scrollLeft;

        t.focus(), document.body.scrollTo({
          top: _e16,
          left: _i21,
          behavior: "auto"
        });
      }
    } catch (t) {}
  }
};

var $ = /*#__PURE__*/function () {
  function $(t) {
    this.fancybox = t, this.$container = null, this.state = "init";

    for (var _i22 = 0, _arr3 = ["onPrepare", "onClosing", "onKeydown"]; _i22 < _arr3.length; _i22++) {
      var _t29 = _arr3[_i22];
      this[_t29] = this[_t29].bind(this);
    }

    this.events = {
      prepare: this.onPrepare,
      closing: this.onClosing,
      keydown: this.onKeydown
    };
  }

  var _proto9 = $.prototype;

  _proto9.onPrepare = function onPrepare() {
    this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build();
  };

  _proto9.onClosing = function onClosing() {
    this.Carousel && this.Carousel.Panzoom.detachEvents();
  };

  _proto9.onKeydown = function onKeydown(t, e) {
    e === t.option("Thumbs.key") && this.toggle();
  };

  _proto9.build = function build() {
    var _this21 = this;

    if (this.$container) return;
    var t = document.createElement("div");
    t.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(t, this.fancybox.$carousel.nextSibling), this.Carousel = new y(t, e(!0, {
      Dots: !1,
      Navigation: !1,
      Sync: {
        friction: 0
      },
      infinite: !1,
      center: !0,
      fill: !0,
      dragFree: !0,
      slidesPerPage: 1,
      preload: 1
    }, this.fancybox.option("Thumbs.Carousel"), {
      Sync: {
        target: this.fancybox.Carousel
      },
      slides: this.getSlides()
    })), this.Carousel.Panzoom.on("wheel", function (t, e) {
      e.preventDefault(), _this21.fancybox[e.deltaY < 0 ? "prev" : "next"]();
    }), this.$container = t, this.state = "visible";
  };

  _proto9.getSlides = function getSlides() {
    var t = [];

    for (var _iterator4 = _createForOfIteratorHelperLoose(this.fancybox.items), _step4; !(_step4 = _iterator4()).done;) {
      var _e17 = _step4.value;
      var _i23 = _e17.thumb;
      _i23 && t.push({
        html: "<div class=\"fancybox__thumb\" style=\"background-image:url('" + _i23 + "')\"></div>",
        customClass: "has-thumb has-" + (_e17.type || "image")
      });
    }

    return t;
  };

  _proto9.toggle = function toggle() {
    "visible" === this.state ? this.hide() : "hidden" === this.state ? this.show() : this.build();
  };

  _proto9.show = function show() {
    "hidden" === this.state && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), this.state = "visible");
  };

  _proto9.hide = function hide() {
    "visible" === this.state && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", this.state = "hidden");
  };

  _proto9.cleanup = function cleanup() {
    this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = "init";
  };

  _proto9.attach = function attach() {
    this.fancybox.on(this.events);
  };

  _proto9.detach = function detach() {
    this.fancybox.off(this.events), this.cleanup();
  };

  return $;
}();

$.defaults = {
  minSlideCount: 2,
  minScreenHeight: 500,
  autoStart: !0,
  key: "t",
  Carousel: {}
};

var C = function C(t, e) {
  var i = new URL(t),
      s = new URLSearchParams(i.search);
  var o = new URLSearchParams();

  for (var _i24 = 0, _arr4 = [].concat(s, Object.entries(e)); _i24 < _arr4.length; _i24++) {
    var _arr4$_i = _arr4[_i24],
        _t30 = _arr4$_i[0],
        _i25 = _arr4$_i[1];
    "t" === _t30 ? o.set("start", parseInt(_i25)) : o.set(_t30, _i25);
  }

  o = o.toString();
  var n = t.match(/#t=((.*)?\d+s)/);
  return n && (o += "#t=" + n[1]), o;
},
    S = {
  video: {
    autoplay: !0,
    ratio: 16 / 9
  },
  youtube: {
    autohide: 1,
    fs: 1,
    rel: 0,
    hd: 1,
    wmode: "transparent",
    enablejsapi: 1,
    html5: 1
  },
  vimeo: {
    hd: 1,
    show_title: 1,
    show_byline: 1,
    show_portrait: 0,
    fullscreen: 1
  },
  html5video: {
    tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
    format: ""
  }
};

var E = /*#__PURE__*/function () {
  function E(t) {
    this.fancybox = t;

    for (var _i26 = 0, _arr5 = ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"]; _i26 < _arr5.length; _i26++) {
      var _t31 = _arr5[_i26];
      this[_t31] = this[_t31].bind(this);
    }

    this.events = {
      init: this.onInit,
      ready: this.onReady,
      "Carousel.createSlide": this.onCreateSlide,
      "Carousel.removeSlide": this.onRemoveSlide,
      "Carousel.selectSlide": this.onSelectSlide,
      "Carousel.unselectSlide": this.onUnselectSlide,
      "Carousel.refresh": this.onRefresh
    };
  }

  var _proto10 = E.prototype;

  _proto10.onInit = function onInit() {
    for (var _iterator5 = _createForOfIteratorHelperLoose(this.fancybox.items), _step5; !(_step5 = _iterator5()).done;) {
      var _t32 = _step5.value;
      this.processType(_t32);
    }
  };

  _proto10.processType = function processType(t) {
    if (t.html) return t.src = t.html, t.type = "html", void delete t.html;
    var i = t.src || "";
    var s = t.type || this.fancybox.options.type,
        o = null;

    if (!i || "string" == typeof i) {
      if (o = i.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
        var _e18 = C(i, this.fancybox.option("Html.youtube")),
            _n5 = encodeURIComponent(o[1]);

        t.videoId = _n5, t.src = "https://www.youtube-nocookie.com/embed/" + _n5 + "?" + _e18, t.thumb = t.thumb || "https://i.ytimg.com/vi/" + _n5 + "/mqdefault.jpg", t.vendor = "youtube", s = "video";
      } else if (o = i.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
        var _e19 = C(i, this.fancybox.option("Html.vimeo")),
            _n6 = encodeURIComponent(o[1]);

        t.videoId = _n6, t.src = "https://player.vimeo.com/video/" + _n6 + "?" + _e19, t.vendor = "vimeo", s = "video";
      } else (o = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = "//maps.google." + o[1] + "/?ll=" + (o[2] ? o[2] + "&z=" + Math.floor(o[3]) + (o[4] ? o[4].replace(/^\//, "&") : "") : o[4] + "").replace(/\?/, "&") + "&output=" + (o[4] && o[4].indexOf("layer=c") > 0 ? "svembed" : "embed"), s = "map") : (o = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = "//maps.google." + o[1] + "/maps?q=" + o[2].replace("query=", "q=").replace("api=1", "") + "&output=embed", s = "map");

      s || ("#" === i.charAt(0) ? s = "inline" : (o = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "html5video", t.format = t.format || "video/" + ("ogv" === o[1] ? "ogg" : o[1])) : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : i.match(/\.(pdf)((\?|#).*)?$/i) && (s = "pdf")), t.type = s || this.fancybox.option("defaultType", "image"), "html5video" !== s && "video" !== s || (t.video = e({}, this.fancybox.option("Html.video"), t.video), t._width && t._height ? t.ratio = parseFloat(t._width) / parseFloat(t._height) : t.ratio = t.ratio || t.video.ratio || S.video.ratio);
    }
  };

  _proto10.onReady = function onReady() {
    var _this22 = this;

    this.fancybox.Carousel.slides.forEach(function (t) {
      t.$el && (_this22.setContent(t), t.index === _this22.fancybox.getSlide().index && _this22.playVideo(t));
    });
  };

  _proto10.onCreateSlide = function onCreateSlide(t, e, i) {
    "ready" === this.fancybox.state && this.setContent(i);
  };

  _proto10.loadInlineContent = function loadInlineContent(t) {
    var e;
    if (t.src instanceof HTMLElement) e = t.src;else if ("string" == typeof t.src) {
      var _i27 = t.src.split("#", 2),
          _s8 = 2 === _i27.length && "" === _i27[0] ? _i27[1] : _i27[0];

      e = document.getElementById(_s8);
    }

    if (e) {
      if ("clone" === t.type || e.$placeHolder) {
        e = e.cloneNode(!0);

        var _i28 = e.getAttribute("id");

        _i28 = _i28 ? _i28 + "--clone" : "clone-" + this.fancybox.id + "-" + t.index, e.setAttribute("id", _i28);
      } else {
        var _t33 = document.createElement("div");

        _t33.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(_t33, e), e.$placeHolder = _t33;
      }

      this.fancybox.setContent(t, e);
    } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}");
  };

  _proto10.loadAjaxContent = function loadAjaxContent(t) {
    var e = this.fancybox,
        i = new XMLHttpRequest();
    e.showLoading(t), i.onreadystatechange = function () {
      i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t), 200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
    };
    var s = t.ajax || null;
    i.open(s ? "POST" : "GET", t.src), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.send(s), t.xhr = i;
  };

  _proto10.loadIframeContent = function loadIframeContent(t) {
    var _this23 = this;

    var e = this.fancybox,
        i = document.createElement("iframe");
    if (i.className = "fancybox__iframe", i.setAttribute("id", "fancybox__iframe_" + e.id + "_" + t.index), i.setAttribute("allow", "autoplay; fullscreen"), i.setAttribute("scrolling", "auto"), t.$iframe = i, "iframe" !== t.type || !1 === t.preload) return i.setAttribute("src", t.src), this.fancybox.setContent(t, i), void this.resizeIframe(t);
    e.showLoading(t);
    var s = document.createElement("div");
    s.style.visibility = "hidden", this.fancybox.setContent(t, s), s.appendChild(i), i.onerror = function () {
      e.setError(t, "{{IFRAME_ERROR}}");
    }, i.onload = function () {
      e.hideLoading(t);
      var s = !1;
      i.isReady || (i.isReady = !0, s = !0), i.src.length && (i.parentNode.style.visibility = "", _this23.resizeIframe(t), s && e.revealContent(t));
    }, i.setAttribute("src", t.src);
  };

  _proto10.setAspectRatio = function setAspectRatio(t) {
    var e = t.$content,
        i = t.ratio;
    if (!e) return;
    var s = t._width,
        o = t._height;

    if (i || s && o) {
      Object.assign(e.style, {
        width: s && o ? "100%" : "",
        height: s && o ? "100%" : "",
        maxWidth: "",
        maxHeight: ""
      });
      var _t34 = e.offsetWidth,
          _n7 = e.offsetHeight;

      if (s = s || _t34, o = o || _n7, s > _t34 || o > _n7) {
        var _e20 = Math.min(_t34 / s, _n7 / o);

        s *= _e20, o *= _e20;
      }

      Math.abs(s / o - i) > .01 && (i < s / o ? s = o * i : o = s / i), Object.assign(e.style, {
        width: s + "px",
        height: o + "px"
      });
    }
  };

  _proto10.resizeIframe = function resizeIframe(t) {
    var e = t.$iframe;
    if (!e) return;
    var i = t._width || 0,
        s = t._height || 0;
    i && s && (t.autoSize = !1);
    var o = e.parentNode,
        n = o && o.style;
    if (!1 !== t.preload && !1 !== t.autoSize && n) try {
      var _t35 = window.getComputedStyle(o),
          _a4 = parseFloat(_t35.paddingLeft) + parseFloat(_t35.paddingRight),
          _r2 = parseFloat(_t35.paddingTop) + parseFloat(_t35.paddingBottom),
          _h2 = e.contentWindow.document,
          _l4 = _h2.getElementsByTagName("html")[0],
          _c = _h2.body;

      n.width = "", _c.style.overflow = "hidden", i = i || _l4.scrollWidth + _a4, n.width = i + "px", _c.style.overflow = "", n.flex = "0 0 auto", n.height = _c.scrollHeight + "px", s = _l4.scrollHeight + _r2;
    } catch (t) {}

    if (i || s) {
      var _t36 = {
        flex: "0 1 auto"
      };
      i && (_t36.width = i + "px"), s && (_t36.height = s + "px"), Object.assign(n, _t36);
    }
  };

  _proto10.onRefresh = function onRefresh(t, e) {
    var _this24 = this;

    e.slides.forEach(function (t) {
      t.$el && (t.$iframe && _this24.resizeIframe(t), t.ratio && _this24.setAspectRatio(t));
    });
  };

  _proto10.setContent = function setContent(t) {
    if (t && !t.isDom) {
      switch (t.type) {
        case "html":
          this.fancybox.setContent(t, t.src);
          break;

        case "html5video":
          this.fancybox.setContent(t, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.format || t.html5video && t.html5video.format || "").replace("{{poster}}", t.poster || t.thumb || ""));
          break;

        case "inline":
        case "clone":
          this.loadInlineContent(t);
          break;

        case "ajax":
          this.loadAjaxContent(t);
          break;

        case "pdf":
        case "video":
        case "map":
          t.preload = !1;

        case "iframe":
          this.loadIframeContent(t);
      }

      t.ratio && this.setAspectRatio(t);
    }
  };

  _proto10.onSelectSlide = function onSelectSlide(t, e, i) {
    "ready" === t.state && this.playVideo(i);
  };

  _proto10.playVideo = function playVideo(t) {
    if ("html5video" === t.type && t.video.autoplay) try {
      var _e21 = t.$el.querySelector("video");

      if (_e21) {
        var _t37 = _e21.play();

        void 0 !== _t37 && _t37.then(function () {})["catch"](function (t) {
          _e21.muted = !0, _e21.play();
        });
      }
    } catch (t) {}
    if ("video" !== t.type || !t.$iframe || !t.$iframe.contentWindow) return;

    var e = function e() {
      if ("done" === t.state && t.$iframe && t.$iframe.contentWindow) {
        var _e22;

        if (t.$iframe.isReady) return t.video && t.video.autoplay && (_e22 = "youtube" == t.vendor ? {
          event: "command",
          func: "playVideo"
        } : {
          method: "play",
          value: "true"
        }), void (_e22 && t.$iframe.contentWindow.postMessage(JSON.stringify(_e22), "*"));
        "youtube" === t.vendor && (_e22 = {
          event: "listening",
          id: t.$iframe.getAttribute("id")
        }, t.$iframe.contentWindow.postMessage(JSON.stringify(_e22), "*"));
      }

      t.poller = setTimeout(e, 250);
    };

    e();
  };

  _proto10.onUnselectSlide = function onUnselectSlide(t, e, i) {
    if ("html5video" === i.type) {
      try {
        i.$el.querySelector("video").pause();
      } catch (t) {}

      return;
    }

    var s = !1;
    "vimeo" == i.vendor ? s = {
      method: "pause",
      value: "true"
    } : "youtube" === i.vendor && (s = {
      event: "command",
      func: "pauseVideo"
    }), s && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(s), "*"), clearTimeout(i.poller);
  };

  _proto10.onRemoveSlide = function onRemoveSlide(t, e, i) {
    i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, i.$iframe.src = "//about:blank", i.$iframe = null);
    var s = i.$content;
    "inline" === i.type && s && (s.classList.remove("fancybox__content"), "none" !== s.style.display && (s.style.display = "none")), i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null);
    var o = s && s.$placeHolder;
    o && (o.parentNode.insertBefore(s, o), o.remove(), s.$placeHolder = null);
  };

  _proto10.onMessage = function onMessage(t) {
    try {
      var _e23 = JSON.parse(t.data);

      if ("https://player.vimeo.com" === t.origin) {
        if ("ready" === _e23.event) {
          for (var _iterator6 = _createForOfIteratorHelperLoose(document.getElementsByClassName("fancybox__iframe")), _step6; !(_step6 = _iterator6()).done;) {
            var _e24 = _step6.value;
            _e24.contentWindow === t.source && (_e24.isReady = 1);
          }
        }
      } else "https://www.youtube-nocookie.com" === t.origin && "onReady" === _e23.event && (document.getElementById(_e23.id).isReady = 1);
    } catch (t) {}
  };

  _proto10.attach = function attach() {
    this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1);
  };

  _proto10.detach = function detach() {
    this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1);
  };

  return E;
}();

E.defaults = S;

var P = /*#__PURE__*/function () {
  function P(t) {
    this.fancybox = t;

    for (var _i29 = 0, _arr6 = ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"]; _i29 < _arr6.length; _i29++) {
      var _t38 = _arr6[_i29];
      this[_t38] = this[_t38].bind(this);
    }

    this.events = {
      ready: this.onReady,
      closing: this.onClosing,
      done: this.onDone,
      "Carousel.change": this.onPageChange,
      "Carousel.createSlide": this.onCreateSlide,
      "Carousel.removeSlide": this.onRemoveSlide
    };
  }

  var _proto11 = P.prototype;

  _proto11.onReady = function onReady() {
    var _this25 = this;

    this.fancybox.Carousel.slides.forEach(function (t) {
      t.$el && _this25.setContent(t);
    });
  };

  _proto11.onDone = function onDone(t, e) {
    this.handleCursor(e);
  };

  _proto11.onClosing = function onClosing(t) {
    clearTimeout(this.clickTimer), this.clickTimer = null, t.Carousel.slides.forEach(function (t) {
      t.$image && (t.state = "destroy"), t.Panzoom && t.Panzoom.detachEvents();
    }), "closing" === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut();
  };

  _proto11.onCreateSlide = function onCreateSlide(t, e, i) {
    "ready" === this.fancybox.state && this.setContent(i);
  };

  _proto11.onRemoveSlide = function onRemoveSlide(t, e, i) {
    i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")), i.$image.remove(), i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
  };

  _proto11.setContent = function setContent(t) {
    var _this26 = this;

    if (t.isDom || t.html || t.type && "image" !== t.type) return;
    if (t.$image) return;
    t.type = "image", t.state = "loading";
    var e = document.createElement("div");
    e.style.visibility = "hidden";
    var i = document.createElement("img");
    i.addEventListener("load", function (e) {
      e.stopImmediatePropagation(), _this26.onImageStatusChange(t);
    }), i.addEventListener("error", function () {
      _this26.onImageStatusChange(t);
    }), i.src = t.src, i.alt = "", i.draggable = !1, i.classList.add("fancybox__image"), t.srcset && i.setAttribute("srcset", t.srcset), t.sizes && i.setAttribute("sizes", t.sizes), t.$image = i;
    var s = this.fancybox.option("Image.wrap");

    if (s) {
      var _o9 = document.createElement("div");

      _o9.classList.add("string" == typeof s ? s : "fancybox__image-wrap"), _o9.appendChild(i), e.appendChild(_o9), t.$wrap = _o9;
    } else e.appendChild(i);

    t.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t, e), i.complete || i.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t);
  };

  _proto11.onImageStatusChange = function onImageStatusChange(t) {
    var _this27 = this;

    var e = t.$image;
    e && "loading" === t.state && (e.complete && e.naturalWidth && e.naturalHeight ? (this.fancybox.hideLoading(t), "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(t), t.$el.addEventListener("wheel", function (e) {
      return _this27.onWheel(t, e);
    }, {
      passive: !1
    }), t.$content.addEventListener("click", function (e) {
      return _this27.onClick(t, e);
    }, {
      passive: !1
    }), this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
  };

  _proto11.initSlidePanzoom = function initSlidePanzoom(t) {
    var _this28 = this;

    t.Panzoom || (t.Panzoom = new d(t.$el, e(!0, this.fancybox.option("Image.Panzoom", {}), {
      viewport: t.$wrap,
      content: t.$image,
      width: t._width,
      height: t._height,
      wrapInner: !1,
      textSelection: !0,
      touch: this.fancybox.option("Image.touch"),
      panOnlyZoomed: !0,
      click: !1,
      wheel: !1
    })), t.Panzoom.on("startAnimation", function () {
      _this28.fancybox.trigger("Image.startAnimation", t);
    }), t.Panzoom.on("endAnimation", function () {
      "zoomIn" === t.state && _this28.fancybox.done(t), _this28.handleCursor(t), _this28.fancybox.trigger("Image.endAnimation", t);
    }), t.Panzoom.on("afterUpdate", function () {
      _this28.handleCursor(t), _this28.fancybox.trigger("Image.afterUpdate", t);
    }));
  };

  _proto11.revealContent = function revealContent(t) {
    null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t);
  };

  _proto11.getZoomInfo = function getZoomInfo(t) {
    var e = t.$thumb.getBoundingClientRect(),
        i = e.width,
        s = e.height,
        o = t.$content.getBoundingClientRect(),
        n = o.width,
        a = o.height,
        r = o.top - e.top,
        h = o.left - e.left;
    var l = this.fancybox.option("Image.zoomOpacity");
    return "auto" === l && (l = Math.abs(i / s - n / a) > .1), {
      top: r,
      left: h,
      scale: n && i ? i / n : 1,
      opacity: l
    };
  };

  _proto11.canZoom = function canZoom(t) {
    var e = this.fancybox,
        i = e.$container;
    if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
    if (t.Panzoom && !t.Panzoom.content.width) return !1;
    if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit")) return !1;
    var s = t.$thumb;
    if (!s || "loading" === t.state) return !1;
    i.classList.add("fancybox__no-click");
    var o = s.getBoundingClientRect();
    var n;

    if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
      var _t39 = document.elementFromPoint(o.left + 1, o.top + 1) === s,
          _e25 = document.elementFromPoint(o.right - 1, o.bottom - 1) === s;

      n = _t39 && _e25;
    } else n = document.elementFromPoint(o.left + .5 * o.width, o.top + .5 * o.height) === s;

    return i.classList.remove("fancybox__no-click"), n;
  };

  _proto11.zoomIn = function zoomIn() {
    var t = this.fancybox,
        e = t.getSlide(),
        i = e.Panzoom,
        _this$getZoomInfo = this.getZoomInfo(e),
        s = _this$getZoomInfo.top,
        o = _this$getZoomInfo.left,
        n = _this$getZoomInfo.scale,
        a = _this$getZoomInfo.opacity;

    t.trigger("reveal", e), i.panTo({
      x: -1 * o,
      y: -1 * s,
      scale: n,
      friction: 0,
      ignoreBounds: !0
    }), e.$content.style.visibility = "", e.state = "zoomIn", !0 === a && i.on("afterTransform", function (t) {
      "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, 1 - (1 - t.content.scale) / (1 - n)));
    }), i.panTo({
      x: 0,
      y: 0,
      scale: 1,
      friction: this.fancybox.option("Image.zoomFriction")
    });
  };

  _proto11.zoomOut = function zoomOut() {
    var _this29 = this;

    var t = this.fancybox,
        e = t.getSlide(),
        i = e.Panzoom;
    if (!i) return;
    e.state = "zoomOut", t.state = "customClosing", e.$caption && (e.$caption.style.visibility = "hidden");
    var s = this.fancybox.option("Image.zoomFriction");

    var o = function o(t) {
      var _this29$getZoomInfo = _this29.getZoomInfo(e),
          o = _this29$getZoomInfo.top,
          n = _this29$getZoomInfo.left,
          a = _this29$getZoomInfo.scale,
          r = _this29$getZoomInfo.opacity;

      t || r || (s *= .82), i.panTo({
        x: -1 * n,
        y: -1 * o,
        scale: a,
        friction: s,
        ignoreBounds: !0
      }), s *= .98;
    };

    window.addEventListener("scroll", o), i.once("endAnimation", function () {
      window.removeEventListener("scroll", o), t.destroy();
    }), o();
  };

  _proto11.handleCursor = function handleCursor(t) {
    if ("image" !== t.type || !t.$el) return;
    var e = t.Panzoom,
        i = this.fancybox.option("Image.click", !1, t),
        s = this.fancybox.option("Image.touch"),
        o = t.$el.classList,
        n = this.fancybox.option("Image.canZoomInClass"),
        a = this.fancybox.option("Image.canZoomOutClass");

    if (o.remove(a), o.remove(n), e && "toggleZoom" === i) {
      e && 1 === e.content.scale && e.option("maxScale") - e.content.scale > .01 ? o.add(n) : e.content.scale > 1 && !s && o.add(a);
    } else "close" === i && o.add(a);
  };

  _proto11.onWheel = function onWheel(t, e) {
    if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", e)) switch (this.fancybox.option("Image.wheel")) {
      case "zoom":
        "done" === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e);
        break;

      case "close":
        this.fancybox.close();
        break;

      case "slide":
        this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
    }
  };

  _proto11.onClick = function onClick(t, e) {
    var _this30 = this;

    if ("ready" !== this.fancybox.state) return;
    var i = t.Panzoom;
    if (i && (i.dragPosition.midPoint || 0 !== i.dragOffset.x || 0 !== i.dragOffset.y || 1 !== i.dragOffset.scale)) return;
    if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;

    var s = function s(i) {
      switch (i) {
        case "toggleZoom":
          e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);
          break;

        case "close":
          _this30.fancybox.close();

          break;

        case "next":
          e.stopPropagation(), _this30.fancybox.next();
      }
    },
        o = this.fancybox.option("Image.click"),
        n = this.fancybox.option("Image.doubleClick");

    n ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, s(n)) : this.clickTimer = setTimeout(function () {
      _this30.clickTimer = null, s(o);
    }, 300) : s(o);
  };

  _proto11.onPageChange = function onPageChange(t, e) {
    var i = t.getSlide();
    e.slides.forEach(function (t) {
      t.Panzoom && "done" === t.state && t.index !== i.index && t.Panzoom.panTo({
        x: 0,
        y: 0,
        scale: 1,
        friction: .8
      });
    });
  };

  _proto11.attach = function attach() {
    this.fancybox.on(this.events);
  };

  _proto11.detach = function detach() {
    this.fancybox.off(this.events);
  };

  return P;
}();

P.defaults = {
  canZoomInClass: "can-zoom_in",
  canZoomOutClass: "can-zoom_out",
  zoom: !0,
  zoomOpacity: "auto",
  zoomFriction: .82,
  ignoreCoveredThumbnail: !1,
  touch: !0,
  click: "toggleZoom",
  doubleClick: null,
  wheel: "zoom",
  fit: "contain",
  wrap: !1,
  Panzoom: {
    ratio: 1
  }
};

var L = /*#__PURE__*/function () {
  function L(t) {
    this.fancybox = t;

    for (var _i30 = 0, _arr7 = ["onChange", "onClosing"]; _i30 < _arr7.length; _i30++) {
      var _t40 = _arr7[_i30];
      this[_t40] = this[_t40].bind(this);
    }

    this.events = {
      initCarousel: this.onChange,
      "Carousel.change": this.onChange,
      closing: this.onClosing
    }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null;
  }

  var _proto12 = L.prototype;

  _proto12.onChange = function onChange(t) {
    var _this31 = this;

    var e = t.Carousel;
    this.timer && clearTimeout(this.timer);
    var i = null === e.prevPage,
        s = t.getSlide(),
        o = new URL(document.URL).hash;
    var n = !1;
    if (s.slug) n = "#" + s.slug;else {
      var _i31 = s.$trigger && s.$trigger.dataset,
          _o10 = t.option("slug") || _i31 && _i31.fancybox;

      _o10 && _o10.length && "true" !== _o10 && (n = "#" + _o10 + (e.slides.length > 1 ? "-" + (s.index + 1) : ""));
    }
    i && (this.origHash = o !== n ? o : ""), n && o !== n && (this.timer = setTimeout(function () {
      try {
        window.history[i ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + n), i && (_this31.hasCreatedHistory = !0);
      } catch (t) {}
    }, 300));
  };

  _proto12.onClosing = function onClosing() {
    if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) try {
      return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
    } catch (t) {}
  };

  _proto12.attach = function attach(t) {
    t.on(this.events);
  };

  _proto12.detach = function detach(t) {
    t.off(this.events);
  };

  L.startFromUrl = function startFromUrl() {
    var t = L.Fancybox;
    if (!t || t.getInstance() || !1 === t.defaults.Hash) return;

    var _L$getParsedURL = L.getParsedURL(),
        e = _L$getParsedURL.hash,
        i = _L$getParsedURL.slug,
        s = _L$getParsedURL.index;

    if (!i) return;
    var o = document.querySelector("[data-slug=\"" + e + "\"]");
    if (o && o.dispatchEvent(new CustomEvent("click", {
      bubbles: !0,
      cancelable: !0
    })), t.getInstance()) return;
    var n = document.querySelectorAll("[data-fancybox=\"" + i + "\"]");
    n.length && (null === s && 1 === n.length ? o = n[0] : s && (o = n[s - 1]), o && o.dispatchEvent(new CustomEvent("click", {
      bubbles: !0,
      cancelable: !0
    })));
  };

  L.onHashChange = function onHashChange() {
    var _L$getParsedURL2 = L.getParsedURL(),
        t = _L$getParsedURL2.slug,
        e = _L$getParsedURL2.index,
        i = L.Fancybox,
        s = i && i.getInstance();

    if (s && s.plugins.Hash) {
      if (t) {
        var _i32 = s.Carousel;
        if (t === s.option("slug")) return _i32.slideTo(e - 1);

        for (var _iterator7 = _createForOfIteratorHelperLoose(_i32.slides), _step7; !(_step7 = _iterator7()).done;) {
          var _e26 = _step7.value;
          if (_e26.slug && _e26.slug === t) return _i32.slideTo(_e26.index);
        }

        var _o11 = s.getSlide(),
            _n8 = _o11.$trigger && _o11.$trigger.dataset;

        if (_n8 && _n8.fancybox === t) return _i32.slideTo(e - 1);
      }

      s.plugins.Hash.hasSilentClose = !0, s.close();
    }

    L.startFromUrl();
  };

  L.create = function create(t) {
    function e() {
      window.addEventListener("hashchange", L.onHashChange, !1), L.startFromUrl();
    }

    L.Fancybox = t, v && window.requestAnimationFrame(function () {
      /complete|interactive|loaded/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e);
    });
  };

  L.destroy = function destroy() {
    window.removeEventListener("hashchange", L.onHashChange, !1);
  };

  L.getParsedURL = function getParsedURL() {
    var t = window.location.hash.substr(1),
        e = t.split("-"),
        i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;
    return {
      hash: t,
      slug: e.join("-"),
      index: i
    };
  };

  return L;
}();

var T = {
  pageXOffset: 0,
  pageYOffset: 0,
  element: function element() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
  },
  activate: function activate(t) {
    T.pageXOffset = window.pageXOffset, T.pageYOffset = window.pageYOffset, t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
  },
  deactivate: function deactivate() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
  }
};

var _ = /*#__PURE__*/function () {
  function _(t) {
    this.fancybox = t, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  var _proto13 = _.prototype;

  _proto13.isActive = function isActive() {
    return this.active;
  };

  _proto13.setTimer = function setTimer() {
    var _this32 = this;

    if (!this.active || this.timer) return;
    var t = this.fancybox.option("slideshow.delay", 3e3);
    this.timer = setTimeout(function () {
      _this32.timer = null, _this32.fancybox.option("infinite") || _this32.fancybox.getSlide().index !== _this32.fancybox.Carousel.slides.length - 1 ? _this32.fancybox.next() : _this32.fancybox.jumpTo(0, {
        friction: 0
      });
    }, t);
    var e = this.$progress;
    e || (e = document.createElement("div"), e.classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel), this.$progress = e, e.offsetHeight), e.style.transitionDuration = t + "ms", e.style.transform = "scaleX(1)";
  };

  _proto13.clearTimer = function clearTimer() {
    clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", this.$progress.style.transform = "", this.$progress.offsetHeight);
  };

  _proto13.activate = function activate() {
    this.active || (this.active = !0, this.fancybox.$container.classList.add("has-slideshow"), "done" === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1));
  };

  _proto13.handleVisibilityChange = function handleVisibilityChange() {
    this.deactivate();
  };

  _proto13.deactivate = function deactivate() {
    this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1);
  };

  _proto13.toggle = function toggle() {
    this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate();
  };

  return _;
}();

var A = {
  display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"],
  autoEnable: !0,
  items: {
    counter: {
      position: "left",
      type: "div",
      "class": "fancybox__counter",
      html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
      attr: {
        tabindex: -1
      }
    },
    prev: {
      type: "button",
      "class": "fancybox__button--prev",
      label: "PREV",
      html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
      attr: {
        "data-fancybox-prev": ""
      }
    },
    next: {
      type: "button",
      "class": "fancybox__button--next",
      label: "NEXT",
      html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
      attr: {
        "data-fancybox-next": ""
      }
    },
    fullscreen: {
      type: "button",
      "class": "fancybox__button--fullscreen",
      label: "TOGGLE_FULLSCREEN",
      html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
      click: function click(t) {
        t.preventDefault(), T.element() ? T.deactivate() : T.activate(this.fancybox.$container);
      }
    },
    slideshow: {
      type: "button",
      "class": "fancybox__button--slideshow",
      label: "TOGGLE_SLIDESHOW",
      html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
      click: function click(t) {
        t.preventDefault(), this.Slideshow.toggle();
      }
    },
    zoom: {
      type: "button",
      "class": "fancybox__button--zoom",
      label: "TOGGLE_ZOOM",
      html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
      click: function click(t) {
        t.preventDefault();
        var e = this.fancybox.getSlide().Panzoom;
        e && e.toggleZoom();
      }
    },
    download: {
      type: "link",
      label: "DOWNLOAD",
      "class": "fancybox__button--download",
      html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
      click: function click(t) {
        t.stopPropagation();
      }
    },
    thumbs: {
      type: "button",
      label: "TOGGLE_THUMBS",
      "class": "fancybox__button--thumbs",
      html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
      click: function click(t) {
        t.stopPropagation();
        var e = this.fancybox.plugins.Thumbs;
        e && e.toggle();
      }
    },
    close: {
      type: "button",
      label: "CLOSE",
      "class": "fancybox__button--close",
      html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
      attr: {
        "data-fancybox-close": "",
        tabindex: 0
      }
    }
  }
};

var z = /*#__PURE__*/function () {
  function z(t) {
    var _this33 = this;

    this.fancybox = t, this.$container = null, this.state = "init";

    for (var _i33 = 0, _arr8 = ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"]; _i33 < _arr8.length; _i33++) {
      var _t41 = _arr8[_i33];
      this[_t41] = this[_t41].bind(this);
    }

    this.events = {
      init: this.onInit,
      prepare: this.onPrepare,
      done: this.onDone,
      keydown: this.onKeydown,
      closing: this.onClosing,
      "Carousel.change": this.onChange,
      "Carousel.settle": this.onSettle,
      "Carousel.Panzoom.touchStart": function CarouselPanzoomTouchStart() {
        return _this33.onRefresh();
      },
      "Image.startAnimation": function ImageStartAnimation(t, e) {
        return _this33.onRefresh(e);
      },
      "Image.afterUpdate": function ImageAfterUpdate(t, e) {
        return _this33.onRefresh(e);
      }
    };
  }

  var _proto14 = z.prototype;

  _proto14.onInit = function onInit() {
    if (this.fancybox.option("Toolbar.autoEnable")) {
      var _t42 = !1;

      for (var _iterator8 = _createForOfIteratorHelperLoose(this.fancybox.items), _step8; !(_step8 = _iterator8()).done;) {
        var _e27 = _step8.value;

        if ("image" === _e27.type) {
          _t42 = !0;
          break;
        }
      }

      if (!_t42) return void (this.state = "disabled");
    }

    for (var _iterator9 = _createForOfIteratorHelperLoose(this.fancybox.option("Toolbar.display")), _step9; !(_step9 = _iterator9()).done;) {
      var _e28 = _step9.value;

      if ("close" === (t(_e28) ? _e28.id : _e28)) {
        this.fancybox.options.closeButton = !1;
        break;
      }
    }
  };

  _proto14.onPrepare = function onPrepare() {
    var t = this.fancybox;
    if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new _(t), !t.Carousel.prevPage && (t.option("slideshow.autoStart") && this.Slideshow.activate(), t.option("fullscreen.autoStart") && !T.element()))) try {
      T.activate(t.$container);
    } catch (t) {}
  };

  _proto14.onFsChange = function onFsChange() {
    window.scrollTo(T.pageXOffset, T.pageYOffset);
  };

  _proto14.onSettle = function onSettle() {
    var t = this.fancybox,
        e = this.Slideshow;
    e && e.isActive() && (t.getSlide().index !== t.Carousel.slides.length - 1 || t.option("infinite") ? "done" === t.getSlide().state && e.setTimer() : e.deactivate());
  };

  _proto14.onChange = function onChange() {
    this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer();
  };

  _proto14.onDone = function onDone(t, e) {
    var i = this.Slideshow;
    e.index === t.getSlide().index && (this.update(), i && i.isActive() && (t.option("infinite") || e.index !== t.Carousel.slides.length - 1 ? i.setTimer() : i.deactivate()));
  };

  _proto14.onRefresh = function onRefresh(t) {
    t && t.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t && "done" !== t.state || this.Slideshow.deactivate());
  };

  _proto14.onKeydown = function onKeydown(t, e, i) {
    " " === e && this.Slideshow && (this.Slideshow.toggle(), i.preventDefault());
  };

  _proto14.onClosing = function onClosing() {
    this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange);
  };

  _proto14.createElement = function createElement(t) {
    var _e$classList4;

    var e;
    "div" === t.type ? e = document.createElement("div") : (e = document.createElement("link" === t.type ? "a" : "button"), e.classList.add("carousel__button")), e.innerHTML = t.html, e.setAttribute("tabindex", t.tabindex || 0), t["class"] && (_e$classList4 = e.classList).add.apply(_e$classList4, t["class"].split(" "));

    for (var _i34 in t.attr) {
      e.setAttribute(_i34, t.attr[_i34]);
    }

    t.label && e.setAttribute("title", this.fancybox.localize("{{" + t.label + "}}")), t.click && e.addEventListener("click", t.click.bind(this)), "prev" === t.id && e.setAttribute("data-fancybox-prev", ""), "next" === t.id && e.setAttribute("data-fancybox-next", "");
    var i = e.querySelector("svg");
    return i && (i.setAttribute("role", "img"), i.setAttribute("tabindex", "-1"), i.setAttribute("xmlns", "http://www.w3.org/2000/svg")), e;
  };

  _proto14.build = function build() {
    var _this34 = this;

    this.cleanup();
    var i = this.fancybox.option("Toolbar.items"),
        s = [{
      position: "left",
      items: []
    }, {
      position: "center",
      items: []
    }, {
      position: "right",
      items: []
    }],
        o = this.fancybox.plugins.Thumbs;

    var _loop3 = function _loop3() {
      var n = _step10.value;
      var a = void 0,
          r = void 0;
      if (t(n) ? (a = n.id, r = e({}, i[a], n)) : (a = n, r = i[a]), ["counter", "next", "prev", "slideshow"].includes(a) && _this34.fancybox.items.length < 2) return "continue";

      if ("fullscreen" === a) {
        if (!document.fullscreenEnabled || window.fullScreen) return "continue";
        document.addEventListener("fullscreenchange", _this34.onFsChange);
      }

      if ("thumbs" === a && (!o || "disabled" === o.state)) return "continue";
      if (!r) return "continue";
      var h = r.position || "right",
          l = s.find(function (t) {
        return t.position === h;
      });
      l && l.items.push(r);
    };

    for (var _iterator10 = _createForOfIteratorHelperLoose(this.fancybox.option("Toolbar.display")), _step10; !(_step10 = _iterator10()).done;) {
      var _ret = _loop3();

      if (_ret === "continue") continue;
    }

    var n = document.createElement("div");
    n.classList.add("fancybox__toolbar");

    for (var _i35 = 0, _s9 = s; _i35 < _s9.length; _i35++) {
      var _t43 = _s9[_i35];

      if (_t43.items.length) {
        var _e29 = document.createElement("div");

        _e29.classList.add("fancybox__toolbar__items"), _e29.classList.add("fancybox__toolbar__items--" + _t43.position);

        for (var _iterator11 = _createForOfIteratorHelperLoose(_t43.items), _step11; !(_step11 = _iterator11()).done;) {
          var _i36 = _step11.value;

          _e29.appendChild(this.createElement(_i36));
        }

        n.appendChild(_e29);
      }
    }

    this.fancybox.$carousel.parentNode.insertBefore(n, this.fancybox.$carousel), this.$container = n;
  };

  _proto14.update = function update() {
    var t = this.fancybox.getSlide(),
        e = t.index,
        i = this.fancybox.items.length,
        s = t.downloadSrc || ("image" !== t.type || t.error ? null : t.src);

    for (var _iterator12 = _createForOfIteratorHelperLoose(this.fancybox.$container.querySelectorAll("a.fancybox__button--download")), _step12; !(_step12 = _iterator12()).done;) {
      var _t46 = _step12.value;
      s ? (_t46.removeAttribute("disabled"), _t46.removeAttribute("tabindex"), _t46.setAttribute("href", s), _t46.setAttribute("download", s), _t46.setAttribute("target", "_blank")) : (_t46.setAttribute("disabled", ""), _t46.setAttribute("tabindex", -1), _t46.removeAttribute("href"), _t46.removeAttribute("download"));
    }

    var o = t.Panzoom,
        n = o && o.option("maxScale") > o.option("baseScale");

    for (var _iterator13 = _createForOfIteratorHelperLoose(this.fancybox.$container.querySelectorAll(".fancybox__button--zoom")), _step13; !(_step13 = _iterator13()).done;) {
      var _t47 = _step13.value;
      n ? _t47.removeAttribute("disabled") : _t47.setAttribute("disabled", "");
    }

    for (var _iterator14 = _createForOfIteratorHelperLoose(this.fancybox.$container.querySelectorAll("[data-fancybox-index]")), _step14; !(_step14 = _iterator14()).done;) {
      var _e30 = _step14.value;
      _e30.innerHTML = t.index + 1;
    }

    for (var _iterator15 = _createForOfIteratorHelperLoose(this.fancybox.$container.querySelectorAll("[data-fancybox-count]")), _step15; !(_step15 = _iterator15()).done;) {
      var _t48 = _step15.value;
      _t48.innerHTML = i;
    }

    if (!this.fancybox.option("infinite")) {
      for (var _iterator16 = _createForOfIteratorHelperLoose(this.fancybox.$container.querySelectorAll("[data-fancybox-prev]")), _step16; !(_step16 = _iterator16()).done;) {
        var _t44 = _step16.value;
        0 === e ? _t44.setAttribute("disabled", "") : _t44.removeAttribute("disabled");
      }

      for (var _iterator17 = _createForOfIteratorHelperLoose(this.fancybox.$container.querySelectorAll("[data-fancybox-next]")), _step17; !(_step17 = _iterator17()).done;) {
        var _t45 = _step17.value;
        e === i - 1 ? _t45.setAttribute("disabled", "") : _t45.removeAttribute("disabled");
      }
    }
  };

  _proto14.cleanup = function cleanup() {
    this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null;
  };

  _proto14.attach = function attach() {
    this.fancybox.on(this.events);
  };

  _proto14.detach = function detach() {
    this.fancybox.off(this.events), this.cleanup();
  };

  return z;
}();

z.defaults = A;
var k = {
  ScrollLock: /*#__PURE__*/function () {
    function ScrollLock(t) {
      this.fancybox = t, this.viewport = null, this.pendingUpdate = null;

      for (var _i37 = 0, _arr9 = ["onReady", "onResize", "onTouchstart", "onTouchmove"]; _i37 < _arr9.length; _i37++) {
        var _t49 = _arr9[_i37];
        this[_t49] = this[_t49].bind(this);
      }
    }

    var _proto15 = ScrollLock.prototype;

    _proto15.onReady = function onReady() {
      var t = window.visualViewport;
      t && (this.viewport = t, this.startY = 0, t.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {
        passive: !1
      }), window.addEventListener("touchmove", this.onTouchmove, {
        passive: !1
      }), window.addEventListener("wheel", this.onWheel, {
        passive: !1
      });
    };

    _proto15.onResize = function onResize() {
      this.updateViewport();
    };

    _proto15.updateViewport = function updateViewport() {
      var t = this.fancybox,
          e = this.viewport,
          i = e.scale || 1,
          s = t.$container;
      if (!s) return;
      var o = "",
          n = "",
          a = "";
      i - 1 > .1 && (o = e.width * i + "px", n = e.height * i + "px", a = "translate3d(" + e.offsetLeft + "px, " + e.offsetTop + "px, 0) scale(" + 1 / i + ")"), s.style.width = o, s.style.height = n, s.style.transform = a;
    };

    _proto15.onTouchstart = function onTouchstart(t) {
      this.startY = t.touches ? t.touches[0].screenY : t.screenY;
    };

    _proto15.onTouchmove = function onTouchmove(t) {
      var e = this.startY,
          i = window.innerWidth / window.document.documentElement.clientWidth;
      if (!t.cancelable) return;
      if (t.touches.length > 1 || 1 !== i) return;
      var o = s(t.composedPath()[0]);
      if (!o) return void t.preventDefault();
      var n = window.getComputedStyle(o),
          a = parseInt(n.getPropertyValue("height"), 10),
          r = t.touches ? t.touches[0].screenY : t.screenY,
          h = e <= r && 0 === o.scrollTop,
          l = e >= r && o.scrollHeight - o.scrollTop === a;
      (h || l) && t.preventDefault();
    };

    _proto15.onWheel = function onWheel(t) {
      s(t.composedPath()[0]) || t.preventDefault();
    };

    _proto15.cleanup = function cleanup() {
      this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
      var t = this.viewport;
      t && (t.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1), window.removeEventListener("wheel", this.onWheel, {
        passive: !1
      });
    };

    _proto15.attach = function attach() {
      this.fancybox.on("initLayout", this.onReady);
    };

    _proto15.detach = function detach() {
      this.fancybox.off("initLayout", this.onReady), this.cleanup();
    };

    return ScrollLock;
  }(),
  Thumbs: $,
  Html: E,
  Toolbar: z,
  Image: P,
  Hash: L
};
var O = {
  startIndex: 0,
  preload: 1,
  infinite: !0,
  showClass: "fancybox-zoomInUp",
  hideClass: "fancybox-fadeOut",
  animated: !0,
  hideScrollbar: !0,
  parentEl: null,
  mainClass: null,
  autoFocus: !0,
  trapFocus: !0,
  placeFocusBack: !0,
  click: "close",
  closeButton: "inside",
  dragToClose: !0,
  keyboard: {
    Escape: "close",
    Delete: "close",
    Backspace: "close",
    PageUp: "next",
    PageDown: "prev",
    ArrowUp: "next",
    ArrowDown: "prev",
    ArrowRight: "next",
    ArrowLeft: "prev"
  },
  template: {
    closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
    spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
    main: null
  },
  l10n: {
    CLOSE: "Close",
    NEXT: "Next",
    PREV: "Previous",
    MODAL: "You can close this modal content with the ESC key",
    ERROR: "Something Went Wrong, Please Try Again Later",
    IMAGE_ERROR: "Image Not Found",
    ELEMENT_NOT_FOUND: "HTML Element Not Found",
    AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
    AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
    IFRAME_ERROR: "Error Loading Page",
    TOGGLE_ZOOM: "Toggle zoom level",
    TOGGLE_THUMBS: "Toggle thumbnails",
    TOGGLE_SLIDESHOW: "Toggle slideshow",
    TOGGLE_FULLSCREEN: "Toggle full-screen mode",
    DOWNLOAD: "Download"
  }
},
    M = new Map();
var I = 0;

var F = /*#__PURE__*/function (_l5) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(F, _l5);

  function F(t, i) {
    var _this35;

    if (i === void 0) {
      i = {};
    }

    t = t.map(function (t) {
      return t.width && (t._width = t.width), t.height && (t._height = t.height), t;
    }), _this35 = _l5.call(this, e(!0, {}, O, i)) || this, _this35.bindHandlers(), _this35.state = "init", _this35.setItems(t), _this35.attachPlugins(F.Plugins), _this35.trigger("init"), !0 === _this35.option("hideScrollbar") && _this35.hideScrollbar(), _this35.initLayout(), _this35.initCarousel(), _this35.attachEvents(), M.set(_this35.id, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this35)), _this35.trigger("prepare"), _this35.state = "ready", _this35.trigger("ready"), _this35.$container.setAttribute("aria-hidden", "false"), _this35.option("trapFocus") && _this35.focus();
    return _this35;
  }

  var _proto16 = F.prototype;

  _proto16.option = function option(t) {
    var _s10, _l5$prototype$option;

    var i = this.getSlide();
    var s = i ? i[t] : void 0;

    for (var _len6 = arguments.length, e = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
      e[_key6 - 1] = arguments[_key6];
    }

    return void 0 !== s ? ("function" == typeof s && (s = (_s10 = s).call.apply(_s10, [this, this].concat(e))), s) : (_l5$prototype$option = _l5.prototype.option).call.apply(_l5$prototype$option, [this, t].concat(e));
  };

  _proto16.bindHandlers = function bindHandlers() {
    for (var _i38 = 0, _arr10 = ["onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform"]; _i38 < _arr10.length; _i38++) {
      var _t50 = _arr10[_i38];
      this[_t50] = this[_t50].bind(this);
    }
  };

  _proto16.attachEvents = function attachEvents() {
    document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, !0), this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0), this.$container.addEventListener("click", this.onClick);
  };

  _proto16.detachEvents = function detachEvents() {
    document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, !0), document.removeEventListener("focus", this.onFocus, !0), this.$container.removeEventListener("click", this.onClick);
  };

  _proto16.initLayout = function initLayout() {
    var _this36 = this,
        _this$$container$clas2;

    this.$root = this.option("parentEl") || document.body;
    var t = this.option("template.main");
    t && (this.$root.insertAdjacentHTML("beforeend", this.localize(t)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = function () {
      return _this36.$container.scrollLeft = 0, !1;
    }, Object.entries({
      "class": "fancybox__container",
      role: "dialog",
      tabIndex: "-1",
      "aria-modal": "true",
      "aria-hidden": "true",
      "aria-label": this.localize("{{MODAL}}")
    }).forEach(function (t) {
      var _this36$$container;

      return (_this36$$container = _this36.$container).setAttribute.apply(_this36$$container, t);
    }), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++I, this.$container.setAttribute("id", "fancybox-" + this.id));
    var e = this.option("mainClass");
    return e && (_this$$container$clas2 = this.$container.classList).add.apply(_this$$container$clas2, e.split(" ")), document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this;
  };

  _proto16.setItems = function setItems(t) {
    var e = [];

    for (var _iterator18 = _createForOfIteratorHelperLoose(t), _step18; !(_step18 = _iterator18()).done;) {
      var _i39 = _step18.value;
      var _t51 = _i39.$trigger;

      if (_t51) {
        var _e31 = _t51.dataset || {};

        _i39.src = _e31.src || _t51.getAttribute("href") || _i39.src, _i39.type = _e31.type || _i39.type, !_i39.src && _t51 instanceof HTMLImageElement && (_i39.src = _t51.currentSrc || _i39.$trigger.src);
      }

      var _s11 = _i39.$thumb;

      if (!_s11) {
        var _t52 = _i39.$trigger && _i39.$trigger.origTarget;

        _t52 && (_s11 = _t52 instanceof HTMLImageElement ? _t52 : _t52.querySelector("img:not([aria-hidden])")), !_s11 && _i39.$trigger && (_s11 = _i39.$trigger instanceof HTMLImageElement ? _i39.$trigger : _i39.$trigger.querySelector("img:not([aria-hidden])"));
      }

      _i39.$thumb = _s11 || null;
      var _o12 = _i39.thumb;
      !_o12 && _s11 && (_o12 = _s11.currentSrc || _s11.src, !_o12 && _s11.dataset && (_o12 = _s11.dataset.lazySrc || _s11.dataset.src)), _o12 || "image" !== _i39.type || (_o12 = _i39.src), _i39.thumb = _o12 || null, _i39.caption = _i39.caption || "", e.push(_i39);
    }

    this.items = e;
  };

  _proto16.initCarousel = function initCarousel() {
    var _this37 = this;

    return this.Carousel = new y(this.$carousel, e(!0, {}, {
      prefix: "",
      classNames: {
        viewport: "fancybox__viewport",
        track: "fancybox__track",
        slide: "fancybox__slide"
      },
      textSelection: !0,
      preload: this.option("preload"),
      friction: .88,
      slides: this.items,
      initialPage: this.options.startIndex,
      slidesPerPage: 1,
      infiniteX: this.option("infinite"),
      infiniteY: !0,
      l10n: this.option("l10n"),
      Dots: !1,
      Navigation: {
        classNames: {
          main: "fancybox__nav",
          button: "carousel__button",
          next: "is-next",
          prev: "is-prev"
        }
      },
      Panzoom: {
        textSelection: !0,
        panOnlyZoomed: function panOnlyZoomed() {
          return _this37.Carousel && _this37.Carousel.pages && _this37.Carousel.pages.length < 2 && !_this37.option("dragToClose");
        },
        lockAxis: function lockAxis() {
          if (_this37.Carousel) {
            var _t53 = "x";
            return _this37.option("dragToClose") && (_t53 += "y"), _t53;
          }
        }
      },
      on: {
        "*": function _(t) {
          for (var _len7 = arguments.length, e = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
            e[_key7 - 1] = arguments[_key7];
          }

          return _this37.trigger.apply(_this37, ["Carousel." + t].concat(e));
        },
        init: function init(t) {
          return _this37.Carousel = t;
        },
        createSlide: this.onCreateSlide,
        settle: this.onSettle
      }
    }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({
      touchMove: this.onTouchMove,
      afterTransform: this.onTransform,
      touchEnd: this.onTouchEnd
    }), this.trigger("initCarousel"), this;
  };

  _proto16.onCreateSlide = function onCreateSlide(t, e) {
    var i = e.caption || "";

    if ("function" == typeof this.options.caption && (i = this.options.caption.call(this, this, this.Carousel, e)), "string" == typeof i && i.length) {
      var _t54 = document.createElement("div"),
          _s12 = "fancybox__caption_" + this.id + "_" + e.index;

      _t54.className = "fancybox__caption", _t54.innerHTML = i, _t54.setAttribute("id", _s12), e.$caption = e.$el.appendChild(_t54), e.$el.classList.add("has-caption"), e.$el.setAttribute("aria-labelledby", _s12);
    }
  };

  _proto16.onSettle = function onSettle() {
    this.option("autoFocus") && this.focus();
  };

  _proto16.onFocus = function onFocus(t) {
    this.focus(t);
  };

  _proto16.onClick = function onClick(t) {
    if (t.defaultPrevented) return;
    var e = t.composedPath()[0];
    if (e.matches("[data-fancybox-close]")) return t.preventDefault(), void F.close(!1, t);
    if (e.matches("[data-fancybox-next]")) return t.preventDefault(), void F.next();
    if (e.matches("[data-fancybox-prev]")) return t.preventDefault(), void F.prev();
    if (e.matches(x) || document.activeElement.blur(), e.closest(".fancybox__content")) return;
    if (getSelection().toString().length) return;
    if (!1 === this.trigger("click", t)) return;

    switch (this.option("click")) {
      case "close":
        this.close();
        break;

      case "next":
        this.next();
    }
  };

  _proto16.onTouchMove = function onTouchMove() {
    var t = this.getSlide().Panzoom;
    return !t || 1 === t.content.scale;
  };

  _proto16.onTouchEnd = function onTouchEnd(t) {
    var e = t.dragOffset.y;
    Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut" + (t.content.y < 0 ? "Up" : "Down")), this.close()) : "y" === t.lockAxis && t.panTo({
      y: 0
    });
  };

  _proto16.onTransform = function onTransform(t) {
    if (this.$backdrop) {
      var _e32 = Math.abs(t.content.y),
          _i40 = _e32 < 1 ? "" : Math.max(.33, Math.min(1, 1 - _e32 / t.content.fitHeight * 1.5));

      this.$container.style.setProperty("--fancybox-ts", _i40 ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", _i40);
    }
  };

  _proto16.onMousedown = function onMousedown() {
    "ready" === this.state && document.body.classList.add("is-using-mouse");
  };

  _proto16.onKeydown = function onKeydown(t) {
    if (F.getInstance().id !== this.id) return;
    document.body.classList.remove("is-using-mouse");
    var e = t.key,
        i = this.option("keyboard");
    if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
    var s = t.composedPath()[0],
        o = document.activeElement && document.activeElement.classList,
        n = o && o.contains("carousel__button");

    if ("Escape" !== e && !n) {
      if (t.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(s.nodeName)) return;
    }

    if (!1 === this.trigger("keydown", e, t)) return;
    var a = i[e];
    "function" == typeof this[a] && this[a]();
  };

  _proto16.getSlide = function getSlide() {
    var t = this.Carousel;
    if (!t) return null;
    var e = null === t.page ? t.option("initialPage") : t.page,
        i = t.pages || [];
    return i.length && i[e] ? i[e].slides[0] : null;
  };

  _proto16.focus = function focus(t) {
    if (F.ignoreFocusChange) return;
    if (["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1) return;
    var e = this.$container,
        i = this.getSlide(),
        s = "done" === i.state ? i.$el : null;
    if (s && s.contains(document.activeElement)) return;
    t && t.preventDefault(), F.ignoreFocusChange = !0;
    var o = Array.from(e.querySelectorAll(x));
    var n,
        a = [];

    for (var _i41 = 0, _o13 = o; _i41 < _o13.length; _i41++) {
      var _t55 = _o13[_i41];

      var _e33 = _t55.offsetParent,
          _i42 = s && s.contains(_t55),
          _o14 = !this.Carousel.$viewport.contains(_t55);

      _e33 && (_i42 || _o14) ? (a.push(_t55), void 0 !== _t55.dataset.origTabindex && (_t55.tabIndex = _t55.dataset.origTabindex, _t55.removeAttribute("data-orig-tabindex")), (_t55.hasAttribute("autoFocus") || !n && _i42 && !_t55.classList.contains("carousel__button")) && (n = _t55)) : (_t55.dataset.origTabindex = void 0 === _t55.dataset.origTabindex ? _t55.getAttribute("tabindex") : _t55.dataset.origTabindex, _t55.tabIndex = -1);
    }

    t ? a.indexOf(t.target) > -1 ? this.lastFocus = t.target : this.lastFocus === e ? w(a[a.length - 1]) : w(e) : this.option("autoFocus") && n ? w(n) : a.indexOf(document.activeElement) < 0 && w(e), this.lastFocus = document.activeElement, F.ignoreFocusChange = !1;
  };

  _proto16.hideScrollbar = function hideScrollbar() {
    if (!v) return;
    var t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
        e = "fancybox-style-noscroll";
    var i = document.getElementById(e);
    i || t > 0 && (i = document.createElement("style"), i.id = e, i.type = "text/css", i.innerHTML = ".compensate-for-scrollbar {padding-right: " + t + "px;}", document.getElementsByTagName("head")[0].appendChild(i), document.body.classList.add("compensate-for-scrollbar"));
  };

  _proto16.revealScrollbar = function revealScrollbar() {
    document.body.classList.remove("compensate-for-scrollbar");
    var t = document.getElementById("fancybox-style-noscroll");
    t && t.remove();
  };

  _proto16.clearContent = function clearContent(t) {
    this.Carousel.trigger("removeSlide", t), t.$content && (t.$content.remove(), t.$content = null), t.$closeButton && (t.$closeButton.remove(), t.$closeButton = null), t._className && t.$el.classList.remove(t._className);
  };

  _proto16.setContent = function setContent(t, e, i) {
    if (i === void 0) {
      i = {};
    }

    var s;
    var o = t.$el;
    if (e instanceof HTMLElement) ["img", "iframe", "video", "audio"].indexOf(e.nodeName.toLowerCase()) > -1 ? (s = document.createElement("div"), s.appendChild(e)) : s = e;else {
      var _t56 = document.createRange().createContextualFragment(e);

      s = document.createElement("div"), s.appendChild(_t56);
    }
    if (t.filter && !t.error && (s = s.querySelector(t.filter)), s instanceof Element) return t._className = "has-" + (i.suffix || t.type || "unknown"), o.classList.add(t._className), s.classList.add("fancybox__content"), "none" !== s.style.display && "none" !== getComputedStyle(s).getPropertyValue("display") || (s.style.display = t.display || this.option("defaultDisplay") || "flex"), t.id && s.setAttribute("id", t.id), t.$content = s, o.prepend(s), this.manageCloseButton(t), "loading" !== t.state && this.revealContent(t), s;
    this.setError(t, "{{ELEMENT_NOT_FOUND}}");
  };

  _proto16.manageCloseButton = function manageCloseButton(t) {
    var _this38 = this;

    var e = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
    if (!e || "top" === e && this.$closeButton) return;
    var i = document.createElement("button");
    i.classList.add("carousel__button", "is-close"), i.setAttribute("title", this.options.l10n.CLOSE), i.innerHTML = this.option("template.closeButton"), i.addEventListener("click", function (t) {
      return _this38.close(t);
    }), "inside" === e ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(i)) : this.$closeButton = this.$container.insertBefore(i, this.$container.firstChild);
  };

  _proto16.revealContent = function revealContent(t) {
    var _this39 = this;

    this.trigger("reveal", t), t.$content.style.visibility = "";
    var e = !1;
    t.error || "loading" === t.state || null !== this.Carousel.prevPage || t.index !== this.options.startIndex || (e = void 0 === t.showClass ? this.option("showClass") : t.showClass), e ? (t.state = "animating", this.animateCSS(t.$content, e, function () {
      _this39.done(t);
    })) : this.done(t);
  };

  _proto16.animateCSS = function animateCSS(t, e, i) {
    if (t && t.dispatchEvent(new CustomEvent("animationend", {
      bubbles: !0,
      cancelable: !0
    })), !t || !e) return void ("function" == typeof i && i());

    var s = function s(o) {
      o.currentTarget === this && (t.removeEventListener("animationend", s), i && i(), t.classList.remove(e));
    };

    t.addEventListener("animationend", s), t.classList.add(e);
  };

  _proto16.done = function done(t) {
    t.state = "done", this.trigger("done", t);
    var e = this.getSlide();
    e && t.index === e.index && this.option("autoFocus") && this.focus();
  };

  _proto16.setError = function setError(t, e) {
    t.error = e, this.hideLoading(t), this.clearContent(t);
    var i = document.createElement("div");
    i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, i, {
      suffix: "error"
    });
  };

  _proto16.showLoading = function showLoading(t) {
    var _this40 = this;

    t.state = "loading", t.$el.classList.add("is-loading");
    var e = t.$el.querySelector(".fancybox__spinner");
    e || (e = document.createElement("div"), e.classList.add("fancybox__spinner"), e.innerHTML = this.option("template.spinner"), e.addEventListener("click", function () {
      _this40.Carousel.Panzoom.velocity || _this40.close();
    }), t.$el.prepend(e));
  };

  _proto16.hideLoading = function hideLoading(t) {
    var e = t.$el && t.$el.querySelector(".fancybox__spinner");
    e && (e.remove(), t.$el.classList.remove("is-loading")), "loading" === t.state && (this.trigger("load", t), t.state = "ready");
  };

  _proto16.next = function next() {
    var t = this.Carousel;
    t && t.pages.length > 1 && t.slideNext();
  };

  _proto16.prev = function prev() {
    var t = this.Carousel;
    t && t.pages.length > 1 && t.slidePrev();
  };

  _proto16.jumpTo = function jumpTo() {
    var _this$Carousel;

    this.Carousel && (_this$Carousel = this.Carousel).slideTo.apply(_this$Carousel, arguments);
  };

  _proto16.close = function close(t) {
    var _this41 = this;

    if (t && t.preventDefault(), ["closing", "customClosing", "destroy"].includes(this.state)) return;
    if (!1 === this.trigger("shouldClose", t)) return;
    if (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t), "destroy" === this.state) return;
    this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
    var e = this.getSlide();

    if (this.Carousel.slides.forEach(function (t) {
      t.$content && t.index !== e.index && _this41.Carousel.trigger("removeSlide", t);
    }), "closing" === this.state) {
      var _t57 = void 0 === e.hideClass ? this.option("hideClass") : e.hideClass;

      this.animateCSS(e.$content, _t57, function () {
        _this41.destroy();
      }, !0);
    }
  };

  _proto16.destroy = function destroy() {
    if ("destroy" === this.state) return;
    this.state = "destroy", this.trigger("destroy");
    var t = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
    this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t && w(t), M["delete"](this.id);
    var e = F.getInstance();
    e ? e.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar());
  };

  F.show = function show(t, e) {
    if (e === void 0) {
      e = {};
    }

    return new F(t, e);
  };

  F.fromEvent = function fromEvent(t, e) {
    if (e === void 0) {
      e = {};
    }

    if (t.defaultPrevented) return;
    if (t.button && 0 !== t.button) return;
    if (t.ctrlKey || t.metaKey || t.shiftKey) return;
    var i = t.composedPath()[0];
    var s,
        o,
        n,
        a = i;

    if ((a.matches("[data-fancybox-trigger]") || (a = a.closest("[data-fancybox-trigger]"))) && (s = a && a.dataset && a.dataset.fancyboxTrigger), s) {
      var _t58 = document.querySelectorAll("[data-fancybox=\"" + s + "\"]"),
          _e34 = parseInt(a.dataset.fancyboxIndex, 10) || 0;

      a = _t58.length ? _t58[_e34] : a;
    }

    a || (a = i), Array.from(F.openers.keys()).reverse().some(function (e) {
      n = a;
      var i = !1;

      try {
        n instanceof Element && ("string" == typeof e || e instanceof String) && (i = n.matches(e) || (n = n.closest(e)));
      } catch (t) {}

      return !!i && (t.preventDefault(), o = e, !0);
    });
    var r = !1;

    if (o) {
      e.event = t, e.target = n, n.origTarget = i, r = F.fromOpener(o, e);

      var _s13 = F.getInstance();

      _s13 && "ready" === _s13.state && t.detail && document.body.classList.add("is-using-mouse");
    }

    return r;
  };

  F.fromOpener = function fromOpener(t, i) {
    if (i === void 0) {
      i = {};
    }

    var s = [],
        o = i.startIndex || 0,
        n = i.target || null;
    var a = void 0 !== (i = e({}, i, F.openers.get(t))).groupAll && i.groupAll,
        r = void 0 === i.groupAttr ? "data-fancybox" : i.groupAttr,
        h = r && n ? n.getAttribute("" + r) : "";

    if (!n || h || a) {
      var _e35 = i.root || (n ? n.getRootNode() : document.body);

      s = [].slice.call(_e35.querySelectorAll(t));
    }

    if (n && !a && (s = h ? s.filter(function (t) {
      return t.getAttribute("" + r) === h;
    }) : [n]), !s.length) return !1;
    var l = F.getInstance();
    return !(l && s.indexOf(l.options.$trigger) > -1) && (o = n ? s.indexOf(n) : o, s = s.map(function (t) {
      var e = ["false", "0", "no", "null", "undefined"],
          i = ["true", "1", "yes"],
          s = Object.assign({}, t.dataset),
          o = {};

      for (var _i43 = 0, _Object$entries7 = Object.entries(s); _i43 < _Object$entries7.length; _i43++) {
        var _Object$entries7$_i = _Object$entries7[_i43],
            _t59 = _Object$entries7$_i[0],
            _n9 = _Object$entries7$_i[1];
        if ("fancybox" !== _t59) if ("width" === _t59 || "height" === _t59) o["_" + _t59] = _n9;else if ("string" == typeof _n9 || _n9 instanceof String) {
          if (e.indexOf(_n9) > -1) o[_t59] = !1;else if (i.indexOf(o[_t59]) > -1) o[_t59] = !0;else try {
            o[_t59] = JSON.parse(_n9);
          } catch (e) {
            o[_t59] = _n9;
          }
        } else o[_t59] = _n9;
      }

      return t instanceof Element && (o.$trigger = t), o;
    }), new F(s, e({}, i, {
      startIndex: o,
      $trigger: n
    })));
  };

  F.bind = function bind(t, e) {
    if (e === void 0) {
      e = {};
    }

    function i() {
      document.body.addEventListener("click", F.fromEvent, !1);
    }

    v && (F.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? i() : document.addEventListener("DOMContentLoaded", i)), F.openers.set(t, e));
  };

  F.unbind = function unbind(t) {
    F.openers["delete"](t), F.openers.size || F.destroy();
  };

  F.destroy = function destroy() {
    var t;

    for (; t = F.getInstance();) {
      t.destroy();
    }

    F.openers = new Map(), document.body.removeEventListener("click", F.fromEvent, !1);
  };

  F.getInstance = function getInstance(t) {
    if (t) return M.get(t);
    return Array.from(M.values()).reverse().find(function (t) {
      return !["closing", "customClosing", "destroy"].includes(t.state) && t;
    }) || null;
  };

  F.close = function close(t, e) {
    if (t === void 0) {
      t = !0;
    }

    if (t) {
      for (var _iterator19 = _createForOfIteratorHelperLoose(M.values()), _step19; !(_step19 = _iterator19()).done;) {
        var _t60 = _step19.value;

        _t60.close(e);
      }
    } else {
      var _t61 = F.getInstance();

      _t61 && _t61.close(e);
    }
  };

  F.next = function next() {
    var t = F.getInstance();
    t && t.next();
  };

  F.prev = function prev() {
    var t = F.getInstance();
    t && t.prev();
  };

  return F;
}(l);

F.version = "4.0.27", F.defaults = O, F.openers = new Map(), F.Plugins = k, F.bind("[data-fancybox]");

for (var _i44 = 0, _Object$entries8 = Object.entries(F.Plugins || {}); _i44 < _Object$entries8.length; _i44++) {
  var _Object$entries8$_i = _Object$entries8[_i44],
      _t62 = _Object$entries8$_i[0],
      _e36 = _Object$entries8$_i[1];
  "function" == typeof _e36.create && _e36.create(F);
}



/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('echo/hello', function () {
  console.log('[echo/hello] Hello, forum and admin!');
});

/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/models/Post */ "flarum/common/models/Post");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_5__);






flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('echo/hello', function () {
  (flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_4___default().prototype.ip_city) = flarum_common_Model__WEBPACK_IMPORTED_MODULE_5___default().attribute('ip_city');
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'headerItems', function (items) {
    var post = this.attrs.post;
    var ipcity = post.ip_city() || '';
    items.add('city', m('.PostMeta', ipcity ? "IP来自" + ipcity : ''));
  });
  _fancyapps_ui__WEBPACK_IMPORTED_MODULE_3__.Fancybox.defaults.Image = {
    zoom: false
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function (vnode) {
    this.element.querySelectorAll('img:not(.emoji):not(.Avatar):not(.PostMeta-ip img):not([data-reaction]):not([data-link-preview]):not(.flamoji img)').forEach(function (node) {
      var fancyboxEl = document.createElement('a');
      fancyboxEl.setAttribute('data-fancybox', 'responsive');

      if (window.matchMedia("(max-width: 750px)").matches) {
        fancyboxEl.setAttribute('data-src', node.getAttribute('data-src') || node.getAttribute('src'));
        node.setAttribute('src', node.getAttribute('src').replace(/\?imageMogr2\/thumbnail\/!65p/, '?imageMogr2/thumbnail/!35p'));
      } else {
        fancyboxEl.setAttribute('data-src', node.getAttribute('data-src') || node.getAttribute('src'));
      }

      $(node).wrap(fancyboxEl);
    });
  });
});

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/models/Post":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/Post']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Post'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map