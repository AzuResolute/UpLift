import React, { Component } from 'react'
import * as d3 from 'd3'

export default class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                title: 'Freedom from NYCRN',
                message: 'You\'re almost there, Jan. Hold on baby ko...',
                startDate: new Date(2018, 10, 6),
                targetDate: new Date(2019, 9, 16),
                mainGoal: true,
                userId: 1
            }
        }
    }

    // async componentDidUpdate (prevState, prevProps) {
    //     // We will need to call this to determine when progress bar will re-render
    //     // To avoid utter chaos

    // }

    // shouldComponentUpdate() {
    //     return false
    // }

    async componentDidMount() {
        const canvas = d3.select('#bar')
        await RenderD3ProgressBar(canvas, this.state.data)
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
                <select className="progressSelector" onChange="moveProgressBar(value)">
                    <option value="started" selected>Started</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <div id='bar'/>
            </div>
        )
    }
}

function RenderD3ProgressBar (canvas, data) {

    const width = Math.min(700, window.innerWidth * 0.8)
    const height = 200

    console.log('start ---> ', data.startDate.getTime())
    console.log('end -----> ', data.targetDate.getTime())

    
    
    
    let svg = canvas
    .append('svg')
    .attr('height', height)
    .attr('width', width);
    
	let states = ['started', 'inProgress', 'completed'],
    segmentWidth = 100,
    currentState = 'started';

    // const dataScaling = d3
    //     .scaleLinear()
    //     .domain([0, data.startDate.getTime()])
    //     .range([1, data.targetDate.getTime()])

	let colorScale = d3.scaleOrdinal()
		.domain(states)
		.range(['yellow', 'orange', 'green']);

	svg.append('rect')
		.attr('class', 'bg-rect')
		.attr('rx', 10)
		.attr('ry', 10)
		.attr('fill', 'lightblue')
		.attr('height', 15)
		.attr('width', width)
		.attr('x', 0);

	let progress = svg.append('rect')
        .attr('class', 'progress-rect')
        .attr('fill', 'green')
        .attr('height', 15)
        .attr('width', 0)
        .attr('rx', 10)
        .attr('ry', 10)
        .attr('x', 0);

	progress.transition()
		.duration(1000)
        .attr('width', () => {
            let currentDate = Date.now()
            let {startDate, targetDate} = data
            let timePassed = (currentDate - startDate) / (targetDate - startDate)
            console.log(timePassed)
            console.log(timePassed)
            return timePassed * width
        });

    function moveProgressBar(state){
        progress.transition()
            .duration(1000)
            .attr('fill', function(){
                return colorScale(state);
            })
            .attr('width', function(){
                var index = states.indexOf(state);
                return (index + 1) * segmentWidth;
                });
    }
}
