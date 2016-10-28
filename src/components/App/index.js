import React from 'react';
import SlideShowWrapper from '../../containers/SlideShowWrapper';
import './main.css';

// App
var App = React.createClass({
    render(){
        console.log('render app')
        return(
            <SlideShowWrapper />
        )
    }
});

export default App;
