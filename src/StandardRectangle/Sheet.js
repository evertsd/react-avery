import React from 'react';
import classNames from 'classnames';
import Label, { BlankInsert, LabelRow } from './Label';
import { SHEET_LABEL_LOCATIONS } from './schema';
import PrintMediaQuery from '../PrintMediaQuery';

const getEvenIndices = array =>
    Object.keys(array)
        .map(Number)
        .filter(i => i % 2 === 0);

const SheetLabels = ({ id, selectedLocation, selectLocation, preview, LabelInsertComponent = BlankInsert }) => (
    <React.Fragment>
        {getEvenIndices(SHEET_LABEL_LOCATIONS).map(i => (
            <LabelRow key={`avery-row-${i}`}>
                <Label preview={preview} onClick={() => selectLocation(SHEET_LABEL_LOCATIONS[i])} isSelected={selectedLocation === SHEET_LABEL_LOCATIONS[i]}>
                    <LabelInsertComponent sheetId={id} location={SHEET_LABEL_LOCATIONS[i]} />
                </Label>
                <Label
                    preview={preview}
                    onClick={() => selectLocation(SHEET_LABEL_LOCATIONS[i + 1])}
                    isSelected={selectedLocation === SHEET_LABEL_LOCATIONS[i + 1]}>
                    <LabelInsertComponent sheetId={id} location={SHEET_LABEL_LOCATIONS[i + 1]} />
                </Label>
            </LabelRow>
        ))}
    </React.Fragment>
);

const sheetStyles = {
    padding: '0.7em 0',
};

export const SheetPreview = ({ className = '', style = {}, ...props }) => (
    <div className={classNames('dib ba mv3', className)} style={{ ...sheetStyles, fontSize: '0.3125in', borderColor: '#CDCDCD', marginRight: 0, ...style }}>
        <SheetLabels {...props} preview={true} />
    </div>
);

export const SheetPrintView = ({ className = '', style = {}, ...props }) => (
    <div className={classNames('dib', className)} style={{ ...sheetStyles, fontSize: '0.514in', ...style }}>
        <SheetLabels {...props} preview={false} />
    </div>
);

export const Sheet = PrintMediaQuery(SheetPreview, SheetPrintView);

export default Sheet;
