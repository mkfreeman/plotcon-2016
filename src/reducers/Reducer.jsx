// Two reducers
import React from 'react';
import {combineReducers, createStore} from "redux";
import * as d3 from 'd3';

var bounceCode = '\
    var x = "1";\n\
    var b1 = 4 / 11,\n\
    b2 = 6 / 11,\n\
    b3 = 8 / 11,\n\
    b4 = 3 / 4,\n\
    b5 = 9 / 11,\n\
    b6 = 10 / 11,\n\
    b7 = 15 / 16,\n\
    b8 = 21 / 22,\n\
    b9 = 63 / 64,\n\
    b0 = 1 / b1 / b1;\n\
    export function bounceIn(t) {\n\
        return 1 - bounceOut(1 - t);\n\
    }\n';

var bubbles1 = d3.range(1, 100).map(function(d) {
    return 10;
});

var bubbles2 = d3.range(1, 100).map(function(d) {
    return 500;
});

var bubblesData = [
    {bubbleData:bubbles1},
    {bubbleData:bubbles2},
];



var networkData0  = {
    name:'Concept'
};

var networkData1  = {
    name:'Concept',
    children:[
        {name:'Idea 1'},
        {name:'Idea 2'}
    ]
};

var networkData2 = {
    name:'Concept',
    children:[
        {
            name:'Idea 1',
            children:[
                {name:'Data Structure 1'},
                {name:'Data Structure 2'}
            ]
        },
        {
            name:'Idea 2',
            children:[
                {name:'Data Structure 1'},
                {name:'Data Structure 2'}
            ]
        }
    ]
};
var slideShowState = {
    slides:[
        // {type:'title', data:[], shown:0, header:'Title', subtitle:'@mf_viz'},
        {type:'network', data:[networkData0, networkData1, networkData2], shown:0},
        {type:'bubbles', data:bubblesData, shown:0, header:'Bubbles'},
        {type:'markdown', data:[], shown:0, markdown:bounceCode},
        {type:'iframe', data: [], shown:0, header:'Slide 3', iframe:"http://mfviz.com/central-limit/"}
    ],
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
            if(slides[state.currentSlide].shown == slides[state.currentSlide].data.length && state.currentSlide < state.slides.length -1 ) {
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
