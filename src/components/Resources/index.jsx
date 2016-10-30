import React from 'react';
import './main.css';
// List of bullet points, and previous / next buttons
var Resources = React.createClass({
    render() {
        console.log(this.props.data)
        return(
            <div className="resources-wrapper">
                <div className = "resources-body">
                    <h1>{this.props.title}</h1>
                    {this.props.data.map(function(d){
                        return <h2>{d.text}: <a href={d.url} target="_blank">{d.url}</a></h2>
                    })}
                </div>
            </div>
        );
    }
});
export default Resources;
