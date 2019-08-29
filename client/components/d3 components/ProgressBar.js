import React, { Component } from 'react'

export default class ProgressBar extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         currentDate: Date.now()
    //     }
    // }

    componentDidUpdate (prevState, prevProps) {
        // We will need to call this to determine when progress bar will re-render
        // To avoid utter chaos
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        // Required props
        //  - Goal
        //      - Milestones
        //  - TargetDate(s)
        //  - Task(s) Completed?
        //  - CurrentDate

        return (
            <div>
                
            </div>
        )
    }
}

const RenderProgressBar = (canvas, dimensions, data) => {

    const svg = canvas
        .append('svg')
        .attr('width', )
}

const getDimensions = () => {
    return {
        width: parent.innerWidth
    }
}