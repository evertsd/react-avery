export const SHEET_LABEL_LOCATIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const REDUCER_KEY = 'avery';

export const buildLabels = () =>
    SHEET_LABEL_LOCATIONS.reduce((labels, location) => {
        labels[location] = {};
        return labels;
    }, {});

export const findNextLabelLocation = labelLocation => {
    const currentIndex = SHEET_LABEL_LOCATIONS.indexOf(labelLocation);

    if (currentIndex < 0 || currentIndex + 1 >= SHEET_LABEL_LOCATIONS.length) {
        return SHEET_LABEL_LOCATIONS[0];
    }

    return SHEET_LABEL_LOCATIONS[currentIndex + 1];
};
