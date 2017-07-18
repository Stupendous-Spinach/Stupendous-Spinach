webpackHotUpdate(0,{

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(67);

var _reactRedux = __webpack_require__(104);

var _actionCreators = __webpack_require__(192);

var actionCreators = _interopRequireWildcard(_actionCreators);

var _Main = __webpack_require__(193);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Main2.default);

exports.default = App;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = __webpack_require__(66);

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = __webpack_require__(63);

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = __webpack_require__(4);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(64);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Photo = __webpack_require__(194);

var _Photo2 = _interopRequireDefault(_Photo);

var _Comments = __webpack_require__(481);

var _Comments2 = _interopRequireDefault(_Comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Single: {
    displayName: 'Single'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: '/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/Single.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: '/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/Single.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var Single = _wrapComponent('Single')(function (_Component) {
  _inherits(Single, _Component);

  function Single() {
    _classCallCheck(this, Single);

    return _possibleConstructorReturn(this, (Single.__proto__ || Object.getPrototypeOf(Single)).apply(this, arguments));
  }

  _createClass(Single, [{
    key: 'render',
    value: function render() {
      var postId = this.props.params.postId;

      var i = this.props.posts.findIndex(function (post) {
        return post.code === postId;
      });
      var post = this.props.posts[i];
      var postComments = this.props.comments[postId] || [];
      return _react3.default.createElement(
        'div',
        { className: 'single-photo' },
        _react3.default.createElement(_Photo2.default, _extends({ i: i, post: post }, this.props)),
        _react3.default.createElement(_Comments2.default, _extends({ postComments: postComments }, this.props))
      );
    }
  }]);

  return Single;
}(_react2.Component));

exports.default = Single;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _redux = __webpack_require__(67);

var _reactRouterRedux = __webpack_require__(170);

var _reactRouter = __webpack_require__(43);

var _index = __webpack_require__(199);

var _index2 = _interopRequireDefault(_index);

var _comments = __webpack_require__(195);

var _comments2 = _interopRequireDefault(_comments);

var _posts = __webpack_require__(196);

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create an object for the default data
var defaultState = {
  posts: _posts2.default,
  comments: _comments2.default
};

// Redux dev tools installation
// Install redux dev tools from chrome


// import the root reducer
var enhancers = (0, _redux.compose)(window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
});

var store = (0, _redux.createStore)(_index2.default, defaultState, enhancers);

var history = exports.history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

exports.default = store;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// increment likes
var increment = exports.increment = function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index: index
  };
};
// add comments
var addComment = exports.addComment = function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId: postId,
    author: author,
    comment: comment
  };
};
// remove comments
var removeComment = exports.removeComment = function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i: i,
    postId: postId
  };
};

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = __webpack_require__(66);

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = __webpack_require__(63);

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = __webpack_require__(4);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(64);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(43);

var _NavigationBar = __webpack_require__(482);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

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
          _react3.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            'FlashBack'
          )
        ),
        _react3.default.cloneElement(this.props.children, this.props)
      );
    }
  }]);

  return Main;
}(_react2.Component));

exports.default = Main;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = __webpack_require__(66);

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = __webpack_require__(63);

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = __webpack_require__(4);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(64);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(43);

var _reactAddonsCssTransitionGroup = __webpack_require__(341);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Photo: {
    displayName: 'Photo'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: '/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/Photo.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: '/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/Photo.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var Photo = _wrapComponent('Photo')(function (_Component) {
  _inherits(Photo, _Component);

  function Photo() {
    _classCallCheck(this, Photo);

    return _possibleConstructorReturn(this, (Photo.__proto__ || Object.getPrototypeOf(Photo)).apply(this, arguments));
  }

  _createClass(Photo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          post = _props.post,
          i = _props.i,
          comments = _props.comments;

      return _react3.default.createElement(
        'figure',
        { className: 'grid-figure' },
        _react3.default.createElement(
          'div',
          { className: 'grid-photo-wrap' },
          _react3.default.createElement(
            _reactRouter.Link,
            { to: '/view/' + post.code },
            _react3.default.createElement('img', { src: post.display_src, alt: post.caption, className: 'grid-photo' })
          ),
          _react3.default.createElement(
            _reactAddonsCssTransitionGroup2.default,
            { transitionName: 'like', transitionEnterTimeout: 500, transitionLeaveTimeout: 500 },
            _react3.default.createElement(
              'span',
              { key: post.likes, className: 'likes-heart' },
              post.likes
            )
          )
        ),
        _react3.default.createElement(
          'figcation',
          null,
          _react3.default.createElement(
            'p',
            null,
            post.caption
          ),
          _react3.default.createElement(
            'div',
            { className: 'control-buttons' },
            _react3.default.createElement(
              'button',
              { onClick: this.props.increment.bind(null, i), className: 'likes' },
              '\u2665 ',
              post.likes
            ),
            _react3.default.createElement(
              _reactRouter.Link,
              { className: 'button', to: '/view/' + post.code },
              _react3.default.createElement(
                'span',
                { className: 'comment-count' },
                _react3.default.createElement(
                  'span',
                  { className: 'speech-bubble' },
                  " "
                ),
                comments[post.code] ? comments[post.code].length : 0
              )
            )
          )
        )
      );
    }
  }]);

  return Photo;
}(_react2.Component));

exports.default = Photo;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var postComments = function postComments() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_COMMENT':
      return [].concat(_toConsumableArray(state), [{
        user: action.author,
        text: action.comment
      }]);
    case 'REMOVE_COMMENT':
      return [].concat(_toConsumableArray(state.slice(0, action.i)), _toConsumableArray(state.slice(action.i + 1)));
    default:
      return state;
  }
  return state;
};

var comments = function comments() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  if (typeof action.postId !== 'undefined') {
    return _extends({}, state, _defineProperty({}, action.postId, postComments(state[action.postId], action)));
  }
  return state;
};

exports.default = comments;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = posts;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// a reducer takes in two things;

// 1. the action (info about what happend)
// 2. copy of current state

function posts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'INCREMENT_LIKES':
      var i = action.index;
      return [].concat(_toConsumableArray(state.slice(0, i)), [_extends({}, state[i], { likes: state[i].likes + 1
      })], _toConsumableArray(state.slice(i + 1)));
    default:
      return state;
  }
}

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = __webpack_require__(66);

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = __webpack_require__(63);

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = __webpack_require__(4);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(64);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Comments: {
    displayName: "Comments"
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: "/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/Comments.js",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/Comments.js",
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var Comments = _wrapComponent("Comments")(function (_Component) {
  _inherits(Comments, _Component);

  function Comments() {
    _classCallCheck(this, Comments);

    return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));
  }

  _createClass(Comments, [{
    key: "renderComment",
    value: function renderComment(comment, i) {
      return _react3.default.createElement(
        "div",
        { className: "comment", key: i },
        _react3.default.createElement(
          "p",
          null,
          _react3.default.createElement(
            "strong",
            null,
            comment.user
          ),
          comment.text,
          _react3.default.createElement(
            "button",
            { className: "remove-comment", onClick: this.props.removeComment.bind(null, this.props.params.postId, i) },
            "\xD7"
          )
        )
      );
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var postId = this.props.params.postId;

      var author = this.refs.author.value;
      var comment = this.refs.comment.value;
      this.props.addComment(postId, author, comment);
      this.refs.commentForm.reset();
    }
  }, {
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "div",
        { className: "comments" },
        this.props.postComments.map(this.renderComment.bind(this)),
        _react3.default.createElement(
          "form",
          { ref: "commentForm", className: "comment-form", onSubmit: this.handleSubmit.bind(this) },
          _react3.default.createElement("input", { type: "text", ref: "author", placeholder: "author" }),
          _react3.default.createElement("input", { type: "text", ref: "comment", placeholder: "comment" }),
          _react3.default.createElement("input", { type: "submit", hidden: true })
        )
      );
    }
  }]);

  return Comments;
}(_react2.Component));

exports.default = Comments;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = __webpack_require__(66);

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = __webpack_require__(63);

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = __webpack_require__(4);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(64);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavigationBar: {
    displayName: "NavigationBar"
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: "/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/NavigationBar.js",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "/Users/josephlei/Dropbox/Immersive/flashback/client/src/components/NavigationBar.js",
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var NavigationBar = _wrapComponent("NavigationBar")(function (_Component) {
  _inherits(NavigationBar, _Component);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
  }

  _createClass(NavigationBar, [{
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "nav",
        { className: "navbar navbar-default" },
        _react3.default.createElement(
          "div",
          { className: "container-fluid" },
          _react3.default.createElement(
            "div",
            { className: "navbar-header" },
            _react3.default.createElement(
              "a",
              { className: "navbar-brand", href: "/" },
              "Home"
            ),
            _react3.default.createElement(
              "a",
              { className: "navbar-brand", href: "/nearby" },
              "Nearby Photos"
            )
          )
        ),
        _react3.default.createElement(
          "div",
          { className: "collapse navbar-collapse" },
          _react3.default.createElement(
            "ul",
            { className: "nav navbar-nav navbar-right" },
            _react3.default.createElement(
              "li",
              null,
              _react3.default.createElement(
                "a",
                { href: "/profile" },
                "Profile"
              )
            ),
            _react3.default.createElement(
              "li",
              null,
              _react3.default.createElement(
                "a",
                { href: "/logout" },
                "Logout"
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ })

})