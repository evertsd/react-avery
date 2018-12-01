'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LayoutPrintView = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Sheet = require('./Sheet');

var _PrintMediaQuery = require('./PrintMediaQuery');

var _PrintMediaQuery2 = _interopRequireDefault(_PrintMediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LayoutPrintView = function LayoutPrintView(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(_Sheet.SheetPrintView, _extends({}, props, { className: '', style: {} }));
};

exports.LayoutPrintView = LayoutPrintView;
var Layout = function Layout(_ref2) {
    var children = _ref2.children,
        className = _ref2.className,
        style = _ref2.style,
        props = _objectWithoutProperties(_ref2, ['children', 'className', 'style']);

    return _react2.default.createElement(
        'div',
        { className: 'flex justify-center pa3' },
        _react2.default.createElement(
            'div',
            { className: className, style: style },
            children
        ),
        _react2.default.createElement(
            'div',
            { className: '' },
            _react2.default.createElement(
                'div',
                { className: 'fr', style: { marginLeft: '40px' } },
                _react2.default.createElement(_Sheet.SheetPreview, props)
            )
        )
    );
};

exports.default = (0, _PrintMediaQuery2.default)(Layout, LayoutPrintView);