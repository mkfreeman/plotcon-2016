import React from 'react';
import Highlight from 'react-highlight';
import '../../../node_modules/highlight.js/styles/atelier-forest-light.css'
import './main.css';

// Markdown
var Markdown = React.createClass({
    render() {
        return(
            <div className="markdown-wrapper">
                <Highlight language="javascript">{this.props.text}</Highlight>
            </div>
        )
    }
});
export default Markdown
