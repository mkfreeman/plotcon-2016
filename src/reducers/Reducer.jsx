// Two reducers
import React from 'react';
import {combineReducers, createStore} from "redux";
import * as d3 from 'd3';

var networkCode = '{\n\
    name:"Concept",\n\
    children:[\n\
        {\n\
            name:"Idea 1",\n\
            children:[\n\
                {name:"Data Structure 1"},\n\
                {name:"Data Structure 2"}\n\
            ]\n\
        },\n\
        {\n\
            name:"Idea 2",\n\
            children:[\n\
                {name:"Data Structure 1"},\n\
                {name:"Data Structure 2"}\n\
            ]\n\
        }\n\
    ]\n\
};\n\
'
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
    return window.innerHeight - 55;
});


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

var bubbleData = {
    data:[
        bubbles1,
        bubbles2,
    ],
    fills:['#26a69a', '#26a69a'],
    duration:5000,
    delay:(d,i) => {return Math.random() * 100 * 5000 / 500},
    ease:d3.easeBounce,
    cx:(d,i) => i * 20,
    cy:(d, i) => d,
    r:7
}

var circles = d3.range(0, 20).map((d,i) => window.innerWidth / 2)
var circles2 = d3.range(0, 20).map(function(d){
    // var center = window.innerWidth / 2
    var margin = window.innerWidth * .25
    var value = d % 2 == 1 ? margin : window.innerWidth - margin;
    return value
})
var bubbleData2 = {
    data:[
        [],
        circles,
        circles,
        circles2,
    ],
    fills:['#26a69a', '#26a69a', (d,i) => i % 2 == 1 ? '#26a69a' : 'rgb(215, 81, 89)', (d,i) => i % 2 == 1 ? '#26a69a' : 'rgb(215, 81, 89)'],
    duration:500,
    delay:(d,i) => {return i * 100},
    ease:d3.easeLinear,
    r:12,
    fill:(d,i) => i % 2 == 1 ? '#26a69a' : '#26a69a',
    cx:(d) => d,
    cy:(d,i) => 15 + i * (window.innerHeight - 70)/20
}
var slideShowState = {
    slides:[
        {type:'title', data:[], shown:0, header:'Visualizing Concepts with D3.js', subtitle:'@mf_viz'},
        {type:'statement', data:[], shown:0, text:'What is division?'},
        {type:'bubbles', r:bubbleData2.r, footerText:"What is Division?", ease:bubbleData2.ease, data:bubbleData2.data, shown:0, header:'Bubbles',
            cx:bubbleData2.cx, fills:bubbleData2.fills, cy:bubbleData2.cy, delay:bubbleData2.delay, duration:bubbleData2.duration},
        {type:'statement', data:[], shown:0, text:'In order to visualize concepts, we need to identify an underlying data structure (and/or) algorithm'},
        {type:'network', footerText:'Mapping from Concepts to Data', data:[networkData0, networkData1, networkData2], shown:0},
        {type:'markdown', footerText:'Mapping from Concepts to Data: Data', data:[], shown:0, markdown:networkCode},
        {type:'bubbles', fills:bubbleData.fills, r:bubbleData.r, footerText:'Bouncing', ease:bubbleData.ease, data:bubbleData.data, shown:0, header:'Bubbles',
            cx:bubbleData.cx, cy:bubbleData.cy, delay:bubbleData.delay, duration:bubbleData.duration},
        {type:'markdown', footerText:'Bouncing: Algorithm', data:[], shown:0, markdown:bounceCode},
        {type:'site', footerText:'Central Limit Theorem', data: [], shown:0, header:'Slide 3', iframe:"http://mfviz.com/central-limit/"},
        {type:'site', footerText:'The Racial Divide', twitterLink:{handle:'@vlandingham', url:'https://twitter.com/vlandham'},data: [], shown:0, header:'Slide 3', iframe:"http://vallandingham.me/racial_divide/"},
        {type:'site', footerText:'Gooeyness', twitterLink:{handle:'@NadiehBremer', url:'https://twitter.com/NadiehBremer'},data: [], shown:0, header:'Slide 3', iframe:"http://mfviz.com/gooey/"},
        {type:'title', data:[], shown:0, header:'Thanks!', subtitle:'@mf_viz'},
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
