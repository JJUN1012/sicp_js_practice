function pair(x, y){
    return m => m(x, y);
}
function head(z){
    return z((p, q) => p);
}
function tail(z){
    return z((p, q) => q);
}
/*
head(pair(x, y)) -> head(m => m(x, y)) -> (m => m(x, y))((p, q) => q)
-> ((p, q) => q)(x, y) -> x
*/

const pair1 = pair(3, 5);
display(head(pair1));
display(tail(pair1));