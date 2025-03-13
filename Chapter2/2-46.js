function make_vet(xcor, ycor){
    return pair(xcor, ycor);
}
function xcor_vect(vect){
    return head(vect);
}
function ycor_vect(vect){
    return tail(vect);
}
function add_vect(v1, v2){
    return make_vet(xcor_vect(v1) + xcor_vect(v2), ycor_vect(v1) + ycor_vect(v2));
}
function sub_vect(v1, v2){
    return make_vet(xcor_vect(v1) - xcor_vect(v2), ycor_vect(v1) - ycor_vect(v2));
}
function scale_vect(s,v){
    return make_vet(s * xcor_vect(v1), s * ycor_vect(v2));
}