import React, { useState } from 'react';
import { StandardRectangle } from 'react-avery';

const { buildLabels, findNextLabelLocation, Layout, SHEET_LABEL_LOCATIONS } = StandardRectangle;

export const withLabels = () => {
    const [selectedLocation, selectLocation] = useState(SHEET_LABEL_LOCATIONS[0]);
    const [labels, setLabels] = useState(buildLabels());

    const updateLabel = attrs =>
        setLabels({
            ...labels,
            [selectedLocation]: {
                ...labels[selectedLocation],
                ...attrs,
            },
        });

    return { labels, selectLocation, selectedLocation, updateLabel };
};

class ControlledLayout extends React.Component {
    shouldComponentUpdate = ({ selectedLocation }) => this.props.selectedLocation !== selectedLocation;

    render = () => <Layout {...this.props} />;
}

const LayoutContext = React.createContext(undefined);

export const LayoutContextProvider = (LayoutForm, LabelInsertComponent) => {
    return ({ className, ...props }) => {
        const { labels, selectLocation, selectedLocation, updateLabel } = withLabels();

        return (
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
        );
    };
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
