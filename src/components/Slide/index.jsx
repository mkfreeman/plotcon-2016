import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../Title';
import Statement from '../Statement';
import Bubbles from '../Bubbles';
import Markdown from '../Markdown';
import Site from '../Site';
import Resources from '../Resources';
import Network from '../Network';
import Image from '../Image';
import * as d3 from 'd3';
import './main.css';

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
            console.log(e)
            var key = e.keyCode ? e.keyCode : e.which;
            if(key == 39 | key == 32 | key == 13 | e.code == "PageDown") this.handleKeyPress('forward');
            else if(key == 37 | e.code == "PageUp") this.handleKeyPress('backward');
        }.bind(this);
    },
    render() {
        var currentData = this.props.data[this.props.shown];
        if(this.props.fills) {
            var currentFill = this.props.fills[this.props.shown];
        }
        console.log('current Data ', this.props.data[this.props.shown])

        // Figure out what to show
        switch(this.props.type) {
            case 'markdown':
                var component = <Markdown text={this.props.markdown}></Markdown>
                break;
            case 'site':
                var component = <Site twitterLink={this.props.srcLink} url={this.props.iframe} width={window.innerWidth * .9} height={window.innerHeight - 80}/>
                break;
            case 'image':
                var component = <Image src={this.props.src} width={window.innerWidth * .9} height={window.innerHeight - 60}/>
                break;
            case 'title':
                var component = <Title title = {this.props.header} subtitle={this.props.subtitle}/>
                break;
            case 'statement':
                var component = <Statement text = {this.props.text}/>
                break;
            case 'network':
                var component = <Network data={currentData} duration={1500} width={window.innerWidth} height={window.innerHeight }/>
                break;
            case 'resources':
                console.log('resources!')
                var component = <Resources data={currentData} title={this.props.title}/>
                break;
            case 'bubbles':
                var component = <Bubbles
                                    duration={this.props.duration}
                                    data={currentData}
                                    width={window.innerWidth}
                                    ease={this.props.ease}
                                    cx={this.props.cx}
                                    cy={this.props.cy}
                                    r={this.props.r}
                                    fill={currentFill}
                                    delay={this.props.delay}
                                    height={window.innerHeight - 10} />
                break;
            default:
                component = <div />
        }
        return(
            <div onKeyDown={this.handleKeyPress}>
                {component}
                {this.props.footerText &&
                   <footer><div>{this.props.footerText}</div></footer>
                }
                {this.props.srcLink && (
                    <a className = 'srcLink' target="_blank" href={this.props.srcLink.url}>{this.props.srcLink.text}</a>
                )}
            </div>
        );
    }
});
export default Slide
