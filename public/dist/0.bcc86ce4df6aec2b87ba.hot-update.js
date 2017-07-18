webpackHotUpdate(0,{

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(108);

var _App = __webpack_require__(197);

var _App2 = _interopRequireDefault(_App);

var _reactRouter = __webpack_require__(67);

var _reactRedux = __webpack_require__(109);

var _store = __webpack_require__(198);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import css
// import css from './styles/style.styl';

// import components
var router = _react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _store.history },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default })
  )
);
// import Single from './components/Single';
// import PhotoGrid from './components/PhotoGrid';

// import react router


(0, _reactDom.render)(router, document.getElementById('root'));

/***/ })

})