import * as d3 from 'd3';

var circles = d3.range(0, 20).map((d,i) => window.innerWidth / 2)
var circles2 = d3.range(0, 20).map(function(d){
    // var center = window.innerWidth / 2
    var margin = window.innerWidth * .25
    var value = d % 2 == 1 ? margin : window.innerWidth - margin;
    return value
})

var data = [
        [],
        circles,
        circles,
        circles2,
    ];
var fills = ['#26a69a', '#26a69a', (d,i) => i % 2 == 1 ? '#26a69a' : 'rgb(215, 81, 89)', (d,i) => i % 2 == 1 ? '#26a69a' : 'rgb(215, 81, 89)'];

var duration = 500;
var delay = (d,i) => {return i * 100};
var ease = d3.easeLinear;
var r = 12;
var cx = (d) => d;
var cy = (d,i) => 15 + i * (window.innerHeight - 70)/20;

var Slide3 = {type:'bubbles',
                r:r,
                footerText:"What is Division?",
                ease:ease,
                data:data,
                shown:0,
                header:'Bubbles',
                cx:cx,
                fills:fills,
                cy:cy,
                delay:delay,
                duration:duration
            };
export default Slide3;
