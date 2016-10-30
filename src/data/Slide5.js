import * as d3 from 'd3';
var networkData0  = {
    name:'Concept'
};

var networkData= {
    name:'Concept',
    children:[
        {
            name:'Idea',
            children:[
                {name:'Data',
                children:[
                    {name:'Algorithm'}
                ]},
                {name:'Data',
                children:[
                    {name:'Algorithm'},
                    {name:'Algorithm'}
                ]}
            ]
        },
        {
            name:'Idea',
            children:[
                {name:'Data', children:[
                    {name:'Algorithm'},
                    {name:'Algorithm'}
                ]},
                {name:'Data', children:[
                    {name:'Algorithm'}
                ]}
            ]
        }
    ]
};

var Slide5 = {type:'network',
              footerText:'Mapping from Concepts to Data',
              data:[{network:networkData, depth:1},
                    {network:networkData, depth:2},
                    {network:networkData, depth:3},
                    {network:networkData, depth:4}],
              shown:0
          };
export default Slide5;
