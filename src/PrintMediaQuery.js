import React from 'react';

class PrintMediaQuery extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    updateMatches = () => {
        this.setState({ matches: this.mediaQueryList.matches });
    };

    componentDidMount() {
        if (typeof window !== 'object') return;

        /* eslint-disable no-undef */
        const targetWindow = this.props.targetWindow || window;

        if (typeof targetWindow.matchMedia !== 'function') return;

        this.mediaQueryList = targetWindow.matchMedia('print');
        this.mediaQueryList.addListener(this.updateMatches);
        this.updateMatches();
    }

    componentWillUnmount() {
        this.mediaQueryList.removeListener(this.updateMatches);
    }

    render() {
        const { NonPrintMedia, PrintMedia, ...props } = this.props;

        if (this.state.matches) {
            return <PrintMedia {...props} />;
        }

        return <NonPrintMedia {...props} />;
    }
}

export default (NonPrintMedia, PrintMedia) => {
    return props => <PrintMediaQuery {...props} NonPrintMedia={NonPrintMedia} PrintMedia={PrintMedia} />;
};
