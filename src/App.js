import React, {Component} from 'react';
import moment from 'moment-timezone';
// import shortid from 'shortid'; //comes in handy
import './App.css';

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

const ButtonGroup = (props) => {
    return <div
        className="buttonGroup">
        <button className="removeButton"
                onClick={() => props.remove(props.id)}>Remove
        </button>
        <button className="editButton"
                onClick={() => props.edit(props.id)}>Edit
        </button>
    </div>
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentTime: moment(),
            timezones: [
                'America/Los_Angeles',
                'Asia/Jerusalem',
                'America/New_York',
                'Europe/Kiev',
                'Europe/Berlin',
                'Australia/Sydney'
            ]
        };
        this.editClock = this.editClock.bind(this);
        this.removeClock = this.removeClock.bind(this);
    }

    componentDidMount() {
        setInterval(() => this.tick(), 500);
    }

    tick() {
        this.setState({...this.state.timezones, currentTime: moment()})
    }

    editClock(key) {
        // console.log('attempted edit of ',key);
        let newTZ = prompt('Please Enter a new Timezone', 'Asia/Omsk');
        this.setState({
            ...this.state.currentTime,
            ...this.state.timezones.splice(key, 1, newTZ)
        })
    }

    removeClock(key) {
        // console.log('request to remove: ', key, 'received')
        this.setState({...this.state.currentTime,...this.state.timezones.splice(key,1)})
    }

    render() {
        return (
            <div className="App">
                <h1>World Clocks</h1>
                <div className="currentTime">Current Local Time: {moment().format()}</div>
                <section className="clockGrid">
                    {this.state.timezones.map((tz, index) => <LocaleClock key={index}
                                                                          id={index}
                                                                          tz={tz}
                                                                          utc={this.state.currentTime}
                                                                          edit={this.editClock}
                                                                          remove={this.removeClock} />)}
                </section>
            </div>
        );
    }
}

export default App;
