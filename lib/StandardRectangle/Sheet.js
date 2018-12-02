'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sheet = exports.SheetPrintView = exports.SheetPreview = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _schema = require('./schema');

var _PrintMediaQuery = require('../PrintMediaQuery');

var _PrintMediaQuery2 = _interopRequireDefault(_PrintMediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getEvenIndices = function getEvenIndices(array) {
    return Object.keys(array).map(Number).filter(function (i) {
        return i % 2 === 0;
    });
};

var SheetLabels = function SheetLabels(_ref) {
    var id = _ref.id,
        selectedLocation = _ref.selectedLocation,
        selectLocation = _ref.selectLocation,
        preview = _ref.preview,
        _ref$LabelInsertCompo = _ref.LabelInsertComponent,
        LabelInsertComponent = _ref$LabelInsertCompo === undefined ? _Label.BlankInsert : _ref$LabelInsertCompo;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        getEvenIndices(_schema.SHEET_LABEL_LOCATIONS).map(function (i) {
            return _react2.default.createElement(
                _Label.LabelRow,
                { key: 'avery-row-' + i },
                _react2.default.createElement(
                    _Label2.default,
                    { preview: preview, onClick: function onClick() {
                            return selectLocation(_schema.SHEET_LABEL_LOCATIONS[i]);
                        }, isSelected: selectedLocation === _schema.SHEET_LABEL_LOCATIONS[i] },
                    _react2.default.createElement(LabelInsertComponent, { sheetId: id, location: _schema.SHEET_LABEL_LOCATIONS[i] })
                ),
                _react2.default.createElement(
                    _Label2.default,
                    {
                        preview: preview,
                        onClick: function onClick() {
                            return selectLocation(_schema.SHEET_LABEL_LOCATIONS[i + 1]);
                        },
                        isSelected: selectedLocation === _schema.SHEET_LABEL_LOCATIONS[i + 1] },
                    _react2.default.createElement(LabelInsertComponent, { sheetId: id, location: _schema.SHEET_LABEL_LOCATIONS[i + 1] })
                )
            );
        })
    );
};

var sheetStyles = {
    padding: '0.7em 0'
};

var SheetPreview = function SheetPreview(_ref2) {
    var _ref2$className = _ref2.className,
        className = _ref2$className === undefined ? '' : _ref2$className,
        _ref2$style = _ref2.style,
        style = _ref2$style === undefined ? {} : _ref2$style,
        props = _objectWithoutProperties(_ref2, ['className', 'style']);

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('dib ba mv3', className), style: _extends({}, sheetStyles, { fontSize: '0.3125in', borderColor: '#CDCDCD', marginRight: 0 }, style) },
        _react2.default.createElement(SheetLabels, _extends({}, props, { preview: true }))
    );
};

exports.SheetPreview = SheetPreview;
var SheetPrintView = function SheetPrintView(_ref3) {
    var _ref3$className = _ref3.className,
        className = _ref3$className === undefined ? '' : _ref3$className,
        _ref3$style = _ref3.style,
        style = _ref3$style === undefined ? {} : _ref3$style,
        props = _objectWithoutProperties(_ref3, ['className', 'style']);

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('dib', className), style: _extends({}, sheetStyles, { fontSize: '0.514in' }, style) },
        _react2.default.createElement(SheetLabels, _extends({}, props, { preview: false }))
    );
};

exports.SheetPrintView = SheetPrintView;
var Sheet = exports.Sheet = (0, _PrintMediaQuery2.default)(SheetPreview, SheetPrintView);

exports.default = Sheet;