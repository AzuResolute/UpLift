import React, { Component } from 'react'
import d3 from 'd3'

export default class ProgressBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentDate: Date.now()
        }
    }

    // componentDidUpdate (prevState, prevProps) {
    //     // We will need to call this to determine when progress bar will re-render
    //     // To avoid utter chaos
    // }

    // shouldComponentUpdate() {
    //     return false
    // }

    async componentDidMount() {
        let canvas = document.getElementById('canvas')
        await RenderD3ProgressBar(canvas)
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
                <div id='canvas'/>
            </div>
        )
    }
}

function RenderD3ProgressBar (canvas) {

    const width = Math.min(700, window.innerWidth * 0.8)
    const height = 200

    
    // const scaling = d3
    //     .scaleLinear()
    //     .domain([0, data.target.startDate])
    //     .range([width, data.target.endDate])


    var svg = d3.select(canvas)
		.append('svg')
		.attr('height', height)
		.attr('width', width);

	var states = ['started', 'inProgress', 'completed'],
	    segmentWidth = 100,
		currentState = 'started';

	var colorScale = d3.scale.ordinal()
		.domain(states)
		.range(['yellow', 'orange', 'green']);

	svg.append('rect')
		.attr('class', 'bg-rect')
		.attr('rx', 10)
		.attr('ry', 10)
		.attr('fill', 'gray')
		.attr('height', 15)
		.attr('width', function(){
			return segmentWidth * states.length;
		})
		.attr('x', 0);

	var progress = svg.append('rect')
					.attr('class', 'progress-rect')
					.attr('fill', function(){
						return colorScale(currentState);
					})
					.attr('height', 15)
					.attr('width', 0)
					.attr('rx', 10)
					.attr('ry', 10)
					.attr('x', 0);

	progress.transition()
		.duration(1000)
		.attr('width', function(){
			var index = states.indexOf(currentState);
			return (index + 1) * segmentWidth;
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
