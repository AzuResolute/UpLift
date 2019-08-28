import React, { Component } from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import {getGoalByUserMainThunk} from '../store'
import Countdown from 'countdown'
import { connect } from 'http2';

class CountdownComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: Date.now(),
            goals: [
                {
                    message: 'You\'re almost there, Jan. Hold on baby ko...',
                    targetTitle: 'Freedom from NYCRN',
                    startDate: new Date(2018, 10, 6),
                    targetDate: new Date(2019, 9, 17),
                    'sub-goal': [
                        {
                            message: 'You\'re about to hang in your resignation yay!',
                            targetTitle: 'Road to 4 weeks',
                            targetDate:  new Date(2019, 8, 20)
                        }
                    ]
                }
            ]
        }
    }

    async componentDidMount() {
        this.interval = setInterval(() => this.setState({ currentTime: Date.now() }), 1000)
        await this.props.onLoadGoalByUserMain(1)
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    
    render() {
        if (this.state.goals.length === 0) {
            return <div/>
        }
        const {currentTime} = this.state
        const {message, targetDate, targetTitle, startDate} = this.state.goals[0]
        return (
            <div className="countdown-container text-center">
                <div className="row ">
                    <div className="intro col-md-12">
                        <p style={{'font-size': '2em'}}>{targetTitle}</p>
                        <p>{message}</p>
                        <p>Target Day: {targetDate.toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="clock col-md-12">
                        <p style={{'font-size': '1.75em'}}>{Countdown(targetDate).toString()}</p>
                        <p>{Countdown(startDate, Date.now(), Countdown.DAYS).toString()} has passed</p>
                        <p>{Countdown(targetDate, null, Countdown.DAYS).toString()} to go!</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    goal: state.goal
})

const mapDispatchToProps = dispatch => ({
    onLoadGoalByUserMain: async userId => {
        await dispatch(getGoalByUserMainThunk(userId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CountdownComp)