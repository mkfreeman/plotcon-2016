var bendingCode = "\
let curve = 'M ' + x + ', ' + yStart;\n\
\n\
// Calculate string for path\n\
while(x < this.props.width){\n\
	iter ++;\n\
	x += xDiff;\n\
	let y = yStart;\n\
	let anchorX = x - xAnchorDiff;\n\
	let anchorY = y + yAnchorDiff *  Math.pow(-1, iter);\n\
	let anchorY2 = yStart2 + yAnchorDiff *  Math.pow(-1, iter);\n\
	curve += ' Q ' + anchorX + ',' + anchorY + ' ' + x + ',' + y\n\
}\n\
\n\
// Append path\n\
this.g.append('path').attr('d',curve);\n\
";

var Slide19 = {type:'markdown', srcLink:{text:'Gooey Tutorial', url:'\http://www.visualcinnamon.com/2015/05/gooey-effect.html'},footerText:'Gooey-Effect: Algorithm', data:[], shown:0, markdown:bendingCode};
export default Slide19;
