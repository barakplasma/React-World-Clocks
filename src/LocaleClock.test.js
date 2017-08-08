import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render} from 'enzyme';
import {expect} from 'chai';

import moment from 'moment-timezone';

import LocaleClock from './LocaleClock.js';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LocaleClock key="1"
                                 id="1"
                                 tz="Asia/Omsk"
                                 utc={moment()} />, div);
});

it.skip('shows edit button', () => {
    const LocaleClock = render(<LocaleClock key="1"
                                             id="1"
                                             tz="Asia/Omsk"
                                             utc={moment()} />);
    expect(LocaleClock.contains(':')).toEqual(true);
});

it('shows time properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LocaleClock key="1"
                                 id="1"
                                 tz="Asia/Omsk"
                                 utc={moment()} />, div);
    const time = div.querySelector('.time').innerHTML;
    console.log(time);
    expect(time).to.include(':');
    expect(time.length).to.be.above(7);
});