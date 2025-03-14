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

const frame_outline = segments_to_painter(list(
                        make_segment(make_vect(0, 0), make_vect(1, 0)),
                        make_segment(make_vect(1, 0), make_vect(0, 1)),
                        make_segment(make_vect(1, 1), make_vect(-1, 0)),
                        make_segment(make_vect(0, 1), make_vect(0, -1))));
                        
display("frame_outline");
display(frame_outline(unit_frame));
display("---------------------");

const xline = segments_to_painter(list(
                make_segment(make_vect(0, 0), make_vect(1, 1)),
                make_segment(make_vect(0, 1), make_vect(-1, 0))));
                
display("Xline");
display(xline(unit_frame));
display("---------------------");
                        
const diamond = segments_to_painter(list(
                make_segment(make_vect(0.5, 0), make_vect(0.5, 0.5)),
                make_segment(make_vect(1, 0.5), make_vect(-0.5, 0.5)),
                make_segment(make_vect(0.5, 1), make_vect(-0.5, -0.5)),
                make_segment(make_vect(0, 0.5), make_vect(0.5, -0.5))));
                
display("diamond");
display(diamond(unit_frame));

