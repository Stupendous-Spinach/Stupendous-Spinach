webpackHotUpdate(0,{

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = __webpack_require__(193);

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = __webpack_require__(188);

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = __webpack_require__(5);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(189);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(67);

var _NavigationBar = __webpack_require__(201);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _Camera = __webpack_require__(483);

var _Camera2 = _interopRequireDefault(_Camera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Main: {
    displayName: 'Main'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: '/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/Main.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: '/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/Main.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var Main = _wrapComponent('Main')(function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'container' },
        _react3.default.createElement(_NavigationBar2.default, null),
        _react3.default.createElement(
          'h1',
          null,
          'flashback'
        ),
        this.props.children
      );
    }
  }]);

  return Main;
}(_react2.Component));

exports.default = Main;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)(module)))

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = __webpack_require__(193);

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = __webpack_require__(188);

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = __webpack_require__(5);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(189);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(67);

var _Camera = __webpack_require__(483);

var _Camera2 = _interopRequireDefault(_Camera);

var _App = __webpack_require__(197);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavigationBar: {
    displayName: 'NavigationBar'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: '/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/NavigationBar.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: '/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/NavigationBar.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var NavigationBar = _wrapComponent('NavigationBar')(function (_Component) {
  _inherits(NavigationBar, _Component);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
  }

  _createClass(NavigationBar, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-fixed-bottom' },
        _react3.default.createElement(
          'ul',
          null,
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement(
              _reactRouter.Link,
              { to: '/' },
              'Home'
            )
          ),
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement(
              _reactRouter.Link,
              { to: '/nearby' },
              'Nearby'
            )
          ),
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement(
              _reactRouter.Link,
              { to: '/camera' },
              'Camera'
            )
          ),
          _react3.default.createElement(
            'li',
            null,
            _react3.default.createElement(
              _reactRouter.Link,
              { to: '/likes' },
              'Likes'
            )
          )
        )
      );
    }
  }]);

  return NavigationBar;
}(_react2.Component));

exports.default = NavigationBar;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)(module)))

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(108);

var _App = __webpack_require__(197);

var _App2 = _interopRequireDefault(_App);

var _Camera = __webpack_require__(483);

var _Camera2 = _interopRequireDefault(_Camera);

var _reactRouter = __webpack_require__(67);

var _reactRedux = __webpack_require__(109);

var _store = __webpack_require__(198);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Single from './components/Single';
// import PhotoGrid from './components/PhotoGrid';
var router = _react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _store.history },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _App2.default },
      _react2.default.createElement(_reactRouter.Route, { path: '/camera', component: _Camera2.default })
    )
  )
);

// import react router


// import css
// import css from './styles/style.styl';

// import components


(0, _reactDom.render)(router, document.getElementById('root'));

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = __webpack_require__(193);

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = __webpack_require__(188);

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = __webpack_require__(5);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(189);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Camera: {
    displayName: "Camera"
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: "/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/Camera.js",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/Camera.js",
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var Camera = _wrapComponent("Camera")(function (_Component) {
  _inherits(Camera, _Component);

  function Camera(props) {
    _classCallCheck(this, Camera);

    return _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this, props));
  }

  _createClass(Camera, [{
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "div",
        null,
        _react3.default.createElement(
          "h1",
          null,
          " Camera page"
        ),
        _react3.default.createElement(
          "form",
          null,
          _react3.default.createElement(
            "label",
            null,
            "Photo:",
            _react3.default.createElement("input", { type: "file", accept: "image/*", capture: "camera", id: "camera" })
          ),
          _react3.default.createElement("img", { id: "frame" })
        )
      );
    }
  }]);

  return Camera;
}(_react2.Component));

exports.default = Camera;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)(module)))

/***/ })

})