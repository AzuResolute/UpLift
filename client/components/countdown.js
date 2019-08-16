import React, { Component } from 'react'

export default class Countdown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'You\'re almost there, Jan. Hold on baby ko...'
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
            </div>
        )
    }
}
