import React, { Component } from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'

export default class Countdown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'You\'re almost there, Jan. Hold on baby ko...',
            targetTitle: 'Freedom from NYCRN',
            targetDate: '10-17-2019',
            'sub-goal': [
                {
                    message: 'You\'re about to hang in your resignation yay!',
                    targetTitle: 'Road to 4 weeks',
                    targetDate: '09-10-2019'
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="countdown-container">
                <div className="row ">
                    <div className="intro col-md-12">
                        <p>You're almost there, Jan. Hold on baby ko...</p>
                    </div>
                </div>
                <div className="row">
                    {/* Place Countdown elements here */}
                </div>
            </div>
        )
    }
}
