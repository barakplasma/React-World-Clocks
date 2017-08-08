import React, {Component} from 'react';
import ButtonGroup from './ButtonGroup.js';

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

export default LocaleClock