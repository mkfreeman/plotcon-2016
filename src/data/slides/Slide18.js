var gooeyCode = "\
//SVG filter for the gooey effect\n\
//Code taken from http://tympanus.net/codrops/2015/03/10/creative-gooey-effects/\n\
var defs = svg.append('defs');\n\
var filter = defs.append('filter').attr('id','gooey');\n\
\n\
// Append a blur-ing effect \n\
filter.append('feGaussianBlur')\n\
	.attr('in','SourceGraphic')\n\
	.attr('stdDeviation','10')\n\
	.attr('result','blur');\n\
\n\
// Append a color matrix to increase contrast (creating blob effect) \n\
filter.append('feColorMatrix')\n\
	.attr('in','blur')\n\
	.attr('mode','matrix')\n\
	.attr('values','1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7')\n\
	.attr('result','gooey');\n\
\n\
// Draw original graphics over effect\n\
filter.append('feComposite')\n\
	.attr('in','SourceGraphic')\n\
	.attr('in2','gooey')\n\
	.attr('operator','atop');\n\
";

var Slide18 = {type:'markdown', srcLink:{text:'Gooey Tutorial', url:'\http://www.visualcinnamon.com/2015/05/gooey-effect.html'},footerText:'Gooey-Effect: Algorithm', data:[], shown:0, markdown:gooeyCode};
export default Slide18;
