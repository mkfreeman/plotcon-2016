// SlideShowWrapper: connnect props to states
import React from 'react';
import {createStore} from 'redux';
import { connect } from 'react-redux';
import Slide from '../components/Slide';

// Map from state (of redux tree) to props (of child react elements)
var mapStateToProps = function(state) {
    return state.slideShowReducer.getCurrentSlide()
};

// Map from dispatch (redux actions that trigger reducers) to props (of child react elements)
var mapDispatchToProps = function(dispatch) {
    return {
        nextSlide:function() {
            dispatch({type:'NEXT_SLIDE'});
        },
        lastSlide:function() {
            dispatch({type:'LAST_SLIDE'});
        },
        nextPoint:function() {
            dispatch({type:'NEXT_POINT'});
        },
        lastPoint: function(){
            dispatch({type:'LAST_POINT'});
        }
    };
};

// Connect to BulletList
var SlideShowWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Slide);

export default SlideShowWrapper;
