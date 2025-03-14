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

const my_vector_1 = make_vect(1, 2);
const my_vector_2 = make_vect(3, 4);
add_vect(my_vector_1, my_vector_2);
