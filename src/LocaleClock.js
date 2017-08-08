import React from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';

import ButtonGroup from './ButtonGroup.js';
import './LocaleClock.css';

const propTypes = {
    tz: PropTypes.string,
    id: PropTypes.number,
};

const defaultProps = {
    tz: 'Asia/Jerusalem',
    id: 1,
    utc: moment()
};

const LocaleClock = (props) => {
    return <section className="localeClock">
        <div className="time">
            {props.utc.tz(props.tz).format('HH:MM:ss')}
        </div>
        <p className="locationString">
            {props.tz.split('/').pop().split('_').join(' ')}
        </p>
        <ButtonGroup tz={props.tz}
                     id={props.id}
                     edit={props.edit}
                     remove={props.remove} />
    </section>
};

LocaleClock.propTypes = propTypes;
LocaleClock.defaultProps = defaultProps;
LocaleClock.contextTypes = propTypes;


export default LocaleClock;