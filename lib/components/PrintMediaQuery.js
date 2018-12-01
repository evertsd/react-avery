'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrintMediaQuery = function (_React$Component) {
    _inherits(PrintMediaQuery, _React$Component);

    function PrintMediaQuery() {
        _classCallCheck(this, PrintMediaQuery);

        var _this = _possibleConstructorReturn(this, (PrintMediaQuery.__proto__ || Object.getPrototypeOf(PrintMediaQuery)).call(this));

        _this.updateMatches = function () {
            _this.setState({ matches: _this.mediaQueryList.matches });
        };

        _this.state = {};
        return _this;
    }

    _createClass(PrintMediaQuery, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object') return;

            /* eslint-disable no-undef */
            var targetWindow = this.props.targetWindow || window;

            if (typeof targetWindow.matchMedia !== 'function') return;

            this.mediaQueryList = targetWindow.matchMedia('print');
            this.mediaQueryList.addListener(this.updateMatches);
            this.updateMatches();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.mediaQueryList.removeListener(this.updateMatches);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                NonPrintMedia = _props.NonPrintMedia,
                PrintMedia = _props.PrintMedia,
                props = _objectWithoutProperties(_props, ['NonPrintMedia', 'PrintMedia']);

            if (this.state.matches) {
                return _react2.default.createElement(PrintMedia, props);
            }

            return _react2.default.createElement(NonPrintMedia, props);
        }
    }]);

    return PrintMediaQuery;
}(_react2.default.Component);

exports.default = function (NonPrintMedia, PrintMedia) {
    return function (props) {
        return _react2.default.createElement(PrintMediaQuery, _extends({}, props, { NonPrintMedia: NonPrintMedia, PrintMedia: PrintMedia }));
    };
};