import React from 'react';
import './main.css';
// List of bullet points, and previous / next buttons
var Title = React.createClass({
    render() {
        return(
            <div className="title-wrapper">
                <div className = "title-body">
                    <h1>{this.props.title}</h1>
                    <hr className="title-divider"/>
                    <h2>{this.props.subtitle}</h2>
                </div>
            </div>
        );
    }
});
export default Title
