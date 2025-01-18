function make_segment(a, b){return pair(a, b);}
function start_segment(x){return head(x);}
function end_segment(x){return tail(x);}
function make_point(x, y){return pair(x,y);}
function x_point(p){return head(p);}
function y_point(p){return tail(p);}

function midpoint_segment(s){
    const midpoint_x = (x_point(start_segment(s)) + x_point(end_segment(s))) / 2;
    const midpoint_y = (y_point(start_segment(s)) + y_point(end_segment(s))) / 2;
    return make_point(midpoint_x, midpoint_y);
}
const pointA = make_point(2.1,3.5);
const pointB = make_point(10.4,14.3);

const segmentA = make_segment(pointA, pointB);

midpoint_segment(segmentA);
