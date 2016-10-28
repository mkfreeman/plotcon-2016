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
        this.props = props;
        this.update();
    },
    // Bind data using D3
    update() {
        var ease = this.props.ease;
        // Data join, returns updating elements

        var bubbles = this.g.selectAll('.bubble').data(this.props.data);
        // Entering element, merged with updating elements
        bubbles.enter().append("circle")
                    .attr('class', 'bubble')
                    .attr('fill', '#26a69a')
                    .attr("cx", (d,i) => i * 20)
                    .attr("cy", (d, i) => d)
                    .attr('r', 5)
                    // Merge in updating elements
                    .merge(bubbles)
                    .transition()
                    .delay((d,i) => {return Math.random() * 10 * this.props.duration / this.props.data.length})
                    .duration(this.props.duration)
                    .ease(ease)
                    .attr("cx", (d,i) => i * 20)
                    .attr("cy", (d, i) => d)
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
