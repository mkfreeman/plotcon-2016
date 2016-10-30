import React from 'react';
import './main.css';
// List of bullet points, and previous / next buttons
var Statement = React.createClass({
    render() {
        return(
            <div className="statement-wrapper">
                <div className = "statement-body" dangerouslySetInnerHTML = {{__html:this.props.text}}>
                </div>
            </div>
        );
    }
});
export default Statement
