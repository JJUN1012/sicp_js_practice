function make_vect(xcor, ycor){
    return pair(xcor, ycor);
}
function xcor_vect(vect){
    return head(vect);
}
function ycor_vect(vect){
    return tail(vect);
}
function add_vect(v1, v2){
    return make_vect(xcor_vect(v1) + xcor_vect(v2), ycor_vect(v1) + ycor_vect(v2));
}
function sub_vect(v1, v2){
    return make_vect(xcor_vect(v1) - xcor_vect(v2), ycor_vect(v1) - ycor_vect(v2));
}
function scale_vect(s,v){
    return make_vect(s * xcor_vect(v), s * ycor_vect(v));
}
function make_frame(origin, edge1, edge2){
    return pair(origin, pair(edge1, edge2));
}

function origin_frame(frame){
    return head(frame);
}

function edge1_frame(frame){
    return head(tail(frame));
}
function edge2_frame(frame){
    return tail(tail(frame));
}

function frame_coord_map(frame) {
    return v => add_vect(origin_frame(frame), 
                         add_vect(scale_vect(xcor_vect(v), 
                                             edge1_frame(frame)), 
                                  scale_vect(ycor_vect(v), 
                                             edge2_frame(frame))));
}
function draw_line(v_start, v_end) {
    display("line starting at");
    display(v_start);
    display("line ending at");
    display(v_end);
}
function segments_to_painter(segment_list) {
    return frame => 
             for_each(segment =>
                        draw_line(
                            frame_coord_map(frame)
                                (start_segment(segment)), 
                            frame_coord_map(frame)
                                (end_segment(segment))), 
                      segment_list);
}
function transform_painter(painter, origin, corner1, corner2) {
    return frame => {
             const m = frame_coord_map(frame);
             const new_origin = m(origin);
             return painter(make_frame(
                                new_origin,
                                sub_vect(m(corner1), new_origin),
                                sub_vect(m(corner2), new_origin)));
           };
}
function make_segment(sv, ev){
    return pair(sv, ev);
}
function start_segment(s){
    return head(s);
}
function end_segment(s){
    return add_vect(head(s), tail(s));
}

const unit_frame = make_frame(make_vect(0, 0), make_vect(1, 0), make_vect(0, 1));

function flip_vert(painter) {
    return transform_painter(painter,
                             make_vect(0, 1),
                             make_vect(1, 1), 
                             make_vect(0, 0)); 
}
function flip_horiz(painter){
    return transform_painter(painter,
                             make_vect(1, 0),
                             make_vect(0, 0),
                             make_vect(0, 1));
}
function rotate90(painter) {
    return transform_painter(painter,
                             make_vect(1, 0),
                             make_vect(1, 1),
                             make_vect(0, 0));
}
function rotate270(painter) {
    return transform_painter(
               painter, 
               make_vect(0, 1), 
               make_vect(0, 0), 
               make_vect(1, 0)); 
}

function beside(painter1, painter2) {
    const split_point = make_vect(0.5, 0);
    const paint_left  = transform_painter(painter1,
                                          make_vect(0, 0),
                                          split_point,
                                          make_vect(0, 1));
    const paint_right = transform_painter(painter2,
                                          split_point,
                                          make_vect(1, 0),
                                          make_vect(0.5, 1));
    return frame => {
               paint_left(frame);
               paint_right(frame);
           };
}

function below(painter1, painter2){
    const split_point = make_vect(0, 0.5);
    const paint_bottom = transform_painter(painter1, make_vect(0, 0), make_vect(1, 0), split_point);
    const paint_top = transform_painter(painter2, split_point, make_vect(1, 0.5), make_vect(0, 1));
    return frame => {
        paint_bottom(frame);
        paint_top(frame);
    };
}




const x_painter = segments_to_painter(
                              list(make_segment(make_vect(0, 0), make_vect(1, 1)), 
                                   make_segment(make_vect(1, 0), make_vect(-1, 1))));
                                   
display(below(x_painter, x_painter)(unit_frame));

function below2(painter1, painter2){//I don't know why this function make different return.
    return rotate90(beside(rotate270(painter1), rotate270(painter1)));
}
display("=====");
display(below2(x_painter, x_painter)(unit_frame));
