import React from 'react';
import { withStateHandlers } from 'recompose';
import { buildLabels, findNextLabelLocation, Layout, SHEET_LABEL_LOCATIONS } from '../../src';

const initialState = {
    labels: buildLabels(),
    selectedLocation: SHEET_LABEL_LOCATIONS[0],
};

export const withLabels = withStateHandlers(initialState, {
    selectLocation: state => selectedLocation => ({ ...state, selectedLocation }),
    updateLabel: ({ labels, selectedLocation }) => attrs => ({
        labels: {
            ...labels,
            [selectedLocation]: {
                ...labels[selectedLocation],
                ...attrs,
            },
        },
    }),
});

class ControlledLayout extends React.Component {
    shouldComponentUpdate = ({ selectedLocation }) => this.props.selectedLocation !== selectedLocation;

    render = () => <Layout {...this.props} />;
}

const LayoutContext = React.createContext(undefined);

export const LayoutContextProvider = (LayoutForm, LabelInsertComponent) => {
    return withLabels(({ className, labels, selectLocation, selectedLocation, updateLabel, ...props }) => (
        <LayoutContext.Provider value={{ labels, selectLocation, selectedLocation }}>
            <ControlledLayout
                {...props}
                className={className}
                selectLocation={selectLocation}
                selectedLocation={selectedLocation}
                LabelInsertComponent={LabelInsertComponent}>
                <LayoutForm updateLabel={updateLabel} />
            </ControlledLayout>
        </LayoutContext.Provider>
    ));
};

export const withLabelState = LabelInsert => {
    class LabelInsertWrapper extends React.Component {
        shouldComponentUpdate = ({ selectedLocation, location }) => selectedLocation === location;

        render = () => <LabelInsert {...this.props.label} />;
    }

    return ({ location }) => (
        <LayoutContext.Consumer>
            {({ selectedLocation, labels }) => <LabelInsertWrapper selectedLocation={selectedLocation} location={location} label={labels[location]} />}
        </LayoutContext.Consumer>
    );
};

export const withSelectedLabel = LayoutForm => props => (
    <LayoutContext.Consumer>
        {({ labels, selectLocation, selectedLocation }) => (
            <LayoutForm {...props} {...labels[selectedLocation]} selectNextLabel={() => selectLocation(findNextLabelLocation(selectedLocation))} />
        )}
    </LayoutContext.Consumer>
);
