import React, { Component } from 'react'
import {getGoalByUserMainThunk} from '../store'
import Countdown from 'countdown'
import ProgressBar from './d3 components/ProgressBar'
import {connect} from 'react-redux'

class CountdownComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: Date.now(),
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
        this.interval = setInterval(() => this.setState({ currentDate: Date.now() }), 1000)
        await this.props.onLoadGoalByUserMain(this.props.user.id)
      }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        if (this.state.goals.length === 0) {
            return <div/>
        }
        const {currentDate} = this.state
        const {goal} = this.props
        const {message, targetDate, title, startDate} = goal
        return (
            <div className="countdown-container text-center">
                <div className="row ">
                    <div className="intro col-md-12">
                        <p id='countdown-title'>{title}</p>
                        <p>{message}</p>
                        <p>Target Day: {new Date(targetDate).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="clock col-md-12">
                        <p id='countdown'>{Countdown(new Date(targetDate)).toLocaleString()}</p>
                        {/* Create D3js progress bar here */}
                        <p>{Countdown(new Date(startDate), Date.now(), Countdown.DAYS).toString()} has passed</p>
                        <p>{Countdown(new Date(targetDate), null, Countdown.DAYS).toString()} to go!</p>
                    </div>
                </div>
                {goal ? <ProgressBar goal={goal}/> : <div/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    goal: state.goal,
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    onLoadGoalByUserMain: async userId => {
        await dispatch(getGoalByUserMainThunk(userId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CountdownComp)