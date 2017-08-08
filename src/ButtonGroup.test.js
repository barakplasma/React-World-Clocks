import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ButtonGroup from './ButtonGroup';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonGroup />, div);
});

it('shows edit button', () => {
    const buttonGroup = shallow(<ButtonGroup/>);
    expect(buttonGroup.contains('Edit')).toEqual(true);
});

it('shows remove button', () => {
    const buttonGroup = shallow(<ButtonGroup/>);
    expect(buttonGroup.contains('Remove')).toEqual(true);
});

