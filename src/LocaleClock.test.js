import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';

import moment from 'moment-timezone';

import LocaleClock from './LocaleClock.js';

const renderLocaleClock = (time=null) => {
    const div = document.createElement('div');
    ReactDOM.render(<LocaleClock key="1"
                                 id="1"
                                 tz="Asia/Omsk"
                                 utc={time?moment(time):moment()} />, div);
    return div;
};

const LocaleClockDriver = (DOMContainer) => ({
    getTimeAsString: () => DOMContainer.querySelector('.time').innerHTML
});

it('renders without crashing', () => {
    renderLocaleClock();
});

it('shows dynamic time properly', () => {
    const time = LocaleClockDriver(renderLocaleClock()).getTimeAsString();
    console.log(time);
    expect(time).to.include(':');
    expect(time.length).to.be.above(7);
    expect(time.split(':').length).to.equal(3);
});

it('shows static time properly', () => {
    const time = LocaleClockDriver(renderLocaleClock(1318874398806)).getTimeAsString();
    expect(time).to.eql('00:10:58');
});