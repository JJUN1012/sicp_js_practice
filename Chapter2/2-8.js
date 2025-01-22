function make_interval(x, y){ return pair(x, y);}

function lower_bound(interval){return head(interval);}
function upper_bound(interval){return tail(interval);}

function sub_interval(x, y){
    return make_interval(lower_bound(x) - upper_bound(y),
            upper_bound(x) - lower_bound(y));
}

//tester
function display_interval(interval){
    return "[" + stringify(lower_bound(interval)) + ", "
        + stringify(upper_bound(interval)) + "]";
}

display_interval(sub_interval(make_interval(10, 34), make_interval(2, 8)));