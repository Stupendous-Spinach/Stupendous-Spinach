webpackHotUpdate(0,{

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
        { className: 'navbar navbar-default' },
        _react3.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react3.default.createElement(
            'div',
            { className: 'navbar-header' },
            _react3.default.createElement(
              'a',
              { className: 'navbar-brand', href: '/' },
              'Home'
            ),
            _react3.default.createElement(
              'a',
              { className: 'navbar-brand', href: '/nearby' },
              'Nearby Photos'
            )
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'collapse navbar-collapse' },
          _react3.default.createElement(
            'ul',
            { className: 'nav navbar-nav navbar-right' },
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: '/profile' },
                'Profile'
              )
            ),
            _react3.default.createElement(
              'li',
              null,
              _react3.default.createElement(
                'a',
                { href: '/logout' },
                'Logout'
              )
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

/***/ })

})