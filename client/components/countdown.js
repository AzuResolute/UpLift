import React, { Component } from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import Countdown from 'countdown'

export default class CountdownComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            time: Date.now(),
            message: 'You\'re almost there, Jan. Hold on baby ko...',
            targetTitle: 'Freedom from NYCRN',
            targetDate: new Date(2019, 9, 17),
            // 'sub-goal': [
            //     {
            //         message: 'You\'re about to hang in your resignation yay!',
            //         targetTitle: 'Road to 4 weeks',
            //         targetDate: '09-10-2019'
            //     }
            // ]
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    
    render() {
        const {message, targetDate, time} = this.state
        return (
            <div className="countdown-container text-center">
                <div className="row ">
                    <div className="intro col-md-12">
                        <p>{message}</p>
                        <p>Target Day: {targetDate.toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="clock col-md-12">
                        <p style={{'font-size': '4em'}}>{Countdown(targetDate).toString()}</p>
                        <p>{Countdown(new Date(2018, 10, 6), Date.now(), Countdown.DAYS).toString()} has passed</p>
                        <p>{Countdown(targetDate, null, Countdown.DAYS).toString()} to go!</p>
                    </div>
                </div>
            </div>
        )
    }
}
