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
var Slide8 = {type:'markdown', footerText:'Bouncing: Algorithm', data:[], shown:0, markdown:bounceCode};
export default Slide8;
