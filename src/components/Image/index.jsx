import React from 'react';
import './main.css';
// List of bullet points, and previous / next buttons
var Image = React.createClass({
    render() {
        return(
            <div className="image-wrapper">
                <img src={this.props.src} style={{maxWidth:this.props.width, maxHeight:this.props.height}} />
            </div>
        );
    }
});
export default Image;
