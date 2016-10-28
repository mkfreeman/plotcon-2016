import React from 'react';
import './main.css';
// List of bullet points, and previous / next buttons
var Site = React.createClass({
    render() {
        return(
            <div className="site-wrapper">
                <iFrame
                    style={{marginLeft:'5%', border:'1px solid #d3d3d3'}}
                    src={this.props.url}
                    width={this.props.width}
                    height={this.props.height}/>
                {this.props.twitterLink && (
                    <a className = 'twitterLink' target="_blank" href={this.props.twitterLink.url}>{this.props.twitterLink.handle}</a>
                )}
            </div>
        );
    }
});
export default Site
