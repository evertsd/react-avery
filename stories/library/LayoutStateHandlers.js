import React from 'react';
import { withStateHandlers } from 'recompose';
import { buildLabels, findNextLabelLocation, Layout, SHEET_LABEL_LOCATIONS } from '../../src';

const initialState = {
    labels: buildLabels(),
    selectedLabel: SHEET_LABEL_LOCATIONS[0],
};

export const withLabels = withStateHandlers(initialState, {
    selectLabel: state => selectedLabel => ({ ...state, selectedLabel }),
    updateLabel: ({ labels, selectedLabel }) => attrs => ({
        labels: {
            ...labels,
            [selectedLabel]: {
                ...labels[selectedLabel],
                ...attrs,
            },
        },
    }),
});

class ControlledLayout extends React.Component {
    shouldComponentUpdate = ({ selectedLabel }) => this.props.selectedLabel !== selectedLabel;

    render = () => <Layout {...this.props} />;
}

const LayoutContext = React.createContext(undefined);

export const LayoutContextProvider = (LayoutForm, LabelInsertComponent) => {
    return withLabels(({ className, labels, selectLabel, selectedLabel, updateLabel, ...props }) => (
        <LayoutContext.Provider value={{ labels, selectLabel, selectedLabel }}>
            <ControlledLayout
                {...props}
                className={className}
                selectLabel={selectLabel}
                selectedLabel={selectedLabel}
                LabelInsertComponent={LabelInsertComponent}>
                <LayoutForm updateLabel={updateLabel} />
            </ControlledLayout>
        </LayoutContext.Provider>
    ));
};

export const withLabelState = LabelInsert => {
    class LabelInsertWrapper extends React.Component {
        shouldComponentUpdate = ({ selectedLabel, location }) => selectedLabel === location;

        render = () => <LabelInsert {...this.props.label} />;
    }

    return ({ location }) => (
        <LayoutContext.Consumer>
            {({ selectedLabel, labels }) => <LabelInsertWrapper selectedLabel={selectedLabel} location={location} label={labels[location]} />}
        </LayoutContext.Consumer>
    );
};

export const withSelectedLabel = LayoutForm => props => (
    <LayoutContext.Consumer>
        {({ labels, selectLabel, selectedLabel }) => (
            <LayoutForm {...props} {...labels[selectedLabel]} selectNextLabel={() => selectLabel(findNextLabelLocation(selectedLabel))} />
        )}
    </LayoutContext.Consumer>
);
