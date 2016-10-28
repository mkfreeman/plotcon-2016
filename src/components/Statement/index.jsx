import React from 'react';
import './main.css';
// List of bullet points, and previous / next buttons
var Statement = React.createClass({
    render() {
        return(
            <div className="statement-wrapper">
                <div className = "statement-body">
                    <h1>{this.props.text}</h1>
                </div>
            </div>
        );
    }
});
export default Statement
