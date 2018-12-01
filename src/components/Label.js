import React from 'react';

const styles = {
    insert: {
        borderRadius: '0.4em',
        borderColor: '#CDCDCD',
    },
    selectedInsert: {
        borderColor: 'rgb(179, 179, 223)',
        boxShadow: '0 0 2px 2px rgb(204, 204, 255) inset',
    },
};

const InsertWrapper = ({ children, isSelected, onClick, preview }) => {
    if (!preview) {
        return <div className="h-100">{children}</div>;
    }

    return (
        <div className="ba h-100" style={{ ...styles.insert, ...(isSelected ? styles.selectedInsert : {}) }} onClick={onClick}>
            {children}
        </div>
    );
};

export const BlankLabel = () => <React.Fragment>&nbsp;</React.Fragment>;

export const Label = ({ children, isSelected, onClick, preview = true }) => (
    <div className="dib overflow-hidden" style={{ margin: '0 0.125em', height: '4em', width: '8em' }}>
        <InsertWrapper isSelected={isSelected} onClick={onClick} preview={preview}>
            {children}
        </InsertWrapper>
    </div>
);

export const LabelRow = ({ children }) => (
    <div className="cf:after overflow-hidden" style={{ height: '4em' }}>
        {children}
    </div>
);

export default Label;
