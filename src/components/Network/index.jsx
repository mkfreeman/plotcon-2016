// Network diagram
// Largely derived from: http://stackoverflow.com/questions/38310768/d3-js-v4-wacky-link-transition-in-collapsible-tree-example
import React from 'react';
import './main.css';
import * as d3 from 'd3';

// Bubbles
var Network = React.createClass({
    // Setup on mount
    componentDidMount () {
        this.setUp();
        this.update();
    },

    // Bind initial g element, compute data structure
    setUp () {
        this.g = d3.select(this.root).append("g")
                    .attr("transform", "translate(0,30)");

        // Get tree root using hierarchy
        this.root = d3.hierarchy(this.props.data.network);

        //Assigning numerical Ids
        var i = 0;
        this.root.each(function(d) {
            d.id = d.data.name + i;
            i ++;
        });

        this.root.x0 = this.props.height / 2;
        this.root.y0 = 0;

        // Function to collapse tree
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }

        // Get tree layout from hierarchy
        var tree = d3.tree()
            .size([this.props.width, this.props.height]);

        this.nodes = tree(this.root).descendants();
    },
    componentWillReceiveProps (props){
        this.props = props;
        this.update();
    },
    update() {
        // Link connector function
        var connector = function(d) {
            return "M" + d.x + "," + d.y
               + "C" + d.x + "," + (d.y + d.parent.y) / 2
               + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
               + " " + d.parent.x + "," + d.parent.y;
        };

        // Filter nodes / links to current depth
        var nodes = this.nodes.filter((d) => d.depth < this.props.data.depth),
            links = nodes.slice(1);

        // Normalize for fixed-depth.
        nodes.forEach(function(d) { d.y = d.depth * this.props.height / 4; }.bind(this));

        // Update the nodes…
        var node = this.g.selectAll("g.node")
                    .data(nodes, function(d) {return d.id});

        // Enter any new nodes at the parent's position.
        var nodeEnter = node.enter().append("g")
                          .attr("class", "node")
                          .attr("transform", function(d) {
                              var x = d.parent === null ? d.x0 : d.parent.x;
                              var y = d.parent === null ? d.y0 : d.parent.y;
                              return "translate(" + x + "," + y + ")";
                          })

        // Append circle to node
        nodeEnter.append("circle")
            .attr("r", 1e-6)
            .style("fill", function(d) { return d._children ? "lightsteelblue" : "#d3d3d3"; });

        // Append text to node
        nodeEnter.append("text")
              .attr("x", function(d) { return -20})
              .attr("dy", ".35em")
              .attr("text-anchor",'end')
              .text(function(d) {return d.data.name; })
              .style("fill-opacity", 1e-6);

        // Transition nodes to their new position.
        var nodeUpdate = node.merge(nodeEnter).transition()
              .duration(this.props.duration)
              .attr("transform", function(d) {if(d.id == 'Data3'){console.log('data 3 x ', d.x)}; return "translate(" + d.x + "," + d.y + ")"; });

        nodeUpdate.select("circle")
              .attr("r", 14.5)
              .style("fill", function(d) { return d._children ? "lightsteelblue" : "#d3d3d3"; });

        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
              .duration(this.props.duration)
              .attr("transform", function(d) { return "translate(" + d.parent.x + "," + d.parent.y + ")"; })
              .remove();

        nodeExit.select("circle")
            .attr("r", 1e-6);

        nodeExit.select("text")
            .style("fill-opacity", 1e-6);


        // Update the links…
        var link = this.g.selectAll("path.link")
            .data(links, function(link) { var id = link.id + '->' + link.parent.id; return id; });

        // Transition links to their new position.
        link.transition()
              .duration(this.props.duration)
              .attr("d", connector);

        // Enter any new links at the parent's previous position.
        var linkEnter = link.enter().insert("path", "g")
                            .attr("class", "link")
                            .attr("d", function(d) {
                                var o = {x: d.parent.x, y: d.parent.y, parent:{x: d.parent.x, y: d.parent.y}};
                                return connector(o);
                            });

        // Transition links to their new position.
        link.merge(linkEnter).transition()
              .duration(this.props.duration)
              .attr("d", connector);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
              .duration(this.props.duration)
              .attr("d",  function(d) {
                var o = {x: d.parent.x, y: d.parent.y, parent:{x: d.parent.x, y: d.parent.y}};
                return connector(o);
              })
              .remove();

    },
    render() {
        return(
            <svg width={this.props.width}
                height={this.props.height}
                ref={(node) => { this.root = node;}} />
        );
    }
});
export default Network
