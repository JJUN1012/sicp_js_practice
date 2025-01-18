function make_segment(a, b){return pair(a, b);}
function start_segment(x){return head(x);}
function end_segment(x){return tail(x);}
function make_point(x, y){return pair(x,y);}
function x_point(p){return head(p);}
function y_point(p){return tail(p);}
function square(x){return x * x;}

function make_rectangle(segment_base, height){
    return pair(segment_base, height);
}

function get_size_rectangle(r){
    return get_length_segment(head(r)) * tail(r);
}

function get_length_segment(s){
    const start_x = x_point(start_segment(s));
    const start_y = y_point(start_segment(s));
    const end_x = x_point(end_segment(s));
    const end_y = y_point(end_segment(s));
    return math_sqrt(square(end_x - start_x) + square(end_y - start_y));
}

function get_length_rectangle(r){
    return 2 * (get_length_segment(head(r)) + tail(r));
}