'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LabelRow = exports.Label = exports.BlankLabel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    insert: {
        borderRadius: '0.4em',
        borderColor: '#CDCDCD'
    },
    selectedInsert: {
        borderColor: 'rgb(179, 179, 223)',
        boxShadow: '0 0 2px 2px rgb(204, 204, 255) inset'
    }
};

var InsertWrapper = function InsertWrapper(_ref) {
    var children = _ref.children,
        isSelected = _ref.isSelected,
        onClick = _ref.onClick,
        preview = _ref.preview;

    if (!preview) {
        return _react2.default.createElement(
            'div',
            { className: 'h-100' },
            children
        );
    }

    return _react2.default.createElement(
        'div',
        { className: 'ba h-100', style: _extends({}, styles.insert, isSelected ? styles.selectedInsert : {}), onClick: onClick },
        children
    );
};

var BlankLabel = exports.BlankLabel = function BlankLabel() {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        '\xA0'
    );
};

var Label = exports.Label = function Label(_ref2) {
    var children = _ref2.children,
        isSelected = _ref2.isSelected,
        onClick = _ref2.onClick,
        _ref2$preview = _ref2.preview,
        preview = _ref2$preview === undefined ? true : _ref2$preview;
    return _react2.default.createElement(
        'div',
        { className: 'dib overflow-hidden', style: { margin: '0 0.125em', height: '4em', width: '8em' } },
        _react2.default.createElement(
            InsertWrapper,
            { isSelected: isSelected, onClick: onClick, preview: preview },
            children
        )
    );
};

var LabelRow = exports.LabelRow = function LabelRow(_ref3) {
    var children = _ref3.children;
    return _react2.default.createElement(
        'div',
        { className: 'cf:after overflow-hidden', style: { height: '4em' } },
        children
    );
};

exports.default = Label;