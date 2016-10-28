import React from 'react';
import * as d3 from 'd3';

// Bubbles
var Bubbles = React.createClass({

    // Setup on mount
    componentDidMount () {
        this.setUp();
    },

    // Bind initial g element
    setUp () {
        this.g = d3.select(this.root).append("g");
        this.update();
    },

    // Update on new props
    componentWillReceiveProps (props){
        console.log('bubble props ', props)
        this.props = props;
        this.update();
    },
    // Bind data using D3
    update() {
        var ease = this.props.ease;

        // Set scales
        // var xMin = d3.min(this.props.data, (d) => d.x)
        // var xMax = d3.max(this.props.data, (d) => d.x)
        // var xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, this.props.width])
        //
        // var yMin = d3.min(this.props.data, (d) => d.y)
        // var yMax = d3.max(this.props.data, (d) => d.y)
        // var yScale = d3.scaleLinear().domain([yMin, yMax]).range([this.props.height, 0])
        //
        // Data join, returns updating elements
        var bubbles = this.g.selectAll('.bubble').data(this.props.data);
        // Entering element, merged with updating elements
        console.log('delay ' , this.props.delay, this.props.ease)
        bubbles.enter().append("circle")
                    .attr('class', 'bubble')
                    .attr('fill', '#26a69a')
                    .attr("cx", this.props.cx)
                    .attr("cy", this.props.cy)
                    .attr('r', 0)
                    // Merge in updating elements
                    .merge(bubbles)
                    .transition()
                    .delay(this.props.delay)
                    .duration(this.props.duration)
                    .ease(this.props.ease)
                    .attr("cx", this.props.cx)
                    .attr("cy", this.props.cy)
                    .attr('r', 5)

        bubbles.exit().remove();
    },
    render() {
        return(
            <svg width={this.props.width}
                height={this.props.height}
                ref={(node) => { this.root = node;}} />
        );
    }
});
export default Bubbles
