// Two reducers
import React from 'react';
import {combineReducers, createStore} from "redux";
import * as d3 from 'd3';
import SlideData from '../data';

var slideShowState = {
    slides:Object.keys(SlideData).map((d) => SlideData[d]),
    currentSlide:0,
    getCurrentSlide:function() {
        return Object.assign({}, this.slides[this.currentSlide]);
    }
}
// SlideShow reducer
var slideShowReducer = function(state = slideShowState, action) {
    switch(action.type) {
        case 'NEXT_SLIDE':
            return {...state, currentSlide: state.currentSlide + 1};
            break;
        case 'LAST_SLIDE':
            return {...state, currentSlide: state.currentSlide - 1}
            break;
        case 'NEXT_POINT':
            var slides = state.slides;
            // Go to next slide (test if all points already done AND not on last slide
            if(slides[state.currentSlide].shown >= slides[state.currentSlide].data.length -1 && state.currentSlide < state.slides.length -1 ) {
                return {...state, currentSlide: state.currentSlide + 1};
            } else if(slides[state.currentSlide].shown < slides[state.currentSlide].data.length){
                slides[state.currentSlide].shown += 1;
                return {...state, slides:slides}
            } else {
                return state;
            }
            break;
        case 'LAST_POINT':
            var slides = state.slides;
            // Go to previous slide
            if(slides[state.currentSlide].shown == 0 && state.currentSlide != 0) {
                return {...state, currentSlide: state.currentSlide - 1};
            } else if (slides[state.currentSlide].shown != 0){
                slides[state.currentSlide].shown += -1;
                return {...state, slides:slides}
            } else {
                return state;
            }
            break;
        default:
            return state;
            break;
    };
};
// Combine reducers (currently only one
var reducers = combineReducers({slideShowReducer});
export default reducers;
