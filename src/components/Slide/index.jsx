import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../Title';
import Bubbles from '../Bubbles';
import Markdown from '../Markdown';
import Network from '../Network';
import * as d3 from 'd3';

// List of bullet points, and previous / next buttons
var Slide = React.createClass({
    handleKeyPress(direction) {
        if(direction == "backward") {
            this.props.lastPoint();
        } else if(direction == "forward") {
            this.props.nextPoint();
        }
    },
    componentDidMount() {
        window.onkeydown = function(e) {
            var key = e.keyCode ? e.keyCode : e.which;
            if(key == 39 | key == 32 | key == 13) this.handleKeyPress('forward');
            else if(key == 37) this.handleKeyPress('backward');
        }.bind(this);
    },
    render() {
        var currentData = this.props.data[this.props.shown];

        // Figure out what to show
        switch(this.props.type) {
            case 'markdown':
                var component = <Markdown text={this.props.markdown}></Markdown>
                break;
            case 'iframe':
                var component = <iFrame src={this.props.iframe} width={window.innerWidth} height={window.innerHeight}/>
                break;
            case 'title':
                var component = <Title title = {this.props.header} subtitle={this.props.subtitle}/>
                break;
            case 'network':
                var component = <Network data={currentData} duration={1500} width={window.innerWidth} height={window.innerHeight}/>
                break;
            case 'bubbles':
                var component = <Bubbles
                                    duration={4000}
                                    data={currentData}
                                    width={window.innerWidth}
                                    ease={d3.easeBounceOut}
                                    height={window.innerHeight - 10} />
                break;
            default:
                component = <div />
        }
        return(
            <div onKeyDown={this.handleKeyPress}>
                {component}
            </div>
        );
    }
});
export default Slide
