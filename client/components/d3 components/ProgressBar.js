import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as d3 from 'd3'

class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            milestones: []
        }
    }

    shouldComponentUpdate() {
        if(this.state.milestones.length === 0) {
            return true
        }
        else return false
    }

    componentDidUpdate = async (prevState, prevProps) => {
        let {goal} = this.props
        if (goal !== prevProps.goal) {
            let milestonesArr = this.setMilestones(goal)
            console.log(this.state)
            const canvas = d3.select('#bar')
            await RenderD3ProgressBar(canvas, goal)
        }
    }

    setMilestones = (goal) => {
        console.log('initial goal ---> ', goal)
        let milestonesArray = [
            {
                name: 'Start!',
                date: goal.startDate
            }
        ]
        goal.milestone.map(ms => {
            milestonesArray.push({
                name: ms.title,
                date: ms.targetDate
            })
        })
        milestonesArray.push({
            name: goal.title,
            date: goal.targetDate
        })
        this.setState({
            milestones: milestonesArray
        })
        return milestonesArray
    }

    render() {
        const {goal} = this.props
        if(!goal.title) {
            return <div />
        }
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
    
    if(document.getElementById('bar').childNodes.length > 0){
        document.getElementById('bar').removeChild(
            document.getElementById('bar').childNodes[0]
        )
    }

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