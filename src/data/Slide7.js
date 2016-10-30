import * as d3 from 'd3';

var bubbles1 = d3.range(1, 100).map(function(d) {
    return 10;
});

var bubbles2 = d3.range(1, 100).map(function(d) {
    return window.innerHeight - 55;
});

var data = [
    bubbles1,
    bubbles2,
];
var fills = ['#26a69a', '#26a69a'];

var duration = 5000;
var delay = (d,i) => {return Math.random() * 100 * 5000 / 500};
var ease = d3.easeBounce;
var r = 7;
var cx = (d,i) => i * 20;
var cy = (d, i) => d;

var Slide7 = {type:'bubbles',
                r:r,
                footerText:"Bouncing",
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
export default Slide7;
