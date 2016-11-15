var bounceCode = '\
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
    \n\
    export function bounceOut(t) {\n\
        return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;\n\
    }\n\
    ';
var Slide8 = {type:'markdown', srcLink:{text:'d3 source', url:'https://github.com/d3/d3-ease/blob/master/src/bounce.js#L12'},footerText:'Bouncing: Algorithm', data:[], shown:0, markdown:bounceCode};
export default Slide8;
