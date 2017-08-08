import React, {Component} from 'react';
import moment from 'moment-timezone';
import './App.css';

const LocaleClock = (props) => {
    return <section className="localeClock">
        <div className="time">{props.utc.tz(props.tz).format('HH:MM:ss')}</div>
        <p className="locationString">in {props.tz.split('/').join(' ')}</p></section>
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
        }
    }

    componentDidMount(){
        setInterval(()=>this.tick(),500);
    }

    tick(){
        this.setState({...this.state.timezones,currentTime:moment()})
    }

    render() {
        return (
            <div className="App">
                <h1>World Clocks</h1>
                <div className="currentTime">Current Local Time: {moment().format()}</div>
                {/*<h2>World Times:</h2>*/}
                <section className="clockGrid">
                    {this.state.timezones.map(tz => <LocaleClock key={tz} tz={tz} utc={this.state.currentTime}/>)}
                </section>
            </div>
        );
    }
}

export default App;
