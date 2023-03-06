import { StandardRectangle } from 'react-avery';
import { Input, NameLabelInsert as NameInsert } from './library';
import { LayoutContextProvider, withLabels, withLabelState, withSelectedLabel } from './library/LayoutStateHandlers';

const { findNextLabelLocation, Layout } = StandardRectangle;

const ControlledNameInsert = withLabelState(NameInsert);
const ControlledLayoutForm = withSelectedLabel(({ name, selectNextLabel, updateLabel }) => (
    <Input
        value={name}
        onChange={e => updateLabel({ name: e.target.value })}
        placeholder="Tell us your name"
        onKeyDown={e => {
            if (e.keyCode === 13 || e.keyCode === 9) {
                e.preventDefault();
                selectNextLabel();
            }
        }}
    />
));

const ControlledNameStory = LayoutContextProvider(ControlledLayoutForm, ControlledNameInsert);

export function _ControlledNameStory() {
    return <ControlledNameStory className="mt3" />
}

export function _NameStory() {
    const { labels, selectedLocation, selectLocation, updateLabel } = withLabels();

    return (
        <Layout
            className="w-20 mt3"
            selectedLocation={selectedLocation}
            selectLocation={selectLocation}
            LabelInsertComponent={({ location }) => <NameInsert {...labels[location]} />}>
            <Input
                value={labels[selectedLocation].name}
                onChange={e => updateLabel({ name: e.target.value })}
                placeholder="Tell us your name"
                onKeyDown={e => {
                    if (e.keyCode === 13 || e.keyCode === 9) {
                        e.preventDefault();
                        selectLocation(findNextLabelLocation(selectedLocation));
                    }
                }}
            />
        </Layout>
    );
};

export default {
    title: 'Name tags',
    component: Layout

}