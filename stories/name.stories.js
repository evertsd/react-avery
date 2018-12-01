import { storiesOf } from '@storybook/react';
import React from 'react';

import { Input, NameLabelInsert as NameInsert } from './library';
import { LayoutContextProvider, withLabels, withLabelState, withSelectedLabel } from './library/LayoutStateHandlers';
import { findNextLabelLocation, Layout } from '../src';

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

const NameStory = withLabels(({ labels, selectedLabel, selectLabel, updateLabel }) => (
    <Layout
        className="w-20 mt3"
        selectedLabel={selectedLabel}
        selectLabel={selectLabel}
        LabelInsertComponent={({ location }) => <NameInsert {...labels[location]} />}>
        <Input
            value={labels[selectedLabel].name}
            onChange={e => updateLabel({ name: e.target.value })}
            placeholder="Tell us your name"
            onKeyDown={e => {
                if (e.keyCode === 13 || e.keyCode === 9) {
                    e.preventDefault();
                    selectLabel(findNextLabelLocation(selectedLabel));
                }
            }}
        />
    </Layout>
));

// eslint-disable-next-line no-undef
storiesOf('Name tags', module)
    .add('uncontrolled', () => <NameStory />)
    .add('controlled', () => <ControlledNameStory className="mt3" />);
