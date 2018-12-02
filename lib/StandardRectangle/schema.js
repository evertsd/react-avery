'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var SHEET_LABEL_LOCATIONS = exports.SHEET_LABEL_LOCATIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var REDUCER_KEY = exports.REDUCER_KEY = 'avery';

var buildLabels = exports.buildLabels = function buildLabels() {
    return SHEET_LABEL_LOCATIONS.reduce(function (labels, location) {
        labels[location] = {};
        return labels;
    }, {});
};

var findNextLabelLocation = exports.findNextLabelLocation = function findNextLabelLocation(labelLocation) {
    var currentIndex = SHEET_LABEL_LOCATIONS.indexOf(labelLocation);

    if (currentIndex < 0 || currentIndex + 1 >= SHEET_LABEL_LOCATIONS.length) {
        return SHEET_LABEL_LOCATIONS[0];
    }

    return SHEET_LABEL_LOCATIONS[currentIndex + 1];
};