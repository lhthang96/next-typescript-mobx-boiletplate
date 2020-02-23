webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _store_movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/movies */ "./store/movies/index.ts");

var _jsxFileName = "C:\\Users\\thangluong\\Desktop\\mypc\\Projects\\Personal\\next-typescript-mobx-boiletplate\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var moviesStore = new _store_movies__WEBPACK_IMPORTED_MODULE_3__["MoviesStore"]();

var App = function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(mobx_react__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    moviesStore: moviesStore,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./store/index.ts":
false,

/***/ "./store/movies/index.ts":
/*!*******************************!*\
  !*** ./store/movies/index.ts ***!
  \*******************************/
/*! exports provided: MoviesStore, moviesStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesStore", function() { return MoviesStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moviesStore", function() { return moviesStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");








var _class, _descriptor, _temp;


var MoviesStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function MoviesStore() {
    var _this = this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MoviesStore);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "moviesList", _descriptor, this);

    Object(mobx__WEBPACK_IMPORTED_MODULE_7__["reaction"])(function () {
      return _this.moviesList;
    }, function (list) {
      alert("There are ".concat(list.length, " movies in list ..."));
    });
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MoviesStore, [{
    key: "addMovies",
    value: function addMovies(movie) {
      this.moviesList.push(movie);
    }
  }, {
    key: "numberOfMovies",
    get: function get() {
      return this.moviesList.length;
    }
  }, {
    key: "moviesData",
    get: function get() {
      return this.moviesList.map(function (item) {
        return item.name;
      });
    }
  }]);

  return MoviesStore;
}(), _temp), (_descriptor = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "moviesList", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "numberOfMovies", [mobx__WEBPACK_IMPORTED_MODULE_7__["computed"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "numberOfMovies"), _class.prototype), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class.prototype, "addMovies", [mobx__WEBPACK_IMPORTED_MODULE_7__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "addMovies"), _class.prototype)), _class);
var moviesStore = new MoviesStore();

/***/ })

})
//# sourceMappingURL=_app.js.d698abf7ba19edf954d3.hot-update.js.map