import React, {Component} from 'react';
import moment from 'moment-timezone';
import shortid from 'shortid';
import './App.css';

const LocaleClock = (props) => {
    return <section className="localeClock">
        <div className="time">
            {props.utc.tz(props.tz).format('HH:MM:ss')}
        </div>
        <p className="locationString">
            {props.tz.split('/').pop().split('_').join(' ')}
        </p>
        <ButtonGroup tz={props.tz} edit={props.edit}/>
    </section>
};

const ButtonGroup = (props) => {
    return <div key={shortid.generate()} className="buttonGroup">
        <button className="removeButton">Remove</button>
        <button className="editButton" onClick={()=>props.edit(props.tz)}>Edit</button>
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
    }

    componentDidMount() {
        setInterval(() => this.tick(), 500);
    }

    tick() {
        this.setState({...this.state.timezones, currentTime: moment()})
    }

    editClock(key){
        // console.log('attempted edit of ',key);
        let newTZ = prompt('Please Enter a new Timezone','Asia/Omsk');
        this.setState({...this.state.currentTime,
        ...this.state.timezones.splice(this.state.timezones.findIndex(tz=>tz===key),1,newTZ)})
    }

    render() {
        return (
            <div className="App">
                <h1>World Clocks</h1>
                <div className="currentTime">Current Local Time: {moment().format()}</div>
                {/*<h2>World Times:</h2>*/}
                <section className="clockGrid">
                    {this.state.timezones.map(tz => <LocaleClock key={shortid.generate()}
                                                                 tz={tz}
                                                                 utc={this.state.currentTime}
                                                                 edit={this.editClock}
                                                                 remove={console.log} />)}
                </section>
            </div>
        );
    }
}

export default App;
