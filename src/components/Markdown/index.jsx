import React from 'react';
import Highlight from 'react-highlight';
import '../../../node_modules/highlight.js/styles/tomorrow-night-blue.css'

// Markdown
var Markdown = React.createClass({
    render() {
        return(<Highlight language="javascript">{this.props.text}</Highlight>)
    }
});
export default Markdown
