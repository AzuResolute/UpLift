import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as d3 from 'd3'

class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    async componentDidUpdate (prevState, prevProps) {
        if (this.props.goal !== prevProps.goal) {
        const canvas = d3.select('#bar')
        await RenderD3ProgressBar(canvas, this.props.goal)
        }
    }

    render() {

        return (
            <div>
                <div id='bar'/>
            </div>
        )
    }
}

function RenderD3ProgressBar (canvas, data) {

    const width = Math.min(700, window.innerWidth * 0.8)
    const height = 50
    
    let svg = canvas
    .append('svg')
    .attr('height', height)
    .attr('width', width);

	svg.append('rect')
		.attr('class', 'bg-rect')
		.attr('rx', 10)
		.attr('ry', 10)
		.attr('fill', 'lightblue')
		.attr('height', height / 2 )
		.attr('width', width)
		.attr('x', 0);

	let progress = svg.append('rect')
        .attr('class', 'progress-rect')
        .attr('fill', 'green')
        .attr('height', height / 2)
        .attr('width', 0)
        .attr('rx', 10)
        .attr('ry', 10)
        .attr('x', 0);

	progress.transition()
		.duration(3000)
        .attr('width', () => {
            let currentDate = Date.now()
            let {startDate, targetDate} = data
            startDate = new Date(startDate).getTime()
            targetDate = new Date(targetDate).getTime()
            let timePassed = (currentDate - startDate) / (targetDate - startDate)
            return timePassed * width
        });
}

const mapStateToProps = state => ({
    goal: state.goal,
})

export default connect(mapStateToProps)(ProgressBar)