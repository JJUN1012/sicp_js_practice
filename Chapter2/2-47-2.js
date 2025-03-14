//2.47-2
function make_vect(x, y) {
    return pair(x, y);
}

function make_frame(origin, edge1, edge2){
    return pair(origin, pair(edge1, edge2));
}

function frame_origin(frame){
    return head(frame);
}

function frame_edge1(frame){
    return head(tail(frame));
}
function frame_edge2(frame){
    return tail(tail(frame));
}

const my_origin = make_vect(1, 2);
const my_edge_1 = make_vect(3, 4);
const my_edge_2 = make_vect(5, 6);
const my_frame = make_frame(my_origin, my_edge_1, my_edge_2);
frame_edge2(my_frame);
